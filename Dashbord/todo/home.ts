const createBtn = document.getElementById('create-btn')!;
const otherCreateBtn = document.getElementById('other-create-btn')!;
const userInterface = document.getElementById('user-inerface')!;
const userWrite = document.getElementById('user-write')!;
const cancelBtn = document.getElementById('cancel-btn')!;
const downContent = document.getElementById('down-part')!;

createBtn?.addEventListener('click', () => {
  userInterface.style.display = 'none';
  userWrite.style.display = 'block';
});
otherCreateBtn?.addEventListener('click', () => {
  userInterface.style.display = 'none';
  userWrite.style.display = 'block';
});

cancelBtn?.addEventListener('click', () => {
  userInterface.style.display = 'block';
  userWrite.style.display = 'none';
});

//create list
const taskInput = document.getElementById('task-input')!;
const saveBtn = document.getElementById('save-btn')!;
const taskList = document.querySelector('.order_list')!;

const createList = () => {
  if ((taskInput as HTMLInputElement).value === '') {
    alert('you should type something');
  } else {
    let li = document.createElement('li');
    li.className = 'task_list';
    li.innerHTML = (taskInput as HTMLInputElement).value.trim();
    (taskInput as HTMLInputElement).value = '';
    taskList.appendChild(li);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete_btn';
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
      saveDate();
    });
  
    li.addEventListener('click', () => {
      li.classList.toggle('checked');
      saveDate();
    });   
  }
};

saveBtn?.addEventListener('click', () => {
  if((taskInput as HTMLInputElement).value === '') {
    userInterface.style.display = 'none';
    userWrite.style.display = 'block';  
  } else {
    userInterface.style.display = 'block';
    userWrite.style.display = 'none';
    downContent.style.display = 'none';
  }
  createList();
  saveDate();
});


const saveDate = () => {
  localStorage.setItem("list", taskList.innerHTML);
}

window.onload = function(){
  function showData(){
    (<any>taskList).innerHTML = localStorage.getItem("list");
  }
  showData();
}
