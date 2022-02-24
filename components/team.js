//deisfine event listener CLICK на нажатие по логотипу в верхнем меню + воспроизведение звука
$(document).on ("click", "#logo-header", function () {
    $('#headermp3')[0].play();
});

//deisfine event listener MOUSEOVER при наведении на фото Амира - оно увеличивается
$(document).on ("mouseover", "#amir-img", function () {
    $('#amir-img').css("transition", 0.4+"s ease-in-out");
    $('#amir-img').css("transform", "scale(" +1.1+")");
});

//deisfine event listener MOUSEOUT при отведении курсора с фото - оно возвращает размер
$(document).on ("mouseout", "#amir-img", function () {
    $('#amir-img').css("transition", 0.4+"s ease-in-out");
    $('#amir-img').css("transform", "scale(" +1+")");
});

//deisfine event listener KEYPRESS при нажатии на клавиши в активном input (в верхнем меню) вооспроизводится звук
$(document).ready(function(){  
    $("input").keypress(function(){  
        $('#tickmp3')[0].play();
    });  
});

//deisfine event listener CLICK + анимация + selector (при нажатии на кнопку search она уменьшается)
$(document).ready(function(){  
    $( "#search-btn" ).click(function() {
        $(this).css("transition", 0.1+"s ease-in-out");
        $(this).css("transform", "scale(" +0.9+")");
    });
});

//deisfine при отведении курсора от кнопки search она возвращает размер
$(document).ready(function(){  
    $( "#search-btn" ).mouseout(function() {
        $(this).css("transition", 0.1+"s ease-in-out");
        $(this).css("transform", "scale(" +1+")");
    });
});