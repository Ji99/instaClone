import styled from "./UserArticle.module.css";

import ArticleImage from "./ArticleImage";
import ArticleHeader from "./ArticleHeader";
import ArticleFooter from "./ArticleFooter";
function UserArticle() {
  return (
    <div className={styled.articleContainer}>
      <ArticleHeader />
      <ArticleImage />
      <ArticleFooter />
    </div>
  );
}

export default UserArticle;
