import "./Topbar.scss";
import { Grid, Box } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { motion } from "framer-motion";
import Sidebar from "../menu/Sidebar";
import Logo from "../../assets/banner.png";
import LogoMobile from "../../assets/banner-mobile.png";
import Languages from "./Languages";
import { useTranslation } from "react-i18next";

function Topbar() {
  // const [menuOpen, setMenuOpen] = useState(false);
  const screen = window.innerWidth;
  const { t } = useTranslation();
  return (
    <Grid className={`topbar active`}>
      <Grid className="wrapper">
        <Grid className="left">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <a href={`/#${t("Menu.Home")}`} className="logo">
              <img
                src={screen < 600 ? LogoMobile : Logo}
                // width="auto"
                // height="80px"
                alt="logo"
              />
            </a>
          </motion.div>
        </Grid>
        <Grid className="midle">
          <Box className="itemContainer">
            <PhoneIphoneIcon />
            <p>+30 697 2034 969</p>
          </Box>
          <Box className="itemContainer">
            <MailOutlineIcon />
            <p>support@drweblab.gr</p>
          </Box>
        </Grid>
        <Grid display="flex" width="35%" justifyContent="flex-end">
          <Languages />
        </Grid>
        <Grid>
          <Sidebar />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Topbar;
