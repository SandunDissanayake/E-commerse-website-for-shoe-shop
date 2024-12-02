import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='default-pagination lab-ul'>
          {pageNumbers.map((number) => (
            <li key={number} className={number === activePage ? 'active' : ''}>
              <a
                href='#!'
                onClick={(e) => {
                  e.preventDefault();
                  paginate(number);
                }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>    
    );
}

export default Pagination;
