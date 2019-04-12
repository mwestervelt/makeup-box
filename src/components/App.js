import React, { useReducer, useEffect } from "react";
import "../App.css";
import Nav from "./Nav";
import Makeup from "./Makeup";
import spinner from "../large-ajax-loader.gif";
import SearchForm from "./SearchForm";

const MAKEUP_API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=colourpop"

const initialState = {
  loading: true,
  makeup: [],
  errorMessage: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MAKEUPS_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "SEARCH_MAKEUPS_SUCCESS":
      return {
        ...state,
        loading: false,
        makeup: action.payload
      }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MAKEUP_API_URL)
      .then(response => response.json())
      .then(makeupData => {
        dispatch({
          type: "SEARCH_MAKEUPS_SUCCESS",
          payload: makeupData
        });
      });
  }, []);

  // you can add this to the onClick listener of the Header component
  // const refreshPage = () => {
  //   window.location.reload();
  // };

  const search = (searchValue, dropdownValue) => {
    console.log(searchValue, dropdownValue);
    dispatch({
      type: "SEARCH_MAKEUPS_REQUEST"
    });

    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchValue}`)
      .then(response => response.json())
      .then(makeupData => {
        if (makeupData.length > 0) {
          dispatch({
            type: "SEARCH_MAKEUPS_SUCCESS",
            payload: makeupData
          });
        }
      });
  };

  const { makeup, loading } = state;

  return (
    <div className="App">
      <Nav text="Beautybook." />

      <p className="App-intro">Explore thousands of products <br></br>from the world's top beauty brands!</p>
      <SearchForm search={search} />
      <div className="makeup">
        {loading ? (
          <img className="spinner" src={spinner} alt="Loading spinner" />
        ) : (
          makeup.map((makeup) => ( <Makeup key={makeup.id} makeup={makeup} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
