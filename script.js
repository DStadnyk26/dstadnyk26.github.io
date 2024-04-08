let running = false;
let forgeryExpanded = false;

function toggleCollapsible(let name) {
    if(document.getElementById(name).style.display == "none") {
        document.getElementById(name).style.display = "block";
        document.getElementById(name).style.overflow = "visible";

    } else if(document.getElementById(name).style.display == "block") {
        document.getElementById(name).style.display = "none";
        document.getElementById(name).style.overflow = "hidden";
    }
}
