var dataObject = [
    {
        name: 'Java',
        rank: 1,
        ad: '降',
        change: -0.0001
    },
    {
        name: 'C',
        rank: 2,
        ad: '升',
        change: 0.0244
    },
    {
        name: 'Python',
        rank: 3,
        ad: '升',
        change: 0.0141
    },
    {
        name: 'C++',
        rank: 4,
        ad: '降',
        change: -0.0258
    },
    {
        name: 'C#',
        rank: 5,
        ad: '升',
        change: 0.0207
    },
    {
        name: 'Visual Basic .NET',
        rank: 6,
        ad: '降',
        change: -0.0117
    },
    {
        name: 'JavaScript',
        rank: 7,
        ad: '降',
        change: -0.0085
    }
];

var hotElement = document.getElementById('hot');
var hotSettings = {
    data: dataObject,
    columns: [
        {
            data: 'name',
            type: 'text'
        },
        {
            data: 'rank',
            type: 'numeric'
        },
        {
            data: 'ad',
            type: 'text'
        },
        {
            data: 'change',
            type: 'numeric',
            numericFormat: {
                pattern: '+0.00%'
            }
        }
    ],
    stretchH: 'all',
    width: 800,
    autoWrapRow: true,
    height: 350,
    rowHeights: 45,
    colWidths: 35,
    className: "htCenter htMiddle",
    maxRows: 22,
    manualRowMove: true,
    manualColumnMove: true,
    rowHeaders: false,
    colHeaders: [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
    ],
    manualRowResize: true,
    manualColumnResize: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: false
};
var hot = new Handsontable(hotElement, hotSettings);

var myChart = echarts.init(document.getElementById('main'));
var option = {
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip: {
        show: true,
        trigger : 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#555',
                width: 1,
                type: 'solid'
            },
        },
        formatter: '<div style="text-align:center;">{a}<br/>{b}: {c}</div>'
    },
    xAxis: {
        data: [2000, 2005, 2010, 2015, 2020],
        axisPointer: {
            show: true
        }
    },
    yAxis: {},
    series: [{
        name: '排名',
        type: 'line',
        data: [6, 9, 8, 8, 7]
    }]
};
myChart.setOption(option);
