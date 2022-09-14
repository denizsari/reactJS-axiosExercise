import getData from './app.js';

await getData(1)
  .then((user) =>
    console.log('USER_API', user.user, 'POST_API', user.post, 'ALBUMS_API', user.albums),
  )
  .catch((e) => console.log(e));
