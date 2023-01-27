import React from "react";
import Imgdislike from "../../assets/img/favorite.svg";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../reducks/favorites/operations";

const FavCard = ({ favorite }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div class="favorite-list">
        <div class="favorite-image">
          <img src={favorite.image} alt="" />
          <div class="like">
            <img
              src={Imgdislike}
              onClick={() => dispatch(deleteFavorite(favorite.id))}
              alt=""
            />
          </div>
        </div>
        <div class="textcontent">
          <div class="favorite-heading">
            <h1>{favorite.name}</h1>
          </div>
          <div class="gridsubheading">
            <h2>{favorite.place_type}</h2>
          </div>
          <div class="gridtext">
            <p>"Opens:"{favorite.time_to_travel}"hours"</p>
            <p>{favorite.description}</p>
          </div>
          <div class="input-button">
            <a class="direction" href={favorite.googel_map_link}>
              Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavCard;
