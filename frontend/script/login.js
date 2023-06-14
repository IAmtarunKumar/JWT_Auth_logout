
let baseUrl = "http://localhost:3000"



let login_btn = document.querySelector("#login-btn")
let signup_btn = document.querySelector("#signup-btn")
let login_form = document.querySelector("#login-form")
let reg_form = document.querySelector("#reg-form")
// console.log(login_btn)
// console.log(login_form)
// console.log(reg_form)

login_btn.addEventListener("click" , ()=>{

    login_form.style.display = "block"
    reg_form.style.display = "none"

})


signup_btn.addEventListener("click" , ()=>{

    login_form.style.display = "none"
    reg_form.style.display = "block"

})


//register

reg_form.addEventListener("submit" , async(event)=>{
    event.preventDefault()
   
    let obj = {
      firstname :  reg_form.firstname.value,
      lastname : reg_form.lastname.value,
      email :  reg_form.email.value,
      password : reg_form.password.value,
      confirm_password : reg_form.confirm_password.value
     
    }

    regFetch(obj)

    async function regFetch(obj){

try {
    let res = await fetch("http://localhost:3000/user/register" , {
        method : "POST",
        headers : {'Content-Type' : "application/json"},
        body : JSON.stringify(obj)
    }) 
    if(res.ok){
        let data = await res.json()
        console.log(data)
        alert(data.msg)
    }
    
} catch (err) {
    console.log(err)
}
  
    }
})


//login


login_form.addEventListener("submit" , async(event)=>{
    event.preventDefault()
   
    let obj = {
     
      email :  login_form.email2.value,
      password : login_form.password2.value,
      
     
    }

    regFetch(obj)

    async function regFetch(obj){

try {
    let res = await fetch("http://localhost:3000/user/login" , {
        method : "POST",
        headers : {'Content-Type' : "application/json"},
        body : JSON.stringify(obj)
    }) 
    if(res.ok){
        let data = await res.json()
        console.log(data)
        alert(data.msg)
        
    }
    
} catch (err) {
    console.log(err)
}
  
    }
})







