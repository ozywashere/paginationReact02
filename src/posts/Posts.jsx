import PropTypes from 'prop-types';
import PostList from './PostList';
import BtnsContainer from './BtnsContainer';
function Posts({ posts, handlePage, nextPage, prevPage, data, page, loading }) {
  return (
    <section>
      <div
        className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen
    flex flex-col justify-center'
      >
        {/* Title */}
        <h1 className='text-4xl font-bold text-center my-10'>
          {loading ? 'Loading...' : 'Posts'}
        </h1>

        {/* Post List */}
        <PostList posts={posts} />

        {/*Btns Container */}
        <BtnsContainer
          handlePage={handlePage}
          nextPage={nextPage}
          prevPage={prevPage}
          data={data}
          page={page}
        />
      </div>
    </section>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  handlePage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Posts;
