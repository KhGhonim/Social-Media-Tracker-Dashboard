import { LuLayoutDashboard } from "react-icons/lu";
import {
  MdNoAccounts,
  MdOutlineMediation,
  MdOutlinePreview,
} from "react-icons/md";
import { GiArtificialHive, GiCrystalGrowth } from "react-icons/gi";
import {
  FaInstagram,
  FaRegEye,
  FaReddit,
  FaFacebook,
  FaLinkedin,
  FaBlogger,
  FaPinterest,
  FaYoutube,
  FaTiktok,
  FaTumblr,
  FaTelegram,
  FaTasks,
} from "react-icons/fa";
import { IoPersonCircle, IoShareSocial } from "react-icons/io5";
import { IoIosPerson, IoMdAnalytics } from "react-icons/io";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { SiVk } from "react-icons/si";
import { BiLogoOkRu } from "react-icons/bi";
import { ImBlog, ImUserPlus } from "react-icons/im";
import Kitap from "../assets/1k.png";
import virasty from "../assets/virasty.png";
import balatarin from "../assets/balatarin.jpg";
import kizlarsoruyor from "../assets/KS.jpg";
import { SocialPlatform } from "../types/types";
import { GrUserManager } from "react-icons/gr";
import { TbReportSearch, TbSocial } from "react-icons/tb";
import Sudan from "../assets/Flag-Sudan.webp";
import Iran from "../assets/Flag_of_Iran.svg.png";
import Palestine from "../assets/Flag_of_Palestine.svg.webp";
import Turkey from "../assets/Flag_of_Turkey.svg.webp";
import UAE from "../assets/Flag_of_the_United_Arab_Emirates.svg.png";

export const DesktopSideBar = [
  {
    name: "dashboard",
    path: "/",
    icon: <LuLayoutDashboard />,
    WhoCanSee: "Everyone",
  },
  {
    name: "teams",
    path: "/social-media",
    icon: <MdOutlineMediation />,
    WhoCanSee: ["Team Leader", "Admin"],
  },
  {
    name: "Growth Revision",
    path: "/review-growth",
    icon: <MdOutlinePreview />,
    WhoCanSee: ["Admin", "Team Leader"],
  },

  {
    name: "Social Media Accounts",
    path: "/social-media-table",
    icon: <TbSocial />,
    WhoCanSee: ["Admin", "Operation Manager"],
  },

  {
    name: "operationManagement",
    path: "/operation-management",
    icon: <GrUserManager />,
    WhoCanSee: ["Operation Manager", "Admin"],
  },
  {
    name: "growth",
    path: "/growth",
    icon: <GiCrystalGrowth />,
    WhoCanSee: "Everyone",
  },
  {
    name: "addNewUser",
    path: "/add-new-user",
    icon: <ImUserPlus />,
    WhoCanSee: ["Admin", "Operation Manager"],
  },
  {
    name: "analytics",
    path: "/analytics",
    icon: <IoMdAnalytics />,
    WhoCanSee: ["Admin"],
  },
  {
    name: "AI",
    path: "/ai",
    icon: <GiArtificialHive />,
    WhoCanSee: ["Admin", "Operation Manager", "Team Leader"],
  },
  {
    name: "Reports Management",
    path: "/reports",
    icon: <TbReportSearch />,
    WhoCanSee: ["Team Leader", "Operation Manager", "Admin"],
  },
];

export const NotificationData = [
  {
    id: 1,
    type: "task",
    message: "Translate the file into Turkish",
    time: "5 minutes ago",
    desc: "Task",
    unread: true,
  },
  {
    id: 2,
    type: "announcement",
    message: "Thank you Khaled!",
    time: "10 minutes ago",
    desc: "Announcement",
    unread: true,
  },
  {
    id: 3,
    type: "workshop",
    message: "Jorunalism Workshop",
    time: "15 minutes ago",
    desc: "Workshop",
    unread: true,
  },
  {
    id: 4,
    type: "payment",
    message: "your money has been transferred",
    time: "30 minutes ago",
    desc: "Payment",
    unread: true,
  },
  {
    id: 5,
    type: "growth",
    message: "User growth is finished",
    time: "2 minutes ago",
    desc: "Growth",
    unread: true,
  },
  {
    id: 6,
    type: "happy-birthday",
    message: "Happy birthday!",
    time: "2 minutes ago",
    desc: "Birthday",
    unread: true,
  },
];

