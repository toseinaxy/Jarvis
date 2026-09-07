const Microphone = require("node-microphone");

console.log("Jarvis hört zu...");

const microphone = new Microphone({
  rate: 48000,
  channels: 2
});

const micStream = microphone.startRecording();

micStream.on("data", (data) => {
  console.log("Audio empfangen:", data.length, "Bytes");
});

micStream.on("error", (err) => {
  console.log("Mikrofon Fehler:", err);
});
