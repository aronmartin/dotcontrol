#!/bin/sh

# http://www.bashguru.com/2010/01/shell-colors-colorizing-shell-scripts.html

function log() {
    printf "\033[32m$1\033[0m\n"
}

function error() {
    printf "\033[31m$1\033[0m\n"
}

function info() {
    printf "\033[36m$1\033[0m\n"
}

function checkRequirements() {
    info "Checking requirements ..."

    if hash git 2>/dev/null; then
        log "✓ git is installed"
    else
        error "Install git first"
        exit 1;
    fi

    if hash npm 2>/dev/null; then
        log "✓ npm is installed"
    else
        error "Install npm first"
        exit 1;
    fi

    if hash bower 2>/dev/null; then
        log "✓ bower is installed"
    else
        error "Install bower first"
        exit 1;
    fi
}

function setupProjectDir() {
    info "\nEnter project name: "

    read PROJECT_NAME

    if [ -d "$PROJECT_NAME" ]; then
        error "A project by the name $PROJECT_NAME already exists"

        setupProjectDir
    else
        info "\nSetting up project: $PROJECT_NAME ..."
    fi
}

function getProjectRepo() {
    # http://stackoverflow.com/questions/9610131/how-to-check-the-validity-of-a-remote-git-repository-url

    info "\nEnter repository URL from Beanstalk: "

    read PROJECT_URL

    git ls-remote "$PROJECT_URL" &>-

    if [ "$?" -ne 0 ]; then
        error "Unable to read from $PROJECT_URL"

        getProjectRepo
    else
        git clone $PROJECT_URL $PROJECT_NAME
    fi
}

function setupProject() {
    cd ..

    setupProjectDir

    getProjectRepo

    cd -

    rm -rf .git

    mv ./* ../$PROJECT_NAME
    mv ./.bowerrc ../$PROJECT_NAME
    mv ./.gitignore ../$PROJECT_NAME

    cd ../$PROJECT_NAME

    sed -i bak "s/ENTER_PROJECT_NAME_HERE/$PROJECT_NAME/" package.json
    sed -i bak "s/ENTER_PROJECT_NAME_HERE/$PROJECT_NAME/" bower.json
    sed -i bak "s/ENTER_PROJECT_NAME_HERE/$PROJECT_NAME/" source/jade/index.jade

    info "\nCreating develop branch based off master ... \n"

    git checkout -b develop

    info "\nInstalling node modules ... \n"

    npm install

    info "\nInstalling bower dependencies ... \n"

    bower install

    info "\nInitializing grunt ... \n"

    log "Have fun developing $PROJECT_NAME"

    grunt
}

checkRequirements

setupProject





