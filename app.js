var quiche = require('quiche');

var chart = quiche('line');
chart.setTitle('Something with lines');
chart.addData([3000, 2900, 1500], 'Blah', '008000');
chart.addData([1000, 1500, 2000], 'Asdf', '0000FF');
chart.addAxisLabels('x', ['1800', '1900', '2000']);
chart.setAutoScaling();
chart.setTransparentBackground();

var imageUrl = chart.getUrl(true); // First param controls http vs. https
console.log(imageUrl);


