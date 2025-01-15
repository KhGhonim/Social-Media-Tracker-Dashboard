export function formatNumber(num: number): string {
  if (num === 0) {
    return "0";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2) + "K";
  }
  return num.toString();
}

export const CalculateFS = (data) => {
  if (data?.length === 0) {
    return 0;
  }
  const StatsForFS = data?.map((item) => item.acc_fs);
  const calcuteFS = StatsForFS.reduce((a, b) => a + b, 0);
  return calcuteFS;
};

export const CalculateFriends = (data) => {
  if (data?.length === 0) {
    return 0;
  }
  const StatsForFS = data?.map((item) => item.acc_friends);
  const calcuteFS = StatsForFS.reduce((a, b) => a + b, 0);
  return calcuteFS;
};

export const CalculateKarma = (data) => {
  if (data?.length === 0) {
    return 0;
  }
  const StatsForFS = data?.map((item) => item.acc_karma);
  const calcuteFS = StatsForFS.reduce((a, b) => a + b, 0);
  return calcuteFS;
};

export const CalculateFollowersIG = (data) => {
  if (data?.length === 0) {
    return 0;
  }
  const StatsForFS = data?.map((item) => item.acc_fs);
  const calcuteFS = StatsForFS.reduce((a, b) => a + b, 0);
  return calcuteFS;
};

export const CalculateAllFollowers = (data) => {
  if (data?.length === 0) {
    return 0;
  }
  const StatsForFS = data?.map((item) => item.acc_fs);
  const calcuteFS = StatsForFS.reduce((a, b) => a + b, 0);
  return calcuteFS;
};

export const CalculateAllFollowing = (data) => {
  if (data?.length === 0) {
    return 0;
  }
  const StatsForFS = data?.map((item) => item.acc_fw);
  const calcuteFS = StatsForFS.reduce((a, b) => a + b, 0);
  return calcuteFS;
};

export const CalculateAllImp = (data) => {
  if (data?.length === 0) {
    return 0;
  }
  const StatsForFS = data?.map((item) => item.acc_imp);
  const calcuteFS = StatsForFS.reduce((a, b) => a + b, 0);
  return calcuteFS;
};

export const CalculateAllENG = (data) => {
  if (data?.length === 0) {
    return 0;
  }

  const StatsForFS = data?.map((item) => [
    item.acc_vs,
    item.acc_retweet,
    item.acc_post,
    item.acc_comments,
    item.acc_likes,
    item.acc_karma,
  ]);
  const flatStats = StatsForFS.flat();
  const calcuteFS = flatStats.reduce((a, b) => a + b, 0);

  return calcuteFS;
};

/**
 * Calculate the total engagement for each month of the year.
 */
export const CalculatPerformanceChartYearly = (data) => {
  if (data?.length === 0) {
    return 0;
  }

  const yearlyEngagement = new Array(12).fill(0);
  const getMonthNumber = (createdAt) => {
    return createdAt.getMonth(); // Returns 0 for January, 1 for February, etc.
  };

  data?.forEach((item) => {
    const createdAt = new Date(item.created_at); // Parse the created_at date string
    const monthNumber = getMonthNumber(createdAt); // Get the month number from created_at

    const engagementSum =
      item.acc_vs +
      item.acc_retweet +
      item.acc_post +
      item.acc_comments +
      item.acc_likes +
      item.acc_karma;

    // Add the engagement sum to the corresponding month
    yearlyEngagement[monthNumber] += engagementSum;
  });

  return yearlyEngagement;
};

export const CalculatPerformanceChartMonthly = (data) => {
  if (data?.length === 0) {
    return 0;
  }

  const weeklyEngagement = [0, 0, 0, 0];
  // Function to calculate the week number based on the created_at date
  const getWeekNumber = (createdAt) => {
    const dayOfMonth = createdAt.getDate();
    return Math.floor(dayOfMonth / 7);
  };

  data?.forEach((item) => {
    const createdAt = new Date(item.created_at);
    const weekNumber = getWeekNumber(createdAt);

    const engagementSum =
      item.acc_vs +
      item.acc_retweet +
      item.acc_post +
      item.acc_comments +
      item.acc_likes +
      item.acc_karma;

    // Add the engagement sum to the corresponding week
    weeklyEngagement[weekNumber] += engagementSum;
  });

  return weeklyEngagement;
};

/**
 * Calculate the sum of all engagement data? (likes, comments, retweets) from the array of data?.
 */
export const CalculateAllENGagementSum = (data) => {
  if (data?.length === 0) {
    return 0;
  }

  const StatsForLikes = data?.map((item) => [item.acc_likes]);
  const flatStats = StatsForLikes.flat();
  const calcuteLikes = flatStats.reduce((a, b) => a + b, 0);

  const StatsForComments = data?.map((item) => [item.acc_comments]);
  const flatStatsForComments = StatsForComments.flat();
  const calcuteComments = flatStatsForComments.reduce((a, b) => a + b, 0);

  const StatsForRetweetes = data?.map((item) => [item.acc_retweet]);
  const flatStatsForRetweetes = StatsForRetweetes.flat();
  const calcuteRetweets = flatStatsForRetweetes.reduce((a, b) => a + b, 0);

  const allData = [calcuteLikes, calcuteComments, calcuteRetweets];
  return allData;
};

export const CalculateTeamInsights = (data) => {

  if (data?.length === 0) {
    return 0;
  }
  const TeamNames = [];
  const Insights = [];
  // A map to group stats by name
  const groupedStats = {};

  data?.forEach((item) => {
    const name = item.name;
    const stats = [
      item.comments,
      item.karma,
      item.likes,
      item.posts,
      item.retweets,
      item.views,
      item.votes,
    ];

    // If the name exists in the map, combine stats; otherwise, initialize it
    if (groupedStats[name]) {
      groupedStats[name] = groupedStats[name].map(
        (val, idx) => val + stats[idx]
      );
    } else {
      groupedStats[name] = stats;
    }
  });

  // Process the grouped stats into TeamNames and Insights
  for (const [name, combinedStats] of Object.entries(groupedStats)) {
    TeamNames.push(name);
    Insights.push((combinedStats as number[]).reduce((a, b) => a + b, 0));
  }

  return { TeamNames, Insights };
};

export const CalculateTeamLeaderBoard = (data) => {
  const groupedData = [];
  if (data?.length === 0) {
    return 0;
  }

  data?.forEach((item) => {
    const { name, followers, posts, engagement } = item;

    if (!groupedData[name]) {
      groupedData[name] = {
        followers: 0,
        posts: 0,
        engagement: {
          karma: 0,
          likes: 0,
          votes: 0,
          comments: 0,
          retweets: 0,
        },
      };
    }

    groupedData[name].followers += followers || 0;
    groupedData[name].posts += posts || 0;

    for (const key in engagement) {
      groupedData[name].engagement[key] += engagement[key] || 0;
    }
  });

  const result = [];
  for (const [name, data] of Object.entries(groupedData)) {
    const totalEngagement = Object.values(data?.engagement).reduce(
      (sum: number, value: number) => sum + value,
      0
    );

    result.push({
      name,
      followers: data?.followers,
      posts: data?.posts,
      engagement: totalEngagement,
    });
  }

  result.sort((a, b) => b.engagement - a.engagement);

  result.forEach((item, index) => {
    item.rank = index + 1;
  });

  return result;
};

export const CalculatePosts = (data) => {
  if (!data || data.length === 0) return [];

  const allItems = [];

  data.forEach((item) => {
    const { comments, likes, shares } = item;
    if (comments !== undefined)
      allItems.push({ value: comments, key: "comments", item });
    if (likes !== undefined)
      allItems.push({ value: likes, key: "likes", item });
    if (shares !== undefined)
      allItems.push({ value: shares, key: "shares", item });
  });

  allItems.sort((a, b) => b.value - a.value);

  const topThree = [];
  const seenItems = new Set();

  for (let i = 0; i < allItems.length; i++) {
    const { item } = allItems[i];
    if (!seenItems.has(item)) {
      topThree.push(item);
      seenItems.add(item);
    }
    if (topThree.length === 3) break;
  }

  return topThree;
};

