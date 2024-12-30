import { IconType } from "react-icons/lib/iconBase";

export type SocialPlatform = 'twitter' | 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'reddit' | 'threads' | 'tumblr' | 'telegram' | 'vk' | 'okru' | 'turkkitap' | 'blogsky' | 'kizlarsoruyor' | 'balatarin' | 'virasty';
export interface PlatformStats {
  platform: SocialPlatform;
  stats: Record<string, number>;
}


export interface PlatformSelectorProps {
  selectedPlatform: SocialPlatform;
  setSelectedPlatform: (platform: SocialPlatform) => void;
}

export interface StatsFormProps {
  platform: SocialPlatform;
}

export interface TeamLeader {
  id: string;
  name: string;
  avatar: string;
  role: string;
  tasksCompleted: number;
  productivity: number;
  leadershipScore: number;
  socialScore: number;
  teamSize: number;
  status: 'active' | 'offline';
}

export interface SocialStats {
  id: string;
  platform: SocialPlatform;
  username: string;
  followers: number;
  engagement: number;
  impressions: number;
  growth: number;
}

export interface UserCurrentStatus {
  user: {
    email: string;
    name: string;
    role: string;
    id: 0,
    projects: null,
    direction : string;
  };
}

export interface CounterState {
  userCurrentStatus: UserCurrentStatus;
}

export interface GameScore {
  likes?: number;
  shares?: number;
  comments?: number;
  impressions?: number;
  followers?: number;
  following?: number;
  friends?: number;
  karma?: number;
}

export interface GameEntry {
  id: string;
  userId: string;
  username: string;
  gameType: string;
  achievementUrl: string;
  score: GameScore;
  timestamp: string;
}

export interface GameType {
  id: string;
  name: string;
  description: string;
  scoreType: keyof GameScore;
  icon: IconType;

}

export interface UploadAchievementProps {
  game: GameType;
  onSubmit: (data: { achievementUrl: string; score: number }) => void;
  onClose: () => void;
}

export interface LeaderboardTableProps {
  entries: GameEntry[];
}


export interface GameCardProps {
  game: GameType;
}


export interface AccountData {
  country: string;
  region: string;
  platform: string;
  acc_category: string;
  acc_state: string;
  acc_name: string;
  acc_bio: string;
  acc_url: string;
  acc_username: string;
  acc_email: string;
  acc_mobile: string;
}


export interface ProfileHeaderProps {
  account: AccountData;
}


export interface AccInfoProps {
  account: AccountData;
}

export interface UpdateAccFormProps {
  accounts: AccountData[];
  onSubmit: (data: AccountData) => void;
  onCancel: () => void;
}

export interface SocialTool {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface ToolGridProps {
  tools: SocialTool[];
  onSelect: (id: string) => void;
}

export interface AITool {
  name: string;
  goal: string;
  isFree: boolean;
  trialPeriod: string;
}