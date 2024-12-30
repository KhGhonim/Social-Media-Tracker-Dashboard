import Lottie from "lottie-react";
import GoodMoring from "../../../../assets/Good Moring.json";
import MaleonChair from "../../../../assets/Male on Chair.json";
import DogSleeping from "../../../../assets/DogSleeping.json";
import Weather from "../Weather/Weather";
import clouds from "../../../../assets/clouds.png";
import stars from "../../../../assets/Stars.jpg";
import landing from "../../../../assets/landing.png";
import longtree from "../../../../assets/longtree.png";
import smalltree from "../../../../assets/smalltree.png";
import { useAppSelector } from "../../../../Hooks/ReduxHooks";
import { useTranslation } from "react-i18next";
import { UserCurrentStatus } from "../../../../types/types";

export default function WelcomeAnimation() {
  const date = new Date().getHours();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <div
      className={`w-full p-6 relative rounded-3xl overflow-hidden ${
        date <= 12
          ? "bg-gradient-to-r from-orange-100 to-orange-50"
          : "bg-gradient-to-r from-[#E8F3F8] to-[#E8F3F8]/90"
      }`}
    >
      <div className="flex justify-between items-start flex-col lg:flex-row">
        {date < 18 ? (
          <div className="space-y-4 pr-5  z-10">
            <div className="space-y-2 w-full">
              <h1 className="text-sm lg:text-3xl font-bold text-blackcapitalize">
                {t("greeting")}, {userCurrentStatus.user.name}!
              </h1>
              <p className="text-black text-xs">
                {t("welcomeBack")} <br />
                {t("airQuality")}
              </p>
            </div>

            {/* Weather forecast */}
            <Weather />
          </div>
        ) : (
          <div className="space-y-4 pr-5  z-10">
            <div className="space-y-2 w-full">
              <h1 className="text-sm lg:text-3xl font-bold text-[--allwhite]  capitalize">
                {t("greeting")}, {userCurrentStatus.user.name}!
              </h1>
              <p className="text-[--allwhite]  text-xs">
                {t("welcomeBack")} <br />
                {t("airQuality")}
              </p>
            </div>

            {/* Weather forecast */}
            <Weather />
          </div>
        )}

        <div className="relative w-64 h-40 z-10 ">
          {date <= 12 ? (
            <Lottie
              className="w-full h-full"
              animationData={GoodMoring}
              loop={true}
            />
          ) : date < 18 ? (
            <Lottie
              className="w-full h-full"
              animationData={MaleonChair}
              loop={true}
            />
          ) : (
            <Lottie
              className="w-full h-full"
              animationData={DogSleeping}
              loop={true}
            />
          )}
        </div>
      </div>

      {/* Background decorative elements */}
      {date < 18 ? (
        <div>
          <img
            className={`absolute ${
              userCurrentStatus.user.direction === "rtl"
                ? "top-1 left-0 lg:left-12"
                : "top-1 right-0 lg:right-12"
            } z-10 text-orange-500`}
            src={clouds}
            alt="clouds"
            loading="lazy"
          />
          <img
            className="absolute bottom-0 right-0 z-0 text-orange-500"
            src={landing}
            alt="clouds"
            loading="lazy"
          />
          <img
            className="absolute bottom-0 right-3 z-10 text-orange-500"
            src={smalltree}
            alt="clouds"
            loading="lazy"
          />
          <img
            className="absolute bottom-0 right-12 z-10 text-orange-500"
            src={longtree}
            alt="clouds"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-full h-full">
          <img
            loading="lazy"
            className="absolute inset-0 z-0"
            src={stars}
            alt="stars"
          />
        </div>
      )}
    </div>
  );
}
