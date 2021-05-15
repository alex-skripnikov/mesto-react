import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `element__deleteButton ${isOwn ? '' : 'element__deleteButton_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `element__like ${isLiked ? 'elements__like_active' : ''}`
  );

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  } 

    function handleClick() {
        props.onCardClick(props.card);
      }  

    return (    
        <div className="element"> 
        <div className="element__piture" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}></div>
        <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>
        <div className="element__nameBox">
          <h2 className="element__placeName">{props.card.name}</h2>
          <div className="element__likeBox">
              <button className={cardLikeButtonClassName} type="button" aria-label="Нравится" onClick={handleLikeClick}></button>
              <p className="element__likeСounter">{props.card.likes.length}</p>
          </div>
        </div>
    </div>

    );
  }
  
export default Card;