import React from "react";

const Card = ({ cardData, onSelect }) => {
  const {
    name,
    capital,
    region,
    subregion,
    population,
    borders,
    languages,
    flag,
  } = cardData;

  return (
    <>
      <div className="fond">
        <span className="s1">Miskaa</span>
        <span className="s2">card</span>
      </div>
      <div className="card">
        <div className="thumbnail">
          <img src={flag} width="530" height="320px" alt="flagImg" />
        </div>
        <div className="right">
          <h1>____Miskaa App____ </h1>

          <h4>
            Name :- <span>{name}</span>
          </h4>
          <h4>
            Capital :- <span>{capital !== "" ? capital : "none"}</span>
          </h4>
          <h4>
            region :- <span>{region}</span>
          </h4>
          <h4>
            subregion :- <span>{subregion}</span>
          </h4>
          <h4>
            population :- <span>{population}</span>
          </h4>
          <h4>
            borders :- <span> {borders !== ", " ? borders : "none"}</span>
          </h4>
          <h4>
            languages :- <span>{languages}</span>
          </h4>
        </div>
        <div className="fab">
          <button onClick={onSelect}>
            <i className="fa fa-refresh fa-3x"> </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
