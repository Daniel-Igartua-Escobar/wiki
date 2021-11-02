var data= [
    {
        "beginDate": "2021-07-08T00:00:00Z",
        "endDate": "2021-07-08T23:59:59Z",
        "sales": [
            {
                "totalElements": 0,
                "amount": 0.0,
                "currency": "PEN",
                "details": [
                  {
                      "detailType": {
                          "id": "IZIPAY",
                          "name": "IZIPAY"
                      },
                      "totalElements": 2,
                      "amount": {
                          "amount": 21321.66,
                          "currency": "PEN"
                      }
                  },
                ]
            }
        ],
    },
      {
        "beginDate": "2021-06-08T00:00:00Z",
        "endDate": "2021-06-08T23:59:59Z",
        "sales": [
            {
                "totalElements": 0,
                "amount": 0.0,
                "currency": "PEN",
                "details": [
                  {
                      "detailType": {
                          "id": "IZIPAY",
                          "name": "IZIPAY"
                      },
                      "totalElements": 1,
                      "amount": {
                          "amount": 300,
                          "currency": "PEN"
                      }
                  },
                                        {
                      "detailType": {
                          "id": "NIUBIZ",
                          "name": "NIUBIZ"
                      },
                      "totalElements": 2,
                      "amount": {
                          "amount": 120,
                          "currency": "PEN"
                      }
                  },
                ]
            }
        ],
    },
    {
        "beginDate": "2021-05-08T00:00:00Z",
        "endDate": "2021-05-08T23:59:59Z",
        "sales": [
            {
                "totalElements": 0,
                "amount": 0.0,
                "currency": "PEN",
                "details": [
                  {
                      "detailType": {
                          "id": "IZIPAY",
                          "name": "IZIPAY"
                      },
                      "totalElements": 1,
                      "amount": {
                          "amount": 300,
                          "currency": "PEN"
                      }
                  },
                                        {
                      "detailType": {
                          "id": "PACO",
                          "name": "PACO"
                      },
                      "totalElements": 2,
                      "amount": {
                          "amount": 120,
                          "currency": "PEN"
                      }
                  },
                ]
            }
        ],
    },
];

var graphicData = [];
var paymentMethods = [];
var graphicLegend = [];


function _getPaymentMethods(data) {
    return data.reduce((acc, balance) => {
    const paymentMethods = balance.sales[0].details;
    paymentMethods.forEach(paymentMethod => {
        if (!acc.includes(paymentMethod.detailType.id)) {
            acc.push(paymentMethod.detailType.id)
        }
    });
    return acc;
  }, []);
}




function _getObjectFromIndicatorsGraph(data) {
    const deepCopyResponse = JSON.parse(JSON.stringify(data)).reverse();
    var graphicData = paymentMethods.map((paymentMethod, i) => {
        const colors = {
            0: '#ff1493',
            1: '#00ffff',
            'default': getRandomColor()
        };


        function getRandomColor() {
            const symbols = "0123456789ABCDEF";
            let color = "#";
        
            for(let i = 0; i < 6; i++){
                color = color + symbols[Math.floor(Math.random() * 16)];
            }

            return color;
        }

        return {
            color: (colors[i] || colors['default']),
            label: paymentMethod,
            data: []
        };
    });

    deepCopyResponse.forEach(balance => {
        const details = balance.sales[0].details;
        graphicData.forEach(e => {
            const hasData = details.find(detail => detail.detailType.id === e.label);
            e.currency = balance.sales[0].currency;
            e.data.push({ date: Date.parse(new Date(balance.beginDate)), value: hasData ? hasData.amount.amount : 0 });
        });
    })

    return graphicData;
};

function _getGraphicLegend() {
    return graphicData.map(paymentMethodData => {
        const totalAmount = paymentMethodData.data.reduce((acc, paymentMethod) => acc += paymentMethod.value, 0)
        return {
            name: paymentMethodData.label,
            amount: totalAmount,
            currency: paymentMethodData.currency,
            color: paymentMethodData.color
        }
    })
}

function _getBillings() {
    const billings = [
        {
            title: 'DÍA DE MENOR FACTURACIÓN',
            data: [],
        },
        {
            title: 'DÍA DE MAYOR FACTURACIÓN',
            data: [],
        },
    ];

    graphicData.forEach(paymentMethodData => {
        const minMaxAmounts = paymentMethodData.data.reduce((acc, row) => {
            acc[0] = ( !acc[0] || row.value < acc[0].value ) ? row : acc[0]
            acc[1] = ( !acc[1] || row.value > acc[1].value ) ? row : acc[1]
            return acc;
        }, []);

        billings[0].data.push({
            name: paymentMethodData.label,
            date: minMaxAmounts[0].date,
            amount: minMaxAmounts[0].value,
            currency: paymentMethodData.currency
        });
        billings[1].data.push({
            name: paymentMethodData.label,
            date: minMaxAmounts[1].date,
            amount: minMaxAmounts[1].value,
            currency: paymentMethodData.currency
        });
    });

    return billings;
}

