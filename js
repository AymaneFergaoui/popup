elementorProFrontend.modules.popup.showPopup( { id: 6621 } );



jQuery( document ).ready( function( $ ) {
	$( document ).on( 'click', '.hfe-search-submit', function( event ) {
		elementorProFrontend.modules.popup.closePopup( {}, event );
	} );
} );
