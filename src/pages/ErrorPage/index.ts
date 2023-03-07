import './index.less';
import Block from '../../utils/Block';
import ErrorPage400TMPL from './ErrorPage400.hbs';
import ErrorPage500TMPL from './ErrorPage500.hbs';
import Router from '../../utils/Router';
import Links from '../../components/Links';

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
    switch ({ ...this.props }.data[0].code) {
      case 404: {
        return this.compile(ErrorPage400TMPL, { ...this.props });
      }
      default:
        return this.compile(ErrorPage500TMPL, { ...this.props });
    }
  }
}
