/* eslint-disable consistent-return */
import './index.less';
import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import ErrorPage400 from './ErrorPage400.tmpl';
import ErrorPage500 from './ErrorPage500.tmpl';
import Router from '../../utils/Router';
import Links from '../../components/Links';

const ErrorPage400TMPL = Handlebars.compile(ErrorPage400);
const ErrorPage500TMPL = Handlebars.compile(ErrorPage500);

type TProps = Record<string, unknown>;

export default class ErrorPage extends Block {
  constructor(props: TProps) {
    super('div', props, [
      new Links({
        target: '[data-render="links"]',
        data: [
          {
            className: 'text-center',
            text: 'Назад к чатам',
            events: {
              click: () => {
                Router.getInstance().go('/messenger');
              },
            },
          },
        ],
      }),
    ]);
  }

  render() {
    const props = { ...this.props } as { data: [{}] };

    if (Object.keys(props).length > 0) {
      const { data } = props;

      if (data) {
        const param = data[0];

        if (param) {
          const { code } = param as { code: number };

          if (code && code === 404) {
            return this.compile(ErrorPage400TMPL, { ...this.props });
          }

          return this.compile(ErrorPage500TMPL, { ...this.props });
        }
      }
    }
  }
}
