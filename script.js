let running = false;
let forgeryExpanded = false;

function toggleCollapsibleForgery {
    if(forgeryExpanded == false) {
        document,getElementByClassName("forgery-content").style.display = "block";
        document,getElementByClassName("forgery-content").style.overflow = "visible";

        forgeryExpanded = true;
    } else if(forgeryExpanded == true) {
        document.getElementByClassName("forgery-content").style.display = "none";
        document.getElementByClassName('forgery-content").style.display = "hidden";

        forgeryExpanded = false;
    }
}
