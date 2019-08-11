"use strict";
AmCharts.lazyLoadMakeChart = AmCharts.makeChart, AmCharts.makeChart = function(e, l, o) {
  function a() {
    if ($("#" + e).is("div")) {
      if (!0 === l.lazyLoaded) return;
      if ($("#" + e).offset().top + $("#" + e).outerHeight() / 2 - $(window).height() < $(window).scrollTop()) return l.lazyLoaded = !0, void AmCharts.lazyLoadMakeChart(e, l, o)
    }
  }
  return $(document).on("scroll load touchmove", a), $(window).on("load", a), {
    addListener: function() {}
  }
}, AmCharts.makeChart("P02", {
	"type": "serial",
	"categoryField": "category",
	"colors": [
		"#73953D",
		"#B8C784",
		"#B0DE09",
		"#0D8ECF",
		"#2A0CD0",
		"#CD0D74",
		"#CC0000",
		"#00CC00",
		"#0000CC",
		"#DDDDDD",
		"#999999",
		"#333333",
		"#990000"
	],
	"startDuration": 1,
	"backgroundAlpha": 0.8,
	"fontFamily": "Roboto",
  hideCredits: !0,
	"precision": 1,
	"export": {
		"enabled": true
	},
	"categoryAxis": {
		"gridPosition": "start"
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"fillAlphas": 1,
			"id": "AmGraph-1",
			"labelOffset": -20,
			"labelPosition": "bottom",
			"labelText": "[[value]]",
			"showBalloon": false,
			"title": "graph 1",
			"type": "column",
			"valueField": "column-1"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"stackType": "regular",
			"title": "g/m2 of vehicle surface area coated"
		}
	],
	"allLabels": [],
	"balloon": {},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": ""
		}
	],
	"dataProvider": [
		{
			"category": "FY15    ",
			"column-1": "12.5"
		},
		{
			"category": "FY16    ",
			"column-1": "12.0"
		},
		{
			"category": "FY17    ",
			"column-1": "12.0"
		},
		{
			"category": "FY18    ",
			"column-1": "12.2"
		},
		{
			"category": "FY19",
			"column-1": "13.0"
		}
	]
}), AmCharts.makeChart("P05-FG15", {
  type: "serial",
  categoryField: "category",
  colors: ["#73953D", "#B8C784", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
  startDuration: 1,
  backgroundAlpha: .8,
  fontFamily: "Roboto",
  hideCredits: !0,
  categoryAxis: {
    gridPosition: "start"
  },
  trendLines: [],
  graphs: [{
    balloonText: "[[title]] of [[category]]:[[value]]",
    fillAlphas: 1,
    id: "AmGraph-1",
    labelOffset: -20,
    labelPosition: "bottom",
    labelText: "[[value]]",
    showBalloon: !1,
    title: "graph 1",
    type: "column",
    valueField: "column-1"
  }, {
    balloonText: "[[title]] of [[category]]:[[value]]",
    fillAlphas: 1,
    id: "AmGraph-2",
    labelOffset: -20,
    labelPosition: "bottom",
    labelText: "[[value]]",
    showBalloon: !1,
    title: "graph 2",
    type: "column",
    valueField: "column-2"
  }],
  guides: [],
  valueAxes: [{
    id: "ValueAxis-1",
    stackType: "regular",
    title: "Programs Certified"
  }],
  allLabels: [],
  balloon: {},
  dataProvider: [{
    category: "2018",
    "column-1": "12",
    "column-2": "n/a"
  }, {
    category: "2021 Target",
    "column-1": "n/a",
    "column-2": "20"
  }]
}), AmCharts.makeChart("P06", {
  type: "serial",
  categoryField: "category",
  colors: ["#73953D", "#B8C784", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
  startDuration: 1,
  fontFamily: "Roboto",
  hideCredits: !0,
  categoryAxis: {
    autoRotateAngle: 0,
    autoWrap: !0,
    gridPosition: "start",
    centerLabels: !0,
    labelRotation: -41.4,
    titleColor: "#000000"
  },
  trendLines: [],
  graphs: [{
    balloonText: "[[title]] of [[category]]:[[value]]",
    bullet: "round",
    id: "AmGraph-1",
    showBalloon: !1,
    title: "Toyota CO2",
    valueField: "column-1"
  }, {
    balloonText: "[[title]] of [[category]]:[[value]]",
    bullet: "square",
    id: "AmGraph-2",
    showBalloon: !1,
    title: "Toyota GHG",
    valueField: "column-2"
  }],
  guides: [],
  valueAxes: [{
    id: "ValueAxis-1",
    autoRotateAngle: 0,
    title: "CO2 and GHG Emission Value (G/MI)"
  }],
  allLabels: [],
  balloon: {},
  legend: {
    enabled: !0,
    useGraphSettings: !0
  },
  dataProvider: [{
    category: "2005",
    "column-1": "308",
    "column-2": "n/a"
  }, {
    category: "2006",
    "column-1": "309",
    "column-2": "n/a"
  }, {
    category: "2007",
    "column-1": "299",
    "column-2": "n/a"
  }, {
    category: "2008",
    "column-1": "307",
    "column-2": "n/a"
  }, {
    category: "2009",
    "column-1": "271",
    "column-2": "n/a"
  }, {
    category: "2010",
    "column-1": "269",
    "column-2": "n/a"
  }, {
    category: "2011",
    "column-1": "285",
    "column-2": "n/a"
  }, {
    category: "2012",
    "column-1": "265",
    "column-2": "265"
  }, {
    category: "2013",
    "column-1": "270",
    "column-2": "268"
  }, {
    category: "2014",
    "column-1": "264",
    "column-2": "258"
  }, {
    category: "2015",
    "column-1": "272",
    "column-2": "265"
  }, {
    category: "2016",
    "column-1": "271",
    "column-2": "267"
  }, {
    category: "2017 MidYear",
    "column-1": "261",
    "column-2": "n/a"
  }, {
    category: "2018 PreModel",
    "column-1": "259",
    "column-2": "n/a"
  }, {
    category: "",
    "column-1": "n/a",
    "column-2": "n/a"
  }]
}), AmCharts.makeChart("P07", {
	"type": "serial",
	"categoryField": "category",
	"rotate": true,
	"colors": [
		"#73953D",
		"#B8C784",
		"#B0DE09",
		"#0D8ECF",
		"#2A0CD0",
		"#CD0D74",
		"#CC0000",
		"#00CC00",
		"#0000CC",
		"#DDDDDD",
		"#999999",
		"#333333",
		"#990000"
	],
	"startDuration": 1,
	"fontFamily": "Roboto",
    hideCredits: !0,
	"export": {
		"enabled": true
	},
	"categoryAxis": {
		"gridPosition": "start",
		"title": "Annual grams CO2/mile"
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"fillAlphas": 1,
			"id": "AmGraph-1",
			"labelText": "[[value]]",
			"showBalloon": false,
			"title": "Car",
			"type": "column",
			"valueField": "column-1"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"fillAlphas": 1,
			"id": "AmGraph-2",
			"labelText": "[[value]]",
			"title": "Truck",
			"type": "column",
			"valueField": "column-2"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"minimum": 1,
			"title": ""
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"useGraphSettings": true
	},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": ""
		}
	],
	"dataProvider": [
		{
			"category": "2013 MY",
			"column-1": "221",
			"column-2": "323"
		},
		{
			"category": "2014 MY",
			"column-1": "207.7",
			"column-2": "331.1"
		},
		{
			"category": "2015 MY",
			"column-1": "208.8",
			"column-2": "317.0"
		},
		{
			"category": "2016 MY",
			"column-1": "208.8",
			"column-2": "314.7"
		},
		{
			"category": "2017 MY",
			"column-1": "204.3",
			"column-2": "296.5"
		},
		{
			"category": "2018 MY",
			"column-1": "194.7",
			"column-2": "294.7"
		}
	]
}), AmCharts.makeChart("P08", {
	"type": "serial",
  hideCredits: !0,
	"categoryField": "category",
	"rotate": true,
	"colors": [
		"#008392",
		"#21b3c3",
		"#B0DE09",
		"#0D8ECF",
		"#2A0CD0",
		"#CD0D74",
		"#CC0000",
		"#00CC00",
		"#0000CC",
		"#DDDDDD",
		"#999999",
		"#333333",
		"#990000"
	],
	"startDuration": 1,
	"fontFamily": "Roboto",
	"export": {
		"enabled": true
	},
	"categoryAxis": {
		"gridPosition": "start"
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"cornerRadiusTop": 4,
			"fillAlphas": 1,
			"id": "AmGraph-1",
			"labelOffset": 10,
			"labelPosition": "right",
			"labelText": "[[value]]",
			"lineColor": "#8DB63F",
			"lineThickness": 2,
			"showBalloon": false,
			"tabIndex": 19,
			"title": "g CO2 per km",
			"type": "column",
			"valueField": "column-1"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"stackType": "regular",
			"zeroGridAlpha": 1,
			"axisThickness": 2,
			"gridCount": 0,
			"offset": 3,
			"tickLength": 1,
			"title": "",
			"titleFontSize": 6
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"useGraphSettings": true
	},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": ""
		}
	],
	"dataProvider": [
		{
			"category": "2018",
			"column-1": "162.2"
		},
		{
			"category": "2017",
			"column-1": "158.4"
		},
		{
			"category": "2016",
			"column-1": "167.1"
		},
		{
			"category": "2015",
			"column-1": "178.7"
		},
		{
			"category": "2014",
			"column-1": "283.8"
		}
	]

}), AmCharts.makeChart("P09-FG07", {
	"type": "serial",
  hideCredits: !0,
	"categoryField": "category",
	"colors": [
		"#73953D",
		"#B8C784",
		"#B0DE09",
		"#0D8ECF",
		"#2A0CD0",
		"#CD0D74",
		"#CC0000",
		"#00CC00",
		"#0000CC",
		"#DDDDDD",
		"#999999",
		"#333333",
		"#990000"
	],
	"startDuration": 1,
	"theme": "default",
	"categoryAxis": {
		"gridPosition": "start"
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonColor": "#B73535",
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bulletBorderThickness": 0,
			"bulletOffset": 4,
			"color": "#000000",
			"fillAlphas": 1,
			"id": "AmGraph-1",
			"labelText": "[[value]]",
			"lineThickness": 0,
			"negativeBase": 14,
			"periodSpan": -9,
			"tabIndex": 0,
			"title": "Scope 1",
			"type": "column",
			"valueField": "column-1",
			"yAxis": "ValueAxis-1"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"fillAlphas": 1,
			"id": "AmGraph-2",
			"labelText": "[[value]]",
			"tabIndex": 0,
			"title": "Scope 2",
			"type": "column",
			"valueField": "column-2",
			"yAxis": "ValueAxis-1"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"fillAlphas": 1,
			"fillColors": "#AAB3B3",
			"fontSize": 10,
			"id": "Target",
			"labelText": "[[value]]",
			"lineThickness": 0,
			"tabIndex": -7,
			"title": "Target",
			"type": "column",
			"valueField": "Target",
			"yAxis": "ValueAxis-1"
		},
		{
			"id": "AmGraph-4",
			"showBalloon": false,
			"type": "step",
			"visibleInLegend": false
		},
		{
			"fillColors": "#666",
			"id": "AmGraph-5",
			"lineThickness": 0,
			"title": "graph 5",
			"type": "column",
			"valueField": "Target",
			"visibleInLegend": false
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"maximum": 1400000,
			"minimum": 0,
			"stackType": "regular",
			"gridCount": 0,
			"minVerticalGap": 26,
			"title": ""
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"useGraphSettings": true
	},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": ""
		}
	],
	"dataProvider": [
		{
			"category": "FY2016",
			"column-1": "395000",
			"column-2": "897000",
			"Target": "null"
		},
		{
			"category": "FY2017",
			"column-1": "391000",
			"column-2": "911000",
			"Target": "null"
		},
		{
			"category": "FY2018",
			"column-1": "434000",
			"column-2": "895000",
			"Target": "null"
		},
		{
			"category": "FY2019",
			"column-1": "434000",
			"column-2": "783000",
			"Target": "null"
		},
		{
			"category": "FY2021 Target",
			"column-1": "null",
			"column-2": "null",
			"Target": "1098200"
		}
	]
}), AmCharts.makeChart("P10", {
	"type": "serial",
	"categoryField": "category",
	"colors": [
		"#73953D",
		"#21b3c3",
		"#B0DE09",
		"#0D8ECF",
		"#2A0CD0",
		"#CD0D74",
		"#CC0000",
		"#00CC00",
		"#0000CC",
		"#DDDDDD",
		"#999999",
		"#333333",
		"#990000"
	],
	"startDuration": 1,
	"fontFamily": "Roboto",
  hideCredits: !0,
	"precision": 2,
	"export": {
		"enabled": true
	},
	"categoryAxis": {
		"gridPosition": "start"
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"fillAlphas": 1,
			"id": "AmGraph-1",
			"labelOffset": -20,
			"labelPosition": "bottom",
			"labelText": "[[value]]",
			"showBalloon": false,
			"title": "MT CO2e from Scope 1+2 per vehicle produced",
			"type": "column",
			"valueField": "column-1"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"stackType": "regular",
			"title": ""
		},
		{
			"id": "ValueAxis-2"
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"useGraphSettings": true
	},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": ""
		}
	],
	"dataProvider": [
		{
			"category": "FY2016",
			"column-1": "0.66"
		},
		{
			"category": "FY2017",
			"column-1": "0.63"
		},
		{
			"category": "FY2018",
			"column-1": "0.70"
		},
		{
			"category": "FY 2019",
			"column-1": "0.66"
		}
	]
}), AmCharts.makeChart("P11-FG08", {
	"type": "serial",
	"categoryField": "category",
	"colors": [
		"#73953D",
		"#B8C784",
		"#B0DE09",
		"#0D8ECF",
		"#2A0CD0",
		"#CD0D74",
		"#CC0000",
		"#00CC00",
		"#0000CC",
		"#DDDDDD",
		"#999999",
		"#333333",
		"#990000"
	],
	"startDuration": 1,
	"fontFamily": "Roboto",
    hideCredits: !0,
	"export": {
		"enabled": true
	},
	"categoryAxis": {
		"gridPosition": "start"
	},
	"trendLines": [],
	"graphs": [
		{
			"colorField": "color",
			"fillAlphas": 1,
			"id": "AmGraph-1",
			"labelOffset": 10,
			"labelText": "[[value]]",
			"lineColorField": "color",
			"showBalloon": false,
			"title": "graph 1",
			"type": "column",
			"valueField": "column-1"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"minimum": 1,
			"title": "grams CO2e/ton-kilometer"
		}
	],
	"allLabels": [],
	"balloon": {},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": ""
		}
	],
	"dataProvider": [
		{
			"category": "FY2016",
			"column-1": "37.07"
		},
		{
			"category": "FY2017",
			"column-1": "35.44"
		},
		{
			"category": "FY2018",
			"column-1": "30.86"
		},
		{
			"category": "FY2019",
			"column-1": "30.12"
		},
		{
			"category": "FY2021 Target",
			"column-1": "35.21",
			"color": "#B8C784"
		}
	]
});
