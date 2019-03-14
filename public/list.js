onload=(e)=>{
    const buttonList=document.getElementById('buttonList');
    const menu=document.querySelector(".listForm");
    const postQuery=()=>{
        fetch("/list",{
            method: 'GET',
            headers:{
                'Content-type' :'application/json'
            },
            mode: 'cors',
            cache: 'default'
        })
        .then(value=>value.json())
        .then(value=>createLists(value));
        menu.style="display:none;";
    }
    const click=(e)=>{
        postQuery()
    }
    function createLists(lists){
        document.body.innerHTML='<ul class="list"> </ul>';
        const node=document.querySelector('.list');
        console.log();
        lists.forEach(value=>{
            createElement(value);
        })
        function createElement(element){
            var newLi = document.createElement('li');
                newLi.innerHTML = `${element.login}`;
                node.appendChild(newLi);
        }
    }
    buttonList.addEventListener("click",click);

}

