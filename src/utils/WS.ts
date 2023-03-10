/* eslint-disable import/no-cycle */
import EventBus from './EventBus';
import { setMessages, updateMessageArray } from './Store/Actions';

class WebSocketMessages {
  [x: string]: any;

  static instance: WebSocketMessages;

  private eventBus: EventBus;

  socket: WebSocket | null;

  id: number;

  token: string;

  user: number;

  static EVENTS = {
    OPEN: 'open',
    CLOSE: 'close',
    MESSAGE: 'message',
    ERROR: 'error',
    CONNECT: 'connect',
  };

  constructor(id: number, token: string, user: number) {
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

    const URL = 'wss://ya-praktikum.tech/ws/chats/';
    const WS_MESSAGES_URL = `${URL}${this.user}/${this.id}/${this.token}`;

    this.socket = new WebSocket(WS_MESSAGES_URL);

    if (this.socket) {
      this.socket.addEventListener('open', () => {
        this.eventBus.emit(WebSocketMessages.EVENTS.OPEN);

        setInterval(
          (self: WebSocketMessages) => {
            self.ping();
          },
          10000,
          this,
        );
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

  // eslint-disable-next-line class-methods-use-this
  onMessage(event: MessageEvent) {
    let data = JSON.parse(event.data);

    if (Array.isArray(data)) {
      data = data.filter(({ type }) => type === 'message').reverse();
      setMessages(data);
    } else {
      if (data.type !== 'message') return;

      updateMessageArray(data);
    }
  }

  onError(event: MessageEvent) {
    console.error(event);

    this.disconnect();
  }

  sendMessage(content: string) {
    console.log(content);
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
    this.eventBus.on(WebSocketMessages.EVENTS.MESSAGE, this.onMessage.bind(this));
    this.eventBus.on(WebSocketMessages.EVENTS.ERROR, this.onError.bind(this));
    this.eventBus.on(WebSocketMessages.EVENTS.CONNECT, this.connect.bind(this));
  }
}

export default WebSocketMessages;
