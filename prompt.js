/**
 * prompt.js
 *
 * A JavaScript micro-framework for animating elements
 *
 * @author     Neil Oman
 * @version    1
 * @copyright  Copyright 2016 Neil Oman
 * @license    Dual licensed under MIT and GPL
 */
 prompt_skins={
	spacer: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAnNCSVQICFXsRgQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzA4LzE2GP4VnAAAAAtJREFUCB1jyGUDAADjAHRrwf6MAAAAAElFTkSuQmCC',
	screen:{
		default:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADICAMAAACu2siZAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8xMS8xNqfTPV8AAAB7UExURQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOLi4nZ8g/X19fj4+FFaYkhRWTE7RZmZmZ+fn6WlpaysrL+/v/Ly8vn5+f///2n9/7oAAAAgdFJOUwAAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYkMDY5vb7+PJi1wAABClJREFUeNrt3FFu1DAUheFz7YiXoUtg/wtDbACEhEQmlwfHjjOEaWxHtJX+IyhDHz/Z18eZaS1IsvTXyqv1C6ni+YvnP3JJFja7B0NyQJj1iqKFCq82BPFw/a16G6KFQmePhBjWejs+L4wWi9/6pSCSR8VE5vL1i1yyWPyyIYJP/LJeEZw2vx0igg9+tgK6ef6Om5tPadaZZcFqETIGtwEoz2IuJcNEOaX9WqKNELyD/esy92JqblNZfjtE/I4EXV708jaeSmUxs1u8YfVqft5/5p1trqnawC+f0TmRm8KPddm5LEaTWTCzcHsB51w++e/1WmeaJLO0CiMyZxPN5DLJFcoANObf+V2cDltJCtLWncnp5Huvgtn2IIY0+UlmFnac5CxgWXJh+w5pE9Q2A3l40L6FM1vgmcGAYQK0tchg0rKD89segfU3tgYDDmMBEEAA32/u9/TPDGBffL6/4qcpvb2E1WGiZsX7HI+f9LlcmlB6VlSi5mWJ0djC3YK22DM/BaW3nPbvNpGcxeXLwe51Xz/iNrkpve9Ojo7hOYZlVjwegZJ8Au+5XzTTPwQleTpE0gc/yN8+MZosHuDkD6imGqPqMzNkV2MsncUHDWYlDLnPkKND2Op/jmogNeayuzA1pmk4+g7Q4eshdEkK0I0xhvJTI6QVrzqFmYFdM7A+heFrX3+7QwSRdkEXPfCqHujMwPYZ6CvgNg9J6wx0305h0ocYnEN45Bj2kF8zA5t7oNeHCHx9LYYac02NIaOAPNBqnoFeAKEbOUpC9WtQSFuL8e1HveDrLoLh4f+kAU/1TQS/rhro1JiLeiALsHMTB4kHWp187tVdmPSfwjzQ6tbz6ipH+oZgeDiWSVOLWa9ypB+SHnhRD2Qhdt7lQik0pNWwvCfCA62eBeh8uOiyqxwZO0S4iQzdRBYwRrLwRHqsxeSnMeh1thhO4UtOYfT6DbnKXXGVQ3DsEIFugDGIIjhSA7nKXXCVowgO1MDq50QwaRx/fLjowqscGZuBLL6hmwg9ZqDFsIUvqjH0mM4Wwyl80SmMXq8hM/CiGUiGANnB3Xs4iCI4UgPZwqOZaDFDNZC3NUebIFuYGvMuANnBQzcRekx3i2ELXzcD2cUdZzAr8LoVyALsW4KsQHrg+wBkBw9d5SiCvTWQLcwMpEhTpFmBhJvIW99E6DGdLYYtzAwEEEAACYBc5T76VY4i2FcD2cLMQAABBJAA+PaA9JiuFsMKZAsDCCCABEAAPz4gRbCnBrICRzNtL3+hwQwEEEAACYAAAgggARBAAAEkAAIIIIAEQAABBJAACCCAABIAAQQQQAIggAACSAAEEEAAASQAAggggPzup4b4IeAMzNlUVGbb6y/s53NZvm6vYwX4/RYMndf37/xNxyuQcAoDCCCABEAAAQSQAPh/8geLyoVuvUmW1gAAAABJRU5ErkJggg==',
		plain:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADICAMAAACu2siZAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8xMS8xNqfTPV8AAAB4UExURQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///+Li4v////X19f////j4+JmZmZ+fn6WlpaysrL+/v/Ly8vn5+f///2cP+SkAAAAgdFJOUwAAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYgJDQ2ODmV+iW/AAABClJREFUeNrt3NtO3DAUheG17VChgvr+T9je9yCQmsnuhWPHM00htqMC0r/UDpTLT972cmaoBUmW/lr5bn0hVTy/eP4jl2Rhs7sxJDuEWa8oWqjwakMQd9ffqrchWih0dkuIYa13xeeF0WLxW18KIrlVTGQuX1/kksXilw0RfMEv6xXBafO7QkTwxs9WQDfPP3Fz8yntdWZZsFqEbIPbBijPYi4lw0Q5pXkt0UYI3s78usy9mJrbVJbfFSJ+e4IuL3p5jKdSWczscbrH6tU8zz/zZJtrqgb4y2d0DuRe4fu67FwWo8ksmFl4fADnWO70e73WmSbJLK3CCZmjmczkMskVygZo7H/HpzgdtpIUpK07k8PJ914Fs+1BDGnyk8wsXHGSo4BlyYXtJ6RNUNseyMOD9hHObIFnBgOGCdDWIoNJywTntz0C629sDQYcxgIggAC+31wu6csMYF98vrzipym9vYTVbqJmxcsc4z6vXOIh4ItFJWpelhiNEe4WtMVe8lNQesvp+t0mkrO4fNmZXvf1I26Tm9L77mTvGJ5jWGbF/S1Qkk/gvewXzfQPQUmeDpH0wQ/yt0+MJos7OPkDqqnGqPrMDLmqMZbO4p0GsxKG3GfI3iFs9Ze9GkiNOe0uTI1p2hz9CtDh6yF0SQrQjTGG8lsjpBWvOoXZA7v2wPoUhq99/V0dIoi0C7rogWf1QGcPbN8DfQXc9kPSuge6b6cw6UMMziE8cgx7yN+zBzb3QK8PEfj6Wgw15pwaQ0YBeaDVvAd6AYRu5CgJ1X+DQtpajG+/6gVfdxEMN/8mDXiqbyL4ddVAp8ac1ANZgJ1DHCQeaHXyuVd3YdJ/CvNAq1vPq6sc6dsEw82xTJpazHqVI/2Q9MCTeiALsfMuF0qhIa2G5T0RHmj1LEDnw0WnXeXI2CHCTWToJrKAMZKFJ9JjLSY/jUGvs8VwCp9yCqPXb8hV7oyrHIJjhwh0A4xBFMGRGshV7oSrHEVwoAZWvyeCSeP2x4eLTrzKkbE9kMU3dBOhxwy0GEb4pBpDj+lsMZzCJ53C6PUasgeetAeSIUAmuHuGgyiCIzWQER7NRIsZqoG8rTnaBBlhasy7AGSCh24i9JjuFsMIn7cHMsUdZzAr8LwVyALsW4KsQHrg+wBkgoeuchTB3hrICLMHUqQp0qxAwk3krW8i9JjOFsMIswcCCCCABECuch/9KkcR7KuBjDB7IIAAAkgAfHtAekxXi2EFMsIAAgggARDAjw9IEeypgaxARhhAAAEkAAIIIIAEQAABBJAACCCAABIAAQQQQAIggAACSAAEEEAACYAAAgggARBAAAEkAAIIIIAEwHMBn9A4mqddwBmYo6moJivffgsP0BzKr2+bWty+1Y9Pyx06r8/v89fqX2aIcAoDCCCABEAAAQSQAPi/8wfb7IUf8A21CwAAAABJRU5ErkJggg==',
		facebook:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADICAMAAACu2siZAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8xMS8xNqfTPV8AAAEsUExURf///ycxOycxOycxOycxOycxOycxOycxOyQtNiMsNR8nMBogJxkfJRgeJBgeJRcdIxcdIxUaIBAUGA8TFw8SFg8SFg4SFQ4RFQ0RFA0QEw0RFAwPEgwPEgwPEgsOEQoMDwkLDQgKDAgKCwcICgYICgYHCQYICQYHCQYHCQYHCQUGCAQFBiwsLSoqKygpKSkqKk1NTVVVVUpKS0BBQR8fHw0SGycnJwwPFwwRGgsQGQYJDg4UHxIaKxIcLxUfMhYfMxgkPRkkOh0sSx8uTx8vUCAwUiAxUyExVCEyVSg9aCpAbS1EdC9HeTtZmEdjnk5OTlRUVFlZWXBwcICAgIGBgYmJiYuLi5CQkJubm6Ojo7CwsLbB2bm5uby8vNvg7Ofr8vP1+fn5+fr6+v///yuyQxoAAAA6dFJOUwATIDpNWmBma210gIOFhYaIjp+ho6Wmp6mrq66vsLO5vcTHzM3Pz9DR0tbf6err6/X4+fr7/Pz9/f5S2AtGAAACZElEQVR42u3XV1PUUBiA4W+T7AYrig17w95772J37VjQReX//wcvYBhkzkD2BO6e9yJncvvMNzlfIrQKFWXVqzVEvaosFvg6XSA5dTvzfihymxM0f/kzGBFRcMiviIgSQ35lRFQY8qsiwv7SZpuJiEWv6/cdOaUVOrZnseB/gNtv3X/2XCv09MHNHWnAXbffvFWDXt0ZSwGOXHvNplkvb4wkAPc+ItO0uzsTgEcnwTTt8UQCcOIFmKZNnk4AHgcIECBAgAIIECBAAQQIEKAAtm16eu4YAMwEnJ1eeALMFVzqB3A4wZmlfgCHamZ2xiXSagJ/m8BWfoO+b2A7P7dwiwaDvj2wTf3+/AnQrxxAgAIIECBAAVwTwJMA2wGeAAgQIECAygZ8+EQNu3cmAXjo/Tc17N3hBODuqVk17NMBgAABAgQIECBAgAABAgQIECBAgAABAhRAgAABCiBAgAAFECBAgAIIECBAAQQIEKAAAgQIUAABAgQIECBAgAABAgQIECBAgAABAgQIBiBAgAAFECBAgAIIECBAAQQIEKAAAgQIUAABAgQogAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAIIECBAAQQIEKAAAgQIUAABAgQogAABAhRAgAABCuCaAG77AqZpH8cTgFsvg2nYn+sbE4DrLvxC06zv5+sEYL356k82Dfr74+KGJGA9evbS1Fct3+cPV85tqdOAdT06Nq7l239w02KxiOjVyq4XERWG/KqIKDHkV0ZEgSG/IiKiyyG3bkREdEDk1ok5QTOYN3/zfhFRlJVtZrj9pSqL0Cr0D1wIG4qN2YKnAAAAAElFTkSuQmCC',
		mac:'data:image/png;base64,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'
	},
	close: {
		default: {x:280,y:21,width:20,height:20},
		mac: {x:20,y:16,width:59,height:22}
	},
	buttons: {
		default: {x:10,y:153,width:300},
		mac: {x:23,y:130,width:274}
	},
	title: {
		default: {x:36,y:56,width:258,col:'#65778C',fnt:21,lnh:26},
		facebook: {x:23,y:22,width:258,col:'#FFFFFF',fnt:21,lnh:26},
		mac: {x:31,y:47,width:258,col:'#65778C',fnt:21,lnh:26}
	},
	text: {
		default: {x:36,y:82,width:258,height:50,col:'#ACACAC',fnt:12,lnh:14},
		mac: {x:31,y:73,width:258,height:50,col:'#ACACAC',fnt:12,lnh:14}
	},
	colors: {
		default: '#3FB3E2',
		plain: '#3FB3E2',
		facebook: '#3B5998',
		mac: '#83C155'
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
