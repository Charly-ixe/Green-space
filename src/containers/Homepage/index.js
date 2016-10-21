'use strict';

import './styles.scss';

import 'gsap';

import Emitter from 'core/Emitter';

import {
  WINDOW_RESIZE,
  ABOUT_CLICK,
  CLOSE_ABOUT_CLICK
} from 'config/messages';

import ExampleComponent from 'components/Example';
import LeftColumnComponent from 'components/Left-column';
import CenterColumnComponent from 'components/Center-column';
import RightColumnComponent from 'components/Right-column';
import AboutComponent from 'components/About';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null,
      aboutVisible: false
    };
  },

  created() {
    this.bind();
  },

  ready() {

    this.addEventListeners();

  },

  beforeDestroy() {

    this.removeEventListeners();
  },

  methods: {

    /*
    * Binding & Events
    */

    bind() {
    },

    addEventListeners() {
      Emitter.on(WINDOW_RESIZE, this.onWindowResize);
      Emitter.on(ABOUT_CLICK, this.showAbout);
      Emitter.on(CLOSE_ABOUT_CLICK, this.hideAbout);
    },

    showAbout() {
      this.aboutVisible = true;
    },

    hideAbout() {
      this.aboutVisible = false;
    },

    removeEventListeners() {
      Emitter.off(WINDOW_RESIZE, this.onWindowResize);
      Emitter.off(ABOUT_CLICK, this.showAbout);
      Emitter.off(CLOSE_ABOUT_CLICK, this.showAbout);
    },

    onWindowResize({width, height}) {
      /*eslint-disable */
      console.log(`Window resize from application with debounce -> width: ${width}px || height: ${height}`);
      /*eslint-enable */
    }

  },

  transitions: {

  },

  components: {
    'example-component': ExampleComponent,
    'left-column-component': LeftColumnComponent,
    'center-column-component': CenterColumnComponent,
    'right-column-component': RightColumnComponent,
    'about-component': AboutComponent
  }
});
