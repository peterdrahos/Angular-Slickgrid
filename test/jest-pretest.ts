import * as jQuery from 'jquery';
declare var window: any;
declare var global: any;
window.$ = window.jQuery = jQuery;
global.$ = global.jQuery = jQuery;
global.Slick = window.Slick = {};
require('jquery-ui-dist/jquery-ui');
require('slickgrid/lib/jquery.event.drag-2.3.0');
require('slickgrid/slick.core');
require('slickgrid/slick.dataview');
require('slickgrid/slick.grid');