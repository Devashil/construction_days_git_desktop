$(document).ready(function(){var e,n,t=$(window),o=$("body"),a={Mobile:!1,Desktop:!1,Tablet:!1,IE:!1},r={Scroll:0,WinWidth:0},s=$(".site-banner").outerHeight(),l=$("#main");function d(){s=$(".site-banner").outerHeight(),l.css("padding-top",""),l.css("padding-top",s)}function c(){$(".list-stats").each(function(){var e,n=$(this);r.Scroll+t.height()>n.offset().top&&!n.hasClass("count-animated")&&((e=n).addClass("count-animated"),e.find("li").each(function(){var n=$(this).find("span"),e=parseInt(n.data("number"),10),i=n.data("suffix")||"",t=n.data("separator");e&&$({counter:0}).animate({counter:e},{duration:2e3,step:function(e){t.length?n.text(function(e,n){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1"+n+"$2");return e}(Math.floor(e),t)+i):n.text(Math.floor(e)+i)}})}))})}function p(){r.WinWidth=t.width(),a.Desktop=1200<r.WinWidth,a.SmallDesktop=r.WinWidth<=1200&&1025<=r.WinWidth,a.Tablet=r.WinWidth<=1024&&768<=r.WinWidth,a.Mobile=r.WinWidth<=767}$("body").addClass("ready"),function(e){for(i=0;i<e.length;i++)$(e[i]).attr("data-aos","fade-up")}([".site-banner",".offre",".section-background",".block-pub",".block:not(.quicks):not(.breadcrumb-nav):not(.global-search-form):not(.qlfooter):not(.newsletter-form):not(.network):not(.comexposium-survey-question-block)",".focus-catal",".section-videos",".section-articles",".section-video","body.article_list .list-grids-with-pagin","body.article_list .la-list",".pagination",".article-wrapper",".article-content blockquote",".cl-item",".faq-content",".section-intro"]),$(".site-banner #cxpmClientAccountWidget, .site-banner .quicks, .site-banner .lang-switcher, .site-banner .global-search-form").wrapAll('<div class="nav-utilities">'),$(".site-banner .logo, .site-banner .nav-utilities, .site-banner .main-navigation").wrapAll('<div class="header-content">'),$(".site-banner .header-content").wrapInner('<div class="inside">'),$(".list-articles .gla-item-img").wrap('<div class="gla-item-img-wrapper">'),$(".lien1, .link-read-more, .link-view-all, .nf-form-submit .btn-primary, .site-banner #cxpmClientAccountWidget .widget-my-selection .widget-dropdown .widget-dropdown-content .see-all-selection a, .lien3, .lien4, .cc-cookie-accept").wrapInner("<span>"),$("body.front .profil .inside").wrapInner('<div class="block-content">'),$(".an-item-illust").wrap('<div class="an-item-illust-wrapper">'),$("body.article .at-illust").length||$("body.article").addClass("missing-banner"),$(".survey-vote .sv-main-content .comexposium-survey-page").append('<div class="form-text">'+$(".survey-vote .comexposium-survey-form").clone().children("div").remove().end().text()),function(){var e=$("body.front"),n=e.find(".reference"),i=e.find(".site-banner > .inside");{var t;e.length&&(i.append(n.clone()),n.remove(),t=e.find(".block-revolution"),e.find(".reference .inside").prepend(e.find(".block-revolution").clone()),t.remove())}var o=$("body.article_list"),a=o.find(".breadcrumb-nav"),r=$(".list-articles"),s=r.find(".main-title-with-link"),l=r.find(".intro"),d=o.find(".site-banner > .inside");o.length&&(d.append(a.clone()).append(s.clone()).append(l.clone()),a.remove(),s.remove(),l.remove());var c=$("body.article"),p=c.find(".breadcrumb-nav"),u=c.find(".block-pub"),f=c.find(".article-title"),h=c.find(".site-banner > .inside");c.length&&(h.append(p.clone()).append(u.clone()).append(f.clone()),p.remove(),u.remove(),f.remove());var m=$("body.faq"),g=m.find(".breadcrumb-nav"),b=$(".block.faq").find(".faq-main-title"),v=m.find(".site-banner > .inside");m.length&&(v.append(g.clone()).append(b.clone()),g.remove(),b.remove());var w=$("body.partner"),y=w.find(".breadcrumb-nav"),k=$(".block.partner-list"),x=k.find("h1"),C=k.find(".intro"),D=w.find(".site-banner > .inside");w.length&&(D.append(y.clone()).append(x.clone()).append(C.clone()),y.remove(),x.remove(),C.remove());var S=$("body.page-rubric"),L=S.find(".breadcrumb-nav"),A=$(".block.edito").find("h1"),T=S.find(".site-banner > .inside");S.length&&(T.append(L.clone()).append(A.clone()),L.remove(),A.remove());var P=$("body.search"),V=P.find(".breadcrumb-nav"),W=$(".block.search-result").find(".sr-main-title"),I=P.find(".site-banner > .inside");P.length&&(I.append(V.clone()).append(W.clone()),V.remove(),W.remove());var H=$("body.error404"),q=$(".main-title"),z=H.find(".site-banner > .inside");H.length&&(z.append(q.clone()),q.remove());var j=$("body.sitemap"),M=$("h1"),E=j.find(".site-banner > .inside");j.length&&(E.append(M.clone()),M.remove());var B=$("body.page-events"),F=B.find(".breadcrumb-nav"),O=$("#zone2").find("h1"),_=B.find(".site-banner > .inside");B.length&&(_.append(F.clone()).append(O.clone()),F.remove(),O.remove());var K=$("body.catalogue"),U=K.find(".breadcrumb-nav"),J=$(".site-wrapper"),N=J.find("h1"),X=J.find("#zone1 .block-page.edito .inside"),Z=K.find(".site-banner > .inside");K.length&&(Z.append(U.clone()).append(N.clone()).append(X.clone()),U.remove(),N.remove(),X.remove());var G=$("body.content829355"),Q=G.find(".survey-vote"),R=G.find(".site-banner > .inside"),Y=G.find(".breadcrumb-nav"),ee=G.find("#zone1");{var ne;G.length&&(R.append(Y.clone()).append(Q.clone()),Q.remove(),Y.remove(),ne=R.find(".section-intro"),ee.append(ne.clone()),ne.remove())}}(),p(),$(".btn-menu").click(function(e){e.preventDefault(),o.toggleClass("show-nav-main")}),o.on("click touchstart",function(e){$(e.target).parents(".js .site-banner .gsf-fields").length||o.removeClass("show-search")}),$(".js-sna-item-link").click(function(){$(this).closest(".js-sna-item").siblings().find(".js-sna-item-content").removeClass("is-open").siblings(".fc-item-title").find(".js-sna-item-link").removeClass("is-active").find(".icon-minus").removeClass("icon-minus").addClass("icon-plus")}),$('[href*="#newsletter"]').off("click").on("click",function(e){e.preventDefault();var n=$(".site-footer").offset().top;$("html, body").animate({scrollTop:n},1500)}),$(document).on("touchstart",".global-search-form .js-toggle-trigger",function(e){e.preventDefault();var n=$(this).closest(".global-search-form"),i=n.find(".gsf-input-line"),t=n.find(".gsf-input-line .gsf-input");setTimeout(function(){i.trigger("click"),t.focus()},1e3)}),$(".global-search-form .js-toggle-trigger").on("click",function(e){var n=$(this).closest(".global-search-form"),i=(n.find(".gsf-input-line"),n.find(".gsf-input-line .gsf-input"));setTimeout(function(){i.trigger("click"),i.get(0).focus(),i.focus()},200)}),e=$(".newsletter-form .nf-form-item label"),n=e.clone(),$(".newsletter-form .nf-form-input").prepend(n),e.remove(),$(".newsletter-form .nf-form-item p:not([class])").html(function(e,n){return n.replace(/(\S+\s)/,"<span>$1</span>")}),$(".nf-main-content .nf-form-txt").each(function(){var e=$(this),n=e.closest(".nf-main-content");e.on("blur",function(){0==e.val()?n.removeClass("hide-label"):e.addClass("hide-label")}).on("input",function(){n.addClass("hide-label")})}),$(document).on("click",".optin-container .nf-form-input",function(){var e=$(this),n=e.parent(),i=e.find("input");i.trigger("click"),i.is(":checked")?n.addClass("checked"):n.removeClass("checked")}),o.on("DOMSubtreeModified",".nf-result",function(){$(".nf-result").find("div").length&&$('.newsletter-form form input[type="checkbox"]').prop("checked",!1).closest(".optin-container.checked").removeClass("checked")}),t.on("load",function(){var e;!function(){var e=window.navigator.userAgent,n=e.indexOf("MSIE "),i=e.indexOf("Edge");(0<n||navigator.userAgent.match(/Trident.*rv\:11\./)||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&(a.IE=!0,$("html").addClass("browser-ie"));(-1<i||navigator.userAgent.match(/Trident.*rv\:11\./)||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&$("html").addClass("browser-ie")}(),c(),d(),(e=$(".decouvrir-exposants")).wrapInner('<div class="slider-partners">'),e.append('<span class="slider-arrow slider-arrow-prev"><i class="ico-angle-left-circle" aria-hidden="true"></i></span>'),e.append('<span class="slider-arrow slider-arrow-next"><i class="ico-angle-right-circle" aria-hidden="true"></i></span>'),e.each(function(){var e=$(this);e.find(".slider-partners").carouFredSel({width:"100%",items:5,circular:!0,infinite:!0,responsive:!0,swipe:!0,auto:{items:1,play:!0,timeoutDuration:3e3},prev:{button:e.find(".slider-arrow-prev"),key:"left"},next:{button:e.find(".slider-arrow-next"),key:"right"}})}),function(){var e=$("#videos"),n={sourcePath:"",youtubeAppId:"AIzaSyC9-ccCSlXZk2tfJflKjIfxi8EuzDzPVqk",facebookAppId:"",useSwipeNavigation:!1,usePagination:!1,usePlaylistAdvanceButtons:!1,transitionType:"slide",navigationDirection:"h",fadeTimeout:50,videoAutoplay:!0,thumbDefault:"data/placeholder.png",videoDisplayType:"lightbox",breakPointArr:[{width:0,column:1,row:1,gutter:20},{width:767,column:3,row:1,gutter:40}],data:[{type:"youtube_playlist",path:e.data("playlist-id")}],cacheTime:0,playlistStorageKey:"pag-playlist-storage1",useHeaderBanner:!1,useHeaderLogo:!1,useHeaderTitle:!1,useHeaderDescription:!1,useHeaderStats:!1,useHeaderFollow:!1,usePlaylistSelector:!1,showVideoPlayBtn:!0,showVideoDuration:!1,showVideoTitle:!0,showVideoDate:!1,showVideoDescription:!1,showVideoStats:!1,showLightboxControls:!0,showLightboxTitle:!1,showLightboxUploadDate:!1,showLightboxAvatar:!1,showLightboxUsername:!1,showLightboxFollow:!1,showLightboxStats:!1,showLightboxShare:!1,showLightboxDescription:!1,showLightboxComments:!1,showLightboxVimeoDownload:!1,showLightboxVimeoCategory:!1};player=e.appag(n);var i=$("#video-single"),t={sourcePath:"",youtubeAppId:"AIzaSyC9-ccCSlXZk2tfJflKjIfxi8EuzDzPVqk",facebookAppId:"",useSwipeNavigation:!1,usePagination:!1,usePlaylistAdvanceButtons:!1,transitionType:"slide",navigationDirection:"h",fadeTimeout:50,videoAutoplay:!0,thumbDefault:"data/placeholder.png",videoDisplayType:"lightbox",breakPointArr:[{width:0,column:1,row:1,gutter:0}],data:[{type:"youtube_playlist",path:i.data("playlist-id")}],cacheTime:0,playlistStorageKey:"pag-playlist-storage1",useHeaderBanner:!1,useHeaderLogo:!1,useHeaderTitle:!1,useHeaderDescription:!1,useHeaderStats:!1,useHeaderFollow:!1,usePlaylistSelector:!1,showVideoPlayBtn:!0,showVideoDuration:!1,showVideoTitle:!0,showVideoDate:!1,showVideoDescription:!1,showVideoStats:!1,showLightboxControls:!0,showLightboxTitle:!1,showLightboxUploadDate:!1,showLightboxAvatar:!1,showLightboxUsername:!1,showLightboxFollow:!1,showLightboxStats:!1,showLightboxShare:!1,showLightboxDescription:!1,showLightboxComments:!1,showLightboxVimeoDownload:!1,showLightboxVimeoCategory:!1};player2=i.appag(t)}(),$(".front .partner-gallery.cxp-swiper").each(function(){var e=$(this);e.find(".pg-pagin").remove();var n=e.wrap("<div>").parent().html();e.parent().append(n),e.remove(),$(".front .partner-gallery .slider-content").liMarquee({direction:"left",loop:-1,scrolldelay:0,scrollamount:60,circular:!0,drag:!0})}),a.IE?setTimeout(function(){AOS.init({offset:t.height()/10,duration:600,once:!0})},400):AOS.init({offset:t.height()/10,duration:600,once:!0})}),t.on("resize orientationchange",function(){p(),d()}),t.on("scroll",function(){r.Scroll=t.scrollTop(),c()})});
