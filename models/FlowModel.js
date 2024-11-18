import mongoose from "mongoose";

const Flow = new mongoose.Schema({
    userId: String,
    currentStage: String,
    finalOutcome: String,
    logs: [String],
    createdAt: { type: Date, default: Date.now },
});

const FlowModel = mongoose.model("Flow", Flow);

export default FlowModel;
