
var xhr = new XMLHttpRequest();
var url = "https://ghibliapi.herokuapp.com/films?&count=4"

xhr.open('GET', url, true);
xhr.send(null);

xhr.onload = function(){
	if(xhr.status == 200){

		var ghibliData = JSON.parse(xhr.responseText)
		console.log(ghibliData)

		ghibliData.forEach(function(data){

			$(".pod").prepend("<div>" + "<h2>" + ghibliData.title + ghibliData.original_title + ghibliData.original_title_romanized + "</h2><h3>" + ghibliData.director + ghibliData.producer + ghibliData.release_date + "</h3><p>" + ghibliData.description + "</p></div>");

		// var title = ghibliData[0].original_title;

		// $("p").text(title)
	})
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
