














console.log(task1);
console.log(task2);
console.log(task3);

class Task{
    constructor(description, priority){
        this.description = description;
        this.priority = priority;
    }
}

const t1=new Task ("Do CR", "High");
const t2=new Task("Medium","HW");
const t3=new Task ("Play Mario","Low");
console.log(t1.description);
console.log(t2);
console.log(t3);

var inputs=document.getElementsByClassName('mb-3');
var link=document.querySelectorAll('li a');
console.log(link);
console.log(inputs);

function hideInputs(){
    for(var i=0;i<=inputs.length;i++){
        // inputs[i].style.display="none"
        
    }
}