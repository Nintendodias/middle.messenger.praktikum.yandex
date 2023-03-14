/* eslint-disable import/no-extraneous-dependencies */
import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { expect } from 'chai';
import XHRRequests from './XHRRequests';

describe('XHRRequests.ts', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };
  });

  afterEach(() => {
    requests.length = 0;
  });

  it('.get()', () => {
    XHRRequests.get('/user');

    const [request] = requests;

    expect(request.method).to.eq('GET');
  });

  it('.post()', () => {
    XHRRequests.post('auth/logout', {});

    const [request] = requests;

    expect(request.method).to.eq('POST');
  });

  it('.put()', () => {
    XHRRequests.put('chats/users', {});

    const [request] = requests;

    expect(request.method).to.eq('PUT');
  });

  it('.delete()', () => {
    XHRRequests.delete('chats', {});

    const [request] = requests;

    expect(request.method).to.eq('DELETE');
  });
});
