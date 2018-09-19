const filters = [
  { 
    name: 'feConvolveMatrix',
    attributes: [
      {
        name: 'in',
        values: [
          {
            name: 'SourceGraphic',
            value: 'SourceGraphic'
          },
          {
            name: 'SourceAlpha',
            value: 'SourceAlpha'
          },
          {
            name: 'BackgroundImage',
            value: 'BackgroundImage'
          },
          {
            name: 'BackgroundAlpha',
            value: 'BackgroundAlpha'
          },
          {
            name: 'FillPaint',
            value: 'FillPaint'
          },
          {
            name: 'StrokePaint',
            value: 'StrokePaint'
          },          
          {
            name: '{String}',
            value: '',
            notes: 'should match result attribute of a preceding filter primitive'
          }
        ],
        defaults: [
          {
            value: 'SourceGraphic',
            notes: 'if this is first filter primitive'
          },
          {
            value: 'result from preceding filter primitive',
            notes: 'if this is NOT the first filter primitive'
          }
        ]
      },
      {
        name: 'order',
        values: [
          {
            name: 'oen positive integer',
            value: '3',
            notes: 'number of columns and rows in matrix'
          },
          {
            name: 'two positive integers',
            value: '3 3',
            notes: 'number of columns and rows in matrix, respectively'
          }
        ],
        defaults: [
          {
            value: '3',
            notes: 'values above 3 are discouraged'
          }
        ]
      },
      {
        name: 'kernelMatrix',
        values: [
          {            
            name: 'space- or comma-separated list of numbers',
            value: '0 0 0 0 0 0 0 0', // TODO: Choose the appropriate matrix here
            notes: 'the length of the list must equal the size of the matrix specified in the "order" attribute'
          }
        ],
        defaults: [
          {
            value: 'unknown!'
          }
        ]
      },
      {
        name: 'divisor',
        values: [
          {
            name: '{number}',
            value: '1',
            notes: 'number cannot be 0'
          }
        ],
        defaults: [
          {
            value: 'sum of all matrix values',
            notes: 'the sum must not equal 0'
          }, 
          {
            value: '1',
            notes: 'if the sum of all matrix values is 0'
          }
        ]
      },
      {
        name: 'targetX',
        values: [
          {
            name: '{integer}',
            value: '1',
            notes: 'value i should be 0 <= i < orderX'
          }
        ],
        defaults: [
          {
            value: 'Math.floor(orderX / 2)'    
          }
        ]
      },
      {
        name: 'targetY',
        values: [
          {
            name: '{integer}',
            value: '1',
            notes: 'value i should be 0 <= i < orderY'
          }
        ],
        defaults: [
          {
            value: 'Math.floor(orderY / 2)'    
          }
        ]
      },
      {
        name: 'edgeMode',
        values: [
          {
            name: 'duplicate',
            value: 'duplicate'
          },
          {
            name: 'wrap',
            value: 'wrap'
          },
          {
            name: 'none',
            value: 'none'
          }
        ],
        defaults: [
          {
            value: 'duplicate'
          }
        ]
      },
      {
        name: 'kernelUnitLength',
        values: [
          {
            name: 'one number',
            value: '1',
            notes: 'distance between columns and rows in matrix; must be greater than zero'
          },
          {
            name: 'two numbers',
            value: '1 1',
            notes: 'distance between columns and rows in matrix, respectively; must be greater than zero'
          }          
        ],
        defaults: [
          {
            value: '???'
          }
        ]
      },
      {
        name: 'preserveAlpha',
        values: [
          {
            value: 'true',
            name: 'true'
          },
          {
            value: 'false',
            name: 'false'
          }
        ],
        defaults: [
          {
            value: 'false'
          }
        ]
      }
    ]
  },
  {
    name: 'feOffset',
    attributes: [
      {
        name: 'in',
        values: [
          {
            name: 'SourceGraphic',
            value: 'SourceGraphic'
          },
          {
            name: 'SourceAlpha',
            value: 'SourceAlpha'
          },
          {
            name: 'BackgroundImage',
            value: 'BackgroundImage'
          },
          {
            name: 'BackgroundAlpha',
            value: 'BackgroundAlpha'
          },
          {
            name: 'FillPaint',
            value: 'FillPaint'
          },
          {
            name: 'StrokePaint',
            value: 'StrokePaint'
          },          
          {
            name: '{String}',
            value: '',
            notes: 'should match result attribute of a preceding filter primitive'
          }
        ],
        defaults: [
          {
            value: 'SourceGraphic',
            notes: 'if this is first filter primitive'
          },
          {
            value: 'result from preceding filter primitive',
            notes: 'if this is NOT the first filter primitive'
          }
        ]
      },
      {
        name: 'dx',
        values: [
          { 
            name: 'number',
            value: '10'
          }
        ],
        defaults: [
          {
            value: '0'
          }
        ]
      },
      {
        name: 'dy',
        values: [
          { 
            name: 'number',
            value: '10'
          }
        ],
        defaults: [
          {
            value: '0'
          }
        ]
      }
    ]
  },
  {
    name: 'feMorphology',
    attributes: [
      {
        name: 'in',
        values: [
          {
            name: 'SourceGraphic',
            value: 'SourceGraphic'
          },
          {
            name: 'SourceAlpha',
            value: 'SourceAlpha'
          },
          {
            name: 'BackgroundImage',
            value: 'BackgroundImage'
          },
          {
            name: 'BackgroundAlpha',
            value: 'BackgroundAlpha'
          },
          {
            name: 'FillPaint',
            value: 'FillPaint'
          },
          {
            name: 'StrokePaint',
            value: 'StrokePaint'
          },          
          {
            name: '{String}',
            value: '',
            notes: 'should match result attribute of a preceding filter primitive'
          }
        ],
        defaults: [
          {
            value: 'SourceGraphic',
            notes: 'if this is first filter primitive'
          },
          {
            value: 'result from preceding filter primitive',
            notes: 'if this is NOT the first filter primitive'
          }
        ]
      }, {
        name: 'operator',
        values: [
          {
            name: 'erode',
            value: 'erode'
          },
          {
            name: 'dilate',
            value: 'dilate'
          }
        ],
        defaults: [
          {
            value: 'erode'
          }]
      }, {
        name: 'radius',
        values: [
          {
            value: '1',
            name: 'one positive number',
            notes: 'x- and y-radius'
          },
          {
            value: '1 1',
            name: 'two positive numbers',
            notes: 'x- and y-radius, respectively'
          }
        ],
        defaults: [
          {
            value: '0'
          }
        ]
      }
    ]
  },
  {
    name: 'feGaussianBlur',
    attributes: [
      {
        name: 'in',
        values: [
          {
            name: 'SourceGraphic',
            value: 'SourceGraphic'
          },
          {
            name: 'SourceAlpha',
            value: 'SourceAlpha'
          },
          {
            name: 'BackgroundImage',
            value: 'BackgroundImage'
          },
          {
            name: 'BackgroundAlpha',
            value: 'BackgroundAlpha'
          },
          {
            name: 'FillPaint',
            value: 'FillPaint'
          },
          {
            name: 'StrokePaint',
            value: 'StrokePaint'
          },          
          {
            name: '{String}',
            value: '',
            notes: 'should match result attribute of a preceding filter primitive'
          }
        ],
        defaults: [
          {
            value: 'SourceGraphic',
            notes: 'if this is first filter primitive'
          },
          {
            value: 'result from preceding filter primitive',
            notes: 'if this is NOT the first filter primitive'
          }
        ]
      },
      {
        name: 'stdDeviation',
        values: [
          {
            name: 'one number',
            value: '1',
            notes: 'x- and y-axis'
          },
          { 
            name: 'two numbers',
            value: '1 1',
            notes: 'x- and y-axis, respectively'
          }
        ],
        defaults: [
          {
            value: '0'
          }
        ]
      }, 
      {
        name: 'edgeMode',
        values: [
          {
            name: 'duplicate',
            value: 'duplicate'
          },
          {
            name: 'wrap',
            value: 'wrap'
          },
          {
            name: 'none',
            value: 'none'
          }
        ],
        defaults: [
          {
            value: 'duplicate'
          }
        ]
      }
    ]
  },
  {
    name: 'feColorMatrix',
    attributes: [
      {
        name: 'in',
        values: [
          {
            name: 'SourceGraphic',
            value: 'SourceGraphic'
          },
          {
            name: 'SourceAlpha',
            value: 'SourceAlpha'
          },
          {
            name: 'BackgroundImage',
            value: 'BackgroundImage'
          },
          {
            name: 'BackgroundAlpha',
            value: 'BackgroundAlpha'
          },
          {
            name: 'FillPaint',
            value: 'FillPaint'
          },
          {
            name: 'StrokePaint',
            value: 'StrokePaint'
          },          
          {
            name: '{String}',
            value: '',
            notes: 'should match result attribute of a preceding filter primitive'
          }
        ],
        defaults: [
          {
            value: 'SourceGraphic',
            notes: 'if this is first filter primitive'
          },
          {
            value: 'result from preceding filter primitive',
            notes: 'if this is NOT the first filter primitive'
          }
        ]
      },
      {
        name: 'type',
        values: [
          {
            name: 'matrix',
            value: 'matrix'
          },
          {
            name: 'saturate',
            value: 'saturate'
          },
          {
            name: 'hueRotate',
            value: 'hueRotate'
          },
          {
            name: 'luminanceToAlpha',
            value: 'luminanceToAlpha'
          }
        ],
        defaults: [
          {
            value: 'matrix'
          }
        ]
      },
      {
        name: 'values',
        values: [
          {
            name: '20 matrix values',
            value: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0', // TODO: Figure out what the identity matrix here is
            notes: 'if type="matrix"'
          },
          {
            name: 'number between 0 and 1',
            value: '1',
            notes: 'if type="saturate"'
          },
          {
            name: 'number of degrees',
            value: '0',
            notes: 'if type="hueRotate"'
          }
        ],
        defaults: [
          {
            value: 'the identity matrix',
            notes: 'if type="matrix"'
          },
          {
            value: '1',
            notes: 'if type="saturate"'
          },
          {
            value: '0',
            notes: 'if type="hueRotate"'
          }
        ]
      }
    ]
  }
];

export { filters };