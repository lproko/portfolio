import "./Intro.scss";
import { Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import Myphoto from "../../assets/photo-of-me.png";
import Scroll from "../../assets/scroll.png";

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

const sliderVariants = {
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

function Intro() {
  return (
    <Grid className="intro" id="Homepage">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>LAUREN PROKO</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Engineer and Web developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={Scroll}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Elevate Your Web Presence!
      </motion.div>

      <Box
        component="img"
        src={Myphoto}
        alt=""
        className="imageContainer"
      ></Box>
    </Grid>
  );
}

export default Intro;
