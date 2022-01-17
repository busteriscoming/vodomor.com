let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
let isMobile = clientHeight > clientWidth ? true : false;
import {
  filled_nalivnie,
  death_nalivnie,
  full_nalivnie,
  refrestDataTime,
  nalivfilled_nalivnie,
  nalivfull_nalivnie,
} from './data/module.js';

const color1 = document.querySelector(`.color1`);
const color2 = document.querySelector(`.color2`);
const body = document.querySelector(`body`);
const html = document.querySelector(`html`);
const text = document.querySelector(`h3`);
const btnRandom = document.querySelector(`.btn--random`);
const gridColor = document.querySelector(`.gridColor`);
const textColor = document.querySelector(`.textColor`);
const btnApply = document.querySelector(`.btn--apply`);
const opacityValue = document.querySelector(`.opacity--value`);
const btnOpacity1 = document.querySelector(`.btn--opacity1`);
const btnOpacity2 = document.querySelector(`.btn--opacity2`);

let randomColor1 = ``;
let randomColor2 = ``;
text.textContent = `linear-gradient(to right, red, yellow)`;

const randomNumber = function () {
  return Math.trunc(Math.random() * 255);
};

let opacity = 85;

opacityValue.textContent = `${opacity}%`;
opacityValue.style.opacity = `${opacity}%`;

const increaseOppacity = function () {
  if (opacity < 100) {
    opacity += 5;
    opacityValue.textContent = `${opacity}%`;
    opacityValue.style.opacity = `${opacity}%`;
  } else {
    return;
  }
};
const decreaseOppacity = function () {
  if (opacity > 5) {
    opacity -= 5;
    opacityValue.textContent = `${opacity}%`;
    opacityValue.style.opacity = `${opacity}%`;
  } else {
    return;
  }
};

btnOpacity1.addEventListener(`click`, decreaseOppacity);
btnOpacity2.addEventListener(`click`, increaseOppacity);

btnRandom.addEventListener(`click`, function () {
  randomColor1 = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  randomColor2 = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
  text.textContent = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
  btnRandom.style.background = `linear-gradient(to left, ${randomColor1}, ${randomColor2})`;
  btnApply.style.background = `linear-gradient(to left, ${randomColor1}, ${randomColor2})`;
  btnOpacity1.style.background = `linear-gradient(to left, ${randomColor1}, ${randomColor2})`;
  btnOpacity2.style.background = `linear-gradient(to left, ${randomColor1}, ${randomColor2})`;
});

