import React from "react";
import { useTranslation } from "react-i18next";

export default function DescriptionBlock({ translate }) {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <p className="description">{t(translate)}</p>
    </React.Fragment>
  );
}
