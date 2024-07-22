const express = require("express");
const router = express.Router({ mergeParams: true })

const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js")
const Review = require("../models/review.js");
const Listing = require("../models/listing");

const reviewController = require("../controllers/reviews.js")


// post Reviews route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview))

//delete comment route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));


module.exports = router;