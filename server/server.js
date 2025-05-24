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

app.get("/petbook", async function (request, response) {
  const query = await db.query(`SELECT * FROM petbook;`);
  const data = response.json(query.rows);
});
//setting it up with the database I created for the workshop - I will update this later in the process when I am ready to set up the new database (this was just allowing me to visualise data that was already there in the setup stage). if you are reading this, it means it's already updated (and hopefully updated correctly..)

app.post("/petbook", function (request, response) {
  const body = request.body;
  console.log(body);
  const query = db.query(
    `INSERT INTO petbook (user_name, favourite_pet, user_comment) VALUES($1, $2, $3)`,
    [body.user_name, body.favourite_pet, body.user_comment]
  );
  const data = response.json(query);
});

app.get("/petbookvotes", async (request, response) => {
  const myquery = await db.query(
    "SELECT favourite_pet, COUNT(favourite_pet) FROM petbook GROUP BY favourite_pet"
  );
  response.json(myquery.rows);
  response.json({ message: myquery });
});

//IT WORKS .. ٩(｡•́‿•̀｡)۶ .... on 8081/petbookvotes you can see the following: [{"favourite_pet":"Toad","count":"4"},{"favourite_pet":"William","count":"12"},{"favourite_pet":"Jam Sandwich","count":"3"}]
//I just need to figure out how to bring that to the client .. :thinking:
