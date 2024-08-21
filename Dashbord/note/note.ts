const userInterface = document.getElementById('user-inerface')!;
const userWrite = document.getElementById('user-write')!;
const downContent = document.getElementById('down-part')!;

const noteTitle = document.getElementById('note-input')!;
const noteMsg = document.getElementById('text-msg')!;
const divEle = document.querySelector('.note_list')!;
const saveBtn = document.getElementById('save-btn')!;

saveBtn?.addEventListener("click", () => {
  if((noteTitle as HTMLInputElement).value === '') {
    userInterface.style.display = 'none';
    userWrite.style.display = 'block';  
  } else {
    userInterface.style.display = 'block';
    userWrite.style.display = 'none';
    downContent.style.display = 'none';
  }

  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "remove";
  removeBtn.className = "remove_btn";
  div.className = "div_element";
  divEle.appendChild(div);
  h1.textContent = (noteTitle as HTMLInputElement).value;
  p.textContent = (noteMsg as HTMLInputElement).value;
  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(removeBtn);

  (noteTitle as HTMLInputElement).value = '';
  (noteMsg as HTMLInputElement).value = '';

  removeBtn?.addEventListener('click', () => {
    divEle.removeChild(div);
    saveData();
  });
  saveData();
})

const saveData = () => {
  localStorage.setItem("list", divEle.innerHTML);
}

window.onload = function(){
  function showData(){
    (<any>divEle).innerHTML = localStorage.getItem("list");
  }
  showData();
}
