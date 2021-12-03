module.exports.signUpErrors=(err)=>{
   let errors = { pseudo:" ",email: " ",password :" "};

if (err.message.includes('pseudo'))
erros.pseudo ='pseudo incorrect ou déja pris';

if (err.message.includes('email'))
erros.email='email incorrect';

if (err.message.includes('password'))
erros.password ='le mot de passe doit faire plus de 6 caractère';

if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
erros.pseudo ='cet pseudo est déjà enregistré ';

if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
erros.email ='cet email est déjà enregistré ';

return erros ;
};

module.exports.signInErrors =(err)=>{
    let errors = {email:'',password:''};
    if(err.message.includes("email")) 
    errors.email = "Email inconnu ";
if(err.message.includes('password'))
errors.password= "password incorrect";
return errors;
};