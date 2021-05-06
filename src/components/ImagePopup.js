function ImagePopup(props) {

  const openPopupClass = props.card === '1' ? '' : 'overlay_active';
  return (
      <section className={'overlay overlay_type_image ' + openPopupClass}>
        <div className="popup popup_type_picture">
          <div className="popup__piture" style={{ backgroundImage: `url(${props.card.link})` }}></div>
          <p className="popup__pitureName">{props.card.name}</p>
          <button className="popup__closeButton popup__closeButton_type_picture" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        </div>
      </section>
    );
  }
  
  export default ImagePopup;