import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

//routes
app.get("restaurants", getAllRestaurants);
app.get("/restaurants/: restId", getRestaurantById);
app.delete("/restaurants/: restId", deleteRestaurant);
app.patch("/restaurants/: restId", updateRestaurant);
app.post("/restaurants", addRestaurant);

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000...");
});
