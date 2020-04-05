import { Neutrino } from 'neutrino-js/core';
import { FirstComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { NestedComponent } from './components/NestedComponent';



const app = new Neutrino({
    components:[
        NestedComponent,
        FirstComponent,
        SecondComponent
    ],
    services: []
})