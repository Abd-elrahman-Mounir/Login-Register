const signUpButton=document.getElementById("signUpButton");
const signInButton=document.getElementById("signInButton");
const signInForm=document.getElementById("signIn");
const signUpForm=document.getElementById("signup");
signUpButton.addEventListener('click',async () => {
    signInForm.style.display="none";
    signUpForm.style.display="block";     
}
)
signInButton.addEventListener('click',async () => {
    signUpForm.style.display="none";
    signInForm.style.display="block"; 
}
)
