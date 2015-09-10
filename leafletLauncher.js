	L.mapbox.accessToken = 'pk.eyJ1IjoiZXZyZXYiLCJhIjoiZWxWb2hmcyJ9.LTut3b_FahhAv2qPn3A2Xw';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([38.762275, -121.306260], 13);

	
	var myIcon = L.icon({
		iconUrl: 'DomeCamEast.png',
		//  x,y
		iconAnchor: [50, 25],
	    //The location where the popup will pop up at
		popupAnchor: [5, -5],
	});


	$.getJSON("./RosevilleCamerasGDVersion.json", function(data) {
		for ( var i = 0; i < data.feed.entry.length; i++ ){
			L.marker([data.feed.entry[i]['gsx$actuallatitude']['$t'], data.feed.entry[i]['gsx$actuallongitude']['$t']], { icon: myIcon }).addTo(map).bindPopup('<div><a href=\"' + data.feed.entry[i]['gsx$url']['$t'] + '\" target="_blank">' + data.feed.entry[i]['gsx$name']['$t'] + "</a></div>");

		}
	});