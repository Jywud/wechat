/*! Copyright (c) 2005--2017 BaiRuiTech.Co.Ltd. All rights reserved. */
!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function o(e){var t=new Date,n=t.getHours()>9?t.getHours():"0"+t.getHours(),o=t.getMinutes()>9?t.getMinutes():"0"+t.getMinutes(),r=t.getSeconds()>9?t.getSeconds():"0"+t.getSeconds();if(console.log(e),a=a+"\r\n & time："+n+":"+o+":"+r+":  "+e,e='<p><span class="text-info">time：'+n+":"+o+":"+r+"</span>&nbsp;&nbsp;&nbsp;&nbsp;"+e+"</p>",document.getElementById("log")){var s=document.getElementById("log").innerHTML;document.getElementById("log").innerHTML=e+s}i.putLog(a)}var r=n(1),i=n(8),a="";window.AnyChatSDK=r.instance,window.log=o,window.log_obj=i},function(e,t,n){var o=n(2),r=n(4),i=n(5),a=n(7),s=n(3),c=window.URL||window.webkitURL||window.msURL||window.oURL,d={},u=function(){function e(e){}function t(e,t){var n=e+":"+t,o=[];return o.push(n),le.addr=o,ee.sessionid=null,ee.connect(o),0}function n(e,t,n){if(ce.getStringLength(e)>200||0==ce.getStringLength(e))return 21;var o={};return o.username=e,o.password=t,o.passenctype=n,o.platformtype=se,o.username&&ee.socket_send("request",0,"login",o),de.connect||(le.loginData={},le.loginData=o),0}function u(e,t,n,o,r,i,a){if(ce.getStringLength(e)>200||0==ce.getStringLength(e))return 21;var s={};return s.nickname=e,s.userid=t,s.struserid=n,s.appId=o,s.timestamp=r,s.lpSigStr=i,s.lpStrParam=a,s.platformtype=se,ee.socket_send("request",0,"loginex",s),0}function l(e,t,n){var o={};return o.roomid=e,o.roompass=t,o.passenctype=n,ee.userid===-1?(log("还没有登录成功，不能进房间"),!1):void ee.socket_send("request",0,"enterroom",o)}function f(e,t){var n={};n.roomname=e,n.roompass=t,n.passenctype=dwParam,ee.socket_send("request",0,"enterroomex",n)}function p(e){var t={};return ee.roomid?(ce.closeAll(ae),e||(e=-1),t.roomid=e,ee.roomid=0,ee.userlist=[],ee.socket_send("request",0,"leaveroom",t),0):(log("但不成功，因为没有进入房间"),20)}function v(e,t){var n={};n.userid=e,n.jsonbuf=ce.base64encode(t),ee.socket_send("request",0,"transbuffer",n)}function m(e,t,n,o,r){var i={};i.userid=e,i.jsonbuf=ce.base64encode(t),i.param1=n,i.param2=o,i.flags=r,ee.socket_send("request",0,"transbufferex",i)}function g(){var e={};return ee.socket_send("request",0,"logout",e),0}function h(e,t,n,o,r,i){var a={};a.eventtype=e,a.userid=t,a.errorcode=n,a.flags=o,a.param=r,a.userstr=i,ee.socket_send("request",0,"videocallcontrol",a)}function b(e,t,n,o){var r={};r.objecttype=e,r.objectid=t,r.infoname=n,r.infovalue=o,r.valuetype=1,ee.socket_send("request",0,"objectsetvalue",r)}function y(e,t,n,o){var r={};r.objecttype=e,r.objectid=t,r.infoname=n,r.infovalue=o,r.valuetype=0,ee.socket_send("request",0,"objectsetvalue",r)}function S(e,t,n){var o={};return o.objecttype=e,o.objectid=t,o.infoname=n,ee.socket_send("request",0,"objectgetvalue",o),te.GetObjectIntValue(e,t,n)}function _(e,t,n){var o={};return o.objecttype=e,o.objectid=t,o.infoname=n,ee.socket_send("request",0,"objectgetvalue",o),te.GetObjectStringValue(e,t,n)}function k(e,t,n,o,r,i,a,s){var c={};if(c.objecttype=e,c.objectid=t,501==n?ee.queueId=t:502==n&&(c.objectid=ee.queueId),c.ctrlcode=n,c.param1=o,c.param2=r,c.param3=i,c.param4=a,c.strparam=s,ee.socket_send("request",0,"objectcontrol",c),502==n)return 0}function w(e){var t={};return t.objecttype=e,ee.socket_send("request",0,"objectgetidlist",t),te.ObjectGetIdList(e)}function O(e,t){var n={};n.optname=e,n.optval=t,de.connect?ee.socket_send("request",0,"setsdkoptionstring",n):le.SetSDKOptionStringArr.push(n)}function C(e,t){var n={};n.optname=e,n.optval=t,de.connect?ee.socket_send("request",0,"setsdkoptionint",n):le.SetSDKOptionIntArr.push(n)}function I(e){var t={};t.optname=e,ee.socket_send("request",0,"getsdkoptionstring",t)}function A(e){var t={};t.optname=e,ee.socket_send("request",0,"getsdkoptionint",t)}function j(e,t){var n={};n.userid=e,n.open=t,x(e,t,0,0,"")}function x(e,t,n,o,r){if(!ee.roomid)return log("还没有进入房间"),309;ee.userlist;if(!e)return log("请输入对方userid"),309;var i={};i.userid=e,i.open=t,i.streamindex=n,i.flags=o,i.strparam=r;var a,s=le.streamindex_video,c="";if(ee.socket_send("request",0,"usercameracontrolex",i),e==-1||e==ee.userid)if(c=s[n].value,a=s[n],0==t)ce.closeMyCamera(ae);else{var d=J(c);ce.createStream(d,a)}else if(0==t){var u=le.setvideoposData,l=0;for(var f in u)u[f].userId==e&&u[f].streamIndex==n&&(l=u[f].peerId);0!=l&&ce.closeOtherCamera(l)}else{var p=ee.sessionid+"_"+e+"_"+n;log("打开对方摄像头："+p);var v={};v.peerId=p,v.userId=e,v.streamIndex=n,le.setvideoposData.push(v),ee.createPeerConnection(p,n),ee.addStreams(p)}}function D(e,t){var n={};n.userid=e,n.open=t,ee.socket_send("request",0,"userspeakcontrol",n)}function M(e,t,n,o,r){var i={};i.userid=e,i.open=t,ee.socket_send("request",0,"userspeakcontrol",i)}function R(e,t,n,o){var r={};r.userid=e,r.secret=t,r.buf=ce.base64encode(n),ee.socket_send("request",0,"sendtextmessage",r)}function L(e){}function E(e){return 1==e?(le.device_video_once=0,re.length):2==e?(le.device_audio_once=0,ie.length):void 0}function q(e){if(1==e){var t=re[le.device_video_once++];return t.label}if(2==e){var t=ie[le.device_audio_once++];return t.label}}function T(e,t,n,o){le.streamindex_video=ce.strema_video(le,t,n,o)}function N(e,t,n,o){le.streamindex_video=ce.strema_video(le,t,n,o)}function V(e){var t;return e==-1?t=ee.userlist.filter(function(){return!0}):[]}function B(e){return e}function G(e,t){return 0}function U(){return ne}function W(e,t){if(1==t){if(!oe[e])return;return oe[e].username}if(2==t){if(!oe[e])return;return oe[e].userip}}function P(e){return oe[e]?oe[e].status:void 0}function K(e,t){if(1==e)for(var n in oe)if(oe[n].username===t)return n}function F(e,t){if(6==t)return oe[e]?oe[e].username:void 0}function H(e,t,n,o){if(e==-1||e==ee.userId)return 1==t?ae[0]?(fe=new record(ae[0]),fe.mimeType="video/webm",fe.ondataavailable=function(t){var n=c.createObjectURL(t);ue.OnRecordSnapShotEx2(e,0,n,0,0,0,"")},fe.start(3e5),0):200:0==t?(fe.stop(),0):0}function J(e){for(var t in re)if(re[t].label==e)return re[t]}function z(e,t,n){function o(e){var t=le.setvideoposData;for(var n in t)t[n].userId==e;return n?n:-1}if(!ee.roomid)return log("还没有进入房间"),!1;if(e==-1||ee.userid==e){var r=document.createElement("video"),i=t;r.setAttribute("class","my"),r.setAttribute("autoplay",""),r.setAttribute("id",n),r.setAttribute("playsinline",""),i.appendChild(r),console.log("初始化显示流");var a=setInterval(function(){ae[0]&&(clearInterval(a),ee.attachStream(ae[0],n))},500)}var s=o(e);return s!=-1&&(le.setvideoposData[s].parentobj=t,void(le.setvideoposData[s].id=n))}function Q(){function e(e){for(var t=0;t!=e.length;++t){var n=e[t];"video"===n.kind||"videoinput"===n.kind?re.push(n):"audio"!==n.kind&&"audioinput"!==n.kind||n.label.indexOf("麦克风")!=-1&&ie.push(n)}}re=[],ie=[],"undefined"!=typeof MediaStreamTrack.getSources?MediaStreamTrack.getSources(e):navigator.mediaDevices.enumerateDevices().then(function(t){e(t)})}function Y(){}function X(){ee.on("reply",function(e){var n=e.data,o=n.cmdcode,i=n.errorcode,a="",c="";if(pe[o]){switch(o){case"connect":if(ce.clear_timer(),0==i)de.connect=!0,ce.SetSDKOptionString(le.SetSDKOptionStringArr),ce.SetSDKOptionInt(le.SetSDKOptionIntArr),le.SetSDKOptionStringArr=[],le.SetSDKOptionIntArr=[];else if(1==i)return n.gwaddr&&n.gwport&&(de.connect=!1,ee.is_socket=!1,ee.socket=null,t(n.gwaddr,n.gwport)),"errorcode 1";if(le.loginData){var e={};e=le.loginData,e.username&&ee.socket_send("request",0,"login",e)}r.start(ee);break;case"login":case"loginex":if(23==i||i==-1)return Y(),void log("hold 住");le.loginData={},0==i?(ee.sessionid=n.sessionid,ee.userid=a=n.userid):a=-1;break;case"enterroom":0==i&&(ee.roomid=n.roomid),a=n.roomid}pe[o]&&ue.OnNotifyMessage(pe[o],a,c||i)}"tokenconnect"===o&&(0==i?(ce.clear_timer(),r.start(ee),log("重连成功")):(ee.sendData={},ee.sessionid=null,log("重连失败"))),"heartbeat"===o&&r.notify(i),"logout"===o&&(log("注销成功"),ee.socket.close(),ce.closeAll(ae),r.stop(),s.clear_all(),ee.roomid=0,ee.userid=0,ee.socket=null,ee.normalCloseWebsocket=!0)}),ee.on("request",function(e){var t=e.data,n=t.cmdcode;"restrans"===n&&s.restrans_to_service(t.begin_reg)}),ee.on("notify",function(e){var t=e.data,n=t.cmdcode,o=t.errorcode,r="",i="";if(s.set_big_index_notify(e.seq),pe[n]){switch(n){case"onlineuser":var a=t.useridlist;if("object"!=typeof a&&(a=JSON.parse(a),a.userlist)){var c=a.userlist;for(var d in c)oe[c[d].userid]||(oe[c[d].userid]={}),oe[c[d].userid].username=c[d].username,log(c[d].username)}var u=a.useridlist;ee.userlist=u,r=u.length,i=t.roomid;break;case"linkclose":break;case"useratroom":r=t.userid,1==t.benter?(ee.userlist.push(r),oe[r]||(oe[r]={}),t.username&&log("进房间："+t.username),oe[r].username=t.username):ce.ArrayremoveByValue(ee.userlist,r),i=t.benter}pe[n]&&ue.OnNotifyMessage(pe[n],r,i||o)}if("keep"===n&&(0==o&&(ee.sessionid=t.sessionid,ee.userid=r=t.userid),ue.OnNotifyMessage(WM_GV_LOGINSYSTEM,r,i||o)),"webrtcconsult"===n&&0==o){var l=JSON.parse(t.jsonbuf);"answer"===l.type?(log("收到answer"),"ios"===ee.system?l.sdp=ce.setMediaBitrates(l.sdp,350,30):(log("answer 码率"+ee.bitrate+" 系统："+ee.system),l.sdp=ce.setMediaBitrates(l.sdp,ee.bitrate,30)),ee.receiveAnswer(l.peerconnectionid,l.sdp)):"candidate"===l.type&&(log("收到candidate"),ee.candidate(l))}if("textmessage"===n){var f=ce.base64decode(t.msgbuf);ue.OnAnyChatTextMessage(t.fromuserid,t.touserid,t.secret,f,0)}"objectevent"===n&&(0==t.eventtype?te.setObjectInfo(t):t.eventtype==-1?te.setObjectInfo_1(t):ue.OnAnyChatObjectEvent(t.objecttype,t.objectid,t.eventtype,t.param1,t.param2,t.param3,t.param4,t.strparam)),"videocallevent"===n&&ue.OnAnyChatVideoCallEvent(t.eventtype,t.userid,t.errorcode,t.flags,t.param,t.jsonbuf),"transbuffer"===n&&ue.OnAnyChatTransBuffer(t.userid,ce.base64decode(t.jsonbuf),0),"transbufferex"===n&&ue.OnAnyChatTransBufferex(t.userid,ce.base64decode(t.jsonbuf),0,t.param1,t.param2,t.taskid),"friendstatus"===n&&(ue.OnNotifyMessage(WM_GV_FRIENDSTATUS,t.userid,t.status),oe[t.userid]=t,ne.indexOf(t.userid)<0&&ne.push(t.userid)),"userinfoupdate"===n&&ue.OnNotifyMessage(WM_GV_USERINFOUPDATE,t.userid,t.type),"appconfiginfo"===n&&0==o&&(t.videobitrate&&(ee.bitrate=t.videobitrate/1e3),t.videowidth&&(ee.videowidth=t.videowidth),t.videoheight&&(ee.videoheight=t.videoheight),t.videofps&&(ee.videofps=t.videofps))}),ee.on("stream_created",function(e){ae[0]=e}),ee.on("close_websocket",function(e){log("正在尝试重连"),r.stop(),ce.tokenconnect(le.addr,ae)}),ee.on("linkclose",function(e){var t=WM_GV+6;ue.OnNotifyMessage(t,0,e)}),ee.on("offer",function(e,t){var n,o={},r={},i=le.setvideoposData;for(var a in i)i[a].peerId==t&&(n=i[a]);r.type="offer",r.sdp=e.sdp,r.peerconnectionid=t,r.streamindex=n.streamIndex,o.jsonbuf=r,ee.socket_send("request",0,"webrtcconsult",o)}),ee.on("pc_add_stream",function(e,t){var n=t.split("_");log("打开对方流：sessionid："+t);var o,r=le.setvideoposData;for(var i in r)r[i].peerId==t&&r[i].streamIndex==n[2]&&(o=r[i]);if(o){var a=document.createElement("video"),s=o.id,c=o.parentobj;o.parentobj&&(a.setAttribute("class","other"),a.setAttribute("name",t),a.setAttribute("autoplay",""),a.setAttribute("playsinline",""),a.setAttribute("poster","images/anychatbk.jpg"),a.setAttribute("id",s),c.appendChild(a),ee.attachStream(e,s))}}),ee.on("ack",function(e){s.delt_pack(e.seq)})}function Z(e,t){switch(e){case"OnNotifyMessage":ue.OnNotifyMessage=t;break;case"OnVideoCallEvent":ue.OnAnyChatVideoCallEvent=t;break;case"OnObjectEvent":ue.OnAnyChatObjectEvent=t;break;case"OnTextMessage":ue.OnAnyChatTextMessage=t;break;case"OnTransBuffer":ue.OnAnyChatTransBuffer=t;break;case"OnTransBufferex":ue.OnAnyChatTransBufferex=t;break;case"OnRecordSnapShotEx2":ue.OnRecordSnapShotEx2=t}}function $(){ee.browserName=ce.getBrowser(),console.log("浏览器名字："+ee.browserName),X(),setTimeout(function(){Q()},1)}if(d.Connect)return d;var ee=new o.instance,te=new i(ee);s.setWay(ee);var ne=[],oe={},re=[],ie=[],ae=[],se=0,ce=a.instance(ee);if(ee.system=ce.system_s(),se=ce.system_s(1),log("系统："+ee.system),!ee.support())return log("不支持h5音视频通话，请更换浏览器"),!1;var de={};de.connect=!1;var ue={},le={};le.setvideoposData=[],le.SetSDKOptionStringArr=[],le.SetSDKOptionIntArr=[],le.streamindex_video={},le.SetSDKOptionString=[],le.SetSDKOptionInt=[];var fe,pe={connect:WM_GV_CONNECT,login:WM_GV_LOGINSYSTEM,loginex:WM_GV_LOGINSYSTEM,enterroom:WM_GV_ENTERROOM,onlineuser:WM_GV_ONLINEUSER,linkclose:WM_GV_LINKCLOSE,useratroom:WM_GV_USERATROOM};return window.onbeforeunload=function(){g()},$(),d.InitSDK=e,d.Connect=t,d.Login=n,d.LoginEx=u,d.EnterRoom=l,d.EnterRoomEx=f,d.LeaveRoom=p,d.Logout=g,d.on=Z,d.UserCameraControl=j,d.UserCameraControlEx=x,d.UserSpeakControl=D,d.PrepareFetchDevices=E,d.FetchNextDevice=q,d.SetVideoPos=z,d.SetUserStreamInfoString=T,d.SetUserStreamInfoInt=N,d.SetSDKOptionString=O,d.SetSDKOptionInt=C,d.VideoCallControl=h,d.SetObjectStringValue=b,d.SetObjectIntValue=y,d.GetObjectIntValue=S,d.GetObjectStringValue=_,d.ObjectControl=k,d.ObjectGetIdList=w,d.GetRoomOnlineUsers=V,d.SendTextMessage=R,d.GetSDKOptionString=I,d.GetSDKOptionInt=A,d.TransBuffer=v,d.TransBufferEx=m,d.GetVersion=L,d.GetCurrentDevice=B,d.QueryUserStateInt=G,d.UserSpeakControlEx=M,d.GetUserFriends=U,d.GetUserInfo=W,d.GetFriendStatus=P,d.QueryInfoFromServer=K,d.QueryUserStateString=F,d.StreamRecordCtrl=H,d};t.instance=u},function(e,t,n){function o(){this.events={}}function r(){this.localMediaStream=null,this.roomid="",this.userid=-1,this.socket=null,this.sessionid=null,this.is_socket=!1,this.peerConnections={},this.connections=[],this.numStreams=0,this.initializedStreams=0,this.browserName="",this.normalCloseWebsocket=!1,this.userlist=[],this.timeOut=0,this.timeOutInt=30,this.srrc_index=0,this.sendData={},this.system="",this.mobile_type=0,this.queueId="",this.bitrate=200,this.videowidth=320,this.videoheight=240,this.videofps=15}var i=n(3),a=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection||"",s=window.URL||window.webkitURL||window.msURL||window.oURL||"",c=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||"",d=window.mozRTCIceCandidate||window.RTCIceCandidate||"",u=window.mozRTCSessionDescription||window.RTCSessionDescription||"",l=(!!navigator.mozGetUserMedia,{iceServers:[{urls:"stun:h5.anychat.cn:9000"}]});o.prototype.on=function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},o.prototype.emit=function(e,t){var n,o,r=this.events[e],i=Array.prototype.slice.call(arguments,1);if(r)for(n=0,o=r.length;n<o;n++)r[n].apply(null,i)},r.prototype=new o,r.prototype.connect=function(e){var t,n=this;if(this.socket)return log("不需要重连，已经存在websocket 链接"),!1;var o="https:"==document.location.protocol,r=o?"wss:"+e[0]:"ws:"+e[0];if("WebSocket"in window)t=this.socket=new WebSocket(r,"anychat-protocol");else{if(!("MozWebSocket"in window))return log("不支持websocket"),void alert("WebSocket is not supported by this browser.");t=this.socket=new MozWebSocket(r,"anychat-protocol")}t.onopen=function(){n.is_socket=!0;var e={};e=n.sessionid?{eventname:"request",ssrc:0,data:{cmdcode:"tokenconnect",sessionid:n.sessionid}}:{eventname:"request",ssrc:0,data:{cmdcode:"connect"}},t.send(JSON.stringify(e))},t.onmessage=function(e){var o=JSON.parse(e.data),r=o.data;"object"!=typeof r&&(o.data=JSON.parse(r)),o.eventname?n.emit(o.eventname,o):n.emit("socket_receive_message",t,o)},t.onerror=function(e){console.log("socket_error"),n.socket=!1,n.is_socket=!1,n.emit("socket_error",e,t)},t.onclose=function(e){n.is_socket=!1,n.socket=!1,n.normalCloseWebsocket||n.emit("close_websocket",e),n.normalCloseWebsocket=!1},n.on("ready",function(){})},r.prototype.socket_send=function(e,t,n,o){var r={};r.eventname=e,r.ssrc=0,o.userid&&(o.userid=parseInt(o.userid)),r.data={},r.data=o,r.data.cmdcode=n,r=i.data_pack(r),this.is_socket&&this.socket.send(JSON.stringify(r))},r.prototype.data_pack=function(e){},r.prototype.support=function(){return!!a},r.prototype.createStream=function(e,t){function n(){"ios"===a.system?navigator.mediaDevices.getUserMedia(s).then(function(e){a.localMediaStream=e,a.initializedStreams++,log("自己视频流打开成功"),log(s),a.emit("stream_created",e)},function(e){throw log(s),log("视频流打开失败:"+e),"retry"}):c.call(navigator,s,function(e){a.localMediaStream=e,a.initializedStreams++,log("自己视频流打开成功"),log(s),a.emit("stream_created",e)},function(e){throw log(s),log("视频流打开失败:"+e),"retry"})}var o,r,i,a=this,s={};if(t?(o=t.width||this.videowidth,r=t.height||this.videoheight,i=t.fpsctrl||this.videofps):(o=this.videowidth,r=this.videoheight,i=this.videofps),console.log("摄像头打开信息，分辨率w:"+o+"；分辨率h："+r),s.video={},s.audio=!0,e&&(s.video.optional=[{sourceId:e}]),c)try{1==a.mobile_type?(s.video.mandatory={minHeight:0,maxHeight:r,minWidth:0,maxWidth:o,maxFrameRate:i,minAspectRatio:.75,maxAspectRatio:.75},log("宽高0.75")):(s.video.mandatory={minHeight:0,maxHeight:r,minWidth:0,maxWidth:o,maxFrameRate:i,minAspectRatio:1.333333,maxAspectRatio:1.333333},log("宽高1.33")),n()}catch(t){try{log("不支持设置视频分辨率"+t),s.video={height:{min:10,ideal:r,max:1280},width:{min:10,ideal:o,max:720},frameRate:{ideal:i,max:60}},e&&(s.video.optional={sourceId:e}),n()}catch(e){log("完全不支持设置视频分辨率"),s.video=!0,n()}}else log("不支持视频流")},r.prototype.addStreams=function(e){var t=this,n=setInterval(function(){t.localMediaStream&&(clearInterval(n),t.peerConnections[e].addStream(t.localMediaStream),t.sendOffers(e))},100)},r.prototype.attachStream=function(e,t){var n=document.getElementById(t);if(!n)return log("找不到可以设置video 标签的div"),!1;if("my"===n.className){if("ios"===this.system)try{var o=new MediaStream;o.addTrack(e.getVideoTracks()[0]),n.srcObject=o}catch(e){alert(e)}else n.src=s.createObjectURL(e);n.volume=0,n.muted=!1}else"ios"===this.system?n.srcObject=e:n.src=s.createObjectURL(e);n.style.transform=" rotateY(180deg)",n.addEventListener("canplaythrough",function(){log("视频分辨率宽："+n.clientWidth),log("视频分辨率高："+n.clientHeight)})},r.prototype.sendOffers=function(e){var t,n=this,o={};pcCreateOfferCbGen=function(e,t){return function(r){e.setLocalDescription(r),o=r,n.emit("offer",o,t),log("发送offer给对方")}},pcCreateOfferErrorCb=function(e){log("发送offer报错："+e),console.log(e)},t=this.peerConnections[e],t.createOffer(pcCreateOfferCbGen(t,e),pcCreateOfferErrorCb)},r.prototype.receiveOffer=function(e,t){this.peerConnections[e];this.sendAnswer(e,t)},r.prototype.sendAnswer=function(e,t){var n=this.peerConnections[e],o=this;n.setRemoteDescription(new u(t)),n.createAnswer(function(t){n.setLocalDescription(t),o.socket.send(JSON.stringify({eventName:"__answer",data:{socketId:e,sdp:t}}))},function(e){console.log(e)})},r.prototype.receiveAnswer=function(e,t){var n=this.peerConnections[e];if(!n)return!1;var o={};o.type="answer",o.sdp=t,n.setRemoteDescription(new u(o))},r.prototype.createPeerConnections=function(){var e,t;for(e=0,t=this.connections.length;e<t;e++)this.createPeerConnection(this.connections[e])},r.prototype.createPeerConnection=function(e,t){var n=this;try{var o=new a(l)}catch(e){log(e)}this.peerConnections[e]=o;var r={},i={sdpMid:"",sdpMLineIndex:"",candidate:""};return o.onicecandidate=function(o){if("object"==typeof o.candidate)try{i.sdpMid=o.candidate.sdpMid,i.sdpMLineIndex=o.candidate.sdpMLineIndex,i.candidate=o.candidate.candidate,i.peerconnectionid=e,i.streamindex=t,i.type="candidate",o.candidate&&(r.jsonbuf=i,n.socket_send("request",0,"webrtcconsult",r))}catch(e){log("onicecandidate warm")}},o.onopen=function(){log("peerConnections打开成功")},o.onaddstream=function(t){n.emit("pc_add_stream",t.stream,e,o)},o.onremovestream=function(e){log("onremovestream")},o.ondatachannel=function(e){},o.oniceconnectionstatechange=function(){},o.onidentityresult=function(){},o.onidpassertionerror=function(){},o.onidpvalidationerror=function(){},o.onnegotiationneeded=function(){},o.onpeeridentity=function(){},o.onsignalingstatechange=function(){},o},r.prototype.closePeerConnection=function(e){e&&e.close()},r.prototype.closeAllPeerConnection=function(){for(var e in this.peerConnections)this.peerConnections[e].close(),delete this.peerConnections[e];log("关闭peerConnection")},r.prototype.closeOtherPeerConnection=function(e){this.peerConnections[e]&&(this.peerConnections[e].close(),delete this.peerConnections[e]),log("关闭他人peerConnection:"+e)},r.prototype.removeVideo=function(){function e(e){var t=e.parentNode;t&&t.removeChild(e)}var t=document.querySelectorAll("video.my,video.other");for(var n in t)isNaN(n)||e(t[n]);log("移除video标签")},r.prototype.removeMyVideo=function(){function e(e){var t=e.parentNode;t&&t.removeChild(e)}var t=document.querySelectorAll("video.my");for(var n in t)e(t[n]);log("移除自己video标签")},r.prototype.removeOtherVideo=function(e){function t(e){var t=e.parentNode;t&&t.removeChild(e)}var n=document.querySelectorAll("video.other");for(var o in n)isNaN(o)||n[o].getAttribute("name")==e&&t(n[o]);log("移除他人video标签："+e)},r.prototype.candidate=function(e){var t=this.peerConnections[e.peerconnectionid];if(!t)return!1;try{var n=new d(e);t.addIceCandidate(n)}catch(n){t.addIceCandidate(e)}},t.instance=r},function(e,t){function n(e){return"heartbeat"!==e.data.cmdcode&&(e.seq=++f,l[f]=e),e}function o(e){for(var t=e;t>=p;t--)delete l[t];p=e}function r(e){u=e,setInterval(function(){a()},m)}function i(e){e-v===1||s(v),v=e}function a(){var e={eventname:"ack",ssrc:0,seq:v,data:{}};u.is_socket&&u.socket.send(JSON.stringify(e))}function s(e){var t={eventname:"request",ssrc:0,seq:0,data:{cmdcode:"restrans",begin_reg:++e}};u.is_socket&&u.socket.send(JSON.stringify(t))}function c(e){for(var t in l)t>e&&u.is_socket&&l[t]&&(u.socket.send(JSON.stringify(l[t])),delete l[t])}function d(){f=0,v=0}var u,l={},f=0,p=0,v=0,m=3e3;t.data_pack=n,t.delt_pack=o,t.setWay=r,t.set_big_index_notify=i,t.restrans_to_service=c,t.clear_all=d},function(e,t){function n(e){var t={};clearInterval(i),i=setInterval(function(){e.socket_send("request",0,"heartbeat",t)},1e3*a)}function o(e){}function r(){i&&clearInterval(i)}var i,a=5;t.start=n,t.notify=o,t.stop=r},function(e,t,n){var o=(n(6),function(){function e(e){this.getway=e,this.objectInfoData={},this.objectInfoData_1={},this.objectidlist_5=[]}return e.prototype.setObjectInfo=function(e){var t=e.objecttype+"_"+e.objectid;this.objectInfoData[t]||e.objecttype==r&&this.objectidlist_5.push(e.objectid),this.objectInfoData[t]=JSON.parse(e.jsonbuf)},e.prototype.setObjectInfo_1=function(e){var t=e.objecttype+"_"+e.objectid;this.objectInfoData_1[t]=JSON.parse(e.jsonbuf)},e.prototype.GetObjectIntValue=function(e,t,n){var o=this,r=0,a=e+"_"+t;return o.objectInfoData[a]?(n==i?r=o.objectInfoData[a].flags:n==s?r=o.objectInfoData[a].priority:n==c?r=o.objectInfoData[a].attribute:n==u?r=o.objectInfoData[a].inttag:n==p?r=o.objectInfoData_1[a].beforeusernum:n==f?r=o.objectInfoData_1[a].mysequenceno:n==v?r=o.objectInfoData_1[a].myenterqueuetime:n==g?r=o.objectInfoData_1[a].waittimesecond:n==m&&(r=o.objectInfoData_1[a].queuelength),r):"undefined"},e.prototype.GetObjectStringValue=function(e,t,n){var o=this,r="",i=e+"_"+t;return o.objectInfoData[i]?(n==a?r=o.objectInfoData[i].objectname:n==d?r=o.objectInfoData[i].description:n==l&&(r=o.objectInfoData[i].stringtag),r):"undefined"},e.prototype.ObjectGetIdList=function(e){if(e==r)return this.objectidlist_5},e}()),r=5,i=7,a=8,s=9,c=10,d=11,u=12,l=13,f=501,p=502,v=503,m=504,g=508;e.exports=o},function(e,t){function n(e){var t,n,o,i,a,s;for(o=e.length,n=0,t="";n<o;){if(i=255&e.charCodeAt(n++),n==o){t+=r.charAt(i>>2),t+=r.charAt((3&i)<<4),t+="==";break}if(a=e.charCodeAt(n++),n==o){t+=r.charAt(i>>2),t+=r.charAt((3&i)<<4|(240&a)>>4),t+=r.charAt((15&a)<<2),t+="=";break}s=e.charCodeAt(n++),t+=r.charAt(i>>2),t+=r.charAt((3&i)<<4|(240&a)>>4),t+=r.charAt((15&a)<<2|(192&s)>>6),t+=r.charAt(63&s)}return t}function o(e){var t,n,o,r,a,s,c;for(s=e.length,a=0,c="";a<s;){do t=i[255&e.charCodeAt(a++)];while(a<s&&t==-1);if(t==-1)break;do n=i[255&e.charCodeAt(a++)];while(a<s&&n==-1);if(n==-1)break;c+=String.fromCharCode(t<<2|(48&n)>>4);do{if(o=255&e.charCodeAt(a++),61==o)return c;o=i[o]}while(a<s&&o==-1);if(o==-1)break;c+=String.fromCharCode((15&n)<<4|(60&o)>>2);do{if(r=255&e.charCodeAt(a++),61==r)return c;r=i[r]}while(a<s&&r==-1);if(r==-1)break;c+=String.fromCharCode((3&o)<<6|r)}return c}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);t.base64encode=n,t.base64decode=o},function(e,t,n){var o,r=n(6),i=function(e){function t(e,t,n){for(var o=e.split("\r\n"),r=-1,i=0;i<o.length;i++)if(console.log("m="+t),0===o[i].indexOf("m="+t)){r=i;break}if(r===-1)return console.debug("Could not find the m line for",t),e;for(console.debug("Found the m line for",t,"at line",r),r++;0===o[r].indexOf("i=")||0===o[r].indexOf("c=");)r++;if(0===o[r].indexOf("b"))return console.debug("Replaced b line at line",r),o[r]-"b=AS."+n,o.join("\r\n");console.debug("Adding new b line before line",r);var a=o.slice(0,r);return a.push("b=AS:"+n),a=a.concat(o.slice(r,o.length)),a.join("\r\n")}var n={};return n.createStream=function(t,n){var o;t?(o=t.id||t.deviceId,e.createStream(o,n)):e.createStream("",n)},n.clear_timer=function(){e.timeOut=0,o||(clearInterval(o),o=null)},n.tokenconnect=function(t,n){o||(o=setInterval(function(){return e.is_socket?(clearInterval(o),o=null,!1):(e.timeOut++,log("正在重连："+e.timeOut),void(e.timeOut==e.timeOutInt&&(e.is_socket||(clearInterval(o),BRAC_LeaveRoom(),e.emit("linkclose",100),e.sendData={},e.roomid="",e.sessionid="",e.timeOut=0,o=null))))},1e3)),setTimeout(function(){e.socket=null,e.connect(t)},4e3)},n.strema_video=function(t,n,o,r){var i,a={},s=t.streamindex_video;switch(o){case BRAC_SO_LOCALVIDEO_DEVICENAME:case BRAC_STREAMINFO_VIDEOCODECID:a.dwStreamIndex=n,a.value=r,s[n]=a;break;case BRAC_SO_LOCALVIDEO_WIDTHCTRL:i==-1||(s[n].width=r);break;case BRAC_SO_LOCALVIDEO_HEIGHTCTRL:i==-1||(s[n].height=r);break;case BRAC_SO_LOCALVIDEO_FPSCTRL:i==-1||(s[n].fpsctrl=r);break;case BRAC_SO_LOCALVIDEO_BITRATECTRL:e.bitrate=r/1e3,i==-1||(s[n].fpscode=r)}return s},n.getBrowser=function(){var e="unknown browser",t=navigator.userAgent.toLowerCase(),n={ie:/msie/.test(t)&&!/opera/.test(t),op:!/msie/.test(t)&&/opera/.test(t),sa:/version.*safari/.test(t),ch:/chrome/.test(t)&&window.navigator.webkitPersistentStorage,ff:/firefox/.test(t),qh360:/chrome/.test(t)&&!window.navigator.webkitPersistentStorage,qq:/qqbrowser/.test(t),sg:/metasr/.test(t)};return n.ch?e="Chrome":n.ie?e="IE":n.ff?e="Firefox":n.sa?e="Safari":n.qh360?e="360浏览器":n.op?e="Opera":n.qq?e="QQ浏览器":n.sg&&(e="搜狗浏览器"),e},n.system_s=function(t){if(!navigator)return 1===t?3:"ios";var n=navigator.userAgent;log(n),n.indexOf("Chrome/60.0.3112.116")>0&&(e.mobile_type=1);for(var o=new Array("Android"),r=new Array("iPhone","iPad","iPod","Safari"),i=new Array("Windows"),a=0;a<o.length;a++){var s=n.indexOf(o[a]);if(s>0)return 1===t?2:"android"}for(var a=0;a<i.length;a++){var s=n.indexOf(i[a]);if(s>0)return 1===t?1:"windows"}for(var a=0;a<r.length;a++){var s=n.indexOf(r[a]);if(s>0)return 1===t?3:"ios"}},n.log=function(e){console.log(e)},n.closeAll=function(t){try{for(var n in t)t[n]&&(log("关闭摄像头"),log(t[n].getVideoTracks()[0]),t[n].getVideoTracks()[0].stop(),t[n].getAudioTracks()[0].stop(),t[n]="",e.localMediaStream=null)}catch(e){log("摄像头关闭失败"),log(e)}e.closeAllPeerConnection(),e.removeVideo()},n.closeMyCamera=function(t){try{log("关闭自己摄像头"),t[0].getVideoTracks()[0].stop(),t[0].getAudioTracks()[0].stop(),t[0]="",e.removeMyVideo(),e.localMediaStream=null}catch(e){log("摄像头关闭失败"),log(e)}},n.closeOtherCamera=function(t){e.closeOtherPeerConnection(t),e.removeOtherVideo(t)},n.SetSDKOptionString=function(t){for(var n in t){var o={};o=t[n],e.socket_send("request",0,"setsdkoptionstring",o)}},n.SetSDKOptionInt=function(t){for(var n in t){var o={};o=t[n],e.socket_send("request",0,"setsdkoptionint",o)}},n.ArrayremoveByValue=function(e,t){for(var n=0;n<e.length;n++)if(e[n]==t){e.splice(n,1);break}},n.base64encode=r.base64encode,n.base64decode=r.base64decode,n.setMediaBitrates=function(e,n,o){return t(t(e,"video",n),"audio",o)},n.funDownload=function(e,t){var n=document.createElement("a");n.download=t,n.style.display="none";var o=new Blob([e]);n.href=URL.createObjectURL(o),document.body.appendChild(n),n.click(),document.body.removeChild(n)},n.getStringLength=function(e){for(var t,n=e,o=0;o<n.length;o++){var r=n.charAt(o);t+=/^[\u0000-\u00ff]$/.test(r)?1:3}return t},n};t.instance=i},function(e,t){var n=function(){function e(){this.filename="BRAnyChatCore.txt",this.log_txt="日志内容"}return e.prototype.explore=function(e,t,n){if(n)return this.weixinLog(e);var o=document.createElement("a");o.download=t,o.style.display="none";var r;try{r=new Blob([e],{type:"text/plain"})}catch(t){var i=BlobBuilder||WebKitBlobBuilder||MozBlobBuilder||"";if("TypeError"==t.name&&i){var a=new i;a.append([e]),r=a.getBlob("text/plain")}}o.href=URL.createObjectURL(r),document.body.appendChild(o),o.click(),document.body.removeChild(o)},e.prototype.weixinLog=function(e){function t(e){new Image;return e.toDataURL("image/jpeg")}function n(e,t,n,o,r){var i=t.getContext("2d");i.fillStyle="#ffffff",i.font="20px";for(var a=0,s=t.width,c=0,d=0;d<e.length;d++)a+=i.measureText(e[d]).width,(a>s-n||"&"==e[d])&&("&"==e[d],i.fillText(e.substring(c,d),n,o),o+=r,a=0,c=d),d==e.length-1&&i.fillText(e.substring(c,d+1),n,o)}var o=document.getElementById("myCanvas");return o.style.width="640px",n(e,o,20,20,22),t(o)},e.prototype.doExplore=function(e){return this.explore(this.log_txt,this.filename,e)},e.prototype.putLog=function(e){this.log_txt=e},e}(),o=new n;e.exports=o}]);