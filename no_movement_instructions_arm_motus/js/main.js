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
                text: "To do this activity, hold onto the joystick and rest your forearm in the support. The cursor is controlled by moving the joystick. The aim is to select the item that answers the prompt at the top of the screen. Select your answer by holding the cursor over an item for one second. If you get it wrong, you can try again. The goal is to complete the task both quickly and accurately.", 
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
//  shapes_demo.init();

    default_web.firstFrase();

    var video = document.getElementById('video');
    video.setAttribute('src', 'Intro_Haptic.mp4'); 
    video.play();

  //   $("#back").on("touchend", function(){
  //  parent.switchConfig("activity_choice_slideshow");
  //   // window.open("../post_ratings_cat_check/index.html", "_self");
  // });

    
  // Add event listeners
    $("#next").on("touchend", function(){
   // parent.switchConfig("verbal_task_feedback");
    window.open("../customisation_category/index.html", "_self");
  });
    $("#back").on("touchend", function(){
   parent.switchConfig("activity_choice_slideshow");
    // window.open("../customisation_category/index.html", "_self");
  });
});

