import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Provider } from "react-redux";
// import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Provider store={store}>
  <React.StrictMode>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </React.StrictMode>
  // </Provider>
);

// </React.StrictMode>
