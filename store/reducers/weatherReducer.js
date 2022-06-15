import { GET_WEATHER, SET_ERROR } from "../types";

const initialState = {
  data: null,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        data: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
