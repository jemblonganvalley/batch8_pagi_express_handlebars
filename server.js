//import dependencies yang dibutuhkan
const express = require('express')
const cors = require("cors")
const hb = require("express-handlebars")
const app = express()
const path = require("path")

//set middleware 
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname , "public")))

//set view engine
app.set("views" , path.join(__dirname , "view"))
app.set("view engine" , "handlebars")
app.engine("handlebars" , hb({
    layoutsDir : `${__dirname}/view/layouts`,
    defaultLayout : "main_layout",
    partialsDir : `${__dirname}/view/components`
}))

//routing
app.get("/" , (req, res)=>{
    res.render("index" , {
        title : "home page",
        text : "Pesan dari server"
    })
})

app.get("/about" , (req,res)=>{
    res.render("about", {
        title : "about page"
    })
})

app.get("/showcase" , (req,res)=>{
    res.render("showcase" , {
        title : "showcase page"
    })
})

app.get("/contact" , (req,res)=>{
    res.render('contact', {
        title : "contact page"
    })
})

app.get("/send" , (req,res)=>{

    //tangkap query
    const nm = req.query.name
    const em = req.query.email
    const msg = req.query.message

    //render sekaligus lempar data
    res.render("contact", {
        email : em,
        name : nm,
        message : msg
    })

})

//listener / server yang dijalankan
app.listen(3000 , ()=>{console.log("server berjalan di port 3000")})