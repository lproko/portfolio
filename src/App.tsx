import "./App.scss";
import Topbar from "./components/topbar/Topbar";
import { Grid, Box } from "@mui/material";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Parallax from "./components/parallax/Paralax";

function App() {
  return (
    <Grid className="app">
      <Topbar />
      <Grid className="section">
        <Intro />
        <Box id="Portfolio">
          <Parallax type="portfolio" />
        </Box>
        <Portfolio />
        <Box id="Works">
          <Parallax type="services" />
        </Box>
        <Works />
        <Testimonials />
        <Contact />
      </Grid>
    </Grid>
  );
}

export default App;
