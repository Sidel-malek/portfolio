import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
} from "react-icons/di";

import {
  SiPytorch,
  SiScikitlearn,
  SiApachekafka,
  SiRedis,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiSpringboot,
  SiDjango,
  SiApachespark,
  SiApachehadoop,
} from "react-icons/si";

function Techstack() {

  const categories = [

    {
      title: "Backend Engineering",
      technologies: [
        {
          icon: <DiJava />,
          name: "Java",
        },

        {
          icon: <SiSpringboot />,
          name: "Spring Boot",
        },

        {
          icon: <DiNodejs />,
          name: "Node.js",
        },

        {
          icon: <SiDjango />,
          name: "Django",
        },
      ],
    },

    {
      title: "Frontend Development",
      technologies: [
        {
          icon: <DiReact />,
          name: "React.js",
        },

        {
          icon: <SiNextdotjs />,
          name: "Next.js",
        },

        {
          icon: <DiAngularSimple />,
          name: "Angular",
        },

        {
          icon: <DiJavascript1 />,
          name: "JavaScript",
        },

        {
          icon: <SiTypescript />,
          name: "TypeScript",
        },
      ],
    },

    {
      title: "Artificial Intelligence",
      technologies: [
        {
          icon: <DiPython />,
          name: "Python",
        },

        {
          icon: <SiPytorch />,
          name: "PyTorch",
        },

        {
          icon: <SiScikitlearn />,
          name: "Scikit-learn",
        },
      ],
    },

    {
      title: "Databases",
      technologies: [
        {
          icon: <DiMongodb />,
          name: "MongoDB",
        },

        {
          icon: <SiMysql />,
          name: "MySQL",
        },

        {
          icon: <SiPostgresql />,
          name: "PostgreSQL",
        },

        {
          icon: <SiRedis />,
          name: "Redis",
        },
      ],
    },

    {
      title: "Distributed Systems",
      technologies: [
        {
          icon: <SiApachekafka />,
          name: "Kafka",
        },

        {
          icon: <SiApachespark />,
          name: "Apache Spark",
        },

        {
          icon: <SiApachehadoop />,
          name: "Apache Hadoop",
        },
      ],
    },

    {
      title: "Version Control",
      technologies: [
        {
          icon: <DiGit />,
          name: "Git",
        },
      ],
    },

  ];

  return (

    <div className="techstack-wrapper">

      {categories.map((category, index) => (

        <div
          key={index}
          className="tech-category-section"
        >

          {/* CATEGORY TITLE */}
          <h2 className="tech-category-title">

            {category.title}

          </h2>

          {/* GRID */}
          <Row className="justify-content-center">

            {category.technologies.map((tech, i) => (

              <Col
                key={i}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                className="mb-4"
              >

                <div
                  className="tech-card"
                  title={tech.name}
                >

                  <div className="tech-icon">

                    {tech.icon}

                  </div>

                  <p className="tech-name">

                    {tech.name}

                  </p>

                </div>

              </Col>

            ))}

          </Row>

        </div>

      ))}

    </div>

  );
}

export default Techstack;