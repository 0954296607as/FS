function click(e){
    let targetEvent=e.currentTarget.firstChild.innerHTML;
    switch (targetEvent){
        case "сменить имя" : changeName()
            break;
        case "сменить пароль" : changeName()
            break;
        case "сменить почтовый Ящик" : changeName()
            break;
        case "сменить имя" : changeName()
            break;
        case "сменить имя" : changeName()
            break;
    }
}
onload=(e)=>{
    const navLis=document.querySelectorAll('.menuLi');
    navLis.forEach(v=>{
        v.addEventListener('click',click);
        v.i
    }) 
}

