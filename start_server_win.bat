set base=%~dp0drivers\win\chromedriver.exe
echo %base%
echo starting server java -jar drivers/selenium-standalone.jar -Dwebdriver.chrome.driver=%base%
java -jar drivers\selenium-server-standalone.jar -Dwebdriver.chrome.driver=%base%
