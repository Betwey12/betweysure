const leagues = [
  {
    league: {
      id: 4,
      name: "Euro Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/4.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 21,
      name: "Confederations Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/21.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 61,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/61.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 144,
      name: "Jupiler Pro League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/144.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 71,
      name: "Serie A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/71.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 39,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/39.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 78,
      name: "Bundesliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/78.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 135,
      name: "Serie A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/135.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 88,
      name: "Eredivisie",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/88.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 94,
      name: "Primeira Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/94.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 140,
      name: "La Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/140.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 179,
      name: "Premiership",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/179.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 180,
      name: "Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/180.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 1,
      name: "World Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 803,
      name: "Asian Games",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/803.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 804,
      name: "Caribbean Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/804.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 62,
      name: "Ligue 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/62.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 2,
      name: "UEFA Champions League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/2.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 311,
      name: "1st Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/311.png",
    },
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media.api-sports.io/flags/al.svg",
    },
  },
  {
    league: {
      id: 310,
      name: "Superliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/310.png",
    },
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media.api-sports.io/flags/al.svg",
    },
  },
  {
    league: {
      id: 186,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/186.png",
    },
    country: {
      name: "Algeria",
      code: "DZ",
      flag: "https://media.api-sports.io/flags/dz.svg",
    },
  },
  {
    league: {
      id: 187,
      name: "Ligue 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/187.png",
    },
    country: {
      name: "Algeria",
      code: "DZ",
      flag: "https://media.api-sports.io/flags/dz.svg",
    },
  },
  {
    league: {
      id: 586,
      name: "West Bank Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/586.png",
    },
    country: {
      name: "Palestine",
      code: "PS",
      flag: "https://media.api-sports.io/flags/ps.svg",
    },
  },
  {
    league: {
      id: 588,
      name: "National League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/588.png",
    },
    country: {
      name: "Myanmar",
      code: "MM",
      flag: "https://media.api-sports.io/flags/mm.svg",
    },
  },
  {
    league: {
      id: 591,
      name: "Pro League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/591.png",
    },
    country: {
      name: "Trinidad-And-Tobago",
      code: "TT",
      flag: "https://media.api-sports.io/flags/tt.svg",
    },
  },
  {
    league: {
      id: 335,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/335.png",
    },
    country: {
      name: "Ukraine",
      code: "UA",
      flag: "https://media.api-sports.io/flags/ua.svg",
    },
  },
  {
    league: {
      id: 336,
      name: "Druha Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/336.png",
    },
    country: {
      name: "Ukraine",
      code: "UA",
      flag: "https://media.api-sports.io/flags/ua.svg",
    },
  },
  {
    league: {
      id: 334,
      name: "Persha Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/334.png",
    },
    country: {
      name: "Ukraine",
      code: "UA",
      flag: "https://media.api-sports.io/flags/ua.svg",
    },
  },
  {
    league: {
      id: 333,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/333.png",
    },
    country: {
      name: "Ukraine",
      code: "UA",
      flag: "https://media.api-sports.io/flags/ua.svg",
    },
  },
  {
    league: {
      id: 301,
      name: "Pro League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/301.png",
    },
    country: {
      name: "United-Arab-Emirates",
      code: "AE",
      flag: "https://media.api-sports.io/flags/ae.svg",
    },
  },
  {
    league: {
      id: 303,
      name: "Division 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/303.png",
    },
    country: {
      name: "United-Arab-Emirates",
      code: "AE",
      flag: "https://media.api-sports.io/flags/ae.svg",
    },
  },
  {
    league: {
      id: 302,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/302.png",
    },
    country: {
      name: "United-Arab-Emirates",
      code: "AE",
      flag: "https://media.api-sports.io/flags/ae.svg",
    },
  },
  {
    league: {
      id: 269,
      name: "Segunda División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/269.png",
    },
    country: {
      name: "Uruguay",
      code: "UY",
      flag: "https://media.api-sports.io/flags/uy.svg",
    },
  },
  {
    league: {
      id: 202,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/202.png",
    },
    country: {
      name: "Tunisia",
      code: "TN",
      flag: "https://media.api-sports.io/flags/tn.svg",
    },
  },
  {
    league: {
      id: 203,
      name: "Süper Lig",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/203.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 204,
      name: "1. Lig",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/204.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 205,
      name: "2. Lig",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/205.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 206,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/206.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 552,
      name: "3. Lig - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/552.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 553,
      name: "3. Lig - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/553.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 554,
      name: "3. Lig - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/554.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 63,
      name: "National 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/63.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 66,
      name: "Coupe de France",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/66.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 65,
      name: "Coupe de la Ligue",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/65.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 67,
      name: "National 2 - Group A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/67.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 68,
      name: "National 2 - Group B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/68.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 69,
      name: "National 2 - Group C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/69.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 70,
      name: "National 2 - Group D",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/70.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 233,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/233.png",
    },
    country: {
      name: "Egypt",
      code: "EG",
      flag: "https://media.api-sports.io/flags/eg.svg",
    },
  },
  {
    league: {
      id: 370,
      name: "Primera Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/370.png",
    },
    country: {
      name: "El-Salvador",
      code: "SV",
      flag: "https://media.api-sports.io/flags/sv.svg",
    },
  },
  {
    league: {
      id: 328,
      name: "Esiliiga A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/328.png",
    },
    country: {
      name: "Estonia",
      code: "EE",
      flag: "https://media.api-sports.io/flags/ee.svg",
    },
  },
  {
    league: {
      id: 329,
      name: "Meistriliiga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/329.png",
    },
    country: {
      name: "Estonia",
      code: "EE",
      flag: "https://media.api-sports.io/flags/ee.svg",
    },
  },
  {
    league: {
      id: 326,
      name: "Erovnuli Liga 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/326.png",
    },
    country: {
      name: "Georgia",
      code: "GE",
      flag: "https://media.api-sports.io/flags/ge.svg",
    },
  },
  {
    league: {
      id: 570,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/570.png",
    },
    country: {
      name: "Ghana",
      code: "GH",
      flag: "https://media.api-sports.io/flags/gh.svg",
    },
  },
  {
    league: {
      id: 377,
      name: "Division d'Honneur",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/377.png",
    },
    country: {
      name: "Guadeloupe",
      code: "GP",
      flag: "https://media.api-sports.io/flags/gp.svg",
    },
  },
  {
    league: {
      id: 339,
      name: "Liga Nacional",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/339.png",
    },
    country: {
      name: "Guatemala",
      code: "GT",
      flag: "https://media.api-sports.io/flags/gt.svg",
    },
  },
  {
    league: {
      id: 338,
      name: "Primera Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/338.png",
    },
    country: {
      name: "Guatemala",
      code: "GT",
      flag: "https://media.api-sports.io/flags/gt.svg",
    },
  },
  {
    league: {
      id: 199,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/199.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 198,
      name: "Football League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/198.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 197,
      name: "Super League 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/197.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 79,
      name: "2. Bundesliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/79.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 80,
      name: "3. Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/80.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 529,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/529.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 81,
      name: "DFB Pokal",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/81.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 7,
      name: "Asian Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/7.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 8,
      name: "World Cup - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/8.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 512,
      name: "2nd Division - Group A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/512.png",
    },
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media.api-sports.io/flags/al.svg",
    },
  },
  {
    league: {
      id: 513,
      name: "2nd Division - Group B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/513.png",
    },
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media.api-sports.io/flags/al.svg",
    },
  },
  {
    league: {
      id: 312,
      name: "1a Divisió",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/312.png",
    },
    country: {
      name: "Andorra",
      code: "AD",
      flag: "https://media.api-sports.io/flags/ad.svg",
    },
  },
  {
    league: {
      id: 313,
      name: "2a Divisió",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/313.png",
    },
    country: {
      name: "Andorra",
      code: "AD",
      flag: "https://media.api-sports.io/flags/ad.svg",
    },
  },
  {
    league: {
      id: 131,
      name: "Primera B Metropolitana",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/131.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 129,
      name: "Primera Nacional",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/129.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 132,
      name: "Primera C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/132.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 133,
      name: "Primera D",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/133.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 134,
      name: "Torneo Federal A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/134.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 188,
      name: "A-League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/188.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 191,
      name: "Brisbane Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/191.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 193,
      name: "Northern Territory Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/193.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 220,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/220.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 219,
      name: "2. Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/219.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 218,
      name: "Bundesliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/218.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 418,
      name: "Birinci Dasta",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/418.png",
    },
    country: {
      name: "Azerbaidjan",
      code: "AZ",
      flag: "https://media.api-sports.io/flags/az.svg",
    },
  },
  {
    league: {
      id: 419,
      name: "Premyer Liqa",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/419.png",
    },
    country: {
      name: "Azerbaidjan",
      code: "AZ",
      flag: "https://media.api-sports.io/flags/az.svg",
    },
  },
  {
    league: {
      id: 222,
      name: "Regionalliga - Mitte",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/222.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 221,
      name: "Regionalliga - Ost",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/221.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 223,
      name: "Regionalliga - West",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/223.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 110,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/110.png",
    },
    country: {
      name: "Wales",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 112,
      name: "Welsh Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/112.png",
    },
    country: {
      name: "Wales",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 299,
      name: "Primera División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/299.png",
    },
    country: {
      name: "Venezuela",
      code: "VE",
      flag: "https://media.api-sports.io/flags/ve.svg",
    },
  },
  {
    league: {
      id: 300,
      name: "Segunda División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/300.png",
    },
    country: {
      name: "Venezuela",
      code: "VE",
      flag: "https://media.api-sports.io/flags/ve.svg",
    },
  },
  {
    league: {
      id: 406,
      name: "Professional League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/406.png",
    },
    country: {
      name: "Oman",
      code: "OM",
      flag: "https://media.api-sports.io/flags/om.svg",
    },
  },
  {
    league: {
      id: 322,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/322.png",
    },
    country: {
      name: "Jamaica",
      code: "JM",
      flag: "https://media.api-sports.io/flags/jm.svg",
    },
  },
  {
    league: {
      id: 387,
      name: "League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/387.png",
    },
    country: {
      name: "Jordan",
      code: "JO",
      flag: "https://media.api-sports.io/flags/jo.svg",
    },
  },
  {
    league: {
      id: 388,
      name: "1. Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/388.png",
    },
    country: {
      name: "Kazakhstan",
      code: "KZ",
      flag: "https://media.api-sports.io/flags/kz.svg",
    },
  },
  {
    league: {
      id: 330,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/330.png",
    },
    country: {
      name: "Kuwait",
      code: "KW",
      flag: "https://media.api-sports.io/flags/kw.svg",
    },
  },
  {
    league: {
      id: 119,
      name: "Superliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/119.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 120,
      name: "1. Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/120.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 124,
      name: "Denmark Series - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/124.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 125,
      name: "Denmark Series - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/125.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 126,
      name: "Denmark Series - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/126.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 234,
      name: "Liga Nacional",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/234.png",
    },
    country: {
      name: "Honduras",
      code: "HN",
      flag: "https://media.api-sports.io/flags/hn.svg",
    },
  },
  {
    league: {
      id: 381,
      name: "HKFA 1st Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/381.png",
    },
    country: {
      name: "Hong-Kong",
      code: "HK",
      flag: "https://media.api-sports.io/flags/hk.svg",
    },
  },
  {
    league: {
      id: 380,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/380.png",
    },
    country: {
      name: "Hong-Kong",
      code: "HK",
      flag: "https://media.api-sports.io/flags/hk.svg",
    },
  },
  {
    league: {
      id: 273,
      name: "Magyar Kupa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/273.png",
    },
    country: {
      name: "Hungary",
      code: "HU",
      flag: "https://media.api-sports.io/flags/hu.svg",
    },
  },
  {
    league: {
      id: 271,
      name: "NB I",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/271.png",
    },
    country: {
      name: "Hungary",
      code: "HU",
      flag: "https://media.api-sports.io/flags/hu.svg",
    },
  },
  {
    league: {
      id: 272,
      name: "NB II",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/272.png",
    },
    country: {
      name: "Hungary",
      code: "HU",
      flag: "https://media.api-sports.io/flags/hu.svg",
    },
  },
  {
    league: {
      id: 390,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/390.png",
    },
    country: {
      name: "Lebanon",
      code: "LB",
      flag: "https://media.api-sports.io/flags/lb.svg",
    },
  },
  {
    league: {
      id: 261,
      name: "National Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/261.png",
    },
    country: {
      name: "Luxembourg",
      code: "LU",
      flag: "https://media.api-sports.io/flags/lu.svg",
    },
  },
  {
    league: {
      id: 306,
      name: "Second Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/306.png",
    },
    country: {
      name: "Qatar",
      code: "QA",
      flag: "https://media.api-sports.io/flags/qa.svg",
    },
  },
  {
    league: {
      id: 305,
      name: "Stars League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/305.png",
    },
    country: {
      name: "Qatar",
      code: "QA",
      flag: "https://media.api-sports.io/flags/qa.svg",
    },
  },
  {
    league: {
      id: 40,
      name: "Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/40.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 46,
      name: "EFL Trophy",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/46.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 45,
      name: "FA Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/45.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 47,
      name: "FA Trophy",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/47.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 48,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/48.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 43,
      name: "National League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/43.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 41,
      name: "League One",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/41.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 42,
      name: "League Two",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/42.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 568,
      name: "Eerste Divisie",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/568.png",
    },
    country: {
      name: "Surinam",
      code: "SR",
      flag: "https://media.api-sports.io/flags/sr.svg",
    },
  },
  {
    league: {
      id: 571,
      name: "Vysshaya Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/571.png",
    },
    country: {
      name: "Tajikistan",
      code: "TJ",
      flag: "https://media.api-sports.io/flags/tj.svg",
    },
  },
  {
    league: {
      id: 15,
      name: "FIFA Club World Cup",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/15.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 422,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/422.png",
    },
    country: {
      name: "Barbados",
      code: "BB",
      flag: "https://media.api-sports.io/flags/bb.svg",
    },
  },
  {
    league: {
      id: 480,
      name: "Olympics Men",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/480.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 535,
      name: "CECAFA Senior Challenge Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/535.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 75,
      name: "Serie C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/75.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 76,
      name: "Serie D",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/76.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 585,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/585.png",
    },
    country: {
      name: "Uganda",
      code: "UG",
      flag: "https://media.api-sports.io/flags/ug.svg",
    },
  },
  {
    league: {
      id: 598,
      name: "Première Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/598.png",
    },
    country: {
      name: "Mali",
      code: "ML",
      flag: "https://media.api-sports.io/flags/ml.svg",
    },
  },
  {
    league: {
      id: 253,
      name: "Major League Soccer",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/253.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 257,
      name: "US Open Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/257.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 268,
      name: "Primera División - Apertura",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/268.png",
    },
    country: {
      name: "Uruguay",
      code: "UY",
      flag: "https://media.api-sports.io/flags/uy.svg",
    },
  },
  {
    league: {
      id: 270,
      name: "Primera División - Clausura",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/270.png",
    },
    country: {
      name: "Uruguay",
      code: "UY",
      flag: "https://media.api-sports.io/flags/uy.svg",
    },
  },
  {
    league: {
      id: 369,
      name: "Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/369.png",
    },
    country: {
      name: "Uzbekistan",
      code: "UZ",
      flag: "https://media.api-sports.io/flags/uz.svg",
    },
  },
  {
    league: {
      id: 296,
      name: "Thai League 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/296.png",
    },
    country: {
      name: "Thailand",
      code: "TH",
      flag: "https://media.api-sports.io/flags/th.svg",
    },
  },
  {
    league: {
      id: 297,
      name: "Thai League 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/297.png",
    },
    country: {
      name: "Thailand",
      code: "TH",
      flag: "https://media.api-sports.io/flags/th.svg",
    },
  },
  {
    league: {
      id: 551,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/551.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 366,
      name: "1. Deild",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/366.png",
    },
    country: {
      name: "Faroe-Islands",
      code: "FO",
      flag: "https://media.api-sports.io/flags/fo.svg",
    },
  },
  {
    league: {
      id: 367,
      name: "Meistaradeildin",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/367.png",
    },
    country: {
      name: "Faroe-Islands",
      code: "FO",
      flag: "https://media.api-sports.io/flags/fo.svg",
    },
  },
  {
    league: {
      id: 245,
      name: "Ykkönen",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/245.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 244,
      name: "Veikkausliiga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/244.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 246,
      name: "Suomen Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/246.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 247,
      name: "Kakkonen - Lohko A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/247.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 248,
      name: "Kakkonen - Lohko B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/248.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 249,
      name: "Kakkonen - Lohko C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/249.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 526,
      name: "Trophée des Champions",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/526.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 242,
      name: "Liga Pro",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/242.png",
    },
    country: {
      name: "Ecuador",
      code: "EC",
      flag: "https://media.api-sports.io/flags/ec.svg",
    },
  },
  {
    league: {
      id: 243,
      name: "Liga Pro Serie B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/243.png",
    },
    country: {
      name: "Ecuador",
      code: "EC",
      flag: "https://media.api-sports.io/flags/ec.svg",
    },
  },
  {
    league: {
      id: 539,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/539.png",
    },
    country: {
      name: "Egypt",
      code: "EG",
      flag: "https://media.api-sports.io/flags/eg.svg",
    },
  },
  {
    league: {
      id: 397,
      name: "Girabola",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/397.png",
    },
    country: {
      name: "Angola",
      code: "AO",
      flag: "https://media.api-sports.io/flags/ao.svg",
    },
  },
  {
    league: {
      id: 343,
      name: "First League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/343.png",
    },
    country: {
      name: "Armenia",
      code: "AM",
      flag: "https://media.api-sports.io/flags/am.svg",
    },
  },
  {
    league: {
      id: 342,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/342.png",
    },
    country: {
      name: "Armenia",
      code: "AM",
      flag: "https://media.api-sports.io/flags/am.svg",
    },
  },
  {
    league: {
      id: 481,
      name: "Northern NSW NPL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/481.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 116,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/116.png",
    },
    country: {
      name: "Belarus",
      code: "BY",
      flag: "https://media.api-sports.io/flags/by.svg",
    },
  },
  {
    league: {
      id: 117,
      name: "1. Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/117.png",
    },
    country: {
      name: "Belarus",
      code: "BY",
      flag: "https://media.api-sports.io/flags/by.svg",
    },
  },
  {
    league: {
      id: 118,
      name: "2. Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/118.png",
    },
    country: {
      name: "Belarus",
      code: "BY",
      flag: "https://media.api-sports.io/flags/by.svg",
    },
  },
  {
    league: {
      id: 400,
      name: "Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/400.png",
    },
    country: {
      name: "Zambia",
      code: "ZM",
      flag: "https://media.api-sports.io/flags/zm.svg",
    },
  },
  {
    league: {
      id: 340,
      name: "V.League 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/340.png",
    },
    country: {
      name: "Vietnam",
      code: "VN",
      flag: "https://media.api-sports.io/flags/vn.svg",
    },
  },
  {
    league: {
      id: 102,
      name: "Emperor Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/102.png",
    },
    country: {
      name: "Japan",
      code: "JP",
      flag: "https://media.api-sports.io/flags/jp.svg",
    },
  },
  {
    league: {
      id: 101,
      name: "J-League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/101.png",
    },
    country: {
      name: "Japan",
      code: "JP",
      flag: "https://media.api-sports.io/flags/jp.svg",
    },
  },
  {
    league: {
      id: 98,
      name: "J1 League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/98.png",
    },
    country: {
      name: "Japan",
      code: "JP",
      flag: "https://media.api-sports.io/flags/jp.svg",
    },
  },
  {
    league: {
      id: 99,
      name: "J2 League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/99.png",
    },
    country: {
      name: "Japan",
      code: "JP",
      flag: "https://media.api-sports.io/flags/jp.svg",
    },
  },
  {
    league: {
      id: 100,
      name: "J3 League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/100.png",
    },
    country: {
      name: "Japan",
      code: "JP",
      flag: "https://media.api-sports.io/flags/jp.svg",
    },
  },
  {
    league: {
      id: 389,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/389.png",
    },
    country: {
      name: "Kazakhstan",
      code: "KZ",
      flag: "https://media.api-sports.io/flags/kz.svg",
    },
  },
  {
    league: {
      id: 276,
      name: "FKF Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/276.png",
    },
    country: {
      name: "Kenya",
      code: "KE",
      flag: "https://media.api-sports.io/flags/ke.svg",
    },
  },
  {
    league: {
      id: 121,
      name: "DBU Pokalen",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/121.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 379,
      name: "Ligue Haïtienne",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/379.png",
    },
    country: {
      name: "Haiti",
      code: "HT",
      flag: "https://media.api-sports.io/flags/ht.svg",
    },
  },
  {
    league: {
      id: 364,
      name: "1. Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/364.png",
    },
    country: {
      name: "Latvia",
      code: "LV",
      flag: "https://media.api-sports.io/flags/lv.svg",
    },
  },
  {
    league: {
      id: 365,
      name: "Virsliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/365.png",
    },
    country: {
      name: "Latvia",
      code: "LV",
      flag: "https://media.api-sports.io/flags/lv.svg",
    },
  },
  {
    league: {
      id: 361,
      name: "1 Lyga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/361.png",
    },
    country: {
      name: "Lithuania",
      code: "LT",
      flag: "https://media.api-sports.io/flags/lt.svg",
    },
  },
  {
    league: {
      id: 362,
      name: "A Lyga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/362.png",
    },
    country: {
      name: "Lithuania",
      code: "LT",
      flag: "https://media.api-sports.io/flags/lt.svg",
    },
  },
  {
    league: {
      id: 528,
      name: "Community Shield",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/528.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 72,
      name: "Serie B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/72.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 505,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/505.png",
    },
    country: {
      name: "Singapore",
      code: "SG",
      flag: "https://media.api-sports.io/flags/sg.svg",
    },
  },
  {
    league: {
      id: 28,
      name: "SAFF Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/28.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 421,
      name: "Division di Honor",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/421.png",
    },
    country: {
      name: "Aruba",
      code: "AW",
      flag: "https://media.api-sports.io/flags/aw.svg",
    },
  },
  {
    league: {
      id: 420,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/420.png",
    },
    country: {
      name: "Azerbaidjan",
      code: "AZ",
      flag: "https://media.api-sports.io/flags/az.svg",
    },
  },
  {
    league: {
      id: 298,
      name: "FA Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/298.png",
    },
    country: {
      name: "Thailand",
      code: "TH",
      flag: "https://media.api-sports.io/flags/th.svg",
    },
  },
  {
    league: {
      id: 376,
      name: "National Football League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/376.png",
    },
    country: {
      name: "Fiji",
      code: "FJ",
      flag: "https://media.api-sports.io/flags/fj.svg",
    },
  },
  {
    league: {
      id: 64,
      name: "Feminine Division 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/64.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 3,
      name: "UEFA Europa League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/3.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 327,
      name: "Erovnuli Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/327.png",
    },
    country: {
      name: "Georgia",
      code: "GE",
      flag: "https://media.api-sports.io/flags/ge.svg",
    },
  },
  {
    league: {
      id: 378,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/378.png",
    },
    country: {
      name: "Guinea",
      code: "GN",
      flag: "https://media.api-sports.io/flags/gn.svg",
    },
  },
  {
    league: {
      id: 520,
      name: "Acreano",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/520.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 547,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/547.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 807,
      name: "AFC Challenge Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/807.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 19,
      name: "African Nations Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/19.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 24,
      name: "AFF Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/24.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 37,
      name: "World Cup - Qualification Intercontinental Play-offs",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/37.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 128,
      name: "Liga Profesional Argentina",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/128.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 183,
      name: "League One",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/183.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 184,
      name: "League Two",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/184.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 22,
      name: "CONCACAF Gold Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/22.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 23,
      name: "EAFF E-1 Football Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/23.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 27,
      name: "OFC Champions League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/27.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 519,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/519.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 527,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/527.png",
    },
    country: {
      name: "Chile",
      code: "CL",
      flag: "https://media.api-sports.io/flags/cl.svg",
    },
  },
  {
    league: {
      id: 6,
      name: "Africa Cup of Nations",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/6.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 9,
      name: "Copa America",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/9.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 925,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/925.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 255,
      name: "USL Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/255.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 363,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/363.png",
    },
    country: {
      name: "Ethiopia",
      code: "ET",
      flag: "https://media.api-sports.io/flags/et.svg",
    },
  },
  {
    league: {
      id: 122,
      name: "2nd Division - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/122.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 123,
      name: "2nd Division - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/123.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 567,
      name: "Ligi kuu Bara",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/567.png",
    },
    country: {
      name: "Tanzania",
      code: "TZ",
      flag: "https://media.api-sports.io/flags/tz.svg",
    },
  },
  {
    league: {
      id: 550,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/550.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 555,
      name: "Supercupa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/555.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 556,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/556.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 497,
      name: "Japan Football League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/497.png",
    },
    country: {
      name: "Japan",
      code: "JP",
      flag: "https://media.api-sports.io/flags/jp.svg",
    },
  },
  {
    league: {
      id: 127,
      name: "Denmark Series - Group 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/127.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 563,
      name: "Ettan - Norra",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/563.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 564,
      name: "Ettan - Södra",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/564.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 569,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/569.png",
    },
    country: {
      name: "Kyrgyzstan",
      code: "KG",
      flag: "https://media.api-sports.io/flags/kg.svg",
    },
  },
  {
    league: {
      id: 317,
      name: "1st League - RS",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/317.png",
    },
    country: {
      name: "Bosnia",
      code: "BA",
      flag: "https://media.api-sports.io/flags/ba.svg",
    },
  },
  {
    league: {
      id: 316,
      name: "1st League - FBiH",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/316.png",
    },
    country: {
      name: "Bosnia",
      code: "BA",
      flag: "https://media.api-sports.io/flags/ba.svg",
    },
  },
  {
    league: {
      id: 295,
      name: "K3 League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/295.png",
    },
    country: {
      name: "South-Korea",
      code: "KR",
      flag: "https://media.api-sports.io/flags/kr.svg",
    },
  },
  {
    league: {
      id: 495,
      name: "Hazfi Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/495.png",
    },
    country: {
      name: "Iran",
      code: "IR",
      flag: "https://media.api-sports.io/flags/ir.svg",
    },
  },
  {
    league: {
      id: 496,
      name: "Liga Alef",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/496.png",
    },
    country: {
      name: "Israel",
      code: "IL",
      flag: "https://media.api-sports.io/flags/il.svg",
    },
  },
  {
    league: {
      id: 506,
      name: "2. liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/506.png",
    },
    country: {
      name: "Slovakia",
      code: "SK",
      flag: "https://media.api-sports.io/flags/sk.svg",
    },
  },
  {
    league: {
      id: 514,
      name: "Coupe Nationale",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/514.png",
    },
    country: {
      name: "Algeria",
      code: "DZ",
      flag: "https://media.api-sports.io/flags/dz.svg",
    },
  },
  {
    league: {
      id: 521,
      name: "Amapaense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/521.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 522,
      name: "Amazonense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/522.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 524,
      name: "Olympics Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/524.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 531,
      name: "UEFA Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/531.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 543,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/543.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 368,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/368.png",
    },
    country: {
      name: "Singapore",
      code: "SG",
      flag: "https://media.api-sports.io/flags/sg.svg",
    },
  },
  {
    league: {
      id: 314,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/314.png",
    },
    country: {
      name: "Bosnia",
      code: "BA",
      flag: "https://media.api-sports.io/flags/ba.svg",
    },
  },
  {
    league: {
      id: 315,
      name: "Premijer Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/315.png",
    },
    country: {
      name: "Bosnia",
      code: "BA",
      flag: "https://media.api-sports.io/flags/ba.svg",
    },
  },
  {
    league: {
      id: 371,
      name: "First League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/371.png",
    },
    country: {
      name: "Macedonia",
      code: "MK",
      flag: "https://media.api-sports.io/flags/mk.svg",
    },
  },
  {
    league: {
      id: 382,
      name: "Liga Leumit",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/382.png",
    },
    country: {
      name: "Israel",
      code: "IL",
      flag: "https://media.api-sports.io/flags/il.svg",
    },
  },
  {
    league: {
      id: 383,
      name: "Ligat Ha'al",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/383.png",
    },
    country: {
      name: "Israel",
      code: "IL",
      flag: "https://media.api-sports.io/flags/il.svg",
    },
  },
  {
    league: {
      id: 386,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/386.png",
    },
    country: {
      name: "Ivory-Coast",
      code: "CI",
      flag: "https://media.api-sports.io/flags/ci.svg",
    },
  },
  {
    league: {
      id: 392,
      name: "Challenge League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/392.png",
    },
    country: {
      name: "Malta",
      code: "MT",
      flag: "https://media.api-sports.io/flags/mt.svg",
    },
  },
  {
    league: {
      id: 393,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/393.png",
    },
    country: {
      name: "Malta",
      code: "MT",
      flag: "https://media.api-sports.io/flags/mt.svg",
    },
  },
  {
    league: {
      id: 394,
      name: "Super Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/394.png",
    },
    country: {
      name: "Moldova",
      code: "MD",
      flag: "https://media.api-sports.io/flags/md.svg",
    },
  },
  {
    league: {
      id: 396,
      name: "Primera Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/396.png",
    },
    country: {
      name: "Nicaragua",
      code: "NI",
      flag: "https://media.api-sports.io/flags/ni.svg",
    },
  },
  {
    league: {
      id: 96,
      name: "Taça de Portugal",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/96.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 399,
      name: "NPFL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/399.png",
    },
    country: {
      name: "Nigeria",
      code: "NG",
      flag: "https://media.api-sports.io/flags/ng.svg",
    },
  },
  {
    league: {
      id: 401,
      name: "Premier Soccer League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/401.png",
    },
    country: {
      name: "Zimbabwe",
      code: "ZW",
      flag: "https://media.api-sports.io/flags/zw.svg",
    },
  },
  {
    league: {
      id: 402,
      name: "Sudani Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/402.png",
    },
    country: {
      name: "Sudan",
      code: "SD",
      flag: "https://media.api-sports.io/flags/sd.svg",
    },
  },
  {
    league: {
      id: 403,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/403.png",
    },
    country: {
      name: "Senegal",
      code: "SN",
      flag: "https://media.api-sports.io/flags/sn.svg",
    },
  },
  {
    league: {
      id: 404,
      name: "Campionato",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/404.png",
    },
    country: {
      name: "San-Marino",
      code: "SM",
      flag: "https://media.api-sports.io/flags/sm.svg",
    },
  },
  {
    league: {
      id: 411,
      name: "Elite One",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/411.png",
    },
    country: {
      name: "Cameroon",
      code: "CM",
      flag: "https://media.api-sports.io/flags/cm.svg",
    },
  },
  {
    league: {
      id: 410,
      name: "C-League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/410.png",
    },
    country: {
      name: "Cambodia",
      code: "KH",
      flag: "https://media.api-sports.io/flags/kh.svg",
    },
  },
  {
    league: {
      id: 417,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/417.png",
    },
    country: {
      name: "Bahrain",
      code: "BH",
      flag: "https://media.api-sports.io/flags/bh.svg",
    },
  },
  {
    league: {
      id: 415,
      name: "Championnat National",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/415.png",
    },
    country: {
      name: "Benin",
      code: "BJ",
      flag: "https://media.api-sports.io/flags/bj.svg",
    },
  },
  {
    league: {
      id: 414,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/414.png",
    },
    country: {
      name: "Bermuda",
      code: "BM",
      flag: "https://media.api-sports.io/flags/bm.svg",
    },
  },
  {
    league: {
      id: 413,
      name: "Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/413.png",
    },
    country: {
      name: "Bhutan",
      code: "BT",
      flag: "https://media.api-sports.io/flags/bt.svg",
    },
  },
  {
    league: {
      id: 412,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/412.png",
    },
    country: {
      name: "Botswana",
      code: "BW",
      flag: "https://media.api-sports.io/flags/bw.svg",
    },
  },
  {
    league: {
      id: 398,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/398.png",
    },
    country: {
      name: "Bangladesh",
      code: "BD",
      flag: "https://media.api-sports.io/flags/bd.svg",
    },
  },
  {
    league: {
      id: 16,
      name: "CONCACAF Champions League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/16.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 17,
      name: "AFC Champions League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/17.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 25,
      name: "Gulf Cup of Nations",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/25.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 26,
      name: "International Champions Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/26.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 141,
      name: "Segunda División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/141.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 136,
      name: "Serie B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/136.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 103,
      name: "Eliteserien",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/103.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 89,
      name: "Eerste Divisie",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/89.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 95,
      name: "Segunda Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/95.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 113,
      name: "Allsvenskan",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/113.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 162,
      name: "Primera División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/162.png",
    },
    country: {
      name: "Costa-Rica",
      code: "CR",
      flag: "https://media.api-sports.io/flags/cr.svg",
    },
  },
  {
    league: {
      id: 164,
      name: "Úrvalsdeild",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/164.png",
    },
    country: {
      name: "Iceland",
      code: "IS",
      flag: "https://media.api-sports.io/flags/is.svg",
    },
  },
  {
    league: {
      id: 169,
      name: "Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/169.png",
    },
    country: {
      name: "China",
      code: "CN",
      flag: "https://media.api-sports.io/flags/cn.svg",
    },
  },
  {
    league: {
      id: 137,
      name: "Coppa Italia",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/137.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 200,
      name: "Botola Pro",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/200.png",
    },
    country: {
      name: "Morocco",
      code: "MA",
      flag: "https://media.api-sports.io/flags/ma.svg",
    },
  },
  {
    league: {
      id: 207,
      name: "Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/207.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 210,
      name: "HNL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/210.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 235,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/235.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 239,
      name: "Primera A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/239.png",
    },
    country: {
      name: "Colombia",
      code: "CO",
      flag: "https://media.api-sports.io/flags/co.svg",
    },
  },
  {
    league: {
      id: 250,
      name: "Division Profesional - Apertura",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/250.png",
    },
    country: {
      name: "Paraguay",
      code: "PY",
      flag: "https://media.api-sports.io/flags/py.svg",
    },
  },
  {
    league: {
      id: 73,
      name: "Copa Do Brasil",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/73.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 90,
      name: "KNVB Beker",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/90.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 145,
      name: "Challenger Pro League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/145.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 173,
      name: "Second League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/173.png",
    },
    country: {
      name: "Bulgaria",
      code: "BG",
      flag: "https://media.api-sports.io/flags/bg.svg",
    },
  },
  {
    league: {
      id: 170,
      name: "League One",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/170.png",
    },
    country: {
      name: "China",
      code: "CN",
      flag: "https://media.api-sports.io/flags/cn.svg",
    },
  },
  {
    league: {
      id: 189,
      name: "Capital Territory NPL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/189.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 240,
      name: "Primera B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/240.png",
    },
    country: {
      name: "Colombia",
      code: "CO",
      flag: "https://media.api-sports.io/flags/co.svg",
    },
  },
  {
    league: {
      id: 211,
      name: "First NL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/211.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 138,
      name: "Serie C - Girone A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/138.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 146,
      name: "Super League Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/146.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 74,
      name: "Brasileiro Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/74.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 44,
      name: "FA WSL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/44.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 82,
      name: "Frauen Bundesliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/82.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 139,
      name: "Serie A Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/139.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 91,
      name: "Eredivisie Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/91.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 142,
      name: "Primera División Femenina",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/142.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 130,
      name: "Copa Argentina",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/130.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 190,
      name: "A-League Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/190.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 236,
      name: "First League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/236.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 165,
      name: "1. Deild",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/165.png",
    },
    country: {
      name: "Iceland",
      code: "IS",
      flag: "https://media.api-sports.io/flags/is.svg",
    },
  },
  {
    league: {
      id: 251,
      name: "Division Intermedia",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/251.png",
    },
    country: {
      name: "Paraguay",
      code: "PY",
      flag: "https://media.api-sports.io/flags/py.svg",
    },
  },
  {
    league: {
      id: 104,
      name: "1. Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/104.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 114,
      name: "Superettan",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/114.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 208,
      name: "Challenge League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/208.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 262,
      name: "Liga MX",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/262.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 263,
      name: "Liga de Expansión MX",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/263.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 259,
      name: "Canadian Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/259.png",
    },
    country: {
      name: "Canada",
      code: "CA",
      flag: "https://media.api-sports.io/flags/ca.svg",
    },
  },
  {
    league: {
      id: 278,
      name: "Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/278.png",
    },
    country: {
      name: "Malaysia",
      code: "MY",
      flag: "https://media.api-sports.io/flags/my.svg",
    },
  },
  {
    league: {
      id: 279,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/279.png",
    },
    country: {
      name: "Malaysia",
      code: "MY",
      flag: "https://media.api-sports.io/flags/my.svg",
    },
  },
  {
    league: {
      id: 280,
      name: "Premiership",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/280.png",
    },
    country: {
      name: "New-Zealand",
      code: "NZ",
      flag: "https://media.api-sports.io/flags/nz.svg",
    },
  },
  {
    league: {
      id: 281,
      name: "Primera División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/281.png",
    },
    country: {
      name: "Peru",
      code: "PE",
      flag: "https://media.api-sports.io/flags/pe.svg",
    },
  },
  {
    league: {
      id: 282,
      name: "Segunda División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/282.png",
    },
    country: {
      name: "Peru",
      code: "PE",
      flag: "https://media.api-sports.io/flags/pe.svg",
    },
  },
  {
    league: {
      id: 283,
      name: "Liga I",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/283.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 284,
      name: "Liga II",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/284.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 286,
      name: "Super Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/286.png",
    },
    country: {
      name: "Serbia",
      code: "RS",
      flag: "https://media.api-sports.io/flags/rs.svg",
    },
  },
  {
    league: {
      id: 287,
      name: "Prva Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/287.png",
    },
    country: {
      name: "Serbia",
      code: "RS",
      flag: "https://media.api-sports.io/flags/rs.svg",
    },
  },
  {
    league: {
      id: 288,
      name: "Premier Soccer League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/288.png",
    },
    country: {
      name: "South-Africa",
      code: "ZA",
      flag: "https://media.api-sports.io/flags/za.svg",
    },
  },
  {
    league: {
      id: 289,
      name: "1st Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/289.png",
    },
    country: {
      name: "South-Africa",
      code: "ZA",
      flag: "https://media.api-sports.io/flags/za.svg",
    },
  },
  {
    league: {
      id: 290,
      name: "Persian Gulf Pro League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/290.png",
    },
    country: {
      name: "Iran",
      code: "IR",
      flag: "https://media.api-sports.io/flags/ir.svg",
    },
  },
  {
    league: {
      id: 291,
      name: "Azadegan League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/291.png",
    },
    country: {
      name: "Iran",
      code: "IR",
      flag: "https://media.api-sports.io/flags/ir.svg",
    },
  },
  {
    league: {
      id: 292,
      name: "K League 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/292.png",
    },
    country: {
      name: "South-Korea",
      code: "KR",
      flag: "https://media.api-sports.io/flags/kr.svg",
    },
  },
  {
    league: {
      id: 293,
      name: "K League 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/293.png",
    },
    country: {
      name: "South-Korea",
      code: "KR",
      flag: "https://media.api-sports.io/flags/kr.svg",
    },
  },
  {
    league: {
      id: 307,
      name: "Pro League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/307.png",
    },
    country: {
      name: "Saudi-Arabia",
      code: "SA",
      flag: "https://media.api-sports.io/flags/sa.svg",
    },
  },
  {
    league: {
      id: 308,
      name: "Division 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/308.png",
    },
    country: {
      name: "Saudi-Arabia",
      code: "SA",
      flag: "https://media.api-sports.io/flags/sa.svg",
    },
  },
  {
    league: {
      id: 309,
      name: "Division 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/309.png",
    },
    country: {
      name: "Saudi-Arabia",
      code: "SA",
      flag: "https://media.api-sports.io/flags/sa.svg",
    },
  },
  {
    league: {
      id: 252,
      name: "Division Profesional - Clausura",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/252.png",
    },
    country: {
      name: "Paraguay",
      code: "PY",
      flag: "https://media.api-sports.io/flags/py.svg",
    },
  },
  {
    league: {
      id: 166,
      name: "2. Deild",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/166.png",
    },
    country: {
      name: "Iceland",
      code: "IS",
      flag: "https://media.api-sports.io/flags/is.svg",
    },
  },
  {
    league: {
      id: 592,
      name: "Division 2 - Norra Götaland",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/592.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 593,
      name: "Division 2 - Norra Svealand",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/593.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 594,
      name: "Division 2 - Norrland",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/594.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 595,
      name: "Division 2 - Södra Svealand",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/595.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 596,
      name: "Division 2 - Västra Götaland",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/596.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 597,
      name: "Division 2 - Östra Götaland",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/597.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 511,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/511.png",
    },
    country: {
      name: "Tunisia",
      code: "TN",
      flag: "https://media.api-sports.io/flags/tn.svg",
    },
  },
  {
    league: {
      id: 488,
      name: "U19 Bundesliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/488.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 805,
      name: "Copa Centroamericana",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/805.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 806,
      name: "OFC Nations Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/806.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 766,
      name: "China Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/766.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 827,
      name: "Crown Prince Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/827.png",
    },
    country: {
      name: "Saudi-Arabia",
      code: "SA",
      flag: "https://media.api-sports.io/flags/sa.svg",
    },
  },
  {
    league: {
      id: 372,
      name: "Second League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/372.png",
    },
    country: {
      name: "Macedonia",
      code: "MK",
      flag: "https://media.api-sports.io/flags/mk.svg",
    },
  },
  {
    league: {
      id: 174,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/174.png",
    },
    country: {
      name: "Bulgaria",
      code: "BG",
      flag: "https://media.api-sports.io/flags/bg.svg",
    },
  },
  {
    league: {
      id: 10,
      name: "Friendlies",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/10.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 14,
      name: "UEFA Youth League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/14.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 18,
      name: "AFC Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/18.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 20,
      name: "CAF Confederation Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/20.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 38,
      name: "UEFA U21 Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/38.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 559,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/559.png",
    },
    country: {
      name: "Northern-Ireland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 560,
      name: "Presidents Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/560.png",
    },
    country: {
      name: "United-Arab-Emirates",
      code: "AE",
      flag: "https://media.api-sports.io/flags/ae.svg",
    },
  },
  {
    league: {
      id: 561,
      name: "Premier Intermediate League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/561.png",
    },
    country: {
      name: "Northern-Ireland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 407,
      name: "Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/407.png",
    },
    country: {
      name: "Northern-Ireland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 408,
      name: "Premiership",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/408.png",
    },
    country: {
      name: "Northern-Ireland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 331,
      name: "Division 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/331.png",
    },
    country: {
      name: "Kuwait",
      code: "KW",
      flag: "https://media.api-sports.io/flags/kw.svg",
    },
  },
  {
    league: {
      id: 425,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/425.png",
    },
    country: {
      name: "Syria",
      code: "SY",
      flag: "https://media.api-sports.io/flags/sy.svg",
    },
  },
  {
    league: {
      id: 77,
      name: "Alagoano",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/77.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 337,
      name: "Druha Liga - Group B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/337.png",
    },
    country: {
      name: "Ukraine",
      code: "UA",
      flag: "https://media.api-sports.io/flags/ua.svg",
    },
  },
  {
    league: {
      id: 185,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/185.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 490,
      name: "World Cup - U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/490.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 492,
      name: "Tweede Divisie",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/492.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 498,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/498.png",
    },
    country: {
      name: "Kazakhstan",
      code: "KZ",
      flag: "https://media.api-sports.io/flags/kz.svg",
    },
  },
  {
    league: {
      id: 504,
      name: "King's Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/504.png",
    },
    country: {
      name: "Saudi-Arabia",
      code: "SA",
      flag: "https://media.api-sports.io/flags/sa.svg",
    },
  },
  {
    league: {
      id: 507,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/507.png",
    },
    country: {
      name: "South-Africa",
      code: "ZA",
      flag: "https://media.api-sports.io/flags/za.svg",
    },
  },
  {
    league: {
      id: 508,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/508.png",
    },
    country: {
      name: "South-Africa",
      code: "ZA",
      flag: "https://media.api-sports.io/flags/za.svg",
    },
  },
  {
    league: {
      id: 510,
      name: "1. Liga Promotion",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/510.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 584,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/584.png",
    },
    country: {
      name: "Libya",
      code: "LY",
      flag: "https://media.api-sports.io/flags/ly.svg",
    },
  },
  {
    league: {
      id: 589,
      name: "Taiwan Football Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/589.png",
    },
    country: {
      name: "Chinese-Taipei",
      code: "TW",
      flag: "https://media.api-sports.io/flags/tw.svg",
    },
  },
  {
    league: {
      id: 258,
      name: "Canadian Soccer League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/258.png",
    },
    country: {
      name: "Canada",
      code: "CA",
      flag: "https://media.api-sports.io/flags/ca.svg",
    },
  },
  {
    league: {
      id: 274,
      name: "Liga 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/274.png",
    },
    country: {
      name: "Indonesia",
      code: "ID",
      flag: "https://media.api-sports.io/flags/id.svg",
    },
  },
  {
    league: {
      id: 304,
      name: "Liga Panameña de Fútbol",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/304.png",
    },
    country: {
      name: "Panama",
      code: "PA",
      flag: "https://media.api-sports.io/flags/pa.svg",
    },
  },
  {
    league: {
      id: 106,
      name: "Ekstraklasa",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/106.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 172,
      name: "First League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/172.png",
    },
    country: {
      name: "Bulgaria",
      code: "BG",
      flag: "https://media.api-sports.io/flags/bg.svg",
    },
  },
  {
    league: {
      id: 5,
      name: "UEFA Nations League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/5.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 163,
      name: "Liga de Ascenso",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/163.png",
    },
    country: {
      name: "Costa-Rica",
      code: "CR",
      flag: "https://media.api-sports.io/flags/cr.svg",
    },
  },
  {
    league: {
      id: 111,
      name: "FAW Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/111.png",
    },
    country: {
      name: "Wales",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 265,
      name: "Primera División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/265.png",
    },
    country: {
      name: "Chile",
      code: "CL",
      flag: "https://media.api-sports.io/flags/cl.svg",
    },
  },
  {
    league: {
      id: 266,
      name: "Primera B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/266.png",
    },
    country: {
      name: "Chile",
      code: "CL",
      flag: "https://media.api-sports.io/flags/cl.svg",
    },
  },
  {
    league: {
      id: 277,
      name: "Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/277.png",
    },
    country: {
      name: "Kenya",
      code: "KE",
      flag: "https://media.api-sports.io/flags/ke.svg",
    },
  },
  {
    league: {
      id: 318,
      name: "1. Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/318.png",
    },
    country: {
      name: "Cyprus",
      code: "CY",
      flag: "https://media.api-sports.io/flags/cy.svg",
    },
  },
  {
    league: {
      id: 319,
      name: "2. Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/319.png",
    },
    country: {
      name: "Cyprus",
      code: "CY",
      flag: "https://media.api-sports.io/flags/cy.svg",
    },
  },
  {
    league: {
      id: 320,
      name: "3. Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/320.png",
    },
    country: {
      name: "Cyprus",
      code: "CY",
      flag: "https://media.api-sports.io/flags/cy.svg",
    },
  },
  {
    league: {
      id: 201,
      name: "Botola 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/201.png",
    },
    country: {
      name: "Morocco",
      code: "MA",
      flag: "https://media.api-sports.io/flags/ma.svg",
    },
  },
  {
    league: {
      id: 323,
      name: "Indian Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/323.png",
    },
    country: {
      name: "India",
      code: "IN",
      flag: "https://media.api-sports.io/flags/in.svg",
    },
  },
  {
    league: {
      id: 324,
      name: "I-League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/324.png",
    },
    country: {
      name: "India",
      code: "IN",
      flag: "https://media.api-sports.io/flags/in.svg",
    },
  },
  {
    league: {
      id: 107,
      name: "I Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/107.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 332,
      name: "Super Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/332.png",
    },
    country: {
      name: "Slovakia",
      code: "SK",
      flag: "https://media.api-sports.io/flags/sk.svg",
    },
  },
  {
    league: {
      id: 345,
      name: "Czech Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/345.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 346,
      name: "FNL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/346.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 355,
      name: "First League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/355.png",
    },
    country: {
      name: "Montenegro",
      code: "ME",
      flag: "https://media.api-sports.io/flags/me.svg",
    },
  },
  {
    league: {
      id: 356,
      name: "Second League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/356.png",
    },
    country: {
      name: "Montenegro",
      code: "ME",
      flag: "https://media.api-sports.io/flags/me.svg",
    },
  },
  {
    league: {
      id: 344,
      name: "Primera División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/344.png",
    },
    country: {
      name: "Bolivia",
      code: "BO",
      flag: "https://media.api-sports.io/flags/bo.svg",
    },
  },
  {
    league: {
      id: 256,
      name: "USL League Two",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/256.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 557,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/557.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 808,
      name: "CONCACAF Nations League - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/808.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 373,
      name: "1. SNL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/373.png",
    },
    country: {
      name: "Slovenia",
      code: "SI",
      flag: "https://media.api-sports.io/flags/si.svg",
    },
  },
  {
    league: {
      id: 374,
      name: "2. SNL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/374.png",
    },
    country: {
      name: "Slovenia",
      code: "SI",
      flag: "https://media.api-sports.io/flags/si.svg",
    },
  },
  {
    league: {
      id: 391,
      name: "Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/391.png",
    },
    country: {
      name: "Malawi",
      code: "MW",
      flag: "https://media.api-sports.io/flags/mw.svg",
    },
  },
  {
    league: {
      id: 143,
      name: "Copa del Rey",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/143.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 405,
      name: "National Soccer League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/405.png",
    },
    country: {
      name: "Rwanda",
      code: "RW",
      flag: "https://media.api-sports.io/flags/rw.svg",
    },
  },
  {
    league: {
      id: 409,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/409.png",
    },
    country: {
      name: "Namibia",
      code: "NA",
      flag: "https://media.api-sports.io/flags/na.svg",
    },
  },
  {
    league: {
      id: 416,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/416.png",
    },
    country: {
      name: "Belize",
      code: "BZ",
      flag: "https://media.api-sports.io/flags/bz.svg",
    },
  },
  {
    league: {
      id: 212,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/212.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 384,
      name: "State Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/384.png",
    },
    country: {
      name: "Israel",
      code: "IL",
      flag: "https://media.api-sports.io/flags/il.svg",
    },
  },
  {
    league: {
      id: 285,
      name: "Cupa României",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/285.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 321,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/321.png",
    },
    country: {
      name: "Cyprus",
      code: "CY",
      flag: "https://media.api-sports.io/flags/cy.svg",
    },
  },
  {
    league: {
      id: 31,
      name: "World Cup - Qualification CONCACAF",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/31.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 32,
      name: "World Cup - Qualification Europe",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/32.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 33,
      name: "World Cup - Qualification Oceania",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/33.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 34,
      name: "World Cup - Qualification South America",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/34.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 29,
      name: "World Cup - Qualification Africa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/29.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 30,
      name: "World Cup - Qualification Asia",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/30.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 942,
      name: "Serie C - Girone B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/942.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 943,
      name: "Serie C - Girone C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/943.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 530,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/530.png",
    },
    country: {
      name: "Georgia",
      code: "GE",
      flag: "https://media.api-sports.io/flags/ge.svg",
    },
  },
  {
    league: {
      id: 718,
      name: "Piala Indonesia",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/718.png",
    },
    country: {
      name: "Indonesia",
      code: "ID",
      flag: "https://media.api-sports.io/flags/id.svg",
    },
  },
  {
    league: {
      id: 149,
      name: "Second Amateur Division - VFV A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/149.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 150,
      name: "Second Amateur Division - VFV B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/150.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 151,
      name: "Third Amateur Division - VFV A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/151.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 152,
      name: "Third Amateur Division - VFV B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/152.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 175,
      name: "Third League - Northeast",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/175.png",
    },
    country: {
      name: "Bulgaria",
      code: "BG",
      flag: "https://media.api-sports.io/flags/bg.svg",
    },
  },
  {
    league: {
      id: 176,
      name: "Third League - Northwest",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/176.png",
    },
    country: {
      name: "Bulgaria",
      code: "BG",
      flag: "https://media.api-sports.io/flags/bg.svg",
    },
  },
  {
    league: {
      id: 177,
      name: "Third League - Southeast",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/177.png",
    },
    country: {
      name: "Bulgaria",
      code: "BG",
      flag: "https://media.api-sports.io/flags/bg.svg",
    },
  },
  {
    league: {
      id: 178,
      name: "Third League - Southwest",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/178.png",
    },
    country: {
      name: "Bulgaria",
      code: "BG",
      flag: "https://media.api-sports.io/flags/bg.svg",
    },
  },
  {
    league: {
      id: 49,
      name: "National League - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/49.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 491,
      name: "Løgmanssteypid",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/491.png",
    },
    country: {
      name: "Faroe-Islands",
      code: "FO",
      flag: "https://media.api-sports.io/flags/fo.svg",
    },
  },
  {
    league: {
      id: 493,
      name: "UEFA U19 Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/493.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 499,
      name: "Malaysia Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/499.png",
    },
    country: {
      name: "Malaysia",
      code: "MY",
      flag: "https://media.api-sports.io/flags/my.svg",
    },
  },
  {
    league: {
      id: 516,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/516.png",
    },
    country: {
      name: "Algeria",
      code: "DZ",
      flag: "https://media.api-sports.io/flags/dz.svg",
    },
  },
  {
    league: {
      id: 537,
      name: "CONCACAF U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/537.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 544,
      name: "FA Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/544.png",
    },
    country: {
      name: "Hong-Kong",
      code: "HK",
      flag: "https://media.api-sports.io/flags/hk.svg",
    },
  },
  {
    league: {
      id: 545,
      name: "AIFF Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/545.png",
    },
    country: {
      name: "India",
      code: "IN",
      flag: "https://media.api-sports.io/flags/in.svg",
    },
  },
  {
    league: {
      id: 224,
      name: "Landesliga - Burgenland",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/224.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 225,
      name: "Landesliga - Karnten",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/225.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 226,
      name: "Landesliga - Niederosterreich",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/226.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 227,
      name: "Landesliga - Oberosterreich",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/227.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 228,
      name: "Landesliga - Salzburg",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/228.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 229,
      name: "Landesliga - Steiermark",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/229.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 230,
      name: "Landesliga - Tirol",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/230.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 231,
      name: "Landesliga - Vorarlbergliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/231.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 232,
      name: "Landesliga - Wien",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/232.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 148,
      name: "Second Amateur Division - ACFF",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/148.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 153,
      name: "Provincial - Antwerpen",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/153.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 154,
      name: "Provincial - Brabant VFV",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/154.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 155,
      name: "Provincial - Hainaut",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/155.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 156,
      name: "Provincial - Liege",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/156.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 157,
      name: "Provincial - Limburg",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/157.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 158,
      name: "Provincial - Luxembourg",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/158.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 159,
      name: "Provincial - Namur",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/159.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 160,
      name: "Provincial - Oost-Vlaanderen",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/160.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 161,
      name: "Provincial - West-Vlaanderen",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/161.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 423,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/423.png",
    },
    country: {
      name: "Burkina-Faso",
      code: "BF",
      flag: "https://media.api-sports.io/flags/bf.svg",
    },
  },
  {
    league: {
      id: 424,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/424.png",
    },
    country: {
      name: "Congo-DR",
      code: "CG",
      flag: "https://media.api-sports.io/flags/cg.svg",
    },
  },
  {
    league: {
      id: 213,
      name: "Third NL - Istok",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/213.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 214,
      name: "Third NL - Jug",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/214.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 215,
      name: "Third NL - Sjever",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/215.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 216,
      name: "Third NL - Sredite",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/216.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 217,
      name: "Third NL - Zapad",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/217.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 348,
      name: "3. liga - CFL A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/348.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 349,
      name: "3. liga - MSFL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/349.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 350,
      name: "4. liga - Divizie A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/350.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 351,
      name: "4. liga - Divizie B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/351.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 352,
      name: "4. liga - Divizie C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/352.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 353,
      name: "4. liga - Divizie D",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/353.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 354,
      name: "4. liga - Divizie E",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/354.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 50,
      name: "National League - North",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/50.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 51,
      name: "National League - South",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/51.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 52,
      name: "Non League Div One - Isthmian North",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/52.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 53,
      name: "Non League Div One - Isthmian South Central",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/53.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 54,
      name: "Non League Div One - Northern West",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/54.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 55,
      name: "Non League Div One - Northern Midlands",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/55.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 56,
      name: "Non League Div One - Southern South",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/56.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 57,
      name: "Non League Div One - Isthmian South East",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/57.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 58,
      name: "Non League Premier - Isthmian",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/58.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 59,
      name: "Non League Premier - Northern",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/59.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 60,
      name: "Non League Premier - Southern South",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/60.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 92,
      name: "Derde Divisie - Saturday",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/92.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 93,
      name: "Derde Divisie - Sunday",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/93.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 109,
      name: "II Liga - East",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/109.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 341,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/341.png",
    },
    country: {
      name: "Vietnam",
      code: "VN",
      flag: "https://media.api-sports.io/flags/vn.svg",
    },
  },
  {
    league: {
      id: 238,
      name: "Youth Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/238.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 83,
      name: "Regionalliga - Bayern",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/83.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 84,
      name: "Regionalliga - Nord",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/84.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 85,
      name: "Regionalliga - Nordost",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/85.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 86,
      name: "Regionalliga - SudWest",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/86.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 87,
      name: "Regionalliga - West",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/87.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 426,
      name: "Serie D - Girone A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/426.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 427,
      name: "Serie D - Girone B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/427.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 428,
      name: "Serie D - Girone C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/428.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 429,
      name: "Serie D - Girone D",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/429.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 430,
      name: "Serie D - Girone E",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/430.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 431,
      name: "Serie D - Girone F",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/431.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 432,
      name: "Serie D - Girone G",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/432.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 433,
      name: "Serie D - Girone H",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/433.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 434,
      name: "Serie D - Girone I",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/434.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 435,
      name: "Primera División RFEF - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/435.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 436,
      name: "Primera División RFEF - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/436.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 437,
      name: "Primera División RFEF - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/437.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 438,
      name: "Primera División RFEF - Group 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/438.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 439,
      name: "Tercera División RFEF - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/439.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 440,
      name: "Tercera División RFEF - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/440.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 441,
      name: "Tercera División RFEF - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/441.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 442,
      name: "Tercera División RFEF - Group 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/442.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 443,
      name: "Tercera División RFEF - Group 5",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/443.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 444,
      name: "Tercera División RFEF - Group 6",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/444.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 445,
      name: "Tercera División RFEF - Group 7",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/445.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 446,
      name: "Tercera División RFEF - Group 8",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/446.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 447,
      name: "Tercera División RFEF - Group 9",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/447.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 448,
      name: "Tercera División RFEF - Group 10",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/448.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 449,
      name: "Tercera División RFEF - Group 11",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/449.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 450,
      name: "Tercera División RFEF - Group 12",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/450.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 451,
      name: "Tercera División RFEF - Group 13",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/451.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 452,
      name: "Tercera División RFEF - Group 14",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/452.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 453,
      name: "Tercera División RFEF - Group 15",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/453.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 454,
      name: "Tercera División RFEF - Group 16",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/454.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 455,
      name: "Tercera División RFEF - Group 17",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/455.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 456,
      name: "Tercera División RFEF - Group 18",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/456.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 457,
      name: "Campeonato de Portugal Prio - Group A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/457.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 458,
      name: "Campeonato de Portugal Prio - Group B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/458.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 459,
      name: "Campeonato de Portugal Prio - Group C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/459.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 460,
      name: "Campeonato de Portugal Prio - Group D",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/460.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 461,
      name: "National 3 - Group A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/461.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 462,
      name: "National 3 - Group B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/462.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 463,
      name: "National 3 - Group C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/463.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 464,
      name: "National 3 - Group D",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/464.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 465,
      name: "National 3 - Group E",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/465.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 466,
      name: "National 3 - Group F",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/466.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 467,
      name: "National 3 - Group H",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/467.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 468,
      name: "National 3 - Group I",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/468.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 469,
      name: "National 3 - Group J",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/469.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 470,
      name: "National 3 - Group K",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/470.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 471,
      name: "National 3 - Group L",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/471.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 472,
      name: "National 3 - Group M",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/472.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 473,
      name: "2. Division - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/473.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 474,
      name: "2. Division - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/474.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 484,
      name: "Frauenliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/484.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 485,
      name: "Federation Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/485.png",
    },
    country: {
      name: "Bahrain",
      code: "BH",
      flag: "https://media.api-sports.io/flags/bh.svg",
    },
  },
  {
    league: {
      id: 486,
      name: "Coppa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/486.png",
    },
    country: {
      name: "Belarus",
      code: "BY",
      flag: "https://media.api-sports.io/flags/by.svg",
    },
  },
  {
    league: {
      id: 487,
      name: "First Amateur Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/487.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 489,
      name: "USL League One",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/489.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 494,
      name: "Super League 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/494.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 501,
      name: "Copa Paraguay",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/501.png",
    },
    country: {
      name: "Paraguay",
      code: "PY",
      flag: "https://media.api-sports.io/flags/py.svg",
    },
  },
  {
    league: {
      id: 502,
      name: "Copa Bicentenario",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/502.png",
    },
    country: {
      name: "Peru",
      code: "PE",
      flag: "https://media.api-sports.io/flags/pe.svg",
    },
  },
  {
    league: {
      id: 503,
      name: "Copa Perú",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/503.png",
    },
    country: {
      name: "Peru",
      code: "PE",
      flag: "https://media.api-sports.io/flags/pe.svg",
    },
  },
  {
    league: {
      id: 509,
      name: "8 Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/509.png",
    },
    country: {
      name: "South-Africa",
      code: "ZA",
      flag: "https://media.api-sports.io/flags/za.svg",
    },
  },
  {
    league: {
      id: 515,
      name: "U21 League 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/515.png",
    },
    country: {
      name: "Algeria",
      code: "DZ",
      flag: "https://media.api-sports.io/flags/dz.svg",
    },
  },
  {
    league: {
      id: 517,
      name: "Trofeo de Campeones de la Superliga",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/517.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 518,
      name: "Reserve Pro League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/518.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 523,
      name: "NISA",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/523.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 525,
      name: "UEFA Champions League Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/525.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 533,
      name: "CAF Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/533.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 534,
      name: "CONCACAF Caribbean Club Shield",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/534.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 546,
      name: "FAI President's Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/546.png",
    },
    country: {
      name: "Ireland",
      code: "IE",
      flag: "https://media.api-sports.io/flags/ie.svg",
    },
  },
  {
    league: {
      id: 275,
      name: "Liga 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/275.png",
    },
    country: {
      name: "Indonesia",
      code: "ID",
      flag: "https://media.api-sports.io/flags/id.svg",
    },
  },
  {
    league: {
      id: 395,
      name: "Liga 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/395.png",
    },
    country: {
      name: "Moldova",
      code: "MD",
      flag: "https://media.api-sports.io/flags/md.svg",
    },
  },
  {
    league: {
      id: 267,
      name: "Copa Chile",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/267.png",
    },
    country: {
      name: "Chile",
      code: "CL",
      flag: "https://media.api-sports.io/flags/cl.svg",
    },
  },
  {
    league: {
      id: 171,
      name: "FA Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/171.png",
    },
    country: {
      name: "China",
      code: "CN",
      flag: "https://media.api-sports.io/flags/cn.svg",
    },
  },
  {
    league: {
      id: 241,
      name: "Copa Colombia",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/241.png",
    },
    country: {
      name: "Colombia",
      code: "CO",
      flag: "https://media.api-sports.io/flags/co.svg",
    },
  },
  {
    league: {
      id: 147,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/147.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 167,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/167.png",
    },
    country: {
      name: "Iceland",
      code: "IS",
      flag: "https://media.api-sports.io/flags/is.svg",
    },
  },
  {
    league: {
      id: 168,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/168.png",
    },
    country: {
      name: "Iceland",
      code: "IS",
      flag: "https://media.api-sports.io/flags/is.svg",
    },
  },
  {
    league: {
      id: 359,
      name: "FAI Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/359.png",
    },
    country: {
      name: "Ireland",
      code: "IE",
      flag: "https://media.api-sports.io/flags/ie.svg",
    },
  },
  {
    league: {
      id: 360,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/360.png",
    },
    country: {
      name: "Ireland",
      code: "IE",
      flag: "https://media.api-sports.io/flags/ie.svg",
    },
  },
  {
    league: {
      id: 385,
      name: "Toto Cup Ligat Al",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/385.png",
    },
    country: {
      name: "Israel",
      code: "IL",
      flag: "https://media.api-sports.io/flags/il.svg",
    },
  },
  {
    league: {
      id: 264,
      name: "Copa MX",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/264.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 11,
      name: "CONMEBOL Sudamericana",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/11.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 12,
      name: "CAF Champions League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/12.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 13,
      name: "CONMEBOL Libertadores",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/13.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 209,
      name: "Schweizer Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/209.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 115,
      name: "Svenska Cupen",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/115.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 375,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/375.png",
    },
    country: {
      name: "Slovenia",
      code: "SI",
      flag: "https://media.api-sports.io/flags/si.svg",
    },
  },
  {
    league: {
      id: 181,
      name: "FA Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/181.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 182,
      name: "Challenge Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/182.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 237,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/237.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 97,
      name: "Taça da Liga",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/97.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 108,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/108.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 105,
      name: "NM Cupen",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/105.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 294,
      name: "FA Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/294.png",
    },
    country: {
      name: "South-Korea",
      code: "KR",
      flag: "https://media.api-sports.io/flags/kr.svg",
    },
  },
  {
    league: {
      id: 325,
      name: "Santosh Trophy",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/325.png",
    },
    country: {
      name: "India",
      code: "IN",
      flag: "https://media.api-sports.io/flags/in.svg",
    },
  },
  {
    league: {
      id: 347,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/347.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 35,
      name: "Asian Cup - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/35.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 254,
      name: "NWSL Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/254.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 260,
      name: "Pacific Coast Soccer League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/260.png",
    },
    country: {
      name: "Canada",
      code: "CA",
      flag: "https://media.api-sports.io/flags/ca.svg",
    },
  },
  {
    league: {
      id: 192,
      name: "New South Wales NPL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/192.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 194,
      name: "South Australia NPL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/194.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 195,
      name: "Victoria NPL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/195.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 196,
      name: "Western Australia NPL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/196.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 357,
      name: "Premier Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/357.png",
    },
    country: {
      name: "Ireland",
      code: "IE",
      flag: "https://media.api-sports.io/flags/ie.svg",
    },
  },
  {
    league: {
      id: 358,
      name: "First Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/358.png",
    },
    country: {
      name: "Ireland",
      code: "IE",
      flag: "https://media.api-sports.io/flags/ie.svg",
    },
  },
  {
    league: {
      id: 768,
      name: "Arab Club Champions Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/768.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 769,
      name: "Premier League Asia Trophy",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/769.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 770,
      name: "Pacific Games",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/770.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 772,
      name: "Leagues Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/772.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 773,
      name: "Sudamericano U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/773.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 482,
      name: "Queensland NPL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/482.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 566,
      name: "Ligue A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/566.png",
    },
    country: {
      name: "Burundi",
      code: "BI",
      flag: "https://media.api-sports.io/flags/bi.svg",
    },
  },
  {
    league: {
      id: 642,
      name: "Curaçao Sekshon Pagá",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/642.png",
    },
    country: {
      name: "Curacao",
      code: "CW",
      flag: "https://media.api-sports.io/flags/cw.svg",
    },
  },
  {
    league: {
      id: 655,
      name: "Copa Constitució",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/655.png",
    },
    country: {
      name: "Andorra",
      code: "AD",
      flag: "https://media.api-sports.io/flags/ad.svg",
    },
  },
  {
    league: {
      id: 664,
      name: "Superliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/664.png",
    },
    country: {
      name: "Kosovo",
      code: "XK",
      flag: "https://media.api-sports.io/flags/xk.svg",
    },
  },
  {
    league: {
      id: 665,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/665.png",
    },
    country: {
      name: "Kosovo",
      code: "XK",
      flag: "https://media.api-sports.io/flags/xk.svg",
    },
  },
  {
    league: {
      id: 677,
      name: "QSL Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/677.png",
    },
    country: {
      name: "Qatar",
      code: "QA",
      flag: "https://media.api-sports.io/flags/qa.svg",
    },
  },
  {
    league: {
      id: 698,
      name: "FA Women's Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/698.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 714,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/714.png",
    },
    country: {
      name: "Egypt",
      code: "EG",
      flag: "https://media.api-sports.io/flags/eg.svg",
    },
  },
  {
    league: {
      id: 716,
      name: "Senior Shield",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/716.png",
    },
    country: {
      name: "Hong-Kong",
      code: "HK",
      flag: "https://media.api-sports.io/flags/hk.svg",
    },
  },
  {
    league: {
      id: 572,
      name: "Srpska Liga - Belgrade",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/572.png",
    },
    country: {
      name: "Serbia",
      code: "RS",
      flag: "https://media.api-sports.io/flags/rs.svg",
    },
  },
  {
    league: {
      id: 573,
      name: "Srpska Liga - Vojvodina",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/573.png",
    },
    country: {
      name: "Serbia",
      code: "RS",
      flag: "https://media.api-sports.io/flags/rs.svg",
    },
  },
  {
    league: {
      id: 574,
      name: "Srpska Liga - East",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/574.png",
    },
    country: {
      name: "Serbia",
      code: "RS",
      flag: "https://media.api-sports.io/flags/rs.svg",
    },
  },
  {
    league: {
      id: 575,
      name: "Srpska Liga - West",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/575.png",
    },
    country: {
      name: "Serbia",
      code: "RS",
      flag: "https://media.api-sports.io/flags/rs.svg",
    },
  },
  {
    league: {
      id: 576,
      name: "Gamma Ethniki - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/576.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 577,
      name: "Gamma Ethniki - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/577.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 578,
      name: "Gamma Ethniki - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/578.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 579,
      name: "Gamma Ethniki - Group 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/579.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 580,
      name: "Gamma Ethniki - Group 5",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/580.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 581,
      name: "Gamma Ethniki - Group 6",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/581.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 582,
      name: "Gamma Ethniki - Group 7",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/582.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 583,
      name: "Gamma Ethniki - Group 8",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/583.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 587,
      name: "World Cup - U17",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/587.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 590,
      name: "A Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/590.png",
    },
    country: {
      name: "Nepal",
      code: "NP",
      flag: "https://media.api-sports.io/flags/np.svg",
    },
  },
  {
    league: {
      id: 599,
      name: "1. Liga Classic - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/599.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 600,
      name: "1. Liga Classic - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/600.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 601,
      name: "1. Liga Classic - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/601.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 613,
      name: "Baiano - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/613.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 620,
      name: "Cearense - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/620.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 625,
      name: "Carioca - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/625.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 633,
      name: "NB III - Northeast",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/633.png",
    },
    country: {
      name: "Hungary",
      code: "HU",
      flag: "https://media.api-sports.io/flags/hu.svg",
    },
  },
  {
    league: {
      id: 634,
      name: "NB III - Southwest",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/634.png",
    },
    country: {
      name: "Hungary",
      code: "HU",
      flag: "https://media.api-sports.io/flags/hu.svg",
    },
  },
  {
    league: {
      id: 635,
      name: "NB III - Northwest",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/635.png",
    },
    country: {
      name: "Hungary",
      code: "HU",
      flag: "https://media.api-sports.io/flags/hu.svg",
    },
  },
  {
    league: {
      id: 638,
      name: "Kvindeliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/638.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 602,
      name: "Baiano - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/602.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 603,
      name: "Paraibano",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/603.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 604,
      name: "Catarinense - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/604.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 605,
      name: "Paulista - A3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/605.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 606,
      name: "Paranaense - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/606.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 607,
      name: "Roraimense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/607.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 608,
      name: "Maranhense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/608.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 609,
      name: "Cearense - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/609.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 610,
      name: "Brasiliense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/610.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 611,
      name: "Capixaba",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/611.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 612,
      name: "Copa do Nordeste",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/612.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 614,
      name: "Paranaense - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/614.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 615,
      name: "Rondoniense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/615.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 616,
      name: "Potiguar",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/616.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 617,
      name: "Copa do Brasil U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/617.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 618,
      name: "São Paulo Youth Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/618.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 619,
      name: "Mineiro - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/619.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 621,
      name: "Piauiense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/621.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 622,
      name: "Pernambucano - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/622.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 623,
      name: "Sul-Matogrossense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/623.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 624,
      name: "Carioca - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/624.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 626,
      name: "Sergipano",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/626.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 627,
      name: "Paraense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/627.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 628,
      name: "Goiano - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/628.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 629,
      name: "Mineiro - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/629.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 630,
      name: "Matogrossense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/630.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 631,
      name: "Tocantinense",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/631.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 632,
      name: "Supercopa do Brasil",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/632.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 636,
      name: "Ýokary Liga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/636.png",
    },
    country: {
      name: "Turkmenistan",
      code: "TM",
      flag: "https://media.api-sports.io/flags/tm.svg",
    },
  },
  {
    league: {
      id: 637,
      name: "V.League 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/637.png",
    },
    country: {
      name: "Vietnam",
      code: "VN",
      flag: "https://media.api-sports.io/flags/vn.svg",
    },
  },
  {
    league: {
      id: 639,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/639.png",
    },
    country: {
      name: "Iceland",
      code: "IS",
      flag: "https://media.api-sports.io/flags/is.svg",
    },
  },
  {
    league: {
      id: 640,
      name: "Kansallinen Liiga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/640.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 641,
      name: "NWSL Women - Challenge Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/641.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 749,
      name: "Oberliga - Bremen",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/749.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 750,
      name: "Oberliga - Hessen",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/750.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 751,
      name: "Oberliga - Niederrhein",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/751.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 752,
      name: "Oberliga - Rheinland-Pfalz / Saar",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/752.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 753,
      name: "Oberliga - Baden-Württemberg",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/753.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 754,
      name: "Oberliga - Nordost-Nord",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/754.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 755,
      name: "Oberliga - Nordost-Süd",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/755.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 756,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/756.png",
    },
    country: {
      name: "Macedonia",
      code: "MK",
      flag: "https://media.api-sports.io/flags/mk.svg",
    },
  },
  {
    league: {
      id: 757,
      name: "Irish Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/757.png",
    },
    country: {
      name: "Northern-Ireland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 758,
      name: "Premier Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/758.png",
    },
    country: {
      name: "Gibraltar",
      code: "GI",
      flag: "https://media.api-sports.io/flags/gi.svg",
    },
  },
  {
    league: {
      id: 759,
      name: "Liga Mayor",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/759.png",
    },
    country: {
      name: "Dominican-Republic",
      code: "DO",
      flag: "https://media.api-sports.io/flags/do.svg",
    },
  },
  {
    league: {
      id: 760,
      name: "LFA First Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/760.png",
    },
    country: {
      name: "Liberia",
      code: "LR",
      flag: "https://media.api-sports.io/flags/lr.svg",
    },
  },
  {
    league: {
      id: 761,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/761.png",
    },
    country: {
      name: "Liechtenstein",
      code: "LI",
      flag: "https://media.api-sports.io/flags/li.svg",
    },
  },
  {
    league: {
      id: 762,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/762.png",
    },
    country: {
      name: "Mauritania",
      code: "MR",
      flag: "https://media.api-sports.io/flags/mr.svg",
    },
  },
  {
    league: {
      id: 763,
      name: "Mauritian League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/763.png",
    },
    country: {
      name: "Mauritius",
      code: "MU",
      flag: "https://media.api-sports.io/flags/mu.svg",
    },
  },
  {
    league: {
      id: 764,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/764.png",
    },
    country: {
      name: "Mongolia",
      code: "MN",
      flag: "https://media.api-sports.io/flags/mn.svg",
    },
  },
  {
    league: {
      id: 765,
      name: "PFL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/765.png",
    },
    country: {
      name: "Philippines",
      code: "PH",
      flag: "https://media.api-sports.io/flags/ph.svg",
    },
  },
  {
    league: {
      id: 767,
      name: "CONCACAF League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/767.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 771,
      name: "COSAFA U20 Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/771.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 774,
      name: "3. Division - Girone 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/774.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 775,
      name: "3. Division - Girone 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/775.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 776,
      name: "3. Division - Girone 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/776.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 777,
      name: "3. Division - Girone 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/777.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 778,
      name: "3. Division - Girone 5",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/778.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 779,
      name: "3. Division - Girone 6",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/779.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 780,
      name: "III Liga - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/780.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 781,
      name: "III Liga - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/781.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 782,
      name: "III Liga - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/782.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 783,
      name: "III Liga - Group 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/783.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 784,
      name: "Liga III - Serie 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/784.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 785,
      name: "Liga III - Serie 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/785.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 786,
      name: "Liga III - Serie 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/786.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 787,
      name: "Liga III - Serie 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/787.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 788,
      name: "Liga III - Serie 5",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/788.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 789,
      name: "Liga III - Serie 6",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/789.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 790,
      name: "Liga III - Serie 7",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/790.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 791,
      name: "Liga III - Serie 8",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/791.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 792,
      name: "Liga III - Serie 9",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/792.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 793,
      name: "Liga III - Serie 10",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/793.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 794,
      name: "3. SNL - East",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/794.png",
    },
    country: {
      name: "Slovenia",
      code: "SI",
      flag: "https://media.api-sports.io/flags/si.svg",
    },
  },
  {
    league: {
      id: 795,
      name: "3. SNL - West",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/795.png",
    },
    country: {
      name: "Slovenia",
      code: "SI",
      flag: "https://media.api-sports.io/flags/si.svg",
    },
  },
  {
    league: {
      id: 796,
      name: "2. Liga Interregional - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/796.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 797,
      name: "2. Liga Interregional - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/797.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 798,
      name: "2. Liga Interregional - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/798.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 799,
      name: "2. Liga Interregional - Group 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/799.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 800,
      name: "2. Liga Interregional - Group 5",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/800.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 801,
      name: "2. Liga Interregional - Group 6",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/801.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 802,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/802.png",
    },
    country: {
      name: "Uzbekistan",
      code: "UZ",
      flag: "https://media.api-sports.io/flags/uz.svg",
    },
  },
  {
    league: {
      id: 809,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/809.png",
    },
    country: {
      name: "Andorra",
      code: "AD",
      flag: "https://media.api-sports.io/flags/ad.svg",
    },
  },
  {
    league: {
      id: 810,
      name: "Super Copa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/810.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 811,
      name: "Federation Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/811.png",
    },
    country: {
      name: "Bangladesh",
      code: "BD",
      flag: "https://media.api-sports.io/flags/bd.svg",
    },
  },
  {
    league: {
      id: 813,
      name: "Elite Two",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/813.png",
    },
    country: {
      name: "Cameroon",
      code: "CM",
      flag: "https://media.api-sports.io/flags/cm.svg",
    },
  },
  {
    league: {
      id: 816,
      name: "Shield Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/816.png",
    },
    country: {
      name: "Jordan",
      code: "JO",
      flag: "https://media.api-sports.io/flags/jo.svg",
    },
  },
  {
    league: {
      id: 817,
      name: "Super Cup Primavera",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/817.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 819,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/819.png",
    },
    country: {
      name: "Kosovo",
      code: "XK",
      flag: "https://media.api-sports.io/flags/xk.svg",
    },
  },
  {
    league: {
      id: 820,
      name: "Crown Prince Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/820.png",
    },
    country: {
      name: "Kuwait",
      code: "KW",
      flag: "https://media.api-sports.io/flags/kw.svg",
    },
  },
  {
    league: {
      id: 821,
      name: "FA Trophy",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/821.png",
    },
    country: {
      name: "Malta",
      code: "MT",
      flag: "https://media.api-sports.io/flags/mt.svg",
    },
  },
  {
    league: {
      id: 822,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/822.png",
    },
    country: {
      name: "Morocco",
      code: "MA",
      flag: "https://media.api-sports.io/flags/ma.svg",
    },
  },
  {
    league: {
      id: 828,
      name: "Ligue 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/828.png",
    },
    country: {
      name: "Tunisia",
      code: "TN",
      flag: "https://media.api-sports.io/flags/tn.svg",
    },
  },
  {
    league: {
      id: 829,
      name: "Youth League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/829.png",
    },
    country: {
      name: "Turkmenistan",
      code: "TM",
      flag: "https://media.api-sports.io/flags/tm.svg",
    },
  },
  {
    league: {
      id: 830,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/830.png",
    },
    country: {
      name: "Uzbekistan",
      code: "UZ",
      flag: "https://media.api-sports.io/flags/uz.svg",
    },
  },
  {
    league: {
      id: 832,
      name: "Coupe de la Ligue",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/832.png",
    },
    country: {
      name: "Algeria",
      code: "DZ",
      flag: "https://media.api-sports.io/flags/dz.svg",
    },
  },
  {
    league: {
      id: 837,
      name: "Rock Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/837.png",
    },
    country: {
      name: "Gibraltar",
      code: "GI",
      flag: "https://media.api-sports.io/flags/gi.svg",
    },
  },
  {
    league: {
      id: 838,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/838.png",
    },
    country: {
      name: "Jordan",
      code: "JO",
      flag: "https://media.api-sports.io/flags/jo.svg",
    },
  },
  {
    league: {
      id: 840,
      name: "Taça Revelação U23",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/840.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 841,
      name: "QFA Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/841.png",
    },
    country: {
      name: "Qatar",
      code: "QA",
      flag: "https://media.api-sports.io/flags/qa.svg",
    },
  },
  {
    league: {
      id: 843,
      name: "Copa Verde",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/843.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 844,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/844.png",
    },
    country: {
      name: "Congo",
      code: "CD",
      flag: "https://media.api-sports.io/flags/cd.svg",
    },
  },
  {
    league: {
      id: 845,
      name: "GFA League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/845.png",
    },
    country: {
      name: "Gambia",
      code: "GM",
      flag: "https://media.api-sports.io/flags/gm.svg",
    },
  },
  {
    league: {
      id: 847,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/847.png",
    },
    country: {
      name: "Eswatini",
      code: "SZ",
      flag: "https://media.api-sports.io/flags/sz.svg",
    },
  },
  {
    league: {
      id: 849,
      name: "Baltic Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/849.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 475,
      name: "Paulista - A1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/475.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 476,
      name: "Paulista - A2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/476.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 477,
      name: "Gaúcho - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/477.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 478,
      name: "Gaúcho - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/478.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 479,
      name: "Canadian Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/479.png",
    },
    country: {
      name: "Canada",
      code: "CA",
      flag: "https://media.api-sports.io/flags/ca.svg",
    },
  },
  {
    league: {
      id: 483,
      name: "Copa de la Superliga",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/483.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 500,
      name: "FA Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/500.png",
    },
    country: {
      name: "Malaysia",
      code: "MY",
      flag: "https://media.api-sports.io/flags/my.svg",
    },
  },
  {
    league: {
      id: 532,
      name: "AFC U23 Asian Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/532.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 536,
      name: "CONCACAF Nations League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/536.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 538,
      name: "Africa Cup of Nations U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/538.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 540,
      name: "CONMEBOL Libertadores U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/540.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 541,
      name: "CONMEBOL Recopa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/541.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 542,
      name: "Iraqi League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/542.png",
    },
    country: {
      name: "Iraq",
      code: "IQ",
      flag: "https://media.api-sports.io/flags/iq.svg",
    },
  },
  {
    league: {
      id: 548,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/548.png",
    },
    country: {
      name: "Japan",
      code: "JP",
      flag: "https://media.api-sports.io/flags/jp.svg",
    },
  },
  {
    league: {
      id: 549,
      name: "Damallsvenskan",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/549.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 863,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/863.png",
    },
    country: {
      name: "Jordan",
      code: "JO",
      flag: "https://media.api-sports.io/flags/jo.svg",
    },
  },
  {
    league: {
      id: 881,
      name: "Olympics Men - Qualification Concacaf",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/881.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 882,
      name: "Olympics Women - Qualification Asia",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/882.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 885,
      name: "Campeones Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/885.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 558,
      name: "Supercopa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/558.png",
    },
    country: {
      name: "Peru",
      code: "PE",
      flag: "https://media.api-sports.io/flags/pe.svg",
    },
  },
  {
    league: {
      id: 562,
      name: "Reserve League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/562.png",
    },
    country: {
      name: "Belarus",
      code: "BY",
      flag: "https://media.api-sports.io/flags/by.svg",
    },
  },
  {
    league: {
      id: 565,
      name: "Liga Primera U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/565.png",
    },
    country: {
      name: "Nicaragua",
      code: "NI",
      flag: "https://media.api-sports.io/flags/ni.svg",
    },
  },
  {
    league: {
      id: 643,
      name: "3. liga - Bratislava",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/643.png",
    },
    country: {
      name: "Slovakia",
      code: "SK",
      flag: "https://media.api-sports.io/flags/sk.svg",
    },
  },
  {
    league: {
      id: 644,
      name: "3. liga - West",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/644.png",
    },
    country: {
      name: "Slovakia",
      code: "SK",
      flag: "https://media.api-sports.io/flags/sk.svg",
    },
  },
  {
    league: {
      id: 645,
      name: "3. liga - East",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/645.png",
    },
    country: {
      name: "Slovakia",
      code: "SK",
      flag: "https://media.api-sports.io/flags/sk.svg",
    },
  },
  {
    league: {
      id: 646,
      name: "3. liga - Center",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/646.png",
    },
    country: {
      name: "Slovakia",
      code: "SK",
      flag: "https://media.api-sports.io/flags/sk.svg",
    },
  },
  {
    league: {
      id: 647,
      name: "Lao League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/647.png",
    },
    country: {
      name: "Laos",
      code: "LA",
      flag: "https://media.api-sports.io/flags/la.svg",
    },
  },
  {
    league: {
      id: 648,
      name: "Tasmania NPL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/648.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 649,
      name: "Supreme Division Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/649.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 650,
      name: "Second League - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/650.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 651,
      name: "Second League - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/651.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 652,
      name: "Second League - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/652.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 653,
      name: "Second League - Group 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/653.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 654,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/654.png",
    },
    country: {
      name: "Armenia",
      code: "AM",
      flag: "https://media.api-sports.io/flags/am.svg",
    },
  },
  {
    league: {
      id: 656,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/656.png",
    },
    country: {
      name: "Bulgaria",
      code: "BG",
      flag: "https://media.api-sports.io/flags/bg.svg",
    },
  },
  {
    league: {
      id: 657,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/657.png",
    },
    country: {
      name: "Estonia",
      code: "EE",
      flag: "https://media.api-sports.io/flags/ee.svg",
    },
  },
  {
    league: {
      id: 658,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/658.png",
    },
    country: {
      name: "Latvia",
      code: "LV",
      flag: "https://media.api-sports.io/flags/lv.svg",
    },
  },
  {
    league: {
      id: 659,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/659.png",
    },
    country: {
      name: "Israel",
      code: "IL",
      flag: "https://media.api-sports.io/flags/il.svg",
    },
  },
  {
    league: {
      id: 660,
      name: "WK-League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/660.png",
    },
    country: {
      name: "South-Korea",
      code: "KR",
      flag: "https://media.api-sports.io/flags/kr.svg",
    },
  },
  {
    league: {
      id: 661,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/661.png",
    },
    country: {
      name: "Lithuania",
      code: "LT",
      flag: "https://media.api-sports.io/flags/lt.svg",
    },
  },
  {
    league: {
      id: 662,
      name: "Copa por México",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/662.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 663,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/663.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 666,
      name: "Friendlies Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/666.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 667,
      name: "Friendlies Clubs",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/667.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 668,
      name: "1. Liga U19",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/668.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 669,
      name: "1. Liga Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/669.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 670,
      name: "Community Shield Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/670.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 671,
      name: "Úrvalsdeild Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/671.png",
    },
    country: {
      name: "Iceland",
      code: "IS",
      flag: "https://media.api-sports.io/flags/is.svg",
    },
  },
  {
    league: {
      id: 672,
      name: "David Kipiani Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/672.png",
    },
    country: {
      name: "Georgia",
      code: "GE",
      flag: "https://media.api-sports.io/flags/ge.svg",
    },
  },
  {
    league: {
      id: 673,
      name: "Liga MX Femenil",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/673.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 674,
      name: "Cupa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/674.png",
    },
    country: {
      name: "Moldova",
      code: "MD",
      flag: "https://media.api-sports.io/flags/md.svg",
    },
  },
  {
    league: {
      id: 675,
      name: "U21 Divisie 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/675.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 676,
      name: "Central Youth League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/676.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 678,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/678.png",
    },
    country: {
      name: "Ukraine",
      code: "UA",
      flag: "https://media.api-sports.io/flags/ua.svg",
    },
  },
  {
    league: {
      id: 679,
      name: "U21 League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/679.png",
    },
    country: {
      name: "Ukraine",
      code: "UA",
      flag: "https://media.api-sports.io/flags/ua.svg",
    },
  },
  {
    league: {
      id: 680,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/680.png",
    },
    country: {
      name: "Slovakia",
      code: "SK",
      flag: "https://media.api-sports.io/flags/sk.svg",
    },
  },
  {
    league: {
      id: 681,
      name: "Campeonato de Portugal Prio - Group E",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/681.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 682,
      name: "Campeonato de Portugal Prio - Group F",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/682.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 683,
      name: "Campeonato de Portugal Prio - Group G",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/683.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 684,
      name: "Campeonato de Portugal Prio - Group H",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/684.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 685,
      name: "3. liga - CFL B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/685.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 686,
      name: "4. liga - Divizie F",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/686.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 687,
      name: "Regionalliga - Tirol",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/687.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 688,
      name: "Regionalliga - Salzburg",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/688.png",
    },
    country: {
      name: "Austria",
      code: "AT",
      flag: "https://media.api-sports.io/flags/at.svg",
    },
  },
  {
    league: {
      id: 689,
      name: "Third Amateur Division - ACFF A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/689.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 690,
      name: "Third Amateur Division - ACFF B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/690.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 691,
      name: "Provincial - Brabant ACFF",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/691.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 692,
      name: "Primera División RFEF - Group 5",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/692.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 693,
      name: "Gamma Ethniki - Group 9",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/693.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 694,
      name: "Gamma Ethniki - Group 10",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/694.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 695,
      name: "U18 Premier League - North",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/695.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 696,
      name: "U18 Premier League - South",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/696.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 697,
      name: "WSL Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/697.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 699,
      name: "Women's Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/699.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 700,
      name: "Kakkosen Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/700.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 701,
      name: "Liga Revelação U23",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/701.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 702,
      name: "Premier League 2 Division One",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/702.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 703,
      name: "Professional Development League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/703.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 704,
      name: "Coppa Italia Primavera",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/704.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 705,
      name: "Campionato Primavera - 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/705.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 706,
      name: "Campionato Primavera - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/706.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 707,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/707.png",
    },
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media.api-sports.io/flags/al.svg",
    },
  },
  {
    league: {
      id: 708,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/708.png",
    },
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media.api-sports.io/flags/al.svg",
    },
  },
  {
    league: {
      id: 709,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/709.png",
    },
    country: {
      name: "Armenia",
      code: "AM",
      flag: "https://media.api-sports.io/flags/am.svg",
    },
  },
  {
    league: {
      id: 710,
      name: "Nacional B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/710.png",
    },
    country: {
      name: "Bolivia",
      code: "BO",
      flag: "https://media.api-sports.io/flags/bo.svg",
    },
  },
  {
    league: {
      id: 711,
      name: "Segunda División",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/711.png",
    },
    country: {
      name: "Chile",
      code: "CL",
      flag: "https://media.api-sports.io/flags/cl.svg",
    },
  },
  {
    league: {
      id: 712,
      name: "Liga Femenina",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/712.png",
    },
    country: {
      name: "Colombia",
      code: "CO",
      flag: "https://media.api-sports.io/flags/co.svg",
    },
  },
  {
    league: {
      id: 713,
      name: "Superliga",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/713.png",
    },
    country: {
      name: "Colombia",
      code: "CO",
      flag: "https://media.api-sports.io/flags/co.svg",
    },
  },
  {
    league: {
      id: 715,
      name: "DFB Junioren Pokal",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/715.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 717,
      name: "I-League - 2nd Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/717.png",
    },
    country: {
      name: "India",
      code: "IN",
      flag: "https://media.api-sports.io/flags/in.svg",
    },
  },
  {
    league: {
      id: 719,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/719.png",
    },
    country: {
      name: "Kuwait",
      code: "KW",
      flag: "https://media.api-sports.io/flags/kw.svg",
    },
  },
  {
    league: {
      id: 720,
      name: "Emir Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/720.png",
    },
    country: {
      name: "Kuwait",
      code: "KW",
      flag: "https://media.api-sports.io/flags/kw.svg",
    },
  },
  {
    league: {
      id: 721,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/721.png",
    },
    country: {
      name: "Luxembourg",
      code: "LU",
      flag: "https://media.api-sports.io/flags/lu.svg",
    },
  },
  {
    league: {
      id: 722,
      name: "Liga Premier Serie A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/722.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 723,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/723.png",
    },
    country: {
      name: "Montenegro",
      code: "ME",
      flag: "https://media.api-sports.io/flags/me.svg",
    },
  },
  {
    league: {
      id: 724,
      name: "U18 Divisie 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/724.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 726,
      name: "Sultan Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/726.png",
    },
    country: {
      name: "Oman",
      code: "OM",
      flag: "https://media.api-sports.io/flags/om.svg",
    },
  },
  {
    league: {
      id: 727,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/727.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 728,
      name: "Liga 1 Feminin",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/728.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 729,
      name: "Coppa Titano",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/729.png",
    },
    country: {
      name: "San-Marino",
      code: "SM",
      flag: "https://media.api-sports.io/flags/sm.svg",
    },
  },
  {
    league: {
      id: 730,
      name: "Football League - Highland League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/730.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 731,
      name: "Football League - Lowland League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/731.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 732,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/732.png",
    },
    country: {
      name: "Serbia",
      code: "RS",
      flag: "https://media.api-sports.io/flags/rs.svg",
    },
  },
  {
    league: {
      id: 733,
      name: "I Liga - Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/733.png",
    },
    country: {
      name: "Slovakia",
      code: "SK",
      flag: "https://media.api-sports.io/flags/sk.svg",
    },
  },
  {
    league: {
      id: 734,
      name: "Diski Challenge",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/734.png",
    },
    country: {
      name: "South-Africa",
      code: "ZA",
      flag: "https://media.api-sports.io/flags/za.svg",
    },
  },
  {
    league: {
      id: 735,
      name: "Copa Federacion",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/735.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 737,
      name: "Svenska Cupen - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/737.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 738,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/738.png",
    },
    country: {
      name: "Wales",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 739,
      name: "AXA Women’s Super League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/739.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 740,
      name: "CBF Brasileiro U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/740.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 741,
      name: "Brasileiro de Aspirantes",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/741.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 742,
      name: "Copa Paulista",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/742.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 744,
      name: "Oberliga - Schleswig-Holstein",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/744.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 745,
      name: "Oberliga - Hamburg",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/745.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 746,
      name: "Oberliga - Mittelrhein",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/746.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 747,
      name: "Oberliga - Westfalen",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/747.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 748,
      name: "Oberliga - Niedersachsen",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/748.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 725,
      name: "Toppserien",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/725.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 736,
      name: "Elitettan",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/736.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 743,
      name: "UEFA Championship - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/743.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 812,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/812.png",
    },
    country: {
      name: "Belarus",
      code: "BY",
      flag: "https://media.api-sports.io/flags/by.svg",
    },
  },
  {
    league: {
      id: 814,
      name: "Reykjavik Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/814.png",
    },
    country: {
      name: "Iceland",
      code: "IS",
      flag: "https://media.api-sports.io/flags/is.svg",
    },
  },
  {
    league: {
      id: 815,
      name: "Fotbolti.net Cup A",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/815.png",
    },
    country: {
      name: "Iceland",
      code: "IS",
      flag: "https://media.api-sports.io/flags/is.svg",
    },
  },
  {
    league: {
      id: 818,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/818.png",
    },
    country: {
      name: "Kazakhstan",
      code: "KZ",
      flag: "https://media.api-sports.io/flags/kz.svg",
    },
  },
  {
    league: {
      id: 823,
      name: "Nasjonal U19 Champions League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/823.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 824,
      name: "Emir Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/824.png",
    },
    country: {
      name: "Qatar",
      code: "QA",
      flag: "https://media.api-sports.io/flags/qa.svg",
    },
  },
  {
    league: {
      id: 825,
      name: "Qatar Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/825.png",
    },
    country: {
      name: "Qatar",
      code: "QA",
      flag: "https://media.api-sports.io/flags/qa.svg",
    },
  },
  {
    league: {
      id: 826,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/826.png",
    },
    country: {
      name: "Saudi-Arabia",
      code: "SA",
      flag: "https://media.api-sports.io/flags/sa.svg",
    },
  },
  {
    league: {
      id: 831,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/831.png",
    },
    country: {
      name: "Vietnam",
      code: "VN",
      flag: "https://media.api-sports.io/flags/vn.svg",
    },
  },
  {
    league: {
      id: 833,
      name: "Queensland Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/833.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 834,
      name: "South Australia State League 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/834.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 835,
      name: "New South Wales NPL 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/835.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 836,
      name: "Victoria NPL 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/836.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 839,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/839.png",
    },
    country: {
      name: "Lithuania",
      code: "LT",
      flag: "https://media.api-sports.io/flags/lt.svg",
    },
  },
  {
    league: {
      id: 842,
      name: "Super Copa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/842.png",
    },
    country: {
      name: "Uruguay",
      code: "UY",
      flag: "https://media.api-sports.io/flags/uy.svg",
    },
  },
  {
    league: {
      id: 846,
      name: "Somali Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/846.png",
    },
    country: {
      name: "Somalia",
      code: "SO",
      flag: "https://media.api-sports.io/flags/so.svg",
    },
  },
  {
    league: {
      id: 848,
      name: "UEFA Europa Conference League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/848.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 851,
      name: "Carioca A2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/851.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 852,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/852.png",
    },
    country: {
      name: "Cyprus",
      code: "CY",
      flag: "https://media.api-sports.io/flags/cy.svg",
    },
  },
  {
    league: {
      id: 853,
      name: "Supercopa de Ecuador",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/853.png",
    },
    country: {
      name: "Ecuador",
      code: "EC",
      flag: "https://media.api-sports.io/flags/ec.svg",
    },
  },
  {
    league: {
      id: 854,
      name: "WE League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/854.png",
    },
    country: {
      name: "Japan",
      code: "JP",
      flag: "https://media.api-sports.io/flags/jp.svg",
    },
  },
  {
    league: {
      id: 855,
      name: "Dhivehi Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/855.png",
    },
    country: {
      name: "Maldives",
      code: "MV",
      flag: "https://media.api-sports.io/flags/mv.svg",
    },
  },
  {
    league: {
      id: 856,
      name: "CONCACAF Caribbean Club Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/856.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 857,
      name: "Campeón de Campeones",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/857.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 858,
      name: "CONCACAF Gold Cup - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/858.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 859,
      name: "COSAFA Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/859.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 860,
      name: "Arab Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/860.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 861,
      name: "U20 League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/861.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 910,
      name: "Youth Viareggio Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/910.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 862,
      name: "3. Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/862.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 864,
      name: "Supercopa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/864.png",
    },
    country: {
      name: "Costa-Rica",
      code: "CR",
      flag: "https://media.api-sports.io/flags/cr.svg",
    },
  },
  {
    league: {
      id: 865,
      name: "Liga 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/865.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 866,
      name: "MLS All-Star",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/866.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 891,
      name: "Coppa Italia Serie C",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/891.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 868,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/868.png",
    },
    country: {
      name: "Pakistan",
      code: "PK",
      flag: "https://media.api-sports.io/flags/pk.svg",
    },
  },
  {
    league: {
      id: 869,
      name: "CECAFA Club Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/869.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 870,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/870.png",
    },
    country: {
      name: "Crimea",
      code: "UA",
      flag: "https://media.api-sports.io/flags/ua.svg",
    },
  },
  {
    league: {
      id: 871,
      name: "Premier League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/871.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 872,
      name: "Liga Premier Serie B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/872.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 873,
      name: "Thai Champions Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/873.png",
    },
    country: {
      name: "Thailand",
      code: "TH",
      flag: "https://media.api-sports.io/flags/th.svg",
    },
  },
  {
    league: {
      id: 874,
      name: "Australia Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/874.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 875,
      name: "Segunda División RFEF - Group 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/875.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 876,
      name: "Segunda División RFEF - Group 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/876.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 877,
      name: "Segunda División RFEF - Group 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/877.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 878,
      name: "Segunda División RFEF - Group 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/878.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 879,
      name: "Segunda División RFEF - Group 5",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/879.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 880,
      name: "World Cup - Women - Qualification Europe",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/880.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 883,
      name: "Reserve League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/883.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 884,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/884.png",
    },
    country: {
      name: "San-Marino",
      code: "SM",
      flag: "https://media.api-sports.io/flags/sm.svg",
    },
  },
  {
    league: {
      id: 887,
      name: "Second League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/887.png",
    },
    country: {
      name: "Egypt",
      code: "EG",
      flag: "https://media.api-sports.io/flags/eg.svg",
    },
  },
  {
    league: {
      id: 888,
      name: "Second League - Group B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/888.png",
    },
    country: {
      name: "Egypt",
      code: "EG",
      flag: "https://media.api-sports.io/flags/eg.svg",
    },
  },
  {
    league: {
      id: 889,
      name: "Second League - Group C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/889.png",
    },
    country: {
      name: "Egypt",
      code: "EG",
      flag: "https://media.api-sports.io/flags/eg.svg",
    },
  },
  {
    league: {
      id: 890,
      name: "U20 Elite League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/890.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 892,
      name: "Coppa Italia Serie D",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/892.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 867,
      name: "Copa Paulino Alcantara",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/867.png",
    },
    country: {
      name: "Philippines",
      code: "PH",
      flag: "https://media.api-sports.io/flags/ph.svg",
    },
  },
  {
    league: {
      id: 895,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/895.png",
    },
    country: {
      name: "Egypt",
      code: "EG",
      flag: "https://media.api-sports.io/flags/eg.svg",
    },
  },
  {
    league: {
      id: 896,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/896.png",
    },
    country: {
      name: "United-Arab-Emirates",
      code: "AE",
      flag: "https://media.api-sports.io/flags/ae.svg",
    },
  },
  {
    league: {
      id: 898,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/898.png",
    },
    country: {
      name: "Thailand",
      code: "TH",
      flag: "https://media.api-sports.io/flags/th.svg",
    },
  },
  {
    league: {
      id: 902,
      name: "Algarve Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/902.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 903,
      name: "The Atlantic Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/903.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 905,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/905.png",
    },
    country: {
      name: "Iran",
      code: "IR",
      flag: "https://media.api-sports.io/flags/ir.svg",
    },
  },
  {
    league: {
      id: 36,
      name: "Africa Cup of Nations - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/36.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 944,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/944.png",
    },
    country: {
      name: "Oman",
      code: "OM",
      flag: "https://media.api-sports.io/flags/om.svg",
    },
  },
  {
    league: {
      id: 945,
      name: "International Champions Cup - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/945.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 946,
      name: "Second NL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/946.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 947,
      name: "DFB Pokal - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/947.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 948,
      name: "1a Divisão - Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/948.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 949,
      name: "CONMEBOL Libertadores Femenina",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/949.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 950,
      name: "World Cup - U17 - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/950.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 951,
      name: "South American Youth Games",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/951.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 952,
      name: "AFC U23 Asian Cup - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/952.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 953,
      name: "Africa U23 Cup of Nations - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/953.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 954,
      name: "National League - Central",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/954.png",
    },
    country: {
      name: "New-Zealand",
      code: "NZ",
      flag: "https://media.api-sports.io/flags/nz.svg",
    },
  },
  {
    league: {
      id: 955,
      name: "National League - National",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/955.png",
    },
    country: {
      name: "New-Zealand",
      code: "NZ",
      flag: "https://media.api-sports.io/flags/nz.svg",
    },
  },
  {
    league: {
      id: 956,
      name: "National League - Northern",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/956.png",
    },
    country: {
      name: "New-Zealand",
      code: "NZ",
      flag: "https://media.api-sports.io/flags/nz.svg",
    },
  },
  {
    league: {
      id: 957,
      name: "National League - Southern",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/957.png",
    },
    country: {
      name: "New-Zealand",
      code: "NZ",
      flag: "https://media.api-sports.io/flags/nz.svg",
    },
  },
  {
    league: {
      id: 958,
      name: "Copa Costa Rica",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/958.png",
    },
    country: {
      name: "Costa-Rica",
      code: "CR",
      flag: "https://media.api-sports.io/flags/cr.svg",
    },
  },
  {
    league: {
      id: 959,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/959.png",
    },
    country: {
      name: "Singapore",
      code: "SG",
      flag: "https://media.api-sports.io/flags/sg.svg",
    },
  },
  {
    league: {
      id: 961,
      name: "Supercopa",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/961.png",
    },
    country: {
      name: "Paraguay",
      code: "PY",
      flag: "https://media.api-sports.io/flags/py.svg",
    },
  },
  {
    league: {
      id: 962,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/962.png",
    },
    country: {
      name: "Lesotho",
      code: "LS",
      flag: "https://media.api-sports.io/flags/ls.svg",
    },
  },
  {
    league: {
      id: 966,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/966.png",
    },
    country: {
      name: "Ghana",
      code: "GH",
      flag: "https://media.api-sports.io/flags/gh.svg",
    },
  },
  {
    league: {
      id: 967,
      name: "Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/967.png",
    },
    country: {
      name: "Lebanon",
      code: "LB",
      flag: "https://media.api-sports.io/flags/lb.svg",
    },
  },
  {
    league: {
      id: 968,
      name: "Championnat D1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/968.png",
    },
    country: {
      name: "Gabon",
      code: "GA",
      flag: "https://media.api-sports.io/flags/ga.svg",
    },
  },
  {
    league: {
      id: 971,
      name: "Shield Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/971.png",
    },
    country: {
      name: "Kenya",
      code: "KE",
      flag: "https://media.api-sports.io/flags/ke.svg",
    },
  },
  {
    league: {
      id: 975,
      name: "Serie C - Relegation - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/975.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 976,
      name: "Serie C - Promotion - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/976.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 974,
      name: "Serie C - Supercoppa Lega Finals",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/974.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 977,
      name: "Tercera División RFEF - Promotion - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/977.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 978,
      name: "2nd Division - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/978.png",
    },
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media.api-sports.io/flags/al.svg",
    },
  },
  {
    league: {
      id: 979,
      name: "Provincial - Play-offs VV",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/979.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 980,
      name: "Provincial - Play-offs ACFF",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/980.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 981,
      name: "Third Amateur Division - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/981.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 982,
      name: "Denmark Series - Promotion Round",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/982.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 983,
      name: "Denmark Series - Relegation Round",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/983.png",
    },
    country: {
      name: "Denmark",
      code: "DK",
      flag: "https://media.api-sports.io/flags/dk.svg",
    },
  },
  {
    league: {
      id: 984,
      name: "National League - North - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/984.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 985,
      name: "National League - South - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/985.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 986,
      name: "Non League Div One - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/986.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 987,
      name: "U18 Premier League - Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/987.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 988,
      name: "Oberliga - Promotion Round",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/988.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 989,
      name: "Oberliga - Relegation Round",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/989.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 990,
      name: "Gamma Ethniki - Promotion Group",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/990.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 991,
      name: "Campeonato de Portugal Prio - Promotion Round",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/991.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 992,
      name: "Football League - Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/992.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 993,
      name: "Non League Premier - Isthmian - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/993.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 994,
      name: "Non League Premier - Northern - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/994.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 995,
      name: "Non League Premier - Southern South - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/995.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 996,
      name: "Non League Premier - Southern Central - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/996.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 997,
      name: "Serie D - Promotion - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/997.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 998,
      name: "Serie D - Relegation - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/998.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 999,
      name: "Serie D - Championship Round",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/999.png",
    },
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media.api-sports.io/flags/it.svg",
    },
  },
  {
    league: {
      id: 1000,
      name: "Segunda División RFEF - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1000.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 1002,
      name: "Regionalliga - Promotion Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1002.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 1003,
      name: "Regionalliga - Relegation Round",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1003.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 1004,
      name: "Derde Divisie - Relegation Round",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1004.png",
    },
    country: {
      name: "Netherlands",
      code: "NL",
      flag: "https://media.api-sports.io/flags/nl.svg",
    },
  },
  {
    league: {
      id: 1005,
      name: "1. Liga Classic - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1005.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 1006,
      name: "Primera División RFEF - Play Offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1006.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 1007,
      name: "3. Lig - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1007.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 1009,
      name: "Liga III - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1009.png",
    },
    country: {
      name: "Romania",
      code: "RO",
      flag: "https://media.api-sports.io/flags/ro.svg",
    },
  },
  {
    league: {
      id: 1010,
      name: "3. liga - Promotion Play-off",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1010.png",
    },
    country: {
      name: "Czech-Republic",
      code: "CZ",
      flag: "https://media.api-sports.io/flags/cz.svg",
    },
  },
  {
    league: {
      id: 1011,
      name: "Second Amateur Division - Play-offs ",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1011.png",
    },
    country: {
      name: "Belgium",
      code: "BE",
      flag: "https://media.api-sports.io/flags/be.svg",
    },
  },
  {
    league: {
      id: 1014,
      name: "Second League - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1014.png",
    },
    country: {
      name: "Egypt",
      code: "EG",
      flag: "https://media.api-sports.io/flags/eg.svg",
    },
  },
  {
    league: {
      id: 909,
      name: "MLS Next Pro",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/909.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 911,
      name: "Southeast Asian Games",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/911.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 912,
      name: "CONCACAF Women U17",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/912.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 913,
      name: "CONMEBOL - UEFA Finalissima",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/913.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 914,
      name: "Tournoi Maurice Revello",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/914.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 915,
      name: "1. Division Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/915.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 916,
      name: "Kirin Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/916.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 917,
      name: "Copa Ecuador",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/917.png",
    },
    country: {
      name: "Ecuador",
      code: "EC",
      flag: "https://media.api-sports.io/flags/ec.svg",
    },
  },
  {
    league: {
      id: 918,
      name: "UEFA U19 Championship - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/918.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 919,
      name: "Mediterranean Games",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/919.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 920,
      name: "World Cup - U20 - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/920.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 921,
      name: "UEFA U17 Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/921.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 922,
      name: "Africa Cup of Nations - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/922.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 923,
      name: "League 1 Ontario",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/923.png",
    },
    country: {
      name: "Canada",
      code: "CA",
      flag: "https://media.api-sports.io/flags/ca.svg",
    },
  },
  {
    league: {
      id: 924,
      name: "Piala Presiden",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/924.png",
    },
    country: {
      name: "Indonesia",
      code: "ID",
      flag: "https://media.api-sports.io/flags/id.svg",
    },
  },
  {
    league: {
      id: 926,
      name: "Copa America Femenina",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/926.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 927,
      name: "World Cup - Women - Qualification Concacaf",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/927.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 928,
      name: "AFF U19 Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/928.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 929,
      name: "League Two",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/929.png",
    },
    country: {
      name: "China",
      code: "CN",
      flag: "https://media.api-sports.io/flags/cn.svg",
    },
  },
  {
    league: {
      id: 930,
      name: "Copa Uruguay",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/930.png",
    },
    country: {
      name: "Uruguay",
      code: "UY",
      flag: "https://media.api-sports.io/flags/uy.svg",
    },
  },
  {
    league: {
      id: 931,
      name: "Non League Premier - Southern Central",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/931.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 932,
      name: "Non League Div One - Northern East",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/932.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 933,
      name: "Non League Div One - Southern Central",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/933.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 934,
      name: "Arab Championship - U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/934.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 935,
      name: "Diski Shield",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/935.png",
    },
    country: {
      name: "South-Africa",
      code: "ZA",
      flag: "https://media.api-sports.io/flags/za.svg",
    },
  },
  {
    league: {
      id: 936,
      name: "Catarinense - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/936.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 937,
      name: "Emirates Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/937.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 938,
      name: "Oberliga - Bayern Nord",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/938.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 939,
      name: "Oberliga - Bayern Süd",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/939.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 940,
      name: "COTIF Tournament",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/940.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 941,
      name: "Islamic Solidarity Games",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/941.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1016,
      name: "CAC Games",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1016.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 886,
      name: "UEFA U17 Championship - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/886.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 893,
      name: "UEFA U19 Championship - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/893.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 894,
      name: "Asian Cup Women - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/894.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 897,
      name: "Asian Cup Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/897.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 899,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/899.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 900,
      name: "Tipsport Malta Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/900.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 901,
      name: "Ykköscup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/901.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 904,
      name: "SheBelieves Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/904.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 906,
      name: "Reserve League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/906.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 907,
      name: "Primera Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/907.png",
    },
    country: {
      name: "Cuba",
      code: "CU",
      flag: "https://media.api-sports.io/flags/cu.svg",
    },
  },
  {
    league: {
      id: 908,
      name: "AFF U23 Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/908.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 850,
      name: "UEFA U21 Championship - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/850.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1043,
      name: "African Football League",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1043.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1044,
      name: "Erste Liga Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1044.png",
    },
    country: {
      name: "Switzerland",
      code: "CH",
      flag: "https://media.api-sports.io/flags/ch.svg",
    },
  },
  {
    league: {
      id: 1045,
      name: "Pan American Games",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1045.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1048,
      name: "Premier Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1048.png",
    },
    country: {
      name: "Antigua-And-Barbuda",
      code: "AG",
      flag: "https://media.api-sports.io/flags/ag.svg",
    },
  },
  {
    league: {
      id: 1049,
      name: "King's Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1049.png",
    },
    country: {
      name: "Bahrain",
      code: "BH",
      flag: "https://media.api-sports.io/flags/bh.svg",
    },
  },
  {
    league: {
      id: 1050,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1050.png",
    },
    country: {
      name: "Malta",
      code: "MT",
      flag: "https://media.api-sports.io/flags/mt.svg",
    },
  },
  {
    league: {
      id: 1052,
      name: "Kakkonen - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1052.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 1053,
      name: "Division 2 - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1053.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 1054,
      name: "2. Division - Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1054.png",
    },
    country: {
      name: "Norway",
      code: "NO",
      flag: "https://media.api-sports.io/flags/no.svg",
    },
  },
  {
    league: {
      id: 1055,
      name: "Ettan - Relegation Round",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1055.png",
    },
    country: {
      name: "Sweden",
      code: "SE",
      flag: "https://media.api-sports.io/flags/se.svg",
    },
  },
  {
    league: {
      id: 1056,
      name: "National League - Championship - Final",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1056.png",
    },
    country: {
      name: "New-Zealand",
      code: "NZ",
      flag: "https://media.api-sports.io/flags/nz.svg",
    },
  },
  {
    league: {
      id: 1058,
      name: "Supercopa Femenina",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1058.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media.api-sports.io/flags/es.svg",
    },
  },
  {
    league: {
      id: 1061,
      name: "Second League A - Spring Season Gold",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1061.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 1064,
      name: "Second League A - Spring Season Silver",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1064.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 1065,
      name: "U19 League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1065.png",
    },
    country: {
      name: "Ukraine",
      code: "UA",
      flag: "https://media.api-sports.io/flags/ua.svg",
    },
  },
  {
    league: {
      id: 1068,
      name: "FA Youth Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1068.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 1072,
      name: "All Africa Games",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1072.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1074,
      name: "SWPL Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1074.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 1078,
      name: "SWF Scottish Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1078.png",
    },
    country: {
      name: "Scotland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 1079,
      name: "Yemeni League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1079.png",
    },
    country: {
      name: "Yemen",
      code: "YE",
      flag: "https://media.api-sports.io/flags/ye.svg",
    },
  },
  {
    league: {
      id: 1080,
      name: "Premier Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1080.png",
    },
    country: {
      name: "Grenada",
      code: "GD",
      flag: "https://media.api-sports.io/flags/gd.svg",
    },
  },
  {
    league: {
      id: 1084,
      name: "Championnat National",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1084.png",
    },
    country: {
      name: "Togo",
      code: "TG",
      flag: "https://media.api-sports.io/flags/tg.svg",
    },
  },
  {
    league: {
      id: 1099,
      name: "Gamma Ethniki - Relegation Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1099.png",
    },
    country: {
      name: "Greece",
      code: "GR",
      flag: "https://media.api-sports.io/flags/gr.svg",
    },
  },
  {
    league: {
      id: 1109,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1109.png",
    },
    country: {
      name: "Bahrain",
      code: "BH",
      flag: "https://media.api-sports.io/flags/bh.svg",
    },
  },
  {
    league: {
      id: 1111,
      name: "NB III - Promotion Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1111.png",
    },
    country: {
      name: "Hungary",
      code: "HU",
      flag: "https://media.api-sports.io/flags/hu.svg",
    },
  },
  {
    league: {
      id: 1121,
      name: "Second League A - Promotion Play-offs",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1121.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 960,
      name: "Euro Championship - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/960.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 963,
      name: "CONCACAF U17",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/963.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 964,
      name: "Copa de la División Profesional",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/964.png",
    },
    country: {
      name: "Bolivia",
      code: "BO",
      flag: "https://media.api-sports.io/flags/bo.svg",
    },
  },
  {
    league: {
      id: 965,
      name: "AFC U20 Asian Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/965.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 969,
      name: "Primeira Divisão",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/969.png",
    },
    country: {
      name: "Macao",
      code: "MO",
      flag: "https://media.api-sports.io/flags/mo.svg",
    },
  },
  {
    league: {
      id: 970,
      name: "CONMEBOL - U17",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/970.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 972,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/972.png",
    },
    country: {
      name: "China",
      code: "CN",
      flag: "https://media.api-sports.io/flags/cn.svg",
    },
  },
  {
    league: {
      id: 973,
      name: "CAF Cup of Nations - U17",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/973.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1008,
      name: "CAFA Nations Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1008.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1012,
      name: "AFC U17 Asian Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1012.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1013,
      name: "All-Island Cup - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1013.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1015,
      name: "CAF U23 Cup of Nations",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1015.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1017,
      name: "U23 League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1017.png",
    },
    country: {
      name: "Mexico",
      code: "MX",
      flag: "https://media.api-sports.io/flags/mx.svg",
    },
  },
  {
    league: {
      id: 1018,
      name: "Federation Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1018.png",
    },
    country: {
      name: "Lebanon",
      code: "LB",
      flag: "https://media.api-sports.io/flags/lb.svg",
    },
  },
  {
    league: {
      id: 1019,
      name: "Charity Shield",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1019.png",
    },
    country: {
      name: "Northern-Ireland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 1020,
      name: "Calcutta Premier Division",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1020.png",
    },
    country: {
      name: "India",
      code: "IN",
      flag: "https://media.api-sports.io/flags/in.svg",
    },
  },
  {
    league: {
      id: 1021,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1021.png",
    },
    country: {
      name: "Croatia",
      code: "HR",
      flag: "https://media.api-sports.io/flags/hr.svg",
    },
  },
  {
    league: {
      id: 1022,
      name: "Premier League - Summer Series",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1022.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 1023,
      name: "NB III - Southeast",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1023.png",
    },
    country: {
      name: "Hungary",
      code: "HU",
      flag: "https://media.api-sports.io/flags/hu.svg",
    },
  },
  {
    league: {
      id: 1024,
      name: "UEFA - CONMEBOL - Club Challenge",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1024.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1025,
      name: "Second League A - Fall Season Gold",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1025.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 1026,
      name: "Second League A - Fall Season Silver",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1026.png",
    },
    country: {
      name: "Russia",
      code: "RU",
      flag: "https://media.api-sports.io/flags/ru.svg",
    },
  },
  {
    league: {
      id: 1027,
      name: "3. Lig - Group 4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1027.png",
    },
    country: {
      name: "Turkey",
      code: "TR",
      flag: "https://media.api-sports.io/flags/tr.svg",
    },
  },
  {
    league: {
      id: 1028,
      name: "Concacaf Central American Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1028.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1029,
      name: "National 3 - Group G",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1029.png",
    },
    country: {
      name: "France",
      code: "FR",
      flag: "https://media.api-sports.io/flags/fr.svg",
    },
  },
  {
    league: {
      id: 1030,
      name: "Goiano - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1030.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1031,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1031.png",
    },
    country: {
      name: "Bhutan",
      code: "BT",
      flag: "https://media.api-sports.io/flags/bt.svg",
    },
  },
  {
    league: {
      id: 1032,
      name: "Copa de la Liga Profesional",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1032.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 1033,
      name: "Ekstraliga Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1033.png",
    },
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media.api-sports.io/flags/pl.svg",
    },
  },
  {
    league: {
      id: 1034,
      name: "2. Frauen Bundesliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1034.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
  },
  {
    league: {
      id: 1035,
      name: "Copa Rio",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1035.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1036,
      name: "Copa Santa Catarina",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1036.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1037,
      name: "Paraibano 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1037.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1038,
      name: "King's Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1038.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1039,
      name: "Premier League International Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1039.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1040,
      name: "UEFA Nations League - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1040.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1041,
      name: "Júniores U19",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1041.png",
    },
    country: {
      name: "Portugal",
      code: "PT",
      flag: "https://media.api-sports.io/flags/pt.svg",
    },
  },
  {
    league: {
      id: 1042,
      name: "Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1042.png",
    },
    country: {
      name: "Gibraltar",
      code: "GI",
      flag: "https://media.api-sports.io/flags/gi.svg",
    },
  },
  {
    league: {
      id: 1001,
      name: "CONCACAF Women U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1001.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1126,
      name: "Esiliiga B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1126.png",
    },
    country: {
      name: "Estonia",
      code: "EE",
      flag: "https://media.api-sports.io/flags/ee.svg",
    },
  },
  {
    league: {
      id: 1127,
      name: "Chatham Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1127.png",
    },
    country: {
      name: "New-Zealand",
      code: "NZ",
      flag: "https://media.api-sports.io/flags/nz.svg",
    },
  },
  {
    league: {
      id: 1128,
      name: "Brasileiro U17",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1128.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1129,
      name: "ASEAN Club Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1129.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1046,
      name: "CONCACAF Gold Cup - Qualification - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1046.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1047,
      name: "Olympics Women - Qualification CAF",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1047.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1051,
      name: "HKPL Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1051.png",
    },
    country: {
      name: "Hong-Kong",
      code: "HK",
      flag: "https://media.api-sports.io/flags/hk.svg",
    },
  },
  {
    league: {
      id: 1057,
      name: "CONCACAF Gold Cup - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1057.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1059,
      name: "Recopa Catarinense",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1059.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1060,
      name: "CONMEBOL - Pre-Olympic Tournament",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1060.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1062,
      name: "Paulista - A4",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1062.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1063,
      name: "Copa Alagoas",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1063.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1066,
      name: "CONCACAF U20 - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1066.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1067,
      name: "Torneo Promocional Amateur",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1067.png",
    },
    country: {
      name: "Argentina",
      code: "AR",
      flag: "https://media.api-sports.io/flags/ar.svg",
    },
  },
  {
    league: {
      id: 1069,
      name: "Goiano U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1069.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1070,
      name: "AFC U20 Asian Cup - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1070.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1071,
      name: "Paranaense U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1071.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1073,
      name: "Baiano U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1073.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1075,
      name: "Pro League A",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1075.png",
    },
    country: {
      name: "Uzbekistan",
      code: "UZ",
      flag: "https://media.api-sports.io/flags/uz.svg",
    },
  },
  {
    league: {
      id: 1076,
      name: "Catarinense U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1076.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1077,
      name: "WAFF Championship U23",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1077.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1081,
      name: "CONMEBOL - U17 Femenino",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1081.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1082,
      name: "Copa Rio U20",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1082.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1085,
      name: "CONMEBOL U20 Femenino",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1085.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1086,
      name: "Paulista - U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1086.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1087,
      name: "Ykkösliiga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1087.png",
    },
    country: {
      name: "Finland",
      code: "FI",
      flag: "https://media.api-sports.io/flags/fi.svg",
    },
  },
  {
    league: {
      id: 1088,
      name: "Pernambucano - U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1088.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1089,
      name: "UAE-Qatar - Super Shield",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1089.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1090,
      name: "NNSW League 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1090.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 1091,
      name: "Tasmania Northern Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1091.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 1092,
      name: "Capital Territory NPL 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1092.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 1093,
      name: "Tasmania Southern Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1093.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 1094,
      name: "Western Australia State League 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1094.png",
    },
    country: {
      name: "Australia",
      code: "AU",
      flag: "https://media.api-sports.io/flags/au.svg",
    },
  },
  {
    league: {
      id: 1095,
      name: "USL League One Cup",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1095.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 1096,
      name: "Matogrossense 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1096.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1097,
      name: "Copa Espírito Santo",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1097.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1098,
      name: "Paulista Série B",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1098.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1100,
      name: "Brasiliense U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1100.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1101,
      name: "AFC U17 Asian Cup - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1101.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1102,
      name: "UEFA U17 Championship - Women",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1102.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1103,
      name: "Premiership Women",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1103.png",
    },
    country: {
      name: "Northern-Ireland",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
  },
  {
    league: {
      id: 1104,
      name: "Liga 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1104.png",
    },
    country: {
      name: "Georgia",
      code: "GE",
      flag: "https://media.api-sports.io/flags/ge.svg",
    },
  },
  {
    league: {
      id: 1105,
      name: "Olympics - Intercontinental Play-offs",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1105.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1106,
      name: "Carioca C",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1106.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1107,
      name: "Mineiro U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1107.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1108,
      name: "Sergipano U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1108.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1110,
      name: "Alagoano U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1110.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1112,
      name: "Cearense U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1112.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1113,
      name: "Copa Venezuela",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1113.png",
    },
    country: {
      name: "Venezuela",
      code: "VE",
      flag: "https://media.api-sports.io/flags/ve.svg",
    },
  },
  {
    league: {
      id: 1114,
      name: "Carioca U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1114.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1115,
      name: "Paraense B2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1115.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1116,
      name: "WPSL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1116.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 1117,
      name: "USL W League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1117.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 1118,
      name: "NPSL",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1118.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 1119,
      name: "NWSL - Liga MXF Summer Cup",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1119.png",
    },
    country: {
      name: "USA",
      code: "US",
      flag: "https://media.api-sports.io/flags/us.svg",
    },
  },
  {
    league: {
      id: 1120,
      name: "Paraibano U20",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1120.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1122,
      name: "OFC U19 Championship",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1122.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1123,
      name: "Qatar-UAE Super Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1123.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    league: {
      id: 1124,
      name: "Cearense - 3",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1124.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1125,
      name: "Pernambucano - 2",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/1125.png",
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https://media.api-sports.io/flags/br.svg",
    },
  },
  {
    league: {
      id: 1083,
      name: "UEFA Championship - Women - Qualification",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/1083.png",
    },
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
];

export const getLeague = ({
  name,
  country,
}: {
  name?: string;
  country?: string;
}) =>
  leagues.find(
    (league) =>
      league.league.name.toLowerCase() === name?.toLowerCase() &&
      league.country.name.toLowerCase() === country?.toLowerCase()
  );
