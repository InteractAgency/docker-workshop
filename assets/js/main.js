document.addEventListener('DOMContentLoaded', function() {
    console.log(window.location);
    const regex = /^https?:\/\/.*:?(\d*)\/(.*)/g
    if(String(window.location).match(regex) !== null) {
        let no = document.querySelector(".no");
        let container = document.querySelector(".container");
        container.style.display = "block";
        no.style.display = "none";
    }
});
