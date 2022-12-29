(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o){var i=o.item,u=o.handleCardClick,l=o.handleLikeClick,s=o.handleApproveDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=i.name,this._link=i.link,this._like=i.like,this._cardSelector=t,this._handleCardClick=u,this._handleLikeClick=l,this._handleApproveDelete=s,this._api=n,this._id=i._id,this._ownerId=i.owner._id,this._userId=r,this.deleteBtn=this.cardTemplate.querySelector(".elements__remove-button"),this.likeBtn=this.cardTemplate.querySelector(".elements__like-button"),this.likeNumber=this.cardTemplate.querySelector(".elements__like-number"),this.elementCard=this.cardTemplate.querySelector(".elements__card"),this._getTemplate()}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){this.cardTemplate=document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this.elementCardTitle=this.cardTemplate.querySelector(".elements__text"),this.elementCardTitle.textContent=this._name,this.elementCardImg=this.cardTemplate.querySelector(".elements__image"),this.elementCardImg.src=this._link,this.elementCardImg.alt=this._name,this.likeNumber.textContent=this._like.length,this._ownerId!==this._userId&&(this.deleteBtn.style.display="none"),this._likes.find((function(t){return e._userId===t._id}))&&this.likeBtn.classList.add("elements__like-button_active"),this._setListeners(),this.cardTemplate}},{key:"_removeCard",value:function(){this.cardTemplate.remove()}},{key:"_likeCard",value:function(){var e=this;likeBtn.classList.contains("elements__like-button_active")?this._api.dislike(this._id).then((function(t){e.likeBtn.classList.remove("elements__like-button_active"),e.likeNumber.textContent=t.like.length})).catch((function(e){console.log(e)})):this._api.like(this._id).then((function(t){e.likeBtn.classList.add("elements__like-button_active"),e.likeNumber.textContent=t.like.length})).catch((function(e){console.log(e)}))}},{key:"_setListeners",value:function(){var e=this;this.deleteBtn.addEventListener("click",(function(){e._handleApproveDelete()})),this.likeBtn.addEventListener("click",(function(){e._handleLikeClick()})),this.elementCardImg.addEventListener("click",(function(){e._handleCardClick(e._item)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitBtnSelector=t.submitBtnSelector,this._disabledBtnClass=t.disabledBtnClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._btnElement=this._formElement.querySelector(this._submitBtnSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){this._errorElement=this._formElement.querySelector(".input-error-".concat(e.name)),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector(".input-error-".concat(e.name)),e.classList.remove(this._inputErrorClass),this._errorElement.textContent="",this._errorElement.classList.remove(this._errorClass)}},{key:"_toggleInputErrorState",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disabledBtn",value:function(){this._btnElement.classList.add(this._disabledBtnClass),this._btnElement.disabled=!0}},{key:"enableBtn",value:function(){this._btnElement.classList.remove(this._disabledBtnClass),this._btnElement.disabled=!1}},{key:"_toggleBtnState",value:function(){this._hasInvalidInput(this._inputList)?this.disabledBtn():this.enableBtn()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleBtnState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleInputErrorState(t),e._toggleBtnState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleBtnState(),this._inputList.forEach((function(t){e._hideInputError(t)})),this._formElement.addEventListener("submit",(function(){e._hasInvalidInput()&&e.disabledBtn()}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this.resetValidation()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var s=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_active")&&this.close(e.target)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",this._handleOverlayClose)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupFullPhoto=document.querySelector(".popup__full-photo"),t._popupFullPhotoDescription=document.querySelector(".popup__full-photo-description"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;h(b(u.prototype),"open",this).call(this),this._popupFullPhoto.src=n,this._popupFullPhoto.alt=t,this._popupFullPhotoDescription.textContent=t}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function P(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popupForm.querySelectorAll(".popup__text"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._newValues={},this._inputList.forEach((function(t){e._newValues[t.name]=t.value})),this._newValues}},{key:"close",value:function(){g(C(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()})),g(C(u.prototype),"setEventListeners",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProfile=document.querySelector(t.name),this._descriptionProfile=document.querySelector(t.info)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameProfile.textContent,info:this._descriptionProfile.textContent}}},{key:"setUserInfo",value:function(e){this._nameProfile.textContent=e.name,this._descriptionProfile.textContent=e.info}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.nameProfile,about:e.descriptionProfile})}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"delete",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"like",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"handleUserAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.userAvatar})}).then(this._checkResponse)}},{key:"getAllNeedData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function N(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=document.querySelector(".popup__form"),t._popupButton=document.querySelector(".popup__save-button"),t._popupButtonTextContent=t._popupButton.textContent,t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;D(U(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback()}))}},{key:"setSubmitAction",value:function(e){this._submitCallback=e}},{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._popupButtonTextContent}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p),J=[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],z=document.querySelector(".profile__edit-button"),G=document.querySelector(".popup__text_type_name"),H=document.querySelector(".popup__text_type_description"),M=document.querySelector(".elements__container"),K=document.querySelector(".profile__add-button"),Q=document.querySelector(".popup_type_delete-approve"),W=new R({url:"https://mesto.nomoreparties.co/v1/cohort-56",headers:{authorization:"eee6f7ec-0406-4c31-a568-3116ef8194de","Content-Type":"application/json"}}),X=new V(Q);X.setEventListeners();var Y=function(e){var t=new n("#tempalate-card",{item:e,handleCardClick:function(){$.open(e)},handleLikeCard:function(){t.handleLikeCard()},handleApproveDelete:function(){X.setSubmitAction((function(){X.renderLoading(!0),W.delete(e._id).then((function(){t.removeCard(),X.close()})).catch((function(e){return console.log(e)})).finally((function(){return X.renderLoading(!1)}))})),X.open()}});return t.generateCard()},Z=new s({items:J,renderer:function(e){var t=Y(e);Z.addItem(t)}},M);Z.renderItems(J);var $=new _(".popup_type_img");$.setEventListeners();var ee=new j(".popup_type_add",{handleSubmit:function(e){var t={name:e.place,link:e.link},n=Y(t);Z.addItem(n),ee.close()}});ee.setEventListeners();var te,ne=new T({name:".profile__name",info:".profile__description"}),re=new j(".popup_type_edit",{handleSubmit:function(e){ne.setUserInfo(e)}});re.setEventListeners(),K.addEventListener("click",(function(){ee.open()})),z.addEventListener("click",(function(){re.open();var e=ne.getUserInfo();G.value=e.name,H.value=e.info})),te={formSelector:".popup__form",inputSelector:".popup__text",submitBtnSelector:".popup__save-button",disabledBtnClass:"popup__save-button_disabled",inputErrorClass:"popup__text_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(te.formSelector)).forEach((function(e){new i(te,e).enableValidation()}))})();