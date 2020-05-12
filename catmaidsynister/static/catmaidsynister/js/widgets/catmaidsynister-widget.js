/* -*- mode: espresso; espresso-indent-level: 8; indent-tabs-mode: t -*- */
/* vim: set softtabstop=2 shiftwidth=2 tabstop=2 expandtab: */

(function(CATMAID) {

  "use strict";

  var CatmaidsynisterWidget = function() {
    this.widgetID = this.registerInstance();
    this.idPrefix = `catmaidsynister-widget${this.widgetID}-`;
  };

  CatmaidsynisterWidget.prototype = new InstanceRegistry();
  CatmaidsynisterWidget.prototype.constructor = CatmaidsynisterWidget;

  CatmaidsynisterWidget.prototype.getName = function() {
    return 'Catmaidsynister Widget ' + this.widgetID;
  };

  CatmaidsynisterWidget.prototype.getWidgetConfiguration = function() {
    return {
      helpText: 'Catmaidsynister Widget: ',
      controlsID: this.idPrefix + 'controls',
      createControls: function(controls) {
        CATMAID.DOM.appendElement(controls, {
          'type': 'button',
          'label': 'Fetch neurotransmitter',
          'title': 'Ask the back-end for neurotransmitter information for the current location',
          'onclick': e => {
            let activeNodeType = SkeletonAnnotations.getActiveNodeType();
            if (activeNodeType !== SkeletonAnnotations.TYPE_CONNECTORNODE) {
              CATMAID.warn('Please select a connector node!');
              return;
            }
            this.fetchNeurotransmitterForConnector(SkeletonAnnotations.getActiveNodeId())
              .catch(CATMAID.handleError);
          },
        });
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

  /**
   * Ask the back-end to import neurotransmitter information for the specified
   * connector.
   *
   * @param {Integer} connectorId The connector to look-up neurotransmitters for
   *
   * @returns a Promise that resolves when neurotransmitter information has been
   *          found.
   */
  CatmaidsynisterWidget.prototype.fetchNeurotransmitterForConnector = function(connectorId) {
    return CATMAID.fetch(`ext/catmaidsynister/${project.id}/connectors/${connectorId}/fetch-neurotransmitters`)
      .then(result => {
        CATMAID.msg('Success', `Found neurotransmitter information for connector #${connectorId}`);
      });
  };

  CATMAID.registerWidget({
    name: 'Synister-Widget',
    description: 'Determine neurotransmitter information for synapses',
    key: 'catmaidsynister-widget',
    creator: CatmaidsynisterWidget
  });

})(CATMAID);
