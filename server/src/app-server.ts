import express, {Request, Response} from "express"
import * as path from "path";
import analysis from "./index"

const app = express();
const port = 4000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) :void => {
    res.render("index");
});

app.post("/analysis", (req: Request, res: Response) :void => {
    let analysedText = analysis((req.body.text).toLowerCase());
    res.send(analysedText)
});

app.set("title", "Product Finder");
app.set("view engine", "pug");
app.set("views", "./out/views");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
