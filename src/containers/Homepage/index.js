'use strict';

import './styles.scss';

import 'gsap';

import Emitter from 'core/Emitter';

import {
  WINDOW_RESIZE
} from 'config/messages';

import ExampleComponent from 'components/Example';
import LeftColumnComponent from 'components/Left-column';
import CenterColumnComponent from 'components/Center-column';
import RightColumnComponent from 'components/Right-column';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null
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
    },

    removeEventListeners() {
      Emitter.off(WINDOW_RESIZE, this.onWindowResize);
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
    'right-column-component': RightColumnComponent
  }
});
