import axios from "axios";
import { GET_WEATHER, SET_ERROR } from "../types";
import config from '../../config'

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
  console.log(city)
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.API_KEY}&units=metric`
      );
      console.log(response.data);
      if (response) {
        const responseData = response.data;
        throw new Error(responseData.message);
      }

      const responseData = response.data;
      dispatch({
        type: GET_WEATHER,
        payload: responseData,
      });
      onSuccess();
    } catch (error) {
      dispatch(setError(error.message));
      onError();
    }
  };
};

export const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
