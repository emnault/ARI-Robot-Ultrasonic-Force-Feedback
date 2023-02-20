import * as RRLIB from '../../js/modules/rrlib.js'


// RRLIB speech for the games

class DefaultWeb {

    constructor() {
        this.ros = new RRLIB.Ros({
            host: 'http://' + window.location.hostname
        });
        this.tts_action = new RRLIB.ActionClient({
            ros: this.ros,
            name: 'tts'
        });
    }

    init() {
        let param = new RRLIB.Param({
            ros: this.ros,
            name: 'robot_info'
        });
    }

    async firstFrase() {
        let goal_id = '';                       
        // Respond
        this.tts_action.sendGoal({
            rawtext: {
                text: "Great, now you will <mark name='doTrick trickName=open_hands_out'/>do the category checker activity for three minutes. Let's begin!<mark name='doTrick trickName=alive_3'/> ", 
                lang_id: "en_GB"
            }
        }, (response) => {
            goal_id = response.goal_id;
        });

        return;
    }
}

let default_web = new DefaultWeb();

$(document).ready(function() {

    default_web.firstFrase();

  // Add event listeners
    $("#back").on("touchend", function(){
        // parent.switchConfig("post_activity");
    window.open("../instructions_cat_check/index.html", "_self");
  });
    $("#next").on("touchend", function(){
        window.open("../customisation_cue/index.html", "_self");
   
  });
  //   $("#next").on("touchend", function(){
  //       default_web.secondFrase(); //Phrase for next slide
  //       default_web.hideModal();
  // });
});