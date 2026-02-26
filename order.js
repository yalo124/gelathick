const regular = document.querySelector(".regular");
const gtm = document.querySelector(".gtm");
const cancelorder = document.querySelector(".cancelorder");
const cancelorder2 = document.querySelector(".cancelorder2");
const order1 = document.querySelector(".order1");
const order2 = document.querySelector(".order2");
const pull2_1 = document.querySelector(".pull2-1");
const pull2_2 = document.querySelector(".pull2-2");
const doneorder1 = document.querySelector(".doneorder1");
const doneorder2 = document.querySelector(".doneorder2");
const gtmm = document.querySelector(".gtmm");



const boxes = document.querySelectorAll(".box");
const pulls = [
  document.querySelector(".pull1"),
  document.querySelector(".pull2"),
  document.querySelector(".pull3"),
  document.querySelector(".pull1-1"),
  [document.querySelector(".pull2-1"), document.querySelector(".pull2-2")],
  document.querySelector(".pull3-1")
];

regular.addEventListener("click", () => {
  regular.classList.toggle("active");
  order1.classList.toggle("active");
});

cancelorder.addEventListener("click", () => {
  order1.classList.remove("active");
  regular.classList.remove("active");
});

doneorder1.addEventListener("click", () => {
  order1.classList.remove("active");
  regular.classList.remove("active");
});

gtm.addEventListener("click", () => {
  gtm.classList.toggle("active");
  order2.classList.toggle("active");
});

cancelorder2.addEventListener("click", () => {
  order2.classList.remove("active");
  gtm.classList.remove("active");
});

doneorder2.addEventListener("click", () => {
  order2.classList.remove("active");
  gtm.classList.remove("active");
});

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    const correspondingPull = pulls[index];

    if (!correspondingPull) return;

    const isActive = Array.isArray(correspondingPull)
      ? correspondingPull[0].classList.contains("active")
      : correspondingPull.classList.contains("active");


    pulls.forEach((pull, i) => {
      if (Array.isArray(pull)) {
        pull.forEach(p => { if (p) p.classList.remove("active"); });
      } else {
        if (pull) pull.classList.remove("active");
      }
      if (boxes[i]) boxes[i].classList.remove("active");
    });

    if (!isActive) {
      if (Array.isArray(correspondingPull)) {
        correspondingPull.forEach(p => { if (p) p.classList.add("active"); });
      } else {
        correspondingPull.classList.add("active");
      }
      box.classList.add("active");
    }
  });
});

pull2_1.addEventListener("click", (e) => {
  e.stopPropagation();
  pull2_1.classList.remove("active");
});

pull2_2.addEventListener("click", (e) => {
  e.stopPropagation();
  pull2_2.classList.remove("active");
});

function totalClicks(click){
  const totalClicks = document.getElementById('totalClicks');
  const sumvalue = parseInt(totalClicks.innerText) + click;
  console.log(sumvalue+click);
  totalClicks.innerText=sumvalue;

  if(sumvalue<0){
    totalClicks.innerText=0;
  }
  if(click===0){
    totalClicks.innerText=0;
  }
}

function totalClicks2(click){
  const totalClicks2 = document.getElementById('totalClicks2');
  const sumvalue = parseInt(totalClicks2.innerText) + click;
  console.log(sumvalue+click);
  totalClicks2.innerText=sumvalue;

  if(sumvalue<0){
    totalClicks2.innerText=0;
  }
  if(click===0){
    totalClicks2.innerText=0;
  }
}