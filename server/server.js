///Importing (make sure that type is set to module in package.json)
import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

//Configurations

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_STRING,
});

//console.log(db); // logging to make sure that the string is correct

app.listen(8081, function () {
  console.log("hello from 8081!");
});

app.get("/", function (request, response) {
  response.json({ message: "It's working ヽ(・∀・)ﾉ" });
});

app.get("/testing_table", async function (request, response) {
  const query = await db.query(`SELECT * FROM testing_table;`);
  const data = response.json(query.rows);
});
//setting it up with the database I created for the workshop - I will update this later in the process when I am ready to set up the new database (this was just allowing me to visualise data that was already there in the setup stage)

app.post("/testing_table", function (request, response) {
  const body = request.body;
  console.log(body);
  const query = db.query(
    `INSERT INTO testing_table (name, codename, number) VALUES($1, $2, $3)`,
    [body.name, body.codename, body.number]
  );
  const data = response.json(query);
});
