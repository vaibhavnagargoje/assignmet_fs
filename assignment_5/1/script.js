$(document).ready(function() {
    $('#countButton').on('click', function() {
        var text = $('#textArea').val().length;
        $('#textLength').text(text);
    });

    $('#textArea').on('input', function() {
        var textLength = $(this).val().length;
        // $('#textLength').text(textLength);

        var progressBarWidth = (textLength / 100) * $('#progressBar').width();
        $('#filler').width(progressBarWidth);
    });
});
