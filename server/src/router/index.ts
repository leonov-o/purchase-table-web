import express from "express";
import comparison from "./comparison";
import platforms from "./platforms";

const router = express.Router();

export default (): express.Router => {
    comparison(router);
    platforms(router);
    return router;
}