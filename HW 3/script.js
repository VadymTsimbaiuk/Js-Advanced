var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear_btn'),
    resultBtn = document.getElementById('result'),
    brackets = document.querySelectorAll('.event'),
    display = document.getElementById('display'),
    MemoryBreket = '',
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';
    
    

for(var i =0; i<numbers.length; i++){
        var number = numbers[i];
        number.addEventListener('click', function(e){
           numberPress(e.target.textContent);
        });
    
    };
for(var i =0; i<operations.length; i++){
        var operationBtn= operations[i];
        operationBtn.addEventListener('click', function(e){
             operation(e.target.textContent);
        });
    
    };
for(var i =0; i<brackets.length; i++){
        var bracket = brackets[i];
        bracket.addEventListener('click', function(e){
            console.log('клік по кнопці з дужкою');
        });
    
    };
for(var i =0; i<clearBtns.length; i++){
        var clearBtn = clearBtns[i];
        clearBtn.addEventListener('click', function(e){
            clear(e.srcElement.id);
        });
    
    };
decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);
    


function numberPress(number){
    if (MemoryNewNumber){
        display.value = number;
        MemoryNewNumber = false;
    }else {
        if (display.value === '0') {
            display.value = number;
        } else {
                display.value += number;
            };
        }
    };
    
//function bracketBtn(brc){
//    if(MemoryBracket){
//    display.value = brc;
//    MemoryBracket = false;
//    }else{
//        if(display.value === '0'){
//            display.value = brc
//        }else{
//            display.value += brc
//        }
//    }
//    
//}

function operation(op){
     var localOperationMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOperation !== '='){
        display.value = MemoryCurrentNumber;
    }else{
        MemoryNewNumber = true;
        if (MemoryPendingOperation  === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation  === '-'){
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        }else if(MemoryPendingOperation  === '*'){
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        }else if(MemoryPendingOperation  === '/'){
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
       }else if(MemoryPendingOperation  === '^'){
            MemoryCurrentNumber =  Math.pow(MemoryCurrentNumber, localOperationMemory);
        }else if(MemoryPendingOperation  === 'sqrt'){
            MemoryCurrentNumber = Math.sqrt(parseFloat((localOperationMemory*localOperationMemory)+
            (MemoryCurrentNumber*MemoryCurrentNumber)));
        }else if(MemoryPendingOperation  === 'cos'){
            MemoryCurrentNumber = Math.cos(parseFloat((MemoryCurrentNumber)))  * parseFloat(localOperationMemory);
        }else if(MemoryPendingOperation  === 'sin'){
            MemoryCurrentNumber =  Math.sin(parseFloat((MemoryCurrentNumber)))  * parseFloat(localOperationMemory);
        }else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
        
    };
};

function decimal(argument){
    var localDecimalMemory = display.value;

    if(MemoryNewNumber){
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    }else{
        if(localDecimalMemory.indexOf('.') === -1){
            localDecimalMemory += '.'; 
        };
    };
    display.value = localDecimalMemory;
    };

function clear(id){
    if(id === 'before'){
        display.value = '0';
        MemoryNewNumber = true;
    }else if( id === 'c'){
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    }
    console.log('клік по кнопці '+id+'!');
};


