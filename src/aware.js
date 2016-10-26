/**
 * Aware JS is a library for detecting overlapping elements,
 * useful for example styling fixed positioned menus
 *
 * please keep amount of `targets` and `sources` as small as possible, for onScroll event complexity is O(n^2)
 *
 * @licence MIT
 * @author Veikko Karsikko <veikko.karsikko@gmail.com>
 * @type {{onScroll, setSources, setTargets}}
 */
var AwareJS = (function () {
	'use strict';

	var targets = document.getElementsByClassName('aware-js-target');
	var sources = document.getElementsByClassName('aware-js-source');

	if (window.addEventListener) {
		window.addEventListener('scroll', onScroll, true);
		window.addEventListener('resize', onScroll, true);
	}

	setTimeout(function () {
		onScroll();
	}, 0);

	function rectsOverlapping(rect1, rect2) {
		return !(
			rect1.right < rect2.left ||
			rect1.left > rect2.right ||
			rect1.bottom < rect2.top ||
			rect1.top > rect2.bottom
		)
	}

	function onScroll() {
		var rectCacheTargets = [];
		var targetValues = [];

		if (sources.length > 0 && targets.length > 0) {
			Array.prototype.forEach.call(sources, function (sourceElement) {
				var sourceHint = sourceElement.getAttribute('data-aware-js-hint');
				if(!sourceHint) return;

				var sourceRect = sourceElement.getBoundingClientRect();
				Array.prototype.forEach.call(targets, function (targetElement, targetIndex) {
					rectCacheTargets[targetIndex] = rectCacheTargets[targetIndex] || targetElement.getBoundingClientRect();

					if (rectsOverlapping(sourceRect, rectCacheTargets[targetIndex])) {
						if (sourceHint) {
							targetValues[targetIndex] = sourceHint;
						}
					}
				});
			});
		}

		Array.prototype.forEach.call(targets, function (el, i2) {
			el.setAttribute('data-aware-js-hint', targetValues[i2] || '');
		});
	}
	return {
		onScroll: onScroll,
		/**
		 * @param {NodeList|Array} _sources
		 */
		setSources: function setSources(_sources){
			sources = _sources;
		},
		/**
		 * @param {NodeList|Array} _targets
		 */
		setTargets: function setTargets(_targets){
			targets = _targets;
		}
	};
})();