export default function useTrends({
  trendsData,
}: {
  trendsData: TTrendResponse["data"];
}) {
  const matchTrends = trendsData.map((match) => {
    const awayRecent = match?.awayrecent ?? [];
    const homeRecent = match?.homerecent ?? [];

    const homeWinHome = homeRecent.filter(
      (prediction) => prediction.winner === "HOME_TEAM"
    );
    const awayWinAway = awayRecent.filter(
      (prediction) => prediction.winner === "AWAY_TEAM"
    );
    const awayTotalGoals = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftAway || 0),
      0
    );
    const homeTotalGoals = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftHome || 0),
      0
    );
    const homeAvgGoals = Math.round(homeTotalGoals / match?.previous.length);
    const awayAvgGoals = Math.round(awayTotalGoals / match?.previous.length);

    const homeWinsFt = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftHome > curr.ftAway ? 1 : 0),
      0
    );

    const awayWinsFt = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftHome < curr.ftAway ? 1 : 0),
      0
    );

    const homeWinsHt = match?.previous?.reduce(
      (acc, curr) => acc + (curr.htHome > curr.htAway ? 1 : 0),
      0
    );
    const awayWinsHt = match?.previous?.reduce(
      (acc, curr) => acc + (curr.htHome < curr.htAway ? 1 : 0),
      0
    );

    const homeHtGoals = match?.previous.reduce(
      (acc, curr) => acc + curr.htHome,
      0
    );
    const awayHtGoals = match?.previous?.reduce(
      (acc, curr) => acc + curr.htAway,
      0
    );

    const homeAvgHtGoals = Math.round(homeHtGoals / match?.previous.length);
    const awayAvgHtGoals = Math.round(awayHtGoals / match?.previous.length);

    const homeWinStreak = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftHome > curr.ftAway ? 1 : -acc),
      0
    );
    const awayWinStreak = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftHome < curr.ftAway ? 1 : -acc),
      0
    );

    const homeConsecutiveWins = Math.max(
      ...match.previous
        .map((match) => Number(match.ftHome > match.ftAway))
        .reduce((acc, win) => {
          acc.push(win ? (acc[acc.length - 1] || 0) + 1 : 0);
          return acc;
        }, [] as number[])
    );
    const awayConsecutiveWins = Math.max(
      ...match.previous
        .map((match) => Number(match.ftHome < match.ftAway))
        .reduce((acc, win) => {
          acc.push(win ? (acc[acc.length - 1] || 0) + 1 : 0);
          return acc;
        }, [] as number[])
    );

    const homeCleanSheets = match?.previous?.filter(
      (match) => match?.ftAway === 0
    );
    const awayCleanSheets = match?.previous?.filter(
      (match) => match?.ftHome === 0
    );
    return {
      homeTeam: {
        logo: `https://media.api-sports.io/football/teams/${match.matchdetails?.homeID}.png`,
        name: match?.matchdetails?.home_team,
        ftWins: homeWinsFt,
        htWins: homeWinsHt,
        opponent: {
          logo: `https://media.api-sports.io/football/teams/${match.matchdetails?.awayID}.png`,
          name: match?.matchdetails?.away_team,
        },
        over: homeAvgGoals,
        ovrerHt: homeAvgHtGoals,
        homeWins: homeWinHome?.length,
        winStreak: homeWinStreak,
        consecutiveWins: homeConsecutiveWins,
        cleanSheets: homeCleanSheets,
      },

      awayTeam: {
        logo: `https://media.api-sports.io/football/teams/${match.matchdetails?.awayID}.png`,
        name: match?.matchdetails?.away_team,
        ftWins: awayWinsFt,
        htWins: awayWinsHt,
        opponent: {
          logo: `https://media.api-sports.io/football/teams/${match.matchdetails?.homeID}.png`,
          name: match?.matchdetails?.home_team,
        },
        over: awayAvgGoals,
        overHt: awayAvgHtGoals,
        awayWins: awayWinAway?.length,
        winStreak: awayWinStreak,
        consecutiveWins: awayConsecutiveWins,
        cleanSheets: awayCleanSheets,
      },
      homeMatches: homeRecent?.length,
      awayMatches: awayRecent?.length,
      matches: match?.previous?.length,
    };
  });

  const trends = matchTrends.flatMap((match) => {
    const highestWinningTeam =
      match?.homeTeam?.ftWins >= match?.awayTeam?.ftWins
        ? match?.homeTeam
        : match?.awayTeam;
    const highestOverTeam =
      match?.homeTeam?.over > match?.awayTeam?.over
        ? match?.homeTeam
        : match?.awayTeam;
    const winningHt =
      match?.homeTeam?.htWins > match?.awayTeam?.htWins
        ? match?.homeTeam
        : match?.awayTeam;
    const highestOverHt =
      match?.homeTeam?.ovrerHt > match?.awayTeam?.overHt
        ? match?.homeTeam
        : match?.awayTeam;
    const highestWInStreak =
      match?.homeTeam?.winStreak > match?.awayTeam?.winStreak
        ? match?.homeTeam
        : match?.awayTeam;

    return {
      match: [
        {
          name: match?.homeTeam?.name,
          logo: match?.homeTeam?.logo,
        },
        {
          name: match?.awayTeam?.name,
          logo: match?.awayTeam?.logo,
        },
      ],
      trends: [
        {
          logo: highestWinningTeam?.logo,
          name: highestWinningTeam?.name,
          count: highestWinningTeam?.ftWins,
          total: match?.matches,
          opponent: {
            logo: highestWinningTeam?.opponent?.logo,
            name: highestWinningTeam?.opponent?.name,
          },
          type: "wins",
          gameType: "games",
        },
        {
          logo: match.homeTeam?.logo,
          name: match.homeTeam?.name,
          count: match.homeTeam?.consecutiveWins,
          total: match?.homeMatches,
          type: "placeWins",
          place: "home",
        },
        {
          logo: match.awayTeam?.logo,
          name: match.awayTeam?.name,
          count: match.awayTeam?.consecutiveWins,
          total: match?.awayMatches,
          type: "placeWins",
          place: "away",
        },
        {
          logo: winningHt?.logo,
          name: winningHt?.name,
          count: winningHt?.htWins,
          total: match?.matches,
          opponent: {
            logo: winningHt?.opponent?.logo,
            name: winningHt?.opponent?.name,
          },
          type: "wins",
          gameType: "half time games",
        },
        ...(highestOverHt.over > 0
          ? [
              {
                logo: highestOverHt?.logo,
                name: highestOverHt?.name,
                count: highestOverHt?.over,
                total: match?.matches,
                type: "over",
                gameType: "half time games",
              },
            ]
          : []),
        ...(highestOverTeam.over > 0
          ? [
              {
                logo: highestOverTeam?.logo,
                name: highestOverTeam?.name,
                count: highestOverTeam?.over,
                total: match?.matches,
                type: "over",
                gameType: "games",
              },
            ]
          : []),
        ...(highestWInStreak?.winStreak > 3
          ? [
              {
                logo: highestWInStreak?.logo,
                name: highestWInStreak?.name,
                count: highestWInStreak?.winStreak,
                total: match?.matches,
                type: "winStreak",
              },
            ]
          : []),
        ...(match?.homeTeam?.consecutiveWins > 3
          ? [
              {
                logo: match?.homeTeam?.logo,
                name: match?.homeTeam?.name,
                count: match?.homeTeam?.consecutiveWins,
                total: match?.matches,
                type: "consecutiveWins",
              },
            ]
          : []),
        ...(match?.awayTeam?.consecutiveWins > 3
          ? [
              {
                logo: match?.awayTeam?.logo,
                name: match?.awayTeam?.name,
                count: match?.awayTeam?.consecutiveWins,
                total: match?.matches,
                type: "consecutiveWins",
              },
            ]
          : []),
        ...(match?.homeTeam?.cleanSheets?.length > 2
          ? [
              {
                logo: match?.homeTeam?.logo,
                name: match?.homeTeam?.name,
                count: match?.homeTeam?.cleanSheets?.length,
                total: match?.matches,
                type: "cleanSheets",
              },
            ]
          : []),
        ...(match?.awayTeam?.cleanSheets?.length > 2
          ? [
              {
                logo: match?.awayTeam?.logo,
                name: match?.awayTeam?.name,
                count: match?.awayTeam?.cleanSheets?.length,
                total: match?.matches,
                type: "cleanSheets",
              },
            ]
          : []),
      ].sort((a, b) => a.name.localeCompare(b.name)),
    };
  });

  return {
    trends,
  };
}
