let wrapperContainer = document.querySelector(".wrapper");
let wrapperPost = document.querySelector(".wrapper-post");
let inpTask = document.querySelector("#input-task");
let btnAdd = document.querySelector("#btn-add-task");
let modal = document.querySelector(".modal");
let inpModal = document.querySelector(".input-modal");
let closeModal = document.querySelector(".close");
let change = document.querySelector(".change");
let changedValue;

let data = [
  {
    id: 1,
    title: "Задача №1",
  },
  {
    id: 2,
    title: "Задача №2",
  },
  {
    id: 3,
    title: "Задача №3",
  },
];

btnAdd.onclick = () => {
  if (inpTask.value === "") {
    alert("Введите задачу");
  } else {
    console.log(inpTask.value);
    let newData = {
      id: new Date().getTime(),
      title: inpTask.value,
    };
    data.push(newData);
    getData();
    inpTask.value = "";
  }
};

function deleteData(id) {
  data = data.filter((e) => {
    return e.id !== id;
  });
  getData();
}

function getData() {
  wrapperPost.innerHTML = "";
  data.forEach((e) => {
    let post = document.createElement("div");
    post.classList.add("post");
    wrapperPost.append(post);
    let titleText = document.createElement("p");
    titleText.innerHTML = e.title;
    let wrapperChangeBtn = document.createElement("div");
    wrapperChangeBtn.classList.add("wrapper-btn");
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Изменить";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Удалить";
    wrapperChangeBtn.append(editBtn, deleteBtn);
    post.append(titleText, wrapperChangeBtn);
    deleteBtn.onclick = () => {
      deleteData(e.id);
    };
    editBtn.onclick = () => {
      modal.show();
      inpModal.value = e.title;
    };
    closeModal.onclick = () => {
      modal.close();
    };
    // Функцию Edit не получается сделать...
    change.onclick = () => {
      changedValue = inpModal.value;
      data = data.map((e) => {
        return (e.title = changedValue);
      });
      console.log(data);
    };
  });
}
getData();
