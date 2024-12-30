import { useAppSelector } from "../../Hooks/ReduxHooks";
import { Navigate } from "react-router-dom";
import { UserCurrentStatus } from "../../types/types";

const ProtectedRoutes = ({ allowedRoles, children }) => {
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  if (!allowedRoles.includes(userCurrentStatus.user.role)) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoutes;
