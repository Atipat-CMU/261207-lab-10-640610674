import { readDB } from "../../backendLibs/dbLib";

export default function roomRoute(req, res) {
  const rooms = readDB();
  rooms = data.map((room) => {
    return { roomId: room.roomId, roomName: room.roomName };
  });
  return res.json({ ok: true, rooms });
}
