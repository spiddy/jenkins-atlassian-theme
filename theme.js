jQuery(function(r){function t(){if(~document.cookie.indexOf("gravatar=")){var r=e("gravatar");return o(r),!0}return!1}function n(r,t,n){var e,o;n?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*n),o="; expires="+e.toGMTString()):o="",document.cookie=r+"="+t+o+"; path=/"}function e(r){var t,n,e,o=r+"=";for(e=document.cookie.split(";"),t=0;e.length>t;t++){for(n=e[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return""}function o(t){var n=r("<img>").attr({src:t}).css({height:"32px",width:"32px","-webkit-border-radius":"3px","-moz-border-radius":"3px","-border-radius":"3px","margin-top":"5px"});r("#login-field").after(n.fadeIn(300))}r("#footer").closest("table").css("border-spacing",0);var a=r("#login-field .model-link.inside").attr("href");if(a&&!t()){var i=location.protocol+"//"+location.host,u="/pluginManager/plugin/gravatar/thirdPartyLicenses",f=i+u;r.ajax({type:"GET",url:f,success:function(){var t="https://www.gravatar.com/avatar/",e="/api/json?pretty=true",i=a+e;r.getJSON(i,function(r){for(var e=r.property,a=0;e.length>a;a++){var i=e[a];if(i.address){var u=t+c(i.address);return n("gravatar",u,3),o(u),void 0}}})}})}var c=function(r){function t(r,t){return r<<t|r>>>32-t}function n(r,t){var n,e,o,a,i;return o=2147483648&r,a=2147483648&t,n=1073741824&r,e=1073741824&t,i=(1073741823&r)+(1073741823&t),n&e?2147483648^i^o^a:n|e?1073741824&i?3221225472^i^o^a:1073741824^i^o^a:i^o^a}function e(r,t,n){return r&t|~r&n}function o(r,t,n){return r&n|t&~n}function a(r,t,n){return r^t^n}function i(r,t,n){return t^(r|~n)}function u(r,o,a,i,u,f,c){return r=n(r,n(n(e(o,a,i),u),c)),n(t(r,f),o)}function f(r,e,a,i,u,f,c){return r=n(r,n(n(o(e,a,i),u),c)),n(t(r,f),e)}function c(r,e,o,i,u,f,c){return r=n(r,n(n(a(e,o,i),u),c)),n(t(r,f),e)}function g(r,e,o,a,u,f,c){return r=n(r,n(n(i(e,o,a),u),c)),n(t(r,f),e)}function s(r){for(var t,n=r.length,e=n+8,o=(e-e%64)/64,a=16*(o+1),i=Array(a-1),u=0,f=0;n>f;)t=(f-f%4)/4,u=8*(f%4),i[t]=i[t]|r.charCodeAt(f)<<u,f++;return t=(f-f%4)/4,u=8*(f%4),i[t]=i[t]|128<<u,i[a-2]=n<<3,i[a-1]=n>>>29,i}function d(r){var t,n,e="",o="";for(n=0;3>=n;n++)t=255&r>>>8*n,o="0"+t.toString(16),e+=o.substr(o.length-2,2);return e}function h(r){r=r.replace(/\r\n/g,"\n");for(var t="",n=0;r.length>n;n++){var e=r.charCodeAt(n);128>e?t+=String.fromCharCode(e):e>127&&2048>e?(t+=String.fromCharCode(192|e>>6),t+=String.fromCharCode(128|63&e)):(t+=String.fromCharCode(224|e>>12),t+=String.fromCharCode(128|63&e>>6),t+=String.fromCharCode(128|63&e))}return t}var l,v,p,m,C,x,b,S,w,y=[],k=7,A=12,T=17,j=22,O=5,G=9,L=14,M=20,z=4,D=11,E=16,I=23,J=6,N=10,P=15,Q=21;for(r=h(r),y=s(r),x=1732584193,b=4023233417,S=2562383102,w=271733878,l=0;y.length>l;l+=16)v=x,p=b,m=S,C=w,x=u(x,b,S,w,y[l+0],k,3614090360),w=u(w,x,b,S,y[l+1],A,3905402710),S=u(S,w,x,b,y[l+2],T,606105819),b=u(b,S,w,x,y[l+3],j,3250441966),x=u(x,b,S,w,y[l+4],k,4118548399),w=u(w,x,b,S,y[l+5],A,1200080426),S=u(S,w,x,b,y[l+6],T,2821735955),b=u(b,S,w,x,y[l+7],j,4249261313),x=u(x,b,S,w,y[l+8],k,1770035416),w=u(w,x,b,S,y[l+9],A,2336552879),S=u(S,w,x,b,y[l+10],T,4294925233),b=u(b,S,w,x,y[l+11],j,2304563134),x=u(x,b,S,w,y[l+12],k,1804603682),w=u(w,x,b,S,y[l+13],A,4254626195),S=u(S,w,x,b,y[l+14],T,2792965006),b=u(b,S,w,x,y[l+15],j,1236535329),x=f(x,b,S,w,y[l+1],O,4129170786),w=f(w,x,b,S,y[l+6],G,3225465664),S=f(S,w,x,b,y[l+11],L,643717713),b=f(b,S,w,x,y[l+0],M,3921069994),x=f(x,b,S,w,y[l+5],O,3593408605),w=f(w,x,b,S,y[l+10],G,38016083),S=f(S,w,x,b,y[l+15],L,3634488961),b=f(b,S,w,x,y[l+4],M,3889429448),x=f(x,b,S,w,y[l+9],O,568446438),w=f(w,x,b,S,y[l+14],G,3275163606),S=f(S,w,x,b,y[l+3],L,4107603335),b=f(b,S,w,x,y[l+8],M,1163531501),x=f(x,b,S,w,y[l+13],O,2850285829),w=f(w,x,b,S,y[l+2],G,4243563512),S=f(S,w,x,b,y[l+7],L,1735328473),b=f(b,S,w,x,y[l+12],M,2368359562),x=c(x,b,S,w,y[l+5],z,4294588738),w=c(w,x,b,S,y[l+8],D,2272392833),S=c(S,w,x,b,y[l+11],E,1839030562),b=c(b,S,w,x,y[l+14],I,4259657740),x=c(x,b,S,w,y[l+1],z,2763975236),w=c(w,x,b,S,y[l+4],D,1272893353),S=c(S,w,x,b,y[l+7],E,4139469664),b=c(b,S,w,x,y[l+10],I,3200236656),x=c(x,b,S,w,y[l+13],z,681279174),w=c(w,x,b,S,y[l+0],D,3936430074),S=c(S,w,x,b,y[l+3],E,3572445317),b=c(b,S,w,x,y[l+6],I,76029189),x=c(x,b,S,w,y[l+9],z,3654602809),w=c(w,x,b,S,y[l+12],D,3873151461),S=c(S,w,x,b,y[l+15],E,530742520),b=c(b,S,w,x,y[l+2],I,3299628645),x=g(x,b,S,w,y[l+0],J,4096336452),w=g(w,x,b,S,y[l+7],N,1126891415),S=g(S,w,x,b,y[l+14],P,2878612391),b=g(b,S,w,x,y[l+5],Q,4237533241),x=g(x,b,S,w,y[l+12],J,1700485571),w=g(w,x,b,S,y[l+3],N,2399980690),S=g(S,w,x,b,y[l+10],P,4293915773),b=g(b,S,w,x,y[l+1],Q,2240044497),x=g(x,b,S,w,y[l+8],J,1873313359),w=g(w,x,b,S,y[l+15],N,4264355552),S=g(S,w,x,b,y[l+6],P,2734768916),b=g(b,S,w,x,y[l+13],Q,1309151649),x=g(x,b,S,w,y[l+4],J,4149444226),w=g(w,x,b,S,y[l+11],N,3174756917),S=g(S,w,x,b,y[l+2],P,718787259),b=g(b,S,w,x,y[l+9],Q,3951481745),x=n(x,v),b=n(b,p),S=n(S,m),w=n(w,C);var q=d(x)+d(b)+d(S)+d(w);return q.toLowerCase()}});