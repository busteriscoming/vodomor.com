export let refrestDataTime = `21.06.21 г.`;
export let refrestDataTimeText = `Данные от `;

export let filled = [
  5160, // Изобильненское
  19500, // Загорское
  700, // Балановское
  9910, // Счасливенское
  1100, // Тайганское
  9800, // Белогорское
  12700, // Партизанское
  7920, // Симферопольское
  3900, // Аянское
  600, // Старокрымское
  43000, // Чернореченское
  1860, // Альминское (данных нет)
  153, // Бахчисарайское (данных нет)
  450, // Кутузовское
  880, // Льговское
];

export const death = [
  1200, 2500, 400, 1500, 900, 1500, 4000, 5000, 200, 300, 7000, 1860, 2000, 330,
  660,
];

export const full = [
  13250, 27850, 5070, 11800, 13800, 23300, 34400, 36000, 3900, 3150, 64200,
  6200, 6890, 1100, 2200,
];

export let estfilled = filled.reduce((acc, curr) => acc + curr, 0);
export let estfull = full.reduce((acc, curr) => acc + curr, 0);
export let estpercent = +((estfilled * 100) / estfull).toFixed(1);

export let filled_nalivnie = [
  2358, // Зеленоярское (на 2018 г.)
  1320, // Межгорное (га 2019 год.)
  3300, // Самарлинское
  9360, // Керченское (станционное)
  0, // Сокольское
  6000, // Феодосийское
  1100, // Фронтовое
  2850, // Ленинское (Юзмакское)
];

export const death_nalivnie = [1006, 15000, 1000, 7200, 678, 4600, 6000, 1000];
export const full_nalivnie = [
  3720, 50000, 9000, 24000, 2260, 15370, 35000, 7700,
];

export let nalivfilled_nalivnie = filled_nalivnie.reduce(
  (acc, curr) => acc + curr,
  0
);
export let nalivfull_nalivnie = full_nalivnie.reduce(
  (acc, curr) => acc + curr,
  0
);
export let nalivpercent_nalivnie = +(
  (nalivfilled_nalivnie * 100) /
  nalivfull_nalivnie
).toFixed(1);

export let allFilled = estfilled + nalivfilled_nalivnie;
export let allFull = estfull + nalivfull_nalivnie;
export let allPercent = +((allFilled * 100) / allFull).toFixed(1);

export let filled_timeline = [
  3500, // Изобильненское 0
  2500, // Загорское 1
  550, // Балановское 2
  6200, // Счасливенское 3
  1200, // Тайганское 4
  11500, // Белогорское 5
  5800, // Партизанское 6
  3600, // Симферопольское 7
  1900, // Аянское 8
  600, // Старокрымское 9
  3200, // Самарлинское 10
  2900, // Ленинское (юзмакское) 11
  15600, // Чернореченское 12
  1000, // Альминское (данных нет) 13
  200, // Бахчисарайское (данных нет) 14
  0, // Кутузовское 15
  880, // Льговское 16
  2358, // Зеленоярское (на 2018 г.) 17
  1320, // Межгорное (га 2019 год.) 18
  4000, // Керченское (станционное) (на 2018 г.) 19
  6000, // Феодосийское 20
  1460, // Фронтовое 21
];

export const death_timeline = [
  1200, 2500, 400, 1500, 900, 1500, 4000, 5000, 200, 300, 1000, 1000, 7000,
  1860, 2000, 330, 660, 1006, 15000, 7200, 4600, 6000,
];
export const full_timeline = [
  13250, 27850, 5070, 11800, 13800, 23300, 34400, 36000, 3900, 3150, 9000, 7700,
  64200, 6200, 6890, 1100, 2200, 3720, 50000, 24000, 15370, 35000,
];

export let estfilled_timeline = filled_timeline.reduce(
  (acc, curr) => acc + curr,
  0
);
export let estfull_timeline = full_timeline.reduce(
  (acc, curr) => acc + curr,
  0
);