export const UserStats = [
  {
    title: "Impressions",
    value: "621,126",
    change: "12.5%",
    changeType: "up",
    icon: <FaRegEye />,
  },
  {
    title: "Engagement",
    value: "32,156",
    change: "3.2%",
    changeType: "down",
    icon: <IoShareSocial />,
  },
  {
    title: "Total Followers",
    value: "11,325",
    change: "8.1%",
    changeType: "up",
    icon: <IoPersonCircle />,
  },
  {
    title: "Total Following",
    value: "1,725",
    change: "2.3%",
    changeType: "up",
    icon: <IoIosPerson />,
  },
];

export const TeamLeaderStats = [
  {
    title: "tasks",
    value: "5",
    icon: <FaTasks />,
  },
  {
    title: "suspendedAccounts",
    value: "8",
    icon: <MdNoAccounts />,
  },
  {
    title: "activeAccounts",
    value: "300",
    icon: <IoPersonCircle />,
  },
  {
    title: "todayAbsenceHandler",
    value: "1",
    icon: <IoIosPerson />,
  },
];

export const OperationManagerStats = [
  {
    title: "suspendedAccounts",
    value: "8",
    icon: <MdNoAccounts />,
  },
  {
    title: "activeAccounts",
    value: "300",
    icon: <IoPersonCircle />,
  },
  {
    title: "todayAbsenceHandler",
    value: "1",
    icon: <IoIosPerson />,
  },
];

export const MemebersOfTeam = [
  {
    name: "Menna",
    avatar: "https://avatar.iran.liara.run/public/92",
  },
  {
    name: "Ahmed",
    avatar: "https://avatar.iran.liara.run/public/21",
  },
  {
    name: "Radwaa",
    avatar: "https://avatar.iran.liara.run/public/girl",
  },
  {
    name: "Haddeer",
    avatar: "https://avatar.iran.liara.run/public/57",
  },
  {
    name: "Mostafa",
    avatar: "https://avatar.iran.liara.run/public/25",
  },
  {
    name: "Nada",
    avatar: "https://avatar.iran.liara.run/public/girl",
  },
  {
    name: "Riham",
    avatar: "https://avatar.iran.liara.run/public/65",
  },
  {
    name: "Menna",
    avatar: "https://avatar.iran.liara.run/public/92",
  },
  {
    name: "Ahmed",
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    name: "Radwaa",
    avatar: "https://avatar.iran.liara.run/public/girl",
  },
  {
    name: "Haddeer",
    avatar: "https://avatar.iran.liara.run/public/57",
  },
  {
    name: "Ali",
    avatar: "https://avatar.iran.liara.run/public/25",
  },
  {
    name: "Nada",
    avatar: "https://avatar.iran.liara.run/public/girl",
  },
  {
    name: "Riham",
    avatar: "https://avatar.iran.liara.run/public/65",
  },
];

export const connectedSM = [
  {
    Platform: "twitter",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "facebook",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "instagram",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "tiktok",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "threads",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "reddit",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "pinterest",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "blogspot",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "tumblr",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "linkedin",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "youtube",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "telegram",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "vk",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "okru",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "TurkKitap",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "blogsky",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "kizlarsoruyor",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
  {
    Platform: "balatarin",
    AccName: "Riham",
    AccUserName: "alice",
    AccURL: "https://avatar.iran.liara.run/public/65",
  },
];

export const platformIcons = {
  facebook: <FaFacebook className="w-6 h-6 text-blue-600" />,
  instagram: <FaInstagram className="w-6 h-6 text-red-600" />,
  linkedin: <FaLinkedin className="w-6 h-6 text-blue-600" />,
  twitter: <FaXTwitter className="w-6 h-6 text-[--text-color]" />,
  threads: <FaThreads className="w-6 h-6 text-[--text-color]" />,
  reddit: <FaReddit className="w-6 h-6 text-orange-600" />,
  pinterest: <FaPinterest className="w-6 h-6 text-red-600" />,
  blogspot: <FaBlogger className="w-6 h-6 text-orange-600" />,
  tiktok: <FaTiktok className="w-6 h-6 text-[--text-color]" />,
  youtube: <FaYoutube className="w-6 h-6 text-red-600" />,
  tumblr: <FaTumblr className="w-6 h-6 text-blue-800" />,
  telegram: <FaTelegram className="w-6 h-6 text-blue-500" />,
  vk: <SiVk className="w-6 h-6 text-blue-700" />,
  okru: <BiLogoOkRu className="w-6 h-6 text-orange-600" />,
  turkkitap: <img src={Kitap} alt="Kitap Icon" className="w-6 h-6" />,
  blogsky: <ImBlog className="w-6 h-6 text-purple-500" />,
  kizlarsoruyor: (
    <img src={kizlarsoruyor} alt="kizlarsoruyor Icon" className="w-6 h-6" />
  ),
  balatarin: <img src={balatarin} alt="balatarin Icon" className="w-6 h-6" />,
  virasty: <img src={virasty} alt="virasty Icon" className="w-6 h-6" />,
};

export const topPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop",
    likes: 1234,
    comments: 56,
    shares: 23,
    user: "Nada",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop",
    likes: 987,
    comments: 45,
    shares: 19,
    user: "Riham",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop",
    likes: 856,
    comments: 34,
    shares: 15,
    user: "Riham",
  },
];

