import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popup, { handleSubmit }){
        super(popup);
        this._handleSubmit = handleSubmit;

        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__text');
    }

    _getInputValues(){
        this._newValues = {};
        this._inputList.forEach((inputElement) => {
            this._newValues[inputElement.name] = inputElement.value;
        });
        return this._newValues;
    }
    
    close(){
        super.close();
        this._popupForm.reset()
    }

    setEventListeners(){
        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }
}