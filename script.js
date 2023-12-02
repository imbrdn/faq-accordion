var acc = document.getElementsByClassName("faq-dropdown");
var i;

for (i = 0; 1 < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var imagePlus = this.querySelector(".icon-plus");
        var imageMinus = this.querySelector(".icon-minus");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            imageMinus.style.display = "none";
            imagePlus.style.display = "block";
        } else {
            panel.style.display = "block";
            imageMinus.style.display = "block";
            imagePlus.style.display = "none";
        }
    });
}

