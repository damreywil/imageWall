/*
 * jQuery Image Wall 0.3
 * By Damon Williams
 *
 * Copyright (c) 2009 Damon Williams
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.gnu.org/licenses/gpl-2.0.txt) licenses.
*/

(function($){
	
	$.fn.imageWall = function(options) {
		
		var defaults = {
			showNumbers: true,
			showCaptions: true
		};
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			
			if (options.showNumbers) {
				$(this).each(function() {
					$(this).find("li").each(function(i) {
						var number = "<div class=\"iwall-number\">"+(i+1)+"</div>";
						$(this).prepend(number);
					});
				});
			}
		
			$(this).find("li").hover( 
				function(e) { // over
					var title = "<div class=\"iwall-title\">"+$(this).find("a img").attr("alt")+"</div>";
					var caption = (options.showCaptions) ? "<div class=\"iwall-caption\">"+$(this).find("a img").attr("title")+"</div>" : "";
					var slide = "<div class=\"iwall-bar\">"+title+""+caption+"</div>";
					$(this).append(slide);
					$(this).find(".iwall-bar:last").slideToggle("fast");
				}, function(e) { //out
					$(this).find(".iwall-bar:last").slideToggle("fast");
			});
			
		});
		
	};
	
})(jQuery);