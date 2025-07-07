export default function useTrends({ matchData }: { matchData?: TMatchData }) {
  if (!matchData || !matchData.previous?.length) return { trends: [] };

  const {
    previous,
    awayrecent = [],
    homerecent = [],
    matchdetails,
  } = matchData;

  const homeWinHome = homerecent.filter((p) => p.winner === "HOME_TEAM");
  const awayWinAway = awayrecent.filter((p) => p.winner === "AWAY_TEAM");

  const homeTotalGoals = previous.reduce((acc, m) => acc + (m.ftHome || 0), 0);
  const awayTotalGoals = previous.reduce((acc, m) => acc + (m.ftAway || 0), 0);
  const matchCount = previous.length;

  const homeAvgGoals = Math.round(homeTotalGoals / matchCount);
  const awayAvgGoals = Math.round(awayTotalGoals / matchCount);

  const homeWinsFt = previous.reduce(
    (acc, m) => acc + (m.ftHome > m.ftAway ? 1 : 0),
    0,
  );
  const awayWinsFt = previous.reduce(
    (acc, m) => acc + (m.ftHome < m.ftAway ? 1 : 0),
    0,
  );

  const homeWinsHt = previous.reduce(
    (acc, m) => acc + (m.htHome > m.htAway ? 1 : 0),
    0,
  );
  const awayWinsHt = previous.reduce(
    (acc, m) => acc + (m.htHome < m.htAway ? 1 : 0),
    0,
  );

  const homeHtGoals = previous.reduce((acc, m) => acc + (m.htHome || 0), 0);
  const awayHtGoals = previous.reduce((acc, m) => acc + (m.htAway || 0), 0);

  const homeAvgHtGoals = Math.round(homeHtGoals / matchCount);
  const awayAvgHtGoals = Math.round(awayHtGoals / matchCount);

  const homeWinStreak = previous.reduce(
    (acc, m) => acc + (m.ftHome > m.ftAway ? 1 : -acc),
    0,
  );
  const awayWinStreak = previous.reduce(
    (acc, m) => acc + (m.ftHome < m.ftAway ? 1 : -acc),
    0,
  );

  const getConsecutiveWins = (
    comparator: (m: (typeof previous)[number]) => boolean,
  ) => {
    let maxStreak = 0;
    let current = 0;
    for (const match of previous) {
      if (comparator(match)) {
        current++;
        maxStreak = Math.max(maxStreak, current);
      } else {
        current = 0;
      }
    }
    return maxStreak;
  };

  const homeConsecutiveWins = getConsecutiveWins((m) => m.ftHome > m.ftAway);
  const awayConsecutiveWins = getConsecutiveWins((m) => m.ftAway > m.ftHome);

  const homeCleanSheets = previous.filter((m) => m.ftAway === 0);
  const awayCleanSheets = previous.filter((m) => m.ftHome === 0);

  const homeTeam = {
    logo: `https://media.api-sports.io/football/teams/${matchdetails?.homeID}.png`,
    name: matchdetails?.home_team,
    ftWins: homeWinsFt,
    htWins: homeWinsHt,
    opponent: {
      logo: `https://media.api-sports.io/football/teams/${matchdetails?.awayID}.png`,
      name: matchdetails?.away_team,
    },
    over: homeAvgGoals,
    overHt: homeAvgHtGoals,
    homeWins: homeWinHome.length,
    winStreak: homeWinStreak,
    consecutiveWins: homeConsecutiveWins,
    cleanSheets: homeCleanSheets,
  };

  const awayTeam = {
    logo: `https://media.api-sports.io/football/teams/${matchdetails?.awayID}.png`,
    name: matchdetails?.away_team,
    ftWins: awayWinsFt,
    htWins: awayWinsHt,
    opponent: {
      logo: `https://media.api-sports.io/football/teams/${matchdetails?.homeID}.png`,
      name: matchdetails?.home_team,
    },
    over: awayAvgGoals,
    overHt: awayAvgHtGoals,
    awayWins: awayWinAway.length,
    winStreak: awayWinStreak,
    consecutiveWins: awayConsecutiveWins,
    cleanSheets: awayCleanSheets,
  };

  const homeMatches = homerecent.length;
  const awayMatches = awayrecent.length;

  const highestWinningTeam =
    homeTeam.ftWins >= awayTeam.ftWins ? homeTeam : awayTeam;
  const highestOverTeam = homeTeam.over > awayTeam.over ? homeTeam : awayTeam;
  const winningHt = homeTeam.htWins > awayTeam.htWins ? homeTeam : awayTeam;
  const highestOverHt = homeTeam.overHt > awayTeam.overHt ? homeTeam : awayTeam;
  const highestWinStreak =
    homeTeam.winStreak > awayTeam.winStreak ? homeTeam : awayTeam;

  const trends = [
    {
      logo: highestWinningTeam.logo,
      name: highestWinningTeam.name,
      count: highestWinningTeam.ftWins,
      total: matchCount,
      opponent: highestWinningTeam.opponent,
      type: "wins",
      gameType: "games",
    },
    {
      logo: homeTeam.logo,
      name: homeTeam.name,
      count: homeTeam.consecutiveWins,
      total: homeMatches,
      type: "placeWins",
      place: "home",
    },
    {
      logo: awayTeam.logo,
      name: awayTeam.name,
      count: awayTeam.consecutiveWins,
      total: awayMatches,
      type: "placeWins",
      place: "away",
    },
    {
      logo: winningHt.logo,
      name: winningHt.name,
      count: winningHt.htWins,
      total: matchCount,
      opponent: winningHt.opponent,
      type: "wins",
      gameType: "half time games",
    },
    ...(highestOverHt.overHt > 0
      ? [
          {
            logo: highestOverHt.logo,
            name: highestOverHt.name,
            count: highestOverHt.overHt,
            total: matchCount,
            type: "over",
            gameType: "half time games",
          },
        ]
      : []),
    ...(highestOverTeam.over > 0
      ? [
          {
            logo: highestOverTeam.logo,
            name: highestOverTeam.name,
            count: highestOverTeam.over,
            total: matchCount,
            type: "over",
            gameType: "games",
          },
        ]
      : []),
    ...(highestWinStreak.winStreak > 3
      ? [
          {
            logo: highestWinStreak.logo,
            name: highestWinStreak.name,
            count: highestWinStreak.winStreak,
            total: matchCount,
            type: "winStreak",
          },
        ]
      : []),
    ...(homeTeam.consecutiveWins > 3
      ? [
          {
            logo: homeTeam.logo,
            name: homeTeam.name,
            count: homeTeam.consecutiveWins,
            total: matchCount,
            type: "consecutiveWins",
          },
        ]
      : []),
    ...(awayTeam.consecutiveWins > 3
      ? [
          {
            logo: awayTeam.logo,
            name: awayTeam.name,
            count: awayTeam.consecutiveWins,
            total: matchCount,
            type: "consecutiveWins",
          },
        ]
      : []),
    ...(homeTeam.cleanSheets.length > 2
      ? [
          {
            logo: homeTeam.logo,
            name: homeTeam.name,
            count: homeTeam.cleanSheets.length,
            total: matchCount,
            type: "cleanSheets",
          },
        ]
      : []),
    ...(awayTeam.cleanSheets.length > 2
      ? [
          {
            logo: awayTeam.logo,
            name: awayTeam.name,
            count: awayTeam.cleanSheets.length,
            total: matchCount,
            type: "cleanSheets",
          },
        ]
      : []),
  ];

  return { trends };
}
