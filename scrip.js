/*let Oblast = [
    {city:'Луганська_область', coordinate:[ 48.799,39.089]},
    {city:'Полтавська_область', coordinate:[49.35,34.33]},
    {city:'Вінницька_область', coordinate:[]},
    {city:'Волинська_область', coordinate:[]},
    {city:'Дніпропетровська_область', coordinate:[]},
    {city:'Донецька_область', coordinate:[]},
    {city:'Житомирська_область', coordinate:[]},
    {city:'Закарпатська_область', coordinate:[]},
    {city:'Запорізька_область', coordinate:[]},
    {city:'Івано-Франківська_область', coordinate:[]},
    {city:'Київська_область', coordinate:[]},
    {city:'Кіровоградська_область', coordinate:[]},
    {city:'Львівська_область', coordinate:[]},
    {city:'Миколаївська_область', coordinate:[]},
    {city:'Одеська_область', coordinate:[]},
    {city:'Рівненська_область', coordinate:[]},
    {city:'Сумська_область ', coordinate:[]},
    {city:'Тернопільська_область', coordinate:[]},
    {city:'Харківська_область', coordinate:[]},
    {city:'Херсонська_область', coordinate:[]},
    {city:'Хмельницька_область', coordinate:[]},
    {city:'Черкаська_область ', coordinate:[]},
    {city:'Чернігівська_область', coordinate:[]},
    {city:'Київ', coordinate:[]},
];*/

let Oblast = [
    {city:'Луганська_область', coordinate:[ 48.799,39.089]},
];



var ProxyUrl ='https://cors-anywhere.herokuapp.com/';
var TargetUrl = 'https://alarmmap.online/assets/json/_alarms/siren.json?0.7152377075796739';
    MapTile = 'https://github.com/wmgeolab/geoBoundaries/raw/6b002b1eee2fd9599f1a3af8fe076d694e6decee/releaseData/gbOpen/UKR/ADM1/geoBoundaries-UKR-ADM1_simplified.geojson'
    Urls = 'https://alarmmap.online/assets/json/_alarms/siren.json?0.7152377075796739'
/*fetch(ProxyUrl + TargetUrl)
    .then(Blob => Blob.json())
    .then(data=>{
        
        console.table(data);
        
        for(var i;i< 155;i++){
            arr == data.push;
        }
       //    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
        return data;
    //    console.log(JSON.stringify(data))
    })   
    .catch(e => {
        console.log(e);
     
        return e;
      }); 
*/
var key = 255;
let clone = {};
var arr = new Array(50);
function getAlarm(ProxyUrl,TargetUrl,arr){
    fetch(ProxyUrl + TargetUrl)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0].district);
        arr = data;

      
        for (let key in arr) {
            clone[key] = data[key].district;
          }
          console.log(clone)

        /* for(let key in Oblast){
             if(data[key].district == Oblast[key].city){
                 L.marker(Oblast.coordinate[key]).addTo(map);
             }
         }*/
      /*   for(var i=0;i<255; i++){
             if(clone[0].district==Oblast[0].city){
                 L.marker(Oblast[i].coordinate).addTo(map);
             }
         };
      */
     for(var i =0;i<50;i++){
         if(clone[i].district==Oblast[i].city){
           console.log(Oblast);
        }
    }
      });
    /*.then(Blob => Blob.json())
    .then(data=>{
        console.log(data);
        
        
       //    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
        //return data;
    
    })   
    */
}

getAlarm(ProxyUrl,TargetUrl)


setInterval(console.log(clone), 100)

//console.log(Oblast[0].city);

    











      fetch(ProxyUrl + MapTile)
      .then(Blob => Blob.json())
      .then(data =>{
          L.geoJson(data).addTo(map)
      });
