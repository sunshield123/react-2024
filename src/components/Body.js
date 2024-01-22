import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [originalListOfRestaurants, setoriginalListOfRestaurants] =
    useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setoriginalListOfRestaurants(
      json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurants(originalListOfRestaurants);
  };
  console.log("checking what is inside the resList ", resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Ratd Restaurants
        </button>
        <button
          onClick={() => {
            setListOfRestaurants(originalListOfRestaurants);
          }}
        >
          Reset Filter
        </button>
      </div>
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
