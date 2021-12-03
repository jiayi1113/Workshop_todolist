// TO DO
// 1. 點擊任務標記是否完成
//     - 點擊任務 list 可以切換 `checked` class

document.addEventListener("DOMContentLoaded",function(){
  const list = document.querySelector("ul");
  list.addEventListener("click", (e) => {
    const li = e.target

    if(li && li.nodeName === "LI" && li.className === "checked"){
      li.classList.remove("checked");
    }else{
      li.classList.add("checked");
    }
    
    // 2. 點擊 x 刪除任務
    //     - 點擊 `x` 可移除任務
    if(li.nodeName === "SPAN"){
      li.parentNode.remove();
    }
    
  })
});

