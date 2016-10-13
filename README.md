# Prompt

### A JavaScript micro-framework for adding alert boxes for advanced UI development
### Dependent on itsybitsytweener.js

Author: Neil Oman
Version: 1

Copyright 2016 Neil Oman
Dual licensed under MIT and GPL

## Features

* Simple
* 4 Skins
* Only show and hide functions exposed
* basic_prompt.js is very lightweight (only 3.23KB minified and gzipped)

## Samples! :)

```
//add scripts to page
<script type="text/javascript" src="itsybitsytweener.js"></script>
<script type="text/javascript" src="prompt.js"></script>

//Can be triggered anywhere, but here's a link to trigger an alert box
<a onclick="defwin();" style="cursor:pointer;">Open Default Window</a><br/>

<script type="text/javascript">
defwin=function() {
//use prompt.show() to show, prompt.hide() to hide
	prompt.show({
		style:'default',
		backOpacity:0.3,
		durationin:300,
		durationout:300,
		title:'Warning Message!',
		text:"On this panel you'll be able to organize the reports you created. You can also filter them by date and author.",
		buttons: [{text:'YES',fn:function() {alert('Yes!');prompt.hide();}},{text:'NO',color:'#990000',fn:function() {alert('No!');prompt.hide();}}]
	});
}
</script>
```

## Options

**style** skin, can be either 'default','plain','facebook' or 'mac'
**backOpacity** opacity of cover over screen
**durationin** duration of fade in on show
**durationout** duration of fade out on hide
**title** alert box title
**text** alert box text
**buttons** array of buttons, text (text), (optional) color (color) and (optional) callback (fn)
If no buttons are defined, OK is shown, which hides box on click
