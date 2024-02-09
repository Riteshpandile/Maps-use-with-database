<?php

// Replace these variables with your actual MySQL server details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "yourdatabasename";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the city name from the query parameter
$cityName = $_GET['city'];

// Fetch city information from the database
$sql = "SELECT description FROM yourtablename WHERE name = '$cityName'";
$result = $conn->query($sql);

if ($result === false) {
    echo json_encode(['error' => $conn->error]);
} elseif ($result->num_rows > 0) {
    // Output data as JSON
    $row = $result->fetch_assoc();
    echo json_encode(['description' => $row['description']]);
} else {
    echo json_encode(['description' => 'City not found']);
}

// Close connection
$conn->close();

?>