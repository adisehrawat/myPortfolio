document.getElementById('changeClassButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag

    var div = document.getElementById('myDiv');

    // Toggle between originalClass and newClass
    if (div.classList.contains('closed-menu')) {
        div.classList.remove('closed-menu');
        div.classList.add('open-menu');
    } else {
        div.classList.remove('open-menu');
        div.classList.add('closed-menu');
    }
});
document.getElementById('changeButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag

    var div = document.getElementById('myDiv');

    // Toggle between originalClass and newClass
    if (div.classList.contains('open-menu')) {
        div.classList.remove('open-menu');
        div.classList.add('closed-menu');
    } else {
        div.classList.remove('closed-menu');
        div.classList.add('open-menu');
    }
});
document.getElementById('about1').addEventListener('click', function(event) {

    var div = document.getElementById('myDiv');

    // Toggle between originalClass and newClass
    if (div.classList.contains('open-menu')) {
        div.classList.remove('open-menu');
        div.classList.add('closed-menu');
    } else {
        div.classList.remove('closed-menu');
        div.classList.add('open-menu');
    }
});
document.getElementById('home1').addEventListener('click', function(event) {

    var div = document.getElementById('myDiv');

    // Toggle between originalClass and newClass
    if (div.classList.contains('open-menu')) {
        div.classList.remove('open-menu');
        div.classList.add('closed-menu');
    } else {
        div.classList.remove('closed-menu');
        div.classList.add('open-menu');
    }
}); 
document.getElementById('contact1').addEventListener('click', function(event) {

    var div = document.getElementById('myDiv');

    // Toggle between originalClass and newClass
    if (div.classList.contains('open-menu')) {
        div.classList.remove('open-menu');
        div.classList.add('closed-menu');
    } else {
        div.classList.remove('closed-menu');
        div.classList.add('open-menu');
    }
}); 
document.getElementById('project1').addEventListener('click', function(event) {

    var div = document.getElementById('myDiv');

    // Toggle between originalClass and newClass
    if (div.classList.contains('open-menu')) {
        div.classList.remove('open-menu');
        div.classList.add('closed-menu');
    } else {
        div.classList.remove('closed-menu');
        div.classList.add('open-menu');
    }
}); 