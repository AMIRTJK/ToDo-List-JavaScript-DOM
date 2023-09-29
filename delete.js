let wrapperMain = document.querySelector("wrapper");
let inpTask = document.querySelector("#input-task");
let btnAdd = document.querySelector("#btn-add-task");
let wrapperPost = document.querySelector(".wrapper-post");
let modal = document.querySelector(".modal");
let inpModal = document.querySelector(".input-modal");
let closeModal = document.querySelector(".close");
let changeTask = document.querySelector(".change");

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
    alert("Введите задачу!");
  } else {
    let newData = {
      id: new Date().getTime(),
      title: inpTask.value,
    };
    data.push(newData);
    getData();
    inpTask.value = "";
  }
};

function deleteTask(id) {
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
    let wrapperBtn = document.createElement("div");
    wrapperBtn.classList.add("wrapper-btn");
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Изменить";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Удалить";
    wrapperBtn.append(editBtn, deleteBtn);
    post.append(titleText, wrapperBtn);
    // Удалить
    deleteBtn.onclick = () => {
      deleteTask(e.id);
    };
  });
}
getData();
