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
import { getUserNotificationsTE } from "../controller/Notifications/GetUserNotificationsTE.js";
import { markAsReadForTeamLeader } from "../controller/Notifications/MarkAsReadForTeamLeader.js";
import { getUserNotificationsForHandler } from "../controller/Notifications/getUserNotificationsForHandler.js";
import { markAsReadForUserController } from "../controller/Notifications/markAsReadForUser.js";
import { fetchSuspendedAccountsForOperations } from "../controller/User/Operations/fetchSuspendedAccountsForOperations/fetchSuspendedAccountsForOperations.js";
import { fetchHandlerAbsencesForOperations } from "../controller/User/Operations/fetchHandlerAbsencesForOperations/fetchHandlerAbsencesForOperations.js";
import { fetchAllActiveAccountsForOperations } from "../controller/User/Operations/fetchAllActiveAccountsForOperations/fetchAllActiveAccountsForOperations.js";
import { fetchPostsForOperations } from "../controller/User/Operations/fetchPostsForOperations/fetchPostsForOperations.js";
import { fetchImpressionsForOperations } from "../controller/User/Operations/fetchImpressionsForOperations/fetchImpressionsForOperations.js";
import { fetchEngagementsForOperations } from "../controller/User/Operations/fetchEngagementsForOperations/fetchEngagementsForOperations.js";
import { fetchFollowersForOperations } from "../controller/User/Operations/fetchFollowersForOperations/fetchFollowersForOperations.js";
import { fetchFollowingForOperations } from "../controller/User/Operations/fetchFollowingForOperations/fetchFollowingForOperations.js";
import { joinedGames } from "../controller/Games/joinedGames/joinedGames.js";
import { fetchGameDetails } from "../controller/Games/joinedGames/fetchGameDetails.js";
import { fetchReports } from "../controller/Reports/fetchReports.js";
import { deleteReport } from "../controller/Reports/deleteReport.js";
import { SaveReport } from "../controller/Reports/SaveReport.js";

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
router.get("/fetchNotifications/User", getUserNotificationsForHandler);
router.get("/notifications/TeamLeader", getUserNotificationsTE);
router.post("/notifications/TeamLeader/markAsRead", markAsReadForTeamLeader);
router.post("/notifications/User/markAsRead", markAsReadForUserController);



router.get("/fetchSuspendedAccountsForOperations", authMiddleware, fetchSuspendedAccountsForOperations);
router.get("/fetchHandlerAbsencesForOperations", authMiddleware, fetchHandlerAbsencesForOperations);
router.get("/fetchAllActiveAccountsForOperations", authMiddleware, fetchAllActiveAccountsForOperations);
router.get("/fetchPostsForOperations", authMiddleware, fetchPostsForOperations);
router.get("/fetchImpressionsForOperations", authMiddleware, fetchImpressionsForOperations);
router.get("/fetchEngagementsForOperations", authMiddleware, fetchEngagementsForOperations);
router.get("/fetchFollowersForOperations", authMiddleware, fetchFollowersForOperations);
router.get("/fetchFollowingForOperations", authMiddleware, fetchFollowingForOperations);



router.post("/joined-games", authMiddleware, joinedGames);
router.get("/fetchGameDetails", authMiddleware, fetchGameDetails);

router.get("/fetchReports", authMiddleware, fetchReports);
router.delete("/deleteReport", authMiddleware, deleteReport);
router.post("/SaveReport", authMiddleware, SaveReport);


export default router;
