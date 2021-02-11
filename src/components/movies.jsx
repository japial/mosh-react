import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from "../services/movieService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };
    handleDelete = (movie) => {
        let movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies });
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChnage = (page) => {
        this.setState({ currentPage: page });
    }

    render() {
        const { length: count } = this.state.movies;
        const { currentPage, pageSize, movies: allMovies } = this.state;
        if (count === 0) return <h3>No Movies Available</h3>;

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
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
                            <th>Like</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(movie => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.year}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRate}</td>
                                    <td>
                                        <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
                                    </td>
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
                <Pagination
                    currentPage={currentPage}
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChnage}
                />
            </React.Fragment>
        );
    }
}

export default Movies;