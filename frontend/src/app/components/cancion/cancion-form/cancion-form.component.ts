import { Component, OnInit } from '@angular/core';

import { Cancion } from '../../../interfaces/Cancion';
import { CancionService } from '../../../services/cancion/cancion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion-form',
  templateUrl: './cancion-form.component.html',
  styleUrls: ['./cancion-form.component.css']
})
export class CancionFormComponent  implements OnInit {
  

  cancion:Cancion={
    nombre:'',
    duracion:'',
    idArtista: '',
    urlPortada:'',
    urlYouTube:'',
    fechaLanzamiento:''

  };

  edit:boolean=false;

  constructor(
    private cancionService:CancionService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(){
    const params= this.activatedRoute.snapshot.params;
    if (params){
      this.cancionService.getCancion(params['id'])
        .subscribe(
          res=>{
            console.log(res);
            this.cancion=res;
            this.edit=true;
            console.log(this.edit);
          }
        )
    }

  }


  submitCancion(){
    this.cancionService.createCancion(this.cancion)
      .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/cancion'])
        },
        err => console.log(err)
      )
  }
  updateCancion(){
    if (this.cancion._id) {
      this.cancionService.updateCancionid(this.cancion._id, this.cancion)
        .subscribe(
          res => {
            console.log(res),
            this.router.navigate(['/cancion'])
          },
          err => console.log(err)
        );
    } else {
      console.log('ID de la canción no definido');
    }
  }

}
