

function getdata() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    
    return todos;
}


//dispaly data:
function display() {
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

//remove from todo:

function remove() {
    var id = this.getAttribute('id');
    var todos = get_data();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

//get data of todo
function tododata(event){
    event.preventDefault();
    var data=document.getElementById("newtodo").value;
    todos=getdata();
    todos.push(data);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("alltodos").innerHTML =todos;
    display();
 
    return false;



    //var todoobj={"todotext":data};

}