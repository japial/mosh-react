import React, { Component } from 'react';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import { getMovies } from "../services/movieService";
import { getGenres } from "../services/geners";
import { paginate } from "../utils/paginate";
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: 0,
        sortColumn: { path: 'title', order: 'asc' }
    };

    componentDidMount() {
        const genres = [{ _id: 0, name: "All Genres" }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
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
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    getPageData = () => {
        const {
            currentPage,
            pageSize,
            movies: allMovies,
            selectedGenre,
            sortColumn
        } = this.state;

        const filtered = selectedGenre === 0 ? allMovies :
            allMovies.filter(m => m.genre._id === selectedGenre);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sorted, currentPage, pageSize);

        return { total: filtered.length, movies};
    }

    render() {
        const {length: count} = this.state.movies; 
        const {
            currentPage,
            pageSize,
            selectedGenre,
            genres,
            sortColumn
        } = this.state;

        if( count === 0) return <h2>No Movies</h2>;

        const {total, movies} = this.getPageData();

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
                    <h5>Showing {total} Movies </h5>
                    <MoviesTable
                        movies={movies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}
                    />
                    <Pagination
                        currentPage={currentPage}
                        itemsCount={total}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChnage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;