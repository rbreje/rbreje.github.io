function init(){
				var mapOptions = { 
					center: new google.maps.LatLng(46.774146,23.613256), 
					zoom: 14,
					disableDefaultUI: true,
					zoomControl: true,
					scaleControl: true,
					streetViewControl: true,
					rotateControl: true,
					fullscreenControl: true
				};
				var map = new google.maps.Map(document.getElementById("mapDiv"), mapOptions);
				addButtons(map);
				drawMarkers(map);
			}
			function drawMarkers(map){
				var centerMarker = new google.maps.Marker({position: new google.maps.LatLng(46.774974,23.613221), map: map, title:"Home, Sweet Home"});
				var centerIulius = new google.maps.Marker({position: new google.maps.LatLng(46.771000,23.628900), map: map, title:"Julius"});
			}
			function addButtons(map){
				document.getElementById('btnTerrain').addEventListener('click',function(){map.setMapTypeId(google.maps.MapTypeId.TERRAIN);});
				document.getElementById('btnRoadmap').addEventListener('click',function(){map.setMapTypeId(google.maps.MapTypeId.ROADMAP);});
				document.getElementById('btnSatellite').addEventListener('click',function(){map.setMapTypeId(google.maps.MapTypeId.SATELLITE);});
				document.getElementById('btnHybrid').addEventListener('click',function(){map.setMapTypeId(google.maps.MapTypeId.HYBRID);});
			}
			google.maps.event.addDomListener(window, "load", init);