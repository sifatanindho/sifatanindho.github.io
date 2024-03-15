// document.querySelector('.menu-icon').addEventListener('click', function() {
//     // Toggle the "menu--open" class on your menu refence.
    
//     var navLinksList = document.querySelector('.links-list');
//     if(navLinksList.style.display === 'none') {
//         navLinksList.style.display = 'block';
//     } else {
//         navLinksList.style.display = 'none';
//     }   
// });

function get_menu_list() {
    var navLinksList = document.querySelector('.links-list');
    if(navLinksList.style.display === 'block') {
        navLinksList.style.display = 'none';
    } else {
        navLinksList.style.display = 'block';
    }
}

// If media screen is greater than 650px, nav links should be invisible
window.onresize = function() {
    var navLinksList = document.querySelector('.links-list');
    if(window.innerWidth > 650) {
        navLinksList.style.display = 'none';
    }
}



feedback_button = document.getElementById('feedback-button');
submit_button = document.getElementById('submit-button');
close_button = document.getElementById('x-button');
feedback_form = document.getElementById('feedback-form');

document.addEventListener('DOMContentLoaded', () => { 
    var feedback_button = document.querySelector('#feedback-button');
    var feedback_form = document.querySelector('.feedback-form');
    var close_button = document.querySelector('#x-button');
    var submit_button = document.querySelector('#submit-button');
    var show = 1;
    if (feedback_form.style.display == 'block') {
        show = 0;
    } else {
        show = 1;
    }

    feedback_button.addEventListener('click', () => {
        // document.write(feedback_form.style.display);
        if (show == 1) {
            feedback_form.style.display = 'block';
            show = 0;
        } else {
            feedback_form.style.display = 'none';
            show = 1;
        }
    });

    close_button.addEventListener('click', () => {
        feedback_form.style.display = 'none';
        show = 1;
    }
    );

    submit_button.addEventListener('click', () => {
        feedback_form.style.display = 'none';
        show = 1;
    }
    );
});
