import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const {resId}= useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, locality } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <ul>
        <li>{cuisines}</li>
        <li>{costForTwoMessage}</li>
        <li>{locality}</li>
      </ul>
      <h1>Menu</h1>
      {itemCards.map((itemCard) => {
        return (
          <ul key={itemCard.card.info.id}>
            <li>{itemCard.card.info.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
