# Grunt boilerplate

## Requirements

1. [Node.js](http://nodejs.org/download/)

2. Bower
    `sudo npm install -g bower`
    
3. Grunt cli
    `sudo npm install -g grunt-cli`

## How to start a project using this boilerplate

1. Clone the boilerplate repo.
    `git clone `
    
2. Inside the project directory, run init_project.sh
    `./init_project.sh`
    
3. Install node and bower dependencies
    `npm install`
    `bower install`
    
    If you have permission issues with installing node modules, run the following two commands
    
    `sudo chown -R $USER ~/.npm`
    
    `sudo chown -R $USER /usr/local/lib/node_modules`
    
    PS: NO need to replace $USER part, that's a linux command to get your user
    
4. Initialize grunt 
    `grunt`
   
## Development

Before you start messing around in the source code, run

`grunt`
   
