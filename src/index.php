<?php
$title = '2014 news' ;
$js_scripts = array('functions.js') ;
include($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
  <div class="right">
    <p>This page summarises some sad things that happened in 2014.</p>
  </div>
  
  <div class="right">
    <h3>The infographic</h3>
    <div class="blurb">
      <div id="canvas_container" style="text-align:center">
        <canvas id="circle_canvas" width="600" height="500" style="border:1px solid black;margin-top:10px;margin:auto"></canvas>
      </div>
    </div>
  </div>
  
<?php foot() ; ?>