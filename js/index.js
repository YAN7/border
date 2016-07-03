/*
* @Author: YAN7
* @Date:   2016-07-03 09:21:23
* @Last Modified by:   YAN7
* @Last Modified time: 2016-07-03 11:46:19
*/
$(function() {
	/* 1.逻辑：每个边框都是一个div，先绝对定位到可视范围外，当触发mouseenter事件时，移动到相对位置
	 * 2.步骤：找到每一个li，设置mouseenter和mosueleave事件
	 *
	 */
 	$('ul li').on('mouseenter',function() { console.log(123);
 		$(this).find('.top').stop().animate({left: 0}, 300);
 		$(this).find('.bottom').stop().animate({left: 5}, 300);
 		$(this).find('.left').stop().animate({top: 5}, 300);
 		$(this).find('.right').stop().animate({top: 5}, 300);
 		$(this).find('p').stop().animate({top: 185}, 300);
 	})
 	$('ul li').on('mouseleave',function() { console.log(456);
 		$(this).find('.top').stop().animate({left: -390}, 300);
 		$(this).find('.bottom').stop().animate({left: 390}, 300);
 		$(this).find('.left').stop().animate({top: -215}, 300);
 		$(this).find('.right').stop().animate({top: 220}, 300);
 		$(this).find('p').stop().animate({top: 220}, 300);
 	})



	 // 功能2： 给边框和文字底色加上不同颜色
	 var colorArr = ['lightgreen', 'cyan', 'pink', 'skyblue', 'yellow', 'red'];

	 $('ul li').each(function() {
	 	// 获取当前index
	 	$(this).find('div').css('backgroundColor',colorArr[$(this).index()]);
	 	$(this).find('p').css('backgroundColor',colorArr[$(this).index()]);
	 })

})