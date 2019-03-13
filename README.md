# MyPhoto Journey

[Live Demo](https://myphotojourney.herokuapp.com "MyPhotoJourney")

Hello! Thanks for checking out our MERN stack project.

The team:

[Mason Chinkin, a.k.a. "The visualizer"](https://github.com/MasonChinkin)

[Nick Howlette, a.k.a. "The authorizor"](https://github.com/Nick-Howlett)

[Louis Leon, a.k.a. "The validator"](https://github.com/Louis-C-Leon)

[Drew Engelstein, a.k.a. "The uploader"](https://github.com/ase1210)

MyPhotoJourney is a MERN full stack app that lets you upload photos from a trip, visualize them on a map, and share it for all to see!

We conceived, designed, and built this app in less than 4 days, and plan on returning to it after graduating App Academy (early April) to round out its features.

## Index

* [Features](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#features)
* [Technologies](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#technologies)
* [Highlights](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#highlights)
  * [Photo Uploads](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#Storing-uploaded-photos-on-AWS)
  * [Photo Uploads](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#Making-a-journey)
  * [d3.js Map](https://github.com/MasonChinkin/MyPhotoJourney/blob/master/README.md#d3.js-Map)
  
## Features

* Secure user auth with BCrypt
* Create journeys and upload photos for that journey
* Map your journey, and see your photos by hovering over photo locations
* See your journeys from the profile page
* Anyone can see your journey if you share the url

* Coming soon- delete journeys
* Coming soon- Streamlined, better-validated location input
* Coming soon- Multiple photos for one location, multiple locations per date

## Technologies

* MERN stack: MongoDB, Express.js, React/Redux, Node.js
* d3.js for mapping the journey
* AWS with multer.js for uploading and storing user's photos
* node-geocoder.js + OpenStreetMap to fetch gps locations based on user input
* End to end user auth with BCrypt and passport

## Highlights

### Storing uploaded photos on AWS
Storing uploaded photos on AWS was the biggest challenge faced by the team. Louis and Drew worked for over two days with multer.js to build bug free, reliable backend framework to validate and upload photos to AWS before saving the photo URL to our MongoDB database.

BELOW IS CODE EXAMPLE OF HOW YOU ABSTRACTED SOMETHING TO GET IT WORKING

```Javascript
code here
```

![](https://github.com/MasonChinkin/MyPhotoJourney/blob/dev/frontend/public/photoJourneyPhotoUpload.gif?raw=true)

### Making a journey
After photos are validated, uploaded to AWS, and save to MongoDB with their associated journey, the user is taken to the journey page, where we used params to fetch those photo URLs for the journey.

![](https://github.com/MasonChinkin/MyPhotoJourney/blob/dev/frontend/public/photoJourneyUploadToMap.gif?raw=true)

![](https://github.com/MasonChinkin/MyPhotoJourney/blob/dev/frontend/public/photoJourneyMapMousover.gif?raw=true)
