class Todo {
    input: HTMLInputElement;
    task: HTMLUListElement;
    req:HTMLInputElement

    constructor() {
        this.input = document.getElementById("input-text") as HTMLInputElement;
        this.task = document.getElementById("list") as HTMLUListElement;
        this.req=document.getElementById("req") as HTMLInputElement
        const addbtn = document.getElementById("add") as HTMLButtonElement;
        this.addTask = this.addTask.bind(this); 
        this.markTask = this.markTask.bind(this);
        addbtn.addEventListener("click", this.addTask);
    }

    addTask() {
        if (this.input.value.trim() === "") {
            this.req.innerHTML += "<strong>**Please enter any task</strong>";

        } else {
            this.req.innerText="";

            const listItem = document.createElement("li");
            listItem.innerHTML+= this.input.value.trim();

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", this.markTask);

            const deletbtn=document.createElement("img")
           deletbtn.classList.add('delete-button')
           deletbtn.src="download.png"; 
            deletbtn.addEventListener("click",this.deleteTask)

            listItem.appendChild(checkbox);
            listItem.appendChild(deletbtn)

            this.task.appendChild(listItem);
        }
        this.input.value = "";
    }

    markTask(event: Event) {
        const checkbox = event.target as HTMLInputElement;
        const listItem = checkbox.parentElement as HTMLLIElement;
        if (checkbox.checked) {
            listItem.classList.add("completed");
        } else {
            listItem.classList.remove("completed");
        }
    }

    deleteTask(e:Event){
        const deletbtn=e.target as HTMLElement;
        const listItem=deletbtn.parentElement as HTMLLIElement;
        listItem.remove();
    }
}

const todo = new Todo();
