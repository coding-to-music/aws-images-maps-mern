# aws-images-maps-mern

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/aws-images-maps-mern

https://aws-images-maps-mern.herokuapp.com

## The Team

https://myphotojourney.herokuapp.com/

by

Mason Chinkin https://github.com/MasonChinkin

https://github.com/MasonChinkin/MyPhotoJourney

[Mason Chinkin, a.k.a. "The visualizer"](https://github.com/MasonChinkin)

- d3.js map, mongoose.js backend, express.js map api

[Nick Howlett, a.k.a. "The authorizer"](https://github.com/Nick-Howlett)

- Photo Metadata, End to end user auth, profile page, Heroku

[Louis Leon, a.k.a. "The validator"](https://github.com/Louis-C-Leon)

- Photo uploading/validation, gps api

[Drew Engelstein, a.k.a. "The uploader"](https://github.com/ase1210)

- AWS, photo uploading, upload forms

# MyPhotoJourney

[Live Demo](https://myphotojourney.herokuapp.com "MyPhotoJourney")

Hello! Thanks for checking out our MERN stack project.

MyPhotoJourney is a MERN full stack app that lets you upload photos from a trip, visualize them on a map, and share it for all to see!

## Index

- [The Team](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#The-Team)
- [Technologies](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#technologies)
- [Highlights](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#highlights)
  - [Storing uploaded photos on AWS](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#Storing-uploaded-photos-on-AWS)
  - [Making a journey](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#Making-a-journey)

## Technologies

- MERN stack: MongoDB, Express.js, React/Redux, Node.js
- d3.js for mapping the journey
- AWS with multer.js for uploading and storing users' photos
- node-geocoder.js + OpenStreetMap to fetch gps locations based on user input
- End to end user auth with BCrypt and passport
- mongoose.js backend schema

## Highlights

### Storing uploaded photos on AWS

Storing uploaded photos on AWS was the biggest challenge faced by the team. Louis and Drew worked for over two days with multer.js to build a bug free, reliable backend framework to validate and upload photos to AWS before saving the photo URL to our MongoDB database.

Below is a code snippet of our backend route that first uploads the image to AWS, validates the user inputs, and then fetches the geo-location for the provided city and country before saving the photo to our DB:

```Javascript
router.post("/", upload.single("image"), passport.authenticate("jwt", { session: false }),
  async (req, res) => {
  ...
  ...
  const { errors, isValid } = await validatePhotoInput(photo);
  ...
  ...
  let options = { city: photo.city, country: photo.country };
  let data = await geocoder.geocode(options);

  if (data.length === 0) {
    errors.location = "Enter a valid city/country location";
    return res.status(400).json(errors);
  }

```

![](https://github.com/MasonChinkin/MyPhotoJourney/blob/dev/frontend/public/photoJourneyPhotoUpload.gif?raw=true)

### Making a journey

After photos are validated, uploaded to AWS, and saved to MongoDB with their associated journey, the user is taken to the journey page, where we used params to fetch those photo URLs for the journey.

![](https://github.com/MasonChinkin/MyPhotoJourney/blob/dev/frontend/public/photoJourneyUploadToMap.gif?raw=true)

## About the Website: Maper

- A location-based website using React as Frontend and NodeJs, ExpressJS as backend, and MongoDB as Database. On this website, I had use MapBox for the world map and React-Mapbox-gl for configuration. We can select the place where we had visited and added the photo URL, so the entry will be seen on the map and in the visited place area. We can delete or modify the changes in the Entry we had created. It is a responsive website with live location of a point on the map. The Backend is deployed on Heroku and the frontend is deployed on Netlify.

#### The Password for the Entry: maper01

## Technology Stack

- React js
- Node js
- Express js
- MongoDB
- MapBox, React Mapbox-gl
- Heroku
- Netlify
- Flexbox
- Material-ui

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/aws-images-maps-mern.git
git push -u origin main
```

## Heroku

```java
heroku create aws-images-maps-mern
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/aws-images-maps-mern?retryWrites=true&w=majority"

SECRET_OR_KEY = "";
S3BUCKET = "";
AWS_KEY = "";
AWS_SECRET_KEY = "";

```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== aws-images-maps-mern Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on aws-images-maps-mern will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== aws-images-maps-mern Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/aws-images-maps-mern/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/aws-images-maps-mern/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
