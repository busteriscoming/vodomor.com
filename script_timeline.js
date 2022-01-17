let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
let isMobile = clientHeight > clientWidth ? true : false;
import {
  death_timeline,
  full_timeline,
  refrestDataTime,
  allFilled,
  allFull,
  isobilnenskoe,
  zagorskoe,
  balanovskoe,
  schastlivenskoe,
  tayganskoe,
  belogorskoe,
  partizanskoe,
  simferopolskoe,
  ayanskoe,
  starokrimskoe,
  samarlinskoe,
  leninskoe,
  chernorechenskoe,
  lgovskoe,
  zelenoyarskoe,
  mejgornoe,
  kerchenskoe,
  feodosiyskoe,
  frontovoe,
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

const createChart1Main = function () {
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart_timeline instance
    var chart_timeline = am4core.create('chartdiv3', am4charts.XYChart);

    chart_timeline.exporting.menu = new am4core.ExportMenu();
    var annotation_timeline = chart_timeline.plugins.push(
      new am4plugins_annotation.Annotation()
    );
    annotation_timeline.useMenu = true;

    chart_timeline.hiddenState.properties.opacity = 100;
    chart_timeline.padding(0, clientWidth <= 990 ? 5 : 0, 0, 0);

    chart_timeline.plotContainer.mouseOptions.sensitivity = 0.5;

    chart_timeline.dateFormatter.inputDateFormat = 'yyyy-MM-dd';

    let title1_timeline = chart_timeline.titles.create();
    title1_timeline.text = `Общий объём: ${allFull
      .toString()
      .replace(
        /(\d)(?=(\d{3})+(?!\d))/g,
        '$1,'
      )} млн. куб. м. \n Общий объём воды: ${allFilled
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
      (allFilled * 100) /
      allFull
    ).toFixed(1)}%) `;
    title1_timeline.fontSize = clientWidth <= 990 ? 12 : 22;
    title1_timeline.tooltipText = `[bold]Данные от ${refrestDataTime}`;
    title1_timeline.padding(0, 0, 10, 0);
    title1_timeline.fill = `${textColor.value}`; // Цвет названия графика
    title1_timeline.textAlign = 'middle';

    let title2_timeline = chart_timeline.titles.create();
    title2_timeline.text = `[bold]Наполнение водохранилищ [/](c 2014 года по настоящее время)`;
    title2_timeline.fontSize = clientWidth <= 990 ? 12 : 26;
    title2_timeline.tooltipText = '[bold]Старые данные взяты с Википедии';
    title2_timeline.padding(0, 0, 0, 0);
    title2_timeline.fill = `${textColor.value}`; // Цвет названия графика
    title2_timeline.textAlign = 'middle';

    let textLabel2_timeline = chart_timeline.plotContainer.createChild(
      am4core.Label
    );
    textLabel2_timeline.text = 'Взято с сайта: \n www.vodomor.com';
    textLabel2_timeline.y = 30;
    textLabel2_timeline.x = am4core.percent(1);
    textLabel2_timeline.fill = `${textColor.value}`;
    textLabel2_timeline.zIndex = 100;
    textLabel2_timeline.fillOpacity = 0.4;
    // chart.tooltip.label.maxWidth = 200;
    chart_timeline.tooltip.label.wrap = true;
    chart_timeline.tooltip.label.fill = am4core.color('white'); // Цвет окошка на названии
    chart_timeline.tooltip.label.fontSize = 16;
    chart_timeline.tooltip.label.textAlign = 'middle';
    chart_timeline.tooltip.getFillFromObject = true;
    chart_timeline.tooltip.background.fill = am4core.color('white'); // Цвет всплывающего окошка на названии табллицы

    chart_timeline.tooltip.getStrokeFromObject = true; // Обводка окошка на названии
    chart_timeline.tooltip.strokeFill = `red`;

    // Create axes
    var dateAxis_timeline = chart_timeline.xAxes.push(new am4charts.DateAxis());
    var valueAxis_timeline = chart_timeline.yAxes.push(
      new am4charts.ValueAxis()
    );
    // valueAxis_timeline.logarithmic = true;
    dateAxis_timeline.start = 0;
    dateAxis_timeline.keepSelection = true;

    createSeries_timeline('Изобильненское', isobilnenskoe, 0);
    createSeries_timeline('Загорское', zagorskoe, 1);
    createSeries_timeline('Балановское', balanovskoe, 2);
    createSeries_timeline('Счастливенское', schastlivenskoe, 3);
    createSeries_timeline('Тайганское', tayganskoe, 4);
    createSeries_timeline('Белогорское', belogorskoe, 5);
    createSeries_timeline('Партизанское', partizanskoe, 6);
    createSeries_timeline('Симферопольское', simferopolskoe, 7);
    createSeries_timeline('Аянское', ayanskoe, 8);
    createSeries_timeline('Старокрымское', starokrimskoe, 9);
    createSeries_timeline('Самарлинское', samarlinskoe, 10);
    createSeries_timeline('Ленинское', leninskoe, 11);
    createSeries_timeline('Чернореченское', chernorechenskoe, 12);
    // createSeries_timeline( "Альминское", *, 13);
    // createSeries_timeline( "Бахчисарайское", *, 14);
    // createSeries_timeline( "Кутузовское", *, 15);
    createSeries_timeline('Льговское', lgovskoe, 16);
    createSeries_timeline('Зеленоярское', zelenoyarskoe, 17);
    createSeries_timeline('Межгорное', mejgornoe, 18);
    createSeries_timeline('Керченское', kerchenskoe, 19);
    createSeries_timeline('Феодосийское', feodosiyskoe, 20);
    createSeries_timeline('Фронтовое', frontovoe, 21);
    // createSeries_timeline("Наполненность%", "Аянское");

    // Create series_timeline
    function createSeries_timeline(name, data, num) {
      var series_timeline = chart_timeline.series.push(
        new am4charts.LineSeries()
      );

      series_timeline.dataFields.valueY = 'capacity';
      series_timeline.dataFields.dateX = 'date';
      series_timeline.dataFields.id = num;
      series_timeline.name = name;
      // series_timeline.stroke = am4core.color("#ff0000");
      series_timeline.strokeWidth = 2;
      series_timeline.strokeOpacity = `${opacity / 100}`;
      series_timeline.minBulletDistance = 50;
      series_timeline.tooltipText =
        '[bold]{name} водохранилище[/]\n[bold]Наполнение: {valueY} тыс. куб. м. ({percentage}%)\n({dateX}) ';

      // filled_timeline[num] >= 1000
      // ? filled_timeline[num].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
      //   ` млн. куб. м.`
      // : filled_timeline[num] + ` тыс. куб. м.`,

      series_timeline.tooltip.pointerOrientation = 'vertical';
      series_timeline.tooltip.background.cornerRadius = 20;
      series_timeline.tooltip.background.fillOpacity = 0.8;
      series_timeline.tooltip.label.padding(12, 12, 12, 12);
      series_timeline.tooltip.label.minWidth = 40;
      series_timeline.tooltip.label.minHeight = 40;
      series_timeline.tooltip.label.textAlign = 'middle';
      series_timeline.tooltip.label.textValign = 'middle';
      // series_timeline.noRisers = false;

      // series_timeline.sequencedInterpolation = true;
      // series_timeline.sequencedInterpolationDelay = 80;

      series_timeline.tensionX = 0.99;
      series_timeline.tensionY = 0.95;

      var segment_timeline = series_timeline.segments.template;
      segment_timeline.interactionsEnabled = true;

      var hoverState_timeline = segment_timeline.states.create('hover');
      hoverState_timeline.properties.strokeWidth = 5;

      var dimmed_timeline = segment_timeline.states.create('dimmed');
      dimmed_timeline.properties.stroke = am4core.color('#dadada');
      dimmed_timeline.properties.opacity = 0.1;

      segment_timeline.events.on('over', function (event) {
        processOver_timeline(event.target.parent.parent.parent);
      });

      segment_timeline.events.on('out', function (event) {
        processOut_timeline(event.target.parent.parent.parent);
      });

      var bullet_timeline = series_timeline.bullets.push(
        new am4charts.CircleBullet()
      );
      bullet_timeline.circle.strokeWidth = 1;
      bullet_timeline.circle.radius = 1;
      // bullet_timeline.circle.fill = am4core.color("#fff");

      // bullet_timeline.tooltipText =
      // "[bold]{name} водохранилище[/]\nНаполнение: {valueY} тыс. куб. м.\n({dateX})";

      var bullethover_timeline = bullet_timeline.states.create('hover');
      bullethover_timeline.properties.scale = 4;
      // let value = 0;

      // for (value1 of datedata) {
      //   value = value1[17];
      //   var dataItem = { date: value1[1] };
      //   dataItem["Наполненность " + s] = value;
      //   data.push(dataItem);
      // }
      series_timeline.data = data;

      // Add scrollbar
      chart_timeline.scrollbarX = new am4charts.XYChartScrollbar();
      chart_timeline.scrollbarX.minHeight = 15;
      chart_timeline.scrollbarX.parent = chart_timeline.bottomAxesContainer;
      chart_timeline.scrollbarX.background.fill = am4core.color('#67dcab');
      chart_timeline.scrollbarX.fillOpacity = 0.5;
      chart_timeline.scrollbarX.series.push(series_timeline); //
      chart_timeline.scrollbarX.scrollbarChart.seriesContainer.hide();

      chart_timeline.scrollbarX.thumb.background.fill = am4core.color(
        '#67dcab'
      );
      chart_timeline.scrollbarX.thumb.background.fillOpacity = 0.8;

      chart_timeline.scrollbarX.unselectedOverlay.fill = am4core.color('#fff');
      chart_timeline.scrollbarX.unselectedOverlay.fillOpacity = 0.9;

      chart_timeline.scrollbarX.scrollbarChart.plotContainer.filters.clear();

      chart_timeline.scrollbarY = new am4charts.XYChartScrollbar();
      chart_timeline.scrollbarY.minWidth = 15;
      chart_timeline.scrollbarY.parent = chart_timeline.leftAxesContainer;
      chart_timeline.scrollbarY.toBack();

      chart_timeline.scrollbarY.background.fill = am4core.color('#67dcab');
      chart_timeline.scrollbarY.fillOpacity = 0.5;
      // chart_timeline.scrollbarY.background.disabled = true;
      chart_timeline.scrollbarY.thumb.background.fill = am4core.color(
        '#67dcab'
      );
      chart_timeline.scrollbarY.thumb.background.fillOpacity = 0.8;

      chart_timeline.scrollbarY.unselectedOverlay.fill = am4core.color('#fff');
      chart_timeline.scrollbarY.unselectedOverlay.fillOpacity = 0.9;

      return series_timeline;
    }

    chart_timeline.legend = new am4charts.Legend();
    chart_timeline.legend.position = clientWidth <= 990 ? `down` : `right`;
    // chart_timeline.legend.maxWidth = clientWidth <= 990 ? 0 : 200;

    chart_timeline.legend.scrollable = true;
    chart_timeline.legend.itemContainers.template.events.on(
      'over',
      function (event) {
        processOver_timeline(event.target.dataItem.dataContext);
        console.log(event.target.dataItem);
      }
    );

    chart_timeline.legend.itemContainers.template.events.on(
      'out',
      function (event) {
        processOut_timeline(event.target.dataItem.dataContext);
      }
    );

    function processOver_timeline(hoveredSeries) {
      hoveredSeries.toFront();
      // console.log(hoveredSeries);

      hoveredSeries.showBullets = false;
      let range1_timeline = valueAxis_timeline.axisRanges.create();
      range1_timeline.value = death_timeline[hoveredSeries.dataFields.id];
      range1_timeline.grid.stroke = am4core.color('#09ca36');
      range1_timeline.grid.strokeWidth = 2;
      range1_timeline.grid.strokeOpacity = 0.8;
      range1_timeline.grid.strokeDasharray = '8,4,2,4';
      range1_timeline.grid.above = true;

      range1_timeline.label.inside = true;
      range1_timeline.label.text = '[bold]Мёртвый объём';
      range1_timeline.label.fill = range1_timeline.grid.stroke;
      range1_timeline.label.verticalCenter = 'bottom';
      range1_timeline.contents.stroke = am4core.color('#FF0000');

      let range2_timeline = valueAxis_timeline.axisRanges.create();
      range2_timeline.value = full_timeline[hoveredSeries.dataFields.id];
      range2_timeline.grid.stroke = am4core.color('#3525fe');
      range2_timeline.grid.strokeWidth = 2;
      range2_timeline.grid.strokeOpacity = 0.8;
      range2_timeline.grid.strokeDasharray = '3,3';
      range2_timeline.grid.above = true;
      range2_timeline.label.inside = true;
      range2_timeline.label.text = '[bold]Максимальный объём';
      range2_timeline.label.fill = range2_timeline.grid.stroke;
      range2_timeline.label.verticalCenter = 'bottom';

      hoveredSeries.segments.each(function (segment_timeline) {
        // console.log(segment_timeline, `segment_timeline`);
        segment_timeline.setState('hover');
      });

      chart_timeline.series.each(function (series_timeline) {
        // console.log(series_timeline, `series_timeline`);
        if (series_timeline != hoveredSeries) {
          series_timeline.segments.each(function (segment_timeline) {
            segment_timeline.setState('dimmed');
          });
          series_timeline.bulletsContainer.setState('dimmed');
        }
      });
    }

    function processOut_timeline(hoveredSeries) {
      let rangeRemove_timeline = valueAxis_timeline.axisRanges.clear();
      chart_timeline.series.each(function (series_timeline) {
        series_timeline.segments.each(function (segment_timeline) {
          segment_timeline.setState('default');
        });
        series_timeline.bulletsContainer.setState('default');
      });
    }

    // Add cursor
    chart_timeline.cursor = new am4charts.XYCursor();
    // chart_timeline.cursor.xAxis = dateAxis_timeline;
    // chart_timeline.cursor.snapToSeries = series_timeline;

    chart_timeline.cursor.maxTooltipDistance = -1;
  }); // end am4core.ready()
};
createChart1Main();
// gridColor.addEventListener('input', createChart2Main);
// textColor.addEventListener('input', createChart2Main);
btnApply.addEventListener(`click`, createChart1Main);
