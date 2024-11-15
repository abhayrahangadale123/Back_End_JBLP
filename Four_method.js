let express = require("express");
let app = express()

// post method me medilewere.........................
app.use(express.json())


// get for medilewere.............................
app.use((req, res, next) => {
   // res.send("me hu  middle_ware securty")
   next();
})


app.get('/', (req, res) => {
   res.send("Hellooooooo")
})


app.post("/s", (req, res) => {
   console.log(req.body);
   res.send("posttttt");
});
app.listen(4000, () => {
   console.log("server create port numberrrrr: 4000");

})