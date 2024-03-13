function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // Center the map on the user's location
                map.setCenter(userLocation);

                // Add a marker at the user's location
                const marker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Your Location'
                });

                // Log the user's location (you can store it in a database for tracking)
                console.log('User Location:', userLocation);
            },
            function (error) {
                // Handle geolocation errors
                console.error('Error getting location:', error.code, error.message);
            },
            { timeout: 10000, enableHighAccuracy: false } // Set to false for potentially faster results
        );
    } else {
        // Geolocation is not supported by the browser
        console.error('Geolocation is not supported by your browser');
    }
}
function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('username').innerText = 'JaneClarke26'; 
