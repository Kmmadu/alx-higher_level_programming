$(document).ready(function() {
  // Add a new item to the list
  $('#add_item').click(function() {
    $('.my_list').append('<li>Item</li>'); // Append a new <li> with "Item"
  });

  // Remove the last item from the list
  $('#remove_item').click(function() {
    let list = $('.my_list'); // Get the list
    if (list.children('li').length > 0) { // Ensure there's at least one item
      list.children('li').last().remove(); // Remove the last <li>
    }
  });

  // Clear all items from the list
  $('#clear_list').click(function() {
    $('.my_list').empty(); // Remove all child elements (clear the list)
  });
});

