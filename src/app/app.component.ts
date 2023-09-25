import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images: any[] = []
  imageIndex!: number
  preview!: "";
  getImage(event: any) {
    let files = event.target.files
    let slideLength = this.images.length + files.length;
    if (slideLength > 5) {
      let limit = 5 - this.images.length;
      for (let x = 0; x < limit; x++) {
        let file = files[x]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.images.push(reader.result)
        }
      }
    } else {
      for (let x = 0; x < files.length; x++) {
        let file = files[x]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.images.push(reader.result)
        }
      }
    }
  }
  perviewImage(index: number) {
    this.preview = this.images[index]
    this.imageIndex = index
  }
  deleteimage() {
    this.images.splice(this.imageIndex, 1)
    if(this.images.length == this.imageIndex){
      --this.imageIndex
      this.preview = this.images[this.imageIndex];
    }else{
      this.preview = this.images[this.imageIndex];
    }
  }
  back(){
    --this.imageIndex
    this.preview = this.images[this.imageIndex];
  }
  next(){
    ++this.imageIndex
    this.preview = this.images[this.imageIndex];
  }
}
