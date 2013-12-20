/**
 * by lizhuhong (xiaohong4512@163.com)
 * A responsive design solution  
 * for browsers not support media query, like IE8- 
 * jQuery is required
 * add a class to html tag
 */

(function(w){
	var $w = $(w),
		responseSizes = [990, 1200, 1600], //all the sizes need to be responsed
		minScreenWidth = 0;                //minimum screen size
		maxScreenWidth = 5000;             //maximum screen size
			
	function resizeDoc() {
		var ww = $w.width(),
				$html = $('html'),
				len = responseSizes.length,
				i = 0,
				prevWidth,
				curWidth;
		
		for (; i <= len; i++) {
			prevWidth = (i !== 0 ? responseSizes[i - 1] : minScreenWidth);
			curWidth = (i !== len ? responseSizes[i] : maxScreenWidth);

			if (i !== len) {
				$html.removeClass('w' + curWidth);
			}
			
			if (prevWidth < ww && ww <= curWidth) {
				i == 0 ? $html.removeClass('w' + prevWidth) : $html.addClass('w' + prevWidth);
			}
		}
	} 

	resizeDoc();

	$w.on('resize', function(e) {
		resizeDoc();
	});	

})(window);
