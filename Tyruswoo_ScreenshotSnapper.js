//=============================================================================
// Screenshot Snapper
// For RPG Maker MZ
// By Tyruswoo
//=============================================================================

/*
 * MIT License
 *
 * Copyright (c) 2023 Kathy Bunn and Scott Tyrus Washburn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var Imported = Imported || {};
Imported.Tyruswoo_ScreenshotSnapper = true;

var Tyruswoo = Tyruswoo || {};
Tyruswoo.ScreenshotSnapper = Tyruswoo.ScreenshotSnapper || {};

/*:
 * @target MZ
 * @plugindesc MZ v1.0.1 Snap screenshots and save them to a folder! Great for showcasing your
 *             project, and players can save screenshots of gameplay!
 * @author Tyruswoo
 * @url https://www.tyruswoo.com
 *
 * @help Tyruswoo Screenshot Snapper plugin for RPG Maker MZ
 * ============================================================================
 * Basics of how to use this plugin:
 * 1. Make sure you have the plugin installed and active in the Plugin Manager.
 * 2. Begin playtesting, then press the Screenshot Button to save a screenshot!
 *     - By default, the Print Screen keyboard key is the Screenshot Button.
 *     - By default, screenshots will be saved to a "screenshots" folder within
 *       your project. (If the screenshots folder does not exist, it will be
 *       created when you snap your first screenshot.)
 * ============================================================================
 * Filename structure:
 *
 * When you snap a new screenshot, it is saved in the Screenshots Folder you
 * have chosen. The name of the file includes numbers representing the
 * following components:
 *
 *    Year:                 YYYY
 *    Month:                MM
 *    Date (Day of Month):  DD
 *    Hour:                 hh
 *    Minute:               mm
 *    Second:               ss
 *    Millisecond:          ttt
 *    Timestamp:            Timestamp
 *
 * When the above components are pieced together, the filename will appear as
 * follows:
 *
 *    YYYY-MM-DD hh-mm-ss-ttt Timestamp
 *
 * This structure ensures that every screenshot is saved with a unique
 * filename, and screenshots are always organized chronologically, with
 * earliest screenshots first in the folder, followed by screenshots snapped
 * later.
 *
 * Note: The timestamp is the number of milliseconds since "Epoch time."
 *       Epoch time is Jan. 1, 1970, at 00:00:00 Universal Time (UTC).
 *       This is a time standard often used in computing, including JavaScript,
 *       which is the coding language used by RPG Maker.
 * ============================================================================
 * Plugin parameters:
 *
 * Screenshots Folder
 *    This is the folder (directory) where your screenshots will be saved.
 *    By default, screenshots are saved in a "screenshots" folder found
 *    inside your game's project folder. You can change the name of the
 *    folder where screenshots are saved. You can even use subfolders!
 *    Examples:
 *     - screenshots
 *     - screenshots/subfolder
 *     - screenshots/subfolder/deeper-subfolder
 *     - screenshots/subfolder/Screenshots From Full Playthrough
 *     - screenshots/subfolder/Screenshots From Playtesting Cheat Mode!
 *     - screenshots/current-year
 *     - Screenshots with Uppercase S
 *     - img/screenshots
 *    You may like to use subfolders to organize your screenshots by time
 *    or purpose for which they were taken. Note that forward slashes (and
 *    backslashes) will be interpreted as dividing between folders and
 *    subfolders. You can use spaces, if you like. You can even use special
 *    characters (though this is not recommended and may cause bugs on some
 *    operating systems).
 *
 * Screenshot Button
 *    You can select the keyboard button you want to use to take screenshots!
 *    By default, pressing the "Print Screen" button will save a screenshot.
 *    Several other button options are available, including the Numpad + key
 *    or the p, i, or s key. Or, you can use a keycode to use any keyboard
 *    key! To use a keycode, you must select the "Use Keycode" option, then
 *    enter in the number of the JavaScript keycode for the button.
 *    List of keycodes:
 *       8 Backspace          69 E                  105 Numpad 9
 *       9 Tab                70 F                  106 Numpad *
 *      13 Enter              71 G                  107 NumPad +
 *      16 Shift              72 H                  109 NumPad -
 *      17 Ctrl               73 I                  110 NumPad .
 *      18 Alt                74 J                  111 NumPad /
 *      19 Pause/Break        75 K                  112 F1
 *      20 Caps Lock          76 L                  113 F2
 *      27 Esc                77 M                  114 F3
 *      33 Page Up            78 N                  115 F4
 *      34 Page Down          79 O                  116 F5
 *      35 End                80 P                  117 F6
 *      36 Home               81 Q                  118 F7
 *      37 Left Arrow         82 R                  119 F8
 *      38 Up Arrow           83 S                  120 F9
 *      39 Right Arrow        84 T                  121 F10
 *      40 Down Arrow         85 U                  122 F11
 *      44 Print Screen       86 V                  123 F12
 *      45 Insert             87 W                  144 Num Lock
 *      46 Delete             88 X                  145 Scroll Lock
 *      48 0 or )             89 Y                  186 ; or :
 *      49 1 or !             90 Z                  187 = or +
 *      50 2 or at symbol     91 Left WinKey        188 , or <
 *      51 3 or #             92 Right WinKey       189 - or _
 *      52 4 or $             93 Select/Menu        190 . or >
 *      53 5 or %             96 NumPad 0           191 / or ?
 *      54 6 or ^             97 NumPad 1           192 ` or ~
 *      55 7 or &             98 NumPad 2           219 [ or {
 *      56 8 or *             99 NumPad 3           220 \ or |
 *      57 9 or (            100 NumPad 4           221 ] or }
 *      65 A                 101 NumPad 5           222 ' or "
 *      66 B                 102 NumPad 6
 *      67 C                 103 NumPad 7
 *      68 D                 104 NumPad 8
 *
 * Show Menu Button on Map
 *    By default, this is false, so that when you take screenshots of the map,
 *    the menu button is absent from the screenshot. This helps your
 *    screenshots look even better! However, if you want to see the menu button
 *    in your screenshots, you can set this to true.
 * ============================================================================
 * For more help using the Screenshot Snapper plugin, see Tyruswoo.com.
 * ============================================================================
 * Version History:
 *
 * v1.0  9/12/2020
 *        - Screenshot Snapper released for RPG Maker MZ!
 * 
 * v1.0.1  8/30/2023
 *        - This plugin is now free and open source under the MIT license.
 * ============================================================================
 * Alternate Screenshot Method:
 *
 * Tip: You can get screenshots without this plugin, but the screenshots have
 *      several idiosyncracies and drawbacks.
 * 
 * How to get a screenshot without using this plugin:
 * 1. When you are in a game or window and press the "Print Screen" key on the
 *    keyboard, a screenshot may be automatically copied to the clipboard.
 * 2. You can then open any image editor (such as Paint or GIMP) and press
 *    Ctrl+V to paste the image!
 *
 * Idiosyncracies and drawbacks of screenshots obtained without this plugin:
 *  - The image obtained this way will include the window, if obtained while
 *    the game was in a window.
 *  - If obtained while the game is fullscreen, the screenshot will include the
 *    full image (including black side edges, depending on the size of your
 *    screen).
 *  - This kind of screenshot often is not pixel perfect.
 *  - This kind of screenshot may require manual cropping with an art program.
 *  - Images obtained this way cannot remove the menu button in the corner of
 *    the image.
 *
 * In nearly all cases, using this plugin will result in the preferred
 * screenshot appearance. However, in cases where seeing the window itself is
 * desired, this alternate method for obtaining screenshots may be useful.
 * ============================================================================
 * MIT License
 *
 * Copyright (c) 2023 Kathy Bunn and Scott Tyrus Washburn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 * ============================================================================
 * Remember, only you can build your dreams!
 * -Tyruswoo
 *
 * @param Screenshots Folder
 * @type text
 * @default screenshots
 * @desc Directory (folder) where the screenshots will be saved.
 *       Default: sceenshots      Example: screenshots/subfolder
 *
 * @param Screenshot Button
 * @type select
 * @option Print Screen (prt sc)
 * @option Numpad +
 * @option p
 * @option i
 * @option s
 * @option Use Keycode
 * @default Print Screen (prt sc)
 * @desc Keyboard button to take a screenshot.
 *       Default: Print Screen (prt sc).
 *
 * @param Key Code
 * @parent Screenshot Button
 * @type number
 * @desc The JavaScript keycode for the desired screenshot button,
 *       if "Use Keycode" selected. Example: 44 (Print Screen).
 *
 * @param Show Menu Button on Map
 * @type boolean
 * @default false
 * @on ON
 * @off OFF
 * @desc If true, menu button will appear in screenshots of map.
 *       If false, menu button will be hidden in sceenshots of map.
 */

