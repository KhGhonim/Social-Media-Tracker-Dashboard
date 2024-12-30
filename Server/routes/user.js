import express from "express";
import { AddNewSocialAccController } from "../controller/User/AddNewSocialAcc/AddNewSocialAccController.js";
import { AddNewUser } from "../controller/User/AddNewUser/AddNewUserController.js";
import { checkAccUserName } from "../controller/User/CheckIfAccUserNameExists/CheckIfAccUserNameExistsController.js";
import { CheckIn } from "../controller/User/CheckInAndOut/CheckIn.js";
import { GetCheckInOrOutForProfile } from "../controller/User/GetCheckInOrOutForProfile/GetCheckInOrOutForProfile.js";
import { GetConnectedAcc } from "../controller/User/GetConnectedAcc/GetConnectedAcc.js";
import { CheckOut } from "../controller/User/CheckInAndOut/CheckOut.js";
import { PostGrowth } from "../controller/Growth/PostGrowth.js";
import { getSpecificAcc } from "../controller/User/GetSpecificAcc/getSpecificAcc.js";
import { updateSocialMediaAcc } from "../controller/User/updateSocialMediaAcc/updateSocialMediaAcc.js";
import { fetchSuspendedAccountsForTE } from "../controller/User/fetchSuspendedAccountsForTE/fetchSuspendedAccountsForTE.js";
import { fetchAllActiveAccountsForTE } from "../controller/User/fetchAllActiveAccountsForTE/fetchAllActiveAccountsForTE.js";
import { fetchHandlerAbsences } from "../controller/User/fetchHandlerAbsences/fetchHandlerAbsences.js";
import { fetchTeamMembersTE } from "../controller/User/fetchTeamMembersTE/fetchTeamMembersTE.js";
import { UploadAchievements } from "../controller/Dashboard/UploadAchievements/UploadAchievements.js";
import { uploadImage } from "../middleware/Multer.js";
import { fetchUserDetails } from "../controller/User/fetchUserDetails/fetchUserDetails.js";
import { updateSettings } from "../controller/User/updateSettings/updateSettings.js";
import authMiddleware from "../middleware/JWT.js";
import { fetchPostsTE } from "../controller/User/fetchPostsTE/fetchPostsTE.js";
<<<<<<< HEAD
=======
import { getUserNotificationsTE } from "../controller/Notifications/GetUserNotificationsTE.js";
import { markAsReadForTeamLeader } from "../controller/Notifications/MarkAsReadForTeamLeader.js";
import { getUserNotificationsForHandler } from "../controller/Notifications/getUserNotificationsForHandler.js";
>>>>>>> 1c510ab (Sockets and Updates)

const router = express.Router();

// User data routes
router.post("/add-new-user", authMiddleware, AddNewUser);
router.post("/checkAccUserName", checkAccUserName);
router.post("/addNewAccount", authMiddleware, AddNewSocialAccController);
router.post("/PostGrowth", authMiddleware, PostGrowth);
router.post("/userCheckIn", CheckIn);
router.post("/userCheckOut", CheckOut);
router.post(
  "/uploadAchievements",
  authMiddleware,
  uploadImage,
  UploadAchievements
);
router.put("/updateSocialMediaAcc", authMiddleware, updateSocialMediaAcc);
router.put("/updateSettings", authMiddleware, uploadImage, updateSettings);
router.get("/connectedAccounts", authMiddleware, GetConnectedAcc);
router.get("/getCheckInOrOutForProfile", GetCheckInOrOutForProfile);
router.get("/getSpecificAcc", authMiddleware, getSpecificAcc);
router.get(
  "/fetchSuspendedAccountsForTE",
  authMiddleware,
  fetchSuspendedAccountsForTE
);
router.get(
  "/fetchAllActiveAccountsForTE",
  authMiddleware,
  fetchAllActiveAccountsForTE
);
router.get("/fetchHandlerAbsences", authMiddleware, fetchHandlerAbsences);
router.get("/fetchTeamMembersTE", authMiddleware, fetchTeamMembersTE);
router.get("/fetchUserDetails", authMiddleware, fetchUserDetails);
router.get("/fetchPostsTE", authMiddleware, fetchPostsTE);
<<<<<<< HEAD
=======
router.get("/fetchNotifications/User", getUserNotificationsForHandler);
router.get("/notifications/TeamLeader", getUserNotificationsTE);
router.post("/notifications/TeamLeader/markAsRead", markAsReadForTeamLeader);
>>>>>>> 1c510ab (Sockets and Updates)

export default router;