const changeStyle = function () {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  text.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

color1.addEventListener('input', changeStyle);

color2.addEventListener('input', changeStyle);

// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================

function am4themes_myTheme(target) {
  if (target instanceof am4core.InterfaceColorSet) {
    // target.setFor('secondaryButton', am4core.color('#5ec576'));
    // target.setFor(
    //   'secondaryButtonHover',
    //   am4core.color('#4bbb7d').lighten(-0.2)
    // );
    // target.setFor(
    //   'secondaryButtonDown',
    //   am4core.color('#4bbb7d').lighten(-0.2)
    // );
    // target.setFor(
    //   'secondaryButtonActive',
    //   am4core.color('#4bbb7d').lighten(-0.2)
    // );
    // target.setFor('secondaryButtonText', am4core.color('#FFFFFF'));
    // target.setFor('secondaryButtonStroke', am4core.color('#467B88'));
    target.setFor('grid', am4core.color(`${gridColor.value}`));
    target.setFor('text', am4core.color(`${textColor.value}`));
    // target.setFor('background', am4core.color('black'));
    target.setFor('alternativeBackground', am4core.color('black'));
  }
}

am4core.useTheme(am4themes_myTheme);

am4core.useTheme(am4themes_animated);

const createChart3Main = function () {
  var chart_nalivnie = am4core.create('chartdiv2', am4charts.XYChart);
  chart_nalivnie.exporting.menu = new am4core.ExportMenu();
  var annotation_nalivnie = chart_nalivnie.plugins.push(
    new am4plugins_annotation.Annotation()
  );
  annotation_nalivnie.useMenu = true;
  chart_nalivnie.hiddenState.properties.opacity = 0;
  chart_nalivnie.padding(
    0,
    clientWidth <= 900 ? 0 : 10,
    0,
    clientWidth <= 900 ? 0 : 10
  );
  chart_nalivnie.plotContainer.mouseOptions.sensitivity = 0.5;

  chart_nalivnie.cursor = new am4charts.XYCursor();
  chart_nalivnie.cursor.maxTooltipDistance = -1;
  // ====================================================================================================================

  let textLabel_nalivnie = chart_nalivnie.plotContainer.createChild(
    am4core.Label
  );
  textLabel_nalivnie.text = `Последнее обновление данных\n${refrestDataTime}`;
  textLabel_nalivnie.y = 50;
  textLabel_nalivnie.x = am4core.percent(100);
  textLabel_nalivnie.horizontalCenter = 'right';
  textLabel_nalivnie.zIndex = 100;
  textLabel_nalivnie.fillOpacity = 0.9;
  // ====================================================================================================================

  let textLabel2_nalivnie = chart_nalivnie.plotContainer.createChild(
    am4core.Label
  );
  textLabel2_nalivnie.text = 'Взято с сайта: \n www.vodomor.com';
  textLabel2_nalivnie.y = 30;
  textLabel2_nalivnie.x = am4core.percent(1);
  textLabel2_nalivnie.zIndex = 100;
  textLabel2_nalivnie.fillOpacity = 0.4;
  // ====================================================================================================================

  // ====================================================================================================================
  const calculate_nalivnie = function (vodohrName, num) {
    let voda_nalivnie = {
      vodohr_nalivnie: vodohrName,
      deathCapacity_nalivnie:
        filled_nalivnie[num] < death_nalivnie[num]
          ? filled_nalivnie[num]
          : death_nalivnie[num],
      factCapacity_nalivnie:
        filled_nalivnie[num] > death_nalivnie[num]
          ? filled_nalivnie[num] - death_nalivnie[num]
          : 0,
      emptyCapacity_nalivnie: full_nalivnie[num] - filled_nalivnie[num],
      filledCapacity_nalivnie:
        filled_nalivnie[num] >= 1000
          ? filled_nalivnie[num]
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ` млн. куб. м.`
          : filled_nalivnie[num] + ` тыс. куб. м.`,
      totalCapacity_nalivnie: full_nalivnie[num],
      percentageDeath_nalivnie:
        filled_nalivnie[num] < death_nalivnie[num]
          ? +((filled_nalivnie[num] * 100) / full_nalivnie[num]).toFixed(1)
          : +((death_nalivnie[num] * 100) / full_nalivnie[num]).toFixed(1),
      percentageFact_nalivnie: +(
        ((filled_nalivnie[num] - death_nalivnie[num]) * 100) /
        full_nalivnie[num]
      ).toFixed(1),
      percentageEmpty_nalivnie: +(
        ((full_nalivnie[num] - filled_nalivnie[num]) * 100) /
        full_nalivnie[num]
      ).toFixed(1),
      percetageFilled_nalivnie: +(
        (filled_nalivnie[num] * 100) /
        full_nalivnie[num]
      ).toFixed(1),
      trueDeathCapacity_nalivnie: death_nalivnie[num],
    };
    return voda_nalivnie;
  };

  chart_nalivnie.data = [
    calculate_nalivnie(`Зеленоярское  (2018)`, 0),
    calculate_nalivnie(`\nМежгорное   (2019)`, 1),
    calculate_nalivnie(`Самарлинское   `, 2),
    calculate_nalivnie(`\nКерченское   (2018)`, 3),
    calculate_nalivnie(`Сокольское   (old data)`, 4),
    calculate_nalivnie(`\nФеодосийское   (2018)`, 5),
    calculate_nalivnie(`Фронтовое  (2019)`, 6),
    calculate_nalivnie(`\nЛенинское  `, 7),
  ];
  // ====================================================================================================================

  let title1_nalivnie = chart_nalivnie.titles.create();
  title1_nalivnie.text = `Общий объём: ${nalivfull_nalivnie
    .toString()
    .replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    )} млн. куб. м. \n Общий объём воды: ${nalivfilled_nalivnie
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
    (nalivfilled_nalivnie * 100) /
    nalivfull_nalivnie
  ).toFixed(1)}%) `;
  title1_nalivnie.fontSize = clientWidth <= 990 ? 12 : 22;
  title1_nalivnie.tooltipText = `[bold]Данные от ${refrestDataTime}`;
  title1_nalivnie.padding(0, 0, 10, 20);
  title1_nalivnie.fill = `${textColor.value}`; // Цвет названия графика
  title1_nalivnie.textAlign = 'middle';

  let title2_nalivnie = chart_nalivnie.titles.create();
  title2_nalivnie.text = `[bold]Крымские водоналивные водохранилища`;
  title2_nalivnie.fontSize = clientWidth <= 990 ? 12 : 26;
  title2_nalivnie.tooltipText =
    '[bold]Наполняются водми Северо-Крымского канала';
  title2_nalivnie.padding(0, 0, 0, 20);
  title2_nalivnie.fill = `${textColor.value}`; // Цвет названия графика
  title2_nalivnie.textAlign = 'middle';

  // chart_nalivnie.tooltip.label.maxWidth = 200;
  chart_nalivnie.tooltip.label.wrap = true;
  chart_nalivnie.tooltip.label.fill = am4core.color('black'); // Цвет окошка на названии
  chart_nalivnie.tooltip.label.fontSize = 16;
  chart_nalivnie.tooltip.label.textAlign = 'middle';
  chart_nalivnie.tooltip.getFillFromObject = true;
  chart_nalivnie.tooltip.background.fill = am4core.color('white'); // Цвет всплывающего окошка на названии табллицы

  chart_nalivnie.tooltip.getStrokeFromObject = true; // Обводка окошка на названии
  chart_nalivnie.tooltip.strokeFill = `red`;

  let xAxes1_nalivnie = chart_nalivnie.xAxes.push(new am4charts.CategoryAxis());
  xAxes1_nalivnie.dataFields.category = 'vodohr_nalivnie';
  xAxes1_nalivnie.title.text = '[bold]Водохранилища (дата последних данных)';
  xAxes1_nalivnie.renderer.grid.template.location = 0;
  xAxes1_nalivnie.renderer.minGridDistance = 20;

  xAxes1_nalivnie.showOnInit = false;
  chart_nalivnie.events.on('ready', function () {
    xAxes1_nalivnie.start = 0;
    xAxes1_nalivnie.end = 1;
    xAxes1_nalivnie.keepSelection = true;
  });

  let yAxes1_nalivnie = chart_nalivnie.yAxes.push(new am4charts.ValueAxis());
  yAxes1_nalivnie.renderer.maxLabelPosition = 0.98;
  yAxes1_nalivnie.title.text = 'Объём (млн куб. м.)';

  let series1_nalivnie = chart_nalivnie.series.push(
    new am4charts.ColumnSeries()
  );
  series1_nalivnie.name = 'Мёртвый объём (фактический)';

  let columnsTemplate1_nalivnie = series1_nalivnie.columns.template;

  columnsTemplate1_nalivnie.strokeOpacity = 0;
  columnsTemplate1_nalivnie.fillOpacity = `${opacity / 100}`;
  series1_nalivnie.tooltip.getStrokeFromObject = true;
  series1_nalivnie.tooltip.pointerOrientation = 'horizontal';
  series1_nalivnie.columns.template.propertyFields.showTooltipOn = 'tooltip';
  // series1_nalivnie.columns.template.hoverOnFocus = true; // Показывает подскаску при нажатии TAB
  // series1_nalivnie.tooltip.getFillFromObject = false; // Отменяет наследование цвета для окошка
  // series1_nalivnie.tooltip.label.propertyFields.fill = "color";
  // series1_nalivnie.tooltip.background.propertyFields.stroke = "color";
  // series1_nalivnie.tooltip.pointerOrientation = "down";

  // series1_nalivnie.tooltip.dx = 40;
  // series1_nalivnie.columns.template.tooltipX = am4core.percent(100);// Ставит окошко снизу справа от столбца
  // series1_nalivnie.columns.template.tooltipY = am4core.percent(100); // Но только без курсора

  series1_nalivnie.tooltipText = `[bold]{categoryX} водохранилище:[/]
  Общий объём: {totalCapacity_nalivnie} млн куб. м.
  Всего воды: {filledCapacity_nalivnie} ({percetageFilled_nalivnie}%)
  
  [bold]{name} : [bold]{valueY} [bold]({percentageDeath_nalivnie} %)`;
  columnsTemplate1_nalivnie.tooltipY = 0;

  series1_nalivnie.stacked = true;
  // series1_nalivnie.tooltip.label.textAlign = 'middle';
  // series1_nalivnie.tooltip.label.textValign = 'middle';

  series1_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series1_nalivnie.dataFields.valueY = 'deathCapacity_nalivnie';
  columnsTemplate1_nalivnie.fill = am4core.color('#4b5320');
  // ? am4core.color("#4b5320") : am4core.color("red"); // fill
  series1_nalivnie.sequencedInterpolation = true;
  series1_nalivnie.sequencedInterpolationDelay = 100;

  var segmentFactDeath_nalivnie = series1_nalivnie.columns.template;
  segmentFactDeath_nalivnie.interactionsEnabled = true;

  var hoverStateFactDeath_nalivnie = segmentFactDeath_nalivnie.states.create(
    'hover'
  );
  hoverStateFactDeath_nalivnie.properties.fillOpacity = 1;
  hoverStateFactDeath_nalivnie.properties.fill = am4core
    .color('#4b5320')
    .lighten(-0.3); // fill

  let series2_nalivnie = chart_nalivnie.series.push(
    new am4charts.ColumnSeries()
  );

  let columnsTemplate2_nalivnie = series2_nalivnie.columns.template;
  series2_nalivnie.name = 'Полезный объём';
  series2_nalivnie.columns.template.strokeOpacity = 0;
  columnsTemplate2_nalivnie.fillOpacity = `${opacity / 100}`;

  series2_nalivnie.tooltipText = `[bold]{categoryX} водохранилище:[/]
  Общий объём: {totalCapacity_nalivnie} млн куб. м.
  Всего воды: {filledCapacity_nalivnie} ({percetageFilled_nalivnie}%)
  
  [bold]{name} : [bold]{valueY} [bold]({percentageFact_nalivnie} %)`;
  series2_nalivnie.stacked = true;
  // series2_nalivnie.tooltip.label.textAlign = 'middle';
  // series2_nalivnie.tooltip.label.textValign = 'middle';
  // series2_nalivnie.columns.template.tooltipX = am4core.percent(100);
  // series2_nalivnie.columns.template.tooltipY = am4core.percent(100);

  series2_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series2_nalivnie.dataFields.valueY = 'factCapacity_nalivnie';
  columnsTemplate2_nalivnie.fill = am4core.color('#3525fe'); // fill
  series2_nalivnie.sequencedInterpolation = true;
  series2_nalivnie.sequencedInterpolationDelay = 100;

  var segmentFact_nalivnie = series2_nalivnie.columns.template;
  segmentFact_nalivnie.interactionsEnabled = true;

  var hoverStateFact_nalivnie = segmentFact_nalivnie.states.create('hover');
  hoverStateFact_nalivnie.properties.fillOpacity = 1;
  hoverStateFact_nalivnie.properties.fill = am4core
    .color('#3525fe')
    .lighten(-0.5); // fill

  let series3_nalivnie = chart_nalivnie.series.push(
    new am4charts.ColumnSeries()
  );

  let columnsTemplate3_nalivnie = series3_nalivnie.columns.template;
  series3_nalivnie.name = 'Возможное наполнение';
  columnsTemplate3_nalivnie.strokeOpacity = 0;
  columnsTemplate3_nalivnie.fillOpacity = `${opacity / 100}`;

  series3_nalivnie.tooltipText = `[bold]{categoryX} водохранилище:[/]
  Общий объём: {totalCapacity_nalivnie} млн куб. м.
  Всего воды: {filledCapacity_nalivnie} ({percetageFilled_nalivnie}%)
  
  [bold]{name} : [bold]{valueY} [bold]({percentageEmpty_nalivnie} %)`;
  series3_nalivnie.stacked = true;
  // series3_nalivnie.tooltip.label.textAlign = 'middle';
  // series3_nalivnie.tooltip.label.textValign = 'middle';
  // series3_nalivnie.columns.template.tooltipX = am4core.percent(100);
  // series3_nalivnie.columns.template.tooltipY = am4core.percent(100);

  series3_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series3_nalivnie.dataFields.valueY = 'emptyCapacity_nalivnie';
  columnsTemplate3_nalivnie.fill = am4core.color('#bcbcbc'); // fill

  series3_nalivnie.sequencedInterpolation = true;
  series3_nalivnie.sequencedInterpolationDelay = 100;

  var segmentCap_nalivnie = series3_nalivnie.columns.template;
  segmentCap_nalivnie.interactionsEnabled = true;

  var hoverStateCap_nalivnie = segmentCap_nalivnie.states.create('hover');
  hoverStateCap_nalivnie.properties.fillOpacity = 1;
  hoverStateCap_nalivnie.properties.fill = am4core
    .color('#bcbcbc')
    .lighten(+0.5); // fill

  let series4_nalivnie = chart_nalivnie.series.push(
    new am4charts.StepLineSeries()
  );

  series4_nalivnie.dataFields.valueY = 'trueDeathCapacity_nalivnie';
  series4_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series4_nalivnie.name = 'Мёртвый объём (расчётный)';
  series4_nalivnie.tooltipText = '{name}: [bold]{valueY}[/]';
  series4_nalivnie.strokeWidth = 1;
  series4_nalivnie.stroke = am4core.color('#ff0000');
  series4_nalivnie.strokeOpacity = 0.8;

  // series4_nalivnie.fill = "#bcbcbc";

  series4_nalivnie.noRisers = true;
  series4_nalivnie.sequencedInterpolation = true;
  series4_nalivnie.sequencedInterpolationDelay = 80;

  series4_nalivnie.yAxis = yAxes1_nalivnie;

  series4_nalivnie.tensionX = 0.6;
  series4_nalivnie.tensionY = 1;

  var segment_nalivnie = series4_nalivnie.segments.template;
  segment_nalivnie.interactionsEnabled = true;

  var hoverState_nalivnie = segment_nalivnie.states.create('hover');
  hoverState_nalivnie.properties.strokeWidth = 3;

  // ====================================================================================================================

  chart_nalivnie.legend = new am4charts.Legend();
  // ====================================================================================================================

  var scrollbarX_nalivnie = new am4charts.XYChartScrollbar();
  var scrollbarY_nalivnie = new am4charts.XYChartScrollbar();
  chart_nalivnie.scrollbarY_nalivnie = scrollbarY_nalivnie;
  chart_nalivnie.scrollbarY_nalivnie.minWidth = 15;

  // ====================================================================================================================

  // var columnHoverState = columnsTemplate1_nalivnie.create("hover");
  // columnHoverState.properties.fillOpacity = 1;
  chart_nalivnie.scrollbarX_nalivnie = scrollbarX_nalivnie;
  chart_nalivnie.scrollbarX_nalivnie.minHeight = 15;
  // scrollbarX_nalivnie.series.push(series1_nalivnie);

  scrollbarX_nalivnie.scrollbarChart.seriesContainer.hide();
  // ====================================================================================================================
};
createChart3Main();

btnApply.addEventListener(`click`, createChart3Main);
