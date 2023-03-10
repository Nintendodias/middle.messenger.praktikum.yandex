/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/naming-convention */
import Router from './Router';
import {
  logIn,
  register,
  profile,
  sendNewPassword,
  createChat,
  removeChat,
  searchUserByName,
  ISignIn,
  ISignUp,
  IUser,
  IPassword,
} from './API';
import closeModal from './closeModal';
import {
  addContactsItems,
  addUsersInChat,
  updateUserId,
} from './Store/Actions';

class Validations {
  public static INPUTS: Record<
  string,
  {
    pattern: RegExp;
    errorMsg: string;
  }
  > = {
      login: {
        pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
        errorMsg: `от 3 до 20 символов, латиница, может содержать цифры, 
        но не состоять из них, без пробелов, 
        без спецсимволов (допустимы дефис и нижнее подчёркивание)`,
      },
      password: {
        pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
        errorMsg:
        'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
      },
      repeat_password: {
        pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
        errorMsg:
        'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
      },
      newPassword: {
        pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
        errorMsg:
        'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
      },
      oldPassword: {
        pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
        errorMsg:
        'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
      },
      email: {
        pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
        errorMsg: `латиница, может включать цифры и спецсимволы вроде дефиса, 
        обязательно должна быть «собака» (@) и точка после неё, 
        но перед точкой обязательно должны быть буквы`,
      },
      first_name: {
        pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
        errorMsg: `латиница или кириллица, первая буква должна быть заглавной, 
        без пробелов и без цифр, нет спецсимволов 
        (допустим только дефис)`,
      },
      second_name: {
        pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
        errorMsg: `латиница или кириллица, первая буква должна быть заглавной, 
        без пробелов и без цифр, нет спецсимволов (допустим только дефис)`,
      },
      chat_name: {
        pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
        errorMsg: `латиница или кириллица, первая буква должна быть заглавной, 
        без пробелов и без цифр, нет спецсимволов (допустим только дефис)`,
      },
      display_name: {
        pattern: /^[А-ЯЁA-Zа-яёa-z-]+$/,
        errorMsg: `латиница или кириллица, без пробелов и без цифр, нет спецсимволов 
        (допустим только дефис)`,
      },
      phone: {
        pattern: /^[+-d]?\d{10,15}$/,
        errorMsg:
        'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
      },
      message: {
        pattern: /(.|\s)*\S(.|\s)*/,
        errorMsg: 'Сообщение не может быть пустым',
      },
      title: {
        pattern: /(.|\s)*\S(.|\s)*/,
        errorMsg: 'Название чата не может быть пустым',
      },
    };
}

function signInEvent({ login, password }: ISignIn, errorTarget: HTMLElement) {
  logIn({ login, password })
    .then(() => {
      updateUserId();
      Router.getInstance().go('/messenger');
    })
    .catch(({ reason }: { reason: string }) => {
      errorTarget.textContent = reason;
    });
}

function signUpEvent(
  { login, password, email, phone, first_name, second_name }: ISignUp,
  errorTarget: HTMLElement,
) {
  register({
    login,
    password,
    email,
    phone,
    first_name,
    second_name,
  })
    .then(() => {
      updateUserId();
      Router.getInstance().go('/messenger');
    })
    .catch(({ reason }) => {
      errorTarget.textContent = reason;
    });
}

function profileEvent(
  {
    id,
    first_name,
    second_name,
    display_name,
    login,
    email,
    phone,
    avatar,
  }: IUser,
  errorTarget: HTMLElement,
) {
  profile({
    id,
    first_name,
    second_name,
    display_name,
    login,
    email,
    phone,
    avatar,
  })
    .then(() => {
      errorTarget.textContent = 'Данные изменены';

      setTimeout(() => {
        errorTarget.textContent = '';
      }, 1000);
    })
    .catch(({ reason }) => {
      errorTarget.textContent = reason;
    });
}

function changePasswordEvent(
  { oldPassword, newPassword }: IPassword,
  errorTarget: HTMLElement,
) {
  sendNewPassword({ oldPassword, newPassword })
    .then(() => {
      errorTarget.textContent = 'Пароль изменен';

      setTimeout(() => {
        errorTarget.textContent = '';
        closeModal(1000);
      }, 1000);
    })
    .catch(({ reason }) => {
      errorTarget.textContent = reason;
    });
}

function createChatEvent(data: { title: string }, errorTarget: HTMLElement) {
  createChat(data)
    .then(() => {
      addContactsItems();
      closeModal(0);
    })
    .catch(({ reason }) => {
      errorTarget.textContent = reason;
    });
}

