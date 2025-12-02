var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_soil_PK_1 = new ol.format.GeoJSON();
var features_soil_PK_1 = format_soil_PK_1.readFeatures(json_soil_PK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soil_PK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soil_PK_1.addFeatures(features_soil_PK_1);
var lyr_soil_PK_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_soil_PK_1, 
                style: style_soil_PK_1,
                interactive: true,
    title: 'Почвы Пермского края<br />\
    <img src="styles/legend/soil_PK_1_0.png" /> Водные объекты<br />\
    <img src="styles/legend/soil_PK_1_1.png" /> Пг<br />\
    <img src="styles/legend/soil_PK_1_2.png" /> П1<br />\
    <img src="styles/legend/soil_PK_1_3.png" /> П2<br />\
    <img src="styles/legend/soil_PK_1_4.png" /> П3<br />\
    <img src="styles/legend/soil_PK_1_5.png" /> П4<br />\
    <img src="styles/legend/soil_PK_1_6.png" /> По1иг<br />\
    <img src="styles/legend/soil_PK_1_7.png" /> П1д<br />\
    <img src="styles/legend/soil_PK_1_8.png" /> П2д<br />\
    <img src="styles/legend/soil_PK_1_9.png" /> П3д<br />\
    <img src="styles/legend/soil_PK_1_10.png" /> Пдж<br />\
    <img src="styles/legend/soil_PK_1_11.png" /> Пгт<br />\
    <img src="styles/legend/soil_PK_1_12.png" /> СЛс<br />\
    <img src="styles/legend/soil_PK_1_13.png" /> СЛ<br />\
    <img src="styles/legend/soil_PK_1_14.png" /> СЛт<br />\
    <img src="styles/legend/soil_PK_1_15.png" /> Чоп<br />\
    <img src="styles/legend/soil_PK_1_16.png" /> Тв<br />\
    <img src="styles/legend/soil_PK_1_17.png" /> Тн<br />\
    <img src="styles/legend/soil_PK_1_18.png" /> Ат<br />\
    <img src="styles/legend/soil_PK_1_19.png" /> Бргр<br />\
    <img src="styles/legend/soil_PK_1_20.png" /> ПБ<br />\
    <img src="styles/legend/soil_PK_1_21.png" /> Глл<br />\
    <img src="styles/legend/soil_PK_1_22.png" /> Пог<br />\
    <img src="styles/legend/soil_PK_1_23.png" /> Дк<br />\
    <img src="styles/legend/soil_PK_1_24.png" /> Дг<br />\
    <img src="styles/legend/soil_PK_1_25.png" /> Тп<br />\
    <img src="styles/legend/soil_PK_1_26.png" /> Ан<br />\
    <img src="styles/legend/soil_PK_1_27.png" /> А<br />\
    <img src="styles/legend/soil_PK_1_28.png" /> Бриг<br />\
    <img src="styles/legend/soil_PK_1_29.png" /> Ппг<br />\
    <img src="styles/legend/soil_PK_1_30.png" /> Поиг<br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> Границы Пермского края'
            });
var format___3 = new ol.format.GeoJSON();
var features___3 = format___3.readFeatures(json___3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3.addFeatures(features___3);
var lyr___3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___3, 
                style: style___3,
                interactive: false,
                title: 'Крупные населенные пункты'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_soil_PK_1.setVisible(true);lyr__2.setVisible(true);lyr___3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_soil_PK_1,lyr__2,lyr___3];
lyr_soil_PK_1.set('fieldAliases', {'Копия': 'Почвенный индекс', 'Копи_1': 'Полное название почвы', 'Копи_2': 'Район распространения', 'color': 'Изображение на почвенных картах', });
lyr__2.set('fieldAliases', {});
lyr___3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'INT_NAME': 'INT_NAME', 'NAME_RU': 'NAME_RU', 'OFFICIAL_S': 'OFFICIAL_S', 'PLACE': 'PLACE', 'A_CNTR': 'A_CNTR', 'A_PLACE': 'A_PLACE', 'A_DSTRCT': 'A_DSTRCT', 'A_PSTCD': 'A_PSTCD', 'POPULATION': 'POPULATION', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', 'oktmo': 'oktmo', });
lyr_soil_PK_1.set('fieldImages', {'Копия': 'TextEdit', 'Копи_1': 'TextEdit', 'Копи_2': 'TextEdit', 'color': 'Range', });
lyr__2.set('fieldImages', {});
lyr___3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'NAME_EN': 'TextEdit', 'INT_NAME': 'TextEdit', 'NAME_RU': 'TextEdit', 'OFFICIAL_S': 'TextEdit', 'PLACE': 'TextEdit', 'A_CNTR': 'TextEdit', 'A_PLACE': 'TextEdit', 'A_DSTRCT': 'TextEdit', 'A_PSTCD': 'TextEdit', 'POPULATION': 'TextEdit', 'OSM_TYPE': 'TextEdit', 'OSM_ID': 'TextEdit', 'oktmo': 'TextEdit', });
lyr_soil_PK_1.set('fieldLabels', {'Копия': 'inline label', 'Копи_1': 'inline label', 'Копи_2': 'inline label', 'color': 'inline label', });
lyr__2.set('fieldLabels', {});
lyr___3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'NAME_EN': 'no label', 'INT_NAME': 'no label', 'NAME_RU': 'no label', 'OFFICIAL_S': 'no label', 'PLACE': 'no label', 'A_CNTR': 'no label', 'A_PLACE': 'no label', 'A_DSTRCT': 'no label', 'A_PSTCD': 'no label', 'POPULATION': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', 'oktmo': 'no label', });
lyr___3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});