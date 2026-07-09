import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://itsarnab12:Arnab031231@cluster0.tusuw4m.mongodb.net/Food Delivery",
    )
    .then(() => console.log("DB Connected"));
};
