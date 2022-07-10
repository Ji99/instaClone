import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Navi from "./component/atoms/Navi";
import Explore from "./component/pages/Explore";
import Activity from "./component/pages/Activity";
import UserProfile from "./component/pages/UserProfile";
import style from "./App.module.css";
function App() {
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
