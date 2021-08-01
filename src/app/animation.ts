import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';
export const SlideInOutAnimation = [
  trigger('slideInOut', [
    transition('* => ltr', [
      style({ transform: 'translateX(-100%)' }),
      animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
    ]),
    transition('* => rtl', [
      style({ transform: 'translateX(100%)' }),
      animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
    ]),
  ]),
];
