interface Books{
    title:string,
    author:string,
    price:number
}
class BookApp{
    book:Books[]
    constructor(){
        this.book=[]
    }
    addBook(item:BookCart){
        this.book.push(item)

    }
    getBook(){
        return this.book
    }
   
    deleteBook(author:string){
        this.book=this.book.filter(b=>b.author !==author)

    }
    editBook(editName:string){
        this.book=this.book.filter(b=>b.author !== editName)

    }
}
class BookCart implements Books{
    constructor(public title:string,public author:string,public price:number){

    }
 

}
const bookadd=new BookApp()
const title=document.getElementById('title') as HTMLInputElement;
const author=document.getElementById('author') as HTMLInputElement;
const price=document.getElementById('price') as HTMLInputElement;
const add_btn=document.getElementById('Add') as HTMLButtonElement;
const table=document.getElementById('table-body') as HTMLTableSectionElement;
const renderBooks=()=>{
    table.innerHTML='';
    bookadd.getBook().forEach((book,index)=>{
        const row=table.insertRow();
        row.innerHTML=
        `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price}</td>
        <button class="edit">Edit</button>
        <button id="delete-${index}">Delete</button>
        `
        const deleteBtn = document.getElementById(`delete-${index}`) as HTMLButtonElement;

        deleteBtn.addEventListener('click', () => {
            bookadd.deleteBook(book.author);
            renderBooks();
        });
    })
}
const render=()=>{
    title.innerHTML=''
    author.innerHTML=''
    price.innerHTML=''
add_btn.addEventListener('click',()=>{
   
    if(title && author && price){
        const bookItem=new BookCart(title.value,author.value,parseFloat(price.value))
        bookadd.addBook(bookItem)
        console.log(bookadd.getBook())
    }

    renderBooks();

})

}
render()