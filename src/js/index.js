import "./import/modules";
import "./import/components";
import { $, jQuery } from "jquery";
window.$ = $;
window.jQuery = jQuery;

var moskowUtc = 3;
var timerId = setInterval(function() {
  let t = new Date(),
    tt = t.getUTCHours() + moskowUtc;
  document.getElementById('tik-tak_m').innerHTML = (tt > 24 ? "0" : "") + (tt > 24 ? tt - 24 : tt) + ":" + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes() + ":" + (t.getSeconds() < 10 ? '0' : '') + t.getSeconds();
  document.getElementById('tik-tak_m').classList.add("step");
}, 1000);

var londonUtc = 0;
var timerId = setInterval(function() {
  let t = new Date(),
    tt = t.getUTCHours() + londonUtc;
  document.getElementById('tik-tak_l').innerHTML = (tt > 24 ? "0" : "") + (tt > 24 ? tt - 24 : tt) + ":" + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes() + ":" + (t.getSeconds() < 10 ? '0' : '') + t.getSeconds();
  document.getElementById('tik-tak_l').classList.add("step");
}, 1000);