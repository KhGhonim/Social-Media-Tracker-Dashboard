import { useAppDispatch } from "../../../Hooks/ReduxHooks";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown, MdOutlineLanguage } from "react-icons/md";
import { SetDirection } from "../../../Redux/userSlice";

export default function LangSelector() {
  const [language, setLanguage] = useState(
    localStorage.getItem("alpha-language") || "en"
  );
  const [IsOpened, setIsOpened] = useState(false);
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("alpha-language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    const dir = selectedLanguage === "ar" ? "rtl" : "ltr";
    dispatch(SetDirection(dir));
  };

  const handleChangeSMscreens = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem("alpha-language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    document.documentElement.dir = selectedLanguage === "ar" ? "rtl" : "ltr";
    const dir = selectedLanguage === "ar" ? "rtl" : "ltr";
    dispatch(SetDirection(dir));
    setIsOpened(false);
  };

  return (
    <div>
      <div className="hidden  lg:flex flex-col items-center ">
        <select
          id="language"
          name="language"
          value={language}
          onChange={handleChange}
          className="w-24 px-3 py-1 text-[--text-color] bg-[--rightSide-bg-color] border-dotted border rounded-lg shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none"
        >
          <option value="en">English</option>
          <option value="ar">العربية </option>
        </select>
      </div>

      <div
        onClick={() => setIsOpened(!IsOpened)}
        className=" relative lg:hidden items-center flex cursor-pointer gap-3 px-4 py-3 rounded-lg hover:bg-[--rightSide-bg-color] text-[--text-color] "
      >
        <MdOutlineLanguage />
        <div className="flex items-center gap-1">
          <h1>Languge</h1>
          <MdKeyboardArrowDown
            className={`w-4 h-4 ${
              IsOpened && "rotate-180"
            } transition-all duration-500 ease-in-out`}
          />
        </div>

        {IsOpened && (
          <div className="absolute top-12 left-0 right-0 flex flex-row justify-center py-2 items-center gap-2 bg-[--bg-color] border border-gray-300 rounded-b-lg shadow-lg">
            <div
              onClick={() => handleChangeSMscreens("en")}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                language === "en"
                  ? "bg-[--navbar] text-[--allwhite]"
                  : "bg-[--rightSide-bg-color] text-[--text-color] hover:bg-[--navbar-hover]"
              }`}
            >
              English
            </div>
            <div
              onClick={() => handleChangeSMscreens("ar")}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                language === "ar"
                  ? "bg-[--navbar] text-[--allwhite]"
                  : "bg-[--rightSide-bg-color] text-[--text-color] hover:bg-[--navbar-hover]"
              }`}
            >
              العربية
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
