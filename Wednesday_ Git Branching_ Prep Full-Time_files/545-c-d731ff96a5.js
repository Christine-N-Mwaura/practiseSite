(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[545],{B1vq:function(n,e,a){"use strict"
var i=a("ouhR")
var t=a.n(i)
a("s/PJ")
a("c6Pp")
t.a.fn.scrollToVisible=function(n){var e={}
var a=t()(n)
if(0===a.length)return
var i=a.offset(),o=a.outerWidth(),_=a.outerHeight(),u=i.top,s=u+_,d=i.left,r=d+o,c="html,body"==this.selector?t.a.windowScrollTop():this.scrollTop(),g=this.scrollLeft(),m=this.outerHeight(),l=this.outerWidth()
if("html,body"!=this.selector){var v=t()("body").offset()
this.each(function(){try{v=t()(this).offset()
return false}catch(n){}})
u-=v.top
s-=v.top
d-=v.left
r-=v.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){m=t()(window).height()
t()("#wizard_box:visible").length>0&&(m-=t()("#wizard_box:visible").height())
l=t()(window).width()
u-=c
d-=g
s-=c
r-=g}u<0||m<_&&s>m?e.scrollTop=u+c:s>m&&(e.scrollTop=s+c-m+20)
d<0?e.scrollLeft=d+g:r>l&&(e.scrollLeft=r+g-l+20)
1==e.scrollTop&&(e.scrollTop=0)
1==e.scrollLeft&&(e.scrollLeft=0)
this.scrollTop(e.scrollTop)
this.scrollLeft(e.scrollLeft)
return this}},OShF:function(n,e,a){"use strict"
var i=a("ouhR")
var t=a.n(i)
var o=a("5Ky4")
a("JI1W")
t.a.fn.fillTemplateData=function(n){if(this.length&&n){n.iterator&&this.find("*").andSelf().each(function(){var e=t()(this)
t.a.each(["name","id","class"],function(a,i){e.attr(i)&&e.attr(i,e.attr(i).replace(/-iterator-/,n.iterator))})})
n.id&&this.attr("id",n.id)
var e=false
if(n.data)for(var a in n.data){if(n.except&&-1!=t.a.inArray(a,n.except))continue
n.data[a]&&n.dataValues&&-1!=t.a.inArray(a,n.dataValues)&&this.data(a,n.data[a].toString())
var i=this.find("."+a)
var _=n.avoid||""
i.each(function(){var i=t()(this)
if(i.length>0&&0===i.closest(_).length){"undefined"!=typeof n.data[a]&&null!==n.data[a]||(n.data[a]="")
if(n.htmlValues&&-1!=t.a.inArray(a,n.htmlValues)){i.html(t.a.raw(n.data[a].toString()))
if(i.hasClass("user_content")){e=true
i.removeClass("enhanced")
i.data("unenhanced_content_html",n.data[a].toString())}}else if("INPUT"==i[0].tagName.toUpperCase())i.val(n.data[a])
else try{var u=n.data[a].toString()
i.html(Object(o["a"])(u))}catch(n){}}})}n.hrefValues&&n.data&&this.find("a,span[rel]").each(function(){var e,a,i,o=t()(this)
for(var _ in n.hrefValues){if(!n.hrefValues.hasOwnProperty(_))continue
var u=n.hrefValues[_]
if(e=o.attr("href")){var s=t.a.replaceTags(e,u,encodeURIComponent(n.data[u]))
var d=o.text()===o.html()?o.text():null
if(e!==s){o.attr("href",s)
d&&o.text(d)}}(a=o.attr("rel"))&&o.attr("rel",t.a.replaceTags(a,u,n.data[u]));(i=o.attr("name"))&&o.attr("name",t.a.replaceTags(i,u,n.data[u]))}})
e&&t()(document).triggerHandler("user_content_change")}return this}
t.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
t.a.fn.getTemplateData=function(n){if(!this.length||!n)return{}
var e,a={}
if(n.textValues){var i=this
n.textValues.forEach(function(n){var e=i.find("."+n.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=t.a.trim(e.text())
"&nbsp;"===e.html()&&(o="")
1===o.length&&160===o.charCodeAt(0)&&(o="")
a[n]=o})}if(n.dataValues)for(e in n.dataValues){var o=this.data(n.dataValues[e])
o&&(a[n.dataValues[e]]=o)}if(n.htmlValues)for(e in n.htmlValues){var _=this.find("."+n.htmlValues[e].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=null
o=_.hasClass("user_content")&&_.data("unenhanced_content_html")?_.data("unenhanced_content_html"):t.a.trim(_.html())
a[n.htmlValues[e]]=o}return a}
t.a.fn.getTemplateValue=function(n,e){var a=t.a.extend({},e,{textValues:[n]})
return this.getTemplateData(a)[n]}},cuKi:function(n,e,a){"use strict"
a.d(e,"a",function(){return o})
var i=a("GLiE")
var t=a.n(i)
function o(n){return t()(n).reduce(function(n,e,a){var i=a.split("][")
var o=i.length-1
if(/\[/.test(i[0])&&/\]$/.test(i[o])){i[o]=i[o].replace(/\]$/,"")
i=i.shift().split("[").concat(i)
o=i.length-1}else o=0
if(o){var _=0
var u=n
while(_<=o){a=""===i[_]?u.length:i[_]
u=u[a]=_<o?u[a]||(i[_+1]&&isNaN(i[_+1])?{}:[]):e
_++}}else t.a.isArray(n[a])?n[a].push(e):null!=n[a]?n[a]=[n[a],e]:n[a]=e
return n},{})}},hX7l:function(n,e,a){"use strict"
a.d(e,"a",function(){return _})
var i=a("ODXe")
var t=a("cuKi")
var o={true:true,false:false,null:null}
function _(n,e){if(!n||"boolean"===typeof n){var a=window.location.search
if(!a)return{}
return _.apply(void 0,[a].concat(Array.prototype.slice.call(arguments)))}var u={}
n.replace(/\+/g," ").split("&").forEach(function(n){var a=n.split("="),t=Object(i["a"])(a,2),_=t[0],s=t[1]
_=decodeURIComponent(_)
s=decodeURIComponent(s)
e&&(s=s&&!isNaN(s)?+s:"undefined"===s?void 0:void 0!==o[s]?o[s]:s)
u[_]=s})
return Object(t["a"])(u)}},p6Wi:function(n,e,a){"use strict"
var i=a("pQTu")
var t=a("m0r6")
Object(t["a"])({ar:{buttons:{cancel:"إلغاء",delete:"حذف"}},cy:{buttons:{cancel:"Canslo",delete:"Dileu"}},da:{buttons:{cancel:"Annuller",delete:"Slet"}},"da-x-k12":{buttons:{cancel:"Annuller",delete:"Slet"}},de:{buttons:{cancel:"Abbrechen",delete:"Löschen"}},el:{buttons:{cancel:"Ακύρωση",delete:"Διαγραφή"}},"en-AU":{buttons:{cancel:"Cancel",delete:"Delete"},instructure_misc_plugins:{confirms:{default_delete_thing:"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{buttons:{cancel:"Cancel",delete:"Delete"},instructure_misc_plugins:{confirms:{default_delete_thing:"Are you sure you want to delete this?"}}},"en-CA":{buttons:{cancel:"Cancel",delete:"Delete"},instructure_misc_plugins:{confirms:{default_delete_thing:"Are you sure you want to delete this?"}}},"en-GB":{buttons:{cancel:"Cancel",delete:"Delete"},instructure_misc_plugins:{confirms:{default_delete_thing:"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{buttons:{cancel:"Cancel",delete:"Delete"}},"en-GB-x-ukhe":{buttons:{cancel:"Cancel",delete:"Delete"},instructure_misc_plugins:{confirms:{default_delete_thing:"Are you sure you want to delete this?"}}},es:{buttons:{cancel:"Cancelar",delete:"Eliminar"}},fa:{buttons:{cancel:"لغو",delete:"حذف"}},fr:{buttons:{cancel:"Annuler",delete:"Supprimer"}},"fr-CA":{buttons:{cancel:"Annuler",delete:"Supprimer"}},he:{buttons:{cancel:"ביטול",delete:"ביטול"}},ht:{buttons:{cancel:"Anile",delete:"Efase"}},hu:{buttons:{cancel:"Mégse",delete:"Törlés"}},hy:{buttons:{cancel:"Չեղյալ համարել",delete:"Ջնջել"}},is:{buttons:{cancel:"Hætta við",delete:"Eyða"},instructure_misc_plugins:{confirms:{default_delete_thing:"Viltu örugglega eyða þessu?"}}},it:{buttons:{cancel:"Annulla",delete:"Elimina"}},ja:{buttons:{cancel:"キャンセル",delete:"削除"}},ko:{buttons:{cancel:"취소",delete:"삭제"}},mi:{buttons:{cancel:"Whakakore",delete:"Muku"},instructure_misc_plugins:{confirms:{default_delete_thing:"E tino hiahia ana koe ki te muku i tēnei?"}}},nb:{buttons:{cancel:"Avbryt",delete:"Slett"}},"nb-x-k12":{buttons:{cancel:"Avbryt",delete:"Slett"}},nl:{buttons:{cancel:"Annuleren",delete:"Verwijderen"}},nn:{buttons:{cancel:"Avbryt",delete:"Slett"}},pl:{buttons:{cancel:"Anuluj",delete:"Usuń"}},pt:{buttons:{cancel:"Cancelar",delete:"Excluir"}},"pt-BR":{buttons:{cancel:"Cancelar",delete:"Excluir"}},ru:{buttons:{cancel:"Отменить",delete:"Удалить"},instructure_misc_plugins:{confirms:{default_delete_thing:"Действительно хотите удалить?"}}},sl:{buttons:{cancel:"Prekliči",delete:"Odstrani"}},sv:{buttons:{cancel:"Avbryt",delete:"Radera"}},"sv-x-k12":{buttons:{cancel:"Avbryt",delete:"Radera"}},tr:{buttons:{cancel:"İptal",delete:"Sil"}},uk:{buttons:{cancel:"Скасувати",delete:"Видалити"}},"zh-Hans":{buttons:{cancel:"取消",delete:"删除"}},"zh-Hant":{buttons:{cancel:"取消",delete:"刪除"}}})
a("jQeR")
a("0sPK")
var o=i["default"].scoped("instructure_misc_plugins")
var _=a("ouhR")
var u=a.n(_)
var s=a("5Ky4")
var d=a("JD5e")
a("jYyc")
a("YGE8")
a("B1vq")
a("s/PJ")
u.a.fn.setOptions=function(n,e){var a=n?"<option value=''>"+Object(s["a"])(n)+"</option>":""
null==e&&(e=[])
e.forEach(function(n){var e=Object(s["a"])(n)
a+='<option value="'+e+'">'+e+"</option>"})
return this.html(u.a.raw(a))}
u.a.fn.ifExists=function(n){this.length&&n.call(this,this)
return this}
u.a.fn.scrollbarWidth=function(){var n=u()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),e=n.find("div")
var a=e.innerWidth()
n.css("overflow-y","scroll")
var i=e.innerWidth()
n.remove()
return a-i}
u.a.fn.dim=function(n){return this.animate({opacity:.4},n)}
u.a.fn.undim=function(n){return this.animate({opacity:1},n)}
u.a.fn.confirmDelete=function(n){n=u.a.extend({},u.a.fn.confirmDelete.defaults,n)
var e=this
var a=null
var i=true
n.noMessage=n.noMessage||n.no_message
var t=function(){if(!i){n.cancelled&&u.a.isFunction(n.cancelled)&&n.cancelled.call(e)
return}n.confirmed||(n.confirmed=function(){e.dim()})
n.confirmed.call(e)
if(n.url){n.success||(n.success=function(n){e.fadeOut("slow",function(){e.remove()})})
var t=n.prepareData?n.prepareData.call(e,a):{}
t.authenticity_token=Object(d["a"])()
u.a.ajaxJSON(n.url,"DELETE",t,function(a){n.success.call(e,a)},function(a,i,t,o){n.error&&u.a.isFunction(n.error)?n.error.call(e,a,i,t,o):u.a.ajaxJSON.unhandledXHRs.push(i)})}else{n.success||(n.success=function(){e.fadeOut("slow",function(){e.remove()})})
n.success.call(e)}}
if(n.message&&!n.noMessage&&!u.a.skipConfirmations){if(n.dialog){i=false
var _="object"==typeof n.dialog?n.dialog:{}
a=u()(n.message).dialog(u.a.extend({},{modal:true,close:t,buttons:[{text:o.t("#buttons.cancel","Cancel"),click:function(){u()(this).dialog("close")}},{text:o.t("#buttons.delete","Delete"),class:"btn-primary",click:function(){i=true
u()(this).dialog("close")}}]},_))
return}i=confirm(n.message)}t()}
u.a.fn.confirmDelete.defaults={message:o.t("confirms.default_delete_thing","Are you sure you want to delete this?")}
u.a.fn.fragmentChange=function(n){if(n&&true!==n){var e=(window.location.search||"").replace(/^\?/,"").split("&")
var a=null
for(var i=0;i<e.length;i++){var t=e[i]
t&&0===t.indexOf("hash=")&&(a="#"+t.substring(5))}this.bind("document_fragment_change",n)
var o=this
var _=false
for(i=0;i<u.a._checkFragments.fragmentList.length;i++){var s=u.a._checkFragments.fragmentList[i]
s.doc[0]==o[0]&&(_=true)}_||u.a._checkFragments.fragmentList.push({doc:o,fragment:""})
u()(window).bind("hashchange",u.a._checkFragments)
setTimeout(function(){a&&a.length>0?o.triggerHandler("document_fragment_change",a):o&&o[0]&&o[0].location&&o[0].location.hash.length>0&&o.triggerHandler("document_fragment_change",o[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
u.a._checkFragments=function(){var n=u.a._checkFragments.fragmentList
for(var e=0;e<n.length;e++){var a=n[e]
var i=a.doc
if(i[0].location.hash!=a.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
a.fragment=i[0].location.hash
u.a._checkFragments.fragmentList[e]=a}}}
u.a._checkFragments.fragmentList=[]
u.a.fn.clickLink=function(){var n=this.eq(0)
n.hasClass("disabled_link")||n.click()}
u.a.fn.showIf=function(n){if(u.a.isFunction(n))return this.each(function(e){u()(this).showIf(n.call(this))})
n?this.show():this.hide()
return this}
u.a.fn.disableIf=function(n){u.a.isFunction(n)&&(n=n.call(this))
this.prop("disabled",!!n)
return this}
u.a.fn.indicate=function(n){n=n||{}
var e
if("remove"==n){e=this.data("indicator")
e&&e.remove()
return}u()(".indicator_box").remove()
var a=this.offset()
n&&n.offset&&(a=n.offset)
var i=this.width()
var t=this.height()
var o=(n.container||this).zIndex()
e=u()(document.createElement("div"))
e.css({width:i+6,height:t+6,top:a.top-3,left:a.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
e.addClass("indicator_box")
e.mouseover(function(){u()(this).stop().fadeOut("fast",function(){u()(this).remove()})})
this.data("indicator")&&this.indicate("remove")
this.data("indicator",e)
u()("body").append(e)
n&&n.singleFlash?e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",function(){u()(this).remove()}):e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",function(){u()(this).remove()})
n&&n.scroll&&u()("html,body").scrollToVisible(e)}
u.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
u.a.fn.log=function(n){console.log("%s: %o",n,this)
return this}
u.a.fn.fillWindowWithMe=function(n){var e=u.a.extend({minHeight:400},n),a=u()(this),i=u()("#wrapper"),t=u()("#main"),o=u()("#not_right_side"),_=u()(window),s=u()(this).add(e.alsoResize)
function d(){s.height(0)
var n=_.height()-(i.offset().top+i.outerHeight())+(t.height()-o.height()),d=Math.max(400,n)
s.height(d)
u.a.isFunction(e.onResize)&&e.onResize.call(a,d)}d()
_.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",d)
return this}
u.a.fn.autoGrowInput=function(n){n=u.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},n)
this.filter("input:text").each(function(){var e=n.minWidth||u()(this).width(),a="",i=u()(this),t=u()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(function(){if(a===(a=i.val()))return
t.text(a)
var o=t.width(),_=o+n.comfortZone>=e?o+n.comfortZone:e,u=i.width(),s=_<u&&_>=e||_>e&&_<n.maxWidth
s&&i.width(_)})}
t.insertAfter(i)
u()(this).bind("keyup keydown blur update change",o)})
return this}
u.a},wGhc:function(n,e,a){"use strict"
a.r(e)
var i=a("GLiE")
var t=a.n(i)
var o=a("ouhR")
var _=a.n(o)
var u=a("pQTu")
var s=a("m0r6")
Object(s["a"])({ar:{hide_account_navigation_menu_ccdf9480:"إخفاء قائمة التنقل بين الحسابات",hide_admin_navigation_menu_5cab9c9e:"إخفاء قائمة التنقل بين المسؤولين",hide_courses_navigation_menu_6f7c4cfd:"إخفاء قائمة التنقل بين المساقات",hide_groups_navigation_menu_62e8b3d0:"إخفاء قائمة التنقل بين المجموعات",hide_navigation_menu_f0b3e90:"إخفاء قائمة التنقل",show_account_navigation_menu_d97270a9:"إظهار قائمة التنقل بين الحسابات",show_admin_navigation_menu_92fb579f:"إظهار قائمة التنقل بين المسؤولين",show_courses_navigation_menu_7ad1a8d4:"إظهار قائمة التنقل بين المساقات",show_groups_navigation_menu_1521d38d:"إظهار قائمة التنقل بين المجموعات",show_navigation_menu_34e7f441:"إظهار قائمة التنقل"},cy:{hide_account_navigation_menu_ccdf9480:"Cuddio Dewislen Crwydro’r Cyfrif",hide_admin_navigation_menu_5cab9c9e:"Cuddio Dewislen Crwydro - Gweinyddwr",hide_courses_navigation_menu_6f7c4cfd:"Cuddio Dewislen Crwydro Cwrs",hide_groups_navigation_menu_62e8b3d0:"Cuddio Dewislen Crwydro - Grwpiau",hide_navigation_menu_f0b3e90:"Cuddio Dewislen Crwydro",show_account_navigation_menu_d97270a9:"Dangos Dewislen Crwydro’r Cyfrif",show_admin_navigation_menu_92fb579f:"Dangos Dewislen Crwydro Gweinyddwr",show_courses_navigation_menu_7ad1a8d4:"Dangos Dewislen Crwydro Cyrsiau",show_groups_navigation_menu_1521d38d:"Dangos Dewislen Crwydro Grwpiau",show_navigation_menu_34e7f441:"Dangos Dewislen Crwydro"},da:{hide_account_navigation_menu_ccdf9480:"Skjul kontonavigationsmenu",hide_admin_navigation_menu_5cab9c9e:"Skjul admin-navigationsmenu",hide_courses_navigation_menu_6f7c4cfd:"Skjul fag-navigationsmenu",hide_groups_navigation_menu_62e8b3d0:"Skjul gruppe-navigationsmenu",hide_navigation_menu_f0b3e90:"Skjul navigationsmenu",show_account_navigation_menu_d97270a9:"Vis kontonavigationsmenu",show_admin_navigation_menu_92fb579f:"Vis admin-navigationsmenu",show_courses_navigation_menu_7ad1a8d4:"Vis fag-navigationsmenu",show_groups_navigation_menu_1521d38d:"Vis gruppe-navigationsmenu",show_navigation_menu_34e7f441:"Vis navigationsmenu"},"da-x-k12":{hide_account_navigation_menu_ccdf9480:"Skjul kontonavigationsmenu",hide_admin_navigation_menu_5cab9c9e:"Skjul admin-navigationsmenu",hide_courses_navigation_menu_6f7c4cfd:"Skjul fag-navigationsmenu",hide_groups_navigation_menu_62e8b3d0:"Skjul gruppe-navigationsmenu",hide_navigation_menu_f0b3e90:"Skjul navigationsmenu",show_account_navigation_menu_d97270a9:"Vis kontonavigationsmenu",show_admin_navigation_menu_92fb579f:"Vis admin-navigationsmenu",show_courses_navigation_menu_7ad1a8d4:"Vis fag-navigationsmenu",show_groups_navigation_menu_1521d38d:"Vis gruppe-navigationsmenu",show_navigation_menu_34e7f441:"Vis navigationsmenu"},de:{hide_account_navigation_menu_ccdf9480:"Konto-Navigationsmenü ausblenden",hide_admin_navigation_menu_5cab9c9e:"Admin-Navigationsmenü ausblenden",hide_courses_navigation_menu_6f7c4cfd:"Kurs-Navigationsmenü ausblenden",hide_groups_navigation_menu_62e8b3d0:"Gruppen-Navigationsmenü ausblenden",hide_navigation_menu_f0b3e90:"Navigationsmenü ausblenden",show_account_navigation_menu_d97270a9:"Konto-Navigationsmenü einblenden",show_admin_navigation_menu_92fb579f:"Admin-Navigationsmenü einblenden",show_courses_navigation_menu_7ad1a8d4:"Kursnavigationsmenü einblenden",show_groups_navigation_menu_1521d38d:"Gruppen-Navigationsmenü einblenden",show_navigation_menu_34e7f441:"Navigationsmenü einblenden"},"en-AU":{hide_account_navigation_menu_ccdf9480:"Hide Account Navigation Menu",hide_admin_navigation_menu_5cab9c9e:"Hide Admin Navigation Menu",hide_courses_navigation_menu_6f7c4cfd:"Hide Courses Navigation Menu",hide_groups_navigation_menu_62e8b3d0:"Hide Groups Navigation Menu",hide_navigation_menu_f0b3e90:"Hide Navigation Menu",show_account_navigation_menu_d97270a9:"Show Account Navigation Menu",show_admin_navigation_menu_92fb579f:"Show Admin Navigation Menu",show_courses_navigation_menu_7ad1a8d4:"Show Courses Navigation Menu",show_groups_navigation_menu_1521d38d:"Show Groups Navigation Menu",show_navigation_menu_34e7f441:"Show Navigation Menu"},"en-AU-x-unimelb":{hide_account_navigation_menu_ccdf9480:"Hide Account Navigation Menu",hide_admin_navigation_menu_5cab9c9e:"Hide Admin Navigation Menu",hide_courses_navigation_menu_6f7c4cfd:"Hide Subjects Navigation Menu",hide_groups_navigation_menu_62e8b3d0:"Hide Groups Navigation Menu",hide_navigation_menu_f0b3e90:"Hide Navigation Menu",show_account_navigation_menu_d97270a9:"Show Account Navigation Menu",show_admin_navigation_menu_92fb579f:"Show Admin Navigation Menu",show_courses_navigation_menu_7ad1a8d4:"Show Subjects Navigation Menu",show_groups_navigation_menu_1521d38d:"Show Groups Navigation Menu",show_navigation_menu_34e7f441:"Show Navigation Menu"},"en-CA":{hide_account_navigation_menu_ccdf9480:"Hide Account Navigation Menu",hide_admin_navigation_menu_5cab9c9e:"Hide Admin Navigation Menu",hide_courses_navigation_menu_6f7c4cfd:"Hide Courses Navigation Menu",hide_groups_navigation_menu_62e8b3d0:"Hide Groups Navigation Menu",hide_navigation_menu_f0b3e90:"Hide Navigation Menu",show_account_navigation_menu_d97270a9:"Show Account Navigation Menu",show_admin_navigation_menu_92fb579f:"Show Admin Navigation Menu",show_courses_navigation_menu_7ad1a8d4:"Show Courses Navigation Menu",show_groups_navigation_menu_1521d38d:"Show Groups Navigation Menu",show_navigation_menu_34e7f441:"Show Navigation Menu"},"en-GB":{hide_account_navigation_menu_ccdf9480:"Hide account navigation menu",hide_admin_navigation_menu_5cab9c9e:"Hide admin navigation menu",hide_courses_navigation_menu_6f7c4cfd:"Hide courses navigation menu",hide_groups_navigation_menu_62e8b3d0:"Hide groups navigation menu",hide_navigation_menu_f0b3e90:"Hide navigation menu",show_account_navigation_menu_d97270a9:"Show account navigation menu",show_admin_navigation_menu_92fb579f:"Show admin navigation menu",show_courses_navigation_menu_7ad1a8d4:"Show courses navigation menu",show_groups_navigation_menu_1521d38d:"Show groups navigation menu",show_navigation_menu_34e7f441:"Show navigation menu"},"en-GB-x-lbs":{hide_account_navigation_menu_ccdf9480:"Hide account navigation menu",hide_admin_navigation_menu_5cab9c9e:"Hide admin navigation menu",hide_courses_navigation_menu_6f7c4cfd:"Hide programmes navigation menu",hide_groups_navigation_menu_62e8b3d0:"Hide groups navigation menu",hide_navigation_menu_f0b3e90:"Hide navigation menu",show_account_navigation_menu_d97270a9:"Show account navigation menu",show_admin_navigation_menu_92fb579f:"Show admin navigation menu",show_courses_navigation_menu_7ad1a8d4:"Show programmes navigation menu",show_groups_navigation_menu_1521d38d:"Show groups navigation menu",show_navigation_menu_34e7f441:"Show navigation menu"},"en-GB-x-ukhe":{hide_account_navigation_menu_ccdf9480:"Hide account navigation menu",hide_admin_navigation_menu_5cab9c9e:"Hide admin navigation menu",hide_courses_navigation_menu_6f7c4cfd:"Hide modules navigation menu",hide_groups_navigation_menu_62e8b3d0:"Hide groups navigation menu",hide_navigation_menu_f0b3e90:"Hide navigation menu",show_account_navigation_menu_d97270a9:"Show account navigation menu",show_admin_navigation_menu_92fb579f:"Show admin navigation menu",show_courses_navigation_menu_7ad1a8d4:"Show modules navigation menu",show_groups_navigation_menu_1521d38d:"Show groups navigation menu",show_navigation_menu_34e7f441:"Show navigation menu"},es:{hide_account_navigation_menu_ccdf9480:"Ocultar menú de navegación de cuenta",hide_admin_navigation_menu_5cab9c9e:"Ocultar menú de navegación de administrador",hide_courses_navigation_menu_6f7c4cfd:"Ocultar menú de navegación de cursos",hide_groups_navigation_menu_62e8b3d0:"Ocultar menú de navegación de grupos",hide_navigation_menu_f0b3e90:"Ocultar menú de navegación",show_account_navigation_menu_d97270a9:"Mostrar menú de navegación de cuenta",show_admin_navigation_menu_92fb579f:"Mostrar menú de navegación de administrador",show_courses_navigation_menu_7ad1a8d4:"Mostrar menú de navegación de cursos",show_groups_navigation_menu_1521d38d:"Mostrar menú de navegación de grupos",show_navigation_menu_34e7f441:"Mostrar menú de navegación"},fa:{hide_account_navigation_menu_ccdf9480:"مخفی کردن منوی پیمایش کاربر",hide_admin_navigation_menu_5cab9c9e:"مخفی کردن منوی پیمایش مدیر",hide_courses_navigation_menu_6f7c4cfd:"مخفی کردن منوی پیمایش درس‌ها",hide_groups_navigation_menu_62e8b3d0:"مخفی کردن منوی پیمایش گروه‌ها",hide_navigation_menu_f0b3e90:"مخفی کردن منوی پیمایش ",show_account_navigation_menu_d97270a9:"نمایش منوی پیمایش حساب",show_admin_navigation_menu_92fb579f:"نمایش منوی پیمایش مدیر",show_courses_navigation_menu_7ad1a8d4:"نمایش منوی پیمایش درس ها",show_groups_navigation_menu_1521d38d:"نمایش منوی پیمایش گروه ها",show_navigation_menu_34e7f441:"نمایش منوی پیمایش"},fr:{hide_account_navigation_menu_ccdf9480:"Masquer le menu de navigation de comptes",hide_admin_navigation_menu_5cab9c9e:"Masquer le menu de navigation de l’administrateur",hide_courses_navigation_menu_6f7c4cfd:"Masquer le menu de navigation de cours",hide_groups_navigation_menu_62e8b3d0:"Masquer le menu de navigation de groupes",hide_navigation_menu_f0b3e90:"Masquer le menu de navigation",show_account_navigation_menu_d97270a9:"Afficher le menu de navigation de comptes",show_admin_navigation_menu_92fb579f:"Afficher le menu de navigation de l’administrateur",show_courses_navigation_menu_7ad1a8d4:"Afficher le menu de navigation de cours",show_groups_navigation_menu_1521d38d:"Afficher le menu de navigation de groupes",show_navigation_menu_34e7f441:"Afficher le menu de navigation"},"fr-CA":{hide_account_navigation_menu_ccdf9480:"Masquer le menu de navigation du compte",hide_admin_navigation_menu_5cab9c9e:"Masquer le menu de navigation de l’administrateur",hide_courses_navigation_menu_6f7c4cfd:"Masquer le menu de navigation des cours",hide_groups_navigation_menu_62e8b3d0:"Masquer le menu de navigation des groupes",hide_navigation_menu_f0b3e90:"Masquer le menu de navigation",show_account_navigation_menu_d97270a9:"Afficher le menu de navigation du compte",show_admin_navigation_menu_92fb579f:"Afficher le menu de navigation de l’administrateur",show_courses_navigation_menu_7ad1a8d4:"Afficher le menu de navigation des cours",show_groups_navigation_menu_1521d38d:"Afficher le menu de navigation des groupes",show_navigation_menu_34e7f441:"Afficher le menu de navigation"},he:{hide_account_navigation_menu_ccdf9480:"הסתרת תפריט ניווט חשבונות",hide_admin_navigation_menu_5cab9c9e:"הסתרת תפריט ניווט מנהלי מערכת",hide_courses_navigation_menu_6f7c4cfd:"הסתרת תפריט ניווט קורסים",hide_groups_navigation_menu_62e8b3d0:"הסתרת תפריט ניווט קבוצות",hide_navigation_menu_f0b3e90:"הסתרת תפריט ניווט",show_account_navigation_menu_d97270a9:"הצגת תפריט ניווט חשבונות",show_admin_navigation_menu_92fb579f:"הצגת תפריט ניווט של מנהלי מערכת",show_courses_navigation_menu_7ad1a8d4:"הצגת תפריט ניווט קורסים",show_groups_navigation_menu_1521d38d:"הצגת תפריט ניווט קבוצות",show_navigation_menu_34e7f441:"הצגת תפריט ניווט"},ht:{hide_account_navigation_menu_ccdf9480:"Kache Meni Navigasyon Kont",hide_admin_navigation_menu_5cab9c9e:"Kache Meni Navigasyon Admin",hide_courses_navigation_menu_6f7c4cfd:"Kache Meni Navigasyon Kou",hide_groups_navigation_menu_62e8b3d0:"Kache Meni Navigasyon Gwoup",hide_navigation_menu_f0b3e90:"Kache Meni Navigasyon",show_account_navigation_menu_d97270a9:"Afiche Meni Navigasyon Kont",show_admin_navigation_menu_92fb579f:"Afiche Meni Navigasyon Admin",show_courses_navigation_menu_7ad1a8d4:"Afiche Meni Navigasyon Kou",show_groups_navigation_menu_1521d38d:"Afiche Meni Navigasyon Gwoup",show_navigation_menu_34e7f441:"Afiche Meni Navigasyon"},hu:{hide_courses_navigation_menu_6f7c4cfd:"Kurzusnavigációs menü elrejtése",hide_navigation_menu_f0b3e90:"Navigációs menü elrejtése"},is:{hide_account_navigation_menu_ccdf9480:"Fela leiðarstýringu valmyndar reiknings",hide_admin_navigation_menu_5cab9c9e:"Fela leiðarstýringarvalmynd kerfisstjórnanda",hide_courses_navigation_menu_6f7c4cfd:"Fela leiðarstýringarvalmynd námskeiða",hide_groups_navigation_menu_62e8b3d0:"Fela leiðarstýringarvalmynd hópa",hide_navigation_menu_f0b3e90:"Fela leiðarstýringarvalmynd",show_account_navigation_menu_d97270a9:"Sýna leiðarstýringarvalmynd reiknings",show_admin_navigation_menu_92fb579f:"Sýna leiðarstýringarvalmynd kerfisstjórnanda",show_courses_navigation_menu_7ad1a8d4:"Sýna leiðarstýringarvalmynd námskeiða",show_groups_navigation_menu_1521d38d:"Sýna leiðarstýringarvalmynd hópa",show_navigation_menu_34e7f441:"Sýna leiðarstýringarvalmynd"},it:{hide_account_navigation_menu_ccdf9480:"Nascondi menu di navigazione account",hide_admin_navigation_menu_5cab9c9e:"Nascondi menu di navigazione amministratore",hide_courses_navigation_menu_6f7c4cfd:"Nascondi menu di navigazione corsi",hide_groups_navigation_menu_62e8b3d0:"Nascondi meni di navigazione gruppi",hide_navigation_menu_f0b3e90:"Nascondi menu di navigazione",show_account_navigation_menu_d97270a9:"Mostra menu di navigazione account",show_admin_navigation_menu_92fb579f:"Mostra menu di navigazione amministratore",show_courses_navigation_menu_7ad1a8d4:"Mostra menu di esplorazione corsi",show_groups_navigation_menu_1521d38d:"Mostra menu di esplorazione gruppi",show_navigation_menu_34e7f441:"Mostra menu di navigazione"},ja:{hide_account_navigation_menu_ccdf9480:"アカウントのナビゲーションメニューを非表示にする",hide_admin_navigation_menu_5cab9c9e:"管理ナビゲーションメニューを非表示にする",hide_courses_navigation_menu_6f7c4cfd:"コースナビゲーションメニューを非表示にする",hide_groups_navigation_menu_62e8b3d0:"グループナビゲーションメニューを非表示にする",hide_navigation_menu_f0b3e90:"ナビゲーションメニューを非表示にする",show_account_navigation_menu_d97270a9:"アカウントナビゲーションメニューを表示する",show_admin_navigation_menu_92fb579f:"アドミニストレーションナビゲーションメニューを表示する",show_courses_navigation_menu_7ad1a8d4:"コースナビゲーションメニューを表示する",show_groups_navigation_menu_1521d38d:"グループナビゲーションメニューを表示する",show_navigation_menu_34e7f441:"ナビゲーションメニューを表示する"},mi:{hide_account_navigation_menu_ccdf9480:"Huna Tāhua Whakatere Pūkete",hide_admin_navigation_menu_5cab9c9e:"Huna Whakahaere Whakatere Tāhua",hide_courses_navigation_menu_6f7c4cfd:"Huna Ngā Akoranga Whakatere Tāhua",hide_groups_navigation_menu_62e8b3d0:"Huna Ngā Rōpū Whakatere Tāhua",hide_navigation_menu_f0b3e90:"Huna Whakatere Tāhua",show_account_navigation_menu_d97270a9:"Whakātu Pūkete Whakatere Tāhua",show_admin_navigation_menu_92fb579f:"Whakātu Whakahaere Whakatere Tāhua",show_courses_navigation_menu_7ad1a8d4:"Whakātu Ngā Akoranga Whakatere Tāhua",show_groups_navigation_menu_1521d38d:"Whakātu Ngā Rōpū Whakatere Tāhua",show_navigation_menu_34e7f441:"Whakātu Whakatere Tāhua"},nb:{hide_account_navigation_menu_ccdf9480:"Skjul menyen for kontonavigering",hide_admin_navigation_menu_5cab9c9e:"Skjul menyen for administratornavigering",hide_courses_navigation_menu_6f7c4cfd:"Skjul menyen for emnernavigering",hide_groups_navigation_menu_62e8b3d0:"Skjul menyen for gruppenavigering",hide_navigation_menu_f0b3e90:"Skjul navigeringsmenyen",show_account_navigation_menu_d97270a9:"Vis menyen for kontonavigering",show_admin_navigation_menu_92fb579f:"Vis menyen for administratornavigering",show_courses_navigation_menu_7ad1a8d4:"Vis menyen for emnernavigering",show_groups_navigation_menu_1521d38d:"Vis menyen for gruppenavigering",show_navigation_menu_34e7f441:"Vis navigeringsmenyen"},"nb-x-k12":{hide_account_navigation_menu_ccdf9480:"Skjul menyen for kontonavigering",hide_admin_navigation_menu_5cab9c9e:"Skjul menyen for administratornavigering",hide_courses_navigation_menu_6f7c4cfd:"Skjul menyen for fagnavigering",hide_groups_navigation_menu_62e8b3d0:"Skjul menyen for gruppenavigering",hide_navigation_menu_f0b3e90:"Skjul navigeringsmenyen",show_account_navigation_menu_d97270a9:"Vis menyen for kontonavigering",show_admin_navigation_menu_92fb579f:"Vis menyen for administratornavigering",show_courses_navigation_menu_7ad1a8d4:"Vis menyen for fagnavigering",show_groups_navigation_menu_1521d38d:"Vis menyen for gruppenavigering",show_navigation_menu_34e7f441:"Vis navigeringsmenyen"},nl:{hide_account_navigation_menu_ccdf9480:"Menu Accountnavigatie verbergen",hide_admin_navigation_menu_5cab9c9e:"Menu Beheernavigatie verbergen",hide_courses_navigation_menu_6f7c4cfd:"Menu Cursusnavigatie verbergen",hide_groups_navigation_menu_62e8b3d0:"Menu Groepsnavigatie verbergen",hide_navigation_menu_f0b3e90:"Navigatiemenu verbergen",show_account_navigation_menu_d97270a9:"Menu Accountnavigatie weergeven",show_admin_navigation_menu_92fb579f:"Menu Beheernavigatie weergeven",show_courses_navigation_menu_7ad1a8d4:"Menu Cursusnavigatie weergeven",show_groups_navigation_menu_1521d38d:"Menu Groepsnavigatie weergeven",show_navigation_menu_34e7f441:"Navigatiemenu weergeven"},nn:{hide_account_navigation_menu_ccdf9480:"Skjul meny for kontonavigasjon",hide_admin_navigation_menu_5cab9c9e:"Skjul meny for kontonavigasjon",hide_courses_navigation_menu_6f7c4cfd:"Skjul meny for emnenavigasjon",hide_groups_navigation_menu_62e8b3d0:"Skjul meny for gruppenavigasjon",hide_navigation_menu_f0b3e90:"Skjul navigeringsmeny",show_account_navigation_menu_d97270a9:"Vis meny for kontonavigasjon",show_admin_navigation_menu_92fb579f:"Vis admin-navigeringsmeny ",show_courses_navigation_menu_7ad1a8d4:"Vis meny for emnenavigasjon",show_groups_navigation_menu_1521d38d:"Vis meny for gruppenavigasjon",show_navigation_menu_34e7f441:"Vis navigeringsmeny"},pl:{hide_account_navigation_menu_ccdf9480:"Ukryj menu nawigacji na koncie",hide_admin_navigation_menu_5cab9c9e:"Ukryj menu nawigacji administratora",hide_courses_navigation_menu_6f7c4cfd:"Ukryj menu nawigacji w kursie",hide_groups_navigation_menu_62e8b3d0:"Ukryj menu nawigacji w grupach",hide_navigation_menu_f0b3e90:"Ukryj menu nawigacji",show_account_navigation_menu_d97270a9:"Pokaż menu nawigacji na koncie",show_admin_navigation_menu_92fb579f:"Pokaż menu nawigacji administratora",show_courses_navigation_menu_7ad1a8d4:"Pokaż menu nawigacji w kursie",show_groups_navigation_menu_1521d38d:"Pokaż menu nawigacji w grupach",show_navigation_menu_34e7f441:"Pokaż menu nawigacji"},pt:{hide_account_navigation_menu_ccdf9480:"Ocultar menu de navegação da conta",hide_admin_navigation_menu_5cab9c9e:"Ocultar menu de navegação do administrador",hide_courses_navigation_menu_6f7c4cfd:"Ocultar Menu de navegação das disciplinas",hide_groups_navigation_menu_62e8b3d0:"Ocultar Menu de navegação de grupos",hide_navigation_menu_f0b3e90:"Ocultar Menu de navegação",show_account_navigation_menu_d97270a9:"Mostrar o Menu de Navegação da Conta",show_admin_navigation_menu_92fb579f:"Mostrar o Menu de navegação do administrador",show_courses_navigation_menu_7ad1a8d4:"Mostrar Menu de navegação de disciplinas",show_groups_navigation_menu_1521d38d:"Mostrar o Menu de navegação dos grupos",show_navigation_menu_34e7f441:"Mostrar o Menu de Navegação"},"pt-BR":{hide_account_navigation_menu_ccdf9480:"Ocultar Menu de Navegação da conta",hide_admin_navigation_menu_5cab9c9e:"Ocultar Menu de Navegação do Admin",hide_courses_navigation_menu_6f7c4cfd:"Ocultar Menu de Navegação dos cursos",hide_groups_navigation_menu_62e8b3d0:"Ocultar Menu de Navegação dos grupos",hide_navigation_menu_f0b3e90:"Ocultar Menu de Navegação",show_account_navigation_menu_d97270a9:"Mostrar Menu de Navegação da conta",show_admin_navigation_menu_92fb579f:"Mostrar Menu de Navegação do Admin",show_courses_navigation_menu_7ad1a8d4:"Mostrar Menu de Navegação dos cursos",show_groups_navigation_menu_1521d38d:"Mostrar Menu de Navegação dos grupos",show_navigation_menu_34e7f441:"Mostrar Menu de Navegação"},ru:{hide_account_navigation_menu_ccdf9480:"Скрыть меню навигации учетной записи",hide_admin_navigation_menu_5cab9c9e:"Скрыть меню навигации администратора",hide_courses_navigation_menu_6f7c4cfd:"Скрыть меню навигации курсов",hide_groups_navigation_menu_62e8b3d0:"Скрыть меню навигации групп",hide_navigation_menu_f0b3e90:"Скрыть меню навигации",show_account_navigation_menu_d97270a9:"Показать меню навигации учетной записи",show_admin_navigation_menu_92fb579f:"Показать меню навигации администратора",show_courses_navigation_menu_7ad1a8d4:"Показать меню навигации курсов",show_groups_navigation_menu_1521d38d:"Показать меню навигации групп",show_navigation_menu_34e7f441:"Показать меню навигации"},sl:{hide_account_navigation_menu_ccdf9480:"Skrij meni navigacije po računu",hide_admin_navigation_menu_5cab9c9e:"Skrij skrbniški meni navigacije",hide_courses_navigation_menu_6f7c4cfd:"Skrij meni navigacije po predmetih",hide_groups_navigation_menu_62e8b3d0:"Skrij meni navigacije po skupinah",hide_navigation_menu_f0b3e90:"Skrij meni navigacije",show_account_navigation_menu_d97270a9:"Prikaži meni navigacije po računu",show_admin_navigation_menu_92fb579f:"Prikaži skrbniški meni navigacije",show_courses_navigation_menu_7ad1a8d4:"Prikaži meni navigacije po predmetih",show_groups_navigation_menu_1521d38d:"Prikaži meni navigacije po skupinah",show_navigation_menu_34e7f441:"Prikaži meni navigacije"},sv:{hide_account_navigation_menu_ccdf9480:"Dölj konto-navigeringsmeny",hide_admin_navigation_menu_5cab9c9e:"Dölj administrations-navigeringsmeny",hide_courses_navigation_menu_6f7c4cfd:"Dölj kurs-navigeringsmeny",hide_groups_navigation_menu_62e8b3d0:"Dölj grupp-navigeringsmeny",hide_navigation_menu_f0b3e90:"Dölj navigeringsmeny",show_account_navigation_menu_d97270a9:"Visa konto-navigeringsmeny",show_admin_navigation_menu_92fb579f:"Visa administratörs-navigeringsmeny",show_courses_navigation_menu_7ad1a8d4:"Visa kurs-navigeringsmeny",show_groups_navigation_menu_1521d38d:"Visa grupp-navigeringsmeny",show_navigation_menu_34e7f441:"Visa navigeringsmeny"},"sv-x-k12":{hide_account_navigation_menu_ccdf9480:"Dölj konto-navigeringsmeny",hide_admin_navigation_menu_5cab9c9e:"Dölj administrations-navigeringsmeny",hide_courses_navigation_menu_6f7c4cfd:"Dölj kurs-navigeringsmeny",hide_groups_navigation_menu_62e8b3d0:"Dölj grupp-navigeringsmeny",hide_navigation_menu_f0b3e90:"Dölj navigeringsmeny",show_account_navigation_menu_d97270a9:"Visa konto-navigeringsmeny",show_admin_navigation_menu_92fb579f:"Visa administratörs-navigeringsmeny",show_courses_navigation_menu_7ad1a8d4:"Visa kurs-navigeringsmeny",show_groups_navigation_menu_1521d38d:"Visa grupp-navigeringsmeny",show_navigation_menu_34e7f441:"Visa navigeringsmeny"},uk:{hide_account_navigation_menu_ccdf9480:"Сховати меню навігації облікового запису",hide_admin_navigation_menu_5cab9c9e:"Сховати меню навігації адміністратора",hide_courses_navigation_menu_6f7c4cfd:"Сховати меню навігації курсів",hide_groups_navigation_menu_62e8b3d0:"Сховати меню навігації груп",hide_navigation_menu_f0b3e90:"Сховати меню навігації ",show_account_navigation_menu_d97270a9:"Показати Меню навігації облікового запису",show_admin_navigation_menu_92fb579f:"Показати Меню навігації адміністратора",show_courses_navigation_menu_7ad1a8d4:"Показувати меню навігації курсів",show_groups_navigation_menu_1521d38d:"Показувати меню навігації груп",show_navigation_menu_34e7f441:"Показати меню навігації"},"zh-Hans":{hide_account_navigation_menu_ccdf9480:"隐藏帐户导航菜单",hide_admin_navigation_menu_5cab9c9e:"隐藏管理员导航菜单",hide_courses_navigation_menu_6f7c4cfd:"隐藏课程导航菜单",hide_groups_navigation_menu_62e8b3d0:"隐藏小组导航菜单",hide_navigation_menu_f0b3e90:"隐藏导航菜单",show_account_navigation_menu_d97270a9:"显示帐户导航菜单",show_admin_navigation_menu_92fb579f:"显示管理员导航菜单",show_courses_navigation_menu_7ad1a8d4:"显示课程导航菜单",show_groups_navigation_menu_1521d38d:"显示小组导航菜单",show_navigation_menu_34e7f441:"显示导航菜单"},"zh-Hant":{hide_account_navigation_menu_ccdf9480:"隱藏帳戶導航工具選單",hide_admin_navigation_menu_5cab9c9e:"隱藏管理員導航工具選單",hide_courses_navigation_menu_6f7c4cfd:"隱藏課程導航工具選單",hide_groups_navigation_menu_62e8b3d0:"隱藏小組導航工具選單",hide_navigation_menu_f0b3e90:"隱藏導航工具選單",show_account_navigation_menu_d97270a9:"顯示帳戶導航工具選單",show_admin_navigation_menu_92fb579f:"顯示管理員導航工具選單",show_courses_navigation_menu_7ad1a8d4:"顯示課程導航工具選單",show_groups_navigation_menu_1521d38d:"顯示小組導航工具選單",show_navigation_menu_34e7f441:"顯示導航工具選單"}})
a("jQeR")
a("0sPK")
var d=u["default"].scoped("subnav_menu_toggle")
var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname
var e={hide:{default:d.t("Hide Navigation Menu"),account:d.t("Hide Account Navigation Menu"),admin:d.t("Hide Admin Navigation Menu"),courses:d.t("Hide Courses Navigation Menu"),groups:d.t("Hide Groups Navigation Menu")},show:{default:d.t("Show Navigation Menu"),account:d.t("Show Account Navigation Menu"),admin:d.t("Show Admin Navigation Menu"),courses:d.t("Show Courses Navigation Menu"),groups:d.t("Show Groups Navigation Menu")}}
var a=document.body.classList.contains("course-menu-expanded")
var i=a?"hide":"show"
var t=e[i].default
n.match(/^\/profile/)?t=e[i].account:n.match(/^\/accounts/)?t=e[i].admin:n.match(/^\/courses/)?t=e[i].courses:n.match(/^\/groups/)&&(t=e[i].groups)
var o=document.getElementById("courseMenuToggle")
o.setAttribute("aria-label",t)
o.setAttribute("title",t)}
var c=r
var g=a("Nxtp")
a("iBIV")
a("VHne")
a("p6Wi")
_()(document).ready(function(){_()("#floating_reminders").draggable()
_()(".show_reminders_link").click(function(n){n.preventDefault()
_()(this).blur()
var e=_()("#floating_reminders")
var a=e.clone()
a.children().css("visibility","hidden")
var i=_()("#reminders_icon").offset()
var t=_()("#floating_reminders").offset().top
e.after(a)
a.css({width:20,height:20,left:i.left,top:i.top-t,opacity:0})
e.css("visibility","hidden").css("left","")
a.animate({top:e.css("top"),left:e.css("left"),width:e.width(),height:e.height(),opacity:1},"slow",function(){_()(this).remove()
e.css("visibility","visible")
e.find("a:not(.hide_reminders_link):visible:first").focus()
_()("#reminders_icon").hide()})
e.find(".update_session_url").attr("href")})
_()(".hide_reminders_link").click(function(n){n.preventDefault()
var e=_()(this).parents("#floating_reminders")
var a=e.clone()
e.after(a).css("left",-2e3)
a.children().css("visibility","hidden")
var i=_()("#reminders_icon").show().offset()
var t=a.offset().top
a.animate({width:20,height:20,left:i.left,top:i.top-t,opacity:0},"slow",function(){_()(this).remove()})
e.find(".update_session_url").attr("href")})
_()(".drop_held_context_link").click(function(n){n.preventDefault()
var e=_()(this).parents(".reminder")
e.confirmDelete({url:_()(this).attr("href"),message:"Are you sure you want to drop this "+e.find(".item_type").text()+"?",success:function(n){_()(this).fadeOut("fast",function(){_()(this).remove()
0===_()("#floating_reminders .reminder").length&&_()("#floating_reminders").fadeOut("fast",function(){_()(this).remove()
_()("#reminders_icon").remove()})})}})})})
a("VNfg")
var m=a("u7Gu")
a("jYyc")
_()(document).ready(function(){var n=0,e=window.ENV.page_view_update_url
s=false
m["a"].interaction_contexts={}
if(document.cookie&&document.cookie.match(/last_page_view/)){var a=document.cookie.match(/last_page_view=([^;]+)/)
if(a&&a[1])try{var i=_.a.parseJSON(unescape(a[1]))
i&&i.url&&i.seconds&&setTimeout(function(){_.a.ajaxJSON(i.url,"PUT",{interaction_seconds:i.seconds},function(){},function(){},3e3)})}catch(n){}document.cookie="last_page_view=; Path=/; expires=Thu, 01-Jan-1970 00:00:01 GMT"}if(e){var t=0
var o=300
_()(document).bind("page_view_update_url_received",function(n,a){e=a})
var u
_()(document).bind("page_view_update",function(a,i){var s={}
if(i||n>10&&t<o){s.interaction_seconds=n
_.a.ajaxJSON(e,"PUT",s,null,function(n,e){422===e.status&&clearInterval(u)})
n=0}})
u=setInterval(function(){_()(document).triggerHandler("page_view_update")},1e3*o)
window.addEventListener("beforeunload",function(a){if(n>30){var i=JSON.stringify({url:e,seconds:n})
document.cookie="last_page_view="+escape(i)+"; Path=/;"}})
var s=false
_()(document).bind("mousemove keypress mousedown focus",function(){s=true})
setInterval(function(){if(s){n++
m["a"]&&m["a"].interaction_context&&m["a"].interaction_contexts&&(m["a"].interaction_contexts[m["a"].interaction_context]=(m["a"].interaction_contexts[m["a"].interaction_context]||0)+1)
s=false
if(t>=o){t=0
_()(document).triggerHandler("page_view_update")}t=0}else t++},1e3)}})
a("JD5e")
var l=a("5Ky4")
function v(n){n.data("handled",true)
var e=n.data("url")||n.attr("href")
var a=n.data("method")
var i=n.attr("target")
var t=_()('<form method="post" action="'.concat(Object(l["a"])(e),'"></form>'))
var o='\n    <input name="_method" value="'.concat(Object(l["a"])(a),'" type="hidden" />\n    <input name="authenticity_token" type="hidden" />\n  ')
i&&t.attr("target",i)
t.hide().append(o).appendTo("body").submit()}function h(n){var e=n.data("confirm")
if(!e)return true
return confirm(e)}_()(document).delegate("a[data-confirm], a[data-method], a[data-remove]","click",function(n){var e=_()(this)
if(e.data("handled")||!h(e))return false
if(e.data("remove")){f(e)
return false}if(e.data("method")){v(e)
return false}})
function f(n){var e=n.data("remove")
var a=n
var i=n.data("url")
var t=n.closest(":ui-popup").popup("option","trigger").data("KyleMenu")
t&&t.opts.appendMenuTo&&(a=t.$placeholder)
var o=a.closest(e)
o.bind({beforeremove:function(){o.hide()},remove:function(){o.remove()}})
o.trigger("beforeremove")
var u=function(){return o.trigger("remove")}
var s=function(){return o.show()}
i?_.a.ajaxJSON(i,"DELETE",{},u,s):u()}var p=a("lVr/")
_()(document).on("mousedown click keydown",".al-trigger",function(n){var e=_()(this)
if(e.data("kyleMenu"))return
var a=_.a.extend({noButton:true},e.data("kyleMenuOptions"))
e.data("append-to-body")&&(a.appendMenuTo="body")
a=_.a.extend(a,{popupOpts:{position:{my:e.data("popup-my"),at:e.data("popup-at"),within:e.data("popup-within")}}})
new p["a"](e,a)
e.trigger(n)})
a("TBRb")
function b(n){return function(){var e
var a=_()(this)
if(!(e=a.data("textWhileTarget".concat(n))))return
var i="textWhileTarget".concat("Hidden"===n?"Shown":"Hidden")
var t=a.data(i)
t||a.data(i,a.text())
a.text(e)}}function w(n,e,a){var i
null==e&&(e=n.is(":ui-dialog:hidden")||"true"!==n.attr("aria-expanded"))
var t=_()("[aria-controls*=".concat(n.attr("id"),"]"))
t.filter(function(){return _()(this).data("hideWhileTargetShown")}).toggle(!e)
if(a&&void 0!==a.attr("aria-expanded")){a.attr("aria-expanded",!("true"===a.attr("aria-expanded")))
n.toggle("true"===a.attr("aria-expanded"))}else n.attr("aria-expanded","".concat(e)).toggle(e)
if(n.is(":ui-dialog")||(i=n.data("turnIntoDialog"))){if(i&&e){i=_.a.extend({autoOpen:false,close:function(){w(n,false)}},i)
n.dialog(i).fixDialogButtons()}if(e){n.dialog("open")
n.data("read-on-open")&&n.dialog("widget").attr("aria-live","assertive").attr("aria-atomic","true")}else n.dialog("isOpen")&&n.dialog("close")}t.each(b(e?"Shown":"Hidden"))}var k={bind:function(){_()(document).on("click change keyclick",".element_toggler[aria-controls]",function(n){var e
var a=_()(this)
if(a.is('input[type="checkbox"]')){if("click"===n.type)return
e=a.prop("checked")}"click"===n.type&&n.preventDefault()
var i=a.closest(".user_content")
i.length||(i=_()(document.body))
var t=i.find("#".concat(a.attr("aria-controls").replace(/\s/g,", #")))
t.length&&w(t,e,a)
var o=a.find('i[class*="icon-mini-arrow"].auto_rotate')
if(o.length){o.toggleClass("icon-mini-arrow-down")
o.toggleClass("icon-mini-arrow-right")}})}}
k.bind()
var y=13
_()(document).on("keydown",".ic-Super-toggle__input",function(n){n.which===y&&_()(n.target).click()})
Object(s["a"])({"en-AU":{instructure_inline_media_comment:{alerts:{kaltura_disabled:"Kaltura has been disabled for this Canvas site"},links:{minimize_embedded_kaltura_content:"Minimise embedded content"}}},"en-AU-x-unimelb":{instructure_inline_media_comment:{alerts:{kaltura_disabled:"Kaltura has been disabled for this Canvas site"},links:{minimize_embedded_kaltura_content:"Minimise embedded content"}}},"en-CA":{instructure_inline_media_comment:{alerts:{kaltura_disabled:"Kaltura has been disabled for this Canvas site"},links:{minimize_embedded_kaltura_content:"Minimize embedded content"}}},"en-GB":{instructure_inline_media_comment:{alerts:{kaltura_disabled:"Kaltura has been disabled for this Canvas site"},links:{minimize_embedded_kaltura_content:"Minimise embedded content"}}},"en-GB-x-ukhe":{instructure_inline_media_comment:{alerts:{kaltura_disabled:"Kaltura has been disabled for this Canvas site"},links:{minimize_embedded_kaltura_content:"Minimise embedded content"}}},is:{instructure_inline_media_comment:{alerts:{kaltura_disabled:"Kaltura er óvirk á þessari Canvas-síðu"},links:{minimize_embedded_kaltura_content:"Lágmarka innfellt efni"}}},mi:{instructure_inline_media_comment:{alerts:{kaltura_disabled:"Kua monokia Kaltura mō tēnei pae Canvas"},links:{minimize_embedded_kaltura_content:"Whakamōkito ihirangi tāmau"}}},ru:{instructure_inline_media_comment:{alerts:{kaltura_disabled:"Kaltura отключено для этого сайта Canvas"},links:{minimize_embedded_kaltura_content:"Свернуть встроенное содержимое"}}}})
var M=u["default"].scoped("instructure_inline_media_comment")
a("f3bb")
var j={buildMinimizerLink:function(){return _()('<a href="#" style="font-size: 0.8em;">\n      '.concat(Object(l["a"])(M.t("links.minimize_embedded_kaltura_content","Minimize embedded content")),"\n    </a>"))},buildCommentHolder:function(n){return _()('<div><div class="innerholder" tabindex="-1" style="margin-bottom: 15px;"></div></div>')},getMediaCommentId:function(n){var e
var a=n.data("media_comment_id")||n.find(".media_comment_id:first").text()
a||(e=n.attr("id"))
e&&e.match(/^media_comment_/)&&(a=e.substring(14))
return a},collapseComment:function(n){V(n.find("video,audio").data("mediaelementplayer"),function(n){return n.pause()})
n.remove()
_.a.trackEvent("hide_embedded_content","hide_media")}}
var S=function(n){_()(n.target).find("div.mejs-audio").focus()}
var N=300
var x=function(n){var e=n.closest("td")
return e.length>0}
var A=function(n){var e=n.closest("td").css("width").replace("px","")
return e<N}
var C=function(n){return x(n)&&A(n)}
var H=function(n){var e=n.closest("td")
var a=e.css("width")
e.data("orig-width",a)
e.css("width","".concat(N,"px"))}
_()(document).on("click","a.instructure_inline_media_comment",Object(g["a"])(function(){if(!INST.kalturaSettings){alert(M.t("alerts.kaltura_disabled","Kaltura has been disabled for this Canvas site"))
return}var n=_()(this)
var e="video"
var a=j.getMediaCommentId(n)
var i=j.buildCommentHolder(n)
C(n)&&H(n)
n.after(i)
n.hide();("audio"===n.data("media_comment_type")||n.is(".audio_playback, .audio_comment, .instructure_audio_link"))&&(e="audio")
i.children("div").mediaComment("show_inline",a,e,n.data("download")||n.attr("href"))
var t=j.buildMinimizerLink()
t.appendTo(i).click(Object(g["a"])(function(){var e=n.closest("td")
n.show().focus()
e.css("width",e.data("orig-width"))
j.collapseComment(i)}))
_.a.trackEvent("show_embedded_content","show_media")
i.find(".innerholder").css("outline","none")
i.find(".innerholder").on("focus",S)}))
function V(n,e){return"undefined"!==typeof n&&null!==n?e(n):void 0}if(ENV.ping_url)var O=setInterval(function(){document.hidden||_.a.post(ENV.ping_url).fail(function(n){401===n.status&&clearInterval(O)})},18e4)
Object(s["a"])({ar:{locked_image_24f37a16:"صورة مؤمّنة"},cy:{locked_image_24f37a16:"Delwedd wedi’i chloi"},da:{locked_image_24f37a16:"Låst billede"},"da-x-k12":{locked_image_24f37a16:"Låst billede"},de:{locked_image_24f37a16:"Gesperrtes Bild"},"en-AU":{locked_image_24f37a16:"Locked image"},"en-AU-x-unimelb":{locked_image_24f37a16:"Locked image"},"en-CA":{locked_image_24f37a16:"Locked image"},"en-GB":{locked_image_24f37a16:"Locked image"},"en-GB-x-lbs":{locked_image_24f37a16:"Locked image"},"en-GB-x-ukhe":{locked_image_24f37a16:"Locked image"},es:{locked_image_24f37a16:"Imagen bloqueada"},fr:{locked_image_24f37a16:"Image verrouillée"},"fr-CA":{locked_image_24f37a16:"Image verrouillée"},ht:{locked_image_24f37a16:"Imaj Bloke"},is:{locked_image_24f37a16:"Læst mynd"},it:{locked_image_24f37a16:"Immagine bloccata"},ja:{locked_image_24f37a16:"ロックされた画像"},mi:{locked_image_24f37a16:"Āhua kua rakaina"},nb:{locked_image_24f37a16:"Låst bilde"},"nb-x-k12":{locked_image_24f37a16:"Låst bilde"},nl:{locked_image_24f37a16:"Vergrendelde afbeelding"},pl:{locked_image_24f37a16:"Zablokowany obraz"},pt:{locked_image_24f37a16:"Imagem bloqueada"},"pt-BR":{locked_image_24f37a16:"Imagem bloqueada"},ru:{locked_image_24f37a16:"Заблокированное изображение"},sl:{locked_image_24f37a16:"Zaklenjena slika"},sv:{locked_image_24f37a16:"Låst bild"},"sv-x-k12":{locked_image_24f37a16:"Låst bild"},"zh-Hans":{locked_image_24f37a16:"锁定图片"},"zh-Hant":{locked_image_24f37a16:"鎖定圖像"}})
var T=u["default"].scoped("broken_images")
function D(n){_()(n).on("error",function(n){n.currentTarget.src?_.a.get(n.currentTarget.src).fail(function(e){403===e.status?_()(n.currentTarget).attr({src:"/images/svg-icons/icon_lock.svg",alt:T.t("Locked image"),width:100,height:100}):_()(n.currentTarget).addClass("broken-image")}):_()(n.currentTarget).addClass("broken-image")})}function W(){_()('img[src!=""]').toArray().forEach(D)}_()(document).ready(function(){return W()})
var z=a("1OyB")
var L=a("vuIU")
var G=".lti-thumbnail-launch"
function I(n){n.preventDefault()
E.launch(_()(n.target).closest(G))}var K=function(){function n(){Object(z["a"])(this,n)
_()(document.body).delegate(G,"click",I)}Object(L["a"])(n,[{key:"launch",value:function(n){var e=JSON.parse(n.attr("target"))
var a=_()("<iframe/>",{src:n.attr("href"),allowfullscreen:"",width:e.displayWidth||500,height:e.displayHeight||500})
n.replaceWith(a)}}])
return n}()
var E=new K(G)
_()("#skip_navigation_link").on("click",Object(g["a"])(function(){_()(_()(this).attr("href")).attr("tabindex",-1).focus()}))
var B=1200
function P(){var n=_()("body").hasClass("course-menu-expanded")||_()(document).width()>=B-15?0:-1
_()("#section-tabs li a").attr("tabIndex",n)}_()(P)
_()(window).on("resize",t.a.debounce(P,50))
_()("body").on("click","#courseMenuToggle",function(){_()("body").toggleClass("course-menu-expanded")
c()
_()("#left-side").css({display:_()("body").hasClass("course-menu-expanded")?"block":"none"})
P()})}}])

//# sourceMappingURL=545-c-d731ff96a5.js.map