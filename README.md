# AlertBox
Make a best alert box in Javascript with lightweigtht script.
# How to install
First, download and install the ```/js``` and ```/css/``` folder to your projects folder, include this codes in ```<head>``` tag HTML
**Import this code**
```
<link rel="stylesheet" href="css/AlertBox.css">
<script src="js/AlertBox.js"></script>
```
And yah, your Alert Box is already.
# How to use
To use it, just use
```new AlertBox().showMessage('message');```
and add
```<div id="alertbox"><div id="alertbox-in"> <p id="alertbox-title"></p> <hr id="alertbox-break"> <p id="alertbox-message"></p> <a id="alertbox-close-button"></a> </div></div>```
and you can get more types of function, scroll down and watch Advanced Alert Box tab
# Advanced Alert Box
This is list in version beta build **1**

| Functions  |                       Descriptions |
|---|---------------------------------------------|
| showMessage('text')  |   Display default box    |
| messageButtonText('text', 'button_text')  |   Display default box with custom text in button    |
| messageButtonTextTitle('text', 'title', 'button_text')  |   Display default box with more custom, title and button text   |
| messageButtonAction('text', 'title', 'button_text', action)  |   Display default box with more custom, title and button text and action when click to the close button. The action using function of JavaScript|

