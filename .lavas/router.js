import Vue from 'vue';
import Router from 'vue-router';

    
import _15565264745809d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _1556526474580c2c576940f841d4c37798b6e127ddaa2 from '@/pages/audioView.vue';
    

    
import _15565264745804b34341c873452924befd3071ac34db7 from '@/pages/ChatList.vue';
    

    
import _1556526474580d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _155652647458067830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _15565264745809d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/audio-view",
        "component": _1556526474580c2c576940f841d4c37798b6e127ddaa2,
        "meta": {},
        "name": "audioView"
    },
    {
        "path": "/chat-list",
        "component": _15565264745804b34341c873452924befd3071ac34db7,
        "meta": {},
        "name": "chatList"
    },
    {
        "path": "/",
        "component": _155652647458067830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/error",
        "component": _1556526474580d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);




const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = 'fade';
                
                router.app.$store.commit('pageTransition/setType', 'fade');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
