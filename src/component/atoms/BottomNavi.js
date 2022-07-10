import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import style from "./BottomNavi.module.css";
import { NavLink } from "react-router-dom";

function BottomNavi() {
  const activeStyle = {
    color: "orange",
  };

  return (
    <div className={style.naviContainer}>
      <div className={style.naviIcon}>
        <NavLink
          className={style.link}
          style={({ isActive }) =>
            isActive ? { color: "rgba(0,0,0,0.8)" } : undefined
          }
          to="/"
        >
          <HomeOutlinedIcon sx={{ fontSize: 34 }}></HomeOutlinedIcon>
        </NavLink>
      </div>
      <div className={style.naviIcon}>
        <NavLink
          className={style.link}
          style={({ isActive }) =>
            isActive ? { color: "rgba(252, 175, 69,0.8)" } : undefined
          }
          to="/explore"
        >
          <SearchOutlinedIcon sx={{ fontSize: 33 }}></SearchOutlinedIcon>
        </NavLink>
      </div>
      <div className={style.naviIcon}>
        <AddBoxOutlinedIcon sx={{ fontSize: 33 }}></AddBoxOutlinedIcon>
      </div>
      <div className={style.naviIcon}>
        <NavLink
          className={style.link}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "rgba(253, 29, 29,0.8)",
                }
              : undefined
          }
          to="/activity"
        >
          <FavoriteBorderOutlinedIcon
            sx={{ fontSize: 33 }}
          ></FavoriteBorderOutlinedIcon>
        </NavLink>
      </div>
      <div className={style.naviIcon}>
        <NavLink
          className={style.link}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "rgba(64, 93, 230,0.8)",
                }
              : undefined
          }
          to="/user"
        >
          <AccountBoxOutlinedIcon
            sx={{ fontSize: 33 }}
          ></AccountBoxOutlinedIcon>
        </NavLink>
      </div>
    </div>
  );
}

export default BottomNavi;
