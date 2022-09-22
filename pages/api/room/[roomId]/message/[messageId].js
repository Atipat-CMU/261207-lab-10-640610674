import { writeDB, readDB } from "../../../../../backendLibs/dbLib";

export default function roomIdMessageIdRoute(req, res) {
  const rooms = readDB();
  //read value from URL
  const roomId = req.query.roomId;
  const messageId = req.query.messageId;
  const roomIndex = rooms.findIndex((room) => room.roomId === roomId);
  if (roomIndex == -1) {
    return res.status(404).json({ ok: false, message: "Invalid room id" });
  }

  const messageIndex = rooms[roomIndex].messages.findIndex(
    (message) => message.messageId === messageId
  );
  if (messageIndex == -1) {
    return res.status(404).json({ ok: false, message: "Invalid message id" });
  }

  rooms[roomIndex].messages.splice(messageIndex, 1);
  writeDB(rooms);
  return res.json({ ok: true });
}
