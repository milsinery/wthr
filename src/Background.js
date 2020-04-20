import React, { useState, useEffect } from "react";


const Background = (bg) => {

  const getData = () => {
    fetch(
      "https://api.unsplash.com/photos/random?query=office&orientation=landscape&client_id=aL00eKfv3tjfqyTwbTlRiZyNwqUsLflrnIkY7kWIRao",
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (isDataFetched === false){
          return response.json();
        }
      })
      .then((data) => {
          setData(data);
          setBg(data.urls.regular);
          setBg(data.urls.full);
          setIsDataFetched(true);
          console.log(data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <picture
      className="weather__bg over-blur effect-zoom-out"
      alt="Background image"
    >
      <div className="weather__over"></div>
      <img src={bg} width="100%" heigth="100%" />
    </picture>
  );
};

export default Background;
