function PopupWithForm(props) {

    const openPopupClass = props.isOpen ? 'overlay_active' : '';
    return (    
        <section className={'overlay ' + props.popupCssClass + ' ' + openPopupClass}>
            <div className="popup">
                <h3 className="popup__title">{props.popupTitle}</h3>
                {props.children}
                <button className="popup__closeButton" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
            </div>
        </section>
    );
}

export default PopupWithForm;