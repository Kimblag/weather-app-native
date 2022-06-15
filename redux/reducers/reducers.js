import { GET_WEATHER, SET_LOADING, SET_ERROR } from "../types";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
