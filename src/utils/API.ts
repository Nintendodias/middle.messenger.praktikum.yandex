import http from './XHRRequests';

export function register(data) {
  return http.post('auth/signup', {
    data: data,
  });
}

export function login(data) {
  return http.post('auth/signin', {
    data: data,
  });
}

export function profile(data) {
  return http.put('user/profile', {
    data: data,
  });
}

export function user() {
  return http.get('auth/user');
}

export function logout() {
  return http.post('auth/logout', {});
}

export function sendAvatar(data) {
  return http.put('user/profile/avatar', {
    data: data,
    headers: null,
  });
}

export function sendNewPassword(data) {
  return http.put('user/password', {
    data: data,
  });
}

export function chats() {
  return http.get('chats', {
    data: {
      limit: 100,
    },
  });
}

export function createChat(data) {
  return http.post('chats', {
    data: data,
  });
}

export function removeChat(data) {
  return http.delete('chats', {
    data: data,
  });
}

export function connectToChat(id) {
  return http.post(`chats/token/${id}`, {});
}

export function searchUserByName(name: string) {
  return http.post('user/search', {
    data: {
      login: name,
    },
  });
}

export function addUserInChat(users: Array<number>, chatId: number) {
  return http.put('chats/users', {
    data: {
      users,
      chatId,
    },
  });
}

export function getUsersInChat(chatId: number) {
  console.log(chatId);
}

export function getChatUsers(id: number) {
  return http.get(`chats/${id}/users`);
}
