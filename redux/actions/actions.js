import axios from "axios";
import { GET_WEATHER, SET_ERROR, SET_LOADING } from "../types";
import config from "../../config";

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
  console.log(city);
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.API_KEY}&units=metric`
      );
      if (!response) {
        const responseData = response.data;
        throw new Error(responseData.message);
      }

      const responseData = response.data;
      dispatch({
        type: GET_WEATHER,
        payload: responseData,
      });
      onSuccess();
      console.log(responseData);
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
      onError();
    }
  };
};

export const setError = () => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
