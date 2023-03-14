import http from './XHRRequests';

export interface ISignIn {
  login: string;
  password: string;
}

export interface ISignUp {
  login: string;
  password: string;
  email: string;
  phone: string;
  first_name: string;
  second_name: string;
}

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface IPassword {
  oldPassword: string;
  newPassword: string;
}

export function register(data: ISignUp) {
  return http.post('auth/signup', {
    data,
  });
}

export function logIn(data: ISignIn) {
  return http.post('auth/signin', {
    data,
  });
}

export function profile(data: IUser) {
  return http.put('user/profile', {
    data,
  });
}

export function user() {
  return http.get('auth/user');
}

export function logout() {
  return http.post('auth/logout', {});
}

export function sendAvatar(data: FormData) {
  return http.put('user/profile/avatar', {
    data,
    headers: null,
  });
}

export function sendNewPassword(data: IPassword) {
  return http.put('user/password', {
    data,
  });
}

export function chats() {
  return http.get('chats', {
    data: {
      limit: 100,
    },
  });
}

export function createChat(data: { title: string }) {
  return http.post('chats', {
    data,
  });
}

export function removeChat(data: { chatId: number }) {
  return http.delete('chats', {
    data,
  });
}

export function connectToChat(id: number) {
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

export function getChatUsers(id: number) {
  return http.get(`chats/${id}/users`);
}

export function sendChatAvatar(data: FormData) {
  return http.put('chats/avatar', {
    data,
    headers: null,
  });
}
