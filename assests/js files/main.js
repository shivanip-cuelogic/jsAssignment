// ON submit code....
function formValidation(event){
    event.preventDefault();
    if(validation())
    {
        window.location.href = 'home.html';
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
    var z= document.myform.address.value;
    if(username_Validation() && allLetter(x) && allLetter(y) && addressfield(z) && genderValidation())
    {
      
                        alert("you are registered successfully");
                        return true;
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
      
      alert('Please input alphabet characters only in flname');
      return false;
      }
      }
//function for address validation
 //function for address 
function addressfield(add){
    var myadd= /^[a-zA-Z0-9 ]*$/;
    if(add.match(myadd))
    {
    return true;
    }
    else
    alert("invalid address");
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
     var username = document.getElementById("e");
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

var pic = document.getElementById("pic");
var address = document.getElementById("a").value;

//gender
if (document.getElementById('g1').checked) {
    gender = document.getElementById('g1').value;
  }
  else{
    gender = document.getElementById('g2').value;  
  }

alert(email+ " " +fname+ " "+lname+" "+gender+ " " +pic + " "+address);
 funToPush(email,fname,lname,gender,pic,address);

}

// var arr = new Array;// declaring blank array
function getdata() {
    
    var todos_str = localStorage.getItem('user');
    if (todos_str !=undefined) {
        arr = JSON.parse(todos_str); 
        window.alert("found");
        return arr;
    }
    else
    {
         arr=new Array();
        window.alert("found1");
        return arr;
    }
    
}

function funToPush(email,fname,lname,gender,pic,address){
    var todoarr = new Array();
    var myobj={"emailid":email,"todoarr":todoarr,"firstname":fname,"lastname":lname,"genderg":gender,"picture":pic,"add":address};
   
    
//var myJSON = JSON.stringify(myobj);
arr=getdata();
arr.push(myobj);

localStorage.setItem('user',JSON.stringify(arr));
//var obj = JSON.parse(localStorage.getItem("myJSON"));
var obj = JSON.parse(localStorage.getItem('user'));
console.log(obj);

//set username to localstorage
var current_user=document.getElementById("e").value;
localStorage.setItem('currentuser',current_user);

//now clear every thing on main form
document.getElementById("fo1").reset();

}


