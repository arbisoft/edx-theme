$(function(){
        let container = document.getElementById('login-and-registration-container');
        let observer = new MutationObserver(function (mutations, instance) {
                  displayOtherUniversityField();
                  instance.disconnect(); 
        });
        
        observer.observe(container, {
                childList: true
        });

});

function displayOtherUniversityField(){
        $('.text-other_university').insertAfter('.select-campus');
}

