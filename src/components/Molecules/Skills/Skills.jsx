import React from "react";
import { Box, Typography } from "@mui/material";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux,
  SiBootstrap,
  SiFirebase,
  SiPostgresql,
  SiJquery,
  SiSass,
  SiJavascript,
  SiJson,
} from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import ApiIcon from "@mui/icons-material/Api";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupIcon from "@mui/icons-material/Group";
import LanguageIcon from "@mui/icons-material/Language";
import './skills.scss'

const skills = [
  { name: "React JS", icon: <FaReact size={50} color="gray" /> },
  { name: "Redux", icon: <SiRedux size={50} color="gray" /> },
  { name: "JavaScript", icon: <SiJavascript size={50} color="gray" /> },
  { name: "jQuery", icon: <SiJquery size={50} color="gray" /> },
  { name: "CSS", icon: <FaCss3Alt size={50} color="gray" /> },
  { name: "SASS", icon: <SiSass size={50} color="gray" /> },
  { name: "Material UI", icon: <PaletteIcon sx={{ fontSize: 50, color: "gray" }} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={50} color="gray" /> },
  { name: "HTML5", icon: <FaHtml5 size={50} color="gray" /> },
  { name: "Node JS", icon: <FaNodeJs size={50} color="gray" /> },
  { name: "JSON", icon: <SiJson size={50} color="gray" /> },
  { name: "Express.js", icon: <CodeIcon sx={{ fontSize: 50, color: "gray" }} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} color="gray" /> },
  { name: "Firebase", icon: <SiFirebase size={50} color="gray" /> },
  { name: "Git", icon: <FaGitAlt size={50} color="gray" /> },
  { name: "GitHub", icon: <GitHubIcon sx={{ fontSize: 50, color: "gray" }} /> },
  { name: "REST APIs", icon: <ApiIcon sx={{ fontSize: 50, color: "gray" }} /> },
  { name: "Scrum", icon: <GroupIcon sx={{ fontSize: 50, color: "gray" }} /> },
  { name: "English C2 Proficiency", icon: <LanguageIcon sx={{ fontSize: 50, color: "gray" }} /> },
];

const Skills = () => {
  const radius = 350;
  const centerX = radius;
  const centerY = radius;

  return (
    <div className="skills-container">
      <Box
        sx={{
          position: "relative",
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          margin: "40px",
          borderRadius: "50%",
          backgroundColor: "#feeff0",
          animation: "jump 2s ease-in-out infinite alternate",

          "@keyframes jump": {
            "0%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-20px)",
            },
            "100%": {
              transform: "translateY(0)",
            },
          },
          "@media (max-width: 838px)": {
            overflow: 'auto',
            scrollbarWidth:'none'

          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#7e7878",
            zIndex: 2,
            fontFamily: "Great Vibes",
            "@media (max-width: 838px)": {
              top: "5%",

            },
          }}
        >
          My Skills
        </Typography>
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle) - 25;
          const y = centerY + radius * Math.sin(angle) - 25;

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: `${y}px`,
                left: `${x}px`,
                textAlign: "center",
                width: "100px", // Ancho del círculo
                height: "100px", // Altura del círculo
                borderRadius: "50%", // Hace que sea un círculo
                backgroundColor: "#feeff0",

                "@media (max-width: 838px)": {
                  width: "100%", // Ancho completo para vista móvil
                  height: "auto", // Altura ajustada automáticamente
                  borderRadius: "0%", // Sin bordes redondeados, para que sea una columna
                  position: "relative", // Opcional, para mantener mejor alineación en móvil
                  top: "10%", // Resetea el posicionamiento
                  left: "auto", // Resetea el posicionamiento

                },

              }}
            >
              {skill.icon}
              <Typography variant="caption" sx={{ display: "block", marginTop: "8px" }}>
                {skill.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Skills;
