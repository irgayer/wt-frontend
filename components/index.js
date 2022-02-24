function playAudio(selector) {
    $(`#${selector}`).get(0).play();
}

$(document).on('keypress', function (e) {
    if (e.which == 13) {
        playAudio('startup_sound');
    }
});

geo = {
    lat: 51.169392,
    lon: 71.449074,

    getUrl() {
        return `https://fcc-weather-api.glitch.me/api/current?lat=${this.lat}&lon=${this.lon}`;
    }
};

$(document).ready(function () {
    $.ajax({
        url: geo.getUrl(),
        contentType: "application/json",
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var json = JSON.stringify(result);
            var parsed = JSON.parse(json);
            $('#weather').text(`Today weather at Nur-Sultan: ${parsed.main.temp}°C`);
        }
    })
})


$(".card-text").click(function () {
    $(this).css("color", "black");
})

$(".rm").hover(
    function () {
        $(this).animate({
            paddingLeft: "30px",
            opacity: '1'
        }, 200)
    },
    function () {
        $(this).animate({
            paddingLeft: "0px",
            opacity: '0.5'
        }, 200)
    }
);