function getData(){
    var City = document.getElementById('city').value;
    
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + City + '&appid=4e8fe55b900263c5f83603ed631e15ad',

        success: function(data){
            console.log(data);


            document.getElementById('displayCity').innerHTML=data.name
            document.getElementById('displayHumidity').innerHTML = data.main.humidity;
            document.getElementById('displayWeather').innerHTML = data.weather[0].main;
            document.getElementById('displayTemp').innerHTML = data.main.temp;
            
        },
        
        error: function(e){
            console.log(e);
        }
            
    })
}