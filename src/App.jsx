import { useState, useEffect } from 'react';
import useFetch from './useFetch';

import Posts from './posts/Posts';
function App() {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const { loading, data } = useFetch();

  useEffect(() => {
    if (loading) return;
    setPosts(data[page]);
  }, [loading, page, data]);
  const handlePage = (index) => {
    setPage(index);
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <main>
      <Posts
        posts={posts}
        handlePage={handlePage}
        nextPage={nextPage}
        prevPage={prevPage}
        data={data}
        page={page}
        loading={loading}
      />
    </main>
  );
}

export default App;
