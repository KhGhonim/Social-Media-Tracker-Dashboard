export const InsertNewUser =
  "INSERT INTO users (username, location, phone_number, email, password, role, birthday, country, projects) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
export const CheckIfUserNameExists =
  "SELECT * FROM social_media_accounts WHERE acc_username = $1";
export const AddNewSocialMediaAccount =
  "INSERT INTO social_media_accounts (region, country, platform, acc_name, acc_bio, acc_url, acc_username, acc_email, acc_password_hash, acc_mobile, acc_category, acc_state, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *";
export const CheckIfUserExists = "SELECT * FROM users WHERE email = $1";
export const GetAccountsPerUser =
  "SELECT * FROM social_media_accounts WHERE user_id = $1";
export const MakeUserCheckIn =
  "UPDATE users SET is_active = $1 WHERE id = $2 RETURNING *";
export const MakeUserCheckOut =
  "UPDATE users SET is_active = $1 WHERE id = $2 RETURNING *";
export const ResetCheckInAndOut = "UPDATE users SET is_active = false";
export const GetCheckInOrOutForProfileAPI = "SELECT * FROM users WHERE id = $1";
export const CheckIfAccountExists =
  "SELECT * FROM social_media_accounts WHERE id = $1 AND platform = $2";
export const PostGrowthPerPersonTW = `INSERT INTO growth_users (
    acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
    acc_fs, acc_fw, acc_likes, acc_vs, acc_retweet, acc_imp, acc_post
)
SELECT 
    s.region, 
    s.country, 
    s.acc_url, 
    s.platform, 
    s.user_id, 
    s.acc_category, 
    s.acc_state,
    $1, $2, $3, $4, $5, $6, $7
FROM social_media_accounts s
WHERE s.platform = $9 AND s.id = $8 RETURNING *;
`;

export const PostGrowthPerPersonIG = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_post, acc_comments, acc_imp
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3, $4, $5
FROM social_media_accounts s
WHERE s.platform = $7 AND s.id = $6 RETURNING *;
`;

export const PostGrowthPerPersonFB = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_likes, acc_post, acc_comments, acc_friends
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3, $4
FROM social_media_accounts s
WHERE s.platform = $6 AND s.id = $5 RETURNING *;
`;

export const PostGrowthPerPersonRD = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_karma, acc_post
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2
FROM social_media_accounts s
WHERE s.platform = $4 AND s.id = $3 RETURNING *;
`;

export const PostGrowthPerPersonTK = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_post, acc_fs, acc_fw, acc_vs
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3, $4
FROM social_media_accounts s
WHERE s.platform = $6 AND s.id = $5 RETURNING *;
`;

export const PostGrowthPerPersonYT = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_post, acc_vs
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;

export const PostGrowthPerPersonokru = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_post
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;

export const PostGrowthPerPersonvk = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_post
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;
export const PostGrowthPerPersonTelegram = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs,  acc_vs, acc_post
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;
export const PostGrowthPerPersonlinkedin = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_post, acc_comments
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3, $4
FROM social_media_accounts s
WHERE s.platform = $6 AND s.id = $5 RETURNING *;
`;
export const PostGrowthPerPersonpinterest = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_pins
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;
export const PostGrowthPerPersontumblr = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_post
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;
export const PostGrowthPerPersonTHDS = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_post, acc_comments, acc_fw, acc_fs
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3, $4
FROM social_media_accounts s
WHERE s.platform = $6 AND s.id = $5 RETURNING *;
`;
export const PostGrowthPerPersonblogspot = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_vs, acc_articles
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2
FROM social_media_accounts s
WHERE s.platform = $4 AND s.id = $3 RETURNING *;
`;
export const PostGrowthPerPersonturkkitap = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_post, acc_vs, acc_likes
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3, $4, $5
FROM social_media_accounts s
WHERE s.platform = $7 AND s.id = $6 RETURNING *;
`;

export const PostGrowthPerPersonKizlarsoruyor = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_post
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;

export const PostGrowthPerPersonBalatarin = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_votes, acc_vs, acc_post
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;

