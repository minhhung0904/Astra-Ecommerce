const { getAstraClient } = require("../connections/astradb");


const productsCollection = async () => {
  //console.log(await (await getAstraClient()).createCollection('users'))
  return (await getAstraClient()).collection('products')
}
const a = async() => {
  let Products = await productsCollection()
console.log(await Products.get())
}
a()

module.exports = {productsCollection}


/*  const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: {
    type: Object,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  sold: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Products', productSchema)  */