import WebSocket, { AddressInfo } from "ws";
import ip from "ip";

const wss = new WebSocket.Server({ port: 3000 });
console.log((wss.address() as AddressInfo).port);
console.log(`The host IP is: ${ip.address()}`);

type Note = {
  id: string;
  content: string;
  color: string;
  position: any;
};

type Board = {
  notes: Note[];
};

const board: Board = {
  notes: []
};

wss.on("connection", (ws: WebSocket) => {
  console.log("a user connected");
  ws.on("message", (data: string) => {
    const { type, payload } = JSON.parse(data);
    if (type === "addNote") {
      board.notes.push(payload);
    }
    if (type === "editNote") {
      const note = board.notes.find(n => n.id === payload.id);
      if (note !== undefined) {
        note.position = payload.position;
      }
    }
    ws.send(JSON.stringify({ type: "boardUpdate", payload: { board } }));
  });
});
