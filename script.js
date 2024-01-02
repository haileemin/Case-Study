class Product {
    constructor(id, image, name, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
    }
}


let drinks = [
    new Product(1, "https://shorturl.at/CHW78","Pepsi", 15000),
    new Product(2, "https://shorturl.at/HSX37", "CocaCola", 15000),
    new Product(3, "https://shorturl.at/xFKTZ", "Nutri Boost", 15000)
];

function displayProducts() {
    const productListElement = document.getElementById('listDrink');

    productListElement.innerHTML = '<tr>';

    for (let i = 0; i < drinks.length; i++) {
        const drink = drinks[i];
        productListElement.innerHTML += `
            <div class="card">
                <img src="${drink.image}">
                <h2 class="title">${drink.name}</h2>
                <p class="price">${drink.price}</p>
                <button type="button" class="btn" onclick="buyDrink(i)">Buy</button>
            </div>
        `
    }
    productListElement.innerHTML += '</tr>';
}

displayProducts();

// function initApp() {
//     drinks.forEach(value, key) {
//         const productListElement = document.getElementById('listDrink');
//         // let newDiv = document.createElement("div");
//         // newDiv = document.getElementById('listDrink')
//         newDiv.innerHTML = `
//         <img src="img/${value, key}">
//         <div class="title">${value.name}</div>
//         <div class="price">${value.price}</div>
//         <button type="button" class="btn" onclick="buyDrink(key)">Buy</button>
//         `
//     }
// }

// initApp();

function buyDrink(i) {
    if(i != null){
        const drinkListElement = document.getElementById('buyDrink');

        drinkListElement.innerHTML = '<tr>';
    

            const buyDrink = drinks[i];
            productListElement.innerHTML += `
                <div class="card">
            const buyDrink = drinks[i];
                    <img src="${buyDrink.image}">
                    <h2 class="title">${buyDrink.name}</h2>
                    <p class="price">${buyDrink.price}</p>
                    <button type="button" class="btn" onclick="buyDrink(i)">Buy</button>
                </div>
            `
        
        productListElement.innerHTML += '</tr>';
    }
};

// function addProduct() {
//     let name = document.getElementById('name').value;
//     let price = parseFloat(document.getElementById('price').value);
//     let id = products.length + 1;

//     if (name && price) {
//         let newProduct = new Product(id, image, name, price);
//         drinks.push(newProduct);

//         displayProducts();
    
//         alert("Sản phẩm đã được tạo mới thành công");
//     } else {
//         alert("Vui lòng điền đầy đủ thông tin sản phẩm");
//     }
// }
