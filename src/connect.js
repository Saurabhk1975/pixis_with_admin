const mongoose = require("mongoose");
const details = require("./models/details");
const Detail = require("./models/details");
const Sliders = require("./models/Slider");
const Service = require("./models/service");
const Influancer = require("./models/influancer");
const influancer = require("./models/influancer");
const Login = require("./models/login");
const md5 = require("md5");
uri =
  "mongodb+srv://saurabh_1335:kk4VUZRItDe2utDc@cluster0.coqq8v7.mongodb.net/saurabh_1335?retryWrites=true&w=majority";

// DATA BASE  cONNECTION

const connectDB = () => {
  console.log("db connection");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // using of database schema
};

var password = "";

// Login.create({
//    uid:"saurabh1975k@gmail.com",
//    upass:md5(password),
// });


// influancer.create([
//   {
//     iname: "Sandeep Mahaehawari",
//     iage : "40",
//     icity:"New Delhi",
//     links: [
//         {
//             youtube: "27M",
//             facebook:"10k",
//             instagram:"5M",
//             url: "https://www.youtube.com/@SandeepSeminars",
//         },
//     ]
//   },
//   {
//     iname: "Bhuvan Bam",
//     iage : "30",
//     icity:"New Delhi",
//     youtube: "27M",
//     facebook:"10k",
//     instagram:"5M",
//     url: "https://www.youtube.com/@BBKiVines",
//   },
//   {
//     iname: "Khan Sir",
//     iage : "40",
//     icity:"Patna",
//     youtube: "27M",
//     facebook:"10k",
//     instagram:"5M",
//     url: "https://www.youtube.com/channel/UCatL-c6pmnjzEOHSyjn-sHA",
//   },


// ]);





// Service.create([
//   {
//     title: "Influencer Marketing",
//     description:
//       "We understand the power of social media and the impact that influencers have on their followers. That's why we work tirelessly to identify the right influencers who align with your brand values and message, ensuring a seamless integration of your product/service into their content.",
//     link: "",
//   },
//   {
//     title: "Facebook Add..",
//     description:
//       "Businesses run effective Facebook ads. Our team of experts has years of experience in creating and managing Facebook ads that drive results and generate leads.",
//     link: "",
//   },
//   {
//     title: "Google Add..",
//     description:
//       "We understand that Google is the largest search engine in the world, with billions of searches performed every day. That's why we work tirelessly to ensure that your Google ads appear at the top of relevant search results, reaching the right audience at the right time.",
//     link: "",
//   },
//   {
//     title: "Search engine optimization",
//     description:
//       "SEO, is the process of optimizing a website to increase its visibility and ranking in search engine results pages. The goal of SEO is to drive organic traffic to a website, ultimately leading to increased conversions and revenue.",
//     link: "",
//   },
//   {
//     title: "YouTube influencer",
//     description:
//       "We understand that Instagram is one of the most popular social media platforms in the world, with billions of active users every month.Our services include comprehensive ad targeting, ad creation, campaign management, and performance analysis ",
//     link: "",
//   },
//   {
//     title: "Web Devlopment",
//     description:
//       "Our services include website design, development, content creation, and optimization for search engines. We use the latest technologies and tools to ensure that your website is responsive, secure, and optimized for maximum performance.",
//     link: "",
//   },
// ]);

// Slider.create([
//   {
//     title:"Social media doesn`t fix anything, it just amplifies things.",
//     subTitle:"Creative without strategy is called art. Creative with strategy is called advertising",
//     imageUrl:"/static/images/bg.jpg",
//     eventUrl:"https://youtube.com/@careergyani",
//     class:"active",

//   },
//   {
//     title:"i am saurabh kumar",
//     subTitle:"i am currently pursuing my B.Tech",
//     imageUrl:"/static/images/fin2.jpg",
//     eventUrl:"https://youtube.com/@careergyani",
//     class:"",

//   },
//   {
//     title:"From lakshmi narain college of technology of science bhopal",
//     subTitle:"join our team",
//     imageUrl:"/static/images/img2.png",
//     eventUrl:"https://youtube.com/@careergyani",
//     class:"",

//   },

// ]);

// this is running only one time for creating schema in database

// details.create({
//   brandName: "pixis",
//   brandIconUrl: "https://cdn4.vectorstock.com/i/1000x1000/73/08/demo-sign-icon-demonstration-symbol-vector-10857308.jpg",
//   links: [
//     {
//       lable: "Home",
//       url: "/",
//     },
//     {
//       label: "Services",
//       url: "/services",
//     },
//     {
//       label: "Gallery",
//       url: "/Gallery",
//     },
//     {
//       label: "Contact",
//       url: "/contact",
//     },
//   ],
// });
module.exports = connectDB;
