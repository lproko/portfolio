import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Planet from "../../assets/planets.png";
import Sun from "../../assets/sun.png";
import { useTranslation } from "react-i18next";

interface Properties {
  type: string;
}

const Parallax = (props: Properties) => {
  const ref = useRef(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #030014, #030014)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {props.type === "portfolio" ? t("Paralax.Do") : t("Paralax.Did")}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${props.type === "services" ? Planet : Sun})`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </motion.div>
  );
};

export default Parallax;
