import { Router } from 'express';
import { UserControlller } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController'

const router = Router();

const userController =  new UserControlller();
const surveyController = new SurveysController();

router.post("/users", userController.create);

router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);

export { router };