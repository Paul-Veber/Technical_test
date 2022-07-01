import { Router, Request, Response } from "express";
import { Count } from "./controllers/queriesController";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Technical_test");
});

router.get("/queries/count/:DATE_PREFIX", Count);
