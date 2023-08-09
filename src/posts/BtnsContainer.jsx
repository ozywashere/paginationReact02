import PropTypes from 'prop-types';
function BtnsContainer({ data, page, nextPage, prevPage, handlePage }) {
  return (
    <div className='mt-auto py-10 flex items-center gap-4 justify-center'>
      <button onClick={prevPage}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-gray-700 hover:text-gray-900'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
      {data.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => handlePage(index)}
            className={`px-3 py-2 rounded-full
            ${
              index === page
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        );
      })}
      <button onClick={nextPage}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-gray-700 hover:text-gray-900'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>
    </div>
  );
}

BtnsContainer.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired,
};

export default BtnsContainer;
