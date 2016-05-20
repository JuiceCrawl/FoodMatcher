var error = document.getElementById('error_message');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        error.innerHTML = "Geolocation is not supported by this browser.";
    }
}



function showPosition(position) {
  // Get Lat Long
  var lat = position.coords.latitude;
  var long = position.coords.longitude;

  // Convert into Address String  
    $.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyCVSNW6i3GltQhNdQ9M1EWoZcnFO5z0jGY`)
    .then(function(data){
      return data.results[0].formatted_address;
    })
    .then(function(location){
      //
        $("input[name='location']").val(location);
        Cookies.set('location', location);

    });

}
// if there is a cookie with location use that 
// else
var cookieLoc = Cookies.get('location');
if(cookieLoc){
  $("input[name='location']").val(cookieLoc);
}else{
  getLocation();
}
//

$( "#searchForm" ).submit(function( event ) {
  var enteredLocation = $("input[name='location']").val();
  Cookies.set('location',enteredLocation);
});

