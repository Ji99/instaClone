import BottomNavi from "../atoms/BottomNavi";
import Navi from "../atoms/Navi";
import Articles from "./Articles";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.container}>
      <header>
        <Navi />
      </header>
      <main>
        <Articles />
      </main>
      <div>
        <BottomNavi />
      </div>
    </div>
  );
}

export default Home;