export let isobilnenskoe = [
  {
    date: '2020-12-12',
    capacity: 3150,
    percentage: ((3150 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 2700,
    percentage: ((2700 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 2800,
    percentage: ((2800 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 3000,
    percentage: ((3000 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 3010,
    percentage: ((3010 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 3010,
    percentage: ((3010 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 3010,
    percentage: ((3010 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 3020,
    percentage: ((3020 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 3020,
    percentage: ((3020 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 3050,
    percentage: ((3050 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-04-08',
    capacity: 3100,
    percentage: ((3100 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-04-16',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 3880,
    percentage: ((3880 * 100) / full_timeline[0]).toFixed(1),
  },
  {
    date: '2021-06-21',
    capacity: 5160,
    percentage: ((5160 * 100) / full_timeline[0]).toFixed(1),
  },
];
export let zagorskoe = [
  {
    date: '2020-12-12',
    capacity: 2800,
    percentage: ((2800 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 2500,
    percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-04-16',
    capacity: 8400,
    percentage: ((8400 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 10800,
    percentage: ((10800 / full_timeline[1]) * 100).toFixed(1),
  },
  {
    date: '2021-06-21',
    capacity: 19500,
    percentage: ((19500 / full_timeline[1]) * 100).toFixed(1),
  },
];
export let balanovskoe = [
  {
    date: '2020-12-12',
    capacity: 700,
    percentage: ((700 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 700,
    percentage: ((700 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 700,
    percentage: ((700 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 650,
    percentage: ((650 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 600,
    percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 600,
    percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 600,
    percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 600,
    percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 600,
    percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 600,
    percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 550,
    percentage: ((550 / full_timeline[2]) * 100).toFixed(1),
  },
  {
    date: '2021-04-08',
    capacity: 600,
    percentage: ((600 * 100) / full_timeline[2]).toFixed(1),
  },
  {
    date: '2021-04-16',
    capacity: 600,
    percentage: ((600 * 100) / full_timeline[2]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 700,
    percentage: ((700 * 100) / full_timeline[2]).toFixed(1),
  },
];
export let schastlivenskoe = [
  {
    date: '2020-12-12',
    capacity: 3800,
    percentage: ((3800 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 3400,
    percentage: ((3400 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 4600,
    percentage: ((4600 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 5600,
    percentage: ((5600 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 5800,
    percentage: ((5800 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 5900,
    percentage: ((5900 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 5950,
    percentage: ((5950 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 5900,
    percentage: ((5900 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 5950,
    percentage: ((5950 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 6000,
    percentage: ((6000 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 6200,
    percentage: ((6200 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-04-08',
    capacity: 7100,
    percentage: ((7100 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-04-16',
    capacity: 8400,
    percentage: ((8400 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 7600,
    percentage: ((7600 / full_timeline[3]) * 100).toFixed(1),
  },
  {
    date: '2021-06-21',
    capacity: 9910,
    percentage: ((9910 / full_timeline[3]) * 100).toFixed(1),
  },
];
export let tayganskoe = [
  {
    date: '2015-10-01',
    capacity: 3700,
    percentage: ((3700 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2019-01-21',
    capacity: 1000,
    percentage: ((1000 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2019-02-26',
    capacity: 11000,
    percentage: ((11000 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2019-04-01',
    capacity: 13700,
    percentage: ((13700 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2020-12-12',
    capacity: 1300,
    percentage: ((1300 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 1100,
    percentage: ((1100 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 1150,
    percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 1200,
    percentage: ((1200 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 1150,
    percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 1150,
    percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 1150,
    percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 1200,
    percentage: ((1200 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 1150,
    percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 1200,
    percentage: ((1200 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 1200,
    percentage: ((1200 / full_timeline[4]) * 100).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 1100,
    percentage: ((1100 / full_timeline[4]) * 100).toFixed(1),
  },
];
export let belogorskoe = [
  {
    date: '2015-02-02',
    capacity: 12000,
    percentage: ((12000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2015-05-20',
    capacity: 18000,
    percentage: ((18000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2015-10-01',
    capacity: 4100,
    percentage: ((4100 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2020-12-12',
    capacity: 3400,
    percentage: ((3400 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 3800,
    percentage: ((3800 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 6000,
    percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 6000,
    percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 6000,
    percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 6000,
    percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 6000,
    percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 6000,
    percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 6000,
    percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 6000,
    percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 11500,
    percentage: ((11500 / full_timeline[5]) * 100).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 9800,
    percentage: ((9800 / full_timeline[5]) * 100).toFixed(1),
  },
];
export let partizanskoe = [
  {
    date: '2020-02-05',
    capacity: 12765,
    percentage: ((12765 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2020-08-25',
    capacity: 7000,
    percentage: ((700 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2020-12-12',
    capacity: 4800,
    percentage: ((4800 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 4300,
    percentage: ((4300 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 4400,
    percentage: ((4400 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 5200,
    percentage: ((5200 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 5300,
    percentage: ((5300 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 5400,
    percentage: ((5400 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 5500,
    percentage: ((5500 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 5300,
    percentage: ((5300 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 5400,
    percentage: ((5400 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 5600,
    percentage: ((5600 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 5800,
    percentage: ((5800 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 8600,
    percentage: ((8600 * 100) / full_timeline[6]).toFixed(1),
  },
  {
    date: '2021-06-21',
    capacity: 12700,
    percentage: ((12700 * 100) / full_timeline[6]).toFixed(1),
  },
];
export let simferopolskoe = [
  {
    date: '2018-12-01',
    capacity: 15600,
    percentage: ((15600 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2019-09-15',
    capacity: 16000,
    percentage: ((16000 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2020-02-15',
    capacity: 11700,
    percentage: ((11700 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2020-04-03',
    capacity: 11000,
    percentage: ((11000 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2020-04-13',
    capacity: 10115,
    percentage: ((10115 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2020-08-27',
    capacity: 7000,
    percentage: ((7000 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2020-10-03',
    capacity: 6000,
    percentage: ((6000 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2020-11-15',
    capacity: 4900,
    percentage: ((4900 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2020-12-12',
    capacity: 4200,
    percentage: ((4200 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 3500,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 3600,
    percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-04-08',
    capacity: 5000,
    percentage: ((5000 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-04-16',
    capacity: 5800,
    percentage: ((5800 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 6500,
    percentage: ((6500 * 100) / full_timeline[7]).toFixed(1),
  },
  {
    date: '2021-06-21',
    capacity: 7920,
    percentage: ((7920 * 100) / full_timeline[7]).toFixed(1),
  },
];

export let ayanskoe = [
  {
    date: '2020-12-12',
    capacity: 300,
    percentage: ((300 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 350,
    percentage: ((350 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 700,
    percentage: ((700 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 1200,
    percentage: ((1200 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 1400,
    percentage: ((1400 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 1500,
    percentage: ((1500 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 1550,
    percentage: ((1550 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 1600,
    percentage: ((1600 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 1700,
    percentage: ((1700 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 1800,
    percentage: ((1800 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 1900,
    percentage: ((1900 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 2700,
    percentage: ((2700 * 100) / full_timeline[8]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 3900,
    percentage: ((3900 * 100) / full_timeline[8]).toFixed(1),
  },
];
export let starokrimskoe = [
  {
    date: '2020-12-12',
    capacity: 700,
    percentage: ((700 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 650,
    percentage: ((650 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 600,
    percentage: ((600 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 500,
    percentage: ((500 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 650,
    percentage: ((650 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 600,
    percentage: ((600 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 550,
    percentage: ((550 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 500,
    percentage: ((500 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 600,
    percentage: ((600 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 500,
    percentage: ((500 * 100) / full_timeline[9]).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 600,
    percentage: ((600 * 100) / full_timeline[9]).toFixed(1),
  },
];
export let samarlinskoe = [
  {
    date: '2020-12-12',
    capacity: 3200,
    percentage: ((3200 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 3050,
    percentage: ((3050 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 2900,
    percentage: ((2900 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 3300,
    percentage: ((3300 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 3450,
    percentage: ((3450 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 3400,
    percentage: ((3400 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 3350,
    percentage: ((3350 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 3300,
    percentage: ((3300 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 3250,
    percentage: ((3250 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 3200,
    percentage: ((3200 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 3200,
    percentage: ((3200 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-04-08',
    capacity: 3200,
    percentage: ((3200 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-04-16',
    capacity: 3000,
    percentage: ((3000 * 100) / full_timeline[10]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 3300,
    percentage: ((3300 * 100) / full_timeline[10]).toFixed(1),
  },
];
export let leninskoe = [
  {
    date: '2020-12-12',
    capacity: 2400,
    percentage: ((2400 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-01-12',
    capacity: 2500,
    percentage: ((2500 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-02-01',
    capacity: 2600,
    percentage: ((2600 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-02-26',
    capacity: 3200,
    percentage: ((3200 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-03-02',
    capacity: 3250,
    percentage: ((3250 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-03-05',
    capacity: 3200,
    percentage: ((3200 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-03-08',
    capacity: 3100,
    percentage: ((3100 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-03-12',
    capacity: 3050,
    percentage: ((3050 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-03-19',
    capacity: 2900,
    percentage: ((2900 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-03-23',
    capacity: 2950,
    percentage: ((2950 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-03-26',
    capacity: 2900,
    percentage: ((2900 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-04-08',
    capacity: 2900,
    percentage: ((2900 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-04-16',
    capacity: 2800,
    percentage: ((2800 * 100) / full_timeline[11]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 2850,
    percentage: ((2850 * 100) / full_timeline[11]).toFixed(1),
  },
];
export let lgovskoe = [
  {
    date: '2015-04-15',
    capacity: 191,
    percentage: ((191 * 100) / full_timeline[16]).toFixed(1),
  },
  {
    date: '2016-07-15',
    capacity: 117,
    percentage: ((117 * 100) / full_timeline[16]).toFixed(1),
  },
  {
    date: '2018-04-23',
    capacity: 1829,
    percentage: ((1829 * 100) / full_timeline[16]).toFixed(1),
  },
  {
    date: '2019-01-10',
    capacity: 1491,
    percentage: ((1491 * 100) / full_timeline[16]).toFixed(1),
  },
  {
    date: '2020-10-15',
    capacity: 1031,
    percentage: ((1031 * 100) / full_timeline[16]).toFixed(1),
  },
  {
    date: '2021-01-15',
    capacity: 880,
    percentage: ((880 * 100) / full_timeline[16]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 900,
    percentage: ((900 * 100) / full_timeline[16]).toFixed(1),
  },
];
export let chernorechenskoe = [
  {
    date: '2015-05-20',
    capacity: 49000,
    percentage: ((49000 * 100) / full_timeline[12]).toFixed(1),
  },
  {
    date: '2015-10-05',
    capacity: 40000,
    percentage: ((40000 * 100) / full_timeline[12]).toFixed(1),
  },
  {
    date: '2016-02-05',
    capacity: 40000,
    percentage: ((40000 * 100) / full_timeline[12]).toFixed(1),
  },
  {
    date: '2020-10-05',
    capacity: 15600,
    percentage: ((15600 * 100) / full_timeline[12]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 23500,
    percentage: ((25100 * 100) / full_timeline[12]).toFixed(1),
  },
];
export let zelenoyarskoe = [
  {
    date: '2018-05-20',
    capacity: 2358,
    percentage: ((2358 * 100) / full_timeline[17]).toFixed(1),
  },
];
export let mejgornoe = [
  {
    date: '2014-04-01',
    capacity: 25570,
    percentage: ((25570 * 100) / full_timeline[18]).toFixed(1),
  },
  {
    date: '2014-09-08',
    capacity: 15500,
    percentage: ((15500 * 100) / full_timeline[18]).toFixed(1),
  },
  {
    date: '2015-06-01',
    capacity: 500,
    percentage: ((500 * 100) / full_timeline[18]).toFixed(1),
  },
  {
    date: '2019-04-01',
    capacity: 1320,
    percentage: ((1320 * 100) / full_timeline[18]).toFixed(1),
  },
];
export let kerchenskoe = [
  {
    date: '2014-10-23',
    capacity: 9500,
    percentage: ((9500 * 100) / full_timeline[19]).toFixed(1),
  },
  {
    date: '2015-01-15',
    capacity: 5150,
    percentage: ((5150 * 100) / full_timeline[19]).toFixed(1),
  },
  {
    date: '2015-10-23',
    capacity: 10000,
    percentage: ((10000 * 100) / full_timeline[19]).toFixed(1),
  },
  {
    date: '2018-12-15',
    capacity: 4000,
    percentage: ((4000 * 100) / full_timeline[19]).toFixed(1),
  },
];

export let feodosiyskoe = [
  {
    date: '2014-04-01',
    capacity: 8460,
    percentage: ((8460 * 100) / full_timeline[20]).toFixed(1),
  },
  {
    date: '2014-10-23',
    capacity: 8300,
    percentage: ((8300 * 100) / full_timeline[20]).toFixed(1),
  },
  {
    date: '2015-05-01',
    capacity: 12300,
    percentage: ((12300 * 100) / full_timeline[20]).toFixed(1),
  },
  {
    date: '2015-10-23',
    capacity: 9500,
    percentage: ((9500 * 100) / full_timeline[20]).toFixed(1),
  },
  {
    date: '2017-01-30',
    capacity: 7300,
    percentage: ((7300 * 100) / full_timeline[20]).toFixed(1),
  },
  {
    date: '2018-12-15',
    capacity: 6000,
    percentage: ((6000 * 100) / full_timeline[20]).toFixed(1),
  },
];

export let frontovoe = [
  {
    date: '2014-04-01',
    capacity: 29600,
    percentage: ((29600 * 100) / full_timeline[21]).toFixed(1),
  },
  {
    date: '2017-01-15',
    capacity: 3000,
    percentage: ((3000 * 100) / full_timeline[21]).toFixed(1),
  },
  {
    date: '2019-12-01',
    capacity: 1460,
    percentage: ((1460 * 100) / full_timeline[21]).toFixed(1),
  },
  {
    date: '2021-06-01',
    capacity: 1100,
    percentage: ((1100 * 100) / full_timeline[21]).toFixed(1),
  },
];

export let yuzmakskoe = [];
