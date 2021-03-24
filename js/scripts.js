
var xhr = new XMLHttpRequest();
var url = "https://ghibliapi.herokuapp.com/films"

xhr.open("GET", url, true);

xhr.send(null);

xhr.onload = function(){

	if(xhr.status == 200){
		//document.write(xhr.responseText)

		var ghibliData = JSON.parse(xhr.responseText)

		var otitle = ghibliData[0].original_title;

		$('body').text(otitle)

		console.log(ghibliData)

		// $("body").prepend("<img src='" + ghibliData.url + "'>")
	}


}