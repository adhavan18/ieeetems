import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import Image from "./models/ImageModel.js";
import path from "path";

import { connectDB } from "./config/db.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Ensure JSON parsing

// Upload Image by Path
app.post("/upload", async (req, res) => {
    try {
        const { name, image } = req.body; // image contains the file path

        // Convert Windows path to cross-platform path
        const imagePath = path.resolve(image);

        if (!fs.existsSync(imagePath)) {
            return res.status(400).json({ error: "Image file does not exist" });
        }

        // Read and convert to Base64
        const imgData = fs.readFileSync(imagePath);
        const base64Image = imgData.toString("base64");

        // Save to MongoDB
        const newImage = new Image({ name, image: base64Image });
        await newImage.save();

        res.json({ message: "Image uploaded successfully!", imageId: newImage._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/images/name/:name', async (req, res) => {
    try {
        const images = await Image.find({ name: req.params.name });

        if (!images.length) {
            return res.status(404).json({ error: "No images found for this name" });
        }

        res.json({ name: req.params.name, images: images.map(img => img.image) });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Retrieve Image (Base64)
app.get("/images/:id", async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        res.json(image);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log("🚀 Server started at http://localhost:5000");
    connectDB();
});
