function CreateDonutChart(ar,tc){
var fc =ar;
var sc =5-ar;
    var data = [
        {name: 'avaerage rating', count: fc, percentage: 90, color: 'yellow'},
        {name: 'other rating', count: sc, percentage: 10, color: '#cbcb2c'},

      ];
      
      var width = 230,
      height = 200 ,
      radius = 90 ;
  
          var arc = d3.arc()
          .outerRadius(radius - 10)
          .innerRadius(100);
  
          var pie = d3.pie()
          .sort(null)
          .value(function(d) {
              return d.count;
          });
  
          var svg = d3.selectAll(".donutChart").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
      var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g");    
  
         g.append("path")
          .attr("d", arc)
        .style("fill", function(d,i) {
            return d.data.color;
        });

          
        g.append("text")
        .attr("text-anchor", "middle")
          .attr('font-size', '1.0em')
          .attr('y', -10)
        .text("avaerage rating: "+ar);

        g.append("text")
        .attr("text-anchor", "middle")
          .attr('font-size', '1.0em')
          .attr('y', 30)
        .text("total review: "+tc);

}