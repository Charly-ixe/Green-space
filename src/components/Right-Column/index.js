'use strict';

import './styles.scss';
import Emitter from 'core/Emitter';

import {
  CENTER_COLUMN_CLICK
} from 'config/messages';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null,
      columnSided: false
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
      Emitter.on(CENTER_COLUMN_CLICK, this.reduceColumn);
    },

    reduceColumn() {
      this.columnSided = true;
    },

    removeEventListeners() {
    }

  },

  transitions: {},

  components: {}
});
