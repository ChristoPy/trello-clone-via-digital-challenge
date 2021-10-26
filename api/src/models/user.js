export const createUserModel = (user, token) => ({
  user: {
    id: user.ref.id,
    name: user.data.name,
    email: user.data.email,
  },
  tokens: {
    session: token,
  },
});
