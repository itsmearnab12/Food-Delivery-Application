import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://itsarnab12:arnab031231@cluster0.kl6pubq.mongodb.net/food-del",
    )
    .then(() => console.log("DB Connected"));
};
