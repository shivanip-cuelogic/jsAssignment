var userarr= new Array();// declaring blank array
function getdata() {
  
    var user_str = localStorage.getItem('user');
    if (user_str !== null) {
       
        userarr = JSON.parse(user_str); 
        // JSON.stringify(userarr);        
         //alert("---->"+user_str);
         
    }
    
    return userarr;
}
function checkuser(){
        // Users array
// var allUsers = [];

   var current_user=document.getElementById("uname").value;
    userarr=getdata();
    // alert("---->"+userarr);
// console.log(userarr);
    //var myJSON2 = JSON.stringify(userarr);

// // Populate users array
// for(var i = 0; i < userarr.length; i++) {
//     allUsers.push(userarr[email]);
// }

 //alert("---->"+userarr[0].emailid);

    for (var i = 0; i < userarr.length; i++){
        var uname_of_user=userarr[i].emailid;
         alert(current_user+" "+uname_of_user);
         if(current_user.match(uname_of_user))
         {      
         
           localStorage.setItem('currentuser',uname_of_user);
           window.location.href = 'home.html';
           return true;
         }
          
    }
     
         alert("Invalid username or password");
         return false;
     
   
   
   
    
}

