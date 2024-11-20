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


let ProductData;
if(localStorage.products != null){
ProductData=JSON.parse(localStorage.products)
}

else{
    ProductData=[];
}
//Create Product

submit.onclick =function(){
    let newProduct={
        title:title.value,
        price:price.value,
        ads:ads.value,
        taxes:taxes.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    if(newProduct.count>1){
        for (let i =0 ;i < newProduct.count;i++){
            ProductData.push(newProduct);
        }

    }
    else{
        ProductData.push(newProduct);
    }
    
    
    localStorage.setItem('products',JSON.stringify(ProductData));
    clearData();
    
}
showData()
//clear inputs

function clearData(){
    title.value='';
    price.value='';
    ads.value='';
    taxes.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}

//Read Data

function showData(){
    let table = '';
    for(let i = 0 ;i < ProductData.length;i++){
        table += `
                    <tr>
                        <td>${i}</td>
                        <td>${ProductData[i].title}</td>
                        <td>${ProductData[i].price}</td>
                        <td>${ProductData[i].taxes}</td>
                        <td>${ProductData[i].ads}</td>
                        <td>${ProductData[i].discount}</td>
                        <td>${ProductData[i].total}</td>
                        <td>${ProductData[i].count}</td>
                        <td>${ProductData[i].category}</td>
                        <td><button id="update">update</button></td>
                        <td> <button onclick ="DeleteData( ${i} )"  id="delete">delete</button></td>
                    </tr>`

    }
    document.getElementById('tbody').innerHTML =table;
    let btnDelete =document.getElementById('deleteAll');
    if(ProductData.length > 0){
       btnDelete.innerHTML = `<button onclick="deleteAll()">DeleteAll(${ProductData.length})</button>`;
    }
    else{
        btnDelete.innerHTML = '';
    }
}


//DeleteProduct

function DeleteData(i){
    ProductData.splice(i,1);
    localStorage.products =JSON.stringify(ProductData);
    showData();
}

function deleteAll(){
    localStorage.clear();
    ProductData.splice(0);
    showData();
}