/* for elementor */

elementorProFrontend.modules.popup.showPopup( { id: 6621 } );



jQuery( document ).ready( function( $ ) {
	$( document ).on( 'click', '.hfe-search-submit', function( event ) {
		elementorProFrontend.modules.popup.closePopup( {}, event );
	} );
} );


/* for pop up maker */

if ( is_user_logged_in() && is_page( 'media-bank' ) ) {
	echo "<script>jQuery('#popmake-16169').popmake('close');</script>";
} else {
	echo "<script>jQuery('#popmake-16169').popmake('open');</script>";
}
	
