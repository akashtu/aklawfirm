import React from "react";
import "./Faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import button_icon from "../Assets/Button.png";

export const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-component-1">
        <p className="faq-component-para-1">FAQ</p>
        <p className="faq-component-para-2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className="faq-component-2">
        <Accordion
          style={{
            backgroundColor: "black",
            borderBottom: "2px solid rgba(255, 255,255, 0.2)",
            padding: "20px 0px",
          }}
        >
          <AccordionSummary
            expandIcon={<img src={button_icon} alt="" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              Do I need a personal injury report?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                color: "white",
                opacity: "30%",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "start",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "black",
            borderBottom: "2px solid rgba(255, 255,255, 0.2)",
            padding: "20px 0px",
          }}
        >
          <AccordionSummary
            expandIcon={<img src={button_icon} alt="" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                color: "white",
                opacity: "30%",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "start",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "black",
            borderBottom: "2px solid rgba(255, 255,255, 0.2)",
            padding: "20px 0px",
          }}
        >
          <AccordionSummary
            expandIcon={<img src={button_icon} alt="" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              What should I do right after car accidect
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                color: "white",
                opacity: "30%",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "start",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "black",
            borderBottom: "2px solid rgba(255, 255,255, 0.2)",
            padding: "20px 0px",
          }}
        >
          <AccordionSummary
            expandIcon={<img src={button_icon} alt="" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                color: "white",
                opacity: "30%",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "start",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
