const express = require('express');
const QRCode = require('qrcode')
const Path = require('path');

const app = express();
app.set("view engine",'ejs');
app.set("views",Path.join(__dirname,"views"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/qrcode',(req,res)=>{
    res.render('form.ejs');
})
app.get("/download-qr", async (req, res) => {
    const url = req.query.url;

    try {
        const qrImage = await QRCode.toBuffer(url);

        res.setHeader("Content-Type", "image/png");
        res.setHeader("Content-Disposition", "attachment; filename=qr-code.png");

        res.send(qrImage);
    } catch (err) {
        res.send("Error generating QR");
    }
});
app.post('/qrcode',(req,res)=>{
    const url = req.body.url;
    QRCode.toDataURL(url,(err,QRUrl)=>{
        if(err) res.send("somethig went wrong");
        res.render('qr.ejs',{
            QRUrl,
        qrText:url});
    })
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
