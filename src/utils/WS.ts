import EventBus from './EventBus';
import { setMessages } from './Store/Actions';

class WebSocketMessages {
  static instance: WebSocketMessages;

  private eventBus: EventBus;

  socket: WebSocketMessages | null;

  static EVENTS = {
    OPEN: 'open',
    CLOSE: 'close',
    MESSAGE: 'message',
    ERROR: 'error',
    CONNECT: 'connect',
  };

  constructor(id, token, user) {
    WebSocketMessages.instance = this;

    this.eventBus = new EventBus();

    this.id = id;
    this.token = token;
    this.user = user;

    this.registerEvents();
    this.eventBus.emit(WebSocketMessages.EVENTS.CONNECT);
  }

  connect() {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.disconnect();
    }

    const WS_MESSAGES_URL = `wss://ya-praktikum.tech/ws/chats/${this.user}/${this.id}/${this.token}`;

    this.socket = new WebSocket(WS_MESSAGES_URL);

    this.socket.addEventListener('open', () => {
      this.eventBus.emit(WebSocketMessages.EVENTS.OPEN);

      // this.socket.send(
      //   JSON.stringify({
      //     content: 'Чат активирован',
      //     type: 'message',
      //   })
      // );
    });

    this.socket.addEventListener('close', (event) => {
      this.eventBus.emit(WebSocketMessages.EVENTS.CLOSE, [event]);
    });

    this.socket.addEventListener('message', (event) => {
      this.eventBus.emit(WebSocketMessages.EVENTS.MESSAGE, [event]);
    });

    this.socket.addEventListener('error', (event) => {
      this.eventBus.emit(WebSocketMessages.EVENTS.ERROR, [event]);
    });
  }

  disconnect() {
    this.socket?.close();
    this.socket = null;
  }

  onOpen() {
    this.getMessages();
  }

  onClose() {
    this.disconnect();
  }

  onMessage(event) {
    let data = JSON.parse(event.data);

    if (Array.isArray(data)) {
      data = data.filter(({ type }) => type === 'message').reverse();
      setMessages(data);
    }

    //1 - записать в стор список сообщений
    // записать в формате: activeChat -> messages -> user_id === current id ? '--self, content, time

    //     try {
    //       let data = JSON.parse(event.data);
    //       if (Array.isArray(data)) {
    //         data = data.filter(({ type }) => type === 'message').reverse();
    //       } else {
    //         if (data.type !== 'message') return;
    //         ACTIONS.addMessage(data);
    //         return;
    //       }
    //       ACTIONS.setMessages(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
  }

  onError(event) {
    console.error(event);

    this.disconnect();
  }

  sendMessage(content) {
    this.socket?.send(JSON.stringify({ content, type: 'message' }));
  }

  getMessages() {
    this.socket?.send(JSON.stringify({ content: '0', type: 'get old' }));
  }

  private ping() {
    this.socket?.send(JSON.stringify({ type: 'ping' }));
  }

  private registerEvents() {
    this.eventBus.on(WebSocketMessages.EVENTS.OPEN, this.onOpen.bind(this));
    this.eventBus.on(WebSocketMessages.EVENTS.CLOSE, this.onClose.bind(this));
    this.eventBus.on(
      WebSocketMessages.EVENTS.MESSAGE,
      this.onMessage.bind(this)
    );
    this.eventBus.on(WebSocketMessages.EVENTS.ERROR, this.onError.bind(this));
    this.eventBus.on(WebSocketMessages.EVENTS.CONNECT, this.connect.bind(this));
  }
}

// const WS = () => {
//   const { id, token } = getChatProperties();
//   const user = getUserId().id;

//   const socket = new WebSocket(
//     `wss://ya-praktikum.tech/ws/chats/${user}/${id}/${token}`
//   );

//   socket.addEventListener('open', () => {
//     console.log('Соединение установлено');

//     socket.send(
//       JSON.stringify({
//         content: 'Чат активирован',
//         type: 'message',
//       })
//     );
//   });

//   socket.addEventListener('close', (event) => {
//     if (event.wasClean) {
//       console.log('Соединение закрыто чисто');
//     } else {
//       console.log('Обрыв соединения');
//     }

//     console.log(`Код: ${event.code} | Причина: ${event.reason}`);
//   });

//   socket.addEventListener('message', (event) => {
//     console.log('Получены данные', event.data);
//   });

//   socket.addEventListener('error', (event) => {
//     console.log('Ошибка', event.message);
//   });

//   return socket;
// };
// const { id, token } = getChatProperties();
// const user = getUserId().id;

// console.log(id);
// console.log(token);
// console.log(user);

// const WS = new WebSocketMessages(id, token, user);

export default WebSocketMessages;
