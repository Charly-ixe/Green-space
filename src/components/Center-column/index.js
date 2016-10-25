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
      menuOpen: false,
      homeVisible: true,
      currentId: 0
    };
  },

  created() {
    this.bind();
  },

  ready() {

    this.addEventListeners();
    this.menuElements = this.$els.burgercontent.getElementsByClassName('center-column-burger-centent-element');
    this.navigationElt = this.$els.navigationelt.getElementsByClassName('center-column-navigation-dots');
    TweenMax.set(this.menuElements, {opacity: 0});

    this.navigationElt[this.currentId].classList.add('active');
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
      window.addEventListener('keydown', this.keyPress, false);
    },

    clickColumn() {
      let pageTitle = this.$els.pagetitle;
      TweenMax.to(pageTitle, 0.3, {opacity: 0, y: -50});
      setTimeout(()=> {
        this.columnOpen = true;
        Emitter.emit('CENTER_COLUMN_CLICK');
        this.showContent = true;
        this.homeVisible = false;
      }, 500);

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

    keyPress() {
      this.currentId += 1;
    },

    removeEventListeners() {
    }

  },

  transitions: {},

  components: {}
});
