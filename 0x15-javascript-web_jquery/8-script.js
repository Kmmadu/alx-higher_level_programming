$(function () {
    const url = 'https://swapi-api.alx-tools.com/api/films/?format=json'
    
    $.get(url, function(data, status) {
        if(status == 'success'){
            for (let i in data.results){
                let text = data.results[i].title
                $('#list_movies').append('<li>' + text + '</li>');
            }
        }
    })
});
