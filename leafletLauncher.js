	var map = L.mapbox.map('map', 'evrev.hgd9i9l8')
	.setView([38.754217,-121.2848], 12);

	var myIcon = L.icon({
		iconUrl: 'DomeCamEast.png',
		//  x,y
		iconAnchor: [50, 25],
	    //The location where the popup will pop up at
		popupAnchor: [5, -5],
	});


	$.getJSON("http://roseville.evinrevello.com/RosevilleCamerasGDVersion.json", function(data) {
		for ( var i = 0; i < data.feed.entry.length; i++ ){
			L.marker([data.feed.entry[i]['gsx$actuallatitude']['$t'], data.feed.entry[i]['gsx$actuallongitude']['$t']], { icon: myIcon }).addTo(map).bindPopup('<div><a href=\"' + data.feed.entry[i]['gsx$url']['$t'] + '\" target="_blank">' + data.feed.entry[i]['gsx$name']['$t'] + "</a></div>");

		}
	});