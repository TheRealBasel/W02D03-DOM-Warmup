let booksList = [];

function addNewBook ( name, url ){
    booksList.push([name,url]);
    let bookListDOM = document.getElementById("books");
    let bookItem = document.createElement("li");
    bookItem.id = name;
    bookItem.style = "display: flex; vertical-align: middle; margin: 10px 0;"
    bookItem.innerHTML = `
    <img src="${url}"></img>    
    <div style="display: -ms-flexbox; display: -webkit-flex; display: flex; -ms-flex-align: center; -webkit-align-items: center; -webkit-box-align: center; align-items: center;"> 
        <h3 style="margin-left:30px;">${name}</h3>   
        <button style="margin-left:30px;" onclick="removeBook(${name})">Delete</button>
    </div>
    `;

    bookListDOM.appendChild(bookItem);
}

function removeBook (name){
    const found = booksList.findIndex(element => element[0] == name);
    booksList[found] = null;
    name.remove()
}

function onAddClick (){
    let name = document.getElementById("book_name").value;
    let url = document.getElementById("book_url").value;
    addNewBook ( name, url );
}