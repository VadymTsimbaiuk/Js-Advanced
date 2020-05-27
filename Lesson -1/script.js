
    var People = (function () {
    
    let persone;
    let addPersone;
    let renderedListNames;
    let deletePersone;
    let get_name = document.getElementsByClassName('get_name')[0];
    let oldList = document.getElementsByClassName('list');
    let persons = [
    'Vova',
    'Oleg',
    'Vlad'
    ];

    function init() {
        casheDom();
        render();
        bindEvent();

    }
function casheDom(){
    persone = document.getElementById('persone');
    addPersone = document.getElementById('addPersone');
    deletePersone = document.getElementsByClassName('deletePersone');
}
    function bindEvent(){
        addPersone.addEventListener('click', addPersoneName);
        for( let i=0; i<deletePersone.length; i++){
            deletePersone[i].addEventListener('click', deletePersonName);
        }
        console.log('start')
    };
    
    function render(){
        if(oldList.length >0){
            oldList[0].remove()
        }
        renderedListNames = document.createElement('ul');
        renderedListNames.className = 'list';
        var listLength = persons.length;
        if(listLength>0){
            
            persons.map((value)=>{
                var listItem = document.createElement('li');
                deletePersone = document.createElement('span');
                deletePersone.setAttribute('class', 'deletePersone');
                var listValue = document.createTextNode(value);
                listItem.appendChild(listValue);
                listItem.appendChild(deletePersone);
                renderedListNames.appendChild(listItem);
            });
            
            get_name.appendChild(renderedListNames);
            
        } else {
            let message = document.createElement('p');
            message.className = ' errorMessage';
            message.textContent = 'No data to show';
            get_name.appendChild(message);
        };
        casheDom();
       bindEvent();
    }
    function addPersoneName(){
        
         let name = persone.value;
        if (name){
            var error = document.getElementsByClassName('errorMessage');
            if(error.length>0){
                error[0].remove();
            }
            persons.push(name);
            persone.value = '';
            render();
        }
    }
    function deletePersonName(event){
        let target = event.target;
        let stringItem = target.parentElement.textContent;
        persons.splice(persons.indexOf(stringItem),1);
        render();
    }
    return{
        init: init
    }
})()
People.init();
