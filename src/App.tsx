import React from "react";

import { MainPage } from "./pages";

import { GlobalStyle } from "./styles/global";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
