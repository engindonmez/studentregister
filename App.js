import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { initializeApp } from "firebase/app";
import RouterComponent from './src/RouterComponent';

import reducers from './src/reducers';


class App extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCwfIyP5jF-MzA9B49yvrDKNbyd0uOnWRw",
      authDomain: "ogrencikayit-6ef21.firebaseapp.com",
      projectId: "ogrencikayit-6ef21",
      storageBucket: "ogrencikayit-6ef21.appspot.com",
      messagingSenderId: "726083856340",
      appId: "1:726083856340:web:ef87a150e4ce56b4419841",
      databaseURL: "https://ogrencikayit-6ef21-default-rtdb.firebaseio.com/"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
          <RouterComponent />
      </Provider>
    );
  }
};

export default App;
