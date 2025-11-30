import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { PROJECTS } from '../../data/project.data';
import { ProjectService } from '../../services/project';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
 projects!: Project[];

 constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjectsDetails();
  }

}
