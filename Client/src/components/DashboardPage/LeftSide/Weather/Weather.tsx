import { FaSpinner, FaThermometerEmpty } from "react-icons/fa";
import { useState, useEffect } from "react";
import { weatherAPI } from "../../../../Keys/envKeys";
import { useTranslation } from "react-i18next";

export default function Weather() {
  const [data, setdata] = useState<number | null>(null);
  const [loading, setloading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const SearchTool = async () => {
      setloading(true);
      try {
        const res = await fetch(weatherAPI);
        const data = await res.json();
        setdata(data.main.temp);
        setloading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };

    SearchTool();
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-black ">
        <FaThermometerEmpty className="h-4 w-4" />
        <p className="leading-loose text-base lg:text-3xl">
          {loading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            (((data - 32) * 5) / 9).toFixed(0)
          )}
          °C
        </p>
        <span className="text-black  text-xs lg:text-3xl">
          {t('outdoorTemperature')}
        </span>
      </div>
    </div>
  );
}