export const platformMetrics = {
  twitter: [
    "followers",
    "following",
    "likes",
    "views",
    "retweets",
    "impressions",
    "tweets",
  ],
  facebook: ["posts", "comments", "friends", "likes"],
  instagram: ["followers", "following", "posts", "comments", "impressions"],
  tiktok: ["followers", "following", "videos", "views"],
  youtube: ["followers", "videos", "views"],
  reddit: ["posts", "karma"],
  tumblr: ["followers", "following", "posts"],
  pinterest: ["followers", "following", "pins"],
  linkedin: ["followers", "following", "posts", "comments"],
  threads: ["posts", "comments", "followers", "following"],
  telegram: ["followers", "views", "posts"],
  vk: ["followers", "following", "posts"],
  okru: ["followers", "following", "posts"],
  turkkitap: ["followers", "following", "posts", "views", "likes"],
  blogspot: ["views", "articles"],
  kizlarsoruyor: ["followers", "following", "posts"],
  balatarin: ["votes", "views", "posts"],
  virasty: ["followers", "following", "posts"],
  blogsky: ["followers", "following", "posts"],
};

export const platforms = [
  { id: "twitter", icon: FaXTwitter, label: "twitter" },
  { id: "facebook", icon: FaFacebook, label: "facebook" },
  { id: "instagram", icon: FaInstagram, label: "instagram" },
  { id: "tiktok", icon: FaTiktok, label: "tiktok" },
  { id: "youtube", icon: FaYoutube, label: "youtube" },
  { id: "reddit", icon: FaReddit, label: "reddit" },
  { id: "pinterest", icon: FaPinterest, label: "pinterest" },
  { id: "blogspot", icon: FaBlogger, label: "blogger" },
  { id: "linkedin", icon: FaLinkedin, label: "linkedIn" },
  { id: "threads", icon: FaThreads, label: "threads" },
  { id: "telegram", icon: FaTelegram, label: "telegram" },
  { id: "vk", icon: SiVk, label: "vk" },
  { id: "okru", icon: BiLogoOkRu, label: "okru" },
  { id: "turkkitap", photo: Kitap, icon: "", label: "kitap" },
  { id: "blogsky", icon: ImBlog, label: "blogsky" },
  { id: "tumblr", icon: FaTumblr, label: "tumblr" },
  {
    id: "kizlarsoruyor",
    photo: kizlarsoruyor,
    icon: "",
    label: "kizlarsoruyor",
  },
  { id: "balatarin", photo: balatarin, icon: "", label: "balatarin" },
  { id: "virasty", photo: virasty, icon: "", label: "virasty" },
];

export const fixedLabels = {
  followers: "Followers",
  following: "Following",
  likes: "Likes",
  views: "Views",
  retweets: "Retweets",
  impressions: "Impressions",
  tweets: "Tweets",
  posts: "Posts",
  comments: "Comments",
  friends: "Friends",
  videos: "Videos",
  karma: "Karma",
  pins: "Pins",
  votes: "Votes",
  articles: "Articles",
};

export const socialData = [
  {
    id: "1",
    platform: "instagram" as SocialPlatform,
    username: "techstar",
    followers: 870,
    engagement: 10.5,
    impressions: 140000,
    growth: 12.3,
  },
  {
    id: "2",
    platform: "twitter" as SocialPlatform,
    username: "techstar",
    followers: 2000,
    engagement: 5,
    impressions: 1240,
    growth: 12.3,
  },
  {
    id: "3",
    platform: "facebook" as SocialPlatform,
    username: "techstar",
    followers: 1452,
    engagement: 1.5,
    impressions: 14444444,
    growth: 12.3,
  },
];

