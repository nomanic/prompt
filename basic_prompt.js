/**
 * basic_prompt.js
 *
 * A JavaScript micro-framework for alert windows
 *
 * @author     Neil Oman
 * @version    1
 * @copyright  Copyright 2016 Neil Oman
 * @license    Dual licensed under MIT and GPL
 */
 prompt_skins={
	spacer: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAnNCSVQICFXsRgQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzA4LzE2GP4VnAAAAAtJREFUCB1jyGUDAADjAHRrwf6MAAAAAElFTkSuQmCC',
	screen:{
		default:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADICAMAAACu2siZAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8xMS8xNqfTPV8AAAB7UExURQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOLi4nZ8g/X19fj4+FFaYkhRWTE7RZmZmZ+fn6WlpaysrL+/v/Ly8vn5+f///2n9/7oAAAAgdFJOUwAAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYkMDY5vb7+PJi1wAABClJREFUeNrt3FFu1DAUheFz7YiXoUtg/wtDbACEhEQmlwfHjjOEaWxHtJX+IyhDHz/Z18eZaS1IsvTXyqv1C6ni+YvnP3JJFja7B0NyQJj1iqKFCq82BPFw/a16G6KFQmePhBjWejs+L4wWi9/6pSCSR8VE5vL1i1yyWPyyIYJP/LJeEZw2vx0igg9+tgK6ef6Om5tPadaZZcFqETIGtwEoz2IuJcNEOaX9WqKNELyD/esy92JqblNZfjtE/I4EXV708jaeSmUxs1u8YfVqft5/5p1trqnawC+f0TmRm8KPddm5LEaTWTCzcHsB51w++e/1WmeaJLO0CiMyZxPN5DLJFcoANObf+V2cDltJCtLWncnp5Huvgtn2IIY0+UlmFnac5CxgWXJh+w5pE9Q2A3l40L6FM1vgmcGAYQK0tchg0rKD89segfU3tgYDDmMBEEAA32/u9/TPDGBffL6/4qcpvb2E1WGiZsX7HI+f9LlcmlB6VlSi5mWJ0djC3YK22DM/BaW3nPbvNpGcxeXLwe51Xz/iNrkpve9Ojo7hOYZlVjwegZJ8Au+5XzTTPwQleTpE0gc/yN8+MZosHuDkD6imGqPqMzNkV2MsncUHDWYlDLnPkKND2Op/jmogNeayuzA1pmk4+g7Q4eshdEkK0I0xhvJTI6QVrzqFmYFdM7A+heFrX3+7QwSRdkEXPfCqHujMwPYZ6CvgNg9J6wx0305h0ocYnEN45Bj2kF8zA5t7oNeHCHx9LYYac02NIaOAPNBqnoFeAKEbOUpC9WtQSFuL8e1HveDrLoLh4f+kAU/1TQS/rhro1JiLeiALsHMTB4kHWp187tVdmPSfwjzQ6tbz6ipH+oZgeDiWSVOLWa9ypB+SHnhRD2Qhdt7lQik0pNWwvCfCA62eBeh8uOiyqxwZO0S4iQzdRBYwRrLwRHqsxeSnMeh1thhO4UtOYfT6DbnKXXGVQ3DsEIFugDGIIjhSA7nKXXCVowgO1MDq50QwaRx/fLjowqscGZuBLL6hmwg9ZqDFsIUvqjH0mM4Wwyl80SmMXq8hM/CiGUiGANnB3Xs4iCI4UgPZwqOZaDFDNZC3NUebIFuYGvMuANnBQzcRekx3i2ELXzcD2cUdZzAr8LoVyALsW4KsQHrg+wBkBw9d5SiCvTWQLcwMpEhTpFmBhJvIW99E6DGdLYYtzAwEEEAACYBc5T76VY4i2FcD2cLMQAABBJAA+PaA9JiuFsMKZAsDCCCABEAAPz4gRbCnBrICRzNtL3+hwQwEEEAACYAAAgggARBAAAEkAAIIIIAEQAABBJAACCCAABIAAQQQQAIggAACSAAEEEAAASQAAggggPzup4b4IeAMzNlUVGbb6y/s53NZvm6vYwX4/RYMndf37/xNxyuQcAoDCCCABEAAAQSQAPh/8geLyoVuvUmW1gAAAABJRU5ErkJggg=='
	},
	close: {
		default: {x:280,y:21,width:20,height:20}
	},
	buttons: {
		default: {x:10,y:153,width:300}
	},
	title: {
		default: {x:36,y:56,width:258,col:'#65778C',fnt:21,lnh:26}
	},
	text: {
		default: {x:36,y:82,width:258,height:50,col:'#ACACAC',fnt:12,lnh:14}
	},
	colors: {
		default: '#3FB3E2'
	}
};
prompt={
	tweenin: new tweenable(),
	tweenout: new tweenable(),
	durationin: 1000,
	durationout: 500,
	op: 0.3,
	loadCSS: function() {
       var file = document.createElement("link");
       file.setAttribute("rel", "stylesheet");
       file.setAttribute("type", "text/css");
       file.setAttribute("href", "https://fonts.googleapis.com/css?family=Lato|Oswald");
       document.head.appendChild(file);
    },
    ob: function(orange,quebec){return (typeof orange==='string')?((orange==='')?quebec:document.getElementById(orange)):orange;},
	create: function(options) {
		options=options?options:{};
		if (!prompt.ob('prompt_8217')) {
			prompt.loadCSS();
			var e = document.createElement('div');
			var ln='<div id="overlay_8217" style="margin:0px;padding:0px;position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:9000;background-color:#000;opacity:0;filter:alpha(opacity=0);display:none;"></div><div id="prompt_8217" style="position:fixed;width:320px;height:200px;left:50%;top:50%;margin-top:-100px;margin-left:-160px;z-index:9001;opacity:0;filter:alpha(opacity=0);display:none;"></div>';
			e.innerHTML = ln;
			while(e.firstChild) {
				document.body.appendChild(e.firstChild);
			}
		}
		var p=prompt.ob('prompt_8217'),
		o=prompt.ob('overlay_8217'),
		st=options.style?options.style:'default',
		op=(options.backOpacity||(options.backOpacity===0))?options.backOpacity:0.3,
		bC=options.backColor?options.backColor:'#000',
		zi=options.zIndex?options.zIndex:9000;
		st=prompt_skins.screen[st]!=undefined?st:'default';
		prompt.st=st;
		prompt.op=op;
		prompt.durationin=options.durationin?options.durationin:1000;
		prompt.durationout=options.durationout?options.durationout:500;
		o.style.zIndex=zi;
		p.style.zIndex=(zi+1);
		o.style.backgroundColor=bC;
		p.style.backgroundImage='url('+prompt_skins.screen[st]+')';
		var cl=prompt_skins.close[st]!=undefined?st:'default';
		ln='<img id="close_8217" src="'+prompt_skins.spacer+'" onclick="prompt.hide();" style="position:absolute;top:'+prompt_skins.close[cl]['y']+'px;left:'+prompt_skins.close[cl]['x']+'px;width:'+prompt_skins.close[cl]['width']+'px;height:'+prompt_skins.close[cl]['height']+'px;cursor:pointer;"/>';
		cl=prompt_skins.buttons[st]!=undefined?st:'default';
		ln+='<div id="buttons_8217" style="font-family:Oswald;position:absolute;top:'+prompt_skins.buttons[cl]['y']+'px;left:'+prompt_skins.buttons[cl]['x']+'px;width:'+prompt_skins.buttons[cl]['width']+'px;height:29px;"></div>';
		cl=prompt_skins.title[st]!=undefined?st:'default';
		ln+='<div id="title_8217" style="font-family:Oswald;position:absolute;top:'+prompt_skins.title[cl]['y']+'px;left:'+prompt_skins.title[cl]['x']+'px;width:'+prompt_skins.title[cl]['width']+'px;height:'+prompt_skins.title[cl]['lnh']+'px;line-height:'+prompt_skins.title[cl]['lnh']+'px;font-size:'+prompt_skins.title[cl]['fnt']+'px;color:'+prompt_skins.title[cl]['col']+'"></div>';
		cl=prompt_skins.text[st]!=undefined?st:'default';
		ln+='<div id="text_8217" style="font-family:Lato;position:absolute;top:'+prompt_skins.text[cl]['y']+'px;left:'+prompt_skins.text[cl]['x']+'px;width:'+prompt_skins.text[cl]['width']+'px;height:'+prompt_skins.text[cl]['height']+'px;line-height:'+prompt_skins.text[cl]['lnh']+'px;font-size:'+prompt_skins.text[cl]['fnt']+'px;color:'+prompt_skins.text[cl]['col']+'"></div>';
		p.innerHTML=ln;
		prompt.setwords(options);
		prompt.tweenin.create({
			duration:	prompt.durationin,
			target:		[prompt.ob('overlay_8217'),prompt.ob('prompt_8217')],
			step:		function(ar,tw) {
							ar[1].style.opacity=tw;
							ar[0].style.opacity=tw*prompt.op;
							ar[1].style.filter='alpha(opacity='+Math.floor(tw*10)+')';
							ar[0].style.filter='alpha(opacity='+Math.floor(tw*prompt.op*10)+')';
						}
		});
		prompt.tweenout.create({
			duration:	prompt.durationout,
			target:		[prompt.ob('overlay_8217'),prompt.ob('prompt_8217')],
			step:		function(ar,tw) {
							ar[1].style.opacity=(1-tw);
							ar[0].style.opacity=(prompt.op-(tw*prompt.op));
							ar[1].style.filter='alpha(opacity='+Math.floor((1-tw)*10)+')';
							ar[0].style.filter='alpha(opacity='+Math.floor((prompt.op-(tw*prompt.op))*10)+')';
						},
			finish:		function() {
							prompt.ob('prompt_8217').style.display=prompt.ob('overlay_8217').style.display='none';
						}
		});
	},
	setwords: function(options) {
		prompt.ob('title_8217').innerHTML=options.title;
		prompt.ob('text_8217').innerHTML=options.text;
		var ln='';
		if (options.buttons) {
			options.buttons.reverse();
			for (f=0;f<options.buttons.length;f++) {
				var cl=options.buttons[f].color?options.buttons[f].color:prompt_skins.colors[prompt.st];
				ln+='<div id="buttons_8217_'+f+'" style="cursor:pointer;font-family:Oswald;float:right;margin-right:8px;width:66px;height:29px;line-height:29px;font-size:15;color:#fff;background-color:'+cl+';-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;text-align:center;">'+options.buttons[f].text+'</div>';
			}
		}
		else {
			var cl=prompt_skins.colors[prompt.st];
			ln+='<div id="buttons_8217_0" onclick="prompt.hide();" style="cursor:pointer;font-family:Oswald;float:right;width:66px;height:29px;line-height:29px;font-size:15;color:#fff;background-color:'+cl+';-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;text-align:center;">OK</div>';
		}
		prompt.ob('buttons_8217').innerHTML=ln;
		if (options.buttons) {
			for (f=0;f<options.buttons.length;f++) {
				prompt.ob('buttons_8217_'+f).onclick=options.buttons[f].fn?options.buttons[f].fn:prompt.hide;
			}
		}
	},
	show: function(options) {
		if (options) {
			prompt.create(options);
		}
		prompt.ob('prompt_8217').style.display=prompt.ob('overlay_8217').style.display='block';
		prompt.tweenin.start();
	},
	hide: function() {
		prompt.ob('prompt_8217').style.display=prompt.ob('overlay_8217').style.display='block';
		prompt.tweenout.start();
	}
};
