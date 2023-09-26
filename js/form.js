document.addEventListener('DOMContentLoaded', () => {

    const successClassInput = 'active'; // Добавляется родительскому классу form__group, если с полем все отлично
    const errorClassInput = 'error'; // Добавляется родительскому классу form__group, если с полем че та не так
    const btnSubmittingClass = 'btn--submitting'; // Добавляется кнопке, если при отправке
    const formSubmittingClass = 'submitted'; // Добавляется форме, если при отправке

    const formInputs = document.querySelectorAll('.feedback__form .form__input');
    const form = document.querySelector('.feedback__form');
    const btnSubmit = document.querySelector('#feedback__submit');
    const validationText = document.querySelector('#feedback__validation');

    // Vanilla Masker
    let telInputs = document.querySelectorAll('input[type=tel]');

    telInputs.forEach(input => {
        VMasker(input).maskPattern("+9 (999) 999-99-99")
    });
    // Vanilla Masker

    formInputs.forEach((input, i) => {

        input.addEventListener('focus', (e) => {
            let parent = e.target.closest('.form__group');

            if (parent.classList.contains(errorClassInput)) {
                parent.classList.remove(errorClassInput);
            }

            parent.classList.add(successClassInput);
        });

        // Remove Class with gradient border for Form Group
        input.addEventListener('focusout', (e) => {
            let parent = e.target.closest('.form__group');

            if (e.target.value === '') {
                parent.classList.remove(successClassInput)
                parent.classList.add(errorClassInput)
            }
        })
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.classList.contains(formSubmittingClass)) {
            return 0;
        }

        let hasEmpty = false;
        let formData = new FormData(form);

        // Check Inputs value
        formInputs.forEach((input, i) => {
            if (input.value === '') {
                input.closest('.form__group').classList.add(errorClassInput);
                hasEmpty = true;
            }
        })

        // If Empty set error for validation
        if (hasEmpty) {
            if (!validationText.classList.contains('error')) changeValidationStatus('Заполните отмеченные поля!', 'error')
            return 0;
        }

        btnSubmit.classList.add(btnSubmittingClass);
        form.classList.add(formSubmittingClass)

        // WordPress AJAX actions
        // formData.append('action', 'feedback_action')
        // formData.append('nonce', ajax_form_object.nonce)
        // const url = ajax_form_object.url;

        const url = 'https://localhost';

        axios({method: 'post', url: url, data: formData})
            .then(response => {
                console.log(response.data)
                clearInputs(formInputs);
                changeValidationStatus('Вопрос оправлен!', 'success')
            })
            .catch(reject => {
                changeValidationStatus('Ошибка при отправке заявки!', 'error')
            })
            .finally((response) => {
                clearInputs(formInputs);
                btnSubmit.classList.remove(btnSubmittingClass);

                form.classList.remove(formSubmittingClass)
            });
    });

    function changeValidationStatus(content, validClass) {
        validationText.classList.add(validClass);
        validationText.textContent = content;

        setTimeout(function () {
            validationText.textContent = ''
            validationText.classList.remove(validClass)
        }, 5000);
    }

    function clearInputs(inputs) {
        inputs.forEach((input, i) => {
            let parent = input.closest('.form__group');

            input.value = '';
            parent.classList.remove(successClassInput)
        });
    }
});