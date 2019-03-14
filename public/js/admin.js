

const rootId=document.getElementById('root');
let temp;
const id={
    rootId : document.getElementById('root'),
    name : document.getElementById('name'),
    password : document.getElementById('password'),
    list : document.getElementById('list'),
    add : document.getElementById('add'),
    delete : document.getElementById('delete')
}
const c="Hello";
function click(e){
    let targetEvent=e.currentTarget.firstChild.innerHTML;
    switch (targetEvent){
        case "сменить имя" : changeName()
            break;
        case "сменить пароль" : changePassword()
            break;
        case "сменить почтовый ящик" : changeMail()
            break;
        case "Вывести список пользователей" : allUsers()
            break;
        case "Добавить пользователя" : addUser();
            break;
        case "Добавить пользователя" : deleteUser();
            break;
    }
}
onload=(e)=>{
    const navLis=document.querySelectorAll('.menuLi');
    navLis.forEach(v=>{
        v.addEventListener('click',click);
    });

}
function changeName(){
    id.name.classList.toggle('hidden');
    if(temp){
        temp.classList.toggle("hidden");
    }else{
        temp=id.name;
    }
}
function changePassword(){
    id.password.classList.toggle('hidden');
    if(temp){
        temp.classList.toggle("hidden");
    }else{
        temp=id.password;
    }
}
function changeMail(){
    id.mail.classList.toggle('hidden');
    if(temp){
        temp.classList.toggle("hidden");
    }else{
        temp=id.mail;
    }
}
function allUsers(){
    id.list.classList.toggle('hidden');
    if(temp){
        temp.classList.toggle("hidden");
    }else{
        temp=id.list;
    }
}
function addUser(){
    id.add.classList.toggle('hidden');
    if(temp){
        temp.classList.toggle("hidden");
    }else{
        temp=id.add;
    }
}
function deleteUser(){
    id.delete.classList.toggle('hidden');
    if(temp){
        temp.classList.toggle("hidden");
    }else{
        temp=id.delete;
    }
}
onsubmit=(e)=>{
    /*const paramers={
        method:e.target.method,
        headers: {  
            "Content-type": "application/x-www-form-urlencoded"  
            },
        body:`login=${document.getElementById('id')}&password=${password}&name=${e.target.firstChild.name=name}` 

    }
    console.log(paramers);
    e.preventDefault();
    /*fetch(`${e.target.action}`
    })*/
}


