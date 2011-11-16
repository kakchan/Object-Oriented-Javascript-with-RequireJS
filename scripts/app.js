define( [ "jquery", "widgets/HelloWorldWidget" ], function( $, HelloWorldWidget ) {
  var helloWorld = new HelloWorldWidget();
  $( "BODY" )
    .append( "The Hierarchy of our Classes are: <br/>" )
    .append( helloWorld.getHierarchy().join("<br/>") );
} );
