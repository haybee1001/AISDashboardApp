function loadChart(fault, outage, complain, whistle, hazard)
{

    //// Themes begin
    //am4core.useTheme(am4themes_animated);
    //// Themes end

    //// Create chart instance
    //var chart = am4core.create("chartdiv", am4charts.XYChart);
    

    //// Add data
    //chart.data = [{
    //    "category": "Faults",
    //    "number": 10,
    //    //"expenses": 18.1
    //}, {
    //    "category": "Outage",
    //    "number": 10,
    //    //"expenses": 22.8
    //}, {
    //    "category": "Complain",
    //    "number": parseInt(complain),
    //    //"expenses": 23.9
    //}, {
    //    "category": "Whistle",
    //    "number": parseInt(whistle),
    //    //"expenses": 25.1
    //}, {
    //    "category": "Hazard",
    //     "number": parseInt(hazard),
    //   // "expenses": 25
    //}];

    //// Create axes
    //var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    //categoryAxis.dataFields.category = "category";
    //categoryAxis.numberFormatter.numberFormat = "#";
    //categoryAxis.renderer.inversed = true;
    //categoryAxis.renderer.grid.template.location = 0;
    //categoryAxis.renderer.cellStartLocation = 0.1;
    //categoryAxis.renderer.cellEndLocation = 0.9;

    //var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    //valueAxis.renderer.opposite = true;

    //// Create series
    //function createSeries(field, name) {
    //    var series = chart.series.push(new am4charts.ColumnSeries());
    //    series.dataFields.valueX = field;
    //    series.dataFields.categoryY = "category";
    //    series.name = name;
    //    series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
    //    series.columns.template.height = am4core.percent(100);
    //    series.sequencedInterpolation = true;

    //    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    //    valueLabel.label.text = "{valueX}";
    //    valueLabel.label.horizontalCenter = "left";
    //    valueLabel.label.dx = 10;
    //    valueLabel.label.hideOversized = false;
    //    valueLabel.label.truncate = false;

    //    var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    //    categoryLabel.label.text = "{name}";
    //    categoryLabel.label.horizontalCenter = "right";
    //    categoryLabel.label.dx = -10;
    //    categoryLabel.label.fill = am4core.color("#fff");
    //    categoryLabel.label.hideOversized = false;
    //    categoryLabel.label.truncate = false;
    //}

    //createSeries("number", "Total");

    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("chartdiv", am4charts.XYChart);

        // Add data
        chart.data = [{
            "country": "USA",
            "visits": 2025
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }, {
            "country": "Germany",
            "visits": 1322
        }, {
            "country": "UK",
            "visits": 1122
        }, {
            "country": "France",
            "visits": 1114
        }, {
            "country": "India",
            "visits": 984
        }, {
            "country": "Spain",
            "visits": 711
        }, {
            "country": "Netherlands",
            "visits": 665
        }, {
            "country": "Russia",
            "visits": 580
        }, {
            "country": "South Korea",
            "visits": 443
        }, {
            "country": "Canada",
            "visits": 441
        }, {
            "country": "Brazil",
            "visits": 395
        }];

        // Create axes

        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
            if (target.dataItem && target.dataItem.index & 2 == 2) {
                return dy + 25;
            }
            return dy;
        });

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.name = "Visits";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;

        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;

    });


}

function pieChart(fault, outage, complain, whistle, hazard) {

    var chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    chart.data = [{
        "category": "Faults",
        "number": parseInt(fault),
    }, {
        "category": "Outage",
        "number": parseInt(outage),

    }, {
        "category": "Complain",
        "number": parseInt(complain),

    }, {
        "category": "Whistle",
        "number": parseInt(whistle),

    }, {
        "category": "Hazard",
        "number": parseInt(hazard),

    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "number";
    pieSeries.dataFields.category = "category";
}

