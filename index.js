document.getElementById('container').style.backgroundColor = 'silver'

document.getElementById('title').style.color = 'green';

document.getElementById('fruits').style.textTransform = 'Uppercase'

document.getElementById('vegetables').style.textTransform = 'Uppercase'

let fruit = document.createElement('li');
fruit.innerHTML = "Beetroot";
document.getElementById('fruList').appendChild(fruit)

let vege = document.createElement('li');
vege.innerHTML =" Cauliflower";
document.getElementById('vegList').appendChild(vege)