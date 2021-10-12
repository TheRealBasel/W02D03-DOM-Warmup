let booksList = [];

function addNewBook ( bookName, url ){
    booksList.push([bookName,url]);
    let bookListDOM = document.getElementById("books");
    let bookItem = document.createElement("li");
    bookItem.id = bookName;
    bookItem.style = "display: flex; vertical-align: middle; margin: 10px 0;"
    bookItem.innerHTML = `
    <img src="${url}" width="250" height="250"></img>    
    <div style="display: -ms-flexbox; display: -webkit-flex; display: flex; -ms-flex-align: center; -webkit-align-items: center; -webkit-box-align: center; align-items: center;"> 
        <h3 style="margin-left:30px;">${bookName}</h3>   
        <button style="margin-left:30px;" onclick="removeBook(${bookName},this)">Delete</button>
    </div>`;

    bookListDOM.appendChild(bookItem);
}

function removeBook (bookName,liElement){
    const found = booksList.findIndex(element => element[0] == bookName);
    booksList[found] = null;
    liElement.parentNode.parentNode.remove();
}

function onAddClick (){
    let name = document.getElementById("book_name").value;
    let url = document.getElementById("book_url").value;
    addNewBook ( name, url );
}