export const validateForm =(email,password)=>{
const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if(!validateEmail) return "Email is not valid";
if (!validatePassword) return "Password is not valid"

return null;

}
