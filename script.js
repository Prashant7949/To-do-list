const addbutton = document.querySelector("#Addbutton");
const deleteEdit = document.querySelector(".post-icon");
const textinput = document.querySelector("#textinput");

addbutton.addEventListener("click", () => {
    if (textinput.value.length == 0) {
        alert("please enter something!");
    }
    else {
        deleteEdit.innerHTML +=
            `
    <div class="post">
        <p>${textinput.value}</p>
        <div class="icon">
            <i onClick = "editPost(this)" class="fa-regular fa-pen-to-square"></i>
            <i onClick = "deletePost(this)" class="fa-solid fa-trash"></i>
        </div>
    </div>
        `;
    textinput.value = "";
    }
});

const createPost = ()=> {

}

const deletePost = (e)=>{
    e.parentElement.parentElement.remove();
};

const editPost = (e) =>{
    textinput.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};