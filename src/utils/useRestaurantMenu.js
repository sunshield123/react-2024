import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9141417&lng=74.8559568&restaurantId=${resId}+&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json?.data);
    // resInfo=json?.data;
  };

  return resInfo;
};

export default useRestaurantMenu;