export const PostGrowthPerPersonVirasty = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_post
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;

export const PostGrowthPerPersonBlogSky = `INSERT INTO growth_users (
  acc_region, acc_country, acc_url, acc_platform, acc_handler, acc_category, acc_state,
  acc_fs, acc_fw, acc_post
)
SELECT 
  s.region, 
  s.country, 
  s.acc_url, 
  s.platform, 
  s.user_id, 
  s.acc_category, 
  s.acc_state,
  $1, $2, $3
FROM social_media_accounts s
WHERE s.platform = $5 AND s.id = $4 RETURNING *;
`;

export const FindOneAccForUser =
  "SELECT * FROM social_media_accounts WHERE id = $1";
export const GetSpecificUserAcc = `SELECT * FROM growth_users WHERE acc_handler = $1 AND acc_platform = $2 AND tl_approval = true;`;
export const getSpecificUserAllFollowersQuery = `SELECT * FROM growth_users WHERE acc_handler = $1 AND tl_approval = true;`;
export const getSpecificUserAllFollowingQuery = `SELECT * FROM growth_users WHERE acc_handler = $1 AND tl_approval = true;`;
export const getSpecificUserAllImpQuery = `SELECT * FROM growth_users WHERE acc_handler = $1 AND tl_approval = true;`;
export const getSpecificUserAllENGQuery = `SELECT * FROM growth_users WHERE acc_handler = $1 AND tl_approval = true;`;
export const getSpecificUserPerformanceChartQuery = `SELECT * FROM growth_users WHERE acc_handler = $1 AND tl_approval = true;`;
export const updateSMAcc = `UPDATE social_media_accounts SET acc_bio = $2,
    acc_email = $3,
    acc_mobile = $4,
    acc_name = $5,
    acc_password_hash = $6,
    acc_state = $7,
    acc_username = $8,
    acc_category = $9,
    country = $10,
    region = $11,
    platform = $12
WHERE user_id = $1 AND id = $13 RETURNING *;`;

export const FetchSuspendedAccountsForTE = ` SELECT 
    social_media_accounts.*, 
    users.username
FROM 
    social_media_accounts
JOIN 
    users
ON 
    social_media_accounts.user_id = users.id
WHERE 
    (social_media_accounts.acc_state = 'suspended' OR social_media_accounts.acc_state = 'locked')
    AND social_media_accounts.country = ANY($1::text[]);
`;

export const fetchAllActiveAccountsForTEQ = `SELECT * FROM social_media_accounts WHERE acc_state = 'active' AND country = ANY($1::text[]);`;
export const fetchHandlerAbsencesForTEQ = `SELECT * FROM users WHERE is_active = 'false' AND role != 'Admin' AND role != 'Operation Manager' AND projects && $1::text[];`;
export const fetchTeamMembersTEForTEQ = `SELECT * FROM users WHERE projects && $1::text[] AND role != 'Admin' AND role != 'Operation Manager';`;
export const EngagementOverviewTE = `SELECT * FROM growth_users WHERE acc_country = ANY($1::text[]) AND tl_approval = true;`;
export const TeamInsightsTE = `
  SELECT 
    growth.acc_vs AS views,
    growth.acc_karma AS karma,
    growth.acc_votes AS votes,
    growth.acc_post AS posts,
    growth.acc_retweet AS retweets,
    growth.acc_likes AS likes,
    growth.acc_comments AS comments,
    users.username AS name
  FROM 
    growth_users AS growth
  JOIN 
    users ON growth.acc_handler = users.id
  WHERE 
    growth.acc_country = ANY($1::text[]) 
    AND growth.tl_approval = true;
`;
export const TeamLeadersLeaderboard = `
    SELECT 
      growth.acc_fs AS followers,
      growth.acc_post AS posts,
      jsonb_build_object(
        'karma', growth.acc_karma, 
        'votes', growth.acc_votes, 
        'retweets', growth.acc_retweet,
        'likes', growth.acc_likes,
        'comments', growth.acc_comments
      ) AS Engagement,
      users.username AS name
    FROM 
      growth_users AS growth
    JOIN 
      users ON growth.acc_handler = users.id
    WHERE 
      growth.acc_country = ANY($1::text[]) 
      AND growth.tl_approval = true;
  `;

