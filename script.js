document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {

        alert(" Fetching weather details…");

        const card = this.parentElement;
        const city = card.dataset.city;
        const temp = card.querySelector(".temp").textContent;

        const details = {
            "Mumbai": "Humidity: 72% | Wind: 10 km/h | Sunny ",
            "Delhi": "Humidity: 81% | Wind: 6 km/h | Cloudy ",
            "Bangalore": "Humidity: 77% | Wind: 8 km/h | Light Rain "
        };

        const detailsBox = document.getElementById("detailsBox");
        detailsBox.textContent = `${city}: ${temp} | ${details[city]}`;
        detailsBox.style.opacity = 1;
    });
});
