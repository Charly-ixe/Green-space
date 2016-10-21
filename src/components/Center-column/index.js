'use strict';

import './styles.scss';
import Emitter from 'core/Emitter';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null,
      columnOpen: false,
      showContent: false,
      menuOpen: false
    };
  },

  created() {
    this.bind();
  },

  ready() {

    this.addEventListeners();
    this.menuElements = this.$els.burgercontent.getElementsByClassName('center-column-burger-centent-element');
    TweenMax.set(this.menuElements, {opacity: 0});
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
    },

    clickColumn() {
      this.columnOpen = true;
      Emitter.emit('CENTER_COLUMN_CLICK');
      this.showContent = true;
    },

    menuClick() {
      if(!this.menuOpen) {
        this.menuOpen = true;
        TweenMax.staggerFromTo(this.menuElements, 0.5, {opacity: 0, x: 100}, {opacity: 1, x: 0, ease: Expo.easeOut}, 0.1);
      }
      else {
        this.menuOpen = false;
        TweenMax.staggerFromTo(this.menuElements, 0.3, {opacity: 1, x: 0}, {opacity: 0, x: 100, ease: Expo.easeOut}, 0.1);
      }
    },

    clickCities() {

    },

    clickAbout() {
      Emitter.emit('ABOUT_CLICK');
    },

    removeEventListeners() {
    }

  },

  transitions: {},

  components: {}
});
