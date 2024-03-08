import "./Works.scss";
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import People from "../../assets/people.webp";
import Web from "../../assets/cards/web_icon.svg";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
function Works() {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="works"
      variants={variants}
      initial="initial"
      //animate="animate"
      //whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={People} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
        <Card
          sx={{
            maxWidth: 240,
            height: "230px",
            background: "transparent",
            color: "white",
          }}
        >
          <CardActionArea>
            <Box
              width="100%"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                height="48px"
                width="48px"
                sx={{
                  borderRadius: "50%",
                  border: "solid 2px #8b5cf6",
                }}
              >
                <img
                  style={{ paddingTop: "5px", paddingLeft: "6px" }}
                  src={Web}
                  alt="web"
                />
              </Box>
            </Box>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Custom Web Development
              </Typography>
              <Typography variant="body2">
                - Tailored solutions designed to meet your unique business
                needs.
              </Typography>
              <Typography variant="body2">
                - From concept to deployment, we create websites from scratch.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 240, height: "230px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50"
              image="../../src/assets/web-development.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custom Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Tailored solutions designed to meet your unique business
                needs.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - From concept to deployment, we create websites from scratch.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 240, height: "230px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50"
              image="../../src/assets/web-development.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custom Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Tailored solutions designed to meet your unique business
                needs.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - From concept to deployment, we create websites from scratch.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Card sx={{ maxWidth: 345, height: "280px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../src/assets/web-development.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custom Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Tailored solutions designed to meet your unique business
                needs.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - From concept to deployment, we create websites from scratch.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, height: "280px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../src/assets/web-development.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custom Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Tailored solutions designed to meet your unique business
                needs.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - From concept to deployment, we create websites from scratch.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, height: "280px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../src/assets/web-development.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custom Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Tailored solutions designed to meet your unique business
                needs.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - From concept to deployment, we create websites from scratch.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Card sx={{ maxWidth: 345, height: "280px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../src/assets/web-development.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custom Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Tailored solutions designed to meet your unique business
                needs.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - From concept to deployment, we create websites from scratch.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, height: "280px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../src/assets/web-development.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custom Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Tailored solutions designed to meet your unique business
                needs.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - From concept to deployment, we create websites from scratch.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, height: "280px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../src/assets/web-development.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custom Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Tailored solutions designed to meet your unique business
                needs.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - From concept to deployment, we create websites from scratch.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default Works;
