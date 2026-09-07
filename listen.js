const recorder = require("node-record-lpcm16");

console.log("Jarvis hört zu...");

const recording = recorder.record({
  sampleRate: 48000,
  channels: 1
});

recording
  .stream()
  .on("data", (data) => {
    console.log("Mikrofonsignal erkannt:", data.length, "Bytes");
  })
  .on("error", (err) => {
    console.log("Mikrofon Fehler:", err);
  });
