/* -*- mode: espresso; espresso-indent-level: 8; indent-tabs-mode: t -*- */
/* vim: set softtabstop=2 shiftwidth=2 tabstop=2 expandtab: */

(function(CATMAID) {

  "use strict";

  var CatmaidsynisterWidget = function() {
    this.widgetID = this.registerInstance();
    this.idPrefix = `catmaidsynister-widget${this.widgetID}-`;
  };

  $.extend(CatmaidsynisterWidget.prototype, new InstanceRegistry());

  CatmaidsynisterWidget.prototype.getName = function() {
    return 'Catmaidsynister Widget ' + this.widgetID;
  };

  CatmaidsynisterWidget.prototype.getWidgetConfiguration = function() {
    return {
      helpText: 'Catmaidsynister Widget: ',
      controlsID: this.idPrefix + 'controls',
      createControls: function(controls) {
        controls.appendChild(document.createTextNode('Controls go here'));
      },
      contentID: this.idPrefix + 'content',
      createContent: function(container) {
        container.appendChild(document.createTextNode('Content goes here'));
      },
      init: function() {}
    };
  };

  CatmaidsynisterWidget.prototype.destroy = function() {
    this.unregisterInstance();
  };

  CATMAID.registerWidget({
    name: 'CATMAID-Synister Widget',
    description: 'Widget associated with the catmaidsynister app',
    key: 'catmaidsynister-widget',
    creator: CatmaidsynisterWidget
  });

})(CATMAID);
