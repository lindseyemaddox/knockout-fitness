!function($){$(document).ready(function(){function n(n,t){n.toggleClass("open"),t.toggleClass("open")}function t(n){var t=$(".toggle-nav span.m");$(".toggle-nav span.e").toggleClass("btn-close"),n.hasClass("open")?t.text("E"):t.text("M")}$(".droppers").on("click",function(){n($(this),$(".nav-pane")),t($(this))})})}(jQuery);