import {Component, OnInit, ViewChild} from '@angular/core';
import {Track} from '../../model/Track';
import {Howl} from 'howler';
import {IonRange} from '@ionic/angular';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
    activeTrack: Track = null;
    player: Howl = null;
    isPlaying = false;
    progress: number;
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

    start(track: Track) {
        if (this.player) {
            this.player.stop();
        }
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
        // this.activeTrack = track;
    }

    togglePlayer(pause) {
        this.isPlaying = !pause;
        if (pause) {
            this.player.pause();
        } else {
            this.player.play();
        }
    }

    next() {
        const index = this.playlist.indexOf(this.activeTrack);
        if (index !== this.playlist.length - 1) {
            this.start(this.playlist[index + 1]);
        } else {
            this.start(this.playlist[0]);
        }
    }

    prev() {
        const index = this.playlist.indexOf(this.activeTrack);
        if (index > 0) {
            this.start(this.playlist[index - 1]);
        } else {
            this.start(this.playlist[this.playlist.length - 1]);
        }
    }

    seek() {
        const newValue = +this.range.value;
        const duration = this.player.duration();
        this.player.seek(duration * (newValue / 100));
    }

    updtadeProgress() {
        const seek = this.player.seek();
        this.progress = (seek / this.player.duration()) * 100 || 0;
        setTimeout(() => {
            this.updtadeProgress();
        }, 100);
    }


    stopMusic(track: Track) {
        console.log('stop');
    }

    pauseMusic(track: Track) {

    }
}
