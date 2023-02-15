import './index.less';
import Title40 from '../../components/Title40/index';
import Title20 from '../../components/Title20/index';
import Render from '../../utils/Render';
import Links from '../../components/Links/index';
import file from '../main/main.html';

const TITLE40 = {
  data: [
    {
      text: '500',
    },
  ],
};

const TITLE20 = {
  data: [
    {
      text: 'Мы уже фиксим',
    },
  ],
};

const LINKS = {
  data: [
    {
      url: file,
      className: 'text-center',
      text: 'Назад к чатам',
    },
  ],
};

const title40 = new Title40(TITLE40);

Render('[data-render="title40"]', title40);

const title20 = new Title20(TITLE20);

Render('[data-render="title20"]', title20);

const link = new Links(LINKS);

Render('[data-render="links"]', link);
