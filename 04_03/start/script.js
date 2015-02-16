// var bardata = [20, 30, 20, 15, 40, 80,20, 30, 20, 15, 40, 80,20, 30, 20, 15, 40, 80,20, 30, 20, 15, 40, 80];

// More ramdom Data
var bardata = [];
for(var i=0; i < 60; i++){
	bardata.push(Math.random()*30);
}

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

var colors = d3.scale.linear()
		.domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
		.range(['#ffbb32', '#C61c6f', '#268bd2', '#c35bff']);

var yScale = d3.scale.linear()
        .domain([0, d3.max(bardata)])
        .range([0, height]);

var xScale = d3.scale.ordinal()
        .domain(d3.range(0, bardata.length))
        .rangeBands([0, width])

d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#C9D7D6')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
        .style('fill', function(d, i){
	        return colors(i); // Using color scales : Colors
        })
        .attr('width', xScale.rangeBand())
        .attr('height', function(d) {
            return yScale(d);
        })
        .attr('x', function(d,i) {
            return xScale(i);
        })
        .attr('y', function(d) {
            return height - yScale(d);
        })