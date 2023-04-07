const express = require('express')
const cors = require('cors');
const User = require('./db')
const app = express();
app.use(cors());
app.use(express.json())



app.post("/register", async (req, resp) => {

    let user = new User(req.body)
    let result = await user.save()
    result=result.toObject()
    delete result.password
    


    resp.send(result)

})



app.post("/login", async (req, resp) => {

    // resp.send(req.body.password)

    // console.log(req.body.password)
    // console.log(req.body.email)

    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password")

        // resp.send(user)

        if (user) {
            resp.status(200).send("success")

        }
        else {
            resp.status(401).send("failed")
        }

    }
})


app.listen(2005)
