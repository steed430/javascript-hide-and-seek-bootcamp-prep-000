function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  var firstTarget=document.getElementById("nested")
  return firstTarget.getElementsByClassName("target")[0]
}
function increaseRankBy(n){
  var lists = document.querySelectorAll("ul.ranked-list li")
  var i=0
  for(i=0;i<lists.length;i++){
    lists[i].innerHTML=(parseInt(n)+parseInt(lists[i].innerHTML)).toString()

  }
}
function deepestChild(){
    let current=document.querySelector("#grand-node")
    let next=[]
    while (current){
        next.push(current)
        current=current.querySelector("div");
      }
      return next.pop()
    }
