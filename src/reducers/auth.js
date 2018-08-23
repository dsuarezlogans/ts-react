
// selectors
export const isUserLoggedInSelector = state => !!state.auth.currentUser;

const initialState = {
  currentUser: {}
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};