import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';
import React from 'react';
import {useState} from 'react';


function EditProfilePopup(props) {

    const [name, setName] = useState('');
    const [description, setAbout] = useState('');

    const currentUser = React.useContext(CurrentUserContext);
    React.useEffect(() => {
    if (currentUser) {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }
    }, [currentUser, props.isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeAbout(e) {
        setAbout(e.target.value);
    }
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
      <PopupWithForm className="overlay_type_edit" popupTitle="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} formName="editProfile" formButtonContent="Сохранить" onSubmit={handleSubmit}>
        <input type="text" minLength="2" maxLength="40" name="name" className="popup__input popup__input_value_name" required placeholder="Ваше имя" value={name} onChange={handleChangeName}/>
        <span className="popup__error name-error">Скрытый текст для теста</span>
        <input type="text" minLength="2" maxLength="200" name="job" className="popup__input popup__input_value_job" required placeholder="Ваша профессия" value={description} onChange={handleChangeAbout} />
        <span className="popup__error job-error">Скрытый текст для теста</span>
      </PopupWithForm>
    );
}

export default EditProfilePopup;