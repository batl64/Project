var ProxyUrl ='https://cors-anywhere.herokuapp.com/'
    TargetUrl = 'https://alarmmap.online/assets/alerts.json'

fetch(ProxyUrl + TargetUrl)
    .then(Blob => Blob.json())
    .then(data=>{
        console.table(data);
        document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
        return data;
    //    console.log(JSON.stringify(data))
    })   
    .catch(e => {
        console.log(e);
        return e;
      }); 
