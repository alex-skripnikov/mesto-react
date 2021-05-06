function Card(props) {

    function handleClick() {
        props.onCardClick(props.item);
      }  

    return (    
        <div className="element"> 
        <div className="element__piture" style={{ backgroundImage: `url(${props.item.link})` }} onClick={handleClick}></div>
        <button className="element__deleteButton" type="button" aria-label="Удалить"></button>
        <div className="element__nameBox">
          <h2 className="element__placeName">{props.item.name}</h2>
          <div className="element__likeBox">
              <button className="element__like" type="button" aria-label="Нравится"></button>
              <p className="element__likeСounter">{props.item.likes.length}</p>
          </div>
        </div>
    </div>

    );
  }
  
export default Card;