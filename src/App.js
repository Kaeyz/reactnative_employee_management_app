import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC2_rPkLybQtmBS0H22UlabCIPjKDWhSBA",
      authDomain: "manager-d381d.firebaseapp.com",
      databaseURL: "https://manager-d381d.firebaseio.com",
      projectId: "manager-d381d",
      storageBucket: "manager-d381d.appspot.com",
      messagingSenderId: "177963173144"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;