import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: String,
    image: String, // Base64-encoded image
});

const Image = mongoose.model("Image", imageSchema);

export default Image;  // ✅ Fix: Add `export default`
