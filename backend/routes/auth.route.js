import express from "express";
import {
    login,
    logout,
    signup,
    verifyEmail,
    forgotPassword, 
    resetPassword,
    checkAuth,  
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { CustomerReg, GetCustomers } from "../controllers/customer.controller.js";
import { AddPlans, showPlan } from "../controllers/plans.controller.js";


const router = express.Router();

// ..............authentication routes..............

router.get("/check-auth", verifyToken,checkAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forget-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

// ..............authentication routes end..............


// ...............customer routes....................

router.post("/register", CustomerReg);
router.post("/getcustomer", GetCustomers);

// ...............customer routes end................

// ...............plan routes........................

router.post("/addplan",AddPlans);
router.post("/showplan",showPlan);

// ...............plan routes end........................


export default router;