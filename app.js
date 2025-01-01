// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Import the path module
const path = require('path');

// Define an array of sections, each with a title and content
const sections = [
    { title: "My experience as the center of the solar system.", content: "and how that lead me to becoming an expert in web development..." },
    { title: "The Sun's diet", content: "why you should also consume 600 million tons of hydrogen every second." },
    { title: "Euro Truck Simulator Let's Play #456", content: "Thank you for the donations" }
];

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for the views
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/section', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/education', (req, res) => {
    res.render('education');
});

app.get('/projects', (req, res) => {
    res.render('projects', { sections });
});

// Define a route for each section based on its ID
app.get('/section/:id', (req, res) => {
    const section = sections[req.params.id];
    res.render('section', { section });
});


// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
