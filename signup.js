let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let email=document.getElementById("email")
let pass=document.getElementById("pass")
let cpass=document.getElementById("cpass")

let signupbt=document.getElementById("signupbt")

let arr=JSON.parse(localStorage.getItem("usersdata"))||[]

signupbt.addEventListener("click",(e)=>{
    e.preventDefault()
    let locdata={
       Fastname:fname.value,
       Lastname:lname.value,
       Email:email.value,
       Pass:pass.value,
    }
    // arr.push(locdata)
    if(locdata.Pass===cpass.value){
        // alert("successful")
        arr.push(locdata)
        localStorage.setItem("usersdata",JSON.stringify(arr))
        window.location.assign("./signin.html")
    }
    else{
        alert("Password mismatched")
    }
    console.log(cradentialstr);
    
})