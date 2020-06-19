const array =[
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

let lineHTML = '<ul>';
let firstElement = true;

const menu = {
get: function (Menu, ind) {
    if (!Array.isArray(Menu)) {
        Menu.show = true;
        if (ind === 0) {
            lineHTML += '<li class="plus">' + Menu.name + '</li>';
        } else {
            lineHTML += '<li class="window" >' + Menu.name + '</li>';
        }

    } else {

        for (let d = 0; d < Menu.length; d++) {
            menu.get(Menu[d], d);
            if (d === 0) {
                lineHTML += '<ul>';
            }
            firstElement = false;
        }
        lineHTML += '</ul>';
        return
    }
}
}

myComputer.onclick = function (event) {

firstElement = true;
lineHTML = '<ul>';
let target = event.target;

if (target.tagName === 'LI') {

        target.classList.toggle('plus');
        target.classList.toggle('minus');
    }
};
menu.get(array, 0);
lineHTML += '</ul>';

document.getElementById('myComputer').innerHTML = lineHTML;