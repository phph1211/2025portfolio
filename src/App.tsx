import { MainPage } from "./pages";

import { GlobalStyle } from "./styles/global";

import { useRecoilValue } from "recoil";
import { isModalOpenState } from "./store/atoms";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const isOpen = useRecoilValue(isModalOpenState);
  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
