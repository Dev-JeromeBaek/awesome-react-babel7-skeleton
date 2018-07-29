// Data for Line Chart
const optionsLine = {
  // low: 0,
  // high: 800,
  showArea: false,
  height: '245px',
  axisX: {
    showGrid: true
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 30
  }
};
const optionsArea = {
  low: 0,
  high: 800,
  showArea: true,
  height: '245px',
  axisX: {
    showGrid: true
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
const responsiveLine = [
  [
    'screen and (max-width: 640px)',
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];

const createListenerLine = {
  // draw: function(data) {
  create: function(data) {
    if (data.type === 'line' || data.type === 'area') {
      data.element.animate({
        d: {
          begin: 600 * data.index,
          dur: 600,
          from: data.path
            .clone()
            .scale(1, 0)
            .translate(0, data.chartRect.height())
            .stringify(),
          to: data.path.clone().stringify()
          // easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  }
};

const drawListenerLine = {
  draw: function(data) {
    if (data.type === 'line' || data.type === 'area') {
      data.element.animate({
        d: {
          begin: 600 * data.index,
          dur: 600,
          from: data.path
            .clone()
            .scale(1, 0)
            .translate(0, data.chartRect.height())
            .stringify(),
          to: data.path.clone().stringify()
          // easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  }
};

module.exports = {
  optionsLine,
  optionsArea,
  responsiveLine,
  drawListenerLine,
  createListenerLine
};
