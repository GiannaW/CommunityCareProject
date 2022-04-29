

console.log("werunning")
var width = 960,
height =500,
radius = Math.min(width,height)/2;
var color = d3.scale.ordinal()
.range(['#cbc3e3','#8a2be2']);
var arc = d3.svg.arc()
.outerRadius(radius-10)
.innerRadius(0);
var pie = d3.layout.pie()
.sort(null)
.value(function(d){return d.Amount;});
var svg = d3.select("body").append("svg")
.attr("width",width)
.attr("height",height)
.append("g")
 .attr("transform","translate("+width/2+","+height/2+")");
d3.csv('WebApp/DataVis/PieChartJs/PhillyCompData.csv',function(error,data){
    data.forEach(function(d){
        d.Amount = +d.Amount;
    });
    var g = svg.selectAll(".arc")
        .data(pie(data))
    .enter().append("g")
        .attr("class","arc");
    g.append("path")
        .attr("d",arc)
        .style("fill",function(d){return color(d.data.Attrbuttes)});

    g.append('text')
        .attr("transform",function(d){return "translate("+arc.centroid(d)+")";})
        .attr("dy",".35em")
        .style("text-anchor","middle")
        .text(function(d){return d.data.Attrbuttes});











});