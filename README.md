# Tyruswoo Screenshot Snapper plugin for RPG Maker MZ

Save pixel perfect screenshots to a folder of your choice within your project!

Choose which keyboard button you use to take screenshots!

By default, the Print Screen button is used to save screenshots,
and the screenshots are saved to a "screenshots" folder in your project.

## Basics of how to use this plugin

1. Make sure you have the plugin installed and active in the Plugin Manager.
2. Begin playtesting, then press the Screenshot Button to save a screenshot!
    - By default, the Print Screen keyboard key is the Screenshot Button.
    - By default, screenshots will be saved to a "screenshots" folder within
      your project. (If the screenshots folder does not exist, it will be
      created when you snap your first screenshot.)

## Filename structure

When you snap a new screenshot, it is saved in the Screenshots Folder you
have chosen. The name of the file includes numbers representing the
following components:

| Component           | Format    |
|---------------------|-----------|
| Year                | YYYY      |
| Month               | MM        |
| Date (Day of Month) | DD        |
| Hour                | hh        |
| Minute              | mm        |
| Second              | ss        |
| Millisecond         | ttt       |
| Timestamp           | Timestamp |

When the above components are pieced together, the filename will appear as
follows:

`YYYY-MM-DD hh-mm-ss-ttt Timestamp`

This structure ensures that every screenshot is saved with a unique
filename, and screenshots are always organized chronologically, with
earliest screenshots first in the folder, followed by screenshots snapped
later.

**Note:** The timestamp is the number of milliseconds since "Epoch time."
      Epoch time is Jan. 1, 1970, at 00:00:00 Universal Time (UTC).
      This is a time standard often used in computing, including JavaScript,
      which is the coding language used by RPG Maker.

## Plugin parameters

### Screenshots Folder
This is the folder (directory) where your screenshots will be saved.
By default, screenshots are saved in a "screenshots" folder found
inside your game's project folder. You can change the name of the
folder where screenshots are saved. You can even use subfolders!
Examples:
- screenshots
- screenshots/subfolder
- screenshots/subfolder/deeper-subfolder
- screenshots/subfolder/Screenshots From Full Playthrough
- screenshots/subfolder/Screenshots From Playtesting Cheat Mode!
- screenshots/current-year
- Screenshots with Uppercase S
- img/screenshots
You may like to use subfolders to organize your screenshots by time
or purpose for which they were taken. Note that forward slashes (and
backslashes) will be interpreted as dividing between folders and
subfolders. You can use spaces, if you like. You can even use special
characters (though this is not recommended and may cause bugs on some
operating systems).

### Screenshot Button
You can select the keyboard button you want to use to take screenshots!
By default, pressing the "Print Screen" button will save a screenshot.
Several other button options are available, including the Numpad + key
or the p, i, or s key. Or, you can use a keycode to use any keyboard
key! To use a keycode, you must select the "Use Keycode" option, then
enter in the number of the JavaScript keycode for the button.

List of Keycodes:
```
   8 Backspace          69 E                  105 Numpad 9
   9 Tab                70 F                  106 Numpad *
  13 Enter              71 G                  107 NumPad +
  16 Shift              72 H                  109 NumPad -
  17 Ctrl               73 I                  110 NumPad .
  18 Alt                74 J                  111 NumPad /
  19 Pause/Break        75 K                  112 F1
  20 Caps Lock          76 L                  113 F2
  27 Esc                77 M                  114 F3
  33 Page Up            78 N                  115 F4
  34 Page Down          79 O                  116 F5
  35 End                80 P                  117 F6
  36 Home               81 Q                  118 F7
  37 Left Arrow         82 R                  119 F8
  38 Up Arrow           83 S                  120 F9
  39 Right Arrow        84 T                  121 F10
  40 Down Arrow         85 U                  122 F11
  44 Print Screen       86 V                  123 F12
  45 Insert             87 W                  144 Num Lock
  46 Delete             88 X                  145 Scroll Lock
  48 0 or )             89 Y                  186 ; or :
  49 1 or !             90 Z                  187 = or +
  50 2 or at symbol     91 Left WinKey        188 , or <
  51 3 or #             92 Right WinKey       189 - or _
  52 4 or $             93 Select/Menu        190 . or >
  53 5 or %             96 NumPad 0           191 / or ?
  54 6 or ^             97 NumPad 1           192 ` or ~
  55 7 or &             98 NumPad 2           219 [ or {
  56 8 or *             99 NumPad 3           220 \ or |
  57 9 or (            100 NumPad 4           221 ] or }
  65 A                 101 NumPad 5           222 ' or "
  66 B                 102 NumPad 6
  67 C                 103 NumPad 7
  68 D                 104 NumPad 8
```

### Show Menu Button on Map
By default, this is false, so that when you take screenshots of the map,
the menu button is absent from the screenshot. This helps your
screenshots look even better! However, if you want to see the menu button
in your screenshots, you can set this to true.

### For more help using the Screenshot Snapper plugin, see [Tyruswoo.com](https://www.tyruswoo.com).

## Version History

**v1.0** - 9/12/2020
- Screenshot Snapper released for RPG Maker MZ!

**v1.0.1** - 8/30/2023
- This plugin is now free and open source under the [MIT license](https://opensource.org/license/mit/).

## Alternate Screenshot Method

**Tip:** You can get screenshots without this plugin, but the screenshots have
     several idiosyncracies and drawbacks.

How to get a screenshot without using this plugin:
1. When you are in a game or window and press the "Print Screen" key on the
   keyboard, a screenshot may be automatically copied to the clipboard.
2. You can then open any image editor (such as Paint or GIMP) and press
   Ctrl+V to paste the image!

Idiosyncracies and drawbacks of screenshots obtained without this plugin:
- The image obtained this way will include the window, if obtained while
  the game was in a window.
- If obtained while the game is fullscreen, the screenshot will include the
  full image (including black side edges, depending on the size of your
  screen).
- This kind of screenshot often is not pixel perfect.
- This kind of screenshot may require manual cropping with an art program.
- Images obtained this way cannot remove the menu button in the corner of
  the image.

In nearly all cases, using this plugin will result in the preferred
screenshot appearance. However, in cases where seeing the window itself is
desired, this alternate method for obtaining screenshots may be useful.

> **Remember, only you can build your dreams!**
>
> *Tyruswoo*
