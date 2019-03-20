const express = require("express");
const router = express.Router();
const passport = require("passport");
const Journey = require("../../models/Journey");
const Photo = require("../../models/Photo");
const validatePhotoInput = require("../../validation/photos");
const NodeGeocoder = require("node-geocoder");
const geocoder = NodeGeocoder({ provider: "openstreetmap" });
const upload = require("../../services/file-upload");

router.get("/test", (req, res) =>
  res.json({ msg: "This is the photos  route" })
);

router.post(
  "/",
  upload.single("image"),
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (req.body.journeyId === undefined) {
      return res
        .status(400)
        .json({ journey: "Photo must be attached to a journey" });
    }

    let photo = {};
    photo.city = req.body.city;
    photo.country = req.body.country;
    photo.date = req.body.date;
    photo.journeyId = req.body.journeyId;
    photo.description = req.body.description;
    photo.url = req.file.location;

    const { errors, isValid } = await validatePhotoInput(photo);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    let data = await geocoder.geocode(photo.city);

    filteredData = data.filter(function(entry) {
      return entry.country === photo.country;  
    });

    // Use filteredData once we ensure that the country (or country code) is being 
    // sent correctly from the frontend.
    if (data.length === 0) {
      errors.location = "Enter a valid city/country location";
      return res.status(400).json(errors);
    }
    const firstResult = data[0];
      
    const journeyPhotos = await Photo.find({journeyId: photo.journeyId});
    journeyPhotos.forEach( (currPhoto) => { 
      if (currPhoto.longitude === firstResult.longitude && currPhoto.latitude === firstResult.latitude) {
        errors.location = "Only one picture per city in a photo journey!"
      }
      if (currPhoto.photoDateTime === new Date(photo.date)) {
            errors.date = "Only one picture per day in a photo journey!"
      }
    });
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const newPhoto = new Photo({
      photoUrl: photo.url,
      city: photo.city,
      region: photo.province || null,
      country: photo.country,
      photoDateTime: new Date(photo.date),
      description: photo.description,
      latitude: firstResult.latitude,
      longitude: firstResult.longitude,
      journeyId: photo.journeyId
    });

    newPhoto.save(function(err, newPhoto) {
      if (err) {
        return res.status(400).json(err);
      } else {
        return res.status(200).json(newPhoto);
      }
    });
  }
);

module.exports = router;
