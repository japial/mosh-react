import React, { Component } from 'react';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from "../services/movieService";
import { getGenres } from "../services/geners";
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: 0
    };

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() })
    }
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

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre });
    }

    render() {
        const { currentPage, pageSize, movies: allMovies, selectedGenre, genres } = this.state;

        const filtered = selectedGenre === 0 ? allMovies :
                         allMovies.filter(m => m.genre._id === selectedGenre);
        const movies = paginate(filtered, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        itemSelected={selectedGenre}
                        items={genres}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <h5>Showing {filtered.length} Movies </h5>
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
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChnage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;