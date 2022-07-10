import UserArticle from "../atoms/userArticle/UserArticle";
import style from "./Articles.module.css";

function Article() {
  return (
    <div className={style.articleContainer}>
      <UserArticle />
    </div>
  );
}

export default Article;
