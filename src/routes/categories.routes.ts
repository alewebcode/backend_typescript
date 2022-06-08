import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, response) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );
    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (req, response) => {
    const all = categoriesRepository.list();

    return response.status(201).json(all);
});

export { categoriesRoutes };
