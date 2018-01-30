
function getdata() {
    var userarr= new Array;// declaring blank array
    var user_str = localStorage.getItem('newuser');
    if (user_str !== null) {
        userarr = JSON.parse(user_str); 
    }
    
    return userarr;
}
function checkuser(){
        // Users array
var allUsers = [];

   var current_user=document.getElementById("uname");
    userarr=getdata();

    //var myJSON2 = JSON.stringify(userarr);

// Populate users array
for(var i = 0; i < userarr.length; i++) {
    allUsers.push(userarr[email]);
}


    for (var i = 0; i < allUsers.length; i++){
        var uname_of_user=allUsers[email].value;
         if(current_user.match(uname_of_user))
         {
             return true;
         }
         

    }
    alert("Invalid username or password");
    event.stopImmediatePropagation;
    return false;
    
}

