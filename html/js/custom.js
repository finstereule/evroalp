// Hide CTA when clicking on "MENU" button
document.getElementById("navbar-toggler").addEventListener("click", function(){    
	    var x = document.getElementById("center-block");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});