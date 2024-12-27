import "./Contact.scss";
import { Grid } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import contactImg from "../../assets/contact-img.svg";
import { useState, useRef } from "react";
import TrackVisibility from "react-on-screen";
import "./Contact.scss";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) {
      console.error("Form reference is null");
      return;
    }

    setButtonText(t("Contact.Form.Sending"));
    setDisabled(true);
    emailjs
      .sendForm(
        "service_k3okjir",
        "template_qmp0ir2",
        form.current,
        "XmBGVxR1lVmj3jd2D"
      )
      .then(
        () => {
          alert("Your Message send it successfully");
          (e.target as HTMLFormElement).reset();
          setButtonText(t("Contact.Form.Send"));
          setDisabled(false);
        },
        (error) => {
          alert("FAILED..." + error.text);
        }
      );
  };

  const { t } = useTranslation();
  const [buttonText, setButtonText] = useState(t("Contact.Form.Send"));
  const [disabled, setDisabled] = useState(false);

  return (
    <Grid className="contact" id="Contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{ color: "gray" }}>{t("Contact.Contact")}</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="firstName"
                          type="text"
                          placeholder={t("Contact.Form.FirstName")}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="lastName"
                          type="text"
                          placeholder={t("Contact.Form.LastName")}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder={t("Contact.Form.Email")}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          placeholder={t("Contact.Form.Phone")}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows={6}
                          name="message"
                          placeholder={t("Contact.Form.Message")}
                        ></textarea>
                        <button type="submit" disabled={disabled}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Footer />
      </Container>
    </Grid>
  );
}

export default Contact;
