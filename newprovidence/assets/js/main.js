(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function() {
	paintHeader();
	function paintHeader() {
		if ($(window).scrollTop() > 0) {
			$('.page-header-fixed').addClass('page-header--bg');
		} else {
			$('.page-header-fixed').removeClass('page-header--bg');
		}
	}

	$('.dropdown-toggle').click(function(e) {
		e.preventDefault();

		var $dropdownContent = $('#' + $(this).attr('data-toggle'));

		$dropdownContent.toggleClass('opened');

		$('.page-header').toggleClass('page-header--dropdown-opened');
	});

	$(window).on('scroll', function () {
		paintHeader();
	});

	$('.reviews-slider').slick({
		slidesToShow: 1,
		padding: 0,
		centerPadding: 0,
		centerMode: true,
		dots: true,
		arrows: true,
		initialSlide: 1,
		appendArrows: '.slick-arrows',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		appendDots: '.reviews-slider-dots',
		customPaging: function customPaging(slider, i) {
			var photo = $(slider.$slides[i]).data('photo');
			return '<button type="button" style="background-image: url(assets/img/' + photo + ');"></button>';
		},
		responsive: [{
		breakpoint: 991,
		settings: {
		arrows: false } }] });

	$('.interface-slider').slick({
		centerPadding: 0,
		centerMode: true,
		dots: false,
		arrows: false,
		slidesToShow: 3,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2500
	});

	$(".fancy-vid").fancybox({
		fitToView: true,
		transitionIn: 'none',
		transitionOut: 'none',
		width: '100%',
		height: '100%',
		maxWidth: '780',
		maxHeight: '600',
		helpers: {
			media: {}
		}
	});
});

},{}]},{},[1]);
