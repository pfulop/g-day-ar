import WebSocket, { AddressInfo } from "ws";
import ip from "ip";

const wss = new WebSocket.Server({ port: 3000 });
console.log((wss.address() as AddressInfo).port);
console.log(`The host IP is: ${ip.address()}`);

const board = {
  requested: 0
};

wss.on("connection", (ws: WebSocket) => {
  console.log("a user connected");
  ws.on("message", (data: string) => {
    const { type, payload } = JSON.parse(data);
    console.log(type, payload);
    ws.send(JSON.stringify({ type: "boardUpdate", payload: { board } }));
  });
});
