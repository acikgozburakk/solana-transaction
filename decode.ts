import dotenv from "dotenv";
import bs58 from "bs58";

dotenv.config();

if (!process.env.KEY) {
  throw new Error("Environment variable KEY is not defined");
}

const kp = bs58.decode(process.env.KEY);

console.log(kp);
