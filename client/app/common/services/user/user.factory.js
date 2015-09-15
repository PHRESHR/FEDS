const UserFactory = () => {
  const user = {};

  const getUser = () => {
    return user;
  };

  const isSignedIn = () => {
    return user.isSignedIn;
  };

  return { getUser, isSignedIn };
};

export default UserFactory;
