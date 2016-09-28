set base=%~dp0node_modules\chromedriver\lib\chromedriver\chromedriver.exe
echo %base%
echo starting server java -jar drivers/selenium-standalone.jar -Dwebdriver.chrome.driver=%base%
java -jar drivers\selenium-server-standalone.jar -Dwebdriver.chrome.driver=%base%
