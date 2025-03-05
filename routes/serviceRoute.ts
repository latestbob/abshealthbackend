import { Router } from 'express';

import isAuthenticated from '../middlewares/authenticated';
import { createService } from '../controllers/serviceController';




const serviceRouter = Router();


// register a user

serviceRouter.post('/create',  createService);

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




export default serviceRouter;