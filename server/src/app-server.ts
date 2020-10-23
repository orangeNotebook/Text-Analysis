import express, {Request, Response} from "express"
import * as path from "path";
import analysis from "./index"

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) :void => {
    res.render("index");
});

app.get("/express-server", (req: Request, res: Response) :void =>{
  res.send( { express: 'Express server connected to react' })
})

app.post("/analysis", (req: Request, res: Response) :void => {
    console.log("recieved: " + req.body.name)
    let analysedText = analysis((req.body.name).toLowerCase());
    res.send(analysedText)
});

app.set("title", "Product Finder");
app.set("view engine", "pug");
app.set("views", "./out/views");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
