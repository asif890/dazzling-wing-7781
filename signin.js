let newarr=[]

let cradentialstr=JSON.parse(localStorage.getItem("usersdata"))||[]
console.log(cradentialstr);
newarr=cradentialstr


let email=document.getElementById("email")
let pass=document.getElementById("pass")
let loginbt=document.getElementById("loginbt")


loginbt.addEventListener("click",()=>{
    if(email.value==="admin"&&pass.value==="admin"){
        window.location.href="../das.html"
    }
    else{
        let flag="false"
    // console.log("uygnyjg");
    
    newarr.filter(element => {
        if(element.Email===email.value&&element.Pass===pass.value){
            flag="true"
        }
        
        // console.log(element.Email);
        // console.log(email.value);
    });

    if(flag==="true"){
        alert("Login successful")
        window.location.href="./index.html"
        console.log("erg")
    }
    else{
        alert("Please enter a valid Email or password")
    }
    }
    
})


