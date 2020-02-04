import {Component, OnInit} from '@angular/core';
import {ElementTimeLine} from '../model/elementTimeline';
import {Dice} from '../model/Dice';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker/ngx';
import {ActionSheetController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

// documentation francois auxietre
// module principal dans lequel j'ai mis la mise en page de tout les modules grace a une ion-grid
// et des ion-list et ion_item

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    timeLineBoolean: any;  // pickImage activation de la time line sur le bouton
    numberEntries = 0; // nombre d'entrées une entrées etant un element time line
    color: false; // color pour un futur css
    size: 40; //
    entries: ElementTimeLine[] = []; // tableau des element de la time line
    private deList: Dice [] = []; // liste des dés
    private pnjList: string []; // liste des personnages non joueurs (monstres etc) les noms
    private pjList: string []; // liste des joueurs (amis), leurs noms
    private pj: []; // tableau des personages pour un ajout futur
    private pnj: []; // tableau des personnages non joueurs
    private de6: Dice; // un dé 6 faces pour une initialisation des dés prefabs
    private de4: Dice; // un dé 4 faces (assez courant
    private de10: Dice; // un dé 10 faces


    hidden: boolean; // booleen pour cache les boutons eye ici
    musicBool: boolean; // boolen pour activer ou desactiver le pop up de la fenetre musique
    imageResponse: any; // pour l'ajout futur de l'image de fond (plugin image picker pour l'instant erreur de droit)
    options: any; // les options pour l'ajout d'image
    croppedImagepath = ''; // pour l'image futur
    isLoading = false; // verification que l'image sera bien loader en asynctask avant de l'afficher pour ne pas avoir d'erreur

    // option pour l'image future
    imagePickerOptions = {
        maximumImagesCount: 1,
        quality: 50
    };

    // permet en passant par le constructeur d'acceder au fichier du telephone ou de l'ordinateur ou de la tablette
    constructor(private camera: Camera,
                public actionSheetController: ActionSheetController,
                // private file: File,
                // private imagePicker:
    ) {
    }

    // initialisation des dés et ajouts à la liste des dés
    ngOnInit() {
        this.musicBool = false;
        this.timeLineBoolean = false;
        this.de6 = new Dice();
        this.de6.deValue = 6;
        this.de6.quantity = 2;
        this.de4 = new Dice();
        this.de4.deValue = 4;
        this.de4.quantity = 2;
        this.de10 = new Dice();
        this.de10.deValue = 10;
        this.de10.quantity = 1;
        this.deList.push(this.de6);
        this.deList.push(this.de4);
        this.deList.push(this.de10);
    }

    // activation de la timeline
    activateTimeLine() {
        this.timeLineBoolean = true;
        console.log(this.timeLineBoolean.toString());
    }

    //desactivation
    desactivateTimeLine() {
        this.timeLineBoolean = false;
    }

    // ajout d'une entre à la time line (titre et description)
    addEntry() {
        this.numberEntries++;
        const entry = {id: 0, header: '', description: '', show: true};
        this.entries.push(entry);
    }

    // suppression de la dernière entree dans la time line
    removeEntry() {
        if (this.numberEntries > 0) {
            this.numberEntries--;
        }
        this.entries.pop();
    }

    // supression d'une entrée spécifique grace à un element
    removeSpecificEntry(element: ElementTimeLine) {
        this.entries = this.entries.filter(elem => {
            return elem !== element;
        });
    }


    removePnj() {

    }

    removePj() {

    }

    addPj() {
        console.log('' + this.pj);
        this.pnjList.push('test');
        // this.pnj;
    }

    addPnj() {
        console.log('' + this.pnj);
        this.pjList.push('test');
    }

    activateMusic() {
        console.log('musique');
        if (this.musicBool) {
            this.musicBool = false;
        } else {
            this.musicBool = true;
        }
    }

    pickImage(sourceType) {
        // const options: CameraOptions = {
        //     quality: 100,
        //     sourceType: sourceType,
        //     destinationType: this.camera.DestinationType.FILE_URI,
        //     encodingType: this.camera.EncodingType.JPEG,
        //     mediaType: this.camera.MediaType.PICTURE
        // }
        // this.camera.getPicture(options).then((imageData) => {
        //     // imageData is either a base64 encoded string or a file URI
        //     // If it's base64 (DATA_URL):
        //     // let base64Image = 'data:image/jpeg;base64,' + imageData;
        // }, (err) => {
        //     // Handle error
        // });
    }

    getImages() {
        // this.pickImage(sourceType);
    }

    async selectImage() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Select Image source',
            buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
                {
                    text: 'Use Camera',
                    handler: () => {
                        this.pickImage(this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }
}

