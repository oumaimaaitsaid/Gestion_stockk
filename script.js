const title =document.getElementById('title');
const price =document.getElementById('price');
const ads =document.getElementById('ads');
const taxes =document.getElementById('taxes')
const discount =document.getElementById('discount');
const total =document.getElementById('total');
const count =document.getElementById('count');
const category =document.getElementById('category');
const submit =document.getElementById('submit')

//get Total
function getTotal(){
    if(price.value!=''){
        let result =(+price.value + +ads.value + +taxes.value ) -(discount.value);
        total.innerHTML =result;
        total.style.background="#040";

    }
    else{
        total.innerHTML='';
        total.style.background="#a00d02";
    }
}