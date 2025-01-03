import "./Intro.scss";
import { Grid, Box } from "@mui/material";
import { motion, Variants } from "framer-motion";
import Myphoto from "../../assets/mainIconsdark.svg";
import Scroll from "../../assets/scroll.png";
import BlackHole from "../../assets/blackhole.webm";
import { useTranslation } from "react-i18next";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};
const slideInFromRight = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

function Intro() {
  const { t } = useTranslation();
  return (
    <Grid className="intro" id={t("Menu.Home")}>
      <video
        autoPlay
        muted
        loop
        className="videoAnimation rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src={BlackHole} type="video/webm" />
      </video>
      <Grid className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>
            <p>{t("Intro.FirstLine")}</p>
            {t("Intro.SecondLine")}
          </motion.h1>
          <motion.h3 variants={textVariants}>{t("Intro.ThirdLine")}</motion.h3>

          <motion.div variants={textVariants} className="buttons">
            <a href={`/#${t("Menu.Works")}`}>
              <motion.button variants={textVariants}>
                {t("Intro.WorkButton")}
              </motion.button>
            </a>
            <a href={`/#${t("Menu.Contact")}`}>
              <motion.button variants={textVariants}>
                {t("Intro.ContactMe")}
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={Scroll}
            alt=""
          />
        </motion.div>
      </Grid>
      <Grid className="rightWrapper">
        <motion.div
          initial="initial"
          animate="animate"
          variants={slideInFromRight}
        >
          <Box
            component="img"
            src={Myphoto}
            alt=""
            // className="imageContainer"
          ></Box>
        </motion.div>
      </Grid>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {t("Intro.Animation")}
      </motion.div>
    </Grid>
  );
}

export default Intro;
