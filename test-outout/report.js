$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "shopping Login Feature",
  "description": "",
  "id": "shopping-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@shopping"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "shopping LoginPage Test Scenario",
  "description": "",
  "id": "shopping-login-feature;shopping-loginpage-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user opens online shopping application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i search for product \"HeadPhones\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_opens_online_shopping_application()"
});
formatter.result({
  "duration": 2528031000,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 86\nCurrent browser version is 90.0.4430.212 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027QT-INBG-LT0569\u0027, ip: \u0027192.168.0.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0099C013+3194899]\n\tOrdinal0 [0x00886021+2056225]\n\tOrdinal0 [0x0071F608+587272]\n\tOrdinal0 [0x006A1BF3+72691]\n\tOrdinal0 [0x0069E229+57897]\n\tOrdinal0 [0x0069C64A+50762]\n\tOrdinal0 [0x006C1EE9+204521]\n\tOrdinal0 [0x006C1D0D+204045]\n\tOrdinal0 [0x006BFC1B+195611]\n\tOrdinal0 [0x006A3B7F+80767]\n\tOrdinal0 [0x006A4B4E+84814]\n\tOrdinal0 [0x006A4AD9+84697]\n\tOrdinal0 [0x0089CE64+2149988]\n\tGetHandleVerifier [0x00B0BE95+1400773]\n\tGetHandleVerifier [0x00B0BB61+1399953]\n\tGetHandleVerifier [0x00B131FA+1430314]\n\tGetHandleVerifier [0x00B0C69F+1402831]\n\tOrdinal0 [0x00893D61+2112865]\n\tOrdinal0 [0x0089E5CB+2155979]\n\tOrdinal0 [0x0089E6F5+2156277]\n\tOrdinal0 [0x008AF26E+2224750]\n\tBaseThreadInitThunk [0x779AFA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77CB76B4+228]\n\tRtlGetAppContainerNamedObjectPath [0x77CB7684+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat stepDefinitions.LoginStepDefinition.user_opens_online_shopping_application(LoginStepDefinition.java:32)\r\n\tat ???.Given user opens online shopping application(src/main/java/Features/login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});