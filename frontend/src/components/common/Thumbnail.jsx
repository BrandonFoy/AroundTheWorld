import React, { useState, useEffect } from "react";
import Imglike from "../../assets/img/favorite.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../reducks/favorites/operations";
import { getFavorites } from "../../reducks/favorites/selectors";

const Thumbnail = ({ place }) => {
  const dispatch = useDispatch();
  const clickFavorite = (place) => {
    dispatch(addFavorite(place));
  };
  const selector = useSelector((state) => state);
  const favorites = getFavorites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
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
      <div class="item">
        <div class="item-image">
          {showLikeButton && (
            <div class="like">
              <img
                class="like"
                src={Imglike}
                alt="favorite"
                onClick={() => {
                  clickFavorite(place);
                }}
              />
            </div>
          )}
          <img src={place.image} alt="place" />
        </div>
        <div class="item-text">
          <h1>{place.name}</h1>
          <p>{place.description}</p>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;