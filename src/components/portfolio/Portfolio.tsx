import "./Portfolio.scss";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <Grid
      className="portfolio service component__space"
      id={t("Menu.Portfolio")}
    >
      <Grid className="heading">
        <h1 className="heading">{t("Services.Header")}</h1>
        <p className="heading p__color">{t("Services.Description")}</p>
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
                <h1 className="service__text">{t("Services.Service1")}</h1>
                <p className="p service__text p__color">
                  {t("Services.Service1Description")}
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
                <h1 className="service__text">{t("Services.Service2")}</h1>
                <p className="p service__text p__color">
                  {t("Services.Service2Description")}
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
                <h1 className="service__text">{t("Services.Service3")}</h1>
                <p className="p service__text p__color">
                  {t("Services.Service3Description")}
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
                <h1 className="service__text">{t("Services.Service4")}</h1>
                <p className="p service__text p__color">
                  {t("Services.Service4Description")}
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
                <h1 className="service__text">{t("Services.Service5")}</h1>
                <p className="p service__text p__color">
                  {t("Services.Service5Description")}
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
                <h1 className="service__text">{t("Services.Service6")}</h1>
                <p className="p service__text p__color">
                  {t("Services.Service6Description")}
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
