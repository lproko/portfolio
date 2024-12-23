import "./Portfolio.scss";
import { Grid } from "@mui/material";

function Portfolio() {
  return (
    <Grid className="portfolio service component__space" id="Services">
      <Grid className="heading">
        <h1 className="heading">Services</h1>
        <p className="heading p__color">
          Website construction, promotion and support services
        </p>
      </Grid>

      <Grid container gap="1rem" mt="1rem" p="1.5rem">
        <Grid item display={{ md: "flex", xs: "grid" }} gap="1rem" xs={12}>
          <Grid className="col__3" item xs={12} md={4}>
            <Grid className="service__box pointer">
              <Grid className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </Grid>
              <Grid className="service__meta">
                <h1 className="service__text">Simple Website</h1>
                <p className="p service__text p__color">
                  Get a professional, responsive website tailored to your needs.
                  Ideal for
                </p>
                <p className="p service__text p__color">
                  small businesses or personal portfolios,our simple websites
                  combine
                </p>
                <p className="p service__text p__color">
                  sleek design with essential features to establish your online
                  presence.
                </p>
              </Grid>
            </Grid>
          </Grid>

          <Grid className="col__3" xs={12} md={4}>
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Custom Website</h1>
                <p className="p service__text p__color">
                  Transform your vision into reality with a custom-built
                  website.
                </p>
                <p className="p service__text p__color">
                  Designed from the ground up, we craft unique solutions
                </p>
                <p className="p service__text p__color">
                  that reflect your brand and deliver outstanding user
                  experiences.
                </p>
              </div>
            </div>
          </Grid>

          <Grid className="col__3" xs={12} md={4}>
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Web Application</h1>
                <p className="p service__text p__color">
                  Empower your business with custom web applications designed
                  for
                </p>
                <p className="p service__text p__color">
                  efficiency and scalability. We develop robust, secure, and
                </p>
                <p className="p service__text p__color">
                  user-friendly solutions that meet your unique requirements.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item display={{ md: "flex", xs: "grid" }} gap="1rem" xs={12}>
          <Grid className="col__3" xs={12} md={4}>
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  Search Engine Optimization (SEO)
                </h1>
                <p className="p service__text p__color">
                  Boost your online visibility and attract more traffic with our
                  expert SEO
                </p>
                <p className="p service__text p__color">
                  services. From keyword optimization to technical enhancements,
                  we
                </p>
                <p className="p service__text p__color">
                  help your website rank higher on search engines.
                </p>
              </div>
            </div>
          </Grid>

          <Grid className="col__3" xs={12} md={4}>
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Maintenance & Support</h1>
                <p className="p service__text p__color">
                  Ensure your website stays secure, up-to-date, and performs at
                  its best.
                </p>
                <p className="p service__text p__color">
                  Our maintenance and support services include updates,
                </p>
                <p className="p service__text p__color">
                  troubleshooting, and regular performance checks.
                </p>
              </div>
            </div>
          </Grid>

          <Grid className="col__3" xs={12} md={4}>
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobile App Development</h1>
                <p className="p service__text p__color">
                  Expand your reach with custom mobile apps for iOS and Android.
                  Our
                </p>
                <p className="p service__text p__color">
                  team delivers user-friendly, feature-rich applications
                  tailored to meet
                </p>
                <p className="p service__text p__color">your business goals.</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
