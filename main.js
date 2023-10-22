

function takeData(){
   window.location.href = "userprofile.html"

    const name=document.getElementById('uname')
    const phone=document.getElementById('uphone')
    const date=document.getElementById('udate')
    const time=document.getElementById('utime')
    const noOfMembers=document.getElementById('members')
    const note=document.getElementById('cmt')
    const mainDiv=document.getElementById('addDatas')
    const creUl=document.createElement('UL')
    const creEle=document.createElement('LI')
    addDatas.appendChild(creUl)
    creUl.appendChild(creEle)
    
    creEle.innerHTML=[`NAME : ${name.value} <br> PHONE : ${phone.value} <br> DATE : ${date.value} <br> TIME : ${time.value} <br> NUMBER OF MEMBERS : ${noOfMembers.value} <br> NOTE : ${note.value}`]
    
    document.getElementById('uname').value=""
    document.getElementById('uphone').value=""
    document.getElementById('udate').value=""
    document.getElementById('utime').value=""
    document.getElementById('members').value=""
    document.getElementById('cmt').value=""
    const deleEle=document.createElement('span')
    creEle.appendChild(deleEle)
    deleEle.innerHTML="CLEAR"
    saveData()
    showData()
     }
     addDatas.addEventListener('click',(e)=>{
       if(e.target.tagName==='SPAN'){
        console.log("hi")
        e.target.parentElement.remove()
       }
       saveData()
       showData()
     })
    
     function clearallData(){
        addDatas.innerHTML=" "
        console.log("hi")
        saveData()
    showData()    
     }
    
    
     function saveData(){
        localStorage.setItem('data',addDatas.innerHTML)
     }
     function showData(){
        addDatas.innerHTML=localStorage.getItem('data')
     }
     showData()

   //   
// ==================================================================
     
async function checkData(){

   const fetchs= await fetch("https://reqres.in/api/users?page=2")
   .then((data)=>{
           console.log(data)
           return data.json()
           })
           console.log(fetchs.data)
   takeEmail=document.getElementById('uemail').value
   takepass=Number( document.getElementById('password').value)
   let vari=0

      for(let x of fetchs.data){
       if(x.email===takeEmail && x.id===takepass){
           vari=1
           alert("You Log In Successfuly ")
           window.location.href = "booktable.html";

           break
       }  }
       if(!vari){
           alert("wrong")
       }

   const creULforUser=document.createElement('UL')
   const creLiforUser=document.createElement('LI')
   username.appendChild(creULforUser)
   creUl.appendChild(creLiforUser)
   creEle.innerHTML=[`${uemail.value}`]
   console.log("hi")
   saveData()
   showData()
   function saveData(){
      localStorage.setItem('data',addDatas.innerHTML)
   }
   function showData(){
      addDatas.innerHTML=localStorage.getItem('data')
   }
   showData()


}
    
     
    
    