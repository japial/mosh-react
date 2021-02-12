import React from 'react';
import Like from './common/like';

const MoviesTable = (props) => {
    const { movies, onDelete, onLike } = props;

    return (<table className="table table-bordered mt-3">
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
                            <Like liked={movie.liked} onClick={() => onLike(movie)} />
                        </td>
                        <td>
                            <button 
                            onClick={() => onDelete(movie)} 
                            className="btn btn-danger btn-sm">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>);
}

export default MoviesTable;