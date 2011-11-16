define( [ "core/Class" ], function( Class ) {
  return Class.extend( {
    _id: "Component",
    init: function() {
      this._initElements();
      this._initEvents();
      this._renderUI();
    },
    _initElements: function() { },
    _initEvents: function() { },
    _renderUI: function() { },
    getHierarchy: function() {
      return [ "Component Class" ];
    }
  } );
} );
