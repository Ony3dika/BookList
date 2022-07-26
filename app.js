
//book constructor

class Book {
    constructor (title,author, isbn){
        this.title= title
        this.author=author
        this.isbn=isbn
    }
}

// Ui constructor
 

 class UI {
    
    addToTable(book){
        let list =document.getElementById("book-list")
        const row =document.createElement("tr")
        row.className="rowe"
        
        let data1=document.createElement("td")
        data1.textContent=book.title

        let data2=document.createElement("td")
        data2.textContent=book.author

        let data3=document.createElement("td")
        data3.textContent=book.isbn

        let data4=document.createElement("td")
        let link=document.createElement("button")
        link.className="delete"
        link.textContent="X"
        data4.appendChild(link)

        row.appendChild(data1)
        row.appendChild(data2)
        row.appendChild(data3)
        row.appendChild(data4)
        list.appendChild(row)
        
        console.log(list)
 
    }

    clearinput(){
        document.getElementById("title").value=""
        document.getElementById("author").value=""
        document.getElementById("isbn").value=""

        }

    message(message, classname){
        let container= document.querySelector(".container")
        let text=document.createElement("div")
        text.className=`alert ${classname}`
        text.textContent=message
        let form=document.getElementById("book-form")

        container.insertBefore(text, form)

        setTimeout(function(){
            document.querySelector(".alert").remove()
        } ,3000)
    }

    deleteRow(target){
        if(target.className==="delete"){
            target.parentElement.parentElement.remove()
        }
    }

    
 }

/////New CLass////

class Local{
   static getBooks(){
        let books;
        if(localStorage.getItem("novel")===null){
            books=[]
        }else{
            books=JSON.parse(localStorage.getItem('novel'))
        }

        return books
    }

   static display(){
        let books = Local.getBooks()

        books.forEach(function(book){
            const ui = new UI

            ui.addToTable(book)
        })
    }

   static storage(book){
        const books = Local.getBooks()
        
        books.push(book)

        localStorage.setItem('novel', JSON.stringify(books))
    }
}

// class Local{
    
//     save (){
//     let newBook;

//     let book={
//         Til:document.getElementById("title").value,
//         Aut:document.getElementById("author").value,
//         Isb:document.getElementById("isbn").value,
//     }

//     let article=book

//     if (localStorage.getItem('book')===null){
//         newBook=[]
//     }else{
//         newBook=JSON.parse(localStorage.getItem('book'))
//     }

//     newBook.push(article)
    
//     localStorage.setItem('book',JSON.stringify(newBook))
// }

// //Ref

//     reload (){
//         const newBook= locSt.save()

//         newBook.forEach(function(cover){

//             const ui=new UI;

//             ui.addToTable(cover);
//         })
//     }

//     addBook(book){
//         const newBook= locSt.save()

//         newBook.push(book)

//         localStorage.setItem('book',JSON.stringify(book))
//     }

// } 

/////END////

document.getElementById("book-form").addEventListener("submit", function(e){

    let Title= document.getElementById("title").value,
        Author=document.getElementById("author").value,
        ISBN = document.getElementById("isbn").value;

        const book= new Book(Title,Author,ISBN)

        const ui= new UI

        

        if (Title ==="" || Author ==="" || ISBN ===""){

            ui.message("Please fill in all details", "error")
        }else{
            ui.addToTable(book)

            Local.storage(book)
            
            ui.message("book added successfully", "success")

            //locSt.save()
    
            ui.clearinput() 
            
           // locSt.reload()

        }

        //ui.deleteRow()

    e.preventDefault()


})

document.getElementById("book-list").addEventListener('click',function(e){
   const ui= new UI

    ui.deleteRow(e.target)

    e.preventDefault()
})


























// class Person{
//     constructor(firstName, LastName){
//         this.firstName= firstName
//         this.LastName= LastName
//     }
//    greeting(){
//     return `Hello, you welcomed ${this.firstName} ${this.LastName} to my school`
//    }

  
// }

// class Person2 extends Person {
//     constructor(firstName, LastName, phone){
//         super (firstName, LastName)


//         this.phone= phone
//     }

//     welcome(){
//         return `hy ${this.firstName}  ${this.LastName}`
//     }
// }


// let joe = new Person2 ("joe", "lazan", "08176437874")

// console.log(joe.welcome())


// let john = new Person ("john", "doe")

// console.log(john.greeting())