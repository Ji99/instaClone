import styled from "./ArticleFooter.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function ArticleFooter() {
  return (
    <div className={styled.container}>
      <div className={styled.menuContainer}>
        <div>
          <button className={styled.button}>
            <FavoriteBorderIcon />
          </button>
          <button className={styled.button}>
            <ChatBubbleOutlineIcon />
          </button>
          <button className={styled.button}>
            <SendOutlinedIcon />
          </button>
        </div>
        <div>
          <button className={styled.button}>
            <BookmarkBorderIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleFooter;
