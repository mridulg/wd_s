!function t(e,n,i){function o(a,s){if(!n[a]){if(!e[a]){var d="function"==typeof require&&require;if(!s&&d)return d(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var n=e[a][1][t];return o(n?n:t)},c,c.exports,t,e,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(t,e,n){window.non_flexbox_grid=t("./patterns/non-flexbox-grid.js")},{"./patterns/non-flexbox-grid.js":2}],2:[function(t,e,n){(function(n){e.exports=function(e,n){var i={};t("./vendor/jquery.matchHeight.js");return i.init=function(){i.cache(),i.meetsRequirements&&i.bindEvents()},i.cache=function(){i.$c={window:n(e),gridItem:n(".grid-item")}},i.bindEvents=function(){i.$c.window.on("load",i.matchGridItems)},i.meetsRequirements=function(){return i.$c.gridItem.length},i.matchGridItems=function(){i.$c.gridItem.matchHeight({byRow:!0,property:"height",target:null,remove:!1})},n(i.init),i}(window,"undefined"!=typeof window?window.jQuery:"undefined"!=typeof n?n.jQuery:null)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./vendor/jquery.matchHeight.js":3}],3:[function(t,e,n){(function(t){!function(n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],n):"undefined"!=typeof e&&e.exports?e.exports=n("undefined"!=typeof window?window.jQuery:"undefined"!=typeof t?t.jQuery:null):n(jQuery)}(function(t){var e=-1,n=-1,i=function(t){return parseFloat(t)||0},o=function(e){var n=1,o=t(e),r=null,a=[];return o.each(function(){var e=t(this),o=e.offset().top-i(e.css("margin-top")),s=a.length>0?a[a.length-1]:null;null===s?a.push(e):Math.floor(Math.abs(r-o))<=n?a[a.length-1]=s.add(e):a.push(e),r=o}),a},r=function(e){var n={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(n,e):("boolean"==typeof e?n.byRow=e:"remove"===e&&(n.remove=!0),n)},a=t.fn.matchHeight=function(e){var n=r(e);if(n.remove){var i=this;return this.css(n.property,""),t.each(a._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!n.target?this:(a._groups.push({elements:this,options:n}),a._apply(this,n),this)};a.version="0.7.0",a._groups=[],a._throttle=80,a._maintainScroll=!1,a._beforeUpdate=null,a._afterUpdate=null,a._rows=o,a._parse=i,a._parseOptions=r,a._apply=function(e,n){var s=r(n),d=t(e),u=[d],c=t(window).scrollTop(),l=t("html").outerHeight(!0),f=d.parents().filter(":hidden");return f.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),f.css("display","block"),s.byRow&&!s.target&&(d.each(function(){var e=t(this),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block"),e.data("style-cache",e.attr("style")),e.css({display:n,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),u=o(d),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(u,function(e,n){var o=t(n),r=0;if(s.target)r=s.target.outerHeight(!1);else{if(s.byRow&&o.length<=1)return void o.css(s.property,"");o.each(function(){var e=t(this),n=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var o={display:i};o[s.property]="",e.css(o),e.outerHeight(!1)>r&&(r=e.outerHeight(!1)),n?e.attr("style",n):e.css("display","")})}o.each(function(){var e=t(this),n=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(n+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),n+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,r-n+"px"))})}),f.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),a._maintainScroll&&t(window).scrollTop(c/l*t("html").outerHeight(!0)),this},a._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var n=t(this),i=n.attr("data-mh")||n.attr("data-match-height");i in e?e[i]=e[i].add(n):e[i]=n}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){a._beforeUpdate&&a._beforeUpdate(e,a._groups),t.each(a._groups,function(){a._apply(this.elements,this.options)}),a._afterUpdate&&a._afterUpdate(e,a._groups)};a._update=function(i,o){if(o&&"resize"===o.type){var r=t(window).width();if(r===e)return;e=r}i?-1===n&&(n=setTimeout(function(){s(o),n=-1},a._throttle)):s(o)},t(a._applyDataApi),t(window).bind("load",function(t){a._update(!1,t)}),t(window).bind("resize orientationchange",function(t){a._update(!0,t)})})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9qcy9wYXR0ZXJucy1zcmMvcGF0dGVybnMtYWJvdXQuanMiXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiciIsInMiLCJvIiwidSIsImEiLCJyZXF1aXJlIiwiaSIsImYiLCJFcnJvciIsImNvZGUiLCJsIiwiZXhwb3J0cyIsImNhbGwiLCJsZW5ndGgiLDEsIm1vZHVsZSIsIndpbmRvdyIsIm5vbl9mbGV4Ym94X2dyaWQiLCIuL3BhdHRlcm5zL25vbi1mbGV4Ym94LWdyaWQuanMiLDIsImdsb2JhbCIsIiQiLCJ0aGF0IiwiaW5pdCIsImNhY2hlIiwibWVldHNSZXF1aXJlbWVudHMiLCJiaW5kRXZlbnRzIiwiJGMiLCJncmlkSXRlbSIsIm9uIiwibWF0Y2hHcmlkSXRlbXMiLCJtYXRjaEhlaWdodCIsImJ5Um93IiwicHJvcGVydHkiLCJ0YXJnZXQiLCJyZW1vdmUiLCJ0aGlzIiwic2VsZiIsIi4vdmVuZG9yL2pxdWVyeS5tYXRjaEhlaWdodC5qcyIsMywiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsImpRdWVyeSIsIl9wcmV2aW91c1Jlc2l6ZVdpZHRoIiwiX3VwZGF0ZVRpbWVvdXQiLCJfcGFyc2UiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJfcm93cyIsImVsZW1lbnRzIiwidG9sZXJhbmNlIiwiJGVsZW1lbnRzIiwibGFzdFRvcCIsInJvd3MiLCJlYWNoIiwiJHRoYXQiLCJ0b3AiLCJvZmZzZXQiLCJjc3MiLCJsYXN0Um93IiwicHVzaCIsIk1hdGgiLCJmbG9vciIsImFicyIsImFkZCIsIl9wYXJzZU9wdGlvbnMiLCJvcHRpb25zIiwib3B0cyIsImV4dGVuZCIsImZuIiwiX2dyb3VwcyIsImtleSIsImdyb3VwIiwibm90IiwiX2FwcGx5IiwidmVyc2lvbiIsIl90aHJvdHRsZSIsIl9tYWludGFpblNjcm9sbCIsIl9iZWZvcmVVcGRhdGUiLCJfYWZ0ZXJVcGRhdGUiLCJzY3JvbGxUb3AiLCJodG1sSGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCIkaGlkZGVuUGFyZW50cyIsInBhcmVudHMiLCJmaWx0ZXIiLCJkYXRhIiwiYXR0ciIsImRpc3BsYXkiLCJwYWRkaW5nLXRvcCIsInBhZGRpbmctYm90dG9tIiwibWFyZ2luLXRvcCIsIm1hcmdpbi1ib3R0b20iLCJib3JkZXItdG9wLXdpZHRoIiwiYm9yZGVyLWJvdHRvbS13aWR0aCIsImhlaWdodCIsIm92ZXJmbG93Iiwicm93IiwiJHJvdyIsInRhcmdldEhlaWdodCIsInN0eWxlIiwidmVydGljYWxQYWRkaW5nIiwiaXMiLCJfYXBwbHlEYXRhQXBpIiwiZ3JvdXBzIiwiJHRoaXMiLCJncm91cElkIiwiX3VwZGF0ZSIsImV2ZW50IiwidGhyb3R0bGUiLCJ0eXBlIiwid2luZG93V2lkdGgiLCJ3aWR0aCIsInNldFRpbWVvdXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQ0FBQSxRQUFVQSxHQUFFQyxFQUFFQyxFQUFFQyxHQUFHLFFBQVNDLEdBQUVDLEVBQUVDLEdBQUcsSUFBSUosRUFBRUcsR0FBRyxDQUFDLElBQUlKLEVBQUVJLEdBQUcsQ0FBQyxHQUFJRSxHQUFrQixrQkFBVEMsVUFBcUJBLE9BQVEsS0FBSUYsR0FBR0MsRUFBRSxNQUFPQSxHQUFFRixHQUFFLEVBQUksSUFBR0ksRUFBRSxNQUFPQSxHQUFFSixHQUFFLEVBQUksSUFBSUssR0FBRSxHQUFJQyxPQUFNLHVCQUF1Qk4sRUFBRSxJQUFLLE1BQU1LLEdBQUVFLEtBQUssbUJBQW1CRixFQUFFLEdBQUlHLEdBQUVYLEVBQUVHLElBQUlTLFdBQVliLEdBQUVJLEdBQUcsR0FBR1UsS0FBS0YsRUFBRUMsUUFBUSxTQUFTZCxHQUFHLEdBQUlFLEdBQUVELEVBQUVJLEdBQUcsR0FBR0wsRUFBRyxPQUFPSSxHQUFFRixFQUFFQSxFQUFFRixJQUFJYSxFQUFFQSxFQUFFQyxRQUFRZCxFQUFFQyxFQUFFQyxFQUFFQyxHQUFHLE1BQU9ELEdBQUVHLEdBQUdTLFFBQWtELElBQUksR0FBMUNMLEdBQWtCLGtCQUFURCxVQUFxQkEsUUFBZ0JILEVBQUUsRUFBRUEsRUFBRUYs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QnhGLEVBQUVVLEVBQVl5RSxlQUdkbkYsRUFBRUwsUUFBUW1HLEtBQUssT0FBUSxTQUFTTixHQUM1QjlFLEVBQVk2RSxTQUFRLEVBQU9DLEtBSS9CeEYsRUFBRUwsUUFBUW1HLEtBQUssMkJBQTRCLFNBQVNOLEdBQ2hEOUUsRUFBWTZFLFNBQVEsRUFBTUMsU0FLL0JqRyxLQUFLd0IsS0FBdUIsbUJBQVhoQixRQUF5QkEsT0FBeUIsbUJBQVRpQixNQUF1QkEsS0FBeUIsbUJBQVhyQixRQUF5QkEscUJBQ2hIIiwiZmlsZSI6ImFzc2V0cy9qcy9wYXR0ZXJucy1hYm91dC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyB0aGlzIGlzIG1vc3RseSBmb3IgUGF0dGVybiBMaWJyYXJ5LCBhcyBXUCBkZWZpbmVzIG9uIGl0cyBvd25cbi8vIGdsb2JhbC5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxud2luZG93Lm5vbl9mbGV4Ym94X2dyaWQgPSByZXF1aXJlKCcuL3BhdHRlcm5zL25vbi1mbGV4Ym94LWdyaWQuanMnKTtcbn0se1wiLi9wYXR0ZXJucy9ub24tZmxleGJveC1ncmlkLmpzXCI6Mn1dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuLyoqXG4gKiBNYXRjaCBIZWlnaHRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAoIGZ1bmN0aW9uKCB3aW5kb3csICQgKSB7XG5cblx0dmFyIHRoYXQgPSB7fTtcblx0dmFyIG1hdGNoSGVpZ2h0ID0gcmVxdWlyZSggJy4vdmVuZG9yL2pxdWVyeS5tYXRjaEhlaWdodC5qcycgKTtcblxuXHQvLyBDb25zdHJ1Y3Rvci5cblx0dGhhdC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhhdC5jYWNoZSgpO1xuXG5cdFx0aWYgKCB0aGF0Lm1lZXRzUmVxdWlyZW1lbnRzICkge1xuXHRcdFx0dGhhdC5iaW5kRXZlbnRzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENhY2hlIGFsbCB0aGUgdGhpbmdzLlxuXHR0aGF0LmNhY2hlID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhhdC4kYyA9IHtcblx0XHRcdHdpbmRvdzogJCh3aW5kb3cpLFxuXHRcdFx0Z3JpZEl0ZW06ICQoICcuZ3JpZC1pdGVtJyApLFxuXHRcdH07XG5cdH07XG5cblx0Ly8gQ29tYmluZSBhbGwgZXZlbnRzLlxuXHR0aGF0LmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR0aGF0LiRjLndpbmRvdy5vbiggJ2xvYWQnLCB0aGF0Lm1hdGNoR3JpZEl0ZW1zICk7XG5cdH07XG5cblx0Ly8gRG8gd2UgbWVldCB0aGUgcmVxdWlyZW1lbnRzP1xuXHR0aGF0Lm1lZXRzUmVxdWlyZW1lbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoYXQuJGMuZ3JpZEl0ZW0ubGVuZ3RoO1xuXHR9O1xuXG5cdC8vIE1hdGNoIHRoZSBoZWlnaHQgb2YgYWxsIHRoZSBjYXJkcy5cblx0dGhhdC5tYXRjaEdyaWRJdGVtcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoYXQuJGMuZ3JpZEl0ZW0ubWF0Y2hIZWlnaHQoe1xuXHRcdFx0YnlSb3c6IHRydWUsXG5cdFx0XHRwcm9wZXJ0eTogJ2hlaWdodCcsXG5cdFx0XHR0YXJnZXQ6IG51bGwsXG5cdFx0XHRyZW1vdmU6IGZhbHNlXG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gRW5nYWdlIVxuXHQkKCB0aGF0LmluaXQgKTtcblx0XG5cdHJldHVybiB0aGF0O1xuXG59KSggd2luZG93LCAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snalF1ZXJ5J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqUXVlcnknXSA6IG51bGwpICk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se1wiLi92ZW5kb3IvanF1ZXJ5Lm1hdGNoSGVpZ2h0LmpzXCI6M31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuLyoqXG4qIGpxdWVyeS1tYXRjaC1oZWlnaHQgMC43LjAgYnkgQGxpYWJydVxuKiBodHRwOi8vYnJtLmlvL2pxdWVyeS1tYXRjaC1oZWlnaHQvXG4qIExpY2Vuc2U6IE1JVFxuKi9cblxuOyhmdW5jdGlvbihmYWN0b3J5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXh0cmEtc2VtaVxuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRFxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBDb21tb25KU1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pRdWVyeSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnalF1ZXJ5J10gOiBudWxsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gR2xvYmFsXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KShmdW5jdGlvbigkKSB7XG4gICAgLypcbiAgICAqICBpbnRlcm5hbFxuICAgICovXG5cbiAgICB2YXIgX3ByZXZpb3VzUmVzaXplV2lkdGggPSAtMSxcbiAgICAgICAgX3VwZGF0ZVRpbWVvdXQgPSAtMTtcblxuICAgIC8qXG4gICAgKiAgX3BhcnNlXG4gICAgKiAgdmFsdWUgcGFyc2UgdXRpbGl0eSBmdW5jdGlvblxuICAgICovXG5cbiAgICB2YXIgX3BhcnNlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gcGFyc2UgdmFsdWUgYW5kIGNvbnZlcnQgTmFOIHRvIDBcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKiAgX3Jvd3NcbiAgICAqICB1dGlsaXR5IGZ1bmN0aW9uIHJldHVybnMgYXJyYXkgb2YgalF1ZXJ5IHNlbGVjdGlvbnMgcmVwcmVzZW50aW5nIGVhY2ggcm93XG4gICAgKiAgKGFzIGRpc3BsYXllZCBhZnRlciBmbG9hdCB3cmFwcGluZyBhcHBsaWVkIGJ5IGJyb3dzZXIpXG4gICAgKi9cblxuICAgIHZhciBfcm93cyA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gICAgICAgIHZhciB0b2xlcmFuY2UgPSAxLFxuICAgICAgICAgICAgJGVsZW1lbnRzID0gJChlbGVtZW50cyksXG4gICAgICAgICAgICBsYXN0VG9wID0gbnVsbCxcbiAgICAgICAgICAgIHJvd3MgPSBbXTtcblxuICAgICAgICAvLyBncm91cCBlbGVtZW50cyBieSB0aGVpciB0b3AgcG9zaXRpb25cbiAgICAgICAgJGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkdGhhdCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgdG9wID0gJHRoYXQub2Zmc2V0KCkudG9wIC0gX3BhcnNlKCR0aGF0LmNzcygnbWFyZ2luLXRvcCcpKSxcbiAgICAgICAgICAgICAgICBsYXN0Um93ID0gcm93cy5sZW5ndGggPiAwID8gcm93c1tyb3dzLmxlbmd0aCAtIDFdIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKGxhc3RSb3cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBpdGVtIG9uIHRoZSByb3csIHNvIGp1c3QgcHVzaCBpdFxuICAgICAgICAgICAgICAgIHJvd3MucHVzaCgkdGhhdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByb3cgdG9wIGlzIHRoZSBzYW1lLCBhZGQgdG8gdGhlIHJvdyBncm91cFxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGguYWJzKGxhc3RUb3AgLSB0b3ApKSA8PSB0b2xlcmFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93c1tyb3dzLmxlbmd0aCAtIDFdID0gbGFzdFJvdy5hZGQoJHRoYXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBzdGFydCBhIG5ldyByb3cgZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKCR0aGF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIGxhc3Qgcm93IHRvcFxuICAgICAgICAgICAgbGFzdFRvcCA9IHRvcDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKiAgX3BhcnNlT3B0aW9uc1xuICAgICogIGhhbmRsZSBwbHVnaW4gb3B0aW9uc1xuICAgICovXG5cbiAgICB2YXIgX3BhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICBieVJvdzogdHJ1ZSxcbiAgICAgICAgICAgIHByb3BlcnR5OiAnaGVpZ2h0JyxcbiAgICAgICAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgICAgICAgIHJlbW92ZTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gJC5leHRlbmQob3B0cywgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgb3B0cy5ieVJvdyA9IG9wdGlvbnM7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucyA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICAgIG9wdHMucmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICogIG1hdGNoSGVpZ2h0XG4gICAgKiAgcGx1Z2luIGRlZmluaXRpb25cbiAgICAqL1xuXG4gICAgdmFyIG1hdGNoSGVpZ2h0ID0gJC5mbi5tYXRjaEhlaWdodCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBfcGFyc2VPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIGhhbmRsZSByZW1vdmVcbiAgICAgICAgaWYgKG9wdHMucmVtb3ZlKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBmaXhlZCBoZWlnaHQgZnJvbSBhbGwgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgIHRoaXMuY3NzKG9wdHMucHJvcGVydHksICcnKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHNlbGVjdGVkIGVsZW1lbnRzIGZyb20gYWxsIGdyb3Vwc1xuICAgICAgICAgICAgJC5lYWNoKG1hdGNoSGVpZ2h0Ll9ncm91cHMsIGZ1bmN0aW9uKGtleSwgZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBncm91cC5lbGVtZW50cyA9IGdyb3VwLmVsZW1lbnRzLm5vdCh0aGF0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBjbGVhbnVwIGVtcHR5IGdyb3Vwc1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA8PSAxICYmICFvcHRzLnRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoaXMgZ3JvdXAgc28gd2UgY2FuIHJlLWFwcGx5IGxhdGVyIG9uIGxvYWQgYW5kIHJlc2l6ZSBldmVudHNcbiAgICAgICAgbWF0Y2hIZWlnaHQuX2dyb3Vwcy5wdXNoKHtcbiAgICAgICAgICAgIGVsZW1lbnRzOiB0aGlzLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0c1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtYXRjaCBlYWNoIGVsZW1lbnQncyBoZWlnaHQgdG8gdGhlIHRhbGxlc3QgZWxlbWVudCBpbiB0aGUgc2VsZWN0aW9uXG4gICAgICAgIG1hdGNoSGVpZ2h0Ll9hcHBseSh0aGlzLCBvcHRzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAqICBwbHVnaW4gZ2xvYmFsIG9wdGlvbnNcbiAgICAqL1xuXG4gICAgbWF0Y2hIZWlnaHQudmVyc2lvbiA9ICcwLjcuMCc7XG4gICAgbWF0Y2hIZWlnaHQuX2dyb3VwcyA9IFtdO1xuICAgIG1hdGNoSGVpZ2h0Ll90aHJvdHRsZSA9IDgwO1xuICAgIG1hdGNoSGVpZ2h0Ll9tYWludGFpblNjcm9sbCA9IGZhbHNlO1xuICAgIG1hdGNoSGVpZ2h0Ll9iZWZvcmVVcGRhdGUgPSBudWxsO1xuICAgIG1hdGNoSGVpZ2h0Ll9hZnRlclVwZGF0ZSA9IG51bGw7XG4gICAgbWF0Y2hIZWlnaHQuX3Jvd3MgPSBfcm93cztcbiAgICBtYXRjaEhlaWdodC5fcGFyc2UgPSBfcGFyc2U7XG4gICAgbWF0Y2hIZWlnaHQuX3BhcnNlT3B0aW9ucyA9IF9wYXJzZU9wdGlvbnM7XG5cbiAgICAvKlxuICAgICogIG1hdGNoSGVpZ2h0Ll9hcHBseVxuICAgICogIGFwcGx5IG1hdGNoSGVpZ2h0IHRvIGdpdmVuIGVsZW1lbnRzXG4gICAgKi9cblxuICAgIG1hdGNoSGVpZ2h0Ll9hcHBseSA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHRzID0gX3BhcnNlT3B0aW9ucyhvcHRpb25zKSxcbiAgICAgICAgICAgICRlbGVtZW50cyA9ICQoZWxlbWVudHMpLFxuICAgICAgICAgICAgcm93cyA9IFskZWxlbWVudHNdO1xuXG4gICAgICAgIC8vIHRha2Ugbm90ZSBvZiBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcbiAgICAgICAgICAgIGh0bWxIZWlnaHQgPSAkKCdodG1sJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgLy8gZ2V0IGhpZGRlbiBwYXJlbnRzXG4gICAgICAgIHZhciAkaGlkZGVuUGFyZW50cyA9ICRlbGVtZW50cy5wYXJlbnRzKCkuZmlsdGVyKCc6aGlkZGVuJyk7XG5cbiAgICAgICAgLy8gY2FjaGUgdGhlIG9yaWdpbmFsIGlubGluZSBzdHlsZVxuICAgICAgICAkaGlkZGVuUGFyZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGF0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICR0aGF0LmRhdGEoJ3N0eWxlLWNhY2hlJywgJHRoYXQuYXR0cignc3R5bGUnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRlbXBvcmFyaWx5IG11c3QgZm9yY2UgaGlkZGVuIHBhcmVudHMgdmlzaWJsZVxuICAgICAgICAkaGlkZGVuUGFyZW50cy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgICAgICAvLyBnZXQgcm93cyBpZiB1c2luZyBieVJvdywgb3RoZXJ3aXNlIGFzc3VtZSBvbmUgcm93XG4gICAgICAgIGlmIChvcHRzLmJ5Um93ICYmICFvcHRzLnRhcmdldCkge1xuXG4gICAgICAgICAgICAvLyBtdXN0IGZpcnN0IGZvcmNlIGFuIGFyYml0cmFyeSBlcXVhbCBoZWlnaHQgc28gZmxvYXRpbmcgZWxlbWVudHMgYnJlYWsgZXZlbmx5XG4gICAgICAgICAgICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoYXQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ID0gJHRoYXQuY3NzKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyB0ZW1wb3JhcmlseSBmb3JjZSBhIHVzYWJsZSBkaXNwbGF5IHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGRpc3BsYXkgIT09ICdpbmxpbmUtYmxvY2snICYmIGRpc3BsYXkgIT09ICdmbGV4JyAmJiBkaXNwbGF5ICE9PSAnaW5saW5lLWZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNhY2hlIHRoZSBvcmlnaW5hbCBpbmxpbmUgc3R5bGVcbiAgICAgICAgICAgICAgICAkdGhhdC5kYXRhKCdzdHlsZS1jYWNoZScsICR0aGF0LmF0dHIoJ3N0eWxlJykpO1xuXG4gICAgICAgICAgICAgICAgJHRoYXQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiBkaXNwbGF5LFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy10b3AnOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi10b3AnOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICdtYXJnaW4tYm90dG9tJzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLXRvcC13aWR0aCc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1ib3R0b20td2lkdGgnOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGdldCB0aGUgYXJyYXkgb2Ygcm93cyAoYmFzZWQgb24gZWxlbWVudCB0b3AgcG9zaXRpb24pXG4gICAgICAgICAgICByb3dzID0gX3Jvd3MoJGVsZW1lbnRzKTtcblxuICAgICAgICAgICAgLy8gcmV2ZXJ0IG9yaWdpbmFsIGlubGluZSBzdHlsZXNcbiAgICAgICAgICAgICRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciAkdGhhdCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoYXQuYXR0cignc3R5bGUnLCAkdGhhdC5kYXRhKCdzdHlsZS1jYWNoZScpIHx8ICcnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJC5lYWNoKHJvd3MsIGZ1bmN0aW9uKGtleSwgcm93KSB7XG4gICAgICAgICAgICB2YXIgJHJvdyA9ICQocm93KSxcbiAgICAgICAgICAgICAgICB0YXJnZXRIZWlnaHQgPSAwO1xuXG4gICAgICAgICAgICBpZiAoIW9wdHMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBhcHBseSB0byByb3dzIHdpdGggb25seSBvbmUgaXRlbVxuICAgICAgICAgICAgICAgIGlmIChvcHRzLmJ5Um93ICYmICRyb3cubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgJHJvdy5jc3Mob3B0cy5wcm9wZXJ0eSwgJycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSB0aGUgcm93IGFuZCBmaW5kIHRoZSBtYXggaGVpZ2h0XG4gICAgICAgICAgICAgICAgJHJvdy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkdGhhdCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9ICR0aGF0LmF0dHIoJ3N0eWxlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ID0gJHRoYXQuY3NzKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGVtcG9yYXJpbHkgZm9yY2UgYSB1c2FibGUgZGlzcGxheSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzcGxheSAhPT0gJ2lubGluZS1ibG9jaycgJiYgZGlzcGxheSAhPT0gJ2ZsZXgnICYmIGRpc3BsYXkgIT09ICdpbmxpbmUtZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHdlIGdldCB0aGUgY29ycmVjdCBhY3R1YWwgaGVpZ2h0IChhbmQgbm90IGEgcHJldmlvdXNseSBzZXQgaGVpZ2h0IHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB2YXIgY3NzID0geyAnZGlzcGxheSc6IGRpc3BsYXkgfTtcbiAgICAgICAgICAgICAgICAgICAgY3NzW29wdHMucHJvcGVydHldID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICR0aGF0LmNzcyhjc3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIG1heCBoZWlnaHQgKGluY2x1ZGluZyBwYWRkaW5nLCBidXQgbm90IG1hcmdpbilcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR0aGF0Lm91dGVySGVpZ2h0KGZhbHNlKSA+IHRhcmdldEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gJHRoYXQub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV2ZXJ0IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGF0LmF0dHIoJ3N0eWxlJywgc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoYXQuY3NzKCdkaXNwbGF5JywgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRhcmdldCBzZXQsIHVzZSB0aGUgaGVpZ2h0IG9mIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgICAgICAgIHRhcmdldEhlaWdodCA9IG9wdHMudGFyZ2V0Lm91dGVySGVpZ2h0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaXRlcmF0ZSB0aGUgcm93IGFuZCBhcHBseSB0aGUgaGVpZ2h0IHRvIGFsbCBlbGVtZW50c1xuICAgICAgICAgICAgJHJvdy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyICR0aGF0ID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxQYWRkaW5nID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIGRvbid0IGFwcGx5IHRvIGEgdGFyZ2V0XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMudGFyZ2V0ICYmICR0aGF0LmlzKG9wdHMudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHBhZGRpbmcgYW5kIGJvcmRlciBjb3JyZWN0bHkgKHJlcXVpcmVkIHdoZW4gbm90IHVzaW5nIGJvcmRlci1ib3gpXG4gICAgICAgICAgICAgICAgaWYgKCR0aGF0LmNzcygnYm94LXNpemluZycpICE9PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxQYWRkaW5nICs9IF9wYXJzZSgkdGhhdC5jc3MoJ2JvcmRlci10b3Atd2lkdGgnKSkgKyBfcGFyc2UoJHRoYXQuY3NzKCdib3JkZXItYm90dG9tLXdpZHRoJykpO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFBhZGRpbmcgKz0gX3BhcnNlKCR0aGF0LmNzcygncGFkZGluZy10b3AnKSkgKyBfcGFyc2UoJHRoYXQuY3NzKCdwYWRkaW5nLWJvdHRvbScpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGhlaWdodCAoYWNjb3VudGluZyBmb3IgcGFkZGluZyBhbmQgYm9yZGVyKVxuICAgICAgICAgICAgICAgICR0aGF0LmNzcyhvcHRzLnByb3BlcnR5LCAodGFyZ2V0SGVpZ2h0IC0gdmVydGljYWxQYWRkaW5nKSArICdweCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJldmVydCBoaWRkZW4gcGFyZW50c1xuICAgICAgICAkaGlkZGVuUGFyZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGF0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICR0aGF0LmF0dHIoJ3N0eWxlJywgJHRoYXQuZGF0YSgnc3R5bGUtY2FjaGUnKSB8fCBudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVzdG9yZSBzY3JvbGwgcG9zaXRpb24gaWYgZW5hYmxlZFxuICAgICAgICBpZiAobWF0Y2hIZWlnaHQuX21haW50YWluU2Nyb2xsKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKChzY3JvbGxUb3AgLyBodG1sSGVpZ2h0KSAqICQoJ2h0bWwnKS5vdXRlckhlaWdodCh0cnVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAqICBtYXRjaEhlaWdodC5fYXBwbHlEYXRhQXBpXG4gICAgKiAgYXBwbGllcyBtYXRjaEhlaWdodCB0byBhbGwgZWxlbWVudHMgd2l0aCBhIGRhdGEtbWF0Y2gtaGVpZ2h0IGF0dHJpYnV0ZVxuICAgICovXG5cbiAgICBtYXRjaEhlaWdodC5fYXBwbHlEYXRhQXBpID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBncm91cHMgPSB7fTtcblxuICAgICAgICAvLyBnZW5lcmF0ZSBncm91cHMgYnkgdGhlaXIgZ3JvdXBJZCBzZXQgYnkgZWxlbWVudHMgdXNpbmcgZGF0YS1tYXRjaC1oZWlnaHRcbiAgICAgICAgJCgnW2RhdGEtbWF0Y2gtaGVpZ2h0XSwgW2RhdGEtbWhdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgZ3JvdXBJZCA9ICR0aGlzLmF0dHIoJ2RhdGEtbWgnKSB8fCAkdGhpcy5hdHRyKCdkYXRhLW1hdGNoLWhlaWdodCcpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBJZCBpbiBncm91cHMpIHtcbiAgICAgICAgICAgICAgICBncm91cHNbZ3JvdXBJZF0gPSBncm91cHNbZ3JvdXBJZF0uYWRkKCR0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzW2dyb3VwSWRdID0gJHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFwcGx5IG1hdGNoSGVpZ2h0IHRvIGVhY2ggZ3JvdXBcbiAgICAgICAgJC5lYWNoKGdyb3VwcywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm1hdGNoSGVpZ2h0KHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqICBtYXRjaEhlaWdodC5fdXBkYXRlXG4gICAgKiAgdXBkYXRlcyBtYXRjaEhlaWdodCBvbiBhbGwgY3VycmVudCBncm91cHMgd2l0aCB0aGVpciBjb3JyZWN0IG9wdGlvbnNcbiAgICAqL1xuXG4gICAgdmFyIF91cGRhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAobWF0Y2hIZWlnaHQuX2JlZm9yZVVwZGF0ZSkge1xuICAgICAgICAgICAgbWF0Y2hIZWlnaHQuX2JlZm9yZVVwZGF0ZShldmVudCwgbWF0Y2hIZWlnaHQuX2dyb3Vwcyk7XG4gICAgICAgIH1cblxuICAgICAgICAkLmVhY2gobWF0Y2hIZWlnaHQuX2dyb3VwcywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtYXRjaEhlaWdodC5fYXBwbHkodGhpcy5lbGVtZW50cywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoSGVpZ2h0Ll9hZnRlclVwZGF0ZSkge1xuICAgICAgICAgICAgbWF0Y2hIZWlnaHQuX2FmdGVyVXBkYXRlKGV2ZW50LCBtYXRjaEhlaWdodC5fZ3JvdXBzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtYXRjaEhlaWdodC5fdXBkYXRlID0gZnVuY3Rpb24odGhyb3R0bGUsIGV2ZW50KSB7XG4gICAgICAgIC8vIHByZXZlbnQgdXBkYXRlIGlmIGZpcmVkIGZyb20gYSByZXNpemUgZXZlbnRcbiAgICAgICAgLy8gd2hlcmUgdGhlIHZpZXdwb3J0IHdpZHRoIGhhc24ndCBhY3R1YWxseSBjaGFuZ2VkXG4gICAgICAgIC8vIGZpeGVzIGFuIGV2ZW50IGxvb3BpbmcgYnVnIGluIElFOFxuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgaWYgKHdpbmRvd1dpZHRoID09PSBfcHJldmlvdXNSZXNpemVXaWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9wcmV2aW91c1Jlc2l6ZVdpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aHJvdHRsZSB1cGRhdGVzXG4gICAgICAgIGlmICghdGhyb3R0bGUpIHtcbiAgICAgICAgICAgIF91cGRhdGUoZXZlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKF91cGRhdGVUaW1lb3V0ID09PSAtMSkge1xuICAgICAgICAgICAgX3VwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF91cGRhdGUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIF91cGRhdGVUaW1lb3V0ID0gLTE7XG4gICAgICAgICAgICB9LCBtYXRjaEhlaWdodC5fdGhyb3R0bGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgKiAgYmluZCBldmVudHNcbiAgICAqL1xuXG4gICAgLy8gYXBwbHkgb24gRE9NIHJlYWR5IGV2ZW50XG4gICAgJChtYXRjaEhlaWdodC5fYXBwbHlEYXRhQXBpKTtcblxuICAgIC8vIHVwZGF0ZSBoZWlnaHRzIG9uIGxvYWQgYW5kIHJlc2l6ZSBldmVudHNcbiAgICAkKHdpbmRvdykuYmluZCgnbG9hZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIG1hdGNoSGVpZ2h0Ll91cGRhdGUoZmFsc2UsIGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIHRocm90dGxlZCB1cGRhdGUgaGVpZ2h0cyBvbiByZXNpemUgZXZlbnRzXG4gICAgJCh3aW5kb3cpLmJpbmQoJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIG1hdGNoSGVpZ2h0Ll91cGRhdGUodHJ1ZSwgZXZlbnQpO1xuICAgIH0pO1xuXG59KTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHt9XX0se30sWzFdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
