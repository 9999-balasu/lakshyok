
/*mport mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {type:String, required:true },
    description: {type:String, required:true },
    price: {type: Number, required:true},
    image: {type: Array ,required:true},
    category: {type: String,required:true},
    subCategory: {type: String,required:true},
    sizes: {type: Array,required:true},
    bestseller: {type:Boolean},
    date: {type:Number, required:true}

})

const productModel = mongoose.models.product || mongoose.model("product" , productSchema);

export default productModel*/



import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true }, // Explicitly define as an array of strings
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true }, // Assuming sizes are strings
  bestseller: { type: Boolean},
  date: { type: Number, required:true } // Automatically set the current date if none is provided
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
