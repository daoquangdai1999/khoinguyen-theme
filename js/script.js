jQuery(function ($) {
	var $body = $( 'body' );

	var $window = $( window );
	const slickSlider = () => {
		$('.home__banner-wrapper').slick({
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			rows: 0,
			adaptiveHeight: true,
		});
		$('.product_list').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			rows: 0,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.product-categrory-content').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			rows: 0,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});



		$('.box_image-product').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.box_image-product-slider'
		  });
		  $('.box_image-product-slider').slick({
			slidesToShow:4,
			
			asNavFor: '.box_image-product',
			centerMode: true,
		
			focusOnSelect: true
		  });
	};

	const tabsProduct = () => {
		$('.nav-pill  li').on('click', function (){

			$('.nav-pill li').removeClass('active');
			$(this).addClass('active');
			$tab= $(this).data('id');
			
			let tabs=$('.content');
			tabs.each(function(){
				console.log($(this).hasClass($tab));
				if($(this).hasClass($tab)){
					$(this).addClass('show')
				}else {
					$(this).removeClass('show');
				}
			})

		})
	}
	const filterproduct=()=>{
		$('.filter-categroty li').on('click',function(){
			$('.filter-categroty li').removeClass('active');
			$(this).addClass('active');
			$data=$(this).data('tab');
			
			let datas=$('.product-item');
			datas.each(function(){
				
				if($(this).hasClass($data)){
					$(this).addClass('shows')
				}else {
					$(this).removeClass('shows');
				}
			})
		})

	}

	let toggleAccount = () => {
		$( '.menu-account svg' ).on( 'click', function( e ) {
			e.stopPropagation(); // do not trigger event on .site
			$( '.menu-account__wrapper' ).toggleClass( 'menu-account-open' );
		} );
	}

	let popupLogout = () => {
		$( '.popup-modal' ).magnificPopup( {
			type: 'inline',
			preloader: false,
			modal: true
		} );
		$( document ).on( 'click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		} );
	}


	function stickyHeader() {
		var headerHeight = $( '.header_top' ).outerHeight(),
			adminBarHeight = $( '#wpadminbar' ).height(),
			headerContentOffset = $window.width() > 601 ? adminBarHeight : 0;

		$window.on( 'scroll', function () {
			if ( $window.scrollTop() > headerHeight ) {
				$( '.header_top' ).addClass( 'is-sticky' );
				if ( $body.hasClass( 'admin-bar' ) ) {
					$( '.header_top' ).css( 'top', headerContentOffset );
				}
			} else {
				$( '.header_top' ).removeClass( 'is-sticky' );
			}
		} );
	}
	
	slickSlider();
	tabsProduct();
	filterproduct();
	stickyHeader();
	toggleAccount();
	popupLogout();
});
