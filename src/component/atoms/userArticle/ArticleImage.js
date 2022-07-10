import styled from "./ArticleImage.module.css";

function UserArticleImage() {
  return (
    <div className={styled.articlePhoto}>
      <div className={styled.photoContainer}>
        <img className={styled.image} src="img/nayeon2.png" />
      </div>
    </div>
  );
}

export default UserArticleImage;
