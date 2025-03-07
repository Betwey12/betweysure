import en from "./messages/en.json";
import { User } from "firebase/auth";
import { EPlanNames } from "@/assets/data/data";

declare global {
  type Messages = typeof en;
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
  type TLanguage = "en" | "fr" | "ar" | "pt";

  type TTheme = "light" | "dark";

  type TPeriod = "yesterday" | "today" | "tomorrow";
  type TSocialMedia =
    | "facebook"
    | "linkedin"
    | "twitter"
    | "whatsapp"
    | "telegram"
    | "reddit";

  type TSlip = {
    timedOut: boolean;
    predictions: Prediction[];
  };

  type TUser = {
    _id: string;
    uid: string;
    email: string;
    fullName: string;
    phone: string;
    phonecode: string;
    loyalty?: number;
    wallet: number;
    currency: string;
    plan: {
      type: EPlanNames;
      expiry: number;
    };
    expiry: number;
    emailVerified: boolean;
    createdAt: string;
    fcmToken: string;
    referralCode: string;
    subscribed: boolean;
    accaUseLeft: number;
    answeredSurvey: boolean;
  };

  type TUserResponse = {
    user: TUser;
  };

  type Prediction = {
    "12_odds": string;
    "1x2": string;
    "1x_odds": string;
    "2x_odds": string;
    awayTeam: string;
    away_goals: number;
    away_win: string;
    away_win_odds: string;
    awayform: string;
    both_teams_to_score: string;
    btts_no_odds: string;
    btts_yes_odds: string;
    bttsawayform: string;
    bttshomeform: string;
    competition: string;
    competition_full: string;
    correctscore: string;
    country: string;
    date: string;
    draw: string;
    draw_odds: string;
    homeTeam: string;
    home_goals: number;
    home_win: string;
    home_win_odds: string;
    homeform: string;
    id: number;
    over15goals: string;
    over25goals: string;
    over35goals: string;
    status: string;
    prediction?: string;
    bet_of_the_day?: boolean;
    resultKey?: string;
    matchData: TMatchData;
  };

  type TPremiumPrediction = {
    awayTeam: string;
    homeTeam: string;
    competition: string;
    competitionFull: string;
    competitionLogo: string;
    country: string;
    date: string;
    homeGoals: number;
    awayGoals: number;
    _id: string;
    status: string;
    prediction?: string;
    homeLogo: string;
    awayLogo: string;
    tip: string;
  };

  type TMatchPredictionAndPrediction = Prediction & {
    over0: string;
    hthome: string;
    htaway: string;
    htdraw: string;
    hftfpred: string;
    bttswin: string;
    btsibh: string;
    fhover0: string;
    fhover1: string;
  };

  type TPredictionResponse = {
    success: boolean;
    message: string;
    data: Prediction[];
  };

  type TPremiumFootballResponse = {
    success: boolean;
    message: string;
    data: TPremiumPrediction[];
  };

  type TMatchPrediction = {
    homewin: string;
    awaywin: string;
    drawwin: string;
    avghome: string;
    avgaway: string;
    avgbtts: string;
    avgfh: string;
    avgtot: string;
    over0: string;
    over1: string;
    over2: string;
    over3: string;
    correctscore: string;
    hthome: string;
    htaway: string;
    htdraw: string;
    hftfpred: string;
    bttswin: string;
    btsibh: string;
    fhover0: string;
    fhover1: string;
    has_odds: string;
  };

  type TMatchData = {
    matchdetails: {
      utcDate: string;
      home_team: string;
      away_team: string;
      homeID: number;
      awayID: number;
      compID: number;
      comp_name: string;
      comp_slug: string;
      comp_country: string;
      match_slug: string;
    };
    result: { status: string; home_ft_goals: number; away_ft_goals: number };
    predictions: TMatchPrediction;
    previous: {
      utcDate: string;
      htHome: number;
      htAway: number;
      ftHome: number;
      ftAway: number;
    }[];
    homerecent: {
      awayteamname: string;
      winner: string;
      fthomegoals: number;
      ftawaygoals: number;
    }[];
    awayrecent: {
      hometeamname: string;
      winner: string;
      fthomegoals: number;
      ftawaygoals: number;
    }[];
    tips: {
      selection: string;
      odds: string;
    }[];
  };

  type TMatchPredictionResponse = {
    success: boolean;
    message: string;
    data: TMatchData;
  };

  type TTrendResponse = {
    success: boolean;
    message: string;
    data: TMatchData[];
  };

  type TNewsData = {
    _id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    author: string;
    source: string;
    sport: string;
    details: string;
    tags: string[];
    metaTitle: string;
    metaDescription: string;
  };

  type TNewsResponse = {
    success: boolean;
    message: string;
    data: TNewsData[];
  };

  type TNewsByIdResponse = {
    success: boolean;
    message: string;
    data: TNewsData;
  };

  type TOtherSPortsMatchData = {
    away_team_name: string;
    country_name: string;
    home_team_name: string;
    league_name: string;
    match_dat: number;
    match_id: number;
    prediction: string;
    rank_ahc_p15_ft: number;
    rank_hhc_p15_ft: number;
    rank_ao_lvl1_nt: number;
    rank_ao_lvl2_nt: number;
    rank_ao_lvl3_nt: number;
    rank_atw_ft: number;
    rank_htw_ft: number;
    rank_atw_p1: number;
    rank_atw_p2: number;
    rank_htw_p1: number;
    rank_htw_p2: number;
    rank_atw_nt: number;
    rank_drw_nt: number;
    rank_ho_lvl1_nt: number;
    rank_ho_lvl2_nt: number;
    rank_ho_lvl3_nt: number;
    rank_htw_nt: number;
    rank_to_lvl1_nt: number;
    rank_to_lvl1_p1: number;
    rank_to_lvl1_p2: number;
    rank_to_lvl1_p3: number;
    rank_to_lvl1_p4: number;
    rank_to_lvl2_nt: number;
    rank_to_lvl2_p1: number;
    rank_to_lvl2_p2: number;
    rank_to_lvl2_p3: number;
    rank_to_lvl2_p4: number;
    rank_to_lvl3_nt: number;
    rank_to_lvl3_p1: number;
    rank_to_lvl3_p2: number;
    rank_to_lvl3_p3: number;
    rank_to_lvl3_p4: number;
    rank_to_lvl4_nt: number;
    rank_to_lvl5_nt: number;
    percent: number;
    botd?: boolean;
  };

  type TOtherSportsResponse = {
    success: boolean;
    message: string;
    data: TOtherSPortsMatchData[];
  };

  type MatchResponse = {
    code: number;
    message: string;
    payload: {
      response: any[];
    };
    status: boolean;
    queryTime: string;
  };

  type TTransactionResponse = {
    success: boolean;
    message: string;
    transactions: TTransaction[];
  };

  type TTransaction = {
    _id: string;
    type: "debit" | "credit";
    amount: number;
    createdAt: string;
    status: "pending" | "success" | "failed";
    description: string;
    currency?: string;
  };

  type TResponse = {
    code: number;
    message: string;
    payload: any;
    status: boolean;
    queryTime: string;
  };

  type TAirtimeResponse = Omit<TResponse, "payload"> & {
    payload: {
      status: string;
      code: string;
      created_at: string;
      id: string;
      logo: string;
      name: string;
      scheme: string;
    }[];
  };
  type TBundlesResponse = Omit<TResponse, "payload"> & {
    data: {
      PRODUCT_AMOUNT: number;
      PRODUCT_ID: string;
      PRODUCT_NAME: string;
      PRODUCT_ID: string;
    }[];
  };

  type TLivePrediction = {
    id: number;
    date: string;
    status: string;
    duration: number;
    home_goals: number;
    away_goals: number;
    homeTeam: string;
    awayTeam: string;
    country: string;
    competition: string;
    competition_full: string;
    home_win: string;
    away_win: string;
    draw: string;
    both_teams_to_score: string;
    over05goals: string;
    over15goals: string;
    over25goals: string;
    over35goals: string;
    firsthalf_over05goals: string;
    firsthalf_over15goals: string;
  };

  type Status = {
    long: string;
    short: string;
    elapsed: null | any;
    timer: null | any;
  };

  type Fixture = {
    id: number;
    referee: null | any; // You might want to define a type for referee
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: null | any; // Define a type for period if needed
      second: null | any;
    };
    venue: {
      id: null | number; // Define a type for id if needed
      name: string;
      city: string;
    };
    status: Status;
  };

  type League = {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
    type: string;
  };

  type Country = {
    id: number;
    name: string;
    code: string;
    flag: string;
  };

  type Team = {
    id: number;
    name: string;
    logo: string;
    winner: null | any; // Define a type for winner if needed
  };

  type Goals = {
    home: null | any; // Define a type for home goals if needed
    away: null | any; // Define a type for away goals if needed
  };

  type Score = {
    halftime: {
      home: null | any; // Define a type for halftime if needed
      away: null | any;
    };
    fulltime: {
      home: null | any; // Define a type for fulltime if needed
      away: null | any;
    };
    extratime: {
      home: null | any; // Define a type for extratime if needed
      away: null | any;
    };
    penalty: {
      home: null | any; // Define a type for penalty if needed
      away: null | any;
    };
  };

  type ScoresScore = {
    quarter_1: number;
    quarter_2: number;
    quarter_3: number;
    quarter_4: number;
    over_time: null; // Replace 'null' with the actual type if you have specific data.
    total: number;
  };

  type Scores = {
    home: ScoresScore;
    away: ScoresScore;
  };

  type MatchResults = {
    id?: number;
    date?: string;
    time?: string;
    timestamp?: number;
    timezone?: string;
    stage?: null | any;
    week?: null | any;
    status?: Status;
    fixture?: Fixture;
    league: League;
    country?: Country;
    teams: {
      home: Team;
      away: Team;
    };
    goals?: Goals;
    score?: Score;
    scores?: Scores;
  };

  type TPlanPayload = {
    code: number;
    message: string;
    payload: {
      name: string;
      duration: string;
      key: string;
      price: number;
    }[];
    status: boolean;
    queryTime: string;
  };

  type TNotification = {
    _id: string;
    title: string;
    body: string;
    type: string;
    createdAt: string;
  };

  type TNotificationResponse = {
    success: boolean;
    message: string;
    data: TNotification[];
  };

  type TStanding = {
    all: {
      draw: number;
      goals: { for: number; against: number };
      lose: number;
      played: number;
      win: number;
    };
    away: {
      draw: number;
      goals: { for: number; against: number };
      lose: number;
      played: number;
      win: number;
    };
    description: string;
    form: string;
    goalsDiff: number;
    group: string;
    home: {
      draw: number;
      goals: { for: number; against: number };
      lose: number;
      played: number;
      win: number;
    };
    points: number;
    rank: number;
    status: string;
    team: { id: number; name: string; logo: string };
    update: string;
  };

  type TLeagueResponse = {
    success: boolean;
    message: string;
    data: {
      fixtures: {
        response: {
          fixture: {
            date: string;
            id: number;
            periods: {
              first: number;
              second: number;
            };
            referee: string;
            status: {
              long: string;
              short: string;
              elapsed: number;
            };
            timestamp: number;
            timezone: string;
            venue: {
              city: string;
              id: number;
              name: string;
            };
          };
          goals: {
            home: number;
            away: number;
          };
          league: {
            country: string;
            flag: string;
            id: number;
            logo: string;
            name: string;
            round: string;
            season: number;
          };
          score: {
            extratime: {
              away: number;
              home: number;
            };
            fulltime: {
              away: number;
              home: number;
            };
            halftime: {
              away: number;
              home: number;
            };
            penalty: {
              home: number;
              away: number;
            };
          };
          teams: {
            away: {
              id: number;
              logo: string;
              name: string;
              winner: boolean;
            };
            home: {
              id: number;
              logo: string;
              name: string;
              winner: boolean;
            };
          };
        }[];
      };
      standings: {
        response: {
          league: {
            country: string;
            flag: string;
            id: number;
            logo: string;
            name: string;
            season: number;
            standings: TStanding[][];
          };
        }[];
      };
    };
  };

  type TTips = {
    match_dat: string;
    sport: string;
    country: string;
    league: string;
    home_team: string;
    away_team: string;
    tip: string;
    fair_odd: number;
    tip_odd: number;
  };

  type TAnnouncement = {
    _id: string;
    announcement: string;
    startDate: string;
    endDate: strin;
  };

  type TAnnouncementResponse = {
    success: true;
    message: string;
    data: TAnnouncement[];
  };

  type TAuthUser = TUser & User;
  type TLeagueTabs =
    | "fixtures"
    | "standings"
    | "trends"
    | "predictions"
    | "form";

  type TLeagueMetaTabs = TLeagueTabs | "DEFAULT";

  type TLeagueMeta = Record<
    string,
    {
      [K in TLeagueMetaTabs]?: { title: string; description: string };
    }
  >;
  type TLeagueSeoText = Record<
    string,
    {
      [K in Omit<"DEFAULT">]?: string;
    }
  >;

  type TPredictionsParams =
    | "windrawwin"
    | "statarea"
    | "footballpredictions"
    | "mybets"
    | "soccereco"
    | "soccervital"
    | "forebet"
    | "predictz"
    | "olbg"
    | "soccervista"
    | "adibet"
    | "zulubet"
    | "betwizad"
    | "focuspredict"
    | "kingspredict"
    | "180tips-prediction"
    | "zuluprediction"
    | "primatips-prediction"
    | "legitpredict"
    | "solopredict"
    | "betensured"
    | "feedinco"
    | "tips180"
    | "victors-predict"
    | "supatips";

  type TBettingParams =
    | "bet9ja-prediction"
    | "1xbet-prediction"
    | "sportybet-prediction"
    | "betking-prediction"
    | "betway-prediction"
    | "betwinner-prediction"
    | "betano-prediction"
    | "22bet-prediction"
    | "betbonanza-prediction"
    | "betika-prediction"
    | "sportpesa-prediction"
    | "mozzartbet-prediction"
    | "odibets-prediction"
    | "m-bets-prediction"
    | "bet365-prediction"
    | "melbet-prediction"
    | "hollywoodbets-prediction"
    | "worldsportsbetting"
    | "sunbet-prediction"
    | "bet.co.za"
    | "sportingbet-prediction"
    | "betway-prediction"
    | "betpawa-prediction"
    | "fortebet-prediction"
    | "gal-sports-betting"
    | "championbet-prediction"
    | "bangbet-prediction"
    | "world-star-betting"
    | "meridianbet-prediction"
    | "wasafibet-prediction"
    | "888bet-prediction"
    | "premierbet-prediction";

  type TMediaParams =
    | "livescore"
    | "sofascore"
    | "flashscore"
    | "fotmob"
    | "besoccer"
    | "futbol24"
    | "marca"
    | "soccerway"
    | "teamtalk"
    | "football365"
    | "fourfourtwo"
    | "90min";

  type TParams = TBettingParams | TMediaParams | TPredictionsParams;
}
