document.addEventListener("DOMContentLoaded", function() {

	var slide = []
	var right = document.querySelector('#arrow-right-1')
	var left = document.querySelector('#arrow-left-1')
	var slide = document.querySelectorAll('.slide-item')
	
	
	var swiper1 = new Swiper('#swiper-container-1', {
		// Disable preloading of all images
		preloadImages: false,
			// Enable lazy loading
		lazy: true,
		spaceBetween: 30,
		navigation: {
			nextEl: ('#arrow-right-2'),
			prevEl: ('#arrow-left-2'),
			hideOnClick: false
		}
	});
	var swiper2 = new Swiper('#swiper-container-2', {	
		// Disable preloading of all images
		preloadImages: false,
			// Enable lazy loading
		lazy: true,
		spaceBetween: 30,
		navigation: {
			nextEl: ('#arrow-right-3'),
			prevEl: ('#arrow-left-3'),
			hideOnClick: false
		}
	});

	var i = 0;	
	
		left.onclick = () => {
			if (i > 0) {
			slide[i].style.transform = 'translete(-100%)'			
			slide[i].style.display = "none"
			slide[i].classList.remove('active')
			i--
			slide[i].style.display = "block"
			slide[i].classList.add('active')			
			}
		}
		right.onclick = () => {
			if (i<2) {
				slide[i].style.display = "none"
				slide[i].classList.remove('active')
				i++
				slide[i].style.display = "block"
				slide[i].classList.add('active')
			}
			
		}

	const menu = document.querySelector('.menu');
	const menuMob = document.querySelector('.menu-mob');
	const wrapperMenu = document.querySelector('.wrapper-menu-mob');
	
	function open() {
		menuMob.style.transform = 'translateX(0)';
		wrapperMenu.style.display = 'block'

	}
	function close() {
		menuMob.style.transform = 'translateX(-200%)'
		wrapperMenu.style.display = 'none'
	}
	menu.onclick = function() {
		open()
	}
	wrapperMenu.onclick = function() {
		close()
	}



	
	
		
	
	
});
