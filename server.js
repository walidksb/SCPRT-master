const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const http = require("http")
const https = require("https")
const fs = require("fs")


// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "********@gmail.com",
    pass: ""
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});


// ------------------------

function checkPath(path) {
  const s = path.trim().toLowerCase();
  const isWeb = s.startsWith("http://") || s.startsWith("https://");
  return isWeb;
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
      https.get(url, (res) => {
          if (res.statusCode === 200) {
              res
                  .pipe(fs.createWriteStream(filepath))
                  .on("error", reject)
                  .once("close", () => resolve(filepath));
          } else {
              // Consume response data to free up memory
              res.resume();
              reject(
                  new Error(`Request Failed With a Status Code: ${res.statusCode}`)
              );
          }
      });
  });
}

router.post("/style", async(req, res) => {
  var input = req.query.input;
  console.log(checkPath(input));
  var style = req.query.style;
  var output = req.query.output;
  if (checkPath(input)) {
      // save the image to the server
      await downloadImage(input, "./public/input.jpg").then((filepath) => {
          // get full path of the server
          var path = __dirname + "/" + filepath;

          input = path;
          console.log(input);
      });
  }
  if (checkPath(style)) {
      await downloadImage(style, "style.jpg").then((filepath) => {
          var path = __dirname + "/" + filepath;
          style = path;
      });
  }
  console.log(style);
  console.log(output);
  const data = JSON.stringify({
      input: input,
      style: style,
      output: output,
  });
  const options = {
      hostname: "127.0.0.1",
      port: 5001,
      path: "/style_transfer_response",
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          // "Content-Length": data.length,
      },
  };
  const request = http.request(options, (response) => {
      response.on("data", async(d) => {
          process.stdout.write(d);
          res.json({ message: d });
      });
      response.on("end", () => {
          console.log("end");
      });
  });
  request.write(data);
  request.end();
});

router.get("/search", (req, res) => {
  const nasa_api = "https://images-api.nasa.gov/search?q=" + req.query.q;
  // call the api
  https
      .get(nasa_api, (response) => {
          let data = "";
          response.on("data", (chunk) => {
              data += chunk;
          });
          response.on("end", () => {
              const json = JSON.parse(data);
              const items = json.collection.items;

              const urls = items.map((item) => {
                  try {
                      return item.links[0].href;
                  } catch (e) {
                      return null;
                  }
              });
              // remove null values
              const filteredUrls = urls.filter((url) => url != null);
              res.json({ urls: filteredUrls });
              console.log(json.collection);
          });
      })
      .on("error", (err) => {
          console.log("Error: " + err.message);
      });
});


app.listen(5000, () => console.log("Server Running"));