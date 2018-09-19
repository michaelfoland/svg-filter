const filters = [
  { 
    name: 'feConvolveMatrix',
    attributes: [
      {
        name: 'in',
        values: [
          'SourceGraphic',             
          'SourceAlpha',
          'BackgroundImage',
          'BackgroundAlpha',
          'FillPaint',
          'StrokePaint',
          '<a string matching the result attribute of a preceding filter primitive>'
        ],
        defaults: [
          'SourceGraphic [if this if first filter primitive]', 
          'result from preceding filter primitive [if this is NOT the first filter primitive]'
        ]
      },
      {
        name: 'order',
        values: ['one or two positive integers; the first specifying the number of COLUMNS in the matrix, the second specifying the number of ROWS; values greater than 3 are discouraged; if only a single value is provided, it is used  to set both the number of columns and the number of rows'],
        defaults: ['3']
      },
      {
        name: 'kernelMatrix',
        values: ['a space- or comma-separated list of numbers; the length of the list must equal the size of the matrix specified in the "order" attribute'],
        defaults: ['unknown!']
      },
      {
        name: 'divisor',
        values: ['any number'],
        defaults: ['the sum of all matrix values so long as that sum is not 0', '1, if the sum of all matrix values is 0']
      },
      {
        name: 'targetX',
        values: ['an integer i such that 0 <= i < orderX (as specified in the "order" attribute)'],
        defaults: ['Math.floor(orderX / 2)']
      },
      {
        name: 'targetY',
        values: ['an integer i such that 0 <= i < orderY (as specified in the "order" attribute)'],
        defaults: ['Math.floor(orderY / 2)']
      },
      {
        name: 'edgeMode',
        values: [
          'duplicate',
          'wrap',
          'none'
        ],
        defaults: ['duplicate']
      },
      {
        name: 'kernelUnitLength',
        values: ['one or two numbers greater than zero'],
        defaults: ['???']
      },
      {
        name: 'preserveAlpha',
        values: ['true','false'],
        defaults: ['false']
      }
    ]
  },
  {
    name: 'feOffset',
    attributes: [
      {
        name: 'in',
        values: [
          'SourceGraphic',             
          'SourceAlpha',
          'BackgroundImage',
          'BackgroundAlpha',
          'FillPaint',
          'StrokePaint',
          '<a string matching the result attribute of a preceding filter primitive>'
        ],
        defaults: [
          'SourceGraphic [if this if first filter primitive]', 
          'result from preceding filter primitive [if this is NOT the first filter primitive]'
        ]
      },
      {
        name: 'dx',
        values: ['any number'],
        defaults: ['0']
      },
      {
        name: 'dy',
        values: ['any number'],
        defaults: ['0']
      }
    ]
  },
  {
    name: 'feMorphology',
    attributes: [
      {
        name: 'in',
        values: [
          'SourceGraphic',             
          'SourceAlpha',
          'BackgroundImage',
          'BackgroundAlpha',
          'FillPaint',
          'StrokePaint',
          '<a string matching the result attribute of a preceding filter primitive>'
        ],
        defaults: [
          'SourceGraphic [if this if first filter primitive]', 
          'result from preceding filter primitive [if this is NOT the first filter primitive]'
        ]
      }, {
        name: 'operator',
        values: ['erode','dilate'],
        defaults: ['erode']
      }, {
        name: 'radius',
        values: ['number [one number representing the value for both X- and Y-radius or two values representing X-radius and Y-radius respectively]'],
        defaults: ['0']
      }
    ]
  },
  {
    name: 'feGaussianBlur',
    attributes: [
      {
        name: 'in',
        values: [
          'SourceGraphic',             
          'SourceAlpha',
          'BackgroundImage',
          'BackgroundAlpha',
          'FillPaint',
          'StrokePaint',
          '<a string matching the result attribute of a preceding filter primitive>'
        ],
        defaults: [
          'SourceGraphic [if this if first filter primitive]', 
          'result from preceding filter primitive [if this is NOT the first filter primitive]'
        ]
      },
      {
        name: 'stdDeviation',
        values: 'number [one number representing the value for both X- and Y-axis or two values representing X-axis and Y-axis respectively]',
        defaults: ['0']
      }, 
      {
        name: 'edgeMode',
        values: [
          'duplicate',
          'wrap',
          'none'
        ],
        defaults: ['duplicate']
      }
    ]
  },
  {
    name: 'feColorMatrix',
    attributes: [
      {
        name: 'in',
        values: [
          'SourceGraphic',             
          'SourceAlpha',
          'BackgroundImage',
          'BackgroundAlpha',
          'FillPaint',
          'StrokePaint',
          '<a string matching the result attribute of a preceding filter primitive>'
        ],
        defaults: [
          'SourceGraphic [if this if first filter primitive]', 
          'result from preceding filter primitive [if this is NOT the first filter primitive]'
        ]
      },
      {
        name: 'type',
        values: [
          'matrix',
          'saturate',
          'hueRotate',
          'luminanceToAlpha'
        ],
        defaults: [
          'matrix'
        ]
      },
      {
        name: 'values',
        values: [
          'if type="matrix", a list of 20 matrix values, comma- or space-separated',
          'if type="saturate", a single real number value between 0 and 1',
          'if type="hueRotate", a single real value number in degrees',
          'if type="luminanceToAlpha", this attribute is not applicable',
        ],
        defaults: [
          'if type="matrix", the identity matrix',
          'if type="saturate", 1',
          'if type="hueRotate", 0'
        ]
      }
    ]
  }
];




/*
const attributes = [
  {
    name: 'in',
    values: [
      'SourceGraphic',             
      'SourceAlpha',
      'BackgroundImage',
      'BackgroundAlpha',
      'FillPaint',
      'StrokePaint',
      '<a string matching the result attribute of a preceding filter primitive>'
    ],
    defaults: [
      'SourceGraphic [if this if first filter primitive]', 
      'result from preceding filter primitive [if this is NOT the first filter primitive]'
    ]
  }, {
    name: 'stdDeviation',
    values: 'number [one number representing the value for both X- and Y-axis or two values representing X-axis and Y-axis respectively]',
    defaults: [0]
  }, {
    name: 'edgeMode',
    values: [
      'duplicate',
      'wrap',
      'none'
    ],
    defaults: ['duplicate']
  }
  
];
*/

export { filters };