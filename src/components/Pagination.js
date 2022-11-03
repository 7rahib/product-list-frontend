import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='container'>
            <nav className='mt-5 mb-5'>
                <div className='btn-group flex flex-wrap'>
                    {pageNumbers?.map(number => (
                        <a onClick={() => paginate(number)} href='!#' className='btn btn-sm btn-ghost'>
                            {number}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Pagination;