// -------------- 60070018 Thitikorn Padungwatsawat -------------- //

// Set of Fortunes starting from A to Z.
LuckyDraw = [
	"A beautiful, smart, and loving person will be coming into your life.",
	"A dubious friend may be an enemy in camouflage.",
	"A light heart carries you through all the hard times.",
	"A good friendship is often more important than a passionate romance.",
	"A smile is your personal welcome mat.",
	"A small donation is call for. It’s the right thing to do.",
	"Accept something that you cannot change, and you will feel better.",
	"Any decision you have to make tomorrow is a good decision.",
	"Believe in yourself and others will too.",
	"Be careful or you could fall for some tricks today.",
	"Congratulations! You are on your way.",
	"Change is happening in your life, so go with the flow!",
	"Disbelief destroys the magic.",
	"Do not make extra work for yourself.",
	"Don’t confuse recklessness with confidence.",
	"Don’t worry; prosperity will knock on your door soon.",
	"Education is the ability to meet life’s situations.",
	"Every flower blooms in its own sweet time.",
	"Every flower blooms in its own sweet time.",
	"Failure is the path of lease persistence.",
	"Fear and desire – two sides of the same coin.",
	"From listening comes wisdom and from speaking repentance.",
	"Go for the gold today! You’ll be the champion of whatever.",
	"Good news will come to you by mail.",
	"Go take a rest; you deserve it.",
	"Happiness begins with facing life with a smile and a wink.",
	"How many of you believe in psycho-kinesis? Raise my hand.",
	"Hard words break no bones, fine words butter no parsnips.",
	"If a true sense of value is to be yours it must come through service.",
	"If you look in the right places, you can find some good offerings.",
	"If you’re feeling down, try throwing yourself into your work.",
	"Keep your face to the sunshine and you will never see shadows.",
	"Let the world be filled with tranquility and goodwill.",
	"Listen to everyone. Ideas come from everywhere.",
	"Love is a warm fire to keep the soul warm.",
	"Meditation with an old enemy is advised.",
	"Nature, time and patience are the three great physicians.",
	"Never fear! The end of something marks the start of something new.",
	"No one can walk backwards into the future.",
	"One can never fill another’s shoes, rather he must outgrow the old shoes.",
	"Others can help you now.",
	"People find it difficult to resist your persuasive manner.",
	"Practice makes perfect.",
	"Put your mind into planning today. Look into the future.",
	"Rest has a peaceful effect on your physical and emotional health.",
	"Romance moves you in a new direction.",
	"Resting well is as important as working hard.",
	"Say hello to others. You will have a happier day.",
	"Small confidences mark the onset of a friendship.",
	"Someone you care about seeks reconciliation.",
	"Staying close to home is going to be best for your morale today.",
	"Technology is the art of arranging the world so we do not notice it.",
	"The greatest achievement in life is to stand up again after falling.",
	"The saints are the sinners who keep on trying.",
	"The weather is wonderful.",
	"Use your eloquence where it will do the most good.",
	"“Welcome” is a powerful word.",
	"What’s yours in mine, and what’s mine is mine.",
	"Wish you happiness.",
	"You are working hard.",
	"Your loyalty is a virtue, but not when it’s wedded with blind stubbornness.",
	"Your mind is creative, original and alert.",
	"Your life will be happy and peaceful.",
	"Your happiness is before you, not behind you! Cherish it.",
	"Your home is the center of great love.",
	"Your character can be described as natural and unrestrained.",
];

// Apply for first time fortune.

function play() {
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");
	setTimeout(function() {
		getFortune();
	}, 2250);
	cookie2.onclick = function() {
		replay();
	};
}

function getFortune() {
	fortune.innerText = LuckyDraw[Math.floor(Math.random() * LuckyDraw.length)]
	fortune.style.opacity = 1;
	fortune.style.top = "96 px";
}

// Apply when click on fortuned cookie.

function reFortune() {
	fortune.innerText = LuckyDraw[Math.floor(Math.random() * LuckyDraw.length)]
	fortune.style.opacity = 0;
	setTimeout(function() {
		fortune.style.opacity = 1
	}, 2250);
	fortune.style.top = "96 px";
}

function replay() {
	cookie2.classList.toggle("cookie-show");
	setTimeout(function() {
		cookie2.classList.toggle("cookie-show");
	}, 500);
	setTimeout(function() {
		reFortune();
	}, 250);
}