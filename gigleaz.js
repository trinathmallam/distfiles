 
document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll('.dropdown');
    let currentlyOpenDropdown = null; 

    function closeDropdown(dropdown) {
        if (dropdown) {
            let icon = dropdown.querySelector('.drp');
            let content = dropdown.querySelector('.dropdown-content');
            content.style.display = "none";
            icon.style.transform = 'rotate(0)';
        }
    }

    dropdowns.forEach(function(dropdown) {
        let link = dropdown.querySelector('.sub-link');
        let icon = dropdown.querySelector('.drp');
        let content = dropdown.querySelector('.dropdown-content');

        link.addEventListener("click", function(event) {
            event.preventDefault();

           
            if (currentlyOpenDropdown && currentlyOpenDropdown !== dropdown) {
                closeDropdown(currentlyOpenDropdown);
            }

          
            if (content.style.display === "block") {
                closeDropdown(dropdown);
                currentlyOpenDropdown = null;
            } else {
                content.style.display = "block";
                icon.style.transform = 'rotate(3.142rad)';
                currentlyOpenDropdown = dropdown;
            }
        });
    });

 
    document.addEventListener("click", function(event) {
        let isClickInsideDropdown = false;

        dropdowns.forEach(function(dropdown) {
            if (dropdown.contains(event.target)) {
                isClickInsideDropdown = true;
            }
        });

      
        if (!isClickInsideDropdown) {
            closeDropdown(currentlyOpenDropdown);
            currentlyOpenDropdown = null;
        }
    });

  
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    });

  
    document.querySelector('.navbar').addEventListener("click", function(event) {
        let isClickOnDropdownLink = false;

        dropdowns.forEach(function(dropdown) {
            if (dropdown.querySelector('.sub-link').contains(event.target)) {
                isClickOnDropdownLink = true;
            }
        });

        if (!isClickOnDropdownLink) {
            closeDropdown(currentlyOpenDropdown);
            currentlyOpenDropdown = null;
        }
    });
});


// after opening another custom-nav the previous oneshould get cloded
document.addEventListener('DOMContentLoaded', function() {
    const servicesTrigger = document.getElementById('services-trigger');
    const industriesTrigger = document.getElementById('industries-trigger');
    const platformsTrigger = document.getElementById('platforms-trigger');

    const servicesLink = document.querySelector('.hover-services');
    const industriesLink = document.querySelector('.hover-industries');
    const platformsLink = document.querySelector('.hover-platforms');

    // servicesLink.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     if (!servicesTrigger.checked) {
    //         servicesTrigger.checked = true;
    //         industriesTrigger.checked = false;
    //         platformsTrigger.checked = false;
    //     } else {
    //         servicesTrigger.checked = false;
    //     }
    // });

    industriesLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (!industriesTrigger.checked) {
            industriesTrigger.checked = true;
            // servicesTrigger.checked = false;
            platformsTrigger.checked = false;
        } else {
            industriesTrigger.checked = false;
        }
    });

    platformsLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (!platformsTrigger.checked) {
            platformsTrigger.checked = true;
            // servicesTrigger.checked = false;
            industriesTrigger.checked = false;
        } else {
            platformsTrigger.checked = false;
        }
    });
});


//if anything open it should get close when clicked on custom-close-icon
document.addEventListener("DOMContentLoaded", function() {
    const customCloseIcon = document.querySelector('.custom-close-icon');
    const sideNavTrigger = document.getElementById('custom-menu-trigger');
    const industriesTrigger = document.getElementById('industries-trigger');
    const platformsTrigger = document.getElementById('platforms-trigger');

    customCloseIcon.addEventListener('click', function(event) {
        event.preventDefault();
        if (sideNavTrigger.checked) {
            sideNavTrigger.checked = false;
        }
        if (industriesTrigger.checked) {
            industriesTrigger.checked = false;
        }
        if (platformsTrigger.checked) {
            platformsTrigger.checked = false;
        }
    });
});





