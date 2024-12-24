import "./Testimonials.scss";
import About from "../../assets/About me.webp";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { Grid, Typography } from "@mui/material";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul
        style={{
          listStyleType: "disc", // Equivalent to list-disc
          paddingLeft: "0.5rem", // Equivalent to pl-2 (8px)
        }}
      >
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul
        style={{
          listStyleType: "disc", // Equivalent to list-disc
          paddingLeft: "0.5rem", // Equivalent to pl-2 (8px)
        }}
      >
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul
        style={{
          listStyleType: "disc", // Equivalent to list-disc
          paddingLeft: "0.5rem", // Equivalent to pl-2 (8px)
        }}
      >
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];
function Testimonials() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="testimonials text-white" id="about">
      <Grid
        id="About"
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
        <img src={About} width={650} height={650} />
        <Grid
          width="50%"
          direction="column" // Equivalent to `flex-col`
          sx={{
            marginTop: { xs: 4, md: 0 }, // Equivalent to `mt-4 md:mt-0`
            textAlign: "left", // Equivalent to `text-left`
            height: "100%", // Equivalent to `h-full`
          }}
        >
          <h2
            style={{
              fontSize: "2.25rem", // Equivalent to text-4xl (based on Tailwind's scale)
              fontWeight: "bold", // Equivalent to font-bold
              color: "#ffffff", // Equivalent to text-white
              marginBottom: "1rem", // Equivalent to mb-4
            }}
          >
            About Me
          </h2>
          <Typography
            sx={{
              fontSize: { xs: "1rem", lg: "1.125rem" }, // text-base for small screens, lg:text-lg for large screens
            }}
          >
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
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
              children="Skills"
            ></TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              children="Education"
            ></TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              children="Certifications"
            ></TabButton>
          </Grid>
          <Grid mt="1rem">{TAB_DATA.find((t) => t.id === tab)?.content}</Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default Testimonials;
