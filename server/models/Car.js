
import mongoose, { mongo } from "mongoose";


const {ObjectId} =mongoose.Schema.Types

const carSchema = new mongoose.Schema({
  owner: { type: ObjectId, ref: "user" },
  brand: { type: String, requied: true },
  model: { type: String, requied: true },
  image: { type: String, requied: true },
  year: { type: String, requied: true },
  category: { type: String, requied: true },
  seating_capacity: { type: String, requied: true },
  fuel_type: { type: String, requied: true },
  transmission: { type: String, requied: true },
  pricePerDay: { type: String, requied: true },
  location: { type: String, requied: true },
  description: { type: String, requied: true },
  isAvaliable: {type:Boolean, default:true}
},{timestamps:true});

const car =mongoose.model('Car', carSchema)

export default Car;