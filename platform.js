class Mkulima{
    constructor(farm,products,vendor){
        this.farm=[];
        this.products=[];
        this.vendor=[];

    }
}
class addFarm extends Mkulima{
    constructor(farmId,farmName,farmerName,phoneNumber,address){
    super(farmId,phoneNumber,address,farmerName)
    console.log(this.farm.push(farmId,farmName,farmerName,phoneNumber,address))
}
};
let farm1=new addFarm(389122,"plot1","Kizito",28934,"0745678239")
console.log(farm1)
 let farm2=new addFarm(34567,"plot2","wingu",9754,"0732145678")
console.log(farm2)

class removeFarm extends Mkulima{
    constructor(farmId){
        super(farmId)
        this.farm.unshift(farmerId)
    }
}
let farm3=new addFarm(389122,"plot1","Kizito",28934,"0745678239")
console.log(farm3)


let farm4={
    farmId:9087,
    farmName:"plot3",
    farmerName:"Mercy",
    phoneNumber:"0734528458",
    address:3666466,
    set farm4(updateFarm){
        return this.farm4=updateFarm
    }

};
console.log(farm4)
// getFarm
let farm5={
    farmId:9089,
    farmName:"plot4",
    farmerName:"Mary",
    phoneNumber:"0734578458",
    address:3666666,
    get farm5(){
        return this.farm5=getFarm
    }
};
console.log(farm5)
// addProduct
class addProduct extends Mkulima{
    constructor(productId,name,price){
    super(productId,name,price);
    console.log(this.product.push(productId,name,price));
}
 };
let product1=new addProduct(389129,"maize",50);
console.log(product1);
 let product2=new addProduct(389629,"passion",100);
 //console.log(product2);
//removeProduct
 class removeProduct extends Mkulima{
 constructor(productId){
super(productId)
this.product.unshift(productId)
    }
};
let product3=new addProduct(380122,"orange",60)
//console.log(product3)

let product={
    productId:890,
    name:"carrots",
    price:356,
   get getProduct(){
        return this.productId
    }
};
console.log(product.getProduct)

function productList(){
    var busket=""
    return (busket);
}
let items=["yarms:150,spinach:100,tomatoes:200,sorghum:400"];
console.log(items)
let result=productList(items);
 console.log(result)

// function calculateOrderCost(productId,quality){
//     var totalCost=this.product.find(totalCost=>totalCost.product==productId)
//     return totalCostPrice*quantity
// }
// console.log()
