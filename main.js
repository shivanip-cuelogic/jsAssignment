  

// ON submit code....
function formValidation(event){
    event.preventDefault();
    if(validation())
    {
        retrival();

        return true;
        
    }
    return false;


}



//main function for regristration page
function validation(){
    var x= document.myform.fname;
   // var x1=document.getElementsByTagName("label");
    var y= document.myform.lname;
    var z= document.myform.address;
     if(allLetter(x))
    {
        if(allLetter(y)) 
        {
            if( allLetter(z)){
                if(genderValidation())
                {
                    window.location.href = 'home.html';
                    alert("you are registered successfully");
                    return true;
                }
             
            }
            
        }
        
    }
  return false;
  

}

// function for fname, lname, address
function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      
      alert('Please input alphabet characters only in name');
      return false;
      }
      }
//functiion for validation of gender
      function genderValidation(){
        var radios = document.getElementsByName("gender");
   
        for (var i = 0, len = radios.length; i < len; i++) {
             if (radios[i].checked) {
                 return true;
             }
        }
        alert('select atleast one of the gender');
        return false;
        
    }
 //functoin for email validation   
 function username_Validation()
 {
     var username = document.registration.email;
     var x =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(username.value.match(x))
     {
         return true;
     }
     else{
         alert("Invalid email");
         return false;
     }
 }

//get values of fields...
function retrival(){
var email = document.getElementById("e").value;
var fname = document.getElementById("f").value;
var lname = document.getElementById("l").value;
var gender = document.getElementById("g").value;
var pic = document.getElementById("pic");
var address = document.getElementById("a").value;


alert(email+ " " +fname+ " "+lname+" "+gender+ " " +pic + " "+address);
    funToPush(email,fname,lname,gender,pic,address);

}

function funToPush(email,fname,lname,gender,pic,address){
    var myobj={ "emailid":email,
            "firstname":fname,
            "lastname":lname,
            "genderg":gender,
            "picture":pic,
            "add":address
            };
var myJSON = JSON.stringify(myobj);


localStorage.setItem('myJSON', myJSON);
var obj = JSON.parse(localStorage.getItem("myJSON"));
console.log(obj);
console.log(obj.firstname);
array.push(obj);
document.getElementById("fo1").reset();
}


