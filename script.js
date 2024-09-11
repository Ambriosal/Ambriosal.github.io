// script.js

// Simple event listener to display an alert when the 'Learn More' button is clicked
document.addEventListener('DOMContentLoaded', function () {
    const learnMoreBtn = document.querySelector('.btn-primary');

    learnMoreBtn.addEventListener('click', function () {
        alert('You clicked the Learn More button!');
    });
});

// Functionality to log a message when the modal is shown
const modalElement = document.getElementById('exampleModal');
modalElement.addEventListener('show.bs.modal', function () {
    console.log('Modal is about to be shown!');
});
