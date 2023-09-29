const button = document.getElementById("one");
const button2 = document.getElementById("two");


function poem1() {
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    para.textContent = "All because of the rain";
    para1.textContent = "I was late to the train";
    document.body.appendChild(para);
    document.body.appendChild(para1);
  }
  
  function poem2(){
      const para = document.createElement("p");
      const para1 = document.createElement("p");
      const para2 = document.createElement("p");
      para.textContent = "Drip, drip, drip";
      para1.textContent = "The floor's all wet";
      para2.textContent = "Make sure you don't fall and slip";
      document.body.appendChild(para);
      document.body.appendChild(para1);
      document.body.appendChild(para2);
  }
  
button.addEventListener("click", poem1);
button2.addEventListener("click", poem2);




/*
MORE COMPLICATED VERSION
function createParagraph(buttonFrom){
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    para.textContent = "";
    para1.textContent = "";
    if (buttonFrom === document.getElementById("#one")){
        para.textContent = "I once felt uninspired";
        para1.textContent = "But my brain got rewired";
    } else if (buttonFrom === document.getElementById("#two")){
        para.textContent = "line1";
        para1.textContent = "line2";
    }

    document.body.appendChild(para);
    document.body.appendChild(para1);
}



const buttons = document.querySelectorAll("button");

for (const button of buttons) {

    button.addEventListener("click", createParagraph(button));
}
*/