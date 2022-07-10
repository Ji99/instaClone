import style from "./Navi.module.css";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
function Navi() {
  return (
    <div className={style.naviContainer}>
      <CameraAltOutlinedIcon sx={{ fontSize: 30 }}></CameraAltOutlinedIcon>
      <h2 className={style.headName}>Instagram</h2>
      <SendOutlinedIcon sx={{ fontSize: 30 }}></SendOutlinedIcon>
    </div>
  );
}

export default Navi;
