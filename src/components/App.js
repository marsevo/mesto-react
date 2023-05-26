import React from "react";
 import Header from "./Header";
 import Main from "./Main";
 import Footer from "./Footer";
 import PopupWithForm from "./PopupWithForm";
 import ImagePopup from "./ImagePopup";

 function App() {
   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
   const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
   const [selectedCard, setSelectedCard] = React.useState({});

   function handleEditAvatarClick() {
     setIsEditAvatarPopupOpen(true);
   }

   function hendleEditProfileClick() {
     setIsEditProfilePopupOpen(true);
   }

   function hendleAddPlaceClick() {
     setIsAddPlacePopupOpen(true);
   }

   function closeAllPopups() {
     setIsEditAvatarPopupOpen(false);
     setIsEditProfilePopupOpen(false);
     setIsAddPlacePopupOpen(false);
     setIsImagePopupOpen(false);
   }

   function handleCardClick(card) {
     setSelectedCard(card);
     setIsImagePopupOpen(true);
   }

   return (
     <div className="page">
       <Header />
       <Main
         onEditAvatar={handleEditAvatarClick}
         onEditProfile={hendleEditProfileClick}
         onAddPlace={hendleAddPlaceClick}
         onCardClick={handleCardClick}
       />
       <Footer />

       <PopupWithForm
       name="avatar"
       id="update-avatar"
       title="Обновить аватар"
       isOpen={isEditAvatarPopupOpen}
       onClose={closeAllPopups}>
       <input
         id="link-avatar"
         type="url"
         name="avatar"
         className="popup__text"
         placeholder="Ссылка на аватар"
         required />
         <span id="link-avatar-error" className="popup__error"></span>
       </PopupWithForm>

       <PopupWithForm
       name="profile"
       id="edit-popup"
       title="Редактировать профиль"
       isOpen={isEditProfilePopupOpen}
       onClose={closeAllPopups}>
       <input
         id="user-name-input"
         type="text"
         name="name"
         className="popup__text"
         placeholder="Укажите имя"
         minLength="2"
         maxLength="40"
         required />
         <span id="user-name-input-error" className="popup__error"></span>
         <input
         id="user-about-input"
         type="text"
         name="about"
         className="popup__text"
         placeholder="Укажите професcию"
         minLength="2"
         maxLength="200"
         required />
         <span id="user-about-input-error" className="popup__error"></span>    
       </PopupWithForm>

       <PopupWithForm
       name="place"
       id="add-popup"
       title="Новое место"
       isOpen={isAddPlacePopupOpen}
       onClose={closeAllPopups}>
         <input
         id="input-title"
         type="text"
         name="name"
         className="popup__text"
         placeholder="Название"
         minLength="2"
         maxLength="30"
         required />
         <span id="place-name-error" className="popup__error"></span>
         <input
         id="input-title"
         type="url"
         name="link"
         className="popup__text"
         placeholder="Ссылка на картинку"
         required />
         <span id="image-link-error" className="popup__error"></span>
       </PopupWithForm>

       <ImagePopup
       card={selectedCard}
       isOpen={isImagePopupOpen}
       onClose={closeAllPopups}>
       </ImagePopup>

     </div>
   )
 }

 export default App;