# Overview 
This is a repository used for training purposes to walk through the creation of a API and UI Automated Test Framework.  This readme covers Day - 0 in which it just provides a project from which you can follow along with during the meetup or through the videos to create your own framework.

We will store the work done throughout the days of working on this framework in separate branches in Git.  So if you wish to skip ahead to a given day just check it out with one of the following commands:

git checkout day1
git checkout day2 
etc...

Otherwise please follow the below instructions to install any necessary tools and check that everything you need is installed and in working condition.

# The Tools We Will Need

The framework we will be building is meant to be a hybrid framework to allow for testing of APIs and UI, and potentially mix the two together for some tests.  We will be using the following tools and languages as part of building, so please follow the instructions for each tool below to ensure you are set up.

If you are using a mac it is strongly encouraged to install homebrew which will allow you to install many of these tools through the command line with a simple command.  For linux users similar installers such as yum and apt-get are recommended.

Link to Install HomeBrew for Mac Users

http://brew.sh/

## Git

We will be managing the source code for the framework through git.  Specifically we will be using a public GitHub repository.  For each day through the framework we will also store a separate branch in our Git repository so you can go back and forth and see what was built each day.

You can check if you already have Git installed by going to a command prompt or terminal and typing this command "git --version" if you get any output other than command not found, then congratulations you are already set up.

### Windows

Follow the below link to install git for windows.  This will probably also install Git Bash, which is a bash terminal emulated inside of windows which is helpful for some of the commands we will use:

https://git-scm.com/download/win

### Mac

Follow the below link to install Git on a mac

https://sourceforge.net/projects/git-osx-installer/

## Node & NPM

We will be writing the framework using Node.js alongside its package manager NPM.  Both of these are usually installed together.  To check if you already have node installed use the below command in a command/terminal prompt.

node --version

### Installing Node & NPM on a windows or mac machine

Follow the below link and choose the appropriate installer for the windows/mac machine you are using.  Follow the instructions to install.

https://nodejs.org/en/download/

## Java

While we will not be coding in Java we will need java to run the selenium server.  It is very likely you already have Java installed but to check run the below command in your terminal/command prompt.

java -version

### Windows & Mac & Linux

The below link should have information for all 3 operating systems to install the Java JDK on your machine.

## Mocha

Mocha is a test harness we will use to run our actual tests once we've written them.  To ensure fewer issues we are recommending that mocha be installed through NPM.  It will also be installed locally as part of the set up section below, but please follow this step as well after you've installed Node & NPM.

In a command/terminal prompt run this command:

npm install -g mocha

This should work, for windows users you might have to run this command from a Git Bash command prompt.  But should try from a standard command prompt first regardless.

# Getting Set Up

That wasn't so bad was it?  Now that you have all the tools necessary installed lets download and install the basic project that we will be creating our framework in.

Inside your terminal (mac) or git bash (windows) prompt decide on a good directory you wish to store all your git projects in.  I recommend your Home directory.  Then create a new directory called "git".

## Mac and Windows (using git bash prompt)

Go to your home directory
"cd ~"
Create a new directory called git
"mkdir git"
Navigate to the new directory
"cd git"
Now clone the meetup project:
"git clone https://github.com/mustarddemon/westdenvermeetupfw.git"
Navigate into the repository created from the previous command:
"cd westdenvermeetupfw/"
It's that simple.  Now all we have to do is installit

# Getting Installed

Once you have cloned the repository down installing is a breeze.  Just run the below command from inside the repository and it will install everything else you need.

npm install

# Checking If It Works

Now that you are all installed, we are going to run through a series of quick checks to make sure everything works as expected.

## Making Sure You Can Start the Selenium Server

From the main repository directory run this command.  If set up correctly this command will run until you stop it with "ctrl-c".

java -jar drivers/selenium-server-standalone-2.53.0.jar

If you successfully start the server, leave it running for the next steps and instead open a new terminal/prompt for the following steps.

## Start The Test API Server

In order to develop tests for APIs we have built a simple test server to allow us to hit our own apis.  So follow the below steps to make sure you can start the test server and access it.

Run the below command.  Like the selenium server if successful it will continue to run until you close it with ctrl+c.
node test_server/server.js
Once the server is started open a web browser of your choice and go to this url:
http://localhost:3000
You should see a simple message displayed indicating the server was set up correctly.
Once you've verified the server you can cancel the command from step 1 with ctrl+c as we don't need it running for any further steps.

## Run A Very Simple UI Test

This is the final step.  Run the below command to kick off 2 very simple tests.  The first should open a firefox browser and go to google.  The 2nd should open a firefox browser and do a search for New Camera on ebay.  If both of these happen you are 100% ready to build your own framework!

Test Command

mocha ui-fw-tests-prebuilt/basic_test.js

# TroubleShooting and FAQ

We will update this section as we get feedback from people trying to follow these steps.  If you have any issues feel free to reach out to me through the West Denver Test Engineering Meetup discussion board and I will help to the best of my ability.
