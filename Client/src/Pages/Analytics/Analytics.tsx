import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import useFetchAnalytics from "../../Hooks/GrowtHooks/GetAnalytics";
import AnalyticsTable from "../../components/AnalyticsPage/AnalyticsTable/AnalyticsTable";
import Loading from "../../Pages/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import { SetDirection } from "../../Redux/userSlice";

export default function Analytics() {
  const [Col1] = useState("id");
  const [Col2] = useState("acc_region");
  const [Col3] = useState("acc_category");
  const [Col4] = useState("acc_country");
  const [Col5] = useState("acc_platform");
  const [Col7] = useState("acc_url");
  const [Col8] = useState("acc_state");
  const [Col9] = useState("acc_fs");
  const [Col10] = useState("acc_fw");
  const [Col11] = useState("acc_post");
  const [Col12] = useState("acc_retweet");
  const [Col13] = useState("acc_likes");
  const [Col14] = useState("acc_comments");
  const [Col15] = useState("acc_friends");
  const [Col16] = useState("acc_imp");
  const [Col17] = useState("acc_karma");
  const [Col18] = useState("acc_pins");
  const [Col19] = useState("acc_votes");
  const [Col20] = useState("acc_vs");
  const [Col6] = useState("acc_articles");
  const { data, loading } = useFetchAnalytics();

  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

      const dispatch = useAppDispatch();
      useEffect(() => {
        const direction = userCurrentStatus.user.direction;
        if (!direction || direction === "undefined") {
          const lang = localStorage.getItem("i18nextLng") || "ar";
          document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
          dispatch(SetDirection(document.documentElement.dir));
        } else {
          document.documentElement.dir = direction;
        }
      }, [dispatch, userCurrentStatus.user.direction]);

  return (
    <div className="cairo-ALAPHA bg-[--bg-color] h-full lg:h-screen">
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />

      <main className="flex flex-col lg:flex-row gap-5">
        <section
          className={`analytics-overview w-full lg:pr-5  max-sm:p-5 ${
            userCurrentStatus.user.direction === "rtl"
              ? "lg:!pr-32 lg:!pl-5"
              : "lg:pl-32 lg:pr-5"
          }  h-[85vh] flex flex-col`}
        >
          {loading ? (
            <Loading />
          ) : data && data.length > 0 ? (
            <AnalyticsTable
              AnalyticsTableData={data}
              Col1={Col1}
              Col2={Col2}
              Col3={Col3}
              Col4={Col4}
              Col5={Col5}
              Col6={Col6}
              Col7={Col7}
              Col8={Col8}
              Col9={Col9}
              Col10={Col10}
              Col11={Col11}
              Col12={Col12}
              Col13={Col13}
              Col14={Col14}
              Col15={Col15}
              Col16={Col16}
              Col17={Col17}
              Col18={Col18}
              Col19={Col19}
              Col20={Col20}
            />
          ) : (
            <div className="flex w-full h-full items-center justify-center text-red-600">
              <p>No Data Found</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
