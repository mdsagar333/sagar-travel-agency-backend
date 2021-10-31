const express = require("express");
const cors = require("cors");
const app = express();
const mongo = require("mongodb");
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

    // creating database and collections
    const database = client.db("sagarTravel");
    const Tours = database.collection("Tours");
    const Orders = database.collection("Orders");

    // post API endpoint for creating a tour
    app.post("/api/tours/:adminId", async (req, res) => {
      try {
        const { adminId } = req.params;
        if (adminId === "NHmrL00oXvOa1vycTdF247Zo2th2") {
          const {
            name,
            country,
            duration,
            maxGroupSize,
            price,
            description,
            images,
          } = req.body;
          const tour = await Tours.insertOne({
            name,
            country,
            duration,
            maxGroupSize,
            price,
            description,
            images,
          });
          res.status(201).json({
            status: "success",
            data: {
              tour,
            },
          });
        } else {
          res.status(200).json({
            status: "fail",
            message: "unauthorized",
          });
        }
      } catch (error) {
        res.status(500).json({
          status: "fail",
          message: err.message,
        });
      }
    });

    // get API endpoint for getting all tour

    app.get("/api/tours", async (req, res) => {
      try {
        const tours = await Tours.find({}).toArray();
        res.status(200).json({
          status: "success",
          data: {
            tours,
          },
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          message: err.message,
        });
      }
    });

    // update API endpoint for all tours
    app.patch("/api/tours", async (req, res) => {
      try {
        const date = "Dec 10/21";
        const result = await Tours.updateMany(
          {},
          {
            $set: { date },
          }
        );
        res.status(200).json({
          status: "success",
        });
      } catch (error) {
        res.status(200).json({
          status: "success",
          bookedTour,
        });
      }
    });

    // get API endpoint for a user data
    app.get("/api/order/:userUID", async (req, res) => {
      try {
        const { userUID } = req.params;
        const bookedTour = await Orders.find({ userUid: userUID }).toArray();
        res.status(200).json({
          status: "success",
          bookedTour,
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          message: err.message,
        });
      }
    });

    // post API endpoint for creting an user after booking a tour

    app.post("/api/order", async (req, res) => {
      try {
        const {
          phoneNumber,
          address,
          userName,
          userEmail,
          userUid,
          tourID,
          date,
        } = req.body;
        const userData = {
          phone: phoneNumber,
          address,
          name: userName,
          email: userEmail,
          userUid,
          tourID,
          statusPending: true,
          date,
        };
        const result = await Orders.insertOne({ ...userData });
        res.status(201).json({
          status: "success",
          message:
            "Booking successful, we will notify you for your next actions.",
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          message: err.message,
        });
      }
    });

    // delete API for admin
    app.delete("/api/order/:orderID/:adminId", async (req, res) => {
      try {
        const { orderID, adminId } = req.params;
        if (adminId === "NHmrL00oXvOa1vycTdF247Zo2th2") {
          const id = new mongo.ObjectId(orderID);
          const result = await Orders.deleteOne({
            _id: id,
          });

          res.status(204).json({
            status: "success",
          });
        } else {
          res.status(200).json({
            status: "fail",
            message: "unauthorized",
          });
        }
      } catch (err) {
        res.status(500).json({
          status: "fail",
          message: err.message,
        });
      }
    });

    // update API for admin
    app.patch("/api/order/:orderID/:adminId", async (req, res) => {
      try {
        const { orderID, adminId } = req.params;
        if (adminId === "NHmrL00oXvOa1vycTdF247Zo2th2") {
          const id = new mongo.ObjectId(orderID);
          const result = await Orders.updateOne(
            {
              _id: id,
            },
            {
              $set: { statusPending: false },
            }
          );
          res.status(200).json({
            status: "success",
          });
        } else {
          res.status(200).json({
            status: "fail",
            message: "unathorized",
          });
        }
      } catch (err) {
        res.status(500).json({
          status: "fail",
          message: err.message,
        });
      }
    });

    // get all orders API endpoint

    app.get("/api/order", async (req, res) => {
      try {
        const allOrders = await Orders.find({}).toArray();
        res.status(200).json({
          status: "success",
          allOrders,
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          message: err.message,
        });
      }
    });

    // delete API endpoint for user

    app.delete("/api/order/:orderID", async (req, res) => {
      try {
        const { orderID } = req.params;
        const id = new mongo.ObjectId(orderID);
        const result = await Orders.deleteOne({
          _id: id,
        });

        res.status(204).json({
          status: "success",
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          message: err.message,
        });
      }
    });

    // g
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
