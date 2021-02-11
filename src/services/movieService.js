const movies = [
    { 
        "_id": '13131231',
        "title": "After Dark in Central Park", 
        "year": 1900,
        "numberInStock": 5, 
        "dailyRate": 2.5, 
        "genre": {_id: 1, name: 'Action'},
        'liked': true
    },
    { 
        "_id": '6234034',
        "title": "Dark in Park", 
        "year": 2000,
        "numberInStock": 6, 
        "dailyRate": 7.5, 
        "genre": {_id: 6, name: 'Crime'} 
    },
    { 
        "_id": '987234243',
        "title": "Central Duty", 
        "year": 2003,
        "numberInStock": 3, 
        "dailyRate": 5, 
        "genre": {_id: 1, name: 'Action'} 
    },
    { 
        "_id": '98723442',
        "title": "Dark Panter", 
        "year": 1987,
        "numberInStock": 2, 
        "dailyRate": 1.5, 
        "genre": {_id: 3, name: 'Animated'},
        'liked': true
    },
    { 
        "_id": '54317361',
        "title": "Central Park", 
        "year": 2010,
        "numberInStock": 2, 
        "dailyRate": 5, 
        "genre": {_id: 5, name: 'Comedy'} 
    },
    { 
        "_id": '253345345',
        "title": "TDC Act", 
        "year": 1900,
        "numberInStock": 5, 
        "dailyRate": 2.5, 
        "genre": {_id: 1, name: 'Action'},
        'liked': true 
    },
    { 
        "_id": '4362421341',
        "title": "Dart After", 
        "year": 1900,
        "numberInStock": 5, 
        "dailyRate": 2.5, 
        "genre": {_id: 4, name: 'Biography'} 
    },
    { 
        "_id": '131235423',
        "title": "Buffalo Bill's Wild West Parad", 
        "year": 1950,
        "numberInStock": 5, 
        "dailyRate": 2.5, 
        "genre": {_id: 1, name: 'Action'} 
    },
    { 
        "_id": '4353662',
        "title": "Bad Parade", 
        "year": 1900,
        "numberInStock": 3, 
        "dailyRate": 1.5, 
        "genre": {_id: 4, name: 'Biography'} 
    },
]

export function getMovies(){
    return movies;
}

export function getMovie(id){
    return movies.find(m => m._id === id);
}