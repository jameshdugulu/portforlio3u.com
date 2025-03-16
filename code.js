function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

const myFun = (callbackFun) => {
  let value = 50;
  callbackFun = value;

}

myFun(function(value){
  console.log(value);
});


let people = [1,3,5,6,8,11];

people.forEach( function(person){

  console.log(person);
}

);

