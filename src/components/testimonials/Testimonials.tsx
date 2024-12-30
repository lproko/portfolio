import "./Testimonials.scss";
import About from "../../assets/About me.webp";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Testimonials() {
  const { t } = useTranslation();
  const TAB_DATA = [
    {
      title: "Who We Are",
      id: "skills",
      content: (
        <p
          style={{
            listStyleType: "disc", // Equivalent to list-disc
            paddingLeft: "0.5rem", // Equivalent to pl-2 (8px)
          }}
        >
          {t("AboutMe.Skils")}
        </p>
      ),
    },
    {
      title: "What We Do",
      id: "education",
      content: (
        <ul
          style={{
            listStyleType: "disc", // Equivalent to list-disc
            paddingLeft: "0.5rem", // Equivalent to pl-2 (8px)
          }}
        >
          <li>
            <b>{t("AboutMe.EducaionTitle1")}</b>
            <br />
            <p>{t("AboutMe.EducaionBody1")}</p>
          </li>

          <li>
            <b>{t("AboutMe.EducaionTitle2")}</b>
            <br />
            <p>{t("AboutMe.EducaionBody2")}</p>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <p
          style={{
            listStyleType: "disc", // Equivalent to list-disc
            paddingLeft: "0.5rem", // Equivalent to pl-2 (8px)
          }}
        >
          {t("AboutMe.Certifications")}
        </p>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  console.log(isPending);
  return (
    <section
      id={t("Menu.About")}
      className="testimonials"
      style={{ color: "white" }}
    >
      <Grid
        container
        display="flex"
        spacing={2} // Equivalent to gap-8 (spacing unit is usually set in the theme, adjust as needed)
        alignItems="center" // Equivalent to items-center
        sx={{
          paddingY: { xs: 8, sm: 16 }, // py-8 for small, sm:py-16
          paddingX: { xs: 4, xl: 16 }, // px-4 for small, xl:px-16
          columnGap: { xl: 16 }, // xl:gap-16
        }}
      >
        <img src={About} className="about-me-icon" />
        <Grid
          width={{ xs: "100%", md: "50%" }}
          direction="column" // Equivalent to `flex-col`
          sx={{
            marginTop: { xs: 4, md: 0 }, // Equivalent to `mt-4 md:mt-0`
            // textAlign: "left", // Equivalent to `text-left`
            height: "100%", // Equivalent to `h-full`
          }}
        >
          <h2
            style={{
              fontSize: "2.25rem", // Equivalent to text-4xl (based on Tailwind's scale)
              fontWeight: "bold", // Equivalent to font-bold
              color: "gray", // Equivalent to text-white
              marginBottom: "1rem", // Equivalent to mb-4
            }}
          >
            {t("AboutMe.About")}
          </h2>
          <Typography
            sx={{
              fontSize: { xs: "1rem", lg: "1.125rem" }, // text-base for small screens, lg:text-lg for large screens
            }}
          >
            {t("AboutMe.Welcome")}
          </Typography>
          <Grid
            container
            direction="row" // Equivalent to flex-row
            justifyContent="flex-start" // Equivalent to justify-start
            sx={{
              marginTop: 8, // Equivalent to mt-8 (margin-top of 2rem in Tailwind)
            }}
          >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              children={t("AboutMe.Button1")}
            ></TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              children={t("AboutMe.Button2")}
            ></TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              children={t("AboutMe.Button3")}
            ></TabButton>
          </Grid>
          <Grid mt="1rem">{TAB_DATA.find((t) => t.id === tab)?.content}</Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default Testimonials;
