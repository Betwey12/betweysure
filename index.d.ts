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
    "1x2": string;
    "12_odds": string;
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
    homeLogo: string;
    awayLogo: string;
    matchData: TMatchData;
    homeID: number;
    awayID: number;
    countryCode: string;
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

  type TMatchResponse = {
    success: boolean;
    message: string;
    data: TMatchData;
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

  type TAirtimeResponse = Omit<TResponse | "payload"> & {
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
  type TBundlesResponse = Omit<TResponse | "payload"> & {
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
    | string
    | {
        [K in TLeagueMetaTabs]?: { title: string; description: string };
      }
  >;
  type TLeagueSeoText = Record<
    | string
    | {
        [K in Omit<"DEFAULT">]?: string;
      }
  >;

  type TPredictionsParams =
    | "win-draw-win-predictions-full-time-result-betting-tips"
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
    | "primatips-prediction"
    | "legitpredict"
    | "solopredict"
    | "betensured"
    | "feedinco"
    | "tips180"
    | "victors-predict"
    | "supatips"
    | "correct-score-betting"
    | "over-1.5-betting"
    | "over-2.5-betting"
    | "both-teams-to-score-betting"
    | "home-win-betting"
    | "double-chance-betting"
    | "draw-betting"
    | "2up-betting"
    | "win-to-nil-predictions"
    | "over-0-5-first-half-goals-predictions";

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
    | "premierbet-prediction"
    | "stake-prediction"
    | "jackpot-betting"
    | "sportsbet.io-prediction";

  type TMediaParams =
    | "livescore"
    | "sofascore"
    | "flashscore"
    | "fotmob"
    | "besoccer"
    | "futbol24";

  type TTrendsParams =
    | "marca"
    | "soccerway"
    | "teamtalk"
    | "football365"
    | "fourfourtwo"
    | "90min";

  type TPopularLeages =
    | "uefa-champions-league"
    | "england-premier-league"
    | "uefa-europa-league"
    | "euro-championship"
    | "copa-america"
    | "olympics-men"
    | "eredivisie"
    | "primeira-liga"
    | "pro-league"
    | "la-liga"
    | "bundesliga"
    | "italy-serie-a"
    | "ligue-1"
    | "spain-primera-liga"
    | "uefa-super-cup"
    | "international-friendly"
    | "women's-international-friendly"
    | "concacaf-nations-league"
    | "concacaf-gold-cup"
    | "copa-libertadores"
    | "copa-sudamericana"
    | "world-cup"
    | "club-world-cup"
    | "africa-cup-of-nations"
    | "international-cup-of-champions"
    | "international-u21"
    | "uefa-nations-league"
    | "world-cup-2026-qualifying"
    | "afc-champions-league"
    | "african-nations-championship"
    | "conmebol-uefa-cup-of-champions"
    | "europa-conference-league"
    | "concacaf-champions-cup"
    | "recopa-sudamericana"
    | "chile-primera"
    | "argentina-liga-profesional"
    | "argentina-primera-b-nacional"
    | "bolivia-primera-división"
    | "brazil-serie-a"
    | "brazil-serie-b"
    | "brazil-serie-c"
    | "brazil-serie-d"
    | "colombia-categoria-primera-a"
    | "ecuador-serie-a"
    | "peru-primera-division"
    | "uruguay-primera-division"
    | "venezuela-primera-division"
    | "copa-do-brasil"
    | "chile-primera-b"
    | "paraguay-primera-division"
    | "finland-veikkausliiga"
    | "finland-ykkonen"
    | "norway-eliteserien"
    | "iceland-urvalsdeild"
    | "latvia-virsliga"
    | "lithuania-a-lyga"
    | "estonia-meistriliiga"
    | "estonia-esiliiga"
    | "belarus-premier-league"
    | "kazakhstan-premier-league"
    | "armenia-premier-league"
    | "georgia-erovnuli-liga"
    | "england-community-shield"
    | "england-championship"
    | "england-league-one"
    | "england-league-two"
    | "england-national-league"
    | "england-national-league-north"
    | "england-national-league-south"
    | "england-fa-cup"
    | "england-league-cup"
    | "efl-trophy"
    | "england-women's-super-league"
    | "scotland-premiership"
    | "scotland-championship"
    | "scotland-league-one"
    | "scotland-league-two"
    | "scottish-cup"
    | "scottish-league-cup"
    | "wales-cymru-premier"
    | "northern-ireland-premier-league"
    | "spain-la-liga"
    | "spain-segunda-division"
    | "spain-copa-del-rey"
    | "supercopa-de-espana"
    | "germany-2.-bundesliga"
    | "germany-3.-liga"
    | "germany-dfb-pokal"
    | "germany-regionalliga-north"
    | "germany-regionalliga-northeast"
    | "germany-regionalliga-west"
    | "germany-regionalliga-southwest"
    | "germany-regionalliga-bayern"
    | "italy-serie-b"
    | "serie-c---girone-a"
    | "serie-c---girone-b"
    | "serie-c---girone-c"
    | "coppa-italia"
    | "france-ligue-1"
    | "france-ligue-2"
    | "france-national"
    | "coupe-de-france"
    | "france-coupe-de-la-ligue"
    | "netherlands-eredivisie"
    | "netherlands-eerste-divisie"
    | "albania-kategoria-superiore"
    | "austria-bundesliga"
    | "belgium-first-division-a"
    | "belgium-first-division-b"
    | "bosnia-and-herzegovina-premier-league"
    | "bulgaria-first-league"
    | "croatia-1.hnl"
    | "croatia-2.hnl"
    | "cyprus-first-division"
    | "czech-first-league"
    | "czech-fnl"
    | "denmark-superliga"
    | "denmark-1st-division"
    | "finland-kakkonen"
    | "greece-super-league"
    | "greece-super-league-2"
    | "hungary-nb-i"
    | "ireland-premier-division"
    | "ireland-first-division"
    | "luxembourg-national-division"
    | "montenegro-first-league"
    | "montenegro-second-league"
    | "norway-1.-division"
    | "poland-ekstraklasa"
    | "portugal-primeira-liga"
    | "portugal-liga-portugal-2"
    | "romania-liga-i"
    | "russia-premier-league"
    | "russia-fnl"
    | "serbia-superliga"
    | "serbia-prva-liga"
    | "slovakia-super-liga"
    | "slovenia-prvaliga"
    | "slovenia-2.-snl"
    | "sweden-allsvenskan"
    | "sweden-superettan"
    | "sweden-ettan"
    | "switzerland-super-league"
    | "switzerland-challenge-league"
    | "turkey-super-lig"
    | "turkey-1.-lig"
    | "ukraine-upl"
    | "ukraine-persha-liga"
    | "canada-premier-league"
    | "usa-major-league-soccer"
    | "leagues-cup"
    | "usa-usl-championship"
    | "costa-rica-primera-division"
    | "honduras-liga-nacional"
    | "mexico-liga-mx"
    | "mexico-liga-de-expansion-mx"
    | "nicaragua-liga-primera"
    | "bahrain-premier-league"
    | "china-super-league"
    | "china-league-one"
    | "georgia-erovnuli-liga"
    | "hong-kong-premier-league"
    | "indonesia-liga-1"
    | "india-super-league"
    | "vietnam-v-league"
    | "uzbekistan-super-league"
    | "united-arab-emirates-pro-league"
    | "thailand-league-1"
    | "south-korea-k-league-1"
    | "south-korea-k-league-2"
    | "saudi-arabia-professional-league"
    | "qatar-stars-league"
    | "oman-professional-league"
    | "japan-j-league"
    | "malaysia-super-league"
    | "azerbaijan-premier-league"
    | "india-i-league"
    | "iran-pro-league"
    | "japan-j2-league"
    | "jordan-pro-league"
    | "singapore-premier-league"
    | "south-korea-k3-league"
    | "australia-a-league"
    | "new-zealand-national-league"
    | "algeria-ligue-1"
    | "egypt-premier-league"
    | "ghana-premier-league"
    | "kenya-premier-league"
    | "tanzania-premier-league"
    | "zambia-super-league"
    | "uganda-premier-league"
    | "south-africa-premiership"
    | "nigeria-npfl"
    | "morocco-botola-pro";

  type TDuration = "today" | "tomorrow" | "yesterday";

  type TPopularTCategories = TPopularLeages | TDuration;

  type TOtherPagesParams = "free-booking-codes" | "convert-bet-codes";

  type TParams =
    | TBettingParams
    | TMediaParams
    | TPredictionsParams
    | TOtherPagesParams
    | TTrendsParams;
}

type TPopularLeague = {
  name: string;
  logo: string;
  apiFootballId: number;
  country: string;
};
