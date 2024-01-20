import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  console.log("checking", resData);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${IMAGE_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
