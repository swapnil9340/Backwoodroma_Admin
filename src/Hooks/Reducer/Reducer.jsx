
const reducer = (state, action) => {  
  switch (action.type) { 
      case 'Login':  
      return {...state, login: action.login  }

      case 'api':  
      return {...state, api: action.api  }

      case 'Roles':  
      return {...state, Roles: action.Roles  }
    default:  return state  
  }  
}  ;

export default reducer