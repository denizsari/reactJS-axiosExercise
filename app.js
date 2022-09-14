import axios from 'axios';

const getData = async (id) => {
  const user = await (await axios(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
  const post = await (await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).data;
  const albums = await (
    await axios(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
  ).data;

  return {
    user,
    post,
    albums,
  };
};

export default getData;
