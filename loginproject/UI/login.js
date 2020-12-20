const init=async ()=>{
    defineSubmit();
 }

const defineSubmit=()=>{

try{
    let signup_button=document.querySelector('.signup');
    if(!signup_button) throw new Error("login button not found");
    signup_button.addEventListener('click',signup);
    return true;
}
catch(error){
    console.error(error);
    return false;
}
};
    async function signup(){
        const username=document.querySelector(".userinput");
        const userpassword=document.querySelector(".userpassword");
        const firstname=document.querySelector(".firstname");
        const lastname=document.querySelector(".lastname");
        const phone=document.querySelector(".phone");
        const u_email=username.value;
        const u_password=userpassword.value;
        const u_firstname=firstname.value;
        const u_lastname=lastname.value;
        const u_phone=phone.value;

        try{
        data={email:u_email,password:u_password,firstname:u_firstname,lastname:u_lastname,phone:u_phone};
    
        console.log(data);
        console.log(JSON.stringify(data));
        
         
            const senddata2=await(await fetch("http://localhost:3000/signup/signups",{
                method:"POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })).json();
            console.log(senddata2);
           }
        catch(error){
            console.error(error);
        }
        }
        





















async function signin(url){
    const username=document.querySelector('.userinput').value;
const userpassword=document.querySelector('.userpassword').value;
data={email:username,password:userpassword};
    const senddata=await(await fetch(`http://localhost:3000/signup/${url}`,{
        method:'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })).json();
    console.log(senddata);
}