(() => {
    const pluginName = "Tyruswoo_ScreenshotSnapper";

	Tyruswoo.ScreenshotSnapper.parameters = PluginManager.parameters(pluginName);
	Tyruswoo.ScreenshotSnapper.param = Tyruswoo.ScreenshotSnapper.param || {};
	
	// User-Defined Plugin Parameters
	Tyruswoo.ScreenshotSnapper.param.screenshotsFolder = String(Tyruswoo.ScreenshotSnapper.parameters['Screenshots Folder']);
	Tyruswoo.ScreenshotSnapper.param.screenshotButton = String(Tyruswoo.ScreenshotSnapper.parameters['Screenshot Button']);
	Tyruswoo.ScreenshotSnapper.param.keycode = Number(Tyruswoo.ScreenshotSnapper.parameters['Key Code']);
	Tyruswoo.ScreenshotSnapper.param.showMenuButtonOnMap = (String(Tyruswoo.ScreenshotSnapper.parameters['Show Menu Button on Map']) == 'true') ? true : false;

	// Determine screenshotButton keycode.
	switch(Tyruswoo.ScreenshotSnapper.param.screenshotButton) {
		case "Print Screen (prt sc)":
			Tyruswoo.ScreenshotSnapper.param.keycode = 44;
			break;
		case "Numpad +":
			Tyruswoo.ScreenshotSnapper.param.keycode = 107;
			break;
		case "p":
			Tyruswoo.ScreenshotSnapper.param.keycode = 80;
			break;
		case "i":
			Tyruswoo.ScreenshotSnapper.param.keycode = 73;
			break;
		case "s":
			Tyruswoo.ScreenshotSnapper.param.keycode = 83;
			break;
	};

	// Ensure File System Module is Installed
	const fs = require("fs");

	//=============================================================================
	// Screenshot Snapper Functions
	//=============================================================================

	// New method
	// Reference: https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
	// Reference: https://emscripten.org/docs/api_reference/Filesystem-API.html
	// Reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
	// Reference: https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
	// Reference: https://attacomsian.com/blog/nodejs-create-directory
	Tyruswoo.ScreenshotSnapper.snap = function() {
		// Keep track of whether menu was enabled prior to snapping this screenshot.
		const isMenuEnabled = $gameSystem.isMenuEnabled();
		
		// Remove menu button from corner of map scene (if not desired).
		if(isMenuEnabled && !Tyruswoo.ScreenshotSnapper.param.showMenuButtonOnMap) {
			$gameSystem.disableMenu(); //Disable the menu temporarily.
			if(SceneManager._scene && typeof SceneManager._scene.hideMenuButton === "function") {
				SceneManager._scene.hideMenuButton();
			};
		};
		
		// Create Image
		const screenshotBitmap = SceneManager.snap(); //Obtain the screenshot image.
		const fileFormat = "png";
		const quality = 1.0;
		const dataURL = screenshotBitmap.canvas.toDataURL("image/" + fileFormat, quality); //Convert the screenshot image into data.
		const cleanDataURL = dataURL.replace("data:image/" + fileFormat + ";base64,", ""); //Remove excess components of the data.
		
		// Directory
		var directory = Tyruswoo.ScreenshotSnapper.param.screenshotsFolder ? Tyruswoo.ScreenshotSnapper.param.screenshotsFolder : 'screenshots';
		const directory_array = directory.trim().replace('\\', '/').split('/').filter(d => d); //List of all folders in the directory.
		var currentDirectory = "";
		for(var i = 0; i < directory_array.length; i++) {
			currentDirectory += directory_array[i] + '/';
			try {
				if (!fs.existsSync(currentDirectory)) { //Check if currentDirectory (folder) already exists.
					fs.mkdirSync(currentDirectory); //Create the currentDirectory (folder) where the screenshots will go.
				};
			} catch (err) {
				console.log(err);
			};
		};
		directory = currentDirectory.substring(0, currentDirectory.length - 1);
		
		// Time variables
		const currentTime = new Date();
		const year = currentTime.getFullYear().toString();
		const month = (currentTime.getMonth()+1).toString().length == 1 ? "0" + (currentTime.getMonth()+1).toString() : (currentTime.getMonth()+1).toString();
		const date = currentTime.getDate().toString().length == 1 ? "0" + currentTime.getDate().toString() : currentTime.getDate().toString();
		const hour = currentTime.getHours().toString().length == 1 ? "0" + currentTime.getHours().toString() : currentTime.getHours().toString();
		const minute = currentTime.getMinutes().toString().length == 1 ? "0" + currentTime.getMinutes().toString() : currentTime.getMinutes().toString();
		const second = currentTime.getSeconds().toString().length == 1 ? "0" + currentTime.getSeconds().toString() : currentTime.getSeconds().toString();
		var millisecond = currentTime.getMilliseconds().toString();
		for(var i = millisecond.length; i < 3; i++) {
			millisecond = "0" + millisecond;
		};
		const timestamp = currentTime.getTime().toString(); //Number of milliseconds since "epoch time."
		const j = "-"; //Join
		const s = " "; //Separate
		
		// Filename
		const filename = year + j + month + j + date + s + hour + j + minute + j + second + j + millisecond + s + timestamp;
		
		// Write File
		const path = "./" + directory + "/" + filename + "." + fileFormat;
		const data = cleanDataURL;
		const options = {encoding: "base64", flag: "w", mode: 0o666};
		fs.writeFile(path, data, options, function (err) {
			if (err) throw err;
			console.log("Screenshot \x1b[32m" + filename + "." + fileFormat + " \x1b[30msaved in " + directory + ".");
		});

		// If menu was enabled prior to snapping this screenshot, then make sure menu is enabled again.
		if(isMenuEnabled && !Tyruswoo.ScreenshotSnapper.param.showMenuButtonOnMap) {
			$gameSystem.enableMenu();
		};
	};

	//=============================================================================
	// Input
	//=============================================================================

	// Alias method
	Tyruswoo.ScreenshotSnapper.Input_onKeyUp = Input._onKeyUp;
	Input._onKeyUp = function(event) {
		//console.log("event.keyCode", event.keyCode);
		if(Tyruswoo.ScreenshotSnapper.param.keycode && (event.keyCode == Tyruswoo.ScreenshotSnapper.param.keycode)) {
			Tyruswoo.ScreenshotSnapper.snap();
		};
		Tyruswoo.ScreenshotSnapper.Input_onKeyUp.call(this, event);
	};

})();
