import React from "react";

export default function Pagination({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
  paginateFront,
  paginateBack,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    if(pageNumbers.length<5){
    pageNumbers.push(i);}
  }

  return (
    <div className='text-center'>
       <a
            onClick={() => {
              paginateBack();
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Previous</span>
          </a>

          <a
            onClick={() => {
              paginateFront();
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Next</span>
          </a>
      <div className='flex justify-center'>

      <div>
      <nav className='block  '>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            {pageNumbers.map((number) => (
              <a
                onClick={() => {
                  paginate(number);
                }}
                href='#'
                className={
                  currentPage === number
                    ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
      </div>
      </div>
     {/* <div>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'>
            {" "}
            {currentPage * moviesPerPage - 20}{" "}
          </span>
          to
          <span className='font-medium'> {currentPage * moviesPerPage} </span>
          
          <span className='font-medium'> {totalMovies} </span>
          results
        </p>
      </div>
     */}
    </div>
  );
}