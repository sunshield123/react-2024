import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalListOfRestaurants, setoriginalListOfRestaurants] =
    useState(resList);

  const [searchText, setSearchText] = useState("");

  let inputValue = ``;

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

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  const diplsaylistOfRestaurants = () =>
    listOfRestaurants.map((Restaurant) => (
      <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
    ));

  const filterTopRated = () => {
    const filteredList = originalListOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setListOfRestaurants(filteredList);
  };

  const resetFilter = () => {
    setListOfRestaurants(originalListOfRestaurants);
  };

  const searchRestaurants = () => {
    const searchedRestaurantList = originalListOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurants(searchedRestaurantList);
    setSearchText("");
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
          ></input>
          <button
            onClick={() => {
              searchRestaurants();
            }}
          >
            search
          </button>
        </div>
        <button className="filter-btn" onClick={() => filterTopRated()}>
          Top Ratd Restaurants
        </button>
        <button onClick={() => resetFilter()}>Reset Filter</button>
      </div>
      <div className="res-container">{diplsaylistOfRestaurants()}</div>
    </div>
  );
};

export default Body;