function _getBillings2() {
    const graphicLegend = [];
    const billings = [
        {
            title: 'DÍA DE MENOR FACTURACIÓN',
            data: [],
        },
        {
            title: 'DÍA DE MAYOR FACTURACIÓN',
            data: [],
        },
    ];

    graphicData.forEach(paymentMethodData => {
        const allAmounts = paymentMethodData.data.reduce((acc, row) => {
            acc[0] = ( !acc[0] || row.value < acc[0].value ) ? row : acc[0]
            acc[1] = ( !acc[1] || row.value > acc[1].value ) ? row : acc[1]
            acc[2] = acc[2] += row.value
            return acc;
        }, [{}, {}, 0]);

        graphicLegend.push({
            name: paymentMethodData.label,
            amount: allAmounts[2],
            currency: paymentMethodData.currency,
            color: paymentMethodData.color
        });

        billings[0].data.push({
            name: paymentMethodData.label,
            date: allAmounts[0].date,
            amount: allAmounts[0].value,
            currency: paymentMethodData.currency
        });

        billings[1].data.push({
            name: paymentMethodData.label,
            date: allAmounts[1].date,
            amount: allAmounts[1].value,
            currency: paymentMethodData.currency
        });
    });

    return {billings, graphicLegend};
}


// paymentMethods = _getPaymentMethods(data);
// graphicData = _getObjectFromIndicatorsGraph(data)
// // console.log(_getGraphicLegend());
// console.log(_getBillings2());






var filters = {
    comparePeriods: false,
    filters: [
        {
            name: 'Ultimos 7 dias',
            removable: true,
            value: 7,
            type: 'timePeriod'
        },
        {
            name: 'IZIPAY',
            removable: false,
            type: 'paymentMethod'
        },
        {
            name: 'NIUBIZ',
            removable: false,
            type: 'paymentMethod'
        }
    ]
}


function getFiltersPaymentMethods(data) {
    const paymentMethods = data.filters.reduce((acc, filter) => {
        if (filter.type === 'paymentMethod') {
          acc.push(filter.name)
        }
        return acc;
      }, []);

      return paymentMethods;
}


console.log(getFiltersPaymentMethods(filters));



var suerte = [
    {
        color: "#ff1493",
        label: "IZIPAY",
        currency: "PEN",
        data: [
            {date: 1627689600000, value: 0},
            {date: 1627776000000, value: 0},
            {date: 1627862400000, value: 0},
            {date: 1627948800000, value: 0},
            {date: 1628035200000, value: 0},
            {date: 1628121600000, value: 0},
            {date: 1628208000000, value: 0},
            {date: 1628294400000, value: 0},
            {date: 1628380800000, value: 0},
            {date: 1628467200000, value: 0},
            {date: 1628553600000, value: 0},
            {date: 1628640000000, value: 0},
            {date: 1628726400000, value: 0},
            {date: 1628812800000, value: 0},
            {date: 1628899200000, value: 0},
                {date: 1628985600000, value: 20},
                {date: 1629072000000, value: 20},
                {date: 1629158400000, value: 70},
                {date: 1629244800000, value: 30},
                {date: 1629331200000, value: 120},
                {date: 1629417600000, value: 80},
                {date: 1629504000000, value: 20},
                {date: 1629590400000, value: 0},
                {date: 1629676800000, value: 70},
                {date: 1629763200000, value: 90},
                {date: 1629849600000, value: 100},
                {date: 1629936000000, value: 0},
                {date: 1630022400000, value: 30},
                {date: 1630108800000, value: 0},
                {date: 1630195200000, value: 20}
        ]

    },
    {
        color: "#00ffff",
        label: "NIUBIZ",
        currency: "PEN",
        data: [
            {date: 1627689600000, value: 0},
            {date: 1627776000000, value: 0},
            {date: 1627862400000, value: 0},
            {date: 1627948800000, value: 0},
            {date: 1628035200000, value: 0},
            {date: 1628121600000, value: 0},
            {date: 1628208000000, value: 0},
                {date: 1628294400000, value: 0},
                {date: 1628380800000, value: 0},
                {date: 1628467200000, value: 0},
                {date: 1628553600000, value: 0},
                // {date: 1628640000000, value: 0},
                // {date: 1628726400000, value: 0},
                // {date: 1628812800000, value: 0},
                // {date: 1628899200000, value: 0},
            // {date: 1628985600000, value: 90},
            // {date: 1629072000000, value: 90},
            // {date: 1629158400000, value: 90},
            // {date: 1629244800000, value: 10},
            // {date: 1629331200000, value: 10},
            // {date: 1629417600000, value: 30},
            // {date: 1629504000000, value: 30},
            // {date: 1629590400000, value: 70},
            // {date: 1629676800000, value: 70},
            // {date: 1629763200000, value: 50},
            // {date: 1629849600000, value: 50},
            // {date: 1629936000000, value: 50},
            // {date: 1630022400000, value: 20},
            // {date: 1630108800000, value: 20},
            // {date: 1630195200000, value: 0}
        ]

    }

]

function prueba(data) {
    return data.reduce((acc, item) => {
        return item.data.length > acc.length ? item.data : acc;
      }, []);
}


console.log(prueba(suerte));

