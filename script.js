var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
		  
// randomQuote();

$.ajax({url: "https://api.whatdoestrumpthink.com/api/v1/quotes", type: 'GET', success: function(result){
    quotes = result.messages.non_personalized;
	colorPicker(); //change background color randomly on click
	randomQuote(quotes);
	
  }
  })

var container = $('#container')
$("button").on('click', function(){
  randomQuote(quotes);
});

function randomNum(num) {
	var randomNum = Math.floor(Math.random() * Math.floor(num) );
	return randomNum;
}

function colorPicker() {
	let random = randomNum(50) // 50 colors in array
	var randomColor = colors[random]
	$('#container').empty().css({backgroundColor:randomColor});
	

}


function randomQuote(quotes) {
	let random = randomNum(48) // 48 quotes in response
	let currentQuote = `<h3 class="quote">"${quotes[random]}"<p>-Donald J. Trump</p></h3>`
	colorPicker();
	trumpMug();
	$('#container').append(currentQuote)
	

}

function trumpMug() {
	$('#mug').css({filter:`hue-rotate(${randomNum(360)}deg)`}) // neat way of changing the hue randomly
}

