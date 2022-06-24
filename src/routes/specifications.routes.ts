import { Router } from "express";
//import { v4 as uuidV4 } from "uuid";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";


const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
   return createSpecificationController.handle(request,response);
});

specificationsRoutes.get("/", (req, response) => {
    const all = specificationsRepository.list();

    return response.status(201).json(all);
});

export { specificationsRoutes };
