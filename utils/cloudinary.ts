import { v2 as cloudinary } from "cloudinary";
import { CLOUD_API_KEY, CLOUD_NAME, CLOUD_SECRET } from "./constant";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_SECRET,
});

export default cloudinary;
