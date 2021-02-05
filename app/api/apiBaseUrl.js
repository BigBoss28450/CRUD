import { create } from "apisauce";
import appConstants from "../config/appConstants";

// define the api
export const apiBaseUrl = create({
  baseURL: appConstants.url,
});
