$(document).ready(function() {
  $('#btn_translate').click(function() {
    const languageCode = $('#language_code').val(); // Get the language code from the input
    const apiUrl = `https://www.fourtonfish.com/hellosalut/?lang=${languageCode}`; // Construct the API URL

    // Fetch the translation for "Hello"
    $.get(apiUrl, function(data) {
      $('#hello').text(data.hello); // Display the translation in the #hello div
    });
  });
});

