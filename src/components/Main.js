import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfoApi(), api.getInitialCards()])
      .then(([user, card]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(card);
      })
      .catch((err) => alert(err))
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img src={userAvatar} alt={userName} className="profile__img" />
          </div>
          <div className="profile__info">
            <div className="profile__description">
              <h1 className="profile__title">{userName}</h1>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button className="profile__edit-button link" type="button" onClick={onEditProfile}></button>
          </div>
        </div>
        <button className="profile__add-button link" type="button" onClick={onAddPlace}>
        </button>
      </section>
      <section className="cards">
        {
          cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id} />
          ))
        }
      </section>
    </main>
  )
}

export default Main;