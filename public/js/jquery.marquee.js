/*!
* Marquee jQuery Plug-in
*
* Copyright 2009 Giva, Inc. (http://www.givainc.com/labs/)
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* Date: 2009-05-20
* Rev: 1.0.01
*/;(function($){$.marquee={version:"1.0.01"};$.fn.marquee=function(options){var method=typeof arguments[0]=="string"&&arguments[0];var args=method&&Array.prototype.slice.call(arguments,1)||arguments;var self=(this.length==0)?null:$.data(this[0],"marquee");if(self&&method&&this.length){if(method.toLowerCase()=="object")return self;else if(self[method]){var result;this.each(function(i){var r=$.data(this,"marquee")[method].apply(self,args);if(i==0&&r){if(!!r.jquery){result=$([]).add(r);}else{result=r;return false;}}else if(!!r&&!!r.jquery){result=result.add(r);}});return result||this;}else return this;}else{return this.each(function(){new $.Marquee(this,options);});};};$.Marquee=function(marquee,options){options=$.extend({},$.Marquee.defaults,options);var self=this,$marquee=$(marquee),$lis=$marquee.find("> li"),current=-1,hard_paused=false,paused=false,loop_count=0;$.data($marquee[0],"marquee",self);this.pause=function(){hard_paused=true;pause();}
this.resume=function(){hard_paused=false;resume();}
this.update=function(){var iCurrentCount=$lis.length;$lis=$marquee.find("> li");if(iCurrentCount<=1)resume();}
function show(i){if($lis.filter("."+options.cssShowing).length>0)return false;var $li=$lis.eq(i);if($.isFunction(options.beforeshow))options.beforeshow.apply(self,[$marquee,$li]);var params={top:(options.yScroll=="top"?"-":"+")+$li.outerHeight()+"px",left:0};$marquee.data("marquee.showing",true);$li.addClass(options.cssShowing);$li.css(params).animate({top:"0px"},options.showSpeed,options.fxEasingShow,function(){if($.isFunction(options.show))options.show.apply(self,[$marquee,$li]);$marquee.data("marquee.showing",false);scroll($li);});}
function scroll($li,delay){if(paused==true)return false;delay=delay||options.pauseSpeed;if(doScroll($li)){setTimeout(function(){if(paused==true)return false;var width=$li.outerWidth(),endPos=width*-1,curPos=parseInt($li.css("left"),10);$li.animate({left:endPos+"px"},((width+curPos)*options.scrollSpeed),options.fxEasingScroll,function(){finish($li);});},delay);}else if($lis.length>1){setTimeout(function(){if(paused==true)return false;$li.animate({top:(options.yScroll=="top"?"+":"-")+$marquee.innerHeight()+"px"},options.showSpeed,options.fxEasingScroll);finish($li);},delay);}}
function finish($li){if($.isFunction(options.aftershow))options.aftershow.apply(self,[$marquee,$li]);$li.removeClass(options.cssShowing);showNext();}
function pause(){paused=true;if($marquee.data("marquee.showing")!=true){$lis.filter("."+options.cssShowing).dequeue().stop();}}
function resume(){paused=false;if($marquee.data("marquee.showing")!=true)scroll($lis.filter("."+options.cssShowing),1);}
if(options.pauseOnHover){$marquee.hover(function(){if(hard_paused)return false;pause();},function(){if(hard_paused)return false;resume();});}
function doScroll($li){return($li.outerWidth()>$marquee.innerWidth());}
function showNext(){current++;if(current>=$lis.length){if(!isNaN(options.loop)&&options.loop>0&&(++loop_count>=options.loop))return false;current=0;}
show(current);}
if($.isFunction(options.init))options.init.apply(self,[$marquee,options]);showNext();};$.Marquee.defaults={yScroll:"top",showSpeed:850,scrollSpeed:10,pauseSpeed:3000,pauseOnHover:true,loop:-1,fxEasingShow:"swing",fxEasingScroll:"linear",cssShowing:"marquee-showing",init:null,beforeshow:null,show:null,aftershow:null};})(jQuery);