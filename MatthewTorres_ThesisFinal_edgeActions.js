/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30500, function(sym, e) {
         
         sym.play("loop");
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${titleNav}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         var nav1 = sym.lookupSelector('psychButton');
         $(nav1).append('<a style="display:block;width:100%;height:100%;" href="navto://DPSTHESIS#1" />');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("animOneEnd");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42457, function(sym, e) {
         sym.stop("animTwoOut");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 64500, function(sym, e) {
         // insert code here
         sym.stop("anim3End");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 94103, function(sym, e) {
         // insert code here
         sym.stop("anim5End");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 109000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bioButton}", "click", function(sym, e) {
         sym.play("Biology");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${anim1forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("animOneOut");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${exit_Button}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${anim2back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("introTrans");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${anim2forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("animTwoOut");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${anim3forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("anim3outro");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${anim3back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("animTwo");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${anim45forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Anim5Out");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${anim4back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("anim3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${anim}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("anim5");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 126000, function(sym, e) {
         // insert code here
         sym.stop("Anim1End");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 129500, function(sym, e) {
         // insert code here
         sym.stop("Anime2End");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 138000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 145000, function(sym, e) {
         // insert code here
         sym.stop("Anim4End");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 185000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CultAnim1Forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("CultAnim1End");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CultAnim2Forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("CultAnim3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CultAnim2Back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("CultAnim1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CultAnim3Forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("CultAnim4");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CultAnim3Back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("CultAnim2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CultAnim4Back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("CultAnim3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CultAnim4Forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("CultAnim5");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CultAnim5Back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("CultAnim4");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cultButton}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("CultAnim1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CultexitButton}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 242000, function(sym, e) {
         // insert code here
         sym.stop("Anim1End");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 248665, function(sym, e) {
         
         sym.stop("Anim2End");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 253000, function(sym, e) {
         // insert code here
         sym.stop("Anim3End");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 260500, function(sym, e) {
         // insert code here
         sym.stop("Anim4End");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 291500, function(sym, e) {
         // insert code here
         sym.stop("Anim6End");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 328500, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("madEnd");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 401857, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("SadEnd");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 434665, function(sym, e) {
         
         sym.stop("HappyEnd");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychAnim1Forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("PsychAnim2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychAnim2Forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("PsychAnim3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychAnim2Back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1000);
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("PsychAnim1");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychAnim3Forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("PsychAnim4");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychAnim3Back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("PsychAnim2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychAnim4Forward}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("PsychAnim5");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychAnim4Back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("PsychAnim3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychAnim5Back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("PsychAnim4");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychAnim6Back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("PsychAnim6");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${yellowButton}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("mad");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BlueButton}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Sad");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RedButton}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Happy");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${psychButton}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Psych");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PsychexitButton}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("intro");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'titleNav'
   (function(symbolName) {   
   
   })("titleNav");
   //Edge symbol end:'titleNav'

   //=========================================================
   
   //Edge symbol: 'bioButton'
   (function(symbolName) {   
   
   })("bioButton");
   //Edge symbol end:'bioButton'

   //=========================================================
   
   //Edge symbol: 'cultButton'
   (function(symbolName) {   
   
   })("cultButton");
   //Edge symbol end:'cultButton'

   //=========================================================
   
   //Edge symbol: 'psychButton'
   (function(symbolName) {   
   
   })("psychButton");
   //Edge symbol end:'psychButton'

   //=========================================================
   
   //Edge symbol: 'outCirc2'
   (function(symbolName) {   
   
   })("outCirc2");
   //Edge symbol end:'outCirc2'

   //=========================================================
   
   //Edge symbol: 'outCirc1'
   (function(symbolName) {   
   
   })("outCirc1");
   //Edge symbol end:'outCirc1'

   //=========================================================
   
   //Edge symbol: 'inCirc3'
   (function(symbolName) {   
   
   })("inCirc3");
   //Edge symbol end:'inCirc3'

   //=========================================================
   
   //Edge symbol: 'inCirc2'
   (function(symbolName) {   
   
   })("inCirc2");
   //Edge symbol end:'inCirc2'

   //=========================================================
   
   //Edge symbol: 'inCirc1'
   (function(symbolName) {   
   
   })("inCirc1");
   //Edge symbol end:'inCirc1'

   //=========================================================
   
   //Edge symbol: 'simpButt'
   (function(symbolName) {   
   
   })("simpButt");
   //Edge symbol end:'simpButt'

   //=========================================================
   
   //Edge symbol: 'pulse'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("pulse");
   //Edge symbol end:'pulse'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-291841504");