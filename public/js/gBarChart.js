function gBarchart(d1,d2,d3,v1,v2,v3){
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {
      var data = new google.visualization.arrayToDataTable([
        ['Review Date', 'Rating'],
        [d1, v1],
        [d2, v2],
        [d3, v3]
      ]);

      var options = {
        title: 'Chess opening moves',
        width: 300,
        height:200,
        legend: { position: 'none' },

        bars: 'horizontal', // Required for Material Bar Charts.
        axes: {
          x: {
            0: { side: 'bottom', label: 'Recent Ratings'} // Top x-axis.
          }
        },
        bar: { groupWidth: "90%" }
      };

      var chart = new google.charts.Bar(document.getElementById('top_x_div'));
      chart.draw(data, options);
    };
}