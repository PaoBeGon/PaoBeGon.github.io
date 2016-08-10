$(document).ready(initPage);

function initPage()
{
	$("#ul a").click(navigatePage);
	initScrollMagic();
}

function navigatePage(evt)
{
	evt.preventDefault();
	$("#ul a").removeClass('active');
	$(this).addClass('active');

	var section = $(this).attr('href');
	var objSection = $(section);

	TweenMax.to('body', 1, {
		scrollTo:{y:objSection.position().top},
		ease:Quart.easeOut
	});
	console.log(objSection.position().top);
}

// function initScrollMagic()
// {
// 	var controller = new ScrollMagic.Controller();

// 	var blockTween = new TimelineMax();

// 	blockTween.to('#sobremi', 1.5, {backgroundColor: 'red'});
// 	blockTween.to('#el_pato', 1.5, {scale: 1.2});

// 	var portafolioTween = new TimelineMax();

// 	portafolioTween.to('#portafolio', 1.5, {backgroundColor: 'yellow'});
// 	portafolioTween.to('#portafolio', 1.5, {scale: 0.8});


// 	var sobreMiScene = new ScrollMagic.Scene({
//     	triggerElement: '#sobremi'
// 	})
// 	.setTween(blockTween)
// 	.addIndicators()
// 	.addTo(controller);

// 	var portafolioMiScene = new ScrollMagic.Scene({
//     	triggerElement: '#portafolio'
// 	})
// 	.setTween(portafolioTween)
// 	.addIndicators()
// 	.addTo(controller);
// }