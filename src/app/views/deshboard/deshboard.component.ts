import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { MovieAdmin } from '../../interfaces/movi-admin';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrl: './deshboard.component.css'
})
export class DeshboardComponent {

  constructor(private authService: ServiceService){}
  movieAdmin: MovieAdmin[] = [];
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.authService.getAllmovies().subscribe({
      next: (data: MovieAdmin[]) =>{
        console.log(data);
        
      }
    })
  }
}
