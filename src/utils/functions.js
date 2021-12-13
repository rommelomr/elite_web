import jwt_decode from "jwt-decode";

/*  
  function that return true if the token exp date is after curren date,
  false otherwise

*/
const validateExpToken = (vue)=>{

  let current_date = new Date();

    const token = jwt_decode(vue.user_token);

    let token_expired = (token.exp*1000) > current_date.getTime();

    return token_expired;

}
export const validateSession = (vue)=>{
  
  if(!vue.session || !validateExpToken(vue)){

    vue.$router.push('/login');

  }
}
export const validateGuest = (vue)=>{

  if(vue.session && validateExpToken(vue)){

    vue.$router.push('/dashboard');
  }
}
export const validateGuestResponse = (status,vue)=>{

  if(status == 401){

    vue.user_id = '';
    
    vue.user_name = '';
    
    vue.user_email = '';
    
    vue.user_token = '';

    vue.user_role = '';

    vue.session = false;

    vue.axios.defaults.headers.common.Authorization = '';
    
    vue.$router.push('login');
  }
}



export const API = (url) =>{
  return process.env.NODE_ENV === 'production' ? `https://eliteparking.es:8000/api/${url}` : `http://localhost:8000/api/${url}`
  
}

export const WEB = (url) =>{
  return process.env.NODE_ENV === 'production' ? `https://eliteparking.es:8000/${url}` : `http://localhost:8000/${url}`
}

export const SPA = (url) =>{
  return process.env.NODE_ENV === 'production' ? `https://eliteparking.es/${url}` : `http://localhost:8080/${url}`
}