export const mockAccount = {
  country: "United States",
  region: "North America",
  platform: "Instagram",
  category: "Influencer",
  state: "California",
  accountName: "Travel Explorer",
  accountBio:
    "Exploring the world one photo at a time. Sharing travel tips, photography, and adventures from around the globe. Join me on this incredible journey!",
  accountURL: "https://instagram.com/travelexplorer",
  username: "travelexplorer",
  email: "contact@travelexplorer.com",
  mobileNo: "+1 (555) 123-4567",
};

export const aiTools = [
  {
    name: "ContentGenius AI",
    goal: "Social media content generation and scheduling",
    isFree: false,
    trialPeriod: "14 days",
  },
  {
    name: "SocialAnalytics Pro",
    goal: "Advanced analytics and performance tracking",
    isFree: true,
    trialPeriod: "Unlimited",
  },
  {
    name: "ViralPredictor",
    goal: "Content virality prediction and optimization",
    isFree: false,
    trialPeriod: "30 days",
  },
  {
    name: "AudienceInsight AI",
    goal: "Audience behavior analysis and targeting",
    isFree: false,
    trialPeriod: "7 days",
  },
];

export const databasePhotos = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400",
    title: "Team Meeting",
    category: "Meetings",
    dateAdded: "2070-03-15",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
    title: "Project Presentation",
    category: "Presentations",
    dateAdded: "2070-03-14",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
    title: "Analytics Dashboard",
    category: "Analytics",
    dateAdded: "2070-03-13",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
    title: "Team Collaboration",
    category: "Team",
    dateAdded: "2070-03-12",
  },
];

export const mockData = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Social Media Manager",
    socialMetrics: [
      {
        platform: "twitter",
        followers: 25800,
        engagement: 3.2,
        posts: 45,
        reach: 158000,
        target: 30000,
        growth: 15.3,
      },
      {
        platform: "facebook",
        followers: 45600,
        engagement: 2.8,
        posts: 32,
        reach: 230000,
        target: 50000,
        growth: 8.7,
      },
      {
        platform: "instagram",
        followers: 52300,
        engagement: 4.5,
        posts: 28,
        reach: 185000,
        target: 60000,
        growth: 12.4,
      },
      {
        platform: "reddit",
        followers: 18500,
        engagement: 6.7,
        posts: 65,
        reach: 95000,
        target: 25000,
        growth: 22.1,
      },
      {
        platform: "tiktok",
        followers: 68900,
        engagement: 8.9,
        posts: 55,
        reach: 450000,
        target: 75000,
        growth: 28.5,
      },
      {
        platform: "blogspot",
        followers: 12400,
        engagement: 2.1,
        posts: 12,
        reach: 35000,
        target: 15000,
        growth: 5.8,
      },
    ],
    submittedDate: "2024-03-15",
    status: "pending",
  },
];

export const FlagCountries = {
  uae: UAE,
  sudan: Sudan,
  palastine: Palestine,
  turkey: Turkey,
  iran: Iran,
};

export const reports = {
  PalestineWeeklyReport: [
    {
      x: 500,
      y: 200,
      photoLayouts: [
        { x: 70, y: 1290, width: 200, height: 300 },
        { x: 320, y: 1290, width: 200, height: 300 },
        { x: 570, y: 1290, width: 200, height: 300 },
        { x: 40, y: 490, width: 220, height: 330 },
        { x: 310, y: 490, width: 220, height: 330 },
        { x: 575, y: 490, width: 225, height: 330 },
        { x: 40, y: 890, width: 220, height: 330 },
        { x: 310, y: 890, width: 220, height: 330 },
        { x: 575, y: 890, width: 225, height: 330 },
        { x: 40, y: 1270, width: 220, height: 330 },
        { x: 310, y: 1270, width: 220, height: 330 },
        { x: 575, y: 1270, width: 225, height: 330 },
        { x: 40, y: 490, width: 220, height: 330 },
        { x: 310, y: 490, width: 220, height: 330 },
        { x: 575, y: 490, width: 225, height: 330 },
        { x: 40, y: 890, width: 220, height: 330 },
        { x: 310, y: 890, width: 220, height: 330 },
        { x: 575, y: 890, width: 225, height: 330 },
        { x: 40, y: 1270, width: 220, height: 330 },
        { x: 310, y: 1270, width: 220, height: 330 },
        { x: 575, y: 1270, width: 225, height: 330 },
      ],
    },
  ],
};
