import "./index.css";
import "./i18n";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Auth/Login/Login";
import NewAccount from "./Pages/NewAccount/NewAccount";
import AddUser from "./Pages/AddUser/AddUser";
import UpdateProfile from "./Pages/UpdateProfileForm/UpdateProfileForm";
import ErrorNotFound from "./Pages/Error/ErrorNotFound";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./Pages/Loading/Loading";
import HandlerRoutes from "./Redux/Routes/HandlerRoutes";
import Growth from "./Pages/Growth/Growth";
import SocialMedia from "./Pages/SocialMedia/SocialMedia";
import Achievements from "./Pages/Achievements/Achievements";
import OP from "./Pages/OP/OP";
import HungerGames from "./Pages/HungerGames/HungerGames";
import ChallengePage from "./Pages/ChallengePage/ChallengePage";
import Analytics from "./Pages/Analytics/Analytics";
import UpdateSMAcc from "./Pages/UpdateSMAcc/UpdateSMAcc";
import ProtectedRoutes from "./Redux/Routes/ProtectedRoutes";
import SoloCompetition from "./Pages/SoloCompetition/SoloCompetition";
import AI from "./Pages/AI/AI";
import ReviewGrowth from "./Pages/ReviewGrowth/ReviewGrowth";
import SocialMediaTable from "./Pages/SocialMediaTable/SocialMediaTable";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<ErrorNotFound />} />

          <Route element={<HandlerRoutes />}>
            <Route path="/" element={<App />} />
            <Route index element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<UpdateProfile />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/add-new-account" element={<NewAccount />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/join-competition" element={<HungerGames />} />
            <Route path="/solo-competition" element={<SoloCompetition />} />
            <Route path="/challenge/:gameId" element={<ChallengePage />} />
            <Route path="/profile/account/:accId" element={<UpdateSMAcc />} />

            <Route
              path="/add-new-user"
              element={
                <ProtectedRoutes allowedRoles={["Operation Manager", "Admin"]}>
                  <AddUser />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/analytics"
              element={
                <ProtectedRoutes allowedRoles={["Operation Manager", "Admin"]}>
                  <Analytics />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/operation-management"
              element={
                <ProtectedRoutes allowedRoles={["Operation Manager", "Admin"]}>
                  <OP />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/social-media"
              element={
                <ProtectedRoutes allowedRoles={["Team Leader", "Admin"]}>
                  <SocialMedia />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/review-growth"
              element={
                <ProtectedRoutes allowedRoles={["Team Leader", "Admin"]}>
                  <ReviewGrowth />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/social-media-table"
              element={
                <ProtectedRoutes allowedRoles={["Operation Manager", "Admin"]}>
                  <SocialMediaTable />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
