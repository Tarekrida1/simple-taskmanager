import { trigger, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';
export let leftanimation = animation([
    animate('1s ease-out', keyframes([
        style({
            offset: .5,
            opacity: 1,
            backgroundColor: 'red',
            transform: 'translateX(100px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
]);
export let side = trigger('side', [
    transition(':enter', [
        style({
            transition: 'translateX(-10px)'
        }),
        animate('0.5s 1s ease-in')
    ]),
    transition(':leave', useAnimation(leftanimation))
]);

export let fadeInAnimation = animation([
    style({
        opacity: 0,
        backgroundColor: 'blue',
    }),
    animate('{{durayion}} {{easy}}')
], {
        params: {
            durayion: '3s',
            easy: 'ease-out'
        }
    });
