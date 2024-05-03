$(document).ready(function() {
  // Function to fetch and display the translation
  function fetchTranslation() {
    const languageCode = $('#language_code').val(); // Get the language code from the input
    const apiUrl = `https://www.fourtonfish.com/hellosalut/?lang=${languageCode}`; // API URL

    // Fetch the translation for "Hello"
    $.get(apiUrl, function(data) {
      $('#hello').text(data.hello); // Display the translation in the #hello div
    });
  }

  // Event listener for the "Translate" button
  $('#btn_translate').click(function() {
    fetchTranslation(); // Fetch and display the translation when the button is clicked
  });

  // Event listener for "Enter" key press on the input field
  $('#language_code').keypress(function(e) {
    if (e.which === 13) { // 13 is the keycode for "Enter"
      fetchTranslation(); // Fetch and display the translation when "Enter" is pressed
    }
  });
});

