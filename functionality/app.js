let code = ""
/* CLASES */

/* Creating superClass for all products */
class Product {
    constructor({
        product_category,
        product_name,
        product_price = 0,
        product_code,
        product_discount = 0,
        product_amount,
        product_description,
        product_image = [],
        product_brand,
        product_model,
        product_gender,
        product_version,
        product_color = [],
        product_made,
        product_guaranteed,
        product_type,
        product_material,        
        product_size,
    }){
        this.product_category = product_category;
        this.product_price = product_price;
        this.product_name = product_name;
        this.product_code = product_code
        this._product_discount = product_discount;
        this.product_amount = product_amount;
        this.product_description = product_description;
        this.product_image = product_image;
        this.product_brand = product_brand;
        this.product_model = product_model;
        this.product_gender = product_gender;
        this.product_version = product_version;
        this.product_color = product_color;
        this.product_made = product_made;
        this.product_guaranteed = product_guaranteed;
        this.product_type = product_type;
        this.product_material = product_material;
        this.product_size = product_size;
    }
    /* clase transaccion */

    /* Add colors to the product */
    addProduct(color) {
        this.product_color.push(color);
    }
    get discount(){
        return `${this.product_discount} %`
    }
    /* Calculate discount */
    set discount(discount){
        var descuentoPorcentaje = discount / 100;;
        var descuentoTotal = this.product_price * descuentoPorcentaje;
        var finalPrice = this.product_price - descuentoTotal;
        if(finalPrice < 0){
            finalPrice = 0;
        }
        this.product_price = finalPrice;
        this.product_discount = discount;
        return this.product_price
    }
}

/* Shoes product */
class Clothing extends Product{
    constructor(props){
        super(props);
    }
}
/* ARRAYS */
const products = [];
const clothesList = [];


/* PRINCIPAL FUNCTIONS */

/* Create a product */
const createShoesProduct = () =>{
    const newShoes = new Clothing({
        product_category : "Shoes",
        product_brand : "Adidas",
        product_name : "Fall Limited Edition Sneakers",
        product_description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quam ipsam! Totam quia praesentium natus veritatis, nulla aspernatur inventore nemo nisi sequi corrupti non molestias enim accusantium beatae, doloribus quo?",
        product_price : 125000,
        product_discount : 0,
        product_size : 37,
        product_code : "55020280",
        product_amount: 5,
    });
        /* Se manda a llamar la función para verificar si ya existe el producto */
        let num = verificationItem(newShoes.product_code);
        if(num){
            /* Si el producto existe no se agrega */
            console.log("El item ya existe");
        }else{
            /* Si este no existe, se agrega */
            products.push(newShoes.product_code);
            /* Envio los datos al array como base de datos */
            clothesList.push(newShoes);
            /* Cargo los details del producto */
            addProductDetails(newShoes.product_code);
            code = newShoes.product_code;
        }
}
const createBufandaProduct = () =>{
    const newBufanda = new Clothing({
        product_category : "Bufanda",
        product_brand : "Louis V",
        product_name : "Bufanda Limited Edition",
        product_description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quam ipsam! Totam quia praesentium natus veritatis, nulla aspernatur inventore nemo nisi sequi corrupti non molestias enim accusantium beatae, doloribus quo?",
        product_price : 3000000,
        product_discount : 0,
        product_code : "55020270",
        product_amount: 5,
        product_guaranteed: "12 Meses"
    });
        /* Se manda a llamar la función para verificar si ya existe el producto */
        let num = verificationItem(newBufanda.product_code);
        if(num){
            /* Si el producto existe no se agrega */
            console.log("El item ya existe");
        }else{
            /* Si este no existe, se agrega */
            products.push(newBufanda.product_code);
            /* Envio los datos al array como base de datos */
            clothesList.push(newBufanda);
            /* Cargo los details del producto */
            addProductDetails(newBufanda.product_code);
            code = newBufanda.product_code;
        }
}
/* Transacciones */




/* FILTERS  */

/* Filtra por Categoria */
const filterProductCategory = (category) => {
    if(clothesList.length > 0){
        clothesList.forEach(function (articulo) {
            if(articulo.product_category === category){
                console.log(articulo)
            }
        })
    }else{
        console.log("No ha agregado ningún producto a la categoria");
    }
}
/* filtra existencia de product */
function verificationItem(itemCode) {
    let varBoolean = false;
    /* Se mira si existe el codigo de producto en el array products */
    for(let i = 0; i < products.length; i++){
        if(itemCode === products[i]){
            varBoolean = true;
        }
    }
    return varBoolean
}


/* FUNCIONES COMODIN */

/* DOM */
let productTitle = document.getElementById('product-title'); /* Tomo valor del titlo */
let productPrice = document.getElementById('price'); /* Tomo el valor de price */
let productDescription = document.getElementById('product-description') /* Tomo el valor de description */

addProductDetails = (productCode) =>{
    let verification = verificationItem(productCode);
    /* Valido de nuevo que el producto no exista */
    if(verification){
        clothesList.forEach(function (item) {
            productTitle.innerHTML = item.product_name;
            productPrice.innerHTML = item.product_price;   
            productDescription.innerHTML = item.product_description;    
        })
    }else{
        console.warn("El producto no existe");
    }
}

/* Counting items */
addAmountItems = () => {

}
decreaseAmoutItems = () => {

}
validatingAmoutItems = () => {
    /* let verification = verificationItem(productCode);
    let amoutItems;
    if(verification){
        clothesList.forEach(function (item){
            amoutItems = item.product_amount;
            if(amoutItems >)
            console.log(amoutItems)
        })
    }else{
        console.log("El producto no existe")
    } */
}
addCartProduct = () =>{

}