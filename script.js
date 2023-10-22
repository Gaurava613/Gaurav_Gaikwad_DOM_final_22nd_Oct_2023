// let users=[
//     {
//          userName:"gaurav",
//          email:"gaurav@123",
//          password:12345
//     },
//     {
//         userName:"jay",
//         email:"jay@123",
//         password:12345
//    },
//    {
//     userName:"raj",
//     email:"raj@123",
//     password:12345
// }
// ]

// async function checkData(){

//     const fetchs= await fetch("https://reqres.in/api/users?page=2")
//     .then((data)=>{
//             console.log(data)
//             return data.json()
//             })
//             console.log(fetchs.data)
//     takeEmail=document.getElementById('uname').value
//     takepass=Number( document.getElementById('password').value)
//     let vari=0

//        for(let x of fetchs.data){
//         if(x.email===takeEmail && x.id===takepass){
//             vari=1
//             alert("You Log In Successfuly ")
//             window.location.href = "booktable.html";

//             break
//         }  }
//         if(!vari){
//             alert("wrong")
//         }

// }

// // function checkData(){
// //     takeEmail=document.getElementById('uname').value
// //     takepass=Number( document.getElementById('password').value)
// //     let vari=0

// //        for(let x of users){
// //         if(x.email===takeEmail && x.password===takepass){
// //             vari=1
// //             alert("You Log In Successfuly ")
// //             window.location.href = "booktable.html";

// //             break
// //         }  }
// //         if(!vari){
// //             alert("wrong")
// //         }

// // }




