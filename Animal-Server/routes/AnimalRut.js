import express from 'express';
import AuthController from '../controllers/AuthController.js';
import ProfileController from '../controllers/ProfileController.js';
import checkIsUserAuthenticated from '../Middleware/authmiddleware.js';

const router = express.Router();

router.post("/user/register",AuthController.Register);
router.post("/user/login",AuthController.Login);

// Protected Route
router.get("/Profile/Data",checkIsUserAuthenticated,ProfileController.FetchDetails);



export default router;

