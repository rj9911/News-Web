import mongoose from "mongoose";

export const newSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        unique: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
});

// DAtaBase -> Cluster
// Tables -> Collection

const News = mongoose.model('news',newSchema);

export default News;