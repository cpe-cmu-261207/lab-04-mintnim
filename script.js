/* Your code here */
let listItemCounter = 0

let Delete = document.getElementsByClassName("delete");
let i
for (i = 0; i < Delete.length; i++) {
  Delete[i].onclick = function() {
    let llist = this.parentElement
    llist.style.display = "none"
  }
}

let Check = document.getElementsByClassName("check");
let e
for (e = 0; e < Check.length; e++) {
  Check[e].onclick = function() {
    let llistt = this.parentElement
    llistt.style.textDecoration = "line-through"
  }
}

function AddTodo() {
    let li = document.createElement('li')
    li.id = 'list' + listItemCounter++
    li.className = "listt"
    let input = document.getElementById('currentInput').value
    let text = document.createTextNode(input)
    li.append(text)
    if(input === ""){
        alert("Task cannot be empty!")
    }else{
        document.getElementById("currentUl").append(li)
        // localStorage.setItem('user', JSON.stringify(user));
        // var user = JSON.parse(localStorage.getItem('user'));
        document.getElementById("currentInput").value = ""
    }
    let span = document.createElement("SPAN")
    let deletebutton = document.createTextNode("\u00D7")
    span.className = "delete"
    span.append(deletebutton)
    li.append(span)
    let span1 = document.createElement("SPAN")
    let checkbutton = document.createTextNode("\u2713")
    span1.className = "check"
    span1.append(checkbutton)
    li.append(span1)
    
    for (i = 0; i < Delete.length; i++) {
        Delete[i].onclick = function() {
          let llist = this.parentElement
          llist.style.display = "none"
        }
      }
    for (i = 0; i < Check.length; i++) {
        Check[i].onclick = function() {
          let llistt = this.parentElement
          llistt.style.textDecoration = "line-through"
        }
      }
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        AddTodo()
    }
})


