
var list=document.getElementById("list");


function addTodo(){

    //list section
    var to_do=document.getElementById("to-do");
    var li= document.createElement('li');
    var liText = document.createTextNode(to_do.value);
    li.setAttribute("class","l") 
    li.appendChild(liText);
     list.appendChild(li);



        //edit button section
      
        var editBtn= document.createElement("button");
        var ebtnText= document.createTextNode("Edit")
        editBtn.appendChild(ebtnText);
        editBtn.setAttribute("class","ebtn")
        editBtn.setAttribute("onclick","editItem(this)")
 
    
      //delete button section
      var dltBtn= document.createElement("button");
      var btnText= document.createTextNode("Delete")
      dltBtn.appendChild(btnText);
      dltBtn.setAttribute("class","btn")
      dltBtn.setAttribute("onclick","deleteItem(this)")
      
      
      
      
      
      li.appendChild(editBtn);
      li.appendChild(dltBtn);
      //list.appendChild(dltBtn);


      
      to_do.value= " ";
    }

//edit function
function editItem(edit){
  var v= edit.parentNode.firstChild;
  var editValue=prompt("Edit value ",v);
  v.nodeValue = editValue;
  //console.log( edit.parentNode.firstChild);

}


//remove function
function deleteItem(dlt){
  dlt.parentNode.remove()

}

//delete all

function deleteAll(){
  list.innerHTML= " ";
}


