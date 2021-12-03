// TO DO
document.addEventListener("DOMContentLoaded",function(){
  const list = document.querySelector("ul");
  const btn = document.querySelector("#addBtn");
  const text = document.querySelector("#input")


  btn.addEventListener("click", () => {
    if(text.value !== ""){
      const item = document.createElement("li")
      item.innerHTML = `${text.value}<span class=\"close\">x</span>`
      console.log(item);
      list.appendChild(item)
      text.value = "";
    }
  })  

  list.addEventListener("click", (e) => {
    const li = e.target
    console.log(li)

    if(li && li.nodeName === "LI" && li.className === "checked"){
      li.classList.remove("checked");
    }else{
      li.classList.add("checked");
    }

    if(li.nodeName === "SPAN"){
      li.parentNode.remove();
    }    
  })
  

});

