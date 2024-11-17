import WebSocket from "ws";

const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-10-01";
const ws = new WebSocket(url, {
    headers: {
        "Authorization": "Bearer " + "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",
        "OpenAI-Beta": "realtime=v1",
    },
});

ws.on("open", function open() {
    console.log("Connected to server.");
    ws.send(JSON.stringify({
        type: "response.create",
        response: {
            modalities: ["text"],
            instructions: "Please assist the user.",
        }
    }));
});

ws.on("message", function incoming(message) {
    console.log(JSON.parse(message.toString()));
});