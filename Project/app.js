console.log(`App`);


var salon={
    name:`The Fashion Pet`,
    phone:`555-555-5555`,
    address:{
        street:`Palm`,
        number:`345`,
        city:`Orlando`
    },
    hour:{
        open:`9:00am`,
        close:`5:00pm`
    },
    pets:[
       
    ]
}
var counter=0;
class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id=counter++
    }
}


function displayInfo(){
    document.getElementById(`footer-site`).innerHTML=`
    <p>${salon.name}</p>
    <p>${salon.address.number} ${salon.address.street}, ${salon.address.city} | Contact: ${salon.phone}</p>
    <p>The salon is open from ${salon.hour.open} to ${salon.hour.close}
`;
}

function register(){
    //create the vars and store the values from the inputs
    var nameInput=document.getElementById(`petName`).value;
    var ageInput=document.getElementById(`petAge`).value;
    var genderInput=document.getElementById(`petGender`).value;
    var breedInput=document.getElementById(`petBreed`).value;
    var serviceInput=document.getElementById(`petService`).value;
    var ownerInput=document.getElementById(`petOwner`).value;
    var phoneInput=document.getElementById(`contactPhone`).value;
    if(nameInput!="" && contactPhone!=""){
        //create the object
        var thePet=new Pet(nameInput,ageInput,genderInput,breedInput,serviceInput,ownerInput,phoneInput);
        //push the object
        salon.pets.push(thePet);
        //display the object
        displayPets();
        //add clear input function
        clearInputs();
        table();
        var alertElement=document.getElementById("alert");
        alertElement.classList.remove("hide");
        setTimeout(function(){
        alertElement.classList.add("hide");
        },4000);
    }else{
        alert("Add the required information!");
    }
}

function clearInputs(){
    document.getElementById(`petName`).value=``;
    document.getElementById(`petAge`).value=``;
    document.getElementById(`petGender`).value=``;
    document.getElementById(`petBreed`).value=``;
    document.getElementById(`petService`).value=`full`;
    document.getElementById(`petOwner`).value=``;
    document.getElementById(`contactPhone`).value=``;
}

function clearTable(){
    var btn=document.getElementById(`table-body`);
    btn.remove();
}

function showTable(){
    var btn=document.getElementById(`table-body`);
    btn.style.display=`inline`;
}

function displayPets(){
    var tmp=``;
    for(i=0;i<salon.pets.length;i++){
        tmp+=`
        <div class="pet">
            <h1><b>Name:</b> ${salon.pets[i].name}</h1>
            <p><b>Age:</b> ${salon.pets[i].age}</p>
            <p><b>Gender:</b> ${salon.pets[i].gender}</p>
            <p><b>Breed:</b> ${salon.pets[i].breed}</p>
            <p><b>Service:</b> ${salon.pets[i].service}</p>
            <p><b>Owner:</b> ${salon.pets[i].ownerName}</p>
            <p><b>Phone:</b> ${salon.pets[i].contactPhone}</p>
        </div>`;
    }
    document.getElementById(`pets`).innerHTML=tmp;
}

function table(){
    var tmp=``;
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`
        <tr id=${salon.pets[i].id}>
            <th scope="row">${i+1}</th>
            <td id="td">${salon.pets[i].name}</td>
            <td>${salon.pets[i].age}</td>
            <td>${salon.pets[i].gender}</td>
            <td>${salon.pets[i].breed}</td>
            <td>${salon.pets[i].service}</td>
            <td>${salon.pets[i].ownerName}</td>
            <td>${salon.pets[i].contactPhone}</td>
            <td><button onClick="deletePets(${salon.pets[i].id})" type="button" class="btn btn-danger">🗑️</button><td>
        </tr>`
    }
    document.getElementById(`table-body`).innerHTML=tmp;
    document.getElementById(`table-caption`).innerHTML=`${salon.name} currently has ${salon.pets.length} pets registered`
}

function deletePets(petID){
    console.log(`delete pet #`+petID);
    // travel the pet's array
    let arrayPosition=``;
    for(i=0;i<salon.pets.length;i++){
        if(petID===salon.pets[i].id){
            indexDelete=i;
            break;
        }
    }
    // find the pet ID
    // remove from the array
    salon.pets.splice(indexDelete,1);
    // remove from the html
    document.getElementById(petID).remove();
}

function searchPet(){
    var searchString=document.getElementById(`searchPet`).value;
    for(var i=0;i<salon.pets.length;i++){
        if(searchString===salon.pets[i].name){
            var row = salon.pets[i].id;
            document.getElementById(row).classList.add(`highlight`);
        }
    }
}

function init(){
    const scooby=new Pet(`Scooby`,60,`Male`,`Dane`,`Full-Service`,`Shaggy`,`777-777-7777`);
    const scrappy=new Pet(`Scrappy`,50,`Male`,`Dane`,`Nails Cut`,`Shaggy`,`777-777-7777`);
    const tom=new Pet(`Tom`,91,`Male`,`Cat`,`Claw Sharpening`,`Tom's Mom`,`888-888-8888`);
    const jerry=new Pet(`Jerry`,92,`Male`,`Mouse`,`Whisker Trim`,`Self Owned`,`999-999-9999`);
    const bob=new Pet(`Bob`,27,`Male`,`Mutt`,`DeClaw`,`Virginia`,`987-654-3210`);
    const sevro=new Pet(`Sevro`,37,`Male`,`Wolf`,`Fur Cleaning`,`Darrow`,`666-666-6666`);
    salon.pets.push(scooby,scrappy,tom,jerry,bob,sevro);
    console.log(`${salon.name} opens from ${salon.hour.open} to ${salon.hour.close}.`);

    table();
    displayPets();
    displayInfo();
}
window.onload=init;