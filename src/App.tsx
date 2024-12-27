import "./App.scss";
import Topbar from "./components/topbar/Topbar";
import { Grid, Box } from "@mui/material";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Parallax from "./components/parallax/Paralax";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContextProvider } from "./context/LanguageContext";
import { ScrollProvider } from "./context/ScrollContext";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <ScrollProvider>
      <LanguageContextProvider>
        <Grid className="app">
          <Topbar />
          <Grid className="section">
            <section>
              <Intro />
            </section>
            <section>
              <Box>
                <Parallax type="portfolio" />
              </Box>
            </section>
            <section>
              <Portfolio />
            </section>
            <section>
              <Box>
                <Parallax type="services" />
              </Box>
            </section>
            <Box id="Works">
              <Works />
            </Box>

            <section>
              <Testimonials />
            </section>
            <section>
              <Contact />
            </section>
            {/* <section>
          <Footer />
        </section> */}
          </Grid>
        </Grid>
      </LanguageContextProvider>
    </ScrollProvider>
  );
}

export default App;
