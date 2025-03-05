import { Router } from 'express';
// import { registerUser , LoginUser, getUser, forgotPass, verifyToken, resetPass } from '../controllers/authController';
// import { validateRegiseter, validateLogin, validateForgot, validateReset } from '../middlewares/authMiddleware';
import isAuthenticated from '../middlewares/authenticated';


import isAdmin from '../middlewares/adminMiddleware';

import { validateAppointment } from '../middlewares/appointmentMiddleware';



const appointmentRouter = Router();


// register a user

// appointmentRouter.post('/schedule', isAuthenticated, isReceptionAdmin, validateAppointment,  scheduleAppointment);

// //get all appointments


// appointmentRouter.get("/all", isAuthenticated, getAppointments);

// //get unique appointment by uuid
// appointmentRouter.get("/unique/:uuid", isAuthenticated, getUniqueAppointment);

// //get all appointment made by a user
// appointmentRouter.get("/unique/patient/:upi", isAuthenticated, getUniquePatientAppointment);

// //edit unique appointment
// appointmentRouter.put("/unique/:uuid", isAuthenticated, updateUniqueAppointent);

// //cancel appointment
// appointmentRouter.put("/cancel/:uuid", isAuthenticated, cancelAppointment);




export default appointmentRouter;