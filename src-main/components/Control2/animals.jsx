import React, { useState } from "react";

const AnimalsLsit = ({ id, nom, espece, age, descr, image, liked }) => {
  const [like, setLike] = useState(true);

  return (
    <>
      <div className="card" style={{ width: 18 + "rem" }}>
        <img className="card-img-top" src={image} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{nom}</h5>
          <p className="card-text">
            -La dsecription: {nom} est un {espece}, son age est {age} ans.
            <br />
            <br />
            -Les caracteristique: {descr}.
          </p>
          {like ? (
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
              onClick={() => {
                setLike(false);
                console.log("You liked " + nom);
              }}
            >
              Like
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-success"
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
              onClick={() => {
                setLike(true);
                console.log("You disliked " + nom);
              }}
            >
              Dislike
            </button>
          )}
          <br />
          <br />
          <a href="hs" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <br />
    </>
  );
};
export default AnimalsLsit;
