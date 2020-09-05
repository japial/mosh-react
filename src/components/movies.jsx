import React, { Component } from 'react';
import { getMovies } from "../services/movieService";

class Movies extends Component{
    state = {
        movies : getMovies()
    };
    handleDelete = (movie) => {
       let movies = this.state.movies.filter( m => m._id !== movie._id);
       this.setState({movies: movies});
    }
    render(){
        const { length: count } = this.state.movies;
        if(count === 0){
            return <h3>No Movies Available</h3>
        }
        return(
            <React.Fragment>
                <h5>Showing {count} Number of Movies</h5>
               <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map( movie => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.year}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRate}</td>
                                    <td>
                                        <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
               </table>
            </React.Fragment>
        );
    }
}

export default Movies;