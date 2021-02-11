/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import _ from 'lodash';

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (<nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page => (
                <li style={{ cursor: 'pointer' }} key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                </li>
            ))}
        </ul>

    </nav>);
}

export default Pagination;