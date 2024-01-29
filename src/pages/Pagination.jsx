import React from 'react';
import '../assets/css/pagination.css';
import { useState } from 'react';

export default function PaginateFunction ({postPerPage,totalPost,paginate}) {
    const pageNumber = [];
    for (let i = 1; i < Math.ceil(totalPost/postPerPage); i++) {
        pageNumber.push(i);
        
    }
    const [activePage, setActivePage] = useState(1);
    const handelPageClick = (number) => {
        setActivePage(number);
        paginate(number);
    }

    return (
        <div className='pagination'>
            {pageNumber.map((number) => {
                return (
                    <button
                        key={number}
                        className={activePage == number ? "active" : ""}
                        onClick={ () => {
                        handelPageClick(number);
                        paginate(number); }}>
                        {number}
                    </button>
                );
            })}
        </div>
    )
}
