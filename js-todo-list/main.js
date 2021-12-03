// TO DO
// 1. 點擊任務標記是否完成
//     - 點擊任務 list 可以切換 `checked` class

document.addEventListener("DOMContentLoaded",function(){
  const list = document.querySelector("ul");
  list.addEventListener("click", (e) => {
    console.log(e.target)
    if(e.target && e.target.nodeName === "LI"){
      e.target.classList.add("checked");
    }else{
      e.target.classList.remove("checked");
    }
  })
});

