import { Component, OnInit, Input } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
import { Photo } from 'src/app/_models/photo';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-photo-editore',
  templateUrl: './photo-editore.component.html',
  styleUrls: ['./photo-editore.component.css']
})
export class PhotoEditoreComponent implements OnInit {
@Input() photos: Photo[];
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;

  constructor(private authService: AuthService) { }

  ngOnInit() {
        this.initializeUploader();
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {  
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
     this.uploader.onSuccessItem = (item, response, status, Headers) => {
       if (response) {
         const res: Photo = JSON.parse(response);
         const photo = {
           id: res.id,
           url: res.url,
           dataAdded: res.dateAdded,
           description: res.description,
           isMain: res.isMain
        };
        this.photos.push(photo);
       }
     };
  }
}
