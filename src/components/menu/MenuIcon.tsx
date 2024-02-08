import { Grid } from "@mui/material";
import "./Menus.scss";
import { useState } from "react";
import { motion } from "framer-motion";
interface Properties {
  setOpen: (open: boolean) => void;
}

function MenuIcon(props: Properties) {
  const [closed, setClosed] = useState(true);
  return (
    <Grid
      className="humbutton"
      onClick={() => {
        setClosed(!closed);
        props.setOpen(closed);
      }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </Grid>
  );
}

export default MenuIcon;
