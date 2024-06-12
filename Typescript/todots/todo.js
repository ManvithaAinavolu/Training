var Todo = /** @class */ (function () {
    function Todo() {
        this.input = document.getElementById("input-text");
        this.task = document.getElementById("list");
        this.req = document.getElementById("req");
        var addbtn = document.getElementById("add");
        this.addTask = this.addTask.bind(this);
        this.markTask = this.markTask.bind(this);
        addbtn.addEventListener("click", this.addTask);
    }
    Todo.prototype.addTask = function () {
        if (this.input.value.trim() === "") {
            this.req.innerHTML += "<strong>Please enter any task</strong>";
        }
        else {
            this.req.innerText = "";
            var listItem = document.createElement("li");
            listItem.innerHTML += this.input.value.trim();
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", this.markTask);
            var deletbtn = document.createElement("img");
            deletbtn.classList.add('delete-button');
            deletbtn.src = "download.png";
            deletbtn.addEventListener("click", this.deleteTask);
            listItem.appendChild(checkbox);
            listItem.appendChild(deletbtn);
            this.task.appendChild(listItem);
        }
        this.input.value = "";
    };
    Todo.prototype.markTask = function (event) {
        var checkbox = event.target;
        var listItem = checkbox.parentElement;
        if (checkbox.checked) {
            listItem.classList.add("completed");
        }
        else {
            listItem.classList.remove("completed");
        }
    };
    Todo.prototype.deleteTask = function (e) {
        var deletbtn = e.target;
        var listItem = deletbtn.parentElement;
        listItem.remove();
    };
    return Todo;
}());
var todo = new Todo();
