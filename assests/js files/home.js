

function get_data() {
    var todos = new Array;
    var idx=getindex();
    var todos_str = localStorage.getItem('user['+idx+'].todoarr');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    alert(JSON.stringify(todos));
    return todos;
}


//dispaly data:
function display_() {
    var todos = getdata();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    }
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

// //remove from todo:

// function remove() {
//     var id = this.getAttribute('id');
//     var todos = getdata();
//     todos.splice(id, 1);
//     localStorage.setItem('todo', JSON.stringify(todos));
 
//     show();
 
//     return false;
// }

function usercurrentdata(i,todos){
    var user_str = localStorage.getItem('user');
    if (user_str !== null) 
    {
       usercurrent = JSON.parse(user_str); 
    }

    // var uc=usercurrent[i];
    // alert(uc);

        for(j=0;j<usercurrent.length;j++)
        {
            if(i==j)
            {
                 var email=usercurrent[i].emailid;
                 var fname=usercurrent[i].firstname;
                 var lname=usercurrent[i].lastname;
                 var address=usercurrent[i].add;
                 var gender=usercurrent[i].genderg;
                 var picture=usercurrent[i].picture;
                 var todoarray=todos;
                //var uc=usercurrent[j];
                //obj & return
                var mynewobj={"emailid":email,"todoarr":todoarray,"firstname":fname,"lastname":lname,"genderg":gender,"picture":picture,"add":address};
                return mynewobj;
            }
            
        }


    //  return uc;
  
}

//get data of todo
function tododata(event){
    event.preventDefault();
    var dataDate=document.getElementById("datadate").value;
    var dataCategory=document.getElementById("datacategory").value;
    var dataTodo=document.getElementById("datatodo").value;
    todos=get_data();
    var idx=getindex();
    alert(idx);
    

    
    //create object---
    var objTodo={"date":dataDate,"category":dataCategory,"tododata":dataTodo};
    //push object--
    todos.push(objTodo);
    //get  complete data of that user
    var mydata=usercurrentdata(idx,todos);
    usercurrent.push(mydata);
    //localStorage.setItem('user',JSON.stringify(todos));
    localStorage.setItem('user',JSON.stringify(usercurrent));
    //document.getElementById("alltodos").innerHTML =todos;
    //display_();
 
    //return false;
    document.getElementById("addnewtodo").reset();


    //var todoobj={"todotext":data};

}

function mycurrentuser(){
    console.log("called..");
    var mycurrent = localStorage.getItem('currentuser');
    document.getElementById("welcome").innerHTML = mycurrent;
}

var usercurrent= new Array();// declaring blank array for current user
function getdata() 
{
    var user_str = localStorage.getItem('user');
    if (user_str !== null) 
    {
       usercurrent = JSON.parse(user_str); 
    }
     return usercurrent;
}

function mycurrentuserdetails(){
    
    var mycurrent = localStorage.getItem('currentuser');
    usercurrent=getdata() ;
    for (var k = 0; k < usercurrent.length; k++){
        alert("-->called111");
    var uname_of_user=usercurrent[k].emailid;
           alert(mycurrent+" "+" "+uname_of_user);
    //var mycurrent = localStorage.getItem('user');
    if(mycurrent ==  uname_of_user)
         {      
           // alert("---->"+mycurrent);
            
              //alert("---->"+usercurrent[i].emailid);
            
            
            //retrive every thing an ddisplkay
            var firstname=usercurrent[k].firstname;
            
            var lastname=usercurrent[k].lastname;
            var address=usercurrent[k].add;
            var gender=usercurrent[k].genderg;
            document.getElementById("det1").value = firstname;
            document.getElementById("det2").value = lastname;
            document.getElementById("det3").value = address;
            document.getElementById("det4").value = gender;



        //    localStorage.setItem('currentuser',JSON.stringify(uname_of_user));
        //    window.location.href = 'home.html';
           return true;
         }
         else
         continue;
         
    }

    
}


function editcontents(){
    document.getElementById("det1").readOnly=false;
    document.getElementById("det2").readOnly=false;
    document.getElementById("det3").readOnly=false;
    document.getElementById("det4").readOnly=false; 


}


function getindex(){
       //alert("--------------hi");
    var mycurrent = localStorage.getItem('currentuser');
 usercurrent=getdata() ;
   for (var i = 0; i < usercurrent.length; i++)
   {
      var uname_of_user=usercurrent[i].emailid;
        // alert("---->"+userarr[i].emailid);
        // alert(mycurrent+" "+ uname_of_user);
    //var mycurrent = localStorage.getItem('user');
    if(mycurrent == uname_of_user)
         {      
         return i;
         }
        
    
        }
}

function updatecontent(){
    
    var user = getdata();
    var mycurrent = localStorage.getItem('currentuser');
    var myfname=document.getElementById("det1").value;
    var mylname=document.getElementById("det2").value;
    var myaddress=document.getElementById("det3").value;
    var mygender=document.getElementById("det4").value; 
   // alert(mycurrent+" "+myfname+" "+mylname+" "+myaddress+" "+mygender );
    var newobj={"emailid":mycurrent,"firstname":myfname,"lastname":mylname,"genderg":mygender,"picture":null,"add":myaddress};
   
    var index=getindex();
    user[index] = newobj;
    localStorage.setItem('user',JSON.stringify(user));
    alert("Your data is updated successfully");
}


//////////////////////adding a new row to a table/////////////////////////
function addField (argument) {
    var myTable = document.getElementById("myTable");
    var currentIndex = myTable.rows.length;
    var currentRow = myTable.insertRow(-1);

    var checkBox= document.createElement("input");
    checkBox.type='checkbox';
    checkBox.setAttribute("name","checkBox"+currentIndex);

    var dateBox = document.createElement("input");
    dateBox.setAttribute("name", "date" + currentIndex);

    var categoryBox = document.createElement("input");
    categoryBox.setAttribute("name", "category" + currentIndex);

    var todoBox = document.createElement("input");
    todoBox.setAttribute("name", "todo" + currentIndex);

    // var addRowBox = document.createElement("input");
    // addRowBox.setAttribute("type", "button");
    // addRowBox.setAttribute("value", "Add another line");
    // addRowBox.setAttribute("onclick", "addField();");
    // addRowBox.setAttribute("class", "button");

    var currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(checkBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(dateBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(categoryBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(todoBox);

    // currentCell = currentRow.insertCell(-1);
    // currentCell.appendChild(addRowBox);

    tododata(event);
}


function logout(){

    window.location.href = 'regristration.html';
    var blank=" ";
    localStorage.setItem('currentuser',blank);

}
