import PopupWithForm from './PopupWithForm';
import React from 'react';

function EditAvatarPopup(props) {
    const userAvatar = React.useRef(); // записываем объект, возвращаемый хуком, в переменную

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateAvatar(userAvatar.current.value);
    }

    return (
      <PopupWithForm className="overlay_type_setAvatar" popupTitle="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} formName="setAvatar" formButtonStaticContent="Сохранить" formButtonProcessContent="Сохранение..." onSubmit={handleSubmit}>
        <input type="url" ref={userAvatar} name="newAvatar" className="popup__input popup__input_value_newAvatar" required placeholder="Ссылка на новый аватар" defaultValue="" />
        <span className="popup__error newAvatar-error">Скрытый текст для теста</span>
      </PopupWithForm>
    );
}

export default EditAvatarPopup;