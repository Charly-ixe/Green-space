import VueRouter from 'vue-router';
import Emitter from 'core/Emitter';

import HomePageComponent from 'containers/Homepage';

import {
  ROUTER_ROUTE_CHANGE
} from 'config/messages';

Vue.use(VueRouter);

class Router extends VueRouter {

  constructor() {

    super({
      hashbang: false,
      pushState: true,
      history: true,
      abstract: false,
      saveScrollPosition: false,
      transitionOnLoad: false
    });

    this.path = '/';
    this.firstRoute = true;
    this.routeTimeout = null;


    this.map({

      '*': {
        name: "home",
        component: HomePageComponent
      }

    });

    this.afterEach( ({ to, from }) => {

      Emitter.emit(ROUTER_ROUTE_CHANGE, { to, from });

    });
  }
}

export default new Router;
