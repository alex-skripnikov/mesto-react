import api from '../utils/Api'
import {useEffect, useState} from 'react';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
        .then(data => {
            setUserAvatar(data.avatar)
            setUserDescription(data.about)
            setUserName(data.name)
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        });
    }, []);

    useEffect(() => {
        api.getInitialCards()
        .then(data => {
            setCards(data);
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        });
    }, []);
    
  return (    
    <main className="content">

      <section className="profile">
        <div className="profile__avatarBox" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar}></div>
          <div className="profile__titleBox">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__editButton" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button className="profile__addButton" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
          {cards.map(card => <Card key={card._id} item={card} onCardClick={props.onCardClick} />)}
      </section>

    </main>
  );

}

export default Main;