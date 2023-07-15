import { Component, OnInit } from '@angular/core';

import {  Album } from '../../../interfaces/Album';
import { AlbumService } from '../../../services/album/album.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit  {

  album:Album={
    nombre:'',
    cancionPopular:'',
    idArtista: '',
    urlPortada:'',
    urlAlbum:'',
    fechaLanzamiento:''
  };

  edit:boolean=false;

  constructor(
    private albumService:AlbumService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(){
    const params= this.activatedRoute.snapshot.params;
    if (params){
      this.albumService.getAlbum(params['id'])
        .subscribe(
          res=>{
            console.log(res);
            this.album=res;
            this.edit=true;
            console.log(this.edit);
          }
        )
    }

  }


  submitAlbum(){
    this.albumService.createAlbum(this.album)
      .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/album'])
        },
        err => console.log(err)
      )
  }
  updateAlbum(){
    if (this.album._id) {
      this.albumService.updateAlbumid(this.album._id, this.album)
        .subscribe(
          res => {
            console.log(res),
            this.router.navigate(['/album'])
          },
          err => console.log(err)
        );
    } else {
      console.log('ID del álbum no definido');
    }
  }
}
