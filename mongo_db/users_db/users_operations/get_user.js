const userCollection = require('../user_collection_connect');

function getParticularUser(email) {
  return userCollection.then((result) => {
    return result
      .find({ email: email })
      .toArray()
      .then((userData) => {
        return userData;
      });
  });
}

module.exports = getParticularUser;
