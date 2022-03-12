const express = require("express");
const router = express.Router();

const {
  addcomment,
  allComment,
  viewoneComment,
  deleteComment,
} = require("../controllers/comment");

router.post("/admin/addcomment", addcomment);
//router.post("/admin/editCat/:id", editCat);
router.get("/admin/viewoneComment/:id", viewoneComment);
router.get("/admin/allComment", allComment);
router.get("/admin/deleteComment/:id", deleteComment);

module.exports = router;
