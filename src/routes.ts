import { Request,Response} from 'express'
import Course from './CreateCourseService';

export function createCourse(request:Request,response:Response){
    
    Course.execute({
        name:'Node',
        educator:'Alex',
        duration:10
       
    })
    
    return response.send();
}