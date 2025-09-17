import express, {Express} from "express"
import http from "http"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose";
import router from "./router";

const port = 3000

const app: Express = express();

app.use(cors({
    credentials: true,
    methods: ["GET", "POST"],
    origin: "*",
}))

app.use(bodyParser.json())
app.use("/static", express.static(__dirname + '/static'));



const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

const MONGO_URL = "mongodb://127.0.0.1:27017/csgoSkinsDatabase"

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router())