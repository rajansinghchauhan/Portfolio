import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { PROJECTS } from '../data/project.data';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() { }
  
    getProjectsDetails(): Project[] {
      return PROJECTS;
    }
  
}
