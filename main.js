﻿var SearchBoxInput;

window.onload = function(){
  ThemeInitialize();
};

function OnLoaded(){
  ThemeInitialize();
}

var ScreenshotsFlipViewCounter = 0;

function FlipScreenshot(count){
   try{
      var pipsPager = document.getElementById("screenshots-pager");

      switch(count){
         case 0:
           if(GetCurrentEnviromentTheme() == RequestedTheme.Light){
              $('#app-preview-image').css("background-image", "url('assets/light-screen.png')");
           }
           else if(GetCurrentEnviromentTheme() == RequestedTheme.Dark){
              $('#app-preview-image').css("background-image", "url('assets/dark-screen.png')");
           }

           pipsPager.children[0].className = "ms-pippager-active-dot";
           pipsPager.children[1].className = "ms-pippager-dot";
           pipsPager.children[2].className = "ms-pippager-dot";
           pipsPager.children[3].className = "ms-pippager-dot";
         break;
         case 1:
           if(GetCurrentEnviromentTheme() == RequestedTheme.Light){
              $('#app-preview-image').css("background-image", "url('assets/Light-screen-laptop.png')");
           }
           else if(GetCurrentEnviromentTheme() == RequestedTheme.Dark){
              $('#app-preview-image').css("background-image", "url('assets/Dark-screen-laptop.png')");
           }
           
           pipsPager.children[0].className = "ms-pippager-dot";
           pipsPager.children[1].className = "ms-pippager-active-dot";
           pipsPager.children[2].className = "ms-pippager-dot";
           pipsPager.children[3].className = "ms-pippager-dot";
         break;
         case 2:
           $('#app-preview-image').css("background-image", "url('assets/Dark-screen-hub.png')");

           pipsPager.children[0].className = "ms-pippager-dot";
           pipsPager.children[1].className = "ms-pippager-dot";
           pipsPager.children[2].className = "ms-pippager-active-dot";
           pipsPager.children[3].className = "ms-pippager-dot";
         break;
         case 3:
           $('#app-preview-image').css("background-image", "url('assets/Dark-screen-xbox.png')");
           
           pipsPager.children[0].className = "ms-pippager-dot";
           pipsPager.children[1].className = "ms-pippager-dot";
           pipsPager.children[2].className = "ms-pippager-dot";
           pipsPager.children[3].className = "ms-pippager-active-dot";
         break;
      }
   }
   catch(e){
      console.log(e.toString());
   }
}

