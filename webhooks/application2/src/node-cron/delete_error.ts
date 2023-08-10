import fs from "fs";
import cron from "node-cron";
import path from "path";

export const task = cron.schedule("* */2 * * *", () => {
  const filePath = path.join(__dirname, "../../error.log");
  console.log(filePath);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Deleted ${filePath}`);
  });
});
