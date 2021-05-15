import PopupWithForm from './PopupWithForm';
import React from 'react';
import {useState} from 'react';

function EditAvatarPopup(props) {
    const [namePlace, setNamePlace] = useState([]);
    const [linkPlace, setLinkPlace] = useState([]);

    function handleChangeNamePlace(e) {
        setNamePlace(e.target.value);
    }
    function handleChangeLinkPlace(e) {
        setLinkPlace(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        const dataCard = [];
        dataCard.name = namePlace;
        dataCard.link = linkPlace;
        props.onAddPlace(dataCard);
    }

    return (
      <PopupWithForm className="overlay_type_addPlace" popupTitle="Новое место" isOpen={props.isOpen} onClose={props.onClose} formName="addNewPlace" formButtonStaticContent="Создать" formButtonProcessContent="Сохранение..."  onSubmit={handleSubmit}>
        <input type="text" minLength="2" maxLength="30" name="namePlace" className="popup__input popup__input_value_namePlace" required placeholder="Название" defaultValue="" onChange={handleChangeNamePlace} />
        <span className="popup__error namePlace-error">Скрытый текст для теста</span>
        <input type="url" name="imgPlace" className="popup__input popup__input_value_imgPlace" required placeholder="Ссылка на картинку" defaultValue="" onChange={handleChangeLinkPlace} />
        <span className="popup__error imgPlace-error">Скрытый текст для теста</span>
      </PopupWithForm>
    );
}

export default EditAvatarPopup;