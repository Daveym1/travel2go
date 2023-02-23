import axios from "axios";

export default axios.create({
  baseURL: "https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/",
  headers: {
    "X-RapidAPI-Key": "8f70bd82damshb08f3c5921edd38p14bea1jsne8b696546714",
    "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
  },
});
