import { Component } from "spanjs/core";

const data = () => ({
    test: 42,
    count:100
})
const onCreate = function() {
    console.log(this);
    let iii = setInterval( ()=>{
        this.test += 42;
        if(!this.count){
            clearInterval(iii)
        } else {
            this.count--;
        }
    },10);
    this.component.sendMessageTo('nested-component',{test:'trolololo'})
    this.est('est is test OMEGALOL')
};

const testLol = function(params) {
    console.log(params, this.test);
}

export const FirstComponent = () => Component('my-component',{
    data:{ ...data() },
    methods: {
        est: testLol
    },
    hooks: {
        onCreate: onCreate
    }
}); 