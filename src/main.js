
import Vue from 'vue'

export default function (obj) {
    return new Vue({
        ...obj
    }).$mount('#my_app');
};

