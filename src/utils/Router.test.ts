/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import sinon from 'sinon';
import Block from './Block';
import Router from './Router';

describe('Router.ts', () => {
  const FakeRouter = new Router('#app');

  beforeEach(() => {
    FakeRouter.reset();
    window.history.forward = sinon.fake();
    window.history.back = sinon.fake();
  });

  class FakeBlock extends Block {
    constructor(props: any) {
      super('div', props, []);
    }
  }

  it('.use()', () => {
    const result = FakeRouter.use('/', FakeBlock, { data: [{}] });

    expect(result).to.eq(FakeRouter);
  });

  it('.forward()', () => {
    FakeRouter.forward();

    expect((window.history.forward as any).callCount).to.eq(1);
  });

  it('.back()', () => {
    FakeRouter.back();

    expect((window.history.back as any).callCount).to.eq(1);
  });

  it('.go()', () => {
    const path = '/test';
    Router.getInstance().go(path);

    expect(window.location.pathname).to.eq(path);
  });
});
