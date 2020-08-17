# Nodemailer Server
A ready to use server with Nodemailer already configured for gmail. Clone the repo and follow the instructions to set it up with your email and deploy it to Heroku.

## General info
The main purpose of this project is to make it easy for everybody to make full stack applications, or at least to have a server just for the purpose of handling contact forms without having to pay for a service.


## Technologies
<img title="Node.js 12" src="https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg" width="100" /> <img title="Express 4" src="https://uploads.toptal.io/blog/category/logo/25/express_js.png" width="100" /> <img title="Nodemailer" src="https://avatars0.githubusercontent.com/u/16486629?s=200&v=4" width="100" />

## Setup
1. Clone this repo. 
2. Install npm modules.
3. On the root folder, create a file named *.env*, with the following variables:
``` 
EMAIL_SENDER = // The email address you will use to send emails
EMAIL_SENDER_PASSWORD = // Password
EMAIL_RECEIVER = // The email address where you want to receive emails
```
4. [Allow the email sender to be used by less secure apps.](https://myaccount.google.com/lesssecureapps?pli=1)
5. Deploy to Heroku

## Code Examples
.env
``` 
EMAIL_SENDER = emailcreatedforthispurpose@gmail.com
EMAIL_SENDER_PASSWORD = pineapplePizza
EMAIL_RECEIVER = mypersonalemail@gmail.com
```

## Features
* Ready to use server
* Can be used to build full stack websites

## Status
Project is: Hopefully finished unless someone opens an issue :-)

## Inspiration
This project is possible thanks to [Nodemailer](https://nodemailer.com/)

## Contact
Created by [Francisco Chiarino](https://franciscochiarino.com) - feel free to contact me!