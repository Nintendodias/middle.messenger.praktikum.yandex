/* eslint-disable no-new */
/* eslint-disable import/no-extraneous-dependencies */
import proxyquire from 'proxyquire';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './Block';

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
};

const { default: Block } = proxyquire('./Block', {
  './EventBus': {
    EventBus: class {
      emit = eventBusMock.emit;

      on = eventBusMock.on;
    },
  },
}) as { default: typeof BlockType };

describe('Block.ts', () => {
  class ComponentMock extends Block {}

  it('Проверка инициализации компонента', () => {
    new ComponentMock('div', {}, []);

    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });
});
