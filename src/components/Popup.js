export default class Popup {
    constructor(popup){
        this._popup = document.querySelector(popup)
        this._handleEscClose = this._handleEscClose.bind(this)
        this._handleOverlayClose = this._handleOverlayClose.bind(this)
    };

    open(){
        this._popup.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClose)
    };

    close(){
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
          this.close()
        }
    }

    _handleOverlayClose(evt){
        if (evt.target.classList.contains('popup_active')) {
          this.close(evt.target);
        }
    }

    setEventListeners(){
        this._popup.querySelector('.popup__close-button').addEventListener('click', () => this.close());

        this._popup.addEventListener('mousedown', this._handleOverlayClose)   
    }
}