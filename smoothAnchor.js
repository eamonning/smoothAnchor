$(function(){
	$("a[href*=#]").smoothAnchor(1000);
});
$.fn.smoothAnchor = function(speed){
	$(this).each(function(i,o){
		$(o).click(function(){		 
			var _rel = jQuery(this).attr("href").substr(jQuery(this).attr("href").indexOf('#')+1);
			var _targetTop = $('a[name='+_rel+']');
			if(_targetTop.length){
				$("html,body").animate({scrollTop:_targetTop.offset().top-20},speed?speed:1000);
			}else{
				_targetTop = $('a[id='+_rel+']');
				if(_targetTop.length){
					$("html,body").animate({scrollTop:_targetTop.offset().top-20},speed?speed:1000);
				}
			}
		});                  
	});
};