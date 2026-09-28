document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn =
        document.getElementById("readMoreBtn");

    const morecontent =
        document.getElementById("morecontent");
        morecontent.style.display="none";

    readMoreBtn.addEventListener("click", function () {

        morecontent.style.display = "block";

        readMoreBtn.style.display = "none";

    });
});
