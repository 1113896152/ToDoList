function subadd() {
    let connent = document.getElementById("todo").value;
    add(connent);
}

function add(connent) {
    if (!connent) {
        alert("ToDo不可为空");
        return;
    }
    let tag = document.getElementById("todolist");

    let newDiv = document.createElement("div");
    newDiv.className = 'tododiv';

    let newButton = document.createElement("button");
    newButton.innerHTML = "删除";
    newButton.className = 'close';
    newButton.onclick = del;
    newDiv.appendChild(newButton);

    let newTag = document.createElement("div");
    newTag.className = 'tag';
    let newspan = document.createElement("span");
    newspan.innerHTML = connent;
    newTag.appendChild(newspan);
    newTag.onclick = edit;
    newDiv.appendChild(newTag);

    tag.appendChild(newDiv);

    document.getElementById("todo").value = null;
}

function del() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}


//获得初始文本，设置为隐藏，然后判断是否已有输入域，如果没有则创建输入框
function edit() {
    this.onclick = null;
    let spanConnent = this.firstElementChild;
    let connent = spanConnent.innerHTML;
    spanConnent.style.display = "none";
    let textarea = document.createElement('textarea');
    textarea.value = connent;
    textarea.className = 'edit-text';
    textarea.onblur = function () {
        let inputConnent = this.value;
        this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
        add(inputConnent);
    };
    spanConnent.parentElement.appendChild(textarea);
    textarea.focus();
}

window.onload = function () {
    document.getElementById('btn').onclick = subadd;
    add("单击便签修改ToDo")
}