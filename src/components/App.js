import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {useState} from 'react';

function App() {

  const [selectedCard, setSelectedCard] = useState('1');
  function handleCardClick(item) {
    setSelectedCard(item);
  }

  const [isEditProfilePopupOpen, setProfilePopup] = useState(false);
  function handleEditProfileClick() {
    setProfilePopup(!isEditProfilePopupOpen);
  }

  const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);
  function handleAddPlaceClick() {
    setAddPlacePopup(!isAddPlacePopupOpen);
  }

  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopup(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setProfilePopup(false);
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setSelectedCard('1');
  }

  return (
    <div className="root">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>   
      <Footer />

      <PopupWithForm popupCssClass="overlay_type_edit" popupTitle="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <form className="popup__form" name="editProfile" noValidate>
          <input type="text" minLength="2" maxLength="40" name="name" className="popup__input popup__input_value_name" required placeholder="Ваше имя" defaultValue="" />
          <span className="popup__error name-error">Скрытый текст для теста</span>
          <input type="text" minLength="2" maxLength="200" name="job" className="popup__input popup__input_value_job" required placeholder="Ваша профессия" defaultValue="" />
          <span className="popup__error job-error">Скрытый текст для теста</span>
          <button type="submit" className="popup__saveButton">
            <span className="popup__staticContent">Сохранить</span>
            <span className="popup__processContent">Сохранение...</span>
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm popupCssClass="overlay_type_addPlace" popupTitle="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <form className="popup__form" name="addNewPlace" noValidate>
          <input type="text" minLength="2" maxLength="30" name="namePlace" className="popup__input popup__input_value_namePlace" required placeholder="Название" defaultValue="" />
          <span className="popup__error namePlace-error">Скрытый текст для теста</span>
          <input type="url" name="imgPlace" className="popup__input popup__input_value_imgPlace" required placeholder="Ссылка на картинку" defaultValue="" />
          <span className="popup__error imgPlace-error">Скрытый текст для теста</span>
          <button type="submit" className="popup__saveButton">
            <span className="popup__staticContent">Создать</span>
            <span className="popup__processContent">Сохранение...</span>
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm popupCssClass="overlay_type_setAvatar" popupTitle="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <form className="popup__form" name="setAvatar" noValidate>
          <input type="url" name="newAvatar" className="popup__input popup__input_value_newAvatar" required placeholder="Ссылка на новый аватар" defaultValue="" />
          <span className="popup__error newAvatar-error">Скрытый текст для теста</span>
          <button type="submit" className="popup__saveButton">
            <span className="popup__staticContent">Сохранить</span>
            <span className="popup__processContent">Сохранение...</span>
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm popupCssClass="overlay_type_deletePlace" popupTitle="Вы уверены?">
        <button className="popup__saveButton popup__deleteCardButton" type="button" aria-label="Удалить">Да</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

  </div>
  );
}

export default App;