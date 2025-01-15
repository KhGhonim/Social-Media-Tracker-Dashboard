import NotAllowedPage from "../../Pages/NotAllowed/NotAllowedPage";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { Outlet } from "react-router-dom";

export default function HandlerRoutes() {
  const { userCurrentStatus } = useAppSelector((state) => state.user);

  return userCurrentStatus ? <Outlet /> : <NotAllowedPage />;
}
