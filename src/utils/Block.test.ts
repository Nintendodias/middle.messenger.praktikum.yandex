/* eslint-disable no-new */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import Handlebars from 'handlebars';
import Block from './Block';

describe('Block.ts', () => {
  let isMounted = false;
  let isRendered = false;
  // let isRenderAfterUpdate = false;

  const tpl: string = `
{{#each data}}
  <div class='text-link {{this.className}} '>{{this.text}}</div>
{{/each}}
`;

  const template = Handlebars.compile(tpl);

  type TProps = {
    target: string;
    data: [
      {
        className: string;
        text: string;
      },
    ];
  };

  class TestComponent extends Block {
    constructor(
      props:
        | TProps
        | {
            target: string;
            data: [{}];
          },
    ) {
      super('div', props);
    }

    componentDidMount() {
      isMounted = true;
    }

    render() {
      isRendered = true;
      return this.compile(template, { ...this.props });
    }
  }

  new TestComponent({
    target: '[data-render="links"]',
    data: [
      {
        className: 'text-center',
        text: 'Нет аккаунта?',
      },
    ],
  });

  it('componentDidMount()', () => {
    expect(isMounted).to.eq(true);
  });

  it('Render()', () => {
    expect(isRendered).to.eq(true);
  });

  it('Создание экземпляра класса с props', () => {
    const testComponentWithoutProps = new TestComponent({
      target: '[data-render="links"]',
      data: [
        {
          className: 'text-center',
          text: 'Test',
        },
      ],
    });

    expect((testComponentWithoutProps.props as TProps).data[0].text).to.eq('Test');
  });

  it('setProps()', () => {
    const testComponentWithoutProps = new TestComponent({
      target: '[data-render="links"]',
      data: [
        {
          className: 'text-center',
          text: 'Test',
        },
      ],
    });

    const newProps = {
      data: [
        {
          className: 'text-center',
          text: 'Test 2',
        },
      ],
    };

    testComponentWithoutProps.setProps(newProps);
    expect((testComponentWithoutProps.props as TProps).data[0].text).to.eq('Test 2');
  });
});
