import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9141417&lng=74.8559568&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
  };

  console.log("checking what is inside the resList ", resList);

  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {/* Why map cant be executed using {} and return statement need to check */}
        {/* what all powerful thing we can do inside the javascript */}
        {listOfRestaurants.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
