// this router folder
const express = require("express");
//const { route } = require("express/lib/application");

// Route is used for making URL from your web page on which click which page is served this decided by route
const routes = express.Router();
const Detail = require("../models/details");
const slider = require("../models/Slider");
const Service = require("../models/service");
const { request } = require("express");
const Contact = require("../models/Contact");
const Joind = require("../models/Joind");
const Influancer = require("../models/influancer");
const Login = require("../models/login");
const md5 = require('md5');
// routes.get("/", async (req, res) => {
//   const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
//   const slides = await slider.findOne();
//   console.log(slides);
//   res.render("index", {
//     details: details,
//     slides: slides,
//   });
// });
routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  const slides = await slider.find();
  const services = await Service.find();
  const influancer = await Influancer.find();

 // console.log(services);
  res.render("index", {
    details: details,
    slides: slides,
    services:services,
    influancer: influancer,
  });
});

routes.get("/galleryinf", async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  const influancer = await Influancer.find();

  res.render("gallery", {
    influancer: influancer,
    details: details,
  });
});


routes.get("/contact", async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  const influancer = await Influancer.find();

  res.render("contact", {
    influancer: influancer,
    details: details,
  });
});

// routes.get('/error',async(req,res)=>{
//   const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
//   res.render("error",{
//     details:details,
//   });
// });

routes.post("/process-contact-form",async(req,res)=>{
   console.log("submitted successfully");
   console.log(req.body);
   // saving data to database comming from from
   try{
     const data = await 
      Contact.create(req.body);
     console.log(data);
     res.redirect("/");
   }
   catch(e)
   {
      console.log(e);
      res.redirect('/')
   }

});
routes.post("/contact",async(req,res)=>{
  console.log("submitted successfully");
  console.log(req.body);
  // saving data to database comming from from
  try{
    const data = await 
     Joind.create(req.body);
    console.log(data);
    res.redirect("/");
  }
  catch(e)
  {
     console.log(e);
     res.redirect('/')
  }

});






routes.get("/login", async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  const influancer = await Influancer.find();

  res.render("login", {
    influancer: influancer,
    details: details,
  });
});




                // validation of Admin


routes.post("/login", async(req,res)=>{
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
    try{
      const email = req.body.email;
      const password = md5(req.body.password);
     // console.log(`${email} password - ${password}`);
// Findone return promise either it is fulfill or not
   const useremail = await Login.findOne({email:email}); 
  // res.send(useremail.password);
  // console.log(useremail);
  if(useremail.password === password)
  {
     res.status(201).render("admin",{
      details: details,
     });
  }else{
    res.status(400).render("errorr",{
      details: details,
    });
  }
    }
    catch(error){
      res.status(400).render("errorr",{
        details: details,
      });
    }
     
});

                              // database updation

                              

//   routes.post('/update', async (req, res) => {
//     const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
//     try {
//       await slider.findOne(req.body.idno, {
//           title: req.body.title,
//           eventUrl: req.body.eventUrl,
//       });
//       // Send response in here
//       res.render("admin",{
//         details: details,
//       });

//     } catch(err) {
//         console.error(err.message);
//         res.send(400).render("errorr",{
//           details: details,
//         });
//     }
// });
routes.post('/sliderupdate', async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  try {
    // findoneandupdate sir id se find kr k update krega or updatemany sare ko
    await slider.findOneAndUpdate(req.body.idno, {
      //await slider.updateMany({
        title: req.body.title,
        eventUrl: req.body.eventUrl,
    });
    // Send response in here
    res.render("admin",{
      details: details,
    });

  } catch(err) {
      console.error(err.message);
      res.status(400).render("errorr",{
        details: details,
      });
  }
});



routes.post('/serviceupdate', async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  try {
    // findoneandupdate sir id se find kr k update krega or updatemany sare ko
    await Service.findOneAndUpdate(req.body.idno, {
      //await slider.updateMany({
        title: req.body.title,
        description: req.body.description,
    });
    // Send response in here
    res.render("admin",{
      details: details,
    });

  } catch(err) {
      console.error(err.message);
      res.status(400).render("errorr",{
        details: details,
      });
  }
});


routes.post('/inflauncerupdate', async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  try {
    // findoneandupdate sir id se find kr k update krega or updatemany sare ko
    await Influancer.findOneAndUpdate(req.body.idno, {
      //await slider.updateMany({
        iname: req.body.iname,
        iage: req.body.iage,
        icity: req.body.icity,
    });
    // Send response in here
    res.render("admin",{
      details: details,
    });

  } catch(err) {
      console.error(err.message);
      res.status(400).render("errorr",{
        details: details,
      });
  }
});

module.exports = routes;
