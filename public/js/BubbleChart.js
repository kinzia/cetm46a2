function gBubbleChart(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawSeriesChart);

  function drawSeriesChart() {

    var data = google.visualization.arrayToDataTable([
      ['ID', 'Total Reviews', 'Average Rating'],
      ['Violettes Vegan Organic Cafe & Juice Bar',    972,              5]
    ]);

    var options = {
      hAxis: {title: 'Life Expectancy'},
      vAxis: {title: 'Fertility Rate'},
      bubble: {textStyle: {fontSize: 11}}      };

    var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
    chart.draw(data, options);
  }

}