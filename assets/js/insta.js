if(typeof window.orientation !== 'undefined') {
      var feed = new Instafeed({
          clientId: 'a6949a50e66346dab4d7410eacf3bf2a',
          get: 'user',
          userId: 6333322427,
          resolution: 'standard_resolution',
          accessToken: '6333322427.a6949a5.f97f929743ed4b6a99d157330e9e1809',
          sortBy:'most-recent',
          limit: 3,
          after: function(){
            $( "#instafeed a" ).attr("target", "_blank");
          }
      });
    } else {
      var feed = new Instafeed({
          clientId: 'a6949a50e66346dab4d7410eacf3bf2a',
          get: 'user',
          userId: 6333322427,
          resolution: 'standard_resolution',
          accessToken: '6333322427.a6949a5.f97f929743ed4b6a99d157330e9e1809',
          sortBy:'most-recent',
          limit: 12,
          after: function(){
            $( "#instafeed a" ).attr("target", "_blank");
          }
      });
    }
  feed.run();
