import React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import { getWeather } from "../store/actions/weatherActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather("London"));
  }, [dispatch]);

  return (
   <Form />
  );
};

export default Home;
