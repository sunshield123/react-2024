import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}= useParams();

  console.log("checking what is in the resId  ", resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9141417&lng=74.8559568&restaurantId=${resId}+&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log("sss", json);
    setResInfo(json.data);
    console.log("sss", resInfo?.cards[0]?.card?.card?.info?.name);
  };
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
