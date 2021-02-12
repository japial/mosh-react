const genres = [
    {_id: 1, name: "Action"},
    {_id: 2, name: "Adventure"},
    {_id: 3, name: "Animated"},
    {_id: 4, name: "Biography"},
    {_id: 5, name: "Comedy"},
    {_id: 6, name: "Crime"},
]

export function getGenres(){
    return genres;
}

export function getGenre(id){
    return genres.find(g => g._id === id);
}