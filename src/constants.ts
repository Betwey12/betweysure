export enum TPlanType {
  FREE = "free",
  MIXED = "mixed",
  PREMIUM = "premium",
}

const contactInfo = {
  email: "general@betweysure.com",
  phone: "+234 913 7158 913",
  telegram: "https://t.me/betweysure",
  whatsapp: "https://wa.me/2349137158913",
  address: "16a Trinity Avenue, Victoria Island, Lagos. Nigeria.",
};

const pageMetadata = {
  home: {
    title: "Free Football Betting Tips & Predictions Website - Betweysure",
    description:
      "Get accurate and reliable football betting tips and predictions for free at Betweysure. Increase your chances of winning with our expert analysis and insights.",
    keywords: "Football Betting Tips & Predictions",
  },
  pricing: {
    title: "Accurate Betting Tips | Affordable Pricing Plans - Betweysure",
    description:
      "Get access to highly accurate betting tips and predictions at affordable prices. Our flexible plans cater to all levels of bettors. Explore Betweysure's pricing today.",
    keywords: "accurate betting tips",
  },
  about: {
    title: "About Us - Betweysure",
    description:
      "Betweysure is a leading prediction site for soccer/football enthusiasts who want to improve their betting performance. ",
  },
  contact: {
    title: "Contact Us - Betweysure",
    description: "Get in touch with us for any inquiries or feedback.",
  },
  livescores: {
    title: "Live Scores & Results | Football, Basketball & More - Betweysure",
    description:
      "Get real-time live scores and results for football, basketball, tennis, baseball, and more. Stay up-to-date with your favorite teams and leagues on Betweysure.",
    keywords: "live scores, football, basketball, tennis, baseball",
  },
  leagues: {
    title: "View Popular Leagues - Betweysure",
    description:
      "View the standings, form, and statistics of popular leagues like the English Premier League, La Liga, Serie A, Bundesliga, and more. Get the latest football predictions and tips for these leagues.",
  },
  result: {
    title: "Predictions Results - Betweysure",
    description:
      "Get the latest results of our football predictions. We provide highly accurate free sure tips for football, basketball, and other sports.",
  },
  faq: {
    title: "Frequently Asked Questions - Betweysure",
    description: "Get answers to frequently asked questions about Betweysure.",
  },
  terms: {
    title: "Terms and Conditions - Betweysure",
    description: "Read our terms and conditions.",
  },
  privacy: {
    title: "Privacy - Betweysure",
    description: "Read our privacy policy.",
  },
  trends: {
    title: "Football Trends & Recent Form Analysis | Betweysure",
    description:
      "Analyze recent team performance and trends to make informed betting decisions. Betweysure provides up-to-date football trends for various leagues and teams.",
    keywords: "football trends, recent form analysis",
  },
  acca: {
    title:
      "Acca Builder: Build Winning Accumulators with Betweysure's Tips - Betweysure",
    description:
      "Create your accumulator with Betweysure's Acca Builder. Use AI-driven tips to select games, and customize your bets. Start building now!",
    keywords: "acca builder accumulator",
  },
  auth: {
    title: "Get started - Betweysure",
    description: "Set up your account to get started with Betweysure.",
  },
  dashboard: {
    title: "Dashboard - Betweysure",
    description:
      "Get predictions, fund your betting wallet, upgrade your plan, purchase airtime or data and more.",
  },
  yesterday: {
    title: "Yesterday's Football Predictions & Results - Betweysure",
    description:
      "Looking for yesterday's football predictions and results? Betweysure provides expert analysis and insights into past matches to help you stay informed and refine your betting strategies.",
  },
  today: {
    title: "Today's Football Predictions & Betting Tips - Betweysure",
    description:
      "Get the edge with Betweysure's expert today's football predictions! We analyze matches, offer betting tips, and provide insights to help you make informed decisions.",
  },
  tomorrow: {
    title:
      "Tomorrow's Football Predictions: In-Depth Analysis & Tips - Betweysure",
    description:
      "Get ahead of the game with Betweysure's detailed predictions for tomorrow's football matches. Our experts analyze key factors to provide you with valuable insights and betting tips.",
  },
  euroChampionship: {
    title: "Euro Championship Predictions & Expert Betting Tips - Betweysure",
    description:
      "Stay ahead in the Euro Championship with Betweysure’s expert predictions and betting tips. We break down matches, analyze trends, and offer key insights for smarter bets.",
  },
  englandPremierLeague: {
    title:
      "Premier League Predictions & Betting Tips: Expert Analysis - Betweysure",
    description:
      "Stay ahead in the Premier League with Betweysure's expert predictions and betting tips. We analyze matches, track trends, and provide insights to help you make informed wagers.",
  },
  uefaEuropaLeague: {
    title: "UEFA Europa League Predictions & Expert Betting Tips - Betweysure",
    description:
      "Enhance your Europa League betting with Betweysure. We offer expert predictions, insightful analysis, and valuable tips for upcoming UEL matches.",
  },
  uefaChampionsLeague: {
    title:
      "UEFA Champions League Predictions & Expert Betting Tips - Betweysure",
    description:
      "Elevate your Champions League betting with Betweysure. Get expert predictions, in-depth analysis, and valuable tips for upcoming UCL matches.",
  },
  copaAmerica: {
    title: "Copa America Predictions & Expert Betting Tips - Betweysure",
    description:
      "Get the inside scoop on Copa America with Betweysure's expert predictions and betting tips. We analyze matches, track trends, and provide valuable insights for informed wagers.",
  },
  uefaSuperCup: {
    title: "UEFA Super Cup Predictions & Expert Betting Tips - Betweysure",
    description:
      "Get the edge in the UEFA Super Cup with Betweysure's expert predictions and analysis. We delve into the matchup, track trends, and provide valuable insights for informed wagers.",
  },
  spainPrimeiraLiga: {
    title: "La Liga Predictions & Expert Betting Tips - Betweysure",
    description:
      "Enhance your La Liga betting with Betweysure. We provide expert predictions, in-depth analysis, and valuable tips for upcoming matches in Spain's top football league.",
  },
  primeiraLiga: {
    title: "Primeira Liga Predictions & Expert Betting Tips - Betweysure",
    description:
      "Elevate your Primeira Liga betting with Betweysure's in-depth predictions and expert analysis. We cover matches, track trends, and provide valuable insights for informed wagers.",
  },
  eredivisie: {
    title: "Eredivisie Predictions & Expert Betting Tips - Betweysure",
    description:
      "Get the edge in the Eredivisie with Betweysure's expert predictions and betting tips. We analyze matches, track trends, and provide valuable insights to enhance your Dutch football wagers.",
  },
  ligue1: {
    title: "Ligue 1 Predictions & Expert Betting Tips - Betweysure",
    description:
      "Enhance your Ligue 1 betting with Betweysure. We provide expert predictions, in-depth analysis, and valuable tips for upcoming matches in France's top football league.",
  },
  serieA: {
    title: "Serie A Predictions & Expert Betting Tips - Betweysure",
    description:
      "Enhance your Serie A betting with Betweysure's expert predictions and analysis. We delve into matches, track trends, and provide valuable insights for informed wagers on Italy's top football league.",
  },
  bundesliga: {
    title: "Bundesliga Predictions & Expert Betting Tips - Betweysure",
    description:
      "Enhance your Bundesliga betting with Betweysure. We provide expert predictions, in-depth analysis, and valuable tips for upcoming matches in Germany's top football league.",
  },
  laliga: {
    title: "La Liga Predictions & Expert Betting Tips - Betweysure",
    description:
      "Enhance your La Liga betting with Betweysure's expert predictions and analysis. We delve into matches, track trends, and provide valuable insights for informed wagers.",
  },
  proLeague: {
    title:
      "Pro League Predictions & Betting Tips: Expert Analysis - Betweysure",
    description:
      "Elevate your Pro League betting with Betweysure. We provide expert predictions, in-depth analysis, and valuable tips for upcoming matches.",
  },
  italianSerieA: {
    title: "Serie A Predictions & Expert Betting Tips - Betweysure",
    description:
      "Enhance your Serie A betting with Betweysure's expert predictions and analysis. We delve into matches, track trends, and provide valuable insights for informed wagers on Italy's top football league.",
  },
  oneXBet: {
    title: "Guaranteed 1xbet Predictions - Betweysure",
    description:
      "Get accurate 1xbet predictions and tips on Betweysure. Our expert analysis and insights will help you make informed betting decisions.",
    keywords: "1xbet predictions, 1xbet tips",
  },
  sportybet: {
    title: "Guaranteed Sportybet Predictions - Betweysure",
    description:
      "Get accurate Sportybet predictions and tips on Betweysure. Our expert analysis and insights will help you make informed betting decisions.",
    keywords: "sportybet predictions, sportybet tips",
  },
  bet9ja: {
    title: "Guaranteed Bet9ja Predictions - Betweysure",
    description:
      "Get accurate Bet9ja predictions and tips on Betweysure. Our expert analysis and insights will help you make informed betting decisions.",
    keywords: "bet9ja predictions, bet9ja tips",
  },
};

export const {
  home,
  pricing,
  about,
  contact,
  livescores,
  leagues,
  result,
  faq,
  terms,
  privacy,
  trends,
  auth,
  dashboard,
  acca,
  oneXBet,
  bet9ja,
  sportybet,
  yesterday,
  today,
  tomorrow,
  uefaChampionsLeague,
  euroChampionship,
  copaAmerica,
  uefaSuperCup,
  spainPrimeiraLiga,
  ligue1,
  serieA,
  bundesliga,
  laliga,
  proLeague,
  eredivisie,
  primeiraLiga,
  italianSerieA,
  englandPremierLeague,
  uefaEuropaLeague,
} = pageMetadata;

export const { email, phone, telegram, whatsapp, address } = contactInfo;
