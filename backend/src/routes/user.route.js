// import express from "express";
// import { protectRoute } from "../middleware/auth.middleware.js";
// import { getRecommenedUsers } from "../controllers/user.controller.js";
// import { getMyFriends } from "../controllers/user.controller.js";
// import { sendFriendRequest } from "../controllers/user.controller.js";
// import { acceptFriendRequest } from "../controllers/user.controller.js";
// import { getFriendRequests } from "../controllers/user.controller.js";
// import { getOutgoingFriendReqs } from "../controllers/user.controller.js";

// const router = express.Router();
// router.use(protectRoute);

// router.get("/", getRecommenedUsers);
// router.get("/friends", getMyFriends);
// router.post("/friend-request/:id", sendFriendRequest);
// router.put("friend-request/:id/accept", acceptFriendRequest);


// router.get("/friend-requests", getFriendRequests);

// router.get("/outgoing-friend-requests", getOutgoingFriendReqs);



// export default router;


import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getRecommendedUsers,
  getMyFriends,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendReqs,
} from "../controllers/user.controller.js";

const router = express.Router();

// Apply auth middleware to all routes
router.use(protectRoute);

// Routes
router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);
router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);
router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);

export default router;
