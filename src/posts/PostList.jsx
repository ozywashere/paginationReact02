import PropTypes from 'prop-types';
import Post from './Post';
function Posts({ posts }) {
  return (
    <ul className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </ul>
  );
}
Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
