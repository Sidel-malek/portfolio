import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";

import pdf from "../../Assets/CV général référence.pdf";

import { AiOutlineDownload } from "react-icons/ai";

import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {

  const [width, setWidth] = useState(1200);

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  return (

    <Container
      fluid
      className="resume-section"
    >

      <Particle />

      <Container className="resume-container">

        {/* HEADER */}
        <div className="resume-header">

          <p className="resume-label">
            RESUME
          </p>

          <h1 className="resume-title">

            Curriculum Vitae

          </h1>

          <p className="resume-description">

            Overview of my academic background,
            technical skills,
            projects,
            and professional experience
            in Full-Stack Development
            and Artificial Intelligence.

          </p>

          {/* DOWNLOAD BUTTON */}
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="resume-download-btn"
          >

            <AiOutlineDownload />

            <span>
              Download CV
            </span>

          </a>

        </div>

        {/* PDF CARD */}
        <Row className="justify-content-center">

          <Col
            xl={10}
            lg={11}
          >

            <div className="resume-preview-card">

              <Document
                file={pdf}
                loading="Loading CV..."
                className="resume-document"
              >

                <Page
                  pageNumber={1}
                  scale={
                    width > 1200
                      ? 1.7
                      : width > 786
                      ? 1.2
                      : 0.55
                  }
                />

              </Document>

            </div>

          </Col>

        </Row>

      </Container>

    </Container>

  );
}

export default ResumeNew;