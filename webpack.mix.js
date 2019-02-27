let mix = require('laravel-mix');



mix.js('js/script.js', 'dist/js').sass('css/style.scss', 'dist/css/')
	.options({
		processCssUrls: false
	});