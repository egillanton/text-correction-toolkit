
var reader = undefined;
var extension = undefined;

function previewFile() {
    var preview = document.getElementById("image_preview");

    var file = document.querySelector('input[type=file]').files[0];
    extension = file.name.split('.').pop().toLowerCase()

    reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
        get_text();
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}


function get_text() {
    var base64result = reader.result.split(',')[1];
    $.ajax({
        type: 'POST',
        url: "/api/v1/ocr",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            "data": base64result
        }),
        success: function (response) {
            var text = response.text;
            var source_text_area = document.getElementById("source_text_area");
            var target_text_area = document.getElementById("target_text_area");
            source_text_area.value = text;
            target_text_area.value = text;
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function get_text_from_source(){
    var source_text_area = document.getElementById("source_text_area");
    var target_text_area = document.getElementById("target_text_area");
    var text = source_text_area.value;
    if(text){
        target_text_area.value = text;
    }
}

function save_target(){
    var target_text_area = document.getElementById("target_text_area");
    var target_text = target_text_area.value;

    $.ajax({
        type: 'POST',
        url: "/api/v1/text",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            "target_text": target_text
        }),
        success: function (response) {
            return;
        },
        error: function (error) {
            console.log(error);
        }
    });
}


$(document).ready(function () {
    $("#get_text_from_source_btn").click(function(){
        get_text_from_source();
    });
    $("#save_target_btn").click(function(){
        save_target();
    });
});