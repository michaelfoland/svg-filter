const filters = [
  {
    name: 'feGaussianBlur',
    attributes: ['in','stdDeviation','edgeMode']
  }
];





const attributes = [
  {
    name: 'in',
    values: ['SourceGraphic','SourceAlpha','BackgroundImage','BackgroundAlpha','FillPaint','StrokePaint','<em>a string matching the result attribute of a preceding filter primitive'],
    defaults: ['SourceGraphic [if this if first filter primitive]', 'result from preceding filter primitive [if this is NOT the first filter primitive]']
  }, {
    name: 'stdDeviation',
    values: 'number [one number representing the value for both X- and Y-axis or two values representing X-axis and Y-axis respectively]',
    defaults: [0]
  }, {
    name: 'edgeMode',
    values: ['duplicate','wrap','none'],
    defaults: ['duplicate']
  }
  
];

export { filters, attributes };