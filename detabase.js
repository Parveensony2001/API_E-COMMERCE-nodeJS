const productSchema = require("./models/schima");
const connectDB = require("./config/mongoos")
const products = require("./products.json");
const addData =async () =>{
    try {
        await productSchema.create(products);
        console.log("All deta succusfully added");
    } catch (error) {
        console.log("something erorr occur in addJSON");
    }
}
addData();
