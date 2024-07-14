Fancybox.bind('[data-fancybox]', {
	Thumbs: false
})

function openAwardsGallery() {
	var gallery = document.getElementById('awardsGallery').getElementsByTagName('a');
	for (var i = 0; i < gallery.length; i++) {
		gallery[i].click();
	}
}