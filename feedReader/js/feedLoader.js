<script type="text/javascript" src="https://www.google.com/jsapi"></script>

google.load("feeds", "1");

this.onMessage = function(lsFeedObjs) {
  
  console.log("--initialize called--");
  var lsEntries = new Array();
  
  //for rss feed given in the list 
  for(var i = 0; i<lsFeedObjs.length; i++){
    
    var feedObj = lsFeedObjs[i];
    console.log("-feed object: -\n" + feedObj);
    
    var feed = new google.feeds.Feed(feedObj.url);
    feed.load(function(result) {
      if (!result.error) {
        for (var i = 0; i < result.feed.entries.length; i++) {
          var entry = result.feed.entries[i];
          lsEntries.push(entry);
        }
      }
    });
  }
  console.log("--initialize ended--");
  this.postMessage(lsEntries);
};