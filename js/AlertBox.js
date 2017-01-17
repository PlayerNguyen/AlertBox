/**
 * Created by PNGM on 1/16/2017.
 * This is for public version. All your fucking code it available for that!
 */
    // Now let's start with the config

function AlertBox()
{

}
AlertBox.prototype.setttings = {
    // Background theme: black - light
    backgroundTheme: "black",
    // Opacity Background
    opacityBackground: 50,
    // Width Of Box
    widthBox: "50%"
};
AlertBox.prototype.showMessage = function(text)
{
    new AlertBox().settingAlertBox(text, 'Notification', 'Done', function () {});
};
/**
 * Default text only
 * @param text
 * @param button_text
 */
AlertBox.prototype.messageButtonText = function(text, button_text)
{
    new AlertBox().settingAlertBox(text, "Notification", button_text, function () {

    });
};
/**
 * Using for title, button_text and with text
 * @param text Text of message
 * @param title Title of message
 * @param button_text Text of button
 */
AlertBox.prototype.messageButtonTextTitle = function(text, title, button_text)
{
    new AlertBox().settingAlertBox(text, title, button_text, function () {

    });
};
/**
 * Using with event onclick to button
 * @param text Text of message
 * @param title Title of message
 * @param button_text Text of button
 * @param hit_close_button_event Event do when click the button. Using function
 */
AlertBox.prototype.messageButtonAction = function(text, title, button_text, hit_close_button_event)
{
    new AlertBox().settingAlertBox(text, title, button_text, hit_close_button_event);
};
AlertBox.prototype.settingAlertBox = function(text, title, button_text, hit_button_close)
{
    var alertbox_index = document.getElementById("alertbox");
    var alertbox_in = document.getElementById("alertbox-in");
    var alertbox_title = document.getElementById("alertbox-title");
    var alertbox_break = document.getElementById("alertbox-break");
    var alertbox_message = document.getElementById("alertbox-message");
    var alertbox_close_button = document.getElementById("alertbox-close-button");

    var alertbox_opacity = new AlertBox().setttings.opacityBackground / 100;
    // Background Settings
    if (new AlertBox().setttings.backgroundTheme == "black") {
        alertbox_index.style.background = "rbg(0, 0, 0, " + alertbox_opacity + ")"
    } else {
        alertbox_index.style.background = "rbg(255, 255, 255, " + alertbox_opacity + ")"
    }

    // Width box Settings
    alertbox_in.style.width = new AlertBox().setttings.widthBox;
    // Set title
    if (title == "" || title == null)
    {
        alertbox_title.style.display = "none";
        alertbox_break.style.display = "none";
    } else {
        alertbox_title.innerText = title;
    }
    // Set Text
    if (text == "" || text == null)
    {
        console.error("The text is empty");
        new AlertBox().close();
    } else {
        alertbox_message.innerText = text;
    }
    // Set Close
    if (button_text == "" || button_text == null)
    {
        console.error("The button close don't have value");

    } else {
        alertbox_close_button.innerText = button_text;
    }
    // Action Close Button
    if (hit_button_close==null)
    {
        onhit = null;
    } else {
        onhit = hit_button_close;
    }
    alertbox_close_button.onclick = function()
    {
        new AlertBox().close();
        onhit();
    };
    // Build Cache and performance
    new AlertBox().build();
};
AlertBox.prototype.build = function()
{
    var alertbox_index = document.getElementById("alertbox");
    alertbox_index.style.display = "block";
};
AlertBox.prototype.close = function ()
{
    var alertbox_index = document.getElementById("alertbox");
    alertbox_index.style.display = "none";
};