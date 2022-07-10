import styled from "./ArticleHeader.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function ArticleHeader() {
  return (
    <div className={styled.articleHeader}>
      <header className={styled.header}>
        <div className={styled.headerUserImg}>
          <a className={styled.userPfImg}>
            <img className={styled.userPfImg} src="img/nayeon1.png" />
          </a>
        </div>
        <div className={styled.userNameContainer}>
          <div>
            <a>junhouu_</a>
          </div>
          <div>춘천</div>
        </div>
      </header>
      <div className={styled.moreContainer}>
        <MoreHorizIcon className={styled.more}></MoreHorizIcon>
      </div>
    </div>
  );
}

export default ArticleHeader;
