import { Request, Response } from "express";
import { checkDate } from "../services/checkDateParam";
import { countQueries } from "../services/countQueries";

export const Count = (req: Request, res: Response) => {
  const dateParam = req.params["DATE_PREFIX"];
  const dateParamCheck = checkDate(dateParam);
console.log(dateParamCheck)
  const result =
    dateParamCheck.error === null
      ? { count: countQueries(dateParamCheck.data) }
      : dateParamCheck.error;
  res.send(result);
};
