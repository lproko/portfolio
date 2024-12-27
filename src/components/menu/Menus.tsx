import "./Menus.scss";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useScroll } from "../../context/ScrollContext";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    opacity: 1,
    textDecoration: "none",
    // overflow: "hiden",
  },
  closed: {
    opacity: 0,
    textDecoration: "none",
    // overflow: "hiden",
  },
};

function Menus() {
  const items = ["Homepage", "Portfolio", "Works", "About", "Contact"];
  const { scrollToSection } = useScroll();
  return (
    <motion.div className="list" variants={variants}>
      {items.map((item: any) => {
        return (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: { xs: "25px", md: "60px" },
              justifyContent: "center",
              alignItem: "center",
            }}
            key={item}
            // onClick={()=>{props.CloseDrawer(false)}}
          >
            <motion.a
              // href={`#${item}`}
              key={item}
              onClick={() => scrollToSection(item, 40)}
              variants={itemVariants}
              whileHover={{ fontSize: "40px" }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          </Box>
        );
      })}
    </motion.div>
  );
}

export default Menus;
