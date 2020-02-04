import {Component, OnInit, ViewChild} from '@angular/core';
import {Track} from '../../model/Track';
import {Howl} from 'howler';
import {IonRange} from '@ionic/angular';

//
// Documentation Auxietre Francois composant Musique
// ce composant permet de gérer une playlist et de joueur des morceaux
// pour l'instant les musiques sont dans le dossier assets
// mais l'utilisation du plugin file permetttra d'acceder aux musiques de l'application

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
    activeTrack: Track = null; // chanson courante
    player: Howl = null; // l'import de Howler permet de créer la classe Howl
    isPlaying = false; // verification que la chanson est en cours pour eviter de jouer une musique
    // en surimpression d'une autre chanson
    progress: number; // barre de progression 0 à 100 pour voir une barre de défilement de la musique
    // on peut cliquer directement dans la barre pour avancer dans la musique

    // Trois chansons sont ajoutées en dur, le plugin File permettra d'ajouter à cette liste des nouvelles chansons
    @ViewChild('range', {static: false}) range: IonRange;
    playlist: Track [] = [
        {
            name: 'bensound-birthofahero: ',
            path: './assets/mp3/bensound-birthofahero.mp3'
        },
        {
            name: 'bensound-evolution: ',
            path: './assets/mp3/bensound-evolution.mp3'
        },
        {
            name: 'bensound-memories: ',
            path: './assets/mp3/bensound-memories.mp3'
        },
    ];


    constructor() {
    }


    ngOnInit() {
    }

    // lancement d'une chanson(track)
    start(track: Track) {

        // cas ou une chanson est déjà jouée on l'arête
        if (this.player) {
            this.player.stop();
        }
        // creation d'un nouvelle chanson
        this.player = new Howl({
            src: [track.path],
            onplay: () => {
                console.log('ca play');
                this.isPlaying = true;
                this.activeTrack = track;
                this.updtadeProgress();
            }
            ,
            onend:
                () => {
                    console.log('ca pause');
                }

        });
        this.player.play();
    }

    // on passe du systeme d'icone play au système de pause
    togglePlayer(pause) {
        this.isPlaying = !pause;
        if (pause) {
            this.player.pause();
        } else {
            this.player.play();
        }
    }

    // on passe à la chanson suivant avec pour eviter les erreurs on verifie si on est à la fin de la liste
    next() {
        const index = this.playlist.indexOf(this.activeTrack);
        if (index !== this.playlist.length - 1) {
            this.start(this.playlist[index + 1]);
        } else {
            this.start(this.playlist[0]);
        }
    }

    // de meme pour une chanson précedente avec le cas pour la première chanson qui peut faire une erreur
    prev() {
        const index = this.playlist.indexOf(this.activeTrack);
        if (index > 0) {
            this.start(this.playlist[index - 1]);
        } else {
            this.start(this.playlist[this.playlist.length - 1]);
        }
    }

    // avancement et lien avec la barre de progression
    seek() {
        const newValue = +this.range.value;
        const duration = this.player.duration();
        this.player.seek(duration * (newValue / 100));
    }

    // mmise à jour de la barre de progression de la chanson
    updtadeProgress() {
        const seek = this.player.seek();
        this.progress = (seek / this.player.duration()) * 100 || 0;
        setTimeout(() => {
            this.updtadeProgress();
        }, 100);
    }

    // bouton stop pour l'instant seul pause est appeler.
    stopMusic(track: Track) {
        console.log('stop');
    }
}
