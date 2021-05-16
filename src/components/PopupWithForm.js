function PopupWithForm(props) {

    const openPopupClass = props.isOpen ? 'overlay_active' : '';
    return (
        <section className={`overlay ${props.className} ${openPopupClass}`}>
            <div className="popup">
                <h3 className="popup__title">{props.popupTitle}</h3>
                <form className="popup__form" name={props.formName} noValidate onSubmit={props.onSubmit}>
                    {props.children}
                    <button type="submit" className="popup__saveButton">{props.formButtonContent}</button>
                </form>
                <button className="popup__closeButton" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
            </div>
        </section>
    );
}

export default PopupWithForm;