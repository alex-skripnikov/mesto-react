import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {useState} from 'react';

function App() {

  const [selectedCard, setSelectedCard] = useState({});
  function handleCardClick(item) {
    setSelectedCard(item);
  }

  const [isEditProfilePopupOpen, setProfilePopup] = useState(false);
  function handleEditProfileClick() {
    setProfilePopup(true);
  }

  const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);
  function handleAddPlaceClick() {
    setAddPlacePopup(true);
  }

  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }

  function closeAllPopups() {
    setProfilePopup(false);
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>   
      

      <PopupWithForm className="overlay_type_edit" popupTitle="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} formName="editProfile" formButtonStaticContent="Сохранить" formButtonProcessContent="Сохранение...">
          <input type="text" minLength="2" maxLength="40" name="name" className="popup__input popup__input_value_name" required placeholder="Ваше имя" defaultValue="" />
          <span className="popup__error name-error">Скрытый текст для теста</span>
          <input type="text" minLength="2" maxLength="200" name="job" className="popup__input popup__input_value_job" required placeholder="Ваша профессия" defaultValue="" />
          <span className="popup__error job-error">Скрытый текст для теста</span>
      </PopupWithForm>

      <PopupWithForm className="overlay_type_addPlace" popupTitle="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} formName="addNewPlace" formButtonStaticContent="Создать" formButtonProcessContent="Сохранение...">
          <input type="text" minLength="2" maxLength="30" name="namePlace" className="popup__input popup__input_value_namePlace" required placeholder="Название" defaultValue="" />
          <span className="popup__error namePlace-error">Скрытый текст для теста</span>
          <input type="url" name="imgPlace" className="popup__input popup__input_value_imgPlace" required placeholder="Ссылка на картинку" defaultValue="" />
          <span className="popup__error imgPlace-error">Скрытый текст для теста</span>
      </PopupWithForm>

      <PopupWithForm className="overlay_type_setAvatar" popupTitle="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} formName="setAvatar" formButtonStaticContent="Сохранить" formButtonProcessContent="Сохранение...">
          <input type="url" name="newAvatar" className="popup__input popup__input_value_newAvatar" required placeholder="Ссылка на новый аватар" defaultValue="" />
          <span className="popup__error newAvatar-error">Скрытый текст для теста</span>
      </PopupWithForm>

      <PopupWithForm className="overlay_type_deletePlace" popupTitle="Вы уверены?" formName="deleteForm" formButtonStaticContent="Да" formButtonProcessContent="Сохранение..." />

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      <Footer />
  </div>
  );
}

export default App;