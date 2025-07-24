import express from "express";
import { signup } from "../controllers/auth.controller.js"
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { onboard } from "../controllers/auth.controller.js";

const router = express.Router()

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard)

//forget-password



//checks if user is logged in or not
router.get("/me", protectRoute, (req,res) => {
    res.status(200).json({
        success:true,
        user: req.user
    });
})



export default router