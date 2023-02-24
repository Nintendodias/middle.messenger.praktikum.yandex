import Router from './Router';
import { login, register, profile, sendNewPassword } from './API';

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
  };
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

const onSubmit = (event: any): void => {
  event.preventDefault();

  const formData: Record<string, string> = {};
  const inputs = event.target
    .closest('form')
    .querySelectorAll('input.form__input');
  const isError: boolean = Array.from(inputs).some((input: Element) => {
    const inputType = input as HTMLInputElement | null;
    const { value } = inputType!;
    const { name } = inputType!;
    return !Validations.INPUTS[name].pattern.test(value);
  });
  const errorTarget: Element = event.target.parentNode.querySelector(
    '.form__button--error'
  );

  if (isError) {
    errorTarget.textContent = 'Поля заполнены неверно';
    return;
  }

  inputs.forEach((input: any) => {
    formData[input.name] = input.value;
  });

  if (
    formData.repeat_password &&
    ((formData.password && formData.password !== formData.repeat_password) ||
      (formData.new_password &&
        formData.new_password !== formData.repeat_password))
  ) {
    errorTarget.textContent = 'Не совпадают пароли';
    return;
  }

  errorTarget.textContent = '';

  const value: string = event.target.value;

  switch (value) {
    case 'Войти':
      login(formData)
        .then((_value) => {
          Router.getInstance().go('/messenger');
        })
        .catch(({ reason }) => {
          errorTarget.textContent = reason;
        });
      break;
    case 'Зарегистрироваться':
      register(formData)
        .then((_value) => {
          Router.getInstance().go('/messenger');
        })
        .catch(({ reason }) => {
          errorTarget.textContent = reason;
        });
      break;
    case 'Сохранить':
      profile(formData)
        .then((_value) => {
          errorTarget.textContent = 'Данные изменены';

          setTimeout(() => {
            errorTarget.textContent = '';
          }, 1000);
        })
        .catch(({ reason }) => {
          errorTarget.textContent = reason;
        });
      break;
    case 'Поменять':
      sendNewPassword(formData)
        .then((_value) => {
          errorTarget.textContent = 'Пароль изменен';

          setTimeout(() => {
            errorTarget.textContent = '';
          }, 1000);
        })
        .catch(({ reason }) => {
          errorTarget.textContent = reason;
        });
      break;
    default:
      throw new Error('Аутентификация прошла не по плану');
  }
};

export { validate, onSubmit };
