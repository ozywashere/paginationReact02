import PropTypes from 'prop-types';
function Paginate(data) {
  const itemsPerPage = 8;
  const page = Math.ceil(data.length / itemsPerPage);
  const newFollowers = Array.from({ length: page }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return newFollowers;
}
Paginate.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Paginate;
