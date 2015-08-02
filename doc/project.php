<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/crazy2014" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=crazy2014" ;
$project = new project_object("crazy2014", "Crazy 2014", "https://github.com/aidansean/crazy2014", "http://aidansean.com/projects/?tag=crazy2014", "crazy2014/images/project.jpg", "crazy2014/images/project_bw.jpg", "When I heard the sad news about flight MH17 I couldn't quite understand what was happening.  It seemed like the worst parts of 2014 had come together in a way that nobody could have predicted.  I tried to sum up the situation in this infographic.  This mini project was in fact an excuse to practice some infographic making skills, which I had not used for a long time.", "Frivolous", "canvas,JavaScript,HTML") ;
?>