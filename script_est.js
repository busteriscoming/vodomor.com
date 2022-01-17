let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
let isMobile = clientHeight > clientWidth ? true : false;
import {
  filled,
  death,
  full,
  filled_nalivnie,
  death_nalivnie,
  full_nalivnie,
  filled_timeline,
  death_timeline,
  full_timeline,
  refrestDataTime,
  refrestDataTimeText,
  estfilled,
  estfull,
  estpercent,
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
let createChart2Main = function () {
  var chart = am4core.create('chartdiv', am4charts.XYChart);
  chart.exporting.menu = new am4core.ExportMenu();
  var annotation = chart.plugins.push(new am4plugins_annotation.Annotation());
  annotation.useMenu = true;

  chart.hiddenState.properties.opacity = 0;
  chart.padding(0, clientWidth <= 900 ? 0 : 10, 0, clientWidth <= 900 ? 0 : 10);
  chart.plotContainer.mouseOptions.sensitivity = 0.5;
  chart.fill = 'red';
  am4core.color('red');
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.maxTooltipDistance = -1;
  // ====================================================================================================================

  let textLabel = chart.plotContainer.createChild(am4core.Label);
  textLabel.text = `Последнее обновление данных\n${refrestDataTime}`;
  textLabel.y = 50;
  textLabel.fill = `${textColor.value}`;

  textLabel.x = am4core.percent(100);
  textLabel.horizontalCenter = 'right';
  textLabel.zIndex = 100;
  textLabel.fillOpacity = 0.9;
  // ====================================================================================================================
  let textLabel2 = chart.plotContainer.createChild(am4core.Label);
  textLabel2.text = 'Взято с сайта: \n www.vodomor.com';
  textLabel2.y = 30;
  textLabel2.x = am4core.percent(1);
  textLabel2.fill = `${textColor.value}`;
  textLabel2.zIndex = 100;
  textLabel2.fillOpacity = 0.4;
  // ====================================================================================================================
  // ====================================================================================================================
  const calculate = function (vodohrName, num) {
    let voda = {
      vodohr: vodohrName,
      deathCapacity: filled[num] < death[num] ? filled[num] : death[num],
      factCapacity: filled[num] > death[num] ? filled[num] - death[num] : 0,
      emptyCapacity: full[num] - filled[num],
      filledCapacity:
        filled[num] >= 1000
          ? filled[num].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
            ` млн. куб. м.`
          : filled[num] + ` тыс. куб. м.`,
      totalCapacity: full[num],
      percentageDeath:
        filled[num] < death[num]
          ? +((filled[num] * 100) / full[num]).toFixed(1)
          : +((death[num] * 100) / full[num]).toFixed(1),
      percentageFact: +(((filled[num] - death[num]) * 100) / full[num]).toFixed(
        // Полезный объём
        1
      ),
      percentageEmpty: +(((full[num] - filled[num]) * 100) / full[num]).toFixed(
        1
      ),
      percetageFilled: +((filled[num] * 100) / full[num]).toFixed(1), // Всего воды
      trueDeathCapacity: death[num],
    };
    return voda;
  };

  chart.data = [
    calculate(`Изобильненское`, 0),
    calculate(`\nЗагорское`, 1),
    calculate(`Балановское`, 2),
    calculate(`\nСчастливенское`, 3),
    calculate(`Тайганское`, 4),
    calculate(`\nБелогорское`, 5),
    calculate(`Партизанское`, 6),
    calculate(`\nСимферопольское`, 7),
    calculate(`Аянское`, 8),
    calculate(`\nСтарокрымское`, 9),
    calculate(`Чернореченское(10.20)`, 10),
    calculate(`\nАльминское(old data)`, 11),
    calculate(`Бахчисарайское(old data)`, 12),
    calculate(`\nКутузовское`, 13),
    calculate(`Льговское(01.21)`, 14),
  ];

  let title1 = chart.titles.create();
  title1.text = `Общий объём: ${estfull
    .toString()
    .replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    )} млн. куб. м. \n Общий объём воды: ${estfilled
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
    (estfilled * 100) /
    estfull
  ).toFixed(1)}%) `;
  title1.fontSize = clientWidth <= 990 ? 12 : 22;
  title1.tooltipText = `[bold]Данные от ${refrestDataTime}`;
  title1.padding(0, 0, 0, 0);
  title1.fill = `${textColor.value}`; // Цвет названия графика
  title1.textAlign = 'middle';

  let title2 = chart.titles.create();
  title2.text = `[bold]Крымские водохранилища естественного стока`;
  title2.fontSize = clientWidth <= 990 ? 12 : 26;
  title2.tooltipText = '[bold]Наполняются естественными источниками';
  title2.padding(0, 0, 0, 0);
  title2.fill = `${textColor.value}`; // Цвет названия графика
  title2.textAlign = 'middle';

  // chart.tooltip.label.maxWidth = 200;
  chart.tooltip.label.wrap = true;
  chart.tooltip.label.fill = am4core.color('white'); // Цвет окошка на названии
  chart.tooltip.label.fontSize = 16;
  chart.tooltip.label.textAlign = 'middle';
  chart.tooltip.getFillFromObject = true;
  chart.tooltip.background.fill = am4core.color('white'); // Цвет всплывающего окошка на названии табллицы

  chart.tooltip.getStrokeFromObject = true; // Обводка окошка на названии
  chart.tooltip.strokeFill = `red`;

  let xAxes1 = chart.xAxes.push(new am4charts.CategoryAxis());
  xAxes1.dataFields.category = 'vodohr';
  xAxes1.title.text = '[bold]Водохранилища (дата последних данных)';
  xAxes1.renderer.grid.template.location = 0;
  xAxes1.renderer.minGridDistance = 20;

  xAxes1.showOnInit = false;
  chart.events.on('ready', function () {
    xAxes1.start = 0;
    xAxes1.end = 0.8;
    xAxes1.keepSelection = true;
  });

  // ====================================================================================================================

  let yAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
  yAxes1.renderer.maxLabelPosition = 0.98;
  yAxes1.title.text = 'Объём (млн куб. м.)';

  let series1 = chart.series.push(new am4charts.ColumnSeries());
  series1.name = 'Мёртвый объём (фактический)';

  let columnsTemplate1 = series1.columns.template;

  columnsTemplate1.strokeOpacity = 0;
  columnsTemplate1.fillOpacity = `${opacity / 100}`;
  series1.tooltip.getStrokeFromObject = true;
  series1.tooltip.pointerOrientation = 'horizontal';
  series1.columns.template.propertyFields.showTooltipOn = 'tooltip';
  // series1.columns.template.hoverOnFocus = true; // Показывает подскаску при нажатии TAB
  // series1.tooltip.getFillFromObject = false; // Отменяет наследование цвета для окошка
  // series1.tooltip.label.propertyFields.fill = "color";
  // series1.tooltip.background.propertyFields.stroke = "color";
  // series1.tooltip.pointerOrientation = 'vertical';

  // series1.tooltip.dx = 40;
  // series1.columns.template.tooltipX = am4core.percent(100); // Ставит окошко снизу справа от столбца
  // series1.columns.template.tooltipY = am4core.percent(100); // Но только без курсора

  series1.tooltipText = `[bold]{categoryX} водохранилище:[/]
Общий объём: {totalCapacity} млн куб. м.
Всего воды: {filledCapacity} ({percetageFilled}%)\n
[bold]{name} : [bold]{valueY} [bold]({percentageDeath} %)`;
  // series1.tooltip.contentAlign = `center`;
  columnsTemplate1.tooltipY = 0;

  series1.stacked = true;

  series1.dataFields.categoryX = 'vodohr';
  series1.dataFields.valueY = 'deathCapacity';
  columnsTemplate1.fill = am4core.color('#4b5320');
  // ? am4core.color("#4b5320") : am4core.color("red"); // fill
  series1.sequencedInterpolation = true;
  series1.sequencedInterpolationDelay = 100;

  var segmentFactDeath = series1.columns.template;
  segmentFactDeath.interactionsEnabled = true;

  var hoverStateFactDeath = segmentFactDeath.states.create('hover');
  hoverStateFactDeath.properties.fillOpacity = 1;
  hoverStateFactDeath.properties.fill = am4core.color('#4b5320').lighten(-0.3); // fill

  let series2 = chart.series.push(new am4charts.ColumnSeries());

  let columnsTemplate2 = series2.columns.template;
  series2.name = 'Полезный объём';
  series2.columns.template.strokeOpacity = 0;
  columnsTemplate2.fillOpacity = `${opacity / 100}`;

  series2.tooltipText = `[bold]{categoryX} водохранилище:[/]
Общий объём: {totalCapacity} млн куб. м.
Всего воды: {filledCapacity} ({percetageFilled}%)

[bold]{name} : [bold]{valueY} [bold]({percentageFact} %)`;
  series2.stacked = true;

  // series2.columns.template.tooltipX = am4core.percent(100);
  // series2.columns.template.tooltipY = am4core.percent(100);

  series2.dataFields.categoryX = 'vodohr';
  series2.dataFields.valueY = 'factCapacity';
  columnsTemplate2.fill = am4core.color('#3525fe'); // fill
  series2.sequencedInterpolation = true;
  series2.sequencedInterpolationDelay = 100;

  var segmentFact = series2.columns.template;
  segmentFact.interactionsEnabled = true;

  var hoverStateFact = segmentFact.states.create('hover');
  hoverStateFact.properties.fillOpacity = 1;
  hoverStateFact.properties.fill = am4core.color('#3525fe').lighten(-0.5); // fill

  let series3 = chart.series.push(new am4charts.ColumnSeries());

  let columnsTemplate3 = series3.columns.template;
  series3.name = 'Возможное наполнение';
  columnsTemplate3.strokeOpacity = 0;
  columnsTemplate3.fillOpacity = `${opacity / 100}`;

  series3.tooltipText = `[bold]{categoryX} водохранилище:[/]
Общий объём: {totalCapacity} млн куб. м.
Всего воды: {filledCapacity} ({percetageFilled}%)

[bold]{name} : [bold]{valueY} [bold]({percentageEmpty} %)`;
  series3.stacked = true;

  // series3.columns.template.tooltipX = am4core.percent(100);
  // series3.columns.template.tooltipY = am4core.percent(100);

  series3.dataFields.categoryX = 'vodohr';
  series3.dataFields.valueY = 'emptyCapacity';
  columnsTemplate3.fill = am4core.color('#bcbcbc'); // fill

  series3.sequencedInterpolation = true;
  series3.sequencedInterpolationDelay = 100;

  var segmentCap = series3.columns.template;
  segmentCap.interactionsEnabled = true;

  var hoverStateCap = segmentCap.states.create('hover');
  hoverStateCap.properties.fillOpacity = 1;
  hoverStateCap.properties.fill = am4core.color('#bcbcbc').lighten(+0.5); // fill

  let series4 = chart.series.push(new am4charts.StepLineSeries());

  series4.dataFields.valueY = 'trueDeathCapacity';
  series4.dataFields.categoryX = 'vodohr';
  series4.name = 'Мёртвый объём (расчётный)';
  series4.tooltipText = '{name}: [bold]{valueY}[/]';
  series4.strokeWidth = 1;
  series4.stroke = am4core.color('#ff0000');
  series4.strokeOpacity = 0.8;

  series4.fill = '#bcbcbc';

  series4.noRisers = true;
  series4.sequencedInterpolation = true;
  series4.sequencedInterpolationDelay = 80;

  series4.yAxis = yAxes1;

  series4.tensionX = 0.6;
  series4.tensionY = 1;

  var segmentDeath = series4.segments.template;
  segmentDeath.interactionsEnabled = true;

  var hoverStateDeath = segmentDeath.states.create('hover');
  hoverStateDeath.properties.strokeWidth = 3;

  // ====================================================================================================================

  chart.legend = new am4charts.Legend();
  chart.legend.fill = `white`;

  // ====================================================================================================================

  var scrollbarX = new am4charts.XYChartScrollbar();
  var scrollbarY = new am4charts.XYChartScrollbar();
  chart.scrollbarY = scrollbarY;
  chart.scrollbarY.minWidth = 15;

  // ====================================================================================================================

  // var columnHoverState = columnsTemplate1.create("hover");
  // columnHoverState.properties.fillOpacity = 1;
  chart.scrollbarX = scrollbarX;
  chart.scrollbarX.minHeight = 15;
  // scrollbarX.series.push(series1);

  scrollbarX.scrollbarChart.seriesContainer.hide();
  // ====================================================================================================================
};
createChart2Main();
// gridColor.addEventListener('input', createChart2Main);
// textColor.addEventListener('input', createChart2Main);
btnApply.addEventListener(`click`, createChart2Main);
