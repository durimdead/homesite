$( document ).ready( function( ) {

	/*********************************************************
	*	main nav tabs. which content to show on click.
	*********************************************************/
	$( '.main-navigation-tabs' ).on( 'click', function( ) {
		var $this = $(this);
		var contentID = $this.attr( 'ng-data-contentID' );
		if ( ! $this.hasClass( 'active' ) ){
			$this.parent( ).find( '.active' ).removeClass( 'active' );
			$this.addClass( 'active' );

			// find out which tab should be shown and hide all of the others
			$( '.tab-content' ).each( function( ){
				var $hiddenTabRelationshipValue = $( this ).attr( 'data-contentID' );
				if ( contentID == $hiddenTabRelationshipValue ){
					$( this ).removeClass( 'tab-hidden' );
				}
				else{
					$( this ).addClass( 'tab-hidden' );
				}
			});
		}
	});

	$( '.main-navigation-tabs' ).first( ).addClass( 'active' );
});