import { useTranslation } from "react-i18next";

export default function DetailItem({ label, value }) {
  const { t } = useTranslation();
  return (
    <div>
      <p
        className={`text-sm capitalize  text-[--text-color] ${
          label === null ? "text-red-500" : ""
        }`}
      >
        {label === null ? "Please Add the Link!" : t(label)}
      </p>
      <p
        className={`text-sm capitalize  text-[--text-color] ${
          value === null ? "text-red-500" : ""
        }`}
      >
        {value === null ? t("Please Add the Link!") : value}
      </p>
    </div>
  );
}
