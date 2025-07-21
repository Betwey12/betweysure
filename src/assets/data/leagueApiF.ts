export type TPopularLeague = {
  name: string;
  logo: string;
  apiFootballId: number;
  country: string;
  url: string;
};

export const leagueList: Record<string, TPopularLeague[]> = {
  Africa: [
    {
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/186.png",
      apiFootballId: 186,
      country: "Algeria",
      url: "algeria-ligue-1-186",
    },
    {
      name: "Ligue 2",
      logo: "https://media.api-sports.io/football/leagues/187.png",
      apiFootballId: 187,
      country: "Algeria",
      url: "algeria-ligue-2-187",
    },
    {
      name: "Botola Pro",
      logo: "https://media.api-sports.io/football/leagues/200.png",
      apiFootballId: 200,
      country: "Morocco",
      url: "morocco-botola-pro-200",
    },
    {
      name: "Botola 2",
      logo: "https://media.api-sports.io/football/leagues/201.png",
      apiFootballId: 201,
      country: "Morocco",
      url: "morocco-botola-2-201",
    },
    {
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/202.png",
      apiFootballId: 202,
      country: "Tunisia",
      url: "tunisia-ligue-1-202",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/233.png",
      apiFootballId: 233,
      country: "Egypt",
      url: "egypt-premier-league-233",
    },
    {
      name: "FKF Premier League",
      logo: "https://media.api-sports.io/football/leagues/276.png",
      apiFootballId: 276,
      country: "Kenya",
      url: "kenya-fkf-premier-league-276",
    },
    {
      name: "Super League",
      logo: "https://media.api-sports.io/football/leagues/277.png",
      apiFootballId: 277,
      country: "Kenya",
      url: "kenya-super-league-277",
    },
    {
      name: "Premier Soccer League",
      logo: "https://media.api-sports.io/football/leagues/288.png",
      apiFootballId: 288,
      country: "South-Africa",
      url: "south-africa-premier-soccer-league-288",
    },
    {
      name: "1st Division",
      logo: "https://media.api-sports.io/football/leagues/289.png",
      apiFootballId: 289,
      country: "South-Africa",
      url: "south-africa-1st-division-289",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/363.png",
      apiFootballId: 363,
      country: "Ethiopia",
      url: "ethiopia-premier-league-363",
    },
    {
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/378.png",
      apiFootballId: 378,
      country: "Guinea",
      url: "guinea-ligue-1-378",
    },
    {
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/386.png",
      apiFootballId: 386,
      country: "Ivory-Coast",
      url: "ivory-coast-ligue-1-386",
    },
    {
      name: "Super League",
      logo: "https://media.api-sports.io/football/leagues/391.png",
      apiFootballId: 391,
      country: "Malawi",
      url: "malawi-super-league-391",
    },
    {
      name: "Girabola",
      logo: "https://media.api-sports.io/football/leagues/397.png",
      apiFootballId: 397,
      country: "Angola",
      url: "angola-girabola-397",
    },
    {
      name: "NPFL",
      logo: "https://media.api-sports.io/football/leagues/399.png",
      apiFootballId: 399,
      country: "Nigeria",
      url: "nigeria-npfl-399",
    },
    {
      name: "Super League",
      logo: "https://media.api-sports.io/football/leagues/400.png",
      apiFootballId: 400,
      country: "Zambia",
      url: "zambia-super-league-400",
    },
    {
      name: "Premier Soccer League",
      logo: "https://media.api-sports.io/football/leagues/401.png",
      apiFootballId: 401,
      country: "Zimbabwe",
      url: "zimbabwe-premier-soccer-league-401",
    },
    {
      name: "Sudani Premier League",
      logo: "https://media.api-sports.io/football/leagues/402.png",
      apiFootballId: 402,
      country: "Sudan",
      url: "sudan-sudani-premier-league-402",
    },
    {
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/403.png",
      apiFootballId: 403,
      country: "Senegal",
      url: "senegal-ligue-1-403",
    },
    {
      name: "National Soccer League",
      logo: "https://media.api-sports.io/football/leagues/405.png",
      apiFootballId: 405,
      country: "Rwanda",
      url: "rwanda-national-soccer-league-405",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/409.png",
      apiFootballId: 409,
      country: "Namibia",
      url: "namibia-premier-league-409",
    },
    {
      name: "Elite One",
      logo: "https://media.api-sports.io/football/leagues/411.png",
      apiFootballId: 411,
      country: "Cameroon",
      url: "cameroon-elite-one-411",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/412.png",
      apiFootballId: 412,
      country: "Botswana",
      url: "botswana-premier-league-412",
    },
    {
      name: "Championnat National",
      logo: "https://media.api-sports.io/football/leagues/415.png",
      apiFootballId: 415,
      country: "Benin",
      url: "benin-championnat-national-415",
    },
    {
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/423.png",
      apiFootballId: 423,
      country: "Burkina-Faso",
      url: "burkina-faso-ligue-1-423",
    },
    {
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/424.png",
      apiFootballId: 424,
      country: "Congo-DR",
      url: "congo-dr-ligue-1-424",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/507.png",
      apiFootballId: 507,
      country: "South-Africa",
      url: "south-africa-cup-507",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/508.png",
      apiFootballId: 508,
      country: "South-Africa",
      url: "south-africa-league-cup-508",
    },
    {
      name: "8 Cup",
      logo: "https://media.api-sports.io/football/leagues/509.png",
      apiFootballId: 509,
      country: "South-Africa",
      url: "south-africa-8-cup-509",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/511.png",
      apiFootballId: 511,
      country: "Tunisia",
      url: "tunisia-cup-511",
    },
    {
      name: "Coupe Nationale",
      logo: "https://media.api-sports.io/football/leagues/514.png",
      apiFootballId: 514,
      country: "Algeria",
      url: "algeria-coupe-nationale-514",
    },
    {
      name: "U21 League 1",
      logo: "https://media.api-sports.io/football/leagues/515.png",
      apiFootballId: 515,
      country: "Algeria",
      url: "algeria-u21-league-1-515",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/516.png",
      apiFootballId: 516,
      country: "Algeria",
      url: "algeria-super-cup-516",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/539.png",
      apiFootballId: 539,
      country: "Egypt",
      url: "egypt-super-cup-539",
    },
    {
      name: "Ligue A",
      logo: "https://media.api-sports.io/football/leagues/566.png",
      apiFootballId: 566,
      country: "Burundi",
      url: "burundi-ligue-a-566",
    },
    {
      name: "Ligi kuu Bara",
      logo: "https://media.api-sports.io/football/leagues/567.png",
      apiFootballId: 567,
      country: "Tanzania",
      url: "tanzania-ligi-kuu-bara-567",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/570.png",
      apiFootballId: 570,
      country: "Ghana",
      url: "ghana-premier-league-570",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/584.png",
      apiFootballId: 584,
      country: "Libya",
      url: "libya-premier-league-584",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/585.png",
      apiFootballId: 585,
      country: "Uganda",
      url: "uganda-premier-league-585",
    },
    {
      name: "Première Division",
      logo: "https://media.api-sports.io/football/leagues/598.png",
      apiFootballId: 598,
      country: "Mali",
      url: "mali-première-division-598",
    },
    {
      name: "WK-League",
      logo: "https://media.api-sports.io/football/leagues/660.png",
      apiFootballId: 660,
      country: "South-Korea",
      url: "south-korea-wk-league-660",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/714.png",
      apiFootballId: 714,
      country: "Egypt",
      url: "egypt-cup-714",
    },
    {
      name: "Diski Challenge",
      logo: "https://media.api-sports.io/football/leagues/734.png",
      apiFootballId: 734,
      country: "South-Africa",
      url: "south-africa-diski-challenge-734",
    },
    {
      name: "LFA First Division",
      logo: "https://media.api-sports.io/football/leagues/760.png",
      apiFootballId: 760,
      country: "Liberia",
      url: "liberia-lfa-first-division-760",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/762.png",
      apiFootballId: 762,
      country: "Mauritania",
      url: "mauritania-premier-league-762",
    },
    {
      name: "Mauritian League",
      logo: "https://media.api-sports.io/football/leagues/763.png",
      apiFootballId: 763,
      country: "Mauritius",
      url: "mauritius-mauritian-league-763",
    },
    {
      name: "Elite Two",
      logo: "https://media.api-sports.io/football/leagues/813.png",
      apiFootballId: 813,
      country: "Cameroon",
      url: "cameroon-elite-two-813",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/822.png",
      apiFootballId: 822,
      country: "Morocco",
      url: "morocco-cup-822",
    },
    {
      name: "Ligue 2",
      logo: "https://media.api-sports.io/football/leagues/828.png",
      apiFootballId: 828,
      country: "Tunisia",
      url: "tunisia-ligue-2-828",
    },
    {
      name: "Coupe de la Ligue",
      logo: "https://media.api-sports.io/football/leagues/832.png",
      apiFootballId: 832,
      country: "Algeria",
      url: "algeria-coupe-de-la-ligue-832",
    },
    {
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/844.png",
      apiFootballId: 844,
      country: "Congo",
      url: "congo-ligue-1-844",
    },
    {
      name: "GFA League",
      logo: "https://media.api-sports.io/football/leagues/845.png",
      apiFootballId: 845,
      country: "Gambia",
      url: "gambia-gfa-league-845",
    },
    {
      name: "Somali Premier League",
      logo: "https://media.api-sports.io/football/leagues/846.png",
      apiFootballId: 846,
      country: "Somalia",
      url: "somalia-somali-premier-league-846",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/847.png",
      apiFootballId: 847,
      country: "Eswatini",
      url: "eswatini-premier-league-847",
    },
    {
      name: "Second League",
      logo: "https://media.api-sports.io/football/leagues/887.png",
      apiFootballId: 887,
      country: "Egypt",
      url: "egypt-second-league-887",
    },
    {
      name: "Second League - Group B",
      logo: "https://media.api-sports.io/football/leagues/888.png",
      apiFootballId: 888,
      country: "Egypt",
      url: "egypt-second-league-group-b-888",
    },
    {
      name: "Second League - Group C",
      logo: "https://media.api-sports.io/football/leagues/889.png",
      apiFootballId: 889,
      country: "Egypt",
      url: "egypt-second-league-group-c-889",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/895.png",
      apiFootballId: 895,
      country: "Egypt",
      url: "egypt-league-cup-895",
    },
    {
      name: "Diski Shield",
      logo: "https://media.api-sports.io/football/leagues/935.png",
      apiFootballId: 935,
      country: "South-Africa",
      url: "south-africa-diski-shield-935",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/962.png",
      apiFootballId: 962,
      country: "Lesotho",
      url: "lesotho-premier-league-962",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/966.png",
      apiFootballId: 966,
      country: "Ghana",
      url: "ghana-cup-966",
    },
    {
      name: "Championnat D1",
      logo: "https://media.api-sports.io/football/leagues/968.png",
      apiFootballId: 968,
      country: "Gabon",
      url: "gabon-championnat-d1-968",
    },
    {
      name: "Shield Cup",
      logo: "https://media.api-sports.io/football/leagues/971.png",
      apiFootballId: 971,
      country: "Kenya",
      url: "kenya-shield-cup-971",
    },
    {
      name: "Second League - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1014.png",
      apiFootballId: 1014,
      country: "Egypt",
      url: "egypt-second-league-play-offs-1014",
    },
    {
      name: "Championnat National",
      logo: "https://media.api-sports.io/football/leagues/1084.png",
      apiFootballId: 1084,
      country: "Togo",
      url: "togo-championnat-national-1084",
    },
  ],
  "North America": [
    {
      name: "Primera División",
      logo: "https://media.api-sports.io/football/leagues/162.png",
      apiFootballId: 162,
      country: "Costa-Rica",
      url: "costa-rica-primera-división-162",
    },
    {
      name: "Liga de Ascenso",
      logo: "https://media.api-sports.io/football/leagues/163.png",
      apiFootballId: 163,
      country: "Costa-Rica",
      url: "costa-rica-liga-de-ascenso-163",
    },
    {
      name: "Liga Nacional",
      logo: "https://media.api-sports.io/football/leagues/234.png",
      apiFootballId: 234,
      country: "Honduras",
      url: "honduras-liga-nacional-234",
    },
    {
      name: "Major League Soccer",
      logo: "https://media.api-sports.io/football/leagues/253.png",
      apiFootballId: 253,
      country: "USA",
      url: "usa-major-league-soccer-253",
    },
    {
      name: "NWSL Women",
      logo: "https://media.api-sports.io/football/leagues/254.png",
      apiFootballId: 254,
      country: "USA",
      url: "usa-nwsl-women-254",
    },
    {
      name: "USL Championship",
      logo: "https://media.api-sports.io/football/leagues/255.png",
      apiFootballId: 255,
      country: "USA",
      url: "usa-usl-championship-255",
    },
    {
      name: "USL League Two",
      logo: "https://media.api-sports.io/football/leagues/256.png",
      apiFootballId: 256,
      country: "USA",
      url: "usa-usl-league-two-256",
    },
    {
      name: "US Open Cup",
      logo: "https://media.api-sports.io/football/leagues/257.png",
      apiFootballId: 257,
      country: "USA",
      url: "usa-us-open-cup-257",
    },
    {
      name: "Canadian Soccer League",
      logo: "https://media.api-sports.io/football/leagues/258.png",
      apiFootballId: 258,
      country: "Canada",
      url: "canada-canadian-soccer-league-258",
    },
    {
      name: "Canadian Championship",
      logo: "https://media.api-sports.io/football/leagues/259.png",
      apiFootballId: 259,
      country: "Canada",
      url: "canada-canadian-championship-259",
    },
    {
      name: "Pacific Coast Soccer League",
      logo: "https://media.api-sports.io/football/leagues/260.png",
      apiFootballId: 260,
      country: "Canada",
      url: "canada-pacific-coast-soccer-league-260",
    },
    {
      name: "Liga MX",
      logo: "https://media.api-sports.io/football/leagues/262.png",
      apiFootballId: 262,
      country: "Mexico",
      url: "mexico-liga-mx-262",
    },
    {
      name: "Liga de Expansión MX",
      logo: "https://media.api-sports.io/football/leagues/263.png",
      apiFootballId: 263,
      country: "Mexico",
      url: "mexico-liga-de-expansión-mx-263",
    },
    {
      name: "Copa MX",
      logo: "https://media.api-sports.io/football/leagues/264.png",
      apiFootballId: 264,
      country: "Mexico",
      url: "mexico-copa-mx-264",
    },
    {
      name: "Liga Panameña de Fútbol",
      logo: "https://media.api-sports.io/football/leagues/304.png",
      apiFootballId: 304,
      country: "Panama",
      url: "panama-liga-panameña-de-fútbol-304",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/322.png",
      apiFootballId: 322,
      country: "Jamaica",
      url: "jamaica-premier-league-322",
    },
    {
      name: "Primera Division",
      logo: "https://media.api-sports.io/football/leagues/338.png",
      apiFootballId: 338,
      country: "Guatemala",
      url: "guatemala-primera-division-338",
    },
    {
      name: "Liga Nacional",
      logo: "https://media.api-sports.io/football/leagues/339.png",
      apiFootballId: 339,
      country: "Guatemala",
      url: "guatemala-liga-nacional-339",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/347.png",
      apiFootballId: 347,
      country: "Czech-Republic",
      url: "czech-republic-cup-347",
    },
    {
      name: "Primera Division",
      logo: "https://media.api-sports.io/football/leagues/370.png",
      apiFootballId: 370,
      country: "El-Salvador",
      url: "el-salvador-primera-division-370",
    },
    {
      name: "Ligue Haïtienne",
      logo: "https://media.api-sports.io/football/leagues/379.png",
      apiFootballId: 379,
      country: "Haiti",
      url: "haiti-ligue-haïtienne-379",
    },
    {
      name: "Primera Division",
      logo: "https://media.api-sports.io/football/leagues/396.png",
      apiFootballId: 396,
      country: "Nicaragua",
      url: "nicaragua-primera-division-396",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/414.png",
      apiFootballId: 414,
      country: "Bermuda",
      url: "bermuda-premier-league-414",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/416.png",
      apiFootballId: 416,
      country: "Belize",
      url: "belize-premier-league-416",
    },
    {
      name: "Division di Honor",
      logo: "https://media.api-sports.io/football/leagues/421.png",
      apiFootballId: 421,
      country: "Aruba",
      url: "aruba-division-di-honor-421",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/422.png",
      apiFootballId: 422,
      country: "Barbados",
      url: "barbados-premier-league-422",
    },
    {
      name: "Canadian Premier League",
      logo: "https://media.api-sports.io/football/leagues/479.png",
      apiFootballId: 479,
      country: "Canada",
      url: "canada-canadian-premier-league-479",
    },
    {
      name: "USL League One",
      logo: "https://media.api-sports.io/football/leagues/489.png",
      apiFootballId: 489,
      country: "USA",
      url: "usa-usl-league-one-489",
    },
    {
      name: "NISA",
      logo: "https://media.api-sports.io/football/leagues/523.png",
      apiFootballId: 523,
      country: "USA",
      url: "usa-nisa-523",
    },
    {
      name: "Liga Primera U20",
      logo: "https://media.api-sports.io/football/leagues/565.png",
      apiFootballId: 565,
      country: "Nicaragua",
      url: "nicaragua-liga-primera-u20-565",
    },
    {
      name: "Pro League",
      logo: "https://media.api-sports.io/football/leagues/591.png",
      apiFootballId: 591,
      country: "Trinidad-And-Tobago",
      url: "trinidad-and-tobago-pro-league-591",
    },
    {
      name: "NWSL Women - Challenge Cup",
      logo: "https://media.api-sports.io/football/leagues/641.png",
      apiFootballId: 641,
      country: "USA",
      url: "usa-nwsl-women-challenge-cup-641",
    },
    {
      name: "Curaçao Sekshon Pagá",
      logo: "https://media.api-sports.io/football/leagues/642.png",
      apiFootballId: 642,
      country: "Curacao",
      url: "curacao-curacao-sekshon-paga-642",
    },
    {
      name: "Copa por México",
      logo: "https://media.api-sports.io/football/leagues/662.png",
      apiFootballId: 662,
      country: "Mexico",
      url: "mexico-copa-por-méxico-662",
    },
    {
      name: "1. Liga U19",
      logo: "https://media.api-sports.io/football/leagues/668.png",
      apiFootballId: 668,
      country: "Czech-Republic",
      url: "czech-republic-1-liga-u19-668",
    },
    {
      name: "1. Liga Women",
      logo: "https://media.api-sports.io/football/leagues/669.png",
      apiFootballId: 669,
      country: "Czech-Republic",
      url: "czech-republic-1-liga-women-669",
    },
    {
      name: "Liga MX Femenil",
      logo: "https://media.api-sports.io/football/leagues/673.png",
      apiFootballId: 673,
      country: "Mexico",
      url: "mexico-liga-mx-femenil-673",
    },
    {
      name: "3. liga - CFL B",
      logo: "https://media.api-sports.io/football/leagues/685.png",
      apiFootballId: 685,
      country: "Czech-Republic",
      url: "czech-republic-3-liga-cfl-b-685",
    },
    {
      name: "4. liga - Divizie F",
      logo: "https://media.api-sports.io/football/leagues/686.png",
      apiFootballId: 686,
      country: "Czech-Republic",
      url: "czech-republic-4-liga-divizie-f-686",
    },
    {
      name: "Liga Premier Serie A",
      logo: "https://media.api-sports.io/football/leagues/722.png",
      apiFootballId: 722,
      country: "Mexico",
      url: "mexico-liga-premier-serie-a-722",
    },
    {
      name: "Liga Mayor",
      logo: "https://media.api-sports.io/football/leagues/759.png",
      apiFootballId: 759,
      country: "Dominican-Republic",
      url: "dominican-republic-liga-mayor-759",
    },
    {
      name: "Campeón de Campeones",
      logo: "https://media.api-sports.io/football/leagues/857.png",
      apiFootballId: 857,
      country: "Mexico",
      url: "mexico-campeón-de-campeones-857",
    },
    {
      name: "U20 League",
      logo: "https://media.api-sports.io/football/leagues/861.png",
      apiFootballId: 861,
      country: "Mexico",
      url: "mexico-u20-league-861",
    },
    {
      name: "Supercopa",
      logo: "https://media.api-sports.io/football/leagues/864.png",
      apiFootballId: 864,
      country: "Costa-Rica",
      url: "costa-rica-supercopa-864",
    },
    {
      name: "MLS All-Star",
      logo: "https://media.api-sports.io/football/leagues/866.png",
      apiFootballId: 866,
      country: "USA",
      url: "usa-mls-all-star-866",
    },
    {
      name: "Liga Premier Serie B",
      logo: "https://media.api-sports.io/football/leagues/872.png",
      apiFootballId: 872,
      country: "Mexico",
      url: "mexico-liga-premier-serie-b-872",
    },
    {
      name: "Primera Division",
      logo: "https://media.api-sports.io/football/leagues/907.png",
      apiFootballId: 907,
      country: "Cuba",
      url: "cuba-primera-division-907",
    },
    {
      name: "MLS Next Pro",
      logo: "https://media.api-sports.io/football/leagues/909.png",
      apiFootballId: 909,
      country: "USA",
      url: "usa-mls-next-pro-909",
    },
    {
      name: "League 1 Ontario",
      logo: "https://media.api-sports.io/football/leagues/923.png",
      apiFootballId: 923,
      country: "Canada",
      url: "canada-league-1-ontario-923",
    },
    {
      name: "National League - Central",
      logo: "https://media.api-sports.io/football/leagues/954.png",
      apiFootballId: 954,
      country: "New-Zealand",
      url: "new-zealand-national-league-central-954",
    },
    {
      name: "National League - National",
      logo: "https://media.api-sports.io/football/leagues/955.png",
      apiFootballId: 955,
      country: "New-Zealand",
      url: "new-zealand-national-league-national-955",
    },
    {
      name: "National League - Northern",
      logo: "https://media.api-sports.io/football/leagues/956.png",
      apiFootballId: 956,
      country: "New-Zealand",
      url: "new-zealand-national-league-northern-956",
    },
    {
      name: "Copa Costa Rica",
      logo: "https://media.api-sports.io/football/leagues/958.png",
      apiFootballId: 958,
      country: "Costa-Rica",
      url: "costa-rica-copa-costa-rica-958",
    },
    {
      name: "U23 League",
      logo: "https://media.api-sports.io/football/leagues/1017.png",
      apiFootballId: 1017,
      country: "Mexico",
      url: "mexico-u23-league-1017",
    },
    {
      name: "Premier Division",
      logo: "https://media.api-sports.io/football/leagues/1048.png",
      apiFootballId: 1048,
      country: "Antigua-And-Barbuda",
      url: "antigua-and-barbuda-premier-division-1048",
    },
    {
      name: "Premier Division",
      logo: "https://media.api-sports.io/football/leagues/1080.png",
      apiFootballId: 1080,
      country: "Grenada",
      url: "grenada-premier-division-1080",
    },
    {
      name: "USL League One Cup",
      logo: "https://media.api-sports.io/football/leagues/1095.png",
      apiFootballId: 1095,
      country: "USA",
      url: "usa-usl-league-one-cup-1095",
    },
    {
      name: "WPSL",
      logo: "https://media.api-sports.io/football/leagues/1116.png",
      apiFootballId: 1116,
      country: "USA",
      url: "usa-wpsl-1116",
    },
    {
      name: "USL W League",
      logo: "https://media.api-sports.io/football/leagues/1117.png",
      apiFootballId: 1117,
      country: "USA",
      url: "usa-usl-w-league-1117",
    },
    {
      name: "NPSL",
      logo: "https://media.api-sports.io/football/leagues/1118.png",
      apiFootballId: 1118,
      country: "USA",
      url: "usa-npsl-1118",
    },
    {
      name: "NWSL - Liga MXF Summer Cup",
      logo: "https://media.api-sports.io/football/leagues/1119.png",
      apiFootballId: 1119,
      country: "USA",
      url: "usa-nwsl-liga-mxf-summer-cup-1119",
    },
  ],
  "South America": [
    {
      name: "Serie A",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      apiFootballId: 71,
      country: "Brazil",
      url: "brazil-serie-a-71",
    },
    {
      name: "Serie B",
      logo: "https://media.api-sports.io/football/leagues/72.png",
      apiFootballId: 72,
      country: "Brazil",
      url: "brazil-serie-b-72",
    },
    {
      name: "Copa Do Brasil",
      logo: "https://media.api-sports.io/football/leagues/73.png",
      apiFootballId: 73,
      country: "Brazil",
      url: "brazil-copa-do-brasil-73",
    },
    {
      name: "Brasileiro Women",
      logo: "https://media.api-sports.io/football/leagues/74.png",
      apiFootballId: 74,
      country: "Brazil",
      url: "brazil-brasileiro-women-74",
    },
    {
      name: "Serie C",
      logo: "https://media.api-sports.io/football/leagues/75.png",
      apiFootballId: 75,
      country: "Brazil",
      url: "brazil-serie-c-75",
    },
    {
      name: "Serie D",
      logo: "https://media.api-sports.io/football/leagues/76.png",
      apiFootballId: 76,
      country: "Brazil",
      url: "brazil-serie-d-76",
    },
    {
      name: "Alagoano",
      logo: "https://media.api-sports.io/football/leagues/77.png",
      apiFootballId: 77,
      country: "Brazil",
      url: "brazil-alagoano-77",
    },
    {
      name: "Liga Profesional Argentina",
      logo: "https://media.api-sports.io/football/leagues/128.png",
      apiFootballId: 128,
      country: "Argentina",
      url: "argentina-liga-profesional-argentina-128",
    },
    {
      name: "Primera Nacional",
      logo: "https://media.api-sports.io/football/leagues/129.png",
      apiFootballId: 129,
      country: "Argentina",
      url: "argentina-primera-nacional-129",
    },
    {
      name: "Copa Argentina",
      logo: "https://media.api-sports.io/football/leagues/130.png",
      apiFootballId: 130,
      country: "Argentina",
      url: "argentina-copa-argentina-130",
    },
    {
      name: "Primera B Metropolitana",
      logo: "https://media.api-sports.io/football/leagues/131.png",
      apiFootballId: 131,
      country: "Argentina",
      url: "argentina-primera-b-metropolitana-131",
    },
    {
      name: "Primera C",
      logo: "https://media.api-sports.io/football/leagues/132.png",
      apiFootballId: 132,
      country: "Argentina",
      url: "argentina-primera-c-132",
    },
    {
      name: "Primera D",
      logo: "https://media.api-sports.io/football/leagues/133.png",
      apiFootballId: 133,
      country: "Argentina",
      url: "argentina-primera-d-133",
    },
    {
      name: "Torneo Federal A",
      logo: "https://media.api-sports.io/football/leagues/134.png",
      apiFootballId: 134,
      country: "Argentina",
      url: "argentina-torneo-federal-a-134",
    },
    {
      name: "Primera A",
      logo: "https://media.api-sports.io/football/leagues/239.png",
      apiFootballId: 239,
      country: "Colombia",
      url: "colombia-primera-a-239",
    },
    {
      name: "Primera B",
      logo: "https://media.api-sports.io/football/leagues/240.png",
      apiFootballId: 240,
      country: "Colombia",
      url: "colombia-primera-b-240",
    },
    {
      name: "Copa Colombia",
      logo: "https://media.api-sports.io/football/leagues/241.png",
      apiFootballId: 241,
      country: "Colombia",
      url: "colombia-copa-colombia-241",
    },
    {
      name: "Liga Pro",
      logo: "https://media.api-sports.io/football/leagues/242.png",
      apiFootballId: 242,
      country: "Ecuador",
      url: "ecuador-liga-pro-242",
    },
    {
      name: "Liga Pro Serie B",
      logo: "https://media.api-sports.io/football/leagues/243.png",
      apiFootballId: 243,
      country: "Ecuador",
      url: "ecuador-liga-pro-serie-b-243",
    },
    {
      name: "Division Profesional - Apertura",
      logo: "https://media.api-sports.io/football/leagues/250.png",
      apiFootballId: 250,
      country: "Paraguay",
      url: "paraguay-division-profesional-apertura-250",
    },
    {
      name: "Division Intermedia",
      logo: "https://media.api-sports.io/football/leagues/251.png",
      apiFootballId: 251,
      country: "Paraguay",
      url: "paraguay-division-intermedia-251",
    },
    {
      name: "Division Profesional - Clausura",
      logo: "https://media.api-sports.io/football/leagues/252.png",
      apiFootballId: 252,
      country: "Paraguay",
      url: "paraguay-division-profesional-clausura-252",
    },
    {
      name: "Primera División",
      logo: "https://media.api-sports.io/football/leagues/265.png",
      apiFootballId: 265,
      country: "Chile",
      url: "chile-primera-división-265",
    },
    {
      name: "Primera B",
      logo: "https://media.api-sports.io/football/leagues/266.png",
      apiFootballId: 266,
      country: "Chile",
      url: "chile-primera-b-266",
    },
    {
      name: "Copa Chile",
      logo: "https://media.api-sports.io/football/leagues/267.png",
      apiFootballId: 267,
      country: "Chile",
      url: "chile-copa-chile-267",
    },
    {
      name: "Primera División - Apertura",
      logo: "https://media.api-sports.io/football/leagues/268.png",
      apiFootballId: 268,
      country: "Uruguay",
      url: "uruguay-primera-división-apertura-268",
    },
    {
      name: "Segunda División",
      logo: "https://media.api-sports.io/football/leagues/269.png",
      apiFootballId: 269,
      country: "Uruguay",
      url: "uruguay-segunda-división-269",
    },
    {
      name: "Primera División - Clausura",
      logo: "https://media.api-sports.io/football/leagues/270.png",
      apiFootballId: 270,
      country: "Uruguay",
      url: "uruguay-primera-división-clausura-270",
    },
    {
      name: "Primera División",
      logo: "https://media.api-sports.io/football/leagues/281.png",
      apiFootballId: 281,
      country: "Peru",
      url: "peru-primera-división-281",
    },
    {
      name: "Segunda División",
      logo: "https://media.api-sports.io/football/leagues/282.png",
      apiFootballId: 282,
      country: "Peru",
      url: "peru-segunda-división-282",
    },
    {
      name: "Primera División",
      logo: "https://media.api-sports.io/football/leagues/299.png",
      apiFootballId: 299,
      country: "Venezuela",
      url: "venezuela-primera-división-299",
    },
    {
      name: "Segunda División",
      logo: "https://media.api-sports.io/football/leagues/300.png",
      apiFootballId: 300,
      country: "Venezuela",
      url: "venezuela-segunda-división-300",
    },
    {
      name: "Primera División",
      logo: "https://media.api-sports.io/football/leagues/344.png",
      apiFootballId: 344,
      country: "Bolivia",
      url: "bolivia-primera-división-344",
    },
    {
      name: "Paulista - A1",
      logo: "https://media.api-sports.io/football/leagues/475.png",
      apiFootballId: 475,
      country: "Brazil",
      url: "brazil-paulista-a1-475",
    },
    {
      name: "Paulista - A2",
      logo: "https://media.api-sports.io/football/leagues/476.png",
      apiFootballId: 476,
      country: "Brazil",
      url: "brazil-paulista-a2-476",
    },
    {
      name: "Gaúcho - 1",
      logo: "https://media.api-sports.io/football/leagues/477.png",
      apiFootballId: 477,
      country: "Brazil",
      url: "brazil-gaúcho-1-477",
    },
    {
      name: "Gaúcho - 2",
      logo: "https://media.api-sports.io/football/leagues/478.png",
      apiFootballId: 478,
      country: "Brazil",
      url: "brazil-gaúcho-2-478",
    },
    {
      name: "Copa de la Superliga",
      logo: "https://media.api-sports.io/football/leagues/483.png",
      apiFootballId: 483,
      country: "Argentina",
      url: "argentina-copa-de-la-superliga-483",
    },
    {
      name: "Copa Paraguay",
      logo: "https://media.api-sports.io/football/leagues/501.png",
      apiFootballId: 501,
      country: "Paraguay",
      url: "paraguay-copa-paraguay-501",
    },
    {
      name: "Copa Bicentenario",
      logo: "https://media.api-sports.io/football/leagues/502.png",
      apiFootballId: 502,
      country: "Peru",
      url: "peru-copa-bicentenario-502",
    },
    {
      name: "Copa Perú",
      logo: "https://media.api-sports.io/football/leagues/503.png",
      apiFootballId: 503,
      country: "Peru",
      url: "peru-copa-perú-503",
    },
    {
      name: "Trofeo de Campeones de la Superliga",
      logo: "https://media.api-sports.io/football/leagues/517.png",
      apiFootballId: 517,
      country: "Argentina",
      url: "argentina-trofeo-de-campeones-de-la-superliga-517",
    },
    {
      name: "Acreano",
      logo: "https://media.api-sports.io/football/leagues/520.png",
      apiFootballId: 520,
      country: "Brazil",
      url: "brazil-acreano-520",
    },
    {
      name: "Amapaense",
      logo: "https://media.api-sports.io/football/leagues/521.png",
      apiFootballId: 521,
      country: "Brazil",
      url: "brazil-amapaense-521",
    },
    {
      name: "Amazonense",
      logo: "https://media.api-sports.io/football/leagues/522.png",
      apiFootballId: 522,
      country: "Brazil",
      url: "brazil-amazonense-522",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/527.png",
      apiFootballId: 527,
      country: "Chile",
      url: "chile-super-cup-527",
    },
    {
      name: "Supercopa",
      logo: "https://media.api-sports.io/football/leagues/558.png",
      apiFootballId: 558,
      country: "Peru",
      url: "peru-supercopa-558",
    },
    {
      name: "Eerste Divisie",
      logo: "https://media.api-sports.io/football/leagues/568.png",
      apiFootballId: 568,
      country: "Surinam",
      url: "surinam-eerste-divisie-568",
    },
    {
      name: "Baiano - 1",
      logo: "https://media.api-sports.io/football/leagues/602.png",
      apiFootballId: 602,
      country: "Brazil",
      url: "brazil-baiano-1-602",
    },
    {
      name: "Paraibano",
      logo: "https://media.api-sports.io/football/leagues/603.png",
      apiFootballId: 603,
      country: "Brazil",
      url: "brazil-paraibano-603",
    },
    {
      name: "Catarinense - 1",
      logo: "https://media.api-sports.io/football/leagues/604.png",
      apiFootballId: 604,
      country: "Brazil",
      url: "brazil-catarinense-1-604",
    },
    {
      name: "Paulista - A3",
      logo: "https://media.api-sports.io/football/leagues/605.png",
      apiFootballId: 605,
      country: "Brazil",
      url: "brazil-paulista-a3-605",
    },
    {
      name: "Paranaense - 1",
      logo: "https://media.api-sports.io/football/leagues/606.png",
      apiFootballId: 606,
      country: "Brazil",
      url: "brazil-paranaense-1-606",
    },
    {
      name: "Roraimense",
      logo: "https://media.api-sports.io/football/leagues/607.png",
      apiFootballId: 607,
      country: "Brazil",
      url: "brazil-roraimense-607",
    },
    {
      name: "Maranhense",
      logo: "https://media.api-sports.io/football/leagues/608.png",
      apiFootballId: 608,
      country: "Brazil",
      url: "brazil-maranhense-608",
    },
    {
      name: "Cearense - 1",
      logo: "https://media.api-sports.io/football/leagues/609.png",
      apiFootballId: 609,
      country: "Brazil",
      url: "brazil-cearense-1-609",
    },
    {
      name: "Brasiliense",
      logo: "https://media.api-sports.io/football/leagues/610.png",
      apiFootballId: 610,
      country: "Brazil",
      url: "brazil-brasiliense-610",
    },
    {
      name: "Capixaba",
      logo: "https://media.api-sports.io/football/leagues/611.png",
      apiFootballId: 611,
      country: "Brazil",
      url: "brazil-capixaba-611",
    },
    {
      name: "Copa do Nordeste",
      logo: "https://media.api-sports.io/football/leagues/612.png",
      apiFootballId: 612,
      country: "Brazil",
      url: "brazil-copa-do-nordeste-612",
    },
    {
      name: "Baiano - 2",
      logo: "https://media.api-sports.io/football/leagues/613.png",
      apiFootballId: 613,
      country: "Brazil",
      url: "brazil-baiano-2-613",
    },
    {
      name: "Paranaense - 2",
      logo: "https://media.api-sports.io/football/leagues/614.png",
      apiFootballId: 614,
      country: "Brazil",
      url: "brazil-paranaense-2-614",
    },
    {
      name: "Rondoniense",
      logo: "https://media.api-sports.io/football/leagues/615.png",
      apiFootballId: 615,
      country: "Brazil",
      url: "brazil-rondoniense-615",
    },
    {
      name: "Potiguar",
      logo: "https://media.api-sports.io/football/leagues/616.png",
      apiFootballId: 616,
      country: "Brazil",
      url: "brazil-potiguar-616",
    },
    {
      name: "Copa do Brasil U20",
      logo: "https://media.api-sports.io/football/leagues/617.png",
      apiFootballId: 617,
      country: "Brazil",
      url: "brazil-copa-do-brasil-u20-617",
    },
    {
      name: "São Paulo Youth Cup",
      logo: "https://media.api-sports.io/football/leagues/618.png",
      apiFootballId: 618,
      country: "Brazil",
      url: "brazil-são-paulo-youth-cup-618",
    },
    {
      name: "Mineiro - 2",
      logo: "https://media.api-sports.io/football/leagues/619.png",
      apiFootballId: 619,
      country: "Brazil",
      url: "brazil-mineiro-2-619",
    },
    {
      name: "Cearense - 2",
      logo: "https://media.api-sports.io/football/leagues/620.png",
      apiFootballId: 620,
      country: "Brazil",
      url: "brazil-cearense-2-620",
    },
    {
      name: "Piauiense",
      logo: "https://media.api-sports.io/football/leagues/621.png",
      apiFootballId: 621,
      country: "Brazil",
      url: "brazil-piauiense-621",
    },
    {
      name: "Pernambucano - 1",
      logo: "https://media.api-sports.io/football/leagues/622.png",
      apiFootballId: 622,
      country: "Brazil",
      url: "brazil-pernambucano-1-622",
    },
    {
      name: "Sul-Matogrossense",
      logo: "https://media.api-sports.io/football/leagues/623.png",
      apiFootballId: 623,
      country: "Brazil",
      url: "brazil-sul-matogrossense-623",
    },
    {
      name: "Carioca - 1",
      logo: "https://media.api-sports.io/football/leagues/624.png",
      apiFootballId: 624,
      country: "Brazil",
      url: "brazil-carioca-1-624",
    },
    {
      name: "Carioca - 2",
      logo: "https://media.api-sports.io/football/leagues/625.png",
      apiFootballId: 625,
      country: "Brazil",
      url: "brazil-carioca-2-625",
    },
    {
      name: "Sergipano",
      logo: "https://media.api-sports.io/football/leagues/626.png",
      apiFootballId: 626,
      country: "Brazil",
      url: "brazil-sergipano-626",
    },
    {
      name: "Paraense",
      logo: "https://media.api-sports.io/football/leagues/627.png",
      apiFootballId: 627,
      country: "Brazil",
      url: "brazil-paraense-627",
    },
    {
      name: "Goiano - 1",
      logo: "https://media.api-sports.io/football/leagues/628.png",
      apiFootballId: 628,
      country: "Brazil",
      url: "brazil-goiano-1-628",
    },
    {
      name: "Mineiro - 1",
      logo: "https://media.api-sports.io/football/leagues/629.png",
      apiFootballId: 629,
      country: "Brazil",
      url: "brazil-mineiro-1-629",
    },
    {
      name: "Matogrossense",
      logo: "https://media.api-sports.io/football/leagues/630.png",
      apiFootballId: 630,
      country: "Brazil",
      url: "brazil-matogrossense-630",
    },
    {
      name: "Tocantinense",
      logo: "https://media.api-sports.io/football/leagues/631.png",
      apiFootballId: 631,
      country: "Brazil",
      url: "brazil-tocantinense-631",
    },
    {
      name: "Supercopa do Brasil",
      logo: "https://media.api-sports.io/football/leagues/632.png",
      apiFootballId: 632,
      country: "Brazil",
      url: "brazil-supercopa-do-brasil-632",
    },
    {
      name: "Nacional B",
      logo: "https://media.api-sports.io/football/leagues/710.png",
      apiFootballId: 710,
      country: "Bolivia",
      url: "bolivia-nacional-b-710",
    },
    {
      name: "Segunda División",
      logo: "https://media.api-sports.io/football/leagues/711.png",
      apiFootballId: 711,
      country: "Chile",
      url: "chile-segunda-división-711",
    },
    {
      name: "Liga Femenina",
      logo: "https://media.api-sports.io/football/leagues/712.png",
      apiFootballId: 712,
      country: "Colombia",
      url: "colombia-liga-femenina-712",
    },
    {
      name: "Superliga",
      logo: "https://media.api-sports.io/football/leagues/713.png",
      apiFootballId: 713,
      country: "Colombia",
      url: "colombia-superliga-713",
    },
    {
      name: "CBF Brasileiro U20",
      logo: "https://media.api-sports.io/football/leagues/740.png",
      apiFootballId: 740,
      country: "Brazil",
      url: "brazil-cbf-brasileiro-u20-740",
    },
    {
      name: "Brasileiro de Aspirantes",
      logo: "https://media.api-sports.io/football/leagues/741.png",
      apiFootballId: 741,
      country: "Brazil",
      url: "brazil-brasileiro-de-aspirantes-741",
    },
    {
      name: "Copa Paulista",
      logo: "https://media.api-sports.io/football/leagues/742.png",
      apiFootballId: 742,
      country: "Brazil",
      url: "brazil-copa-paulista-742",
    },
    {
      name: "Super Copa",
      logo: "https://media.api-sports.io/football/leagues/810.png",
      apiFootballId: 810,
      country: "Argentina",
      url: "argentina-super-copa-810",
    },
    {
      name: "Super Copa",
      logo: "https://media.api-sports.io/football/leagues/842.png",
      apiFootballId: 842,
      country: "Uruguay",
      url: "uruguay-super-copa-842",
    },
    {
      name: "Copa Verde",
      logo: "https://media.api-sports.io/football/leagues/843.png",
      apiFootballId: 843,
      country: "Brazil",
      url: "brazil-copa-verde-843",
    },
    {
      name: "Carioca A2",
      logo: "https://media.api-sports.io/football/leagues/851.png",
      apiFootballId: 851,
      country: "Brazil",
      url: "brazil-carioca-a2-851",
    },
    {
      name: "Supercopa de Ecuador",
      logo: "https://media.api-sports.io/football/leagues/853.png",
      apiFootballId: 853,
      country: "Ecuador",
      url: "ecuador-supercopa-de-ecuador-853",
    },
    {
      name: "Reserve League",
      logo: "https://media.api-sports.io/football/leagues/906.png",
      apiFootballId: 906,
      country: "Argentina",
      url: "argentina-reserve-league-906",
    },
    {
      name: "Copa Ecuador",
      logo: "https://media.api-sports.io/football/leagues/917.png",
      apiFootballId: 917,
      country: "Ecuador",
      url: "ecuador-copa-ecuador-917",
    },
    {
      name: "Copa Uruguay",
      logo: "https://media.api-sports.io/football/leagues/930.png",
      apiFootballId: 930,
      country: "Uruguay",
      url: "uruguay-copa-uruguay-930",
    },
    {
      name: "Catarinense - 2",
      logo: "https://media.api-sports.io/football/leagues/936.png",
      apiFootballId: 936,
      country: "Brazil",
      url: "brazil-catarinense-2-936",
    },
    {
      name: "Supercopa",
      logo: "https://media.api-sports.io/football/leagues/961.png",
      apiFootballId: 961,
      country: "Paraguay",
      url: "paraguay-supercopa-961",
    },
    {
      name: "Copa de la División Profesional",
      logo: "https://media.api-sports.io/football/leagues/964.png",
      apiFootballId: 964,
      country: "Bolivia",
      url: "bolivia-copa-de-la-división-profesional-964",
    },
    {
      name: "Goiano - 2",
      logo: "https://media.api-sports.io/football/leagues/1030.png",
      apiFootballId: 1030,
      country: "Brazil",
      url: "brazil-goiano-2-1030",
    },
    {
      name: "Copa de la Liga Profesional",
      logo: "https://media.api-sports.io/football/leagues/1032.png",
      apiFootballId: 1032,
      country: "Argentina",
      url: "argentina-copa-de-la-liga-profesional-1032",
    },
    {
      name: "Copa Rio",
      logo: "https://media.api-sports.io/football/leagues/1035.png",
      apiFootballId: 1035,
      country: "Brazil",
      url: "brazil-copa-rio-1035",
    },
    {
      name: "Copa Santa Catarina",
      logo: "https://media.api-sports.io/football/leagues/1036.png",
      apiFootballId: 1036,
      country: "Brazil",
      url: "brazil-copa-santa-catarina-1036",
    },
    {
      name: "Paraibano 2",
      logo: "https://media.api-sports.io/football/leagues/1037.png",
      apiFootballId: 1037,
      country: "Brazil",
      url: "brazil-paraibano-2-1037",
    },
    {
      name: "Recopa Catarinense",
      logo: "https://media.api-sports.io/football/leagues/1059.png",
      apiFootballId: 1059,
      country: "Brazil",
      url: "brazil-recopa-catarinense-1059",
    },
    {
      name: "Paulista - A4",
      logo: "https://media.api-sports.io/football/leagues/1062.png",
      apiFootballId: 1062,
      country: "Brazil",
      url: "brazil-paulista-a4-1062",
    },
    {
      name: "Copa Alagoas",
      logo: "https://media.api-sports.io/football/leagues/1063.png",
      apiFootballId: 1063,
      country: "Brazil",
      url: "brazil-copa-alagoas-1063",
    },
    {
      name: "Torneo Promocional Amateur",
      logo: "https://media.api-sports.io/football/leagues/1067.png",
      apiFootballId: 1067,
      country: "Argentina",
      url: "argentina-torneo-promocional-amateur-1067",
    },
    {
      name: "Goiano U20",
      logo: "https://media.api-sports.io/football/leagues/1069.png",
      apiFootballId: 1069,
      country: "Brazil",
      url: "brazil-goiano-u20-1069",
    },
    {
      name: "Paranaense U20",
      logo: "https://media.api-sports.io/football/leagues/1071.png",
      apiFootballId: 1071,
      country: "Brazil",
      url: "brazil-paranaense-u20-1071",
    },
    {
      name: "Baiano U20",
      logo: "https://media.api-sports.io/football/leagues/1073.png",
      apiFootballId: 1073,
      country: "Brazil",
      url: "brazil-baiano-u20-1073",
    },
    {
      name: "Catarinense U20",
      logo: "https://media.api-sports.io/football/leagues/1076.png",
      apiFootballId: 1076,
      country: "Brazil",
      url: "brazil-catarinense-u20-1076",
    },
    {
      name: "Copa Rio U20",
      logo: "https://media.api-sports.io/football/leagues/1082.png",
      apiFootballId: 1082,
      country: "Brazil",
      url: "brazil-copa-rio-u20-1082",
    },
    {
      name: "Paulista - U20",
      logo: "https://media.api-sports.io/football/leagues/1086.png",
      apiFootballId: 1086,
      country: "Brazil",
      url: "brazil-paulista-u20-1086",
    },
    {
      name: "Pernambucano - U20",
      logo: "https://media.api-sports.io/football/leagues/1088.png",
      apiFootballId: 1088,
      country: "Brazil",
      url: "brazil-pernambucano-u20-1088",
    },
    {
      name: "Matogrossense 2",
      logo: "https://media.api-sports.io/football/leagues/1096.png",
      apiFootballId: 1096,
      country: "Brazil",
      url: "brazil-matogrossense-2-1096",
    },
    {
      name: "Copa Espírito Santo",
      logo: "https://media.api-sports.io/football/leagues/1097.png",
      apiFootballId: 1097,
      country: "Brazil",
      url: "brazil-copa-espírito-santo-1097",
    },
    {
      name: "Paulista Série B",
      logo: "https://media.api-sports.io/football/leagues/1098.png",
      apiFootballId: 1098,
      country: "Brazil",
      url: "brazil-paulista-série-b-1098",
    },
    {
      name: "Brasiliense U20",
      logo: "https://media.api-sports.io/football/leagues/1100.png",
      apiFootballId: 1100,
      country: "Brazil",
      url: "brazil-brasiliense-u20-1100",
    },
    {
      name: "Carioca C",
      logo: "https://media.api-sports.io/football/leagues/1106.png",
      apiFootballId: 1106,
      country: "Brazil",
      url: "brazil-carioca-c-1106",
    },
    {
      name: "Mineiro U20",
      logo: "https://media.api-sports.io/football/leagues/1107.png",
      apiFootballId: 1107,
      country: "Brazil",
      url: "brazil-mineiro-u20-1107",
    },
    {
      name: "Sergipano U20",
      logo: "https://media.api-sports.io/football/leagues/1108.png",
      apiFootballId: 1108,
      country: "Brazil",
      url: "brazil-sergipano-u20-1108",
    },
    {
      name: "Alagoano U20",
      logo: "https://media.api-sports.io/football/leagues/1110.png",
      apiFootballId: 1110,
      country: "Brazil",
      url: "brazil-alagoano-u20-1110",
    },
    {
      name: "Cearense U20",
      logo: "https://media.api-sports.io/football/leagues/1112.png",
      apiFootballId: 1112,
      country: "Brazil",
      url: "brazil-cearense-u20-1112",
    },
    {
      name: "Copa Venezuela",
      logo: "https://media.api-sports.io/football/leagues/1113.png",
      apiFootballId: 1113,
      country: "Venezuela",
      url: "venezuela-copa-venezuela-1113",
    },
    {
      name: "Carioca U20",
      logo: "https://media.api-sports.io/football/leagues/1114.png",
      apiFootballId: 1114,
      country: "Brazil",
      url: "brazil-carioca-u20-1114",
    },
    {
      name: "Paraense B2",
      logo: "https://media.api-sports.io/football/leagues/1115.png",
      apiFootballId: 1115,
      country: "Brazil",
      url: "brazil-paraense-b2-1115",
    },
    {
      name: "Paraibano U20",
      logo: "https://media.api-sports.io/football/leagues/1120.png",
      apiFootballId: 1120,
      country: "Brazil",
      url: "brazil-paraibano-u20-1120",
    },
    {
      name: "Cearense - 3",
      logo: "https://media.api-sports.io/football/leagues/1124.png",
      apiFootballId: 1124,
      country: "Brazil",
      url: "brazil-cearense-3-1124",
    },
    {
      name: "Pernambucano - 2",
      logo: "https://media.api-sports.io/football/leagues/1125.png",
      apiFootballId: 1125,
      country: "Brazil",
      url: "brazil-pernambucano-2-1125",
    },
    {
      name: "Brasileiro U17",
      logo: "https://media.api-sports.io/football/leagues/1128.png",
      apiFootballId: 1128,
      country: "Brazil",
      url: "brazil-brasileiro-u17-1128",
    },
  ],
  Asia: [
    {
      name: "J1 League",
      logo: "https://media.api-sports.io/football/leagues/98.png",
      apiFootballId: 98,
      country: "Japan",
      url: "japan-j1-league-98",
    },
    {
      name: "J2 League",
      logo: "https://media.api-sports.io/football/leagues/99.png",
      apiFootballId: 99,
      country: "Japan",
      url: "japan-j2-league-99",
    },
    {
      name: "J3 League",
      logo: "https://media.api-sports.io/football/leagues/100.png",
      apiFootballId: 100,
      country: "Japan",
      url: "japan-j3-league-100",
    },
    {
      name: "J-League Cup",
      logo: "https://media.api-sports.io/football/leagues/101.png",
      apiFootballId: 101,
      country: "Japan",
      url: "japan-j-league-cup-101",
    },
    {
      name: "Emperor Cup",
      logo: "https://media.api-sports.io/football/leagues/102.png",
      apiFootballId: 102,
      country: "Japan",
      url: "japan-emperor-cup-102",
    },
    {
      name: "Super League",
      logo: "https://media.api-sports.io/football/leagues/169.png",
      apiFootballId: 169,
      country: "China",
      url: "china-super-league-169",
    },
    {
      name: "League One",
      logo: "https://media.api-sports.io/football/leagues/170.png",
      apiFootballId: 170,
      country: "China",
      url: "china-league-one-170",
    },
    {
      name: "FA Cup",
      logo: "https://media.api-sports.io/football/leagues/171.png",
      apiFootballId: 171,
      country: "China",
      url: "china-fa-cup-171",
    },
    {
      name: "Süper Lig",
      logo: "https://media.api-sports.io/football/leagues/203.png",
      apiFootballId: 203,
      country: "Turkey",
      url: "turkey-süper-lig-203",
    },
    {
      name: "1. Lig",
      logo: "https://media.api-sports.io/football/leagues/204.png",
      apiFootballId: 204,
      country: "Turkey",
      url: "turkey-1-lig-204",
    },
    {
      name: "2. Lig",
      logo: "https://media.api-sports.io/football/leagues/205.png",
      apiFootballId: 205,
      country: "Turkey",
      url: "turkey-2-lig-205",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/206.png",
      apiFootballId: 206,
      country: "Turkey",
      url: "turkey-cup-206",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/235.png",
      apiFootballId: 235,
      country: "Russia",
      url: "russia-premier-league-235",
    },
    {
      name: "First League",
      logo: "https://media.api-sports.io/football/leagues/236.png",
      apiFootballId: 236,
      country: "Russia",
      url: "russia-first-league-236",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/237.png",
      apiFootballId: 237,
      country: "Russia",
      url: "russia-cup-237",
    },
    {
      name: "Youth Championship",
      logo: "https://media.api-sports.io/football/leagues/238.png",
      apiFootballId: 238,
      country: "Russia",
      url: "russia-youth-championship-238",
    },
    {
      name: "Liga 1",
      logo: "https://media.api-sports.io/football/leagues/274.png",
      apiFootballId: 274,
      country: "Indonesia",
      url: "indonesia-liga-1-274",
    },
    {
      name: "Liga 2",
      logo: "https://media.api-sports.io/football/leagues/275.png",
      apiFootballId: 275,
      country: "Indonesia",
      url: "indonesia-liga-2-275",
    },
    {
      name: "Super League",
      logo: "https://media.api-sports.io/football/leagues/278.png",
      apiFootballId: 278,
      country: "Malaysia",
      url: "malaysia-super-league-278",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/279.png",
      apiFootballId: 279,
      country: "Malaysia",
      url: "malaysia-premier-league-279",
    },
    {
      name: "Persian Gulf Pro League",
      logo: "https://media.api-sports.io/football/leagues/290.png",
      apiFootballId: 290,
      country: "Iran",
      url: "iran-persian-gulf-pro-league-290",
    },
    {
      name: "Azadegan League",
      logo: "https://media.api-sports.io/football/leagues/291.png",
      apiFootballId: 291,
      country: "Iran",
      url: "iran-azadegan-league-291",
    },
    {
      name: "K League 1",
      logo: "https://media.api-sports.io/football/leagues/292.png",
      apiFootballId: 292,
      country: "South-Korea",
      url: "south-korea-k-league-1-292",
    },
    {
      name: "K League 2",
      logo: "https://media.api-sports.io/football/leagues/293.png",
      apiFootballId: 293,
      country: "South-Korea",
      url: "south-korea-k-league-2-293",
    },
    {
      name: "FA Cup",
      logo: "https://media.api-sports.io/football/leagues/294.png",
      apiFootballId: 294,
      country: "South-Korea",
      url: "south-korea-fa-cup-294",
    },
    {
      name: "K3 League",
      logo: "https://media.api-sports.io/football/leagues/295.png",
      apiFootballId: 295,
      country: "South-Korea",
      url: "south-korea-k3-league-295",
    },
    {
      name: "Thai League 1",
      logo: "https://media.api-sports.io/football/leagues/296.png",
      apiFootballId: 296,
      country: "Thailand",
      url: "thailand-thai-league-1-296",
    },
    {
      name: "Thai League 2",
      logo: "https://media.api-sports.io/football/leagues/297.png",
      apiFootballId: 297,
      country: "Thailand",
      url: "thailand-thai-league-2-297",
    },
    {
      name: "FA Cup",
      logo: "https://media.api-sports.io/football/leagues/298.png",
      apiFootballId: 298,
      country: "Thailand",
      url: "thailand-fa-cup-298",
    },
    {
      name: "Pro League",
      logo: "https://media.api-sports.io/football/leagues/301.png",
      apiFootballId: 301,
      country: "United-Arab-Emirates",
      url: "united-arab-emirates-pro-league-301",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/302.png",
      apiFootballId: 302,
      country: "United-Arab-Emirates",
      url: "united-arab-emirates-league-cup-302",
    },
    {
      name: "Division 1",
      logo: "https://media.api-sports.io/football/leagues/303.png",
      apiFootballId: 303,
      country: "United-Arab-Emirates",
      url: "united-arab-emirates-division-1-303",
    },
    {
      name: "Stars League",
      logo: "https://media.api-sports.io/football/leagues/305.png",
      apiFootballId: 305,
      country: "Qatar",
      url: "qatar-stars-league-305",
    },
    {
      name: "Second Division",
      logo: "https://media.api-sports.io/football/leagues/306.png",
      apiFootballId: 306,
      country: "Qatar",
      url: "qatar-second-division-306",
    },
    {
      name: "Pro League",
      logo: "https://media.api-sports.io/football/leagues/307.png",
      apiFootballId: 307,
      country: "Saudi-Arabia",
      url: "saudi-arabia-pro-league-307",
    },
    {
      name: "Division 1",
      logo: "https://media.api-sports.io/football/leagues/308.png",
      apiFootballId: 308,
      country: "Saudi-Arabia",
      url: "saudi-arabia-division-1-308",
    },
    {
      name: "Division 2",
      logo: "https://media.api-sports.io/football/leagues/309.png",
      apiFootballId: 309,
      country: "Saudi-Arabia",
      url: "saudi-arabia-division-2-309",
    },
    {
      name: "Indian Super League",
      logo: "https://media.api-sports.io/football/leagues/323.png",
      apiFootballId: 323,
      country: "India",
      url: "india-indian-super-league-323",
    },
    {
      name: "I-League",
      logo: "https://media.api-sports.io/football/leagues/324.png",
      apiFootballId: 324,
      country: "India",
      url: "india-i-league-324",
    },
    {
      name: "Santosh Trophy",
      logo: "https://media.api-sports.io/football/leagues/325.png",
      apiFootballId: 325,
      country: "India",
      url: "india-santosh-trophy-325",
    },
    {
      name: "Erovnuli Liga 2",
      logo: "https://media.api-sports.io/football/leagues/326.png",
      apiFootballId: 326,
      country: "Georgia",
      url: "georgia-erovnuli-liga-2-326",
    },
    {
      name: "Erovnuli Liga",
      logo: "https://media.api-sports.io/football/leagues/327.png",
      apiFootballId: 327,
      country: "Georgia",
      url: "georgia-erovnuli-liga-327",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/330.png",
      apiFootballId: 330,
      country: "Kuwait",
      url: "kuwait-premier-league-330",
    },
    {
      name: "Division 1",
      logo: "https://media.api-sports.io/football/leagues/331.png",
      apiFootballId: 331,
      country: "Kuwait",
      url: "kuwait-division-1-331",
    },
    {
      name: "V.League 1",
      logo: "https://media.api-sports.io/football/leagues/340.png",
      apiFootballId: 340,
      country: "Vietnam",
      url: "vietnam-v-league-1-340",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/341.png",
      apiFootballId: 341,
      country: "Vietnam",
      url: "vietnam-cup-341",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/342.png",
      apiFootballId: 342,
      country: "Armenia",
      url: "armenia-premier-league-342",
    },
    {
      name: "First League",
      logo: "https://media.api-sports.io/football/leagues/343.png",
      apiFootballId: 343,
      country: "Armenia",
      url: "armenia-first-league-343",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/368.png",
      apiFootballId: 368,
      country: "Singapore",
      url: "singapore-premier-league-368",
    },
    {
      name: "Super League",
      logo: "https://media.api-sports.io/football/leagues/369.png",
      apiFootballId: 369,
      country: "Uzbekistan",
      url: "uzbekistan-super-league-369",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/380.png",
      apiFootballId: 380,
      country: "Hong-Kong",
      url: "hong-kong-premier-league-380",
    },
    {
      name: "HKFA 1st Division",
      logo: "https://media.api-sports.io/football/leagues/381.png",
      apiFootballId: 381,
      country: "Hong-Kong",
      url: "hong-kong-hkfa-1st-division-381",
    },
    {
      name: "Liga Leumit",
      logo: "https://media.api-sports.io/football/leagues/382.png",
      apiFootballId: 382,
      country: "Israel",
      url: "israel-liga-leumit-382",
    },
    {
      name: "Ligat Ha'al",
      logo: "https://media.api-sports.io/football/leagues/383.png",
      apiFootballId: 383,
      country: "Israel",
      url: "israel-ligat-haal-383",
    },
    {
      name: "State Cup",
      logo: "https://media.api-sports.io/football/leagues/384.png",
      apiFootballId: 384,
      country: "Israel",
      url: "israel-state-cup-384",
    },
    {
      name: "Toto Cup Ligat Al",
      logo: "https://media.api-sports.io/football/leagues/385.png",
      apiFootballId: 385,
      country: "Israel",
      url: "israel-toto-cup-ligat-al-385",
    },
    {
      name: "League",
      logo: "https://media.api-sports.io/football/leagues/387.png",
      apiFootballId: 387,
      country: "Jordan",
      url: "jordan-league-387",
    },
    {
      name: "1. Division",
      logo: "https://media.api-sports.io/football/leagues/388.png",
      apiFootballId: 388,
      country: "Kazakhstan",
      url: "kazakhstan-1-division-388",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/389.png",
      apiFootballId: 389,
      country: "Kazakhstan",
      url: "kazakhstan-premier-league-389",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/390.png",
      apiFootballId: 390,
      country: "Lebanon",
      url: "lebanon-premier-league-390",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/398.png",
      apiFootballId: 398,
      country: "Bangladesh",
      url: "bangladesh-premier-league-398",
    },
    {
      name: "Professional League",
      logo: "https://media.api-sports.io/football/leagues/406.png",
      apiFootballId: 406,
      country: "Oman",
      url: "oman-professional-league-406",
    },
    {
      name: "C-League",
      logo: "https://media.api-sports.io/football/leagues/410.png",
      apiFootballId: 410,
      country: "Cambodia",
      url: "cambodia-c-league-410",
    },
    {
      name: "Super League",
      logo: "https://media.api-sports.io/football/leagues/413.png",
      apiFootballId: 413,
      country: "Bhutan",
      url: "bhutan-super-league-413",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/417.png",
      apiFootballId: 417,
      country: "Bahrain",
      url: "bahrain-premier-league-417",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/420.png",
      apiFootballId: 420,
      country: "Azerbaidjan",
      url: "azerbaidjan-cup-420",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/425.png",
      apiFootballId: 425,
      country: "Syria",
      url: "syria-premier-league-425",
    },
    {
      name: "Federation Cup",
      logo: "https://media.api-sports.io/football/leagues/485.png",
      apiFootballId: 485,
      country: "Bahrain",
      url: "bahrain-federation-cup-485",
    },
    {
      name: "Hazfi Cup",
      logo: "https://media.api-sports.io/football/leagues/495.png",
      apiFootballId: 495,
      country: "Iran",
      url: "iran-hazfi-cup-495",
    },
    {
      name: "Liga Alef",
      logo: "https://media.api-sports.io/football/leagues/496.png",
      apiFootballId: 496,
      country: "Israel",
      url: "israel-liga-alef-496",
    },
    {
      name: "Japan Football League",
      logo: "https://media.api-sports.io/football/leagues/497.png",
      apiFootballId: 497,
      country: "Japan",
      url: "japan-japan-football-league-497",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/498.png",
      apiFootballId: 498,
      country: "Kazakhstan",
      url: "kazakhstan-cup-498",
    },
    {
      name: "Malaysia Cup",
      logo: "https://media.api-sports.io/football/leagues/499.png",
      apiFootballId: 499,
      country: "Malaysia",
      url: "malaysia-malaysia-cup-499",
    },
    {
      name: "FA Cup",
      logo: "https://media.api-sports.io/football/leagues/500.png",
      apiFootballId: 500,
      country: "Malaysia",
      url: "malaysia-fa-cup-500",
    },
    {
      name: "King's Cup",
      logo: "https://media.api-sports.io/football/leagues/504.png",
      apiFootballId: 504,
      country: "Saudi-Arabia",
      url: "saudi-arabia-kings-cup-504",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/505.png",
      apiFootballId: 505,
      country: "Singapore",
      url: "singapore-league-cup-505",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/530.png",
      apiFootballId: 530,
      country: "Georgia",
      url: "georgia-super-cup-530",
    },
    {
      name: "Iraqi League",
      logo: "https://media.api-sports.io/football/leagues/542.png",
      apiFootballId: 542,
      country: "Iraq",
      url: "iraq-iraqi-league-542",
    },
    {
      name: "FA Cup",
      logo: "https://media.api-sports.io/football/leagues/544.png",
      apiFootballId: 544,
      country: "Hong-Kong",
      url: "hong-kong-fa-cup-544",
    },
    {
      name: "AIFF Super Cup",
      logo: "https://media.api-sports.io/football/leagues/545.png",
      apiFootballId: 545,
      country: "India",
      url: "india-aiff-super-cup-545",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/548.png",
      apiFootballId: 548,
      country: "Japan",
      url: "japan-super-cup-548",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/551.png",
      apiFootballId: 551,
      country: "Turkey",
      url: "turkey-super-cup-551",
    },
    {
      name: "3. Lig - Group 1",
      logo: "https://media.api-sports.io/football/leagues/552.png",
      apiFootballId: 552,
      country: "Turkey",
      url: "turkey-3-lig-group-1-552",
    },
    {
      name: "3. Lig - Group 2",
      logo: "https://media.api-sports.io/football/leagues/553.png",
      apiFootballId: 553,
      country: "Turkey",
      url: "turkey-3-lig-group-2-553",
    },
    {
      name: "3. Lig - Group 3",
      logo: "https://media.api-sports.io/football/leagues/554.png",
      apiFootballId: 554,
      country: "Turkey",
      url: "turkey-3-lig-group-3-554",
    },
    {
      name: "Presidents Cup",
      logo: "https://media.api-sports.io/football/leagues/560.png",
      apiFootballId: 560,
      country: "United-Arab-Emirates",
      url: "united-arab-emirates-presidents-cup-560",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/569.png",
      apiFootballId: 569,
      country: "Kyrgyzstan",
      url: "kyrgyzstan-premier-league-569",
    },
    {
      name: "Vysshaya Liga",
      logo: "https://media.api-sports.io/football/leagues/571.png",
      apiFootballId: 571,
      country: "Tajikistan",
      url: "tajikistan-vysshaya-liga-571",
    },
    {
      name: "West Bank Premier League",
      logo: "https://media.api-sports.io/football/leagues/586.png",
      apiFootballId: 586,
      country: "Palestine",
      url: "palestine-west-bank-premier-league-586",
    },
    {
      name: "National League",
      logo: "https://media.api-sports.io/football/leagues/588.png",
      apiFootballId: 588,
      country: "Myanmar",
      url: "myanmar-national-league-588",
    },
    {
      name: "Taiwan Football Premier League",
      logo: "https://media.api-sports.io/football/leagues/589.png",
      apiFootballId: 589,
      country: "Chinese-Taipei",
      url: "chinese-taipei-taiwan-football-premier-league-589",
    },
    {
      name: "A Division",
      logo: "https://media.api-sports.io/football/leagues/590.png",
      apiFootballId: 590,
      country: "Nepal",
      url: "nepal-a-division-590",
    },
    {
      name: "Ýokary Liga",
      logo: "https://media.api-sports.io/football/leagues/636.png",
      apiFootballId: 636,
      country: "Turkmenistan",
      url: "turkmenistan-ýokary-liga-636",
    },
    {
      name: "V.League 2",
      logo: "https://media.api-sports.io/football/leagues/637.png",
      apiFootballId: 637,
      country: "Vietnam",
      url: "vietnam-v-league-2-637",
    },
    {
      name: "Lao League",
      logo: "https://media.api-sports.io/football/leagues/647.png",
      apiFootballId: 647,
      country: "Laos",
      url: "laos-lao-league-647",
    },
    {
      name: "Supreme Division Women",
      logo: "https://media.api-sports.io/football/leagues/649.png",
      apiFootballId: 649,
      country: "Russia",
      url: "russia-supreme-division-women-649",
    },
    {
      name: "Second League - Group 3",
      logo: "https://media.api-sports.io/football/leagues/650.png",
      apiFootballId: 650,
      country: "Russia",
      url: "russia-second-league-group-3-650",
    },
    {
      name: "Second League - Group 1",
      logo: "https://media.api-sports.io/football/leagues/651.png",
      apiFootballId: 651,
      country: "Russia",
      url: "russia-second-league-group-1-651",
    },
    {
      name: "Second League - Group 2",
      logo: "https://media.api-sports.io/football/leagues/652.png",
      apiFootballId: 652,
      country: "Russia",
      url: "russia-second-league-group-2-652",
    },
    {
      name: "Second League - Group 4",
      logo: "https://media.api-sports.io/football/leagues/653.png",
      apiFootballId: 653,
      country: "Russia",
      url: "russia-second-league-group-4-653",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/654.png",
      apiFootballId: 654,
      country: "Armenia",
      url: "armenia-super-cup-654",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/659.png",
      apiFootballId: 659,
      country: "Israel",
      url: "israel-super-cup-659",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/663.png",
      apiFootballId: 663,
      country: "Russia",
      url: "russia-super-cup-663",
    },
    {
      name: "David Kipiani Cup",
      logo: "https://media.api-sports.io/football/leagues/672.png",
      apiFootballId: 672,
      country: "Georgia",
      url: "georgia-david-kipiani-cup-672",
    },
    {
      name: "QSL Cup",
      logo: "https://media.api-sports.io/football/leagues/677.png",
      apiFootballId: 677,
      country: "Qatar",
      url: "qatar-qsl-cup-677",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/709.png",
      apiFootballId: 709,
      country: "Armenia",
      url: "armenia-cup-709",
    },
    {
      name: "Senior Shield",
      logo: "https://media.api-sports.io/football/leagues/716.png",
      apiFootballId: 716,
      country: "Hong-Kong",
      url: "hong-kong-senior-shield-716",
    },
    {
      name: "I-League - 2nd Division",
      logo: "https://media.api-sports.io/football/leagues/717.png",
      apiFootballId: 717,
      country: "India",
      url: "india-i-league-2nd-division-717",
    },
    {
      name: "Piala Indonesia",
      logo: "https://media.api-sports.io/football/leagues/718.png",
      apiFootballId: 718,
      country: "Indonesia",
      url: "indonesia-piala-indonesia-718",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/719.png",
      apiFootballId: 719,
      country: "Kuwait",
      url: "kuwait-super-cup-719",
    },
    {
      name: "Emir Cup",
      logo: "https://media.api-sports.io/football/leagues/720.png",
      apiFootballId: 720,
      country: "Kuwait",
      url: "kuwait-emir-cup-720",
    },
    {
      name: "Sultan Cup",
      logo: "https://media.api-sports.io/football/leagues/726.png",
      apiFootballId: 726,
      country: "Oman",
      url: "oman-sultan-cup-726",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/764.png",
      apiFootballId: 764,
      country: "Mongolia",
      url: "mongolia-premier-league-764",
    },
    {
      name: "PFL",
      logo: "https://media.api-sports.io/football/leagues/765.png",
      apiFootballId: 765,
      country: "Philippines",
      url: "philippines-pfl-765",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/802.png",
      apiFootballId: 802,
      country: "Uzbekistan",
      url: "uzbekistan-cup-802",
    },
    {
      name: "Federation Cup",
      logo: "https://media.api-sports.io/football/leagues/811.png",
      apiFootballId: 811,
      country: "Bangladesh",
      url: "bangladesh-federation-cup-811",
    },
    {
      name: "Shield Cup",
      logo: "https://media.api-sports.io/football/leagues/816.png",
      apiFootballId: 816,
      country: "Jordan",
      url: "jordan-shield-cup-816",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/818.png",
      apiFootballId: 818,
      country: "Kazakhstan",
      url: "kazakhstan-super-cup-818",
    },
    {
      name: "Crown Prince Cup",
      logo: "https://media.api-sports.io/football/leagues/820.png",
      apiFootballId: 820,
      country: "Kuwait",
      url: "kuwait-crown-prince-cup-820",
    },
    {
      name: "Emir Cup",
      logo: "https://media.api-sports.io/football/leagues/824.png",
      apiFootballId: 824,
      country: "Qatar",
      url: "qatar-emir-cup-824",
    },
    {
      name: "Qatar Cup",
      logo: "https://media.api-sports.io/football/leagues/825.png",
      apiFootballId: 825,
      country: "Qatar",
      url: "qatar-qatar-cup-825",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/826.png",
      apiFootballId: 826,
      country: "Saudi-Arabia",
      url: "saudi-arabia-super-cup-826",
    },
    {
      name: "Crown Prince Cup",
      logo: "https://media.api-sports.io/football/leagues/827.png",
      apiFootballId: 827,
      country: "Saudi-Arabia",
      url: "saudi-arabia-crown-prince-cup-827",
    },
    {
      name: "Youth League",
      logo: "https://media.api-sports.io/football/leagues/829.png",
      apiFootballId: 829,
      country: "Turkmenistan",
      url: "turkmenistan-youth-league-829",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/830.png",
      apiFootballId: 830,
      country: "Uzbekistan",
      url: "uzbekistan-super-cup-830",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/831.png",
      apiFootballId: 831,
      country: "Vietnam",
      url: "vietnam-super-cup-831",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/838.png",
      apiFootballId: 838,
      country: "Jordan",
      url: "jordan-super-cup-838",
    },
    {
      name: "QFA Cup",
      logo: "https://media.api-sports.io/football/leagues/841.png",
      apiFootballId: 841,
      country: "Qatar",
      url: "qatar-qfa-cup-841",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/852.png",
      apiFootballId: 852,
      country: "Cyprus",
      url: "cyprus-super-cup-852",
    },
    {
      name: "WE League",
      logo: "https://media.api-sports.io/football/leagues/854.png",
      apiFootballId: 854,
      country: "Japan",
      url: "japan-we-league-854",
    },
    {
      name: "Dhivehi Premier League",
      logo: "https://media.api-sports.io/football/leagues/855.png",
      apiFootballId: 855,
      country: "Maldives",
      url: "maldives-dhivehi-premier-league-855",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/863.png",
      apiFootballId: 863,
      country: "Jordan",
      url: "jordan-cup-863",
    },
    {
      name: "Copa Paulino Alcantara",
      logo: "https://media.api-sports.io/football/leagues/867.png",
      apiFootballId: 867,
      country: "Philippines",
      url: "philippines-copa-paulino-alcantara-867",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/868.png",
      apiFootballId: 868,
      country: "Pakistan",
      url: "pakistan-premier-league-868",
    },
    {
      name: "Thai Champions Cup",
      logo: "https://media.api-sports.io/football/leagues/873.png",
      apiFootballId: 873,
      country: "Thailand",
      url: "thailand-thai-champions-cup-873",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/896.png",
      apiFootballId: 896,
      country: "United-Arab-Emirates",
      url: "united-arab-emirates-super-cup-896",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/898.png",
      apiFootballId: 898,
      country: "Thailand",
      url: "thailand-league-cup-898",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/905.png",
      apiFootballId: 905,
      country: "Iran",
      url: "iran-super-cup-905",
    },
    {
      name: "Piala Presiden",
      logo: "https://media.api-sports.io/football/leagues/924.png",
      apiFootballId: 924,
      country: "Indonesia",
      url: "indonesia-piala-presiden-924",
    },
    {
      name: "League Two",
      logo: "https://media.api-sports.io/football/leagues/929.png",
      apiFootballId: 929,
      country: "China",
      url: "china-league-two-929",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/944.png",
      apiFootballId: 944,
      country: "Oman",
      url: "oman-super-cup-944",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/959.png",
      apiFootballId: 959,
      country: "Singapore",
      url: "singapore-cup-959",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/967.png",
      apiFootballId: 967,
      country: "Lebanon",
      url: "lebanon-cup-967",
    },
    {
      name: "Primeira Divisão",
      logo: "https://media.api-sports.io/football/leagues/969.png",
      apiFootballId: 969,
      country: "Macao",
      url: "macao-primeira-divisao-969",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/972.png",
      apiFootballId: 972,
      country: "China",
      url: "china-super-cup-972",
    },
    {
      name: "3. Lig - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1007.png",
      apiFootballId: 1007,
      country: "Turkey",
      url: "turkey-3-lig-play-offs-1007",
    },
    {
      name: "Federation Cup",
      logo: "https://media.api-sports.io/football/leagues/1018.png",
      apiFootballId: 1018,
      country: "Lebanon",
      url: "lebanon-federation-cup-1018",
    },
    {
      name: "Calcutta Premier Division",
      logo: "https://media.api-sports.io/football/leagues/1020.png",
      apiFootballId: 1020,
      country: "India",
      url: "india-calcutta-premier-division-1020",
    },
    {
      name: "Second League A - Fall Season Gold",
      logo: "https://media.api-sports.io/football/leagues/1025.png",
      apiFootballId: 1025,
      country: "Russia",
      url: "russia-second-league-a-fall-season-gold-1025",
    },
    {
      name: "Second League A - Fall Season Silver",
      logo: "https://media.api-sports.io/football/leagues/1026.png",
      apiFootballId: 1026,
      country: "Russia",
      url: "russia-second-league-a-fall-season-silver-1026",
    },
    {
      name: "3. Lig - Group 4",
      logo: "https://media.api-sports.io/football/leagues/1027.png",
      apiFootballId: 1027,
      country: "Turkey",
      url: "turkey-3-lig-group-4-1027",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/1031.png",
      apiFootballId: 1031,
      country: "Bhutan",
      url: "bhutan-premier-league-1031",
    },
    {
      name: "King's Cup",
      logo: "https://media.api-sports.io/football/leagues/1049.png",
      apiFootballId: 1049,
      country: "Bahrain",
      url: "bahrain-kings-cup-1049",
    },
    {
      name: "HKPL Cup",
      logo: "https://media.api-sports.io/football/leagues/1051.png",
      apiFootballId: 1051,
      country: "Hong-Kong",
      url: "hong-kong-hkpl-cup-1051",
    },
    {
      name: "Second League A - Spring Season Gold",
      logo: "https://media.api-sports.io/football/leagues/1061.png",
      apiFootballId: 1061,
      country: "Russia",
      url: "russia-second-league-a-spring-season-gold-1061",
    },
    {
      name: "Second League A - Spring Season Silver",
      logo: "https://media.api-sports.io/football/leagues/1064.png",
      apiFootballId: 1064,
      country: "Russia",
      url: "russia-second-league-a-spring-season-silver-1064",
    },
    {
      name: "Pro League A",
      logo: "https://media.api-sports.io/football/leagues/1075.png",
      apiFootballId: 1075,
      country: "Uzbekistan",
      url: "uzbekistan-pro-league-a-1075",
    },
    {
      name: "Yemeni League",
      logo: "https://media.api-sports.io/football/leagues/1079.png",
      apiFootballId: 1079,
      country: "Yemen",
      url: "yemen-yemeni-league-1079",
    },
    {
      name: "Liga 3",
      logo: "https://media.api-sports.io/football/leagues/1104.png",
      apiFootballId: 1104,
      country: "Georgia",
      url: "georgia-liga-3-1104",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/1109.png",
      apiFootballId: 1109,
      country: "Bahrain",
      url: "bahrain-super-cup-1109",
    },
    {
      name: "Second League A - Promotion Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1121.png",
      apiFootballId: 1121,
      country: "Russia",
      url: "russia-second-league-a-promotion-play-offs-1121",
    },
  ],
  Europe: [
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      apiFootballId: 39,
      country: "England",
      url: "england-premier-league-39",
    },
    {
      name: "Championship",
      logo: "https://media.api-sports.io/football/leagues/40.png",
      apiFootballId: 40,
      country: "England",
      url: "england-championship-40",
    },
    {
      name: "League One",
      logo: "https://media.api-sports.io/football/leagues/41.png",
      apiFootballId: 41,
      country: "England",
      url: "england-league-one-41",
    },
    {
      name: "League Two",
      logo: "https://media.api-sports.io/football/leagues/42.png",
      apiFootballId: 42,
      country: "England",
      url: "england-league-two-42",
    },
    {
      name: "National League",
      logo: "https://media.api-sports.io/football/leagues/43.png",
      apiFootballId: 43,
      country: "England",
      url: "england-national-league-43",
    },
    {
      name: "FA WSL",
      logo: "https://media.api-sports.io/football/leagues/44.png",
      apiFootballId: 44,
      country: "England",
      url: "england-fa-wsl-44",
    },
    {
      name: "FA Cup",
      logo: "https://media.api-sports.io/football/leagues/45.png",
      apiFootballId: 45,
      country: "England",
      url: "england-fa-cup-45",
    },
    {
      name: "EFL Trophy",
      logo: "https://media.api-sports.io/football/leagues/46.png",
      apiFootballId: 46,
      country: "England",
      url: "england-efl-trophy-46",
    },
    {
      name: "FA Trophy",
      logo: "https://media.api-sports.io/football/leagues/47.png",
      apiFootballId: 47,
      country: "England",
      url: "england-fa-trophy-47",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/48.png",
      apiFootballId: 48,
      country: "England",
      url: "england-league-cup-48",
    },
    {
      name: "National League - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/49.png",
      apiFootballId: 49,
      country: "England",
      url: "england-national-league-play-offs-49",
    },
    {
      name: "National League - North",
      logo: "https://media.api-sports.io/football/leagues/50.png",
      apiFootballId: 50,
      country: "England",
      url: "england-national-league-north-50",
    },
    {
      name: "National League - South",
      logo: "https://media.api-sports.io/football/leagues/51.png",
      apiFootballId: 51,
      country: "England",
      url: "england-national-league-south-51",
    },
    {
      name: "Non League Div One - Isthmian North",
      logo: "https://media.api-sports.io/football/leagues/52.png",
      apiFootballId: 52,
      country: "England",
      url: "england-non-league-div-one-isthmian-north-52",
    },
    {
      name: "Non League Div One - Isthmian South Central",
      logo: "https://media.api-sports.io/football/leagues/53.png",
      apiFootballId: 53,
      country: "England",
      url: "england-non-league-div-one-isthmian-south-central-53",
    },
    {
      name: "Non League Div One - Northern West",
      logo: "https://media.api-sports.io/football/leagues/54.png",
      apiFootballId: 54,
      country: "England",
      url: "england-non-league-div-one-northern-west-54",
    },
    {
      name: "Non League Div One - Northern Midlands",
      logo: "https://media.api-sports.io/football/leagues/55.png",
      apiFootballId: 55,
      country: "England",
      url: "england-non-league-div-one-northern-midlands-55",
    },
    {
      name: "Non League Div One - Southern South",
      logo: "https://media.api-sports.io/football/leagues/56.png",
      apiFootballId: 56,
      country: "England",
      url: "england-non-league-div-one-southern-south-56",
    },
    {
      name: "Non League Div One - Isthmian South East",
      logo: "https://media.api-sports.io/football/leagues/57.png",
      apiFootballId: 57,
      country: "England",
      url: "england-non-league-div-one-isthmian-south-east-57",
    },
    {
      name: "Non League Premier - Isthmian",
      logo: "https://media.api-sports.io/football/leagues/58.png",
      apiFootballId: 58,
      country: "England",
      url: "england-non-league-premier-isthmian-58",
    },
    {
      name: "Non League Premier - Northern",
      logo: "https://media.api-sports.io/football/leagues/59.png",
      apiFootballId: 59,
      country: "England",
      url: "england-non-league-premier-northern-59",
    },
    {
      name: "Non League Premier - Southern South",
      logo: "https://media.api-sports.io/football/leagues/60.png",
      apiFootballId: 60,
      country: "England",
      url: "england-non-league-premier-southern-south-60",
    },
    {
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/61.png",
      apiFootballId: 61,
      country: "France",
      url: "france-ligue-1-61",
    },
    {
      name: "Ligue 2",
      logo: "https://media.api-sports.io/football/leagues/62.png",
      apiFootballId: 62,
      country: "France",
      url: "france-ligue-2-62",
    },
    {
      name: "National 1",
      logo: "https://media.api-sports.io/football/leagues/63.png",
      apiFootballId: 63,
      country: "France",
      url: "france-national-1-63",
    },
    {
      name: "Feminine Division 1",
      logo: "https://media.api-sports.io/football/leagues/64.png",
      apiFootballId: 64,
      country: "France",
      url: "france-feminine-division-1-64",
    },
    {
      name: "Coupe de la Ligue",
      logo: "https://media.api-sports.io/football/leagues/65.png",
      apiFootballId: 65,
      country: "France",
      url: "france-coupe-de-la-ligue-65",
    },
    {
      name: "Coupe de France",
      logo: "https://media.api-sports.io/football/leagues/66.png",
      apiFootballId: 66,
      country: "France",
      url: "france-coupe-de-france-66",
    },
    {
      name: "National 2 - Group A",
      logo: "https://media.api-sports.io/football/leagues/67.png",
      apiFootballId: 67,
      country: "France",
      url: "france-national-2-group-a-67",
    },
    {
      name: "National 2 - Group B",
      logo: "https://media.api-sports.io/football/leagues/68.png",
      apiFootballId: 68,
      country: "France",
      url: "france-national-2-group-b-68",
    },
    {
      name: "National 2 - Group C",
      logo: "https://media.api-sports.io/football/leagues/69.png",
      apiFootballId: 69,
      country: "France",
      url: "france-national-2-group-c-69",
    },
    {
      name: "National 2 - Group D",
      logo: "https://media.api-sports.io/football/leagues/70.png",
      apiFootballId: 70,
      country: "France",
      url: "france-national-2-group-d-70",
    },
    {
      name: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/78.png",
      apiFootballId: 78,
      country: "Germany",
      url: "germany-bundesliga-78",
    },
    {
      name: "2. Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/79.png",
      apiFootballId: 79,
      country: "Germany",
      url: "germany-2-bundesliga-79",
    },
    {
      name: "3. Liga",
      logo: "https://media.api-sports.io/football/leagues/80.png",
      apiFootballId: 80,
      country: "Germany",
      url: "germany-3-liga-80",
    },
    {
      name: "DFB Pokal",
      logo: "https://media.api-sports.io/football/leagues/81.png",
      apiFootballId: 81,
      country: "Germany",
      url: "germany-dfb-pokal-81",
    },
    {
      name: "Frauen Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/82.png",
      apiFootballId: 82,
      country: "Germany",
      url: "germany-frauen-bundesliga-82",
    },
    {
      name: "Regionalliga - Bayern",
      logo: "https://media.api-sports.io/football/leagues/83.png",
      apiFootballId: 83,
      country: "Germany",
      url: "germany-regionalliga-bayern-83",
    },
    {
      name: "Regionalliga - Nord",
      logo: "https://media.api-sports.io/football/leagues/84.png",
      apiFootballId: 84,
      country: "Germany",
      url: "germany-regionalliga-nord-84",
    },
    {
      name: "Regionalliga - Nordost",
      logo: "https://media.api-sports.io/football/leagues/85.png",
      apiFootballId: 85,
      country: "Germany",
      url: "germany-regionalliga-nordost-85",
    },
    {
      name: "Regionalliga - SudWest",
      logo: "https://media.api-sports.io/football/leagues/86.png",
      apiFootballId: 86,
      country: "Germany",
      url: "germany-regionalliga-sudwest-86",
    },
    {
      name: "Regionalliga - West",
      logo: "https://media.api-sports.io/football/leagues/87.png",
      apiFootballId: 87,
      country: "Germany",
      url: "germany-regionalliga-west-87",
    },
    {
      name: "Eredivisie",
      logo: "https://media.api-sports.io/football/leagues/88.png",
      apiFootballId: 88,
      country: "Netherlands",
      url: "netherlands-eredivisie-88",
    },
    {
      name: "Eerste Divisie",
      logo: "https://media.api-sports.io/football/leagues/89.png",
      apiFootballId: 89,
      country: "Netherlands",
      url: "netherlands-eerste-divisie-89",
    },
    {
      name: "KNVB Beker",
      logo: "https://media.api-sports.io/football/leagues/90.png",
      apiFootballId: 90,
      country: "Netherlands",
      url: "netherlands-knvb-beker-90",
    },
    {
      name: "Eredivisie Women",
      logo: "https://media.api-sports.io/football/leagues/91.png",
      apiFootballId: 91,
      country: "Netherlands",
      url: "netherlands-eredivisie-women-91",
    },
    {
      name: "Derde Divisie - Saturday",
      logo: "https://media.api-sports.io/football/leagues/92.png",
      apiFootballId: 92,
      country: "Netherlands",
      url: "netherlands-derde-divisie-saturday-92",
    },
    {
      name: "Derde Divisie - Sunday",
      logo: "https://media.api-sports.io/football/leagues/93.png",
      apiFootballId: 93,
      country: "Netherlands",
      url: "netherlands-derde-divisie-sunday-93",
    },
    {
      name: "Primeira Liga",
      logo: "https://media.api-sports.io/football/leagues/94.png",
      apiFootballId: 94,
      country: "Portugal",
      url: "portugal-primeira-liga-94",
    },
    {
      name: "Segunda Liga",
      logo: "https://media.api-sports.io/football/leagues/95.png",
      apiFootballId: 95,
      country: "Portugal",
      url: "portugal-segunda-liga-95",
    },
    {
      name: "Taça de Portugal",
      logo: "https://media.api-sports.io/football/leagues/96.png",
      apiFootballId: 96,
      country: "Portugal",
      url: "portugal-taça-de-portugal-96",
    },
    {
      name: "Taça da Liga",
      logo: "https://media.api-sports.io/football/leagues/97.png",
      apiFootballId: 97,
      country: "Portugal",
      url: "portugal-taça-da-liga-97",
    },
    {
      name: "Eliteserien",
      logo: "https://media.api-sports.io/football/leagues/103.png",
      apiFootballId: 103,
      country: "Norway",
      url: "norway-eliteserien-103",
    },
    {
      name: "1. Division",
      logo: "https://media.api-sports.io/football/leagues/104.png",
      apiFootballId: 104,
      country: "Norway",
      url: "norway-1-division-104",
    },
    {
      name: "NM Cupen",
      logo: "https://media.api-sports.io/football/leagues/105.png",
      apiFootballId: 105,
      country: "Norway",
      url: "norway-nm-cupen-105",
    },
    {
      name: "Ekstraklasa",
      logo: "https://media.api-sports.io/football/leagues/106.png",
      apiFootballId: 106,
      country: "Poland",
      url: "poland-ekstraklasa-106",
    },
    {
      name: "I Liga",
      logo: "https://media.api-sports.io/football/leagues/107.png",
      apiFootballId: 107,
      country: "Poland",
      url: "poland-i-liga-107",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/108.png",
      apiFootballId: 108,
      country: "Poland",
      url: "poland-cup-108",
    },
    {
      name: "II Liga - East",
      logo: "https://media.api-sports.io/football/leagues/109.png",
      apiFootballId: 109,
      country: "Poland",
      url: "poland-ii-liga-east-109",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/110.png",
      apiFootballId: 110,
      country: "Wales",
      url: "wales-premier-league-110",
    },
    {
      name: "FAW Championship",
      logo: "https://media.api-sports.io/football/leagues/111.png",
      apiFootballId: 111,
      country: "Wales",
      url: "wales-faw-championship-111",
    },
    {
      name: "Welsh Cup",
      logo: "https://media.api-sports.io/football/leagues/112.png",
      apiFootballId: 112,
      country: "Wales",
      url: "wales-welsh-cup-112",
    },
    {
      name: "Allsvenskan",
      logo: "https://media.api-sports.io/football/leagues/113.png",
      apiFootballId: 113,
      country: "Sweden",
      url: "sweden-allsvenskan-113",
    },
    {
      name: "Superettan",
      logo: "https://media.api-sports.io/football/leagues/114.png",
      apiFootballId: 114,
      country: "Sweden",
      url: "sweden-superettan-114",
    },
    {
      name: "Svenska Cupen",
      logo: "https://media.api-sports.io/football/leagues/115.png",
      apiFootballId: 115,
      country: "Sweden",
      url: "sweden-svenska-cupen-115",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/116.png",
      apiFootballId: 116,
      country: "Belarus",
      url: "belarus-premier-league-116",
    },
    {
      name: "1. Division",
      logo: "https://media.api-sports.io/football/leagues/117.png",
      apiFootballId: 117,
      country: "Belarus",
      url: "belarus-1-division-117",
    },
    {
      name: "2. Division",
      logo: "https://media.api-sports.io/football/leagues/118.png",
      apiFootballId: 118,
      country: "Belarus",
      url: "belarus-2-division-118",
    },
    {
      name: "Superliga",
      logo: "https://media.api-sports.io/football/leagues/119.png",
      apiFootballId: 119,
      country: "Denmark",
      url: "denmark-superliga-119",
    },
    {
      name: "1. Division",
      logo: "https://media.api-sports.io/football/leagues/120.png",
      apiFootballId: 120,
      country: "Denmark",
      url: "denmark-1-division-120",
    },
    {
      name: "DBU Pokalen",
      logo: "https://media.api-sports.io/football/leagues/121.png",
      apiFootballId: 121,
      country: "Denmark",
      url: "denmark-dbu-pokalen-121",
    },
    {
      name: "2nd Division - Group 1",
      logo: "https://media.api-sports.io/football/leagues/122.png",
      apiFootballId: 122,
      country: "Denmark",
      url: "denmark-2nd-division-group-1-122",
    },
    {
      name: "2nd Division - Group 2",
      logo: "https://media.api-sports.io/football/leagues/123.png",
      apiFootballId: 123,
      country: "Denmark",
      url: "denmark-2nd-division-group-2-123",
    },
    {
      name: "Denmark Series - Group 1",
      logo: "https://media.api-sports.io/football/leagues/124.png",
      apiFootballId: 124,
      country: "Denmark",
      url: "denmark-denmark-series-group-1-124",
    },
    {
      name: "Denmark Series - Group 2",
      logo: "https://media.api-sports.io/football/leagues/125.png",
      apiFootballId: 125,
      country: "Denmark",
      url: "denmark-denmark-series-group-2-125",
    },
    {
      name: "Denmark Series - Group 3",
      logo: "https://media.api-sports.io/football/leagues/126.png",
      apiFootballId: 126,
      country: "Denmark",
      url: "denmark-denmark-series-group-3-126",
    },
    {
      name: "Denmark Series - Group 4",
      logo: "https://media.api-sports.io/football/leagues/127.png",
      apiFootballId: 127,
      country: "Denmark",
      url: "denmark-denmark-series-group-4-127",
    },
    {
      name: "Serie A",
      logo: "https://media.api-sports.io/football/leagues/135.png",
      apiFootballId: 135,
      country: "Italy",
      url: "italy-serie-a-135",
    },
    {
      name: "Serie B",
      logo: "https://media.api-sports.io/football/leagues/136.png",
      apiFootballId: 136,
      country: "Italy",
      url: "italy-serie-b-136",
    },
    {
      name: "Coppa Italia",
      logo: "https://media.api-sports.io/football/leagues/137.png",
      apiFootballId: 137,
      country: "Italy",
      url: "italy-coppa-italia-137",
    },
    {
      name: "Serie C - Girone A",
      logo: "https://media.api-sports.io/football/leagues/138.png",
      apiFootballId: 138,
      country: "Italy",
      url: "italy-serie-c-girone-a-138",
    },
    {
      name: "Serie A Women",
      logo: "https://media.api-sports.io/football/leagues/139.png",
      apiFootballId: 139,
      country: "Italy",
      url: "italy-serie-a-women-139",
    },
    {
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png",
      apiFootballId: 140,
      country: "Spain",
      url: "spain-la-liga-140",
    },
    {
      name: "Segunda División",
      logo: "https://media.api-sports.io/football/leagues/141.png",
      apiFootballId: 141,
      country: "Spain",
      url: "spain-segunda-división-141",
    },
    {
      name: "Primera División Femenina",
      logo: "https://media.api-sports.io/football/leagues/142.png",
      apiFootballId: 142,
      country: "Spain",
      url: "spain-primera-división-femenina-142",
    },
    {
      name: "Copa del Rey",
      logo: "https://media.api-sports.io/football/leagues/143.png",
      apiFootballId: 143,
      country: "Spain",
      url: "spain-copa-del-rey-143",
    },
    {
      name: "Jupiler Pro League",
      logo: "https://media.api-sports.io/football/leagues/144.png",
      apiFootballId: 144,
      country: "Belgium",
      url: "belgium-jupiler-pro-league-144",
    },
    {
      name: "Challenger Pro League",
      logo: "https://media.api-sports.io/football/leagues/145.png",
      apiFootballId: 145,
      country: "Belgium",
      url: "belgium-challenger-pro-league-145",
    },
    {
      name: "Super League Women",
      logo: "https://media.api-sports.io/football/leagues/146.png",
      apiFootballId: 146,
      country: "Belgium",
      url: "belgium-super-league-women-146",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/147.png",
      apiFootballId: 147,
      country: "Belgium",
      url: "belgium-cup-147",
    },
    {
      name: "Second Amateur Division - ACFF",
      logo: "https://media.api-sports.io/football/leagues/148.png",
      apiFootballId: 148,
      country: "Belgium",
      url: "belgium-second-amateur-division-acff-148",
    },
    {
      name: "Second Amateur Division - VFV A",
      logo: "https://media.api-sports.io/football/leagues/149.png",
      apiFootballId: 149,
      country: "Belgium",
      url: "belgium-second-amateur-division-vfv-a-149",
    },
    {
      name: "Second Amateur Division - VFV B",
      logo: "https://media.api-sports.io/football/leagues/150.png",
      apiFootballId: 150,
      country: "Belgium",
      url: "belgium-second-amateur-division-vfv-b-150",
    },
    {
      name: "Third Amateur Division - VFV A",
      logo: "https://media.api-sports.io/football/leagues/151.png",
      apiFootballId: 151,
      country: "Belgium",
      url: "belgium-third-amateur-division-vfv-a-151",
    },
    {
      name: "Third Amateur Division - VFV B",
      logo: "https://media.api-sports.io/football/leagues/152.png",
      apiFootballId: 152,
      country: "Belgium",
      url: "belgium-third-amateur-division-vfv-b-152",
    },
    {
      name: "Provincial - Antwerpen",
      logo: "https://media.api-sports.io/football/leagues/153.png",
      apiFootballId: 153,
      country: "Belgium",
      url: "belgium-provincial-antwerpen-153",
    },
    {
      name: "Provincial - Brabant VFV",
      logo: "https://media.api-sports.io/football/leagues/154.png",
      apiFootballId: 154,
      country: "Belgium",
      url: "belgium-provincial-brabant-vfv-154",
    },
    {
      name: "Provincial - Hainaut",
      logo: "https://media.api-sports.io/football/leagues/155.png",
      apiFootballId: 155,
      country: "Belgium",
      url: "belgium-provincial-hainaut-155",
    },
    {
      name: "Provincial - Liege",
      logo: "https://media.api-sports.io/football/leagues/156.png",
      apiFootballId: 156,
      country: "Belgium",
      url: "belgium-provincial-liege-156",
    },
    {
      name: "Provincial - Limburg",
      logo: "https://media.api-sports.io/football/leagues/157.png",
      apiFootballId: 157,
      country: "Belgium",
      url: "belgium-provincial-limburg-157",
    },
    {
      name: "Provincial - Luxembourg",
      logo: "https://media.api-sports.io/football/leagues/158.png",
      apiFootballId: 158,
      country: "Belgium",
      url: "belgium-provincial-luxembourg-158",
    },
    {
      name: "Provincial - Namur",
      logo: "https://media.api-sports.io/football/leagues/159.png",
      apiFootballId: 159,
      country: "Belgium",
      url: "belgium-provincial-namur-159",
    },
    {
      name: "Provincial - Oost-Vlaanderen",
      logo: "https://media.api-sports.io/football/leagues/160.png",
      apiFootballId: 160,
      country: "Belgium",
      url: "belgium-provincial-oost-vlaanderen-160",
    },
    {
      name: "Provincial - West-Vlaanderen",
      logo: "https://media.api-sports.io/football/leagues/161.png",
      apiFootballId: 161,
      country: "Belgium",
      url: "belgium-provincial-west-vlaanderen-161",
    },
    {
      name: "Úrvalsdeild",
      logo: "https://media.api-sports.io/football/leagues/164.png",
      apiFootballId: 164,
      country: "Iceland",
      url: "iceland-úrvalsdeild-164",
    },
    {
      name: "1. Deild",
      logo: "https://media.api-sports.io/football/leagues/165.png",
      apiFootballId: 165,
      country: "Iceland",
      url: "iceland-1-deild-165",
    },
    {
      name: "2. Deild",
      logo: "https://media.api-sports.io/football/leagues/166.png",
      apiFootballId: 166,
      country: "Iceland",
      url: "iceland-2-deild-166",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/167.png",
      apiFootballId: 167,
      country: "Iceland",
      url: "iceland-cup-167",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/168.png",
      apiFootballId: 168,
      country: "Iceland",
      url: "iceland-league-cup-168",
    },
    {
      name: "First League",
      logo: "https://media.api-sports.io/football/leagues/172.png",
      apiFootballId: 172,
      country: "Bulgaria",
      url: "bulgaria-first-league-172",
    },
    {
      name: "Second League",
      logo: "https://media.api-sports.io/football/leagues/173.png",
      apiFootballId: 173,
      country: "Bulgaria",
      url: "bulgaria-second-league-173",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/174.png",
      apiFootballId: 174,
      country: "Bulgaria",
      url: "bulgaria-cup-174",
    },
    {
      name: "Third League - Northeast",
      logo: "https://media.api-sports.io/football/leagues/175.png",
      apiFootballId: 175,
      country: "Bulgaria",
      url: "bulgaria-third-league-northeast-175",
    },
    {
      name: "Third League - Northwest",
      logo: "https://media.api-sports.io/football/leagues/176.png",
      apiFootballId: 176,
      country: "Bulgaria",
      url: "bulgaria-third-league-northwest-176",
    },
    {
      name: "Third League - Southeast",
      logo: "https://media.api-sports.io/football/leagues/177.png",
      apiFootballId: 177,
      country: "Bulgaria",
      url: "bulgaria-third-league-southeast-177",
    },
    {
      name: "Third League - Southwest",
      logo: "https://media.api-sports.io/football/leagues/178.png",
      apiFootballId: 178,
      country: "Bulgaria",
      url: "bulgaria-third-league-southwest-178",
    },
    {
      name: "Premiership",
      logo: "https://media.api-sports.io/football/leagues/179.png",
      apiFootballId: 179,
      country: "Scotland",
      url: "scotland-premiership-179",
    },
    {
      name: "Championship",
      logo: "https://media.api-sports.io/football/leagues/180.png",
      apiFootballId: 180,
      country: "Scotland",
      url: "scotland-championship-180",
    },
    {
      name: "FA Cup",
      logo: "https://media.api-sports.io/football/leagues/181.png",
      apiFootballId: 181,
      country: "Scotland",
      url: "scotland-fa-cup-181",
    },
    {
      name: "Challenge Cup",
      logo: "https://media.api-sports.io/football/leagues/182.png",
      apiFootballId: 182,
      country: "Scotland",
      url: "scotland-challenge-cup-182",
    },
    {
      name: "League One",
      logo: "https://media.api-sports.io/football/leagues/183.png",
      apiFootballId: 183,
      country: "Scotland",
      url: "scotland-league-one-183",
    },
    {
      name: "League Two",
      logo: "https://media.api-sports.io/football/leagues/184.png",
      apiFootballId: 184,
      country: "Scotland",
      url: "scotland-league-two-184",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/185.png",
      apiFootballId: 185,
      country: "Scotland",
      url: "scotland-league-cup-185",
    },
    {
      name: "Super League 1",
      logo: "https://media.api-sports.io/football/leagues/197.png",
      apiFootballId: 197,
      country: "Greece",
      url: "greece-super-league-1-197",
    },
    {
      name: "Football League",
      logo: "https://media.api-sports.io/football/leagues/198.png",
      apiFootballId: 198,
      country: "Greece",
      url: "greece-football-league-198",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/199.png",
      apiFootballId: 199,
      country: "Greece",
      url: "greece-cup-199",
    },
    {
      name: "Super League",
      logo: "https://media.api-sports.io/football/leagues/207.png",
      apiFootballId: 207,
      country: "Switzerland",
      url: "switzerland-super-league-207",
    },
    {
      name: "Challenge League",
      logo: "https://media.api-sports.io/football/leagues/208.png",
      apiFootballId: 208,
      country: "Switzerland",
      url: "switzerland-challenge-league-208",
    },
    {
      name: "Schweizer Cup",
      logo: "https://media.api-sports.io/football/leagues/209.png",
      apiFootballId: 209,
      country: "Switzerland",
      url: "switzerland-schweizer-cup-209",
    },
    {
      name: "HNL",
      logo: "https://media.api-sports.io/football/leagues/210.png",
      apiFootballId: 210,
      country: "Croatia",
      url: "croatia-hnl-210",
    },
    {
      name: "First NL",
      logo: "https://media.api-sports.io/football/leagues/211.png",
      apiFootballId: 211,
      country: "Croatia",
      url: "croatia-first-nl-211",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/212.png",
      apiFootballId: 212,
      country: "Croatia",
      url: "croatia-cup-212",
    },
    {
      name: "Third NL - Istok",
      logo: "https://media.api-sports.io/football/leagues/213.png",
      apiFootballId: 213,
      country: "Croatia",
      url: "croatia-third-nl-istok-213",
    },
    {
      name: "Third NL - Jug",
      logo: "https://media.api-sports.io/football/leagues/214.png",
      apiFootballId: 214,
      country: "Croatia",
      url: "croatia-third-nl-jug-214",
    },
    {
      name: "Third NL - Sjever",
      logo: "https://media.api-sports.io/football/leagues/215.png",
      apiFootballId: 215,
      country: "Croatia",
      url: "croatia-third-nl-sjever-215",
    },
    {
      name: "Third NL - Sredite",
      logo: "https://media.api-sports.io/football/leagues/216.png",
      apiFootballId: 216,
      country: "Croatia",
      url: "croatia-third-nl-sredite-216",
    },
    {
      name: "Third NL - Zapad",
      logo: "https://media.api-sports.io/football/leagues/217.png",
      apiFootballId: 217,
      country: "Croatia",
      url: "croatia-third-nl-zapad-217",
    },
    {
      name: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/218.png",
      apiFootballId: 218,
      country: "Austria",
      url: "austria-bundesliga-218",
    },
    {
      name: "2. Liga",
      logo: "https://media.api-sports.io/football/leagues/219.png",
      apiFootballId: 219,
      country: "Austria",
      url: "austria-2-liga-219",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/220.png",
      apiFootballId: 220,
      country: "Austria",
      url: "austria-cup-220",
    },
    {
      name: "Regionalliga - Ost",
      logo: "https://media.api-sports.io/football/leagues/221.png",
      apiFootballId: 221,
      country: "Austria",
      url: "austria-regionalliga-ost-221",
    },
    {
      name: "Regionalliga - Mitte",
      logo: "https://media.api-sports.io/football/leagues/222.png",
      apiFootballId: 222,
      country: "Austria",
      url: "austria-regionalliga-mitte-222",
    },
    {
      name: "Regionalliga - West",
      logo: "https://media.api-sports.io/football/leagues/223.png",
      apiFootballId: 223,
      country: "Austria",
      url: "austria-regionalliga-west-223",
    },
    {
      name: "Landesliga - Burgenland",
      logo: "https://media.api-sports.io/football/leagues/224.png",
      apiFootballId: 224,
      country: "Austria",
      url: "austria-landesliga-burgenland-224",
    },
    {
      name: "Landesliga - Karnten",
      logo: "https://media.api-sports.io/football/leagues/225.png",
      apiFootballId: 225,
      country: "Austria",
      url: "austria-landesliga-karnten-225",
    },
    {
      name: "Landesliga - Niederosterreich",
      logo: "https://media.api-sports.io/football/leagues/226.png",
      apiFootballId: 226,
      country: "Austria",
      url: "austria-landesliga-niederosterreich-226",
    },
    {
      name: "Landesliga - Oberosterreich",
      logo: "https://media.api-sports.io/football/leagues/227.png",
      apiFootballId: 227,
      country: "Austria",
      url: "austria-landesliga-oberosterreich-227",
    },
    {
      name: "Landesliga - Salzburg",
      logo: "https://media.api-sports.io/football/leagues/228.png",
      apiFootballId: 228,
      country: "Austria",
      url: "austria-landesliga-salzburg-228",
    },
    {
      name: "Landesliga - Steiermark",
      logo: "https://media.api-sports.io/football/leagues/229.png",
      apiFootballId: 229,
      country: "Austria",
      url: "austria-landesliga-steiermark-229",
    },
    {
      name: "Landesliga - Tirol",
      logo: "https://media.api-sports.io/football/leagues/230.png",
      apiFootballId: 230,
      country: "Austria",
      url: "austria-landesliga-tirol-230",
    },
    {
      name: "Landesliga - Vorarlbergliga",
      logo: "https://media.api-sports.io/football/leagues/231.png",
      apiFootballId: 231,
      country: "Austria",
      url: "austria-landesliga-vorarlbergliga-231",
    },
    {
      name: "Landesliga - Wien",
      logo: "https://media.api-sports.io/football/leagues/232.png",
      apiFootballId: 232,
      country: "Austria",
      url: "austria-landesliga-wien-232",
    },
    {
      name: "Veikkausliiga",
      logo: "https://media.api-sports.io/football/leagues/244.png",
      apiFootballId: 244,
      country: "Finland",
      url: "finland-veikkausliiga-244",
    },
    {
      name: "Ykkönen",
      logo: "https://media.api-sports.io/football/leagues/245.png",
      apiFootballId: 245,
      country: "Finland",
      url: "finland-ykkönen-245",
    },
    {
      name: "Suomen Cup",
      logo: "https://media.api-sports.io/football/leagues/246.png",
      apiFootballId: 246,
      country: "Finland",
      url: "finland-suomen-cup-246",
    },
    {
      name: "Kakkonen - Lohko A",
      logo: "https://media.api-sports.io/football/leagues/247.png",
      apiFootballId: 247,
      country: "Finland",
      url: "finland-kakkonen-lohko-a-247",
    },
    {
      name: "Kakkonen - Lohko B",
      logo: "https://media.api-sports.io/football/leagues/248.png",
      apiFootballId: 248,
      country: "Finland",
      url: "finland-kakkonen-lohko-b-248",
    },
    {
      name: "Kakkonen - Lohko C",
      logo: "https://media.api-sports.io/football/leagues/249.png",
      apiFootballId: 249,
      country: "Finland",
      url: "finland-kakkonen-lohko-c-249",
    },
    {
      name: "National Division",
      logo: "https://media.api-sports.io/football/leagues/261.png",
      apiFootballId: 261,
      country: "Luxembourg",
      url: "luxembourg-national-division-261",
    },
    {
      name: "NB I",
      logo: "https://media.api-sports.io/football/leagues/271.png",
      apiFootballId: 271,
      country: "Hungary",
      url: "hungary-nb-i-271",
    },
    {
      name: "NB II",
      logo: "https://media.api-sports.io/football/leagues/272.png",
      apiFootballId: 272,
      country: "Hungary",
      url: "hungary-nb-ii-272",
    },
    {
      name: "Magyar Kupa",
      logo: "https://media.api-sports.io/football/leagues/273.png",
      apiFootballId: 273,
      country: "Hungary",
      url: "hungary-magyar-kupa-273",
    },
    {
      name: "Liga I",
      logo: "https://media.api-sports.io/football/leagues/283.png",
      apiFootballId: 283,
      country: "Romania",
      url: "romania-liga-i-283",
    },
    {
      name: "Liga II",
      logo: "https://media.api-sports.io/football/leagues/284.png",
      apiFootballId: 284,
      country: "Romania",
      url: "romania-liga-ii-284",
    },
    {
      name: "Cupa României",
      logo: "https://media.api-sports.io/football/leagues/285.png",
      apiFootballId: 285,
      country: "Romania",
      url: "romania-cupa-româniei-285",
    },
    {
      name: "Super Liga",
      logo: "https://media.api-sports.io/football/leagues/286.png",
      apiFootballId: 286,
      country: "Serbia",
      url: "serbia-super-liga-286",
    },
    {
      name: "Prva Liga",
      logo: "https://media.api-sports.io/football/leagues/287.png",
      apiFootballId: 287,
      country: "Serbia",
      url: "serbia-prva-liga-287",
    },
    {
      name: "Superliga",
      logo: "https://media.api-sports.io/football/leagues/310.png",
      apiFootballId: 310,
      country: "Albania",
      url: "albania-superliga-310",
    },
    {
      name: "1st Division",
      logo: "https://media.api-sports.io/football/leagues/311.png",
      apiFootballId: 311,
      country: "Albania",
      url: "albania-1st-division-311",
    },
    {
      name: "1a Divisió",
      logo: "https://media.api-sports.io/football/leagues/312.png",
      apiFootballId: 312,
      country: "Andorra",
      url: "andorra-1a-divisió-312",
    },
    {
      name: "2a Divisió",
      logo: "https://media.api-sports.io/football/leagues/313.png",
      apiFootballId: 313,
      country: "Andorra",
      url: "andorra-2a-divisió-313",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/314.png",
      apiFootballId: 314,
      country: "Bosnia",
      url: "bosnia-cup-314",
    },
    {
      name: "Premijer Liga",
      logo: "https://media.api-sports.io/football/leagues/315.png",
      apiFootballId: 315,
      country: "Bosnia",
      url: "bosnia-premijer-liga-315",
    },
    {
      name: "1st League - FBiH",
      logo: "https://media.api-sports.io/football/leagues/316.png",
      apiFootballId: 316,
      country: "Bosnia",
      url: "bosnia-1st-league-fbih-316",
    },
    {
      name: "1st League - RS",
      logo: "https://media.api-sports.io/football/leagues/317.png",
      apiFootballId: 317,
      country: "Bosnia",
      url: "bosnia-1st-league-rs-317",
    },
    {
      name: "1. Division",
      logo: "https://media.api-sports.io/football/leagues/318.png",
      apiFootballId: 318,
      country: "Cyprus",
      url: "cyprus-1-division-318",
    },
    {
      name: "2. Division",
      logo: "https://media.api-sports.io/football/leagues/319.png",
      apiFootballId: 319,
      country: "Cyprus",
      url: "cyprus-2-division-319",
    },
    {
      name: "3. Division",
      logo: "https://media.api-sports.io/football/leagues/320.png",
      apiFootballId: 320,
      country: "Cyprus",
      url: "cyprus-3-division-320",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/321.png",
      apiFootballId: 321,
      country: "Cyprus",
      url: "cyprus-cup-321",
    },
    {
      name: "Esiliiga A",
      logo: "https://media.api-sports.io/football/leagues/328.png",
      apiFootballId: 328,
      country: "Estonia",
      url: "estonia-esiliiga-a-328",
    },
    {
      name: "Meistriliiga",
      logo: "https://media.api-sports.io/football/leagues/329.png",
      apiFootballId: 329,
      country: "Estonia",
      url: "estonia-meistriliiga-329",
    },
    {
      name: "Super Liga",
      logo: "https://media.api-sports.io/football/leagues/332.png",
      apiFootballId: 332,
      country: "Slovakia",
      url: "slovakia-super-liga-332",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/333.png",
      apiFootballId: 333,
      country: "Ukraine",
      url: "ukraine-premier-league-333",
    },
    {
      name: "Persha Liga",
      logo: "https://media.api-sports.io/football/leagues/334.png",
      apiFootballId: 334,
      country: "Ukraine",
      url: "ukraine-persha-liga-334",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/335.png",
      apiFootballId: 335,
      country: "Ukraine",
      url: "ukraine-cup-335",
    },
    {
      name: "Druha Liga",
      logo: "https://media.api-sports.io/football/leagues/336.png",
      apiFootballId: 336,
      country: "Ukraine",
      url: "ukraine-druha-liga-336",
    },
    {
      name: "Druha Liga - Group B",
      logo: "https://media.api-sports.io/football/leagues/337.png",
      apiFootballId: 337,
      country: "Ukraine",
      url: "ukraine-druha-liga-group-b-337",
    },
    {
      name: "Czech Liga",
      logo: "https://media.api-sports.io/football/leagues/345.png",
      apiFootballId: 345,
      country: "Czech-Republic",
      url: "czech-republic-czech-liga-345",
    },
    {
      name: "FNL",
      logo: "https://media.api-sports.io/football/leagues/346.png",
      apiFootballId: 346,
      country: "Czech-Republic",
      url: "czech-republic-fnl-346",
    },
    {
      name: "3. liga - CFL A",
      logo: "https://media.api-sports.io/football/leagues/348.png",
      apiFootballId: 348,
      country: "Czech-Republic",
      url: "czech-republic-3-liga-cfl-a-348",
    },
    {
      name: "3. liga - MSFL",
      logo: "https://media.api-sports.io/football/leagues/349.png",
      apiFootballId: 349,
      country: "Czech-Republic",
      url: "czech-republic-3-liga-msfl-349",
    },
    {
      name: "4. liga - Divizie A",
      logo: "https://media.api-sports.io/football/leagues/350.png",
      apiFootballId: 350,
      country: "Czech-Republic",
      url: "czech-republic-4-liga-divizie-a-350",
    },
    {
      name: "4. liga - Divizie B",
      logo: "https://media.api-sports.io/football/leagues/351.png",
      apiFootballId: 351,
      country: "Czech-Republic",
      url: "czech-republic-4-liga-divizie-b-351",
    },
    {
      name: "4. liga - Divizie C",
      logo: "https://media.api-sports.io/football/leagues/352.png",
      apiFootballId: 352,
      country: "Czech-Republic",
      url: "czech-republic-4-liga-divizie-c-352",
    },
    {
      name: "4. liga - Divizie D",
      logo: "https://media.api-sports.io/football/leagues/353.png",
      apiFootballId: 353,
      country: "Czech-Republic",
      url: "czech-republic-4-liga-divizie-d-353",
    },
    {
      name: "4. liga - Divizie E",
      logo: "https://media.api-sports.io/football/leagues/354.png",
      apiFootballId: 354,
      country: "Czech-Republic",
      url: "czech-republic-4-liga-divizie-e-354",
    },
    {
      name: "First League",
      logo: "https://media.api-sports.io/football/leagues/355.png",
      apiFootballId: 355,
      country: "Montenegro",
      url: "montenegro-first-league-355",
    },
    {
      name: "Second League",
      logo: "https://media.api-sports.io/football/leagues/356.png",
      apiFootballId: 356,
      country: "Montenegro",
      url: "montenegro-second-league-356",
    },
    {
      name: "Premier Division",
      logo: "https://media.api-sports.io/football/leagues/357.png",
      apiFootballId: 357,
      country: "Ireland",
      url: "ireland-premier-division-357",
    },
    {
      name: "First Division",
      logo: "https://media.api-sports.io/football/leagues/358.png",
      apiFootballId: 358,
      country: "Ireland",
      url: "ireland-first-division-358",
    },
    {
      name: "FAI Cup",
      logo: "https://media.api-sports.io/football/leagues/359.png",
      apiFootballId: 359,
      country: "Ireland",
      url: "ireland-fai-cup-359",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/360.png",
      apiFootballId: 360,
      country: "Ireland",
      url: "ireland-league-cup-360",
    },
    {
      name: "1 Lyga",
      logo: "https://media.api-sports.io/football/leagues/361.png",
      apiFootballId: 361,
      country: "Lithuania",
      url: "lithuania-1-lyga-361",
    },
    {
      name: "A Lyga",
      logo: "https://media.api-sports.io/football/leagues/362.png",
      apiFootballId: 362,
      country: "Lithuania",
      url: "lithuania-a-lyga-362",
    },
    {
      name: "1. Liga",
      logo: "https://media.api-sports.io/football/leagues/364.png",
      apiFootballId: 364,
      country: "Latvia",
      url: "latvia-1-liga-364",
    },
    {
      name: "Virsliga",
      logo: "https://media.api-sports.io/football/leagues/365.png",
      apiFootballId: 365,
      country: "Latvia",
      url: "latvia-virsliga-365",
    },
    {
      name: "1. Deild",
      logo: "https://media.api-sports.io/football/leagues/366.png",
      apiFootballId: 366,
      country: "Faroe-Islands",
      url: "faroe-islands-1-deild-366",
    },
    {
      name: "Meistaradeildin",
      logo: "https://media.api-sports.io/football/leagues/367.png",
      apiFootballId: 367,
      country: "Faroe-Islands",
      url: "faroe-islands-meistaradeildin-367",
    },
    {
      name: "First League",
      logo: "https://media.api-sports.io/football/leagues/371.png",
      apiFootballId: 371,
      country: "Macedonia",
      url: "macedonia-first-league-371",
    },
    {
      name: "Second League",
      logo: "https://media.api-sports.io/football/leagues/372.png",
      apiFootballId: 372,
      country: "Macedonia",
      url: "macedonia-second-league-372",
    },
    {
      name: "1. SNL",
      logo: "https://media.api-sports.io/football/leagues/373.png",
      apiFootballId: 373,
      country: "Slovenia",
      url: "slovenia-1-snl-373",
    },
    {
      name: "2. SNL",
      logo: "https://media.api-sports.io/football/leagues/374.png",
      apiFootballId: 374,
      country: "Slovenia",
      url: "slovenia-2-snl-374",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/375.png",
      apiFootballId: 375,
      country: "Slovenia",
      url: "slovenia-cup-375",
    },
    {
      name: "Division d'Honneur",
      logo: "https://media.api-sports.io/football/leagues/377.png",
      apiFootballId: 377,
      country: "Guadeloupe",
      url: "guadeloupe-division-d-honneur-377",
    },
    {
      name: "Challenge League",
      logo: "https://media.api-sports.io/football/leagues/392.png",
      apiFootballId: 392,
      country: "Malta",
      url: "malta-challenge-league-392",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/393.png",
      apiFootballId: 393,
      country: "Malta",
      url: "malta-premier-league-393",
    },
    {
      name: "Super Liga",
      logo: "https://media.api-sports.io/football/leagues/394.png",
      apiFootballId: 394,
      country: "Moldova",
      url: "moldova-super-liga-394",
    },
    {
      name: "Liga 1",
      logo: "https://media.api-sports.io/football/leagues/395.png",
      apiFootballId: 395,
      country: "Moldova",
      url: "moldova-liga-1-395",
    },
    {
      name: "Campionato",
      logo: "https://media.api-sports.io/football/leagues/404.png",
      apiFootballId: 404,
      country: "San-Marino",
      url: "san-marino-campionato-404",
    },
    {
      name: "Championship",
      logo: "https://media.api-sports.io/football/leagues/407.png",
      apiFootballId: 407,
      country: "Northern-Ireland",
      url: "northern-ireland-championship-407",
    },
    {
      name: "Premiership",
      logo: "https://media.api-sports.io/football/leagues/408.png",
      apiFootballId: 408,
      country: "Northern-Ireland",
      url: "northern-ireland-premiership-408",
    },
    {
      name: "Birinci Dasta",
      logo: "https://media.api-sports.io/football/leagues/418.png",
      apiFootballId: 418,
      country: "Azerbaidjan",
      url: "azerbaidjan-birinci-dasta-418",
    },
    {
      name: "Premyer Liqa",
      logo: "https://media.api-sports.io/football/leagues/419.png",
      apiFootballId: 419,
      country: "Azerbaidjan",
      url: "azerbaidjan-premyer-liqa-419",
    },
    {
      name: "Serie D - Girone A",
      logo: "https://media.api-sports.io/football/leagues/426.png",
      apiFootballId: 426,
      country: "Italy",
      url: "italy-serie-d-girone-a-426",
    },
    {
      name: "Serie D - Girone B",
      logo: "https://media.api-sports.io/football/leagues/427.png",
      apiFootballId: 427,
      country: "Italy",
      url: "italy-serie-d-girone-b-427",
    },
    {
      name: "Serie D - Girone C",
      logo: "https://media.api-sports.io/football/leagues/428.png",
      apiFootballId: 428,
      country: "Italy",
      url: "italy-serie-d-girone-c-428",
    },
    {
      name: "Serie D - Girone D",
      logo: "https://media.api-sports.io/football/leagues/429.png",
      apiFootballId: 429,
      country: "Italy",
      url: "italy-serie-d-girone-d-429",
    },
    {
      name: "Serie D - Girone E",
      logo: "https://media.api-sports.io/football/leagues/430.png",
      apiFootballId: 430,
      country: "Italy",
      url: "italy-serie-d-girone-e-430",
    },
    {
      name: "Serie D - Girone F",
      logo: "https://media.api-sports.io/football/leagues/431.png",
      apiFootballId: 431,
      country: "Italy",
      url: "italy-serie-d-girone-f-431",
    },
    {
      name: "Serie D - Girone G",
      logo: "https://media.api-sports.io/football/leagues/432.png",
      apiFootballId: 432,
      country: "Italy",
      url: "italy-serie-d-girone-g-432",
    },
    {
      name: "Serie D - Girone H",
      logo: "https://media.api-sports.io/football/leagues/433.png",
      apiFootballId: 433,
      country: "Italy",
      url: "italy-serie-d-girone-h-433",
    },
    {
      name: "Serie D - Girone I",
      logo: "https://media.api-sports.io/football/leagues/434.png",
      apiFootballId: 434,
      country: "Italy",
      url: "italy-serie-d-girone-i-434",
    },
    {
      name: "Primera División RFEF - Group 1",
      logo: "https://media.api-sports.io/football/leagues/435.png",
      apiFootballId: 435,
      country: "Spain",
      url: "spain-primera-división-rfef-group-1-435",
    },
    {
      name: "Primera División RFEF - Group 2",
      logo: "https://media.api-sports.io/football/leagues/436.png",
      apiFootballId: 436,
      country: "Spain",
      url: "spain-primera-división-rfef-group-2-436",
    },
    {
      name: "Primera División RFEF - Group 3",
      logo: "https://media.api-sports.io/football/leagues/437.png",
      apiFootballId: 437,
      country: "Spain",
      url: "spain-primera-división-rfef-group-3-437",
    },
    {
      name: "Primera División RFEF - Group 4",
      logo: "https://media.api-sports.io/football/leagues/438.png",
      apiFootballId: 438,
      country: "Spain",
      url: "spain-primera-división-rfef-group-4-438",
    },
    {
      name: "Tercera División RFEF - Group 1",
      logo: "https://media.api-sports.io/football/leagues/439.png",
      apiFootballId: 439,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-1-439",
    },
    {
      name: "Tercera División RFEF - Group 2",
      logo: "https://media.api-sports.io/football/leagues/440.png",
      apiFootballId: 440,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-2-440",
    },
    {
      name: "Tercera División RFEF - Group 3",
      logo: "https://media.api-sports.io/football/leagues/441.png",
      apiFootballId: 441,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-3-441",
    },
    {
      name: "Tercera División RFEF - Group 4",
      logo: "https://media.api-sports.io/football/leagues/442.png",
      apiFootballId: 442,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-4-442",
    },
    {
      name: "Tercera División RFEF - Group 5",
      logo: "https://media.api-sports.io/football/leagues/443.png",
      apiFootballId: 443,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-5-443",
    },
    {
      name: "Tercera División RFEF - Group 6",
      logo: "https://media.api-sports.io/football/leagues/444.png",
      apiFootballId: 444,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-6-444",
    },
    {
      name: "Tercera División RFEF - Group 7",
      logo: "https://media.api-sports.io/football/leagues/445.png",
      apiFootballId: 445,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-7-445",
    },
    {
      name: "Tercera División RFEF - Group 8",
      logo: "https://media.api-sports.io/football/leagues/446.png",
      apiFootballId: 446,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-8-446",
    },
    {
      name: "Tercera División RFEF - Group 9",
      logo: "https://media.api-sports.io/football/leagues/447.png",
      apiFootballId: 447,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-9-447",
    },
    {
      name: "Tercera División RFEF - Group 10",
      logo: "https://media.api-sports.io/football/leagues/448.png",
      apiFootballId: 448,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-10-448",
    },
    {
      name: "Tercera División RFEF - Group 11",
      logo: "https://media.api-sports.io/football/leagues/449.png",
      apiFootballId: 449,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-11-449",
    },
    {
      name: "Tercera División RFEF - Group 12",
      logo: "https://media.api-sports.io/football/leagues/450.png",
      apiFootballId: 450,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-12-450",
    },
    {
      name: "Tercera División RFEF - Group 13",
      logo: "https://media.api-sports.io/football/leagues/451.png",
      apiFootballId: 451,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-13-451",
    },
    {
      name: "Tercera División RFEF - Group 14",
      logo: "https://media.api-sports.io/football/leagues/452.png",
      apiFootballId: 452,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-14-452",
    },
    {
      name: "Tercera División RFEF - Group 15",
      logo: "https://media.api-sports.io/football/leagues/453.png",
      apiFootballId: 453,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-15-453",
    },
    {
      name: "Tercera División RFEF - Group 16",
      logo: "https://media.api-sports.io/football/leagues/454.png",
      apiFootballId: 454,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-16-454",
    },
    {
      name: "Tercera División RFEF - Group 17",
      logo: "https://media.api-sports.io/football/leagues/455.png",
      apiFootballId: 455,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-17-455",
    },
    {
      name: "Tercera División RFEF - Group 18",
      logo: "https://media.api-sports.io/football/leagues/456.png",
      apiFootballId: 456,
      country: "Spain",
      url: "spain-tercera-división-rfef-group-18-456",
    },
    {
      name: "Campeonato de Portugal Prio - Group A",
      logo: "https://media.api-sports.io/football/leagues/457.png",
      apiFootballId: 457,
      country: "Portugal",
      url: "portugal-campeonato-de-portugal-prio-group-a-457",
    },
    {
      name: "Campeonato de Portugal Prio - Group B",
      logo: "https://media.api-sports.io/football/leagues/458.png",
      apiFootballId: 458,
      country: "Portugal",
      url: "portugal-campeonato-de-portugal-prio-group-b-458",
    },
    {
      name: "Campeonato de Portugal Prio - Group C",
      logo: "https://media.api-sports.io/football/leagues/459.png",
      apiFootballId: 459,
      country: "Portugal",
      url: "portugal-campeonato-de-portugal-prio-group-c-459",
    },
    {
      name: "Campeonato de Portugal Prio - Group D",
      logo: "https://media.api-sports.io/football/leagues/460.png",
      apiFootballId: 460,
      country: "Portugal",
      url: "portugal-campeonato-de-portugal-prio-group-d-460",
    },
    {
      name: "National 3 - Group A",
      logo: "https://media.api-sports.io/football/leagues/461.png",
      apiFootballId: 461,
      country: "France",
      url: "france-national-3-group-a-461",
    },
    {
      name: "National 3 - Group B",
      logo: "https://media.api-sports.io/football/leagues/462.png",
      apiFootballId: 462,
      country: "France",
      url: "france-national-3-group-b-462",
    },
    {
      name: "National 3 - Group C",
      logo: "https://media.api-sports.io/football/leagues/463.png",
      apiFootballId: 463,
      country: "France",
      url: "france-national-3-group-c-463",
    },
    {
      name: "National 3 - Group D",
      logo: "https://media.api-sports.io/football/leagues/464.png",
      apiFootballId: 464,
      country: "France",
      url: "france-national-3-group-d-464",
    },
    {
      name: "National 3 - Group E",
      logo: "https://media.api-sports.io/football/leagues/465.png",
      apiFootballId: 465,
      country: "France",
      url: "france-national-3-group-e-465",
    },
    {
      name: "National 3 - Group F",
      logo: "https://media.api-sports.io/football/leagues/466.png",
      apiFootballId: 466,
      country: "France",
      url: "france-national-3-group-f-466",
    },
    {
      name: "National 3 - Group H",
      logo: "https://media.api-sports.io/football/leagues/467.png",
      apiFootballId: 467,
      country: "France",
      url: "france-national-3-group-h-467",
    },
    {
      name: "National 3 - Group I",
      logo: "https://media.api-sports.io/football/leagues/468.png",
      apiFootballId: 468,
      country: "France",
      url: "france-national-3-group-i-468",
    },
    {
      name: "National 3 - Group J",
      logo: "https://media.api-sports.io/football/leagues/469.png",
      apiFootballId: 469,
      country: "France",
      url: "france-national-3-group-j-469",
    },
    {
      name: "National 3 - Group K",
      logo: "https://media.api-sports.io/football/leagues/470.png",
      apiFootballId: 470,
      country: "France",
      url: "france-national-3-group-k-470",
    },
    {
      name: "National 3 - Group L",
      logo: "https://media.api-sports.io/football/leagues/471.png",
      apiFootballId: 471,
      country: "France",
      url: "france-national-3-group-l-471",
    },
    {
      name: "National 3 - Group M",
      logo: "https://media.api-sports.io/football/leagues/472.png",
      apiFootballId: 472,
      country: "France",
      url: "france-national-3-group-m-472",
    },
    {
      name: "2. Division - Group 1",
      logo: "https://media.api-sports.io/football/leagues/473.png",
      apiFootballId: 473,
      country: "Norway",
      url: "norway-2-division-group-1-473",
    },
    {
      name: "2. Division - Group 2",
      logo: "https://media.api-sports.io/football/leagues/474.png",
      apiFootballId: 474,
      country: "Norway",
      url: "norway-2-division-group-2-474",
    },
    {
      name: "Frauenliga",
      logo: "https://media.api-sports.io/football/leagues/484.png",
      apiFootballId: 484,
      country: "Austria",
      url: "austria-frauenliga-484",
    },
    {
      name: "Coppa",
      logo: "https://media.api-sports.io/football/leagues/486.png",
      apiFootballId: 486,
      country: "Belarus",
      url: "belarus-coppa-486",
    },
    {
      name: "First Amateur Division",
      logo: "https://media.api-sports.io/football/leagues/487.png",
      apiFootballId: 487,
      country: "Belgium",
      url: "belgium-first-amateur-division-487",
    },
    {
      name: "U19 Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/488.png",
      apiFootballId: 488,
      country: "Germany",
      url: "germany-u19-bundesliga-488",
    },
    {
      name: "Løgmanssteypid",
      logo: "https://media.api-sports.io/football/leagues/491.png",
      apiFootballId: 491,
      country: "Faroe-Islands",
      url: "faroe-islands-løgmanssteypid-491",
    },
    {
      name: "Tweede Divisie",
      logo: "https://media.api-sports.io/football/leagues/492.png",
      apiFootballId: 492,
      country: "Netherlands",
      url: "netherlands-tweede-divisie-492",
    },
    {
      name: "Super League 2",
      logo: "https://media.api-sports.io/football/leagues/494.png",
      apiFootballId: 494,
      country: "Greece",
      url: "greece-super-league-2-494",
    },
    {
      name: "2. liga",
      logo: "https://media.api-sports.io/football/leagues/506.png",
      apiFootballId: 506,
      country: "Slovakia",
      url: "slovakia-2-liga-506",
    },
    {
      name: "1. Liga Promotion",
      logo: "https://media.api-sports.io/football/leagues/510.png",
      apiFootballId: 510,
      country: "Switzerland",
      url: "switzerland-1-liga-promotion-510",
    },
    {
      name: "2nd Division - Group A",
      logo: "https://media.api-sports.io/football/leagues/512.png",
      apiFootballId: 512,
      country: "Albania",
      url: "albania-2nd-division-group-a-512",
    },
    {
      name: "2nd Division - Group B",
      logo: "https://media.api-sports.io/football/leagues/513.png",
      apiFootballId: 513,
      country: "Albania",
      url: "albania-2nd-division-group-b-513",
    },
    {
      name: "Reserve Pro League",
      logo: "https://media.api-sports.io/football/leagues/518.png",
      apiFootballId: 518,
      country: "Belgium",
      url: "belgium-reserve-pro-league-518",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/519.png",
      apiFootballId: 519,
      country: "Belgium",
      url: "belgium-super-cup-519",
    },
    {
      name: "Trophée des Champions",
      logo: "https://media.api-sports.io/football/leagues/526.png",
      apiFootballId: 526,
      country: "France",
      url: "france-trophée-des-champions-526",
    },
    {
      name: "Community Shield",
      logo: "https://media.api-sports.io/football/leagues/528.png",
      apiFootballId: 528,
      country: "England",
      url: "england-community-shield-528",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/529.png",
      apiFootballId: 529,
      country: "Germany",
      url: "germany-super-cup-529",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/543.png",
      apiFootballId: 543,
      country: "Netherlands",
      url: "netherlands-super-cup-543",
    },
    {
      name: "FAI President's Cup",
      logo: "https://media.api-sports.io/football/leagues/546.png",
      apiFootballId: 546,
      country: "Ireland",
      url: "ireland-fai-presidents-cup-546",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/547.png",
      apiFootballId: 547,
      country: "Italy",
      url: "italy-super-cup-547",
    },
    {
      name: "Damallsvenskan",
      logo: "https://media.api-sports.io/football/leagues/549.png",
      apiFootballId: 549,
      country: "Sweden",
      url: "sweden-damallsvenskan-549",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/550.png",
      apiFootballId: 550,
      country: "Portugal",
      url: "portugal-super-cup-550",
    },
    {
      name: "Supercupa",
      logo: "https://media.api-sports.io/football/leagues/555.png",
      apiFootballId: 555,
      country: "Romania",
      url: "romania-supercupa-555",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/556.png",
      apiFootballId: 556,
      country: "Spain",
      url: "spain-super-cup-556",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/557.png",
      apiFootballId: 557,
      country: "Norway",
      url: "norway-super-cup-557",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/559.png",
      apiFootballId: 559,
      country: "Northern-Ireland",
      url: "northern-ireland-league-cup-559",
    },
    {
      name: "Premier Intermediate League",
      logo: "https://media.api-sports.io/football/leagues/561.png",
      apiFootballId: 561,
      country: "Northern-Ireland",
      url: "northern-ireland-premier-intermediate-league-561",
    },
    {
      name: "Reserve League",
      logo: "https://media.api-sports.io/football/leagues/562.png",
      apiFootballId: 562,
      country: "Belarus",
      url: "belarus-reserve-league-562",
    },
    {
      name: "Ettan - Norra",
      logo: "https://media.api-sports.io/football/leagues/563.png",
      apiFootballId: 563,
      country: "Sweden",
      url: "sweden-ettan-norra-563",
    },
    {
      name: "Ettan - Södra",
      logo: "https://media.api-sports.io/football/leagues/564.png",
      apiFootballId: 564,
      country: "Sweden",
      url: "sweden-ettan-södra-564",
    },
    {
      name: "Srpska Liga - Belgrade",
      logo: "https://media.api-sports.io/football/leagues/572.png",
      apiFootballId: 572,
      country: "Serbia",
      url: "serbia-srpska-liga-belgrade-572",
    },
    {
      name: "Srpska Liga - Vojvodina",
      logo: "https://media.api-sports.io/football/leagues/573.png",
      apiFootballId: 573,
      country: "Serbia",
      url: "serbia-srpska-liga-vojvodina-573",
    },
    {
      name: "Srpska Liga - East",
      logo: "https://media.api-sports.io/football/leagues/574.png",
      apiFootballId: 574,
      country: "Serbia",
      url: "serbia-srpska-liga-east-574",
    },
    {
      name: "Srpska Liga - West",
      logo: "https://media.api-sports.io/football/leagues/575.png",
      apiFootballId: 575,
      country: "Serbia",
      url: "serbia-srpska-liga-west-575",
    },
    {
      name: "Gamma Ethniki - Group 1",
      logo: "https://media.api-sports.io/football/leagues/576.png",
      apiFootballId: 576,
      country: "Greece",
      url: "greece-gamma-ethniki-group-1-576",
    },
    {
      name: "Gamma Ethniki - Group 2",
      logo: "https://media.api-sports.io/football/leagues/577.png",
      apiFootballId: 577,
      country: "Greece",
      url: "greece-gamma-ethniki-group-2-577",
    },
    {
      name: "Gamma Ethniki - Group 3",
      logo: "https://media.api-sports.io/football/leagues/578.png",
      apiFootballId: 578,
      country: "Greece",
      url: "greece-gamma-ethniki-group-3-578",
    },
    {
      name: "Gamma Ethniki - Group 4",
      logo: "https://media.api-sports.io/football/leagues/579.png",
      apiFootballId: 579,
      country: "Greece",
      url: "greece-gamma-ethniki-group-4-579",
    },
    {
      name: "Gamma Ethniki - Group 5",
      logo: "https://media.api-sports.io/football/leagues/580.png",
      apiFootballId: 580,
      country: "Greece",
      url: "greece-gamma-ethniki-group-5-580",
    },
    {
      name: "Gamma Ethniki - Group 6",
      logo: "https://media.api-sports.io/football/leagues/581.png",
      apiFootballId: 581,
      country: "Greece",
      url: "greece-gamma-ethniki-group-6-581",
    },
    {
      name: "Gamma Ethniki - Group 7",
      logo: "https://media.api-sports.io/football/leagues/582.png",
      apiFootballId: 582,
      country: "Greece",
      url: "greece-gamma-ethniki-group-7-582",
    },
    {
      name: "Gamma Ethniki - Group 8",
      logo: "https://media.api-sports.io/football/leagues/583.png",
      apiFootballId: 583,
      country: "Greece",
      url: "greece-gamma-ethniki-group-8-583",
    },
    {
      name: "Division 2 - Norra Götaland",
      logo: "https://media.api-sports.io/football/leagues/592.png",
      apiFootballId: 592,
      country: "Sweden",
      url: "sweden-division-2-norra-götaland-592",
    },
    {
      name: "Division 2 - Norra Svealand",
      logo: "https://media.api-sports.io/football/leagues/593.png",
      apiFootballId: 593,
      country: "Sweden",
      url: "sweden-division-2-norra-svealand-593",
    },
    {
      name: "Division 2 - Norrland",
      logo: "https://media.api-sports.io/football/leagues/594.png",
      apiFootballId: 594,
      country: "Sweden",
      url: "sweden-division-2-norrland-594",
    },
    {
      name: "Division 2 - Södra Svealand",
      logo: "https://media.api-sports.io/football/leagues/595.png",
      apiFootballId: 595,
      country: "Sweden",
      url: "sweden-division-2-södra-svealand-595",
    },
    {
      name: "Division 2 - Västra Götaland",
      logo: "https://media.api-sports.io/football/leagues/596.png",
      apiFootballId: 596,
      country: "Sweden",
      url: "sweden-division-2-västra-götaland-596",
    },
    {
      name: "Division 2 - Östra Götaland",
      logo: "https://media.api-sports.io/football/leagues/597.png",
      apiFootballId: 597,
      country: "Sweden",
      url: "sweden-division-2-östra-götaland-597",
    },
    {
      name: "1. Liga Classic - Group 1",
      logo: "https://media.api-sports.io/football/leagues/599.png",
      apiFootballId: 599,
      country: "Switzerland",
      url: "switzerland-1-liga-classic-group-1-599",
    },
    {
      name: "1. Liga Classic - Group 2",
      logo: "https://media.api-sports.io/football/leagues/600.png",
      apiFootballId: 600,
      country: "Switzerland",
      url: "switzerland-1-liga-classic-group-2-600",
    },
    {
      name: "1. Liga Classic - Group 3",
      logo: "https://media.api-sports.io/football/leagues/601.png",
      apiFootballId: 601,
      country: "Switzerland",
      url: "switzerland-1-liga-classic-group-3-601",
    },
    {
      name: "NB III - Northeast",
      logo: "https://media.api-sports.io/football/leagues/633.png",
      apiFootballId: 633,
      country: "Hungary",
      url: "hungary-nb-iii-northeast-633",
    },
    {
      name: "NB III - Southwest",
      logo: "https://media.api-sports.io/football/leagues/634.png",
      apiFootballId: 634,
      country: "Hungary",
      url: "hungary-nb-iii-southwest-634",
    },
    {
      name: "NB III - Northwest",
      logo: "https://media.api-sports.io/football/leagues/635.png",
      apiFootballId: 635,
      country: "Hungary",
      url: "hungary-nb-iii-northwest-635",
    },
    {
      name: "Kvindeliga",
      logo: "https://media.api-sports.io/football/leagues/638.png",
      apiFootballId: 638,
      country: "Denmark",
      url: "denmark-kvindeliga-638",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/639.png",
      apiFootballId: 639,
      country: "Iceland",
      url: "iceland-super-cup-639",
    },
    {
      name: "Kansallinen Liiga",
      logo: "https://media.api-sports.io/football/leagues/640.png",
      apiFootballId: 640,
      country: "Finland",
      url: "finland-kansallinen-liiga-640",
    },
    {
      name: "3. liga - Bratislava",
      logo: "https://media.api-sports.io/football/leagues/643.png",
      apiFootballId: 643,
      country: "Slovakia",
      url: "slovakia-3-liga-bratislava-643",
    },
    {
      name: "3. liga - West",
      logo: "https://media.api-sports.io/football/leagues/644.png",
      apiFootballId: 644,
      country: "Slovakia",
      url: "slovakia-3-liga-west-644",
    },
    {
      name: "3. liga - East",
      logo: "https://media.api-sports.io/football/leagues/645.png",
      apiFootballId: 645,
      country: "Slovakia",
      url: "slovakia-3-liga-east-645",
    },
    {
      name: "3. liga - Center",
      logo: "https://media.api-sports.io/football/leagues/646.png",
      apiFootballId: 646,
      country: "Slovakia",
      url: "slovakia-3-liga-center-646",
    },
    {
      name: "Copa Constitució",
      logo: "https://media.api-sports.io/football/leagues/655.png",
      apiFootballId: 655,
      country: "Andorra",
      url: "andorra-copa-constitució-655",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/656.png",
      apiFootballId: 656,
      country: "Bulgaria",
      url: "bulgaria-super-cup-656",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/657.png",
      apiFootballId: 657,
      country: "Estonia",
      url: "estonia-cup-657",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/658.png",
      apiFootballId: 658,
      country: "Latvia",
      url: "latvia-cup-658",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/661.png",
      apiFootballId: 661,
      country: "Lithuania",
      url: "lithuania-cup-661",
    },
    {
      name: "Superliga",
      logo: "https://media.api-sports.io/football/leagues/664.png",
      apiFootballId: 664,
      country: "Kosovo",
      url: "kosovo-superliga-664",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/665.png",
      apiFootballId: 665,
      country: "Kosovo",
      url: "kosovo-cup-665",
    },
    {
      name: "Community Shield Women",
      logo: "https://media.api-sports.io/football/leagues/670.png",
      apiFootballId: 670,
      country: "England",
      url: "england-community-shield-women-670",
    },
    {
      name: "Úrvalsdeild Women",
      logo: "https://media.api-sports.io/football/leagues/671.png",
      apiFootballId: 671,
      country: "Iceland",
      url: "iceland-úrvalsdeild-women-671",
    },
    {
      name: "Cupa",
      logo: "https://media.api-sports.io/football/leagues/674.png",
      apiFootballId: 674,
      country: "Moldova",
      url: "moldova-cupa-674",
    },
    {
      name: "U21 Divisie 1",
      logo: "https://media.api-sports.io/football/leagues/675.png",
      apiFootballId: 675,
      country: "Netherlands",
      url: "netherlands-u21-divisie-1-675",
    },
    {
      name: "Central Youth League",
      logo: "https://media.api-sports.io/football/leagues/676.png",
      apiFootballId: 676,
      country: "Poland",
      url: "poland-central-youth-league-676",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/678.png",
      apiFootballId: 678,
      country: "Ukraine",
      url: "ukraine-super-cup-678",
    },
    {
      name: "U21 League",
      logo: "https://media.api-sports.io/football/leagues/679.png",
      apiFootballId: 679,
      country: "Ukraine",
      url: "ukraine-u21-league-679",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/680.png",
      apiFootballId: 680,
      country: "Slovakia",
      url: "slovakia-cup-680",
    },
    {
      name: "Campeonato de Portugal Prio - Group E",
      logo: "https://media.api-sports.io/football/leagues/681.png",
      apiFootballId: 681,
      country: "Portugal",
      url: "portugal-campeonato-de-portugal-prio-group-e-681",
    },
    {
      name: "Campeonato de Portugal Prio - Group F",
      logo: "https://media.api-sports.io/football/leagues/682.png",
      apiFootballId: 682,
      country: "Portugal",
      url: "portugal-campeonato-de-portugal-prio-group-f-682",
    },
    {
      name: "Campeonato de Portugal Prio - Group G",
      logo: "https://media.api-sports.io/football/leagues/683.png",
      apiFootballId: 683,
      country: "Portugal",
      url: "portugal-campeonato-de-portugal-prio-group-g-683",
    },
    {
      name: "Campeonato de Portugal Prio - Group H",
      logo: "https://media.api-sports.io/football/leagues/684.png",
      apiFootballId: 684,
      country: "Portugal",
      url: "portugal-campeonato-de-portugal-prio-group-h-684",
    },
    {
      name: "Regionalliga - Tirol",
      logo: "https://media.api-sports.io/football/leagues/687.png",
      apiFootballId: 687,
      country: "Austria",
      url: "austria-regionalliga-tirol-687",
    },
    {
      name: "Regionalliga - Salzburg",
      logo: "https://media.api-sports.io/football/leagues/688.png",
      apiFootballId: 688,
      country: "Austria",
      url: "austria-regionalliga-salzburg-688",
    },
    {
      name: "Third Amateur Division - ACFF A",
      logo: "https://media.api-sports.io/football/leagues/689.png",
      apiFootballId: 689,
      country: "Belgium",
      url: "belgium-third-amateur-division-acff-a-689",
    },
    {
      name: "Third Amateur Division - ACFF B",
      logo: "https://media.api-sports.io/football/leagues/690.png",
      apiFootballId: 690,
      country: "Belgium",
      url: "belgium-third-amateur-division-acff-b-690",
    },
    {
      name: "Provincial - Brabant ACFF",
      logo: "https://media.api-sports.io/football/leagues/691.png",
      apiFootballId: 691,
      country: "Belgium",
      url: "belgium-provincial-brabant-acff-691",
    },
    {
      name: "Primera División RFEF - Group 5",
      logo: "https://media.api-sports.io/football/leagues/692.png",
      apiFootballId: 692,
      country: "Spain",
      url: "spain-primera-división-rfef-group-5-692",
    },
    {
      name: "Gamma Ethniki - Group 9",
      logo: "https://media.api-sports.io/football/leagues/693.png",
      apiFootballId: 693,
      country: "Greece",
      url: "greece-gamma-ethniki-group-9-693",
    },
    {
      name: "Gamma Ethniki - Group 10",
      logo: "https://media.api-sports.io/football/leagues/694.png",
      apiFootballId: 694,
      country: "Greece",
      url: "greece-gamma-ethniki-group-10-694",
    },
    {
      name: "U18 Premier League - North",
      logo: "https://media.api-sports.io/football/leagues/695.png",
      apiFootballId: 695,
      country: "England",
      url: "england-u18-premier-league-north-695",
    },
    {
      name: "U18 Premier League - South",
      logo: "https://media.api-sports.io/football/leagues/696.png",
      apiFootballId: 696,
      country: "England",
      url: "england-u18-premier-league-south-696",
    },
    {
      name: "WSL Cup",
      logo: "https://media.api-sports.io/football/leagues/697.png",
      apiFootballId: 697,
      country: "England",
      url: "england-wsl-cup-697",
    },
    {
      name: "FA Women's Cup",
      logo: "https://media.api-sports.io/football/leagues/698.png",
      apiFootballId: 698,
      country: "England",
      url: "england-fa-womens-cup-698",
    },
    {
      name: "Women's Championship",
      logo: "https://media.api-sports.io/football/leagues/699.png",
      apiFootballId: 699,
      country: "England",
      url: "england-womens-championship-699",
    },
    {
      name: "Kakkosen Cup",
      logo: "https://media.api-sports.io/football/leagues/700.png",
      apiFootballId: 700,
      country: "Finland",
      url: "finland-kakkosen-cup-700",
    },
    {
      name: "Liga Revelação U23",
      logo: "https://media.api-sports.io/football/leagues/701.png",
      apiFootballId: 701,
      country: "Portugal",
      url: "portugal-liga-revelação-u23-701",
    },
    {
      name: "Premier League 2 Division One",
      logo: "https://media.api-sports.io/football/leagues/702.png",
      apiFootballId: 702,
      country: "England",
      url: "england-premier-league-2-division-one-702",
    },
    {
      name: "Professional Development League",
      logo: "https://media.api-sports.io/football/leagues/703.png",
      apiFootballId: 703,
      country: "England",
      url: "england-professional-development-league-703",
    },
    {
      name: "Coppa Italia Primavera",
      logo: "https://media.api-sports.io/football/leagues/704.png",
      apiFootballId: 704,
      country: "Italy",
      url: "italy-coppa-italia-primavera-704",
    },
    {
      name: "Campionato Primavera - 1",
      logo: "https://media.api-sports.io/football/leagues/705.png",
      apiFootballId: 705,
      country: "Italy",
      url: "italy-campionato-primavera-1-705",
    },
    {
      name: "Campionato Primavera - 2",
      logo: "https://media.api-sports.io/football/leagues/706.png",
      apiFootballId: 706,
      country: "Italy",
      url: "italy-campionato-primavera-2-706",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/707.png",
      apiFootballId: 707,
      country: "Albania",
      url: "albania-cup-707",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/708.png",
      apiFootballId: 708,
      country: "Albania",
      url: "albania-super-cup-708",
    },
    {
      name: "DFB Junioren Pokal",
      logo: "https://media.api-sports.io/football/leagues/715.png",
      apiFootballId: 715,
      country: "Germany",
      url: "germany-dfb-junioren-pokal-715",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/721.png",
      apiFootballId: 721,
      country: "Luxembourg",
      url: "luxembourg-cup-721",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/723.png",
      apiFootballId: 723,
      country: "Montenegro",
      url: "montenegro-cup-723",
    },
    {
      name: "U18 Divisie 1",
      logo: "https://media.api-sports.io/football/leagues/724.png",
      apiFootballId: 724,
      country: "Netherlands",
      url: "netherlands-u18-divisie-1-724",
    },
    {
      name: "Toppserien",
      logo: "https://media.api-sports.io/football/leagues/725.png",
      apiFootballId: 725,
      country: "Norway",
      url: "norway-toppserien-725",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/727.png",
      apiFootballId: 727,
      country: "Poland",
      url: "poland-super-cup-727",
    },
    {
      name: "Liga 1 Feminin",
      logo: "https://media.api-sports.io/football/leagues/728.png",
      apiFootballId: 728,
      country: "Romania",
      url: "romania-liga-1-feminin-728",
    },
    {
      name: "Coppa Titano",
      logo: "https://media.api-sports.io/football/leagues/729.png",
      apiFootballId: 729,
      country: "San-Marino",
      url: "san-marino-coppa-titano-729",
    },
    {
      name: "Football League - Highland League",
      logo: "https://media.api-sports.io/football/leagues/730.png",
      apiFootballId: 730,
      country: "Scotland",
      url: "scotland-football-league-highland-league-730",
    },
    {
      name: "Football League - Lowland League",
      logo: "https://media.api-sports.io/football/leagues/731.png",
      apiFootballId: 731,
      country: "Scotland",
      url: "scotland-football-league-lowland-league-731",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/732.png",
      apiFootballId: 732,
      country: "Serbia",
      url: "serbia-cup-732",
    },
    {
      name: "I Liga - Women",
      logo: "https://media.api-sports.io/football/leagues/733.png",
      apiFootballId: 733,
      country: "Slovakia",
      url: "slovakia-i-liga-women-733",
    },
    {
      name: "Copa Federacion",
      logo: "https://media.api-sports.io/football/leagues/735.png",
      apiFootballId: 735,
      country: "Spain",
      url: "spain-copa-federacion-735",
    },
    {
      name: "Elitettan",
      logo: "https://media.api-sports.io/football/leagues/736.png",
      apiFootballId: 736,
      country: "Sweden",
      url: "sweden-elitettan-736",
    },
    {
      name: "Svenska Cupen - Women",
      logo: "https://media.api-sports.io/football/leagues/737.png",
      apiFootballId: 737,
      country: "Sweden",
      url: "sweden-svenska-cupen-women-737",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/738.png",
      apiFootballId: 738,
      country: "Wales",
      url: "wales-league-cup-738",
    },
    {
      name: "AXA Women’s Super League",
      logo: "https://media.api-sports.io/football/leagues/739.png",
      apiFootballId: 739,
      country: "Switzerland",
      url: "switzerland-axa-women’s-super-league-739",
    },
    {
      name: "Oberliga - Schleswig-Holstein",
      logo: "https://media.api-sports.io/football/leagues/744.png",
      apiFootballId: 744,
      country: "Germany",
      url: "germany-oberliga-schleswig-holstein-744",
    },
    {
      name: "Oberliga - Hamburg",
      logo: "https://media.api-sports.io/football/leagues/745.png",
      apiFootballId: 745,
      country: "Germany",
      url: "germany-oberliga-hamburg-745",
    },
    {
      name: "Oberliga - Mittelrhein",
      logo: "https://media.api-sports.io/football/leagues/746.png",
      apiFootballId: 746,
      country: "Germany",
      url: "germany-oberliga-mittelrhein-746",
    },
    {
      name: "Oberliga - Westfalen",
      logo: "https://media.api-sports.io/football/leagues/747.png",
      apiFootballId: 747,
      country: "Germany",
      url: "germany-oberliga-westfalen-747",
    },
    {
      name: "Oberliga - Niedersachsen",
      logo: "https://media.api-sports.io/football/leagues/748.png",
      apiFootballId: 748,
      country: "Germany",
      url: "germany-oberliga-niedersachsen-748",
    },
    {
      name: "Oberliga - Bremen",
      logo: "https://media.api-sports.io/football/leagues/749.png",
      apiFootballId: 749,
      country: "Germany",
      url: "germany-oberliga-bremen-749",
    },
    {
      name: "Oberliga - Hessen",
      logo: "https://media.api-sports.io/football/leagues/750.png",
      apiFootballId: 750,
      country: "Germany",
      url: "germany-oberliga-hessen-750",
    },
    {
      name: "Oberliga - Niederrhein",
      logo: "https://media.api-sports.io/football/leagues/751.png",
      apiFootballId: 751,
      country: "Germany",
      url: "germany-oberliga-niederrhein-751",
    },
    {
      name: "Oberliga - Rheinland-Pfalz / Saar",
      logo: "https://media.api-sports.io/football/leagues/752.png",
      apiFootballId: 752,
      country: "Germany",
      url: "germany-oberliga-rheinland-pfalz-/-saar-752",
    },
    {
      name: "Oberliga - Baden-Württemberg",
      logo: "https://media.api-sports.io/football/leagues/753.png",
      apiFootballId: 753,
      country: "Germany",
      url: "germany-oberliga-baden-württemberg-753",
    },
    {
      name: "Oberliga - Nordost-Nord",
      logo: "https://media.api-sports.io/football/leagues/754.png",
      apiFootballId: 754,
      country: "Germany",
      url: "germany-oberliga-nordost-nord-754",
    },
    {
      name: "Oberliga - Nordost-Süd",
      logo: "https://media.api-sports.io/football/leagues/755.png",
      apiFootballId: 755,
      country: "Germany",
      url: "germany-oberliga-nordost-süd-755",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/756.png",
      apiFootballId: 756,
      country: "Macedonia",
      url: "macedonia-cup-756",
    },
    {
      name: "Irish Cup",
      logo: "https://media.api-sports.io/football/leagues/757.png",
      apiFootballId: 757,
      country: "Northern-Ireland",
      url: "northern-ireland-irish-cup-757",
    },
    {
      name: "Premier Division",
      logo: "https://media.api-sports.io/football/leagues/758.png",
      apiFootballId: 758,
      country: "Gibraltar",
      url: "gibraltar-premier-division-758",
    },
    {
      name: "Cup",
      logo: "https://media.api-sports.io/football/leagues/761.png",
      apiFootballId: 761,
      country: "Liechtenstein",
      url: "liechtenstein-cup-761",
    },
    {
      name: "3. Division - Girone 1",
      logo: "https://media.api-sports.io/football/leagues/774.png",
      apiFootballId: 774,
      country: "Norway",
      url: "norway-3-division-girone-1-774",
    },
    {
      name: "3. Division - Girone 2",
      logo: "https://media.api-sports.io/football/leagues/775.png",
      apiFootballId: 775,
      country: "Norway",
      url: "norway-3-division-girone-2-775",
    },
    {
      name: "3. Division - Girone 3",
      logo: "https://media.api-sports.io/football/leagues/776.png",
      apiFootballId: 776,
      country: "Norway",
      url: "norway-3-division-girone-3-776",
    },
    {
      name: "3. Division - Girone 4",
      logo: "https://media.api-sports.io/football/leagues/777.png",
      apiFootballId: 777,
      country: "Norway",
      url: "norway-3-division-girone-4-777",
    },
    {
      name: "3. Division - Girone 5",
      logo: "https://media.api-sports.io/football/leagues/778.png",
      apiFootballId: 778,
      country: "Norway",
      url: "norway-3-division-girone-5-778",
    },
    {
      name: "3. Division - Girone 6",
      logo: "https://media.api-sports.io/football/leagues/779.png",
      apiFootballId: 779,
      country: "Norway",
      url: "norway-3-division-girone-6-779",
    },
    {
      name: "III Liga - Group 1",
      logo: "https://media.api-sports.io/football/leagues/780.png",
      apiFootballId: 780,
      country: "Poland",
      url: "poland-iii-liga-group-1-780",
    },
    {
      name: "III Liga - Group 2",
      logo: "https://media.api-sports.io/football/leagues/781.png",
      apiFootballId: 781,
      country: "Poland",
      url: "poland-iii-liga-group-2-781",
    },
    {
      name: "III Liga - Group 3",
      logo: "https://media.api-sports.io/football/leagues/782.png",
      apiFootballId: 782,
      country: "Poland",
      url: "poland-iii-liga-group-3-782",
    },
    {
      name: "III Liga - Group 4",
      logo: "https://media.api-sports.io/football/leagues/783.png",
      apiFootballId: 783,
      country: "Poland",
      url: "poland-iii-liga-group-4-783",
    },
    {
      name: "Liga III - Serie 1",
      logo: "https://media.api-sports.io/football/leagues/784.png",
      apiFootballId: 784,
      country: "Romania",
      url: "romania-liga-iii-serie-1-784",
    },
    {
      name: "Liga III - Serie 2",
      logo: "https://media.api-sports.io/football/leagues/785.png",
      apiFootballId: 785,
      country: "Romania",
      url: "romania-liga-iii-serie-2-785",
    },
    {
      name: "Liga III - Serie 3",
      logo: "https://media.api-sports.io/football/leagues/786.png",
      apiFootballId: 786,
      country: "Romania",
      url: "romania-liga-iii-serie-3-786",
    },
    {
      name: "Liga III - Serie 4",
      logo: "https://media.api-sports.io/football/leagues/787.png",
      apiFootballId: 787,
      country: "Romania",
      url: "romania-liga-iii-serie-4-787",
    },
    {
      name: "Liga III - Serie 5",
      logo: "https://media.api-sports.io/football/leagues/788.png",
      apiFootballId: 788,
      country: "Romania",
      url: "romania-liga-iii-serie-5-788",
    },
    {
      name: "Liga III - Serie 6",
      logo: "https://media.api-sports.io/football/leagues/789.png",
      apiFootballId: 789,
      country: "Romania",
      url: "romania-liga-iii-serie-6-789",
    },
    {
      name: "Liga III - Serie 7",
      logo: "https://media.api-sports.io/football/leagues/790.png",
      apiFootballId: 790,
      country: "Romania",
      url: "romania-liga-iii-serie-7-790",
    },
    {
      name: "Liga III - Serie 8",
      logo: "https://media.api-sports.io/football/leagues/791.png",
      apiFootballId: 791,
      country: "Romania",
      url: "romania-liga-iii-serie-8-791",
    },
    {
      name: "Liga III - Serie 9",
      logo: "https://media.api-sports.io/football/leagues/792.png",
      apiFootballId: 792,
      country: "Romania",
      url: "romania-liga-iii-serie-9-792",
    },
    {
      name: "Liga III - Serie 10",
      logo: "https://media.api-sports.io/football/leagues/793.png",
      apiFootballId: 793,
      country: "Romania",
      url: "romania-liga-iii-serie-10-793",
    },
    {
      name: "3. SNL - East",
      logo: "https://media.api-sports.io/football/leagues/794.png",
      apiFootballId: 794,
      country: "Slovenia",
      url: "slovenia-3-snl-east-794",
    },
    {
      name: "3. SNL - West",
      logo: "https://media.api-sports.io/football/leagues/795.png",
      apiFootballId: 795,
      country: "Slovenia",
      url: "slovenia-3-snl-west-795",
    },
    {
      name: "2. Liga Interregional - Group 1",
      logo: "https://media.api-sports.io/football/leagues/796.png",
      apiFootballId: 796,
      country: "Switzerland",
      url: "switzerland-2-liga-interregional-group-1-796",
    },
    {
      name: "2. Liga Interregional - Group 2",
      logo: "https://media.api-sports.io/football/leagues/797.png",
      apiFootballId: 797,
      country: "Switzerland",
      url: "switzerland-2-liga-interregional-group-2-797",
    },
    {
      name: "2. Liga Interregional - Group 3",
      logo: "https://media.api-sports.io/football/leagues/798.png",
      apiFootballId: 798,
      country: "Switzerland",
      url: "switzerland-2-liga-interregional-group-3-798",
    },
    {
      name: "2. Liga Interregional - Group 4",
      logo: "https://media.api-sports.io/football/leagues/799.png",
      apiFootballId: 799,
      country: "Switzerland",
      url: "switzerland-2-liga-interregional-group-4-799",
    },
    {
      name: "2. Liga Interregional - Group 5",
      logo: "https://media.api-sports.io/football/leagues/800.png",
      apiFootballId: 800,
      country: "Switzerland",
      url: "switzerland-2-liga-interregional-group-5-800",
    },
    {
      name: "2. Liga Interregional - Group 6",
      logo: "https://media.api-sports.io/football/leagues/801.png",
      apiFootballId: 801,
      country: "Switzerland",
      url: "switzerland-2-liga-interregional-group-6-801",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/809.png",
      apiFootballId: 809,
      country: "Andorra",
      url: "andorra-super-cup-809",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/812.png",
      apiFootballId: 812,
      country: "Belarus",
      url: "belarus-super-cup-812",
    },
    {
      name: "Reykjavik Cup",
      logo: "https://media.api-sports.io/football/leagues/814.png",
      apiFootballId: 814,
      country: "Iceland",
      url: "iceland-reykjavik-cup-814",
    },
    {
      name: "Fotbolti.net Cup A",
      logo: "https://media.api-sports.io/football/leagues/815.png",
      apiFootballId: 815,
      country: "Iceland",
      url: "iceland-fotbolti.net-cup-a-815",
    },
    {
      name: "Super Cup Primavera",
      logo: "https://media.api-sports.io/football/leagues/817.png",
      apiFootballId: 817,
      country: "Italy",
      url: "italy-super-cup-primavera-817",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/819.png",
      apiFootballId: 819,
      country: "Kosovo",
      url: "kosovo-super-cup-819",
    },
    {
      name: "FA Trophy",
      logo: "https://media.api-sports.io/football/leagues/821.png",
      apiFootballId: 821,
      country: "Malta",
      url: "malta-fa-trophy-821",
    },
    {
      name: "Nasjonal U19 Champions League",
      logo: "https://media.api-sports.io/football/leagues/823.png",
      apiFootballId: 823,
      country: "Norway",
      url: "norway-nasjonal-u19-champions-league-823",
    },
    {
      name: "Rock Cup",
      logo: "https://media.api-sports.io/football/leagues/837.png",
      apiFootballId: 837,
      country: "Gibraltar",
      url: "gibraltar-rock-cup-837",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/839.png",
      apiFootballId: 839,
      country: "Lithuania",
      url: "lithuania-super-cup-839",
    },
    {
      name: "Taça Revelação U23",
      logo: "https://media.api-sports.io/football/leagues/840.png",
      apiFootballId: 840,
      country: "Portugal",
      url: "portugal-taça-revelação-u23-840",
    },
    {
      name: "3. Division",
      logo: "https://media.api-sports.io/football/leagues/862.png",
      apiFootballId: 862,
      country: "Denmark",
      url: "denmark-3-division-862",
    },
    {
      name: "Liga 3",
      logo: "https://media.api-sports.io/football/leagues/865.png",
      apiFootballId: 865,
      country: "Portugal",
      url: "portugal-liga-3-865",
    },
    {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/870.png",
      apiFootballId: 870,
      country: "Crimea",
      url: "crimea-premier-league-870",
    },
    {
      name: "Premier League Cup",
      logo: "https://media.api-sports.io/football/leagues/871.png",
      apiFootballId: 871,
      country: "England",
      url: "england-premier-league-cup-871",
    },
    {
      name: "Segunda División RFEF - Group 1",
      logo: "https://media.api-sports.io/football/leagues/875.png",
      apiFootballId: 875,
      country: "Spain",
      url: "spain-segunda-división-rfef-group-1-875",
    },
    {
      name: "Segunda División RFEF - Group 2",
      logo: "https://media.api-sports.io/football/leagues/876.png",
      apiFootballId: 876,
      country: "Spain",
      url: "spain-segunda-división-rfef-group-2-876",
    },
    {
      name: "Segunda División RFEF - Group 3",
      logo: "https://media.api-sports.io/football/leagues/877.png",
      apiFootballId: 877,
      country: "Spain",
      url: "spain-segunda-división-rfef-group-3-877",
    },
    {
      name: "Segunda División RFEF - Group 4",
      logo: "https://media.api-sports.io/football/leagues/878.png",
      apiFootballId: 878,
      country: "Spain",
      url: "spain-segunda-división-rfef-group-4-878",
    },
    {
      name: "Segunda División RFEF - Group 5",
      logo: "https://media.api-sports.io/football/leagues/879.png",
      apiFootballId: 879,
      country: "Spain",
      url: "spain-segunda-división-rfef-group-5-879",
    },
    {
      name: "Reserve League",
      logo: "https://media.api-sports.io/football/leagues/883.png",
      apiFootballId: 883,
      country: "Netherlands",
      url: "netherlands-reserve-league-883",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/884.png",
      apiFootballId: 884,
      country: "San-Marino",
      url: "san-marino-super-cup-884",
    },
    {
      name: "Coppa Italia Serie C",
      logo: "https://media.api-sports.io/football/leagues/891.png",
      apiFootballId: 891,
      country: "Italy",
      url: "italy-coppa-italia-serie-c-891",
    },
    {
      name: "Coppa Italia Serie D",
      logo: "https://media.api-sports.io/football/leagues/892.png",
      apiFootballId: 892,
      country: "Italy",
      url: "italy-coppa-italia-serie-d-892",
    },
    {
      name: "League Cup",
      logo: "https://media.api-sports.io/football/leagues/899.png",
      apiFootballId: 899,
      country: "Finland",
      url: "finland-league-cup-899",
    },
    {
      name: "Ykköscup",
      logo: "https://media.api-sports.io/football/leagues/901.png",
      apiFootballId: 901,
      country: "Finland",
      url: "finland-ykköscup-901",
    },
    {
      name: "1. Division Women",
      logo: "https://media.api-sports.io/football/leagues/915.png",
      apiFootballId: 915,
      country: "Norway",
      url: "norway-1-division-women-915",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/925.png",
      apiFootballId: 925,
      country: "Czech-Republic",
      url: "czech-republic-super-cup-925",
    },
    {
      name: "Non League Premier - Southern Central",
      logo: "https://media.api-sports.io/football/leagues/931.png",
      apiFootballId: 931,
      country: "England",
      url: "england-non-league-premier-southern-central-931",
    },
    {
      name: "Non League Div One - Northern East",
      logo: "https://media.api-sports.io/football/leagues/932.png",
      apiFootballId: 932,
      country: "England",
      url: "england-non-league-div-one-northern-east-932",
    },
    {
      name: "Non League Div One - Southern Central",
      logo: "https://media.api-sports.io/football/leagues/933.png",
      apiFootballId: 933,
      country: "England",
      url: "england-non-league-div-one-southern-central-933",
    },
    {
      name: "Oberliga - Bayern Nord",
      logo: "https://media.api-sports.io/football/leagues/938.png",
      apiFootballId: 938,
      country: "Germany",
      url: "germany-oberliga-bayern-nord-938",
    },
    {
      name: "Oberliga - Bayern Süd",
      logo: "https://media.api-sports.io/football/leagues/939.png",
      apiFootballId: 939,
      country: "Germany",
      url: "germany-oberliga-bayern-süd-939",
    },
    {
      name: "Serie C - Girone B",
      logo: "https://media.api-sports.io/football/leagues/942.png",
      apiFootballId: 942,
      country: "Italy",
      url: "italy-serie-c-girone-b-942",
    },
    {
      name: "Serie C - Girone C",
      logo: "https://media.api-sports.io/football/leagues/943.png",
      apiFootballId: 943,
      country: "Italy",
      url: "italy-serie-c-girone-c-943",
    },
    {
      name: "Second NL",
      logo: "https://media.api-sports.io/football/leagues/946.png",
      apiFootballId: 946,
      country: "Croatia",
      url: "croatia-second-nl-946",
    },
    {
      name: "DFB Pokal - Women",
      logo: "https://media.api-sports.io/football/leagues/947.png",
      apiFootballId: 947,
      country: "Germany",
      url: "germany-dfb-pokal-women-947",
    },
    {
      name: "1a Divisão - Women",
      logo: "https://media.api-sports.io/football/leagues/948.png",
      apiFootballId: 948,
      country: "Portugal",
      url: "portugal-1a-divisão-women-948",
    },
    {
      name: "Serie C - Supercoppa Lega Finals",
      logo: "https://media.api-sports.io/football/leagues/974.png",
      apiFootballId: 974,
      country: "Italy",
      url: "italy-serie-c-supercoppa-lega-finals-974",
    },
    {
      name: "Serie C - Relegation - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/975.png",
      apiFootballId: 975,
      country: "Italy",
      url: "italy-serie-c-relegation-play-offs-975",
    },
    {
      name: "Serie C - Promotion - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/976.png",
      apiFootballId: 976,
      country: "Italy",
      url: "italy-serie-c-promotion-play-offs-976",
    },
    {
      name: "Tercera División RFEF - Promotion - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/977.png",
      apiFootballId: 977,
      country: "Spain",
      url: "spain-tercera-división-rfef-promotion-play-offs-977",
    },
    {
      name: "2nd Division - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/978.png",
      apiFootballId: 978,
      country: "Albania",
      url: "albania-2nd-division-play-offs-978",
    },
    {
      name: "Provincial - Play-offs VV",
      logo: "https://media.api-sports.io/football/leagues/979.png",
      apiFootballId: 979,
      country: "Belgium",
      url: "belgium-provincial-play-offs-vv-979",
    },
    {
      name: "Provincial - Play-offs ACFF",
      logo: "https://media.api-sports.io/football/leagues/980.png",
      apiFootballId: 980,
      country: "Belgium",
      url: "belgium-provincial-play-offs-acff-980",
    },
    {
      name: "Third Amateur Division - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/981.png",
      apiFootballId: 981,
      country: "Belgium",
      url: "belgium-third-amateur-division-play-offs-981",
    },
    {
      name: "Denmark Series - Promotion Round",
      logo: "https://media.api-sports.io/football/leagues/982.png",
      apiFootballId: 982,
      country: "Denmark",
      url: "denmark-denmark-series-promotion-round-982",
    },
    {
      name: "Denmark Series - Relegation Round",
      logo: "https://media.api-sports.io/football/leagues/983.png",
      apiFootballId: 983,
      country: "Denmark",
      url: "denmark-denmark-series-relegation-round-983",
    },
    {
      name: "National League - North - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/984.png",
      apiFootballId: 984,
      country: "England",
      url: "england-national-league-north-play-offs-984",
    },
    {
      name: "National League - South - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/985.png",
      apiFootballId: 985,
      country: "England",
      url: "england-national-league-south-play-offs-985",
    },
    {
      name: "Non League Div One - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/986.png",
      apiFootballId: 986,
      country: "England",
      url: "england-non-league-div-one-play-offs-986",
    },
    {
      name: "U18 Premier League - Championship",
      logo: "https://media.api-sports.io/football/leagues/987.png",
      apiFootballId: 987,
      country: "England",
      url: "england-u18-premier-league-championship-987",
    },
    {
      name: "Oberliga - Promotion Round",
      logo: "https://media.api-sports.io/football/leagues/988.png",
      apiFootballId: 988,
      country: "Germany",
      url: "germany-oberliga-promotion-round-988",
    },
    {
      name: "Oberliga - Relegation Round",
      logo: "https://media.api-sports.io/football/leagues/989.png",
      apiFootballId: 989,
      country: "Germany",
      url: "germany-oberliga-relegation-round-989",
    },
    {
      name: "Gamma Ethniki - Promotion Group",
      logo: "https://media.api-sports.io/football/leagues/990.png",
      apiFootballId: 990,
      country: "Greece",
      url: "greece-gamma-ethniki-promotion-group-990",
    },
    {
      name: "Campeonato de Portugal Prio - Promotion Round",
      logo: "https://media.api-sports.io/football/leagues/991.png",
      apiFootballId: 991,
      country: "Portugal",
      url: "portugal-campeonato-de-portugal-prio-promotion-round-991",
    },
    {
      name: "Football League - Championship",
      logo: "https://media.api-sports.io/football/leagues/992.png",
      apiFootballId: 992,
      country: "Scotland",
      url: "scotland-football-league-championship-992",
    },
    {
      name: "Non League Premier - Isthmian - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/993.png",
      apiFootballId: 993,
      country: "England",
      url: "england-non-league-premier-isthmian-play-offs-993",
    },
    {
      name: "Non League Premier - Northern - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/994.png",
      apiFootballId: 994,
      country: "England",
      url: "england-non-league-premier-northern-play-offs-994",
    },
    {
      name: "Non League Premier - Southern South - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/995.png",
      apiFootballId: 995,
      country: "England",
      url: "england-non-league-premier-southern-south-play-offs-995",
    },
    {
      name: "Non League Premier - Southern Central - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/996.png",
      apiFootballId: 996,
      country: "England",
      url: "england-non-league-premier-southern-central-play-offs-996",
    },
    {
      name: "Serie D - Promotion - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/997.png",
      apiFootballId: 997,
      country: "Italy",
      url: "italy-serie-d-promotion-play-offs-997",
    },
    {
      name: "Serie D - Relegation - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/998.png",
      apiFootballId: 998,
      country: "Italy",
      url: "italy-serie-d-relegation-play-offs-998",
    },
    {
      name: "Serie D - Championship Round",
      logo: "https://media.api-sports.io/football/leagues/999.png",
      apiFootballId: 999,
      country: "Italy",
      url: "italy-serie-d-championship-round-999",
    },
    {
      name: "Segunda División RFEF - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1000.png",
      apiFootballId: 1000,
      country: "Spain",
      url: "spain-segunda-división-rfef-play-offs-1000",
    },
    {
      name: "Regionalliga - Promotion Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1002.png",
      apiFootballId: 1002,
      country: "Germany",
      url: "germany-regionalliga-promotion-play-offs-1002",
    },
    {
      name: "Regionalliga - Relegation Round",
      logo: "https://media.api-sports.io/football/leagues/1003.png",
      apiFootballId: 1003,
      country: "Germany",
      url: "germany-regionalliga-relegation-round-1003",
    },
    {
      name: "Derde Divisie - Relegation Round",
      logo: "https://media.api-sports.io/football/leagues/1004.png",
      apiFootballId: 1004,
      country: "Netherlands",
      url: "netherlands-derde-divisie-relegation-round-1004",
    },
    {
      name: "1. Liga Classic - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1005.png",
      apiFootballId: 1005,
      country: "Switzerland",
      url: "switzerland-1-liga-classic-play-offs-1005",
    },
    {
      name: "Primera División RFEF - Play Offs",
      logo: "https://media.api-sports.io/football/leagues/1006.png",
      apiFootballId: 1006,
      country: "Spain",
      url: "spain-primera-división-rfef-play-offs-1006",
    },
    {
      name: "Liga III - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1009.png",
      apiFootballId: 1009,
      country: "Romania",
      url: "romania-liga-iii-play-offs-1009",
    },
    {
      name: "3. liga - Promotion Play-off",
      logo: "https://media.api-sports.io/football/leagues/1010.png",
      apiFootballId: 1010,
      country: "Czech-Republic",
      url: "czech-republic-3-liga-promotion-play-off-1010",
    },
    {
      name: "Second Amateur Division - Play-offs ",
      logo: "https://media.api-sports.io/football/leagues/1011.png",
      apiFootballId: 1011,
      country: "Belgium",
      url: "belgium-second-amateur-division-play-offs-1011",
    },
    {
      name: "Charity Shield",
      logo: "https://media.api-sports.io/football/leagues/1019.png",
      apiFootballId: 1019,
      country: "Northern-Ireland",
      url: "northern-ireland-charity-shield-1019",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/1021.png",
      apiFootballId: 1021,
      country: "Croatia",
      url: "croatia-super-cup-1021",
    },
    {
      name: "Premier League - Summer Series",
      logo: "https://media.api-sports.io/football/leagues/1022.png",
      apiFootballId: 1022,
      country: "England",
      url: "england-premier-league-summer-series-1022",
    },
    {
      name: "NB III - Southeast",
      logo: "https://media.api-sports.io/football/leagues/1023.png",
      apiFootballId: 1023,
      country: "Hungary",
      url: "hungary-nb-iii-southeast-1023",
    },
    {
      name: "National 3 - Group G",
      logo: "https://media.api-sports.io/football/leagues/1029.png",
      apiFootballId: 1029,
      country: "France",
      url: "france-national-3-group-g-1029",
    },
    {
      name: "Ekstraliga Women",
      logo: "https://media.api-sports.io/football/leagues/1033.png",
      apiFootballId: 1033,
      country: "Poland",
      url: "poland-ekstraliga-women-1033",
    },
    {
      name: "2. Frauen Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/1034.png",
      apiFootballId: 1034,
      country: "Germany",
      url: "germany-2-frauen-bundesliga-1034",
    },
    {
      name: "Júniores U19",
      logo: "https://media.api-sports.io/football/leagues/1041.png",
      apiFootballId: 1041,
      country: "Portugal",
      url: "portugal-júniores-u19-1041",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/1042.png",
      apiFootballId: 1042,
      country: "Gibraltar",
      url: "gibraltar-super-cup-1042",
    },
    {
      name: "Erste Liga Cup",
      logo: "https://media.api-sports.io/football/leagues/1044.png",
      apiFootballId: 1044,
      country: "Switzerland",
      url: "switzerland-erste-liga-cup-1044",
    },
    {
      name: "Super Cup",
      logo: "https://media.api-sports.io/football/leagues/1050.png",
      apiFootballId: 1050,
      country: "Malta",
      url: "malta-super-cup-1050",
    },
    {
      name: "Kakkonen - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1052.png",
      apiFootballId: 1052,
      country: "Finland",
      url: "finland-kakkonen-play-offs-1052",
    },
    {
      name: "Division 2 - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1053.png",
      apiFootballId: 1053,
      country: "Sweden",
      url: "sweden-division-2-play-offs-1053",
    },
    {
      name: "2. Division - Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1054.png",
      apiFootballId: 1054,
      country: "Norway",
      url: "norway-2-division-play-offs-1054",
    },
    {
      name: "Ettan - Relegation Round",
      logo: "https://media.api-sports.io/football/leagues/1055.png",
      apiFootballId: 1055,
      country: "Sweden",
      url: "sweden-ettan-relegation-round-1055",
    },
    {
      name: "Supercopa Femenina",
      logo: "https://media.api-sports.io/football/leagues/1058.png",
      apiFootballId: 1058,
      country: "Spain",
      url: "spain-supercopa-femenina-1058",
    },
    {
      name: "U19 League",
      logo: "https://media.api-sports.io/football/leagues/1065.png",
      apiFootballId: 1065,
      country: "Ukraine",
      url: "ukraine-u19-league-1065",
    },
    {
      name: "FA Youth Cup",
      logo: "https://media.api-sports.io/football/leagues/1068.png",
      apiFootballId: 1068,
      country: "England",
      url: "england-fa-youth-cup-1068",
    },
    {
      name: "SWPL Cup",
      logo: "https://media.api-sports.io/football/leagues/1074.png",
      apiFootballId: 1074,
      country: "Scotland",
      url: "scotland-swpl-cup-1074",
    },
    {
      name: "SWF Scottish Cup",
      logo: "https://media.api-sports.io/football/leagues/1078.png",
      apiFootballId: 1078,
      country: "Scotland",
      url: "scotland-swf-scottish-cup-1078",
    },
    {
      name: "Ykkösliiga",
      logo: "https://media.api-sports.io/football/leagues/1087.png",
      apiFootballId: 1087,
      country: "Finland",
      url: "finland-ykkösliiga-1087",
    },
    {
      name: "Gamma Ethniki - Relegation Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1099.png",
      apiFootballId: 1099,
      country: "Greece",
      url: "greece-gamma-ethniki-relegation-play-offs-1099",
    },
    {
      name: "Premiership Women",
      logo: "https://media.api-sports.io/football/leagues/1103.png",
      apiFootballId: 1103,
      country: "Northern-Ireland",
      url: "northern-ireland-premiership-women-1103",
    },
    {
      name: "NB III - Promotion Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1111.png",
      apiFootballId: 1111,
      country: "Hungary",
      url: "hungary-nb-iii-promotion-play-offs-1111",
    },
    {
      name: "Esiliiga B",
      logo: "https://media.api-sports.io/football/leagues/1126.png",
      apiFootballId: 1126,
      country: "Estonia",
      url: "estonia-esiliiga-b-1126",
    },
  ],
  Oceania: [
    {
      name: "A-League",
      logo: "https://media.api-sports.io/football/leagues/188.png",
      apiFootballId: 188,
      country: "Australia",
      url: "australia-a-league-188",
    },
    {
      name: "Capital Territory NPL",
      logo: "https://media.api-sports.io/football/leagues/189.png",
      apiFootballId: 189,
      country: "Australia",
      url: "australia-capital-territory-npl-189",
    },
    {
      name: "A-League Women",
      logo: "https://media.api-sports.io/football/leagues/190.png",
      apiFootballId: 190,
      country: "Australia",
      url: "australia-a-league-women-190",
    },
    {
      name: "Brisbane Premier League",
      logo: "https://media.api-sports.io/football/leagues/191.png",
      apiFootballId: 191,
      country: "Australia",
      url: "australia-brisbane-premier-league-191",
    },
    {
      name: "New South Wales NPL",
      logo: "https://media.api-sports.io/football/leagues/192.png",
      apiFootballId: 192,
      country: "Australia",
      url: "australia-new-south-wales-npl-192",
    },
    {
      name: "Northern Territory Premier League",
      logo: "https://media.api-sports.io/football/leagues/193.png",
      apiFootballId: 193,
      country: "Australia",
      url: "australia-northern-territory-premier-league-193",
    },
    {
      name: "South Australia NPL",
      logo: "https://media.api-sports.io/football/leagues/194.png",
      apiFootballId: 194,
      country: "Australia",
      url: "australia-south-australia-npl-194",
    },
    {
      name: "Victoria NPL",
      logo: "https://media.api-sports.io/football/leagues/195.png",
      apiFootballId: 195,
      country: "Australia",
      url: "australia-victoria-npl-195",
    },
    {
      name: "Western Australia NPL",
      logo: "https://media.api-sports.io/football/leagues/196.png",
      apiFootballId: 196,
      country: "Australia",
      url: "australia-western-australia-npl-196",
    },
    {
      name: "Premiership",
      logo: "https://media.api-sports.io/football/leagues/280.png",
      apiFootballId: 280,
      country: "New-Zealand",
      url: "new-zealand-premiership-280",
    },
    {
      name: "National Football League",
      logo: "https://media.api-sports.io/football/leagues/376.png",
      apiFootballId: 376,
      country: "Fiji",
      url: "fiji-national-football-league-376",
    },
    {
      name: "Northern NSW NPL",
      logo: "https://media.api-sports.io/football/leagues/481.png",
      apiFootballId: 481,
      country: "Australia",
      url: "australia-northern-nsw-npl-481",
    },
    {
      name: "Queensland NPL",
      logo: "https://media.api-sports.io/football/leagues/482.png",
      apiFootballId: 482,
      country: "Australia",
      url: "australia-queensland-npl-482",
    },
    {
      name: "Tasmania NPL",
      logo: "https://media.api-sports.io/football/leagues/648.png",
      apiFootballId: 648,
      country: "Australia",
      url: "australia-tasmania-npl-648",
    },
    {
      name: "Queensland Premier League",
      logo: "https://media.api-sports.io/football/leagues/833.png",
      apiFootballId: 833,
      country: "Australia",
      url: "australia-queensland-premier-league-833",
    },
    {
      name: "South Australia State League 1",
      logo: "https://media.api-sports.io/football/leagues/834.png",
      apiFootballId: 834,
      country: "Australia",
      url: "australia-south-australia-state-league-1-834",
    },
    {
      name: "New South Wales NPL 2",
      logo: "https://media.api-sports.io/football/leagues/835.png",
      apiFootballId: 835,
      country: "Australia",
      url: "australia-new-south-wales-npl-2-835",
    },
    {
      name: "Victoria NPL 2",
      logo: "https://media.api-sports.io/football/leagues/836.png",
      apiFootballId: 836,
      country: "Australia",
      url: "australia-victoria-npl-2-836",
    },
    {
      name: "Australia Cup",
      logo: "https://media.api-sports.io/football/leagues/874.png",
      apiFootballId: 874,
      country: "Australia",
      url: "australia-australia-cup-874",
    },
    {
      name: "National League - Southern",
      logo: "https://media.api-sports.io/football/leagues/957.png",
      apiFootballId: 957,
      country: "New-Zealand",
      url: "new-zealand-national-league-southern-957",
    },
    {
      name: "National League - Championship - Final",
      logo: "https://media.api-sports.io/football/leagues/1056.png",
      apiFootballId: 1056,
      country: "New-Zealand",
      url: "new-zealand-national-league-championship-final-1056",
    },
    {
      name: "NNSW League 1",
      logo: "https://media.api-sports.io/football/leagues/1090.png",
      apiFootballId: 1090,
      country: "Australia",
      url: "australia-nnsw-league-1-1090",
    },
    {
      name: "Tasmania Northern Championship",
      logo: "https://media.api-sports.io/football/leagues/1091.png",
      apiFootballId: 1091,
      country: "Australia",
      url: "australia-tasmania-northern-championship-1091",
    },
    {
      name: "Capital Territory NPL 2",
      logo: "https://media.api-sports.io/football/leagues/1092.png",
      apiFootballId: 1092,
      country: "Australia",
      url: "australia-capital-territory-npl-2-1092",
    },
    {
      name: "Tasmania Southern Championship",
      logo: "https://media.api-sports.io/football/leagues/1093.png",
      apiFootballId: 1093,
      country: "Australia",
      url: "australia-tasmania-southern-championship-1093",
    },
    {
      name: "Western Australia State League 1",
      logo: "https://media.api-sports.io/football/leagues/1094.png",
      apiFootballId: 1094,
      country: "Australia",
      url: "australia-western-australia-state-league-1-1094",
    },
    {
      name: "Chatham Cup",
      logo: "https://media.api-sports.io/football/leagues/1127.png",
      apiFootballId: 1127,
      country: "New-Zealand",
      url: "new-zealand-chatham-cup-1127",
    },
  ],
  World: [
    {
      name: "World Cup",
      logo: "https://media.api-sports.io/football/leagues/1.png",
      apiFootballId: 1,
      country: "World",
      url: "world-cup-1",
    },
    {
      name: "UEFA Champions League",
      logo: "https://media.api-sports.io/football/leagues/2.png",
      apiFootballId: 2,
      country: "World",
      url: "uefa-champions-league-2",
    },
    {
      name: "UEFA Europa League",
      logo: "https://media.api-sports.io/football/leagues/3.png",
      apiFootballId: 3,
      country: "World",
      url: "uefa-europa-league-3",
    },
    {
      name: "Euro Championship",
      logo: "https://media.api-sports.io/football/leagues/4.png",
      apiFootballId: 4,
      country: "World",
      url: "euro-championship-4",
    },
    {
      name: "UEFA Nations League",
      logo: "https://media.api-sports.io/football/leagues/5.png",
      apiFootballId: 5,
      country: "World",
      url: "uefa-nations-league-5",
    },
    {
      name: "Africa Cup of Nations",
      logo: "https://media.api-sports.io/football/leagues/6.png",
      apiFootballId: 6,
      country: "World",
      url: "africa-cup-of-nations-6",
    },
    {
      name: "Asian Cup",
      logo: "https://media.api-sports.io/football/leagues/7.png",
      apiFootballId: 7,
      country: "World",
      url: "asian-cup-7",
    },
    {
      name: "World Cup - Women",
      logo: "https://media.api-sports.io/football/leagues/8.png",
      apiFootballId: 8,
      country: "World",
      url: "world-cup-women-8",
    },
    {
      name: "Copa America",
      logo: "https://media.api-sports.io/football/leagues/9.png",
      apiFootballId: 9,
      country: "World",
      url: "copa-america-9",
    },
    {
      name: "Friendlies",
      logo: "https://media.api-sports.io/football/leagues/10.png",
      apiFootballId: 10,
      country: "World",
      url: "friendlies-10",
    },
    {
      name: "CONMEBOL Sudamericana",
      logo: "https://media.api-sports.io/football/leagues/11.png",
      apiFootballId: 11,
      country: "World",
      url: "conmebol-sudamericana-11",
    },
    {
      name: "CAF Champions League",
      logo: "https://media.api-sports.io/football/leagues/12.png",
      apiFootballId: 12,
      country: "World",
      url: "caf-champions-league-12",
    },
    {
      name: "CONMEBOL Libertadores",
      logo: "https://media.api-sports.io/football/leagues/13.png",
      apiFootballId: 13,
      country: "World",
      url: "conmebol-libertadores-13",
    },
    {
      name: "UEFA Youth League",
      logo: "https://media.api-sports.io/football/leagues/14.png",
      apiFootballId: 14,
      country: "World",
      url: "uefa-youth-league-14",
    },
    {
      name: "FIFA Club World Cup",
      logo: "https://media.api-sports.io/football/leagues/15.png",
      apiFootballId: 15,
      country: "World",
      url: "fifa-club-world-cup-15",
    },
    {
      name: "CONCACAF Champions League",
      logo: "https://media.api-sports.io/football/leagues/16.png",
      apiFootballId: 16,
      country: "World",
      url: "concacaf-champions-league-16",
    },
    {
      name: "AFC Champions League",
      logo: "https://media.api-sports.io/football/leagues/17.png",
      apiFootballId: 17,
      country: "World",
      url: "afc-champions-league-17",
    },
    {
      name: "AFC Cup",
      logo: "https://media.api-sports.io/football/leagues/18.png",
      apiFootballId: 18,
      country: "World",
      url: "afc-cup-18",
    },
    {
      name: "African Nations Championship",
      logo: "https://media.api-sports.io/football/leagues/19.png",
      apiFootballId: 19,
      country: "World",
      url: "african-nations-championship-19",
    },
    {
      name: "CAF Confederation Cup",
      logo: "https://media.api-sports.io/football/leagues/20.png",
      apiFootballId: 20,
      country: "World",
      url: "caf-confederation-cup-20",
    },
    {
      name: "Confederations Cup",
      logo: "https://media.api-sports.io/football/leagues/21.png",
      apiFootballId: 21,
      country: "World",
      url: "confederations-cup-21",
    },
    {
      name: "CONCACAF Gold Cup",
      logo: "https://media.api-sports.io/football/leagues/22.png",
      apiFootballId: 22,
      country: "World",
      url: "concacaf-gold-cup-22",
    },
    {
      name: "EAFF E-1 Football Championship",
      logo: "https://media.api-sports.io/football/leagues/23.png",
      apiFootballId: 23,
      country: "World",
      url: "eaff-e-1-football-championship-23",
    },
    {
      name: "AFF Championship",
      logo: "https://media.api-sports.io/football/leagues/24.png",
      apiFootballId: 24,
      country: "World",
      url: "aff-championship-24",
    },
    {
      name: "Gulf Cup of Nations",
      logo: "https://media.api-sports.io/football/leagues/25.png",
      apiFootballId: 25,
      country: "World",
      url: "gulf-cup-of-nations-25",
    },
    {
      name: "International Champions Cup",
      logo: "https://media.api-sports.io/football/leagues/26.png",
      apiFootballId: 26,
      country: "World",
      url: "international-champions-cup-26",
    },
    {
      name: "OFC Champions League",
      logo: "https://media.api-sports.io/football/leagues/27.png",
      apiFootballId: 27,
      country: "World",
      url: "ofc-champions-league-27",
    },
    {
      name: "SAFF Championship",
      logo: "https://media.api-sports.io/football/leagues/28.png",
      apiFootballId: 28,
      country: "World",
      url: "saff-championship-28",
    },
    {
      name: "World Cup - Qualification Africa",
      logo: "https://media.api-sports.io/football/leagues/29.png",
      apiFootballId: 29,
      country: "World",
      url: "world-cup-qualification-africa-29",
    },
    {
      name: "World Cup - Qualification Asia",
      logo: "https://media.api-sports.io/football/leagues/30.png",
      apiFootballId: 30,
      country: "World",
      url: "world-cup-qualification-asia-30",
    },
    {
      name: "World Cup - Qualification CONCACAF",
      logo: "https://media.api-sports.io/football/leagues/31.png",
      apiFootballId: 31,
      country: "World",
      url: "world-cup-qualification-concacaf-31",
    },
    {
      name: "World Cup - Qualification Europe",
      logo: "https://media.api-sports.io/football/leagues/32.png",
      apiFootballId: 32,
      country: "World",
      url: "world-cup-qualification-europe-32",
    },
    {
      name: "World Cup - Qualification Oceania",
      logo: "https://media.api-sports.io/football/leagues/33.png",
      apiFootballId: 33,
      country: "World",
      url: "world-cup-qualification-oceania-33",
    },
    {
      name: "World Cup - Qualification South America",
      logo: "https://media.api-sports.io/football/leagues/34.png",
      apiFootballId: 34,
      country: "World",
      url: "world-cup-qualification-south-america-34",
    },
    {
      name: "Asian Cup - Qualification",
      logo: "https://media.api-sports.io/football/leagues/35.png",
      apiFootballId: 35,
      country: "World",
      url: "asian-cup-qualification-35",
    },
    {
      name: "Africa Cup of Nations - Qualification",
      logo: "https://media.api-sports.io/football/leagues/36.png",
      apiFootballId: 36,
      country: "World",
      url: "africa-cup-of-nations-qualification-36",
    },
    {
      name: "World Cup - Qualification Intercontinental Play-offs",
      logo: "https://media.api-sports.io/football/leagues/37.png",
      apiFootballId: 37,
      country: "World",
      url: "world-cup-qualification-intercontinental-play-offs-37",
    },
    {
      name: "UEFA U21 Championship",
      logo: "https://media.api-sports.io/football/leagues/38.png",
      apiFootballId: 38,
      country: "World",
      url: "uefa-u21-championship-38",
    },
    {
      name: "Olympics Men",
      logo: "https://media.api-sports.io/football/leagues/480.png",
      apiFootballId: 480,
      country: "World",
      url: "olympics-men-480",
    },
    {
      name: "World Cup - U20",
      logo: "https://media.api-sports.io/football/leagues/490.png",
      apiFootballId: 490,
      country: "World",
      url: "world-cup-u20-490",
    },
    {
      name: "UEFA U19 Championship",
      logo: "https://media.api-sports.io/football/leagues/493.png",
      apiFootballId: 493,
      country: "World",
      url: "uefa-u19-championship-493",
    },
    {
      name: "Olympics Women",
      logo: "https://media.api-sports.io/football/leagues/524.png",
      apiFootballId: 524,
      country: "World",
      url: "olympics-women-524",
    },
    {
      name: "UEFA Champions League Women",
      logo: "https://media.api-sports.io/football/leagues/525.png",
      apiFootballId: 525,
      country: "World",
      url: "uefa-champions-league-women-525",
    },
    {
      name: "UEFA Super Cup",
      logo: "https://media.api-sports.io/football/leagues/531.png",
      apiFootballId: 531,
      country: "World",
      url: "uefa-super-cup-531",
    },
    {
      name: "AFC U23 Asian Cup",
      logo: "https://media.api-sports.io/football/leagues/532.png",
      apiFootballId: 532,
      country: "World",
      url: "afc-u23-asian-cup-532",
    },
    {
      name: "CAF Super Cup",
      logo: "https://media.api-sports.io/football/leagues/533.png",
      apiFootballId: 533,
      country: "World",
      url: "caf-super-cup-533",
    },
    {
      name: "CONCACAF Caribbean Club Shield",
      logo: "https://media.api-sports.io/football/leagues/534.png",
      apiFootballId: 534,
      country: "World",
      url: "concacaf-caribbean-club-shield-534",
    },
    {
      name: "CECAFA Senior Challenge Cup",
      logo: "https://media.api-sports.io/football/leagues/535.png",
      apiFootballId: 535,
      country: "World",
      url: "cecafa-senior-challenge-cup-535",
    },
    {
      name: "CONCACAF Nations League",
      logo: "https://media.api-sports.io/football/leagues/536.png",
      apiFootballId: 536,
      country: "World",
      url: "concacaf-nations-league-536",
    },
    {
      name: "CONCACAF U20",
      logo: "https://media.api-sports.io/football/leagues/537.png",
      apiFootballId: 537,
      country: "World",
      url: "concacaf-u20-537",
    },
    {
      name: "Africa Cup of Nations U20",
      logo: "https://media.api-sports.io/football/leagues/538.png",
      apiFootballId: 538,
      country: "World",
      url: "africa-cup-of-nations-u20-538",
    },
    {
      name: "CONMEBOL Libertadores U20",
      logo: "https://media.api-sports.io/football/leagues/540.png",
      apiFootballId: 540,
      country: "World",
      url: "conmebol-libertadores-u20-540",
    },
    {
      name: "CONMEBOL Recopa",
      logo: "https://media.api-sports.io/football/leagues/541.png",
      apiFootballId: 541,
      country: "World",
      url: "conmebol-recopa-541",
    },
    {
      name: "World Cup - U17",
      logo: "https://media.api-sports.io/football/leagues/587.png",
      apiFootballId: 587,
      country: "World",
      url: "world-cup-u17-587",
    },
    {
      name: "Friendlies Women",
      logo: "https://media.api-sports.io/football/leagues/666.png",
      apiFootballId: 666,
      country: "World",
      url: "friendlies-women-666",
    },
    {
      name: "Friendlies Clubs",
      logo: "https://media.api-sports.io/football/leagues/667.png",
      apiFootballId: 667,
      country: "World",
      url: "friendlies-clubs-667",
    },
    {
      name: "UEFA Championship - Women",
      logo: "https://media.api-sports.io/football/leagues/743.png",
      apiFootballId: 743,
      country: "World",
      url: "uefa-championship-women-743",
    },
    {
      name: "China Cup",
      logo: "https://media.api-sports.io/football/leagues/766.png",
      apiFootballId: 766,
      country: "World",
      url: "china-cup-766",
    },
    {
      name: "CONCACAF League",
      logo: "https://media.api-sports.io/football/leagues/767.png",
      apiFootballId: 767,
      country: "World",
      url: "concacaf-league-767",
    },
    {
      name: "Arab Club Champions Cup",
      logo: "https://media.api-sports.io/football/leagues/768.png",
      apiFootballId: 768,
      country: "World",
      url: "arab-club-champions-cup-768",
    },
    {
      name: "Premier League Asia Trophy",
      logo: "https://media.api-sports.io/football/leagues/769.png",
      apiFootballId: 769,
      country: "World",
      url: "premier-league-asia-trophy-769",
    },
    {
      name: "Pacific Games",
      logo: "https://media.api-sports.io/football/leagues/770.png",
      apiFootballId: 770,
      country: "World",
      url: "pacific-games-770",
    },
    {
      name: "COSAFA U20 Championship",
      logo: "https://media.api-sports.io/football/leagues/771.png",
      apiFootballId: 771,
      country: "World",
      url: "cosafa-u20-championship-771",
    },
    {
      name: "Leagues Cup",
      logo: "https://media.api-sports.io/football/leagues/772.png",
      apiFootballId: 772,
      country: "World",
      url: "leagues-cup-772",
    },
    {
      name: "Sudamericano U20",
      logo: "https://media.api-sports.io/football/leagues/773.png",
      apiFootballId: 773,
      country: "World",
      url: "sudamericano-u20-773",
    },
    {
      name: "Asian Games",
      logo: "https://media.api-sports.io/football/leagues/803.png",
      apiFootballId: 803,
      country: "World",
      url: "asian-games-803",
    },
    {
      name: "Caribbean Cup",
      logo: "https://media.api-sports.io/football/leagues/804.png",
      apiFootballId: 804,
      country: "World",
      url: "caribbean-cup-804",
    },
    {
      name: "Copa Centroamericana",
      logo: "https://media.api-sports.io/football/leagues/805.png",
      apiFootballId: 805,
      country: "World",
      url: "copa-centroamericana-805",
    },
    {
      name: "OFC Nations Cup",
      logo: "https://media.api-sports.io/football/leagues/806.png",
      apiFootballId: 806,
      country: "World",
      url: "ofc-nations-cup-806",
    },
    {
      name: "AFC Challenge Cup",
      logo: "https://media.api-sports.io/football/leagues/807.png",
      apiFootballId: 807,
      country: "World",
      url: "afc-challenge-cup-807",
    },
    {
      name: "CONCACAF Nations League - Qualification",
      logo: "https://media.api-sports.io/football/leagues/808.png",
      apiFootballId: 808,
      country: "World",
      url: "concacaf-nations-league-qualification-808",
    },
    {
      name: "UEFA Europa Conference League",
      logo: "https://media.api-sports.io/football/leagues/848.png",
      apiFootballId: 848,
      country: "World",
      url: "uefa-europa-conference-league-848",
    },
    {
      name: "Baltic Cup",
      logo: "https://media.api-sports.io/football/leagues/849.png",
      apiFootballId: 849,
      country: "World",
      url: "baltic-cup-849",
    },
    {
      name: "UEFA U21 Championship - Qualification",
      logo: "https://media.api-sports.io/football/leagues/850.png",
      apiFootballId: 850,
      country: "World",
      url: "uefa-u21-championship-qualification-850",
    },
    {
      name: "CONCACAF Caribbean Club Championship",
      logo: "https://media.api-sports.io/football/leagues/856.png",
      apiFootballId: 856,
      country: "World",
      url: "concacaf-caribbean-club-championship-856",
    },
    {
      name: "CONCACAF Gold Cup - Qualification",
      logo: "https://media.api-sports.io/football/leagues/858.png",
      apiFootballId: 858,
      country: "World",
      url: "concacaf-gold-cup-qualification-858",
    },
    {
      name: "COSAFA Cup",
      logo: "https://media.api-sports.io/football/leagues/859.png",
      apiFootballId: 859,
      country: "World",
      url: "cosafa-cup-859",
    },
    {
      name: "Arab Cup",
      logo: "https://media.api-sports.io/football/leagues/860.png",
      apiFootballId: 860,
      country: "World",
      url: "arab-cup-860",
    },
    {
      name: "CECAFA Club Cup",
      logo: "https://media.api-sports.io/football/leagues/869.png",
      apiFootballId: 869,
      country: "World",
      url: "cecafa-club-cup-869",
    },
    {
      name: "World Cup - Women - Qualification Europe",
      logo: "https://media.api-sports.io/football/leagues/880.png",
      apiFootballId: 880,
      country: "World",
      url: "world-cup-women-qualification-europe-880",
    },
    {
      name: "Olympics Men - Qualification Concacaf",
      logo: "https://media.api-sports.io/football/leagues/881.png",
      apiFootballId: 881,
      country: "World",
      url: "olympics-men-qualification-concacaf-881",
    },
    {
      name: "Olympics Women - Qualification Asia",
      logo: "https://media.api-sports.io/football/leagues/882.png",
      apiFootballId: 882,
      country: "World",
      url: "olympics-women-qualification-asia-882",
    },
    {
      name: "Campeones Cup",
      logo: "https://media.api-sports.io/football/leagues/885.png",
      apiFootballId: 885,
      country: "World",
      url: "campeones-cup-885",
    },
    {
      name: "UEFA U17 Championship - Qualification",
      logo: "https://media.api-sports.io/football/leagues/886.png",
      apiFootballId: 886,
      country: "World",
      url: "uefa-u17-championship-qualification-886",
    },
    {
      name: "U20 Elite League",
      logo: "https://media.api-sports.io/football/leagues/890.png",
      apiFootballId: 890,
      country: "World",
      url: "u20-elite-league-890",
    },
    {
      name: "UEFA U19 Championship - Qualification",
      logo: "https://media.api-sports.io/football/leagues/893.png",
      apiFootballId: 893,
      country: "World",
      url: "uefa-u19-championship-qualification-893",
    },
    {
      name: "Asian Cup Women - Qualification",
      logo: "https://media.api-sports.io/football/leagues/894.png",
      apiFootballId: 894,
      country: "World",
      url: "asian-cup-women-qualification-894",
    },
    {
      name: "Asian Cup Women",
      logo: "https://media.api-sports.io/football/leagues/897.png",
      apiFootballId: 897,
      country: "World",
      url: "asian-cup-women-897",
    },
    {
      name: "Tipsport Malta Cup",
      logo: "https://media.api-sports.io/football/leagues/900.png",
      apiFootballId: 900,
      country: "World",
      url: "tipsport-malta-cup-900",
    },
    {
      name: "Algarve Cup",
      logo: "https://media.api-sports.io/football/leagues/902.png",
      apiFootballId: 902,
      country: "World",
      url: "algarve-cup-902",
    },
    {
      name: "The Atlantic Cup",
      logo: "https://media.api-sports.io/football/leagues/903.png",
      apiFootballId: 903,
      country: "World",
      url: "the-atlantic-cup-903",
    },
    {
      name: "SheBelieves Cup",
      logo: "https://media.api-sports.io/football/leagues/904.png",
      apiFootballId: 904,
      country: "World",
      url: "shebelieves-cup-904",
    },
    {
      name: "AFF U23 Championship",
      logo: "https://media.api-sports.io/football/leagues/908.png",
      apiFootballId: 908,
      country: "World",
      url: "aff-u23-championship-908",
    },
    {
      name: "Youth Viareggio Cup",
      logo: "https://media.api-sports.io/football/leagues/910.png",
      apiFootballId: 910,
      country: "World",
      url: "youth-viareggio-cup-910",
    },
    {
      name: "Southeast Asian Games",
      logo: "https://media.api-sports.io/football/leagues/911.png",
      apiFootballId: 911,
      country: "World",
      url: "southeast-asian-games-911",
    },
    {
      name: "CONCACAF Women U17",
      logo: "https://media.api-sports.io/football/leagues/912.png",
      apiFootballId: 912,
      country: "World",
      url: "concacaf-women-u17-912",
    },
    {
      name: "CONMEBOL - UEFA Finalissima",
      logo: "https://media.api-sports.io/football/leagues/913.png",
      apiFootballId: 913,
      country: "World",
      url: "conmebol-uefa-finalissima-913",
    },
    {
      name: "Tournoi Maurice Revello",
      logo: "https://media.api-sports.io/football/leagues/914.png",
      apiFootballId: 914,
      country: "World",
      url: "tournoi-maurice-revello-914",
    },
    {
      name: "Kirin Cup",
      logo: "https://media.api-sports.io/football/leagues/916.png",
      apiFootballId: 916,
      country: "World",
      url: "kirin-cup-916",
    },
    {
      name: "UEFA U19 Championship - Women",
      logo: "https://media.api-sports.io/football/leagues/918.png",
      apiFootballId: 918,
      country: "World",
      url: "uefa-u19-championship-women-918",
    },
    {
      name: "Mediterranean Games",
      logo: "https://media.api-sports.io/football/leagues/919.png",
      apiFootballId: 919,
      country: "World",
      url: "mediterranean-games-919",
    },
    {
      name: "World Cup - U20 - Women",
      logo: "https://media.api-sports.io/football/leagues/920.png",
      apiFootballId: 920,
      country: "World",
      url: "world-cup-u20-women-920",
    },
    {
      name: "UEFA U17 Championship",
      logo: "https://media.api-sports.io/football/leagues/921.png",
      apiFootballId: 921,
      country: "World",
      url: "uefa-u17-championship-921",
    },
    {
      name: "Africa Cup of Nations - Women",
      logo: "https://media.api-sports.io/football/leagues/922.png",
      apiFootballId: 922,
      country: "World",
      url: "africa-cup-of-nations-women-922",
    },
    {
      name: "Copa America Femenina",
      logo: "https://media.api-sports.io/football/leagues/926.png",
      apiFootballId: 926,
      country: "World",
      url: "copa-america-femenina-926",
    },
    {
      name: "World Cup - Women - Qualification Concacaf",
      logo: "https://media.api-sports.io/football/leagues/927.png",
      apiFootballId: 927,
      country: "World",
      url: "world-cup-women-qualification-concacaf-927",
    },
    {
      name: "AFF U19 Championship",
      logo: "https://media.api-sports.io/football/leagues/928.png",
      apiFootballId: 928,
      country: "World",
      url: "aff-u19-championship-928",
    },
    {
      name: "Arab Championship - U20",
      logo: "https://media.api-sports.io/football/leagues/934.png",
      apiFootballId: 934,
      country: "World",
      url: "arab-championship-u20-934",
    },
    {
      name: "Emirates Cup",
      logo: "https://media.api-sports.io/football/leagues/937.png",
      apiFootballId: 937,
      country: "World",
      url: "emirates-cup-937",
    },
    {
      name: "COTIF Tournament",
      logo: "https://media.api-sports.io/football/leagues/940.png",
      apiFootballId: 940,
      country: "World",
      url: "cotif-tournament-940",
    },
    {
      name: "Islamic Solidarity Games",
      logo: "https://media.api-sports.io/football/leagues/941.png",
      apiFootballId: 941,
      country: "World",
      url: "islamic-solidarity-games-941",
    },
    {
      name: "International Champions Cup - Women",
      logo: "https://media.api-sports.io/football/leagues/945.png",
      apiFootballId: 945,
      country: "World",
      url: "international-champions-cup-women-945",
    },
    {
      name: "CONMEBOL Libertadores Femenina",
      logo: "https://media.api-sports.io/football/leagues/949.png",
      apiFootballId: 949,
      country: "World",
      url: "conmebol-libertadores-femenina-949",
    },
    {
      name: "World Cup - U17 - Women",
      logo: "https://media.api-sports.io/football/leagues/950.png",
      apiFootballId: 950,
      country: "World",
      url: "world-cup-u17-women-950",
    },
    {
      name: "South American Youth Games",
      logo: "https://media.api-sports.io/football/leagues/951.png",
      apiFootballId: 951,
      country: "World",
      url: "south-american-youth-games-951",
    },
    {
      name: "AFC U23 Asian Cup - Qualification",
      logo: "https://media.api-sports.io/football/leagues/952.png",
      apiFootballId: 952,
      country: "World",
      url: "afc-u23-asian-cup-qualification-952",
    },
    {
      name: "Africa U23 Cup of Nations - Qualification",
      logo: "https://media.api-sports.io/football/leagues/953.png",
      apiFootballId: 953,
      country: "World",
      url: "africa-u23-cup-of-nations-qualification-953",
    },
    {
      name: "Euro Championship - Qualification",
      logo: "https://media.api-sports.io/football/leagues/960.png",
      apiFootballId: 960,
      country: "World",
      url: "euro-championship-qualification-960",
    },
    {
      name: "CONCACAF U17",
      logo: "https://media.api-sports.io/football/leagues/963.png",
      apiFootballId: 963,
      country: "World",
      url: "concacaf-u17-963",
    },
    {
      name: "AFC U20 Asian Cup",
      logo: "https://media.api-sports.io/football/leagues/965.png",
      apiFootballId: 965,
      country: "World",
      url: "afc-u20-asian-cup-965",
    },
    {
      name: "CONMEBOL - U17",
      logo: "https://media.api-sports.io/football/leagues/970.png",
      apiFootballId: 970,
      country: "World",
      url: "conmebol-u17-970",
    },
    {
      name: "CAF Cup of Nations - U17",
      logo: "https://media.api-sports.io/football/leagues/973.png",
      apiFootballId: 973,
      country: "World",
      url: "caf-cup-of-nations-u17-973",
    },
    {
      name: "CONCACAF Women U20",
      logo: "https://media.api-sports.io/football/leagues/1001.png",
      apiFootballId: 1001,
      country: "World",
      url: "concacaf-women-u20-1001",
    },
    {
      name: "CAFA Nations Cup",
      logo: "https://media.api-sports.io/football/leagues/1008.png",
      apiFootballId: 1008,
      country: "World",
      url: "cafa-nations-cup-1008",
    },
    {
      name: "AFC U17 Asian Cup",
      logo: "https://media.api-sports.io/football/leagues/1012.png",
      apiFootballId: 1012,
      country: "World",
      url: "afc-u17-asian-cup-1012",
    },
    {
      name: "All-Island Cup - Women",
      logo: "https://media.api-sports.io/football/leagues/1013.png",
      apiFootballId: 1013,
      country: "World",
      url: "all-island-cup-women-1013",
    },
    {
      name: "CAF U23 Cup of Nations",
      logo: "https://media.api-sports.io/football/leagues/1015.png",
      apiFootballId: 1015,
      country: "World",
      url: "caf-u23-cup-of-nations-1015",
    },
    {
      name: "CAC Games",
      logo: "https://media.api-sports.io/football/leagues/1016.png",
      apiFootballId: 1016,
      country: "World",
      url: "cac-games-1016",
    },
    {
      name: "UEFA - CONMEBOL - Club Challenge",
      logo: "https://media.api-sports.io/football/leagues/1024.png",
      apiFootballId: 1024,
      country: "World",
      url: "uefa-conmebol-club-challenge-1024",
    },
    {
      name: "Concacaf Central American Cup",
      logo: "https://media.api-sports.io/football/leagues/1028.png",
      apiFootballId: 1028,
      country: "World",
      url: "concacaf-central-american-cup-1028",
    },
    {
      name: "King's Cup",
      logo: "https://media.api-sports.io/football/leagues/1038.png",
      apiFootballId: 1038,
      country: "World",
      url: "kings-cup-1038",
    },
    {
      name: "Premier League International Cup",
      logo: "https://media.api-sports.io/football/leagues/1039.png",
      apiFootballId: 1039,
      country: "World",
      url: "premier-league-international-cup-1039",
    },
    {
      name: "UEFA Nations League - Women",
      logo: "https://media.api-sports.io/football/leagues/1040.png",
      apiFootballId: 1040,
      country: "World",
      url: "uefa-nations-league-women-1040",
    },
    {
      name: "African Football League",
      logo: "https://media.api-sports.io/football/leagues/1043.png",
      apiFootballId: 1043,
      country: "World",
      url: "african-football-league-1043",
    },
    {
      name: "Pan American Games",
      logo: "https://media.api-sports.io/football/leagues/1045.png",
      apiFootballId: 1045,
      country: "World",
      url: "pan-american-games-1045",
    },
    {
      name: "CONCACAF Gold Cup - Qualification - Women",
      logo: "https://media.api-sports.io/football/leagues/1046.png",
      apiFootballId: 1046,
      country: "World",
      url: "concacaf-gold-cup-qualification-women-1046",
    },
    {
      name: "Olympics Women - Qualification CAF",
      logo: "https://media.api-sports.io/football/leagues/1047.png",
      apiFootballId: 1047,
      country: "World",
      url: "olympics-women-qualification-caf-1047",
    },
    {
      name: "CONCACAF Gold Cup - Women",
      logo: "https://media.api-sports.io/football/leagues/1057.png",
      apiFootballId: 1057,
      country: "World",
      url: "concacaf-gold-cup-women-1057",
    },
    {
      name: "CONMEBOL - Pre-Olympic Tournament",
      logo: "https://media.api-sports.io/football/leagues/1060.png",
      apiFootballId: 1060,
      country: "World",
      url: "conmebol-pre-olympic-tournament-1060",
    },
    {
      name: "CONCACAF U20 - Qualification",
      logo: "https://media.api-sports.io/football/leagues/1066.png",
      apiFootballId: 1066,
      country: "World",
      url: "concacaf-u20-qualification-1066",
    },
    {
      name: "AFC U20 Asian Cup - Women",
      logo: "https://media.api-sports.io/football/leagues/1070.png",
      apiFootballId: 1070,
      country: "World",
      url: "afc-u20-asian-cup-women-1070",
    },
    {
      name: "All Africa Games",
      logo: "https://media.api-sports.io/football/leagues/1072.png",
      apiFootballId: 1072,
      country: "World",
      url: "all-africa-games-1072",
    },
    {
      name: "WAFF Championship U23",
      logo: "https://media.api-sports.io/football/leagues/1077.png",
      apiFootballId: 1077,
      country: "World",
      url: "waff-championship-u23-1077",
    },
    {
      name: "CONMEBOL - U17 Femenino",
      logo: "https://media.api-sports.io/football/leagues/1081.png",
      apiFootballId: 1081,
      country: "World",
      url: "conmebol-u17-femenino-1081",
    },
    {
      name: "UEFA Championship - Women - Qualification",
      logo: "https://media.api-sports.io/football/leagues/1083.png",
      apiFootballId: 1083,
      country: "World",
      url: "uefa-championship-women-qualification-1083",
    },
    {
      name: "CONMEBOL U20 Femenino",
      logo: "https://media.api-sports.io/football/leagues/1085.png",
      apiFootballId: 1085,
      country: "World",
      url: "conmebol-u20-femenino-1085",
    },
    {
      name: "UAE-Qatar - Super Shield",
      logo: "https://media.api-sports.io/football/leagues/1089.png",
      apiFootballId: 1089,
      country: "World",
      url: "uae-qatar-super-shield-1089",
    },
    {
      name: "AFC U17 Asian Cup - Women",
      logo: "https://media.api-sports.io/football/leagues/1101.png",
      apiFootballId: 1101,
      country: "World",
      url: "afc-u17-asian-cup-women-1101",
    },
    {
      name: "UEFA U17 Championship - Women",
      logo: "https://media.api-sports.io/football/leagues/1102.png",
      apiFootballId: 1102,
      country: "World",
      url: "uefa-u17-championship-women-1102",
    },
    {
      name: "Olympics - Intercontinental Play-offs",
      logo: "https://media.api-sports.io/football/leagues/1105.png",
      apiFootballId: 1105,
      country: "World",
      url: "olympics-intercontinental-play-offs-1105",
    },
    {
      name: "OFC U19 Championship",
      logo: "https://media.api-sports.io/football/leagues/1122.png",
      apiFootballId: 1122,
      country: "World",
      url: "ofc-u19-championship-1122",
    },
    {
      name: "Qatar-UAE Super Cup",
      logo: "https://media.api-sports.io/football/leagues/1123.png",
      apiFootballId: 1123,
      country: "World",
      url: "qatar-uae-super-cup-1123",
    },
    {
      name: "ASEAN Club Championship",
      logo: "https://media.api-sports.io/football/leagues/1129.png",
      apiFootballId: 1129,
      country: "World",
      url: "asean-club-championship-1129",
    },
  ],
};

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
      league.country.name.toLowerCase() === country?.toLowerCase(),
  );
