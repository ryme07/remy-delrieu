import React, { useState } from "react";
import "../Style/About.scss";
import bobby from "../Assets/bonhomme.svg";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const getCurrentYear = () => new Date().getFullYear();

  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Email Copied");
    } catch (err) {
      setCopySuccess("Failed to copy !");
    }
  };
  return (
    <div className="about-component">
      <h2>{t("about.title")}</h2>
      <div className="about-container">
        <p className="describeMe">{t("about.me")}</p>
        <img className="image" src={bobby} alt="little-man-logo" />
      </div>
      <div className="contact-container">
        <div className="icons">
          <p>
            <i>
              <a
                href="https://www.linkedin.com/in/remy-delrieu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin size={25} />
              </a>
            </i>
            <i>
              <a
                href="https://github.com/ryme07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImGithub size={25} />
              </a>
            </i>
          </p>
        </div>

        <div className="mail">
          <p>
            <a
              onClick={() => copyToClipBoard("remydelrieudev@gmail.com")}
              href="#sayhello"
            >
              remydelrieudev@gmail.com
              <span>{copySuccess}</span>
            </a>
          </p>
        </div>
        <p className="designed">
          Designed & Built by Remy Delrieu - {getCurrentYear()}
        </p>
      </div>
    </div>
  );
}
