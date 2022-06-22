import { Router } from "express";
//import { v4 as uuidV4 } from "uuid";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, response) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateSpecificationService(
        specificationsRepository
    );
    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

specificationsRoutes.get("/", (req, response) => {
    const all = specificationsRepository.list();

    return response.status(201).json(all);
});

export { specificationsRoutes };
