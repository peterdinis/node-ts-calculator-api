import express, {Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("TEST");
})

app.listen(process.env.PORT || 4000, () => {console.log("server started");
})