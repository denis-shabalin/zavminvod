/* Swiper */
const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 15,
	speed: 600,
	grabCursor: true,
	centerSlides: true,
	/* autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}, */
	keyboard: {
		enabled: true,
	},
	navigation: {
		nextEl: '#sliderNext'
	},
	breakpoints: {
		500: {
			slidesPerView: 2
		},
		1000: {
			slidesPerView: 3
		}
	},
})

const aboutSwiper = new Swiper('.about-swiper', {
	loop: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 15,
	speed: 600,
	grabCursor: true,
	loopedSlides: 4,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	keyboard: {
		enabled: true,
	},
	
	navigation: {
		nextEl: '#sliderNext'
	},
})

