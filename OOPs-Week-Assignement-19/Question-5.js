class Product{
    constructor(name, category, price,stock){
        this.name=name;
        this.category=category;
        this.price=price;
        this.stock=stock;
    }
}

class Inventory{
    constructor(){
        this.Inventory_array=[];
    }
}

Inventory.prototype.addProduct=function(product){
        this.Inventory_array.push(product);
        console.log(`Added ${product.name} is  to the inventory`);
        console.log(this.Inventory_array);
}

Inventory.prototype.deleteproduct=function(pro){

    this.Inventory_array.map((product,index)=>{
        if(product.name === pro){
            this.Inventory_array.splice(index,1);
            console.log(`Deleteed succesfully Laptop from the investory `);
        }
    })

}

const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 899, 10);
const product2 = new Product('Books', 'Books', 20, 50);


console.log(product1);
console.log(product2);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.deleteproduct('Laptop')