function deleteChatEvent(data: { title: string }) {
  const chats: NodeListOf<HTMLElement> =
    document.querySelectorAll('.menu__list-item');

  if (chats.length > 0) {
    const chatToRemove: Array<HTMLElement> = Array.from(chats).filter(
      (chat) => {
        const name: HTMLElement | null = chat.querySelector('.item__name');

        return (name as HTMLElement).innerText === data.title;
      },
    );

    if (chatToRemove.length > 0) {
      const el: HTMLElement = chatToRemove[0];

      if (el) {
        const id = (el as HTMLElement).dataset.chatid;

        if (id) {
          removeChat({
            chatId: +id,
          })
            .then(() => {
              addContactsItems();
              closeModal(0);
            })
            .catch(({ reason }) => {
              console.log(reason);
            });
        }
      }
    }
  }
}

function addContactEvent(name: { title: string }, errorTarget: HTMLElement) {
  searchUserByName(name.title)
    .then((value) => {
      const data = JSON.parse(value as string);

      if (data.length === 0) {
        errorTarget.textContent = 'Логин пользователя не найден';
        return;
      }

      if (data[0].id) {
        addUsersInChat(data[0].id);
        closeModal(0);
      }
    })
    .catch(({ reason }) => {
      errorTarget.textContent = reason;
    });
}

const validate = (event: any) => {
  const { value } = event.target;
  const nameInput = event.target.name;
  const isValid = Validations.INPUTS[nameInput].pattern.test(value);
  const message = Validations.INPUTS[nameInput].errorMsg;
  const errorTarget = event.target.parentNode.querySelector('.form__error');

  if (!isValid) {
    errorTarget.textContent = message;
  } else {
    errorTarget.textContent = '';
  }
};

const onSubmit = (event: Event): void => {
  event.preventDefault();
  const ev = event;

  if (ev && ev.target) {
    const formData: string | { [key: string]: any } = {};
    const target = ev.target as HTMLElement | HTMLInputElement;

    if (target) {
      const form = (target as HTMLElement).closest('form');

      if (form) {
        const inputs = form.querySelectorAll('input.form__input');
        const isError: boolean = Array.from(inputs).some((input: Element) => {
          const inputType = input as HTMLInputElement | null;
          const { value } = inputType!;
          const { name } = inputType!;
          return !Validations.INPUTS[name].pattern.test(value);
        });
        const errorTargetParent = (target as HTMLElement).parentNode;

        if (errorTargetParent) {
          const errorTarget = errorTargetParent.querySelector(
            '.form__button--error',
          );

          if (isError && errorTarget) {
            errorTarget.textContent = 'Поля заполнены неверно';
            return;
          }

          inputs.forEach((input: HTMLInputElement) => {
            formData[input.name] = input.value;
          });

          if (
            formData.repeat_password &&
            ((formData.password &&
              formData.password !== formData.repeat_password) ||
              (formData.new_password &&
                formData.new_password !== formData.repeat_password))
          ) {
            if (errorTarget) {
              errorTarget.textContent = 'Не совпадают пароли';
              return;
            }
          }

          if (errorTarget) {
            errorTarget.textContent = '';
          }

          const { value } = target as HTMLInputElement;

          if (value === 'Войти') {
            const { login, password } = formData as ISignIn;
            signInEvent({ login, password }, errorTarget as HTMLElement);
          } else if (value === 'Зарегистрироваться') {
            const { login, password, email, phone, first_name, second_name } =
              formData as ISignUp;
            signUpEvent(
              {
                login,
                password,
                email,
                phone,
                first_name,
                second_name,
              },
              errorTarget as HTMLElement,
            );
          } else if (value === 'Сохранить') {
            const {
              id,
              first_name,
              second_name,
              display_name,
              login,
              email,
              phone,
              avatar,
            } = formData as IUser;
            profileEvent(
              {
                id,
                first_name,
                second_name,
                display_name,
                login,
                email,
                phone,
                avatar,
              },
              errorTarget as HTMLElement,
            );
          } else if (value === 'Поменять') {
            const { oldPassword, newPassword } = formData as IPassword;
            changePasswordEvent(
              { oldPassword, newPassword },
              errorTarget as HTMLElement,
            );
          } else if (value === 'Создать чат') {
            const data = formData as { title: string };
            createChatEvent(data, errorTarget as HTMLElement);
          } else if (value === 'Удалить чат') {
            const data = formData as { title: string };
            deleteChatEvent(data);
          } else if (value === 'Добавить контакт') {
            const name = formData as { title: string };
            addContactEvent(name, errorTarget as HTMLElement);
          } else {
            throw new Error('Запрос пошел не по плану');
          }
        }
      }
    }
  }
};

export { validate, onSubmit };
