function uploadTable() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/sportsru/table-task/master/seriea.json",
    dataType: "JSON",
      
    success: function(data) {
      $(data.teams).each(function(i) {
        if(data.teams[i].flag_country == 'Италия') {
          var teamFlag = "flag-italy";
        }
          
        $("#table-seriea").append( "<tr><td class='team-place'>" + data.teams[i].place
          + "</td><td class='team-title border-right'>"
          + "<span class='flag " + teamFlag + "'></span>"
          + "<a href='" + data.teams[i].tag_url + "'>" + data.teams[i].name + "</a>"
          + "</td><td class='stats'>" + data.teams[i].matches
          + "</td><td class='stats'>" + data.teams[i].win
          + "</td><td class='stats'>" + data.teams[i].draw
          + "</td><td class='stats'>" + data.teams[i].lose
          + "</td><td class='stats stats-goals'>" + data.teams[i].goals
          + "</td><td class='stats stats-conceded'>" + data.teams[i].conceded_goals
          + "</td><td class='stats'>" + data.teams[i].score
          + "</td></tr>"
        );
      });
    }
  })
}

$(document).ready(function() {
  uploadTable();
});