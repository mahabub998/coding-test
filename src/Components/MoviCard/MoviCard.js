import React from 'react';
import { Link } from "react-router-dom";

const NewsShow = (props) => {
    const { name, image, id } = props.movie.show;
    return (
        <>
      <div className="col-md-3 justify-content-around ">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image.medium}
            className="img-fluid"
            alt="Responsive image"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a className="btn btn-primary">
              Movie Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsShow;