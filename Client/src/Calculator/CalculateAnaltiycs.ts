/**
 * Converts a number into a formatted string representation with
 * suffixes "K" for thousands and "M" for millions.
 */
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

/**
 * Calculate the total followers from the array of data?.
 * The followers is the sum of acc_fs for all items in the array.
 */
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

/**
 * Calculate the total engagement from the array of data?.
 * The engagement is the sum of acc_vs, acc_retweet, acc_post, acc_comments, acc_likes, and acc_karma for all items in the array.
 */
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

/**
 * Calculate team insights from the given data?.
 * The data? should be an array of objects with the following properties:
 * - name: string
 * - comments: number
 * - karma: number
 * - likes: number
 * - posts: number
 * - retweets: number
 * - views: number
 * - votes: number
 *
 * The function will group the stats by name and calculate the total engagement for each team.
 * The result is an object with two properties: TeamNames and Insights.
 * - TeamNames: an array of strings, one for each team
 * - Insights: an array of numbers, one for each team, representing the total engagement
 */
export const CalculateTeamInsights = (data) => {
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

/**
 * Calculate the team leader board from the given data?.
 * The function will group the data? by name and calculate the total engagement for each team. */
export const CalculateTeamLeaderBoard = (data) => {
  const groupedData = [];
  if (data?.length === 0) {
    return 0;
  }

  data?.forEach((item) => {
    const { name, followers, posts, engagement} = item;

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
