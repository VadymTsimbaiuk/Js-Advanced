//'use strict';

const array = [
    [{
        name: 'My Compucter',
        url: ''
    }, [{
        name: 'Video'
    }, [{
        name: 'Lessons JS'
    }, [{
        name: 'Downloads'
    }, {
        name: 'Images'
    }, {
        name: 'Music'
    },{
        name: 'Books'
    }]]]],

    [{
        name: 'Disk C',
        url: 'u'
    }, [{
        name: 'User'
    }, {
        name: 'Program Files'
    }, {
        name: 'PerfLogs'
    }]],

    [{
        name: 'Disk D',
        url: ''
    }, [{
        name: 'Videos'
    }, {
        name: 'Games'
    }, [{
        name: 'World Of Tanks'
    }, {
        name: 'DOTA'
    }, {
        name: 'CS:GO'
    }], {
        name: 'Microsoft Office'
    }]],

    [{
        name: 'Disk F',
        url: ''
    }, [{
        name: 'Eclipse'
    }, {
        name: 'Foto'
    }, [{
        name: '2016'
    }, {
        name: '2017'
    }, {
        name: '2018'
    }], {
        name: 'Video'
    }]],
];

let myComputer = document.getElementById('my_computer');
let buttons;

function addList(){
    for(let i = 0; i<array.length; i++){
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let button = document.createElement('button');
        let textNodeLi = document.createTextNode(`${array[i][0].name}`);
        let textNodeButton = document.createTextNode('+');
        li.appendChild(textNodeLi);
        button.appendChild(textNodeButton);
        myComputer.appendChild(ul).appendChild(li).appendChild(button);
      }
}
addList();
buttons = document.querySelectorAll('button');
buttons.forEach(setClick);

function setClick(item, index, n){
    item.onclick = function add(){
        let folders = [];
        let files = [];
        if(n instanceof NodeList){
            folders = getFolders(array[index][1]);
            files = getFiles(array[index][1]);
        }else if(n===3){
            if(Array.isArray(array[index][1][1])){
                folders = getFolders(array[index][1][1]);
                files = getFiles(array[index][1][1]);
            }else{
                folders = getFolders(array[index][1][2]);
                files = getFiles(array[index][1][2])
            }
        }else if(n===5){
            if(Array.isArray(array[index][1][1][1])){
                folders = getFolders(array[index][1][1][1]);
                files = getFiles(array[index][1][1][1]);
            }else{
                folders = getFolders(array[index][1][1][2]);
                files = getFiles(array[index][1][1][2])
            }
    }
    addUl(item, files, folders);
    let btnInside = item.parentElement.querySelectorAll('ul li button')[1];
    if(btnInside){
        setClick(btnInside, index, n = getParentsNumber(item, myComputer));
    }
    item.innerHTML = '-';
    item.classList.remove('plus');
    item.classList.toggle('minus');

    item.onclick = function deleteChildes() {
        if (item.parentElement.lastElementChild.tagName = 'UL') {
            item.parentElement.lastElementChild.innerHTML = '';
        }
        item.onclick = add;
        item.innerHTML = '+';
        item.classList.toggle('plus');
        item.classList.remove('minus');
        };
    };
};

function getFiles(arr){
    let files = [];
    for (let i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){}else{
            files.push(arr[i].name)
        };
    };
    return files;
}
function getFolders(arr){
    let folders =[];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            folders.push(arr[i-1].name);
        }else{}
    }
    return folders;
}
function addUl(item, text, folders){
    if(text && item){
        let ul = document.createElement('ul');
        item.parentElement.appendChild(ul);
        for(let i = 0; i<text.length; i++){
            if(folders.find(el => el == text[i])){
                let li = document.createElement('li');
                let textNodeLi = document.createTextNode(text[i]);
                let button = document.createElement('button');
                let textNodeButton = document.createTextNode('+');
                button.appendChild(textNodeButton);
                li.appendChild(textNodeLi);
                ul.appendChild(li).appendChild(button);
            }else{
                let li = document.createElement('li');
                let textNodeLi = document.createTextNode(text[i]);
                li.appendChild(textNodeLi);
                ul.appendChild(li);
            };
            
        };

    };
};
function getParentsNumber(el, parentSelector){
    let parents = [];
    let p = el.parentNode;

    while (p !== parentSelector){
        let o = p;
        parents.push(o);
        p = o.parentNode;

    }
    parents.push(parentSelector);
    return parents.length;
}