export const CalculatePostsOperations = (data) => {

  if (!data || data.length === 0) return [];

  const totalPosts = data.reduce((sum, post) => sum + post.acc_post, 0);

  return totalPosts;
}

export const CalculateImpressionsOperations = (data) => {

  if (!data || data.length === 0) return [];

  const totalImpressions = data.reduce((sum, post) => sum + post.acc_imp, 0);

  return totalImpressions;

}

export const CalculateEngagementOperations = (data) => {

  if (!data || data.length === 0) return [];

  const totalEngagement = data.reduce((sum, post) => sum + post.acc_comments + post.acc_karma + post.acc_likes + post.acc_pins + post.acc_retweet + post.acc_votes + post.acc_vs + post.acc_articles, 0);

  return totalEngagement;

}

export const CalculateFollowersOperations = (data) => {
  if (!data || data.length === 0) return [];
  const totalFollowers = data.reduce((sum, post) => sum + post.acc_fs, 0);

  return totalFollowers;

}
export const CalculateFollowingOperations = (data) => {
  if (!data || data.length === 0) return [];

  const totalFollowers = data.reduce((sum, post) => sum + post.acc_fw, 0);

  return totalFollowers;

}

export const CalculateOperationsInsights = (data) => {

  if (data?.length === 0) {
    return 0;
  }
  const ProjectNames = [];
  const Insights = [];
  // A map to group stats by name
  const groupedStats = {};

  data?.forEach((item) => {
    const country = item.country;
    const stats = [
      item.comments,
      item.karma,
      item.likes,
      item.posts,
      item.retweets,
      item.views,
      item.votes,
    ];

    // If the name exists in the map, combine stats; otherwise, initialize it
    if (groupedStats[country]) {
      groupedStats[country] = groupedStats[country].map(
        (val, idx) => val + stats[idx]
      );
    } else {
      groupedStats[country] = stats;
    }
  });

  // Process the grouped stats into TeamNames and Insights
  for (const [country, combinedStats] of Object.entries(groupedStats)) {
    ProjectNames.push(country);
    Insights.push((combinedStats as number[]).reduce((a, b) => a + b, 0));
  }

  return { ProjectNames, Insights };
};

export const CalculateOperationsSMTopAccounts = (data) => {
  if (!data || data.length === 0) {
    return []; 
  }

  // Create a map to store aggregated data per platform
  const platformMap = {};

  data.forEach((item) => {
    const platform = item.platform;
    const name = item.name;
    const projects = item.projects;

    // Initialize a map entry if it doesn't exist
    if (!platformMap[platform]) {
      platformMap[platform] = [];
    }

    // Check if this user is already recorded in the platform; if so, update metrics
    const existingAccount = platformMap[platform].find((acc) => acc.name === name);
    if (existingAccount) {
      existingAccount.likes += item.likes;
      existingAccount.posts += item.posts;
      existingAccount.comments += item.comments;
      existingAccount.retweets += item.retweets;
      existingAccount.views += item.views;
      existingAccount.impressions += item.impressions;
      existingAccount.followers += item.followers;

    } else {
      // Add a new account with initial metrics
      platformMap[platform].push({
        name: item.name,
        user_id: item.user_id,
        projects: projects,
        likes: item.likes,
        posts: item.posts,
        comments: item.comments,
        retweets: item.retweets,
        views: item.views,
        username: item.username,
        impressions: item.impressions,
        followers: item.followers
      });
    }
  });

  // Find the highest account for each platform based on total engagement 
  const topAccounts = Object.keys(platformMap).map((platform) => {
    const accounts = platformMap[platform];
    const topAccount = accounts.reduce((max, account) => {
      const currentEngagement =
        account.likes + account.posts + account.comments + account.retweets + account.views;
      const maxEngagement =
        max.likes + max.posts + max.comments + max.retweets + max.views;
      return currentEngagement > maxEngagement ? account : max;
    }, accounts[0]);

    return {
      platform,
      topAccount,
      totalEngagement: topAccount.likes + topAccount.posts + topAccount.comments + topAccount.retweets + topAccount.views,
      username: topAccount.username,
      followers: topAccount.followers
    };
  });

  return topAccounts;
};





