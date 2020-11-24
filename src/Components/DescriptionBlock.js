import React from "react";
import { useTranslation } from "react-i18next";

export default function DescriptionBlock() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <p>{t("project.descriptionDSI")}</p>
    </React.Fragment>
  );
}
