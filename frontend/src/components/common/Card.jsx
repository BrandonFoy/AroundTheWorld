import React, { useEffect, useState } from "react";
import { addFavorite } from "../../reducks/favorites/operations";
import { getFavorites } from "../../reducks/favorites/selectors";
import { useSelector, useDispatch } from "react-redux";
import Imglike from "../../assets/img/favorite.svg";
//import Places from "../../containers/Places"

const Card = ({ place }) => {
  const dispatch = useDispatch();
  const clickFavorite = (place) => {
    dispatch(addFavorite(place));
  };
  const selector = useSelector((state) => state);
  const favorites = getFavorites(selector);
  const [setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoritePlace = favorites.filter(
      (favorite) => favorite.id === place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favorites]);

  return (
    <>
        <div class="category-list">
          <div className="category-image">
            <img src={place.image} alt="" />
            <div class="like">
              <img
                src={Imglike}
                onClick={() => {
                  clickFavorite(place);
                }}
                alt=""
              />
            </div>
          </div>
          <div class="category-text">
            <div class="category-heading">
              <h1>{place.name}</h1>
            </div>
            <div class="gridsubheading">
              <h2>{place.place_type}</h2>
            </div>
            <div class="gridtext">
              <p>"Opens"{place.time_to_travel}"hours."</p>

              <p>{place.description}</p>
            </div>
            <div class="input-button">
              <a href={place.googel_map_link} target="_blank" rel="noopener noreferrer">
                {" "}
                Direction{" "}
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;