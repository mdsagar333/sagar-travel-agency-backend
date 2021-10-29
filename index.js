const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

const tourData = require("./data/tours");

app.use(cors());
app.use(express.json());

// db url
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tcz9h.mongodb.net/travelAgency?retryWrites=true&w=majority`;

// creating mongodb instance
const client = new MongoClient(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("sagarTravel");
    const Tours = database.collection("Tours");
    const Users = database.collection("Users");

    const doc = {
      name: "tour 1",
      price: 200,
    };

    // post API endpoint for creating a tour
    app.post("/api/tours", async (req, res) => {
      try {
        const { name, country, duration, maxGroupSize, price, description } =
          req.body;
        const tour = await Tours.insertMany();
        res.status(201).json({
          status: "success",
          data: {
            tour,
          },
        });
      } catch (error) {
        console.log(err);
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });

    // get API endpoint for getting all tour

    app.get("/api/tours", async (req, res) => {
      try {
        console.log(res);
        const tours = await Tours.find({}).toArray();
        res.status(200).json({
          status: "success",
          data: {
            tours,
          },
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });
  } finally {
    // await client.close()
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from server side");
});

app.listen(port, () => {
  console.log("Your app listening on port ", port);
});
