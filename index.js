import { Span } from 'spanjs/core';
import { FirstComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { NestedComponent } from './components/NestedComponent';



const app = new Span({
    components:[
        NestedComponent,
        FirstComponent,
        SecondComponent
    ],
    services: []
})