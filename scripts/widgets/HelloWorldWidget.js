define( [ "core/Component" ], function( Component ) {
  return Component.extend( {
    _id: "HelloWorldWidget",
    getHierarchy: function() {
      return this._super().concat( "Hello World Class" );
    }
  } );
} );
