import { useState } from "react";
import "./Card.css";

function Card({ content }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardClassName = `card__inner ${isFlipped ? "is-flipped" : ""}`;
  return (
    <div className="card" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={cardClassName}>
        <div className="card__face card__face--front">
          <h2>Question</h2>
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <div className="card__header">
              <h2>{content}</h2>
            </div>
            <div className="card__body">
              <img
                src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1571606036"
                alt=""
    className='thinking'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
