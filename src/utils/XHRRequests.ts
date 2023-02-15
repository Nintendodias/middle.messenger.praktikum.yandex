export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Topt = {
  headers?: Record<string, string>;
  method?: METHODS;
  timeout?: number;
  data?: any;
};

type HTTPMethod = (url: string, opt?: Topt) => Promise<unknown>;

function queryStringify(data: object) {
  if (typeof data !== 'object') {
    throw new Error('Пришедшие данные должны быть объектом');
  }

  const keys = Object.keys(data);
  return keys.reduce(
    (result, key, index) => `${result}${key}=${data[key as keyof object]}${
      index < keys.length - 1 ? '&' : ''
    }`,
    '?',
  );
}

export class HTTPTransport {
  get: HTTPMethod = (url, opt = {}) => this.request(url, { ...opt, method: METHODS.GET });

  post: HTTPMethod = (url, opt = {}) => this.request(url, { ...opt, method: METHODS.POST });

  put: HTTPMethod = (url, opt = {}) => this.request(url, { ...opt, method: METHODS.PUT });

  delete: HTTPMethod = (url, opt = {}) => this.request(url, { ...opt, method: METHODS.DELETE });

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

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.entries(headers).forEach(([key, value]) => {
        if (!key || !value) return;
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.timeout = opt.timeout || 5000;

      xhr.onabort = reject;

      xhr.onerror = reject;

      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
