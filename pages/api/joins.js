import nc from "next-connect";
import JoinUs from "../../models/JoinUs";
import db from "../../utils/db";

const handler = nc();
handler.get(async (req, res) => {
  await db.connect();
  const joinUs = await JoinUs.find({});
  await db.disconnect();
  if (joinUs.length > 0) {
    res.send(joinUs);
  } else {
    res.send({
      error: "Server Error",
    });
  }
});

export default handler;
