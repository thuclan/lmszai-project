import React from 'react';

function Card(props) {
    const { title, content, icon } = props;
    return (
      <div className="card">
        <div className="card__item">
          <div className="card__item--icon">
            <img src={icon} alt="" />
          </div>
          <div className="card__item--text">
            <h6>{title}</h6>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
}

export default Card;
