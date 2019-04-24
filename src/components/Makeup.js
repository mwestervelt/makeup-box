import React from "react";


  const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

  const Makeup = ({ makeup }) => {
    const thumb =
      makeup.api_featured_image === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : makeup.api_featured_image;

    return (

<div className="makeup">
          <h2>{makeup.name}</h2>
          <h4>{makeup.brand}</h4>
          <div>
            <img

              alt={makeup.name}
              src={thumb}
            />
          </div>
          <p>${makeup.price}0</p>
</div>
      )
    }

export default Makeup;
