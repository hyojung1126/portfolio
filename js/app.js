$(function () {
// load menu
    $('.header').load('../inc/header.html')

// 포트폴리오 페이지
$('.tab_menu p').click(function(){
    $('.tab_menu p').removeClass('active')
    $(this).addClass('active')
})

$('.tab_menu p').eq(0).click(function(){
    $('.portfolio_contents .contents').show()
})

$('.tab_menu p').eq(1).click(function(){
    $('.portfolio_contents .contents').hide()
    $('.portfolio_contents .contents.web').show()
})

$('.tab_menu p').eq(2).click(function(){
    $('.portfolio_contents .contents').hide()
    $('.portfolio_contents .contents.m').show()
})

$('.tab_menu p').eq(3).click(function(){
    $('.portfolio_contents .contents').hide()
    $('.portfolio_contents .contents.UI').show()
})
    
})