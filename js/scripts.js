
var xhr = new XMLHttpRequest();
var baseUrl = "https://ghibliapi.herokuapp.com";
var query;

$("#submit").on("click",function() {
	console.log($("#myInput").val())

	query = "/" + $("#myInput").val() //you can type in films, people, locations, and species
	callAPI()
})

function callAPI() {



var url = baseUrl + query;
xhr.open('GET', url, true);
xhr.send(null);

xhr.onload = function(){

	console.log(xhr.status)

	if(xhr.status == 200){

		var ghibliData = JSON.parse(xhr.responseText)
		console.log(ghibliData)

		$(".pod").empty()

		ghibliData.forEach(function(data){

			$(".pod").prepend("<div>" + "<h2>" + ghibliData[0].title + ghibliData[0].original_title + ghibliData[0].original_title_romanised + "</h2><h3>" + ghibliData[0].director + ghibliData[0].producer + ghibliData[0].release_date + "</h3><p>" + ghibliData[0].description + "</p></div>");
		// var title = ghibliData[0].original_title;

		// $("p").text(title)
	})
	}
}
}

// var baseUrl = "https://ghibliapi.herokuapp.com/films&count=42"
// var url = "https://ghibliapi.herokuapp.com/films&count=42"
// var query = "&count=42"
// // var url = baseUrl + query


// // $("#submit").on("click",function(){
// // 	query = "&count" + $("#myInput").val();
// // 	callAPI();
// // })

// // function callAPI() {

// 	// var url = baseUrl + query;

// 	// xhr.open("GET", url, true);

// 	// xhr.send(null);

// xhr.onload = function(){

// 	if(xhr.status == 200){
// 		//document.write(xhr.responseText)

// 		var ghibliData = JSON.parse(xhr.responseText)

// 		var otitle = ghibliData[0].original_title;

// 		xhr.open("GET", url, true);

// 		xhr.send(null);

// 		$('body').text(otitle)

// 		// $("p").append("<h2>" + ghibliData + "</h2>")

// 		console.log(ghibliData)

// 		// $("body").prepend("<img src='" + ghibliData.url + "'>")
// 	}
// }
// }
