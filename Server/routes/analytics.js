import express from "express";
import { fetchAllGrowthData } from "../controller/Growth/GetAllGrowthData.js";
import { getSpecificUserAccTW } from "../controller/Dashboard/getSpecificUserAccTW/getSpecificUserAccTW.js";
import { GetSpecificUserFB } from "../controller/Dashboard/getSpecificUserAccFB/getSpecificUserAccFB.js";
import { getSpecificUserAccRD } from "../controller/Dashboard/getSpecificUserAccRD/getSpecificUserAccRD.js";
import { getSpecificUserAccIG } from "../controller/Dashboard/getSpecificUserAccIG/getSpecificUserAccIG.js";
import { getSpecificUserAllFollowers } from "../controller/Dashboard/getSpecificUserAllFollowers/getSpecificUserAllFollowers.js";
import { getSpecificUserAllFollowing } from "../controller/Dashboard/getSpecificUserAllFollowing/getSpecificUserAllFollowing.js";
import { getSpecificUserAllImp } from "../controller/Dashboard/getSpecificUserAllImpressions/getSpecificUserAllImpressions.js";
import { getSpecificUserAllENG } from "../controller/Dashboard/getSpecificUserAllEngagments/getSpecificUserAllEngagments.js";
import { getSpecificUserPerformanceChart } from "../controller/Dashboard/getSpecificUserPerformanceChart/getSpecificUserPerformanceChart.js";
import { EngagementOverviewTEChart } from "../controller/User/EngagementOverviewTEChart/EngagementOverviewTEChart.js";
import { fetchTeamInsights } from "../controller/User/fetchTeamInsights/fetchTeamInsights.js";
import { fetchTeamLeadersLeaderboard } from "../controller/User/fetchTeamLeadersLeaderboard/fetchTeamLeadersLeaderboard.js";
import authMiddleware from "../middleware/JWT.js";
import { getGrowthByTeam } from "../controller/Growth/getGrowthByTeam.js";
import { SaveGrowthRevision } from "../controller/Growth/SaveGrowthRevision.js";
import { socialMediaAccountsCards } from "../controller/Dashboard/socialMediaAccountsCards/socialMediaAccountsCards.js";
import { fetchProjectInsights } from "../controller/User/Operations/fetchProjectInsights/fetchProjectInsights.js";
import { fetchTopAccountsForOperations } from "../controller/User/Operations/fetchTopAccountsForOperations/fetchTopAccountsForOperations.js";

const router = express.Router();

router.get("/fetchAllGrowthData", authMiddleware, fetchAllGrowthData);
router.get("/getSpecificUser/TWITTER", authMiddleware, getSpecificUserAccTW);
router.get("/getSpecificUser/FACEBOOK", authMiddleware, GetSpecificUserFB);
router.get("/getSpecificUser/IG", authMiddleware, getSpecificUserAccIG);
router.get("/getSpecificUser/RD", authMiddleware, getSpecificUserAccRD);
router.get(
  "/getSpecificUser/AllFollowers",
  authMiddleware,
  getSpecificUserAllFollowers
);
router.get(
  "/getSpecificUser/AllFollowing",
  authMiddleware,
  getSpecificUserAllFollowing
);
router.get("/getSpecificUser/AllImp", authMiddleware, getSpecificUserAllImp);
router.get("/getSpecificUser/AllEng", authMiddleware, getSpecificUserAllENG);
router.get(
  "/getSpecificUser/PerformanceChart",
  authMiddleware,
  getSpecificUserPerformanceChart
);
router.get(
  "/fetchEngagementOverviewTEChart",
  authMiddleware,
  EngagementOverviewTEChart
);
router.get("/fetchTeamInsights", authMiddleware, fetchTeamInsights);
router.get(
  "/fetchTeamLeadersLeaderboard",
  authMiddleware,
  fetchTeamLeadersLeaderboard
);
router.get("/getGrowthByTeam", authMiddleware, getGrowthByTeam);
router.get(
  "/socialMediaAccountsCards",
  authMiddleware,
  socialMediaAccountsCards
);

router.post("/growthRevisionService", authMiddleware, SaveGrowthRevision);

router.get("/fetchProjectInsights", fetchProjectInsights);
router.get("/fetchTopAccountsForOperations", fetchTopAccountsForOperations);

export default router;
