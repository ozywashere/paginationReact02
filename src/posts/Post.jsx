import PropTypes from 'prop-types';
import { useState } from 'react';
function Post({ post }) {
  const [readMore, setReadMore] = useState(false);
  const { title, body, id, tags } = post;
  return (
    <li key={id}>
      <div className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden h-full'>
        <div className='bg-gray-200 py-4 px-4'>
          <h2 className='text-2xl font-bold text-gray-900'>
            {`${title.substring(0, 20)}...`}
          </h2>
          <p className='text-sm text-gray-700'>
            {readMore ? body : `${body.substring(0, 100)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : 'read more'}
            </button>
          </p>
        </div>
        <div className='flex items-center justify-between py-4 px-4 mt-auto'>
          <ul className='flex flex-wrap items-center'>
            {tags.map((tag, index) => {
              return (
                <li
                  key={index}
                  className='bg-gray-200 text-gray-700 text-xs font-bold uppercase px-2 py-1 rounded mr-1'
                >
                  {tag}
                </li>
              );
            })}
          </ul>
          <button className='px-3 py-2 bg-indigo-500 text-white text-xs font-bold uppercase rounded'>
            Read More
          </button>
        </div>
      </div>
    </li>
  );
}
Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
