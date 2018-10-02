$(function() {
	StartMenuPosition();
	toggleMenu();
	$('[data-toggle="tooltip"]').tooltip();
});

function toggleMenu() {
	$('.navbar-toggler-icon').click(function(event) {
		$('body').toggleClass('small-menu');
		$('.main-menu, .main-content, .top-fixed').addClass('transitionMenu');
		$(this).find('.ing').toggleClass('ing-list-02');
		$(this).find('.ing').toggleClass('ing-bars');
		if (VerificarCache("OpenMenu")) {
			RemoverCache("OpenMenu");
		} else {
			RegistrarCache("OpenMenu");
		}
	});
}

var storage = window.localStorage;
if (!storage.ElementosNoCache) {
	storage.ElementosNoCache = "";
}

function RegistrarCache(nome) {
if (!VerificarCache(nome)) {
	storage.ElementosNoCache += '[' + nome + ']';
}
}

function RemoverCache(nome) {
if (VerificarCache(nome)) {
	storage.ElementosNoCache = storage.ElementosNoCache.replace('[' + nome + ']', '');
}
}

function VerificarCache(nome) {
	return (storage.ElementosNoCache.indexOf('[' + nome + ']', 0) >= 0);
}

function StartMenuPosition() {	
	if (VerificarCache("OpenMenu")) {		
		$('body').addClass('small-menu');
	} else {
		$('body').removeClass('small-menu');
	}
	$('body').show();
}