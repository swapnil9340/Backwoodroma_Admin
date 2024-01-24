
const reducer = (state, action) => {
  switch (action.type) {
    case 'Login':
      return { ...state, login: action.login }
    case 'api':
      return { ...state, api: action.api }
    case 'Roles':
      return { ...state, Roles: action.Roles }
    case 'datesSelect':
      return { ...state, datesSelect: action.datesSelect }
    default: return state
  }
};

export default reducer