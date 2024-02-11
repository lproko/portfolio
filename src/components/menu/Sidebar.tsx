import { Grid, Box } from "@mui/material";
import "./Menus.scss";
import Menus from "./Menus";
import MenuIcon from "./MenuIcon";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Sidebar() {
  const [open, setOpen] = useState(false);
  // const [open, setOpen]=useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 900);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const variants = {
    open: {
      clipPath: `circle(3000px at ${isMobile ? "320px" : "1880px"} 50px)`,
      transition: {
        type: "spring",
        damping: 40,
        stiffness: 100,
      },
    },
    closed: {
      clipPath: `circle(25px at ${isMobile ? "175px" : "1880px"} 50px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="sidebar">
      <motion.div className="bg" variants={variants}>
        <Menus />
      </motion.div>

      <MenuIcon setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
