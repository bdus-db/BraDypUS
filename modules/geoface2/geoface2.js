var geoface2 = G = {
	
	geoJSON: {},
	metadata: {},
	otherLayers: [],
	map: {},
	param: {},
	
	
	init: function(tb, sql){
		if ($('#map').length > 0){
			core.message(core.tr('map_already_opened'));
			return;
		} else {
			G.queue = ['getData', 'loadL', 'loadLDraw', 'loadLKML', 'loadGoogleRemote', 'loadGoogleLocal', 'buildMap'];
			G.param.tb = tb;
			G.param.where = sql;
			G.runQueue();
		}
	},
		
		
	runQueue: function(){

		var fn = G.queue[0];
		G.queue.splice(0, 1);
		G[fn]();
	},
			  
		
	getData: function(){
		
		core.getJSON('geoface2_ctrl', 'getGeoJson', {tb: G.param.tb, where: G.param.where}, false, function(data){

			if (data.status == 'error'){
				core.message(data.text, 'error', true);
			} else {

				if (data.status == 'warning'){
					core.message(core.tr('no_geodata_present_create'), 'warning', true);
				}

				// set geoJSON
				G.geoJSON = data.data;

				// set metadata
				G.metadata = data.metadata;
				
				// load sub data
				if (typeof(G.metadata.layers.local) == 'object'){
					G.otherLayers = [];
					$.each(G.metadata.layers.local, function(index, vec){
						if (vec.id.match(/\.geojson/)){
							$.getJSON(vec.id, function(data2){
								
									G.otherLayers.push({
										'name'	: vec.name,
										'id'		: vec.id,
										'epsg'	: vec.epsg,
										'data'	: data2,
										'style'	: vec.style
									});


									if (index == (G.metadata.layers.local.length-1)){
										G.runQueue();
									}
								}).fail(
										  function(jqxhr, settings, exception) {
											console.log(vec.id, exception);
										  });
						} else {
							G.otherLayers.push({
										'name'	: vec.name,
										'id'		: vec.id
							});
							
							if (index == (G.metadata.layers.local.length-1)){
								G.runQueue();
							}
						}

								
					});
				} else {
					G.runQueue();
				}
			}
		});
	},
		
	loadGoogleRemote: function(){
		if ($.inArray('google', G.metadata.layers.excludeWeb) === -1 && typeof(google) == 'undefined'){
			$.getScript('http://maps.google.com/maps/api/js?v=3.2&sensor=false&callback=G.runQueue').fail(
					function(jqxhr, settings, exception) {
						console.log('googleRemote', exception);
					});
		} else {
			G.runQueue();
		}

	},
		
		loadGoogleLocal: function(){
			if (typeof google !== 'undefined' && typeof L.Google == 'undefined'){
				$.getScript('./modules/geoface2/leaflet/Google.js', function(){
					
					G.runQueue();
				}).fail(
						function(jqxhr, settings, exception) {
							   console.log('googleLocal', exception);
							}		
				);
			} else {
				G.runQueue();
			}
		},
		
		loadL: function(){
			
			if($('head').find('link[href="./modules/geoface2/leaflet/leaflet.css"]').length < 1){
				$('head').append( $('<link />').attr({'type':'text/css', 'rel':'stylesheet', 'href':'./modules/geoface2/leaflet/leaflet.css'}) );
			}
			
			if (typeof L == 'undefined'){
				$.getScript('./modules/geoface2/leaflet/leaflet.js', function(){
					L.Icon.Default.imagePath = './modules/geoface2/leaflet/images';
					
					G.runQueue();
					
				}).fail(
						function(jqxhr, settings, exception) {
							console.log('L', exception);
						});
			} else {
				G.runQueue();
			}
			
		},
		
		loadLDraw: function(){
			
			if($('head').find('link[href="./modules/geoface2/leaflet/leaflet.draw.css"]').length < 1){
				$('head').append( $('<link />').attr({'type':'text/css', 'rel':'stylesheet', 'href':'./modules/geoface2/leaflet/leaflet.draw.css'}) );
			}
			
			if (typeof L.drawVersion == 'undefined'){
				$.getScript('./modules/geoface2/leaflet/leaflet.draw.js', function(){
					
					G.runQueue();
					
				}).fail(
						function(jqxhr, settings, exception) {
							console.log('L.Draw', exception);
						});
			} else {
				G.runQueue();
			}
		},
		
		loadLKML: function(){
			
			if (typeof L.KML === 'undefined'){
				$.getScript('./modules/geoface2/leaflet/KML.js', function(){
					G.runQueue();
					
				}).fail(
						function(jqxhr, settings, exception) {
							console.log('L KML', exception);
						});
			} else {
				G.runQueue();
			}
		},
		
		buildMap: function(){
			core.open({
				html: '<div id="map_container"><div id="map"></div></div>',
				unique: true,
				title: core.tr('GeoFace'),
				loaded: function(){
					
					//starts map
					G.startL();

					// dynamic resize
					$(window).on('resize', function(){
						G.resize();
					});
				}
			});
		},
		
		startL: function(){
			
			// baseMap object contains all basemaps
			var baseMaps = {};
			
			// Start OSM
			baseMaps.OSM = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
			
			// Start Google
			if ($.inArray('google', G.metadata.layers.excludeWeb) === -1){
				baseMaps['Google Satellite'] = new L.Google();
				baseMaps['Google Roadmap'] = new L.Google('ROADMAP');
				baseMaps['Google Terrain'] = new L.Google('TERRAIN');
				baseMaps['Google Hybrid'] = new L.Google('HYBRID');
			}
			
			// overlay object contains all overlays
			var overlay = {};
			
			// Main, database, overlay vector layer
      overlay[G.metadata.tb] = L.geoJson(G.geoJSON, {
				pointToLayer: function(feature, latlng){
					
//          var myIcon = L.icon({
//						iconUrl: 'modules/geoface2/leaflet/images/marker-icon.png',
//						iconRetinaUrl: 'modules/geoface2/leaflet/images/marker-icon-2x.png',
//						iconSize: [19,30],
//						iconAnchor: [10, 29],
//						popupAnchor: [0, -17],
//						shadowUrl: 'modules/geoface2/leaflet/images/marker-shadow.png',
//						//shadowRetinaUrl: 'modules/geoface2/leaflet/images/marker-shadow-2x.png',
//						shadowSize: [34, 30],
//						shadowAnchor: [10, 29]
//					});
//          return L.marker(latlng, {icon: myIcon});
//          
          return L.circleMarker(latlng, {
            color: '#f00',
            fillColor: '#ff0',
            weight: 4,
            opacity: .7
          }).setRadius(7);
					
				},
				/* 
				style: function (feature) {
					return {color: feature.properties.color};
				},
				*/
			  onEachFeature: function (feature, layer) {
				  var html = '';
				  $.each(feature.properties, function(key, val){
					  if (key !== 'id' && key !== 'geo_id'){
						  html += key + ': <strong>' + val + '</strong><br />';
					  }
				  });
				  html += '<span class="btn btn-info btn-xs" onclick="api.record.read(\'' + G.metadata.tb_id + '\', [' + feature.properties.id + '])">' + core.tr('read') + '</span>';
				  layer.bindPopup(html);
			  }
			});
      
			if (G.otherLayers !== 'undefined'){
				$.each(G.otherLayers, function (i, lay){
					if (lay.id.match(/\.geojson/)){
						
						overlay[lay.name] = L.geoJson(lay.data);
						
					} else if (lay.id.match(/\.kml/)){
						overlay[lay.name] = new L.KML(lay.id, {async: true});
					}
				});
			}
			
			
			
			
			// Start map object
			var map = G.map = new L.map('map');
			
			
			// Add OSM layer to map
			map.addLayer(baseMaps.OSM);
			
			// Add main Vector layer to map
			map.addLayer(overlay[G.metadata.tb]);
			
			//Add other layers, both basemaps and overlays to map
			map.addControl(new L.Control.Layers( baseMaps, overlay, {}));
			
			
			// Edit controls
			if (G.metadata.canUserEdit){
				// Create draw control
				var drawControl = new L.Control.Draw({
					edit: {
						featureGroup: overlay[G.metadata.tb]
					}
				});
				
				// Add draw control to map
				G.map.addControl(drawControl);
				
				
				G.editListeners(overlay[G.metadata.tb]);
			}

			
			// Fit map to window size
			G.resize();
			
			// Zoom and pan map to max extent of vector layer
			if($.isEmptyObject(overlay[G.metadata.tb]['_layers'])){
				map.setView([38.82259, -2.8125], 3);
			} else {
				map.fitBounds(overlay[G.metadata.tb].getBounds());
			}
		},
				  
		editListeners: function(vector_layer){
			
			// CREATED
			G.map.on('draw:created', function(e){
				
				api.link.add_ui(
						  //success function
						  function(tb, id, dia){
							  core.getJSON('geoface2_ctrl', 'saveNew', false, {tb: tb, id: id, coords: G.toWKT(e.layer)}, function(data){
								  core.message(data.text, data.value);
								  e.layer.feature = {properties: {geo_id: data.id}};
								  
							  });
							  $('#modal').modal('hide');
							  
							  vector_layer.addLayer(e.layer);
						  },
									 
						  false,
						  true,
						  G.metadata.tb_id);
			});

			
			
			// EDITED
			G.map.on('draw:edited', function(e){
				var post_data = [];
				e.layers.eachLayer(function (layer) {
					
					post_data.push({
						id: layer.feature.properties.geo_id,
						coords: G.toWKT(layer)
					});
				});
				core.getJSON('geoface2_ctrl', 'update', false, {geodata: post_data}, function(data){
					core.message(data.text, data.status);
				});
			});



			// DELETED
			G.map.on('draw:deleted', function(e){
				
				var id_arr = [];
				e.layers.eachLayer(function (layer) {
					id_arr.push(layer.feature.properties.geo_id);
				});
				
				
				core.open({
					html: '<h2>' + core.tr('confirm_erase_feature') + '</h2>',
					title: core.tr('attention'),
					buttons:[
					         {
					        	 text: core.tr('erase'),
					        	 click: function(){
					        		 core.getJSON('geoface2_ctrl', 'erase', false, {ids: id_arr}, function(data){
					        			 core.message(data.text, data.status);
										 layout.dialog.close();
									 });
					        	 }
					         },
					         {
					        	 text: core.tr('cancel'),
					        	 action: 'close'
					         }
					]
				}, 'modal');
				
			});

		},
		
		
		/**
		 * Resizes map container to fit window
		 */
		resize: function(){
			$('#map_container').css({
				'width':  '100%',
				'height': ($(window).height()-70)
				});
			$('#map').css({
				'height': '100%'
				});
			G.map.invalidateSize();
		},
		
		/**
		 * Return WKT string for layer object
		 * https://gist.github.com/bmcbride/4248238
		 * https://groups.google.com/forum/#!msg/leaflet-js/ZAOs2TyKLwI/YqhadbsfL8gJ
		 */		  
		toWKT: function (layer) {
			var lng, lat, coords = [];
			if (layer instanceof L.Polygon || layer instanceof L.Polyline) {
				var latlngs = layer.getLatLngs();
				for (var i = 0; i < latlngs.length; i++) {
					latlngs[i];
					coords.push(latlngs[i].lng + " " + latlngs[i].lat);
					if (i === 0) {
						lng = latlngs[i].lng;
						lat = latlngs[i].lat;
					}
				};
				
				if (layer instanceof L.Polygon) {
					return "POLYGON((" + coords.join(",") + "," + lng + " " + lat + "))";
				} else if (layer instanceof L.Polyline) {
					return "LINESTRING(" + coords.join(",") + ")";
				}
				} else if (layer instanceof L.Marker) {
					return "POINT(" + layer.getLatLng().lng + " " + layer.getLatLng().lat + ")";
				}
		}
};