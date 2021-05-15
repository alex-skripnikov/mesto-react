import Card from './Card';
import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
    
  return (    
    <main className="content">

      <section className="profile">
        <div className="profile__avatarBox" style={{ backgroundImage: `url(${currentUser.avatar})` }} onClick={props.onEditAvatar}></div>
          <div className="profile__titleBox">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__editButton" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button className="profile__addButton" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
          {props.cards.map(card => <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike}  onCardDelete={props.onCardDelete}/>)}
      </section>

    </main>
  );

}

export default Main;