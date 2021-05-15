import options from './constants';

class Api {
    constructor(options) {
        this._baseurl = options.baseurl;
        this._headers = options.headers;

    }

    //приватный метод проверки ответа сервера и преобразования в json
    _getResponseData(res) {
        if (res.ok) {return res.json();}
        return Promise.reject(new Error(res.status))
    }

    //метод получения информации о пользователе
    getUserInfo() {
        return fetch(`${this._baseurl}/users/me`, {
            headers: this._headers,
        })
        .then(res => {return this._getResponseData(res)})
    }

    //метод получения массива с карточками
    getInitialCards() {
        return fetch(`${this._baseurl}/cards`, {
            headers: this._headers,
        })
        .then(res => {return this._getResponseData(res)})
    }

    //метод редактирования информации о пользователе
    setUserInfoOnServer(newName, newProf) {
        return fetch(`${this._baseurl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: newName,
                about: newProf
              })
        })
        .then(res => {return this._getResponseData(res)})
    }

    //метод добавления новой карточки на сервер
    setNewCardOnServer(newCardData) {
        return fetch(`${this._baseurl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: newCardData.name,
                link: newCardData.link
              })
        })
        .then(res => {return this._getResponseData(res)})
    }

    //метод удаления карточки
    deletecard(idDelCard) {
        return fetch(`${this._baseurl}/cards/${idDelCard}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {return this._getResponseData(res)})
    }

    changeLikeCardStatus(idCard, isLiked) {
        if (isLiked) {
            return fetch(`${this._baseurl}/cards/likes/${idCard}`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(res => {return this._getResponseData(res)})
         } else {
            return fetch(`${this._baseurl}/cards/likes/${idCard}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(res => {return this._getResponseData(res)})
         }
    }

    //постановка лайка PUT https://mesto.nomoreparties.co/v1/cohortId/cards/likes/cardId
    putLike(idCard) {
        return fetch(`${this._baseurl}/cards/likes/${idCard}`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => {return this._getResponseData(res)})
    }

    //удаление лайка DELETE https://mesto.nomoreparties.co/v1/cohortId/cards/likes/cardId
    deleteLike(idCard) {
        return fetch(`${this._baseurl}/cards/likes/${idCard}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {return this._getResponseData(res)})
    }

    //обновление аватара PATCH https://mesto.nomoreparties.co/v1/cohortId/users/me/avatar 
    setAvatar(newAvatar) {
        return fetch(`${this._baseurl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: newAvatar
              })
        })
        .then(res => {return this._getResponseData(res)})
    }
}

const api = new Api(options);

export default api;