const user = ['getUser', 'getMovies', 'searchMovies', 'getGenres', 'downloadMovies', 'streamMovies',]
const admin = ['getUsers', 'manageUsers', 'getUser', 'getMovies', 'searchMovies', 'editMovies', 'getGenres', 'downloadMovies', 'editGenres', 'uploadMovies', 'streamMovies',]
const supery = [...user, ...admin]

console.log(supery, "Supery")

const allRoles = {
  user,
  admin,
  supery,
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
