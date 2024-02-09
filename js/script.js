// Initialize the map
var map = L.map('map').setView([20.5937, 78.9629], 5); // Set the initial view to the center of India

// Add the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define city markers with their coordinates
var mumbaiMarker = L.marker([19.0760, 72.8777], { title: 'Mumbai' }).addTo(map);
var puneMarker = L.marker([18.5204, 73.8567], { title: 'Pune' }).addTo(map);
var bangaloreMarker = L.marker([12.9716, 77.5946], { title: 'Bangalore' }).addTo(map);

// Add popups to the markers
mumbaiMarker.bindPopup('Mumbai').on('click', function() { showCityInfo('Mumbai'); });
puneMarker.bindPopup('Pune').on('click', function() { showCityInfo('Pune'); });
bangaloreMarker.bindPopup('Bangalore').on('click', function() { showCityInfo('Bangalore'); });

// Function to show city information
function showCityInfo(cityName) {
    fetchCityInfo(cityName);
}

// Function to fetch city information from the server
function fetchCityInfo(cityName) {
    $.ajax({
        url: `getCityInfo.php?city=${cityName}`,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            document.getElementById('cityInfo').innerHTML = `<h2>${cityName}</h2><p>${data.description}</p>`;
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}
