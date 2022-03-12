const express = require("express");
const router = express.Router();

const {
  addreply,
  allReply,
  viewoneReply,
  deleteReply,
  //allComment,
  //viewoneComment,
  // deleteComment,
} = require("../controllers/reply");

router.post("/admin/addreply", addreply);
router.post("/admin/editCat/:id", editCat);
router.get("/admin/viewoneReply/:id", viewoneReply);
router.get("/admin/allReply", allReply);
router.get("/admin/deleteReply/:id", deleteReply);

module.exports = router;
