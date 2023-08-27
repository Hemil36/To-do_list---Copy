import express from "express" ;
import axios from "axios";
import bodyParser from "body-parser";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month= ["January","February","March","June","July","Auguest","September","October","November","December"]
const app = express();
const port = 3000;
var counter =0,counter1=0;
const arr =[];
const arr1=[];
app.use(express.static('public'));

const d= new Date();
let bv;
let bv1;
let c;
const p=[];
const p1=[];


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api",(req,res)=>{

    res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.render("index.ejs",{
        day : days[d.getDay()],
        date : d.getDate(),
        month : month[d.getMonth()],
        count : counter,
        checklist: bv,
    });
    counter=0;
    counter1=0;
    arr.length=0;
    arr1.length=0;
    p.length=0;
    p1.length=0;
  
   
    
})

app.post("/save",async(req,res)=>{

    var note = req.body["note"];
    arr.push(note);
    counter++;
    res.render("index.ejs",{
        day : days[d.getDay()],
        date : d.getDate(),
        month : month[d.getMonth()],

        count : counter,
        notes:arr,
    });
})

app.post("/work",async(req,res)=>{
   
    res.render("work.ejs",{
        day : days[d.getDay()],
        date : d.getDate(),
        month : month[d.getMonth()],
        count : counter1,
        notes:arr1,
    });

})

app.post("/Personal",async(req,res)=>{
    res.render("index.ejs",{
        day : days[d.getDay()],
        date : d.getDate(),
        month : month[d.getMonth()],
        count : counter,
        notes:arr,
    });

})

app.post("/wb",async(req,res)=>{

    var note = req.body["note"];
    arr1.push(note);
    counter1++;
    res.render("work.ejs",{
        day : d.getDay(),
        date : d.getDate(),
        month : month[d.getMonth()],
        count : counter1,
        notes:arr1,
    });
})

app.get("/count",async(req,res)=>{
    var c = counter;


    res.json(c);
})

app.get("/count1",async(req,res)=>{
     c = counter1;

    res.json(c);
})

app.post("/post",async(req,res,next)=>{
     bv = JSON.parse(req.body.Array);
     p.push(bv);

})

app.post("/post1",async(req,res,next)=>{
    bv1 = JSON.parse(req.body.Array);
    p1.push(bv1);

})

app.get("/checklist",async(req,res)=>{
    
    res.json({
        bv :p,
        
    })
    
})

app.get("/checklist1",async(req,res)=>{
    
    res.json({
        bv :p1,
        
    })
    
})

app.get("/count",async(req,res)=>{
    var c = counter;

    res.json(c);
})

app.get("/count1",async(req,res)=>{
     c = counter1;

    res.json(c);
})

app.listen(port,()=>{
    console.log("ok");
})

module.exports = app;
