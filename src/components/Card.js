import React from "react";

 function Card({ card, onCardClick }) {
   const handleClick = () => onCardClick(card);

   return (
     <article className="card">
       <button className="card__delete-button"></button>
       <img className="card__image" alt={card.name} src={card.link} onClick={handleClick} />
         <div className="card__description">
           <h2 className="card__title">{card.name}</h2>
           <div className="card__like-container">
             <button className="card__like-button"></button>
             <span className="card__like-counter">{card.likes.length}</span>
           </div>
         </div>
     </article>
   )
 }

 export default Card;