# unix-shell-gui

[View project](https://sp-anto.github.io/unix-shell-gui/)


This project is licensed under the terms of the Apache License 2.0

#### Usage instructions

Select the command you want to enter from dropdown menu 'Select command/operator/structure:'. After selection an area will become available in order to select options and arguments. If the arguments are invalid, relevant message will be shown. Supposing that the arguments are valid three buttons are available. One for inserting the command in the console at cursor position('Insert'), one for copying current command('Copy current command') and one for copying content of the console('Copy console'). 

The application provides two Settings. One for using 'Long options' of the command when they are available and one for generating comments explaining the meaning of the selected options.

#### Installation instructions
1. Clone repository

2. Open a console and navigate to the root directory of the project

3. Run ```npm install``` to download required dependencies

##### Prerequisites: Node.js + npm installed

#### Local deployment with Node.js (for dev purposes)
1. Run ```npm start```

#### Build project distribution
1. Run ```npm build```. The destribution files will be created under dist/ folder
