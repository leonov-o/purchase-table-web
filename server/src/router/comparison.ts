import express from "express";
import {comparison} from "../controllers/comparison";

export default (router: express.Router) => {
    router.post("/api/comparison", comparison)
}