
(function (env) {
    "use strict";
    env.ddg_spice_pirate_speak = function(api_result){

        if (api_result.error) {
            return Spice.failed('pirate_speak');
        }

        Spice.add({
            id: "pirate_speak",
            name: "Pirate Speak",
            data: api_result,
            meta: {
                sourceName: "isithackday.com/arrpi.php",
                sourceUrl: 'isithackday.com/arrpi.php'
            },
            templates: {
                group: 'base',
                options:{
                    content: Spice.npm.content,
                    moreAt: true
                }
            }
        });
    };
}(this));
