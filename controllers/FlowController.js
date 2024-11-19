import Flow from "../models/FlowModel.js";

export const startFlow = async (req, res) => {
    try {
        const newFlow = new Flow({
            userId: "test_user",
            currentStage: "Initial",
            logs: ["Flow started"],
        });

        await newFlow.save();
        res.status(200).json(newFlow);
    } catch (err) {
        res.status(500).json({
            message: "Encountered the following error while initializing flow.",
            error: err.message,
        });
    }
};

export const updateFlow = async (req, res) => {
    const { flowID, stage, outcome, logs } = req.body;
    try {
        const flow = await Flow.findById(flowID);
        if (!flow) {
            return res.status(404).json({ message: "Flow not found" });
        }

        flow.currentStage = stage;
        flow.finalOutcome = outcome;
        flow.logs.push(logs);

        await flow.save();

        res.status(200).json(flow);
    } catch (err) {
        res.status(500).json({
            message: "Encountered the following error while updating flow.",
            error: err.message,
        });
    }
};
