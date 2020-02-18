/*v2.5.0-RC3-b8*/
function detectTransformProperty(){var t=["MozTransform","WebkitTransform","OTransform","msTransform","transform"],o=document.createElement("div");for(var e in t)if(void 0!==o.style[t[e]])return t[e];return""}function Scroll(t,o,e,n,i){function s(){t.on("mousedown",a),e.on("mousedown",v),n.on("mousedown",v)}function a(t){F&&m(),W.on("mousemove",c),W.on("mouseup",r),W.on("mouseout",l),o.stop(),z=o.position().top,k=t.pageY,c(t),f()}function c(t){if(y=(new Date).getTime(),S=t.pageY-k,k=t.pageY,z>0&&S>0){var e=x-z,n=Math.abs(S)/x;S=e*n}else if(w>z+T&&0>S){var e=-Math.max(z+T-(w-x),10),n=Math.abs(S)/x;S=e*n}z+=S,o.css("top",z),u()}function r(t){W.off("mousemove",c),W.off("mouseup",r),W.off("mouseout",l);var e=((new Date).getTime()-y)/1e3/B;e>1&&(e=1),S*=1-e,S*=E;var n=z;z+=S,w>z+T&&(z=w-T),z>0&&(z=0);var i=z-n,s=Math.abs(i)/D;o.animate({top:z},{duration:1e3*s,step:u,complete:d}),t&&(I=!0)}function l(t){if($(t.relatedTarget).is("iframe")){if(I)return void(I=!1);r()}}function d(){var t=z;w>z+T&&(z=w-T),z>0&&(z=0),S=z-t;var e=Math.abs(S)/D;o.animate({top:z},{duration:1e3*e,step:u,complete:p})}function f(){T>w&&i.show()}function u(){var t=o.position().top;if(0>t?e.show():e.hide(),t+T>w?n.show():n.hide(),T>w){var s;s=t>0?w-t:w>t+T?t+T:w;var a=Math.round(w*-t/T),c=Math.round(w*s/T);0>a&&(c+=a,a=0),i.height(c),i.css("top",a+C)}}function p(){T>w&&i.hide()}function v(t){F=!0,W.on("mouseup",m),W.on("mouseout",g),f();var n=$(t.currentTarget);o.stop(),z=o.position().top,A=n[0]==e[0]?P:-P,clearInterval(M),M=setInterval(h,40)}function h(){var t=z+A;w>t+T&&(t=w-T,F=!1),t>0&&(t=0,F=!1),z=t,o.css("top",z),u(),F||m()}function m(){W.off("mouseup",m),W.off("mouseout",g),clearInterval(M),p(),F=!1}function g(t){$(t.relatedTarget).is("iframe")&&m()}function b(){z=0,o.css("top",z),w=t.height(),C=t.position().top,T=o.height(),u()}var t,o,e,n,i,w,C,T,y,k,S,z,M,A,F,x=100,E=5,D=300,B=.5,P=10,W=$(window),I=!1;return s(),{recompute:b}}window.trace=function(){if(window.console&&window.console.log)if(1==arguments.length)console.log(arguments[0]);else try{console.log.apply(this,arguments)}catch(t){console.log(arguments)}},window.log=function(){var t=$("#console");t.length||(t=$('<div id="console"></div>'),t.css({position:"absolute",top:"0",left:"0","z-index":"99999",direction:"ltr","text-align":"left","font-size":"10pt",color:"white",opacity:.4,"line-height":"1em","pointer-events":"none"}),t.appendTo(document.body)),t.height()>500&&t.html("");var o=$.makeArray(arguments).join(",");""===o&&(o="[empty string]"),t.append('<pre style="display:inline; background:black; margin:0;">'+o+"</pre><br />")},function(){function t(){$(this).addClass(r==this?"press":"hover")}function o(){$(this).removeClass("hover press")}function e(){r=this;var t=$(this);t.removeClass("hover"),t.addClass("press"),t.on("mouseup",n),l.on("mouseup",i),l.on("mouseout",s)}function n(){var t=$(this);t.removeClass("press"),t.addClass("hover"),i()}function i(){$(r).off("mouseup",n),l.off("mouseup",i),l.off("mouseout",s),r=null}function s(t){$(t.relatedTarget).is("iframe")&&i(t)}function a(n){n.on("mouseenter",t),n.on("mouseleave",o),n.on("mousedown",e)}function c(s){s.off("mouseenter",t),s.off("mouseleave",o),s.off("mousedown",e),s.off("mouseup",n),l.off("mouseup",i)}var r,l=$(window);$.fn.extend({buttonize:function(){return this.each(function(){a($(this)),$(this).css("cursor","pointer")}),this},unbuttonize:function(){return this.each(function(){c($(this)),$(this).css("cursor","auto")}),this}})}();var Window=function(t,o,e,n,i,s,a){function c(){$("#window")&&$("#window").remove(),b=$('<div id="window"></div>').appendTo("body"),b.css("opacity",0),e&&b.width(e),n&&b.height(n),b.append("<div class='winTitle'><div class='winTitleText'>"+t+"</div></div>"),b.append("<div class='winContent'>"+o+"</div>"),M=$("#chapter"),A=$("#lesson"),F=$("#discipline"),x=$(".science"),E=$(".screen").find(".info"),w=b.find("video"),w.length&&d(),C=b.find("#fontcolorsWrapper"),C.length&&(T=$("body").find("#fontcolors").attr("id"),l()),y=b.find("#fontsWrapper"),y.length&&(T=$("body").find("#fonts").attr("id"),r());var i=$("<div class='winClose'></div>").appendTo(b);i.buttonize(),i.on("click",p),b.css("margin-left",-Math.round(b.width()/2)),b.css("margin-top",-Math.round(b.height()/2)),$(window.top).on("resize",u),$(window.top).on("orientationchange",u),u(),v(),h(!0)}function r(){b.find(".winContent").css("direction","ltr"),b.find(".winContent").css("text-align","left"),s&&y.find("input[name='font']").eq(s).attr("checked",!0),y.find("input[name='font']").change(function(){s=$(this).val();var t=P[s];x.find(".sText").css("font-family",t),E.find(".infoText").css("font-family",t),M.css("font-family",t),F.css("font-family",t),A.css("font-family",t),a(s)})}function l(){s&&C.find("input[name='fontcolors']").eq(s).attr("checked",!0),C.find("label").each(function(t){var o=$(this);o.css("background-color",B[t].Background),o.css("color",B[t].Font)}),C.find("input[name='fontcolors']").change(function(){s=$(this).val();var t=B[s].Font,o=B[s].Background;x.css("background-color",o),x.find(".sText").css("color",t),E.css("background-color",o),E.find(".infoText").css("color",t),M.css("background-color",o),M.css("color",t),F.css("background-color",o),F.css("color",t),A.css("background-color",o),A.css("color",t)})}function d(){var t=w[0];w.prop("controls",!0),t.play(),4!==t.readyState&&(t.addEventListener("canplaythrough",f,!1),t.addEventListener("load",f,!1),setTimeout(function(){t.pause()},1))}function f(){var t=w[0];t.removeEventListener("canplaythrough",f,!1),t.removeEventListener("load",f,!1),t.play()}function u(){var t=D.width(),o=D.height();if(t!=S||o!=z){S=t,z=o;var e=b.width(),n=b.height();k=1;var i=S/z,s=e/n;i>s?n>z&&(k=z/n):e>S&&(k=S/e),1==k?b.css(I,""):b.css(I,"scale("+k+", "+k+")")}}function p(){h(!1),b.stop(),b.animate({opacity:0},{duration:200,step:function(t){var o=.9+t/10;o*=k,b.css(I,"scale("+o+", "+o+")")},complete:g})}function v(){W.addClass("dark"),W.show(),b.stop(),b.css("opacity",0),b.animate({opacity:1},{duration:500,step:function(t){var o=Math.sin(Math.PI+3*Math.PI*t);o=1+o/10*(1-t),o*=k,b.css(I,"scale("+o+", "+o+")")},complete:function(){1==k&&b.css(I,"")},easing:"linear"})}function h(t){L.locked=t,t&&(L.top=D.scrollTop(),m())}function m(){L.locked&&(D.scrollTop(L.top),setTimeout(m,$.fx.interval))}function g(){if($(window).off("resize",u),$(window).off("orientationchange",u),w.length){var t=w[0];t.pause(),t.removeEventListener("canplaythrough",f,!1),t.removeEventListener("load",f,!1)}b.remove(),W.hide(),W.removeClass("dark"),i&&(s?i(T,s):i())}void 0==t&&(t=""),void 0==o&&(o=""),(void 0==e||""==e||isNaN(e))&&(e=400),(void 0==n||""==n||isNaN(n))&&(n=0);var b,w,C,T,y,k,S,z,M,A,F,x,E,D=$(window),B=[{Background:"#FFFFFF",Font:"#000000"},{Background:"#000000",Font:"#FFFFFF"},{Background:"#EDED1C",Font:"#000000"},{Background:"#000000",Font:"#EDED1C"},{Background:"#EDED1C",Font:"#1C4DED"},{Background:"#1C4DED",Font:"#EDED1C"}],P=["arabic","arial","tahoma"],W=$("#ghost"),I=detectTransformProperty(),L={top:0,locked:!1};c()};$(function(){function t(){jQuery.fx.interval=40,to=$(window),oo=$("html"),eo=$("body"),wo=$(".screen"),no=$("#chapter"),io=$("#lesson"),so=$("#discipline"),ao=$("#fontcolors"),co=ao.find("#fontcolorsWrapper"),ro=$("#fonts"),lo=$("#objectives"),fo=$("#tutorial"),uo=ro.find("#fontsWrapper");var t=$("title");t.empty(),t.append(no.html()),fe||(Te.push(no),ye.push(no),Te.push(io),ye.push(io),Te.push(so),ye.push(so)),Wo=detectTransformProperty(),Xo=null!==navigator.userAgent.match(/iPad/i),Qo=null!==navigator.userAgent.match(/OS ([7-9]|\d{2,})/i),Uo=null!==navigator.userAgent.match(/Safari/i)&&null===navigator.userAgent.match(/Chrome|Chromium|CriOS/i),jo=Xo||navigator.userAgent.match(/MSIE [6789]/i),_o=parseFloat(no.css("font-size")),Yo=parseFloat(io.css("font-size")),o(),i(),d(),f(0)}function o(){xo=[];for(var t=0;t<wo.length;t++){var o=jQuery.extend({},Go),e=wo.eq(t);e.attr("ScienceLandscapeMin")&&(o.ScienceLandscapeMin=Number(e.attr("ScienceLandscapeMin"))),e.attr("SciencePortraitMin")&&(o.SciencePortraitMin=Number(e.attr("SciencePortraitMin"))),e.attr("AppletWidth")&&(o.AppletWidth=Number(e.attr("AppletWidth"))),e.attr("AppletHeight")&&(o.AppletHeight=Number(e.attr("AppletHeight"))),xo.push(o)}}function e(){var t=oo.hasClass("ltr")?Jo.colors.en:Jo.colors.ar;t.forEach(function(t,o){var e=$("<input type='radio' name='fontcolors'/>").appendTo(co);e.attr("value",o),$("<label/>",{text:"  "+t}).appendTo(co),$("<br/><br/>").appendTo(co)})}function n(){var t=oo.hasClass("ltr")?Jo.fonts.en:Jo.fonts.ar;t.forEach(function(t,o){var e=$("<input type='radio' name='font'/>").appendTo(uo);e.attr("value",o),$("<label/>",{text:"  "+t}).appendTo(uo),$("<br/><br/>").appendTo(uo)}),$(".winContent").css("direction","ltr")}function i(){so.append(" 			<div id='underline'></div> 			<div id='iDiscipline'></div> 		"),Z=oo.hasClass("ltr")?1:0,lo.attr("title",lo.attr("title")?lo.attr("title"):Jo.objectives[Z]),fo.attr("title",fo.attr("title")?fo.attr("title"):Jo.tutorial[Z]),ao.attr("title",Jo.colors.title[Z]),ro.attr("title",Jo.fonts.title[Z]),e(),n(),eo.append(" 			<div id='menuContainer'> 				<div id='menu'> 					<div id='bObjectives' class='menuButton'>"+Jo.objectives[Z]+"<div id='iObjectives'></div></div><div id='bTutorial' class='menuButton'>"+Jo.tutorial[Z]+"<div id='iTutorial'></div></div><div id='bRefresh' class='menuButton'>"+Jo.refresh[Z]+"<div id='iRefresh'></div></div> 				</div> 			</div> 			<div id='bgTop'></div> 			<div id='bgLeftTop'></div> 			<div id='bgRightTop'></div> 			<div id='s_new_bg'></div> 			<div id='toggleApplet'></div> 			<div id='logo'></div> 			<div id='ael'></div> 			<div id='flag'></div> 			<div id='cornerbg'></div> 			<div id='corner'> 				<div id='icorner'></div> 			</div> 			<nav id='ariadna'> 				<div id='nr'></div> 			</nav> 			<div id='ghost'></div> 		");for(var t=0;t<wo.length;t++)$("#ariadna").append("<div class='dot'></div>");$(".science").each(function(){var t=$(this);t.html("<div class='sText'>"+t.html()+"</div>")}),$(".science").append("			<div class='s_new_header'></div> 			<div class='s_new_content'></div> 			<div class='sToggle'> 				<div class='sToggleIcon'></div> 			</div> 			<div class='fontSizeBar'> 				<div class='fontSizeUp'></div> 				<div class='fontSizeDown'></div> 				<div class='fontColor'></div> 				<div class='fontSelect'></div> 				<div class='fontReset'></div> 			</div> 			<div class='scrollTop'> 				<div class='scrollTopIcon'></div> 			</div> 			<div class='scrollBottom'> 				<div class='scrollBottomIcon'></div> 			</div> 			<div class='sViewportWrapper'> 				<div class='scroll'></div> 				<div class='sViewport'> 					<div class='sContent'> 					</div>				</div>			</div>		"),$(".science").each(function(){var t=$(this),o=t.find(".sText"),e=t.find(".sContent");e.append(o),t.data("scroll",Scroll(t.find(".sViewport"),e,t.find(".scrollTop"),t.find(".scrollBottom"),t.find(".scroll")))}),$(".info").append("			<div class='infoContent'> 				<div class='infoText'></div> 			</div> 			<div class='infoPaper'></div> 		"),$(".info").each(function(){var t=$(this),o=t.find(".log");ze=parseFloat($(o).css("font-size"));var e=t.find(".infoText");e.append(o)}),$(".screen").append("			<div class='applet'> 				<iframe class='iframe' src='' seamless='seamless' scrolling='no'></iframe> 			</div> 		"),$(".iframe").css(Wo+"Origin","0 0"),$(".iframe").each(function(t){var o=$(this);o.width(xo[t].AppletWidth),o.height(xo[t].AppletHeight)}),Ao=$('<div id="audioIcon"></div>'),s(),vo=$("#corner"),ho=$("#menu"),mo=$("#nr"),bo=$(".dot"),po=$("#flag"),go=$("#ariadna"),$o=$("#ghost"),bo.each(function(t){this.nr=t+1}),1==Z&&(no.css("direction","ltr"),io.css("direction","ltr"));var o=oo.hasClass("ltr")?"ltr":"rtl";go.css("direction",o)}function s(){$("audio").each(function(){var t=$(this);t.parent().addClass("audioText").on("click",a).data("audio",t.find("source").attr("src")),t.remove()})}function a(t){Fo=new Audio(t.target?$(this).data("audio"):t),Fo.addEventListener("ended",c),Fo.play(),r(),K("onAudioOpen")}function c(){Fo&&(Fo.pause(),Fo.removeEventListener("ended",c),Fo=null),l(),K("onAudioClose")}function r(){$o.append(Ao),$o.stop(!0,!0),$o.fadeIn(400),$o.on("click",c)}function l(){Ao.remove(),$o.stop(!0,!0),$o.hide(),$o.off("click",c)}function d(){to.on("resize",w),to.on("orientationchange",w),to.on("touchmove selectstart dragstart MSGestureHold MSPointerMove pointermove",!1),to.on("scroll",T),to.on("message",W),vo.on("click",y),$("#bObjectives").on("click",S),$("#bTutorial").on("click",z),$("#bRefresh").on("click",M),$("#corner, #bObjectives, #bTutorial, #bRefresh").buttonize(),$(".scrollTop, .scrollBottom").buttonize(),$(".sToggle").buttonize(),$(".fontSizeBar").find(".fontSizeUp").buttonize(),$(".fontSizeBar").find(".fontSizeDown").buttonize(),$(".fontSizeBar").find(".fontColor").buttonize(),$(".fontSizeBar").find(".fontReset").buttonize(),$(".fontSizeBar").find(".fontSelect").buttonize(),$(".fontSizeUp").on("click",_),$(".fontSizeDown").on("click",Y),$(".fontColor").click(R),$(".fontSelect").click(q),$(".fontReset").click(H),$(".sToggle").on("click",Q),$("#toggleApplet").buttonize(),$("#toggleApplet").on("click",X),go.on("mousedown",A),bo.on("mouseenter",D),bo.on("mouseleave",B),$("a").each(function(){var t=$(this);0!=t.attr("href").indexOf("http")&&(t.on("click",P),t.buttonize())})}function f(t){if(void 0==Do)Do=t,Co=wo.eq(Do),Co.show(),u(),m();else{var o=Do>t?-1:1;Co.stop(!0,!0),To.hasClass("fullScience")&&Q(),Do!=t?Co.animate({opacity:0,left:Co.position().left+Zo*o},{duration:Ko,complete:function(){g(),Co.hide(),Do=t,Co=wo.eq(Do),Co.css("opacity",0);var e=oo.hasClass("ltr")?1:-1;Co.css("left",e*Zo*o),Co.show(),u(),Co.animate({opacity:1,left:0},{duration:600,complete:m}),mo.html(Do+1);var n=bo.eq(Do),i=n.position().left;mo.css("left",Math.round(i+(n.width()-mo.width())/2)),mo.show()}}):Co.animate({left:0},{duration:600})}}function u(){Eo=xo[Do],To=Co.find(".science"),yo=Co.find(".info"),ko=Co.find(".infoContent"),zo=Co.find(".applet"),Mo=Co.find(".iframe"),Vo=Mo[0].contentWindow,bo.removeClass("selected hover"),bo.eq(Do).addClass("selected");var t=Co.find(".log");t.stop(!0,!0).hide(),So=t.eq(0),So.show(),zo.addClass("loading"),fe||(Te.push(To.find(".sText")),ye.push(To),Te.push(yo.find(".infoText")),ye.push(yo),j(),O()),$("#window").remove(),p(),v(Io,!0)}function p(){var t=to.width(),o=to.height();de>t&&(t=de),ue>o&&(o=ue),eo.width(t),eo.height(o),Bo=t,Po=o;var e=Eo.AppletWidth/Eo.AppletHeight;if(Oo){Xo&&Mo.removeClass("iPad");var n=t/o;return void(e>n?(v(t/Eo.AppletWidth),Mo.css("left",0),Mo.css("top",Math.round((o-Eo.AppletHeight*Io)/2))):(v(o/Eo.AppletHeight),Mo.css("left",Math.round((t-Eo.AppletWidth*Io)/2)),Mo.css("top",0)))}Xo&&Mo.addClass("iPad");var i=t/o>=1?"landscape":"portrait";if(Xo){var s=parseInt(ko.find(".infoText").css("top"));ko.find(".infoText").css("top",s+10)}po.width(t-2*te);var a,c,r,l,d,f,u,p,h,m,g,$,b,w,C,T;if("landscape"==i){$=o-ce-re,g=Math.round(e*$),a=t-ae-g-oe,a<Eo.ScienceLandscapeMin&&(g-=Eo.ScienceLandscapeMin-a,$=Math.round(g/e),a=Eo.ScienceLandscapeMin),r=ce,l=ae,d=re+pe,f=oe+g,u=ce+(o-d-r),p=ae,h=re,m=f;var y=Math.round((o-ce-re-$)/2);b=ce+y,w=t-f,C=re+y,T=oe}else g=t-oe-ae,$=Math.round(g/e),c=o-ce-$-ve-re,c<Eo.SciencePortraitMin&&($-=Eo.SciencePortraitMin-c,g=Math.round($*e),c=Eo.SciencePortraitMin),r=ce+$,l=ae,d=re+ve,f=oe,u=o-re-ve,p=ae,h=re,m=oe,b=ce,w=Math.round((t-g)/2),C=o-r,T=w;To.css("top",r+Ce[i].science[0]),To.css("right",l+Ce[i].science[1]),To.css("bottom",d+Ce[i].science[2]),To.css("left",f+Ce[i].science[3]),yo.css("top",u+Ce[i].info[0]),yo.css("right",p+Ce[i].info[1]),yo.css("bottom",h+Ce[i].info[2]),yo.css("left",m+Ce[i].info[3]),zo.css("top",b),zo.css("right",w),zo.css("bottom",C),zo.css("left",T),Mo.css("left",0),Mo.css("top",0);var k=yo.height()-ko.innerHeight(),S=parseInt(To.css("bottom"))-k,z=parseInt(yo.css("top"))+k;To.css("bottom",S),yo.css("top",z),v(g/Eo.AppletWidth),To.hasClass("fullScience")&&(To.css("top",ce+Ce[i].science[0]),To.css("right",ae),To.css("bottom",re),To.css("left",oe+ee)),To.data("scroll").recompute(),L()}function v(t,o){(o||t!=Io)&&(Io=t,h(Vo),Mo.css(Wo,"scale("+Io+")"),T())}function h(t){Qo||jo&&t.postMessage('{"command":"scale","param":"'+Io+'"}',"*")}function m(){Mo.css("opacity",0),Mo.attr("src",Do+1+"/applet.html"),mo.hide()}function g(){Mo.attr("src",""),Mo.css("visibility","hidden")}function b(){zo.removeClass("loading"),Mo.css("visibility","visible"),Mo.animate({opacity:1},{duration:400}),h(Vo)}function w(){(to.width()!=Bo||to.height()!=Po)&&p()}function C(){var t=0;return Qo&&Uo&&$(window).width()>$(window).height()&&(t=10),t}function T(){if(!xe){var t=C();return window.scrollTo(0,t),so.css("margin-bottom",t),xe=!0,setTimeout(function(){xe=!1},Me),!1}}function y(){vo.hasClass("close")?(vo.removeClass("close"),ho.stop(),ho.animate({left:-ho.width()},400,k)):(ho.parent().show(),vo.addClass("close"),ho.stop(),ho.animate({left:0},400))}function k(){ho.parent().hide()}function S(){J("objectives")}function z(){J("tutorial",685,540)}function M(){fe=!0,g(),u(),To.hasClass("fullScience")&&Q(),m(),y()}function A(t){var o=+new Date;if(Ee+Me>o)return void(t.pristineEvent||t).preventDefault();Ee=o,to.on("mousemove",F),to.on("mouseup",E),go.on("mouseleave",E),Ho=t.pageX,No=t.pageY;var e=$(t.target);e.hasClass("hover")&&(e.removeClass("hover"),e.addClass("press"))}function F(t){if(Lo){var o=t.pageX-Ho;qo+=t.pageX-Ho,Co.css("left",o)}else(Math.abs(t.pageX-Ho)>=he||Math.abs(t.pageY-No)>=he)&&(bo.removeClass("hover press"),Lo=!0,Co.stop(!0,!0),qo=0,Ro=setInterval(x,40),mo.hide(),go.off("mouseleave",E),$o.show())}function x(){0>qo?(qo+=me,qo>0&&(qo=0)):qo>0&&(qo-=me,0>qo&&(qo=0))}function E(t){if(to.off("mousemove",F),to.off("mouseleave",E),go.off("mouseup",E),clearInterval(Ro),Lo){$o.hide();var o=qo*ge,e=Co.position().left+o,n=Do,i=oo.hasClass("ltr")?e>-Bo*$e:-Bo*$e>e,s=oo.hasClass("ltr")?Bo*$e>e:e>Bo*$e;i?Do>0&&n--:s&&Do<wo.length-1&&n++,f(n)}else{var a=$(t.target);a.hasClass("press")&&(bo.removeClass("hover press selected"),a.addClass("selected"),f(t.target.nr-1))}Lo=!1}function D(){if(!Lo){var t=$(this);t.hasClass("selected")||t.addClass("hover"),mo.html(this.nr);var o=t.position().left;mo.css("left",Math.round(o+(t.width()-mo.width())/2)),mo.show()}}function B(){Lo||($(this).removeClass("hover"),mo.hide())}function P(t){(t.pristineEvent||t).preventDefault();var o=$(t.currentTarget).attr("href");return o=o.split("#").join(""),J.apply(this,o.split(",")),t.preventDefault(),t.stopPropagation(),!1}function W(t){var o=t.originalEvent.data;o=o.replace(/\s/g," ");var e=jQuery.parseJSON(o);switch(e.command){case"info":So.attr("id")!=e.id&&(So.stop(!0,!0),So.hide(),So=yo.find("#"+e.id),So.fadeTo(0,0),So.show(),p(),So.fadeTo(2*Ko,1,function(){U()}));break;case"popup":K("onPopupOpen"),Window(e.title,e.content,e.width,e.height,I);break;case"loaded":b();break;case"openAudio":r();break;case"closeAudio":l();break;case"audio":a(e.path)}}function I(t,o){"fonts"===t?ie=o:"fontcolors"===t&&(ne=o),xe=!1,T(),K("onPopupClose")}function L(){var t=parseFloat(no.css("font-size"));do no.css("font-size",t+"px"),t--;while(no.innerHeight()>le&&t>1);var t=parseFloat(io.css("font-size"));do io.css("font-size",t+"px"),t--;while(io.innerHeight()>le&&t>1)}function j(){Se.push.apply(Se,[no.css("background-color"),io.css("background-color"),so.css("background-color"),To.css("background-color"),yo.css("background-color")])}function O(){ke=Te.map(function(t){return{fontSize:parseFloat(t.css("font-size")),fontFamily:t.css("font-family"),color:t.css("color")}})}function H(){Te.forEach(function(t,o){t.css({"font-size":ke[o].fontSize,"font-family":ke[o].fontFamily,color:ke[o].color})}),ye.forEach(function(t,o){"rgba(0, 0, 0, 0)"!=Se[o]?t.css("background-color",Se[o]):t.css("background-color","")}),ne=null,ie=null,le=42,p()}function N(t){Te.map(function(o){return parseFloat(o.css("font-size"))+t}).forEach(function(t,o){Ae>t&&t>Fe&&Te[o].css("font-size",t)}),p()}function R(){J("fontcolors",1==Z?390:320,530)}function q(){J("fonts",540,330)}function _(){N(1)}function Y(){N(-1)}function X(){To.hasClass("fullScience")&&Q(),oo.hasClass("fullApplet")?(Co.removeClass("topmost"),zo.removeClass("topmost"),oo.removeClass("fullApplet"),Oo=!1):(Co.addClass("topmost"),zo.addClass("topmost"),oo.addClass("fullApplet"),Oo=!0),p()}function Q(){To.hasClass("fullScience")?(zo.css("visibility","visible"),Mo.css("opacity","1"),yo.show(),To.removeClass("fullScience")):(zo.css("visibility","hidden"),Mo.css("opacity","0"),yo.hide(),To.addClass("fullScience")),p()}function U(){So.css("background-color","rgba(255,251,104,1)"),So.css("-dummy",0),So.animate({"-dummy":1},{duration:2*Ko,step:V})}function V(t){So.css("background-color","rgba(255,251,104,"+(1-t)+")")}function G(t){t==be||t==we?(se=parseFloat(no.css("font-size")),le=30):(le=42,io.css("font-size",se+"px"),no.css("font-size",se+"px")),p()}function J(t,o,e){var n=$("#"+t);K("onPopupOpen"),"fontcolors"===t?Window(n.attr("title"),n.html(),o,e,I,ne,G):"fonts"===t?Window(n.attr("title"),n.html(),o,e,I,ie,G):Window(n.attr("title"),n.html(),o,e,I)}function K(t){Vo.postMessage('{"command":"'+t+'"}',"*")}var Z,to,oo,eo,no,io,so,ao,co,ro,lo,fo,uo,po,vo,ho,mo,go,$o,bo,wo,Co,To,yo,ko,So,zo,Mo,Ao,Fo,xo,Eo,Do,Bo,Po,Wo,Io,Lo,jo,Oo,Ho,No,Ro,qo,_o,Yo,Xo,Qo,Uo,Vo,Go={ScienceLandscapeMin:256,SciencePortraitMin:200,AppletWidth:700,AppletHeight:520},Jo={objectives:["أهداف","Objectives"],tutorial:["برنامج تعليمي","Tutorial"],refresh:["تحديث","Refresh"],colors:{title:["تغيير الألوان","Change colors"],ar:["أسود / أبيض","أبيض / أسود","أصفر / أسود","أسود / أصفر ","أصفر / أزرق","أزرق / أصفر"],en:[" black / white"," white / black"," yellow / black"," black / yellow"," yellow / blue"," blue / yellow"]},fonts:{title:["أطقم الحروف","Fonts"],ar:[" Arabic transparent"," Arial"," Tahoma"],en:[" Arabic transparent"," Arial"," Tahoma"]}},Ko=200,Zo=100,te=38,oe=34,ee=20,ne=null,ie=null,se=null,ae=34,ce=130,re=98,le=42,de=300,fe=!1,ue=300,pe=100,ve=50,he=5,me=500,ge=3,$e=.3,be=2,we=0,Ce={landscape:{science:[-5,0,0,10],info:[-20,4,0,14]},portrait:{science:[7,0,0,0],info:[-20,4,0,4]}},Te=[],ye=[],ke=[],Se=[],ze=22,Me=1e3,Ae=32,Fe=15;t();var xe=!1,Ee=0});