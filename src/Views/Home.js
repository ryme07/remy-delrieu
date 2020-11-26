import React from "react";
import { useTranslation } from "react-i18next";
import "../Style/Home.scss";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="main-container">
      <div className="title">
        <div className="vertical-line"></div>
        <div className="presents">
          <p>{t("welcome.hello")}</p>
          <h1>REMY DELRIEU</h1>
          <p>{t("welcome.title")}</p>
        </div>
      </div>
    </div>
  );
}
