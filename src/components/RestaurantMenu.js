import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9141417&lng=74.8559568&restaurantId=101111&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log("checking if render has happeneded",json)
  };
  return (
    <div className="menu">
      <h1>Menu</h1>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>v</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
