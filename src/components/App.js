import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import {useEffect, useState} from 'react';
import api from '../utils/api'

function App() {

  const [currentUser, setСurrentUser] = useState('');

  useEffect(() => {
    api.getUserInfo()
    .then(data => {
      setСurrentUser(data)
    })
    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    });

}, []);

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
  
  function handleUpdateUser(newName) {
    api.setUserInfoOnServer(newName.name, newName.about).then(data => {
      setСurrentUser(data);
  });
    closeAllPopups();
  }

  function handleUpdateAvatar(newAvatar) {
    api.setAvatar(newAvatar).then(data => {
      setСurrentUser(data);
    });
    closeAllPopups();
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {

      api.getInitialCards()
      .then(data => {
          setCards(data);
      })
      .catch((err) => {
          console.log(err); // выведем ошибку в консоль
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    });
} 
  function handleCardDelete(card) {
    api.deleteLike(card._id).then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
    });
  }

  function handleAddPlaceSubmit(newCardData) {
    api.setNewCardOnServer(newCardData).then((newCard) => {
      setCards([newCard, ...cards]);
    });
    closeAllPopups();
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
      
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />   
      
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

      <PopupWithForm className="overlay_type_deletePlace" popupTitle="Вы уверены?" formName="deleteForm" formButtonStaticContent="Да" formButtonProcessContent="Сохранение..." />

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      <Footer />
  </div>
  </CurrentUserContext.Provider>

  );
}

export default App;