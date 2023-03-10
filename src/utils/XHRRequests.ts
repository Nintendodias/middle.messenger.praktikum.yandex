/* eslint-disable implicit-arrow-linebreak */
export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Topt = {
  headers?: Record<string, string> | null;
  method?: METHODS;
  timeout?: number;
  data?: any;
};

type HTTPMethod = (url: string, opt?: Topt) => Promise<unknown>;

const baseUrl = 'https://ya-praktikum.tech/api/v2/';

class HTTPTransport {
  get: HTTPMethod = (url, opt = {}) =>
    this.request(url, { ...opt, method: METHODS.GET });

  post: HTTPMethod = (url, opt = {}) =>
    this.request(url, { ...opt, method: METHODS.POST });

  put: HTTPMethod = (url, opt = {}) =>
    this.request(url, { ...opt, method: METHODS.PUT });

  delete: HTTPMethod = (url, opt = {}) =>
    this.request(url, { ...opt, method: METHODS.DELETE });

  // Он ругается на то, что в этом методе не используется контекст класса.
  // Я считаю, в данном случае имеет смысл ESList проигнорировать,
  // так как структурно не вижу смысла его выносить отсюда
  // eslint-disable-next-line class-methods-use-this
  request = (url: string, opt: Topt = {}) => {
    const { method, data, headers = {} } = opt;

    return new Promise((resolve, reject) => {
      if (!method) {
        // Хочу оставить именно такое пояснение к reject
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Не могу найти метод');
        return;
      }
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      if (isGet) {
        if (data) {
          url = `${url}?${Object.entries(data)
            .map(
              ([key, value]: [key: string, value: any]): string =>
                `${key}=${value}`,
            )
            .join('&')}`;
        }
      }

      xhr.open(method, baseUrl + url);
      xhr.withCredentials = true;

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(JSON.parse(xhr.response));
        }
      };

      xhr.timeout = opt.timeout || 5000;

      xhr.onabort = reject;

      xhr.onerror = reject;

      xhr.ontimeout = reject;

      if (headers !== null) {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      }

      if (isGet || !data) {
        xhr.send();
      } else if (headers !== null) {
        xhr.send(JSON.stringify(data));
      } else {
        xhr.send(data);
      }
    });
  };
}

const http = new HTTPTransport();

export default http;
