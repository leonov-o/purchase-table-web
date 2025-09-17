import express from "express";
import {platforms} from "../controllers/platforms";


export default (router: express.Router) => {
    router.get("/api/platforms", platforms)
}