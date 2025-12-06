const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectdb = require("./src/Db");

dotenv.config();

connectdb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175"
    ],
    credentials: true,
    methods: ["GET","POST","PUT","PATCH"]
}));

app.get("/", (req, res) => {
    res.send("Vingo backend running!");
});

app.use("/user", require("./src/route/AuthRoute"));
app.use("/shop", require("./src/route/ShopRoute"));
app.use("/item", require("./src/route/ItemRoute"));
app.use("/order", require("./src/route/OrderRoute"));

module.exports = app;
