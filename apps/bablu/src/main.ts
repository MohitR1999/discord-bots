import dotenv from "dotenv";
dotenv.config();

// eslint-disable-next-line turbo/no-undeclared-env-vars
const str = process.env.SECRET_MSG
console.log(str)