export const uploadAchievments = `INSERT INTO achievements (
        screenshot, description, platform, direction, country, user_id,
        account_name, account_url, date, likes, shares, comments, user_projects
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *;`;

export const GetUserDetails = `SELECT * FROM users WHERE id = $1`;

export const updateProfileSettings = `UPDATE users SET 
profile_picture = $2, 
password = $3, birthday = $4, phone_number = $5, 
location = $6, country = $7 WHERE id = $1
 RETURNING *;`;

export const fetchPostsTEQuery = `SELECT a.*, u.username
FROM achievements a
JOIN users u ON u.id = a.user_id
WHERE u.projects && $1::text[];
`;

export const getGrowthByTeamForTE = `
  SELECT 
    users.username,
<<<<<<< HEAD
=======
    users.id,
>>>>>>> 1c510ab (Sockets and Updates)
    users.profile_picture,
    users.role,
     ARRAY_AGG(
      JSONB_BUILD_OBJECT(
        'id', growth.id,
        'acc_country', growth.acc_country,
        'acc_handler', growth.acc_handler,
        'tl_approval', growth.tl_approval,
        'followers', growth.acc_fs,
        'following', growth.acc_fw,
        'views', growth.acc_vs,
        'retweets', growth.acc_retweet,
        'posts', growth.acc_post,
        'tweets', growth.acc_post,
        'likes', growth.acc_likes,
        'friends', growth.acc_friends,
        'comments', growth.acc_comments,
        'karma', growth.acc_karma,
        'votes', growth.acc_votes,
        'impressions', growth.acc_imp,
        'created_at', growth.created_at,
        'updated_at', growth.updated_at,
        'acc_state', growth.acc_state,
        'acc_category', growth.acc_category,
        'acc_platform', growth.acc_platform,
        'acc_articles', growth.acc_articles
      )
    ) AS growth_data
  FROM 
    growth_users AS growth
  JOIN 
    users ON growth.acc_handler = users.id
  WHERE 
    growth.tl_approval = false 
    AND growth.acc_country = ANY($1::text[])
     GROUP BY 
    users.username, users.id, users.profile_picture, users.role;
`;

export const SaveGrowthRevisionQuery = `UPDATE growth_users SET tl_approval = true WHERE id = $1 RETURNING *;`;
export const RejectGrowthRevisionQuery = `DELETE FROM growth_users WHERE id = $1 RETURNING *;`;
export const socialMediaAccounts = `SELECT * FROM social_media_accounts;`;




export const SaveNotification = `
    INSERT INTO notifications (user_id, tl_id, type, description, message, created_at, is_read)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
`;

export const GetUserNotificationsPerTeamLeader = `
    SELECT * FROM notifications 
    WHERE tl_id = $1 
    AND created_at > NOW() - INTERVAL '48 hours'
    ORDER BY created_at DESC
`;

export const GetUserNotificationsPerHandler = `
    SELECT * FROM notifications 
    WHERE user_id = $1 
    AND created_at > NOW() - INTERVAL '48 hours'
    ORDER BY created_at DESC
`;

export const DeleteOldNotifications = `
    DELETE FROM notifications 
    WHERE created_at < NOW() - INTERVAL '48 hours'
`;

export const MarkNotificationAsRead = `
    UPDATE notifications 
    SET is_read = true 
    WHERE user_id = $1 AND id = $2
`;


export const MarkAsReadForTeamLeader = `
    UPDATE notifications 
    SET is_read = true 
    WHERE tl_id = $1 AND created_at > NOW() - INTERVAL '48 hours'
`;


export const GetTeamLeader = `
    SELECT * FROM users WHERE role = 'Team Leader' AND projects && $1::text[]`


export const GetUserInfo = `
    SELECT * FROM users WHERE id = $1
`;

export const GetAllGrowthWithUserID = `
    SELECT * FROM growth_users
    AND FROM users WHERE id = $1
    `;
