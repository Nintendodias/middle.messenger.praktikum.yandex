const changeProfileData = () => {
  const form = document.querySelector('[data-form="profile-data"]');

  if (form) {
    const inputsElements = form.querySelectorAll('.form__input');
    const button = document.querySelector('.--main');

    form.classList.add('_active');

    inputsElements.forEach((input: HTMLInputElement) => {
      input.readOnly = false;
    });

    if (button) {
      button.addEventListener('click', () => {
        form.classList.remove('_active');

        inputsElements.forEach((input: HTMLInputElement) => {
          input.readOnly = true;
        });
      });
    }
  }
};

export default changeProfileData;
