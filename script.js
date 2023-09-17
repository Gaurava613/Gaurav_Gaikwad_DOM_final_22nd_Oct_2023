let users=[
    {
         userName:"gaurav",
         email:"gaurav@123",
         password:12345
    },
    {
        userName:"jay",
        email:"jay@123",
        password:12345
   },
   {
    userName:"raj",
    email:"raj@123",
    password:12345
}
]



function checkData(){
    takeEmail=document.getElementById('uname').value
    takepass=Number( document.getElementById('password').value)
    let vari=0

       for(let x of users){
        if(x.email===takeEmail && x.password===takepass){
            vari=1
            alert("You Log In Successfuly ")
            window.location.href = "booktable.html";

            break
        }  }
        if(!vari){
            alert("worng")
        }

}


class Details{
    constructor(takeUserName,takePhone){
 this.takeUserName=takeUserName,
 this.takePhone=takePhone
    }
    display(){
        return `${this.takeUserName} ${this.takePhone}`
    }

}
