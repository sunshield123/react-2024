import { IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating,id } = resData?.info;

  return (
    <Link to={`/restaurantMenu/${id}`}>
      <div className="res-card">
        <img className="res-logo" src={`${IMAGE_URL}${cloudinaryImageId}`} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