function NextFlipScreenshot_Click(){
  try{
    if(ScreenshotsFlipViewCounter < 3){
      ScreenshotsFlipViewCounter++;
      FlipScreenshot(ScreenshotsFlipViewCounter);
    }
    else{
      ScreenshotsFlipViewCounter = 0;
      FlipScreenshot(ScreenshotsFlipViewCounter);
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function PreviousFlipScreenshot_Click(){
  try{
    if(ScreenshotsFlipViewCounter >= 0){
      ScreenshotsFlipViewCounter--;
      FlipScreenshot(ScreenshotsFlipViewCounter);
    }
    else{
      ScreenshotsFlipViewCounter = 0;
      FlipScreenshot(ScreenshotsFlipViewCounter);
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function CloseFlyoutMenu(){
    $('#menu-flyout').css("visibility", "collapse");
}

function OpenFlyoutMenu(){
    $('#menu-flyout').css("visibility", "visible");
}

function CloseSearch(){
    $('#search-flyout').css("visibility", "collapse");
}

function OpenSearch(){
    $('#search-flyout').css("visibility", "visible");
}

function ShowShareDialog(title, content){
   try{
     if(navigator.share){
       navigator.share({
         title: title,
         text: content,
         url: "https://www.microsoft.com/store/productId/9NLHP5KRXZQ7"
       })
       .then(function(){
         console.log("Share success!");
       })
       .catch(function(){
         console.log("Share failed.");
       });
     }
     else{
       console.log("Share APIs don't supported.");
     }
   }
   catch(e){
     console.log(e.toString());
   }
}

function SearchBoxInput_OnLoad(){
    SearchBoxInput = document.getElementById("SearchBoxInput");
    //debugger;
    SearchBoxInput.addEventListener("keydown", SearchBoxInput_KeyDown);
}

function SearchBoxInput_KeyDown(key){
    try{
        if(key != null){
            if(key.code == "Enter"){
                //debugger;
                SearchBing($('#SearchBoxInput').val());
            }
        }
    }
    catch(e){
        console.log(e.toString());
    }
}

function FlyoutSearchInput_KeyDown(key){
    try{
        if(key != null){
            if(key.code == "Enter"){
                //debugger;
                SearchBing($('#FlyoutSearchInput').val());
            }
        }
    }
    catch(e){
        console.log(e.toString());
    }
}

function SearchButton_Click(){
    try{
        SearchBing($('#SearchBoxInput').val());
    }
    catch(e){
        console.log(e.toString());
    }
}

function FlyoutSearch_Find(){
    try{
        SearchBing($('#FlyoutSearchInput').val());
    }
    catch(e){
        console.log(e.toString());
    }
}

function ThemeInitialize(){
  try{
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    
    if (darkThemeMq.matches) {
      var cssId = 'dark';
      
      if (!document.getElementById(cssId))
      {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style_dark.css';
        link.media = 'all';
        head.appendChild(link);
      }
    } 
    else {
      var cssId = 'light';
      
      if (!document.getElementById(cssId))
      {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style.css';
        link.media = 'all';
        head.appendChild(link);
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function NavigateTo(url){
  try{
    document.location.href = url.toString();
  }
  catch(e){
    console.log(e.toString());
  }
}

function SendReview(){
  window.open("mailto:dima.borodij@gmail.com");
}

function SearchBing(query){
    try{
        var request = "https://www.bing.com/search?q=" + query.toString();

        window.open(request.toString());
    }
    catch(e){
        console.log(e.toString());
    }
}

function OpenInMicrosoftStore(){
  try{
    if(navigator.appVersion.indexOf("Windows ")!=-1){
      if(getWindowsOS() == "Windows 10"){
        window.open("ms-windows-store://pdp/?productid=9NLHP5KRXZQ7");
      }
      else{
        window.open("https://www.microsoft.com/en-us/p/power-widgets-customize-your-at-a-glance-info/9nlhp5krxzq7");
      }
    }
    else{
      window.open("https://www.microsoft.com/en-us/p/power-widgets-customize-your-at-a-glance-info/9nlhp5krxzq7");
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function getWindowsOS() {
  // http://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx#PltToken
  if (navigator.appVersion.indexOf("Windows NT 10.") != -1) {
    return 'Windows 10';
  } else if (navigator.appVersion.indexOf("Windows NT 6.3") != -1) {
    return "Windows 8.1";
  } else if (navigator.appVersion.indexOf("Windows NT 6.2") != -1) {
    return "Windows 8";
  } else if (navigator.appVersion.indexOf("Windows NT 6.1") != -1) {
    return "Windows 7";
  } else if (navigator.appVersion.indexOf("Windows NT 6.0") != -1) {
    return "Windows Vista";
  } else if (navigator.appVersion.indexOf("Windows NT 5.2") != -1) {
    return "Windows Server 2003; Windows XP x64 Edition";
  } else if (navigator.appVersion.indexOf("Windows NT 5.1") != -1) {
    return "Windows XP";
  } else if (navigator.appVersion.indexOf("Windows NT 5.01") != -1) {
    return "Windows 2000, Service Pack 1 (SP1)";
  } else if (navigator.appVersion.indexOf("Windows NT 5.0") != -1) {
    return "Windows 2000";
  } else if (navigator.appVersion.indexOf("Windows NT 4.0") != -1) {
    return "Windows NT 4.0";
  } else if (navigator.appVersion.indexOf("Windows 98; Win 9x 4.90") != -1) {
    return "Windows Millennium Edition (Windows Me)";
  } else if (navigator.appVersion.indexOf("Windows 98") != -1) {
    return "Windows 98";
  } else if (navigator.appVersion.indexOf("Windows 95") != -1) {
    return "Windows 95";
  } else if (navigator.appVersion.indexOf("Windows CE") != -1) {
    return "Windows CE";
  } else {
    return "Windows OS, Version nicht bekannt";
  }
}

function Message(content){
  alert(content.toString());
}

function OutlookFeatureShare(){
  var content = 
  "All important Outlook features in one small widget." +
  "Try it right now!";
  var title = "Try Outlook widget in Power Widgets app";

  ShowShareDialog(title.toString(), content.toString());
}

function FastActionsFeatureShare(){
  var content = 
  "Get fast access to important system or device features." +
  "Try it right now!";
  var title = "Try fast actions in Power Widgets app";

  ShowShareDialog(title.toString(), content.toString());
}

function WeatherCardShare() {
    var content = "Get a quick weather information in a handy widget." +
        "Try it right now!";
    var title = "Try weather widget in Power Widgets app";

    ShowShareDialog(title.toString(), content.toString());
}

function ClockCardShare() {
    var content = "Beautiful clock widget will decorate your widget feed and desktop." +
        "Try it right now!";
    var title = "Try clock widget in Power Widgets app";

    ShowShareDialog(title.toString(), content.toString());
}

function EdgeCardShare() {
    var content = "Perform quick web searches, pin sites, and get Bing picture of the day" +
        "Try it right now!";
    var title = "Try Microsoft Edge widget in Power Widgets app";

    ShowShareDialog(title.toString(), content.toString());
}

function StickyCardShare() {
    var content = "Write down everything you need and pin it to the notes panel." +
        "Try it right now!";
    var title = "Try create sticky notes in Power Widgets app";

    ShowShareDialog(title.toString(), content.toString());
}

setInterval(NextFlipScreenshot_Click, 15000);