(function(e){function t(t){var n=t[0]
var a=t[1]
var i,o,s=0,u=[]
for(;s<n.length;s++){o=n[s]
r[o]&&u.push(r[o][0])
r[o]=0}for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])
l&&l(t)
while(u.length)u.shift()()}var n={}
var r={330:0}
function a(e){return i.p+""+({215:"account_admin_tools",216:"account_course_user_search",217:"account_grading_standards",218:"account_search",219:"account_settings",220:"account_show",221:"account_statistics",222:"act_as_modal",223:"add_course_or_user",224:"alerts",225:"all_courses",226:"analytics-course",227:"analytics-department",228:"analytics-student_in_course",229:"announcements_index_v2",230:"announcements_on_home_page",231:"assignment_edit",232:"assignment_grade_summary",233:"assignment_index",234:"assignment_show",235:"assignments_2_show_student",236:"assignments_2_show_teacher",237:"authentication_providers",238:"blueprint_course_child",239:"blueprint_course_master",240:"brand_configs_index",241:"calendar2",242:"calendar_appointment_group_edit",243:"canvas-rce-async-chunk",244:"canvas-rce-old-async-chunk",245:"catalog_provisioner-domains",246:"change_password",247:"choose_mastery_path",248:"collaborations",249:"conferences",250:"confirm_email",251:"content_exports",252:"content_migration",253:"content_notices",254:"context_module_progressions",255:"context_modules",256:"conversations_new",257:"copy_course",258:"course",259:"course_grading_standards",260:"course_link_validator",261:"course_list",262:"course_settings",263:"course_statistics",264:"course_wizard",265:"dashboard",266:"dashboard_card",267:"deep_linking_response",268:"demo_site-demo_site_overlay",269:"demo_site-demos_add",270:"demo_site-demos_analytics_tracking",271:"demo_site-demos_recaptcha",272:"demo_site-demos_registration_stats",273:"demo_site-demos_reports_graph",274:"demo_site-demos_reports_index",275:"demo_site-registration_modal",276:"developer_keys",277:"developer_keys_react",278:"discussion",279:"discussion_topics_edit",280:"discussion_topics_index_v2",281:"edit_calendar_event",282:"edit_rubric",283:"eportfolio",284:"epub_exports",285:"external_apps",286:"external_tool_redirect",287:"file_inline",288:"file_not_found_bundle",289:"file_preview",290:"file_show",291:"focus_helper",292:"grade_summary",293:"gradebook",294:"gradebook_history",295:"gradebook_uploads",296:"gradezilla",297:"graphiql",298:"group_submission_reminder",299:"instructure_misc_plugin-mobile_verify",300:"jobs",301:"ldap_settings_test",302:"learning_outcomes",303:"legacy/assignments_peer_reviews",304:"legacy/context_media_object_inline",305:"legacy/context_roster_usage",306:"legacy/context_roster_user",307:"legacy/context_roster_user_services",308:"legacy/context_undelete_item",309:"legacy/courses_show",310:"legacy/eportfolios_wizard_box",311:"legacy/error_form",312:"legacy/external_content_cancel",313:"legacy/external_content_success",314:"legacy/external_tools_tool_show",315:"legacy/inlined_preview",316:"legacy/quiz_submission",317:"legacy/rubrics_index",318:"legacy/rubrics_show",319:"legacy/submissions_show_preview_media",320:"legacy/submissions_show_preview_text",321:"legacy/submissions_show_preview_upload",322:"legacy/terms_index",323:"legacy/user_outcome_results",324:"legacy/users_admin_merge",325:"legacy/users_index",326:"license_help",327:"link_enrollment",328:"locale",329:"login",331:"manage_avatars",332:"manage_groups2",333:"mediaCommentRecordAsyncChunk",334:"messages",335:"migration_tool-bulk_course_migrations_index",336:"migration_tool-content_imports_angel_config",337:"migration_tool-content_imports_blackboard_config",338:"migration_tool-content_imports_d2l_config",339:"migration_tool-content_imports_webct_config",340:"mobile_login",341:"moderate_quiz",342:"module_sequence_footer",343:"moment/locale/af",344:"moment/locale/ar",345:"moment/locale/ar-dz",346:"moment/locale/ar-kw",347:"moment/locale/ar-ly",348:"moment/locale/ar-ma",349:"moment/locale/ar-sa",350:"moment/locale/ar-tn",351:"moment/locale/az",352:"moment/locale/be",353:"moment/locale/bg",354:"moment/locale/bm",355:"moment/locale/bn",356:"moment/locale/bo",357:"moment/locale/br",358:"moment/locale/bs",359:"moment/locale/ca",360:"moment/locale/cs",361:"moment/locale/cv",362:"moment/locale/cy",363:"moment/locale/da",364:"moment/locale/de",365:"moment/locale/de-at",366:"moment/locale/de-ch",367:"moment/locale/dv",368:"moment/locale/el",369:"moment/locale/en-SG",370:"moment/locale/en-au",371:"moment/locale/en-ca",372:"moment/locale/en-gb",373:"moment/locale/en-ie",374:"moment/locale/en-il",375:"moment/locale/en-nz",376:"moment/locale/eo",377:"moment/locale/es",378:"moment/locale/es-do",379:"moment/locale/es-us",380:"moment/locale/et",381:"moment/locale/eu",382:"moment/locale/fa",383:"moment/locale/fi",384:"moment/locale/fo",385:"moment/locale/fr",386:"moment/locale/fr-ca",387:"moment/locale/fr-ch",388:"moment/locale/fy",389:"moment/locale/ga",390:"moment/locale/gd",391:"moment/locale/gl",392:"moment/locale/gom-latn",393:"moment/locale/gu",394:"moment/locale/he",395:"moment/locale/hi",396:"moment/locale/hr",397:"moment/locale/ht-ht",398:"moment/locale/hu",399:"moment/locale/hy-am",400:"moment/locale/id",401:"moment/locale/is",402:"moment/locale/it",403:"moment/locale/it-ch",404:"moment/locale/ja",405:"moment/locale/jv",406:"moment/locale/ka",407:"moment/locale/kk",408:"moment/locale/km",409:"moment/locale/kn",410:"moment/locale/ko",411:"moment/locale/ku",412:"moment/locale/ky",413:"moment/locale/lb",414:"moment/locale/lo",415:"moment/locale/lt",416:"moment/locale/lv",417:"moment/locale/me",418:"moment/locale/mi",419:"moment/locale/mi-nz",420:"moment/locale/mk",421:"moment/locale/ml",422:"moment/locale/mn",423:"moment/locale/mr",424:"moment/locale/ms",425:"moment/locale/ms-my",426:"moment/locale/mt",427:"moment/locale/my",428:"moment/locale/nb",429:"moment/locale/ne",430:"moment/locale/nl",431:"moment/locale/nl-be",432:"moment/locale/nn",433:"moment/locale/pa-in",434:"moment/locale/pl",435:"moment/locale/pt",436:"moment/locale/pt-br",437:"moment/locale/ro",438:"moment/locale/ru",439:"moment/locale/sd",440:"moment/locale/se",441:"moment/locale/si",442:"moment/locale/sk",443:"moment/locale/sl",444:"moment/locale/sq",445:"moment/locale/sr",446:"moment/locale/sr-cyrl",447:"moment/locale/ss",448:"moment/locale/sv",449:"moment/locale/sw",450:"moment/locale/ta",451:"moment/locale/te",452:"moment/locale/tet",453:"moment/locale/tg",454:"moment/locale/th",455:"moment/locale/tl-ph",456:"moment/locale/tlh",457:"moment/locale/tr",458:"moment/locale/tzl",459:"moment/locale/tzm",460:"moment/locale/tzm-latn",461:"moment/locale/ug-cn",462:"moment/locale/uk",463:"moment/locale/ur",464:"moment/locale/uz",465:"moment/locale/uz-latn",466:"moment/locale/vi",467:"moment/locale/x-pseudo",468:"moment/locale/yo",469:"moment/locale/zh-cn",470:"moment/locale/zh-hk",471:"moment/locale/zh-tw",472:"multiple_root_accounts-additional_settings",473:"multiple_root_accounts-plugin_settings",474:"multiple_root_accounts-root_account_details",475:"multiple_root_accounts-root_accounts_create_form",476:"multiple_root_accounts-suspended_account_warning",477:"navigation_header",478:"notification_preferences",479:"oauth2_confirm",480:"otp_login",481:"page_views",482:"permissions_index",483:"plugins",484:"prerequisites_lookup",485:"profile",486:"profile_show",487:"progress_pill",488:"question_bank",489:"question_banks",490:"quiz_history",491:"quiz_show",492:"quiz_statistics_cqs",493:"quiz_submission_events",494:"quizzes_bundle",495:"quizzes_index",496:"react_collaborations",497:"react_files",498:"react_groups",499:"react_outcome_alignment",500:"registration",501:"registration_confirmation",502:"roster",503:"rubric_assessment",504:"screenreader_gradebook",505:"section",506:"select_content_dialog",507:"self_enrollment",508:"sis_import",509:"slickgrid",510:"speed_grader",511:"student_group_dialog",512:"styleguide",513:"sub_accounts",514:"submission_download",515:"submissions",516:"submit_assignment",517:"syllabus",518:"take_quiz",519:"teacher_activity_report",520:"terms_of_service_modal",521:"terms_of_use",522:"theme_editor",523:"theme_preview",524:"user",525:"user_grades",526:"user_lists",527:"user_logins",528:"user_name",529:"user_notes",530:"user_observees",531:"visibility_help",532:"webzip_export",533:"wiki_page_edit",534:"wiki_page_index",535:"wiki_page_revisions",536:"wiki_page_show"}[e]||e)+"-c-"+{0:"ab77cce1c6",1:"db5bff0cfd",2:"0a0bac5a90",3:"5910273d10",4:"467a49cc66",5:"8b1ea6676e",6:"79a669ba53",7:"1285455918",8:"1f98861b9a",9:"28450f9cc2",10:"3f3ec3610e",11:"54fbda00e4",12:"d5fa3eaf9d",13:"b053df79d3",14:"4fe10a3dd4",15:"e2ad3e16a7",16:"fa7f8dabc5",17:"d428bd2d3f",18:"499e3e8500",19:"fbc3e2a266",20:"90fdeaf506",21:"7c9d53b54d",22:"92d33b7efb",23:"91d98461dd",24:"3928dd771e",25:"67150d02e9",26:"41b2f821eb",27:"5649da4e4e",28:"c415077922",29:"cc127d9375",30:"009a0a4e34",31:"70cb1c0e46",32:"a3909031b6",33:"3dfc0e3a59",34:"93a6c54bff",35:"48f9dce489",36:"5ae658b260",37:"de6ac1b673",38:"7ded229da1",39:"f1c9bde669",40:"540632c4db",41:"d19e436706",42:"96c905048d",43:"125a013755",44:"8582a9d3e4",45:"3cb32feaf2",46:"91be6c1f0d",47:"c200bb35a8",48:"4698a713ed",49:"fe797356d0",50:"35e36efe2d",51:"8de7d2d6f8",52:"e62a80b9be",53:"7e2dc812e1",54:"0d389d4bd0",55:"eb795e4cfb",56:"a993a481bc",57:"f3c5e5935c",58:"34a43ba774",59:"8794bc34a8",60:"c09e4f6371",61:"05c3efc5ab",62:"1e3c79f865",63:"700dac6913",64:"75b4f8023f",65:"08f78b9ccc",66:"29d80fd2e9",67:"9ad4b084e2",68:"1e34a7417b",69:"d8ea985c47",70:"6d2408c52b",71:"3d9c4ef3ba",72:"53a9a23adf",73:"5bcdfd3220",74:"3d6f418b58",75:"54f14933f8",76:"f9995c9dad",77:"d435bff16a",78:"a232722d5d",79:"dc7fbfed4f",80:"83a837a38f",81:"2a33939544",82:"cb94bd56ed",83:"b4d31b45db",84:"f1cd53ab33",85:"e3fed41fe4",86:"847e4eef0c",87:"bd680074ec",88:"161d884d18",89:"52ba9504e0",90:"33d44aaf0c",91:"c707756826",92:"efb20b0cf3",93:"660a0f9742",94:"940790bbe6",95:"d0207b5613",96:"0779d43d98",97:"23f29efb47",98:"a32536745f",99:"f13e12c878",100:"006bf00084",101:"bf79c9e4fb",102:"f8deadaf58",103:"adf551af4e",104:"6f8557655f",105:"9e29699a9e",106:"f8088c8016",107:"b49da9812c",108:"c8a2bfbc3e",109:"44b4837a80",110:"3fa47d714a",111:"5ceeb9fe1c",112:"b04b8d8f2d",113:"ed0f827c1d",114:"50cadc7b74",115:"42e908811e",116:"1492bd97d4",117:"42f295eab8",118:"7b6fe8830a",119:"5a40451181",120:"81525df1a0",121:"fb8698da16",122:"70cff8a839",123:"23290ab2b2",124:"c280d67c62",125:"a9eab0dc82",126:"ab1850d1f2",127:"4d9e95ef74",128:"982d2e0bf8",129:"82fa251078",130:"7b09a7403c",131:"27a98ce2b2",132:"1e9c902362",133:"4e196a9436",134:"e465166228",135:"e76420581c",136:"e8451c3694",137:"f42b36881a",138:"8f84515897",139:"fe8e7cd354",140:"ca3222c4b1",141:"09d79e978d",142:"7de30764ed",143:"cee556f629",144:"2a1294208b",145:"7fd6238db0",146:"e4b27a6e7a",147:"7d5117f6c9",148:"1fc51e6ddc",149:"594620d004",150:"fb6a334d38",151:"04c4e33794",152:"1ece361bb0",153:"57c1a25e54",154:"d7132c83a6",155:"e7ee0c0ce1",156:"fea9fe5b1c",157:"0c71a8d27d",158:"9fe662b35f",159:"37a5e380ef",160:"6fe5632765",161:"56b7d038f1",162:"8fb87188ca",163:"d43b1f2a03",164:"1481e6bf40",165:"e79c947af0",166:"70c7173501",167:"fb63adf67e",168:"9be6b69c6e",169:"af7fb73c4c",170:"beff90da3e",171:"9e13a55a7b",172:"829c1d3ad3",173:"cf3ea3d31b",174:"3e5def1f4e",175:"292d1b6690",176:"4ed2a3a336",177:"ec3da12155",178:"8bd8c09cda",179:"d7d293128d",180:"3d492c194b",181:"3f74c1a0d9",182:"3ffda1c956",183:"90e74b8d31",184:"710d6372b7",185:"17e66bc50f",186:"aeb2914270",187:"116d860af4",188:"af44fbd4cd",189:"b4c7676002",190:"c95fa78848",191:"232a8526ac",192:"9b8ff3f702",193:"8c27ab4104",194:"0042be54be",195:"d946a2bf23",196:"591a7ee61e",197:"259e60356d",198:"b9cd0345fe",199:"26cd42513b",200:"ceafccd3a3",201:"096ac1e8e5",202:"8bf9208f83",203:"502f221ce0",204:"8a02817bdb",205:"b49a7a36f3",206:"1713201552",207:"3f21fc14dc",208:"f0fe71a244",209:"f219dca94f",210:"a5697d35c4",211:"604e8134dd",212:"6aa9b44240",213:"a59ac558a2",214:"11144200e2",215:"e1c3ff68ca",216:"28eecdd26f",217:"b6c52cad71",218:"88216c41a5",219:"806b2afaba",220:"d61c09b551",221:"21f60925bc",222:"d34edaef24",223:"bca23b52fb",224:"8cc5ec604c",225:"8390e21152",226:"e17ac5401f",227:"86e0e23380",228:"ec75baf5e9",229:"3af00ca56a",230:"86310271bf",231:"a3568dea15",232:"85b6eff260",233:"c4bc69920a",234:"1e9429c312",235:"c505b67ca9",236:"7e7ca2c3a9",237:"60dc10f063",238:"49d95c786b",239:"1500332582",240:"b4770b7b68",241:"37e693e299",242:"810a1d9c98",243:"2ac34ddfda",244:"d58f0c155e",245:"8679780ff0",246:"296bb98475",247:"72f60b904a",248:"6138b38621",249:"fc688b8863",250:"f180d10f1a",251:"a025a96798",252:"c96a4b03ea",253:"e44a25949c",254:"70a4ee7e94",255:"06b915f9e4",256:"4a1328c693",257:"0d82b616c3",258:"53f94327c8",259:"223ca4df84",260:"b21265a72f",261:"c95cf6d53f",262:"5fcb92d902",263:"6b14556031",264:"17de8292d1",265:"ad2bda4e20",266:"223c74e274",267:"b7e83920f3",268:"960d5a210c",269:"39606ec3ca",270:"815c8885a9",271:"01d7197b73",272:"100a241814",273:"832dcf9351",274:"6937166529",275:"cfb3e12af5",276:"0d2de4bc8f",277:"af560f943a",278:"692f860174",279:"8bf4ade6ce",280:"22e6dd98b1",281:"15be005d98",282:"0952fe2c07",283:"9af60d41f4",284:"d33449363c",285:"d11f38c04a",286:"1f40a3ebc7",287:"1dfbf9921e",288:"1c511f86f6",289:"3c3176668b",290:"6baa10c349",291:"cc64b69aac",292:"39ae367c5a",293:"8014d2c6d7",294:"6bf1d6b096",295:"8ca83b3737",296:"bbbe6dca8f",297:"20edbc5745",298:"a52a6e03cf",299:"a67c93bb7c",300:"f6ea9faebb",301:"4821296517",302:"5a97438826",303:"6d31959d05",304:"6c84e49c14",305:"4332f74b89",306:"6b88f8b36d",307:"cb10ddb497",308:"1dfde24ebe",309:"c69fcccd89",310:"f0d2c49d39",311:"2411903dda",312:"c36a1cbe1c",313:"d22fd9d4c1",314:"0e2da95218",315:"a2c65712ed",316:"65976bb5aa",317:"33579bef97",318:"ad2abc77c4",319:"76391ae232",320:"30d379f333",321:"ce95ce0e72",322:"94f712ad93",323:"d39951190d",324:"54601fa508",325:"e666c73c21",326:"af500afb40",327:"1a2dfe3a9b",328:"79dbd9ce59",329:"b01e7d3409",331:"a58febc359",332:"eb0c2f85ac",333:"41af97569f",334:"6494d51dca",335:"850a0bb0f8",336:"fab7abfd25",337:"03bc4741aa",338:"3ec80ac514",339:"d570346c6c",340:"3fffd59987",341:"e0140a73c8",342:"587dfae99b",343:"90ec960378",344:"a2919bfbd6",345:"a7ac5812da",346:"010708c83e",347:"b67bfd86a3",348:"2ebf6bb49f",349:"b44a66a0f9",350:"854a9fd92f",351:"46be2c6015",352:"821dd5218e",353:"258fd78e7d",354:"2fb05a76bb",355:"3249f4902a",356:"52b3e61b50",357:"fcf6b0f569",358:"47e1d51253",359:"eef525def6",360:"191e960246",361:"6f16febca2",362:"fc29f8223f",363:"ec1ea6cadf",364:"5ddb7c33f3",365:"25cca7e834",366:"4049458a57",367:"e4f0a30c2b",368:"7819a49d3d",369:"c3ad26b20f",370:"a0da27190b",371:"9f19f92562",372:"3df76db4de",373:"a49c021a64",374:"9ae6a34e17",375:"97fa823231",376:"16cdc6860d",377:"a2fd9d9754",378:"222808c78f",379:"29e4724749",380:"ce40b2ce0b",381:"66def6a6fd",382:"5216bfc1b4",383:"67f72ef436",384:"121aa2bfa9",385:"4e27ab0635",386:"d9d20ce06f",387:"b47f4d9b5b",388:"44dc91a3bd",389:"138848937f",390:"5c479979ca",391:"dc449fd7c1",392:"ec46e896e7",393:"16a1a5e8ae",394:"a182b5b32d",395:"99940f37ab",396:"56271a33e0",397:"e079957253",398:"ce644305e1",399:"49436421d4",400:"ad1cac9a57",401:"62cbfd324c",402:"d9e048dae3",403:"01cf6a2cb6",404:"6ff596371d",405:"18aa14dcbd",406:"ad302bed6d",407:"07c90bdfe0",408:"e8e212c00b",409:"cb753d43ea",410:"606ecb1c14",411:"7a40ff329b",412:"8cf30844c9",413:"15ddc327a2",414:"d734981d7a",415:"3de19e02a6",416:"fef1ceb65d",417:"64e3f5be1f",418:"0d9f3c43f8",419:"c3634b1296",420:"c091542b60",421:"dffb1731dc",422:"bb83c817a7",423:"a8614ba71a",424:"7024653979",425:"7699863905",426:"0d2214d459",427:"9d1343faa9",428:"edb59f7faa",429:"f0bde3642f",430:"a0418cdfaa",431:"cb9d20eb4c",432:"6e5728eb8c",433:"91b47b4870",434:"1a0094b894",435:"5f6fd26f6f",436:"be479c2584",437:"40eda265d0",438:"e13bd0521c",439:"476e31ba3e",440:"45a4b0a57f",441:"c1a6cb2914",442:"86aaff1d08",443:"f7a0836592",444:"71ae097f83",445:"b8d5d9e578",446:"0c7c148d98",447:"e31a989ea3",448:"1a701dfded",449:"0987434a75",450:"cda5a05773",451:"f934944c2a",452:"7e6a5e4538",453:"4c0a15109f",454:"e6b8b2e5ef",455:"5a83e5b4a5",456:"08a04a94f3",457:"1014668123",458:"48b4e9cc23",459:"817b404454",460:"76a75aaa25",461:"2ecfcc8f0d",462:"a73602e011",463:"f1a7812070",464:"54d07e1ef7",465:"93d5f23df4",466:"0b18086991",467:"e3561ec5a8",468:"7d617dc9dd",469:"4e4cc7b15b",470:"4e52de5233",471:"a0de4623af",472:"31b90947fd",473:"a6f19131be",474:"7827302b4d",475:"5862e13b07",476:"bd020fd21f",477:"dc2f68b956",478:"730fab4581",479:"d395222e35",480:"8cf722dac0",481:"6da0690c15",482:"9ba6b6798e",483:"bd0afad20b",484:"e0a9f38e1f",485:"b321658eaa",486:"fb9c26c470",487:"b255953cef",488:"76869b4681",489:"1aeca41693",490:"abe8fc7abe",491:"de5386d9a2",492:"2ed6bd20b8",493:"fc855c0b37",494:"39ce36530e",495:"23d3182185",496:"43a8cca4f6",497:"3462e83add",498:"f729ee8b65",499:"79afc623c6",500:"23b2673cfa",501:"513d684195",502:"8e2a31cee6",503:"3074416f40",504:"98cb84140a",505:"7d6a2f2435",506:"6d644c5820",507:"4dd4279ac5",508:"1f8d8befaa",509:"3b57398795",510:"e180912659",511:"54959ab2f0",512:"f53193f53a",513:"6b3ab32501",514:"789d3cd92a",515:"b1c76fe0a5",516:"8579daf7c5",517:"504f624687",518:"a397501a3f",519:"b95997c05e",520:"e8dfdcae2c",521:"b850f1a36d",522:"089bdab88a",523:"22e22cda0f",524:"4cf49c7f09",525:"36f428e9df",526:"98e7d40892",527:"790845c5bb",528:"2f0fda13df",529:"7235442ca7",530:"bf48bbc5dd",531:"9da65b0780",532:"eb2150541f",533:"71c5b2620d",534:"31f6a56cd6",535:"61e64d395d",536:"b55b9cc56b",537:"76a40450d3",538:"2d7b3e7b22",539:"1f6e21f42a",540:"eeb97306da",541:"9b930e9bb1",542:"964f904761",543:"e4c6cbb086",544:"171303a5ca",545:"d731ff96a5",546:"ae4bce4a0e",547:"3026e3f11d",548:"378836907c",549:"b711512955",550:"bc350632b2",551:"d7e8578ab6",552:"32f2426e0d",553:"72025a8443",554:"28608e53ca",555:"ab96fcae62",556:"662733c9b1",557:"c921c2e89f",558:"d27728cefa",559:"b25aa51d8d",560:"0f4e7277d4",561:"9807328ffd",562:"388df3f8b0",563:"bbe215e0c8",564:"b291509a96",565:"ef3fb8d8be",566:"6c71084fb6",567:"100bd9bfdc",568:"68cfba3067"}[e]+".js"}function i(t){if(n[t])return n[t].exports
var r=n[t]={i:t,l:false,exports:{}}
e[t].call(r.exports,r,r.exports,i)
r.l=true
return r.exports}i.e=function(e){var t=[]
var n=r[e]
if(0!==n)if(n)t.push(n[2])
else{var o=new Promise(function(t,a){n=r[e]=[t,a]})
t.push(n[2]=o)
var s=document.createElement("script")
var u
s.charset="utf-8"
s.timeout=120
i.nc&&s.setAttribute("nonce",i.nc)
s.src=a(e)
var l=new Error
u=function(t){s.onerror=s.onload=null
clearTimeout(c)
var n=r[e]
if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type)
var i=t&&t.target&&t.target.src
l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")"
l.type=a
l.request=i
n[1](l)}r[e]=void 0}}
var c=setTimeout(function(){u({type:"timeout",target:s})},12e4)
s.onerror=s.onload=u
document.head.appendChild(s)}return Promise.all(t)}
i.m=e
i.c=n
i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:true,get:n})}
i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
Object.defineProperty(e,"__esModule",{value:true})}
i.t=function(e,t){1&t&&(e=i(e))
if(8&t)return e
if(4&t&&"object"===typeof e&&e&&e.__esModule)return e
var n=Object.create(null)
i.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r))
return n}
i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e}
i.d(t,"a",t)
return t}
i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
i.p=""
i.oe=function(e){console.error(e)
throw e}
var o=window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]
var s=o.push.bind(o)
o.push=t
o=o.slice()
for(var u=0;u<o.length;u++)t(o[u])
var l=s
i(i.s="nwc5")})({"+OyF":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=t.variables=t.brandVariables=t.baseVariables=t.key=void 0
var a=r(n("MVZn"))
var i=n("seZM")
var o=r(n("M7Ji"))
var s=r(n("rjKU"))
var u=r(n("nM38"))
var l=r(n("PIlc"))
var c=r(n("hr2o"))
var d=r(n("uTue"))
var f=r(n("vJmb"))
var h=r(n("In4X"))
var m=r(n("sW1j"))
var p=r(n("4ynT"))
var _=r(n("Fpyj"))
var g=o.default.CANVAS
t.key=g
var y={borders:s.default,colors:u.default,transitions:l.default,typography:c.default,spacing:d.default,forms:f.default,media:h.default,breakpoints:m.default,shadows:p.default,stacking:_.default}
t.baseVariables=y
var v={"ic-brand-primary":u.default.textBrand,"ic-brand-font-color-dark":u.default.textDarkest,"ic-link-color":u.default.textLink,"ic-link-decoration":"none","ic-brand-button--primary-bgd":u.default.backgroundBrand,"ic-brand-button--primary-text":u.default.textLightest,"ic-brand-button--secondary-bgd":u.default.backgroundDarkest,"ic-brand-button--secondary-text":u.default.textLightest,"ic-brand-global-nav-bgd":u.default.backgroundBrandSecondary,"ic-global-nav-link-hover":u.default.backgroundDarkest,"ic-brand-global-nav-ic-icon-svg-fill":u.default.textLightest,"ic-brand-global-nav-ic-icon-svg-fill--active":u.default.textBrand,"ic-brand-global-nav-menu-item__text-color":u.default.textLightest,"ic-brand-global-nav-menu-item__text-color--active":u.default.textBrand}
t.brandVariables=v
var b=(0,a.default)({},y,v)
t.variables=b
var w=(0,i.registerTheme)({key:o.default.CANVAS,variables:b})
t.default=w},"+wdc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0})
var n=null,r=!1,a=3,i=-1,o=-1,s=!1,u=!1
function l(){if(!s){var e=n.expirationTime
u?x():u=!0
k(f,e)}}function c(){var e=n,t=n.next
if(n===t)n=null
else{var r=n.previous
n=r.next=t
t.previous=r}e.next=e.previous=null
r=e.callback
t=e.expirationTime
e=e.priorityLevel
var i=a,s=o
a=e
o=t
try{var u=r()}finally{a=i,o=s}if("function"===typeof u)if(u={callback:u,priorityLevel:e,expirationTime:t,next:null,previous:null},null===n)n=u.next=u.previous=u
else{r=null
e=n
do{if(e.expirationTime>=t){r=e
break}e=e.next}while(e!==n)
null===r?r=n:r===n&&(n=u,l())
t=r.previous
t.next=r.previous=u
u.next=r
u.previous=t}}function d(){if(-1===i&&null!==n&&1===n.priorityLevel){s=!0
try{do{c()}while(null!==n&&1===n.priorityLevel)}finally{s=!1,null!==n?l():u=!1}}}function f(e){s=!0
var a=r
r=e
try{if(e)for(;null!==n;){var i=t.unstable_now()
if(!(n.expirationTime<=i))break
do{c()}while(null!==n&&n.expirationTime<=i)}else if(null!==n)do{c()}while(null!==n&&!M())}finally{s=!1,r=a,null!==n?l():u=!1,d()}}var h,m,p=Date,_="function"===typeof setTimeout?setTimeout:void 0,g="function"===typeof clearTimeout?clearTimeout:void 0,y="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,v="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0
function b(e){h=y(function(t){g(m)
e(t)})
m=_(function(){v(h)
e(t.unstable_now())},100)}if("object"===typeof performance&&"function"===typeof performance.now){var w=performance
t.unstable_now=function(){return w.now()}}else t.unstable_now=function(){return p.now()}
var k,x,M,T=null
"undefined"!==typeof window?T=window:"undefined"!==typeof e&&(T=e)
if(T&&T._schedMock){var D=T._schedMock
k=D[0]
x=D[1]
M=D[2]
t.unstable_now=D[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var E=null,S=function(e){if(null!==E)try{E(e)}finally{E=null}}
k=function(e){null!==E?setTimeout(k,0,e):(E=e,setTimeout(S,0,!1))}
x=function(){E=null}
M=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof y&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof v&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"))
var C=null,P=!1,O=-1,j=!1,A=!1,N=0,z=33,I=33
M=function(){return N<=t.unstable_now()}
var L=new MessageChannel,B=L.port2
L.port1.onmessage=function(){P=!1
var e=C,n=O
C=null
O=-1
var r=t.unstable_now(),a=!1
if(0>=N-r){if(!(-1!==n&&n<=r)){j||(j=!0,b(R))
C=e
O=n
return}a=!0}if(null!==e){A=!0
try{e(a)}finally{A=!1}}}
var R=function(e){if(null!==C){b(R)
var t=e-N+I
t<I&&z<I?(8>t&&(t=8),I=t<z?z:t):z=t
N=e+I
P||(P=!0,B.postMessage(void 0))}else j=!1}
k=function(e,t){C=e
O=t
A||0>t?B.postMessage(void 0):j||(j=!0,b(R))}
x=function(){C=null
P=!1
O=-1}}t.unstable_ImmediatePriority=1
t.unstable_UserBlockingPriority=2
t.unstable_NormalPriority=3
t.unstable_IdlePriority=5
t.unstable_LowPriority=4
t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var r=a,o=i
a=e
i=t.unstable_now()
try{return n()}finally{a=r,i=o,d()}}
t.unstable_next=function(e){switch(a){case 1:case 2:case 3:var n=3
break
default:n=a}var r=a,o=i
a=n
i=t.unstable_now()
try{return e()}finally{a=r,i=o,d()}}
t.unstable_scheduleCallback=function(e,r){var o=-1!==i?i:t.unstable_now()
if("object"===typeof r&&null!==r&&"number"===typeof r.timeout)r=o+r.timeout
else switch(a){case 1:r=o+-1
break
case 2:r=o+250
break
case 5:r=o+1073741823
break
case 4:r=o+1e4
break
default:r=o+5e3}e={callback:e,priorityLevel:a,expirationTime:r,next:null,previous:null}
if(null===n)n=e.next=e.previous=e,l()
else{o=null
var s=n
do{if(s.expirationTime>r){o=s
break}s=s.next}while(s!==n)
null===o?o=n:o===n&&(n=e,l())
r=o.previous
r.next=o.previous=e
e.next=o
e.previous=r}return e}
t.unstable_cancelCallback=function(e){var t=e.next
if(null!==t){if(t===e)n=null
else{e===n&&(n=t)
var r=e.previous
r.next=t
t.previous=r}e.next=e.previous=null}}
t.unstable_wrapCallback=function(e){var n=a
return function(){var r=a,o=i
a=n
i=t.unstable_now()
try{return e.apply(this,arguments)}finally{a=r,i=o,d()}}}
t.unstable_getCurrentPriorityLevel=function(){return a}
t.unstable_shouldYield=function(){return!r&&(null!==n&&n.expirationTime<o||M())}
t.unstable_continueExecution=function(){null!==n&&l()}
t.unstable_pauseExecution=function(){}
t.unstable_getFirstCallbackNode=function(){return n}}).call(this,n("yLpj"))},"0CO7":function(e,t,n){e.exports="/dist/webpack-production/"},"0WdF":function(e,t,n){var r
a=this,i=function(e){"use strict"
var t=e&&e.I18n||{}
var n=Array.prototype.slice
var r=function(e){return("0"+e.toString()).substr(-2)}
var a=function(e,t){return h("round",e,-t).toFixed(t)}
var i=function(e){var t=typeof e
return"function"===t||"object"===t}
var o=function(e){var t=typeof e
return"function"===t}
var s=function(e){return"undefined"!==typeof e&&null!==e}
var u=function(e){if(Array.isArray)return Array.isArray(e)
return"[object Array]"===Object.prototype.toString.call(e)}
var l=function(e){return"string"===typeof e||"[object String]"===Object.prototype.toString.call(e)}
var c=function(e){return"number"===typeof e||"[object Number]"===Object.prototype.toString.call(e)}
var d=function(e){return true===e||false===e}
var f=function(e){return null===e}
var h=function(e,t,n){if("undefined"===typeof n||0===+n)return Math[e](t)
t=+t
n=+n
if(isNaN(t)||!("number"===typeof n&&n%1===0))return NaN
t=t.toString().split("e")
t=Math[e](+(t[0]+"e"+(t[1]?+t[1]-n:-n)))
t=t.toString().split("e")
return+(t[0]+"e"+(t[1]?+t[1]+n:n))}
var m=function(e,t){return o(e)?e(t):e}
var p=function(e,t){var n,r
for(n in t)if(t.hasOwnProperty(n)){r=t[n]
if(l(r)||c(r)||d(r)||u(r)||f(r))e[n]=r
else{null==e[n]&&(e[n]={})
p(e[n],r)}}return e}
var _={day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridian:["AM","PM"]}
var g={precision:3,separator:".",delimiter:",",strip_insignificant_zeros:false}
var y={unit:"$",precision:2,format:"%u%n",sign_first:true,delimiter:",",separator:"."}
var v={unit:"%",precision:3,format:"%n%u",separator:".",delimiter:""}
var b=[null,"kb","mb","gb","tb"]
var w={defaultLocale:"en",locale:"en",defaultSeparator:".",placeholder:/(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,fallbacks:false,translations:{},missingBehaviour:"message",missingTranslationPrefix:""}
t.reset=function(){var e
for(e in w)this[e]=w[e]}
t.initializeOptions=function(){var e
for(e in w)s(this[e])||(this[e]=w[e])}
t.initializeOptions()
t.locales={}
t.locales.get=function(e){var n=this[e]||this[t.locale]||this["default"]
o(n)&&(n=n(e))
false===u(n)&&(n=[n])
return n}
t.locales["default"]=function(e){var n=[],r=[]
e&&n.push(e)
!e&&t.locale&&n.push(t.locale)
t.fallbacks&&t.defaultLocale&&n.push(t.defaultLocale)
n.forEach(function(e){var n=e.split("-")
var a=null
var i=null
if(3===n.length){a=[n[0],n[1]].join("-")
i=n[0]}else 2===n.length&&(a=n[0]);-1===r.indexOf(e)&&r.push(e)
if(!t.fallbacks)return;[a,i].forEach(function(t){if("undefined"===typeof t)return
if(null===t)return
if(t===e)return
if(-1!==r.indexOf(t))return
r.push(t)})})
n.length||n.push("en")
return r}
t.pluralization={}
t.pluralization.get=function(e){return this[e]||this[t.locale]||this["default"]}
t.pluralization["default"]=function(e){switch(e){case 0:return["zero","other"]
case 1:return["one"]
default:return["other"]}}
t.currentLocale=function(){return this.locale||this.defaultLocale}
t.isSet=s
t.lookup=function(e,t){t=t||{}
var n,r,a,i,o=this.locales.get(t.locale).slice()
a=this.getFullScope(e,t)
while(o.length){n=o.shift()
r=a.split(this.defaultSeparator)
i=this.translations[n]
if(!i)continue
while(r.length){i=i[r.shift()]
if(void 0===i||null===i)break}if(void 0!==i&&null!==i)return i}if(s(t.defaultValue))return m(t.defaultValue,e)}
t.pluralizationLookupWithoutFallback=function(e,t,n){var r,a,o=this.pluralization.get(t),u=o(e)
if(i(n))while(u.length){r=u.shift()
if(s(n[r])){a=n[r]
break}}return a}
t.pluralizationLookup=function(e,t,n){n=n||{}
var r,a,o,u,l=this.locales.get(n.locale).slice()
t=this.getFullScope(t,n)
while(l.length){r=l.shift()
a=t.split(this.defaultSeparator)
o=this.translations[r]
if(!o)continue
while(a.length){o=o[a.shift()]
if(!i(o))break
0===a.length&&(u=this.pluralizationLookupWithoutFallback(e,r,o))}if("undefined"!==typeof u&&null!==u)break}if(("undefined"===typeof u||null===u)&&s(n.defaultValue)){u=i(n.defaultValue)?this.pluralizationLookupWithoutFallback(e,n.locale,n.defaultValue):n.defaultValue
o=n.defaultValue}return{message:u,translations:o}}
t.meridian=function(){var e=this.lookup("time")
var t=this.lookup("date")
return e&&e.am&&e.pm?[e.am,e.pm]:t&&t.meridian?t.meridian:_.meridian}
t.prepareOptions=function(){var e,t=n.call(arguments),r={}
while(t.length){e=t.shift()
if("object"!=typeof e)continue
for(var a in e){if(!e.hasOwnProperty(a))continue
if(s(r[a]))continue
r[a]=e[a]}}return r}
t.createTranslationOptions=function(e,t){var n=[{scope:e}]
s(t.defaults)&&(n=n.concat(t.defaults))
s(t.defaultValue)&&n.push({message:t.defaultValue})
return n}
t.translate=function(e,t){t=t||{}
var n=this.createTranslationOptions(e,t)
var r
var a=e
var o=this.prepareOptions(t)
delete o.defaultValue
var l=n.some(function(t){if(s(t.scope)){a=t.scope
r=this.lookup(a,o)}else s(t.message)&&(r=m(t.message,e))
if(void 0!==r&&null!==r)return true},this)
if(!l)return this.missingTranslation(e,t)
"string"===typeof r?r=this.interpolate(r,t):u(r)?r=r.map(function(e){return"string"===typeof e?this.interpolate(e,t):e},this):i(r)&&s(t.count)&&(r=this.pluralize(t.count,a,t))
return r}
t.interpolate=function(e,t){if(null==e)return e
t=t||{}
var n,r,a,i,o=e.match(this.placeholder)
if(!o)return e
while(o.length){n=o.shift()
a=n.replace(this.placeholder,"$1")
r=s(t[a])?t[a].toString().replace(/\$/gm,"_#$#_"):a in t?this.nullPlaceholder(n,e,t):this.missingPlaceholder(n,e,t)
i=new RegExp(n.replace(/{/gm,"\\{").replace(/}/gm,"\\}"))
e=e.replace(i,r)}return e.replace(/_#\$#_/g,"$")}
t.pluralize=function(e,t,n){n=this.prepareOptions({count:String(e)},n)
var r,a
a=this.pluralizationLookup(e,t,n)
if("undefined"===typeof a.translations||null==a.translations)return this.missingTranslation(t,n)
if("undefined"!==typeof a.message&&null!=a.message)return this.interpolate(a.message,n)
r=this.pluralization.get(n.locale)
return this.missingTranslation(t+"."+r(e)[0],n)}
t.missingTranslation=function(e,t){if("guess"===this.missingBehaviour){var n=e.split(".").slice(-1)[0]
return(this.missingTranslationPrefix.length>0?this.missingTranslationPrefix:"")+n.replace("_"," ").replace(/([a-z])([A-Z])/g,function(e,t,n){return t+" "+n.toLowerCase()})}var r=null!=t&&null!=t.locale?t.locale:this.currentLocale()
var a=this.getFullScope(e,t)
var i=[r,a].join(this.defaultSeparator)
return'[missing "'+i+'" translation]'}
t.missingPlaceholder=function(e,t,n){return"[missing "+e+" value]"}
t.nullPlaceholder=function(){return t.missingPlaceholder.apply(t,arguments)}
t.toNumber=function(e,t){t=this.prepareOptions(t,this.lookup("number.format"),g)
var n,r,i=e<0,o=a(Math.abs(e),t.precision).toString(),s=o.split("."),u=[],l=t.format||"%n",c=i?"-":""
e=s[0]
n=s[1]
while(e.length>0){u.unshift(e.substr(Math.max(0,e.length-3),3))
e=e.substr(0,e.length-3)}r=u.join(t.delimiter)
t.strip_insignificant_zeros&&n&&(n=n.replace(/0+$/,""))
t.precision>0&&n&&(r+=t.separator+n)
l=t.sign_first?"%s"+l:l.replace("%n","%s%n")
r=l.replace("%u",t.unit).replace("%n",r).replace("%s",c)
return r}
t.toCurrency=function(e,t){t=this.prepareOptions(t,this.lookup("number.currency.format"),this.lookup("number.format"),y)
return this.toNumber(e,t)}
t.localize=function(e,t,n){n||(n={})
switch(e){case"currency":return this.toCurrency(t)
case"number":e=this.lookup("number.format")
return this.toNumber(t,e)
case"percentage":return this.toPercentage(t)
default:var r
r=e.match(/^(date|time)/)?this.toTime(e,t):t.toString()
return this.interpolate(r,n)}}
t.parseDate=function(e){var t,n,r
if(null==e)return e
if("object"===typeof e)return e
t=e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)
if(t){for(var a=1;a<=6;a++)t[a]=parseInt(t[a],10)||0
t[2]-=1
r=t[7]?1e3*("0"+t[7]):null
n=t[8]?new Date(Date.UTC(t[1],t[2],t[3],t[4],t[5],t[6],r)):new Date(t[1],t[2],t[3],t[4],t[5],t[6],r)}else if("number"==typeof e){n=new Date
n.setTime(e)}else if(e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/)){n=new Date
n.setTime(Date.parse([RegExp.$1,RegExp.$2,RegExp.$3,RegExp.$6,RegExp.$4,RegExp.$5].join(" ")))}else if(e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/)){n=new Date
n.setTime(Date.parse(e))}else{n=new Date
n.setTime(Date.parse(e))}return n}
t.strftime=function(e,n){var a=this.lookup("date"),i=t.meridian()
a||(a={})
a=this.prepareOptions(a,_)
if(isNaN(e.getTime()))throw new Error("I18n.strftime() requires a valid date object, but received an invalid date.")
var o=e.getDay(),s=e.getDate(),u=e.getFullYear(),l=e.getMonth()+1,c=e.getHours(),d=c,f=c>11?1:0,h=e.getSeconds(),m=e.getMinutes(),p=e.getTimezoneOffset(),g=Math.floor(Math.abs(p/60)),y=Math.abs(p)-60*g,v=(p>0?"-":"+")+(g.toString().length<2?"0"+g:g)+(y.toString().length<2?"0"+y:y)
d>12?d-=12:0===d&&(d=12)
n=n.replace("%a",a.abbr_day_names[o])
n=n.replace("%A",a.day_names[o])
n=n.replace("%b",a.abbr_month_names[l])
n=n.replace("%B",a.month_names[l])
n=n.replace("%d",r(s))
n=n.replace("%e",s)
n=n.replace("%-d",s)
n=n.replace("%H",r(c))
n=n.replace("%-H",c)
n=n.replace("%I",r(d))
n=n.replace("%-I",d)
n=n.replace("%m",r(l))
n=n.replace("%-m",l)
n=n.replace("%M",r(m))
n=n.replace("%-M",m)
n=n.replace("%p",i[f])
n=n.replace("%S",r(h))
n=n.replace("%-S",h)
n=n.replace("%w",o)
n=n.replace("%y",r(u))
n=n.replace("%-y",r(u).replace(/^0+/,""))
n=n.replace("%Y",u)
n=n.replace("%z",v)
return n}
t.toTime=function(e,t){var n=this.parseDate(t),r=this.lookup(e)
if(null==n)return n
var a=n.toString()
if(a.match(/invalid/i))return a
if(!r)return a
return this.strftime(n,r)}
t.toPercentage=function(e,t){t=this.prepareOptions(t,this.lookup("number.percentage.format"),this.lookup("number.format"),v)
return this.toNumber(e,t)}
t.toHumanSize=function(e,t){var n,r,a=1024,i=e,o=0
while(i>=a&&o<4){i/=a
o+=1}if(0===o){n=this.t("number.human.storage_units.units.byte",{count:i})
r=0}else{n=this.t("number.human.storage_units.units."+b[o])
r=i-Math.floor(i)===0?0:1}t=this.prepareOptions(t,{unit:n,precision:r,format:"%n%u",delimiter:""})
return this.toNumber(i,t)}
t.getFullScope=function(e,t){t=t||{}
u(e)&&(e=e.join(this.defaultSeparator))
t.scope&&(e=[t.scope,e].join(this.defaultSeparator))
return e}
t.extend=function(e,t){if("undefined"===typeof e&&"undefined"===typeof t)return{}
return p(e,t)}
t.t=t.translate
t.l=t.localize
t.p=t.pluralize
return t},r=function(){return i(a)}.call(t,n,t,e),void 0!==r&&(e.exports=r)
var a,i},"0crz":function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=n("pQTu")
var o=n("m0r6")
Object(o["a"])({ar:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"إظهار النص المقتبس",word_separator:" "}}},cy:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"dangos testun wedi’i ddyfynnu",word_separator:" "}}},da:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"vis tekst i gåseøjne",word_separator:" "}}},"da-x-k12":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"vis tekst i gåseøjne",word_separator:" "}}},de:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"zitierten Text zeigen",word_separator:" "}}},el:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"προβολή κειμένου που παρατίθεται"}}},"en-AU":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"show quoted text",word_separator:" "}}},"en-AU-x-unimelb":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"show quoted text",word_separator:" "}}},"en-CA":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"show quoted text",word_separator:" "}}},"en-GB":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"show quoted text",word_separator:" "}}},"en-GB-x-lbs":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"show quoted text",word_separator:" "}}},"en-GB-x-ukhe":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"show quoted text",word_separator:" "}}},es:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"mostrar texto citado",word_separator:" "}}},fa:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"نمایش متن نقل شده",word_separator:" "}}},fr:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"afficher le texte entre guillemets",word_separator:" "}}},"fr-CA":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"afficher le texte entre guillemets",word_separator:" "}}},he:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"מציג ציטוט",word_separator:" "}}},ht:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"afiche tèks site",word_separator:" "}}},hu:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"idézett szöveg megjelenítése",word_separator:" "}}},hy:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"ցույց տալ մեջբերվող տեքստը",word_separator:"-"}}},is:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"Sýna ívitnaðan texta",word_separator:" "}}},it:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"mostra testo citato",word_separator:" "}}},ja:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"引用したテキストを表示",word_separator:" "}}},ko:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"인용된 텍스트 표시",word_separator:" "}}},mi:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"whakaatu kuputuhi faahiti",word_separator:"-"}}},nb:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"vis den merkede teksten",word_separator:" "}}},"nb-x-k12":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"vis den merkede teksten",word_separator:" "}}},nl:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"geciteerde tekst tonen",word_separator:" "}}},nn:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"vis sitert tekst",word_separator:" "}}},pl:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"pokaż cytowany fragment tekstu",word_separator:" "}}},pt:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"exibir texto citado",word_separator:" "}}},"pt-BR":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"exibir texto citado",word_separator:" "}}},ru:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"показать цитированный текст",word_separator:" "}}},sl:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"prikaži citirano besedilo",word_separator:" "}}},sv:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"visa citerad text",word_separator:" "}}},"sv-x-k12":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"visa citerad text",word_separator:" "}}},tr:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"alıntılanan metni göster",word_separator:" "}}},uk:{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"Показати цитований текст",word_separator:" "}}},"zh-Hans":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"显示引用的文本",word_separator:" "}}},"zh-Hant":{lib:{text_helper:{ellipsis:"...",quoted_text_toggle:"顯示引用的文字",word_separator:" "}}}})
n("jQeR")
n("0sPK")
var s=i["default"].scoped("lib.text_helper")
var u=n("5Ky4")
var l,c,d
l="LINK-PLACEHOLDER"
c=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=d={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(u["a"])(s.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+a.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,r,a,i,o,s,f
a=[]
i=[]
e=e.replace(c,function(e,t){var n
i.push(e===l?l:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),a.push(n),"<a href='"+Object(u["a"])(n)+"'>"+Object(u["a"])(e)+"</a>"))
return l})
e=Object(u["a"])(e)
e=e.replace(new RegExp(l,"g"),function(e,t){return i.shift()})
e=e.replace(/\n/g,"<br />\n")
o=[]
s=[]
f=e.split("\n")
for(t=0,n=f.length;t<n;t++){r=f[t]
if(r.match(/^(&gt;|>)/))s.push(r)
else{s.length&&o.push(d.quoteClump(s))
s=[]
o.push(r)}}s.length&&o.push(d.quoteClump(s))
return o.join("\n")},delimit:function(e){var t,n,r,a,i
if(isNaN(e))return String(e)
i=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
a=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){r=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
a=r+a}return i+String(n)+a},truncateText:function(e,t){var n,r,a,i,o,u
null==t&&(t={})
r=null!=(i=t.max)?i:30
n=s.t("ellipsis","...")
u=s.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,u).trim()
if(!e||e.length<=r)return e
o=0
while(true){a=e.indexOf(u,o+1)
if(a<0||a>r-n.length)break
o=a}o||(o=r-n.length)
return e.substring(0,o)+n}}},"0eMb":function(e,t,n){var r,a
!function(i){if(e.exports)e.exports=i()
else{r=i,a="function"===typeof r?r.call(t,n,t,e):r,void 0!==a&&(e.exports=a)}}(function(){function e(e,t,n){var r,a=t.day[1]
do{r=new Date(Date.UTC(n,t.month,Math.abs(a++)))}while(t.day[0]<7&&r.getUTCDay()!=t.day[0])
r={clock:t.clock,sort:r.getTime(),rule:t,save:6e4*t.save,offset:e.offset}
r[r.clock]=r.sort+6e4*t.time
r.posix?r.wallclock=r[r.clock]+(e.offset+t.saved):r.posix=r[r.clock]-(e.offset+t.saved)
return r}function t(t,n,r){var a,i,o,s,u,l,c,d=t[t.zone],f=[],h=new Date(r).getUTCFullYear(),m=1
for(a=1,i=d.length;a<i;a++)if(d[a][n]<=r)break
o=d[a]
if(o.rules){l=t[o.rules]
for(c=h+1;c>=h-m;--c)for(a=0,i=l.length;a<i;a++)l[a].from<=c&&c<=l[a].to?f.push(e(o,l[a],c)):l[a].to<c&&1==m&&(m=c-l[a].to)
f.sort(function(e,t){return e.sort-t.sort})
for(a=0,i=f.length;a<i;a++)r>=f[a][n]&&f[a][f[a].clock]>o[f[a].clock]&&(s=f[a])}s&&((u=/^(.*)\/(.*)$/.exec(o.format))?s.abbrev=u[s.save?2:1]:s.abbrev=o.format.replace(/%s/,s.rule.letter))
return s||o}function n(e,n){if("UTC"==e.zone)return n
e.entry=t(e,"posix",n)
return n+e.entry.offset+e.entry.save}function r(e,n){if("UTC"==e.zone)return n
var r,a
e.entry=r=t(e,"wallclock",n)
a=n-r.wallclock
return 0<a&&a<r.save?null:n-r.offset-r.save}function a(e,t,a){var i,o=+(a[1]+1),u=a[2]*o,c=s.indexOf(a[3].toLowerCase())
if(c>9)t+=u*l[c-10]
else{i=new Date(n(e,t))
if(c<7)while(u){i.setUTCDate(i.getUTCDate()+o)
i.getUTCDay()==c&&(u-=o)}else 7==c?i.setUTCFullYear(i.getUTCFullYear()+u):8==c?i.setUTCMonth(i.getUTCMonth()+u):i.setUTCDate(i.getUTCDate()+u)
null==(t=r(e,i.getTime()))&&(t=r(e,i.getTime()+864e5*o)-864e5*o)}return t}function i(e){if(!e.length)return"1.0.22"
var t,i,o,s,l,c=Object.create(this),d=[]
for(t=0;t<e.length;t++){s=e[t]
if(Array.isArray(s))t||isNaN(s[1])?s.splice.apply(e,[t--,1].concat(s)):l=s
else if(isNaN(s)){o=typeof s
if("string"==o)if(~s.indexOf("%"))c.format=s
else if(t||"*"!=s)if(!t&&(o=/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|(([+-])(\d{2}(:\d{2}){0,2})))?)?$/.exec(s))){l=[]
l.push.apply(l,o.slice(1,8))
if(o[9]){l.push(o[10]+1)
l.push.apply(l,o[11].split(/:/))}else o[8]&&l.push(1)}else/^\w{2,3}_\w{2}$/.test(s)?c.locale=s:(o=u.exec(s))?d.push(o):c.zone=s
else l=s
else if("function"==o){if(o=s.call(c))return o}else if(/^\w{2,3}_\w{2}$/.test(s.name))c[s.name]=s
else if(s.zones){for(o in s.zones)c[o]=s.zones[o]
for(o in s.rules)c[o]=s.rules[o]}}else t||(l=s)}c[c.locale]||delete c.locale
c[c.zone]||delete c.zone
if(null!=l){if("*"==l)l=c.clock()
else if(Array.isArray(l)){o=[]
i=!l[7]
for(t=0;t<11;t++)o[t]=+(l[t]||0);--o[1]
l=Date.UTC.apply(Date.UTC,o)+-o[7]*(36e5*o[8]+6e4*o[9]+1e3*o[10])}else l=Math.floor(l)
if(!isNaN(l)){i&&(l=r(c,l))
if(null==l)return l
for(t=0,i=d.length;t<i;t++)l=a(c,l,d[t])
if(!c.format)return l
o=new Date(n(c,l))
return c.format.replace(/%([-0_^]?)(:{0,3})(\d*)(.)/g,function(e,t,n,r,a){var i,s,u="0"
if(i=c[a]){e=String(i.call(c,o,l,t,n.length))
"_"==(t||i.style)&&(u=" ")
s="-"==t?0:i.pad||0
while(e.length<s)e=u+e
s="-"==t?0:r||i.pad
while(e.length<s)e=u+e
"N"==a&&s<e.length&&(e=e.slice(0,s))
"^"==t&&(e=e.toUpperCase())}return e})}}return function(){return c.convert(arguments)}}var o={clock:function(){return+new Date},zone:"UTC",entry:{abbrev:"UTC",offset:0,save:0},UTC:1,z:function(e,t,n,r){var a,i,o=this.entry.offset+this.entry.save,s=Math.abs(o/1e3),u=[],l=3600
for(a=0;a<3;a++){u.push(("0"+Math.floor(s/l)).slice(-2))
s%=l
l/=60}if("^"==n&&!o)return"Z"
"^"==n&&(r=3)
if(3==r){i=u.join(":")
i=i.replace(/:00$/,"")
"^"!=n&&(i=i.replace(/:00$/,""))}else if(r){i=u.slice(0,r+1).join(":")
"^"==n&&(i=i.replace(/:00$/,""))}else i=u.slice(0,2).join("")
i=(o<0?"-":"+")+i
i=i.replace(/([-+])(0)/,{_:" $1","-":"$1"}[n]||"$1$2")
return i},"%":function(e){return"%"},n:function(e){return"\n"},t:function(e){return"\t"},U:function(e){return c(e,0)},W:function(e){return c(e,1)},V:function(e){return d(e)[0]},G:function(e){return d(e)[1]},g:function(e){return d(e)[1]%100},j:function(e){return Math.floor((e.getTime()-Date.UTC(e.getUTCFullYear(),0))/864e5)+1},s:function(e){return Math.floor(e.getTime()/1e3)},C:function(e){return Math.floor(e.getUTCFullYear()/100)},N:function(e){return e.getTime()%1e3*1e6},m:function(e){return e.getUTCMonth()+1},Y:function(e){return e.getUTCFullYear()},y:function(e){return e.getUTCFullYear()%100},H:function(e){return e.getUTCHours()},M:function(e){return e.getUTCMinutes()},S:function(e){return e.getUTCSeconds()},e:function(e){return e.getUTCDate()},d:function(e){return e.getUTCDate()},u:function(e){return e.getUTCDay()||7},w:function(e){return e.getUTCDay()},l:function(e){return e.getUTCHours()%12||12},I:function(e){return e.getUTCHours()%12||12},k:function(e){return e.getUTCHours()},Z:function(e){return this.entry.abbrev},a:function(e){return this[this.locale].day.abbrev[e.getUTCDay()]},A:function(e){return this[this.locale].day.full[e.getUTCDay()]},h:function(e){return this[this.locale].month.abbrev[e.getUTCMonth()]},b:function(e){return this[this.locale].month.abbrev[e.getUTCMonth()]},B:function(e){return this[this.locale].month.full[e.getUTCMonth()]},P:function(e){return this[this.locale].meridiem[Math.floor(e.getUTCHours()/12)].toLowerCase()},p:function(e){return this[this.locale].meridiem[Math.floor(e.getUTCHours()/12)]},R:function(e,t){return this.convert([t,"%H:%M"])},T:function(e,t){return this.convert([t,"%H:%M:%S"])},D:function(e,t){return this.convert([t,"%m/%d/%y"])},F:function(e,t){return this.convert([t,"%Y-%m-%d"])},x:function(e,t){return this.convert([t,this[this.locale].date])},r:function(e,t){return this.convert([t,this[this.locale].time12||"%I:%M:%S"])},X:function(e,t){return this.convert([t,this[this.locale].time24])},c:function(e,t){return this.convert([t,this[this.locale].dateTime])},convert:i,locale:"en_US",en_US:{date:"%m/%d/%Y",time24:"%I:%M:%S %p",time12:"%I:%M:%S %p",dateTime:"%a %d %b %Y %I:%M:%S %p %Z",meridiem:["AM","PM"],month:{abbrev:"Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec".split("|"),full:"January|February|March|April|May|June|July|August|September|October|November|December".split("|")},day:{abbrev:"Sun|Mon|Tue|Wed|Thu|Fri|Sat".split("|"),full:"Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday".split("|")}}}
var s="Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|year|month|day|hour|minute|second|millisecond",u=new RegExp("^\\s*([+-])(\\d+)\\s+("+s+")s?\\s*$","i"),l=[36e5,6e4,1e3,1]
s=s.toLowerCase().split("|")
"delmHMSUWVgCIky".replace(/./g,function(e){o[e].pad=2})
o.N.pad=9
o.j.pad=3
o.k.style="_"
o.l.style="_"
o.e.style="_"
function c(e,t){var n,r,a
r=new Date(Date.UTC(e.getUTCFullYear(),0))
n=Math.floor((e.getTime()-r.getTime())/864e5)
if(r.getUTCDay()==t)a=0
else{a=7-r.getUTCDay()+t
8==a&&(a=1)}return n>=a?Math.floor((n-a)/7)+1:0}function d(e){var t,n,r
n=e.getUTCFullYear()
t=new Date(Date.UTC(n,0)).getUTCDay()
r=c(e,1)+(t>1&&t<=4?1:0)
if(r)return 53!=r||4==t||3==t&&29==new Date(n,1,29).getDate()?[r,e.getUTCFullYear()]:[1,e.getUTCFullYear()+1]
n=e.getUTCFullYear()-1
t=new Date(Date.UTC(n,0)).getUTCDay()
r=4==t||3==t&&29==new Date(n,1,29).getDate()?53:52
return[r,e.getUTCFullYear()-1]}return function(){return o.convert(arguments)}})},"0jNN":function(e,t,n){"use strict"
var r=Object.prototype.hasOwnProperty
var a=Array.isArray
var i=function(){var e=[]
for(var t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase())
return e}()
var o=function(e){while(e.length>1){var t=e.pop()
var n=t.obj[t.prop]
if(a(n)){var r=[]
for(var i=0;i<n.length;++i)"undefined"!==typeof n[i]&&r.push(n[i])
t.obj[t.prop]=r}}}
var s=function(e,t){var n=t&&t.plainObjects?Object.create(null):{}
for(var r=0;r<e.length;++r)"undefined"!==typeof e[r]&&(n[r]=e[r])
return n}
var u=function e(t,n,i){if(!n)return t
if("object"!==typeof n){if(a(t))t.push(n)
else{if(!t||"object"!==typeof t)return[t,n];(i&&(i.plainObjects||i.allowPrototypes)||!r.call(Object.prototype,n))&&(t[n]=true)}return t}if(!t||"object"!==typeof t)return[t].concat(n)
var o=t
a(t)&&!a(n)&&(o=s(t,i))
if(a(t)&&a(n)){n.forEach(function(n,a){if(r.call(t,a)){var o=t[a]
o&&"object"===typeof o&&n&&"object"===typeof n?t[a]=e(o,n,i):t.push(n)}else t[a]=n})
return t}return Object.keys(n).reduce(function(t,a){var o=n[a]
r.call(t,a)?t[a]=e(t[a],o,i):t[a]=o
return t},o)}
var l=function(e,t){return Object.keys(t).reduce(function(e,n){e[n]=t[n]
return e},e)}
var c=function(e,t,n){var r=e.replace(/\+/g," ")
if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(r)}catch(e){return r}}
var d=function(e,t,n){if(0===e.length)return e
var r="string"===typeof e?e:String(e)
if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"})
var a=""
for(var o=0;o<r.length;++o){var s=r.charCodeAt(o)
if(45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){a+=r.charAt(o)
continue}if(s<128){a+=i[s]
continue}if(s<2048){a+=i[192|s>>6]+i[128|63&s]
continue}if(s<55296||s>=57344){a+=i[224|s>>12]+i[128|s>>6&63]+i[128|63&s]
continue}o+=1
s=65536+((1023&s)<<10|1023&r.charCodeAt(o))
a+=i[240|s>>18]+i[128|s>>12&63]+i[128|s>>6&63]+i[128|63&s]}return a}
var f=function(e){var t=[{obj:{o:e},prop:"o"}]
var n=[]
for(var r=0;r<t.length;++r){var a=t[r]
var i=a.obj[a.prop]
var s=Object.keys(i)
for(var u=0;u<s.length;++u){var l=s[u]
var c=i[l]
if("object"===typeof c&&null!==c&&-1===n.indexOf(c)){t.push({obj:i,prop:l})
n.push(c)}}}o(t)
return e}
var h=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var m=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var p=function(e,t){return[].concat(e,t)}
e.exports={arrayToObject:s,assign:l,combine:p,compact:f,decode:c,encode:d,isBuffer:m,isRegExp:h,merge:u}},"0sPK":function(e,t,n){"use strict"
var r=n("m0r6")
Object(r["a"])({en:{date:{abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datepicker:{column_headings:["Su","Mo","Tu","We","Th","Fr","Sa"]},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days:{today:"Today",today_lower:"today",tomorrow:"Tomorrow",yesterday:"Yesterday"},formats:{date_at_time:"%b %-d at %l:%M%P",default:"%Y-%m-%d",full:"%b %-d, %Y %-l:%M%P",full_with_weekday:"%a %b %-d, %Y %-l:%M%P",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%b %-d, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %b %-d, %Y",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"],order:["year","month","day"]},datetime:{distance_in_words:{about_x_hours:{one:"about 1 hour",other:"about %{count} hours"},about_x_months:{one:"about 1 month",other:"about %{count} months"},about_x_years:{one:"about 1 year",other:"about %{count} years"},almost_x_years:{one:"almost 1 year",other:"almost %{count} years"},half_a_minute:"half a minute",less_than_x_minutes:{one:"less than a minute",other:"less than %{count} minutes"},less_than_x_seconds:{one:"less than 1 second",other:"less than %{count} seconds"},over_x_years:{one:"over 1 year",other:"over %{count} years"},x_days:{one:"1 day",other:"%{count} days"},x_minutes:{one:"1 minute",other:"%{count} minutes"},x_months:{one:"1 month",other:"%{count} months"},x_seconds:{one:"1 second",other:"%{count} seconds"}},prompts:{day:"Day",hour:"Hour",minute:"Minute",month:"Month",second:"Seconds",year:"Year"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Billion",million:"Million",quadrillion:"Quadrillion",thousand:"Thousand",trillion:"Trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", and ",or:{last_word_connector:", or ",two_words_connector:" or "},two_words_connector:" and ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Please visit our Networking Academy Facebook page for community support or contact your instructor.",community_support_description:"Interact with and get assistance from your peers.",community_support_forums:"Community Support Forums",contact_support:"Contact Support",contact_support_sub_text:"Get assistance with time-sensitive issues.",curriculum_assessment_errata:"Curriculum/Assessment Errata",curriculum_assessment_errata_description:'View already reported assessment and curricula errors. Search for "errata."',global_support_desk:"NetAcad Support",global_support_desk_description:"Our ASCs are your first line of support, and can connect you with our Global Support Desk for issues that require additional assistance.",networking_academy_description:"View Cisco answers to the most commonly asked questions.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%l:%M%P",tiny_on_the_hour:"%l%P"},pm:"pm"}}})},"1OyB":function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"25BE":function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},"2DhO":function(e,t,n){"use strict"
var r=n("KQm4")
var a=n("GLiE")
var i=n.n(a)
var o=n("0eMb")
var s=n.n(o)
var u=n("pQTu")
var l=n("wd/R")
var c=n.n(l)
var d=n("c9Sg")
function f(e,t){var n=[]
e.forEach(function(e){t.forEach(function(t){n.push(function(){return d["a"].t("#time.event",{date:d["a"].lookup("date.formats.".concat(e)),time:d["a"].lookup("time.formats.".concat(t))})})})})
return n}function h(e){return function(){return d["a"].lookup("date.formats.".concat(e))}}function m(e){return function(){return d["a"].lookup("time.formats.".concat(e))}}function p(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return function(){return n.map(function(e){return d["a"].lookup(e)}).join(e)}}var _={i18nToMomentHash:{"%A":"dddd","%B":"MMMM","%H":"HH","%M":"mm","%S":"ss","%P":"a","%Y":"YYYY","%a":"ddd","%b":"MMM","%m":"M","%d":"D","%k":"H","%l":"h","%z":"Z","%-H":"H","%-M":"m","%-S":"s","%-m":"M","%-d":"D","%-k":"H","%-l":"h"},basicMomentFormats:[c.a.ISO_8601,"YYYY","LT","LTS","L","l","LL","ll","LLL","lll","LLLL","llll","D MMM YYYY","H:mm"],getFormats:function(){var e=this.formatsForLocale()
e=this.formatsIncludingImplicitMinutes(e)
return this.transformFormats(e)},formatsIncludingImplicitMinutes:function(e){var t=i.a.map(e,function(e){return e.match(/:%-?M/)?[e,e.replace(/:%-?M/,"")]:[e]})
return i.a.flatten(t)},transformFormats:i.a.memoize(function(e){var t=i.a.map(e,this.i18nToMomentFormat,this)
return i.a.union(this.basicMomentFormats,t)}),orderedFormats:[m("default"),h("full_with_weekday"),h("full"),h("date_at_time"),h("long_with_weekday"),h("medium_with_weekday"),h("short_with_weekday"),m("long"),h("long")].concat(Object(r["a"])(f(["medium","short"],["tiny","tiny_on_the_hour"])),[p(" ","date.formats.medium","time.formats.tiny"),p(" ","date.formats.medium","time.formats.tiny_on_the_hour"),h("medium"),m("short"),p(" ","date.formats.short","time.formats.tiny"),p(" ","date.formats.short","time.formats.tiny_on_the_hour"),h("short"),h("default"),m("tiny"),m("tiny_on_the_hour"),h("weekday"),h("short_weekday")]),formatsForLocale:function(){return i.a.compact(this.orderedFormats.map(function(e){return e()}))},i18nToMomentFormat:function(e){var t=this.escapeSubStrings(e)
return this.replaceDateKeys(t)},escapeSubStrings:function(e){var t=e.split(" ")
var n=i.a.map(t,this.escapedUnlessi18nKey,this)
return n.join(" ")},escapedUnlessi18nKey:function(e){var t=i.a.detect(i.a.keys(this.i18nToMomentHash),function(t){return e.indexOf(t)>-1})
return t?e:"[".concat(e,"]")},replaceDateKeys:function(e){return i.a.reduce(this.i18nToMomentHash,function(e,t,n){return e.replace(n,t)},e)}}
var g=s.a
var y="en_US"
var v="en"
var b=window.__PRELOADED_TIMEZONE_DATA__||(window.__PRELOADED_TIMEZONE_DATA__={})
var w={_preloadedData:b,moment:function(e,t){if(!i.a.isString(e)||!(i.a.isString(t)||i.a.isArray(t)))throw new Error("tz.moment only works on string+format(s). just use moment() directly for any other signature")
var n=c.a.apply(null,[e,t,v])
n._pf.unusedTokens.length>0&&(n=c.a.apply(null,[e,t,v,true]))
if(!n.isValid())return n
if(!n._f.match(/Z/)||n._pf.unusedTokens.indexOf("Z")>=0){var r=n.locale()
n=c()(w.raw_parse(n.locale("en").format("YYYY-MM-DD HH:mm:ss")))
n.locale(r)}return n},raw_parse:function(e){var t=g(e)
if("number"===typeof t)return new Date(t)
return null},parse:function(e){if(""===e||null==e)return null
if(!i.a.isString(e))return w.raw_parse(e)
if(e.match(/[-:]/)){var t=w.raw_parse(e)
if(t)return t}var n=_.getFormats()
var r=w.moment(e,n)
return r.isValid()?r.toDate():null},format:function(e,t,n){var r=g
var a=3===arguments.length&&n
if(a){if(!(n in b))return null
r=g(b[n])}var i=w.parse(e)
if(null==i)return null
t=w.adjustFormat(t)
var o=null
o=a?r(i,t,n):r(i,t)
if("string"!==typeof o)return null
return o},adjustFormat:function(e){if(e.match(/^(date|time)\.formats\./)){var t=u["default"].lookup(e)
t&&(e=t.split("").reverse().join("").replace(/([lke])(?=%(%%)*(?!%))/,"$1-").split("").reverse().join(""))}e=e.split("").reverse().join("")
if(!w.hasMeridian()&&(e.match(/[lI][-_]?%(%%)*(?!%)/)&&e.match(/p%(%%)*(?!%)/i)||e.match(/r[-_]?%(%%)*(?!%)/))){e=e.replace(/l(?=[-_]?%(%%)*(?!%))/,"k")
e=e.replace(/I(?=[-_]?%(%%)*(?!%))/,"H")
e=e.replace(/r(?=[-_]?%(%%)*(?!%))/,"T")}e=e.split("").reverse().join("")
return e},hasMeridian:function(){return""!==g(new Date,"%P")},useMeridian:function(){if(!this.hasMeridian())return false
var e=u["default"].lookup("time.formats.tiny")
return e&&e.match(/%-?l/)},shift:function(e){var t=w.parse(e)
if(null==t)return null
if(1==arguments.length)return t
var n=[t].concat([].slice.apply(arguments,[1]))
var a=g.apply(void 0,Object(r["a"])(n))
if("number"!==typeof a)return null
return new Date(a)},snapshot:function(){return[g,y,v]},restore:function(e){if(!i.a.isArray(e))throw new Error("invalid tz() snapshot")
if("function"!==typeof e[0])throw new Error("invalid tz() snapshot")
if(!i.a.isString(e[1]))throw new Error("invalid tz() snapshot")
if(!i.a.isString(e[2]))throw new Error("invalid tz() snapshot")
g=e[0]
y=e[1]
v=e[2]},extendConfiguration:function(){var e=g.apply(void 0,arguments)
if("function"!==typeof e)throw new Error("invalid tz() extension")
g=e},applyFeature:function(e,t){function n(e){w.extendConfiguration(e,t)
return Promise.resolve()}if(arguments.length>1){this.preload(t,e)
return n(e)}t=e
var r=this.preload(t)
if(r instanceof Promise)return r.then(n)
return n(r)},preload:function(e,t){if(arguments.length>1){b[e]=t
return b[e]}return b[e]?b[e]:new Promise(function(t,n){return n(new Error("In webpack, loading timezones on-demand is not supported. ".concat(e,'" should already be script-tagged onto the page from Rails.')))})},changeLocale:function(){if(arguments.length>2){y=arguments[1]
v=arguments[2]}else{y=arguments[0]
v=arguments[1]}var e=[].slice.apply(arguments).slice(0,arguments.length-1)
return this.applyFeature.apply(this,e)},isMidnight:function(e){if(null==e)return false
return"00:00"===w.format(e,"%R")},changeToTheSecondBeforeMidnight:function(e){return w.parse(w.format(e,"%F 23:59:59"))},setToEndOfMinute:function(e){return w.parse(w.format(e,"%F %R:59"))},mergeTimeAndDate:function(e,t){return w.parse(w.format(t,"%F ")+w.format(e,"%T"))}}
w.changeZone=w.applyFeature
t["a"]=w},"2Knc":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var r={"'":"&#39;","&":"&amp;",'"':"&quot;",">":"&gt;","<":"&lt;"}
function a(e){this.string="string"===typeof e?e:""+e}a.prototype.toString=function(){return this.string}
var i={HtmlSafeString:a,difference:function(e,t){var n=[]
for(var r=0,a=e.length;r<a;r++)-1===t.indexOf(e[r])&&n.push(e[r])
return n},keys:function(e){var t=[]
for(var n in e)e.hasOwnProperty(n)&&t.push(n)
return t},htmlEscape:function(e){if("undefined"===typeof e||null===e)return""
if(e instanceof i.HtmlSafeString)return e.toString()
return String(e).replace(/[&<>"']/g,function(e){return r[e]})},regexpEscape:function(e){if("undefined"===typeof e||null===e)return""
return String(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},extend:function(){var e=[].slice.call(arguments)
var t=e.shift()
for(var n=0,r=e.length;n<r;n++){var a=e[n]
for(var i in a)a.hasOwnProperty(i)&&(t[i]=a[i])}}}
t.default=i},"2SVd":function(e,t,n){"use strict"
e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"2sOc":function(e,t,n){"use strict"
n("SPof");(function(){var e=Date.prototype.toString
var t=Date,n=t.prototype,r=t.CultureInfo,a=function(e,t){t||(t=2)
return("000"+e).slice(-1*t)}
n.clearTime=function(){this.setHours(0)
this.setMinutes(0)
this.setSeconds(0)
this.setMilliseconds(0)
return this}
n.setTimeToNow=function(){var e=new Date
this.setHours(e.getHours())
this.setMinutes(e.getMinutes())
this.setSeconds(e.getSeconds())
this.setMilliseconds(e.getMilliseconds())
return this}
t.today=function(){return(new Date).clearTime()}
t.compare=function(e,t){if(isNaN(e)||isNaN(t))throw new Error(e+" - "+t)
if(e instanceof Date&&t instanceof Date)return e<t?-1:e>t?1:0
throw new TypeError(e+" - "+t)}
t.equals=function(e,t){return 0===e.compareTo(t)}
t.getDayNumberFromName=function(e){var t=r.dayNames,n=r.abbreviatedDayNames,a=r.shortestDayNames,i=e.toLowerCase()
for(var o=0;o<t.length;o++)if(t[o].toLowerCase()==i||n[o].toLowerCase()==i||a[o].toLowerCase()==i)return o
return-1}
t.getMonthNumberFromName=function(e){var t=r.monthNames,n=r.abbreviatedMonthNames,a=e.toLowerCase()
for(var i=0;i<t.length;i++)if(t[i].toLowerCase()==a||n[i].toLowerCase()==a)return i
return-1}
t.isLeapYear=function(e){return e%4===0&&e%100!==0||e%400===0}
t.getDaysInMonth=function(e,n){return[31,t.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][n]}
t.getTimezoneAbbreviation=function(e){var t=r.timezones
for(var n=0;n<t.length;n++)if(t[n].offset===e)return t[n].name
return null}
t.getTimezoneOffset=function(e){var t=r.timezones
for(var n=0;n<t.length;n++)if(t[n].name===e.toUpperCase())return t[n].offset
return null}
n.clone=function(){return new Date(this.getTime())}
n.compareTo=function(e){return Date.compare(this,e)}
n.equals=function(e){return Date.equals(this,e||new Date)}
n.between=function(e,t){return this.getTime()>=e.getTime()&&this.getTime()<=t.getTime()}
n.isAfter=function(e){return 1===this.compareTo(e||new Date)}
n.isBefore=function(e){return-1===this.compareTo(e||new Date)}
n.isToday=n.isSameDay=function(e){return this.clone().clearTime().equals((e||new Date).clone().clearTime())}
n.addMilliseconds=function(e){this.setUTCMilliseconds(this.getUTCMilliseconds()+1*e)
return this}
n.addSeconds=function(e){return this.addMilliseconds(1e3*e)}
n.addMinutes=function(e){return this.addMilliseconds(6e4*e)}
n.addHours=function(e){return this.addMilliseconds(36e5*e)}
n.addDays=function(e){this.setDate(this.getDate()+1*e)
return this}
n.addWeeks=function(e){return this.addDays(7*e)}
n.addMonths=function(e){var n=this.getDate()
this.setDate(1)
this.setMonth(this.getMonth()+1*e)
this.setDate(Math.min(n,t.getDaysInMonth(this.getFullYear(),this.getMonth())))
return this}
n.addYears=function(e){return this.addMonths(12*e)}
n.add=function(e){if("number"==typeof e){this._orient=e
return this}var t=e
t.milliseconds&&this.addMilliseconds(t.milliseconds)
t.seconds&&this.addSeconds(t.seconds)
t.minutes&&this.addMinutes(t.minutes)
t.hours&&this.addHours(t.hours)
t.weeks&&this.addWeeks(t.weeks)
t.months&&this.addMonths(t.months)
t.years&&this.addYears(t.years)
t.days&&this.addDays(t.days)
return this}
var i,o,s
n.getWeek=function(){var e,t,n,r,a,u,l,c,d,f
i=i||this.getFullYear()
o=o||this.getMonth()+1
s=s||this.getDate()
if(o<=2){e=i-1
t=(e/4|0)-(e/100|0)+(e/400|0)
n=((e-1)/4|0)-((e-1)/100|0)+((e-1)/400|0)
d=t-n
a=0
u=s-1+31*(o-1)}else{e=i
t=(e/4|0)-(e/100|0)+(e/400|0)
n=((e-1)/4|0)-((e-1)/100|0)+((e-1)/400|0)
d=t-n
a=d+1
u=s+(153*(o-3)+2)/5+58+d}l=(e+t)%7
r=(u+l-a)%7
c=u+3-r|0
f=c<0?53-((l-d)/5|0):c>364+d?1:1+(c/7|0)
i=o=s=null
return f}
n.getISOWeek=function(){i=this.getUTCFullYear()
o=this.getUTCMonth()+1
s=this.getUTCDate()
return a(this.getWeek())}
n.setWeek=function(e){return this.moveToDayOfWeek(1).addWeeks(e-this.getWeek())}
var u=function(e,t,n,r){if("undefined"==typeof e)return false
if("number"!=typeof e)throw new TypeError(e+" is not a Number.")
if(e<t||e>n)throw new RangeError(e+" is not a valid value for "+r+".")
return true}
t.validateMillisecond=function(e){return u(e,0,999,"millisecond")}
t.validateSecond=function(e){return u(e,0,59,"second")}
t.validateMinute=function(e){return u(e,0,59,"minute")}
t.validateHour=function(e){return u(e,0,23,"hour")}
t.validateDay=function(e,n,r){return u(e,1,t.getDaysInMonth(n,r),"day")}
t.validateMonth=function(e){return u(e,0,11,"month")}
t.validateYear=function(e){return u(e,0,9999,"year")}
n.set=function(e){t.validateMillisecond(e.millisecond)&&this.setMilliseconds(e.millisecond)
t.validateSecond(e.second)&&this.setSeconds(e.second)
t.validateMinute(e.minute)&&this.setMinutes(e.minute)
t.validateHour(e.hour)&&this.setHours(e.hour)
t.validateMonth(e.month)&&this.addMonths(e.month-this.getMonth())
t.validateYear(e.year)&&this.addYears(e.year-this.getFullYear())
t.validateDay(e.day,this.getFullYear(),this.getMonth())&&this.addDays(e.day-this.getDate())
e.timezone&&this.setTimezone(e.timezone)
null!=e.timezoneOffset&&this.setTimezoneOffset(e.timezoneOffset)
e.week&&u(e.week,0,53,"week")&&this.setWeek(e.week)
return this}
n.moveToFirstDayOfMonth=function(){return this.set({day:1})}
n.moveToLastDayOfMonth=function(){return this.set({day:t.getDaysInMonth(this.getFullYear(),this.getMonth())})}
n.moveToNthOccurrence=function(e,t){var n=0
if(t>0)n=t-1
else if(-1===t){this.moveToLastDayOfMonth()
this.getDay()!==e&&this.moveToDayOfWeek(e,-1)
return this}return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(e,1).addWeeks(n)}
n.moveToDayOfWeek=function(e,t){var n=(e-this.getDay()+7*(t||1))%7
return this.addDays(0===n?n+=7*(t||1):n)}
n.moveToMonth=function(e,t){var n=(e-this.getMonth()+12*(t||1))%12
return this.addMonths(0===n?n+=12*(t||1):n)}
n.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/864e5)+1}
n.getTimezone=function(){return t.getTimezoneAbbreviation(this.getUTCOffset())}
n.setTimezoneOffset=function(e){e=Number(e)
e=-(60*Math.floor(e/100)+(e%100+60)%60)
return this.addMinutes(e-this.getTimezoneOffset())}
n.setTimezone=function(e){return this.setTimezoneOffset(t.getTimezoneOffset(e))}
n.hasDaylightSavingTime=function(){return Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset()}
n.isDaylightSavingTime=function(){return Date.today().set({month:0,day:1}).getTimezoneOffset()!=this.getTimezoneOffset()}
n.getUTCOffset=function(){var e,t=this.getTimezoneOffset(),n=t%60,r=(t-n)/60,a=-(100*r+n)
if(a<0){e=(a-1e4).toString()
return e.charAt(0)+e.substr(2)}e=(a+1e4).toString()
return"+"+e.substr(1)}
n.getElapsed=function(e){return(e||new Date)-this}
n.toISOString||(n.toISOString=function(){function e(e){return e<10?"0"+e:e}return'"'+this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+'Z"'})
n._toString=n.toString
n.toString=function(t){var n=this
if(t&&1==t.length){var i=r.formatPatterns
n.t=n.toString
switch(t){case"d":return n.t(i.shortDate)
case"D":return n.t(i.longDate)
case"F":return n.t(i.fullDateTime)
case"m":return n.t(i.monthDay)
case"r":return n.t(i.rfc1123)
case"s":return n.t(i.sortableDateTime)
case"t":return n.t(i.shortTime)
case"T":return n.t(i.longTime)
case"u":return n.t(i.universalSortableDateTime)
case"y":return n.t(i.yearMonth)}}var o=function(e){switch(1*e){case 1:case 21:case 31:return"st"
case 2:case 22:return"nd"
case 3:case 23:return"rd"
default:return"th"}}
return t?t.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(e){if("\\"===e.charAt(0))return e.replace("\\","")
n.h=n.getHours
switch(e){case"hh":return a(n.h()<13?0===n.h()?12:n.h():n.h()-12)
case"h":return n.h()<13?0===n.h()?12:n.h():n.h()-12
case"HH":return a(n.h())
case"H":return n.h()
case"mm":return a(n.getMinutes())
case"m":return n.getMinutes()
case"ss":return a(n.getSeconds())
case"s":return n.getSeconds()
case"yyyy":return a(n.getFullYear(),4)
case"yy":return a(n.getFullYear())
case"dddd":return r.dayNames[n.getDay()]
case"ddd":return r.abbreviatedDayNames[n.getDay()]
case"dd":return a(n.getDate())
case"d":return n.getDate()
case"MMMM":return r.monthNames[n.getMonth()]
case"MMM":return r.abbreviatedMonthNames[n.getMonth()]
case"MM":return a(n.getMonth()+1)
case"M":return n.getMonth()+1
case"t":return n.h()<12?r.amDesignator.substring(0,1):r.pmDesignator.substring(0,1)
case"tt":return n.h()<12?r.amDesignator:r.pmDesignator
case"S":return o(n.getDate())
default:return e}}):e.apply(this,arguments)}})();(function(){var e=Date,t=e.prototype,n=e.CultureInfo,r=Number.prototype
t._orient=1
t._nth=null
t._is=false
t._same=false
t._isSecond=false
r._dateElement="day"
t.next=function(){this._orient=1
return this}
e.next=function(){return e.today().next()}
t.last=t.prev=t.previous=function(){this._orient=-1
return this}
e.last=e.prev=e.previous=function(){return e.today().last()}
t.is=function(){this._is=true
return this}
t.same=function(){this._same=true
this._isSecond=false
return this}
t.today=function(){return this.same().day()}
t.weekday=function(){if(this._is){this._is=false
return!this.is().sat()&&!this.is().sun()}return false}
t.at=function(t){return"string"===typeof t?e.parse(this.toString("d")+" "+t):this.set(t)}
r.fromNow=r.after=function(e){var t={}
t[this._dateElement]=this
return(e?e.clone():new Date).add(t)}
r.ago=r.before=function(e){var t={}
t[this._dateElement]=-1*this
return(e?e.clone():new Date).add(t)}
var a,i="sunday monday tuesday wednesday thursday friday saturday".split(/\s/),o="january february march april may june july august september october november december".split(/\s/),s="Millisecond Second Minute Hour Day Week Month Year".split(/\s/),u="Milliseconds Seconds Minutes Hours Date Week Month FullYear".split(/\s/),l="final first second third fourth fifth".split(/\s/)
t.toObject=function(){var e={}
for(var t=0;t<s.length;t++)e[s[t].toLowerCase()]=this["get"+u[t]]()
return e}
e.fromObject=function(e){e.week=null
return Date.today().set(e)}
var c=function(t){return function(){if(this._is){this._is=false
return this.getDay()==t}if(null!==this._nth){this._isSecond&&this.addSeconds(-1*this._orient)
this._isSecond=false
var n=this._nth
this._nth=null
var r=this.clone().moveToLastDayOfMonth()
this.moveToNthOccurrence(t,n)
if(this>r)throw new RangeError(e.getDayName(t)+" does not occur "+n+" times in the month of "+e.getMonthName(r.getMonth())+" "+r.getFullYear()+".")
return this}return this.moveToDayOfWeek(t,this._orient)}}
var d=function(t){return function(){var r=e.today(),a=t-r.getDay()
0===t&&1===n.firstDayOfWeek&&0!==r.getDay()&&(a+=7)
return r.addDays(a)}}
for(var f=0;f<i.length;f++){e[i[f].toUpperCase()]=e[i[f].toUpperCase().substring(0,3)]=f
e[i[f]]=e[i[f].substring(0,3)]=d(f)
t[i[f]]=t[i[f].substring(0,3)]=c(f)}var h=function(e){return function(){if(this._is){this._is=false
return this.getMonth()===e}return this.moveToMonth(e,this._orient)}}
var m=function(t){return function(){return e.today().set({month:t,day:1})}}
for(var p=0;p<o.length;p++){e[o[p].toUpperCase()]=e[o[p].toUpperCase().substring(0,3)]=p
e[o[p]]=e[o[p].substring(0,3)]=m(p)
t[o[p]]=t[o[p].substring(0,3)]=h(p)}var _=function(e){return function(){if(this._isSecond){this._isSecond=false
return this}if(this._same){this._same=this._is=false
var t=this.toObject(),n=(arguments[0]||new Date).toObject(),r="",a=e.toLowerCase()
for(var i=s.length-1;i>-1;i--){r=s[i].toLowerCase()
if(t[r]!=n[r])return false
if(a==r)break}return true}"s"!=e.substring(e.length-1)&&(e+="s")
return this["add"+e](this._orient)}}
var g=function(e){return function(){this._dateElement=e
return this}}
for(var y=0;y<s.length;y++){a=s[y].toLowerCase()
t[a]=t[a+"s"]=_(s[y])
r[a]=r[a+"s"]=g(a)}t._ss=_("Second")
var v=function(e){return function(t){if(this._same)return this._ss(arguments[0])
if(t||0===t)return this.moveToNthOccurrence(t,e)
this._nth=e
if(2===e&&(void 0===t||null===t)){this._isSecond=true
return this.addSeconds(this._orient)}return this}}
for(var b=0;b<l.length;b++)t[l[b]]=v(0===b?-1:b)})();(function(){Date.Parsing={Exception:function(e){this.message="Parse error at '"+e.substring(0,10)+" ...'"}}
var e=Date.Parsing
var t=e.Operators={rtoken:function(t){return function(n){var r=n.match(t)
if(r)return[r[0],n.substring(r[0].length)]
throw new e.Exception(n)}},token:function(e){return function(e){return t.rtoken(new RegExp("^s*"+e+"s*"))(e)}},stoken:function(e){return t.rtoken(new RegExp("^"+e))},until:function(e){return function(t){var n=[],r=null
while(t.length){try{r=e.call(this,t)}catch(e){n.push(r[0])
t=r[1]
continue}break}return[n,t]}},many:function(e){return function(t){var n=[],r=null
while(t.length){try{r=e.call(this,t)}catch(e){return[n,t]}n.push(r[0])
t=r[1]}return[n,t]}},optional:function(e){return function(t){var n=null
try{n=e.call(this,t)}catch(e){return[null,t]}return[n[0],n[1]]}},not:function(t){return function(n){try{t.call(this,n)}catch(e){return[null,n]}throw new e.Exception(n)}},ignore:function(e){return e?function(t){var n=null
n=e.call(this,t)
return[null,n[1]]}:null},product:function(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1),r=[]
for(var a=0;a<e.length;a++)r.push(t.each(e[a],n))
return r},cache:function(t){var n={},r=null
return function(a){try{r=n[a]=n[a]||t.call(this,a)}catch(e){r=n[a]=e}if(r instanceof e.Exception)throw r
return r}},any:function(){var t=arguments
return function(n){var r=null
for(var a=0;a<t.length;a++){if(null==t[a])continue
try{r=t[a].call(this,n)}catch(e){r=null}if(r)return r}throw new e.Exception(n)}},each:function(){var t=arguments
return function(n){var r=[],a=null
for(var i=0;i<t.length;i++){if(null==t[i])continue
try{a=t[i].call(this,n)}catch(t){throw new e.Exception(n)}r.push(a[0])
n=a[1]}return[r,n]}},all:function(){var e=arguments,t=t
return t.each(t.optional(e))},sequence:function(n,r,a){r=r||t.rtoken(/^\s*/)
a=a||null
if(1==n.length)return n[0]
return function(t){var i=null,o=null
var s=[]
for(var u=0;u<n.length;u++){try{i=n[u].call(this,t)}catch(e){break}s.push(i[0])
try{o=r.call(this,i[1])}catch(e){o=null
break}t=o[1]}if(!i)throw new e.Exception(t)
if(o)throw new e.Exception(o[1])
if(a)try{i=a.call(this,i[1])}catch(t){throw new e.Exception(i[1])}return[s,i?i[1]:t]}},between:function(e,n,a){a=a||e
var i=t.each(t.ignore(e),n,t.ignore(a))
return function(e){var t=i.call(this,e)
return[[t[0][0],r[0][2]],t[1]]}},list:function(e,n,r){n=n||t.rtoken(/^\s*/)
r=r||null
return e instanceof Array?t.each(t.product(e.slice(0,-1),t.ignore(n)),e.slice(-1),t.ignore(r)):t.each(t.many(t.each(e,t.ignore(n))),px,t.ignore(r))},set:function(n,r,a){r=r||t.rtoken(/^\s*/)
a=a||null
return function(i){var o=null,s=null,u=null,l=null,c=[[],i],d=false
for(var f=0;f<n.length;f++){u=null
s=null
o=null
d=1==n.length
try{o=n[f].call(this,i)}catch(e){continue}l=[[o[0]],o[1]]
if(o[1].length>0&&!d)try{u=r.call(this,o[1])}catch(e){d=true}else d=true
d||0!==u[1].length||(d=true)
if(!d){var h=[]
for(var m=0;m<n.length;m++)f!=m&&h.push(n[m])
s=t.set(h,r).call(this,u[1])
if(s[0].length>0){l[0]=l[0].concat(s[0])
l[1]=s[1]}}l[1].length<c[1].length&&(c=l)
if(0===c[1].length)break}if(0===c[0].length)return c
if(a){try{u=a.call(this,c[1])}catch(t){throw new e.Exception(c[1])}c[1]=u[1]}return c}},forward:function(e,t){return function(n){return e[t].call(this,n)}},replace:function(e,t){return function(n){var r=e.call(this,n)
return[t,r[1]]}},process:function(e,t){return function(n){var r=e.call(this,n)
return[t.call(this,r[0]),r[1]]}},min:function(t,n){return function(r){var a=n.call(this,r)
if(a[0].length<t)throw new e.Exception(r)
return a}}}
var n=function(e){return function(){var t=null,n=[]
arguments.length>1?t=Array.prototype.slice.call(arguments):arguments[0]instanceof Array&&(t=arguments[0])
if(!t)return e.apply(null,arguments)
for(var r=0,a=t.shift();r<a.length;r++){t.unshift(a[r])
n.push(e.apply(null,t))
t.shift()
return n}}}
var a="optional not ignore cache".split(/\s/)
for(var i=0;i<a.length;i++)t[a[i]]=n(t[a[i]])
var o=function(e){return function(){return arguments[0]instanceof Array?e.apply(null,arguments[0]):e.apply(null,arguments)}}
var s="each any all".split(/\s/)
for(var u=0;u<s.length;u++)t[s[u]]=o(t[s[u]])})();(function(){var e=Date,t=(e.prototype,e.CultureInfo)
var n=function e(t){var n=[]
for(var r=0;r<t.length;r++)t[r]instanceof Array?n=n.concat(e(t[r])):t[r]&&n.push(t[r])
return n}
e.Grammar={}
e.Translator={hour:function(e){return function(){this.hour=Number(e)}},minute:function(e){return function(){this.minute=Number(e)}},second:function(e){return function(){this.second=Number(e)}},meridian:function(e){return function(){this.meridian=e.slice(0,1).toLowerCase()}},timezone:function(e){return function(){var t=e.replace(/[^\d\+\-]/g,"")
t.length?this.timezoneOffset=Number(t):"Z"==e?this.timezoneOffset=0:this.timezone=e.toLowerCase()}},day:function(e){var t=e[0]
return function(){this.day=Number(t.match(/\d+/)[0])}},month:function(e){return function(){this.month=3==e.length?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(e)/4:Number(e)-1}},year:function(e){return function(){var n=Number(e)
this.year=e.length>2?n:n+(n+2e3<t.twoDigitYearMax?2e3:1900)}},rday:function(e){return function(){switch(e){case"yesterday":this.days=-1
break
case"tomorrow":this.days=1
break
case"today":this.days=0
break
case"now":this.days=0
this.now=true}}},finishExact:function(t){t=t instanceof Array?t:[t]
for(var n=0;n<t.length;n++)t[n]&&t[n].call(this)
var r=new Date
!this.hour&&!this.minute||this.month||this.year||this.day||(this.day=r.getDate())
this.year||(this.year=r.getFullYear())
this.month||0===this.month||(this.month=r.getMonth())
this.day||(this.day=1)
this.hour||(this.hour=0)
this.minute||(this.minute=0)
this.second||(this.second=0)
this.meridian&&this.hour&&("p"==this.meridian&&this.hour<12?this.hour=this.hour+12:"a"==this.meridian&&12==this.hour&&(this.hour=0))
if(this.day>e.getDaysInMonth(this.year,this.month))throw new RangeError(this.day+" is not a valid value for days.")
var a=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second)
this.timezone?a.set({timezone:this.timezone}):null!=this.timezoneOffset&&a.set({timezoneOffset:this.timezoneOffset})
return a},finish:function(t){t=t instanceof Array?n(t):[t]
if(0===t.length)return null
for(var r=0;r<t.length;r++)"function"==typeof t[r]&&t[r].call(this)
var a=e.today()
if(this.now&&!this.unit&&!this.operator)return new Date
this.now&&(a=new Date)
var i=!!(this.days&&null!==this.days||this.orient||this.operator)
var o,s,u
u="past"==this.orient||"subtract"==this.operator?-1:1
this.now||-1=="hour minute second".indexOf(this.unit)||a.setTimeToNow()
if((this.month||0===this.month)&&-1!="year day hour minute second".indexOf(this.unit)){this.value=this.month+1
this.month=null
i=true}if(!i&&this.weekday&&!this.day&&!this.days){var l=Date[this.weekday]()
this.day=l.getDate()
this.month||(this.month=l.getMonth())
this.year=l.getFullYear()}if(i&&this.weekday&&"month"!=this.unit){this.unit="day"
o=e.getDayNumberFromName(this.weekday)-a.getDay()
s=7
this.days=o?(o+u*s)%s:u*s}if(this.month&&"day"==this.unit&&this.operator){this.value=this.month+1
this.month=null}null!=this.value&&null!=this.month&&null!=this.year&&(this.day=1*this.value)
if(this.month&&!this.day&&this.value){a.set({day:1*this.value})
i||(this.day=1*this.value)}if(!this.month&&this.value&&"month"==this.unit&&!this.now){this.month=this.value
i=true}if(i&&(this.month||0===this.month)&&"year"!=this.unit){this.unit="month"
o=this.month-a.getMonth()
s=12
this.months=o?(o+u*s)%s:u*s
this.month=null}this.unit||(this.unit="day")
if(!this.value&&this.operator&&null!==this.operator&&this[this.unit+"s"]&&null!==this[this.unit+"s"])this[this.unit+"s"]=this[this.unit+"s"]+("add"==this.operator?1:-1)+(this.value||0)*u
else if(null==this[this.unit+"s"]||null!=this.operator){this.value||(this.value=1)
this[this.unit+"s"]=this.value*u}this.meridian&&this.hour&&("p"==this.meridian&&this.hour<12?this.hour=this.hour+12:"a"==this.meridian&&12==this.hour&&(this.hour=0))
if(this.weekday&&!this.day&&!this.days){l=Date[this.weekday]()
this.day=l.getDate()
l.getMonth()!==a.getMonth()&&(this.month=l.getMonth())}!this.month&&0!==this.month||this.day||(this.day=1)
if(!this.orient&&!this.operator&&"week"==this.unit&&this.value&&!this.day&&!this.month)return Date.today().setWeek(this.value)
i&&this.timezone&&this.day&&this.days&&(this.day=this.days)
return i?a.add(this):a.set(this)}}
var r,a=e.Parsing.Operators,i=e.Grammar,o=e.Translator
i.datePartDelimiter=a.rtoken(/^([\s\-\.\,\/\x27]+)/)
i.timePartDelimiter=a.stoken(":")
i.whiteSpace=a.rtoken(/^\s*/)
i.generalDelimiter=a.rtoken(/^(([\s\,]|at|@|on)+)/)
var s={}
i.ctoken=function(e){var n=s[e]
if(!n){var r=t.regexPatterns
var i=e.split(/\s+/),o=[]
for(var u=0;u<i.length;u++)o.push(a.replace(a.rtoken(r[i[u]]),i[u]))
n=s[e]=a.any.apply(null,o)}return n}
i.ctoken2=function(e){return a.rtoken(t.regexPatterns[e])}
i.h=a.cache(a.process(a.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),o.hour))
i.hh=a.cache(a.process(a.rtoken(/^(0[0-9]|1[0-2])/),o.hour))
i.H=a.cache(a.process(a.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),o.hour))
i.HH=a.cache(a.process(a.rtoken(/^([0-1][0-9]|2[0-3])/),o.hour))
i.m=a.cache(a.process(a.rtoken(/^([0-5][0-9]|[0-9])/),o.minute))
i.mm=a.cache(a.process(a.rtoken(/^[0-5][0-9]/),o.minute))
i.s=a.cache(a.process(a.rtoken(/^([0-5][0-9]|[0-9])/),o.second))
i.ss=a.cache(a.process(a.rtoken(/^[0-5][0-9]/),o.second))
i.hms=a.cache(a.sequence([i.H,i.m,i.s],i.timePartDelimiter))
i.t=a.cache(a.process(i.ctoken2("shortMeridian"),o.meridian))
i.tt=a.cache(a.process(i.ctoken2("longMeridian"),o.meridian))
i.z=a.cache(a.process(a.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),o.timezone))
i.zz=a.cache(a.process(a.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),o.timezone))
i.zzz=a.cache(a.process(i.ctoken2("timezone"),o.timezone))
i.Z=a.cache(a.process(a.stoken("Z"),o.timezone))
i.timeSuffix=a.each(a.ignore(i.whiteSpace),a.set([i.tt,i.zzz]))
i.time=a.each(a.optional(a.ignore(a.stoken("T"))),i.hms,i.timeSuffix)
i.d=a.cache(a.process(a.each(a.rtoken(/^([0-2]\d|3[0-1]|\d)/),a.optional(i.ctoken2("ordinalSuffix"))),o.day))
i.dd=a.cache(a.process(a.each(a.rtoken(/^([0-2]\d|3[0-1])/),a.optional(i.ctoken2("ordinalSuffix"))),o.day))
i.ddd=i.dddd=a.cache(a.process(i.ctoken("sun mon tue wed thu fri sat"),function(e){return function(){this.weekday=e}}))
i.M=a.cache(a.process(a.rtoken(/^(1[0-2]|0\d|\d)/),o.month))
i.MM=a.cache(a.process(a.rtoken(/^(1[0-2]|0\d)/),o.month))
i.MMM=i.MMMM=a.cache(a.process(i.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),o.month))
i.y=a.cache(a.process(a.rtoken(/^(\d\d?)/),o.year))
i.yy=a.cache(a.process(a.rtoken(/^(\d\d)/),o.year))
i.yyy=a.cache(a.process(a.rtoken(/^(\d\d?\d?\d?)/),o.year))
i.yyyy=a.cache(a.process(a.rtoken(/^(\d\d\d\d)/),o.year))
r=function(){return a.each(a.any.apply(null,arguments),a.not(i.ctoken2("timeContext")))}
i.day=r(i.d,i.dd)
i.month=r(i.M,i.MMM)
i.year=r(i.yyyy,i.yy)
i.orientation=a.process(i.ctoken("past future"),function(e){return function(){this.orient=e}})
i.operator=a.process(i.ctoken("add subtract"),function(e){return function(){this.operator=e}})
i.rday=a.process(i.ctoken("yesterday tomorrow today now"),o.rday)
i.unit=a.process(i.ctoken("second minute hour day week month year"),function(e){return function(){this.unit=e}})
i.value=a.process(a.rtoken(/^\d\d?(st|nd|rd|th)?/),function(e){return function(){this.value=e.replace(/\D/g,"")}})
i.expression=a.set([i.rday,i.operator,i.value,i.unit,i.orientation,i.ddd,i.MMM])
r=function(){return a.set(arguments,i.datePartDelimiter)}
i.mdy=r(i.ddd,i.month,i.day,i.year)
i.ymd=r(i.ddd,i.year,i.month,i.day)
i.dmy=r(i.ddd,i.day,i.month,i.year)
i.date=function(e){return(i[t.dateElementOrder]||i.mdy).call(this,e)}
i.format=a.process(a.many(a.any(a.process(a.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?|Z)/),function(t){if(i[t])return i[t]
throw e.Parsing.Exception(t)}),a.process(a.rtoken(/^[^dMyhHmstzZ]+/),function(e){return a.ignore(a.stoken(e))}))),function(e){return a.process(a.each.apply(null,e),o.finishExact)})
var u={}
var l=function(e){return u[e]=u[e]||i.format(e)[0]}
i.formats=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++)t.push(l(e[n]))
return a.any.apply(null,t)}return l(e)}
i._formats=i.formats(['"yyyy-MM-ddTHH:mm:ssZ"',"yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"])
i._start=a.process(a.set([i.date,i.time,i.expression],i.generalDelimiter,i.whiteSpace),o.finish)
i.start=function(e){try{var t=i._formats.call({},e)
if(0===t[1].length)return t}catch(e){}return i._start.call({},e)}
e._parse=e.parse
e.parse=function(t){var n=null
if(!t)return null
if(t instanceof Date)return t
try{n=e.Grammar.start.call({},t.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"))}catch(e){return null}return 0===n[1].length?n[0]:null}
e.getParseFunction=function(t){var n=e.Grammar.formats(t)
return function(e){var t=null
try{t=n.call({},e)}catch(e){return null}return 0===t[1].length?t[0]:null}}
e.parseExact=function(t,n){return e.getParseFunction(n)(t)}})()},"32f0":function(e,t,n){var r,a,i
o=function(e){var t=/\+/g
function n(e){return s.raw?e:encodeURIComponent(e)}function r(e){return s.raw?e:decodeURIComponent(e)}function a(e){return n(s.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"))
try{e=decodeURIComponent(e.replace(t," "))
return s.json?JSON.parse(e):e}catch(e){}}function o(t,n){var r=s.raw?t:i(t)
return e.isFunction(n)?n(r):r}var s=e.cookie=function(t,i,u){if(void 0!==i&&!e.isFunction(i)){u=e.extend({},s.defaults,u)
if("number"===typeof u.expires){var l=u.expires,c=u.expires=new Date
c.setTime(+c+864e5*l)}return document.cookie=[n(t),"=",a(i),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}var d=t?void 0:{}
var f=document.cookie?document.cookie.split("; "):[]
for(var h=0,m=f.length;h<m;h++){var p=f[h].split("=")
var _=r(p.shift())
var g=p.join("=")
if(t&&t===_){d=o(g,i)
break}t||void 0===(g=o(g))||(d[_]=g)}return d}
s.defaults={}
e.removeCookie=function(t,n){if(void 0===e.cookie(t))return false
e.cookie(t,"",e.extend({},n,{expires:-1}))
return!e.cookie(t)}},a=[n("ouhR")],r=o,i="function"===typeof r?r.apply(t,a):r,void 0!==i&&(e.exports=i)
var o},"3G7n":function(e,t){(function(e){e.support.touch="ontouchend"in document
if(!e.support.touch)return
var t,n=e.ui.mouse.prototype,r=n._mouseInit,a=n._mouseDestroy
function i(e,t){if(e.originalEvent.touches.length>1)return
e.preventDefault()
var n=e.originalEvent.changedTouches[0],r=document.createEvent("MouseEvents")
r.initMouseEvent(t,true,true,window,1,n.screenX,n.screenY,n.clientX,n.clientY,false,false,false,false,0,null)
e.target.dispatchEvent(r)}n._touchStart=function(e){var n=this
if(t||!n._mouseCapture(e.originalEvent.changedTouches[0]))return
t=true
n._touchMoved=false
i(e,"mouseover")
i(e,"mousemove")
i(e,"mousedown")}
n._touchMove=function(e){if(!t)return
this._touchMoved=true
i(e,"mousemove")}
n._touchEnd=function(e){if(!t)return
i(e,"mouseup")
i(e,"mouseout")
this._touchMoved||i(e,"click")
t=false}
n._mouseInit=function(){var t=this
t.element.bind({touchstart:e.proxy(t,"_touchStart"),touchmove:e.proxy(t,"_touchMove"),touchend:e.proxy(t,"_touchEnd")})
r.call(t)}
n._mouseDestroy=function(){var t=this
t.element.unbind({touchstart:e.proxy(t,"_touchStart"),touchmove:e.proxy(t,"_touchMove"),touchend:e.proxy(t,"_touchEnd")})
a.call(t)}})(jQuery)},"3oW2":function(e,t,n){"use strict"
n.d(t,"c",function(){return o})
n.d(t,"b",function(){return s})
n.d(t,"a",function(){return u})
n.d(t,"d",function(){return l})
var r=n("ouhR")
var a=n.n(r)
var i={TeX:{extensions:["color.js"]}}
function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(u()){if("function"===typeof t){window.MathJax.Hub.Reprocess()
t()}}else{window.MathJax=i
a.a.getScript("//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=".concat(e),t)}}function s(){var e=a()("math:visible").toArray()
return e.some(function(e){return a()(e).parent(".hidden-readable").length<=0})}function u(){return!("undefined"===typeof MathJax)}function l(e){window.MathJax&&window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,e])}},"4ynT":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=["0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2), 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1)","0 0.1875rem 0.375rem rgba(0, 0, 0, 0.1), 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16)","0 0.375rem 0.4375rem rgba(0, 0, 0, 0.1), 0 0.625rem 1.75rem rgba(0, 0, 0, 0.25)"]
var a=Object.freeze({depth1:r[0],depth2:r[1],depth3:r[2],resting:r[0],above:r[1],topmost:r[2]})
t.default=a},"5Ky4":function(e,t,n){"use strict"
n.d(t,"a",function(){return l})
var r=n("1OyB")
var a=n("vuIU")
var i=n("u7Gu")
var o=function(){function e(t){Object(r["a"])(this,e)
this.string="string"===typeof t?t:"".concat(t)}Object(a["a"])(e,[{key:"toString",value:function(){return this.string}}])
return e}()
var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"}
function u(e){return e.replace(/[&<>"'\/`=]/g,function(e){return s[e]})}function l(e){if("string"===typeof e)return u(e)
if(e instanceof o)return e
if("number"===typeof e)return l(e.toString())
for(var t in e){var n=e[t]
"string"===typeof n&&(e[t]=u(n))}return e}l.SafeString=o
i["a"].htmlEscape=l
var c=Object.keys(s).reduce(function(e,t){var n=s[t]
e[n]=t
return e},{})
var d="(?:".concat(Object.keys(c).join("|"),")")
var f=new RegExp(d,"g")
function h(e){return e.replace(f,function(e){return c[e]})}l.unescape=h},"5iuq":function(e,t,n){"use strict"
var r=n("GLiE")
var a,i,o,s=[].slice
i=["attach","afterRender","initialize"]
a=RegExp("^(?:__("+i.join("|")+")__|("+i.join("|")+"))$")
t["a"]=o=function(){var e,t,n,u,l,c,d,f,h,m,p,_,g,y,v,b,w
w=arguments[0],h=2<=arguments.length?s.call(arguments,1):[]
"function"===typeof w&&(w=w.prototype)
for(t=0,l=h.length;t<l;t++){o=h[t]
for(u in o){g=o[u]
if("events"===u||"defaults"===u||"els"===u){_=null!=(y=w.constructor)?y.prototype[u]:void 0
w[u]=Object(r["extend"])({},_,w[u],g)}else if(d=u.match(a)){v=d.slice(1),e=v[0],p=v[1];(w[m="__"+(e||p)+"__"]||(w[m]=[])).push(g)}else w[u]=g}}b=function(){var e,t,n
n=[]
for(e=0,t=i.length;e<t;e++){f=i[e]
n.push("__"+f+"__")}return n}()
for(n=0,c=b.length;n<c;n++){u=b[n]
w[u]&&(w[u]=Object(r["flatten"])(w[u],true))}return w}},"5oMp":function(e,t,n){"use strict"
e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"60Hp":function(e,t,n){"use strict"
var r=n("o0o1")
var a=n.n(r)
var i=n("HaE+")
var o=n("ODXe")
var s=n("x1Tw")
var u=n("Qyje")
var l=n.n(u)
var c=n("pQTu")
var d=n("m0r6")
Object(d["a"])({ar:{canvas_failed_to_complete_the_upload_864a4c0f:"فشل Canvas في إكمال التحميل.",canvas_failed_to_initiate_the_upload_8e3824d5:"فشل Canvas في بدء التحميل.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"يتعذر نقل الملف إلى خدمة التخزين. قد تكون الخدمة معطلة أو قد تحتاج إلى إعادة تسجيل الدخول إلى Canvas."},cy:{canvas_failed_to_complete_the_upload_864a4c0f:"Mae Canvas wedi methu cwblhau’r broses llwytho i fyny.",canvas_failed_to_initiate_the_upload_8e3824d5:"Mae Canvas wedi methu rhoi’r broses llwytho i fyny ar waith.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Doedd dim modd trosglwyddo ffeil i’r gwasanaeth storio. Efallai nad yw’r gwasanaeth ar gael ar hyn o bryd, neu efallai y bydd angen i chi fewngofnodi eto i Canvas."},da:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas kunne ikke afslutte uploaden.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas kunne ikke påbegynde uploaden.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},"da-x-k12":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas kunne ikke fuldføre uploaden.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas kunne ikke påbegynde uploaden.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},de:{canvas_failed_to_complete_the_upload_864a4c0f:"Upload fehlgeschlagen",canvas_failed_to_initiate_the_upload_8e3824d5:"Initialisierung des Upload fehlgeschlagen",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Übertragung der Datei in den Speicher-Service ist fehlgeschlagen. Entweder ist der Service heruntergefahren oder Sie müssen sich erneut bei Canvas anmelden."},"en-AU":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas failed to complete the upload.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas failed to initiate the upload.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-AU-x-unimelb":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas failed to complete the upload.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas failed to initiate the upload.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-CA":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas failed to complete the upload.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas failed to initiate the upload.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas failed to complete the upload.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas failed to initiate the upload.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB-x-lbs":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas failed to complete the upload.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas failed to initiate the upload.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB-x-ukhe":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas failed to complete the upload.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas failed to initiate the upload.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},es:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas no pudo completar la carga.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas no pudo iniciar la carga.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"No se pudo transmitir el archivo al servicio de almacenamiento. Es posible que el servicio no esté funcionando o que tenga que volver a iniciar sesión en Canvas."},fr:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas n'a pas réussi à terminer le téléchargement.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas n'a pas réussi à lancer le téléchargement.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Impossible de transmettre le fichier au service de stockage. Le service peut être en panne ou vous devez peut-être vous reconnecter à Canvas."},"fr-CA":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas a échoué de conclure le téléversement.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas n'a pu commencer le téléversement.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Impossible d’envoyer le fichier au service de stockage. Le service peut être inactif ou vous pourriez avoir besoin de vous connecter de nouveau à Canvas."},ht:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas pa reyisi fini telechajman an.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas pa reyisi lanse telechajman an.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Enposib pou transmèt fichye nan sèvis estokaj la. Petèt ke sèvis la an pàn oswa ou ka bezwen rekonekte sou Canvas."},is:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas tókst ekki að klára upphalið",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas gat ekki byrjað upphalið.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Ekki tókst að senda skjal í geymslu. Annaðhvort liggur þjónustan niðri eða þú þarft að endurinnskrá þig á Canvas."},it:{canvas_failed_to_complete_the_upload_864a4c0f:"Impossibile completare il caricamento in Canvas.",canvas_failed_to_initiate_the_upload_8e3824d5:"Impossibile inizializzare il caricamento in Canvas.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Impossibile trasmettere il file al servizio di archiviazione. Il servizio potrebbe essere inattivo o potrebbe essere necessario effettuare nuovamente l'accesso a Canvas."},ja:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas はアップロードを完了できませんでした。",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas はアップロードを開始できませんでした。",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"ストレージサービスにファイルを送信できません。サービスが停止しているか、Canvas に再度ログインする必要があるかもしれません。"},mi:{canvas_failed_to_complete_the_upload_864a4c0f:"I rahua a Canvas ki te whakaoti i te tukuake.",canvas_failed_to_initiate_the_upload_8e3824d5:"I rahua a Canvas ki te tīmata i te tukuake.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Kāore e taea te tuku kōnae ki te ratonga rokiroki. Ka mutu te ratonga, ka hiahia pea koe ki te whakauru atu anō ki Canvas."},nb:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas kan ikke fullføre opplastingen.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas kunne ikke starte opplastingen.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Kan ikke overføre fil til lagringsenhet. Denne tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},"nb-x-k12":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas kunne ikke fullføre opplastingen.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas kunne ikke starte opplastingen.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Kunne ikke overføre fil til lagringsenhet. Tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},nl:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas kan de upload niet uitvoeren.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas kan de upload niet initiëren.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Kan bestand niet overzetten naar de opslagservice. Misschien is de service niet geactiveerd of moet je je opnieuw aanmelden bij Canvas."},nn:{unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Kan ikkje overføre fil til lagringsteneste. Tenesta kan vere nede eller du må logge inn i Canvas på nytt."},pl:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas nie może ukończyć przesyłania.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas nie może rozpocząć przesyłania.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Nie można przesłać pliku do usługi przechowywania. Usługa może być niedostępna lub wymagane jest ponowne zalogowanie w Canvas."},pt:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas falhou ao concluir o carregamento.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas falhou ao iniciar o carregamento.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Não é possível transmitir o ficheiro para o serviço de armazenamento. O serviço pode estar inativo ou você pode precisar fazer o login novamente no Canvas."},"pt-BR":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas falhou em importar o carregamento.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas falhou em iniciar o carregamento.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Incapaz de transmitir o arquivo para o serviço de armazenamento. O serviço pode estar interrompido ou você precisa fazer login novamente no Canvas."},ru:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas не удается завершить отправку.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas не удается запустить отправку.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Невозможно передать файл на устройство хранения. Сервис может быть отключен, или вам может быть необходимо выйти и снова войти в Canvas."},sl:{canvas_failed_to_complete_the_upload_864a4c0f:"Zaključevanje nalaganja v sistemu Canvas ni uspelo.",canvas_failed_to_initiate_the_upload_8e3824d5:"Zagon nalaganja v sistemu Canvas ni uspel.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Datoteke ni mogoče prenesti v storitev shranjevanja. Storitev morda ne deluje ali pa se morate znova prijaviti v sistem Canvas."},sv:{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas misslyckades med att slutföra uppladdningen.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas misslyckades med att initiera uppladdningen.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan vara nere, eller så kan du behöva logga in till Canvas igen."},"sv-x-k12":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas misslyckades att slutföra uppladdningen.",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas misslyckades med att initiera uppladdningen.",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan vara nere eller så kan du behöva logga in på Canvas igen."},"zh-Hans":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas 无法完成上传。",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas 无法启动上传。",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"无法将文件传输到存储服务。服务可能中断，或者您可能需要重新登录到 Canvas。"},"zh-Hant":{canvas_failed_to_complete_the_upload_864a4c0f:"Canvas 無法完成上傳。",canvas_failed_to_initiate_the_upload_8e3824d5:"Canvas 無法啟動上傳。",unable_to_transmit_file_to_the_storage_service_the_2d80b29e:"無法將檔案傳輸到儲存空間服務。該服務可能已關閉，或者您可能需要重新登入 Canvas。"}})
n("jQeR")
n("0sPK")
var f=c["default"].scoped("upload_file")
var h=n("jpBB")
n.d(t,"d",function(){return g})
n.d(t,"a",function(){return y})
n.d(t,"b",function(){return v})
n.d(t,"e",function(){return w})
n.d(t,"c",function(){return x})
function m(e){if("Network Error"===e.message){var t=new Error(f.t("Canvas failed to initiate the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function p(e){if("Network Error"===e.message){var t=new Error(f.t("Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function _(e){if("Network Error"===e.message){var t=new Error(f.t("Canvas failed to complete the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function g(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s["default"]
if(!n&&!t.url)throw new Error("expected either a file to upload or a url to clone",{file:n,preflightData:t})
if(n&&t.url)throw new Error("can't upload with both a file object and a url to clone",{file:n,preflightData:t})
t.no_redirect=true
t["attachment[context_code]"]&&(t=l.a.stringify(t))
return r.post(e,t).catch(m).then(function(e){return y(e.data,n,{ajaxLib:r})})}function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r=n.ajaxLib||s["default"]
e&&e.attachments&&e.attachments[0]&&(e=e.attachments[0])
if(!e)throw new Error("expected a preflightResponse")
if(t&&!e.upload_url)throw new Error("expected a preflightResponse with an upload_url",{preflightResponse:e})
if(!t&&!e.progress)throw new Error("expected a preflightResponse with a progress",{preflightResponse:e})
var a=e,i=a.upload_url,u=a.progress
if(!i)return Object(h["a"])(u,{ajaxLib:r}).catch(_)
var c=e,d=c.file_param,f=c.upload_params,m=c.success_url
d=d||"file"
f=f||{}
m=m||f.success_url
var g=!!m
var y=new FormData
Object.entries(f).forEach(function(e){var t=Object(o["a"])(e,2),n=t[0],r=t[1]
return y.append(n,r)})
t&&y.append(d,t,n.filename)
var v=r.post(i,y,{responseType:g?"document":"json",onUploadProgress:n.onProgress,withCredentials:!g})
return v.catch(p).then(function(e){if(u)return Object(h["a"])(u,{ajaxLib:r}).catch(_)
var t,a={}
if(m){var i=e.data,o=i.Bucket,s=i.Key,c=i.ETag
t=m
a={bucket:o,key:s,etag:c}}else if(201===e.status&&!n.ignoreResult){t=e.data.location
a={}}if(t){n.includeAvatar&&(a.include="avatar")
a=l.a.stringify(a)
a&&(t=-1!==t.indexOf("?")?"".concat(t,"&").concat(a):"".concat(t,"?").concat(a))
return r.get(t).then(function(e){var t=e.data
return t}).catch(_)}return e.data})}function v(e,t,n){return b.apply(this,arguments)}function b(){b=Object(i["a"])(a.a.mark(function e(t,n,r){var i,o
return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:i="/api/v1/courses/".concat(n,"/assignments/").concat(r,"/submissions/self/comments/files")
o=t.map(function(e){var t={name:e.name,content_type:e.type}
return g(i,t,e)})
return e.abrupt("return",Promise.all(o))
case 3:case"end":return e.stop()}},e)}))
return b.apply(this,arguments)}function w(e,t){return k.apply(this,arguments)}function k(){k=Object(i["a"])(a.a.mark(function e(t,n){var r
return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.map(function(e){var t={name:e.name,content_type:e.type}
return g(n,t,e)})
return e.abrupt("return",Promise.all(r))
case 2:case"end":return e.stop()}},e)}))
return k.apply(this,arguments)}function x(e){return"/api/v1/courses/".concat(e.env.courseId,"/assignments/").concat(e._id,"/submissions/").concat(e.env.currentUser.id,"/files")}},"8JOu":function(e,t,n){"use strict"
n.r(t)
var r=n("q1z7")
var a=n.n(r)
var i=n("GLiE")
var o=n.n(i)
var s=n("ouhR")
var u=n.n(s)
var l=n("JD5e")
var c=n("5Ky4")
a.a.syncWithoutMultipart=a.a.sync
a.a.syncWithMultipart=function(e,t,n){var r=o.a.uniqueId("file_upload_iframe_")
var a=u()('<iframe id="'.concat(r,'" name="').concat(r,'"></iframe>')).hide()
var i=new u.a.Deferred
var s={create:"POST",update:"PUT",delete:"DELETE",read:"GET"}[e]
function d(e,t,n){var r=o.a.map(e,function(e,r){t&&(r="".concat(t,"[").concat(n?"":r,"]"))
if(o.a.isElement(e)){var a=u()(e)
a.after(a.clone(true))
return e}if(!o.a.isEmpty(e)&&(o.a.isArray(e)||"object"===typeof e))return d(e,r,o.a.isArray(e))
if(!"".concat(r).match(/^_/)&&null!=e&&e instanceof Date)return u()("<input/>",{name:r,value:e.toISOString()})[0]
if(!"".concat(r).match(/^_/)&&null!=e&&"object"!==typeof e&&"function"!==typeof e)return u()("<input/>",{name:r,value:e})[0]})
return o.a.flatten(r)}var f=u()("<form\n      enctype='multipart/form-data'\n      target='".concat(r,"'\n      action='").concat(Object(c["a"])(n.url||t.url()),"'\n      method='POST'\n    >\n    </form>")).hide()
n.proxyAttachment&&f.prepend("<input type='hidden' name='_method' value='".concat(s,"' />\n      <input type='hidden' name='authenticity_token' value='").concat(Object(c["a"])(Object(l["a"])()),"' />"))
o.a.each(d(t.toJSON()),function(e){if(!e)return
f["file"===e.name?"append":"prepend"](e)})
u()(document.body).prepend(a,f)
function h(){var e=a[0].contentDocument&&a[0].contentDocument.body
var t=u.a.parseJSON(u()(e).text())
if(!t)return
t=null!=t.objects?t.objects:t
if("error"===e.className){"function"===typeof n.error&&n.error(t)
i.reject(t)}else{"function"===typeof n.success&&n.success(t)
i.resolve(t)}a.remove()
f.remove()}a[0].onload=h
f[0].submit()
return i}
t["default"]=a.a.sync=function(e,t,n){return a.a[n&&n.multipart?"syncWithMultipart":"syncWithoutMultipart"].apply(this,arguments)}},"8oxB":function(e,t){var n=e.exports={}
var r
var a
function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}(function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{a="function"===typeof clearTimeout?clearTimeout:o}catch(e){a=o}})()
function s(e){if(r===setTimeout)return setTimeout(e,0)
if((r===i||!r)&&setTimeout){r=setTimeout
return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function u(e){if(a===clearTimeout)return clearTimeout(e)
if((a===o||!a)&&clearTimeout){a=clearTimeout
return clearTimeout(e)}try{return a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}var l=[]
var c=false
var d
var f=-1
function h(){if(!c||!d)return
c=false
d.length?l=d.concat(l):f=-1
l.length&&m()}function m(){if(c)return
var e=s(h)
c=true
var t=l.length
while(t){d=l
l=[]
while(++f<t)d&&d[f].run()
f=-1
t=l.length}d=null
c=false
u(e)}n.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
l.push(new p(e,t))
1!==l.length||c||s(m)}
function p(e,t){this.fun=e
this.array=t}p.prototype.run=function(){this.fun.apply(null,this.array)}
n.title="browser"
n.browser=true
n.env={}
n.argv=[]
n.version=""
n.versions={}
function _(){}n.on=_
n.addListener=_
n.once=_
n.off=_
n.removeListener=_
n.removeAllListeners=_
n.emit=_
n.prependListener=_
n.prependOnceListener=_
n.listeners=function(e){return[]}
n.binding=function(e){throw new Error("process.binding is not supported")}
n.cwd=function(){return"/"}
n.chdir=function(e){throw new Error("process.chdir is not supported")}
n.umask=function(){return 0}},"9Duh":function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r);(function(){var e=0,t=/^ui-id-\d+$/
a.a.ui=a.a.ui||{}
if(a.a.ui.version)return
a.a.extend(a.a.ui,{version:"@VERSION",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})
a.a.fn.extend({_focus:a.a.fn.focus,focus:function(e,t){return"number"===typeof e?this.each(function(){var n=this
setTimeout(function(){a()(n).focus()
t&&t.call(n)},e)}):this._focus.apply(this,arguments)},scrollParent:function(){var e
e=a.a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.a.css(this,"position"))&&/(auto|scroll)/.test(a.a.css(this,"overflow")+a.a.css(this,"overflow-y")+a.a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.a.css(this,"overflow")+a.a.css(this,"overflow-y")+a.a.css(this,"overflow-x"))}).eq(0)
return/fixed/.test(this.css("position"))||!e.length?a()(document):e},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e)
if(this.length){var t,n,r=a()(this[0])
while(r.length&&r[0]!==document){t=r.css("position")
if("absolute"===t||"relative"===t||"fixed"===t){n=parseInt(r.css("zIndex"),10)
if(!isNaN(n)&&0!==n)return n}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})},removeUniqueId:function(){return this.each(function(){t.test(this.id)&&a()(this).removeAttr("id")})},disableSelection:function(){return this.bind((a.a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}})
a()("<a>").outerWidth(1).jquery||a.a.each(["Width","Height"],function(e,t){var n="Width"===t?["Left","Right"]:["Top","Bottom"],r=t.toLowerCase(),i={innerWidth:a.a.fn.innerWidth,innerHeight:a.a.fn.innerHeight,outerWidth:a.a.fn.outerWidth,outerHeight:a.a.fn.outerHeight}
function o(e,t,r,i){a.a.each(n,function(){t-=parseFloat(a.a.css(e,"padding"+this))||0
r&&(t-=parseFloat(a.a.css(e,"border"+this+"Width"))||0)
i&&(t-=parseFloat(a.a.css(e,"margin"+this))||0)})
return t}a.a.fn["inner"+t]=function(e){if(void 0===e)return i["inner"+t].call(this)
return this.each(function(){a()(this).css(r,o(this,e)+"px")})}
a.a.fn["outer"+t]=function(e,n){if("number"!==typeof e)return i["outer"+t].call(this,e)
return this.each(function(){a()(this).css(r,o(this,e,true,n)+"px")})}})
function n(e,t){var n,i,o,s=e.nodeName.toLowerCase()
if("area"===s){n=e.parentNode
i=n.name
if(!e.href||!i||"map"!==n.nodeName.toLowerCase())return false
o=a()("img[usemap=#"+i+"]")[0]
return!!o&&r(o)}return(/input|select|textarea|button|object/.test(s)?!e.disabled:"a"===s&&e.href||t)&&r(e)}function r(e){return!a()(e).parents().andSelf().filter(function(){return"hidden"===a.a.css(this,"visibility")||a.a.expr.filters.hidden(this)}).length}a.a.extend(a.a.expr[":"],{data:function(e,t,n){return!!a.a.data(e,n[3])},focusable:function(e){return n(e,!isNaN(a.a.attr(e,"tabindex")))},tabbable:function(e){var t=a.a.attr(e,"tabindex"),r=isNaN(t)
return(r||t>=0)&&n(e,!r)}})
a()(function(){var e=document.body,t=e.appendChild(t=document.createElement("div"))
a.a.extend(t.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0})
a.a.support.minHeight=true
a.a.support.selectstart="onselectstart"in t
e.removeChild(t).style.display="none"})
a.a.extend(a.a.ui,{plugin:{add:function(e,t,n){var r,i=a.a.ui[e].prototype
for(r in n){i.plugins[r]=i.plugins[r]||[]
i.plugins[r].push([t,n[r]])}},call:function(e,t,n){var r,a=e.plugins[t]
if(!a||!e.element[0].parentNode||11===e.element[0].parentNode.nodeType)return
for(r=0;r<a.length;r++)e.options[a[r][0]]&&a[r][1].apply(e.element,n)}},contains:a.a.contains,hasScroll:function(e,t){if("hidden"===a()(e).css("overflow"))return false
var n=t&&"left"===t?"scrollLeft":"scrollTop",r=false
if(e[n]>0)return true
e[n]=1
r=e[n]>0
e[n]=0
return r},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(e,t,n,r,i,o){return a.a.ui.isOverAxis(e,n,i)&&a.a.ui.isOverAxis(t,r,o)}})})()},"9rSQ":function(e,t,n){"use strict"
var r=n("xTJ+")
function a(){this.handlers=[]}a.prototype.use=function(e,t){this.handlers.push({fulfilled:e,rejected:t})
return this.handlers.length-1}
a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)}
a.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})}
e.exports=a},An8g:function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
var r
function a(e,t,n,a){r||(r="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103)
var i=e&&e.defaultProps
var o=arguments.length-3
t||0===o||(t={children:void 0})
if(t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s])
else t||(t=i||{})
if(1===o)t.children=a
else if(o>1){var u=new Array(o)
for(var l=0;l<o;l++)u[l]=arguments[l+3]
t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}},BEtg:function(e,t){e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}
function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}},BTe1:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var r="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var a=r.length-1
function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(s("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function o(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var i=o(t)
while(0<t--)n+=r[i[t]&a]
return n}},Bnag:function(e,t){function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}e.exports=n},Cf7h:function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
var r=n("jJIg")
function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
var n=e.match(/(.*)_(\d+)$/)
if(n){var a=t?Object(r["a"])(n[1]):n[1]
return[a,n[2]]}}},CgaS:function(e,t,n){"use strict"
var r=n("JEQr")
var a=n("xTJ+")
var i=n("9rSQ")
var o=n("UnBK")
function s(e){this.defaults=e
this.interceptors={request:new i,response:new i}}s.prototype.request=function(e){"string"===typeof e&&(e=a.merge({url:arguments[0]},arguments[1]))
e=a.merge(r,{method:"get"},this.defaults,e)
e.method=e.method.toLowerCase()
var t=[o,void 0]
var n=Promise.resolve(e)
this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)})
this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)})
while(t.length)n=n.then(t.shift(),t.shift())
return n}
a.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}})
a.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}})
e.exports=s},DSFK:function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
function r(e){if(Array.isArray(e))return e}},DfZB:function(e,t,n){"use strict"
e.exports=function(e){return function(t){return e.apply(null,t)}}},EbDI:function(e,t){function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}e.exports=n},FF4x:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
function i(e){var t=a.a.Event("keyclick")
a()(e.target).trigger(t)
t.isDefaultPrevented()&&e.preventDefault()
t.isPropagationStopped()&&e.stopPropagation()}function o(e){switch(e.which){case 13:return i(e)
case 32:return e.preventDefault()}}function s(e){switch(e.which){case 32:return i(e)}}a.a.fn.activate_keyclick=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
this.on("keydown",e,o)
return this.on("keyup",e,s)}
a()(document).activate_keyclick("[role=button], [role=checkbox]")},FIFq:function(e,t,n){var r=n("q1z7")
n("8JOu")
n("GzKq")
n("ueiF")
n("y2nt")
e.exports=r},Fpyj:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=Object.freeze({topmost:9999,above:1,below:-1,deepest:-9999})
t.default=r},GLiE:function(e,t,n){var r=n("nxX+")
e.exports=r.noConflict()},GXgh:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var r=n("S28n")
var a=s(r)
var i=n("2Knc")
var o=s(i)
function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=o.default.htmlEscape
e.interpolateWithoutHtmlSafety=e.interpolate
e.interpolate=function(e,n){var r=false
var i=e.match(this.PLACEHOLDER)||[]
var s=i.length
var u
var l=[]
var c
var d
var f=n.wrappers||n.wrapper
if(f){r=true
e=t(e)
e=a.default.applyWrappers(e,f)}for(d=0;d<s;d++){u=i[d]
c=u.replace(this.PLACEHOLDER,"$1")
l.push(c)
if(!(c in n))continue
"h"===u[1]&&(n[c]=new o.default.HtmlSafeString(n[c]))
n[c]instanceof o.default.HtmlSafeString&&(r=true)}if(r){f||(e=t(e))
for(d=0;d<s;d++){c=l[d]
if(!(c in n))continue
n[c]=t(n[c])}}e=this.interpolateWithoutHtmlSafety(e,n)
return r?new o.default.HtmlSafeString(e):e}
e.PLACEHOLDER=/(?:\{\{|%h?\{)(.*?)(?:\}\}?)/gm
e.CallHelpers=a.default
e.Utils=o.default
e.translateWithoutI18nliner=e.translate
e.translate=function(){var e=a.default.inferArguments([].slice.call(arguments))
var t=e[0]
var n=e[1]
t=a.default.normalizeKey(t,n)
var r=n.defaultValue
r&&(n.defaultValue=a.default.normalizeDefault(r,n))
return this.translateWithoutI18nliner(t,n)}
e.t=e.translate}
t.default=u},GzKq:function(e,t,n){"use strict"
n.r(t)
var r=n("5iuq")
var a=n("GLiE")
var i=n.n(a)
var o=n("q1z7")
var s=n.n(o)
i.a.extend(s.a.Model.prototype,{initialize:function(){if(null!=this.computedAttributes)return this._configureComputedAttributes()},_configureComputedAttributes:function(){var e=this
var t=function(t){return e.set(t,e[t]())}
i.a.each(this.computedAttributes,function(n){if("string"===typeof n)return t(n)
t(n.name)
var r=i.a.map(n.deps,function(e){return"change:".concat(e)}).join(" ")
return e.bind(r,function(){return t(n.name)})})}})
s.a.Model
var u=s.a.Model.prototype.parse
s.a.Model.prototype.parse=function(){var e=u.apply(this,arguments)
i.a.each(this.dateAttributes,function(t){e[t]&&(e[t]=Date.parse(e[t]))})
return e}
s.a.Model
s.a.Model.prototype.normalizeErrors=function(e,t){var n={}
var r=this.errorMap||this.constructor.prototype.errorMap||{}
i.a.isFunction(r)&&(r=r(t))
if(e){var a=function(t){var a=e[t]
r[t]&&a.forEach(function(e){r[t][e.type]&&(n[t]||(n[t]=[])).push(r[t][e.type])})}
for(var o in e)a(o)}return n}
s.a.Model
var l=function(e,t){for(var n in t)c.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},c={}.hasOwnProperty,d=[].slice
t["default"]=s.a.Model=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.mixin=function(){var e
e=1<=arguments.length?d.call(arguments,0):[]
return r["a"].apply(null,[this].concat(d.call(e)))}
t.prototype.initialize=function(e,n){var r,a,o,s
t.__super__.initialize.apply(this,arguments)
this.options=i.a.extend({},this.defaults,n)
if(this.__initialize__){s=this.__initialize__
for(a=0,o=s.length;a<o;a++){r=s[a]
r.call(this)}}return this}
t.prototype.save=function(){this.trigger("saving")
return t.__super__.save.apply(this,arguments)}
t.prototype.destroy=function(){this.trigger("destroying")
return t.__super__.destroy.apply(this,arguments)}
t.prototype.increment=function(e,t){null==t&&(t=1)
return this.set(e,this.get(e)+t)}
t.prototype.decrement=function(e,t){null==t&&(t=1)
return this.increment(e,-t)}
t.prototype.deepGet=function(e){var t,n,r
n=e.split(".")
r=this.get(n.shift())
while(t=n.shift())r=r[t]
return r}
return t}(s.a.Model)},HIhM:function(e,t,n){"use strict"
n.d(t,"c",function(){return r})
n.d(t,"a",function(){return i})
n.d(t,"b",function(){return o})
function r(e){return"rtl"===o(e)}var a={left:"right",right:"left"}
function i(e,t){if("left"!==e&&"right"!==e)throw new Error("expected either left or right")
return r(t)?a[e]:e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement
return window.getComputedStyle(e,null).direction}},HSsa:function(e,t,n){"use strict"
e.exports=function(e,t){return function(){var n=new Array(arguments.length)
for(var r=0;r<n.length;r++)n[r]=arguments[r]
return e.apply(t,n)}}},"HaE+":function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
function r(e,t,n,r,a,i,o){try{var s=e[i](o)
var u=s.value}catch(e){n(e)
return}s.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments
return new Promise(function(a,i){var o=e.apply(t,n)
function s(e){r(o,a,i,s,u,"next",e)}function u(e){r(o,a,i,s,u,"throw",e)}s(void 0)})}}},Ijbi:function(e,t){function n(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t]
return n}}e.exports=n},In4X:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=r(n("sW1j"))
var i=Object.freeze({mediumMin:"min-width: ".concat(a.default.medium),largeMin:"min-width: ".concat(a.default.large),xLargeMin:"min-width: ".concat(a.default.xLarge)})
t.default=i},JD5e:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("32f0")
var i=function(){return a.a.cookie("_csrf_token")}
a()(document).on("submit","form",function(){a()(this).find('input[name="authenticity_token"]').val(i())})
t["a"]=i},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+")
var a=n("yK9s")
var i={"Content-Type":"application/x-www-form-urlencoded"}
function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e
"undefined"!==typeof XMLHttpRequest?e=n("tQ2B"):"undefined"!==typeof t&&(e=n("tQ2B"))
return e}var u={adapter:s(),transformRequest:[function(e,t){a(t,"Content-Type")
if(r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e
if(r.isArrayBufferView(e))return e.buffer
if(r.isURLSearchParams(e)){o(t,"application/x-www-form-urlencoded;charset=utf-8")
return e.toString()}if(r.isObject(e)){o(t,"application/json;charset=utf-8")
return JSON.stringify(e)}return e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}}
u.headers={common:{Accept:"application/json, text/plain, */*"}}
r.forEach(["delete","get","head"],function(e){u.headers[e]={}})
r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(i)})
e.exports=u}).call(this,n("8oxB"))},JI1W:function(e,t,n){"use strict"
var r=n("u7Gu")
var a=n("pQTu")
var i=n("m0r6")
Object(i["a"])({"en-AU":{instructure_misc_helpers:{buttons:{search:"Search",search_by_tag:"Search by Tag"},errors:{search_failed:"Search failed, please try again."},no_description:"No description",no_results_found:"No Results Found",status:{diigo_search_throttling:"Diigo limits users to one search every ten seconds.  Please wait...",searching:"Searching..."},titles:{bookmark_search:"Bookmark Search: %{service_name}"}}},"en-AU-x-unimelb":{instructure_misc_helpers:{buttons:{search:"Search",search_by_tag:"Search by Tag"},errors:{search_failed:"Search failed, please try again."},no_description:"No description",no_results_found:"No Results Found",status:{diigo_search_throttling:"Diigo limits users to one search every ten seconds.  Please wait...",searching:"Searching..."},titles:{bookmark_search:"Bookmark Search: %{service_name}"}}},"en-CA":{instructure_misc_helpers:{buttons:{search:"Search",search_by_tag:"Search by Tag"},errors:{search_failed:"Search failed, please try again."},no_description:"No description",no_results_found:"No Results Found",status:{diigo_search_throttling:"Diigo limits users to one search every ten seconds.  Please wait...",searching:"Searching..."},titles:{bookmark_search:"Bookmark Search: %{service_name}"}}},"en-GB":{instructure_misc_helpers:{buttons:{search:"Search",search_by_tag:"Search by tag"},errors:{search_failed:"Search failed, please try again."},no_description:"No description",no_results_found:"No results found",status:{diigo_search_throttling:"Diigo limits users to one search every ten seconds.  Please wait...",searching:"Searching..."},titles:{bookmark_search:"Bookmark Search: %{service_name}"}}},"en-GB-x-ukhe":{instructure_misc_helpers:{buttons:{search:"Search",search_by_tag:"Search by tag"},errors:{search_failed:"Search failed, please try again."},no_description:"No description",no_results_found:"No results found",status:{diigo_search_throttling:"Diigo limits users to one search every ten seconds.  Please wait...",searching:"Searching..."},titles:{bookmark_search:"Bookmark Search: %{service_name}"}}},is:{instructure_misc_helpers:{buttons:{search:"Leita",search_by_tag:"Leita eftir merki"},errors:{search_failed:"Leit tókst ekki, reyndu aftur."},no_description:"Engin lýsing",no_results_found:"Engar niðurstöður fundust",status:{diigo_search_throttling:"Diigo takmarkar notendur við eina leit á hverjum tíu sekúndum.  Augnablik...",searching:"Leita..."},titles:{bookmark_search:"Bókamerkjaleit: %{service_name}"}}},mi:{instructure_misc_helpers:{buttons:{search:"Rapu",search_by_tag:"Rapu i te Tūtohu"},errors:{search_failed:"I rahua te rapunga, tēnā koa ngana anō koa."},no_description:"Kāore he whakaahuatanga",no_results_found:"Kahore he hua",status:{diigo_search_throttling:"Diigo aukati ai i ngā kaiwhakamahi ki te rapu ia tekau hēkona i te wā  Tēnā koa tatari ....",searching:"Rapu ana ..."},titles:{bookmark_search:"Pukatohu Rapu %{service_name}"}}},ru:{instructure_misc_helpers:{buttons:{search:"Поиск",search_by_tag:"Поиск по тегу"},errors:{search_failed:"Сбой поиска, повторите попытку"},no_description:"Описание отсутствует",no_results_found:"Результаты не найдены",status:{diigo_search_throttling:"Diigo позволяет пользователям выполнять один поиск раз в десять секунд.  Подождите...",searching:"Идет поиск..."},titles:{bookmark_search:"Сделать закладку для поиска: %{service_name}"}}}})
n("jQeR")
n("0sPK")
var o=a["default"].scoped("instructure_misc_helpers")
var s=n("ouhR")
var u=n.n(s)
n("GLiE")
var l=n("5Ky4")
var c=n("0crz")
n("jYyc")
n("Z+Ib")
n("YGE8")
n("s/PJ")
u.a.detect=function(e,t){var n
u.a.each(e,function(r,a){if(t.call(a,a,r,e)){n=a
return false}})
return n}
u.a.encodeToHex=function(e){var t=""
e.length
for(var n=0;n<e.length;n++){var r=e.charCodeAt(n).toString(16)
while(r.length<2)r="0"+r
t+=r}return t}
u.a.decodeFromHex=function(e){var t=""
var n=0
while(n<e.length){t+=unescape("%"+e.substring(n,n+2))
n+=2}return t}
u.a.raw=function(e){return new l["a"].SafeString(e)}
u.a.each(["html","append","prepend"],function(e,t){var n=u.a.fn[t]
u.a.fn[t]=function(){var e=[].slice.call(arguments)
for(var t=0,r=e.length;t<r;t++)e[t]instanceof l["a"].SafeString&&(e[t]=e[t].toString())
return n.apply(this,e)}})
u.a.replaceOneTag=function(e,t,n){if(!e)return e
t=(t||"").toString()
n=(n||"").toString().replace(/\s/g,"+")
var r=new RegExp("(%7B|{){2}[\\s|%20|+]*"+t+"[\\s|%20|+]*(%7D|}){2}","g")
return e.replace(r,n)}
u.a.replaceTags=function(e,t,n){if("object"==typeof t){for(var r in t)e=u.a.replaceOneTag(e,r,t[r])
return e}return u.a.replaceOneTag(e,t,n)}
u.a.underscore=function(e){return(e||"").replace(/([A-Z])/g,"_$1").replace(/^_/,"").toLowerCase()}
u.a.titleize=function(e){var t=(e||"").replace(/([A-Z])/g," $1").replace(/_/g," ").replace(/\s+/," ").replace(/^\s/,"")
return u.a.map(t.split(/\s/),function(e){return(e[0]||"").toUpperCase()+e.substring(1)}).join(" ")}
u.a.fileSize=function(e){var t=1024
return e<t?parseInt(e,10)+" bytes":e<t*t?parseInt(e/t,10)+"KB":Math.round(10*e/t/t)/10+"MB"}
u.a.getUserServices=function(e,t,n){u.a.isArray(e)||(e=[e])
var r="/services?service_types="+e.join(",")
u.a.ajaxJSON(r,"GET",{},function(e){t&&t(e)},function(e){n&&n(e)})}
var d
u.a.findLinkForService=function(e,t){var n=u()("#instructure_bookmark_search")
if(!n.length){n=u()("<div id='instructure_bookmark_search'/>")
n.append("<form id='bookmark_search_form' style='margin-bottom: 5px;'><img src='/images/blank.png'/>&nbsp;&nbsp;<input type='text' class='query' style='width: 230px;'/><button class='btn search_button' type='submit'>"+Object(l["a"])(o.t("buttons.search","Search"))+"</button></form>")
n.append("<div class='results' style='max-height: 200px; overflow: auto;'/>")
n.find("form").submit(function(t){t.preventDefault()
t.stopPropagation()
var r=new Date
if("diigo"==e&&d&&r-d<15e3){setTimeout(function(){n.find("form").submit()},15e3-(r-d))
n.find(".results").empty().append(Object(l["a"])(o.t("status.diigo_search_throttling","Diigo limits users to one search every ten seconds.  Please wait...")))
return}n.find(".results").empty().append(Object(l["a"])(o.t("status.searching","Searching...")))
d=new Date
var a=n.find(".query").val()
var i=u.a.replaceTags(n.data("reference_url"),"query",a)
u.a.ajaxJSON(i,"GET",{},function(e){n.find(".results").empty()
e.length||n.find(".results").append(Object(l["a"])(o.t("no_results_found","No Results Found")))
for(var t in e){e[t].short_title=e[t].title
e[t].title==e[t].description&&(e[t].short_title=c["a"].truncateText(e[t].description,{max:30}))
u()("<div class='bookmark'/>").appendTo(n.find(".results")).append(u()('<a class="bookmark_link" style="font-weight: bold;"/>').attr({href:e[t].url,title:e[t].title}).text(e[t].short_title)).append(u()("<div style='margin: 5px 10px; font-size: 0.8em;'/>").text(e[t].description||o.t("no_description","No description")))}},function(){n.find(".results").empty().append(Object(l["a"])(o.t("errors.search_failed","Search failed, please try again.")))})})
n.delegate(".bookmark_link","click",function(e){e.preventDefault()
var r=u()(this).attr("href")
var a=u()(this).attr("title")||u()(this).text()
n.dialog("close")
t({url:r,title:a})})}n.find(".search_button").text("delicious"==e?o.t("buttons.search_by_tag","Search by Tag"):o.t("buttons.search","Search"))
n.find("form img").attr("src","/images/"+e+"_small_icon.png")
var r="/search/bookmarks?q=%7B%7B+query+%7D%7D&service_type=%7B%7B+service_type+%7D%7D"
r=u.a.replaceTags(r,"service_type",e)
n.data("reference_url",r)
n.find(".results").empty().end().find(".query").val("")
n.dialog({title:o.t("titles.bookmark_search","Bookmark Search: %{service_name}",{service_name:u.a.titleize(e)}),open:function(){n.find("input:visible:first").focus().select()},width:400})}
u.a.toSentence=function(e,t){"undefined"==typeof t?t={}:"or"==t&&(t={two_words_connector:o.t("#support.array.or.two_words_connector"),last_word_connector:o.t("#support.array.or.last_word_connector")})
t=u.a.extend({words_connector:o.t("#support.array.words_connector"),two_words_connector:o.t("#support.array.two_words_connector"),last_word_connector:o.t("#support.array.last_word_connector")},t)
switch(e.length){case 0:return""
case 1:return""+e[0]
case 2:return e[0]+t.two_words_connector+e[1]
default:return e.slice(0,-1).join(t.words_connector)+t.last_word_connector+e[e.length-1]}}
u.a.queryParam=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")
var t=new RegExp("[\\?&]"+e+"=([^&#]*)")
var n=t.exec(window.location.search)
return null==n?n:decodeURIComponent(n[1].replace(/\+/g," "))}
u.a.capitalize=function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
r["a"].youTubeRegEx=/^https?:\/\/(www\.youtube\.com\/watch.*v(=|\/)|youtu\.be\/)([^&#]*)/
u.a.youTubeID=function(e){var t=e.match(r["a"].youTubeRegEx)
if(t&&t[t.length-1])return t[t.length-1]
return null}},KQm4:function(e,t,n){"use strict"
function r(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t]
return n}}var a=n("25BE")
function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}n.d(t,"a",function(){return o})
function o(e){return r(e)||Object(a["a"])(e)||i()}},LYNF:function(e,t,n){"use strict"
var r=n("OH9c")
e.exports=function(e,t,n,a,i){var o=new Error(e)
return r(o,t,n,a,i)}},Lmem:function(e,t,n){"use strict"
e.exports=function(e){return!!(e&&e.__CANCEL__)}},M7Ji:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r={CANVAS:"canvas",CANVAS_A11Y:"canvas-a11y",CANVAS_HIGH_CONTRAST:"canvas-high-contrast"}
t.default=r},MLWZ:function(e,t,n){"use strict"
var r=n("xTJ+")
function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e
var i
if(n)i=n(t)
else if(r.isURLSearchParams(t))i=t.toString()
else{var o=[]
r.forEach(t,function(e,t){if(null===e||"undefined"===typeof e)return
r.isArray(e)?t+="[]":e=[e]
r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e))
o.push(a(t)+"="+a(e))})})
i=o.join("&")}i&&(e+=(-1===e.indexOf("?")?"?":"&")+i)
return e}},MVZn:function(e,t,n){var r=n("lSNA")
function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
var a=Object.keys(n)
"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))
a.forEach(function(t){r(e,t,n[t])})}return e}e.exports=a},MWZS:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=n("1OyB")
var o=n("vuIU")
var s=n("pQTu")
var u=n("m0r6")
Object(u["a"])({ar:{close_d634289d:"إغلاق"},cy:{close_d634289d:"Cau"},da:{close_d634289d:"Luk"},"da-x-k12":{close_d634289d:"Luk"},de:{close_d634289d:"Schließen"},el:{close_d634289d:"Κλείσιμο"},"en-AU":{close_d634289d:"Close"},"en-AU-x-unimelb":{close_d634289d:"Close"},"en-CA":{close_d634289d:"Close"},"en-GB":{close_d634289d:"Close"},"en-GB-x-lbs":{close_d634289d:"Close"},"en-GB-x-ukhe":{close_d634289d:"Close"},es:{close_d634289d:"Cerrar"},fa:{close_d634289d:"بستن"},fr:{close_d634289d:"Fermer"},"fr-CA":{close_d634289d:"Fermer"},he:{close_d634289d:"סגירה"},ht:{close_d634289d:"Fèmen"},hu:{close_d634289d:"Bezárás"},hy:{close_d634289d:"Փակել"},is:{close_d634289d:"Loka"},it:{close_d634289d:"Chiudi"},ja:{close_d634289d:"閉じる"},ko:{close_d634289d:"닫기"},mi:{close_d634289d:"Katia"},nb:{close_d634289d:"Lukk"},"nb-x-k12":{close_d634289d:"Lukk"},nl:{close_d634289d:"Sluiten"},nn:{close_d634289d:"Lukk"},pl:{close_d634289d:"Zamknij"},pt:{close_d634289d:"Fechar"},"pt-BR":{close_d634289d:"Fechar"},ru:{close_d634289d:"Закрыть"},sl:{close_d634289d:"Zapri"},sv:{close_d634289d:"Stäng"},"sv-x-k12":{close_d634289d:"Stäng"},tr:{close_d634289d:"Kapat"},uk:{close_d634289d:"Закрити"},"zh-Hans":{close_d634289d:"关闭"},"zh-Hant":{close_d634289d:"關閉"}})
n("jQeR")
n("0sPK")
var l=s["default"].scoped("shared.flash_notices")
var c=n("GLiE")
var d=n.n(c)
var f=n("5Ky4")
n("RzUX")
n("32f0")
function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{polite:false},t=e.polite
if(this.screenreaderHolderReady()){var n=t?"polite":"assertive"
a()(this.screenreader_holder).attr("aria-live",n)
a()(this.screenreader_holder).removeAttr("aria-hidden")}}var m=function(){function e(){Object(i["a"])(this,e)
this.holder=null
this.screenreader_holder=null}Object(o["a"])(e,[{key:"initHolder",value:function(){var e=a()("#flash_message_holder")
if(0===e.length)this.holder=null
else{this.holder=e[0]
a()(this.holder).on("click",".close_link",function(e){e.preventDefault()})
a()(this.holder).on("click","li",function(e){if(a()(e.currentTarget).hasClass("no_close"))return
a()(e.currentTarget).hasClass("unsupported_browser")&&a.a.cookie("unsupported_browser_dismissed")
a()(e.currentTarget).stop(true,true).remove()})}}},{key:"holderReady",value:function(){return null!=this.holder}},{key:"createNode",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
if(this.holderReady()){var i=this.generateNodeHTML(e,t)
a()(i).appendTo(a()(this.holder)).css(d.a.extend({zIndex:2},r)).show("fast").delay(n||7e3).fadeOut("slow",function(){a()(this).remove()})}}},{key:"generateNodeHTML",value:function(e,t){var n=this.getIconType(e)
return'\n        <li class="ic-flash-'.concat(Object(f["a"])(e),'" aria-hidden="true">\n          <div class="ic-flash__icon">\n            <i class="icon-').concat(Object(f["a"])(n),'"></i>\n          </div>\n          ').concat(this.escapeContent(t),'\n          <button type="button" class="Button Button--icon-action close_link">\n            <i class="icon-x"></i>\n          </button>\n        </li>\n      ')}},{key:"getIconType",value:function(e){return"success"===e?"check":"warning"===e||"error"===e?"warning":"info"}},{key:"initScreenreaderHolder",value:function(){var e=a()("#flash_screenreader_holder")
if(0===e.length)this.screenreader_holder=null
else{this.screenreader_holder=e[0]
this.setScreenreaderAttributes()}}},{key:"screenreaderHolderReady",value:function(){return null!=this.screenreader_holder}},{key:"createScreenreaderNode",value:function(e){var t=this
var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(this.screenreaderHolderReady()){h.call(this,{polite:false})
var r=a()(this.generateScreenreaderNodeHTML(e,n))
r.appendTo(a()(this.screenreader_holder))
window.setTimeout(function(){t.resetScreenreaderAttributes()
r.remove()
t.setScreenreaderAttributes()},1e4)}}},{key:"setScreenreaderAttributes",value:function(){if(this.screenreaderHolderReady()){a()(this.screenreader_holder).attr("role","alert")
a()(this.screenreader_holder).attr("aria-live","assertive")
a()(this.screenreader_holder).attr("aria-relevant","additions")
a()(this.screenreader_holder).attr("class","screenreader-only")
a()(this.screenreader_holder).attr("aria-atomic","false")}}},{key:"resetScreenreaderAttributes",value:function(){if(this.screenreaderHolderReady()){a()(this.screenreader_holder).removeAttr("role")
a()(this.screenreader_holder).removeAttr("aria-live")
a()(this.screenreader_holder).removeAttr("aria-relevant")
a()(this.screenreader_holder).removeAttr("class")
a()(this.screenreader_holder).removeAttr("aria-atomic")}}},{key:"createScreenreaderNodeExclusive",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.screenreaderHolderReady()){h.call(this,{polite:t})
this.screenreader_holder.innerHTML=""
var n=a()(this.generateScreenreaderNodeHTML(e,false))
n.appendTo(a()(this.screenreader_holder))}}},{key:"generateScreenreaderNodeHTML",value:function(e,t){var n
n=t?l.t("Close"):""
return"\n        <span>\n          ".concat(this.escapeContent(e),"\n          ").concat(Object(f["a"])(n),"\n        </span>\n      ")}},{key:"escapeContent",value:function(e){return e.hasOwnProperty("html")?e.html:Object(f["a"])(e)}}])
return e}()
var p=m
var _=new p
function g(){_.initHolder()
_.initScreenreaderHolder()}g()
a.a.flashMessage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3
_.createNode("success",e,t)
v(e)}
a.a.flashError=function(e,t){_.createNode("error",e,t)
v(e)}
a.a.flashWarning=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3
_.createNode("warning",e,t)
v(e)}
a.a.screenReaderFlashMessage=function(e){return _.createScreenreaderNode(e,false)}
a.a.screenReaderFlashError=function(e){return _.createScreenreaderNode(e,false)}
a.a.screenReaderFlashMessageExclusive=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return _.createScreenreaderNodeExclusive(e,t)}
a.a.initFlashContainer=function(){return g()}
function y(){"undefined"!==typeof ENV&&ENV&&ENV.notices&&ENV.notices.forEach(function(e){_.createNode(e.type,e.content)
v(e.content,false)})}function v(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
setTimeout(function(){return _.createScreenreaderNode(e,t)},100)}a()(function(){return setTimeout(y,500)})
t["a"]=a.a},MgzW:function(e,t,n){"use strict"
var r=Object.getOwnPropertySymbols
var a=Object.prototype.hasOwnProperty
var i=Object.prototype.propertyIsEnumerable
function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}function s(){try{if(!Object.assign)return false
var e=new String("abc")
e[5]="de"
if("5"===Object.getOwnPropertyNames(e)[0])return false
var t={}
for(var n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n
var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]})
if("0123456789"!==r.join(""))return false
var a={}
"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e})
if("abcdefghijklmnopqrst"!==Object.keys(Object.assign({},a)).join(""))return false
return true}catch(e){return false}}e.exports=s()?Object.assign:function(e,t){var n
var s=o(e)
var u
for(var l=1;l<arguments.length;l++){n=Object(arguments[l])
for(var c in n)a.call(n,c)&&(s[c]=n[c])
if(r){u=r(n)
for(var d=0;d<u.length;d++)i.call(n,u[d])&&(s[u[d]]=n[u[d]])}}return s}},Nxtp:function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
function r(e){return function(t){t&&t.preventDefault()
return e.apply(this,arguments)}}},ODXe:function(e,t,n){"use strict"
var r=n("DSFK")
function a(e,t){var n=[]
var r=true
var a=false
var i=void 0
try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=true){n.push(o.value)
if(t&&n.length===t)break}}catch(e){a=true
i=e}finally{try{r||null==s["return"]||s["return"]()}finally{if(a)throw i}}return n}var i=n("PYwp")
n.d(t,"a",function(){return o})
function o(e,t){return Object(r["a"])(e)||a(e,t)||Object(i["a"])()}},OH9c:function(e,t,n){"use strict"
e.exports=function(e,t,n,r,a){e.config=t
n&&(e.code=n)
e.request=r
e.response=a
return e}},OTTw:function(e,t,n){"use strict"
var r=n("xTJ+")
e.exports=r.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent)
var t=document.createElement("a")
var n
function a(n){var r=n
if(e){t.setAttribute("href",r)
r=t.href}t.setAttribute("href",r)
return{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}n=a(window.location.href)
return function(e){var t=r.isString(e)?a(e):e
return t.protocol===n.protocol&&t.host===n.host}}():function(){return true}},PIlc:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=Object.freeze({duration:"300ms",timing:"ease-in-out"})
t.default=r},PYwp:function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},PwBw:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
a.a.ui=a.a.ui||{}
var i,o=Math.max,s=Math.abs,u=Math.round,l=/left|center|right/,c=/top|center|bottom/,d=/[\+\-]\d+%?/,f=/^\w+/,h=/%$/,m=a.a.fn.position
function p(e,t,n){return[parseInt(e[0],10)*(h.test(e[0])?t/100:1),parseInt(e[1],10)*(h.test(e[1])?n/100:1)]}function _(e,t){return parseInt(a.a.css(e,t),10)||0}a.a.position={scrollbarWidth:function(){if(void 0!==i)return i
var e,t,n=a()("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=n.children()[0]
a()("body").append(n)
e=r.offsetWidth
n.css("overflow","scroll")
t=r.offsetWidth
e===t&&(t=n[0].clientWidth)
n.remove()
return i=e-t},getScrollInfo:function(e){var t=e.isWindow?"":e.element.css("overflow-x"),n=e.isWindow?"":e.element.css("overflow-y"),r="scroll"===t||"auto"===t&&e.width<e.element[0].scrollWidth,i="scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight
return{width:r?a.a.position.scrollbarWidth():0,height:i?a.a.position.scrollbarWidth():0}},getWithinInfo:function(e){var t=a()(e||window),n=a.a.isWindow(t[0])
return{element:t,isWindow:n,offset:t.offset()||{left:0,top:0},scrollLeft:t.scrollLeft(),scrollTop:t.scrollTop(),width:n?t.width():t.outerWidth(),height:n?t.height():t.outerHeight()}}}
a.a.fn.position=function(e){if(!e||!e.of)return m.apply(this,arguments)
e=a.a.extend({},e)
var t,n,r,i,o,h=a()(e.of),g=a.a.position.getWithinInfo(e.within),y=a.a.position.getScrollInfo(g),v=h[0],b=(e.collision||"flip").split(" "),w={}
if(9===v.nodeType){n=h.width()
r=h.height()
i={top:0,left:0}}else if(a.a.isWindow(v)){n=h.width()
r=h.height()
i={top:h.scrollTop(),left:h.scrollLeft()}}else if(v.preventDefault){e.at="left top"
n=r=0
i={top:v.pageY,left:v.pageX}}else{n=h.outerWidth()
r=h.outerHeight()
i=h.offset()}o=a.a.extend({},i)
a.a.each(["my","at"],function(){var t,n,r=(e[this]||"").split(" ")
1===r.length&&(r=l.test(r[0])?r.concat(["center"]):c.test(r[0])?["center"].concat(r):["center","center"])
r[0]=l.test(r[0])?r[0]:"center"
r[1]=c.test(r[1])?r[1]:"center"
t=d.exec(r[0])
n=d.exec(r[1])
w[this]=[t?t[0]:0,n?n[0]:0]
e[this]=[f.exec(r[0])[0],f.exec(r[1])[0]]})
1===b.length&&(b[1]=b[0])
"right"===e.at[0]?o.left+=n:"center"===e.at[0]&&(o.left+=n/2)
"bottom"===e.at[1]?o.top+=r:"center"===e.at[1]&&(o.top+=r/2)
t=p(w.at,n,r)
o.left+=t[0]
o.top+=t[1]
return this.each(function(){var l,c,d=a()(this),f=d.outerWidth(),m=d.outerHeight(),v=_(this,"marginLeft"),k=_(this,"marginTop"),x=f+v+_(this,"marginRight")+y.width,M=m+k+_(this,"marginBottom")+y.height,T=a.a.extend({},o),D=p(w.my,d.outerWidth(),d.outerHeight())
"right"===e.my[0]?T.left-=f:"center"===e.my[0]&&(T.left-=f/2)
"bottom"===e.my[1]?T.top-=m:"center"===e.my[1]&&(T.top-=m/2)
T.left+=D[0]
T.top+=D[1]
if(!a.a.support.offsetFractions){T.left=u(T.left)
T.top=u(T.top)}l={marginLeft:v,marginTop:k}
a.a.each(["left","top"],function(i,o){a.a.ui.position[b[i]]&&a.a.ui.position[b[i]][o](T,{targetWidth:n,targetHeight:r,elemWidth:f,elemHeight:m,collisionPosition:l,collisionWidth:x,collisionHeight:M,offset:[t[0]+D[0],t[1]+D[1]],my:e.my,at:e.at,within:g,elem:d})})
a.a.fn.bgiframe&&d.bgiframe()
e.using&&(c=function(t){var a=i.left-T.left,o=a+n-f,u=i.top-T.top,l=u+r-m,c={target:{element:h,left:i.left,top:i.top,width:n,height:r},element:{element:d,left:T.left,top:T.top,width:f,height:m},horizontal:o<0?"left":a>0?"right":"center",vertical:l<0?"top":u>0?"bottom":"middle"}
n<f&&s(a+o)<n&&(c.horizontal="center")
r<m&&s(u+l)<r&&(c.vertical="middle")
s(a+o)/2>s(u+l)/2?c.important="horizontal":c.important="vertical"
e.using.call(this,t,c)})
d.offset(a.a.extend(T,{using:c}))})}
a.a.ui.position={fit:{left:function(e,t){var n,r=t.within,a=r.isWindow?r.scrollLeft:r.offset.left,i=r.width,s=e.left-t.collisionPosition.marginLeft,u=a-s,l=s+t.collisionWidth-i-a
if(t.collisionWidth>i)if(u>0&&l<=0){n=e.left+u+t.collisionWidth-i-a
e.left+=u-n}else e.left=l>0&&u<=0?a:u>l?a+i-t.collisionWidth:a
else u>0?e.left+=u:l>0?e.left-=l:e.left=o(e.left-s,e.left)},top:function(e,t){var n,r=t.within,a=r.isWindow?r.scrollTop:r.offset.top,i=t.within.height,s=e.top-t.collisionPosition.marginTop,u=a-s,l=s+t.collisionHeight-i-a
if(t.collisionHeight>i)if(u>0&&l<=0){n=e.top+u+t.collisionHeight-i-a
e.top+=u-n}else e.top=l>0&&u<=0?a:u>l?a+i-t.collisionHeight:a
else u>0?e.top+=u:l>0?e.top-=l:e.top=o(e.top-s,e.top)}},flip:{left:function(e,t){var n,r,a=t.within,i=a.offset.left+a.scrollLeft,o=a.width,u=a.isWindow?0:a.offset.left,l=e.left-t.collisionPosition.marginLeft,c=l-u,d=l+t.collisionWidth-o-u,f="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,h="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,m=-2*t.offset[0]
if(c<0){n=e.left+f+h+m+t.collisionWidth-o-i;(n<0||n<s(c))&&(e.left+=f+h+m)}else if(d>0){r=e.left-t.collisionPosition.marginLeft+f+h+m-u;(r>0||s(r)<d)&&(e.left+=f+h+m)}},top:function(e,t){var n,r,a=t.within,i=a.offset.top+a.scrollTop,o=a.height,u=a.isWindow?0:a.offset.top,l=e.top-t.collisionPosition.marginTop,c=l-u,d=l+t.collisionHeight-o-u,f="top"===t.my[1],h=f?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,m="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,p=-2*t.offset[1]
if(c<0){r=e.top+h+m+p+t.collisionHeight-o-i
e.top+h+m+p>c&&(r<0||r<s(c))&&(e.top+=h+m+p)}else if(d>0){n=e.top-t.collisionPosition.marginTop+h+m+p-u
e.top+h+m+p>d&&(n>0||s(n)<d)&&(e.top+=h+m+p)}}},flipfit:{left:function(){a.a.ui.position.flip.left.apply(this,arguments)
a.a.ui.position.fit.left.apply(this,arguments)},top:function(){a.a.ui.position.flip.top.apply(this,arguments)
a.a.ui.position.fit.top.apply(this,arguments)}}};(function(){var e,t,n,r,i,o=document.getElementsByTagName("body")[0],s=document.createElement("div")
e=document.createElement(o?"div":"body")
n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"}
o&&a.a.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"})
for(i in n)e.style[i]=n[i]
e.appendChild(s)
t=o||document.documentElement
t.insertBefore(e,t.firstChild)
s.style.cssText="position: absolute; left: 10.7432222px;"
r=a()(s).offset().left
a.a.support.offsetFractions=r>10&&r<11
e.innerHTML=""
t.removeChild(e)})()
false!==a.a.uiBackCompat&&function(e){var t=e.fn.position
e.fn.position=function(n){if(!n||!n.offset)return t.call(this,n)
var r=n.offset.split(" "),a=n.at.split(" ")
1===r.length&&(r[1]=r[0]);/^\d/.test(r[0])&&(r[0]="+"+r[0]);/^\d/.test(r[1])&&(r[1]="+"+r[1])
if(1===a.length)if(/left|center|right/.test(a[0]))a[1]="center"
else{a[1]=a[0]
a[0]="center"}return t.call(this,e.extend(n,{at:a[0]+r[0]+" "+a[1]+r[1],offset:void 0}))}}(jQuery)},QCnb:function(e,t,n){"use strict"
e.exports=n("+wdc")},QSc6:function(e,t,n){"use strict"
var r=n("0jNN")
var a=n("sxOR")
var i=Object.prototype.hasOwnProperty
var o={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}}
var s=Array.isArray
var u=Array.prototype.push
var l=function(e,t){u.apply(e,s(t)?t:[t])}
var c=Date.prototype.toISOString
var d={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:r.encode,encodeValuesOnly:false,formatter:a.formatters[a["default"]],indices:false,serializeDate:function(e){return c.call(e)},skipNulls:false,strictNullHandling:false}
var f=function e(t,n,a,i,o,u,c,f,h,m,p,_,g){var y=t
"function"===typeof c?y=c(n,y):y instanceof Date?y=m(y):"comma"===a&&s(y)&&(y=y.join(","))
if(null===y){if(i)return u&&!_?u(n,d.encoder,g):n
y=""}if("string"===typeof y||"number"===typeof y||"boolean"===typeof y||r.isBuffer(y)){if(u){var v=_?n:u(n,d.encoder,g)
return[p(v)+"="+p(u(y,d.encoder,g))]}return[p(n)+"="+p(String(y))]}var b=[]
if("undefined"===typeof y)return b
var w
if(s(c))w=c
else{var k=Object.keys(y)
w=f?k.sort(f):k}for(var x=0;x<w.length;++x){var M=w[x]
if(o&&null===y[M])continue
s(y)?l(b,e(y[M],"function"===typeof a?a(n,M):n,a,i,o,u,c,f,h,m,p,_,g)):l(b,e(y[M],n+(h?"."+M:"["+M+"]"),a,i,o,u,c,f,h,m,p,_,g))}return b}
var h=function(e){if(!e)return d
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||d.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var n=a["default"]
if("undefined"!==typeof e.format){if(!i.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.")
n=e.format}var r=a.formatters[n]
var o=d.filter;("function"===typeof e.filter||s(e.filter))&&(o=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:o,formatter:r,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}
e.exports=function(e,t){var n=e
var r=h(t)
var a
var i
if("function"===typeof r.filter){i=r.filter
n=i("",n)}else if(s(r.filter)){i=r.filter
a=i}var u=[]
if("object"!==typeof n||null===n)return""
var c
c=t&&t.arrayFormat in o?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"
var d=o[c]
a||(a=Object.keys(n))
r.sort&&a.sort(r.sort)
for(var m=0;m<a.length;++m){var p=a[m]
if(r.skipNulls&&null===n[p])continue
l(u,f(n[p],p,d,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var _=u.join(r.delimiter)
var g=true===r.addQueryPrefix?"?":""
r.charsetSentinel&&("iso-8859-1"===r.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&")
return _.length>0?g+_:""}},Qyje:function(e,t,n){"use strict"
var r=n("QSc6")
var a=n("nmq7")
var i=n("sxOR")
e.exports={formats:i,parse:a,stringify:r}},RIqP:function(e,t,n){var r=n("Ijbi")
var a=n("EbDI")
var i=n("Bnag")
function o(e){return r(e)||a(e)||i()}e.exports=o},"Rn+g":function(e,t,n){"use strict"
var r=n("LYNF")
e.exports=function(e,t,n){var a=n.config.validateStatus
n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},RnbG:function(e,t,n){var r,a;(function(i,o){if(e.exports)e.exports=o()
else{r=o,a="function"===typeof r?r.call(t,n,t,e):r,void 0!==a&&(e.exports=a)}})(0,function(){"use strict"
var e,t,n=["webkit","Moz","ms","O"],r={}
function a(e,t){var n,r=document.createElement(e||"div")
for(n in t)r[n]=t[n]
return r}function i(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t])
return e}function o(n,a,i,o){var s=["opacity",a,~~(100*n),i,o].join("-"),u=.01+i/o*100,l=Math.max(1-(1-n)/a*(100-u),n),c=e.substring(0,e.indexOf("Animation")).toLowerCase(),d=c&&"-"+c+"-"||""
if(!r[s]){t.insertRule("@"+d+"keyframes "+s+"{0%{opacity:"+l+"}"+u+"%{opacity:"+n+"}"+(u+.01)+"%{opacity:1}"+(u+a)%100+"%{opacity:"+n+"}100%{opacity:"+l+"}}",t.cssRules.length)
r[s]=1}return s}function s(e,t){var r,a,i=e.style
t=t.charAt(0).toUpperCase()+t.slice(1)
if(void 0!==i[t])return t
for(a=0;a<n.length;a++){r=n[a]+t
if(void 0!==i[r])return r}}function u(e,t){for(var n in t)e.style[s(e,n)||n]=t[n]
return e}function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)void 0===e[r]&&(e[r]=n[r])}return e}function c(e,t){return"string"==typeof e?e:e[t%e.length]}var d={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:false,hwaccel:false,position:"absolute"}
function f(e){this.opts=l(e||{},f.defaults,d)}f.defaults={}
l(f.prototype,{spin:function(t){this.stop()
var n=this,r=n.opts,i=n.el=a(null,{className:r.className})
u(i,{position:r.position,width:0,zIndex:r.zIndex,left:r.left,top:r.top})
t&&t.insertBefore(i,t.firstChild||null)
i.setAttribute("role","progressbar")
n.lines(i,n.opts)
if(!e){var o,s=0,l=(r.lines-1)*(1-r.direction)/2,c=r.fps,d=c/r.speed,f=(1-r.opacity)/(d*r.trail/100),h=d/r.lines;(function e(){s++
for(var t=0;t<r.lines;t++){o=Math.max(1-(s+(r.lines-t)*h)%d*f,r.opacity)
n.opacity(i,t*r.direction+l,o,r)}n.timeout=n.el&&setTimeout(e,~~(1e3/c))})()}return n},stop:function(){var e=this.el
if(e){clearTimeout(this.timeout)
e.parentNode&&e.parentNode.removeChild(e)
this.el=void 0}return this},lines:function(t,n){var r,s=0,l=(n.lines-1)*(1-n.direction)/2
function d(e,t){return u(a(),{position:"absolute",width:n.scale*(n.length+n.width)+"px",height:n.scale*n.width+"px",background:e,boxShadow:t,transformOrigin:"left",transform:"rotate("+~~(360/n.lines*s+n.rotate)+"deg) translate("+n.scale*n.radius+"px,0)",borderRadius:(n.corners*n.scale*n.width>>1)+"px"})}for(;s<n.lines;s++){r=u(a(),{position:"absolute",top:1+~(n.scale*n.width/2)+"px",transform:n.hwaccel?"translate3d(0,0,0)":"",opacity:n.opacity,animation:e&&o(n.opacity,n.trail,l+s*n.direction,n.lines)+" "+1/n.speed+"s linear infinite"})
n.shadow&&i(r,u(d("#000","0 0 4px #000"),{top:"2px"}))
i(t,i(r,d(c(n.color,s),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}})
function h(){function e(e,t){return a("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}t.addRule(".spin-vml","behavior:url(#default#VML)")
f.prototype.lines=function(t,n){var r=n.scale*(n.length+n.width),a=2*n.scale*r
function o(){return u(e("group",{coordsize:a+" "+a,coordorigin:-r+" "+-r}),{width:a,height:a})}var s,l=-(n.width+n.length)*n.scale*2+"px",d=u(o(),{position:"absolute",top:l,left:l})
function f(t,a,s){i(d,i(u(o(),{rotation:360/n.lines*t+"deg",left:~~a}),i(u(e("roundrect",{arcsize:n.corners}),{width:r,height:n.scale*n.width,left:n.scale*n.radius,top:-n.scale*n.width>>1,filter:s}),e("fill",{color:c(n.color,t),opacity:n.opacity}),e("stroke",{opacity:0}))))}if(n.shadow)for(s=1;s<=n.lines;s++)f(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
for(s=1;s<=n.lines;s++)f(s)
return i(t,d)}
f.prototype.opacity=function(e,t,n,r){var a=e.firstChild
r=r.shadow&&r.lines||0
if(a&&t+r<a.childNodes.length){a=a.childNodes[t+r]
a=a&&a.firstChild
a=a&&a.firstChild
a&&(a.opacity=n)}}}if("undefined"!==typeof document){t=function(){var e=a("style",{type:"text/css"})
i(document.getElementsByTagName("head")[0],e)
return e.sheet||e.styleSheet}()
var m=u(a("group"),{behavior:"url(#default#VML)"})
!s(m,"transform")&&m.adj?h():e=s(m,"animation")}return f})},RzUX:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r);(function(){if(a.a.effects)return a.a.effects
var e=false!==a.a.uiBackCompat,t="ui-effects-"
a.a.effects={effect:{}};(function(e,t){var n,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),a=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],o=e.Color=function(t,n,r,a){return new e.Color.fn.parse(t,n,r,a)},s={rgba:{cache:"_rgba",props:{red:{idx:0,type:"byte",empty:true},green:{idx:1,type:"byte",empty:true},blue:{idx:2,type:"byte",empty:true},alpha:{idx:3,type:"percent",def:1}}},hsla:{cache:"_hsla",props:{hue:{idx:0,type:"degrees",empty:true},saturation:{idx:1,type:"percent",empty:true},lightness:{idx:2,type:"percent",empty:true}}}},u={byte:{floor:true,min:0,max:255},percent:{min:0,max:1},degrees:{mod:360,floor:true}},l=o.support={},c=e.each
s.hsla.props.alpha=s.rgba.props.alpha
function d(e,t,n){var r=u[t.type]||{},a=n||t.empty
if(a&&null==e)return null
if(t.def&&null==e)return t.def
e=r.floor?~~e:parseFloat(e)
if(null==e||isNaN(e))return t.def
if(r.mod){e%=r.mod
return e<0?r.mod+e:e}return r.min>e?r.min:r.max<e?r.max:e}function f(t){var r=o(),a=r._rgba=[]
t=t.toLowerCase()
c(i,function(e,n){var i,o=n.re.exec(t),u=o&&n.parse(o),l=n.space||"rgba",c=s[l].cache
if(u){i=r[l](u)
r[c]=i[c]
a=r._rgba=i._rgba
return false}})
if(0!==a.length){0===Math.max.apply(Math,a)&&e.extend(a,n.transparent)
return r}return n[t]}o.fn=e.extend(o.prototype,{parse:function(t,r,a,i){if(void 0===t){this._rgba=[null,null,null,null]
return this}if(t.jquery||t.nodeType){t=e(t).css(r)
r=void 0}var u=this,l=e.type(t),h=this._rgba=[]
if(void 0!==r){t=[t,r,a,i]
l="array"}if("string"===l)return this.parse(f(t)||n._default)
if("array"===l){c(s.rgba.props,function(e,n){h[n.idx]=d(t[n.idx],n)})
return this}if("object"===l){c(s,t instanceof o?function(e,n){t[n.cache]&&(u[n.cache]=t[n.cache].slice())}:function(e,n){c(n.props,function(e,r){var a=n.cache
if(!u[a]&&n.to){if(null==t[e]||"alpha"===e)return
u[a]=n.to(u._rgba)}u[a][r.idx]=d(t[e],r,true)})})
return this}},is:function(e){var t=o(e),n=true,r=this
c(s,function(e,a){var i,o=t[a.cache]
if(o){i=r[a.cache]||a.to&&a.to(r._rgba)||[]
c(a.props,function(e,t){if(null!=o[t.idx]){n=o[t.idx]===i[t.idx]
return n}})}return n})
return n},_space:function(){var e=[],t=this
c(s,function(n,r){t[r.cache]&&e.push(n)})
return e.pop()},transition:function(e,t){var n=o(e),r=n._space(),a=s[r],i=this[a.cache]||a.to(this._rgba),l=i.slice()
n=n[a.cache]
c(a.props,function(e,r){var a=r.idx,o=i[a],s=n[a],c=u[r.type]||{}
if(null===s)return
if(null===o)l[a]=s
else{c.mod&&(s-o>c.mod/2?o+=c.mod:o-s>c.mod/2&&(o-=c.mod))
l[r.idx]=d((s-o)*t+o,r)}})
return this[r](l)},blend:function(t){if(1===this._rgba[3])return this
var n=this._rgba.slice(),r=n.pop(),a=o(t)._rgba
return o(e.map(n,function(e,t){return(1-r)*a[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e})
if(1===n[3]){n.pop()
t="rgb("}return t+n.join(",")+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){null==e&&(e=t>2?1:0)
t&&t<3&&(e=Math.round(100*e)+"%")
return e})
if(1===n[3]){n.pop()
t="hsl("}return t+n.join(",")+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop()
t&&n.push(~~(255*r))
return"#"+e.map(n,function(e,t){e=(e||0).toString(16)
return 1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}})
o.fn.parse.prototype=o.fn
function h(e,t,n){n=(n+1)%1
if(6*n<1)return e+6*(t-e)*n
if(2*n<1)return t
if(3*n<2)return e+(t-e)*(2/3-n)*6
return e}s.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]]
var t,n,r=e[0]/255,a=e[1]/255,i=e[2]/255,o=e[3],s=Math.max(r,a,i),u=Math.min(r,a,i),l=s-u,c=s+u,d=.5*c
t=u===s?0:r===s?60*(a-i)/l+360:a===s?60*(i-r)/l+120:60*(r-a)/l+240
n=0===d||1===d?d:d<=.5?l/c:l/(2-c)
return[Math.round(t)%360,n,d,null==o?1:o]}
s.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]]
var t=e[0]/360,n=e[1],r=e[2],a=e[3],i=r<=.5?r*(1+n):r+n-r*n,o=2*r-i
return[Math.round(255*h(o,i,t+1/3)),Math.round(255*h(o,i,t)),Math.round(255*h(o,i,t-1/3)),a]}
c(s,function(t,n){var r=n.props,i=n.cache,s=n.to,u=n.from
o.fn[t]=function(t){s&&!this[i]&&(this[i]=s(this._rgba))
if(void 0===t)return this[i].slice()
var n,a=e.type(t),l="array"===a||"object"===a?t:arguments,f=this[i].slice()
c(r,function(e,t){var n=l["object"===a?e:t.idx]
null==n&&(n=f[t.idx])
f[t.idx]=d(n,t)})
if(u){n=o(u(f))
n[i]=f
return n}return o(f)}
c(r,function(n,r){if(o.fn[n])return
o.fn[n]=function(i){var o,s=e.type(i),u="alpha"===n?this._hsla?"hsla":"rgba":t,l=this[u](),c=l[r.idx]
if("undefined"===s)return c
if("function"===s){i=i.call(this,c)
s=e.type(i)}if(null==i&&r.empty)return this
if("string"===s){o=a.exec(i)
o&&(i=c+parseFloat(o[2])*("+"===o[1]?1:-1))}l[r.idx]=i
return this[u](l)}})})
c(r,function(t,n){e.cssHooks[n]={set:function(t,r){var a,i,s
if("string"!==e.type(r)||(a=f(r))){r=o(a||r)
if(!l.rgba&&1!==r._rgba[3]){s="backgroundColor"===n?t.parentNode:t
do{i=e.curCSS(s,"backgroundColor")}while((""===i||"transparent"===i)&&(s=s.parentNode)&&s.style)
r=r.blend(i&&"transparent"!==i?i:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(r){}}}
e.fx.step[n]=function(t){if(!t.colorInit){t.start=o(t.elem,n)
t.end=o(t.end)
t.colorInit=true}e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})
e(function(){var e=document.createElement("div"),t=e.style
t.cssText="background-color:rgba(1,1,1,.5)"
l.rgba=t.backgroundColor.indexOf("rgba")>-1})
n=e.Color.names={aqua:"#00ffff",azure:"#f0ffff",beige:"#f5f5dc",black:"#000000",blue:"#0000ff",brown:"#a52a2a",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkviolet:"#9400d3",fuchsia:"#ff00ff",gold:"#ffd700",green:"#008000",indigo:"#4b0082",khaki:"#f0e68c",lightblue:"#add8e6",lightcyan:"#e0ffff",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightyellow:"#ffffe0",lime:"#00ff00",magenta:"#ff00ff",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",pink:"#ffc0cb",purple:"#800080",violet:"#800080",red:"#ff0000",silver:"#c0c0c0",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(a.a);(function(){var e=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1}
a.a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,t){a.a.fx.step[t]=function(e){if("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr){jQuery.style(e.elem,t,e.end)
e.setAttr=true}}})
function n(){var e,t,n=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,r={}
if(n&&n.length&&n[0]&&n[n[0]]){t=n.length
while(t--){e=n[t]
"string"===typeof n[e]&&(r[a.a.camelCase(e)]=n[e])}}else for(e in n)"string"===typeof n[e]&&(r[e]=n[e])
return r}function r(e,n){var r,i,o={}
for(r in n){i=n[r]
e[r]!==i&&(t[r]||!a.a.fx.step[r]&&isNaN(parseFloat(i))||(o[r]=i))}return o}a.a.effects.animateClass=function(t,i,o,s){var u=a.a.speed(i,o,s)
return this.queue(function(){var i,o=a()(this),s=o.attr("class")||"",l=u.children?o.find("*").andSelf():o
l=l.map(function(){var e=a()(this)
return{el:e,start:n.call(this)}})
i=function(){a.a.each(e,function(e,n){t[n]&&o[n+"Class"](t[n])})}
i()
l=l.map(function(){this.end=n.call(this.el[0])
this.diff=r(this.start,this.end)
return this})
o.attr("class",s)
l=l.map(function(){var e=this,t=a.a.Deferred(),n=jQuery.extend({},u,{queue:false,complete:function(){t.resolve(e)}})
this.el.animate(this.diff,n)
return t.promise()})
a.a.when.apply(a.a,l.get()).done(function(){i()
a.a.each(arguments,function(){var e=this.el
a.a.each(this.diff,function(t){e.css(t,"")})})
u.complete.call(o[0])})})}
a.a.fn.extend({_addClass:a.a.fn.addClass,addClass:function(e,t,n,r){return t?a.a.effects.animateClass.apply(this,[{add:e},t,n,r]):this._addClass(e)},_removeClass:a.a.fn.removeClass,removeClass:function(e,t,n,r){return t?a.a.effects.animateClass.apply(this,[{remove:e},t,n,r]):this._removeClass(e)},_toggleClass:a.a.fn.toggleClass,toggleClass:function(e,t,n,r,i){return"boolean"===typeof t||void 0===t?n?a.a.effects.animateClass.apply(this,[t?{add:e}:{remove:e},n,r,i]):this._toggleClass(e,t):a.a.effects.animateClass.apply(this,[{toggle:e},t,n,r])},switchClass:function(e,t,n,r,i){return a.a.effects.animateClass.apply(this,[{add:t,remove:e},n,r,i])}})})();(function(){a.a.extend(a.a.effects,{version:"@VERSION",save:function(e,n){for(var r=0;r<n.length;r++)null!==n[r]&&e.data(t+n[r],e[0].style[n[r]])},restore:function(e,n){for(var r=0;r<n.length;r++)null!==n[r]&&e.css(n[r],e.data(t+n[r]))},setMode:function(e,t){"toggle"===t&&(t=e.is(":hidden")?"show":"hide")
return t},getBaseline:function(e,t){var n,r
switch(e[0]){case"top":n=0
break
case"middle":n=.5
break
case"bottom":n=1
break
default:n=e[0]/t.height}switch(e[1]){case"left":r=0
break
case"center":r=.5
break
case"right":r=1
break
default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent()
var t={width:e.outerWidth(true),height:e.outerHeight(true),float:e.css("float")},n=a()("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:e.width(),height:e.height()},i=document.activeElement
try{i.id}catch(e){i=document.body}e.wrap(n);(e[0]===i||a.a.contains(e[0],i))&&a()(i).focus()
n=e.parent()
if("static"===e.css("position")){n.css({position:"relative"})
e.css({position:"relative"})}else{a.a.extend(t,{position:e.css("position"),zIndex:e.css("z-index")})
a.a.each(["top","left","bottom","right"],function(n,r){t[r]=e.css(r)
isNaN(parseInt(t[r],10))&&(t[r]="auto")})
e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}e.css(r)
return n.css(t).show()},removeWrapper:function(e){var t=document.activeElement
if(e.parent().is(".ui-effects-wrapper")){e.parent().replaceWith(e);(e[0]===t||a.a.contains(e[0],t))&&a()(t).focus()}return e},setTransition:function(e,t,n,r){r=r||{}
a.a.each(t,function(t,a){var i=e.cssUnit(a)
i[0]>0&&(r[a]=i[0]*n+i[1])})
return r}})
function n(e,t,n,r){if(a.a.isPlainObject(e)){t=e
e=e.effect}e={effect:e}
void 0===t&&(t={})
if(a.a.isFunction(t)){r=t
n=null
t={}}if("number"===typeof t||a.a.fx.speeds[t]){r=n
n=t
t={}}if(a.a.isFunction(n)){r=n
n=null}t&&a.a.extend(e,t)
n=n||t.duration
e.duration=a.a.fx.off?0:"number"===typeof n?n:n in a.a.fx.speeds?a.a.fx.speeds[n]:a.a.fx.speeds._default
e.complete=r||t.complete
return e}function r(t){if(!t||"number"===typeof t||a.a.fx.speeds[t])return true
if("string"===typeof t&&!a.a.effects.effect[t]){if(e&&a.a.effects[t])return false
return true}return false}a.a.fn.extend({effect:function(t,r,i,o){var s=n.apply(this,arguments),u=s.mode,l=s.queue,c=a.a.effects.effect[s.effect],d=!c&&e&&a.a.effects[s.effect]
if(a.a.fx.off||!(c||d))return u?this[u](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)})
function f(e){var t=a()(this),n=s.complete,r=s.mode
function i(){a.a.isFunction(n)&&n.call(t[0])
a.a.isFunction(e)&&e()}(t.is(":hidden")?"hide"===r:"show"===r)?i():c.call(t[0],s,i)}return c?false===l?this.each(f):this.queue(l||"fx",f):d.call(this,{options:s,duration:s.duration,callback:s.complete,mode:s.mode})},_show:a.a.fn.show,show:function(e){if(r(e))return this._show.apply(this,arguments)
var t=n.apply(this,arguments)
t.mode="show"
return this.effect.call(this,t)},_hide:a.a.fn.hide,hide:function(e){if(r(e))return this._hide.apply(this,arguments)
var t=n.apply(this,arguments)
t.mode="hide"
return this.effect.call(this,t)},__toggle:a.a.fn.toggle,toggle:function(e){if(r(e)||"boolean"===typeof e||a.a.isFunction(e))return this.__toggle.apply(this,arguments)
var t=n.apply(this,arguments)
t.mode="toggle"
return this.effect.call(this,t)},cssUnit:function(e){var t=this.css(e),n=[]
a.a.each(["em","px","%","pt"],function(e,r){t.indexOf(r)>0&&(n=[parseFloat(t),r])})
return n}})})();(function(){var e={}
a.a.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}})
a.a.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4
while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}})
a.a.each(e,function(e,t){a.a.easing["easeIn"+e]=t
a.a.easing["easeOut"+e]=function(e){return 1-t(1-e)}
a.a.easing["easeInOut"+e]=function(e){return e<.5?t(2*e)/2:1-t(-2*e+2)/2}})})()})()
a.a.effects.effect.drop=function(e,t){var n,r=a()(this),i=["position","top","bottom","left","right","opacity","height","width"],o=a.a.effects.setMode(r,e.mode||"hide"),s="show"===o,u=e.direction||"left",l="up"===u||"down"===u?"top":"left",c="up"===u||"left"===u?"pos":"neg",d={opacity:s?1:0}
a.a.effects.save(r,i)
r.show()
a.a.effects.createWrapper(r)
n=e.distance||r["top"===l?"outerHeight":"outerWidth"]({margin:true})/2
s&&r.css("opacity",0).css(l,"pos"===c?-n:n)
d[l]=(s?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+n
r.animate(d,{queue:false,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&r.hide()
a.a.effects.restore(r,i)
a.a.effects.removeWrapper(r)
t()}})}},S28n:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var a=n("hmgV")
var i=m(a)
var o=n("2Knc")
var s=m(o)
var u=n("cUZJ")
var l=m(u)
var c=n("VbIB")
var d=m(c)
var f=n("vAQ1")
var h=m(f)
function m(e){return e&&e.__esModule?e:{default:e}}var p={ALLOWED_PLURALIZATION_KEYS:["zero","one","few","many","other"],REQUIRED_PLURALIZATION_KEYS:["one","other"],UNSUPPORTED_EXPRESSION:[],normalizeKey:function(e){return e},normalizeDefault:function(e,t){e=p.inferPluralizationHash(e,t)
return e},inferPluralizationHash:function(e,t){return"string"===typeof e&&e.match(/^[\w-]+$/)&&t&&"count"in t?{one:"1 "+e,other:"%{count} "+(0,i.default)(e)}:e},isObject:function(e){return"object"===("undefined"===typeof e?"undefined":r(e))&&e!==this.UNSUPPORTED_EXPRESSION},validDefault:function(e){var t=this.defaultValue
return e&&("undefined"===typeof t||null===t)||"string"===typeof t||this.isObject(t)},inferKey:function(e,t){if(this.validDefault(e)){e=this.normalizeDefault(e,t)
"object"===("undefined"===typeof e?"undefined":r(e))&&(e=""+e.other)
return this.keyify(e)}},keyifyUnderscored:function(e){var t=(0,d.default)(e,{separator:"_",lang:false}).replace(/[-_]+/g,"_")
return t.substring(0,l.default.config.underscoredKeyLength)},keyifyUnderscoredCrc32:function(e){var t=(0,h.default)(e.length+":"+e).toString(16)
return this.keyifyUnderscored(e)+"_"+t},keyify:function(e){switch(l.default.config.inferredKeyFormat){case"underscored":return this.keyifyUnderscored(e)
case"underscored_crc32":return this.keyifyUnderscoredCrc32(e)
default:return e}},keyPattern:/^(\w+\.)+\w+$/,isKeyProvided:function(e,t,n){if("object"===("undefined"===typeof e?"undefined":r(e)))return false
if("string"===typeof t)return true
if(n)return true
if("string"===typeof e&&e.match(p.keyPattern))return true
return false},isPluralizationHash:function(e){var t
return this.isObject(e)&&(t=s.default.keys(e))&&t.length>0&&0===s.default.difference(t,this.ALLOWED_PLURALIZATION_KEYS).length},inferArguments:function(e,t){if(2===e.length&&"object"===r(e[1])&&e[1].defaultValue)return e
var n=this.isKeyProvided.apply(this,e)
t&&(t.inferredKey=!n)
n||e.unshift(null)
var a=null
var i=e[1];(e[2]||"string"===typeof i||this.isPluralizationHash(i))&&(a=e.splice(1,1)[0])
1===e.length&&e.push({})
var o=e[1]
a&&(o.defaultValue=a)
n||(e[0]=this.inferKey(a,o))
return e},applyWrappers:function(e,t){var n
var r
var a
"string"===typeof t&&(t=[t])
if(t instanceof Array)for(n=t.length;n;n--)e=this.applyWrapper(e,new Array(n+1).join("*"),t[n-1])
else{a=s.default.keys(t)
a.sort(function(e,t){return t.length-e.length})
for(n=0,r=a.length;n<r;n++)e=this.applyWrapper(e,a[n],t[a[n]])}return e},applyWrapper:function(e,t,n){var r=s.default.regexpEscape(t)
var a=new RegExp(r+"(.*?)"+r,"g")
return e.replace(a,n)}}
t.default=p},SPof:function(e,t){Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]}},TqRt:function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},UlQx:function(e,t,n){"use strict"
n.r(t)
var r=n("pQTu")
var a=n("m0r6")
Object(a["a"])({ar:{date:{days:{today:"اليوم",tomorrow:"غدًا",yesterday:"أمس"}},time:{am:"صباحًا",event:"%{date} في %{time}",pm:"مساءً"}},cy:{date:{days:{today:"Heddiw",tomorrow:"Yfory",yesterday:"Ddoe"}},time:{am:"am",event:"%{date} am %{time}",pm:"pm"}},da:{date:{days:{today:"I dag",tomorrow:"I morgen",yesterday:"I går"}},time:{am:"am",event:"%{date} kl. %{time}",pm:"pm"}},"da-x-k12":{date:{days:{today:"I dag",tomorrow:"I morgen",yesterday:"I går"}},time:{am:"am",event:"%{date} kl. %{time}",pm:"pm"}},de:{date:{days:{today:"Heute",tomorrow:"Morgen",yesterday:"Gestern"}},time:{am:"vormittags",event:"am %{date} um %{time}",pm:"nachmittags"}},el:{date:{days:{today:"Σήμερα",tomorrow:"Αύριο",yesterday:"Χτες"}},time:{am:"π.μ.",event:"%{date} στις %{time}",pm:"μ.μ."}},"en-AU":{date:{days:{today:"Today",tomorrow:"Tomorrow",yesterday:"Yesterday"}},time:{am:"am",event:"%{date} at %{time}",pm:"pm"}},"en-AU-x-unimelb":{date:{days:{today:"Today",tomorrow:"Tomorrow",yesterday:"Yesterday"}},time:{am:"am",event:"%{date} at %{time}",pm:"pm"}},"en-CA":{date:{days:{today:"Today",tomorrow:"Tomorrow",yesterday:"Yesterday"}},time:{am:"am",event:"%{date} at %{time}",pm:"pm"}},"en-GB":{date:{days:{today:"Today",tomorrow:"Tomorrow",yesterday:"Yesterday"}},time:{am:"am",event:"%{date} at %{time}",pm:"pm"}},"en-GB-x-lbs":{date:{days:{today:"Today",tomorrow:"Tomorrow",yesterday:"Yesterday"}},time:{am:"am",event:"%{date} at %{time}",pm:"pm"}},"en-GB-x-ukhe":{date:{days:{today:"Today",tomorrow:"Tomorrow",yesterday:"Yesterday"}},time:{am:"am",event:"%{date} at %{time}",pm:"pm"}},es:{date:{days:{today:"Hoy",tomorrow:"Mañana",yesterday:"Ayer"}},time:{am:"am",event:"%{date} en %{time}",pm:"pm"}},fa:{date:{days:{today:"امروز",tomorrow:"فردا",yesterday:"دیروز"}},time:{am:"قبل از ظهر",event:"%{date} در %{time}",pm:"بعد از ظهر"}},fr:{date:{days:{today:"Aujourd’hui",tomorrow:"Demain",yesterday:"Hier"}},time:{am:"matin",event:"%{date} à %{time}",pm:"après-midi"}},"fr-CA":{date:{days:{today:"Aujourd’hui",tomorrow:"Demain",yesterday:"Hier"}},time:{am:"matin",event:"%{date} sur %{time}",pm:"pm"}},he:{date:{days:{today:"היום",tomorrow:"מחר",yesterday:"אתמול"}},time:{am:"לפני הצהרים",event:"%{date} בשעה %{time}",pm:"אחר הצהריים"}},ht:{date:{days:{today:"Jodi a",tomorrow:"Demen",yesterday:"Yè"}},time:{am:"am",event:"%{date} a %{time}",pm:"pm"}},hu:{date:{days:{today:"Ma",tomorrow:"Holnap",yesterday:"Tegnap"}},time:{am:"de.",event:"%{date},  %{time}",pm:"du."}},hy:{date:{days:{today:"Այսօր",tomorrow:"Վաղը",yesterday:"Երեկ"}},time:{am:"am",event:"%{date}, ժամը %{time}-ին",pm:"pm"}},is:{date:{days:{today:"Í dag",tomorrow:"Á morgun",yesterday:"Í gær"}},time:{am:"f.hádegi",event:"%{date} á %{time}",pm:"e.hádegi"}},it:{date:{days:{today:"Oggi",tomorrow:"Domani",yesterday:"Ieri"}},time:{am:"del mattino",event:"%{date} alle %{time}",pm:"del pomeriggio"}},ja:{date:{days:{today:"本日",tomorrow:"明日",yesterday:"昨日"}},time:{am:"午前",event:"%{date} 日  %{time}",pm:"午後"}},ko:{date:{days:{today:"오늘",tomorrow:"내일",yesterday:"어제"}},time:{am:"오전",event:"%{date} %{time}",pm:"오후"}},mi:{date:{days:{today:"tēnei rā",tomorrow:"apopo",yesterday:"Inanahi"}},time:{am:"am",event:"%{date} i %{time} ",pm:"pm"}},nb:{date:{days:{today:"I dag",tomorrow:"I morgen",yesterday:"I går"}},time:{am:"am",event:"%{date} i %{time}",pm:"pm"}},"nb-x-k12":{date:{days:{today:"I dag",tomorrow:"I morgen",yesterday:"I går"}},time:{am:"am",event:"%{date} i %{time}",pm:"pm"}},nl:{date:{days:{today:"Vandaag",tomorrow:"Morgen",yesterday:"Gisteren"}},time:{am:"'s ochtends",event:"%{date} op %{time}",pm:"'s middags"}},nn:{date:{days:{today:"I dag",tomorrow:"I morgon",yesterday:"I går"}},time:{am:"am",event:"%{date} %{time}",pm:"pm"}},pl:{date:{days:{today:"Dzisiaj",tomorrow:"Jutro",yesterday:"Wczoraj"}},time:{am:"rano",event:"%{date} o godzinie %{time}",pm:"po południu"}},pt:{date:{days:{today:"Hoje",tomorrow:"Amanhã",yesterday:"Ontem"}},time:{am:"am",event:"%{date} em %{time}",pm:"pm"}},"pt-BR":{date:{days:{today:"Hoje",tomorrow:"Amanhã",yesterday:"Ontem"}},time:{am:"am",event:"%{date} em %{time}",pm:"pm"}},ru:{date:{days:{today:"Сегодня",tomorrow:"Завтра",yesterday:"Вчера"}},time:{am:"am",event:"%{date} в %{time}",pm:"pm"}},sl:{date:{days:{today:"Danes",tomorrow:"Jutri",yesterday:"Včeraj"}},time:{am:"dop.",event:"%{date} ob %{time}",pm:"pop."}},sv:{date:{days:{today:"Idag",tomorrow:"Imorgon",yesterday:"Igår"}},time:{am:"am",event:"%{date} kl %{time}",pm:"pm"}},"sv-x-k12":{date:{days:{today:"Idag",tomorrow:"Imorgon",yesterday:"Igår"}},time:{am:"förmiddag",event:"%{date} kl %{time}",pm:"eftermiddag"}},tr:{date:{days:{today:"Bugün",tomorrow:"Yarın",yesterday:"Dün"}},time:{am:"am",event:"%{date} %{time}",pm:"pm"}},uk:{date:{days:{today:"Сьогодні",tomorrow:"Завтра",yesterday:"Вчора"}},time:{am:"am",event:"%{date} о %{time}",pm:"pm"}},"zh-Hans":{date:{days:{today:"今天",tomorrow:"明天",yesterday:"昨天"}},time:{am:"上午",event:"%{date} %{time}",pm:"下午"}},"zh-Hant":{date:{days:{today:"今天",tomorrow:"明天",yesterday:"昨天"}},time:{am:"上午",event:"%{date} %{time}",pm:"下午"}}})
n("jQeR")
n("0sPK")
var i=r["default"].scoped("instructure_date_and_time")
var o=n("ouhR")
var s=n.n(o)
var u=n("2DhO")
var l=n("5Ky4")
var c=n("1OyB")
var d=n("vuIU")
Object(a["a"])({ar:{datepicker:{errors:{not_a_date:"هذا ليس تاريخًا!"},first_day_index:"6",nextText:"التالي",prevText:"السابق"},helpers:{course:"المساق",local:"محلي"}},cy:{datepicker:{errors:{not_a_date:"Dydy hwnnw ddim yn ddyddiad!"},first_day_index:"0",nextText:"Nesaf",prevText:"Blaenorol"},helpers:{course:"Cwrs",local:"Lleol"}},da:{datepicker:{errors:{not_a_date:"Det er ikke en dato!"},first_day_index:"1",nextText:"Næste",prevText:"Forrige"},helpers:{course:"Fag",local:"Lokal"}},"da-x-k12":{datepicker:{errors:{not_a_date:"Det er ikke en dato!"},first_day_index:"1",nextText:"Næste",prevText:"Forrige"},helpers:{course:"Fag",local:"Lokal"}},de:{datepicker:{errors:{not_a_date:"Das ist kein Datum!"},first_day_index:"1",nextText:"Nächste/r",prevText:"Vorher."},helpers:{course:"Kurs",local:"Lokal"}},el:{datepicker:{errors:{not_a_date:"Αυτή η καταχώριση δεν είναι ημερομηνία!"},first_day_index:"0",nextText:"Επόμενο",prevText:"Προηγούμενο"},helpers:{course:"Μάθημα",local:"Τοπικό"}},"en-AU":{datepicker:{errors:{not_a_date:"That's not a date!"},first_day_index:"1",nextText:"Next",prevText:"Prev"},helpers:{course:"Course",local:"Local"}},"en-AU-x-unimelb":{datepicker:{errors:{not_a_date:"That's not a date!"},first_day_index:"1",nextText:"Next",prevText:"Prev"},helpers:{course:"Subject",local:"Local"}},"en-CA":{datepicker:{errors:{not_a_date:"That's not a date!"},first_day_index:"0",nextText:"Next",prevText:"Prev"},helpers:{course:"Course",local:"Local"}},"en-GB":{datepicker:{errors:{not_a_date:"That is not a date!"},first_day_index:"1",nextText:"Next",prevText:"Prev"},helpers:{course:"Course",local:"Local"}},"en-GB-x-lbs":{datepicker:{errors:{not_a_date:"That is not a date!"},first_day_index:"0",nextText:"Next",prevText:"Prev"},helpers:{course:"Programme",local:"Local"}},"en-GB-x-ukhe":{datepicker:{errors:{not_a_date:"That is not a date!"},first_day_index:"0",nextText:"Next",prevText:"Prev"},helpers:{course:"Module",local:"Local"}},es:{datepicker:{errors:{not_a_date:"¡Esa no es una fecha!"},first_day_index:"1",nextText:"Siguiente",prevText:"Previo"},helpers:{course:"Curso",local:"Lugar"}},fa:{datepicker:{errors:{not_a_date:"این یک تاریخ نیست!"},first_day_index:"6",nextText:"بعدی",prevText:"قبلی"},helpers:{course:"درس",local:"محلی"}},fr:{datepicker:{errors:{not_a_date:"Ceci n'est pas une date !"},first_day_index:"1",nextText:"Suivant",prevText:"Précédent"},helpers:{course:"Cours",local:"Local"}},"fr-CA":{datepicker:{errors:{not_a_date:"Ceci n'est pas une date!"},first_day_index:"0",nextText:"Suivant",prevText:"Précédent"},helpers:{course:"Cours",local:"Local"}},he:{datepicker:{errors:{not_a_date:"זה לא תאריך!"},first_day_index:"0",nextText:"הבא",prevText:"הקודם"},helpers:{course:"קורס",local:"מקומי"}},ht:{datepicker:{errors:{not_a_date:"Sa pa yon dat!"},first_day_index:"0",nextText:"Pwochen",prevText:"Anvan"},helpers:{course:"Kou",local:"Lokal"}},hu:{datepicker:{errors:{not_a_date:"Ez nem egy dátum!"},first_day_index:"0",nextText:"Következő",prevText:"Előző"},helpers:{course:"Kurzus",local:"Helyi"}},hy:{datepicker:{errors:{not_a_date:"Դա ամսաթիվ չէ:"},first_day_index:"0",nextText:"Հաջորդը",prevText:"Նախորդը"},helpers:{course:"Դասընթաց",local:"Տեղական"}},is:{datepicker:{errors:{not_a_date:"Þetta er ekki dagsetning!"},first_day_index:"0",nextText:"Næsti",prevText:"Fyrri"},helpers:{course:"Námskeið",local:"Staðbundið"}},it:{datepicker:{errors:{not_a_date:"Non è una data."},first_day_index:"0",nextText:"Successivo",prevText:"Precedente"},helpers:{course:"Corso",local:"Locale"}},ja:{datepicker:{errors:{not_a_date:"それは日付けではありません!"},first_day_index:"0",nextText:"次へ",prevText:"前へ"},helpers:{course:"コース",local:"ローカル"}},ko:{helpers:{course:"과목"}},mi:{datepicker:{errors:{not_a_date:"E kore te he rā!"},first_day_index:"0",nextText:"E haere ake nei",prevText:"Mua"},helpers:{course:"akoranga",local:"Paetata"}},nb:{datepicker:{errors:{not_a_date:"Det er ikke en dato!"},first_day_index:"1",nextText:"Neste",prevText:"Forrige"},helpers:{course:"Emne",local:"Lokal"}},"nb-x-k12":{datepicker:{errors:{not_a_date:"Det er ikke en dato!"},first_day_index:"1",nextText:"Neste",prevText:"Forrige"},helpers:{course:"Fag",local:"Lokal"}},nl:{datepicker:{errors:{not_a_date:"Dat is geen datum!"},first_day_index:"1",nextText:"Volgende",prevText:"Vorige"},helpers:{course:"Cursus",local:"Plaatselijk"}},nn:{datepicker:{errors:{not_a_date:"Det er ikkje ein dato."},first_day_index:"1",nextText:"Neste",prevText:"Førre"},helpers:{course:"Emne",local:"Lokal"}},pl:{datepicker:{errors:{not_a_date:"To nie jest data!"},first_day_index:"1",nextText:"Dalej",prevText:"Poprz"},helpers:{course:"Kurs",local:"Lokalne"}},pt:{datepicker:{errors:{not_a_date:"Isto não é uma data!"},first_day_index:"0",nextText:"Avançar",prevText:"Voltar"},helpers:{course:"Disciplina",local:"Local"}},"pt-BR":{datepicker:{errors:{not_a_date:"Isso não é uma data!"},first_day_index:"0",nextText:"Próx",prevText:"Ant"},helpers:{course:"Curso",local:"Local"}},ru:{datepicker:{errors:{not_a_date:"Это не дата!"},first_day_index:"1",nextText:"Далее",prevText:"Назад"},helpers:{course:"Курс",local:"Местный"}},sl:{datepicker:{errors:{not_a_date:"To ni datum."},first_day_index:"0",nextText:"Naprej",prevText:"Nazaj"},helpers:{course:"Predmet",local:"Lokalno"}},sv:{datepicker:{errors:{not_a_date:"Det är inget datum!"},first_day_index:"1",nextText:"Nästa",prevText:"Föregående"},helpers:{course:"Kurs",local:"Lokal"}},"sv-x-k12":{datepicker:{errors:{not_a_date:"Det är inget datum!"},first_day_index:"0",nextText:"Nästa",prevText:"Föregående"},helpers:{course:"Kurs",local:"Lokal"}},tr:{datepicker:{errors:{not_a_date:"Bu bir tarih değil!"},first_day_index:"1",nextText:"Sonraki",prevText:"Önceki"},helpers:{course:"Ders",local:"Yerel"}},uk:{datepicker:{errors:{not_a_date:"Це не дата!"},first_day_index:"0",nextText:"Наступний",prevText:"Попередній"},helpers:{course:"Курс",local:"локально"}},"zh-Hans":{datepicker:{errors:{not_a_date:"这不是一个日期！"},first_day_index:"1",nextText:"下一个",prevText:"上一个"},helpers:{course:"课程",local:"当地时间"}},"zh-Hant":{datepicker:{errors:{not_a_date:"那不是日期！"},first_day_index:"1",nextText:"下一個",prevText:"預覽"},helpers:{course:"課程",local:"本地"}}})
var f=r["default"].scoped("datepicker")
var h=n("GLiE")
var m=n("iOIl")
var p=n("HIhM")
var _=n("wd/R")
var g=n.n(_)
n("MWZS")
var y=function(){function e(t){var n=this
var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
Object(c["a"])(this,e);["alertScreenreader","setFromValue","setDatetime","setTime","setDate"].forEach(function(e){return n[e]=n[e].bind(n)})
var a
this.$field=t
this.$field.data({instance:this})
this.processTimeOptions(r)
this.showDate&&(a=this.addDatePicker(r))
this.addSuggests(a||this.$field,r)
r.addHiddenInput&&this.addHiddenInput()
this.$field.bind("change focus blur keyup",this.setFromValue)
this.$field.bind("change focus keyup",this.alertScreenreader)
this.debouncedSRFME=Object(h["debounce"])(s.a.screenReaderFlashMessageExclusive,1e3)
this.setFromValue()}Object(d["a"])(e,[{key:"processTimeOptions",value:function(e){var t=e.timeOnly,n=e.dateOnly
var r=e.alwaysShowTime
if(t&&n){console.warn("DatetimeField instantiated with both timeOnly and dateOnly true.")
console.warn("Treating both as false instead.")
t=n=false}this.showDate=!t
this.allowTime=!n
this.alwaysShowTime=this.allowTime&&(t||r)}},{key:"addDatePicker",value:function(e){var t=this
this.$field.wrap('<div class="input-append" />')
var n=this.$field.parent(".input-append")
if(!this.isReadonly()){var r=s.a.extend({},this.datepickerDefaults(),{timePicker:this.allowTime,beforeShow:function(){return t.$field.trigger("detachTooltip")},onClose:function(){return t.$field.trigger("reattachTooltip")},firstDay:g.a.localeData(ENV.MOMENT_LOCALE).firstDayOfWeek()},e.datepicker)
this.$field.datepicker(r)
var a=this.$field.next()
a.attr("aria-hidden","true")
a.attr("tabindex","-1")
e.disableButton&&a.attr("disabled","true")}return n}},{key:"addSuggests",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this.isReadonly())return
this.courseTimezone=t.courseTimezone||ENV.CONTEXT_TIMEZONE
this.$suggest=s()('<div class="datetime_suggest" />').insertAfter(e)
null!=this.courseTimezone&&this.courseTimezone!==ENV.TIMEZONE&&(this.$courseSuggest=s()('<div class="datetime_suggest" />').insertAfter(this.$suggest))}},{key:"addHiddenInput",value:function(){this.$hiddenInput=s()('<input type="hidden">').insertAfter(this.$field)
this.$hiddenInput.attr("name",this.$field.attr("name"))
this.$hiddenInput.val(this.$field.val())
this.$field.removeAttr("name")
this.$field.data("hiddenInput",this.$hiddenInput)}},{key:"setDate",value:function(e){if(this.showDate)return this.setFormattedDatetime(e,"date.formats.medium")
this.implicitDate=e
return this.setFromValue()}},{key:"setTime",value:function(e){return this.setFormattedDatetime(e,"time.formats.tiny")}},{key:"setDatetime",value:function(e){return this.setFormattedDatetime(e,"date.formats.full")}},{key:"setFromValue",value:function(){this.parseValue()
this.update()}},{key:"normalizeValue",value:function(e){if(null==e)return e
e=e.trim()
if(""===e)return e
if(this.showDate)return e
if(!e.match(/^\d{1,2}$/))return e
if(e.match(/^0/))return"".concat(e,":00")
var t=parseInt(e,10)
return t<0||t>=24?e:"".concat(t,t<8?"pm":":00")}},{key:"parseValue",value:function(){var e=this.normalizeValue(this.$field.val())
this.datetime=u["a"].parse(e)
this.datetime&&!this.showDate&&this.implicitDate&&(this.datetime=u["a"].mergeTimeAndDate(this.datetime,this.implicitDate))
this.fudged=s.a.fudgeDateForProfileTimezone(this.datetime)
this.showTime=this.alwaysShowTime||this.allowTime&&!u["a"].isMidnight(this.datetime)
this.blank=!e
this.invalid=!this.blank&&null===this.datetime}},{key:"setFormattedDatetime",value:function(e,t){if(e){this.blank=false
this.datetime=e
this.fudged=s.a.fudgeDateForProfileTimezone(this.datetime)
this.$field.val(u["a"].format(this.datetime,t))}else{this.blank=true
this.datetime=null
this.fudged=null
this.$field.val("")}this.invalid=false
this.showTime=this.alwaysShowTime||this.allowTime&&!u["a"].isMidnight(this.datetime)
this.update()}},{key:"update",value:function(e){this.updateData()
this.updateSuggest()
this.updateAria()}},{key:"updateData",value:function(){var e=this.datetime&&this.datetime.toISOString()||""
this.$field.data({"unfudged-date":this.datetime,date:this.fudged,iso8601:e,blank:this.blank,invalid:this.invalid})
this.$hiddenInput&&this.$hiddenInput.val(this.fudged)
if(!(this.showDate&&this.allowTime))return
this.invalid||this.blank||!this.showTime?this.$field.data({"time-hour":null,"time-minute":null,"time-ampm":null}):u["a"].useMeridian()?this.$field.data({"time-hour":u["a"].format(this.datetime,"%-l"),"time-minute":u["a"].format(this.datetime,"%M"),"time-ampm":u["a"].format(this.datetime,"%P")}):this.$field.data({"time-hour":u["a"].format(this.datetime,"%-k"),"time-minute":u["a"].format(this.datetime,"%M"),"time-ampm":null})}},{key:"updateSuggest",value:function(){if(this.isReadonly())return
var e=this.formatSuggest()
this.screenreaderAlert=e
if(this.$courseSuggest){var t=this.formatSuggestCourse()
if(t){e=this.localLabel+e
t=this.courseLabel+t
this.screenreaderAlert="".concat(e,"\n").concat(t)}this.$courseSuggest.text(t)}this.$suggest.toggleClass("invalid_datetime",this.invalid).text(e)}},{key:"alertScreenreader",value:function(){var e=this.$field.val()
if(e!==this.lastAlertedFor){this.debouncedSRFME(this.screenreaderAlert)
this.lastAlertedFor=e}}},{key:"updateAria",value:function(){this.$field.attr("aria-invalid",!!this.invalid)}},{key:"formatSuggest",value:function(){return this.blank?"":this.invalid?this.parseError:u["a"].format(this.datetime,this.formatString())}},{key:"formatSuggestCourse",value:function(){return this.blank?"":this.invalid?"":this.showTime?u["a"].format(this.datetime,this.formatString(),this.courseTimezone):""}},{key:"formatString",value:function(){return this.showDate&&this.showTime?f.t("#date.formats.full_with_weekday"):this.showDate?f.t("#date.formats.medium_with_weekday"):f.t("#time.formats.tiny")}},{key:"isReadonly",value:function(){return!!this.$field.attr("readonly")}},{key:"datepickerDefaults",value:function(){return{constrainInput:false,dateFormat:Object(m["a"])(f.lookup("date.formats.medium")),showOn:"button",buttonText:'<i class="icon-calendar-month"></i>',buttonImageOnly:false,disableButton:false,isRTL:Object(p["c"])(),prevText:f.t("prevText","Prev"),nextText:f.t("nextText","Next"),monthNames:f.lookup("date.month_names").slice(1),monthNamesShort:f.lookup("date.abbr_month_names").slice(1),dayNames:f.lookup("date.day_names"),dayNamesShort:f.lookup("date.abbr_day_names"),dayNamesMin:f.lookup("date.datepicker.column_headings"),firstDay:f.t("first_day_index","0"),showMonthAfterYear:"%Y"===f.t("#date.formats.medium_month").slice(0,2)}}}])
return e}()
y.prototype.parseError=f.t("errors.not_a_date","That's not a date!")
y.prototype.courseLabel="".concat(f.t("#helpers.course","Course"),": ")
y.prototype.localLabel="".concat(f.t("#helpers.local","Local"),": ")
var v=n("An8g")
Object(a["a"])({ar:{buttons:{done:"انتهاء"},time_2b5aac58:"الوقت"},cy:{buttons:{done:"Wedi gorffen"},time_2b5aac58:"Amser"},da:{buttons:{done:"Luk"},time_2b5aac58:"Tidspunkt"},"da-x-k12":{buttons:{done:"Udført"},time_2b5aac58:"Tidspunkt"},de:{buttons:{done:"Fertig"},time_2b5aac58:"Uhrzeit"},el:{buttons:{done:"Ολοκληρώθηκε"},time_2b5aac58:"Χρόνος"},"en-AU":{buttons:{done:"Done"},renderDatepickerTime:{datepicker:{titles:{am_pm:"am/pm",hour:"hr",minute:"min"}}},time_2b5aac58:"Time"},"en-AU-x-unimelb":{buttons:{done:"Done"},renderDatepickerTime:{datepicker:{titles:{am_pm:"am/pm",hour:"hr",minute:"min"}}},time_2b5aac58:"Time"},"en-CA":{buttons:{done:"Done"},renderDatepickerTime:{datepicker:{titles:{am_pm:"am/pm",hour:"hr",minute:"min"}}},time_2b5aac58:"Time"},"en-GB":{buttons:{done:"Done"},renderDatepickerTime:{datepicker:{titles:{am_pm:"am/pm",hour:"hr",minute:"min"}}},time_2b5aac58:"Time"},"en-GB-x-lbs":{buttons:{done:"Done"},time_2b5aac58:"Time"},"en-GB-x-ukhe":{buttons:{done:"Done"},renderDatepickerTime:{datepicker:{titles:{am_pm:"am/pm",hour:"hr",minute:"min"}}},time_2b5aac58:"Time"},es:{buttons:{done:"Listo"},time_2b5aac58:"Hora"},fa:{buttons:{done:"انجام شد"},time_2b5aac58:"زمان"},fr:{buttons:{done:"Terminé"},time_2b5aac58:"Temps"},"fr-CA":{buttons:{done:"Terminé"},time_2b5aac58:"Heure"},he:{buttons:{done:"בוצע"},time_2b5aac58:"זמן"},ht:{buttons:{done:"Fini"},time_2b5aac58:"Lè"},hu:{buttons:{done:"Kész"},time_2b5aac58:"Idő"},hy:{buttons:{done:"Պատրաստ է"},time_2b5aac58:"Ժամ"},is:{buttons:{done:"Búið"},renderDatepickerTime:{datepicker:{titles:{am_pm:"f.hádegi/e.hádegi",hour:"klst.",minute:"mín."}}},time_2b5aac58:"Tími"},it:{buttons:{done:"Fatto"},time_2b5aac58:"Ora"},ja:{buttons:{done:"完了"},time_2b5aac58:"時刻"},ko:{buttons:{done:"마침"}},mi:{buttons:{done:"Kua mahia"},renderDatepickerTime:{datepicker:{titles:{am_pm:"am / pm",hour:"hr",minute:"iti"}}},time_2b5aac58:"Wā"},nb:{buttons:{done:"Ferdig"},time_2b5aac58:"Tid"},"nb-x-k12":{buttons:{done:"Ferdig"},time_2b5aac58:"Tid"},nl:{buttons:{done:"Gereed"},time_2b5aac58:"Tijd"},nn:{buttons:{done:"Fullført"},time_2b5aac58:"Tidspunkt"},pl:{buttons:{done:"Gotowe"},time_2b5aac58:"Godzina"},pt:{buttons:{done:"Concluir"},time_2b5aac58:"Hora"},"pt-BR":{buttons:{done:"Concluir"},time_2b5aac58:"Tempo"},ru:{buttons:{done:"Готово"},renderDatepickerTime:{datepicker:{titles:{am_pm:"am/pm",hour:"ч",minute:"мин"}}},time_2b5aac58:"Время"},sl:{buttons:{done:"Dokončano"},time_2b5aac58:"Čas"},sv:{buttons:{done:"Färdig"},time_2b5aac58:"Tid"},"sv-x-k12":{buttons:{done:"Färdiggjord"},time_2b5aac58:"Tid"},tr:{buttons:{done:"Tamam"},time_2b5aac58:"Süre"},uk:{buttons:{done:"Готово"},time_2b5aac58:"Час"},"zh-Hans":{buttons:{done:"完成"},time_2b5aac58:"时间"},"zh-Hant":{buttons:{done:"已完成"},time_2b5aac58:"時間"}})
var b=r["default"].scoped("renderDatepickerTime")
n("q1tI")
var w=n("i8i4")
var k=n.n(w)
var x={timeLabel:b.beforeLabel(b.t("Time")),hourTitle:b.t("datepicker.titles.hour","hr"),minuteTitle:b.t("datepicker.titles.minute","min"),selectTitle:b.t("datepicker.titles.am_pm","am/pm"),AM:b.t("#time.am"),PM:b.t("#time.pm"),doneButton:b.t("#buttons.done","Done")}
var M=Object(v["a"])("option",{value:""},"unset"," ")
function T(e){var t={hour:(e.data("time-hour")||"").replace(/'/g,""),minute:(e.data("time-minute")||"").replace(/'/g,""),ampm:e.data("time-ampm")||""}
var n=Object(v["a"])("label",{htmlFor:"ui-datepicker-time-hour"},void 0,x.timeLabel)
var r=Object(v["a"])("input",{id:"ui-datepicker-time-hour",type:"text",defaultValue:t.hour,title:x.hourTitle,className:"ui-datepicker-time-hour",style:{width:"20px"}})
var a=Object(v["a"])("input",{type:"text",defaultValue:t.minute,title:x.minuteTitle,className:"ui-datepicker-time-minute",style:{width:"20px"}})
var i=""
u["a"].useMeridian()&&(i=Object(v["a"])("select",{defaultValue:t.ampm,className:"ui-datepicker-time-ampm un-bootrstrapify",title:x.selectTitle},void 0,M,Object(v["a"])("option",{value:x.AM},"am",x.AM),Object(v["a"])("option",{value:x.PM},"pm",x.PM)))
var o=document.createElement("div")
k.a.render(Object(v["a"])("div",{className:"ui-datepicker-time ui-corner-bottom"},void 0,n," ",Object(v["a"])("span",{dir:"ltr"},void 0,r,":",a)," ",i,Object(v["a"])("button",{type:"button",className:"btn btn-mini ui-datepicker-ok"},void 0,x.doneButton)),o)
return o.innerHTML}var D=T
n("q3b3")
n("2sOc")
n("spya")
s.a.fudgeDateForProfileTimezone=function(e){e=u["a"].parse(e)
if(!e)return null
var t=u["a"].format(e,"%Y")
while(t.length<4)t="0"+t
var n=u["a"].format(e,t+"-%m-%d %T")
var r=new Date(n)
isNaN(r)&&(r=Date.parse(n))
return r}
s.a.unfudgeDateForProfileTimezone=function(e){e=u["a"].parse(e)
if(!e)return null
return u["a"].parse(e.toString("yyyy-MM-dd HH:mm:ss"))}
s.a.sameYear=function(e,t){return u["a"].format(e,"%Y")==u["a"].format(t,"%Y")}
s.a.sameDate=function(e,t){return u["a"].format(e,"%F")==u["a"].format(t,"%F")}
s.a.dateString=function(e,t){if(null==e)return""
var n=t&&t.timezone
var r=t&&t.format
r="full"===r?"date.formats.full":"medium"!==r&&s.a.sameYear(e,new Date)?"date.formats.short":"date.formats.medium"
return"string"==typeof n||n instanceof String?u["a"].format(e,r,n)||"":u["a"].format(e,r)||""}
s.a.timeString=function(e,t){if(null==e)return""
var n=t&&t.timezone
var r="00"===u["a"].format(e,"%M")?"time.formats.tiny_on_the_hour":"time.formats.tiny"
return"string"==typeof n||n instanceof String?u["a"].format(e,r,n)||"":u["a"].format(e,r)||""}
s.a.datetimeString=function(e,t){e=u["a"].parse(e)
if(null==e)return""
var n=s.a.dateString(e,t)
var r=s.a.timeString(e,t)
return i.t("#time.event","%{date} at %{time}",{date:n,time:r})}
s.a.friendlyDatetime=function(e,t){var n=Date.today()
return Date.equals(e.clone().clearTime(),n)?i.l("#time.formats.tiny",e):s.a.friendlyDate(e,t)}
s.a.friendlyDate=function(e,t){null==t&&(t="past")
var n=Date.today()
var r=e.clone().clearTime()
if(Date.equals(r,n))return i.t("#date.days.today","Today")
if(Date.equals(r,n.add(-1).days()))return i.t("#date.days.yesterday","Yesterday")
if(Date.equals(r,n.add(1).days()))return i.t("#date.days.tomorrow","Tomorrow")
if("past"==t&&r<n&&r>=n.add(-6).days())return i.l("#date.formats.weekday",r)
if("future"==t&&r<n.add(7).days()&&r>=n)return i.l("#date.formats.weekday",r)
return i.l("#date.formats.medium",r)}
s.a.datepicker.oldParseDate=s.a.datepicker.parseDate
s.a.datepicker.parseDate=function(e,t,n){var r=u["a"].parse(t)
return r?s.a.fudgeDateForProfileTimezone(r):s.a.datepicker.oldParseDate(e,t,n)}
s.a.datepicker._generateDatepickerHTML=s.a.datepicker._generateHTML
s.a.datepicker._generateHTML=function(e){var t=s.a.datepicker._generateDatepickerHTML(e)
e.settings.timePicker&&(t+=D(e.input))
return t}
s.a.fn.realDatepicker=s.a.fn.datepicker
var E=s.a.datepicker._selectDay
s.a.datepicker._selectDay=function(e,t,n,r){var a=s()(e)
if(s()(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0]))return
var i=this._getInst(a[0])
if(!i.settings.timePicker||s.a.datepicker.okClicked||i._keyEvent)E.call(this,e,t,n,r)
else{var o=i.inline
i.inline=true
s.a.data(a,"datepicker",i)
E.call(this,e,t,n,r)
i.inline=o
s.a.data(a,"datepicker",i)}}
s.a.fn.datepicker=function(e){e=s.a.extend({},e)
e.prevOnSelect=e.onSelect
e.onSelect=function(t,n){e.prevOnSelect&&e.prevOnSelect.call(this,t,n)
var r=n.dpDiv
var a=r.find(".ui-datepicker-time-hour").val()||s()(this).data("time-hour")
var o=r.find(".ui-datepicker-time-minute").val()||s()(this).data("time-minute")
var l=r.find(".ui-datepicker-time-ampm").val()||s()(this).data("time-ampm")
if(a||o){t+=" "+a+":"+(o||"00")
u["a"].useMeridian()&&(t+=" "+(l||i.t("#time.pm")))}n.input.val(t).change()}
if(!s.a.fn.datepicker.timepicker_initialized){s()(document).delegate(".ui-datepicker-ok","click",function(e){var t=s.a.datepicker._curInst
var n=t
var r=s()("td."+s.a.datepicker._dayOverClass+", td."+s.a.datepicker._currentClass,n.dpDiv)
if(r[0]){s.a.datepicker.okClicked=true
s.a.datepicker._selectDay(t.input[0],n.selectedMonth,n.selectedYear,r[0])
s.a.datepicker.okClicked=false}else s.a.datepicker._hideDatepicker(null,s.a.datepicker._get(n,"duration"))})
s()(document).delegate(".ui-datepicker-time-hour","change keypress focus blur",function(e){var t=s.a.datepicker._curInst
if(t){var n=s()(this)
var r=n.val()
var a=n.closest(".ui-datepicker-time").find(".ui-datepicker-time-ampm")
if("change"===e.type&&r&&a.length&&!a.val()){var o
if(0===parseInt(r,10)){o=i.t("#time.am")
r="12"
n.val(r)}else o=i.t("#time.pm")
a.val(o)
t.input.data("time-ampm",o)}t.input.data("time-hour",r)}}).delegate(".ui-datepicker-time-minute","change keypress focus blur",function(e){var t=s.a.datepicker._curInst
if(t){var n=s()(this).val()
t.input.data("time-minute",n)}}).delegate(".ui-datepicker-time-ampm","change keypress focus blur",function(e){var t=s.a.datepicker._curInst
if(t){var n=s()(this).val()
t.input.data("time-ampm",n)}})
s()(document).delegate(".ui-datepicker-time-hour,.ui-datepicker-time-minute,.ui-datepicker-time-ampm","mousedown",function(e){s()(this).focus()})
s()(document).delegate(".ui-datepicker-time-hour,.ui-datepicker-time-minute,.ui-datepicker-time-ampm","change keypress focus blur",function(e){if(e.keyCode&&13==e.keyCode){var t=s.a.datepicker._curInst
var n=t
var r=s()("td."+s.a.datepicker._dayOverClass+", td."+s.a.datepicker._currentClass,n.dpDiv)
if(r[0]){s.a.datepicker.okClicked=true
s.a.datepicker._selectDay(t.input[0],n.selectedMonth,n.selectedYear,r[0])
s.a.datepicker.okClicked=false}else s.a.datepicker._hideDatepicker(null,s.a.datepicker._get(n,"duration"))}else e.keyCode&&27==e.keyCode&&s.a.datepicker._hideDatepicker(null,"")})
s.a.fn.datepicker.timepicker_initialized=true}this.realDatepicker(e)
s()(document).data("last_datepicker",this)
return this}
s.a.fn.date_field=function(e){e=s.a.extend({},e)
e.dateOnly=true
this.datetime_field(e)
return this}
s.a.fn.time_field=function(e){e=s.a.extend({},e)
e.timeOnly=true
this.datetime_field(e)
return this}
s.a.datepicker._triggerClass=s.a.datepicker._triggerClass+" btn"
s.a.fn.datetime_field=function(e){e=s.a.extend({},e)
this.each(function(){var t=s()(this)
if(!t.hasClass("datetime_field_enabled")){t.addClass("datetime_field_enabled")
new y(t,e)}})
return this}
s.a.fn.timepicker=function(){var e=s()("#time_picker")
0===e.length&&(e=s.a._initializeTimepicker())
this.each(function(){s()(this).focus(function(){var e=s()(this).offset()
var t=s()(this).outerHeight()
var n=s()(this).outerWidth()
var r=s()("#time_picker")
r.css({left:-1e3,height:"auto",width:"auto"}).show()
r.offset()
var a=r.outerHeight()
var i=r.outerWidth()
r.css({top:e.top+t,left:e.left}).end()
s()("#time_picker .time_slot").removeClass("ui-state-highlight").removeClass("ui-state-active")
r.data("attached_to",s()(this)[0])
var o=s()(window).height()
var u=s()(window).width()
var l=s.a.windowScrollTop()
e.top+t-l+a>o&&r.css({top:e.top-a})
e.left+i>u&&r.css({left:e.left+n-i})
s()("#time_picker").hide().slideDown()}).blur(function(){if(s()("#time_picker").data("attached_to")==s()(this)[0]){s()("#time_picker").data("attached_to",null)
s()("#time_picker").hide().find(".time_slot.ui-state-highlight").removeClass("ui-state-highlight")}}).keycodes("esc return",function(e){s()(this).triggerHandler("blur")}).keycodes("ctrl+up ctrl+right ctrl+left ctrl+down",function(e){if(s()("#time_picker").data("attached_to")!=s()(this)[0])return
e.preventDefault()
var t=s()("#time_picker .time_slot.ui-state-highlight:first")
var n=s()(s()("#time_picker").data("attached_to")).val()
var r=12
var a="00"
var i="pm"
var o
if(n&&n.length>=7){r=n.substring(0,2)
a=n.substring(3,5)
i=n.substring(5,7)}if(0===t.length){o=parseInt(n,10)-1
isNaN(o)&&(o=0)
s()("#time_picker .time_slot").eq(o).triggerHandler("mouseover")
return}if("ctrl+up"==e.keyString){var u=t.parent(".widget_group")
o=u.children(".time_slot").index(t)
u.hasClass("ampm_group")?o=a/15:u.hasClass("minute_group")&&(o=parseInt(r,10)-1)
u.prev(".widget_group").find(".time_slot").eq(o).triggerHandler("mouseover")}else if("ctrl+right"==e.keyString)t.next(".time_slot").triggerHandler("mouseover")
else if("ctrl+left"==e.keyString)t.prev(".time_slot").triggerHandler("mouseover")
else if("ctrl+down"==e.keyString){u=t.parent(".widget_group")
o=u.children(".time_slot").index(t)
var l=u.next(".widget_group").find(".time_slot")
o=Math.min(o,l.length-1)
u.hasClass("hour_group")?o=a/15:u.hasClass("minute_group")&&(o="am"==i?0:1)
l.eq(o).triggerHandler("mouseover")}})})
return this}
s.a._initializeTimepicker=function(){var e=s()(document.createElement("div"))
e.attr("id","time_picker").css({position:"absolute",display:"none"})
var t="<div class='widget_group hour_group'>"
t+="<div class='ui-widget ui-state-default time_slot'>01</div>"
t+="<div class='ui-widget ui-state-default time_slot'>02</div>"
t+="<div class='ui-widget ui-state-default time_slot'>03</div>"
t+="<div class='ui-widget ui-state-default time_slot'>04</div>"
t+="<div class='ui-widget ui-state-default time_slot'>05</div>"
t+="<div class='ui-widget ui-state-default time_slot'>06</div>"
t+="<div class='ui-widget ui-state-default time_slot'>07</div>"
t+="<div class='ui-widget ui-state-default time_slot'>08</div>"
t+="<div class='ui-widget ui-state-default time_slot'>09</div>"
t+="<div class='ui-widget ui-state-default time_slot'>10</div>"
t+="<div class='ui-widget ui-state-default time_slot'>11</div>"
t+="<div class='ui-widget ui-state-default time_slot'>12</div>"
t+="<div class='clear'></div>"
t+="</div>"
t+="<div class='widget_group minute_group'>"
t+="<div class='ui-widget ui-state-default time_slot'>00</div>"
t+="<div class='ui-widget ui-state-default time_slot'>15</div>"
t+="<div class='ui-widget ui-state-default time_slot'>30</div>"
t+="<div class='ui-widget ui-state-default time_slot'>45</div>"
t+="<div class='clear'></div>"
t+="</div>"
t+="<div class='widget_group ampm_group'>"
t+="<div class='ui-widget ui-state-default time_slot'>"+Object(l["a"])(i.t("#time.am","am"))+"</div>"
t+="<div class='ui-widget ui-state-default time_slot'>"+Object(l["a"])(i.t("#time.pm","pm"))+"</div>"
t+="<div class='clear'></div>"
t+="</div>"
e.html(t)
s()("body").append(e)
e.find(".time_slot").mouseover(function(){e.find(".time_slot.ui-state-highlight").removeClass("ui-state-highlight")
s()(this).addClass("ui-state-highlight")
var t=s()(e.data("attached_to")||"none")
var n=t.val()
var r=12
var a="00"
var i="pm"
if(n&&n.length>=7){r=n.substring(0,2)
a=n.substring(3,5)
i=n.substring(5,7)}var o=s()(this).text()
o>0&&o<=12?r=o:"am"==o||"pm"==o?i=o:a=o
t.val(r+":"+a+i)}).mouseout(function(){s()(this).removeClass("ui-state-highlight")}).mousedown(function(e){e.preventDefault()
s()(this).triggerHandler("mouseover")
s()(this).removeClass("ui-state-highlight").addClass("ui-state-active")}).mouseup(function(){s()(this).removeClass("ui-state-active")}).click(function(t){t.preventDefault()
s()(this).triggerHandler("mouseover")
e.data("attached_to")&&s()(e.data("attached_to")).focus()
e.stop().hide().data("attached_to",null)})
return e}
t["default"]=s.a},UnBK:function(e,t,n){"use strict"
var r=n("xTJ+")
var a=n("xAGQ")
var i=n("Lmem")
var o=n("JEQr")
var s=n("2SVd")
var u=n("5oMp")
function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){l(e)
e.baseURL&&!s(e.url)&&(e.url=u(e.baseURL,e.url))
e.headers=e.headers||{}
e.data=a(e.data,e.headers,e.transformRequest)
e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{})
r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]})
var t=e.adapter||o.adapter
return t(e).then(function(t){l(e)
t.data=a(t.data,t.headers,e.transformResponse)
return t},function(t){if(!i(t)){l(e)
t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))}return Promise.reject(t)})}},VHne:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("9Duh")
n("ZV2x")
n("vTtS")
a.a.widget("ui.draggable",a.a.ui.mouse,{version:"@VERSION",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){"original"!=this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")
this.options.addClasses&&this.element.addClass("ui-draggable")
this.options.disabled&&this.element.addClass("ui-draggable-disabled")
this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled")
this._mouseDestroy()},_mouseCapture:function(e){var t=this.options
if(this.helper||t.disabled||a()(e.target).is(".ui-resizable-handle"))return false
this.handle=this._getHandle(e)
if(!this.handle)return false
a()(true===t.iframeFix?"iframe":t.iframeFix).each(function(){a()('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a()(this).offset()).appendTo("body")})
return true},_mouseStart:function(e){var t=this.options
this.helper=this._createHelper(e)
this.helper.addClass("ui-draggable-dragging")
this._cacheHelperProportions()
a.a.ui.ddmanager&&(a.a.ui.ddmanager.current=this)
this._cacheMargins()
this.cssPosition=this.helper.css("position")
this.scrollParent=this.helper.scrollParent()
this.offset=this.positionAbs=this.element.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
a.a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.originalPosition=this.position=this._generatePosition(e)
this.originalPageX=e.pageX
this.originalPageY=e.pageY
t.cursorAt&&this._adjustOffsetFromHelper(t.cursorAt)
t.containment&&this._setContainment()
if(false===this._trigger("start",e)){this._clear()
return false}this._cacheHelperProportions()
a.a.ui.ddmanager&&!t.dropBehaviour&&a.a.ui.ddmanager.prepareOffsets(this,e)
this._mouseDrag(e,true)
a.a.ui.ddmanager&&a.a.ui.ddmanager.dragStart(this,e)
return true},_mouseDrag:function(e,t){this.position=this._generatePosition(e)
this.positionAbs=this._convertPositionTo("absolute")
if(!t){var n=this._uiHash()
if(false===this._trigger("drag",e,n)){this._mouseUp({})
return false}this.position=n.position}this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px")
this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px")
a.a.ui.ddmanager&&a.a.ui.ddmanager.drag(this,e)
return false},_mouseStop:function(e){var t=false
a.a.ui.ddmanager&&!this.options.dropBehaviour&&(t=a.a.ui.ddmanager.drop(this,e))
if(this.dropped){t=this.dropped
this.dropped=false}var n=this.element[0],r=false
while(n&&(n=n.parentNode))n==document&&(r=true)
if(!r&&"original"===this.options.helper)return false
if("invalid"==this.options.revert&&!t||"valid"==this.options.revert&&t||true===this.options.revert||a.a.isFunction(this.options.revert)&&this.options.revert.call(this.element,t)){var i=this
a()(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){false!==i._trigger("stop",e)&&i._clear()})}else false!==this._trigger("stop",e)&&this._clear()
return false},_mouseUp:function(e){true===this.options.iframeFix&&a()("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})
a.a.ui.ddmanager&&a.a.ui.ddmanager.dragStop(this,e)
return a.a.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear()
return this},_getHandle:function(e){var t=!this.options.handle||!a()(this.options.handle,this.element).length
a()(this.options.handle,this.element).find("*").andSelf().each(function(){this==e.target&&(t=true)})
return t},_createHelper:function(e){var t=this.options
var n=a.a.isFunction(t.helper)?a()(t.helper.apply(this.element[0],[e])):"clone"==t.helper?this.element.clone().removeAttr("id"):this.element
n.parents("body").length||n.appendTo("parent"==t.appendTo?this.element[0].parentNode:t.appendTo)
n[0]==this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute")
return n},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" "))
a.a.isArray(e)&&(e={left:+e[0],top:+e[1]||0})
"left"in e&&(this.offset.click.left=e.left+this.margins.left)
"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left)
"top"in e&&(this.offset.click.top=e.top+this.margins.top)
"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var e=this.offsetParent.offset()
if("absolute"==this.cssPosition&&this.scrollParent[0]!=document&&a.a.contains(this.scrollParent[0],this.offsetParent[0])){e.left+=this.scrollParent.scrollLeft()
e.top+=this.scrollParent.scrollTop()}(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&a.a.browser.msie)&&(e={top:0,left:0})
return{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var e=this.element.position()
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options
"parent"==e.containment&&(e.containment=this.helper[0].parentNode)
"document"!=e.containment&&"window"!=e.containment||(this.containment=["document"==e.containment?0:a()(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"==e.containment?0:a()(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"==e.containment?0:a()(window).scrollLeft())+a()("document"==e.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"==e.containment?0:a()(window).scrollTop())+(a()("document"==e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top])
if(/^(document|window|parent)$/.test(e.containment)||e.containment.constructor==Array)e.containment.constructor==Array&&(this.containment=e.containment)
else{var t=a()(e.containment)
var n=t[0]
if(!n)return
t.offset()
var r="hidden"!=a()(n).css("overflow")
this.containment=[(parseInt(a()(n).css("borderLeftWidth"),10)||0)+(parseInt(a()(n).css("paddingLeft"),10)||0),(parseInt(a()(n).css("borderTopWidth"),10)||0)+(parseInt(a()(n).css("paddingTop"),10)||0),(r?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(a()(n).css("borderLeftWidth"),10)||0)-(parseInt(a()(n).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(r?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(a()(n).css("borderTopWidth"),10)||0)-(parseInt(a()(n).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]
this.relative_container=t}},_convertPositionTo:function(e,t){t||(t=this.position)
var n="absolute"==e?1:-1
this.options
var r="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&a.a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName)
return{top:t.top+this.offset.relative.top*n+this.offset.parent.top*n-("fixed"==this.cssPosition?-this.scrollParent.scrollTop():i?0:r.scrollTop())*n,left:t.left+this.offset.relative.left*n+this.offset.parent.left*n-("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())*n}},_generatePosition:function(e){var t=this.options,n="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&a.a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,r=/(html|body)/i.test(n[0].tagName)
var i=e.pageX
var o=e.pageY
if(this.originalPosition){var s
if(this.containment){if(this.relative_container){var u=this.relative_container.offset()
s=[this.containment[0]+u.left,this.containment[1]+u.top,this.containment[2]+u.left,this.containment[3]+u.top]}else s=this.containment
e.pageX-this.offset.click.left<s[0]&&(i=s[0]+this.offset.click.left)
e.pageY-this.offset.click.top<s[1]&&(o=s[1]+this.offset.click.top)
e.pageX-this.offset.click.left>s[2]&&(i=s[2]+this.offset.click.left)
e.pageY-this.offset.click.top>s[3]&&(o=s[3]+this.offset.click.top)}if(t.grid){var l=t.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/t.grid[1])*t.grid[1]:this.originalPageY
o=s&&(l-this.offset.click.top<s[1]||l-this.offset.click.top>s[3])?l-this.offset.click.top<s[1]?l+t.grid[1]:l-t.grid[1]:l
var c=t.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/t.grid[0])*t.grid[0]:this.originalPageX
i=s&&(c-this.offset.click.left<s[0]||c-this.offset.click.left>s[2])?c-this.offset.click.left<s[0]?c+t.grid[0]:c-t.grid[0]:c}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"==this.cssPosition?-this.scrollParent.scrollTop():r?0:n.scrollTop()),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():r?0:n.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging")
this.helper[0]==this.element[0]||this.cancelHelperRemoval||this.helper.remove()
this.helper=null
this.cancelHelperRemoval=false},_trigger:function(e,t,n){n=n||this._uiHash()
a.a.ui.plugin.call(this,e,[t,n])
"drag"==e&&(this.positionAbs=this._convertPositionTo("absolute"))
return a.a.Widget.prototype._trigger.call(this,e,t,n)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}})
a.a.ui.plugin.add("draggable","connectToSortable",{start:function(e,t){var n=a()(this).data("draggable"),r=n.options,i=a.a.extend({},t,{item:n.element})
n.sortables=[]
a()(r.connectToSortable).each(function(){var t=a.a.data(this,"sortable")
if(t&&!t.options.disabled){n.sortables.push({instance:t,shouldRevert:t.options.revert})
t.refreshPositions()
t._trigger("activate",e,i)}})},stop:function(e,t){var n=a()(this).data("draggable"),r=a.a.extend({},t,{item:n.element})
a.a.each(n.sortables,function(){if(this.instance.isOver){this.instance.isOver=0
n.cancelHelperRemoval=true
this.instance.cancelHelperRemoval=false
this.shouldRevert&&(this.instance.options.revert=true)
this.instance._mouseStop(e)
this.instance.options.helper=this.instance.options._helper
"original"==n.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false
this.instance._trigger("deactivate",e,r)}})},drag:function(e,t){var n=a()(this).data("draggable"),r=this
a.a.each(n.sortables,function(i){this.instance.positionAbs=n.positionAbs
this.instance.helperProportions=n.helperProportions
this.instance.offset.click=n.offset.click
if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1
this.instance.currentItem=a()(r).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true)
this.instance.options._helper=this.instance.options.helper
this.instance.options.helper=function(){return t.helper[0]}
e.target=this.instance.currentItem[0]
this.instance._mouseCapture(e,true)
this.instance._mouseStart(e,true,true)
this.instance.offset.click.top=n.offset.click.top
this.instance.offset.click.left=n.offset.click.left
this.instance.offset.parent.left-=n.offset.parent.left-this.instance.offset.parent.left
this.instance.offset.parent.top-=n.offset.parent.top-this.instance.offset.parent.top
n._trigger("toSortable",e)
n.dropped=this.instance.element
n.currentItem=n.element
this.instance.fromOutside=n}this.instance.currentItem&&this.instance._mouseDrag(e)}else if(this.instance.isOver){this.instance.isOver=0
this.instance.cancelHelperRemoval=true
this.instance.options.revert=false
this.instance._trigger("out",e,this.instance._uiHash(this.instance))
this.instance._mouseStop(e,true)
this.instance.options.helper=this.instance.options._helper
this.instance.currentItem.remove()
this.instance.placeholder&&this.instance.placeholder.remove()
n._trigger("fromSortable",e)
n.dropped=false}})}})
a.a.ui.plugin.add("draggable","cursor",{start:function(e,t){var n=a()("body"),r=a()(this).data("draggable").options
n.css("cursor")&&(r._cursor=n.css("cursor"))
n.css("cursor",r.cursor)},stop:function(e,t){var n=a()(this).data("draggable").options
n._cursor&&a()("body").css("cursor",n._cursor)}})
a.a.ui.plugin.add("draggable","opacity",{start:function(e,t){var n=a()(t.helper),r=a()(this).data("draggable").options
n.css("opacity")&&(r._opacity=n.css("opacity"))
n.css("opacity",r.opacity)},stop:function(e,t){var n=a()(this).data("draggable").options
n._opacity&&a()(t.helper).css("opacity",n._opacity)}})
a.a.ui.plugin.add("draggable","scroll",{start:function(e,t){var n=a()(this).data("draggable")
n.scrollParent[0]!=document&&"HTML"!=n.scrollParent[0].tagName&&(n.overflowOffset=n.scrollParent.offset())},drag:function(e,t){var n=a()(this).data("draggable"),r=n.options,i=false
if(n.scrollParent[0]!=document&&"HTML"!=n.scrollParent[0].tagName){r.axis&&"x"==r.axis||(n.overflowOffset.top+n.scrollParent[0].offsetHeight-e.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:e.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed))
r.axis&&"y"==r.axis||(n.overflowOffset.left+n.scrollParent[0].offsetWidth-e.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:e.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed))}else{r.axis&&"x"==r.axis||(e.pageY-a()(document).scrollTop()<r.scrollSensitivity?i=a()(document).scrollTop(a()(document).scrollTop()-r.scrollSpeed):a()(window).height()-(e.pageY-a()(document).scrollTop())<r.scrollSensitivity&&(i=a()(document).scrollTop(a()(document).scrollTop()+r.scrollSpeed)))
r.axis&&"y"==r.axis||(e.pageX-a()(document).scrollLeft()<r.scrollSensitivity?i=a()(document).scrollLeft(a()(document).scrollLeft()-r.scrollSpeed):a()(window).width()-(e.pageX-a()(document).scrollLeft())<r.scrollSensitivity&&(i=a()(document).scrollLeft(a()(document).scrollLeft()+r.scrollSpeed)))}false!==i&&a.a.ui.ddmanager&&!r.dropBehaviour&&a.a.ui.ddmanager.prepareOffsets(n,e)}})
a.a.ui.plugin.add("draggable","snap",{start:function(e,t){var n=a()(this).data("draggable"),r=n.options
n.snapElements=[]
a()(r.snap.constructor!=String?r.snap.items||":data(draggable)":r.snap).each(function(){var e=a()(this)
var t=e.offset()
this!=n.element[0]&&n.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:t.top,left:t.left})})},drag:function(e,t){var n=a()(this).data("draggable"),r=n.options
var i=r.snapTolerance
var o=t.offset.left,s=o+n.helperProportions.width,u=t.offset.top,l=u+n.helperProportions.height
for(var c=n.snapElements.length-1;c>=0;c--){var d=n.snapElements[c].left,f=d+n.snapElements[c].width,h=n.snapElements[c].top,m=h+n.snapElements[c].height
if(!(d-i<o&&o<f+i&&h-i<u&&u<m+i||d-i<o&&o<f+i&&h-i<l&&l<m+i||d-i<s&&s<f+i&&h-i<u&&u<m+i||d-i<s&&s<f+i&&h-i<l&&l<m+i)){n.snapElements[c].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,e,a.a.extend(n._uiHash(),{snapItem:n.snapElements[c].item}))
n.snapElements[c].snapping=false
continue}if("inner"!=r.snapMode){var p=Math.abs(h-l)<=i
var _=Math.abs(m-u)<=i
var g=Math.abs(d-s)<=i
var y=Math.abs(f-o)<=i
p&&(t.position.top=n._convertPositionTo("relative",{top:h-n.helperProportions.height,left:0}).top-n.margins.top)
_&&(t.position.top=n._convertPositionTo("relative",{top:m,left:0}).top-n.margins.top)
g&&(t.position.left=n._convertPositionTo("relative",{top:0,left:d-n.helperProportions.width}).left-n.margins.left)
y&&(t.position.left=n._convertPositionTo("relative",{top:0,left:f}).left-n.margins.left)}var v=p||_||g||y
if("outer"!=r.snapMode){p=Math.abs(h-u)<=i
_=Math.abs(m-l)<=i
g=Math.abs(d-o)<=i
y=Math.abs(f-s)<=i
p&&(t.position.top=n._convertPositionTo("relative",{top:h,left:0}).top-n.margins.top)
_&&(t.position.top=n._convertPositionTo("relative",{top:m-n.helperProportions.height,left:0}).top-n.margins.top)
g&&(t.position.left=n._convertPositionTo("relative",{top:0,left:d}).left-n.margins.left)
y&&(t.position.left=n._convertPositionTo("relative",{top:0,left:f-n.helperProportions.width}).left-n.margins.left)}!n.snapElements[c].snapping&&(p||_||g||y||v)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,e,a.a.extend(n._uiHash(),{snapItem:n.snapElements[c].item}))
n.snapElements[c].snapping=p||_||g||y||v}}})
a.a.ui.plugin.add("draggable","stack",{start:function(e,t){var n=a()(this).data("draggable").options
var r=a.a.makeArray(a()(n.stack)).sort(function(e,t){return(parseInt(a()(e).css("zIndex"),10)||0)-(parseInt(a()(t).css("zIndex"),10)||0)})
if(!r.length)return
var i=parseInt(r[0].style.zIndex)||0
a()(r).each(function(e){this.style.zIndex=i+e})
this[0].style.zIndex=i+r.length}})
a.a.ui.plugin.add("draggable","zIndex",{start:function(e,t){var n=a()(t.helper),r=a()(this).data("draggable").options
n.css("zIndex")&&(r._zIndex=n.css("zIndex"))
n.css("zIndex",r.zIndex)},stop:function(e,t){var n=a()(this).data("draggable").options
n._zIndex&&a()(t.helper).css("zIndex",n._zIndex)}})
n("3G7n")},VI1P:function(e,t,n){n.p=(window.ENV&&window.ENV.ASSET_HOST||"")+n("0CO7")},VbIB:function(e,t,n){e.exports=n("ygPz")},Y14w:function(e,t,n){var r=n("q1tI")
function a(){var e=""
try{e=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getStackAddendum()}catch(e){}return e}function i(e,t,n){if(!t&&false){var r=a()
if("function"!==typeof console[e])throw new Error("'".concat(e,"' is not a valid console method!"))
var i
for(var o=arguments.length,s=new Array(o>3?o-3:0),u=3;u<o;u++)s[u-3]=arguments[u];(i=console)[e].apply(i,["Warning: ".concat(n)].concat(s,[r]))}}t.error=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return i.apply(void 0,["error"].concat(t))}
t.warn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return i.apply(void 0,["warn"].concat(t))}
t.info=function(){var e
return(e=console).info.apply(e,arguments)}
t.assert=function(){var e
return(e=console).assert.apply(e,arguments)}
t.debug=function(){var e
return(e=console).debug.apply(e,arguments)}
t.log=function(){var e
return(e=console).log.apply(e,arguments)}},YGE8:function(e,t,n){"use strict"
n.r(t)
var r=n("ouhR")
var a=n.n(r)
var i=n("5Ky4")
n("9Duh")
n("vTtS")
n("yP0d")
n("VHne")
n("ZV2x")
n("PwBw")
n("Yf8v")
var o="ui-dialog ui-widget ui-widget-content ui-corner-all ",s={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},u={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true}
a.a.widget("ui.dialog",{version:"@VERSION",options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var t=a()(this).css(e).offset().top
t<0&&a()(this).css("top",e.top-t)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title")
"string"!==typeof this.originalTitle&&(this.originalTitle="")
this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)}
this.options.title=this.options.title||this.originalTitle
var e=this,t=this.options,n=t.title||"&#160;",r=(this.uiDialog=a()("<div>")).addClass(o+t.dialogClass).css({display:"none",outline:0,zIndex:t.zIndex}).attr("tabIndex",-1).keydown(function(n){if(t.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===a.a.ui.keyCode.ESCAPE){e.close(n)
n.preventDefault()}}).mousedown(function(t){e.moveToTop(false,t)}).appendTo("body"),i=this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(r),s=(this.uiDialogTitlebar=a()("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").prependTo(r),u=a()("<button></button>").addClass("ui-dialog-titlebar-close  ui-corner-all").click(function(t){t.preventDefault()
e.close(t)}).appendTo(s),l=((this.uiDialogTitlebarCloseText=a()("<span>")).addClass("ui-icon ui-icon-closethick").text(t.closeText).appendTo(u),a()("<span>").uniqueId().addClass("ui-dialog-title").html(n).attr("role","heading").prependTo(s),(this.uiDialogButtonPane=a()("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"));(this.uiButtonSet=a()("<div>")).addClass("ui-dialog-buttonset").appendTo(l)
void 0===i.attr("id")&&i.uniqueId()
s.find("*").add(s).disableSelection()
this._hoverable(u)
this._focusable(u)
t.draggable&&a.a.fn.draggable&&this._makeDraggable()
t.resizable&&a.a.fn.resizable&&this._makeResizable()
this._createButtons(t.buttons)
this._isOpen=false
a.a.fn.bgiframe&&r.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},_destroy:function(){var e,t=this.oldPosition
this.overlay&&this.overlay.destroy()
this.uiDialog.hide()
this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body")
this.uiDialog.remove()
this.originalTitle&&this.element.attr("title",this.originalTitle)
e=t.parent.children().eq(t.index)
e.length?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},close:function(e){var t,n,r=this
if(!this._isOpen)return
if(false===this._trigger("beforeClose",e))return
this._isOpen=false
this.uiDialog.attr("aria-hidden",true)
this.overlay&&this.overlay.destroy()
this._off(this.uiDialog,"keypress")
if(this.options.hide)this.uiDialog.hide(this.options.hide,function(){r._trigger("close",e)})
else{this.uiDialog.hide()
this._trigger("close",e)}a.a.ui.dialog.overlay.resize()
if(this.options.modal){t=0
a()(".ui-dialog").each(function(){if(this!==r.uiDialog[0]){n=a()(this).css("z-index")
isNaN(n)||(t=Math.max(t,n))}})
a.a.ui.dialog.maxZ=t
this.oldFocus&&a()(this.oldFocus).is(":visible")&&this.oldFocus.focus()}return this},isOpen:function(){return this._isOpen},moveToTop:function(e,t){var n,r=this.options
if(r.modal&&!e||!r.stack&&!r.modal)return this._trigger("focus",t)
r.zIndex>a.a.ui.dialog.maxZ&&(a.a.ui.dialog.maxZ=r.zIndex)
if(this.overlay){a.a.ui.dialog.maxZ+=1
a.a.ui.dialog.overlay.maxZ=a.a.ui.dialog.maxZ
this.overlay.$el.css("z-index",a.a.ui.dialog.overlay.maxZ)}n={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()}
a.a.ui.dialog.maxZ+=1
this.uiDialog.css("z-index",a.a.ui.dialog.maxZ)
this.element.attr(n)
this._trigger("focus",t)
return this},open:function(){if(this._isOpen)return
var e,t=this.options,n=this.uiDialog
this._size()
this._position(t.position)
n.show(t.show)
this.overlay=t.modal?new a.a.ui.dialog.overlay(this):null
this.moveToTop(true)
if(t.modal){this.oldFocus=document.activeElement
a()(":tabbable:first",this.uiDialog).focus()
this._on(n,{keydown:function(e){if(e.keyCode!==a.a.ui.keyCode.TAB)return
var t=a()(":tabbable",this.uiDialog)
var n=a.a.inArray(e.target,t)
if(-1==n)return
var r=n+(e.shiftKey?-1:1)
r=(r+t.length)%t.length
var i=t.eq(r)
if("IFRAME"===i[0].nodeName.toUpperCase())return
i.focus()
var o=['input[type="text"]','input[type="password"]','input[type="number"]','input[type="datetime"]','input[type="email"]','input[type="search"]','input[type="tel"]','input[type="url"]']
i.is(o.join(","))&&i[0].select()
return false}})}e=this.element.find(":tabbable")
if(!e.length){e=this.uiDialogButtonPane.find(":tabbable")
e.length||(e=n)}this.uiDialog.attr("aria-hidden",false)
if(a.a.browser&&a.a.browser.safari){var r=this.uiDialog.find(".ui-dialog-titlebar-close")
r.length?r.focus():e.eq(0).focus()}this._isOpen=true
this._trigger("open")
return this},_createButtons:function(e){var t=this,n=false
this.uiDialogButtonPane.remove()
this.uiButtonSet.empty()
"object"===typeof e&&null!==e&&a.a.each(e,function(){return!(n=true)})
if(n){a.a.each(e,function(e,n){n=a.a.isFunction(n)?{click:n,text:e}:n
var r=a()("<button type='button'>").attr(n,true).unbind("click").click(function(){n.click.apply(t.element[0],arguments)}).appendTo(t.uiButtonSet)
a.a.fn.button&&r.button()})
this.uiDialog.addClass("ui-dialog-buttons")
this.uiDialogButtonPane.appendTo(this.uiDialog)}else this.uiDialog.removeClass("ui-dialog-buttons")},_makeDraggable:function(){var e=this,t=this.options
function n(e){return{position:e.position,offset:e.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(t,r){a()(this).addClass("ui-dialog-dragging")
e._trigger("dragStart",t,n(r))},drag:function(t,r){e._trigger("drag",t,n(r))},stop:function(r,i){t.position=[i.position.left-e.document.scrollLeft(),i.position.top-e.document.scrollTop()]
a()(this).removeClass("ui-dialog-dragging")
e._trigger("dragStop",r,n(i))
a.a.ui.dialog.overlay.resize()}})},_makeResizable:function(e){e=void 0===e?this.options.resizable:e
var t=this,n=this.options,r=this.uiDialog.css("position"),i="string"===typeof e?e:"n,e,s,w,se,sw,ne,nw"
function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:i,start:function(e,n){a()(this).addClass("ui-dialog-resizing")
t._trigger("resizeStart",e,o(n))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(e,r){a()(this).removeClass("ui-dialog-resizing")
n.height=a()(this).height()
n.width=a()(this).width()
t._trigger("resizeStop",e,o(r))
a.a.ui.dialog.overlay.resize()}}).css("position",r).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options
return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(e){var t,n=[],r=[0,0]
if(e){if("string"===typeof e||"object"===typeof e&&"0"in e){n=e.split?e.split(" "):[e[0],e[1]]
1===n.length&&(n[1]=n[0])
a.a.each(["left","top"],function(e,t){if(+n[e]===n[e]){r[e]=n[e]
n[e]=t}})
e={my:n.join(" "),at:n.join(" "),offset:r.join(" ")}}e=a.a.extend({},a.a.ui.dialog.prototype.options.position,e)}else e=a.a.ui.dialog.prototype.options.position
t=this.uiDialog.is(":visible")
t||this.uiDialog.show()
this.uiDialog.position(e)
t||this.uiDialog.hide()},_setOptions:function(e){var t=this,n={},r=false
a.a.each(e,function(e,a){t._setOption(e,a)
e in s&&(r=true)
e in u&&(n[e]=a)})
r&&this._size()
this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var n,r,i=this.uiDialog
switch(e){case"buttons":this._createButtons(t)
break
case"closeText":this.uiDialogTitlebarCloseText.text(""+t)
break
case"dialogClass":i.removeClass(this.options.dialogClass).addClass(o+t)
break
case"disabled":t?i.addClass("ui-dialog-disabled"):i.removeClass("ui-dialog-disabled")
break
case"draggable":n=i.is(":data(draggable)")
n&&!t&&i.draggable("destroy")
!n&&t&&this._makeDraggable()
break
case"position":this._position(t)
break
case"resizable":r=i.is(":data(resizable)")
r&&!t&&i.resizable("destroy")
r&&"string"===typeof t&&i.resizable("option","handles",t)
r||false===t||this._makeResizable(t)
break
case"title":a()(".ui-dialog-title",this.uiDialogTitlebar).html(""+(t||"&#160;"))}this._super(e,t)},_size:function(){var e,t,n,r=this.options,i=this.uiDialog.is(":visible")
this.element.show().css({width:"auto",minHeight:0,height:0})
r.minWidth>r.width&&(r.width=r.minWidth)
e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight()
t=Math.max(0,r.minHeight-e)
if("auto"===r.height)if(a.a.support.minHeight)this.element.css({minHeight:t,height:"auto"})
else{this.uiDialog.show()
n=this.element.css("height","auto").height()
i||this.uiDialog.hide()
this.element.height(Math.max(n,t))}else this.element.height(Math.max(r.height-e,0))
this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}})
a.a.extend(a.a.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(e){var t=e.attr("id")
if(!t){this.uuid+=1
t=this.uuid}return"ui-dialog-title-"+t},overlay:function(e){this.$el=a.a.ui.dialog.overlay.create(e)}})
a.a.extend(a.a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),create:function(e){if(0===this.instances.length){setTimeout(function(){a.a.ui.dialog.overlay.instances.length&&a()(document).bind(a.a.ui.dialog.overlay.events,function(t){if(a()(t.target).zIndex()<a.a.ui.dialog.overlay.maxZ&&!e.element.has(t.target).length)return false})},1)
a()(window).bind("resize.dialog-overlay",a.a.ui.dialog.overlay.resize)}var t=this.oldInstances.pop()||a()("<div>").addClass("ui-widget-overlay")
a()(document).bind("keydown.dialog-overlay",function(n){var r=a.a.ui.dialog.overlay.instances
if(0!==r.length&&r[r.length-1]===t&&e.options.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===a.a.ui.keyCode.ESCAPE){e.close(n)
n.preventDefault()}})
t.appendTo(document.body).css({width:this.width(),height:this.height()})
a.a.fn.bgiframe&&t.bgiframe()
this.instances.push(t)
return t},destroy:function(e){var t=a.a.inArray(e,this.instances),n=0;-1!==t&&this.oldInstances.push(this.instances.splice(t,1)[0])
0===this.instances.length&&a()([document,window]).unbind(".dialog-overlay")
e.height(0).width(0).remove()
a.a.each(this.instances,function(){n=Math.max(n,this.css("z-index"))})
this.maxZ=n},height:function(){var e,t
if(a.a.browser.msie){e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)
t=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight)
return e<t?a()(window).height()+"px":e+"px"}return a()(document).height()+"px"},width:function(){var e,t
if(a.a.browser.msie){e=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)
t=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth)
return e<t?a()(window).width()+"px":e+"px"}return a()(document).width()+"px"},resize:function(){var e=a()([])
a.a.each(a.a.ui.dialog.overlay.instances,function(){e=e.add(this)})
e.css({width:0,height:0}).css({width:a.a.ui.dialog.overlay.width(),height:a.a.ui.dialog.overlay.height()})}})
a.a.extend(a.a.ui.dialog.overlay.prototype,{destroy:function(){a.a.ui.dialog.overlay.destroy(this.$el)}})
a.a.ui.dialog.prototype.options.modal=true
function l(e){if(!e)return e
return e.jquery?a()("<div />").append(e.eq(0).clone()).html():Object(i["a"])(""+e)}var c=a.a.ui.dialog.prototype._create,d=a.a.ui.dialog.prototype._setOption
a.a.extend(a.a.ui.dialog.prototype,{_create:function(){if(!this.options.title){this.options.title=this.element.attr("title")
"string"!==typeof this.options.title&&(this.options.title="")}this.options.title=l(this.options.title)
this._on({dialogopen:function(){a()("#application").attr("aria-hidden","true")},dialogclose:function(){a()("#application").attr("aria-hidden","false")}})
return c.apply(this,arguments)},_setOption:function(e,t){"title"==e&&(t=l(t))
return d.call(this,e,t)}})},Yf8v:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("9Duh")
n("ZV2x")
n("vTtS")
a.a.widget("ui.resizable",a.a.ui.mouse,{version:"@VERSION",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var e=this,t=this.options
this.element.addClass("ui-resizable")
a.a.extend(this,{_aspectRatio:!!t.aspectRatio,aspectRatio:t.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:t.helper||t.ghost||t.animate?t.helper||"ui-resizable-helper":null})
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(a()('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}))
this.element=this.element.parent().data("resizable",this.element.data("resizable"))
this.elementIsWrapper=true
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")})
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0})
this.originalResizeStyle=this.originalElement.css("resize")
this.originalElement.css("resize","none")
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}))
this.originalElement.css({margin:this.originalElement.css("margin")})
this._proportionallyResize()}this.handles=t.handles||(a()(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se")
if(this.handles.constructor==String){"all"==this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw")
var n=this.handles.split(",")
this.handles={}
for(var r=0;r<n.length;r++){var i=a.a.trim(n[r]),o="ui-resizable-"+i
var s=a()('<div class="ui-resizable-handle '+o+'"></div>')
s.css({zIndex:t.zIndex})
"se"==i&&s.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
this.handles[i]=".ui-resizable-"+i
this.element.append(s)}}this._renderAxis=function(e){e=e||this.element
for(var t in this.handles){this.handles[t].constructor==String&&(this.handles[t]=a()(this.handles[t],this.element).show())
if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var n=a()(this.handles[t],this.element),r=0
r=/sw|ne|nw|se|n|s/.test(t)?n.outerHeight():n.outerWidth()
var i=["padding",/ne|nw|n/.test(t)?"Top":/se|sw|s/.test(t)?"Bottom":/^e$/.test(t)?"Right":"Left"].join("")
e.css(i,r)
this._proportionallyResize()}if(!a()(this.handles[t]).length)continue}}
this._renderAxis(this.element)
this._handles=a()(".ui-resizable-handle",this.element).disableSelection()
this._handles.mouseover(function(){if(!e.resizing){if(this.className)var t=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
e.axis=t&&t[1]?t[1]:"se"}})
if(t.autoHide){this._handles.hide()
a()(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(t.disabled)return
a()(this).removeClass("ui-resizable-autohide")
e._handles.show()}).mouseleave(function(){if(t.disabled)return
if(!e.resizing){a()(this).addClass("ui-resizable-autohide")
e._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy()
var e=function(e){a()(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()}
if(this.elementIsWrapper){e(this.element)
var t=this.element
t.after(this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle)
e(this.originalElement)
return this},_mouseCapture:function(e){var t=false
for(var n in this.handles)a()(this.handles[n])[0]==e.target&&(t=true)
return!this.options.disabled&&t},_mouseStart:function(e){var t=this.options,n=this.element.position(),r=this.element
this.resizing=true
this.documentScroll={top:a()(document).scrollTop(),left:a()(document).scrollLeft()};(r.is(".ui-draggable")||/absolute/.test(r.css("position")))&&r.css({position:"absolute",top:n.top,left:n.left})
this._renderProxy()
var o=i(this.helper.css("left")),s=i(this.helper.css("top"))
if(t.containment){o+=a()(t.containment).scrollLeft()||0
s+=a()(t.containment).scrollTop()||0}this.offset=this.helper.offset()
this.position={left:o,top:s}
this.size=this._helper?{width:r.outerWidth(),height:r.outerHeight()}:{width:r.width(),height:r.height()}
this.originalSize=this._helper?{width:r.outerWidth(),height:r.outerHeight()}:{width:r.width(),height:r.height()}
this.originalPosition={left:o,top:s}
this.sizeDiff={width:r.outerWidth()-r.width(),height:r.outerHeight()-r.height()}
this.originalMousePosition={left:e.pageX,top:e.pageY}
this.aspectRatio="number"==typeof t.aspectRatio?t.aspectRatio:this.originalSize.width/this.originalSize.height||1
var u=a()(".ui-resizable-"+this.axis).css("cursor")
a()("body").css("cursor","auto"==u?this.axis+"-resize":u)
r.addClass("ui-resizable-resizing")
this._propagate("start",e)
return true},_mouseDrag:function(e){var t=this.helper,n=(this.options,this.originalMousePosition),r=this.axis
var a=e.pageX-n.left||0,i=e.pageY-n.top||0
var o=this._change[r]
if(!o)return false
var s=o.apply(this,[e,a,i])
this._updateVirtualBoundaries(e.shiftKey);(this._aspectRatio||e.shiftKey)&&(s=this._updateRatio(s,e))
s=this._respectSize(s,e)
this._propagate("resize",e)
t.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"})
!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize()
this._updateCache(s)
this._trigger("resize",e,this.ui())
return false},_mouseStop:function(e){this.resizing=false
var t=this.options,n=this
if(this._helper){var r=this._proportionallyResizeElements,i=r.length&&/textarea/i.test(r[0].nodeName),o=i&&a.a.ui.hasScroll(r[0],"left")?0:n.sizeDiff.height,s=i?0:n.sizeDiff.width
var u={width:n.helper.width()-s,height:n.helper.height()-o},l=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,c=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null
t.animate||this.element.css(a.a.extend(u,{top:c,left:l}))
n.helper.height(n.size.height)
n.helper.width(n.size.width)
this._helper&&!t.animate&&this._proportionallyResize()}a()("body").css("cursor","auto")
this.element.removeClass("ui-resizable-resizing")
this._propagate("stop",e)
this._helper&&this.helper.remove()
return false},_updateVirtualBoundaries:function(e){var t,n,r,a,i,s=this.options
i={minWidth:o(s.minWidth)?s.minWidth:0,maxWidth:o(s.maxWidth)?s.maxWidth:Infinity,minHeight:o(s.minHeight)?s.minHeight:0,maxHeight:o(s.maxHeight)?s.maxHeight:Infinity}
if(this._aspectRatio||e){t=i.minHeight*this.aspectRatio
r=i.minWidth/this.aspectRatio
n=i.maxHeight*this.aspectRatio
a=i.maxWidth/this.aspectRatio
t>i.minWidth&&(i.minWidth=t)
r>i.minHeight&&(i.minHeight=r)
n<i.maxWidth&&(i.maxWidth=n)
a<i.maxHeight&&(i.maxHeight=a)}this._vBoundaries=i},_updateCache:function(e){this.options
this.offset=this.helper.offset()
o(e.left)&&(this.position.left=e.left)
o(e.top)&&(this.position.top=e.top)
o(e.height)&&(this.size.height=e.height)
o(e.width)&&(this.size.width=e.width)},_updateRatio:function(e,t){this.options
var n=this.position,r=this.size,a=this.axis
o(e.height)?e.width=e.height*this.aspectRatio:o(e.width)&&(e.height=e.width/this.aspectRatio)
if("sw"==a){e.left=n.left+(r.width-e.width)
e.top=null}if("nw"==a){e.top=n.top+(r.height-e.height)
e.left=n.left+(r.width-e.width)}return e},_respectSize:function(e,t){this.helper
var n=this._vBoundaries,r=(this._aspectRatio||t.shiftKey,this.axis),a=o(e.width)&&n.maxWidth&&n.maxWidth<e.width,i=o(e.height)&&n.maxHeight&&n.maxHeight<e.height,s=o(e.width)&&n.minWidth&&n.minWidth>e.width,u=o(e.height)&&n.minHeight&&n.minHeight>e.height
s&&(e.width=n.minWidth)
u&&(e.height=n.minHeight)
a&&(e.width=n.maxWidth)
i&&(e.height=n.maxHeight)
var l=this.originalPosition.left+this.originalSize.width,c=this.position.top+this.size.height
var d=/sw|nw|w/.test(r),f=/nw|ne|n/.test(r)
s&&d&&(e.left=l-n.minWidth)
a&&d&&(e.left=l-n.maxWidth)
u&&f&&(e.top=c-n.minHeight)
i&&f&&(e.top=c-n.maxHeight)
var h=!e.width&&!e.height
h&&!e.left&&e.top?e.top=null:h&&!e.top&&e.left&&(e.left=null)
return e},_proportionallyResize:function(){this.options
if(!this._proportionallyResizeElements.length)return
var e=this.helper||this.element
for(var t=0;t<this._proportionallyResizeElements.length;t++){var n=this._proportionallyResizeElements[t]
if(!this.borderDif){var r=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],i=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")]
this.borderDif=a.a.map(r,function(e,t){var n=parseInt(e,10)||0,r=parseInt(i[t],10)||0
return n+r})}n.css({height:e.height()-this.borderDif[0]-this.borderDif[2]||0,width:e.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var e=this.element,t=this.options
this.elementOffset=e.offset()
if(this._helper){this.helper=this.helper||a()('<div style="overflow:hidden;"></div>')
var n=a.a.browser.msie&&a.a.browser.version<7,r=n?1:0,i=n?2:-1
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+i,height:this.element.outerHeight()+i,position:"absolute",left:this.elementOffset.left-r+"px",top:this.elementOffset.top-r+"px",zIndex:++t.zIndex})
this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(e,t,n){return{width:this.originalSize.width+t}},w:function(e,t,n){this.options
var r=this.originalSize,a=this.originalPosition
return{left:a.left+t,width:r.width-t}},n:function(e,t,n){this.options
var r=this.originalSize,a=this.originalPosition
return{top:a.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(e,t,n){return a.a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,t,n]))},sw:function(e,t,n){return a.a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,t,n]))},ne:function(e,t,n){return a.a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,t,n]))},nw:function(e,t,n){return a.a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,t,n]))}},_propagate:function(e,t){a.a.ui.plugin.call(this,e,[t,this.ui()])
"resize"!=e&&this._trigger(e,t,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}})
a.a.ui.plugin.add("resizable","alsoResize",{start:function(e,t){var n=a()(this).data("resizable"),r=n.options
var i=function(e){a()(e).each(function(){var e=a()(this)
e.data("resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})}
if("object"!=typeof r.alsoResize||r.alsoResize.parentNode)i(r.alsoResize)
else if(r.alsoResize.length){r.alsoResize=r.alsoResize[0]
i(r.alsoResize)}else a.a.each(r.alsoResize,function(e){i(e)})},resize:function(e,t){var n=a()(this).data("resizable"),r=n.options,i=n.originalSize,o=n.originalPosition
var s={height:n.size.height-i.height||0,width:n.size.width-i.width||0,top:n.position.top-o.top||0,left:n.position.left-o.left||0},u=function(e,n){a()(e).each(function(){var e=a()(this),r=a()(this).data("resizable-alsoresize"),i={},o=n&&n.length?n:e.parents(t.originalElement[0]).length?["width","height"]:["width","height","top","left"]
a.a.each(o,function(e,t){var n=(r[t]||0)+(s[t]||0)
n&&n>=0&&(i[t]=n||null)})
e.css(i)})}
"object"!=typeof r.alsoResize||r.alsoResize.nodeType?u(r.alsoResize):a.a.each(r.alsoResize,function(e,t){u(e,t)})},stop:function(e,t){a()(this).removeData("resizable-alsoresize")}})
a.a.ui.plugin.add("resizable","animate",{stop:function(e,t){var n=a()(this).data("resizable"),r=n.options
var i=n._proportionallyResizeElements,o=i.length&&/textarea/i.test(i[0].nodeName),s=o&&a.a.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=o?0:n.sizeDiff.width
var l={width:n.size.width-u,height:n.size.height-s},c=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,d=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null
n.element.animate(a.a.extend(l,d&&c?{top:d,left:c}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var t={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)}
i&&i.length&&a()(i[0]).css({width:t.width,height:t.height})
n._updateCache(t)
n._propagate("resize",e)}})}})
a.a.ui.plugin.add("resizable","containment",{start:function(e,t){var n=a()(this).data("resizable"),r=n.options,o=n.element
var s=r.containment,u=s instanceof a.a?s.get(0):/parent/.test(s)?o.parent().get(0):s
if(!u)return
n.containerElement=a()(u)
if(/document/.test(s)||s==document){n.containerOffset={left:0,top:0}
n.containerPosition={left:0,top:0}
n.parentData={element:a()(document),left:0,top:0,width:a()(document).width(),height:a()(document).height()||document.body.parentNode.scrollHeight}}else{var l=a()(u),c=[]
a()(["Top","Right","Left","Bottom"]).each(function(e,t){c[e]=i(l.css("padding"+t))})
n.containerOffset=l.offset()
n.containerPosition=l.position()
n.containerSize={height:l.innerHeight()-c[3],width:l.innerWidth()-c[1]}
var d=n.containerOffset,f=n.containerSize.height,h=n.containerSize.width,m=a.a.ui.hasScroll(u,"left")?u.scrollWidth:h,p=a.a.ui.hasScroll(u)?u.scrollHeight:f
n.parentData={element:u,left:d.left,top:d.top,width:m,height:p}}},resize:function(e,t){var n=a()(this).data("resizable"),r=n.options,i=(n.containerSize,n.containerOffset),o=(n.size,n.position),s=n._aspectRatio||e.shiftKey,u={top:0,left:0},l=n.containerElement
l[0]!=document&&/static/.test(l.css("position"))&&(u=i)
if(o.left<(n._helper?i.left:0)){n.size.width=n.size.width+(n._helper?n.position.left-i.left:n.position.left-u.left)
s&&(n.size.height=n.size.width/n.aspectRatio)
n.position.left=r.helper?i.left:0}if(o.top<(n._helper?i.top:0)){n.size.height=n.size.height+(n._helper?n.position.top-i.top:n.position.top)
s&&(n.size.width=n.size.height*n.aspectRatio)
n.position.top=n._helper?i.top:0}n.offset.left=n.parentData.left+n.position.left
n.offset.top=n.parentData.top+n.position.top
var c=Math.abs((n._helper,n.offset.left-u.left)+n.sizeDiff.width),d=Math.abs((n._helper?n.offset.top-u.top:n.offset.top-i.top)+n.sizeDiff.height)
var f=n.containerElement.get(0)==n.element.parent().get(0),h=/relative|absolute/.test(n.containerElement.css("position"))
f&&h&&(c-=n.parentData.left)
if(c+n.size.width>=n.parentData.width){n.size.width=n.parentData.width-c
s&&(n.size.height=n.size.width/n.aspectRatio)}if(d+n.size.height>=n.parentData.height){n.size.height=n.parentData.height-d
s&&(n.size.width=n.size.height*n.aspectRatio)}},stop:function(e,t){var n=a()(this).data("resizable"),r=n.options,i=(n.position,n.containerOffset),o=n.containerPosition,s=n.containerElement
var u=a()(n.helper),l=u.offset(),c=u.outerWidth()-n.sizeDiff.width,d=u.outerHeight()-n.sizeDiff.height
n._helper&&!r.animate&&/relative/.test(s.css("position"))&&a()(this).css({left:l.left-o.left-i.left,width:c,height:d})
n._helper&&!r.animate&&/static/.test(s.css("position"))&&a()(this).css({left:l.left-o.left-i.left,width:c,height:d})}})
a.a.ui.plugin.add("resizable","ghost",{start:function(e,t){var n=a()(this).data("resizable"),r=n.options,i=n.size
n.ghost=n.originalElement.clone()
n.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof r.ghost?r.ghost:"")
n.ghost.appendTo(n.helper)},resize:function(e,t){var n=a()(this).data("resizable")
n.options
n.ghost&&n.ghost.css({position:"relative",height:n.size.height,width:n.size.width})},stop:function(e,t){var n=a()(this).data("resizable")
n.options
n.ghost&&n.helper&&n.helper.get(0).removeChild(n.ghost.get(0))}})
a.a.ui.plugin.add("resizable","grid",{resize:function(e,t){var n=a()(this).data("resizable"),r=n.options,i=n.size,o=n.originalSize,s=n.originalPosition,u=n.axis
r._aspectRatio||e.shiftKey
r.grid="number"==typeof r.grid?[r.grid,r.grid]:r.grid
var l=Math.round((i.width-o.width)/(r.grid[0]||1))*(r.grid[0]||1),c=Math.round((i.height-o.height)/(r.grid[1]||1))*(r.grid[1]||1)
if(/^(se|s|e)$/.test(u)){n.size.width=o.width+l
n.size.height=o.height+c}else if(/^(ne)$/.test(u)){n.size.width=o.width+l
n.size.height=o.height+c
n.position.top=s.top-c}else if(/^(sw)$/.test(u)){n.size.width=o.width+l
n.size.height=o.height+c
n.position.left=s.left-l}else{n.size.width=o.width+l
n.size.height=o.height+c
n.position.top=s.top-c
n.position.left=s.left-l}}})
var i=function(e){return parseInt(e,10)||0}
var o=function(e){return!isNaN(parseInt(e,10))}},YuTi:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){e.deprecate=function(){}
e.paths=[]
e.children||(e.children=[])
Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}})
Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}})
e.webpackPolyfill=1}return e}},"Z+Ib":function(e,t,n){"use strict"
var r=n("xe+K")
var a=n("u7Gu")
var i=n("c9Sg")
var o=n("ouhR")
var s=n.n(o)
var u=n("GLiE")
var l=n.n(u)
var c=n("1OyB")
var d=n("vuIU")
var f=function(){function e(){Object(c["a"])(this,e)
this.readyState=0
this.timeout=0
this.withCredentials=false}Object(d["a"])(e,[{key:"setResponse",value:function(e){this.readyState=4
this.responseText=e
try{this.response=s.a.parseJSON(e)}catch(e){this.status=500
this.statusText="500 Internal Server Error"
return}if(this.response.errors){this.status=400
this.statusText="400 Bad Request"}else{this.status=200
this.statusText="200 OK"}return this.responseType="json"}},{key:"abort",value:function(){}},{key:"getAllResponseHeaders",value:function(){return this.responseText?"":null}},{key:"getResponseHeader",value:function(){}},{key:"open",value:function(){}},{key:"overrideMimeType",value:function(){}},{key:"send",value:function(){}},{key:"setRequestHeader",value:function(){}}])
return e}()
var h=n("JD5e")
var m=n("5Ky4")
n("jYyc")
n("vpJZ")
n("hiU6")
n("UlQx")
n("JI1W")
n("MWZS")
n("s/PJ")
var p=n("60Hp")
s.a.fn.formSubmit=function(e){s()(this).markRequired(e)
this.submit(function(t){var n=s()(this)
var r=e.onSubmit
if(n.data("submitting"))return
n.data("trigger_event",t)
n.hideErrors()
var i=false
var o=n.validateForm(e)
if(!o)return false
var u=n.getFormData(e)
if(e.processData&&s.a.isFunction(e.processData)){var c=null
try{c=e.processData.call(n,u)}catch(e){i=e
if(a["a"]&&"production"!==a["a"].environment)throw i}if(false===c)return false
c&&(u=c)}var d=n.data("method")||n.find("input[name='_method']").val()||n.attr("method"),h=n.attr("id"),p=n.attr("action"),_=null
if(s.a.isFunction(e.beforeSubmit)){_=null
try{_=e.beforeSubmit.call(n,u)}catch(e){i=e
if(a["a"]&&"production"!==a["a"].environment)throw i}if(false===_)return false}if(e.disableWhileLoading){var g=r
r=function(t){if("spin_on_success"===e.disableWhileLoading){var r=t
t=s.a.Deferred()
r.fail(function(){t.reject()})}n.disableWhileLoading(t)
g&&g.apply(this,arguments)}}if(r){var y=s.a.Deferred(),v={}
r.call(this,y,u)
s.a.each(["success","error"],function(t,n){v[n]=e[n]
e[n]=function(){y["success"===n?"resolve":"reject"].apply(y,arguments)
if(s.a.isFunction(v[n]))return v[n].apply(this,arguments)}})}var b=e.fileUpload
if(s.a.isFunction(e.fileUpload))try{b=e.fileUpload.call(n,u)}catch(e){i=e}b&&e.fileUploadOptions&&s.a.extend(e,e.fileUploadOptions)
n.attr("action")&&(p=n.attr("action"))
if(i&&!e.preventDegradeToFormSubmit){y&&y.reject()
return}t.preventDefault()
t.stopPropagation()
var w=function(t,r){s.a.isFunction(e.success)&&e.success.call(n,t,_,r)}
var k=function(t,r){var a=n,i=true
if(s.a.isFunction(e.error)){var o=e.error.call(n,t.errors||t,_,r)
o&&(a=o)
i=false}if(a.parents("html").get(0)==s()("html").get(0)&&false!==e.formErrors){s.a.isFunction(e.errorFormatter)&&(t=e.errorFormatter(t.errors||t))
a.formErrors(t,e)}else i&&s.a.ajaxJSON.unhandledXHRs.push(r)}
if(e.noSubmit)w.call(this,u,{})
else if(b&&e.preparedFileUpload&&e.context_code)s.a.ajaxJSONPreparedFiles.call(this,{handle_files:e.upload_only?w:e.handle_files,single_file:e.singleFile,context_code:s.a.isFunction(e.context_code)?e.context_code.call(n):e.context_code,asset_string:e.asset_string,intent:e.intent,folder_id:s.a.isFunction(e.folder_id)?e.folder_id.call(n):e.folder_id,file_elements:n.find("input[type='file']:visible"),files:s.a.isFunction(e.files)?e.files.call(n):e.files,url:e.upload_only?null:p,method:e.method,uploadDataUrl:e.uploadDataUrl,formData:u,formDataTarget:e.formDataTarget,success:w,error:k})
else if(b&&s.a.handlesHTML5Files&&n.hasClass("handlingHTML5Files")){var x=s.a.extend({},u)
n.find("input[type='file']").each(function(){var e=s()(this),t=e.data("file_list")
t&&t instanceof FileList&&(x[e.attr("name")]=t)})
s.a.toMultipartForm(x,function(e){s.a.sendFormAsBinary({url:p,body:e.body,content_type:e.content_type,form_data:e.form_data,method:d,success:w,error:k})})}else if(b){var M=l.a.uniqueId(h+"_"),T=s()("<div style='display: none;' id='box_"+Object(m["a"])(M)+"'><iframe id='frame_"+Object(m["a"])(M)+"' name='frame_"+Object(m["a"])(M)+"' src='about:blank' onload='$(\"#frame_"+Object(m["a"])(M)+'").triggerHandler("form_response_loaded");\'></iframe>').appendTo("body").find("#frame_"+M),D=n.attr("target"),E=n.attr("ENCTYPE"),S=new f
n.attr({method:d,action:p,ENCTYPE:"multipart/form-data",encoding:"multipart/form-data",target:"frame_"+M})
if(e.onlyGivenParameters){n.find("input[name='_method']").remove()
n.find("input[name='authenticity_token']").remove()}s.a.ajaxJSON.storeRequest(S,p,d,u)
T.bind("form_response_loaded",function(){var e=T[0],t=e.contentDocument||e.contentWindow.document
if("about:blank"==t.location.href)return
S.setResponse(s()(t).text())
if(s.a.httpSuccess(S))w.call(this,S.response,S)
else{k.call(this,S.response,S)
s.a.fn.defaultAjaxError.func.call(s.a.fn.defaultAjaxError.object,null,S,"0",null)}setTimeout(function(){n.attr({ENCTYPE:E,encoding:E,target:D})
s()("#box_"+M).remove()},5e3)})
n.data("submitting",true).submit().data("submitting",false)}else s.a.ajaxJSON(p,d,u,w,k)})
return this}
s.a.ajaxJSONPreparedFiles=function(e){var t=[]
var n=this
var r=e.files||e.file_elements||[]
for(var a=0;a<r.length;a++){var i=r[a]
i.name=(i.value||i.name).split(/(\/|\\)/).pop()
t.push(i)}var o=[]
var u=function(){var t="url"==e.formDataTarget?e.formData:{}
if(e.handle_files){var n=o
e.single_file&&(n=o[0])
t=e.handle_files.call(this,n,t)}e.url&&e.success&&false!==t&&s.a.ajaxJSON(e.url,e.method,t,e.success,e.error)}
var l=e.uploadDataUrl||"/files/pending"
var c=function(t,r){t.no_redirect=true
r=r.files[0]
Object(p["d"])(l,t,r).then(function(e){o.push(e)
d.call(n)}).catch(function(t){(e.upload_error||e.error).call(n,t)})}
var d=function(){var r=t.shift()
if(r){var a=s.a.extend({name:r.name,on_duplicate:"rename",no_redirect:true,"attachment[folder_id]":e.folder_id,"attachment[intent]":e.intent,"attachment[asset_string]":e.asset_string,"attachment[filename]":r.name,"attachment[size]":r.size,"attachment[context_code]":e.context_code,"attachment[on_duplicate]":"rename"},"uploadDataUrl"==e.formDataTarget?e.formData:{})
1===r.files.length&&(a["attachment[content_type]"]=r.files[0].type)
c.call(n,a,r)}else u.call(n)}
d.call(n)}
s.a.ajaxJSONFiles=function(e,t,n,r,a,i,o){var u=s()(document.createElement("form"))
u.attr("action",e).attr("method",t)
n.authenticity_token=Object(h["a"])()
var l={}
r.each(function(){l[s()(this).attr("name")]=true})
for(var c in n)if(!l[c]){var d=s()(document.createElement("input"))
d.attr("type","hidden").attr("name",c).attr("value",n[c])
u.append(d)}r.each(function(){var e=s()(this).clone(true)
s()(this).after(e)
u.append(s()(this))
s()(this).removeAttr("id")})
s()("body").append(u.hide())
u.formSubmit({fileUpload:true,success:a,onlyGivenParameters:!!o&&o.onlyGivenParameters,error:i})
u.submit()}
s.a.handlesHTML5Files=!!(window.File&&window.FileReader&&window.FileList&&XMLHttpRequest)
s.a.handlesHTML5Files&&s()("input[type='file']").live("change",function(e){var t=this.files
if(t){s()(this).data("file_list",t)
s()(this).parents("form").addClass("handlingHTML5Files")}})
s.a.ajaxFileUpload=function(e){e.data.authenticity_token=Object(h["a"])()
s.a.toMultipartForm(e.data,function(t){s.a.sendFormAsBinary({url:e.url,body:t.body,content_type:t.content_type,form_data:t.form_data,method:e.method,success:function(t){e.success&&s.a.isFunction(e.success)&&e.success.call(this,t)},progress:function(t){e.progress&&s.a.isFunction(e.progress)&&e.progress.call(this,t)},error:function(t,n){if(e.error&&s.a.isFunction(e.error)){t=t||{}
e.error.call(this,t.errors||t)}else s.a.ajaxJSON.unhandledXHRs.push(n)}},false===e.binary)})}
s.a.httpSuccess=function(e){try{return!e.status&&"file:"==location.protocol||e.status>=200&&e.status<300||304==e.status||jQuery.browser.safari&&void 0==e.status}catch(e){}return false}
s.a.sendFormAsBinary=function(e,t){var n=e.body
var r=e.url
var a=e.method
var i=new XMLHttpRequest
if(i.upload){i.upload.addEventListener("progress",function(t){e.progress&&s.a.isFunction(e.progress)&&e.progress.call(this,t)},false)
i.upload.addEventListener("error",function(t){e.error&&s.a.isFunction(e.error)&&e.error.call(this,"uploading error",i,t)},false)
i.upload.addEventListener("abort",function(t){e.error&&s.a.isFunction(e.error)&&e.error.call(this,"aborted by the user",i,t)},false)}i.onreadystatechange=function(t){if(4==i.readyState){var n=null
try{n=s.a.parseJSON(i.responseText)}catch(e){}s.a.httpSuccess(i)&&n&&!n.errors?e.success&&s.a.isFunction(e.success)&&e.success.call(this,n,i,t):e.error&&s.a.isFunction(e.error)&&e.error.call(this,n||i.responseText,i,t)}}
i.open(a,r)
i.setRequestHeader("Accept","application/json, text/javascript, */*")
i.setRequestHeader("X-Requested-With","XMLHttpRequest")
if(e.form_data)i.send(e.form_data)
else{i.overrideMimeType(e.content_type||"multipart/form-data")
i.setRequestHeader("Content-Type",e.content_type||"multipart/form-data")
i.setRequestHeader("Content-Length",n.length)
t?i.send(n):i.sendAsBinary?i.sendAsBinary(n):console.log("xhr.sendAsBinary not supported")}}
s.a.fileData=function(e){return{name:e.name||e.fileName,size:e.size||e.fileSize,type:e.type,forced_type:e.type||"application/octet-stream"}}
s.a.toMultipartForm=function(e,t){var n="-----AaB03x"+l.a.uniqueId(),r={content_type:"multipart/form-data; boundary="+n},a="--"+n+"\r\n",i=[],o=false
for(var u in e){i.push([u,e[u]])
e[u]&&e[u].fake_file&&(o=true)}if(window.FormData&&!o){var c=new FormData
for(var u in e){var d=e[u]
window.FileList&&d instanceof FileList&&(d=d[0])
if(d instanceof Array)for(var f=0;f<d.length;f++)c.append(u,d[f])
else c.append(u,d)}r.form_data=c
t(r)
return}function h(e){return e.replace(/\"/g,"")}function m(){r.body=a.substring(0,a.length-2)+"--"
t(r)}function p(){if(0===i.length){m()
return}var e=i.shift(),t=e[0],r=e[1]
window.FileList&&r instanceof FileList&&(r=r[0])
if(window.FileList&&r instanceof FileList){var o="-----BbC04y"+l.a.uniqueId(),u=[]
a+='Content-Disposition: form-data; name="'+h(t)+"\r\nContent-Type: multipart/mixed; boundary="+o+"\r\n\r\n"
for(var c in r)u.push(r)
var d=function(){a+="--"+o+"--\r\n--"+n+"\r\n"
p()}
var f=function e(){if(0===u.length){d()
return}var t=u.shift(),n=s.a.fileData(t),r=new FileReader
r.onloadend=function(){a+="--"+o+'\r\nContent-Disposition: file; filename="'+h(n.name)+'"\r\nContent-Type: '+n.forced_type+"\r\nContent-Transfer-Encoding: binary\r\n\r\n"+r.result
e()}
r.readAsBinaryString(t)}
f()}else if(window.File&&r instanceof File){var _=s.a.fileData(r),g=new FileReader
g.onloadend=function(){a+='Content-Disposition: file; name="'+h(t)+'"; filename="'+_.name+'"\r\nContent-Type: '+_.forced_type+"\r\nContent-Transfer-Encoding: binary\r\n\r\n"+g.result+"\r\n--"+n+"\r\n"
p()}
g.readAsBinaryString(r)}else if(r&&r.fake_file){a+='Content-Disposition: file; name="'+h(t)+'"; filename="'+r.name+'"\r\nContent-Type: '+r.content_type+"\r\nContent-Transfer-Encoding: binary\r\n\r\n"+r.content+"\r\n--"+n+"\r\n"
p()}else{a+='Content-Disposition: form-data; name="'+h(t)+'"\r\n\r\n'+(r||"").toString()+"\r\n--"+n+"\r\n"
p()}}p()}
s.a.fn.fillFormData=function(e,t){if(this.length){e=e||[]
var n=s.a.extend({},s.a.fn.fillFormData.defaults,t)
n.object_name&&(e=s.a._addObjectName(e,n.object_name,true))
this.find(":input").each(function(){var t=s()(this)
var r=t.attr("name")
var a=t.attr("type")
if(r in e&&r){if("hidden"==a&&t.next("input:checkbox").attr("name")==r);else if("checkbox"!=a&&"radio"!=a){var i=e[r]
"undefined"!=typeof i&&null!==i||(i="")
t.val(i.toString())}else t.val()==e[r]?t.attr("checked",true):t.attr("checked",false)
t&&t.change&&n.call_change&&t.change()}})}return this}
s.a.fn.fillFormData.defaults={object_name:null,call_change:true}
s.a.fn.getFormData=function(e){e=s.a.extend({},s.a.fn.getFormData.defaults,e)
var t={},n=this
n.find(":input").not(":button").each(function(){var a=s()(this),i=a.attr("type")
if(("radio"==i||"checkbox"==i)&&!a.attr("checked"))return
var o=a.val()
a.hasClass("datetime_field_enabled")&&(o=a.data("iso8601"))
try{a.data("rich_text")&&(o=Object(r["d"])(a,"get_code",false))}catch(e){}var u=a.prop("name")||""
var l=u.match(/\[\]$/)
if("hidden"==i&&!l&&n.find("[name='"+u+"']").filter("textarea,:radio:checked,:checkbox:checked,:text,:password,select,:hidden")[0]!=a[0])return
if(u&&""!==u&&("checkbox"==i||"undefined"==typeof t[u]||l)&&(!e.values||-1!=s.a.inArray(u,e.values)))if(l){t[u]=t[u]||[]
t[u].push(o)}else t[u]=o})
e.object_name&&(t=s.a._stripObjectName(t,e.object_name,true))
return t}
s.a.fn.getFormData.defaults={object_name:null}
s.a._addObjectName=function(e,t,n){if(!e)return e
var r={}
e instanceof Array&&(r=[])
var a,i,o
for(var s in e){a=e instanceof Array?e[s]:s
o=a.indexOf("[")
i=o>=0?t+"["+a.substring(0,o)+"]"+a.substring(o):t+"["+a+"]"
if("string"==typeof a&&0===a.indexOf("=")){i=a.substring(1)
a=i}if(e instanceof Array){r.push(i)
n&&r.push(a)}else{r[i]=e[s]
n&&(r[a]=e[s])}}return r}
s.a._stripObjectName=function(e,t,n){var r={}
var a
e instanceof Array&&(r=[])
for(var i in e){var o,s
o=e instanceof Array?e[i]:i
if(s=0===o.indexOf(t+"[")){a=o.replace(t+"[","")
var u=a.indexOf("]")
a=a.substring(0,u)+a.substring(u+1)
e instanceof Array?r.push(a):r[a]=e[i]}s&&!n||(e instanceof Array?r.push(e[i]):r[i]=e[i])}return r}
s.a.fn.validateForm=function(e){if(0===this.length)return false
e=s.a.extend({},s.a.fn.validateForm.defaults,e)
var t=this,n={},r=e.data||t.getFormData(e)
if(e.object_name){e.required=s.a._addObjectName(e.required,e.object_name)
e.date_fields=s.a._addObjectName(e.date_fields,e.object_name)
e.dates=s.a._addObjectName(e.dates,e.object_name)
e.times=s.a._addObjectName(e.times,e.object_name)
e.numbers=s.a._addObjectName(e.numbers,e.object_name)
e.property_validations=s.a._addObjectName(e.property_validations,e.object_name)}if(e.required){var a=l.a.result(e,"required")
s.a.each(a,function(a,o){if(!r[o]){n[o]||(n[o]=[])
var s=e.labels&&e.labels[o]
s=s||t.getFieldLabelString(o)
n[o].push(i["a"].t("errors.required","Required field")+(s?": "+s:""))}})}e.date_fields&&s.a.each(e.date_fields,function(e,r){var a=t.find("input[name='"+r+"']").filter(".datetime_field_enabled")
if(a.length&&a.data("invalid")){n[r]||(n[r]=[])
n[r].push(i["a"].t("errors.invalid_datetime","Invalid date/time value"))}})
e.numbers&&s.a.each(e.numbers,function(e,t){var a=parseFloat(r[t])
if(isNaN(a)){n[t]||(n[t]=[])
n[t].push(i["a"].t("errors.invalid_number","This should be a number."))}})
e.property_validations&&s.a.each(e.property_validations,function(e,a){if(s.a.isFunction(a)){var o=a.call(t,r[e],r)
if(o){"string"!=typeof o&&(o=i["a"].t("errors.invalid_entry_for_field","Invalid entry: %{field}",{field:e}))
n[e]||(n[e]=[])
n[e].push(o)}}})
var o=false
for(var u in n){o=true
break}if(o){t.formErrors(n,e)
s.a.trackEvent("Form Errors",this.attr("id")||this.attr("class")||document.title,JSON.stringify(n))
return false}return true}
s.a.fn.validateForm.defaults={object_name:null,required:null,dates:null,times:null}
s.a.fn.formErrors=function(e,t){if(0===this.length)return
var n=this
var r={}
var a=[]
e&&e["errors"]&&(e=e["errors"])
"string"==typeof e&&(e={base:e})
s.a.each(e,function(e,t){if("string"==typeof t){var i=[]
i.push(t)
t=i}else{if("number"==typeof e&&2==t.length&&t[0]instanceof jQuery&&"string"==typeof t[1]){a.push(t)
return}if("number"==typeof e&&2==t.length&&"string"==typeof t[1]){i=[]
i.push(t[1])
e=t[0]
t=i}else try{i=[]
for(var o in t)"object"==typeof t[o]&&t[o].message?i.push(t[o].message.toString()):i.push(t[o].toString())
t=i}catch(e){t=t.toString()}}n.find(":input[name='"+e+"'],:input[name*='["+e+"]']").length>0?s.a.each(t,function(t,n){r[e]?r[e]+="<br/>"+Object(m["a"])(n):r[e]=Object(m["a"])(n)}):s.a.each(t,function(e,t){r.general?r.general+="<br/>"+Object(m["a"])(t):r.general=Object(m["a"])(t)})})
var i=false
var o=0
var u=null
s()(document).scrollTop()
var l={}
s()("#aria_alerts").empty()
s.a.each(r,function(e,t){var r=n.find(":input[name='"+e+"'],:input[name*='["+e+"]']").filter(":visible").first()
if(!r||0===r.length){var a=n.find("[name='"+e+"'],[name*='["+e+"]']").filter(":not(:visible)").first()
a&&a.length>0&&(r=a.prev())}r&&0!==r.length&&"general"!=e||(r=n)
"TEXTAREA"==r[0].tagName&&r.next(".mceEditor").length&&(r=r.next().find(".mceIframeContainer"))
l[e]={object:r,message:t}
i=true
var c=r.errorBox(s.a.raw(t)).offset()
c.top>o&&(o=c.top)
u=r})
u&&u.focus()
for(var c=0,d=a.length;c<d;c++){var f=a[c][0]
var h=a[c][1]
i=true
var p=f.errorBox(h).offset()
p.top>o&&(o=p.top)}if(i){t&&t.onFormError&&t.onFormError.call(n,l)
s()("html,body").scrollTo({top:o,left:0})}return this}
s.a.fn.errorBox=function(e,t){if(this.length){var n=this,r=n.data("associated_error_box")
r&&r.remove()
var a=s()("#error_box_template")
a.length||(a=s()("<div id='error_box_template' class='error_box errorBox' style=''><div class='error_text' style=''></div><img src='/images/error_bottom.png' class='error_bottom'/></div>").appendTo("body"))
s.a.screenReaderFlashError(e)
var i=a.clone(true).attr("id","").css("zIndex",n.zIndex()+1).appendTo("body")
i.find(".error_text").html(Object(m["a"])(e))
var o=n.offset()
var u=i.outerHeight()
var c=Math.round(n.outerWidth()/5)
"FORM"==n[0].tagName&&(c=Math.min(c,50))
i.hide().css({top:o.top-u+2,left:o.left+c}).fadeIn("fast")
var d=function(){var e=s()("#flash_screenreader_holder").find("span")
var t=l.a.find(e,function(e){return s()(e).text()==i.text()})
i.remove()
t&&s()(t).remove()
n.removeData("associated_error_box")
n.removeData("associated_error_object")}
var f=function(){i.stop(true,true).fadeOut("slow",d)}
n.data({associated_error_box:i,associated_error_object:n}).click(f).keypress(f)
i.click(function(){s()(this).fadeOut("fast",d)})
s.a.fn.errorBox.errorBoxes.push(n)
s.a.fn.errorBox.isBeingAdjusted||s.a.moveErrorBoxes()
t&&s()("html,body").scrollTo(i)
return i}}
s.a.fn.errorBox.errorBoxes=[]
s.a.moveErrorBoxes=function(){var e=[]
var t=s.a.fn.errorBox.errorBoxes
for(var n=0;n<t.length;n++){var r=t[n],a=r.data("associated_error_box")
if(a&&a.length&&a[0].parentNode){e.push(r)
if(r.filter(":visible").length){var i=r.offset()
var o=a.outerHeight()
var u=Math.round(r.outerWidth()/5)
"FORM"==r[0].tagName&&(u=Math.min(u,50))
a.css({top:i.top-o+2,left:i.left+u}).show()}else a.hide()}}s.a.fn.errorBox.errorBoxes=e
e.length?s.a.fn.errorBox.isBeingAdjusted=setTimeout(s.a.moveErrorBoxes,500):delete s.a.fn.errorBox.isBeingAdjusted}
s.a.fn.hideErrors=function(e){if(this.length){var t=this.data("associated_error_box")
var n=s()("#flash_screenreader_holder").find("span")
if(t){t.remove()
this.data("associated_error_box",null)}this.find(":input").each(function(){var e=s()(this),t=e.data("associated_error_box")
if(t){t.remove()
e.data("associated_error_box",null)
var r=l.a.find(n,function(e){return s()(e).text()==t.text()})
r&&s()(r).remove()}})}return this}
s.a.fn.markRequired=function(e){if(!e.required)return
var t=e.required
e.object_name&&(t=s.a._addObjectName(t,e.object_name))
var n=s()(this)
s.a.each(t,function(e,t){var r=n.find('[name="'+t+'"]')
if(!r.length)return
r.attr({"aria-required":"true"})
r.each(function(){if(!this.id)return
var e=s()('label[for="'+this.id+'"]')
if(!e.length)return
"pseudonym_session_unique_id_forgot"!=this.id&&e.append(s()('<span aria-hidden="true" />').text("*").attr("title",i["a"].t("errors.field_is_required","This field is required")))})})}
s.a.fn.getFieldLabelString=function(e){var t=s()(this).find('[name="'+e+'"]')
if(!t.length||!t[0].id)return
var n=s()('label[for="'+t[0].id+'"]')
if(!n.length)return
return n[0].firstChild.textContent}},ZV2x:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("vTtS")
var i=false
a()(document).mouseup(function(e){i=false})
a.a.widget("ui.mouse",{version:"@VERSION",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this
this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(t){if(true===a.a.data(t.target,e.widgetName+".preventClickEvent")){a.a.removeData(t.target,e.widgetName+".preventClickEvent")
t.stopImmediatePropagation()
return false}})
this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
a()(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(i)return
this._mouseStarted&&this._mouseUp(e)
this._mouseDownEvent=e
var t=this,n=1===e.which,r=!("string"!==typeof this.options.cancel||!e.target.nodeName)&&a()(e.target).closest(this.options.cancel).length
if(!n||r||!this._mouseCapture(e))return true
this.mouseDelayMet=!this.options.delay
this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){t.mouseDelayMet=true},this.options.delay))
if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=false!==this._mouseStart(e)
if(!this._mouseStarted){e.preventDefault()
return true}}true===a.a.data(e.target,this.widgetName+".preventClickEvent")&&a.a.removeData(e.target,this.widgetName+".preventClickEvent")
this._mouseMoveDelegate=function(e){return t._mouseMove(e)}
this._mouseUpDelegate=function(e){return t._mouseUp(e)}
a()(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate)
e.preventDefault()
i=true
return true},_mouseMove:function(e){if(a.a.browser.msie&&!(document.documentMode>=9)&&!e.button)return this._mouseUp(e)
if(this._mouseStarted){this._mouseDrag(e)
return e.preventDefault()}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=false!==this._mouseStart(this._mouseDownEvent,e)
this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)}return!this._mouseStarted},_mouseUp:function(e){a()(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
if(this._mouseStarted){this._mouseStarted=false
e.target===this._mouseDownEvent.target&&a.a.data(e.target,this.widgetName+".preventClickEvent",true)
this._mouseStop(e)}return false},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return true}})},c6Pp:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("32f0")
var i=a.a.parseJSON
a.a.parseJSON=function(){if(arguments[0])try{var e=arguments[0].replace(/^while\(1\);/,"")
arguments[0]=e}catch(e){}return i.apply(a.a,arguments)}
a.a.ajaxSettings.converters["text json"]=a.a.parseJSON
a.a.attrHooks.method=a.a.extend(a.a.attrHooks.method,{set:function(e,t){var n=t
t="GET"===t.toUpperCase()?"GET":"POST"
if("POST"===t){var r=a()(e).find("input[name='_method']")
r.length||(r=a()("<input type='hidden' name='_method'/>").prependTo(e))
r.val(n)}e.setAttribute("method",t)
return t}})
a.a.fn.originalScrollTop=a.a.fn.scrollTop
a.a.fn.scrollTop=function(){"html,body"==this.selector&&0===arguments.length&&console.error("$('html,body').scrollTop() is not cross-browser compatible... use $.windowScrollTop() instead")
return a.a.fn.originalScrollTop.apply(this,arguments)}
a.a.windowScrollTop=function(){var e=window.navigator.userAgent.match(/Chrome\/(\d+)/)
var t=window.navigator.userAgent.match(/Edge\/(\d+)/)
return!t&&e&&parseInt(e[1],10)>60?a()("html").scrollTop():(a.a.browser.safari?a()("body"):a()("html")).scrollTop()}
a.a.ajaxPrefilter("json",function(e,t,n){e.accepts.json?e.accepts.json=e.accepts.json+", application/json+canvas-string-ids":e.accepts.json="application/json+canvas-string-ids"})
var o=function(e){var t=a.a.cookie("_csrf_token")
t&&e.setRequestHeader("X-CSRF-Token",t)}
a.a.ajaxPrefilter(function(e,t,n){e.crossDomain||o(n)
var r=e.url
var i=(new Date).getTime()
n.done(function(e,t,n){var o=(new Date).getTime()-i
if(o>1e3){var s='{"requestingPage": "'+window.location+'," "status": "'+t+'", "X-Request-Context-Id" : "'+n.getResponseHeader("X-Request-Context-Id")+'", "X-Runtime": '+n.getResponseHeader("X-Runtime")+"}"
a.a.trackEvent("XHRs",r,s,o)}})})
a.a},c9Sg:function(e,t,n){"use strict"
var r=n("pQTu")
var a=n("m0r6")
Object(a["a"])({ar:{instructure:{errors:{field_is_required:"هذا الحقل مطلوب",invalid_datetime:"تاريخ/قيمة زمنية غير صالحة",invalid_entry_for_field:"إدخال غير صالح: %{field}",invalid_number:"يجب أن يكون هذا رقمًا.",required:"حقل مطلوب"}}},cy:{instructure:{errors:{field_is_required:"Mae’n rhaid llenwi’r maes hwn",invalid_datetime:"Gwerth dyddiad/amser annilys",invalid_entry_for_field:"Cofnod annilys: %{field}",invalid_number:"Fe ddylai hwn fod yn rhif.",required:"Maes gofynnol"}}},da:{instructure:{errors:{field_is_required:"Dette felt er påkrævet",invalid_datetime:"Ugyldig værdi for dato/tidspunkt",invalid_entry_for_field:"Ugyldig indtastning: %{field}",invalid_number:"Dette skal være et tal.",required:"Påkrævet felt"}}},"da-x-k12":{instructure:{errors:{field_is_required:"Dette felt er påkrævet",invalid_datetime:"Ugyldig værdi for dato/tidspunkt",invalid_entry_for_field:"Ugyldig indtastning: %{field}",invalid_number:"Dette skal være et tal.",required:"Påkrævet felt"}}},de:{instructure:{errors:{field_is_required:"Dies ist ein Pflichtfeld.",invalid_datetime:"Ungültige Datums-/Uhrzeitangabe",invalid_entry_for_field:"Ungültiger Eintrag: %{field}",invalid_number:"Dies muss eine Nummer sein.",required:"Pflichtfeld"}}},el:{instructure:{errors:{field_is_required:"Αυτό το πεδίο είναι υποχρεωτικό",invalid_datetime:"Μη έγκυρη ημερομηνία/ώρα",invalid_entry_for_field:'<mrk mid="1406" mtype="seg">Μη έγκυρη καταχώριση:</mrk> <mrk mid="1407" mtype="seg">%{field}</mrk>',invalid_number:"Πρέπει να είναι νούμερο.",required:"Υποχρεωτικό πεδίο"}}},"en-AU":{instructure:{errors:{field_is_required:"This field is required",invalid_datetime:"Invalid date/time value",invalid_entry_for_field:"Invalid entry: %{field}",invalid_number:"This should be a number.",required:"Required field"}}},"en-AU-x-unimelb":{instructure:{errors:{field_is_required:"This field is required",invalid_datetime:"Invalid date/time value",invalid_entry_for_field:"Invalid entry: %{field}",invalid_number:"This should be a number.",required:"Required field"}}},"en-CA":{instructure:{errors:{field_is_required:"This field is required",invalid_datetime:"Invalid date/time value",invalid_entry_for_field:"Invalid entry: %{field}",invalid_number:"This should be a number.",required:"Required field"}}},"en-GB":{instructure:{errors:{field_is_required:"This field is required",invalid_datetime:"Invalid date/time value",invalid_entry_for_field:"Invalid entry: %{field}",invalid_number:"This should be a number.",required:"Required field"}}},"en-GB-x-lbs":{instructure:{errors:{field_is_required:"This field is required",invalid_datetime:"Invalid date/time value",invalid_entry_for_field:"Invalid entry: %{field}",invalid_number:"This should be a number.",required:"Required field"}}},"en-GB-x-ukhe":{instructure:{errors:{field_is_required:"This field is required",invalid_datetime:"Invalid date/time value",invalid_entry_for_field:"Invalid entry: %{field}",invalid_number:"This should be a number.",required:"Required field"}}},es:{instructure:{errors:{field_is_required:"Este campo es requerido",invalid_datetime:"Valor de fecha/tiempo inválido",invalid_entry_for_field:"Entrada inválida: %{field}",invalid_number:"Este debería ser un número.",required:"Campo obligatorio"}}},fa:{instructure:{errors:{field_is_required:"تکمیل این جای خالی لازم است",invalid_datetime:"مقدار تاریخ/زمان معتبر نیست",invalid_entry_for_field:"ورودی معتبر نیست: %{field}",invalid_number:"باید یک عدد باشد.",required:"تکمیل جای خالی لازم است"}}},fr:{instructure:{errors:{field_is_required:"Ce champ est obligatoire.",invalid_datetime:"Date/heure non valide",invalid_entry_for_field:"Entrée non valide : %{field}",invalid_number:"Vous devez indiquer un nombre.",required:"Champ obligatoire"}}},"fr-CA":{instructure:{errors:{field_is_required:"Ce champ est obligatoire.",invalid_datetime:"Date/heure non valide",invalid_entry_for_field:"Entrée non valide : %{field}",invalid_number:"Vous devez indiquer un nombre.",required:"Champ obligatoire"}}},he:{instructure:{errors:{field_is_required:"חובה למלא שדה זה",invalid_datetime:"ערך לא חוקי בשדה תאריך/שעה",invalid_entry_for_field:"תוכן שגוי: %{field}",invalid_number:"ערך זה חייב להיות מספרי",required:"שדה נדרש"}}},ht:{instructure:{errors:{field_is_required:"Kazye sa a obligatwa",invalid_datetime:"Valè dat/lè envalid",invalid_entry_for_field:"Antre envalid: %{field}",invalid_number:"Sa a ta dwe se yon nonm",required:"Espas obligatwa"}}},hu:{instructure:{errors:{field_is_required:"A mező kitöltése kötelező",invalid_datetime:"Érvénytelen dátum/idő érték ",invalid_entry_for_field:"Érvénytelen bejegyzés: %{field}",invalid_number:"Ennek számnak kell lennie.",required:"Kötelező mező"}}},hy:{instructure:{errors:{field_is_required:"Անհրաժեշտ է լրացնել այս դաշտը",invalid_datetime:"Ամսաթվի/ժամանակի սխալ",invalid_entry_for_field:"Սխալ մուտքագրում՝  %{field}",invalid_number:"Սա պետք է թիվ լինի:",required:"Պարտադիր լրացման դաշտ"}}},is:{instructure:{errors:{field_is_required:"Fylla þarf í þennan reit",invalid_datetime:"Ógild dagsetning/tími",invalid_entry_for_field:"Ógild færsla: %{field}",invalid_number:"Þetta á að vera tala.",required:"Áskilinn reitur"}}},it:{instructure:{errors:{field_is_required:"Questo campo è obbligatorio",invalid_datetime:"Valore data/ora non valido",invalid_entry_for_field:"Voce non valida: %{field}",invalid_number:"Deve essere un numero.",required:"Campo obbligatorio"}}},ja:{instructure:{errors:{field_is_required:"このフィールドは必須項目です",invalid_datetime:"無効な日付/時刻の値です",invalid_entry_for_field:"無効なエントリ: %{field}",invalid_number:"数値である必要があります。",required:"必須フィールド"}}},ko:{instructure:{errors:{field_is_required:"이 필드가 필요함",invalid_datetime:"유효하지 않은 날짜/시간값",invalid_entry_for_field:"유효하지 않은 항목: %{field}",invalid_number:"숫자가 필요합니다.",required:"필수 필드"}}},mi:{instructure:{errors:{field_is_required:"Kei te hiahiatia tēnei whīra",invalid_datetime:"Rā uara muhu / wā",invalid_entry_for_field:"Urunga muhu: %{field}",invalid_number:"Kia he maha tēnei.",required:"whīra e hiahiatia ana"}}},nb:{instructure:{errors:{field_is_required:"Dette feltet er obligatorisk",invalid_datetime:"Ugyldig verdi for dato/tidspunkt",invalid_entry_for_field:"Ugyldig innlegg: %{field}",invalid_number:"Dette skal være et tall.",required:"Påkrevd felt"}}},"nb-x-k12":{instructure:{errors:{field_is_required:"Dette feltet er obligatorisk",invalid_datetime:"Ugyldig verdi for dato/tidspunkt",invalid_entry_for_field:"Ugyldig innlegg: %{field}",invalid_number:"Dette skal være et tall.",required:"Påkrevd felt"}}},nl:{instructure:{errors:{field_is_required:"Dit veld is verplicht",invalid_datetime:"Ongeldige datum-/tijdswaarde",invalid_entry_for_field:"Ongeldige invoer: %{field}",invalid_number:"Dit moet een getal zijn.",required:"Vereist veld"}}},nn:{instructure:{errors:{field_is_required:"Dette feltet er obligatorisk",invalid_datetime:"Ugyldig verdi for dato/tidspunkt",invalid_entry_for_field:"Ugyldig oppføring: %{field}",invalid_number:"Dette skal vere eit tal",required:"Obligatorisk felt"}}},pl:{instructure:{errors:{field_is_required:"To pole jest wymagane",invalid_datetime:"Nieprawidłowa data/godzina",invalid_entry_for_field:"Nieprawidłowy wpis: %{field}",invalid_number:"Powinna to być wartość liczbowa.",required:"Wymagane pole"}}},pt:{instructure:{errors:{field_is_required:"Este campo é obrigatório",invalid_datetime:"Valor de data/hora inválido",invalid_entry_for_field:"Entrada inválida: %{field}",invalid_number:"Este valor deve ser um número.",required:"Campo de preenchimento obrigatório"}}},"pt-BR":{instructure:{errors:{field_is_required:"Este campo é obrigatório",invalid_datetime:"Valor de data/hora inválido",invalid_entry_for_field:"Entrada inválida: %{field}",invalid_number:"Este valor deve ser um número.",required:"Campo obrigatório"}}},ru:{instructure:{errors:{field_is_required:"Необходимо это поле",invalid_datetime:"Недопустимое значение даты/времени",invalid_entry_for_field:"Неверная запись: %{field}",invalid_number:"Должно быть числом.",required:"Обязательное для заполнения поле"}}},sl:{instructure:{errors:{field_is_required:"To polje je zahtevano.",invalid_datetime:"Neveljavna vrednost datuma/časa",invalid_entry_for_field:"Neveljavni vnos: %{field}",invalid_number:"Vnos mora biti numeričen.",required:"Zahtevano polje"}}},sv:{instructure:{errors:{field_is_required:"Det här fältet är nödvändigt",invalid_datetime:"Ogiltigt datum/tids värde",invalid_entry_for_field:"Ogiltigt inlägg: %{field}",invalid_number:"Det här ska vara ett nummer",required:"Nödvändigt fält"}}},"sv-x-k12":{instructure:{errors:{field_is_required:"Det här fältet är nödvändigt",invalid_datetime:"Ogiltigt datum/tids värde",invalid_entry_for_field:"Ogiltigt inlägg: %{field}",invalid_number:"Det här ska vara ett nummer",required:"Nödvändigt fält"}}},tr:{instructure:{errors:{field_is_required:"Bu alan zorunludur",invalid_datetime:"Geçersiz tarih/saat değeri",invalid_entry_for_field:"Geçersiz giriş: %{field}",invalid_number:"Bir sayı olmalıdır.",required:"Zorunlu alan"}}},uk:{instructure:{errors:{field_is_required:"Це поле є обов'язковим",invalid_datetime:"Некоректні дата і час",invalid_entry_for_field:"Некоректний запис: %{field}",invalid_number:"Це повинно бути число.",required:"Обов'язкове поле"}}},"zh-Hans":{instructure:{errors:{field_is_required:"此字段为必填字段",invalid_datetime:"无效的日期/时间值",invalid_entry_for_field:"无效的条目: %{field}",invalid_number:"这应该是数字。",required:"必填字段"}}},"zh-Hant":{instructure:{errors:{field_is_required:"此字段為必填項",invalid_datetime:"無效的日期/時間值",invalid_entry_for_field:"無效的輸入項目：%{field}",invalid_number:"這應該是一個數字。",required:"必填字段"}}}})
n("jQeR")
n("0sPK")
t["a"]=r["default"].scoped("instructure")},cUZJ:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var n
var r=function(e){n=n||require("fs")
var t={}
if(n.existsSync(e))try{t=JSON.parse(n.readFileSync(e).toString())}catch(e){console.log(e)}return t}
var a={ignore:function(){n=n||require("fs")
var e=[]
n.existsSync(".i18nignore")&&(e=n.readFileSync(".i18nignore").toString().trim().split(/\r?\n|\r/))
return e},set:function(e,t,n){var r=this.config[e]
this.config[e]=t
if(n)try{n()}finally{this.config[e]=r}},loadConfig:function(){var e=r(".i18nrc")
for(var t in e)"plugins"!==t&&this.set(t,e[t])
e.plugins&&e.plugins.length>0&&this.loadPlugins(e.plugins)},loadPlugins:function(e){e.forEach(function(e){var t=require(e)
t.default&&(t=t.default)
t({processors:this.Commands.Check.processors,config:this.config})}.bind(this))},config:{inferredKeyFormat:"underscored_crc32",underscoredKeyLength:50,basePath:".",directories:[],babylonPlugins:["jsx","classProperties","objectRestSpread"]}}
t.default=a},endd:function(e,t,n){"use strict"
function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")}
r.prototype.__CANCEL__=true
e.exports=r},eqyj:function(e,t,n){"use strict"
var r=n("xTJ+")
e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,i,o){var s=[]
s.push(e+"="+encodeURIComponent(t))
r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString())
r.isString(a)&&s.push("path="+a)
r.isString(i)&&s.push("domain="+i)
true===o&&s.push("secure")
document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"))
return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},fPNa:function(e,t,n){"use strict"
var r=n("ODXe")
var a=n("Cf7h")
t["a"]={_contextPath:function(){var e=this.contextAssetString||ENV.context_asset_string
var t=Object(a["a"])(e),n=Object(r["a"])(t,2),i=n[0],o=n[1]
return"".concat(encodeURIComponent(i),"/").concat(encodeURIComponent(o))},_defaultUrl:function(){var e=this.resourceName||this.model.prototype.resourceName
if(!e)throw new Error("Must define a `resourceName` property on collection or model prototype to use defaultUrl")
return"/api/v1/".concat(this._contextPath(),"/").concat(e)}}},hiU6:function(e,t,n){"use strict"
var r=n("u7Gu")
var a=n("ouhR")
var i=n.n(a)
window._gaq=window._gaq||[]
var o=false
i.a.trackPage=function(e,t){if(!o){o=true
var n=function(){var e=window.requestIdleCallback||function(e){return setTimeout(e,1)}
e(function(){var e=document.createElement("script")
e.type="text/javascript"
e.async=true
e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js"
var t=document.getElementsByTagName("script")[0]
t.parentNode.insertBefore(e,t)})}
"complete"===document.readyState?n():i()(window).one("load",n)}t=i.a.extend({status_code:200},t)
window._gaq.push(["_setAccount",e])
t.domain&&window._gaq.push(["_setDomainName",t.domain])
ENV.ga_page_title&&window._gaq.push(["_set","title",ENV.ga_page_title])
window._gaq.push(["_trackPageview"])
window._gaq.push(["_trackPageLoadTime"])
200!=t.status_code&&window._gaq.push(["_trackEvent","Errors",t.status_code,"page: "+document.location.pathname+document.location.search+" ref: "+document.referrer,t.error_id])}
i.a.setTrackingVar=function(){var e=Array.prototype.slice.call(arguments,0)
e.unshift("_setCustomVar")
window._gaq.push.apply(window._gaq,e)}
i.a.trackEvent=function(e,t,n,r){window._gaq.push(["_trackEvent",e,t,n,r])}
i.a.trackPageview=function(e){window._gaq.push(["_trackPageview",e])}
r["a"]&&r["a"].googleAnalyticsAccount&&i.a.trackPage(r["a"].googleAnalyticsAccount,{status_code:r["a"].http_status,error_id:r["a"].error_id,domainName:document.location.hostname})
i.a.trackPage,i.a.setTrackingVar,i.a.trackEvent,i.a.trackPageView},hmgV:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var r=["equipment","information","rice","money","species","series","fish","sheep","jeans"]
var a=[[/person$/i,"people"],[/man$/i,"men"],[/child$/i,"children"],[/sex$/i,"sexes"],[/move$/i,"moves"],[/(quiz)$/i,"$1zes"],[/^(ox)$/i,"$1en"],[/([m|l])ouse$/i,"$1ice"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/(x|ch|ss|sh)$/i,"$1es"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(hive)$/i,"$1s"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/sis$/i,"ses"],[/([ti])um$/i,"$1a"],[/(buffal|tomat)o$/i,"$1oes"],[/(bu)s$/i,"$1ses"],[/(alias|status)$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(ax|test)is$/i,"$1es"],[/s$/i,"s"]]
var i=function(e){e=e||""
if(r.indexOf(e)>=0)return e
for(var t=0,n=a.length;t<n;t++){var i=a[t]
if(e.match(i[0]))return e.replace(i[0],i[1])}return e+"s"}
i.withCount=function(e,t){return e+" "+(1===e?t:i(t))}
t.default=i},hr2o:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=Object.freeze({fontFamily:'LatoWeb, Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',fontFamilyMonospace:'Menlo, Consolas, Monaco, "Andale Mono", monospace',fontSizeXSmall:"0.75rem",fontSizeSmall:"0.875rem",fontSizeMedium:"1rem",fontSizeLarge:"1.375rem",fontSizeXLarge:"1.75rem",fontSizeXXLarge:"2.375rem",fontWeightLight:300,fontWeightNormal:400,fontWeightBold:700,lineHeight:1.5,lineHeightFit:1.125,lineHeightCondensed:1.25,lineHeightDouble:2,letterSpacingNormal:0,letterSpacingCondensed:"-0.0625rem",letterSpacingExpanded:"0.0625rem"})
t.default=r},i8i4:function(e,t,n){"use strict"
function r(){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__||"function"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)return
false
try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}r()
e.exports=n("yl30")},iOIl:function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
var r=n("2DhO")
function a(e){return r["a"].adjustFormat(i(e)).replace(/%Y/,"yy").replace(/%b/,"M").replace(/%-?d/,"d").replace(/%a/,"D").replace(/%-?[lk]|:|%M|%P/g,"").trim()}function i(e){var t=""
var n=false
var r=function(){if(!n){t+="'"
n=true}}
var a=function(){if(n){t+="'"
n=false}}
for(var i=0;i<e.length;++i)if(" "===e[i]){a()
t+=" "}else if("%"===e[i]&&"-"===e[i+1]&&null!=e[i+2]){a()
t+="%-".concat(e[i+2])
i+=2}else if("%"===e[i]&&null!=e[i+1]){a()
t+="%".concat(e[i+1])
i+=1}else{r()
t+=e[i]}a()
return t}},jJIg:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=["equipment","information","rice","money","species","series","fish","sheep","jeans"]
var o=[[/person$/i,"people"],[/man$/i,"men"],[/child$/i,"children"],[/sex$/i,"sexes"],[/move$/i,"moves"],[/(quiz)$/i,"$1zes"],[/^(ox)$/i,"$1en"],[/([m|l])ouse$/i,"$1ice"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/(x|ch|ss|sh)$/i,"$1es"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(hive)$/i,"$1s"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/sis$/i,"ses"],[/([ti])um$/i,"$1a"],[/(buffal|tomat)o$/i,"$1oes"],[/(bu)s$/i,"$1ses"],[/(alias|status)$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(ax|test)is$/i,"$1es"],[/s$/i,"s"]]
var s=function(e){e=e||""
if(a.a.inArray(e,i)>0)return e
for(var t=0;t<o.length;t++){var n=o[t]
if(e.match(n[0]))return e.replace(n[0],n[1])}return e+"s"}
s.withCount=function(e,t){return e+" "+(1==e?t:s(t))}
t["a"]=s},jQeR:function(e,t,n){"use strict"
var r=n("m0r6")
Object(r["a"])({ar:{date:{abbr_day_names:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],abbr_month_names:[null,"يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],datepicker:{column_headings:["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"]},day_names:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],days:{today:"اليوم",today_lower:"اليوم",tomorrow:"غدًا",yesterday:"أمس"},formats:{date_at_time:"%-d %b at %k:%M",default:"%d/%m/%Y",full:"%-d %b، %Y %-k:%M",full_with_weekday:"%a %-d %b، %Y %-k%M",long:"%-d %B %Y",long_with_weekday:"%A، %-d %B",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a، %-d %b",weekday:"%A"},month_names:[null,"يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},datetime:{distance_in_words:{about_x_hours:{few:"حوالي %{count} ساعات",many:"حوالي %{count} ساعات",one:"حوالي ساعة واحدة",other:"حوالي %{count} ساعات",two:"حوالي %{count} ساعات",zero:"حوالي %{count} ساعات"},about_x_months:{few:"حوالي %{count} أشهر",many:"حوالي %{count} أشهر",one:"حوالي شهر واحد",other:"حوالي %{count} أشهر",two:"حوالي %{count} أشهر",zero:"حوالي %{count} أشهر"},about_x_years:{few:"حوالي %{count} سنوات",many:"حوالي %{count} سنوات",one:"حوالي سنة واحدة",other:"حوالي %{count} سنوات",two:"حوالي %{count} سنوات",zero:"حوالي %{count} سنوات"},almost_x_years:{few:"%{count} سنوات تقريبًا",many:"%{count} سنوات تقريبًا",one:"سنة واحدة تقريبًا",other:"%{count} سنوات تقريبًا",two:"%{count} سنوات تقريبًا",zero:"%{count} سنوات تقريبًا"},half_a_minute:"نصف دقيقة",less_than_x_minutes:{few:"أقل من %{count} دقائق",many:"أقل من %{count} دقائق",one:"أقل من دقيقة واحدة",other:"أقل من %{count} دقائق",two:"أقل من %{count} دقائق",zero:"أقل من %{count} دقائق"},less_than_x_seconds:{few:"أقل من %{count} ثوان",many:"أقل من %{count} ثوان",one:"أقل من ثانية واحدة",other:"أقل من %{count} ثوان",two:"أقل من %{count} ثوان",zero:"أقل من %{count} ثوان"},over_x_years:{few:"أكثر من %{count} سنوات",many:"أكثر من %{count} سنوات",one:"أكثر من سنة واحدة",other:"أكثر من %{count} سنوات",two:"أكثر من %{count} سنوات",zero:"أكثر من %{count} سنوات"},x_days:{few:"%{count} من الأيام",many:"%{count} من الأيام",one:"يوم واحد",other:"%{count} من الأيام",two:"%{count} من الأيام",zero:"%{count} يوم"},x_minutes:{few:"%{count} دقائق",many:"%{count} دقائق",one:"دقيقة واحدة",other:"%{count} دقائق",two:"%{count} دقائق",zero:"%{count} دقائق"},x_months:{few:"%{count} أشهر",many:"%{count} أشهر",one:"شهر واحد",other:"%{count} أشهر",two:"%{count} أشهر",zero:"%{count} أشهر"},x_seconds:{few:"%{count} ثوان",many:"%{count} ثوان",one:"ثانية واحدة",other:"%{count} ثوان",two:"%{count} ثوان",zero:"%{count} ثوان"}},prompts:{day:"اليوم",hour:"ساعة",minute:"دقيقة",month:"الشهر",second:"ثوانٍ",year:"العام"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"مليار",million:"مليون",quadrillion:"كوادريليون",thousand:"ألف",trillion:"تريليون",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{few:"وحدات بايت",many:"وحدات بايت",one:"بايت",other:"وحدات بايت",two:"وحدات بايت",zero:"وحدات بايت"},eb:"إكسابايت",gb:"جيجابايت",kb:"كيلوبايت",mb:"ميجابايت",pb:"بيتابايت",tb:"تيرابايت"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:"، و ",or:{last_word_connector:"، أو ",two_words_connector:" أو "},two_words_connector:" و ",words_connector:", "},help_menu:{cisco_netacad_facebook:"مجتمع الدعم",cisco_netacad_facebook_description:"للحصول على دعم المجتمع أو الاتصال بمعلمك، يرجى زيارة صفحة Facebook لأكاديمية الشبكات.",community_support_description:"تفاعل واحصل على المساعدة من أقرانك.",community_support_forums:"منتديات دعم المجتمع",contact_support:"دعم الاتصال",contact_support_sub_text:"الحصول على مساعدة للمشكلات حسب الوقت.",curriculum_assessment_errata:"أخطاء المنهج الدراسي/التقييم",curriculum_assessment_errata_description:'عرض أخطاء التقييم والمناهج الدراسية التي تم الإعلام عنها مسبقًا. البحث عن "الأخطاء المطبعية".',global_support_desk:"NetAcad الدعم",global_support_desk_description:"تمثل ACS أول وسيلة دعم بالنسبة لك، وتسمح لك بالاتصال بمكتبنا للدعم الشامل بشأن المشاكل التي تتطلب دعم إضافي.",networking_academy_description:"عرض إجابات Cisco عن الأسئلة الشائعة.",networking_academy_faqs:"الأسئلة الشائعة حول أكاديمية الشبكات",support_desk_livechat:"محادثة مباشرة مع مكتب الدعم"}},time:{am:"صباحًا",count_hours_ago:{few:"منذ %{count} ساعة مضت",many:"منذ %{count} ساعة مضت",one:"منذ ساعة مضت",other:"منذ %{count} ساعة مضت",two:"منذ %{count} ساعة مضت",zero:"منذ %{count} ساعة مضت"},count_minutes_ago:{few:"منذ %{count} دقيقة مضت",many:"منذ %{count} دقيقة مضت",one:"منذ دقيقة مضت",other:"منذ %{count} دقيقة مضت",two:"منذ %{count} دقيقة مضت",zero:"منذ %{count} دقيقة مضت"},due_date:"%{date} حسب %{time}",event:"%{date} في %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"منذ أقل من دقيقة",pm:"مساءً",ranges:{different_days:"%{start_date_and_time} إلى %{end_date_and_time}",same_day:"%{date} من %{start_time} إلى %{end_time}",times:"%{start_time} إلى %{end_time}"},with_ago:"منذ %{time}"}},cy:{date:{abbr_day_names:["Su","Llu","Maw","Mer","Iau","Gwe","Sad"],abbr_month_names:[null,"Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],datepicker:{column_headings:["Su","Ll","Ma","Me","Ia","Gw","Sa"]},day_names:["Sul","Llun","Mawrth","Mercher","Iau","Gwener","Sadwrn"],days:{today:"Heddiw",today_lower:"heddiw",tomorrow:"Yfory",yesterday:"Ddoe"},formats:{date_at_time:"%b %-d %k:%M",default:"%Y-%m-%d",full:"%-d %b %Y %k:%M",full_with_weekday:"%a, %-d %b %Y %k:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a, %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},datetime:{distance_in_words:{about_x_hours:{many:"tua %{count} awr",one:"tua awr",other:"tua %{count} awr",two:"tua %{count} awr"},about_x_months:{many:"tua %{count} mis",one:"tua mis",other:"tua %{count} mis",two:"tua %{count} mis"},about_x_years:{many:"tua %{count} mlynedd",one:"tua blwyddyn",other:"tua %{count} mlynedd",two:"tua %{count} mlynedd"},almost_x_years:{many:"bron i %{count} mlynedd",one:"bron i flwyddyn",other:"bron i %{count} mlynedd",two:"bron i %{count} mlynedd"},half_a_minute:"hanner munud",less_than_x_minutes:{many:"llai na %{count} munud",one:"llai na munud",other:"llai na %{count} munud",two:"llai na %{count} munud"},less_than_x_seconds:{many:"llai na %{count} eiliad",one:"llai nag eiliad",other:"llai na %{count} eiliad",two:"llai na %{count} eiliad"},over_x_years:{many:"dros %{count} mlynedd",one:"dros flwyddyn",other:"dros %{count} mlynedd",two:"dros %{count} mlynedd"},x_days:{many:"%{count} diwrnod",one:"1 diwrnod",other:"%{count} diwrnod",two:"%{count} diwrnod"},x_minutes:{many:"%{count} munud",one:"1 munud",other:"%{count} munud",two:"%{count} munud"},x_months:{many:"%{count} mis",one:"1 mis",other:"%{count} mis",two:"%{count} mis"},x_seconds:{many:"%{count} eiliad",one:"1 eiliad",other:"%{count} eiliad",two:"%{count} eiliad"}},prompts:{day:"Diwrnod",hour:"Awr",minute:"Munud",month:"Mis",second:"Eiliad",year:"Blwyddyn"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Biliwn",million:"Miliwn",quadrillion:"Cwadriliwn",thousand:"Mil",trillion:"Triliwn",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{many:"Beit",one:"Beit",other:"Beit",two:"Beit"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", a ",or:{last_word_connector:", neu ",two_words_connector:" neu "},two_words_connector:" a ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Cymuned Cymorth",cisco_netacad_facebook_description:"Ewch i’n tudalen Networking Academy ar Facebook i gael cymorth neu cysylltwch â’ch addysgwr.",community_support_description:"Rhyngweithio â’ch cyd-fyfyrwyr a chael cymorth ganddynt.",community_support_forums:"Fforymau Cymunedau Cymorth",contact_support:"Cysylltwch â'r adran Gymorth",contact_support_sub_text:"Cael cymorth gyda materion sydd wedi’u cyfyngu gan amser.",curriculum_assessment_errata:"Cwricwlwm/Asesiad Errata",curriculum_assessment_errata_description:'Gweld gwallau cwricwlwm ac asesiad sydd wedi’u riportio yn barod. Chwilio am "errata."',global_support_desk:"NetAcad Cymorth",global_support_desk_description:"Ein ASC yw eich llinell gyntaf o gymorth, ac maen nhw’n gallu eich rhoi chi mewn cysylltiad â’r Ddesg Gymorth Gyffredinol ar gyfer materion sy’n gofyn am gymorth ychwanegol.",networking_academy_description:"Gweld atebion Cisco i’r cwestiynau mwyaf cyffredin.",networking_academy_faqs:"Cwestiynau Cyffredin Networking Academy",support_desk_livechat:"Sgwrs Fyw Desg Gymorth"}},time:{am:"am",count_hours_ago:{many:"%{count} awr yn ôl",one:"1 awr yn ôl",other:"%{count} awr yn ôl",two:"%{count} awr yn ôl"},count_minutes_ago:{many:"%{count} munud yn ôl",one:"1 munud yn ôl",other:"%{count} munud yn ôl",two:"%{count} munud yn ôl"},due_date:"%{date} erbyn %{time}",event:"%{date} am %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"llai na munud yn ôl",pm:"pm",ranges:{different_days:"%{start_date_and_time} i %{end_date_and_time}",same_day:"%{date} rhwng %{start_time} a %{end_time}",times:"%{start_time} i %{end_time}"},with_ago:"%{time} yn ôl"}},da:{date:{abbr_day_names:["søn","man","tirs","onsd","tors","fre","lør"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],datepicker:{column_headings:["sø","ma","ti",true,"to","fr","lø"]},day_names:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],days:{today:"I dag",today_lower:"I dag",tomorrow:"I morgen",yesterday:"I går"},formats:{date_at_time:"%b %-d kl. %k:%M",default:"%Y-%m-%d",full:"%-d. %b %Y %k.%M",full_with_weekday:"%a den %-d. %b %Y %k.%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%-d. %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a den %-d. %b %Y",short:"%-d. %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},datetime:{distance_in_words:{about_x_hours:{one:"cirka 1 time",other:"cirka %{count} timer"},about_x_months:{one:"cirka 1 måned",other:"cirka %{count} måneder"},about_x_years:{one:"cirka 1 år",other:"cirka %{count} år"},almost_x_years:{one:"næsten 1 år",other:"næsten %{count} år"},half_a_minute:"et halvt minut",less_than_x_minutes:{one:"mindre end et minut",other:"mindre end %{count} minutter"},less_than_x_seconds:{one:"mindre end 1 sekund",other:"mindre end %{count} sekunder"},over_x_years:{one:"over 1 år",other:"over %{count} år"},x_days:{one:"1 dag",other:"%{count} dage"},x_minutes:{one:"1 minut",other:"%{count} minutter"},x_months:{one:"1 måned",other:"%{count} måneder"},x_seconds:{one:"1 sekund",other:"%{count} sekunder"}},prompts:{day:"Dag",hour:"Time",minute:"Minut",month:"Måned",second:"Sekunder",year:"År"}},number:{currency:{format:{delimiter:".",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:".",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milliard",million:"Million",quadrillion:"Kvadrillion",thousand:"Tusind",trillion:"Billion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", og ",or:{last_word_connector:", eller ",two_words_connector:" eller "},two_words_connector:" og ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Gå ind på vores Networking Academy Facebookside for community-support eller kontakt din instruktør",community_support_description:"Interager med og få hjælp fra dine medstuderende.",community_support_forums:"Fora til Community Support",contact_support:"Kontakt support",contact_support_sub_text:"Få hjælp med tidskritiske problemer",curriculum_assessment_errata:"Curriculum/bedømmelse fejlliste",curriculum_assessment_errata_description:'Vis allerede indberettede fejl i bedømmelse og curricula. Søg efter "fejlliste".',global_support_desk:"NetAcad Support",global_support_desk_description:"Vores ASC'er (centre til akademisk succes) er det første led til din support og kan sætte dig i forbindelse med vores globale support for problemer, der kræver yderligere assistance.",networking_academy_description:"Vis Cisco-svar til de oftest stillede spørgsmål.",networking_academy_faqs:"Networking Academy FAQ",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"For 1 time siden",other:"%{count} timer siden"},count_minutes_ago:{one:"For 1 minut siden",other:"For %{count} minutter siden"},due_date:"%{date} før %{time}",event:"%{date} kl. %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k.%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"for mindre en et minut siden",pm:"pm",ranges:{different_days:"%{start_date_and_time} til %{end_date_and_time}",same_day:"%{date} fra %{start_time} til %{end_time}",times:"%{start_time} til %{end_time}"},with_ago:"for %{time} siden"}},"da-x-k12":{date:{abbr_day_names:["søn","man","tirs","onsd","tors","fre","lør"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],datepicker:{column_headings:["sø","ma","ti","on","to","fr","lø"]},day_names:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],days:{today:"I dag",today_lower:"I dag",tomorrow:"I morgen",yesterday:"I går"},formats:{date_at_time:"%b %-d kl. %k:%M",default:"%Y-%m-%d",full:"%-d. %b %Y %k.%M",full_with_weekday:"%a den %-d. %b %Y %k.%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%-d. %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a den %-d. %b %Y",short:"%-d. %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},datetime:{distance_in_words:{about_x_hours:{one:"cirka 1 time",other:"cirka %{count} timer"},about_x_months:{one:"cirka 1 måned",other:"cirka %{count} måneder"},about_x_years:{one:"cirka 1 år",other:"cirka %{count} år"},almost_x_years:{one:"næsten 1 år",other:"næsten %{count} år"},half_a_minute:"et halvt minut",less_than_x_minutes:{one:"mindre end et minut",other:"mindre end %{count} minutter"},less_than_x_seconds:{one:"mindre end 1 sekund",other:"mindre end %{count} sekunder"},over_x_years:{one:"over 1 år",other:"over %{count} år"},x_days:{one:"1 dag",other:"%{count} dage"},x_minutes:{one:"1 minut",other:"%{count} minutter"},x_months:{one:"1 måned",other:"%{count} måneder"},x_seconds:{one:"1 sekund",other:"%{count} sekunder"}},prompts:{day:"Dag",hour:"Time",minute:"Minut",month:"Måned",second:"Sekunder",year:"År"}},number:{currency:{format:{delimiter:",",format:"%u%n",separator:",",unit:"$"}},format:{delimiter:",",separator:","},human:{decimal_units:{format:"%n %u",units:{billion:"Milliard",million:"Million",quadrillion:"Kvadrillion",thousand:"Tusind",trillion:"Billion"}},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:", og",or:{last_word_connector:", eller",two_words_connector:"eller"},two_words_connector:"og",words_connector:","},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Gå ind på vores Networking Academy Facebookside for community-support eller kontakt din instruktør",community_support_description:"Interager med og få hjælp fra dine medelever.",community_support_forums:"Fora til Community Support",contact_support:"Kontakt support",contact_support_sub_text:"Få hjælp med tidskritiske problemer",curriculum_assessment_errata:"Curriculum/bedømmelse fejlliste",curriculum_assessment_errata_description:'Vis allerede indberettede fejl i bedømmelse og curricula. Søg efter "fejlliste".',global_support_desk:"NetAcad Support",global_support_desk_description:"Vores ASC'er (centre til akademisk succes) er det første led til din support og kan sætte dig i forbindelse med vores globale support for problemer, der kræver yderligere assistance.",networking_academy_description:"Vis Cisco-svar til de oftest stillede spørgsmål.",networking_academy_faqs:"Networking Academy FAQ",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"For 1 time siden",other:"%{count} timer siden"},count_minutes_ago:{one:"For 1 minut siden",other:"For %{count} minutter siden"},due_date:"%{date} før %{time}",event:"%{date} kl. %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k.%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"for mindre en et minut siden",pm:"pm",ranges:{different_days:"%{start_date_and_time} til %{end_date_and_time}",same_day:"%{date} fra %{start_time} til %{end_time}",times:"%{start_time} til %{end_time}"},with_ago:"for %{time} siden"}},de:{date:{abbr_day_names:["So","Mo","Di","Mi","Do","Fr","Sa"],abbr_month_names:[null,"Jan","Feb","März","Apr","Mai","Jun","Jul","Aug","Sept","Okt","Nov","Dez"],datepicker:{column_headings:["So","Mo","Di","Mi","Do","Fr","Sa"]},day_names:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],days:{today:"Heute",today_lower:"heute",tomorrow:"Morgen",yesterday:"Gestern"},formats:{date_at_time:"%-d %b um %k:%M",default:"%d/%m/%Y",full:"%-d. %b %Y %k:%M",full_with_weekday:"%a., %-d. %b %Y %k:%M",long:"%-d %B, %Y",long_with_weekday:"%A, %-d %B",medium:"%-d. %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a., %-d. %b %Y",short:"%-d. %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},datetime:{distance_in_words:{about_x_hours:{one:"etwa 1 Stunde",other:"etwa %{count} Stunden"},about_x_months:{one:"etwa 1 Monat",other:"etwa %{count} Monate"},about_x_years:{one:"etwa 1 Jahr",other:"etwa %{count} Jahre"},almost_x_years:{one:"fast 1 Jahr",other:"fast %{count} Jahre"},half_a_minute:"eine halbe Minute",less_than_x_minutes:{one:"weniger als 1 Minute",other:"weniger als %{count} Minuten"},less_than_x_seconds:{one:"weniger als 1 Sekunde",other:"weniger als %{count} Sekunden"},over_x_years:{one:"mehr als 1 Jahr",other:"mehr als %{count} Jahre"},x_days:{one:"1 Tag",other:"%{count} Tage"},x_minutes:{one:"1 Minute",other:"%{count} Minuten"},x_months:{one:"1 Monat",other:"%{count} Monate"},x_seconds:{one:"1 Sekunde",other:"%{count} Sekunden"}},prompts:{day:"Tag",hour:"Stunde",minute:"Minute",month:"Monat",second:"Sekunden",year:"Jahr"}},number:{currency:{format:{delimiter:".",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:".",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milliarde",million:"Million",quadrillion:"Billiarde",thousand:"Tausend",trillion:"Billion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", und ",or:{last_word_connector:", oder ",two_words_connector:" oder "},two_words_connector:"und ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Für Support von unserer Community besuchen Sie bitte unsere Networking Academy auf Facebook, oder wenden Sie sich an Ihren Dozenten.",community_support_description:"Mit der Community interagieren und Hilfe erhalten",community_support_forums:"Community-Support-Foren",contact_support:"Support kontaktieren",contact_support_sub_text:"Hilfestellung bei zeitkritischen Problemen erhalten",curriculum_assessment_errata:"Lehrplan-/Leistungstestfehlerverzeichnis",curriculum_assessment_errata_description:"Bereits gemeldete Leistungstest- und Lehrplanfehler anzeigen. Nach „Fehlerverzeichnis“ suchen",global_support_desk:"NetAcad Support",global_support_desk_description:"Unsere ASCs sind Ihre ersten Support-Ansprechpartner. Zudem können sie Sie mit unserem Global Support Desk bzgl. Problemen verbinden, die zusätzliche Hilfe erfordern.",networking_academy_description:"Schauen Sie sich die Antworten von Cisco zu den am häufigsten gestellten Fragen an.",networking_academy_faqs:"Häufig gestellte Fragen zur Networking Academy",support_desk_livechat:"Supportdesk-Livechat"}},time:{am:"vormittags",count_hours_ago:{one:"vor 1 Stunde",other:"vor %{count} Stunden"},count_minutes_ago:{one:"vor 1 Minute",other:"vor %{count} Minuten"},due_date:"%{date} bis %{time}",event:"am %{date} um %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"vor weniger als einer Minute",pm:"nachmittags",ranges:{different_days:"%{start_date_and_time} bis %{end_date_and_time}",same_day:"Am %{date} von %{start_time} bis %{end_time}",times:"%{start_time} bis %{end_time}"},with_ago:"vor %{time}"}},el:{date:{abbr_day_names:[""],abbr_month_names:[null,"Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],datepicker:{column_headings:["Κυρ","Δε","Τρ","Τε","Πέ","Πα","Σάβ"]},day_names:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],days:{today:"Σήμερα",today_lower:"σήμερα",tomorrow:"Αύριο",yesterday:"Χτες"},formats:{date_at_time:"%b %-d at %l:%M%P",default:"%Y-%m-%d",full:"%b %-d, %Y %-l:%M%P",full_with_weekday:"%a %b %-d, %Y %-l:%M%P",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%b %-d, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %b %-d, %Y",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[""]},datetime:{distance_in_words:{about_x_hours:{one:"περίπου μια ώρα",other:"περίπου %{count} ώρες"},about_x_months:{one:"περίπου 1 μήνας",other:"περίπου %{count} μήνες"},about_x_years:{one:"περίπου 1 έτος",other:"περίπου %{count} έτη"},almost_x_years:{one:"σχεδόν 1 έτος",other:"σχεδόν %{count} έτη"},half_a_minute:"μισό λεπτό",less_than_x_minutes:{one:"λιγότερο από ένα λεπτό",other:"λιγότερο από %{count} λεπτά"},less_than_x_seconds:{one:"λιγότερο από 1 δευτερόλεπτο",other:"λιγότερο από %{count} δευτερόλεπτα"},over_x_years:{one:"πάνω από 1 έτος",other:"πάνω από %{count} έτη"},x_days:{one:"1 ημέρα",other:"%{count} ημέρες"},x_minutes:{one:"1 λεπτό",other:"%{count} λεπτά"},x_months:{one:"1 μήνας",other:"%{count} μήνες"},x_seconds:{one:"1 δευτερόλεπτο",other:"%{count} δευτερόλεπτα"}},prompts:{day:"Ημέρα",hour:"Ώρα",minute:"Λεπτό",month:"Μήνας",second:"Δευτερόλεπτα",year:"Έτος"}},number:{currency:{format:{delimiter:",",format:"%u%n",separator:".",unit:"$"}},format:{delimiter:",",separator:"."},human:{decimal_units:{format:"%n %u",units:{billion:"Δισεκατομμύριο",million:"Εκατομμύριο",quadrillion:"Τετράκις εκατομμύριο",thousand:"Χιλιάδα",trillion:"Τρισεκατομμύριο"}},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},gb:"GB",kb:"KB",mb:"MB",tb:"Πρός"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:", και",or:{last_word_connector:", ή",two_words_connector:"ή"},two_words_connector:"και",words_connector:","},help_menu:{cisco_netacad_facebook:"Κοινότητα Υποστήριξης",cisco_netacad_facebook_description:"Παρακαλώ επισκεφθείτε τη σελίδα του Ακαδημαϊκού μας Δικτύου στο Facebook για υποστήριξη της κοινότητας ή επικοινωνήστε με τον εκπαιδευτή σας.",community_support_description:"Αλληλεπιδράστε και λάβετε βοήθεια από τους ομοτίμους σας.",community_support_forums:"Forum Υποστήριξης της Κοινότητας",contact_support:"Επικοινωνία με την Υποστήριξη",contact_support_sub_text:"Λάβετε βοήθεια για επείγοντα ζητήματα.",curriculum_assessment_errata:"Τυπογραφικά λάθη στο Βιογραφικού/Αξιολόγησης",curriculum_assessment_errata_description:'<mrk mid="4147" mtype="seg">Προβολή ήδη αναφερθέντων τυπογραφικών λαθών σε αξιολογήσεις και βιογραφικά.</mrk> <mrk mid="4148" mtype="seg">Αναζήτηση για «τυπογραφικά λάθη».</mrk>',global_support_desk_description:"Τα Κέντρα Ακαδημαϊκής Επιτυχίας μας (ASC) είναι η πρώτη γραμμή υποστήριξης και μπορείτε να σας συνδέσουν με την Υπηρεσία Υποστήριξης για Όλο τον Κόσμο για ζητήματα για τα οποία απαιτείται περαιτέρω βοήθεια.",networking_academy_description:"Προβολή απαντήσεων της Cisco στις πιο συχνές ερωτήσεις.",networking_academy_faqs:"Συχνές Ερωτήσεις του Ακαδημαϊκού Δικτύου",support_desk_livechat:"Ζωντανή Συζήτηση με την Υπηρεσία Υποστήριξης"}},time:{am:"π.μ.",count_hours_ago:{one:"1 ώρα πριν",other:"%{count} ώρες πριν"},count_minutes_ago:{one:"1 λεπτό πριν",other:"%{count} λεπτά πριν"},due_date:"%{date} έως τις %{time}",event:"%{date} στις %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%l:%M%P",tiny_on_the_hour:"%l%P"},less_than_a_minute_ago:"λιγότερο από ένα λεπτό πριν",pm:"μ.μ.",ranges:{different_days:"%{start_date_and_time} έως %{end_date_and_time}",same_day:"%{date} από %{start_time} έως %{end_time}"},with_ago:"πρίν από %{time}"}},"en-AU":{date:{abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datepicker:{column_headings:["Su","Mo","Tu","We","Th","Fr","Sa"]},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days:{today:"Today",today_lower:"today",tomorrow:"Tomorrow",yesterday:"Yesterday"},formats:{date_at_time:"%b %-d at %k:%M",default:"%d/%m/%Y",full:"%b %-d, %Y %-k:%M",full_with_weekday:"%a %b %-d, %Y %-k:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%b %-d, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %b %-d, %Y",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"]},datetime:{distance_in_words:{about_x_hours:{one:"about 1 hour",other:"about %{count} hours"},about_x_months:{one:"about 1 month",other:"about %{count} months"},about_x_years:{one:"about 1 year",other:"about %{count} years"},almost_x_years:{one:"almost 1 year",other:"almost %{count} years"},half_a_minute:"half a minute",less_than_x_minutes:{one:"less than a minute",other:"less than %{count} minutes"},less_than_x_seconds:{one:"less than 1 second",other:"less than %{count} seconds"},over_x_years:{one:"over 1 year",other:"over %{count} years"},x_days:{one:"1 day",other:"%{count} days"},x_minutes:{one:"1 minute",other:"%{count} minutes"},x_months:{one:"1 month",other:"%{count} months"},x_seconds:{one:"1 second",other:"%{count} seconds"}},prompts:{day:"Day",hour:"Hour",minute:"Minute",month:"Month",second:"Seconds",year:"Year"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Billion",million:"Million",quadrillion:"Quadrillion",thousand:"Thousand",trillion:"Trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", and ",or:{last_word_connector:", or ",two_words_connector:" or "},two_words_connector:" and ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Please visit our Networking Academy Facebook page for community support or contact your instructor.",community_support_description:"Interact with and get assistance from your peers.",community_support_forums:"Community Support Forums",contact_support:"Contact Support",contact_support_sub_text:"Get assistance with time-sensitive issues.",curriculum_assessment_errata:"Curriculum/Assessment Errata",curriculum_assessment_errata_description:'View already reported assessment and curricula errors. Search for "errata."',global_support_desk:"NetAcad Support",global_support_desk_description:"Our ASCs are your first line of support and can connect you with our Global Support Desk for issues that require additional assistance.",networking_academy_description:"View Cisco answers to the most commonly asked questions.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"1 hour ago",other:"%{count} hours ago"},count_minutes_ago:{one:"1 minute ago",other:"%{count} minutes ago"},due_date:"%{date} by %{time}",event:"%{date} at %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:" %d %B, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"less than a minute ago",pm:"pm",ranges:{different_days:"%{start_date_and_time} to %{end_date_and_time}",same_day:"%{date} from %{start_time} to %{end_time}",times:"%{start_time} to %{end_time}"},with_ago:"%{time} ago"}},"en-AU-x-unimelb":{date:{abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datepicker:{column_headings:["Su","Mo","Tu","We","Th","Fr","Sa"]},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days:{today:"Today",today_lower:"today",tomorrow:"Tomorrow",yesterday:"Yesterday"},formats:{date_at_time:"%b %-d at %k:%M",default:"%d/%m/%Y",full:"%b %-d, %Y %-k:%M",full_with_weekday:"%a %b %-d, %Y %-k:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%b %-d, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %b %-d, %Y",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"]},datetime:{distance_in_words:{about_x_hours:{one:"about 1 hour",other:"about %{count} hours"},about_x_months:{one:"about 1 month",other:"about %{count} months"},about_x_years:{one:"about 1 year",other:"about %{count} years"},almost_x_years:{one:"almost 1 year",other:"almost %{count} years"},half_a_minute:"half a minute",less_than_x_minutes:{one:"less than a minute",other:"less than %{count} minutes"},less_than_x_seconds:{one:"less than 1 second",other:"less than %{count} seconds"},over_x_years:{one:"over 1 year",other:"over %{count} years"},x_days:{one:"1 day",other:"%{count} days"},x_minutes:{one:"1 minute",other:"%{count} minutes"},x_months:{one:"1 month",other:"%{count} months"},x_seconds:{one:"1 second",other:"%{count} seconds"}},prompts:{day:"Day",hour:"Hour",minute:"Minute",month:"Month",second:"Seconds",year:"Year"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Billion",million:"Million",quadrillion:"Quadrillion",thousand:"Thousand",trillion:"Trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", and ",or:{last_word_connector:", or ",two_words_connector:" or "},two_words_connector:" and ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Please visit our Networking Academy Facebook page for community support or contact your instructor.",community_support_description:"Interact with and get assistance from your peers.",community_support_forums:"Community Support Forums",contact_support:"Contact Support",contact_support_sub_text:"Get assistance with time-sensitive issues.",curriculum_assessment_errata:"Curriculum/Assessment Errata",curriculum_assessment_errata_description:'View already reported assessment and curricula errors. Search for "errata."',global_support_desk:"NetAcad Support",global_support_desk_description:"Our ASCs are your first line of support and can connect you with our Global Support Desk for issues that require additional assistance.",networking_academy_description:"View Cisco answers to the most commonly asked questions.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"1 hour ago",other:"%{count} hours ago"},count_minutes_ago:{one:"1 minute ago",other:"%{count} minutes ago"},due_date:"%{date} by %{time}",event:"%{date} at %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:" %d %B, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"less than a minute ago",pm:"pm",ranges:{different_days:"%{start_date_and_time} to %{end_date_and_time}",same_day:"%{date} from %{start_time} to %{end_time}",times:"%{start_time} to %{end_time}"},with_ago:"%{time} ago"}},"en-CA":{date:{abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datepicker:{column_headings:["Su","Mo","Tu","We","Th","Fr","Sa"]},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days:{today:"Today",today_lower:"today",tomorrow:"Tomorrow",yesterday:"Yesterday"},formats:{date_at_time:"%b %-d at %l:%M%P",default:"%Y-%m-%d",full:"%b %-d, %Y %-l:%M%P",full_with_weekday:"%a %b %-d, %Y %-l:%M%P",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%b %-d, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %b %-d, %Y",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"]},datetime:{distance_in_words:{about_x_hours:{one:"about 1 hour",other:"about %{count} hours"},about_x_months:{one:"about 1 month",other:"about %{count} months"},about_x_years:{one:"about 1 year",other:"about %{count} years"},almost_x_years:{one:"almost 1 year",other:"almost %{count} years"},half_a_minute:"half a minute",less_than_x_minutes:{one:"less than a minute",other:"less than %{count} minutes"},less_than_x_seconds:{one:"less than 1 second",other:"less than %{count} seconds"},over_x_years:{one:"over 1 year",other:"over %{count} years"},x_days:{one:"1 day",other:"%{count} days"},x_minutes:{one:"1 minute",other:"%{count} minutes"},x_months:{one:"1 month",other:"%{count} months"},x_seconds:{one:"1 second",other:"%{count} seconds"}},prompts:{day:"Day",hour:"Hour",minute:"Minute",month:"Month",second:"Seconds",year:"Year"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Billion",million:"Million",quadrillion:"Quadrillion",thousand:"Thousand",trillion:"Trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", and ",or:{last_word_connector:", or ",two_words_connector:" or "},two_words_connector:" and ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Please visit our Networking Academy Facebook page for community support or contact your instructor.",community_support_description:"Interact with and get assistance from your peers.",community_support_forums:"Community Support Forums",contact_support:"Contact Support",contact_support_sub_text:"Get assistance with time-sensitive issues.",curriculum_assessment_errata:"Curriculum/Assessment Errata",curriculum_assessment_errata_description:'View already reported assessment and curricula errors. Search for "errata."',global_support_desk:"NetAcad Support",global_support_desk_description:"Our ASCs are your first line of support, and can connect you with our Global Support Desk for issues that require additional assistance.",networking_academy_description:"View Cisco answers to the most commonly asked questions.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"1 hour ago",other:"%{count} hours ago"},count_minutes_ago:{one:"1 minute ago",other:"%{count} minutes ago"},due_date:"%{date} by %{time}",event:"%{date} at %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%l:%M%P",tiny_on_the_hour:"%l%P"},less_than_a_minute_ago:"less than a minute ago",pm:"pm",ranges:{different_days:"%{start_date_and_time} to %{end_date_and_time}",same_day:"%{date} from %{start_time} to %{end_time}",times:"%{start_time} to %{end_time}"},with_ago:"%{time} ago"}},"en-GB":{date:{abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datepicker:{column_headings:["Su","Mo","Tu","We","Th","Fr","Sa"]},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days:{today:"Today",today_lower:"today",tomorrow:"Tomorrow",yesterday:"Yesterday"},formats:{date_at_time:"%-d %b at %k:%M",default:"%d-%m-%Y",full:"%-d %b %Y %-k:%M",full_with_weekday:"%a, %-d %b %Y %-k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a, %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"]},datetime:{distance_in_words:{about_x_hours:{one:"about 1 hour",other:"about %{count} hours"},about_x_months:{one:"about 1 month",other:"about %{count} months"},about_x_years:{one:"about 1 year",other:"about %{count} years"},almost_x_years:{one:"almost 1 year",other:"almost %{count} years"},half_a_minute:"half a minute",less_than_x_minutes:{one:"less than a minute",other:"less than %{count} minutes"},less_than_x_seconds:{one:"less than 1 second",other:"less than %{count} seconds"},over_x_years:{one:"over 1 year",other:"over %{count} years"},x_days:{one:"1 day",other:"%{count} days"},x_minutes:{one:"1 minute",other:"%{count} minutes"},x_months:{one:"1 month",other:"%{count} months"},x_seconds:{one:"1 second",other:"%{count} seconds"}},prompts:{day:"Day",hour:"Hour",minute:"Minute",month:"Month",second:"Seconds",year:"Year"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Billion",million:"Million",quadrillion:"Quadrillion",thousand:"Thousand",trillion:"Trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", and ",or:{last_word_connector:", or ",two_words_connector:" or "},two_words_connector:" and ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Please visit our Networking Academy Facebook page for community support or contact your instructor.",community_support_description:"Interact with and get assistance from your peers.",community_support_forums:"Community Support Forums",contact_support:"Contact support",contact_support_sub_text:"Get assistance with time-sensitive issues.",curriculum_assessment_errata:"Curriculum/Assessment errata",curriculum_assessment_errata_description:'View already reported assessment and curricula errors. Search for "errata."',global_support_desk:"NetAcad Support",global_support_desk_description:"Our ASCs are your first line of support and can connect you with our Global Support Desk for issues that require additional assistance.",networking_academy_description:"View Cisco answers to the most commonly asked questions.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"1 hour ago",other:"%{count} hours ago"},count_minutes_ago:{one:"1 minute ago",other:"%{count} minutes ago"},due_date:"%{date} by %{time}",event:"%{date} at %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:" %d %B, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"less than a minute ago",pm:"pm",ranges:{different_days:"%{start_date_and_time} to %{end_date_and_time}",same_day:"%{date} from %{start_time} to %{end_time}",times:"%{start_time} to %{end_time}"},with_ago:"%{time} ago"}},"en-GB-x-lbs":{date:{abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datepicker:{column_headings:["Su","Mo","Tu","We","Th","Fr","Sa"]},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days:{today:"Today",today_lower:"today",tomorrow:"Tomorrow",yesterday:"Yesterday"},formats:{date_at_time:"%-d %b at %k:%M",default:"%Y-%m-%d",full:"%-d %b %Y %-k:%M",full_with_weekday:"%a, %-d %b %Y %-k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a, %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"]},datetime:{distance_in_words:{about_x_hours:{one:"about 1 hour",other:"about %{count} hours"},about_x_months:{one:"about 1 month",other:"about %{count} months"},about_x_years:{one:"about 1 year",other:"about %{count} years"},almost_x_years:{one:"almost 1 year",other:"almost %{count} years"},half_a_minute:"half a minute",less_than_x_minutes:{one:"less than a minute",other:"less than %{count} minutes"},less_than_x_seconds:{one:"less than 1 second",other:"less than %{count} seconds"},over_x_years:{one:"over 1 year",other:"over %{count} years"},x_days:{one:"1 day",other:"%{count} days"},x_minutes:{one:"1 minute",other:"%{count} minutes"},x_months:{one:"1 month",other:"%{count} months"},x_seconds:{one:"1 second",other:"%{count} seconds"}},prompts:{day:"Day",hour:"Hour",minute:"Minute",month:"Month",second:"Seconds",year:"Year"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Billion",million:"Million",quadrillion:"Quadrillion",thousand:"Thousand",trillion:"Trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", and ",or:{last_word_connector:", or ",two_words_connector:" or "},two_words_connector:" and ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Please visit our Networking Academy Facebook page for community support or contact your instructor.",community_support_description:"Interact with and get assistance from your peers.",community_support_forums:"Community Support Forums",contact_support:"Contact support",contact_support_sub_text:"Get assistance with time-sensitive issues.",curriculum_assessment_errata:"Curriculum/Assessment errata",curriculum_assessment_errata_description:'View already reported assessment and curricula errors. Search for "errata."',global_support_desk:"NetAcad Support",global_support_desk_description:"Our ASCs are your first line of support and can connect you with our Global Support Desk for issues that require additional assistance.",networking_academy_description:"View Cisco answers to the most commonly asked questions.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"1 hour ago",other:"%{count} hours ago"},count_minutes_ago:{one:"1 minute ago",other:"%{count} minutes ago"},due_date:"%{date} by %{time}",event:"%{date} at %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:" %d %B, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"less than a minute ago",pm:"pm",ranges:{different_days:"%{start_date_and_time} to %{end_date_and_time}",same_day:"%{date} from %{start_time} to %{end_time}",times:"%{start_time} to %{end_time}"},with_ago:"%{time} ago"}},"en-GB-x-ukhe":{date:{abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datepicker:{column_headings:["Su","Mo","Tu","We","Th","Fr","Sa"]},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days:{today:"Today",today_lower:"today",tomorrow:"Tomorrow",yesterday:"Yesterday"},formats:{date_at_time:"%-d %b at %k:%M",default:"%d-%m-%Y",full:"%-d %b %Y %-k:%M",full_with_weekday:"%a, %-d %b %Y %-k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a, %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"]},datetime:{distance_in_words:{about_x_hours:{one:"about 1 hour",other:"about %{count} hours"},about_x_months:{one:"about 1 month",other:"about %{count} months"},about_x_years:{one:"about 1 year",other:"about %{count} years"},almost_x_years:{one:"almost 1 year",other:"almost %{count} years"},half_a_minute:"half a minute",less_than_x_minutes:{one:"less than a minute",other:"less than %{count} minutes"},less_than_x_seconds:{one:"less than 1 second",other:"less than %{count} seconds"},over_x_years:{one:"over 1 year",other:"over %{count} years"},x_days:{one:"1 day",other:"%{count} days"},x_minutes:{one:"1 minute",other:"%{count} minutes"},x_months:{one:"1 month",other:"%{count} months"},x_seconds:{one:"1 second",other:"%{count} seconds"}},prompts:{day:"Day",hour:"Hour",minute:"Minute",month:"Month",second:"Seconds",year:"Year"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Billion",million:"Million",quadrillion:"Quadrillion",thousand:"Thousand",trillion:"Trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", and ",or:{last_word_connector:", or ",two_words_connector:" or "},two_words_connector:" and ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Please visit our Networking Academy Facebook page for community support or contact your instructor.",community_support_description:"Interact with and get assistance from your peers.",community_support_forums:"Community Support Forums",contact_support:"Contact support",contact_support_sub_text:"Get assistance with time-sensitive issues.",curriculum_assessment_errata:"Curriculum/Assessment errata",curriculum_assessment_errata_description:'View already reported assessment and curricula errors. Search for "errata."',global_support_desk:"NetAcad Support",global_support_desk_description:"Our ASCs are your first line of support and can connect you with our Global Support Desk for issues that require additional assistance.",networking_academy_description:"View Cisco answers to the most commonly asked questions.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"1 hour ago",other:"%{count} hours ago"},count_minutes_ago:{one:"1 minute ago",other:"%{count} minutes ago"},due_date:"%{date} by %{time}",event:"%{date} at %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:" %d %B, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"less than a minute ago",pm:"pm",ranges:{different_days:"%{start_date_and_time} to %{end_date_and_time}",same_day:"%{date} from %{start_time} to %{end_time}",times:"%{start_time} to %{end_time}"},with_ago:"%{time} ago"}},es:{date:{abbr_day_names:["dom","lun","mar","mie","jue","vie","sab"],abbr_month_names:[null,"ene","feb","mar","abr","mayo","jun","jul","ago","sep","oct","nov","dic"],datepicker:{column_headings:["do","lu","ma","mi","ju","vi","sa"]},day_names:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],days:{today:"Hoy",today_lower:"hoy",tomorrow:"Mañana",yesterday:"Ayer"},formats:{date_at_time:"%-d %b en %k:%M",default:"%d/%m/%Y",full:"%-d de %b de %Y %k:%M",full_with_weekday:"%a %-d de %b de %Y %k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d de %b de %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d de %b de %Y",short:"%-d de %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},datetime:{distance_in_words:{about_x_hours:{one:"casi 1 hora",other:"casi %{count} horas"},about_x_months:{one:"casi 1 mes",other:"casi %{count} meses"},about_x_years:{one:"casi 1 año",other:"casi %{count} años"},almost_x_years:{one:"casi 1 año",other:"casi %{count} años"},half_a_minute:"medio minuto",less_than_x_minutes:{one:"menos de un minuto",other:"menos de %{count} minutos"},less_than_x_seconds:{one:"menos de 1 segundo",other:"menos de %{count} segundos"},over_x_years:{one:"más de 1 año",other:"más de %{count} años"},x_days:{one:"1 día",other:"%{count} días"},x_minutes:{one:"1 minuto",other:"%{count} minutos"},x_months:{one:"1 mes",other:"%{count} meses"},x_seconds:{one:"1 segundo",other:"%{count} segundos"}},prompts:{day:"Día",hour:"Hora",minute:"Minuto",month:"Mes",second:"Segundos",year:"Año"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Mil millones",million:"Millón",quadrillion:"Mil billones",thousand:"Mil",trillion:"Billón",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", y ",or:{last_word_connector:", o ",two_words_connector:" o "},two_words_connector:" y ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Comunidad de soporte",cisco_netacad_facebook_description:"Por favor visite nuestra página de Facebook de Networking Academy para la comunidad de soporte o contacte a su instructor.",community_support_description:"Interactuar y obtener ayuda de sus compañeros.",community_support_forums:"Foros de asistencia de la comunidad",contact_support:"Póngase en contacto con Asistencia técnica",contact_support_sub_text:"Obtenga asistencia para cuestiones urgentes",curriculum_assessment_errata:"Erratas de currículum/evaluación",curriculum_assessment_errata_description:'Ver errores de currículum/evaluación ya comunicados. Buscar "erratas".',global_support_desk:"Soporte de NetAcad",global_support_desk_description:"Nuestros ASCs son la primera medida de soporte, y puede conectarle con nuestro Servicio de soporte global para problemas que requieren asistencia  adicional.",networking_academy_description:"Ver las respuestas de Cisco a las preguntas más frecuentes.",networking_academy_faqs:"Preguntas más frecuentes de Networking Academy",support_desk_livechat:"Chat en directo con el servicio de ayuda"}},time:{am:"am",count_hours_ago:{one:"hace 1 hora",other:"hace %{count} horas"},count_minutes_ago:{one:"hace 1 minuto",other:"hace %{count} minutos"},due_date:"%{date} hasta %{time}",event:"%{date} en %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"hace menos de un minuto",pm:"pm",ranges:{different_days:"%{start_date_and_time} hasta %{end_date_and_time}",same_day:"%{date} desde %{start_time} hasta %{end_time}",times:"%{start_time} hasta %{end_time}"},with_ago:"hace %{time}"}},"es-AR":{number:{currency:{format:{delimiter:".",separator:","}},format:{delimiter:".",separator:","}}},"es-CL":{number:{currency:{format:{delimiter:".",separator:","}},format:{delimiter:".",separator:","}}},"es-CO":{number:{currency:{format:{delimiter:".",separator:","}},format:{delimiter:".",separator:","}}},"es-CR":{number:{currency:{format:{delimiter:".",separator:","}},format:{delimiter:".",separator:","}}},"es-EC":{number:{currency:{format:{delimiter:".",separator:","}},format:{delimiter:".",separator:","}}},"es-PE":{number:{currency:{format:{delimiter:".",separator:","}},format:{delimiter:".",separator:","}}},"es-PY":{number:{currency:{format:{delimiter:".",separator:","}},format:{delimiter:".",separator:","}}},fa:{date:{abbr_day_names:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],abbr_month_names:[null,"ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوییه","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"],datepicker:{column_headings:["ی","د","س","چ","پ","ج","ش"]},day_names:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],days:{today:"امروز",today_lower:"امروز",tomorrow:"فردا",yesterday:"دیروز"},formats:{date_at_time:"%b %-d در %l:%M%P",default:"%Y-%m-%d",full:"%b %-d, %Y %-l:%M%P",full_with_weekday:"%a %b %-d, %Y %-l:%M%P",long:"%B %d, %Y",long_with_weekday:"%A, %B %-d",medium:"%b %-d, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %b %-d, %Y",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوییه","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"]},datetime:{distance_in_words:{about_x_hours:{one:"حدود %{count} ساعت",other:"حدود %{count} ساعت"},about_x_months:{one:"حدود %{count} ماه",other:"حدود %{count} ماه"},about_x_years:{one:"حدود %{count} سال",other:"حدود %{count} سال"},almost_x_years:{one:"تقریبا %{count} سال",other:"تقریبا %{count} سال"},half_a_minute:"نیم دقیقه",less_than_x_minutes:{one:"کمتر از %{count} دقیقه",other:"کمتر از %{count} دقیقه"},less_than_x_seconds:{one:"کمتر از %{count} ثانیه",other:"کمتر از %{count} ثانیه"},over_x_years:{one:"بیش از %{count} سال",other:"بیش از %{count} سال"},x_days:{one:"%{count} روز",other:"%{count} روز"},x_minutes:{one:"%{count} دقیقه",other:"%{count} دقیقه"},x_months:{one:"%{count} ماه",other:"%{count} ماه"},x_seconds:{one:"%{count} ثانیه",other:"%{count} ثانیه"}},prompts:{day:"روز",hour:"ساعت",minute:"دقیقه",month:"ماه",second:"ثانیه",year:"سال"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"میلیارد",million:"میلیون",quadrillion:"کادريليون",thousand:"هزار",trillion:"تریلیون"}},format:{precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"بایت",other:"بایت"},eb:"EB",gb:"گیگابایت",kb:"کیلوبایت",mb:"مگابایت",pb:"PB",tb:"ترابایت"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:"، و",or:{last_word_connector:"، یا",two_words_connector:"یا"},two_words_connector:"و",words_connector:"، "},help_menu:{cisco_netacad_facebook:"انجمن پشتیبانی",cisco_netacad_facebook_description:"لطفا از صفحه Networking Academy Facebook ما برای پشتیبانی انجمن بازدید کنید یا با استاد خود تماس بگیرید.",community_support_description:"با همکلاسی های خود تعامل داشته باشید و از آنها کمک بگیرید.",community_support_forums:"نشست های پشتیبانی انجمن",contact_support:"تماس با پشتیبانی",contact_support_sub_text:"درباره مسائل حساس به زمان کمک بگیرید.",curriculum_assessment_errata:"اشتباه های تایپی برنامه درسی/ارزیابی",curriculum_assessment_errata_description:"خطاهای گزارش شده ارزیابی و برنامه درسی را مشاهده کنید. «اشتباه های تایپی» را جستجو کنید.",global_support_desk:"پشتیبانی NetAcad",global_support_desk_description:"ASCهای ما اولین خط پشتیبان شما هستند و درباره مشکلاتی که به کمک بیشتر نیاز دارند، می توانند شما را به میز پشتیبان سراسری  متصل سازند.",networking_academy_description:"پاسخ های سیسکو به پرسش های متداول را مشاهده کنید.",networking_academy_faqs:"پرسش های متداول آکادمی شبکه سازی",support_desk_livechat:"گفتگوی زنده میز پشتیبانی"}},time:{am:"قبل از ظهر",count_hours_ago:{one:"%{count} ساعت قبل",other:"%{count} ساعت قبل"},count_minutes_ago:{one:"%{count} دقیقه قبل",other:"%{count} دقیقه قبل"},due_date:"%{date} بر اساس %{time}",event:"%{date} در %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%l:%M%P",tiny_on_the_hour:"%l%P"},less_than_a_minute_ago:"کمتر از یک دقیقه پیش",pm:"بعد از ظهر",ranges:{different_days:"%{start_date_and_time} تا %{end_date_and_time}",same_day:"%{date} از %{start_time} تا %{end_time}",times:"%{start_time} تا %{end_time}"},with_ago:"%{time} قبل"}},fr:{date:{abbr_day_names:["dim","lun","mar","mer","jeu","ven","sam"],abbr_month_names:[null,"Janv","Févr","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"],datepicker:{column_headings:["dim","lun","mar","mer","jeu","ven","sam"]},day_names:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],days:{today:"Aujourd’hui",today_lower:"aujourd’hui",tomorrow:"Demain",yesterday:"Hier"},formats:{date_at_time:"%-d %b à %k:%M",default:"%d/%m/%Y",full:"%-d %b %Y %k:%M",full_with_weekday:"%a %-d %b %Y %k:%M",long:"le %-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]},datetime:{distance_in_words:{about_x_hours:{one:"1 heure environ",other:"%{count} heures environ"},about_x_months:{one:"1 mois environ",other:"%{count} mois environ"},about_x_years:{one:"1 an environ",other:"%{count} ans environ"},almost_x_years:{one:"presque 1 an",other:"presque %{count} ans"},half_a_minute:"30 secondes",less_than_x_minutes:{one:"moins d’1 minute",other:"moins de %{count} minutes"},less_than_x_seconds:{one:"moins d’1 seconde",other:"moins de %{count} secondes"},over_x_years:{one:"plus d’1 an",other:"plus de %{count} ans"},x_days:{one:"1 jour",other:"%{count} jours"},x_minutes:{one:"1 minute",other:"%{count} minutes"},x_months:{one:"1 mois",other:"%{count} mois"},x_seconds:{one:"1 seconde",other:"%{count} secondes"}},prompts:{day:"Jour",hour:"Heure",minute:"Minute",month:"Mois",second:"Secondes",year:"Année"}},number:{currency:{format:{delimiter:" ",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:" ",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milliard",million:"Million",quadrillion:"Quadrillion",thousand:"Mille",trillion:"Trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Octet",other:"Octets"},eb:"EB",gb:"Go",kb:"Ko",mb:"Mo",pb:"PB",tb:"To"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:" et ",or:{last_word_connector:" ou ",two_words_connector:" ou "},two_words_connector:" et ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Communauté de soutien",cisco_netacad_facebook_description:"Veuillez visiter notre page Networking Academy sur Facebook pour un support communautaire, ou contactez votre instructeur.",community_support_description:"Interagissez avec les autres et demandez-leur de l’aide.",community_support_forums:"Forums d’assistance de la communauté",contact_support:"Contacter l’assistance technique",contact_support_sub_text:"Obtenir de l’aide pour les problèmes urgents",curriculum_assessment_errata:"Errata dans le programme ou l’évaluation",curriculum_assessment_errata_description:"Consultez les erreurs déjà signalées pour le programme et l’évaluation. Recherchez « errata ».",global_support_desk:"Assistance NetAcad",global_support_desk_description:"Nos ASC sont votre première ligne d'assistance, et peuvent vous mettre en contact avec notre bureau d'assistance globale pour des problèmes qui nécessiteraient de l'assistance supplémentaire.",networking_academy_description:"Consultez les réponses de Cisco aux questions les plus fréquentes.",networking_academy_faqs:"FAQ Networking Academy",support_desk_livechat:"Dialogue en direct avec le service d’assistance"}},time:{am:"matin",count_hours_ago:{one:"il y a 1 heure",other:"il y a %{count} heures"},count_minutes_ago:{one:"il y a 1 minute",other:"il y a %{count} minutes"},due_date:"%{date} à %{time}",event:"%{date} à %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:" %d %B, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"il y a moins d’1 minute",pm:"après-midi",ranges:{different_days:"%{start_date_and_time} jusqu’au %{end_date_and_time}",same_day:"%{date} de %{start_time} à %{end_time}",times:"%{start_time} à %{end_time}"},with_ago:"il y a %{time}"}},"fr-CA":{date:{abbr_day_names:["dim","lun","mar","mer","jeu","ven","sam"],abbr_month_names:[null,"Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aou","Sep","Oct","Nov","Déc"],datepicker:{column_headings:["dim","lun","mar","mer","jeu","ven","sam"]},day_names:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],days:{today:"Aujourd’hui",today_lower:"aujourd’hui",tomorrow:"Demain",yesterday:"Hier"},formats:{date_at_time:"%-d %b à %k:%M",default:"%d/%m/%Y",full:"%-d %b %Y %k:%M",full_with_weekday:"%a %-d %b %Y %k:%M",long:"le %-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]},datetime:{distance_in_words:{about_x_hours:{one:"1 heure environ",other:"%{count} heures environ"},about_x_months:{one:"1 mois environ",other:"%{count} mois environ"},about_x_years:{one:"1 an environ",other:"%{count} ans environ"},almost_x_years:{one:"presque 1 an",other:"presque %{count} ans"},half_a_minute:"30 secondes",less_than_x_minutes:{one:"moins d’une minute",other:"moins de %{count} minutes"},less_than_x_seconds:{one:"moins d’une seconde",other:"moins de %{count} secondes"},over_x_years:{one:"plus d’un an",other:"plus de %{count} ans"},x_days:{one:"1 jour",other:"%{count} jours"},x_minutes:{one:"1 minute",other:"%{count} minutes"},x_months:{one:"1 mois",other:"%{count} mois"},x_seconds:{one:"1 seconde",other:"%{count} secondes"}},prompts:{day:"Jour",hour:"Heure",minute:"Minute",month:"Mois",second:"Secondes",year:"Année"}},number:{currency:{format:{delimiter:" ",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:" ",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milliard",million:"Million",quadrillion:"Quadrillion",thousand:"Mille",trillion:"Trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Octet",other:"Octets"},eb:"EB",gb:"Go",kb:"Ko",mb:"Mo",pb:"PB",tb:"To"}}},percentage:{format:{delimiter:"",format:"%n %"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", et ",or:{last_word_connector:", ou ",two_words_connector:" ou "},two_words_connector:" et ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Communauté de soutien",cisco_netacad_facebook_description:"Veuillez visiter notre page Networking Academy sur Facebook pour un soutien communautaire, ou contactez votre instructeur.",community_support_description:"Interagissez avec les autres et demandez-leur de l’aide.",community_support_forums:"Forums d’assistance de la communauté",contact_support:"Contacter l’assistance technique",contact_support_sub_text:"Obtenir de l’aide pour les problèmes urgents",curriculum_assessment_errata:"Errata dans le programme ou l’évaluation",curriculum_assessment_errata_description:"Consultez les erreurs déjà signalées pour le programme et l’évaluation. Recherchez « errata ».",global_support_desk:"Assistance NetAcad",global_support_desk_description:"Nos ASC sont votre première ligne d'assistance, et peuvent vous mettre en contact avec notre bureau d'assistance mondial pour des problèmes qui nécessiteraient de l'assistance supplémentaire.",networking_academy_description:"Consultez les réponses de Cisco aux questions les plus fréquentes.",networking_academy_faqs:"FAQ Networking Academy",support_desk_livechat:"Dialogue en direct avec le service d’assistance"}},time:{am:"matin",count_hours_ago:{one:"il y a 1 heure",other:"il y a %{count} heures"},count_minutes_ago:{one:"il y a 1 minute",other:"il y a %{count} minutes"},due_date:"%{date} à %{time}",event:"%{date} sur %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"il y a moins d’une minute",pm:"pm",ranges:{different_days:"%{start_date_and_time} à %{end_date_and_time}",same_day:"%{date} de %{start_time} à %{end_time}",times:"%{start_time} à %{end_time}"},with_ago:"il y a %{time}"}},he:{date:{abbr_day_names:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],abbr_month_names:[null,"ינו׳","פבר׳","מרץ","אפר׳","מאי","יונ","יול","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],datepicker:{column_headings:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"]},day_names:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],days:{today:"היום",today_lower:"היום",tomorrow:"מחר",yesterday:"אתמול"},formats:{date_at_time:"%b %-d ב %k:%M",default:"%Y-%m-%d",full:"%b %-d, %Y %-k:%M",full_with_weekday:"%a %b %-d, %Y %-k:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%b %-d, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %b %-d, %Y",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]},datetime:{distance_in_words:{about_x_hours:{many:"בערך %{count} שעות",one:"בערך שעה",other:"בערך %{count} שעות",two:"בערך %{count} שעות"},about_x_months:{many:"בערך %{count} חודשים",one:"בערך חודש",other:"בערך %{count} חודשים",two:"בערך %{count} חודשים"},about_x_years:{many:"בערך %{count} שנים",one:"בערך שנה",other:"בערך %{count} שנים",two:"בערך %{count} שנים"},almost_x_years:{many:"כמעט %{count} שנים",one:"כמעט שנה",other:"כמעט %{count} שנים",two:"כמעט %{count} שנים"},half_a_minute:"חצי דקה",less_than_x_minutes:{many:"פחות מ%{count} דקות",one:"פחות מדקה",other:"פחות מ%{count} דקות",two:"פחות מ%{count} דקות"},less_than_x_seconds:{many:"פחות מ%{count} שניות",one:"פחות משנייה",other:"פחות מ%{count} שניות",two:"פחות מ%{count} שניות"},over_x_years:{many:"מעל %{count} שנים",one:"יותר משנה",other:"מעל %{count} שנים",two:"מעל %{count} שנים"},x_days:{many:"%{count} ימים",one:"יום",other:"%{count} ימים",two:"%{count} ימים"},x_minutes:{many:"%{count} דקות",one:"דקה",other:"%{count} דקות",two:"%{count} דקות"},x_months:{many:"%{count} חודשים",one:"חודש",other:"%{count} חודשים",two:"%{count} חודשים"},x_seconds:{many:"%{count} שניות",one:"שנייה",other:"%{count} שניות",two:"%{count} שניות"}},prompts:{day:"יום",hour:"שעה",minute:"דקה",month:"חודש",second:"שניות",year:"שנה"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"ביליון",million:"מיליון",quadrillion:"קוודריליון",thousand:"אלפים",trillion:"טריליון"}},format:{precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{many:"בתים",one:"בייט",other:"בתים",two:"בתים"},gb:"ג'יגהבייט",kb:"קילובייט",mb:"מגהבייט",tb:"טרהבייט"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:", ו",or:{last_word_connector:", או",two_words_connector:"או"},two_words_connector:"ו",words_connector:","},help_menu:{cisco_netacad_facebook:"תמיכה בקהילה",cisco_netacad_facebook_description:"בבקשה לבקר בדף ה Networking Academy Facebook שלנו לקבלת תמיכת הקהילה או יצירת קשר עם המנחה שלך",community_support_description:"תקשר/י עם וקבל/י עזרה מעמיתיך.",community_support_forums:"פורומים לתמיכת קהילה",contact_support:"התקשר/י לסיוע הטכני",contact_support_sub_text:"קבלת סיוע בנושאים עם רגישות לזמן.",curriculum_assessment_errata:"טעויות כתיב בהערכה/תכנית לימוד",curriculum_assessment_errata_description:'הצגת הערכות ותכניות לימוד שכבר דווחו לגביהן טעויות כתיב. יש לחפש אחר הערך "טעויות".',global_support_desk:"דסק התמיכה העולמי",global_support_desk_description:"מרכז התמיכה האפליקטיבית שלנו הנו קו התמיכה הראשון, ויכול לחבר אותך עם דסק התמיכה העולמית לגבי נושאים המחייבים סיוע נוסף.",networking_academy_description:"הצגת תשובות CISCO לשאלות נפוצות",networking_academy_faqs:"שאלות ותשובות של ה Networking Academy ",support_desk_livechat:"צ'אט חי עם דסק התמיכה"}},time:{am:"לפני הצהרים",count_hours_ago:{many:"לפני %{count} שעות",one:"לפני שעה",other:"לפני %{count} שעות",two:"לפני %{count} שעות"},count_minutes_ago:{many:"לפני %{count} דקות",one:"לפני דקה",other:"לפני %{count} דקות",two:"לפני %{count} דקות"},due_date:"%{date} לפי %{time}",event:"%{date} בשעה %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"לפני פחות מדקה",pm:"אחר הצהריים",ranges:{different_days:"%{start_date_and_time} עד %{end_date_and_time}",same_day:"%{date} מ %{start_time} עד %{end_time}",times:"%{start_time} עד %{end_time}"},with_ago:"לפני %{time}"}},ht:{date:{abbr_day_names:["dim","len","mad","mèk","jed","van","sam"],abbr_month_names:[null,"jan","fev","mas","avr","me","jen","jiy","out","sep","okt","nov","des"],datepicker:{column_headings:["di","le","ma","mè","je","va","sa"]},day_names:["dimanch","lendi","madi","mèkredi","jedi","vandredi","samdi"],days:{today:"Jodi a",today_lower:"jodi a",tomorrow:"Demen",yesterday:"Yè"},formats:{date_at_time:"%b %-d at %H:%M",default:"%m/%d/%Y",full:"%-d %b %Y %k:%M",full_with_weekday:"%a %-d %b %Y %k:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"janvye","fevriye","mas","avril","me","jen","jiyè","out","septanm","oktòb","novanm","desanm"]},datetime:{distance_in_words:{about_x_hours:{one:"apeprè 1 èdtan",other:"apeprè %{count} èdtan"},about_x_months:{one:"apeprè 1 mwa",other:"apeprè %{count} mwa"},about_x_years:{one:"apeprè 1 lane",other:"apeprè %{count} lane"},almost_x_years:{one:"prèske 1 lane",other:"prèske %{count} lane"},half_a_minute:"trant segond",less_than_x_minutes:{one:"mwens ke yon minit",other:"mwens ke %{count} minit"},less_than_x_seconds:{one:"mwens ke 1 segond",other:"mwens ke %{count} segond"},over_x_years:{one:"plis pase 1 lane",other:"plis pase %{count} lane"},x_days:{one:"1 jou",other:"%{count} jou"},x_minutes:{one:"1 minit",other:"%{count} minit"},x_months:{one:"1 mwa",other:"%{count} mwa"},x_seconds:{one:"1 segond",other:"%{count} segond"}},prompts:{day:"Jou",hour:"Èdtan",minute:"Minit",month:"Mwa",second:"Segond",year:"Ane"}},number:{currency:{format:{delimiter:" ",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:" ",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milya",million:"Milyon",quadrillion:"Kwadrilyon",thousand:"Mil",trillion:"Trilyon",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Oktè",other:"Oktè"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", epi ",or:{last_word_connector:", oswa ",two_words_connector:" oswa "},two_words_connector:" epi ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Sipò Kominote",cisco_netacad_facebook_description:"Tanpri vizite paj Facebook nou Networking Academy pou sipò kominotè oswa kontakte enstriktè ou a.",community_support_description:"Fè echanj epi jwenn èd nan men kamarad ou yo.",community_support_forums:"Fowòm Sipò Kominote",contact_support:"Kontakte Sipò",contact_support_sub_text:"Jwenn èd a kesyon ki sansib a tan an.",curriculum_assessment_errata:"Kourikouloun/Evalyssyon Errata",curriculum_assessment_errata_description:'Afiche erè evalyasyon ak erè pwogram ki siyale deja. Chèche "errata."',global_support_desk:"NetAcad Sipò",global_support_desk_description:"ASC nou yo se premye liy sipò ou, e kapab konekte w ak Biwo Sipò Global nou an pou pwoblèm ki bezwen èd adisyonèl.",networking_academy_description:"Afiche repons Cisco a kesyon yo poze souvan yo.",networking_academy_faqs:"FAQ Networking Academy",support_desk_livechat:"Chat An Dirèk Biwo Sipò"}},time:{am:"am",count_hours_ago:{one:"1 èdtan de sa",other:"%{count} èdtan de sa"},count_minutes_ago:{one:"1 minit de sa",other:"%{count} minit de sa"},due_date:"%{date} pa %{time}",event:"%{date} a %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"mwens ke yon minit de sa",pm:"pm",ranges:{different_days:"%{start_date_and_time} rive %{end_date_and_time}",same_day:"%{date} de %{start_time} a %{end_time}",times:"%{start_time} a %{end_time}"},with_ago:"%{time} de sa"}},hu:{date:{abbr_day_names:["V","H","K","Sze","Cs","P","Szo"],abbr_month_names:[null,"jan","feb","márc","ápr","máj","jún","júl","aug","szept","okt","nov","dec"],datepicker:{column_headings:["V","H","K","Sze","Cs","P","Szo"]},day_names:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],days:{today:"Ma",today_lower:"ma",tomorrow:"Holnap",yesterday:"Tegnap"},formats:{date_at_time:"%b %-d, %H:%M",default:"%Y. %m. %d.",full:" %Y %b %-d, %H:%M",full_with_weekday:"%Y %b %-d, %a, %H:%M",long:"%Y. %B %-d",long_with_weekday:"%A, %B %-d",medium:"%Y. %b %-d",medium_month:"%Y. %b",medium_with_weekday:"%Y. %b %-d, %a ",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"]},datetime:{distance_in_words:{about_x_hours:{one:"körülbelül 1 óra",other:"körülbelül %{count} óra"},about_x_months:{one:"körülbelül 1 hónap",other:"körülbelül %{count} hónap"},about_x_years:{one:"körülbelül 1 év",other:"körülbelül %{count} év"},almost_x_years:{one:"közel 1 év",other:"közel %{count} év"},half_a_minute:"fél perc",less_than_x_minutes:{one:"kevesebb mint egy perc",other:"kevesebb mint %{count} perc"},less_than_x_seconds:{one:"kevesebb mint egy másodperc",other:"kevesebb mint %{count} másodperc"},over_x_years:{one:"több mint 1 éve",other:"több mint %{count} éve"},x_days:{one:"1 nap",other:"%{count} nap"},x_minutes:{one:"1 perc",other:"%{count} perc"},x_months:{one:"1 hónap",other:"%{count} hónap"},x_seconds:{one:"1 másodperc",other:"%{count} másodperc"}},prompts:{day:"Nap",hour:"Óra",minute:"Perc",month:"Hó",second:"Másodperc",year:"Év"}},number:{currency:{format:{delimiter:",",format:"%u%n",separator:".",unit:"Ft"}},format:{delimiter:",",separator:"."},human:{decimal_units:{format:"%n %u",units:{billion:"Milliárd",million:"Millió",quadrillion:"Billiárd",thousand:"Ezer",trillion:"Billió"}},storage_units:{format:"%n %u",units:{byte:{one:"Bájt",other:"Bájt"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:" és ",or:{last_word_connector:", vagy ",two_words_connector:" vagy "},two_words_connector:" és ",words_connector:", "},help_menu:{cisco_netacad_facebook:"A Közösség támogatása",cisco_netacad_facebook_description:"Kérjük, látogassa meg a Networking Academy Facebook-oldalt a közösségi támogatáshoz, vagy lépjen kapcsolatba az oktatójával.",community_support_description:"Lépjen kapcsolatba és kérjen támogatást társaitól.",community_support_forums:"Közösségi Támogató Fórumok",contact_support:"Lépjen kapcsolatba az ügyfélszolgálattal",contact_support_sub_text:"Kérjen támogatást az időérzékeny problémákhoz.",curriculum_assessment_errata:"Tanterv/értékelés hibajegyzék",curriculum_assessment_errata_description:"A már jelzett értékelési és tananyag hibák megtekintése. ",global_support_desk_description:"Az ASC-k az első sorát jelentik a támogatásnak, és össze tudják kötni Önt a Globális Támogatói hálózattal, ha a jelzett probléma további beavatkozást igényel.",networking_academy_description:"Cisco válaszok megtekintése a leggyakrabban feltett kérdésekre.",networking_academy_faqs:"Networking Academy GYIK",support_desk_livechat:"Ügyfélszolgálat élő chat"}},time:{am:"de.",count_hours_ago:{one:"1 órával ezelőtt",other:"%{count} órával ezelőtt"},count_minutes_ago:{one:"1 perccel ezelőtt",other:"%{count} perccel ezelőtt"},due_date:"%{date}  %{time}-ig",event:"%{date},  %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%H:%M ",tiny_on_the_hour:"%H:%M"},less_than_a_minute_ago:"kevesebb mint egy perce",pm:"du.",ranges:{different_days:"%{start_date_and_time}-tól %{end_date_and_time}-ig",same_day:"%{date} %{start_time}-tól %{end_time}-ig",times:"%{start_time}-tól %{end_time}-ig"},with_ago:"%{time} idővel ezelőtt"}},hy:{date:{abbr_day_names:["Կրկ","Երկ","Երք","Չրք","Հնգ","Ուր","Շբթ"],abbr_month_names:[null,"Հնվ","Փտր","Մրտ","Ապր","Մյս","Հնս","Հլս","Օգս","Սպտ","Հկտ","Նմբ","Դկտ"],datepicker:{column_headings:["Կր","Երկ","Երեք","Չոր","Հին","Ուրբ","Շաբ"]},day_names:["Կիրակի","Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","Ուրբաթ","Շաբաթ"],days:{today:"Այսօր",today_lower:"այսօր",tomorrow:"Վաղը",yesterday:"Երեկ"},formats:{date_at_time:"%-d %b ի %k:%M",default:"%d.%m.%Y",full:"%-d %b, %Y %k:%M",full_with_weekday:"%a %-d %b, %Y %k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b, %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"]},datetime:{distance_in_words:{about_x_hours:{one:"մոտ 1 ժամ",other:"մոտ %{count} ժամ"},about_x_months:{one:"մոտ 1 ամիս",other:"մոտ %{count} ամիս"},about_x_years:{one:"մոտ 1 տարի",other:"մոտ %{count} տարի"},almost_x_years:{one:"համարյա 1 տարի",other:"համարյա %{count} տարի"},half_a_minute:"կես րոպե",less_than_x_minutes:{one:"ավելի քիչ, քան 1 րոպե",other:"ավելի քիչ, քան %{count} րոպե"},less_than_x_seconds:{one:" ավելի քիչ, քան 1 վայրկյան ",other:" ավելի քիչ, քան %{count} վայրկյան "},over_x_years:{one:"1 տարուց ավելի",other:"%{count} տարուց ավելի"},x_days:{one:"1 օր",other:"%{count} օր"},x_minutes:{one:"1 րոպե",other:"%{count} րոպե"},x_months:{one:"1 ամիս",other:"%{count} ամիս"},x_seconds:{one:"1 վայրկյան",other:"%{count} վայրկյան"}},prompts:{day:"Օր",hour:"Ժամ",minute:"Րոպե",month:"Ամիս",second:"Վայրկյան",year:"Տարի"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Միլիարդ",million:"Միլիոն",quadrillion:"Կվադրիլիոն",thousand:"Հազար",trillion:"Տրիլիոն"}},format:{precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Բայթ",other:"Բայթեր"},gb:"Գբայթ",kb:"Կբայթ",mb:"Մբայթ",tb:"TB"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:", և",or:{last_word_connector:", կամ",two_words_connector:"կամ"},two_words_connector:"և",words_connector:","},help_menu:{cisco_netacad_facebook:"Օժանդակող օգտատերերի համայնք",cisco_netacad_facebook_description:"Խնդրում ենք այցելել Facebook ցանցային ակադեմիայի մեր էջը օժանդակող ծառայությանը կամ Ձեր դասավանդողին դիմելու համար:",community_support_description:"Փոխգործակցել և օժանդակություն ստանալ ձեր աշխատանքի մասին կարծիք ներկայացնողներից:",community_support_forums:"Օժանդակող օգտատերերի համայնք ֆորումներ",contact_support:"Դիմել սպասարկող ծառայությանը",contact_support_sub_text:"Շտապ հարցերի դեպքում ստանալ անհապաղ օժանդակություն",curriculum_assessment_errata:"Ուսումնական պլանում/գնահատման մեջ վրիպակներ",curriculum_assessment_errata_description:'Դիտել արդեն իսկ զեկուցված գնահատման և ուսումնական պլանի վրիպակները: Որոնել "վրիպակները": ',global_support_desk:"Գլոբալ օժանդակության ծառայություն",global_support_desk_description:"Օժանդակման ծառայության մեր աշխատակիցները  ապահովում են Ձեր առաջնային օժանդակությունը և կարող են միացնել Ձեզ մեր Գլոբալ օժանդակության ծառայության հետ այն հարցերի առնչությամբ, որոնք լրացուցիչ աջակցության կարիք ունեն:  ",networking_academy_description:"Դիտել Cisco պատասխանները ամենից հաճախ տրվող հարցերին: ",networking_academy_faqs:"Ցանցային ակադեմիայի հաճախակի տրվող հարցեր",support_desk_livechat:"Տեխնիկական օժանդակության ծառայության հետ առցանց երկխոսություն"}},time:{am:"am",count_hours_ago:{one:"1 ժամ առաջ",other:"%{count} ժամ առաջ"},count_minutes_ago:{one:"1 րոպե առաջ",other:"%{count} րոպե առաջ"},due_date:"%{date} ըստ %{time}",event:"%{date}, ժամը %{time}-ին",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"ավելի քիչ, քան մեկ րոպե առաջ",pm:"pm",ranges:{different_days:"%{start_date_and_time} մինչև %{end_date_and_time}",same_day:"%{date}՝ %{start_time}-ից մինչև %{end_time}",times:"%{start_time} մինչև %{end_time}"},with_ago:"%{time} առաջ"}},is:{date:{abbr_day_names:["Sun","Mán","Þri","Mið","Fim","Fös","Lau"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"],datepicker:{column_headings:["Sun","Mán","Þri","Mið","Fim","Fös","Lau"]},day_names:["Sunnudagur","Mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur"],days:{today:"Í dag",today_lower:"í dag",tomorrow:"Á morgun",yesterday:"Í gær"},formats:{date_at_time:"%b %-d við %k:%M",default:"%Y-%m-%d",full:"%-d. %b %Y %k:%M",full_with_weekday:"%a %-d. %b %Y %k:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%-d. %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d, %b %Y",short:"%-d. %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"]},datetime:{distance_in_words:{about_x_hours:{one:"um 1 klukkustund",other:"Um %{count} klukkustundir"},about_x_months:{one:"um 1 mánuður",other:"um %{count} mánuðir"},about_x_years:{one:"um 1 ár",other:"um %{count} ár"},almost_x_years:{one:"næstum 1 ár",other:"næstum %{count} ár"},half_a_minute:"hálf mínúta",less_than_x_minutes:{one:"minna en mínúta",other:"minna en %{count} mínútur"},less_than_x_seconds:{one:"minna en 1 sekúnda",other:"minna en %{count} sekúndur"},over_x_years:{one:"meira en 1 ár",other:"meira en %{count} ár"},x_days:{one:"1 dagur",other:"%{count} dagar"},x_minutes:{one:"1 mínúta",other:"%{count} mínútur"},x_months:{one:"1 mánuður",other:"%{count} mánuðir"},x_seconds:{one:"1 sekúnda",other:"%{count} sekúndur"}},prompts:{day:"Dagur",hour:"Klukkustund",minute:"Mínúta",month:"Mánuður",second:"Sekúndur",year:"Ár"}},number:{currency:{format:{delimiter:".",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:".",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milljarður",million:"Milljón",quadrillion:"Kvadrilljón",thousand:"Þúsund",trillion:"Trilljón",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Bæti",other:"Bæti"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", og",or:{last_word_connector:", eða",two_words_connector:"eða"},two_words_connector:"og",words_connector:", "},help_menu:{cisco_netacad_facebook:"Stuðningssamfélag",cisco_netacad_facebook_description:"Heimsæktu Networking Academy Facebook síðuna okkar til að fá aðstoð frá samfélaginu eða hafðu samband við kennarann þinn.",community_support_description:"Hafðu samskipti við jafningja þína og fáðu aðstoð þeirra.",community_support_forums:"Umræðuvettvangar samfélagsins",contact_support:"Hafa samband við aðstoð",contact_support_sub_text:"Fá aðstoð við tímaháð atriði.",curriculum_assessment_errata:"Leiðréttingar á námsskrá/mati",curriculum_assessment_errata_description:'Skoða villur í tilkynntu mati og námsskeiðsskrá. Leitið að "errata".',global_support_desk:"NetAcad Stuðningur",global_support_desk_description:"Aðstoðarfólk okkar getur hjálpað og tengt þig við almennt hjálparborð ef þú þarfnast frekari aðstoðar.",networking_academy_description:"Skoða Cisco svör við algengustu spurningunum.",networking_academy_faqs:"Algengar spurningar í Networking Academy",support_desk_livechat:"Samtal í rauntíma á hjálparborði"}},time:{am:"f.hádegi",count_hours_ago:{one:"Fyrir 1 klukkustund",other:"Fyrir %{count} klukkustundum"},count_minutes_ago:{one:"Fyrir 1 mínútu",other:"Fyrir %{count} mínútum"},due_date:"%{date} af %{time}",event:"%{date} á %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"fyrir tæpri mínútu",pm:"e.hádegi",ranges:{different_days:"%{start_date_and_time} til %{end_date_and_time}",same_day:"%{date} frá %{start_time} til %{end_time}",times:"%{start_time} til %{end_time}"},with_ago:"Fyrir %{time}"}},it:{date:{abbr_day_names:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],abbr_month_names:[null,"gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],datepicker:{column_headings:["Do","Lu","Ma","Me","Gi","Ve","Sa"]},day_names:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],days:{today:"Oggi",today_lower:"oggi",tomorrow:"Domani",yesterday:"Ieri"},formats:{date_at_time:"%-d %b alle %k:%M",default:"%d/%m/%Y",full:"%-d %b, %Y %-k:%M",full_with_weekday:"%a %-d %b, %Y %-k:%M",long:"%-d %B, %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b, %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},datetime:{distance_in_words:{about_x_hours:{one:"circa 1 ora",other:"circa %{count} ore"},about_x_months:{one:"circa 1 mese",other:"circa %{count} mesi"},about_x_years:{one:"circa 1 anno",other:"circa %{count} anni"},almost_x_years:{one:"quasi 1 anno",other:"quasi %{count} anni"},half_a_minute:"trenta secondi",less_than_x_minutes:{one:"meno di un minuto",other:"meno di %{count} minuti"},less_than_x_seconds:{one:"meno di 1 secondo",other:"meno di %{count} secondi"},over_x_years:{one:"oltre 1 anno",other:"oltre %{count} anni"},x_days:{one:"1 giorno",other:"%{count} giorni"},x_minutes:{one:"1 minuto",other:"%{count} minuti"},x_months:{one:"1 mese",other:"%{count} mesi"},x_seconds:{one:"1 secondo",other:"%{count} secondi"}},prompts:{day:"Giorno",hour:"Ora",minute:"Minuto",month:"Mese",second:"Secondi",year:"Anno"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Miliardi",million:"Milioni",quadrillion:"Quadrilioni",thousand:"Migliaia",trillion:"Trilioni",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Byte"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", e ",or:{last_word_connector:", o ",two_words_connector:" oppure "},two_words_connector:" e ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Community di assistenza",cisco_netacad_facebook_description:"Visita la nostra pagina Facebook Networking Academy per l'assistenza dalla community o contatta il tuo istruttore.",community_support_description:"Interagisci e richiedi assistenza ai tuoi colleghi.",community_support_forums:"Forum di assistenza community",contact_support:"Contatta l'assistenza",contact_support_sub_text:"Richiedi assistenza per questioni urgenti.",curriculum_assessment_errata:"Errata corrige curriculum/valutazione",curriculum_assessment_errata_description:'Visualizza gli errori dei curricula e delle valutazioni già segnalati. Cerca "errata corrige".',global_support_desk:"NetAcad Assistenza",global_support_desk_description:"I nostri ASC rappresentano la tua prima fonte di assistenza e per le questioni che richiedono assistenza aggiuntiva puoi connetterti con il nostro servizio di assistenza globale.",networking_academy_description:"Visualizza le risposte Cisco alle domande più frequenti.",networking_academy_faqs:"FAQ Networking Academy",support_desk_livechat:"Chat dal vivo servizio di assistenza"}},time:{am:"del mattino",count_hours_ago:{one:"1 ora fa",other:"%{count} ore fa"},count_minutes_ago:{one:"1 minuto fa",other:"%{count} minuti fa"},due_date:"%{date} entro %{time}",event:"%{date} alle %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"meno di un minuto fa",pm:"del pomeriggio",ranges:{different_days:"%{start_date_and_time} a %{end_date_and_time}",same_day:"%{date} da %{start_time} a %{end_time}",times:"%{start_time} a %{end_time}"},with_ago:"%{time} fa"}},ja:{date:{abbr_day_names:["日","月","火","水","木","金","土"],abbr_month_names:[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datepicker:{column_headings:["日","月","火","水","木","金","土"]},day_names:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],days:{today:"本日",today_lower:"本日",tomorrow:"明日",yesterday:"昨日"},formats:{date_at_time:"%b %-d %l:%M%P",default:"%Y年%m月%d日",full:"%Y年%b%-d日 %k,%M",full_with_weekday:"%a %Y年%b%-d日 %k.%M",long:"%Y %B %-d",long_with_weekday:"%A %B %-d",medium:"%Y年%b%-d日",medium_month:"%Y %b",medium_with_weekday:"%a %Y年%b%-d日",short:"%b%-d日",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a %b %-d",weekday:"%A"},month_names:[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},datetime:{distance_in_words:{about_x_hours:{one:"約 %{count} 時間",other:"約 %{count} 時間"},about_x_months:{one:"約 %{count} か月",other:"約 %{count} か月"},about_x_years:{one:"約 %{count} 年",other:"約 %{count} 年"},almost_x_years:{one:"ほぼ %{count} 年",other:"ほぼ %{count} 年"},half_a_minute:"30 秒",less_than_x_minutes:{one:"%{count} 分未満",other:"%{count} 分未満"},less_than_x_seconds:{one:"%{count} 秒未満",other:"%{count} 秒未満"},over_x_years:{one:"%{count} 年以上",other:"%{count} 年以上"},x_days:{one:"%{count} 日",other:"%{count} 日"},x_minutes:{one:"%{count} 分",other:"%{count} 分"},x_months:{one:"%{count} か月",other:"%{count} か月"},x_seconds:{one:"%{count} 秒",other:"%{count} 秒"}},prompts:{day:"日",hour:"時",minute:"分",month:"月",second:"秒",year:"年"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"10 億",million:"100 万",quadrillion:"1000 兆",thousand:"1000",trillion:"1 兆",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"バイト",other:"バイト"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:"、および",or:{last_word_connector:"、または",two_words_connector:"または"},two_words_connector:"および",words_connector:","},help_menu:{cisco_netacad_facebook:"コミュニティーをサポートする",cisco_netacad_facebook_description:"コミュニティーサポート、またはインストラクターと連絡を取るため、私たちのネットワークアカデミーFacebookページを訪問してください。",community_support_description:"ピアと交流し、支援を得ます。",community_support_forums:"コミュニティ サポート フォーラム",contact_support:"サポートに問い合わせ",contact_support_sub_text:"緊急の問題について問い合わせます。",curriculum_assessment_errata:"カリキュラム/アセスメント正誤表",curriculum_assessment_errata_description:'既に報告されているアセスメントおよびカリキュラムのエラーを表示します。"正誤表" を検索してください。',global_support_desk:"NetAcadサポート",global_support_desk_description:"私たちのASCは、サポートの窓口です。そして、さらにサポートを必要とする問題のためのグローバル・サポートデスクにコネクトします。",networking_academy_description:"最も一般的な質問に対する Cisco の回答を表示します。",networking_academy_faqs:"ネットワーキング アカデミーの FAQ",support_desk_livechat:"サポート デスクのライブ チャット"}},time:{am:"午前",count_hours_ago:{one:"%{count} 時間前",other:"%{count} 時間前"},count_minutes_ago:{one:"%{count} 分前",other:"%{count} 分前"},due_date:"%{date} 終了日 %{time}",event:"%{date} 日  %{time}",formats:{default:"%a %Y %b %d %H:%M:%S %z",long:"%Y %B %d %H:%M",short:"%b %d %H:%M",tiny:"%k.%M",tiny_on_the_hour:"%k.%M"},less_than_a_minute_ago:"1 分前未満",pm:"午後",ranges:{different_days:"%{start_date_and_time} ～ %{end_date_and_time}",same_day:"%{date} の %{start_time} ～ %{end_time}",times:"%{start_time} ～ %{end_time}"},with_ago:"%{time} 前"}},ko:{date:{abbr_day_names:["일","월","화","수","목","금","토"],abbr_month_names:[null,"1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],datepicker:{column_headings:["일","월","화","수","목","금","토"]},day_names:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],days:{today:"오늘",today_lower:"오늘",tomorrow:"내일",yesterday:"어제"},formats:{date_at_time:"%b %-d at %l:%M%P",default:"%Y-%m-%d",full:"%Y.%-m.%-d. %P %l:%M",full_with_weekday:"%Y.%-m.%-d. %a %P %l:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%Y %b%-d일",medium_month:"%b %Y",medium_with_weekday:"%Y %b%-d일 %a",short:"%b%-d일",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},datetime:{distance_in_words:{about_x_hours:{one:"약 %{count}시간",other:"약 %{count}시간"},about_x_months:{one:"약 %{count}개월",other:"약 %{count}개월"},about_x_years:{one:"약 %{count}년",other:"약 %{count}년"},almost_x_years:{one:"거의 %{count}년",other:"거의 %{count}년"},half_a_minute:"30초",less_than_x_minutes:{one:"%{count}분 이내",other:"%{count}분 이내"},less_than_x_seconds:{one:"%{count}초 이내",other:"%{count}초 이내"},over_x_years:{one:"%{count}년 이상",other:"%{count}년 이상"},x_days:{one:"%{count}일",other:"%{count}일"},x_minutes:{one:"%{count}분",other:"%{count}분"},x_months:{one:"%{count}개월",other:"%{count}개월"},x_seconds:{one:"%{count}초",other:"%{count}초"}},prompts:{day:"일",hour:"시",minute:"분",month:"월",second:"초",year:"년"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"₩"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"십억",million:"백만",quadrillion:"사치",thousand:"천",trillion:"일조"}},format:{precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"바이트",other:"바이트"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:", ",or:{last_word_connector:" 또는 ",two_words_connector:" 또는 "},two_words_connector:" 와(과) ",words_connector:", "},help_menu:{cisco_netacad_facebook:"지원 커뮤니티",cisco_netacad_facebook_description:"커뮤니티 지원에 대해서는 Networking Academy Facebook 페이지를 방문하거나 강사에게 문의하십시오.",community_support_description:"동료와 교류하고 도움을 받을 수 있습니다.",community_support_forums:"커뮤니티 사용자 지원 포럼",contact_support:"지원팀에 문의",contact_support_sub_text:"시간이 중요한 이슈에 대해 지원을 받습니다.",curriculum_assessment_errata:"교과 과정/평가 정오표",curriculum_assessment_errata_description:'이미 보고된 평가와 교과 과정 오류를 봅니다. "정오표"를 검색하십시오.',global_support_desk:"NetAcad 지원",global_support_desk_description:"우리의 ASC는 귀하의 첫 번째 지원 라인이며, 귀하를 글로벌 지원 데스크와 연결하여 추가 지원이 필요한 문제를 해결할 수 있습니다.",networking_academy_description:"대부분의 자주 묻는 질문에 대해서는 Cisco의 답변을 보십시오.",networking_academy_faqs:"Networking Academy FAQ",support_desk_livechat:"지원 데스크 라이브 채팅"}},time:{am:"오전",count_hours_ago:{one:"%{count}시간 전",other:"%{count}시간 전"},count_minutes_ago:{one:"%{count}분 전",other:"%{count}분 전"},due_date:"%{date} %{time}까지",event:"%{date} %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%P %l:%M",tiny_on_the_hour:"%l%P"},less_than_a_minute_ago:"1분 전 이내",pm:"오후",ranges:{different_days:"%{start_date_and_time}부터 %{end_date_and_time}까지",same_day:"%{date} %{start_time}부터 %{end_time}까지",times:"%{start_time}부터 %{end_time}까지"},with_ago:"%{time} 전"}},mi:{date:{abbr_day_names:["Rāt","Man","Tūr","Wen","Tāi","Par","Hāt"],abbr_month_names:[null,"Hān","Pēp","Māe","Āpe","Mei","Hun","Hūr","Āku","Hep","Oke","Noe","Tīh"],datepicker:{column_headings:["Rā","Ma","Tū","We","Tā","Pa","Hā"]},day_names:["Rātapu","Mane","Tūrei","Wenerei","Tāite","Paraire","Hātarei"],days:{today:"tēnei rā",today_lower:"i tēnei rā",tomorrow:"apopo",yesterday:"Inanahi"},formats:{date_at_time:"%b %-d i %l:%M%P",default:"%Y-%m-%d",full:"%-d %b, %Y %l:%M%P",full_with_weekday:"%a %-d %b, %Y %l:%M%P",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%-d %b, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b, %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"Hānuere","Pēpuere","Māehe","Āperira","Mei","Hune","Hūrae","Ākuhata","Hepetema","Oketopa","Noema","Tīhema"]},datetime:{distance_in_words:{about_x_hours:{one:"e pā ana ki 1 haora",other:"e pā ana ki %{count} haora"},about_x_months:{one:"e pā ana ki 1 marama",other:"e pā ana ki %{count} marama"},about_x_years:{one:"e pā ana ki 1 tau",other:"e pā ana ki %{count} tau"},almost_x_years:{one:"tata 1 tau",other:"tata %{count} tau"},half_a_minute:"te hawhe meneti",less_than_x_minutes:{one:"iti iho i te 1 meneti",other:"iti iho i te %{count} meneti"},less_than_x_seconds:{one:"iti iho i te 1 hēkona",other:"iti iho i te %{count} hēkona"},over_x_years:{one:"mo 1 tau",other:"mo %{count} tau"},x_days:{one:"1 ra",other:"%{count} ra"},x_minutes:{one:"1 meneti",other:"%{count} meneti"},x_months:{one:"1 marama",other:"%{count} marama"},x_seconds:{one:"1 hēkona",other:"%{count} hēkona"}},prompts:{day:"rā",hour:"haora",minute:"meneti",month:"marama",second:"hēkona",year:"Tau"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"piriona",million:"miriona",quadrillion:"Quadrillion",thousand:"manō",trillion:"trillion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Paita",other:"Ngā Paita"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", me",or:{last_word_connector:", rānei",two_words_connector:"rānei"},two_words_connector:"a",words_connector:", "},help_menu:{cisco_netacad_facebook:"hāpori tautoko",cisco_netacad_facebook_description:"Tēnā koa, haere ki tō tātou whārangi Whatunga Kura Motuhake Pukamata mō te tautoko hapori whakapā atu ki tō kaitohutohu rānei.",community_support_description:"Te taunekeneke ki a whiwhi āwhina i koe mai o hoa.",community_support_forums:"Tautoko Hapori Huinga",contact_support:"Tautoko Whakapā",contact_support_sub_text:"Haere āwhina ki te take wa-tairongo.",curriculum_assessment_errata:"Marautanga / Aromatawai Errata",curriculum_assessment_errata_description:'Korerotia kē Tirohia aromatawai, me te marau hapa. Rapu hoki "errata."',global_support_desk:"NetAcad Tautoko",global_support_desk_description:"Tatou ASCs Ko tō raina tuatahi o te tautoko, a taea e koe te hono ki to tatou Tēpu Tuhi tautoko o te ao mō ngā take e rapua e atu āwhina.",networking_academy_description:"Tirohia Cisco ki te pātai tino ui nuitia.",networking_academy_faqs:"Whatunga Kura Motuhake FAQs",support_desk_livechat:"Tēpu Tuhi tautoko Kōrero Ora"}},time:{am:"am",count_hours_ago:{one:"1 haora i mua",other:"%{count} haora i mua"},count_minutes_ago:{one:"1 meneti i mua",other:"%{count} meneti i mua"},due_date:"%{date} i te %{time}",event:"%{date} i %{time} ",formats:{default:"%a te, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%l:%M%P",tiny_on_the_hour:"%l%P"},less_than_a_minute_ago:"iti iho i te i te meneti i mua",pm:"pm",ranges:{different_days:"%{start_date_and_time} kī %{end_date_and_time}",same_day:"%{date} i %{start_time} ki te %{end_time}",times:"%{start_time} kī %{end_time}"},with_ago:"%{time} i mua"}},nb:{date:{abbr_day_names:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],abbr_month_names:[null,"jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],datepicker:{column_headings:["Sø","Ma","Ti",true,"To","Fr","Lø"]},day_names:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],days:{today:"I dag",today_lower:"i dag",tomorrow:"I morgen",yesterday:"I går"},formats:{date_at_time:"%-d. %b %k:%M",default:"%d.%m.%Y",full:"%-d. %b %Y %k.%M",full_with_weekday:"%a %-d. %b %Y %k.%M",long:"%-d %B %Y",long_with_weekday:"%A %-d. %B",medium:"%-d. %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d. %b %Y",short:"%-d. %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a %-d %b",weekday:"%A"},month_names:[null,"januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},datetime:{distance_in_words:{about_x_hours:{one:"omtrent 1 time",other:"omtrent %{count} timer"},about_x_months:{one:"omtrent 1 måned",other:"omtrent %{count} måneder"},about_x_years:{one:"omtrent 1 år",other:"omtrent %{count} år"},almost_x_years:{one:"nesten 1 år",other:"nesten %{count} år"},half_a_minute:"et halvt minutt",less_than_x_minutes:{one:"under et minutt",other:"under %{count} minutter"},less_than_x_seconds:{one:"under 1 sekund",other:"under %{count} sekunder"},over_x_years:{one:"mer enn 1 år",other:"mer enn %{count} år"},x_days:{one:"1 dag",other:"%{count} dager"},x_minutes:{one:"1 minutt",other:"%{count} minutter"},x_months:{one:"1 måned",other:"%{count} måneder"},x_seconds:{one:"1 sekund",other:"%{count} sekunder"}},prompts:{day:"Dag",hour:"Time",minute:"Minutt",month:"Måned",second:"Sekund",year:"År"}},number:{currency:{format:{delimiter:" ",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:" ",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milliard",million:"Millioner",quadrillion:"Kvadrillion",thousand:"Tusen",trillion:"Trillioner",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"byte",other:"bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", og ",or:{last_word_connector:", eller ",two_words_connector:" eller "},two_words_connector:" og ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Støtte Nettsamfunn",cisco_netacad_facebook_description:"Vennligst besøk vår Facebook-side Networking Academy for nettsamfunnstøtte eller kontakt din instruktør.",community_support_description:"Samhandle med og få hjelp fra dine medstudenter.",community_support_forums:"Felles nettsamfunn-forum",contact_support:"Kontakt brukerstøtte",contact_support_sub_text:"Få hjelp med saker som haster.",curriculum_assessment_errata:"Trykkfeil i læreplan/vurdering",curriculum_assessment_errata_description:'Vis allerede meldt vurderings- og fagplanfeil. Søk etter "errata".',global_support_desk:"NetAcad Støtte",global_support_desk_description:"Våre ASC-er er her for å hjelpe deg og du kan koble deg med vår verdensstøtte-desk for problemer som krever ytterlig assistanse",networking_academy_description:"Vis Cisco sine svar på de vanligst stilte spørsmålene.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"1 time siden",other:"%{count} timer siden"},count_minutes_ago:{one:"1 minutt siden",other:"%{count} minutter siden"},due_date:"%{date} av %{time}",event:"%{date} i %{time}",formats:{default:"%a %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k.%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"under et minutt siden",pm:"pm",ranges:{different_days:"%{start_date_and_time} til %{end_date_and_time}",same_day:"%{date} fra %{start_time} til %{end_time}",times:"%{start_time} til %{end_time}"},with_ago:"%{time} siden"}},"nb-x-k12":{date:{abbr_day_names:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],abbr_month_names:[null,"jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],datepicker:{column_headings:["Sø","Ma","Ti","On","To","Fr","Lø"]},day_names:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],days:{today:"I dag",today_lower:"i dag",tomorrow:"I morgen",yesterday:"I går"},formats:{date_at_time:"%-d. %b %k:%M",default:"%d.%m.%Y",full:"%-d. %b %Y %k.%M",full_with_weekday:"%a %-d. %b %Y %k.%M",long:"%-d %B %Y",long_with_weekday:"%A %-d. %B",medium:"%-d. %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d. %b %Y",short:"%-d. %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a %-d %b",weekday:"%A"},month_names:[null,"januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},datetime:{distance_in_words:{about_x_hours:{one:"omtrent 1 time",other:"omtrent %{count} timer"},about_x_months:{one:"omtrent 1 måned",other:"omtrent %{count} måneder"},about_x_years:{one:"omtrent 1 år",other:"omtrent %{count} år"},almost_x_years:{one:"nesten 1 år",other:"nesten %{count} år"},half_a_minute:"et halvt minutt",less_than_x_minutes:{one:"under et minutt",other:"under %{count} minutter"},less_than_x_seconds:{one:"under 1 sekund",other:"under %{count} sekunder"},over_x_years:{one:"mer enn 1 år",other:"mer enn %{count} år"},x_days:{one:"1 dag",other:"%{count} dager"},x_minutes:{one:"1 minutt",other:"%{count} minutter"},x_months:{one:"1 måned",other:"%{count} måneder"},x_seconds:{one:"1 sekund",other:"%{count} sekunder"}},prompts:{day:"Dag",hour:"Time",minute:"Minutt",month:"Måned",second:"Sekund",year:"År"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milliard",million:"Millioner",quadrillion:"Kvadrillion",thousand:"Tusen",trillion:"Trillioner",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"byte",other:"bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", og",or:{last_word_connector:", eller",two_words_connector:"eller"},two_words_connector:"og",words_connector:","},help_menu:{cisco_netacad_facebook:"Støtte Nettsamfunn",cisco_netacad_facebook_description:"Vennligst besøk vår Facebook-side Networking Academy for nettsamfunnstøtte eller kontakt din instruktør.",community_support_description:"Samhandle med og få hjelp fra dine medelever.",community_support_forums:"Felles nettsamfunn-forum",contact_support:"Kontakt brukerstøtte",contact_support_sub_text:"Få hjelp med saker som haster.",curriculum_assessment_errata:"Trykkfeil i læreplan/vurdering",curriculum_assessment_errata_description:'Vis allerede meldt vurderings- og fagplanfeil. Søk etter "errata".',global_support_desk:"NetAcad Støtte",global_support_desk_description:"Våre ASC-er er her for å hjelpe deg og du kan koble deg med vår verdensstøtte-desk for problemer som krever ytterlig assistanse",networking_academy_description:"Vis Cisco sine svar på de vanligst stilte spørsmålene.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chat"}},time:{am:"am",count_hours_ago:{one:"1 time siden",other:"%{count} timer siden"},count_minutes_ago:{one:"1 minutt siden",other:"%{count} minutter siden"},due_date:"%{date} av %{time}",event:"%{date} i %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k.%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"under et minutt siden",pm:"pm",ranges:{different_days:"%{start_date_and_time} til %{end_date_and_time}",same_day:"%{date} fra %{start_time} til %{end_time}",times:"%{start_time} til %{end_time}"},with_ago:"%{time} siden"}},nl:{date:{abbr_day_names:["zo","ma","di","wo","do","vr","za"],abbr_month_names:[null,"jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],datepicker:{column_headings:["zo","ma","di","wo","do","vr","za"]},day_names:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],days:{today:"Vandaag",today_lower:"vandaag",tomorrow:"Morgen",yesterday:"Gisteren"},formats:{date_at_time:"%b %-d om %k:%M",default:"%d-%m-%Y",full:"%-d %b %Y %k:%M",full_with_weekday:"%a %-d %b %Y %k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},datetime:{distance_in_words:{about_x_hours:{one:"ongeveer 1 uur",other:"ongeveer %{count} uren"},about_x_months:{one:"ongeveer 1 maand",other:"ongeveer %{count} maanden"},about_x_years:{one:"ongeveer 1 jaar",other:"ongeveer %{count} jaren"},almost_x_years:{one:"bijna 1 jaar",other:"bijna %{count} jaren"},half_a_minute:"een halve minuut",less_than_x_minutes:{one:"minder dan 1 minuut",other:"minder dan %{count} minuten"},less_than_x_seconds:{one:"minder dan 1 seconde",other:"minder dan %{count} seconden"},over_x_years:{one:"meer dan 1 jaar",other:"meer dan %{count} jaren"},x_days:{one:"1 dag",other:"%{count} dagen"},x_minutes:{one:"1 minuut",other:"%{count} minuten"},x_months:{one:"ongeveer 1 maand",other:"%{count} maanden"},x_seconds:{one:"1 seconde",other:"%{count} seconden"}},prompts:{day:"Dag",hour:"Uur",minute:"Minuut",month:"Maand",second:"Seconden",year:"Jaar"}},number:{currency:{format:{delimiter:".",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:".",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Miljard",million:"Miljoen",quadrillion:"Quadriljoen",thousand:"Duizend",trillion:"Triljoen",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"kB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:" en ",or:{last_word_connector:", of ",two_words_connector:" of "},two_words_connector:" en ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Ondersteuningsgemeenschap",cisco_netacad_facebook_description:"Bezoek onze Facebookpagina Networking Academy voor gemeenschapsondersteuning of neem contact op met uw docent.",community_support_description:"Communiceren met en hulp krijgen van medecursisten.",community_support_forums:"Community Support Forums",contact_support:"Contact opnemen met ondersteuning",contact_support_sub_text:"Hulp krijgen bij urgente zaken.",curriculum_assessment_errata:"Fouten in curriculums en opdrachten",curriculum_assessment_errata_description:'Reeds gerapporteerde beoordelings- en curriculumfouten weergeven. Zoeken op "errata".',global_support_desk:"NetAcad Ondersteuning",global_support_desk_description:"Onze ASC's zijn je eerste lijn van ondersteuning en kunnen je in verbinding brengen met onze Algemene Helpdesk voor problemen die extra hulp vereisen.",networking_academy_description:"Het weergeven van Cisco-antwoorden op de meest gestelde vragen.",networking_academy_faqs:"Networking Academy-FAQ's",support_desk_livechat:"Helpdesk Live Chat"}},time:{am:"'s ochtends",count_hours_ago:{one:"1 uur geleden",other:"%{count} uur geleden"},count_minutes_ago:{one:"1 minuut geleden",other:"%{count} minuten geleden"},due_date:"%{date} om %{time}",event:"%{date} op %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"minder dan 1 minuut geleden",pm:"'s middags",ranges:{different_days:"%{start_date_and_time} tot %{end_date_and_time}",same_day:"%{date} van %{start_time} tot %{end_time}",times:"%{start_time} tot %{end_time}"},with_ago:"%{time} geleden"}},nn:{date:{abbr_day_names:["sun","mån","tys","ons","tor","fre","laur"],abbr_month_names:[null,"jan","feb","mars","april","mai","juni","juli","aug","sep","okt","nov","des"],datepicker:{column_headings:["sun","mån","tys","ons","tor","fre","laur"]},day_names:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],days:{today:"I dag",today_lower:"i dag",tomorrow:"I morgon",yesterday:"I går"},formats:{date_at_time:"%b %-d %k:%M",default:"%d.%m.%Y",full:"%b %-d, %Y %k:%M",full_with_weekday:"%a %b %-d, %Y %k:%M",long:"%-d %B %Y",long_with_weekday:"%A %-d. %B",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a %-d %b",weekday:"%A"},month_names:[null,"januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},datetime:{distance_in_words:{about_x_hours:{one:"omlag 1 time",other:"omlag %{count} timar"},about_x_months:{one:"omlag 1 månad",other:"omlag %{count} månader"},about_x_years:{one:"omlag 1 år",other:"omlag %{count} år"},almost_x_years:{one:"nesten 1 år",other:"nesten %{count} år"},half_a_minute:"eit halvt minutt",less_than_x_minutes:{one:"mindre enn eit minutt",other:"mindre enn %{count} minutt"},less_than_x_seconds:{one:"mindre enn 1 sekund",other:"mindre enn %{count} sekund"},over_x_years:{one:"meir enn 1 år",other:"meir enn %{count} år"},x_days:{one:"1 dag",other:"%{count} dagar"},x_minutes:{one:"1 minutt",other:"%{count} minutt"},x_months:{one:"1 månad",other:"%{count} månader"},x_seconds:{one:"1 sekund",other:"%{count} sekund"}},prompts:{day:"Dag",hour:"Time",minute:"Minutt",month:"Månad",second:"Sekund",year:"År"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milliard",million:"Million",quadrillion:"Kvadrillion",thousand:"Tusen",trillion:"Trillion"}},format:{precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Byte"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:", og ",or:{last_word_connector:", eller ",two_words_connector:" eller "},two_words_connector:" og ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Støtte og fellesskap",cisco_netacad_facebook_description:"Besøk Facebook-sida vår Networking Academy for støtte, eller kontakt faglæraren din.",community_support_description:"Samhandle med og få hjelp frå fagfellar.",community_support_forums:"Forum for støtte og fellesskap",contact_support:"Kontakt brukarstøtte",contact_support_sub_text:"Få hjelp med hastesaker.",curriculum_assessment_errata:"Feil i læreplan/vurdering",curriculum_assessment_errata_description:'Vis allereie rapporterte feil i vurderingar og læreplan. Søk etter "feil".',global_support_desk:"NetAcad-støtte",global_support_desk_description:"Vår førstelinje er koordinatorar (ASC) som kan hjelpe deg via Global Support Desk når det gjeld problemstillingar som krev ekstra oppfølging.",networking_academy_description:"Sjå svar frå Cisco på dei mest vanlege spørsmåla.",networking_academy_faqs:"Vanlege spørsmål i Networking Academy",support_desk_livechat:"Brukarstøtte direkte"}},time:{am:"am",count_hours_ago:{one:"1 time sidan",other:"%{count} timar sidan"},count_minutes_ago:{one:"1 minutt sidan",other:"%{count} minutt sidan"},due_date:"%{date} innan %{time}",event:"%{date} %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"mindre enn eit minutt sidan",pm:"pm",ranges:{different_days:"%{start_date_and_time} til %{end_date_and_time}",same_day:"%{date} frå %{start_time} til %{end_time}",times:"%{start_time} til %{end_time}"},with_ago:"%{time} sidan"}},pl:{date:{abbr_day_names:["Nd","Pn","Wt","Śr","Cz","Pt","So"],abbr_month_names:[null,"Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paz","Lis","Gru"],datepicker:{column_headings:["Niedz","Pon","Wt","Śar","Czw","Pt","Sob"]},day_names:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],days:{today:"Dzisiaj",today_lower:"dzisiaj",tomorrow:"Jutro",yesterday:"Wczoraj"},formats:{date_at_time:"%-d %b at %k:%M",default:"%d.%m.%Y",full:"%-d %b %Y %k:%M",full_with_weekday:"%a., %-d %b %Y %k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a., %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"]},datetime:{distance_in_words:{about_x_hours:{few:"około %{count} godziny",many:"około %{count} godzin",one:"około 1 godziny",other:"około %{count} godzin"},about_x_months:{few:"około %{count} miesięcy",many:"około %{count} miesięcy",one:"około 1 miesiąca",other:"około %{count} miesięcy"},about_x_years:{few:"około %{count} lata",many:"około %{count} lat",one:"około 1 roku",other:"około %{count} lat"},almost_x_years:{few:"prawie %{count} lata",many:"prawie %{count} lat",one:"prawie 1 rok",other:"prawie %{count} lat"},half_a_minute:"pół minuty",less_than_x_minutes:{few:"mniej niż %{count} minuty",many:"mniej niż %{count} minut",one:"mniej niż minuta",other:"mniej niż %{count} min"},less_than_x_seconds:{few:"mniej niż %{count} sekundy",many:"mniej niż %{count} sekund",one:"mniej niż 1 sekunda",other:"mniej niż %{count} sekund"},over_x_years:{few:"ponad %{count}  lata",many:"ponad %{count}  lat",one:"ponad 1 rok",other:"ponad %{count}  lat"},x_days:{few:"%{count} dni",many:"%{count} dni",one:"1 dzień",other:"%{count} dni"},x_minutes:{few:"%{count} minuty",many:"%{count} minut",one:"1 minuta",other:"%{count} minut"},x_months:{few:"%{count} miesiące",many:"%{count} miesięcy",one:"1 miesiąc",other:"%{count} miesięcy"},x_seconds:{few:" %{count} sekundy",many:" %{count} sekund",one:"1 sekunda",other:" %{count} sekund"}},prompts:{day:"Dzień",hour:"Godzina",minute:"Minuta",month:"Miesiąc",second:"Sekundy",year:"Rok"}},number:{currency:{format:{delimiter:" ",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:" ",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Bilion",million:"Milion",quadrillion:"Kwadrylion",thousand:"Tysiąc",trillion:"Trylion",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{few:"Bajty",many:"Bajtów",one:"Bajt",other:"Bajtów"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:"oraz ",or:{last_word_connector:" lub ",two_words_connector:" lub "},two_words_connector:" i ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Społeczność wspierająca",cisco_netacad_facebook_description:"Proszę odwiedzić naszą stronę  Networking Academy na Facebook'u dla wsparcia społecznego lub skontaktowania się ze swoim instruktorem.",community_support_description:"Komunikuj się z innymi uczestnikami i pytaj ich o pomoc.",community_support_forums:"Forum wsparcia",contact_support:"Skontaktuj się z działem pomocy",contact_support_sub_text:"Zdobądź pomoc w sprawach uwarunkowanych czasowo.",curriculum_assessment_errata:"Wykaz błędów programu/oceniania",curriculum_assessment_errata_description:"Zobacz zgłoszone błędy oceniania i programu. Wyszukaj słowo „errata”.",global_support_desk:"NetAcad Pomoc techniczna",global_support_desk_description:"Nasi ASC są twoją pierwsza linią wsparcia i mogą cię skontaktować z Globalnym biurem obsługi w kwestiach, które wymagają dodatkowej pomocy.",networking_academy_description:"Zobacz odpowiedzi Cisco na najczęściej zadawane pytania.",networking_academy_faqs:"Najczęściej zadawane pytania Networking Academy",support_desk_livechat:"Czat na żywo z działem wsparcia"}},time:{am:"rano",count_hours_ago:{few:"%{count} godziny temu",many:"%{count} godzin temu",one:"1 godzina temu",other:"%{count} godzin temu"},count_minutes_ago:{few:"%{count} minuty temu",many:"%{count} minut temu",one:"1 minuta temu",other:"%{count} minut temu"},due_date:"%{date} do %{time}",event:"%{date} o godzinie %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"mniej niż minutę temu",pm:"po południu",ranges:{different_days:"%{start_date_and_time} do %{end_date_and_time}",same_day:"%{date} od %{start_time} do %{end_time}",times:"%{start_time} do %{end_time}"},with_ago:"%{time} temu"}},pt:{date:{abbr_day_names:["dom","seg","ter","qua","qui","sex","sáb"],abbr_month_names:[null,"jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],datepicker:{column_headings:["do","se","te","qua","qui","se","sa"]},day_names:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],days:{today:"Hoje",today_lower:"hoje",tomorrow:"Amanhã",yesterday:"Ontem"},formats:{date_at_time:"%-d %b em %k:%M",default:"%d/%m/%Y",full:"%-d de %b de %Y %k:%M",full_with_weekday:"%a %-d de %b de %Y %k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d de %b de %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d de %b de %Y",short:"%-d de %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},datetime:{distance_in_words:{about_x_hours:{one:"cerca de 1 hora",other:"cerca de %{count} horas"},about_x_months:{one:"cerca de 1 mês",other:"cerca de %{count} meses"},about_x_years:{one:"cerca de 1 ano",other:"cerca de %{count} anos"},almost_x_years:{one:"quase 1 ano",other:"quase %{count} anos"},half_a_minute:"meio minuto",less_than_x_minutes:{one:"menos de um minuto",other:"menos de %{count} minutos"},less_than_x_seconds:{one:"menos de 1 segundo",other:"menos de %{count} segundos"},over_x_years:{one:"mais de 1 ano",other:"mais de %{count} anos"},x_days:{one:"1 dia",other:"%{count} dias"},x_minutes:{one:"1 minuto",other:"%{count} minutos"},x_months:{one:"1 mês",other:"%{count} meses"},x_seconds:{one:"1 segundo",other:"%{count} segundos"}},prompts:{day:"Dia",hour:"Hora",minute:"Minuto",month:"Mês",second:"Segundos",year:"Ano"}},number:{currency:{format:{delimiter:" ",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:" ",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Mil milhões",million:"Milhões",quadrillion:"Mil biliões",thousand:"Milhares",trillion:"Biliões",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", e ",or:{last_word_connector:", ou ",two_words_connector:" ou "},two_words_connector:" e ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Comunidade de Apoio",cisco_netacad_facebook_description:"Por favor visite a nossa página da Academia em Rede no Facebook para a comunidade de apoio ou contate o seu instrutor.",community_support_description:"Interaja com os seus pares e obtenha ajuda dos mesmos.",community_support_forums:"Fóruns de suporte da comunidade",contact_support:"Contactar Suporte",contact_support_sub_text:"Obter ajuda relacionada com questões urgentes",curriculum_assessment_errata:"Errata de programa/avaliação",curriculum_assessment_errata_description:'Veja erros de avaliação e programa já comunicados. Procure o termo "errata".',global_support_desk:"NetAcad Suporte",global_support_desk_description:"Os nossos AScs são a primeira linha de apoio, e podem ligá-lo com o nosso Ponto de Apoio Global para assuntos que requeiram assistência adicional.",networking_academy_description:"Veja as respostas da Cisco às perguntas mais frequentes.",networking_academy_faqs:"Perguntas frequentes da Networking Academy",support_desk_livechat:"Chat com o serviço de suporte"}},time:{am:"am",count_hours_ago:{one:"1 hora atrás",other:"%{count} horas atrás"},count_minutes_ago:{one:"1 minuto atrás",other:"%{count} minutos atrás"},due_date:"%{date} por %{time}",event:"%{date} em %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"há menos de um minuto",pm:"pm",ranges:{different_days:"%{start_date_and_time} para %{end_date_and_time}",same_day:"%{date} de %{start_time} até %{end_time}",times:"%{start_time} até %{end_time}"},with_ago:"%{time} atrás"}},"pt-BR":{date:{abbr_day_names:["dom","seg","ter","qua","qui","sex","sáb"],abbr_month_names:[null,"jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],datepicker:{column_headings:["dom","seg","ter","qua","qui","sex","sab"]},day_names:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],days:{today:"Hoje",today_lower:"hoje",tomorrow:"Amanhã",yesterday:"Ontem"},formats:{date_at_time:"%-d %b em %k:%M",default:"%d/%m/%Y",full:"%-d de %b de %Y %k:%M",full_with_weekday:"%a %-d de %b de %Y %k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d de %b de %Y",medium_month:"%b %Y",medium_with_weekday:"%a %-d de %b de %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},datetime:{distance_in_words:{about_x_hours:{one:"cerca de 1 hora",other:"cerca de %{count} horas"},about_x_months:{one:"cerca de 1 mês",other:"cerca de %{count} meses"},about_x_years:{one:"cerca de 1 ano",other:"cerca de %{count} anos"},almost_x_years:{one:"quase 1 ano",other:"quase %{count} anos"},half_a_minute:"meio minuto",less_than_x_minutes:{one:"menos de um minuto",other:"menos de %{count} minutos"},less_than_x_seconds:{one:"menos de 1 segundo",other:"menos de %{count} segundos"},over_x_years:{one:"mais de 1 ano",other:"mais de %{count} anos"},x_days:{one:"1 dia",other:"%{count} dias"},x_minutes:{one:"1 minuto",other:"%{count} minutos"},x_months:{one:"1 mês",other:"%{count} meses"},x_seconds:{one:"1 segundo",other:"%{count} segundos"}},prompts:{day:"Dia",hour:"Hora",minute:"Minuto",month:"Mês",second:"Segundos",year:"Ano"}},number:{currency:{format:{delimiter:".",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:".",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Bilhão",million:"Milhão",quadrillion:"Quadrilhão",thousand:"Mil",trillion:"Trilhão",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:" e ",or:{last_word_connector:", ou ",two_words_connector:" ou "},two_words_connector:" e ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Comunidade de Apoio",cisco_netacad_facebook_description:"Por favor, visite a nossa página no Facebook de Networking Academy para apoio da comunidade ou entre em contato com seu instrutor.",community_support_description:"Interaja e obtenha assistência de seus colegas.",community_support_forums:"Fóruns de Suporte à Comunidade",contact_support:"Entrar em contato com o Suporte",contact_support_sub_text:"Obter assistência com problemas de entrega urgente",curriculum_assessment_errata:"Errata do currículo/avaliação",curriculum_assessment_errata_description:'Exibir erros de avaliação e currículo já relatados. Pesquise por "errata".',global_support_desk:"NetAcad Suporte",global_support_desk_description:"Nossos ASCs são a primeira linha de apoio, e podem te conectar com nossa Secretária de Apoio Global para questões que requerem assistência adicional.",networking_academy_description:"Exibir as respostas da Cisco para as perguntas mais comuns.",networking_academy_faqs:"Perguntas frequentes da Networking Academy",support_desk_livechat:"Chat ao vivo do Support Desk"}},time:{am:"am",count_hours_ago:{one:"1 hora atrás",other:"%{count} horas atrás"},count_minutes_ago:{one:"1 minuto atrás",other:"%{count} minutos atrás"},due_date:"%{date} por %{time}",event:"%{date} em %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"há menos de um minuto",pm:"pm",ranges:{different_days:"%{start_date_and_time} para %{end_date_and_time}",same_day:"%{date} de %{start_time} a %{end_time}",times:"%{start_time} para %{end_time}"},with_ago:"%{time} atrás"}},ru:{date:{abbr_day_names:["вск","пнд","втp","срд","чтв","птн","сбт"],abbr_month_names:[null,"Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],datepicker:{column_headings:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]},day_names:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],days:{today:"Сегодня",today_lower:"сегодня",tomorrow:"Завтра",yesterday:"Вчера"},formats:{date_at_time:"%-d %b в %k:%M",default:"%d.%m.%Y",full:"%-d %b %Y r. %k:%M",full_with_weekday:"%a %-d %b %Y r. %k:%M",long:"%-d %B %Y",long_with_weekday:"%A, %-d %B",medium:"%-d %b %Y r.",medium_month:"%b %Y",medium_with_weekday:"%a %-d %b %Y r.",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %-d %b",weekday:"%A"},month_names:[null,"январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},datetime:{distance_in_words:{about_x_hours:{few:"около %{count} часов",many:"около %{count} часов",one:"около 1 часа",other:"около %{count} часов"},about_x_months:{few:"около %{count} месяцев",many:"около %{count} месяцев",one:"около 1 месяца",other:"около %{count} месяцев"},about_x_years:{few:"около %{count} лет",many:"около %{count} лет",one:"около 1 года",other:"около %{count} лет"},almost_x_years:{few:"Почти %{count} года (лет)",many:"Почти %{count} года (лет)",one:"Почти 1 год",other:"Почти %{count} года (лет)"},half_a_minute:"30 секунд",less_than_x_minutes:{few:"меньше чем за %{count} минут(ы)",many:"меньше чем за %{count} минут(ы)",one:"меньше чем за минуту",other:"меньше чем за %{count} минут(ы)"},less_than_x_seconds:{few:"меньше чем за %{count} секунд(ы)",many:"меньше чем за %{count} секунд(ы)",one:"меньше чем за 1 секунду",other:"меньше чем за %{count} секунд(ы)"},over_x_years:{few:"более %{count} лет",many:"более %{count} лет",one:"более 1 года",other:"более %{count} лет"},x_days:{few:"%{count} дня(дней)",many:"%{count} дня(дней)",one:"1 день",other:"%{count} дня(дней)"},x_minutes:{few:"%{count} минут(ы)",many:"%{count} минут(ы)",one:"1 минута",other:"%{count} минут(ы)"},x_months:{few:" %{count} месяца(ев)",many:" %{count} месяца(ев)",one:"1 месяц",other:" %{count} месяца(ев)"},x_seconds:{few:"%{count} секунд(ы)",many:"%{count} секунд(ы)",one:" 1 секунда",other:"%{count} секунд(ы)"}},prompts:{day:"День",hour:"Час",minute:"Минута",month:"Месяц",second:"Секунды",year:"Год"}},number:{currency:{format:{delimiter:" ",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:" ",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Миллиард",million:"Миллион",quadrillion:"Квадрильон",thousand:"Тысяча",trillion:"Триллион",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{few:"Байты",many:"Байты",one:"Байт",other:"Байты"},eb:"EB",gb:"Гбайт",kb:"Кбайт",mb:"Мбайт",pb:"PB",tb:"ТБ"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", и ",or:{last_word_connector:", или ",two_words_connector:" или "},two_words_connector:" и ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Поддержать сообщество",cisco_netacad_facebook_description:"Пожалуйста, посетите нашу страницу Сетевой Академии Facebook для поддержки сообщества или обратитесь к преподавателю.",community_support_description:"Взаимодействовать с коллегами и получить помощь от них.",community_support_forums:"Форумы поддержки сообщества",contact_support:"Связаться со службой поддержки",contact_support_sub_text:"Получить помощь по срочным вопросам.",curriculum_assessment_errata:"Опечатки в учебном плане/проверке знаний",curriculum_assessment_errata_description:'Просмотреть уже сообщенные ошибки проверки знаний и учебного плана. Искать "опечатка errata".',global_support_desk:"NetAcad Поддержка",global_support_desk_description:"Наши Сотрудники службы поддержки - это ваша первая линия поддержки, а также они могут соединить вас с нашей глобальной службы поддержки по вопросам, которые требуют дополнительной помощи.",networking_academy_description:"Просмотреть ответы Cisco на часто задаваемые вопросы.",networking_academy_faqs:"Часто задаваемые вопросы Сетевой академии",support_desk_livechat:"Чат в реальном времени со службой технической поддержки"}},time:{am:"am",count_hours_ago:{few:"%{count} часа(ов) назад",many:"%{count} часа(ов) назад",one:"1 час назад",other:"%{count} часа(ов) назад"},count_minutes_ago:{few:"%{count} минут(ы) назад",many:"%{count} минут(ы) назад",one:"1 минута назад",other:"%{count} минут(ы) назад"},due_date:"%{date} по %{time}",event:"%{date} в %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"меньше минуты назад",pm:"pm",ranges:{different_days:"%{start_date_and_time}  — %{end_date_and_time}",same_day:"%{date} с %{start_time} по %{end_time}",times:"%{start_time}  — %{end_time}"},with_ago:"%{time} назад"}},sl:{date:{abbr_day_names:["ned","pon","tor","sre","čet","pet","sob"],abbr_month_names:[null,"jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],datepicker:{column_headings:["ne","po","to","sr","če","pe","so"]},day_names:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"],days:{today:"Danes",today_lower:"danes",tomorrow:"Jutri",yesterday:"Včeraj"},formats:{date_at_time:"%b %-d pri %k:%M",default:"%Y-%m-%d",full:"%b %-d, %Y %k:%M",full_with_weekday:"%a %b %-d, %Y %k:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%b %-d, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %b %-d, %Y",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},datetime:{distance_in_words:{about_x_hours:{one:"približno 1 ura",other:"približno %{count} ur"},about_x_months:{one:"približno 1 mesec",other:"približno %{count} mesecev"},about_x_years:{one:"približno 1 leto",other:"približno %{count} let"},almost_x_years:{one:"skoraj 1 leto",other:"skoraj %{count} let"},half_a_minute:"pol minute",less_than_x_minutes:{one:"manj kot minuta",other:"manj kot %{count} minut"},less_than_x_seconds:{one:"manj kot 1 sekunda",other:"manj kot %{count} sekund"},over_x_years:{one:"več kot 1 leto",other:"več kot %{count} let"},x_days:{one:"1 dan",other:"%{count} dni"},x_minutes:{one:"1 minuta",other:"%{count} minut"},x_months:{one:"1 mesec",other:"%{count} mesecev"},x_seconds:{one:"1 sekunda",other:"%{count} sekund"}},prompts:{day:"Dan",hour:"Ura",minute:"Minuta",month:"Mesec",second:"sekund",year:"Leto"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"USD"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milijarda",million:"Milijon",quadrillion:"Bilijarda",thousand:"Tisoč",trillion:"Bilijon",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Bajt",other:"Biti"},eb:"EB",gb:"GB",kb:"kB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", in ",or:{last_word_connector:", ali ",two_words_connector:" ali "},two_words_connector:" in ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Skupnost za podporo",cisco_netacad_facebook_description:"Za skupnostno podporo ali stik z vašim učiteljem obiščite našo stran Networking Academy na Facebooku ali pa se obrnite na svojega učitelja.",community_support_description:"Komunicirajte s kolegi in pridobite podporo.",community_support_forums:"Forumi skupnosti za podporo",contact_support:"Stik s podporo",contact_support_sub_text:"Pridobite pomoč pri težavah, pri katerih se mudi.",curriculum_assessment_errata:"Seznam napak pri kurikulumu/ocenjevanju",curriculum_assessment_errata_description:"Ogled napak pri ocenjevanju in kurikulumu, ki so že bile prijavljene. Iskanje »seznama napak«.",global_support_desk:"Podporo NetAcad",global_support_desk_description:"V naših centrih ASC dobite prvo podporo, za zadeve, pri katerih je potrebna dodatna pomoč, pa vas povežejo z našo službo za globalno podporo.",networking_academy_description:"Oglejte si odgovore družbe Cisco na najpogosteje zastavljena vprašanja.",networking_academy_faqs:"Najpogosteje zastavljena vprašanja in odgovori na strani Networking Academy",support_desk_livechat:"Pogovor s službo za podporo v živo"}},time:{am:"dop.",count_hours_ago:{one:"1 uro prej",other:"%{count} ur prej"},count_minutes_ago:{one:"1 minuto prej",other:"%{count} minut prej"},due_date:"%{date} na %{time}",event:"%{date} ob %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"manj kot minuto prej",pm:"pop.",ranges:{different_days:"%{start_date_and_time} do %{end_date_and_time}",same_day:"%{date} od %{start_time} do %{end_time}",times:"%{start_time} do %{end_time}"},with_ago:"%{time} prej"}},sv:{date:{abbr_day_names:["sön","mån","tis","ons","tors","fre","lör"],abbr_month_names:[null,"jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],datepicker:{column_headings:["s","m","ti","o","to","f","l"]},day_names:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],days:{today:"Idag",today_lower:"idag",tomorrow:"Imorgon",yesterday:"Igår"},formats:{date_at_time:"%b %-d at %k:%M",default:"%Y-%m-%d",full:"%-d %b %Y %k.%M",full_with_weekday:"%a den %-d %b %Y %k.%M",long:"%Y %B %-d,",long_with_weekday:"%A, %B %-d",medium:"%-d %b %Y",medium_month:"%Y %b",medium_with_weekday:"%a den %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},datetime:{distance_in_words:{about_x_hours:{one:"cirka 1 timme",other:"cirka %{count} timmar"},about_x_months:{one:"cirka 1 månad",other:"cirka %{count} månader"},about_x_years:{one:"cirka 1 år",other:"cirka %{count} år"},almost_x_years:{one:"nästan 1 år",other:"nästan %{count} år"},half_a_minute:"en halvminut",less_than_x_minutes:{one:"mindre än en minut",other:"mindre än %{count} minuter"},less_than_x_seconds:{one:"mindre än 1 sekund",other:"mindre än %{count} sekunder"},over_x_years:{one:"mer än 1 år",other:"mer än %{count} år"},x_days:{one:"1 dag",other:"%{count} dagar"},x_minutes:{one:"1 minut",other:"%{count} minuter"},x_months:{one:"1 månad",other:"%{count} månader"},x_seconds:{one:"1 sekund",other:"%{count} sekunder"}},prompts:{day:"Dag",hour:"Timme",minute:"Minut",month:"Månad",second:"Sekunder",year:"År"}},number:{currency:{format:{delimiter:" ",format:"%u%n",precision:2,separator:",",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:" ",precision:3,separator:",",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Miljard",million:"Miljon",quadrillion:"Biljard",thousand:"Tusen",trillion:"Biljon",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:", och ",or:{last_word_connector:", eller ",two_words_connector:" eller "},two_words_connector:" och ",words_connector:", "},help_menu:{cisco_netacad_facebook:"Support Community",cisco_netacad_facebook_description:"Vänligen besök vår Networking Academy Facebooksida för community support eller kontakta din lärare.",community_support_description:"Interagera med och få hjälp från dina kamrater.",community_support_forums:"Community Support Forum",contact_support:"Kontakta support",contact_support_sub_text:"Få hjälp med tidsbegränsade problem",curriculum_assessment_errata:"Läroplan/Utvärdering Errata",curriculum_assessment_errata_description:'Visa redan rapporterade utvärderingar och programfel. Sök efter "errata."',global_support_desk:"NetAcad Support",global_support_desk_description:"Våra ASCs är din främsta support, och du kan ta kontakt med vår Global Support Desk för problem som kräver mer assistans.",networking_academy_description:"Visa Cisco svar till de mest ställda frågorna.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chatt"}},time:{am:"am",count_hours_ago:{one:"1 timme sedan",other:"%{count} timmar sen"},count_minutes_ago:{one:"1 minut sedan",other:"%{count} minuter sedan"},due_date:"%{date} kl. %{time}",event:"%{date} kl %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k.%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"mindre än en minut sen",pm:"pm",ranges:{different_days:"%{start_date_and_time} till %{end_date_and_time}",same_day:"%{date} från %{start_time} till %{end_time}",times:"%{start_time} till %{end_time}"},with_ago:"%{time} sen"}},"sv-x-k12":{date:{abbr_day_names:["sön","mån","tis","ons","tors","fre","lör"],abbr_month_names:[null,"jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],datepicker:{column_headings:["s","m","ti","o","to","f","l"]},day_names:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],days:{today:"Idag",today_lower:"idag",tomorrow:"Imorgon",yesterday:"Igår"},formats:{date_at_time:"%b % -d vid  %k.%M",default:"%Y-%m-%d",full:"%-d %b %Y %k.%M",full_with_weekday:"%a den %-d %b %Y %k.%M",long:"%B %-d, %Y",long_with_weekday:"%A,  %B %-d",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%a den %-d %b %Y",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a,  %b %-d",weekday:"%A"},month_names:[null,"januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},datetime:{distance_in_words:{about_x_hours:{one:"cirka 1 timme",other:"cirka %{count} timmar"},about_x_months:{one:"cirka 1 månad",other:"cirka %{count} månader"},about_x_years:{one:"cirka 1 år",other:"cirka %{count} år"},almost_x_years:{one:"nästan 1 år",other:"nästan %{count} år"},half_a_minute:"en halvminut",less_than_x_minutes:{one:"mindre än en minut",other:"mindre än %{count} minuter"},less_than_x_seconds:{one:"mindre än 1 sekund",other:"mindre än %{count} sekunder"},over_x_years:{one:"mer än 1 år",other:"mer än %{count} år"},x_days:{one:"1 dag",other:"%{count} dagar"},x_minutes:{one:"1 minut",other:"%{count} minuter"},x_months:{one:"1 månad",other:"%{count} månader"},x_seconds:{one:"1 sekund",other:"%{count} sekunder"}},prompts:{day:"Dag",hour:"Timme",minute:"Minut",month:"Månad",second:"Sekunder",year:"År"}},number:{currency:{format:{delimiter:",",format:"%u%n",separator:".",unit:"$"}},format:{delimiter:",",separator:"."},human:{decimal_units:{format:"%n %u",units:{billion:"Miljard",million:"Miljon",quadrillion:"Biljard",thousand:"Tusen",trillion:"Biljon"}},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Bytes"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:", och",or:{last_word_connector:", eller",two_words_connector:"eller"},two_words_connector:"och",words_connector:","},help_menu:{cisco_netacad_facebook:"Support gemenskap",cisco_netacad_facebook_description:"Vänligen besök vår Networking Academy Facebooksida för \ncommunity support eller kontakta din lärare.",community_support_description:"Interagera med och få hjälp från dina kamrater.",community_support_forums:"Community Support Forum",contact_support:"Kontakta support",contact_support_sub_text:"Få hjälp med tidsbegränsade problem",curriculum_assessment_errata:"Läroplan/Utvärdering Errata",curriculum_assessment_errata_description:'Visa redan rapporterade utvärderingar och programfel. Sök efter "errata."',global_support_desk:"NetAcad Support",global_support_desk_description:"Våra ASCs är din främsta support, och du kan ta kontakt med vår Global Support Desk för problem som kräver mer assistans.",networking_academy_description:"Visa Cisco svar till de mest ställda frågorna.",networking_academy_faqs:"Networking Academy FAQs",support_desk_livechat:"Support Desk Live Chatt"}},time:{am:"förmiddag",count_hours_ago:{one:"1 timme sedan",other:"%{count} timmar sen"},count_minutes_ago:{one:"1 minut sedan",other:"%{count} minuter sedan"},due_date:"%{date} kl. %{time}",event:"%{date} kl %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%d %B %Y %H:%M",short:"%d %b %H:%M",tiny:"%k.%M",tiny_on_the_hour:"%k.%M"},less_than_a_minute_ago:"mindre än en minut sen",pm:"eftermiddag",ranges:{different_days:"%{start_date_and_time} till %{end_date_and_time}",same_day:"%{date} från %{start_time} till %{end_time}",times:"%{start_time} till %{end_time}"},with_ago:"%{time} sen"}},tr:{date:{abbr_day_names:["Paz","Ptesi","Sal","Çar","Per","Cum","Ctesi"],abbr_month_names:[null,"Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],datepicker:{column_headings:["Paz","Ptesi","Sa","Çar","Per","Cu","Ctesi"]},day_names:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],days:{today:"Bugün",today_lower:"bugün",tomorrow:"Yarın",yesterday:"Dün"},formats:{date_at_time:"%b %-d at %l:%M%P",default:"%Y-%m-%d",full:"%-d %b %Y %k:%M",full_with_weekday:"%-d %b %Y %a %k:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%-d %b %Y",medium_month:"%b %Y",medium_with_weekday:"%-d %b %Y %a",short:"%-d %b",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},datetime:{distance_in_words:{about_x_hours:{one:"yaklaşık 1 saat",other:"yaklaşık %{count} saat"},about_x_months:{one:"yaklaşık 1 ay",other:"yaklaşık %{count} ay"},about_x_years:{one:"yaklaşık 1 yıl",other:"yaklaşık %{count} yıl"},almost_x_years:{one:"neredeyse 1 yıl",other:"neredeyse %{count} yıl"},half_a_minute:"yarım dakika",less_than_x_minutes:{one:"bir dakikadan az",other:"%{count} dakikadan az"},less_than_x_seconds:{one:"1 saniyeden az",other:"%{count} saniyeden az"},over_x_years:{one:"1 yılı aşkın",other:"%{count} yılı aşkın"},x_days:{one:"1 gün",other:"%{count} gün"},x_minutes:{one:"1 dakika",other:"%{count} dakika"},x_months:{one:"1 ay",other:"%{count} ay"},x_seconds:{one:"1 saniye",other:"%{count} saniye"}},prompts:{day:"Gün",hour:"Saat",minute:"Dakika",month:"Ay",second:"Saniye",year:"Yıl"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"Milyar",million:"Milyon",quadrillion:"Katrilyon",thousand:"Bin",trillion:"Trilyon"}},format:{precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"Byte",other:"Byte"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:", ve",or:{last_word_connector:", veya",two_words_connector:"veya"},two_words_connector:"veya",words_connector:", "},help_menu:{cisco_netacad_facebook:"Destek Topluluğu",cisco_netacad_facebook_description:"Topluluk detseği için Networking academy Facebook sayfamızı ziyaret edin veya eğitmeninize başvurun.",community_support_description:"Arkadaşlarınızla etkileşime geçip yardım alın",community_support_forums:"İletişim Destek Forumu",contact_support:"İletişim Desteği",contact_support_sub_text:"Zaman hassasiyetli sorunlarınız için yardım alın.",curriculum_assessment_errata:"Müfredat/Sınav Hataları",curriculum_assessment_errata_description:"Çoktan rapor edilmiş hatalı sınav ve müfredatları görüntüle. Hatalarda ara.",global_support_desk:"NetAcad Desteği",global_support_desk_description:"ASC lerimiz sizin ilk destek hattınızdır ve ek yardım gerektiren konularla ilgili Dünya Genelinde Destek Bölümü ile iletişime geçebilirsiniz.",networking_academy_description:"Sıkça sorulan soruları ve Cisco cevaplarını inceleyin.",networking_academy_faqs:"Networking Academy SSS'leri",support_desk_livechat:"Destek Masası Canlı Sohbet"}},time:{am:"am",count_hours_ago:{one:"1 saat önce",other:"%{count} saat önce"},count_minutes_ago:{one:"1 dakika önce",other:"%{count} dakika önce"},due_date:"%{date} %{time}",event:"%{date} %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%l%P"},less_than_a_minute_ago:"bir dakikadan daha az",pm:"pm",ranges:{different_days:"%{start_date_and_time} ile %{end_date_and_time}",same_day:"%{date} tarihi %{start_time} ile %{end_time}",times:"%{start_time} ile %{end_time}"},with_ago:"%{time} önce"}},uk:{date:{abbr_day_names:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],abbr_month_names:[null,"січ","лют","бер","квіт","трав","черв","лип","серп","вер","жовт","лист","груд"],datepicker:{column_headings:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]},day_names:["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"],days:{today:"Сьогодні",today_lower:"сьогодні",tomorrow:"Завтра",yesterday:"Вчора"},formats:{date_at_time:"%b %-d at %k:%M",default:"%Y-%m-%d",full:"%b %-d, %Y %k:%M",full_with_weekday:"%a %b %-d, %Y %k:%M",long:"%B %-d, %Y",long_with_weekday:"%A, %B %-d",medium:"%b %-d, %Y",medium_month:"%b %Y",medium_with_weekday:"%a %b %-d, %Y",short:"%b %-d",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"]},datetime:{distance_in_words:{about_x_hours:{few:"близько %{count} годин",many:"близько %{count} годин",one:"близько 1 години",other:"близько %{count} годин"},about_x_months:{few:"близько %{count} місяців",many:"близько %{count} місяців",one:"близько 1 місяця",other:"близько %{count} місяців"},about_x_years:{few:"близько %{count} років",many:"близько %{count} років",one:"близько 1 року",other:"близько %{count} років"},almost_x_years:{few:"майже %{count} років",many:"майже %{count} років",one:"майже 1 рік",other:"майже %{count} років"},half_a_minute:"півхвилини",less_than_x_minutes:{few:"менше ніж %{count} хвилин",many:"менше ніж %{count} хвилин",one:"менше ніж хвилина",other:"менше ніж %{count} хвилин"},less_than_x_seconds:{few:"менше ніж %{count} секунд",many:"менше ніж %{count} секунд",one:"менше ніж 1 секунда",other:"менше ніж %{count} секунд"},over_x_years:{few:"понад %{count} років",many:"понад %{count} років",one:"понад 1 рік",other:"понад %{count} років"},x_days:{few:"%{count} днів",many:"%{count} днів",one:"1 день",other:"%{count} днів"},x_minutes:{few:"%{count} хвилин",many:"%{count} хвилин",one:"1 хвилина",other:"%{count} хвилин"},x_months:{few:"%{count} місяців",many:"%{count} місяців",one:"1 місяць",other:"%{count} місяців"},x_seconds:{few:"%{count} секунд",many:"%{count} секунд",one:"1 секунда",other:"%{count} секунд"}},prompts:{day:"День",hour:"Година",minute:"Хвилина",month:"Місяць",second:"Секунди",year:"Рік"}},number:{currency:{format:{delimiter:",",format:"%u%n",separator:".",unit:"$"}},format:{delimiter:",",separator:"."},human:{decimal_units:{format:"%n %u",units:{billion:"Мільярд ",million:"Мільйон ",quadrillion:"Квадрільон",thousand:"Тисяча ",trillion:"Трільйон"}},storage_units:{format:"%n %u",units:{byte:{few:"Байти",many:"Байти",one:"Байт",other:"Байти"},eb:"EB",gb:"ГБ",kb:"КБ",mb:"МБ",pb:"ПБ",tb:"ТБ"}}},percentage:{format:{format:"%n%"}}},support:{array:{last_word_connector:", та",or:{last_word_connector:", або",two_words_connector:"або"},two_words_connector:"та",words_connector:","},help_menu:{cisco_netacad_facebook:"Підтиримка Спільноти",cisco_netacad_facebook_description:"Будь ласка відвідайте Facebook сторінку Мережної Академії щоб отримати підтримку спільноти або зв'язатися з вашим інструктором.",community_support_description:"Взаємодій і отримай підтримку однокурсників.",community_support_forums:"Форуми підтримки спільноти",contact_support:"Звернутися до служби підтримки",contact_support_sub_text:"Отримати підтримку з приводу негайних питань",curriculum_assessment_errata:"Навчальний план/Помилки оцінювання",curriculum_assessment_errata_description:'Переглянути вже відправлені оцінки і помилки навчальних програм. Шукати "errata."',global_support_desk:"NetAcad підтримка",global_support_desk_description:"Наші Центри підтримки академій - ваша перша лінія підтримки, яка також може з'єднати вас з нашим Центром глобальної підтримки з приводу питань, що потребують додаткової допомоги.",networking_academy_description:"Переглянути відповіді Cisco на найбільш поширені запитання",networking_academy_faqs:"FAQ Мережної академії",support_desk_livechat:"Живий чат Центру підтримки"}},time:{am:"am",count_hours_ago:{few:"%{count} години тому",many:"%{count} годин тому",one:"1 година тому",other:"%{count} годин тому"},count_minutes_ago:{few:"%{count} хвилини тому",many:"%{count} хвилин тому",one:"1 хвилина тому",other:"%{count} хвилин тому"},due_date:"%{date} за %{time}",event:"%{date} о %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"Менше, ніж хвилину тому",pm:"pm",ranges:{different_days:"%{start_date_and_time} до %{end_date_and_time}",same_day:"%{date} з %{start_time} до %{end_time}",times:"%{start_time} до %{end_time}"},with_ago:"%{time} тому"}},"zh-Hans":{date:{abbr_day_names:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],abbr_month_names:[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datepicker:{column_headings:["日","一","二","三","四","五","六"]},day_names:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],days:{today:"今天",today_lower:"今天",tomorrow:"明天",yesterday:"昨天"},formats:{date_at_time:"%b %-d 于 %H:%M",default:"%Y-%m-%d",full:"%Y年%b%-d日 %k:%M",full_with_weekday:"%a %Y年%b%-d日 %k:%M",long:"%Y %B %-d",long_with_weekday:"%A, %B %-d",medium:"%Y年%b%-d日",medium_month:"%Y %b",medium_with_weekday:"%a %Y年%b%-d日",short:"%b%-d日",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},datetime:{distance_in_words:{about_x_hours:{one:"大约 %{count} 个小时",other:"大约 %{count} 个小时"},about_x_months:{one:"大约 %{count} 个月",other:"大约 %{count} 个月"},about_x_years:{one:"大约 %{count} 年",other:"大约 %{count} 年"},almost_x_years:{one:"不到 %{count} 年",other:"不到 %{count} 年"},half_a_minute:"半分钟",less_than_x_minutes:{one:"少于 %{count} 分钟",other:"少于 %{count} 分钟"},less_than_x_seconds:{one:"少于 %{count} 秒",other:"少于 %{count} 秒"},over_x_years:{one:"超过 %{count} 年",other:"超过 %{count} 年"},x_days:{one:"%{count} 天",other:"%{count} 天"},x_minutes:{one:"%{count} 分钟",other:"%{count} 分钟"},x_months:{one:"%{count} 个月",other:"%{count} 个月"},x_seconds:{one:"%{count} 秒",other:"%{count} 秒"}},prompts:{day:"日",hour:"小时",minute:"分钟",month:"月",second:"秒",year:"年"}},number:{currency:{format:{delimiter:",",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:",",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"十亿",million:"百万",quadrillion:"一千万亿",thousand:"千",trillion:"万亿",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"字节",other:"字节"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:"和",or:{last_word_connector:"或",two_words_connector:"或"},two_words_connector:"和",words_connector:","},help_menu:{cisco_netacad_facebook:"支持社区",cisco_netacad_facebook_description:"请访问我们的网络学院的 Facebook 页面社区的支持，或咨询您的讲师。",community_support_description:"与您的同伴进行交流互动并得到帮助。",community_support_forums:"社区支持论坛",contact_support:"联系支持",contact_support_sub_text:"针对时间敏感的问题获得帮助。",curriculum_assessment_errata:"课程/测验勘误",curriculum_assessment_errata_description:"查看已经报告的测验和课程错误。搜索“勘误”。",global_support_desk:"NetAcad支持",global_support_desk_description:"我们的 ASCs 是您的第一线支持，并可以为需要额外帮助的事项连接您到我们的全球支持桌面。",networking_academy_description:"查看 Cisco 对最常见问题的答案。",networking_academy_faqs:"Networking Academy 常见问题解答",support_desk_livechat:"支持桌面实时聊天"}},time:{am:"上午",count_hours_ago:{one:"%{count} 小时前",other:"%{count} 小时前"},count_minutes_ago:{one:"%{count} 分钟前",other:"%{count} 分钟前"},due_date:"%{date}， %{time} 之前",event:"%{date} %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"不到一分钟前",pm:"下午",ranges:{different_days:"%{start_date_and_time} 至 %{end_date_and_time}",same_day:"%{date}，从 %{start_time} 到 %{end_time}",times:"%{start_time} 至 %{end_time}"},with_ago:"%{time} 前"}},"zh-Hant":{date:{abbr_day_names:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],abbr_month_names:[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datepicker:{column_headings:["星期日","週一","週二","週三","週四","週五","星期六"]},day_names:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],days:{today:"今天",today_lower:"今天",tomorrow:"明天",yesterday:"昨天"},formats:{date_at_time:"%b %-d at %k:%M",default:"%Y-%m-%d",full:"%Y年%b%-d日 %k:%M",full_with_weekday:"%a %Y年%b%-d日 %k:%M",long:"%Y %B %-d",long_with_weekday:"%A, %B %-d",medium:"%Y年%b%-d日",medium_month:"%Y %b",medium_with_weekday:"%a %Y年%b%-d日",short:"%b%-d日",short_month:"%b",short_weekday:"%a",short_with_weekday:"%a, %b %-d",weekday:"%A"},month_names:[null,"一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},datetime:{distance_in_words:{about_x_hours:{one:"約 %{count} 個小時",other:"約 %{count} 個小時"},about_x_months:{one:"約 %{count} 個月",other:"約 %{count} 個月"},about_x_years:{one:"約 %{count} 年",other:"約 %{count} 年"},almost_x_years:{one:"近 %{count} 年",other:"近 %{count} 年"},half_a_minute:"半分鐘",less_than_x_minutes:{one:"少於 %{count} 分鐘",other:"少於 %{count} 分鐘"},less_than_x_seconds:{one:"少於 %{count} 秒",other:"少於 %{count} 秒"},over_x_years:{one:"超過 %{count} 年",other:"超過 %{count} 年"},x_days:{one:"%{count} 天",other:"%{count} 天"},x_minutes:{one:"%{count} 分鐘",other:"%{count} 分鐘"},x_months:{one:"%{count} 個月",other:"%{count} 個月"},x_seconds:{one:"%{count} 秒",other:"%{count} 秒"}},prompts:{day:"日",hour:"小時",minute:"分鐘",month:"月",second:"秒",year:"年"}},number:{currency:{format:{delimiter:"，",format:"%u%n",precision:2,separator:".",significant:false,strip_insignificant_zeros:false,unit:"$"}},format:{delimiter:"，",precision:3,separator:".",significant:false,strip_insignificant_zeros:false},human:{decimal_units:{format:"%n %u",units:{billion:"十億",million:"百萬",quadrillion:"百萬的四次方",thousand:"千",trillion:"萬億",unit:""}},format:{delimiter:"",precision:3,significant:true,strip_insignificant_zeros:true},storage_units:{format:"%n %u",units:{byte:{one:"位元組",other:"字節"},eb:"EB",gb:"GB",kb:"KB",mb:"MB",pb:"PB",tb:"TB"}}},percentage:{format:{delimiter:"",format:"%n%"}},precision:{format:{delimiter:""}}},support:{array:{last_word_connector:"，以及",or:{last_word_connector:"，或者",two_words_connector:"或者"},two_words_connector:"以及",words_connector:"，"},help_menu:{cisco_netacad_facebook:"支援社區",cisco_netacad_facebook_description:"如需獲得社區支援或聯繫您的導師，請訪問我們網絡學院的 Facebook 頁面。",community_support_description:"與您的同行互動並獲得援助。",community_support_forums:"社區支援論壇",contact_support:"聯絡支援",contact_support_sub_text:"獲取有關時間敏感性問題的援助。",curriculum_assessment_errata:"課程/評估勘誤表",curriculum_assessment_errata_description:"檢視已報告的評估和課程錯誤。搜索『勘誤表』。",global_support_desk:"NetAcad支援",global_support_desk_description:"我們的 ASCs 是您的第一線支援，而且可以針對需要額外支援的事項將您連接到我們的全球支援桌面。",networking_academy_description:"檢視最常見問題的 Cisco 答案。",networking_academy_faqs:"Networking Academy（網路技術學院）常見問題解答",support_desk_livechat:"支援桌面實時聊天"}},time:{am:"上午",count_hours_ago:{one:"%{count}小時以前",other:"%{count} 小時以前"},count_minutes_ago:{one:"%{count}分鐘以前",other:"%{count} 分鐘以前"},due_date:"於 %{date}，評分時間：%{time}",event:"%{date} %{time}",formats:{default:"%a, %d %b %Y %H:%M:%S %z",long:"%B %d, %Y %H:%M",short:"%d %b %H:%M",tiny:"%k:%M",tiny_on_the_hour:"%k:%M"},less_than_a_minute_ago:"不到一分鐘以前",pm:"下午",ranges:{different_days:"%{start_date_and_time} 至 %{end_date_and_time}",same_day:"日期：%{date}；時間：自 %{start_time} 至 %{end_time}",times:"%{start_time} 至 %{end_time}"},with_ago:"%{time} 以前"}}})},jYyc:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=n("JD5e")
var o=n("u7Gu")
var s=4
var u=a.a.getJSON
a.a.getJSON=function(e,t,n){var r=u.apply(a.a,arguments)
a.a.ajaxJSON.storeRequest(r,e,"GET",t)
return r}
a.a.ajaxJSON=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r=arguments.length>3?arguments[3]:void 0
var o=arguments.length>4?arguments[4]:void 0
var s=arguments.length>5?arguments[5]:void 0
if(!e&&o){o(null,null,"URL required for requests",null)
return}e=e||"."
if("GET"!==t&&"string"!==typeof n){n._method=t
t="POST"
n.authenticity_token=Object(i["a"])()}var u=function(e,t,n){if("abort"===t)return
var r=e
if(e.responseText){var i=e.responseText.replace(/(<([^>]+)>)/gi,"")
r={message:i}
try{r=a.a.parseJSON(e.responseText)}catch(e){}}s&&s.skipDefaultError&&a.a.ajaxJSON.ignoredXHRs.push(e)
o&&a.a.isFunction(o)?o(r,e,t,n):a.a.ajaxJSON.unhandledXHRs.push(e)}
var l={url:e,dataType:"json",type:t,success:function(e,t,n){e=e||{}
var i=null
n&&n.getResponseHeader&&(i=n.getResponseHeader("X-Canvas-Page-View-Update-Url"))&&setTimeout(function(){a()(document).triggerHandler("page_view_update_url_received",i)},50)
if(!e.length&&e.errors){u(e.errors,null,"")
s&&s.skipDefaultError?a.a.ajaxJSON.ignoredXHRs.push(n):a.a.fn.defaultAjaxError.func.call(a.a.fn.defaultAjaxError.object,null,e,"0",e.errors)}else r&&a.a.isFunction(r)&&r(e,n)},error:function(e){u.apply(this,arguments)},complete:function(e){},data:n}
s&&s.timeout&&(l.timeout=s.timeout)
s&&s.contentType&&(l.contentType=s.contentType)
var c=a.a.ajax(l)
a.a.ajaxJSON.storeRequest(c,e,t,n)
return c}
a.a.ajaxJSON.unhandledXHRs=[]
a.a.ajaxJSON.ignoredXHRs=[]
a.a.ajaxJSON.passedRequests=[]
a.a.ajaxJSON.storeRequest=function(e,t,n,r){a.a.ajaxJSON.passedRequests.push({xhr:e,url:t,submit_type:n,data:r})}
a.a.ajaxJSON.findRequest=function(e){return a.a.ajaxJSON.passedRequests.find(function(t){return t.xhr===e})}
a.a.ajaxJSON.abortRequest=function(e){e&&e.readyState!==s&&e.abort()}
a.a.ajaxJSON.isUnauthenticated=function(e){if(401!==e.status)return false
var t
try{t=a.a.parseJSON(e.responseText)}catch(e){}return!!t&&"unauthenticated"===t.status}
a.a.fn.defaultAjaxError=function(e){a.a.fn.defaultAjaxError.object=this
a.a.fn.defaultAjaxError.func=function(t,n,r,i){var s="production"===o["a"].environment
var u=-1!==a.a.inArray(n,a.a.ajaxJSON.unhandledXHRs)
var l=-1!==a.a.inArray(n,a.a.ajaxJSON.ignoredXHRs)
if((!s||u||a.a.ajaxJSON.isUnauthenticated(n))&&!l){a.a.ajaxJSON.unhandledXHRs=a.a.ajaxJSON.unhandledXHRs?a.a.grep(a.a.ajaxJSON.unhandledXHRs,function(e){return e!==n}):a.a.ajaxJSON.unhandledXHRs
var c=!!u
e.call(this,t,n,r,i,c)}}
this.ajaxError(a.a.fn.defaultAjaxError.func)}
t["a"]=a.a.ajaxJSON},"jfS+":function(e,t,n){"use strict"
var r=n("endd")
function a(e){if("function"!==typeof e)throw new TypeError("executor must be a function.")
var t
this.promise=new Promise(function(e){t=e})
var n=this
e(function(e){if(n.reason)return
n.reason=new r(e)
t(n.reason)})}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason}
a.source=function(){var e
var t=new a(function(t){e=t})
return{token:t,cancel:e}}
e.exports=a},jpBB:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var r=n("x1Tw")
function a(e){return new Promise(function(t){setTimeout(t,e)})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n=t.ajaxLib||r["default"]
var o=e.url,s=e.workflow_state,u=e.results,l=e.message
if("queued"===s||"running"===s){var c=t.interval
c||(c=1e3)
c<100&&(c=100)
return a(c).then(function(){return n.get(o)}).then(function(e){var n=e.data
return i(n,t)})}return"completed"===s?Promise.resolve(u):Promise.reject(l)}},lSNA:function(e,t){function n(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n
return e}e.exports=n},ls82:function(e,t,n){var r=function(e){"use strict"
var t=Object.prototype
var n=t.hasOwnProperty
var r
var a="function"===typeof Symbol?Symbol:{}
var i=a.iterator||"@@iterator"
var o=a.asyncIterator||"@@asyncIterator"
var s=a.toStringTag||"@@toStringTag"
function u(e,t,n,r){var a=t&&t.prototype instanceof p?t:p
var i=Object.create(a.prototype)
var o=new S(r||[])
i._invoke=M(e,n,o)
return i}e.wrap=u
function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}var c="suspendedStart"
var d="suspendedYield"
var f="executing"
var h="completed"
var m={}
function p(){}function _(){}function g(){}var y={}
y[i]=function(){return this}
var v=Object.getPrototypeOf
var b=v&&v(v(C([])))
b&&b!==t&&n.call(b,i)&&(y=b)
var w=g.prototype=p.prototype=Object.create(y)
_.prototype=w.constructor=g
g.constructor=_
g[s]=_.displayName="GeneratorFunction"
function k(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor
return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))}
e.mark=function(e){if(Object.setPrototypeOf)Object.setPrototypeOf(e,g)
else{e.__proto__=g
s in e||(e[s]="GeneratorFunction")}e.prototype=Object.create(w)
return e}
e.awrap=function(e){return{__await:e}}
function x(e){function t(r,a,i,o){var s=l(e[r],e,a)
if("throw"!==s.type){var u=s.arg
var c=u.value
if(c&&"object"===typeof c&&n.call(c,"__await"))return Promise.resolve(c.__await).then(function(e){t("next",e,i,o)},function(e){t("throw",e,i,o)})
return Promise.resolve(c).then(function(e){u.value=e
i(u)},function(e){return t("throw",e,i,o)})}o(s.arg)}var r
function a(e,n){function a(){return new Promise(function(r,a){t(e,n,r,a)})}return r=r?r.then(a,a):a()}this._invoke=a}k(x.prototype)
x.prototype[o]=function(){return this}
e.AsyncIterator=x
e.async=function(t,n,r,a){var i=new x(u(t,n,r,a))
return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})}
function M(e,t,n){var r=c
return function(a,i){if(r===f)throw new Error("Generator is already running")
if(r===h){if("throw"===a)throw i
return P()}n.method=a
n.arg=i
while(true){var o=n.delegate
if(o){var s=T(o,n)
if(s){if(s===m)continue
return s}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if(r===c){r=h
throw n.arg}n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r=f
var u=l(e,t,n)
if("normal"===u.type){r=n.done?h:d
if(u.arg===m)continue
return{value:u.arg,done:n.done}}if("throw"===u.type){r=h
n.method="throw"
n.arg=u.arg}}}}function T(e,t){var n=e.iterator[t.method]
if(n===r){t.delegate=null
if("throw"===t.method){if(e.iterator["return"]){t.method="return"
t.arg=r
T(e,t)
if("throw"===t.method)return m}t.method="throw"
t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,e.iterator,t.arg)
if("throw"===a.type){t.method="throw"
t.arg=a.arg
t.delegate=null
return m}var i=a.arg
if(!i){t.method="throw"
t.arg=new TypeError("iterator result is not an object")
t.delegate=null
return m}if(!i.done)return i
t[e.resultName]=i.value
t.next=e.nextLoc
if("return"!==t.method){t.method="next"
t.arg=r}t.delegate=null
return m}k(w)
w[s]="Generator"
w[i]=function(){return this}
w.toString=function(){return"[object Generator]"}
function D(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1])
if(2 in e){t.finallyLoc=e[2]
t.afterLoc=e[3]}this.tryEntries.push(t)}function E(e){var t=e.completion||{}
t.type="normal"
delete t.arg
e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}]
e.forEach(D,this)
this.reset(true)}e.keys=function(e){var t=[]
for(var n in e)t.push(n)
t.reverse()
return function n(){while(t.length){var r=t.pop()
if(r in e){n.value=r
n.done=false
return n}}n.done=true
return n}}
function C(e){if(e){var t=e[i]
if(t)return t.call(e)
if("function"===typeof e.next)return e
if(!isNaN(e.length)){var a=-1,o=function t(){while(++a<e.length)if(n.call(e,a)){t.value=e[a]
t.done=false
return t}t.value=r
t.done=true
return t}
return o.next=o}}return{next:P}}e.values=C
function P(){return{value:r,done:true}}S.prototype={constructor:S,reset:function(e){this.prev=0
this.next=0
this.sent=this._sent=r
this.done=false
this.delegate=null
this.method="next"
this.arg=r
this.tryEntries.forEach(E)
if(!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=true
var e=this.tryEntries[0]
var t=e.completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function a(n,a){s.type="throw"
s.arg=e
t.next=n
if(a){t.method="next"
t.arg=r}return!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i]
var s=o.completion
if("root"===o.tryLoc)return a("end")
if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc")
var l=n.call(o,"finallyLoc")
if(u&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,true)
if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return a(o.catchLoc,true)}else{if(!l)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r]
if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a
break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null)
var o=i?i.completion:{}
o.type=e
o.arg=t
if(i){this.method="next"
this.next=i.finallyLoc
return m}return this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg
if("break"===e.type||"continue"===e.type)this.next=e.arg
else if("return"===e.type){this.rval=this.arg=e.arg
this.method="return"
this.next="end"}else"normal"===e.type&&t&&(this.next=t)
return m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e){this.complete(n.completion,n.afterLoc)
E(n)
return m}}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var a=r.arg
E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){this.delegate={iterator:C(e),resultName:t,nextLoc:n}
"next"===this.method&&(this.arg=r)
return m}}
return e}(e.exports)
try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},m0r6:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var r=n("pQTu")
function a(e,t){var n=Object.keys(t)
for(var r=0,i=n.length;r<i;r++){var o=n[r]
var s=t[o]
"object"===typeof e[o]?a(e[o],s):e[o]=s}return e}function i(e){a(r["default"].translations,e)}},n6bm:function(e,t,n){"use strict"
var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
function a(){this.message="String contains an invalid character"}a.prototype=new Error
a.prototype.code=5
a.prototype.name="InvalidCharacterError"
function i(e){var t=String(e)
var n=""
for(var i,o,s=0,u=r;t.charAt(0|s)||(u="=",s%1);n+=u.charAt(63&i>>8-s%1*8)){o=t.charCodeAt(s+=.75)
if(o>255)throw new a
i=i<<8|o}return n}e.exports=i},nIQR:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n("nM38")
var a={brand:"#0770A3",link:"#0770A3",electric:"#0770A3",shamrock:"#127A1B",barney:"#B8309E",crimson:"#D01A19",fire:"#C23C0D",licorice:"#2D3B45",oxford:"#394B58",ash:"#556572",slate:"#556572",tiara:"#556572",porcelain:"#FFFFFF",white:"#FFFFFF"}
var i=Object.freeze((0,r.makeFunctionalColors)(a))
t.default=i},nM38:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.makeFunctionalColors=o
t.default=void 0
var a=r(n("MVZn"))
var i={brand:"#008EE2",link:"#008EE2",electric:"#008EE2",shamrock:"#00AC18",barney:"#BF32A4",crimson:"#EE0612",fire:"#FC5E13",licorice:"#2D3B45",oxford:"#394B58",ash:"#8B969E",slate:"#8B969E",tiara:"#C7CDD1",porcelain:"#F5F5F5",white:"#FFFFFF"}
function o(e){return(0,a.default)({},e,{textDarkest:e.licorice,textDark:e.ash,textLight:e.porcelain,textLightest:e.white,textBrand:e.brand,textLink:e.link,textAlert:e.barney,textInfo:e.brand,textSuccess:e.shamrock,textDanger:e.crimson,textWarning:e.fire,backgroundDarkest:e.licorice,backgroundDark:e.ash,backgroundMedium:e.tiara,backgroundLight:e.porcelain,backgroundLightest:e.white,backgroundBrand:e.brand,backgroundBrandSecondary:e.oxford,backgroundAlert:e.barney,backgroundInfo:e.brand,backgroundSuccess:e.shamrock,backgroundDanger:e.crimson,backgroundWarning:e.fire,borderLightest:e.white,borderLight:e.porcelain,borderMedium:e.tiara,borderDark:e.ash,borderDarkest:e.licorice,borderBrand:e.brand,borderAlert:e.barney,borderInfo:e.brand,borderSuccess:e.shamrock,borderDanger:e.crimson,borderWarning:e.fire,borderDebug:e.crimson})}var s=Object.freeze(o(i))
t.default=s},nmq7:function(e,t,n){"use strict"
var r=n("0jNN")
var a=Object.prototype.hasOwnProperty
var i={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var o=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})}
var s="utf8=%26%2310003%3B"
var u="utf8=%E2%9C%93"
var l=function(e,t){var n={}
var l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e
var c=Infinity===t.parameterLimit?void 0:t.parameterLimit
var d=l.split(t.delimiter,c)
var f=-1
var h
var m=t.charset
if(t.charsetSentinel)for(h=0;h<d.length;++h)if(0===d[h].indexOf("utf8=")){d[h]===u?m="utf-8":d[h]===s&&(m="iso-8859-1")
f=h
h=d.length}for(h=0;h<d.length;++h){if(h===f)continue
var p=d[h]
var _=p.indexOf("]=")
var g=-1===_?p.indexOf("="):_+1
var y,v
if(-1===g){y=t.decoder(p,i.decoder,m)
v=t.strictNullHandling?null:""}else{y=t.decoder(p.slice(0,g),i.decoder,m)
v=t.decoder(p.slice(g+1),i.decoder,m)}v&&t.interpretNumericEntities&&"iso-8859-1"===m&&(v=o(v))
v&&t.comma&&v.indexOf(",")>-1&&(v=v.split(","))
a.call(n,y)?n[y]=r.combine(n[y],v):n[y]=v}return n}
var c=function(e,t,n){var r=t
for(var a=e.length-1;a>=0;--a){var i
var o=e[a]
if("[]"===o&&n.parseArrays)i=[].concat(r)
else{i=n.plainObjects?Object.create(null):{}
var s="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o
var u=parseInt(s,10)
if(n.parseArrays||""!==s)if(!isNaN(u)&&o!==s&&String(u)===s&&u>=0&&n.parseArrays&&u<=n.arrayLimit){i=[]
i[u]=r}else i[s]=r
else i={0:r}}r=i}return r}
var d=function(e,t,n){if(!e)return
var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var i=/(\[[^[\]]*])/
var o=/(\[[^[\]]*])/g
var s=i.exec(r)
var u=s?r.slice(0,s.index):r
var l=[]
if(u){if(!n.plainObjects&&a.call(Object.prototype,u)&&!n.allowPrototypes)return
l.push(u)}var d=0
while(null!==(s=o.exec(r))&&d<n.depth){d+=1
if(!n.plainObjects&&a.call(Object.prototype,s[1].slice(1,-1))&&!n.allowPrototypes)return
l.push(s[1])}s&&l.push("["+r.slice(s.index)+"]")
return c(l,t,n)}
var f=function(e){if(!e)return i
if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined")
var t="undefined"===typeof e.charset?i.charset:e.charset
return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth?e.depth:i.depth,ignoreQueryPrefix:true===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:false!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}
e.exports=function(e,t){var n=f(t)
if(""===e||null===e||"undefined"===typeof e)return n.plainObjects?Object.create(null):{}
var a="string"===typeof e?l(e,n):e
var i=n.plainObjects?Object.create(null):{}
var o=Object.keys(a)
for(var s=0;s<o.length;++s){var u=o[s]
var c=d(u,a[u],n)
i=r.merge(i,c,n)}return r.compact(i)}},nwc5:function(e,t,n){"use strict"
n.r(t)
n("VI1P")
n("c6Pp")
var r=n("vpQ4")
var a=n("+OyF")
var i=n.n(a)
var o=n("zGIJ")
var s=n.n(o)
var u=n("wd/R")
var l=n.n(u)
var c=n("2DhO")
var d=n("KQm4")
var f=n("ouhR")
var h=n.n(f)
if(!("require"in window)){var m=function(e){return e.default}
var p={jquery:function(){return h.a},i18nObj:function(){return Promise.resolve().then(n.bind(null,"pQTu")).then(m)},underscore:function(){return Promise.resolve().then(n.t.bind(null,"GLiE",7)).then(m)},"jsx/course_wizard/ListItems":function(){return Promise.all([n.e(89),n.e(561)]).then(n.bind(null,"iql1")).then(m)}}
var _=function(e){if(e in p)return p[e]()
if(/^(https?:)?\/\//.test(e))return h.a.getScript(e)
throw new Error("Cannot load ".concat(e,", use your own RequireJS or something else to load this script"))}
window.require=function(e,t){console.warn("`require`-ing internal Canvas modules comes with no warranty, things can change in any release and you are responsible for making sure your custom JavaScript that uses it continues to work.")
e.includes("jquery")&&console.error("You don't need to `require(['jquery...`, just use the global `$` variable directly.")
Promise.all(e.map(_)).then(function(e){t&&t.apply(void 0,Object(d["a"])(e))})}}l()().locale(ENV.MOMENT_LOCALE)
if("undefined"!==typeof ENV){ENV.TIMEZONE&&c["a"].changeZone(ENV.TIMEZONE)
ENV.CONTEXT_TIMEZONE&&c["a"].preload(ENV.CONTEXT_TIMEZONE)
ENV.BIGEASY_LOCALE&&c["a"].changeLocale(ENV.BIGEASY_LOCALE,ENV.MOMENT_LOCALE)}if(ENV.use_high_contrast)s.a.use()
else{var g=window.CANVAS_ACTIVE_BRAND_VARIABLES||{}
var y={}
"test"===window.INST.environment&&(y={transitions:{duration:"0ms"}})
i.a.use({overrides:Object(r["a"])({},y,g)})}if("test"===window.INST.environment){window.__CANVAS_IN_FLIGHT_XHR_REQUESTS__=0
var v=XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send=function(){window.__CANVAS_IN_FLIGHT_XHR_REQUESTS__++
this.addEventListener("loadend",function(){window.__CANVAS_IN_FLIGHT_XHR_REQUESTS__--
window.dispatchEvent(new CustomEvent("canvasXHRComplete"))})
return v.apply(this,arguments)}
var b=window.fetch
window.fetch=function(){window.__CANVAS_IN_FLIGHT_XHR_REQUESTS__++
var e=b.apply(this,arguments)
e.finally(function(){return window.__CANVAS_IN_FLIGHT_XHR_REQUESTS__--})
return e}}var w=n("FIFq")
var k=n.n(w)
var x=n("Cf7h")
var M=n("3oW2")
var T=n("Nxtp")
if("undefined"!==typeof ENV&&ENV.MOMENT_LOCALE&&"en"!==ENV.MOMENT_LOCALE){function D(e){switch(e){case"moment/locale/af":return n.e(343).then(n.t.bind(null,"K/tc",7))
case"moment/locale/ar-dz":return n.e(345).then(n.t.bind(null,"o1bE",7))
case"moment/locale/ar-kw":return n.e(346).then(n.t.bind(null,"Qj4J",7))
case"moment/locale/ar-ly":return n.e(347).then(n.t.bind(null,"HP3h",7))
case"moment/locale/ar-ma":return n.e(348).then(n.t.bind(null,"CoRJ",7))
case"moment/locale/ar-sa":return n.e(349).then(n.t.bind(null,"gjCT",7))
case"moment/locale/ar-tn":return n.e(350).then(n.t.bind(null,"bYM6",7))
case"moment/locale/ar":return n.e(344).then(n.t.bind(null,"jnO4",7))
case"moment/locale/az":return n.e(351).then(n.t.bind(null,"SFxW",7))
case"moment/locale/be":return n.e(352).then(n.t.bind(null,"H8ED",7))
case"moment/locale/bg":return n.e(353).then(n.t.bind(null,"hKrs",7))
case"moment/locale/bm":return n.e(354).then(n.t.bind(null,"p/rL",7))
case"moment/locale/bn":return n.e(355).then(n.t.bind(null,"kEOa",7))
case"moment/locale/bo":return n.e(356).then(n.t.bind(null,"0mo+",7))
case"moment/locale/br":return n.e(357).then(n.t.bind(null,"aIdf",7))
case"moment/locale/bs":return n.e(358).then(n.t.bind(null,"JVSJ",7))
case"moment/locale/ca":return n.e(359).then(n.t.bind(null,"1xZ4",7))
case"moment/locale/cs":return n.e(360).then(n.t.bind(null,"PA2r",7))
case"moment/locale/cv":return n.e(361).then(n.t.bind(null,"A+xa",7))
case"moment/locale/cy":return n.e(362).then(n.t.bind(null,"l5ep",7))
case"moment/locale/da":return n.e(363).then(n.t.bind(null,"DxQv",7))
case"moment/locale/de-at":return n.e(365).then(n.t.bind(null,"s+uk",7))
case"moment/locale/de-ch":return n.e(366).then(n.t.bind(null,"u3GI",7))
case"moment/locale/dv":return n.e(367).then(n.t.bind(null,"WYrj",7))
case"moment/locale/el":return n.e(368).then(n.t.bind(null,"jUeY",7))
case"moment/locale/en-au":return n.e(370).then(n.t.bind(null,"Dmvi",7))
case"moment/locale/en-ca":return n.e(371).then(n.t.bind(null,"OIYi",7))
case"moment/locale/en-gb":return n.e(372).then(n.t.bind(null,"Oaa7",7))
case"moment/locale/en-ie":return n.e(373).then(n.t.bind(null,"4dOw",7))
case"moment/locale/en-il":return n.e(374).then(n.t.bind(null,"czMo",7))
case"moment/locale/en-nz":return n.e(375).then(n.t.bind(null,"b1Dy",7))
case"moment/locale/en-SG":return n.e(369).then(n.t.bind(null,"zavE",7))
case"moment/locale/eo":return n.e(376).then(n.t.bind(null,"Zduo",7))
case"moment/locale/es-do":return n.e(378).then(n.t.bind(null,"CjzT",7))
case"moment/locale/es-us":return n.e(379).then(n.t.bind(null,"Vclq",7))
case"moment/locale/es":return n.e(377).then(n.t.bind(null,"iYuL",7))
case"moment/locale/et":return n.e(380).then(n.t.bind(null,"7BjC",7))
case"moment/locale/eu":return n.e(381).then(n.t.bind(null,"D/JM",7))
case"moment/locale/fi":return n.e(383).then(n.t.bind(null,"gekB",7))
case"moment/locale/fo":return n.e(384).then(n.t.bind(null,"ByF4",7))
case"moment/locale/fr-ch":return n.e(387).then(n.t.bind(null,"Dkky",7))
case"moment/locale/fy":return n.e(388).then(n.t.bind(null,"cRix",7))
case"moment/locale/ga":return n.e(389).then(n.t.bind(null,"USCx",7))
case"moment/locale/gd":return n.e(390).then(n.t.bind(null,"9rRi",7))
case"moment/locale/gl":return n.e(391).then(n.t.bind(null,"iEDd",7))
case"moment/locale/gom-latn":return n.e(392).then(n.t.bind(null,"DKr+",7))
case"moment/locale/gu":return n.e(393).then(n.t.bind(null,"4MV3",7))
case"moment/locale/hi":return n.e(395).then(n.t.bind(null,"3E1r",7))
case"moment/locale/hr":return n.e(396).then(n.t.bind(null,"S6ln",7))
case"moment/locale/hu":return n.e(398).then(n.t.bind(null,"WxRl",7))
case"moment/locale/id":return n.e(400).then(n.t.bind(null,"UDhR",7))
case"moment/locale/is":return n.e(401).then(n.t.bind(null,"BVg3",7))
case"moment/locale/it-ch":return n.e(403).then(n.t.bind(null,"bxKX",7))
case"moment/locale/it":return n.e(402).then(n.t.bind(null,"bpih",7))
case"moment/locale/ja":return n.e(404).then(n.t.bind(null,"B55N",7))
case"moment/locale/jv":return n.e(405).then(n.t.bind(null,"tUCv",7))
case"moment/locale/ka":return n.e(406).then(n.t.bind(null,"IBtZ",7))
case"moment/locale/kk":return n.e(407).then(n.t.bind(null,"bXm7",7))
case"moment/locale/km":return n.e(408).then(n.t.bind(null,"6B0Y",7))
case"moment/locale/kn":return n.e(409).then(n.t.bind(null,"PpIw",7))
case"moment/locale/ko":return n.e(410).then(n.t.bind(null,"Ivi+",7))
case"moment/locale/ku":return n.e(411).then(n.t.bind(null,"JCF/",7))
case"moment/locale/ky":return n.e(412).then(n.t.bind(null,"lgnt",7))
case"moment/locale/lb":return n.e(413).then(n.t.bind(null,"RAwQ",7))
case"moment/locale/lo":return n.e(414).then(n.t.bind(null,"sp3z",7))
case"moment/locale/lt":return n.e(415).then(n.t.bind(null,"JvlW",7))
case"moment/locale/lv":return n.e(416).then(n.t.bind(null,"uXwI",7))
case"moment/locale/me":return n.e(417).then(n.t.bind(null,"KTz0",7))
case"moment/locale/mi":return n.e(418).then(n.t.bind(null,"aIsn",7))
case"moment/locale/mk":return n.e(420).then(n.t.bind(null,"aQkU",7))
case"moment/locale/ml":return n.e(421).then(n.t.bind(null,"AvvY",7))
case"moment/locale/mn":return n.e(422).then(n.t.bind(null,"lYtQ",7))
case"moment/locale/mr":return n.e(423).then(n.t.bind(null,"Ob0Z",7))
case"moment/locale/ms-my":return n.e(425).then(n.t.bind(null,"ZAMP",7))
case"moment/locale/ms":return n.e(424).then(n.t.bind(null,"6+QB",7))
case"moment/locale/mt":return n.e(426).then(n.t.bind(null,"G0Uy",7))
case"moment/locale/my":return n.e(427).then(n.t.bind(null,"honF",7))
case"moment/locale/nb":return n.e(428).then(n.t.bind(null,"bOMt",7))
case"moment/locale/ne":return n.e(429).then(n.t.bind(null,"OjkT",7))
case"moment/locale/nl-be":return n.e(431).then(n.t.bind(null,"2ykv",7))
case"moment/locale/nl":return n.e(430).then(n.t.bind(null,"+s0g",7))
case"moment/locale/nn":return n.e(432).then(n.t.bind(null,"uEye",7))
case"moment/locale/pa-in":return n.e(433).then(n.t.bind(null,"8/+R",7))
case"moment/locale/pt-br":return n.e(436).then(n.t.bind(null,"0tRk",7))
case"moment/locale/pt":return n.e(435).then(n.t.bind(null,"8mBD",7))
case"moment/locale/ro":return n.e(437).then(n.t.bind(null,"lyxo",7))
case"moment/locale/ru":return n.e(438).then(n.t.bind(null,"lXzo",7))
case"moment/locale/sd":return n.e(439).then(n.t.bind(null,"Z4QM",7))
case"moment/locale/se":return n.e(440).then(n.t.bind(null,"//9w",7))
case"moment/locale/si":return n.e(441).then(n.t.bind(null,"7aV9",7))
case"moment/locale/sk":return n.e(442).then(n.t.bind(null,"e+ae",7))
case"moment/locale/sq":return n.e(444).then(n.t.bind(null,"yPMs",7))
case"moment/locale/sr-cyrl":return n.e(446).then(n.t.bind(null,"E+lV",7))
case"moment/locale/sr":return n.e(445).then(n.t.bind(null,"zx6S",7))
case"moment/locale/ss":return n.e(447).then(n.t.bind(null,"Ur1D",7))
case"moment/locale/sv":return n.e(448).then(n.t.bind(null,"X709",7))
case"moment/locale/sw":return n.e(449).then(n.t.bind(null,"dNwA",7))
case"moment/locale/ta":return n.e(450).then(n.t.bind(null,"PeUW",7))
case"moment/locale/te":return n.e(451).then(n.t.bind(null,"XLvN",7))
case"moment/locale/tet":return n.e(452).then(n.t.bind(null,"V2x9",7))
case"moment/locale/tg":return n.e(453).then(n.t.bind(null,"Oxv6",7))
case"moment/locale/th":return n.e(454).then(n.t.bind(null,"EOgW",7))
case"moment/locale/tl-ph":return n.e(455).then(n.t.bind(null,"Dzi0",7))
case"moment/locale/tlh":return n.e(456).then(n.t.bind(null,"z3Vd",7))
case"moment/locale/tr":return n.e(457).then(n.t.bind(null,"DoHr",7))
case"moment/locale/tzl":return n.e(458).then(n.t.bind(null,"z1FC",7))
case"moment/locale/tzm-latn":return n.e(460).then(n.t.bind(null,"tT3J",7))
case"moment/locale/tzm":return n.e(459).then(n.t.bind(null,"wQk9",7))
case"moment/locale/ug-cn":return n.e(461).then(n.t.bind(null,"YRex",7))
case"moment/locale/uk":return n.e(462).then(n.t.bind(null,"raLr",7))
case"moment/locale/ur":return n.e(463).then(n.t.bind(null,"UpQW",7))
case"moment/locale/uz-latn":return n.e(465).then(n.t.bind(null,"AQ68",7))
case"moment/locale/uz":return n.e(464).then(n.t.bind(null,"Loxo",7))
case"moment/locale/vi":return n.e(466).then(n.t.bind(null,"KSF8",7))
case"moment/locale/x-pseudo":return n.e(467).then(n.t.bind(null,"/X5v",7))
case"moment/locale/yo":return n.e(468).then(n.t.bind(null,"fzPg",7))
case"moment/locale/zh-cn":return n.e(469).then(n.t.bind(null,"XDpg",7))
case"moment/locale/zh-hk":return n.e(470).then(n.t.bind(null,"SatO",7))
case"moment/locale/zh-tw":return n.e(471).then(n.t.bind(null,"kOpN",7))
case"moment/locale/de":return n.e(364).then(n.t.bind(null,"i1NT",7))
case"moment/locale/fa":return n.e(382).then(n.t.bind(null,"9EA3",7))
case"moment/locale/fr":return n.e(385).then(n.t.bind(null,"yHQ/",7))
case"moment/locale/fr-ca":return n.e(386).then(n.t.bind(null,"wp3t",7))
case"moment/locale/he":return n.e(394).then(n.t.bind(null,"QClQ",7))
case"moment/locale/ht-ht":return n.e(397).then(n.bind(null,"YLBj"))
case"moment/locale/hy-am":return n.e(399).then(n.t.bind(null,"oPdC",7))
case"moment/locale/mi-nz":return n.e(419).then(n.bind(null,"cU1G"))
case"moment/locale/pl":return n.e(434).then(n.t.bind(null,"mht4",7))
case"moment/locale/sl":return n.e(443).then(n.t.bind(null,"PKY2",7))
default:console.warn("couldn't load moment/locale/",e)}}D("moment/locale/"+ENV.MOMENT_LOCALE)}function E(e){switch(e){case"grade_summary":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(11),n.e(13),n.e(14),n.e(15),n.e(16),n.e(18),n.e(21),n.e(35),n.e(33),n.e(36),n.e(38),n.e(42),n.e(47),n.e(54),n.e(70),n.e(114),n.e(98),n.e(292)]).then(n.bind(null,"+Oxi"))
case"legacy/assignments_peer_reviews":return n.e(303).then(n.bind(null,"vVlV"))
case"legacy/context_media_object_inline":return Promise.all([n.e(15),n.e(38),n.e(304)]).then(n.bind(null,"gysS"))
case"legacy/context_roster_usage":return n.e(305).then(n.bind(null,"6YAG"))
case"legacy/context_roster_user_services":return n.e(307).then(n.bind(null,"Q+jt"))
case"legacy/context_roster_user":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(14),n.e(51),n.e(86),n.e(306)]).then(n.bind(null,"cx8V"))
case"legacy/context_undelete_item":return n.e(308).then(n.bind(null,"czh8"))
case"legacy/courses_show":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(17),n.e(22),n.e(27),n.e(32),n.e(33),n.e(36),n.e(43),n.e(47),n.e(51),n.e(61),n.e(110),n.e(309)]).then(n.bind(null,"1380"))
case"legacy/eportfolios_wizard_box":return n.e(310).then(n.bind(null,"Epx3"))
case"legacy/error_form":return n.e(311).then(n.bind(null,"f5v+"))
case"legacy/external_content_cancel":return n.e(312).then(n.bind(null,"6D3x"))
case"legacy/external_content_success":return n.e(313).then(n.bind(null,"D8eX"))
case"legacy/external_tools_tool_show":return Promise.all([n.e(5),n.e(58),n.e(314)]).then(n.bind(null,"gQNp"))
case"legacy/inlined_preview":return n.e(315).then(n.bind(null,"fFPY"))
case"legacy/quiz_submission":return n.e(316).then(n.bind(null,"vzpB"))
case"legacy/rubrics_index":return Promise.all([n.e(121),n.e(317)]).then(n.bind(null,"H9aJ"))
case"legacy/rubrics_show":return Promise.all([n.e(121),n.e(318)]).then(n.bind(null,"ZFRr"))
case"legacy/submissions_show_preview_media":return Promise.all([n.e(15),n.e(38),n.e(319)]).then(n.bind(null,"Dtsb"))
case"legacy/submissions_show_preview_text":return n.e(320).then(n.bind(null,"FJCv"))
case"legacy/submissions_show_preview_upload":return n.e(321).then(n.bind(null,"JT6p"))
case"legacy/terms_index":return n.e(322).then(n.bind(null,"MeVc"))
case"legacy/user_outcome_results":return n.e(323).then(n.bind(null,"4e82"))
case"legacy/users_admin_merge":return Promise.all([n.e(53),n.e(324)]).then(n.bind(null,"MaxM"))
case"legacy/users_index":return n.e(325).then(n.bind(null,"2UL9"))
case"account_admin_tools":return Promise.all([n.e(5),n.e(16),n.e(18),n.e(53),n.e(215)]).then(n.bind(null,"d9FD"))
case"account_course_user_search":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(17),n.e(20),n.e(21),n.e(22),n.e(36),n.e(43),n.e(48),n.e(47),n.e(103),n.e(216)]).then(n.bind(null,"M7Ud"))
case"account_grading_standards":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(14),n.e(17),n.e(18),n.e(78),n.e(106),n.e(217)]).then(n.bind(null,"Tqu8"))
case"account_search":return n.e(218).then(n.bind(null,"BnhC"))
case"account_settings":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(9),n.e(11),n.e(16),n.e(18),n.e(20),n.e(19),n.e(23),n.e(39),n.e(40),n.e(59),n.e(81),n.e(88),n.e(219)]).then(n.bind(null,"praF"))
case"account_show":return Promise.all([n.e(5),n.e(53),n.e(220)]).then(n.bind(null,"t56W"))
case"account_statistics":return n.e(221).then(n.bind(null,"cwVi"))
case"act_as_modal":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(10),n.e(12),n.e(222)]).then(n.bind(null,"6MGd"))
case"add_course_or_user":return Promise.all([n.e(88),n.e(223)]).then(n.bind(null,"FXcA"))
case"alerts":return n.e(224).then(n.bind(null,"chPu"))
case"all_courses":return n.e(225).then(n.bind(null,"clAl"))
case"announcements_index_v2":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(17),n.e(20),n.e(19),n.e(21),n.e(22),n.e(25),n.e(40),n.e(43),n.e(62),n.e(76),n.e(95),n.e(229)]).then(n.bind(null,"UBuB"))
case"announcements_on_home_page":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(9),n.e(11),n.e(13),n.e(14),n.e(17),n.e(20),n.e(25),n.e(62),n.e(95),n.e(230)]).then(n.bind(null,"hrwp"))
case"assignment_edit":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(11),n.e(13),n.e(18),n.e(19),n.e(23),n.e(25),n.e(30),n.e(34),n.e(39),n.e(52),n.e(77),n.e(83),n.e(79),n.e(82),n.e(87),n.e(78),n.e(231)]).then(n.bind(null,"bjhS"))
case"assignment_grade_summary":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(22),n.e(28),n.e(29),n.e(31),n.e(32),n.e(41),n.e(46),n.e(45),n.e(55),n.e(232)]).then(n.bind(null,"l3Wo"))
case"assignment_index":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(14),n.e(16),n.e(21),n.e(24),n.e(25),n.e(34),n.e(37),n.e(44),n.e(43),n.e(50),n.e(49),n.e(83),n.e(109),n.e(233)]).then(n.bind(null,"sMe2"))
case"assignment_show":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(9),n.e(11),n.e(13),n.e(19),n.e(22),n.e(25),n.e(30),n.e(36),n.e(44),n.e(52),n.e(58),n.e(77),n.e(234)]).then(n.bind(null,"KuFa"))
case"assignments_2_show_student":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(11),n.e(13),n.e(15),n.e(27),n.e(28),n.e(29),n.e(31),n.e(33),n.e(42),n.e(66),n.e(80),n.e(97),n.e(235)]).then(n.bind(null,"0pTV"))
case"assignments_2_show_teacher":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(17),n.e(20),n.e(19),n.e(23),n.e(27),n.e(28),n.e(29),n.e(31),n.e(32),n.e(33),n.e(40),n.e(46),n.e(51),n.e(66),n.e(236)]).then(n.bind(null,"5jTU"))
case"authentication_providers":return Promise.all([n.e(0),n.e(1),n.e(3),n.e(7),n.e(8),n.e(21),n.e(237)]).then(n.bind(null,"Ip5A"))
case"blueprint_course_child":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(19),n.e(22),n.e(30),n.e(92),n.e(105),n.e(238)]).then(n.bind(null,"hsYL"))
case"blueprint_course_master":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(17),n.e(22),n.e(41),n.e(92),n.e(239)]).then(n.bind(null,"DWaI"))
case"brand_configs_index":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(10),n.e(12),n.e(108),n.e(240)]).then(n.bind(null,"9Hx+"))
case"calendar_appointment_group_edit":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(11),n.e(13),n.e(15),n.e(17),n.e(33),n.e(84),n.e(102),n.e(242)]).then(n.bind(null,"yihm"))
case"calendar2":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(10),n.e(12),n.e(14),n.e(15),n.e(18),n.e(26),n.e(37),n.e(69),n.e(67),n.e(84),n.e(102),n.e(241)]).then(n.bind(null,"4A8A"))
case"change_password":return Promise.all([n.e(48),n.e(246)]).then(n.bind(null,"pPte"))
case"choose_mastery_path":return Promise.all([n.e(22),n.e(247)]).then(n.bind(null,"tKWy"))
case"collaborations":return Promise.all([n.e(5),n.e(39),n.e(248)]).then(n.bind(null,"+r+A"))
case"conferences":return Promise.all([n.e(5),n.e(16),n.e(249)]).then(n.bind(null,"PDZI"))
case"confirm_email":return Promise.all([n.e(68),n.e(250)]).then(n.bind(null,"OeCm"))
case"content_exports":return n.e(251).then(n.bind(null,"BAIQ"))
case"content_migration":return Promise.all([n.e(5),n.e(16),n.e(34),n.e(53),n.e(107),n.e(117),n.e(252)]).then(n.bind(null,"AIQ6"))
case"content_notices":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(253)]).then(n.bind(null,"TB3z"))
case"context_module_progressions":return Promise.all([n.e(5),n.e(16),n.e(254)]).then(n.bind(null,"5yAN"))
case"context_modules":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(14),n.e(19),n.e(21),n.e(24),n.e(26),n.e(44),n.e(50),n.e(49),n.e(60),n.e(63),n.e(73),n.e(255)]).then(n.bind(null,"JCxF"))
case"conversations_new":return Promise.all([n.e(0),n.e(1),n.e(3),n.e(5),n.e(7),n.e(8),n.e(16),n.e(17),n.e(21),n.e(39),n.e(256)]).then(n.bind(null,"Q0AO"))
case"copy_course":return Promise.all([n.e(5),n.e(16),n.e(107),n.e(257)]).then(n.bind(null,"w6v+"))
case"course_grading_standards":return Promise.all([n.e(18),n.e(106),n.e(259)]).then(n.bind(null,"/0fG"))
case"course_link_validator":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(260)]).then(n.bind(null,"KE3f"))
case"course_list":return n.e(261).then(n.bind(null,"GCJL"))
case"course_settings":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(16),n.e(17),n.e(18),n.e(20),n.e(21),n.e(24),n.e(30),n.e(50),n.e(47),n.e(53),n.e(81),n.e(87),n.e(111),n.e(99),n.e(262)]).then(n.bind(null,"EhxN"))
case"course_statistics":return Promise.all([n.e(5),n.e(18),n.e(263)]).then(n.bind(null,"kmSh"))
case"course_wizard":return Promise.all([n.e(0),n.e(1),n.e(6),n.e(10),n.e(89),n.e(264)]).then(n.bind(null,"2QAU"))
case"course":return n.e(258).then(n.bind(null,"xavR"))
case"dashboard_card":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(11),n.e(20),n.e(26),n.e(27),n.e(37),n.e(56),n.e(69),n.e(266)]).then(n.bind(null,"F4K7"))
case"dashboard":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(17),n.e(20),n.e(22),n.e(26),n.e(27),n.e(32),n.e(33),n.e(36),n.e(37),n.e(47),n.e(51),n.e(56),n.e(61),n.e(69),n.e(265)]).then(n.bind(null,"GrKA"))
case"deep_linking_response":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(267)]).then(n.bind(null,"pp+Q"))
case"developer_keys_react":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(17),n.e(20),n.e(19),n.e(27),n.e(32),n.e(33),n.e(40),n.e(43),n.e(51),n.e(59),n.e(76),n.e(80),n.e(116),n.e(110),n.e(119),n.e(277)]).then(n.bind(null,"vhJm"))
case"developer_keys":return Promise.all([n.e(5),n.e(276)]).then(n.bind(null,"Yuih"))
case"discussion_topics_edit":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(11),n.e(13),n.e(14),n.e(18),n.e(19),n.e(23),n.e(25),n.e(30),n.e(32),n.e(34),n.e(39),n.e(52),n.e(62),n.e(77),n.e(83),n.e(79),n.e(82),n.e(87),n.e(78),n.e(279)]).then(n.bind(null,"Ft9G"))
case"discussion_topics_index_v2":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(17),n.e(20),n.e(19),n.e(21),n.e(22),n.e(25),n.e(33),n.e(41),n.e(44),n.e(40),n.e(50),n.e(45),n.e(56),n.e(62),n.e(280)]).then(n.bind(null,"KWV3"))
case"discussion":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(16),n.e(20),n.e(19),n.e(23),n.e(22),n.e(25),n.e(26),n.e(27),n.e(28),n.e(29),n.e(30),n.e(31),n.e(35),n.e(278)]).then(n.bind(null,"2jkv"))
case"edit_calendar_event":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(14),n.e(18),n.e(23),n.e(24),n.e(79),n.e(84),n.e(112),n.e(281)]).then(n.bind(null,"i5uA"))
case"edit_rubric":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(15),n.e(16),n.e(20),n.e(23),n.e(26),n.e(27),n.e(35),n.e(37),n.e(54),n.e(69),n.e(64),n.e(72),n.e(114),n.e(282)]).then(n.bind(null,"JNmV"))
case"eportfolio":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(10),n.e(12),n.e(21),n.e(23),n.e(24),n.e(113),n.e(283)]).then(n.bind(null,"2ALp"))
case"epub_exports":return Promise.all([n.e(0),n.e(284)]).then(n.bind(null,"KnLu"))
case"external_apps":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(12),n.e(26),n.e(66),n.e(100),n.e(285)]).then(n.bind(null,"m0D1"))
case"external_tool_redirect":return n.e(286).then(n.bind(null,"27kk"))
case"file_inline":return n.e(287).then(n.bind(null,"8KrS"))
case"file_not_found_bundle":return n.e(288).then(n.bind(null,"Lnle"))
case"file_preview":return Promise.all([n.e(15),n.e(38),n.e(289)]).then(n.bind(null,"3DUj"))
case"file_show":return n.e(290).then(n.bind(null,"EII2"))
case"focus_helper":return n.e(291).then(n.bind(null,"hxBl"))
case"gradebook_history":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(11),n.e(13),n.e(14),n.e(22),n.e(32),n.e(42),n.e(51),n.e(294)]).then(n.bind(null,"e3rW"))
case"gradebook_uploads":return Promise.all([n.e(24),n.e(42),n.e(57),n.e(295)]).then(n.bind(null,"MXWF"))
case"gradebook":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(15),n.e(24),n.e(28),n.e(29),n.e(31),n.e(35),n.e(41),n.e(42),n.e(46),n.e(45),n.e(55),n.e(57),n.e(70),n.e(63),n.e(67),n.e(293)]).then(n.bind(null,"pSAS"))
case"gradezilla":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(17),n.e(20),n.e(21),n.e(24),n.e(26),n.e(27),n.e(28),n.e(29),n.e(31),n.e(35),n.e(33),n.e(36),n.e(37),n.e(296)]).then(n.bind(null,"LI7N"))
case"graphiql":return Promise.all([n.e(29),n.e(297)]).then(n.bind(null,"Tzw1"))
case"group_submission_reminder":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(298)]).then(n.bind(null,"oOGG"))
case"jobs":return Promise.all([n.e(24),n.e(57),n.e(300)]).then(n.bind(null,"MbSM"))
case"ldap_settings_test":return Promise.all([n.e(88),n.e(301)]).then(n.bind(null,"xMd9"))
case"learning_outcomes":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(10),n.e(12),n.e(14),n.e(16),n.e(23),n.e(35),n.e(64),n.e(72),n.e(80),n.e(302)]).then(n.bind(null,"TwNl"))
case"license_help":return n.e(326).then(n.bind(null,"5Z8V"))
case"link_enrollment":return n.e(327).then(n.bind(null,"Fy3I"))
case"locale":return n.e(328).then(n.bind(null,"Z/Sw"))
case"login":return Promise.all([n.e(5),n.e(48),n.e(75),n.e(329)]).then(n.bind(null,"L/di"))
case"manage_avatars":return n.e(331).then(n.bind(null,"JfQv"))
case"manage_groups2":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(16),n.e(18),n.e(21),n.e(28),n.e(29),n.e(31),n.e(34),n.e(39),n.e(41),n.e(46),n.e(50),n.e(45),n.e(55),n.e(332)]).then(n.bind(null,"LZx3"))
case"messages":return Promise.all([n.e(5),n.e(18),n.e(334)]).then(n.bind(null,"nosv"))
case"mobile_login":return Promise.all([n.e(5),n.e(48),n.e(75),n.e(340)]).then(n.bind(null,"zRAa"))
case"moderate_quiz":return n.e(341).then(n.bind(null,"/31U"))
case"module_sequence_footer":return Promise.all([n.e(5),n.e(58),n.e(342)]).then(n.bind(null,"m+tm"))
case"navigation_header":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(202),n.e(477)]).then(n.bind(null,"2kMX"))
case"notification_preferences":return Promise.all([n.e(0),n.e(1),n.e(5),n.e(7),n.e(8),n.e(43),n.e(68),n.e(478)]).then(n.bind(null,"pqmP"))
case"oauth2_confirm":return n.e(479).then(n.bind(null,"Kqdq"))
case"otp_login":return n.e(480).then(n.bind(null,"mHEZ"))
case"page_views":return Promise.all([n.e(5),n.e(481)]).then(n.bind(null,"XYkR"))
case"permissions_index":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(11),n.e(13),n.e(14),n.e(15),n.e(20),n.e(19),n.e(21),n.e(22),n.e(27),n.e(32),n.e(40),n.e(76),n.e(482)]).then(n.bind(null,"qiQo"))
case"plugins":return n.e(483).then(n.bind(null,"yaHj"))
case"prerequisites_lookup":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(14),n.e(19),n.e(21),n.e(24),n.e(26),n.e(44),n.e(50),n.e(49),n.e(60),n.e(63),n.e(73),n.e(484)]).then(n.bind(null,"l+3W"))
case"profile_show":return Promise.all([n.e(5),n.e(68),n.e(101),n.e(486)]).then(n.bind(null,"nKyR"))
case"profile":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(10),n.e(12),n.e(16),n.e(18),n.e(24),n.e(68),n.e(81),n.e(86),n.e(101),n.e(485)]).then(n.bind(null,"zX6k"))
case"progress_pill":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(9),n.e(11),n.e(13),n.e(487)]).then(n.bind(null,"Yvgw"))
case"question_bank":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(10),n.e(12),n.e(16),n.e(23),n.e(35),n.e(64),n.e(72),n.e(488)]).then(n.bind(null,"bMyb"))
case"question_banks":return n.e(489).then(n.bind(null,"Sp4U"))
case"quiz_history":return n.e(490).then(n.bind(null,"fO6K"))
case"quiz_show":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(15),n.e(16),n.e(20),n.e(19),n.e(23),n.e(22),n.e(25),n.e(26),n.e(27),n.e(30),n.e(35),n.e(34),n.e(36),n.e(37),n.e(44),n.e(491)]).then(n.bind(null,"wWL5"))
case"quiz_statistics_cqs":return Promise.all([n.e(70),n.e(96),n.e(492)]).then(n.bind(null,"LriP"))
case"quiz_submission_events":return Promise.all([n.e(85),n.e(96),n.e(493)]).then(n.bind(null,"lazC"))
case"quizzes_bundle":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(15),n.e(16),n.e(18),n.e(20),n.e(19),n.e(23),n.e(24),n.e(25),n.e(26),n.e(27),n.e(30),n.e(35),n.e(37),n.e(54),n.e(52),n.e(494)]).then(n.bind(null,"8hJu"))
case"quizzes_index":return Promise.all([n.e(5),n.e(16),n.e(25),n.e(44),n.e(49),n.e(109),n.e(495)]).then(n.bind(null,"nIYa"))
case"react_collaborations":return Promise.all([n.e(89),n.e(496)]).then(n.bind(null,"DxGw"))
case"react_files":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(10),n.e(12),n.e(14),n.e(16),n.e(26),n.e(37),n.e(60),n.e(64),n.e(90),n.e(497)]).then(n.bind(null,"pzLC"))
case"react_groups":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(26),n.e(39),n.e(498)]).then(n.bind(null,"E6Yh"))
case"react_outcome_alignment":return Promise.all([n.e(35),n.e(499)]).then(n.bind(null,"D5l8"))
case"registration_confirmation":return Promise.all([n.e(48),n.e(501)]).then(n.bind(null,"yxRH"))
case"registration":return Promise.all([n.e(5),n.e(48),n.e(75),n.e(500)]).then(n.bind(null,"xtFU"))
case"roster":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(16),n.e(17),n.e(18),n.e(21),n.e(22),n.e(28),n.e(29),n.e(31),n.e(34),n.e(39),n.e(41),n.e(43),n.e(46),n.e(45),n.e(55),n.e(502)]).then(n.bind(null,"pP2b"))
case"rubric_assessment":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(12),n.e(15),n.e(17),n.e(32),n.e(54),n.e(74),n.e(503)]).then(n.bind(null,"OjvO"))
case"screenreader_gradebook":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(21),n.e(28),n.e(29),n.e(31),n.e(35),n.e(41),n.e(42),n.e(46),n.e(45),n.e(55),n.e(70),n.e(67),n.e(98),n.e(504)]).then(n.bind(null,"QT9r"))
case"section":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(28),n.e(29),n.e(31),n.e(41),n.e(46),n.e(45),n.e(55),n.e(53),n.e(505)]).then(n.bind(null,"9ypN"))
case"select_content_dialog":return n.e(506).then(n.bind(null,"0ACn"))
case"self_enrollment":return Promise.all([n.e(48),n.e(507)]).then(n.bind(null,"Tdus"))
case"sis_import":return n.e(508).then(n.bind(null,"006W"))
case"slickgrid":return Promise.all([n.e(24),n.e(57),n.e(509)]).then(n.bind(null,"sYoi"))
case"speed_grader":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(15),n.e(17),n.e(20),n.e(28),n.e(29),n.e(31),n.e(32),n.e(33),n.e(36),n.e(38),n.e(42),n.e(43),n.e(54),n.e(74),n.e(510)]).then(n.bind(null,"9fel"))
case"student_group_dialog":return Promise.all([n.e(5),n.e(34),n.e(39),n.e(82),n.e(511)]).then(n.bind(null,"NEom"))
case"styleguide":return Promise.all([n.e(18),n.e(49),n.e(512)]).then(n.bind(null,"OhI1"))
case"sub_accounts":return n.e(513).then(n.bind(null,"J/09"))
case"submission_download":return n.e(514).then(n.bind(null,"KZuI"))
case"submissions":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(15),n.e(17),n.e(32),n.e(33),n.e(38),n.e(42),n.e(54),n.e(74),n.e(515)]).then(n.bind(null,"J+og"))
case"submit_assignment":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(10),n.e(14),n.e(15),n.e(18),n.e(23),n.e(38),n.e(90),n.e(94),n.e(113),n.e(117),n.e(516)]).then(n.bind(null,"5yg4"))
case"syllabus":return Promise.all([n.e(5),n.e(23),n.e(517)]).then(n.bind(null,"A1zF"))
case"take_quiz":return Promise.all([n.e(5),n.e(23),n.e(518)]).then(n.bind(null,"86lW"))
case"teacher_activity_report":return n.e(519).then(n.bind(null,"Gqpl"))
case"terms_of_service_modal":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(10),n.e(12),n.e(23),n.e(520)]).then(n.bind(null,"Px66"))
case"terms_of_use":return n.e(521).then(n.bind(null,"giI7"))
case"theme_editor":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(10),n.e(12),n.e(15),n.e(27),n.e(108),n.e(522)]).then(n.bind(null,"2hGj"))
case"theme_preview":return Promise.all([n.e(18),n.e(523)]).then(n.bind(null,"i+Zb"))
case"user_grades":return n.e(525).then(n.bind(null,"YSa5"))
case"user_lists":return n.e(526).then(n.bind(null,"UbUi"))
case"user_logins":return n.e(527).then(n.bind(null,"LGfO"))
case"user_name":return n.e(528).then(n.bind(null,"ubpf"))
case"user_notes":return n.e(529).then(n.bind(null,"O9BN"))
case"user_observees":return Promise.all([n.e(5),n.e(16),n.e(530)]).then(n.bind(null,"zeP5"))
case"user":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(10),n.e(12),n.e(86),n.e(524)]).then(n.bind(null,"v4ae"))
case"visibility_help":return n.e(531).then(n.bind(null,"0uoZ"))
case"webzip_export":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(532)]).then(n.bind(null,"KBAO"))
case"wiki_page_edit":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(9),n.e(11),n.e(13),n.e(19),n.e(23),n.e(25),n.e(30),n.e(34),n.e(52),n.e(65),n.e(104),n.e(533)]).then(n.bind(null,"wEmX"))
case"wiki_page_index":return Promise.all([n.e(5),n.e(16),n.e(23),n.e(25),n.e(34),n.e(49),n.e(65),n.e(104),n.e(534)]).then(n.bind(null,"WgX5"))
case"wiki_page_revisions":return Promise.all([n.e(5),n.e(16),n.e(25),n.e(65),n.e(535)]).then(n.bind(null,"eG2U"))
case"wiki_page_show":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(11),n.e(13),n.e(14),n.e(19),n.e(21),n.e(24),n.e(25),n.e(26),n.e(30),n.e(34),n.e(44),n.e(50),n.e(49),n.e(52),n.e(58),n.e(60),n.e(63),n.e(65),n.e(73),n.e(536)]).then(n.bind(null,"XpJL"))
case"analytics-course":return Promise.all([n.e(5),n.e(71),n.e(115),n.e(226)]).then(n.bind(null,"YfPF"))
case"analytics-department":return Promise.all([n.e(5),n.e(71),n.e(227)]).then(n.bind(null,"2fIO"))
case"analytics-student_in_course":return Promise.all([n.e(5),n.e(71),n.e(115),n.e(228)]).then(n.bind(null,"XJ8I"))
case"catalog_provisioner-domains":return n.e(245).then(n.t.bind(null,"Y0BL",7))
case"demo_site-demo_site_overlay":return Promise.all([n.e(0),n.e(37),n.e(268)]).then(n.bind(null,"vPcP"))
case"demo_site-demos_add":return n.e(269).then(n.bind(null,"Znh7"))
case"demo_site-demos_analytics_tracking":return n.e(270).then(n.bind(null,"TC1A"))
case"demo_site-demos_recaptcha":return n.e(271).then(n.bind(null,"0jV+"))
case"demo_site-demos_registration_stats":return Promise.all([n.e(203),n.e(272)]).then(n.bind(null,"16JZ"))
case"demo_site-demos_reports_graph":return Promise.all([n.e(203),n.e(273)]).then(n.bind(null,"ZeOu"))
case"demo_site-demos_reports_index":return n.e(274).then(n.bind(null,"IVlS"))
case"demo_site-registration_modal":return n.e(275).then(n.bind(null,"1UjG"))
case"instructure_misc_plugin-mobile_verify":return Promise.all([n.e(24),n.e(57),n.e(299)]).then(n.bind(null,"2e/A"))
case"migration_tool-bulk_course_migrations_index":return n.e(335).then(n.bind(null,"8jaz"))
case"migration_tool-content_imports_angel_config":return n.e(336).then(n.bind(null,"tZx/"))
case"migration_tool-content_imports_blackboard_config":return n.e(337).then(n.bind(null,"FVl2"))
case"migration_tool-content_imports_d2l_config":return n.e(338).then(n.bind(null,"v7Jq"))
case"migration_tool-content_imports_webct_config":return n.e(339).then(n.bind(null,"hfwC"))
case"multiple_root_accounts-additional_settings":return n.e(472).then(n.bind(null,"RUYi"))
case"multiple_root_accounts-plugin_settings":return n.e(473).then(n.bind(null,"Au6U"))
case"multiple_root_accounts-suspended_account_warning":return n.e(476).then(n.bind(null,"GhjG"))
case"multiple_root_accounts-root_account_details":return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(9),n.e(66),n.e(119),n.e(474)]).then(n.bind(null,"075U"))
case"multiple_root_accounts-root_accounts_create_form":return n.e(475).then(n.bind(null,"Ck2k"))
default:throw new Error("couldn't find bundle "+e)}}n("0sPK")
n("jYyc")
n("Z+Ib")
var S=n("u7Gu")
var C=n("pQTu")
var P=n("m0r6")
Object(P["a"])({ar:{ajax_errors:{error_heading:"خطأ Ajax: %{status_code}",errors:{connection_lost:"تم فقد الاتصال بـ %{host}.  يُرجى التأكد من اتصالك بالإنترنت وحاول من جديد.",logged_out:"أنت غير مسجل الدخول حاليًا، قد يكون السبب في هذا هو فترة عدم النشاط الطويلة.",unhandled:"للأسف! لم يعمل الطلب الأخير."},links:{details:"تفاصيل...",login:"تسجيل الدخول"},no_text:"بدون نص"}},cy:{ajax_errors:{error_heading:"Gwall Ajax: %{status_code}",errors:{connection_lost:"Wedi colli’r cysylltiad â %{host}.  Gwnewch yn siŵr bod gennych chi gysylltiad â’r rhyngrwyd, a rhoi cynnig arall arni.",logged_out:"Dydych chi ddim wedi mewngofnodi ar hyn o bryd, oherwydd nad ydych chi wedi gwneud dim byd ers tro o bosib.",unhandled:"Wps! Dydy’r cais diwethaf ddim wedi gweithio’n iawn."},links:{details:"manylion...",login:"Mewngofnodi"},no_text:"Dim testun"}},da:{ajax_errors:{error_heading:"Ajax-fejl: %{status_code}",errors:{connection_lost:"Forbindelse til %{host} blev tabt.  Sørg for, at du er koblet til nettet og prøv igen.",logged_out:"Du er ikke logget på lige nu, muligvis grundet en længerevarende periode uden aktivitet",unhandled:"Hovsa! Den sidste anmodning mislykkedes."},links:{details:"nærmere oplysninger ...",login:"Login"},no_text:"Ingen tekst"}},"da-x-k12":{ajax_errors:{error_heading:"Ajax-fejl: %{status_code}",errors:{connection_lost:"Forbindelse til %{host} blev tabt.  Sørg for, at du er koblet til nettet og prøv igen.",logged_out:"Du er ikke logget på lige nu, muligvis grundet en længerevarende periode uden aktivitet",unhandled:"Hovsa! Den sidste anmodning mislykkedes."},links:{details:"nærmere oplysninger ...",login:"Login"},no_text:"Ingen tekst"}},de:{ajax_errors:{error_heading:"Ajax-Fehler: %{status_code}",errors:{connection_lost:"Die Verbindung mit %{host} ist abgebrochen. Stellen Sie die Internetverbindung wieder her, und versuchen Sie es erneut.",logged_out:"Sie sind derzeit nicht angemeldet. Der Grund hierfür ist möglicherweise längere Inaktivität.",unhandled:"Hoppla! Die letzte Anfrage war nicht erfolgreich."},links:{details:"Details ...",login:"Anmelden"},no_text:"Kein Text"}},el:{ajax_errors:{error_heading:"Σφάλμα Ajax: %{status_code}",errors:{connection_lost:"H σύνδεση προς τον %{host} διακόπηκε. Παρακαλώ βεβαιωθείτε πως είσαστε συνδεδεμένοι στο Ιντερνετ και προσπαθήστε ξανά",logged_out:"Δεν είστε συνδεμένος, πιθανώς λόγω μιας μακράς περιόδου αδράνειας",unhandled:"Ωχ, όχι! Η τελευταία αίτηση δεν λειτούργησε."},links:{details:"λεπτομέρειες...",login:"Είσοδος"},no_text:"Δεν υπάρχει κείμενο"}},"en-AU":{ajax_errors:{error_heading:"Ajax Error: %{status_code}",errors:{connection_lost:"Connection to %{host} was lost.  Please make sure you're connected to the Internet and try again.",logged_out:"You are not currently logged in, possibly due to a long period of inactivity.",unhandled:"Oops! The last request didn't work out."},links:{details:"details...",login:"Login"},no_text:"No text"}},"en-AU-x-unimelb":{ajax_errors:{error_heading:"Ajax Error: %{status_code}",errors:{connection_lost:"Connection to %{host} was lost.  Please make sure you're connected to the Internet and try again.",logged_out:"You are not currently logged in, possibly due to a long period of inactivity.",unhandled:"Oops! The last request didn't work out."},links:{details:"details...",login:"Login"},no_text:"No text"}},"en-CA":{ajax_errors:{error_heading:"Ajax Error: %{status_code}",errors:{connection_lost:"Connection to %{host} was lost.  Please make sure you're connected to the Internet and try again.",logged_out:"You are not currently logged in, possibly due to a long period of inactivity.",unhandled:"Oops! The last request didn't work out."},links:{details:"details...",login:"Login"},no_text:"No text"}},"en-GB":{ajax_errors:{error_heading:"Ajax Error: %{status_code}",errors:{connection_lost:"Connection to %{host} was lost.  Please make sure you're connected to the internet and try again.",logged_out:"You are not currently logged in, possibly due to a long period of inactivity.",unhandled:"Oops! The last request didn't work out."},links:{details:"details...",login:"Login"},no_text:"No text"}},"en-GB-x-lbs":{ajax_errors:{error_heading:"Ajax Error: %{status_code}",errors:{connection_lost:"Connection to %{host} was lost.  Please make sure you're connected to the internet and try again.",logged_out:"You are not currently logged in, possibly due to a long period of inactivity.",unhandled:"Oops! The last request didn't work out."},links:{details:"details...",login:"Login"},no_text:"No text"}},"en-GB-x-ukhe":{ajax_errors:{error_heading:"Ajax Error: %{status_code}",errors:{connection_lost:"Connection to %{host} was lost.  Please make sure you're connected to the internet and try again.",logged_out:"You are not currently logged in, possibly due to a long period of inactivity.",unhandled:"Oops! The last request didn't work out."},links:{details:"details...",login:"Login"},no_text:"No text"}},es:{ajax_errors:{error_heading:"Error Ajax: %{status_code}",errors:{connection_lost:"La conexión a %{host} se perdió. Por favor asegúrese que está conectado a Internet e intente de nuevo.",logged_out:"Esta sesión no está iniciada actualmente. La causa podría ser un largo período de inactividad.",unhandled:"¡Oops! La última solicitud no funcionó."},links:{details:"detalles...",login:"Iniciar sesión"},no_text:"Sin texto"}},fa:{ajax_errors:{error_heading:"خطای Ajax: %{status_code}",errors:{connection_lost:"اتصال به %{host} از دست رفت. لطفا مطمئن شوید به اینترنت متصل هستید  و دوباره سعی کنید.",logged_out:"احتمالا به دلیل عدم فعالیت به مدت طولانی، در حال حاضر در حالت ورود به سامانه قرار ندارید.",unhandled:"اوه! آخرین درخواست مؤثر نبود."},links:{details:"اطلاعات بیشتر...",login:"ورود"},no_text:"متن موجود نیست"}},fr:{ajax_errors:{error_heading:"Erreur Ajax : %{status_code}",errors:{connection_lost:"La connexion à %{host} a été perdue. Assurez-vous que vous êtes connecté à l’Internet puis réessayez.",logged_out:"Vous n’êtes pas connecté actuellement, probablement en raison d’une trop longue période d’inactivité.",unhandled:"Erreur. Votre dernière demande n’a pas fonctionné."},links:{details:"informations...",login:"Connexion"},no_text:"Aucun texte"}},"fr-CA":{ajax_errors:{error_heading:"Erreur Ajax : %{status_code}",errors:{connection_lost:"La connexion à %{host} a été perdue. Assurez-vous que vous êtes connecté à l’Internet puis réessayez.",logged_out:"Vous n’êtes pas connecté actuellement, probablement en raison d’une trop longue période d’inactivité.",unhandled:"Erreur. Votre dernière demande n’a pas fonctionné."},links:{details:"informations...",login:"Connexion"},no_text:"Aucun texte"}},he:{ajax_errors:{error_heading:"שגיאת AJAX: (תוכנה)  %{status_code}",errors:{connection_lost:"התקשורת ל %{host}  נפסקה. יש לוודא חיבור לאינטרנט ולנסות שוב.",logged_out:"אינך מחובר/ת למערכת, הדבר יכול לקרות עקב אי פעילות לפרק זמן ארוך.",unhandled:"אופס! הבקשה האחרונה לא התבצעה."},links:{details:"פרטים...",login:"התחברות"},no_text:"אין תוכן"}},ht:{ajax_errors:{error_heading:"Erè Ajax: %{status_code}",errors:{connection_lost:"Koneksyon a %{host} te pèdi. Tanpri asire w ke ou konekte sou entènèt epi eseye ankò.",logged_out:"Ou pa konekte pou kounye a, petèt se akòz yon peryòd tan san aktivite.",unhandled:"Oops! Dènye demann lan pa fonksyone."},links:{details:"detay",login:"Koneksyon"},no_text:"San tèks"}},hu:{ajax_errors:{error_heading:"Ajax hiba: %{status_code}",errors:{connection_lost:"A kapcsolat megszakadt a következő géppel:  %{host} . Kérjük, ellenőrizze, hogy az internetkapcsolata rendben működik és próbálja újra.",logged_out:"Ön jelenleg nincs belépve, ennek oka lehet, hogy hosszú ideig volt inaktív.",unhandled:"Hoppá! Az utolsó kérés nem működött."},links:{details:"bővebben...",login:"Belépés"},no_text:"Nincs szöveg"}},hy:{ajax_errors:{error_heading:"Ajax սխալ՝ %{status_code}",errors:{connection_lost:"%{host}-ի հետ միացումը կորավ: Համոզվեք, որ միացել եք Ինտերնետին և կրկին փորձեք:",logged_out:"Ներկայումս դուք համակարգում չեք, հնարավոր է, երկար ժամանակ գործողությունների բացակայության պատճառով:",unhandled:"Օյ, վերջին հարցումը անհաջող էր:"},links:{details:"մանրամասներ...",login:"Մուտք համակարգ"},no_text:"Տեքստ չկա"}},is:{ajax_errors:{error_heading:"Ajax-villa: %{status_code}",errors:{connection_lost:"Tenging við %{host} rofnaði. Gættu þess að hafa nettengingu og reyndu aftur.",logged_out:"Þú ert ekki með innskráningu, sennilega vegna langs tímabils óvirkni.",unhandled:"Þessi síðasta beiðni tókst ekki."},links:{details:"upplýsingar...",login:"Innskráning"},no_text:"Enginn texti"}},it:{ajax_errors:{error_heading:"Errore Ajax: %{status_code}",errors:{connection_lost:"Connessione a %{host} persa.  Assicurati di essere connesso a Internet e riprova.",logged_out:"Attualmente non sei connesso, probabilmente a causa di un lungo periodo di inattività.",unhandled:"Spiacenti. L'ultima richiesta non ha funzionato."},links:{details:"dettagli...",login:"Accedi"},no_text:"Nessun testo"}},ja:{ajax_errors:{error_heading:"Ajax エラー: %{status_code}",errors:{connection_lost:"%{host} への接続が失われました。インターネットに接続していることを確認してから、もう一度試してください。",logged_out:"現在ログインしていません。おそらく非アクティブの期間が長く続いたためと思われます。",unhandled:"問題が発生しました!前回の要求は失敗しています。"},links:{details:"詳細...",login:"ログイン"},no_text:"テキストはありません"}},ko:{ajax_errors:{error_heading:"Ajax 오류: %{status_code}",errors:{connection_lost:"%{host}와의 연결이 끊어졌습니다. 인터넷에 연결되어 있는지 확인하고 다시 시도하시기 바랍니다.",unhandled:"마지막 요청이 동작하지 않았습니다."},links:{details:"세부 정보",login:"로그인"},no_text:"텍스트 없음"}},mi:{ajax_errors:{error_heading:"Hapa Ajax: %{status_code}",errors:{connection_lost:"I ngaro hononga ki %{host}. Tēnā koa kia tūhono koe ki te Ipurangi, me te ngana anō.",logged_out:"Kaor ekoe i te takiuru i roto, tēnā pea na te roa o te wā hohekore.",unhandled:"Oops! Kihai i mahi i roto i te tono whakamutunga."},links:{details:"taipitopito ...",login:"takiuru"},no_text:"Kāore he kuputuhi"}},nb:{ajax_errors:{error_heading:"Ajax avvik: %{status_code}",errors:{connection_lost:"Tilkobling til %{host} ble brutt.  Sjekk at du er tilkoblet Internett og forsøk igjen.",logged_out:"Du er ikke logget inn, eventuelt på grunn av en lang periode av inaktivitet.",unhandled:"Oops! Den siste forespørselen fungerte ikke."},links:{details:"detaljer...",login:"Logg inn"},no_text:"Ingen tekst"}},"nb-x-k12":{ajax_errors:{error_heading:"Ajax avvik: %{status_code}",errors:{connection_lost:"Tilkobling til %{host} ble brutt.  Sjekk at du er tilkoblet Internett og forsøk igjen.",logged_out:"Du er ikke logget inn, eventuelt på grunn av en lang periode av inaktivitet.",unhandled:"Oops! Den siste forespørselen fungerte ikke."},links:{details:"detaljer...",login:"Logg inn"},no_text:"Ingen tekst"}},nl:{ajax_errors:{error_heading:"Ajax-fout: %{status_code}",errors:{connection_lost:"Verbinding met %{host} is verbroken. Controleer of er verbinding is met internet en probeer het opnieuw.",logged_out:"Je bent momenteel niet aangemeld, mogelijk als gevolg van een lange periode van inactiviteit.",unhandled:"Oeps! Het laatste verzoek is mislukt."},links:{details:"details...",login:"Aanmelden"},no_text:"Geen tekst"}},nn:{ajax_errors:{error_heading:"AJAX-feil: %{status_code}",errors:{connection_lost:"Tilkopling til %{host} er tapt.  Kontroller om du er tilkopla Internett og prøv på nytt.",logged_out:"Du er ikkje pålogga akkurat no, kanskje på grunn av ei lang periode utan aktivitet.",unhandled:"Ops! Den siste førespurnaden fungerte ikkje."},links:{details:"detaljar...",login:"Pålogging"},no_text:"Ingen tekst"}},pl:{ajax_errors:{error_heading:"Błąd programu Ajax: %{status_code}",errors:{connection_lost:"Utracono połączenie z %{host}.  Sprawdź połączenie z Internetem i spróbuj ponownie.",logged_out:"Uczestnik nie jest teraz zalogowany, prawdopodobnie z powodu długiego okresu nieaktywności.",unhandled:"Niestety! Ostatnie żądanie nie zostało zrealizowane."},links:{details:"informacje szczegółowe...",login:"Zaloguj"},no_text:"Brak tekstu"}},pt:{ajax_errors:{error_heading:"Erro Ajax: %{status_code}",errors:{connection_lost:"A ligação a %{host} foi perdida.  Verifique se está ligado à Internet e tente novamente.",logged_out:"Não tem sessão iniciada de momento, possivelmente devido a um longo período de inatividade.",unhandled:"Oops! A última solicitação não funcionou."},links:{details:"detalhes...",login:"Iniciar sessão"},no_text:"Nenhum texto"}},"pt-BR":{ajax_errors:{error_heading:"Erro Ajax: %{status_code}",errors:{connection_lost:"A conexão com %{host} foi perdida. Verifique se você está conectado com a Internet e tente novamente.",logged_out:"Você não está registrado atualmente, talvez por um período grande de inatividade.",unhandled:"Oops! A última solicitação não funcionou."},links:{details:"detalhes...",login:"Login"},no_text:"Nenhum texto"}},ru:{ajax_errors:{error_heading:"Ошибка Ajax: %{status_code}",errors:{connection_lost:"Подключение к %{host} было потеряно.  Убедитесь, что вы подключены к Интернету, и повторите попытку.",logged_out:"В настоящее время вы не находитесь в системе, возможно, из-за отсутствия действий в течение длительного времени.",unhandled:"Ой! Последний запрос не сработал."},links:{details:"сведения...",login:"Вход в систему"},no_text:"Нет текста"}},sl:{ajax_errors:{error_heading:"Napaka Ajax: %{status_code}",errors:{connection_lost:"Povezava z gostiteljem %{host} je bila izgubljena.  Prepričajte se, da ste povezani z internetom, in poskusite znova.",logged_out:"Trenutno niste prijavljeni, verjetno zato, ker dlje časa niste bili aktivni.",unhandled:"Opa! Zadnja zahteva ni delovala."},links:{details:"podrobnosti ...",login:"Prijava"},no_text:"Ni besedila."}},sv:{ajax_errors:{error_heading:"Ajax fel: %{status_code}",errors:{connection_lost:"Anslutningen till %{host} förlorades. Vänligen kontrollera att du är ansluten till Internet och försök igen.",logged_out:"Du är för närvarande inte inloggad, förmodligen på grund av en lång period av inaktivitet.",unhandled:"Oj! Den senaste förfrågan fungerade inte."},links:{details:"detaljer...",login:"Logga in"},no_text:"Ingen text"}},"sv-x-k12":{ajax_errors:{error_heading:"Ajax fel: %{status_code}",errors:{connection_lost:"Anslutningen till %{host} förlorades. Vänligen kontrollera att du är ansluten till Internet och försök igen.",logged_out:"Du är för närvarande inte inloggad, förmodligen på grund av en lång period av inaktivitet.",unhandled:"Oj! Den senaste förfrågan fungerade inte."},links:{details:"detaljer...",login:"Logga in"},no_text:"Ingen text"}},tr:{ajax_errors:{error_heading:"Ajax Hatası: %{status_code}",errors:{connection_lost:"%{host} sunucusuna bağlantı kayboldu. İnternet'e bağlı olduğunuzdan emin olun ve tekrar deneyin.",logged_out:"Şu anda oturumunuz açık değil. Muhtemelen uzun süre hiçbir şey yapmadınız.",unhandled:"Oops! Son istek çalıştırılamadı."},links:{details:"ayrıntılar...",login:"Oturum Aç"},no_text:"Metin yok"}},uk:{ajax_errors:{error_heading:"Ajax Помилка: %{status_code}",errors:{connection_lost:"Підключення до %{host} втрачено.  Будь ласка, переконайтеся, що ви підключені до Інтернету і повторіть спробу.",logged_out:"Зараз Ви не в системі, можливо, через тривалий період бездіяльності.",unhandled:"На жаль! Останній запит не спрацював."},links:{details:"детальніше...",login:"Вхід"},no_text:"Текст відсутній"}},"zh-Hans":{ajax_errors:{error_heading:"Ajax 错误: %{status_code}",errors:{connection_lost:"到 %{host} 的连接丢失。请确保已连接到 Internet，然后重试。",logged_out:"您当前尚未登录，可能是非活动时间太长所致。",unhandled:"噢！上一个请求未解决。"},links:{details:"详细信息...",login:"登录"},no_text:"无文本"}},"zh-Hant":{ajax_errors:{error_heading:"Ajax 錯誤：%{status_code}",errors:{connection_lost:"至 %{host} 的連接失敗。請確保已連接至 Internet，然後再試一次。",logged_out:"您當前未登入，可能是因為您長時間沒有操作。",unhandled:"哎呀！最後一個要求沒有成功。"},links:{details:"詳細資料…",login:"登入"},no_text:"無文字"}}})
n("jQeR")
var O=C["default"].scoped("ajax_errors")
var j=n("5Ky4")
n("MWZS")
n("RzUX")
S["a"].errorCount=0
window.onerror=function(e,t,n,r,a){S["a"].errorCount+=1}
h()(document).ready(function(){h()("#instructure_ajax_error_result").defaultAjaxError(function(e,t,n,r,a){if("abort"===r)return
var i="0"
var o=O.t("no_text","No text")
try{i=t.status
o=t.responseText}catch(e){}h.a.ajaxJSON(location.protocol+"//"+location.host+"/simple_response.json?rnd="+Math.round(9999999*Math.random()),"GET",{},function(){if(h.a.ajaxJSON.isUnauthenticated(t)){var e=Object(j["a"])(O.t("errors.logged_out","You are not currently logged in, possibly due to a long period of inactivity."))
e+="<br/><a href='/login' id='inactivity_login_link' target='_new'>"+Object(j["a"])(O.t("links.login","Login"))+"</a>"
h.a.flashError({html:e},3e4)
h()("#inactivity_login_link").focus()}else 409!=i&&u(O.t("errors.unhandled","Oops! The last request didn't work out."),t)},function(){u(O.t("errors.connection_lost","Connection to %{host} was lost.  Please make sure you're connected to the Internet and try again.",{host:location.host}),t)},{skipDefaultError:true})
var s=h()(this)
var u=function(e,t){var n=s[0]
if(!n)return
var r=n.contentDocument||n.contentWindow&&n.contentWindow.document||window.frames[s.attr("id")].document
var u=h()(r).find("body")
u.html(h()("<h1 />").text(O.t("error_heading","Ajax Error: %{status_code}",{status_code:i})))
u.append(Object(j["a"])(o))
h()("#instructure_ajax_error_box").hide()
e=Object(j["a"])(e)
a&&(e+="<br/><span style='font-size: 0.7em;'>(Development Only)</span>");(a||"production"!=S["a"].environment)&&(e+="<br/><a href='#' class='last_error_details_link'>"+Object(j["a"])(O.t("links.details","details..."))+"</a>")
h.a.flashError({html:e})}
window.ajaxErrorFlash=u
var l=h.a.ajaxJSON.findRequest(t)
l=l||{}
if(l.data){l.params=""
for(var c in l.data)l.params+="&"+c+"="+l.data[c]}var d=""
try{d=h()("#identity .user_name").text()}catch(e){}if(S["a"].ajaxErrorURL){var f="&Msg="+escape(o)+"&StatusCode="+escape(i)+"&URL="+escape(l.url||"unknown")+"&Page="+escape(location.href)+"&Method="+escape(l.submit_type||"unknown")+"&UserName="+escape(d)+"&Platform="+escape(navigator.platform)+"&UserAgent="+escape(navigator.userAgent)+"&Params="+escape(l.params||"unknown")
h()("body").append("<img style='position: absolute; left: -1000px; top: 0;' src='"+Object(j["a"])(S["a"].ajaxErrorURL+f.substring(0,2e3))+"' />")}})
h()(".last_error_details_link").live("click",function(e){e.preventDefault()
e.stopPropagation()
h()("#instructure_ajax_error_box").show()})
h()(".close_instructure_ajax_error_box_link").click(function(e){e.preventDefault()
h()("#instructure_ajax_error_box").hide()})})
n("FF4x")
n("o32s")
window.bundles||(window.bundles=[])
window.bundles.push=E
window.bundles.forEach(E)
Promise.all([n.e(15),n.e(18),n.e(23),n.e(24),n.e(38),n.e(67),n.e(112),n.e(545)]).then(n.bind(null,"wGhc"))
ENV.csp&&Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(14),n.e(544)]).then(n.bind(null,"Brih")).then(function(e){var t=e.default
return t(window.document)})
ENV.INCOMPLETE_REGISTRATION&&Promise.all([n.e(5),n.e(548)]).then(n.bind(null,"Uu7Z"))
ENV.badge_counts&&n.e(554).then(n.bind(null,"8yYZ"))
h()("html").removeClass("scripts-not-loaded")
h()(".help_dialog_trigger").click(function(e){e.preventDefault()
Promise.all([n.e(5),n.e(202),n.e(547)]).then(n.bind(null,"P+sT")).then(function(e){var t=e.default
return t.open()})})
h()("body").on("click","[data-pushstate]",Object(T["a"])(function(){k.a.history.navigate(h()(this).attr("href"),true)}))
window.ENV.NEW_USER_TUTORIALS&&window.ENV.NEW_USER_TUTORIALS.is_enabled&&window.ENV.context_asset_string&&"courses"===Object(x["a"])(window.ENV.context_asset_string)[0]&&Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(10),n.e(12),n.e(537)]).then(n.bind(null,"Awdp")).then(function(e){var t=e.default
t()})
var A=window.navigator.userAgent.indexOf("Edge")>-1
var N=!A&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--foo: red)")
N||n.e(551).then(n.bind(null,"RzcR")).then(function(e){var t=e.default
window.canvasCssVariablesPolyfill=t})
h()(function(){setTimeout(function(){Object(M["b"])()&&Object(M["c"])("TeX-MML-AM_HTMLorMML")},5)})},"nxX+":function(e,t,n){(function(t){(function(){var n=[]
var r=0
var a={}
var i=+new Date+""
var o=40
var s=/\w*$/
var u=/<%=([\s\S]+?)%>/g
var l=/($^)/
var c=/['\n\r\t\u2028\u2029\\]/g
var d="[object Arguments]",f="[object Array]",h="[object Boolean]",m="[object Date]",p="[object Function]",_="[object Number]",g="[object Object]",y="[object RegExp]",v="[object String]"
var b={}
b[p]=false
b[d]=b[f]=b[h]=b[m]=b[_]=b[g]=b[y]=b[v]=true
var w={boolean:false,function:true,object:true,number:false,string:false,undefined:false}
var k={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"}
var x=w[typeof window]&&window||this
var M=w[typeof t]&&t
!M||M.global!==M&&M.window!==M||(x=M)
function T(e,t,n){var r=(n||0)-1,a=e?e.length:0
while(++r<a)if(e[r]===t)return r
return-1}function D(e,t){var n=e.criteria,r=t.criteria,a=-1,i=n.length
while(++a<i){var o=n[a],s=r[a]
if(o!==s){if(o>s||"undefined"==typeof o)return 1
if(o<s||"undefined"==typeof s)return-1}}return e.index-t.index}function E(e){return"\\"+k[e]}function S(){return n.pop()||[]}function C(e){e.length=0
n.length<o&&n.push(e)}function P(e,t,n){t||(t=0)
"undefined"==typeof n&&(n=e?e.length:0)
var r=-1,a=n-t||0,i=Array(a<0?0:a)
while(++r<a)i[r]=e[t+r]
return i}var O=[]
var j=Object.prototype
var A=x._
var N=j.toString
var z=RegExp("^"+String(N).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$")
var I=Math.ceil,L=Math.floor,B=j.hasOwnProperty,R=O.push,F=j.propertyIsEnumerable
var Y=me(Y=Object.create)&&Y,q=me(q=Array.isArray)&&q,H=x.isFinite,U=x.isNaN,W=me(W=Object.keys)&&W,K=Math.max,V=Math.min,$=Math.random
var G={}
G[f]=Array
G[h]=Boolean
G[m]=Date
G[p]=Function
G[g]=Object
G[_]=Number
G[y]=RegExp
G[v]=String
function J(e){return e instanceof J?e:new Q(e)}function Q(e,t){this.__chain__=!!t
this.__wrapped__=e}Q.prototype=J.prototype
var X={}
Z={0:1,length:1},X.spliceObjects=(O.splice.call(Z,0,1),!Z[0])
var Z
J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:u,variable:""}
function ee(e){var t=e[0],n=e[2],r=e[4]
function a(){if(n){var e=P(n)
R.apply(e,arguments)}if(this instanceof a){var i=ne(t.prototype),o=t.apply(i,e||arguments)
return Fe(o)?o:i}return t.apply(r,e||arguments)}return a}function te(e,t,n,r,a){if(n){var i=n(e)
if("undefined"!=typeof i)return i}var o=Fe(e)
if(!o)return e
var u=N.call(e)
if(!b[u])return e
var l=G[u]
switch(u){case h:case m:return new l(+e)
case _:case v:return new l(e)
case y:i=l(e.source,s.exec(e))
i.lastIndex=e.lastIndex
return i}var c=ge(e)
if(t){var d=!r
r||(r=S())
a||(a=S())
var f=r.length
while(f--)if(r[f]==e)return a[f]
i=c?l(e.length):{}}else i=c?P(e):Me({},e)
if(c){B.call(e,"index")&&(i.index=e.index)
B.call(e,"input")&&(i.input=e.input)}if(!t)return i
r.push(e)
a.push(i);(c?rt:Ce)(e,function(e,o){i[o]=te(e,t,n,r,a)})
if(d){C(r)
C(a)}return i}function ne(e,t){return Fe(e)?Y(e):{}}Y||(ne=function(){function e(){}return function(t){if(Fe(t)){e.prototype=t
var n=new e
e.prototype=null}return n||x.Object()}}())
function re(e,t,n){if("function"!=typeof e)return Zt
if("undefined"==typeof t||!("prototype"in e))return e
switch(n){case 1:return function(n){return e.call(t,n)}
case 2:return function(n,r){return e.call(t,n,r)}
case 3:return function(n,r,a){return e.call(t,n,r,a)}
case 4:return function(n,r,a,i){return e.call(t,n,r,a,i)}}return Ft(e,t)}function ae(e){var t=e[0],n=e[1],r=e[2],a=e[3],i=e[4],o=e[5]
var s=1&n,u=2&n,l=4&n,c=8&n,d=t
function f(){var e=s?i:this
if(r){var h=P(r)
R.apply(h,arguments)}if(a||l){h||(h=P(arguments))
a&&R.apply(h,a)
if(l&&h.length<o){n|=16
return ae([t,c?n:-4&n,h,null,i,o])}}h||(h=arguments)
u&&(t=e[d])
if(this instanceof f){e=ne(t.prototype)
var m=t.apply(e,h)
return Fe(m)?m:e}return t.apply(e,h)}return f}function ie(e,t){var n=-1,r=he(),a=e?e.length:0,i=[]
while(++n<a){var o=e[n]
r(t,o)<0&&i.push(o)}return i}function oe(e,t,n,r){var a=(r||0)-1,i=e?e.length:0,o=[]
while(++a<i){var s=e[a]
if(s&&"object"==typeof s&&"number"==typeof s.length&&(ge(s)||_e(s))){t||(s=oe(s,t,n))
var u=-1,l=s.length,c=o.length
o.length+=l
while(++u<l)o[c++]=s[u]}else n||o.push(s)}return o}function se(e,t,n,r){if(e===t)return 0!==e||1/e==1/t
var i=typeof e,o=typeof t
if(e===e&&!(e&&w[i])&&!(t&&w[o]))return false
if(null==e||null==t)return e===t
var s=N.call(e),u=N.call(t)
if(s!=u)return false
switch(s){case h:case m:return+e==+t
case _:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t
case y:case v:return e==String(t)}var l=s==f
if(!l){var c=e instanceof J,d=t instanceof J
if(c||d)return se(c?e.__wrapped__:e,d?t.__wrapped__:t,n,r)
if(s!=g)return false
var p=e.constructor,b=t.constructor
if(p!=b&&!(Re(p)&&p instanceof p&&Re(b)&&b instanceof b)&&"constructor"in e&&"constructor"in t)return false}n||(n=[])
r||(r=[])
var k=n.length
while(k--)if(n[k]==e)return r[k]==t
var x=true,M=0
n.push(e)
r.push(t)
if(l){M=t.length
x=M==e.length
if(x)while(M--)if(!(x=se(e[M],t[M],n,r)))break}else{Se(t,function(t,i,o){if(B.call(o,i)){M++
return!(x=B.call(e,i)&&se(e[i],t,n,r))&&a}})
x&&Se(e,function(e,t,n){if(B.call(n,t))return!(x=--M>-1)&&a})}n.pop()
r.pop()
return x}function ue(e,t){return e+L($()*(t-e+1))}function le(e,t,n){var r=-1,a=he(),i=e?e.length:0,o=[],s=n?[]:o
while(++r<i){var u=e[r],l=n?n(u,r,e):u
if(t?!r||s[s.length-1]!==l:a(s,l)<0){n&&s.push(l)
o.push(u)}}return o}function ce(e){return function(t,n,r){var a={}
n=Qt(n,r,3)
var i=-1,o=t?t.length:0
if("number"==typeof o)while(++i<o){var s=t[i]
e(a,s,n(s,i,t),t)}else Ce(t,function(t,r,i){e(a,t,n(t,r,i),i)})
return a}}function de(e,t,n,r,a,i){var o=2&t,s=16&t,u=32&t
if(!o&&!Re(e))throw new TypeError
if(s&&!n.length){t&=-17
s=n=false}if(u&&!r.length){t&=-33
u=r=false}var l=1==t||17===t?ee:ae
return l([e,t,n,r,a,i])}function fe(e){return be[e]}function he(){var e=(e=J.indexOf)===Dt?T:e
return e}function me(e){return"function"==typeof e&&z.test(e)}function pe(e){return we[e]}function _e(e){return e&&"object"==typeof e&&"number"==typeof e.length&&N.call(e)==d||false}_e(arguments)||(_e=function(e){return e&&"object"==typeof e&&"number"==typeof e.length&&B.call(e,"callee")&&!F.call(e,"callee")||false})
var ge=q||function(e){return e&&"object"==typeof e&&"number"==typeof e.length&&N.call(e)==f||false}
var ye=function(e){var t,n=e,r=[]
if(!n)return r
if(!w[typeof e])return r
for(t in n)B.call(n,t)&&r.push(t)
return r}
var ve=W?function(e){if(!Fe(e))return[]
return W(e)}:ye
var be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}
var we=je(be)
var ke=RegExp("("+ve(we).join("|")+")","g"),xe=RegExp("["+ve(be).join("")+"]","g")
function Me(e){if(!e)return e
for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t]
if(r)for(var a in r)e[a]=r[a]}return e}function Te(e,t,n,r){if("boolean"!=typeof t&&null!=t){r=n
n=t
t=false}return te(e,t,"function"==typeof n&&re(n,r,1))}function De(e,t,n){return te(e,true,"function"==typeof t&&re(t,n,1))}function Ee(e){if(!e)return e
for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t]
if(r)for(var a in r)"undefined"==typeof e[a]&&(e[a]=r[a])}return e}var Se=function(e,t){var n,r=e,i=r
if(!r)return i
if(!w[typeof r])return i
for(n in r)if(t(r[n],n,e)===a)return i
return i}
var Ce=function(e,t){var n,r=e,i=r
if(!r)return i
if(!w[typeof r])return i
for(n in r)if(B.call(r,n)&&t(r[n],n,e)===a)return i
return i}
function Pe(e){var t=[]
Se(e,function(e,n){Re(e)&&t.push(n)})
return t.sort()}function Oe(e,t){return!!e&&B.call(e,t)}function je(e){var t=-1,n=ve(e),r=n.length,a={}
while(++t<r){var i=n[t]
a[e[i]]=i}return a}function Ae(e){return true===e||false===e||e&&"object"==typeof e&&N.call(e)==h||false}function Ne(e){return e&&"object"==typeof e&&N.call(e)==m||false}function ze(e){return e&&1===e.nodeType||false}function Ie(e){if(!e)return true
if(ge(e)||We(e))return!e.length
for(var t in e)if(B.call(e,t))return false
return true}function Le(e,t){return se(e,t)}function Be(e){return H(e)&&!U(parseFloat(e))}function Re(e){return"function"==typeof e}Re(/x/)&&(Re=function(e){return"function"==typeof e&&N.call(e)==p})
function Fe(e){return!!(e&&w[typeof e])}function Ye(e){return He(e)&&e!=+e}function qe(e){return null===e}function He(e){return"number"==typeof e||e&&"object"==typeof e&&N.call(e)==_||false}function Ue(e){return e&&w[typeof e]&&N.call(e)==y||false}function We(e){return"string"==typeof e||e&&"object"==typeof e&&N.call(e)==v||false}function Ke(e){return"undefined"==typeof e}function Ve(e){var t=[]
Se(e,function(e,n){t.push(n)})
t=ie(t,oe(arguments,true,false,1))
var n=-1,r=t.length,a={}
while(++n<r){var i=t[n]
a[i]=e[i]}return a}function $e(e){var t=-1,n=ve(e),r=n.length,a=Array(r)
while(++t<r){var i=n[t]
a[t]=[i,e[i]]}return a}function Ge(e){var t=-1,n=oe(arguments,true,false,1),r=n.length,a={}
while(++t<r){var i=n[t]
i in e&&(a[i]=e[i])}return a}function Je(e){var t=-1,n=ve(e),r=n.length,a=Array(r)
while(++t<r)a[t]=e[n[t]]
return a}function Qe(e,t){var n=he(),r=e?e.length:0,i=false
r&&"number"==typeof r?i=n(e,t)>-1:Ce(e,function(e){return(i=e===t)&&a})
return i}var Xe=ce(function(e,t,n){B.call(e,n)?e[n]++:e[n]=1})
function Ze(e,t,n){var r=true
t=Qt(t,n,3)
var i=-1,o=e?e.length:0
if("number"==typeof o){while(++i<o)if(!(r=!!t(e[i],i,e)))break}else Ce(e,function(e,n,i){return!(r=!!t(e,n,i))&&a})
return r}function et(e,t,n){var r=[]
t=Qt(t,n,3)
var a=-1,i=e?e.length:0
if("number"==typeof i)while(++a<i){var o=e[a]
t(o,a,e)&&r.push(o)}else Ce(e,function(e,n,a){t(e,n,a)&&r.push(e)})
return r}function tt(e,t,n){t=Qt(t,n,3)
var r=-1,i=e?e.length:0
if("number"!=typeof i){var o
Ce(e,function(e,n,r){if(t(e,n,r)){o=e
return a}})
return o}while(++r<i){var s=e[r]
if(t(s,r,e))return s}}function nt(e,t){return wt(e,t,true)}function rt(e,t,n){var r=-1,i=e?e.length:0
t=t&&"undefined"==typeof n?t:re(t,n,3)
if("number"==typeof i){while(++r<i)if(t(e[r],r,e)===a)break}else Ce(e,t)}function at(e,t){var n=e?e.length:0
if("number"==typeof n){while(n--)if(false===t(e[n],n,e))break}else{var r=ve(e)
n=r.length
Ce(e,function(e,i,o){i=r?r[--n]:--n
return false===t(o[i],i,o)&&a})}}var it=ce(function(e,t,n){(B.call(e,n)?e[n]:e[n]=[]).push(t)})
var ot=ce(function(e,t,n){e[n]=t})
function st(e,t){var n=P(arguments,2),r=-1,a="function"==typeof t,i=e?e.length:0,o=Array("number"==typeof i?i:0)
rt(e,function(e){o[++r]=(a?t:e[t]).apply(e,n)})
return o}function ut(e,t,n){var r=-1,a=e?e.length:0
t=Qt(t,n,3)
if("number"==typeof a){var i=Array(a)
while(++r<a)i[r]=t(e[r],r,e)}else{i=[]
Ce(e,function(e,n,a){i[++r]=t(e,n,a)})}return i}function lt(e,t,n){var r=-Infinity,a=r
"function"!=typeof t&&n&&n[t]===e&&(t=null)
var i=-1,o=e?e.length:0
if(null==t&&"number"==typeof o)while(++i<o){var s=e[i]
s>a&&(a=s)}else{t=Qt(t,n,3)
rt(e,function(e,n,i){var o=t(e,n,i)
if(o>r){r=o
a=e}})}return a}function ct(e,t,n){var r=Infinity,a=r
"function"!=typeof t&&n&&n[t]===e&&(t=null)
var i=-1,o=e?e.length:0
if(null==t&&"number"==typeof o)while(++i<o){var s=e[i]
s<a&&(a=s)}else{t=Qt(t,n,3)
rt(e,function(e,n,i){var o=t(e,n,i)
if(o<r){r=o
a=e}})}return a}var dt=ut
function ft(e,t,n,r){if(!e)return n
var a=arguments.length<3
t=Qt(t,r,4)
var i=-1,o=e.length
if("number"==typeof o){a&&(n=e[++i])
while(++i<o)n=t(n,e[i],i,e)}else Ce(e,function(e,r,i){n=a?(a=false,e):t(n,e,r,i)})
return n}function ht(e,t,n,r){var a=arguments.length<3
t=Qt(t,r,4)
at(e,function(e,r,i){n=a?(a=false,e):t(n,e,r,i)})
return n}function mt(e,t,n){t=Qt(t,n,3)
return et(e,function(e,n,r){return!t(e,n,r)})}function pt(e,t,n){e&&"number"!=typeof e.length&&(e=Je(e))
if(null==t||n)return e?e[ue(0,e.length-1)]:void 0
var r=_t(e)
r.length=V(K(0,t),r.length)
return r}function _t(e){var t=-1,n=e?e.length:0,r=Array("number"==typeof n?n:0)
rt(e,function(e){var n=ue(0,++t)
r[t]=r[n]
r[n]=e})
return r}function gt(e){var t=e?e.length:0
return"number"==typeof t?t:ve(e).length}function yt(e,t,n){var r
t=Qt(t,n,3)
var i=-1,o=e?e.length:0
if("number"==typeof o){while(++i<o)if(r=t(e[i],i,e))break}else Ce(e,function(e,n,i){return(r=t(e,n,i))&&a})
return!!r}function vt(e,t,n){var r=-1,a=e?e.length:0,i=Array("number"==typeof a?a:0)
t=Qt(t,n,3)
rt(e,function(e,n,a){i[++r]={criteria:[t(e,n,a)],index:r,value:e}})
a=i.length
i.sort(D)
while(a--)i[a]=i[a].value
return i}function bt(e){if(ge(e))return P(e)
if(e&&"number"==typeof e.length)return ut(e)
return Je(e)}function wt(e,t,n){return n&&Ie(t)?void 0:(n?tt:et)(e,t)}function kt(e){var t=-1,n=e?e.length:0,r=[]
while(++t<n){var a=e[t]
a&&r.push(a)}return r}function xt(e){return ie(e,oe(arguments,true,true,1))}function Mt(e,t,n){var r=0,a=e?e.length:0
if("number"!=typeof t&&null!=t){var i=-1
t=Qt(t,n,3)
while(++i<a&&t(e[i],i,e))r++}else{r=t
if(null==r||n)return e?e[0]:void 0}return P(e,0,V(K(0,r),a))}function Tt(e,t){return oe(e,t)}function Dt(e,t,n){if("number"==typeof n){var r=e?e.length:0
n=n<0?K(0,r+n):n||0}else if(n){var a=At(e,t)
return e[a]===t?a:-1}return T(e,t,n)}function Et(e,t,n){var r=0,a=e?e.length:0
if("number"!=typeof t&&null!=t){var i=a
t=Qt(t,n,3)
while(i--&&t(e[i],i,e))r++}else r=null==t||n?1:t||r
return P(e,0,V(K(0,a-r),a))}function St(){var e=[],t=-1,n=arguments.length
while(++t<n){var r=arguments[t];(ge(r)||_e(r))&&e.push(r)}var a=e[0],i=-1,o=he(),s=a?a.length:0,u=[]
e:while(++i<s){r=a[i]
if(o(u,r)<0){t=n
while(--t)if(o(e[t],r)<0)continue e
u.push(r)}}return u}function Ct(e,t,n){var r=0,a=e?e.length:0
if("number"!=typeof t&&null!=t){var i=a
t=Qt(t,n,3)
while(i--&&t(e[i],i,e))r++}else{r=t
if(null==r||n)return e?e[a-1]:void 0}return P(e,K(0,a-r))}function Pt(e,t,n){var r=e?e.length:0
"number"==typeof n&&(r=(n<0?K(0,r+n):V(n,r-1))+1)
while(r--)if(e[r]===t)return r
return-1}function Ot(e,t,n){e=+e||0
n=+n||1
if(null==t){t=e
e=0}var r=-1,a=K(0,I((t-e)/n)),i=Array(a)
while(++r<a){i[r]=e
e+=n}return i}function jt(e,t,n){if("number"!=typeof t&&null!=t){var r=0,a=-1,i=e?e.length:0
t=Qt(t,n,3)
while(++a<i&&t(e[a],a,e))r++}else r=null==t||n?1:K(0,t)
return P(e,r)}function At(e,t,n,r){var a=0,i=e?e.length:a
n=n?Qt(n,r,1):Zt
t=n(t)
while(a<i){var o=a+i>>>1
n(e[o])<t?a=o+1:i=o}return a}function Nt(){return le(oe(arguments,true,true))}function zt(e,t,n,r){if("boolean"!=typeof t&&null!=t){r=n
n="function"!=typeof t&&r&&r[t]===e?null:t
t=false}null!=n&&(n=Qt(n,r,3))
return le(e,t,n)}function It(e){return ie(e,P(arguments,1))}function Lt(){var e=-1,t=lt(dt(arguments,"length")),n=Array(t<0?0:t)
while(++e<t)n[e]=dt(arguments,e)
return n}function Bt(e,t){var n=-1,r=e?e.length:0,a={}
t||!r||ge(e[0])||(t=[])
while(++n<r){var i=e[n]
t?a[i]=t[n]:i&&(a[i[0]]=i[1])}return a}function Rt(e,t){if(!Re(t))throw new TypeError
return function(){if(--e<1)return t.apply(this,arguments)}}function Ft(e,t){return arguments.length>2?de(e,17,P(arguments,2),null,t):de(e,1,null,null,t)}function Yt(e){var t=arguments.length>1?oe(arguments,true,false,1):Pe(e),n=-1,r=t.length
while(++n<r){var a=t[n]
e[a]=de(e[a],1,null,null,e)}return e}function qt(){var e=arguments,t=e.length
while(t--)if(!Re(e[t]))throw new TypeError
return function(){var t=arguments,n=e.length
while(n--)t=[e[n].apply(this,t)]
return t[0]}}function Ht(e,t,n){var r,a,i,o,s,u,l,c=0,d=false,f=true
if(!Re(e))throw new TypeError
t=K(0,t)||0
if(true===n){var h=true
f=false}else if(Fe(n)){h=n.leading
d="maxWait"in n&&(K(t,n.maxWait)||0)
f="trailing"in n?n.trailing:f}var m=function n(){var d=t-(nn()-o)
if(d<=0){a&&clearTimeout(a)
var f=l
a=u=l=void 0
if(f){c=nn()
i=e.apply(s,r)
u||a||(r=s=null)}}else u=setTimeout(n,d)}
var p=function(){u&&clearTimeout(u)
a=u=l=void 0
if(f||d!==t){c=nn()
i=e.apply(s,r)
u||a||(r=s=null)}}
return function(){r=arguments
o=nn()
s=this
l=f&&(u||!h)
if(false===d)var n=h&&!u
else{a||h||(c=o)
var _=d-(o-c),g=_<=0
if(g){a&&(a=clearTimeout(a))
c=o
i=e.apply(s,r)}else a||(a=setTimeout(p,_))}g&&u?u=clearTimeout(u):u||t===d||(u=setTimeout(m,t))
if(n){g=true
i=e.apply(s,r)}!g||u||a||(r=s=null)
return i}}function Ut(e){if(!Re(e))throw new TypeError
var t=P(arguments,1)
return setTimeout(function(){e.apply(void 0,t)},1)}function Wt(e,t){if(!Re(e))throw new TypeError
var n=P(arguments,2)
return setTimeout(function(){e.apply(void 0,n)},t)}function Kt(e,t){var n={}
return function(){var r=t?t.apply(this,arguments):i+arguments[0]
return B.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}}function Vt(e){var t,n
if(!Re(e))throw new TypeError
return function(){if(t)return n
t=true
n=e.apply(this,arguments)
e=null
return n}}function $t(e){return de(e,16,P(arguments,1))}function Gt(e,t,n){var r=true,a=true
if(!Re(e))throw new TypeError
if(false===n)r=false
else if(Fe(n)){r="leading"in n?n.leading:r
a="trailing"in n?n.trailing:a}n={}
n.leading=r
n.maxWait=t
n.trailing=a
return Ht(e,t,n)}function Jt(e,t){return de(t,16,[e])}function Qt(e,t,n){var r=typeof e
if(null==e||"function"==r)return re(e,t,n)
if("object"!=r)return rn(e)
var a=ve(e)
return function(t){var n=a.length,r=false
while(n--)if(!(r=t[a[n]]===e[a[n]]))break
return r}}function Xt(e){return null==e?"":String(e).replace(xe,fe)}function Zt(e){return e}function en(e){rt(Pe(e),function(t){var n=J[t]=e[t]
J.prototype[t]=function(){var e=[this.__wrapped__]
R.apply(e,arguments)
var t=n.apply(J,e)
return this.__chain__?new Q(t,true):t}})}function tn(){x._=A
return this}var nn=me(nn=Date.now)&&nn||function(){return(new Date).getTime()}
function rn(e){return function(t){return t[e]}}function an(e,t){null==e&&null==t&&(t=1)
e=+e||0
if(null==t){t=e
e=0}else t=+t||0
return e+L($()*(t-e+1))}function on(e,t){if(e){var n=e[t]
return Re(n)?e[t]():n}}function sn(e,t,n){var r=J,a=r.templateSettings
e=String(e||"")
n=Ee({},n,a)
var i=0,o="__p += '",s=n.variable
var u=RegExp((n.escape||l).source+"|"+(n.interpolate||l).source+"|"+(n.evaluate||l).source+"|$","g")
e.replace(u,function(t,n,r,a,s){o+=e.slice(i,s).replace(c,E)
n&&(o+="' +\n_.escape("+n+") +\n'")
a&&(o+="';\n"+a+";\n__p += '")
r&&(o+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'")
i=s+t.length
return t})
o+="';\n"
if(!s){s="obj"
o="with ("+s+" || {}) {\n"+o+"\n}\n"}o="function("+s+") {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"+o+"return __p\n}"
try{var d=Function("_","return "+o)(r)}catch(e){e.source=o
throw e}if(t)return d(t)
d.source=o
return d}function un(e,t,n){e=(e=+e)>-1?e:0
var r=-1,a=Array(e)
t=re(t,n,1)
while(++r<e)a[r]=t(r)
return a}function ln(e){return null==e?"":String(e).replace(ke,pe)}function cn(e){var t=++r+""
return e?e+t:t}function dn(e){e=new Q(e)
e.__chain__=true
return e}function fn(e,t){t(e)
return e}function hn(){this.__chain__=true
return this}function mn(){return this.__wrapped__}J.after=Rt
J.bind=Ft
J.bindAll=Yt
J.chain=dn
J.compact=kt
J.compose=qt
J.countBy=Xe
J.debounce=Ht
J.defaults=Ee
J.defer=Ut
J.delay=Wt
J.difference=xt
J.filter=et
J.flatten=Tt
J.forEach=rt
J.functions=Pe
J.groupBy=it
J.indexBy=ot
J.initial=Et
J.intersection=St
J.invert=je
J.invoke=st
J.keys=ve
J.map=ut
J.max=lt
J.memoize=Kt
J.min=ct
J.omit=Ve
J.once=Vt
J.pairs=$e
J.partial=$t
J.pick=Ge
J.pluck=dt
J.range=Ot
J.reject=mt
J.rest=jt
J.shuffle=_t
J.sortBy=vt
J.tap=fn
J.throttle=Gt
J.times=un
J.toArray=bt
J.union=Nt
J.uniq=zt
J.values=Je
J.where=wt
J.without=It
J.wrap=Jt
J.zip=Lt
J.collect=ut
J.drop=jt
J.each=rt
J.extend=Me
J.methods=Pe
J.object=Bt
J.select=et
J.tail=jt
J.unique=zt
J.clone=Te
J.cloneDeep=De
J.contains=Qe
J.escape=Xt
J.every=Ze
J.find=tt
J.has=Oe
J.identity=Zt
J.indexOf=Dt
J.isArguments=_e
J.isArray=ge
J.isBoolean=Ae
J.isDate=Ne
J.isElement=ze
J.isEmpty=Ie
J.isEqual=Le
J.isFinite=Be
J.isFunction=Re
J.isNaN=Ye
J.isNull=qe
J.isNumber=He
J.isObject=Fe
J.isRegExp=Ue
J.isString=We
J.isUndefined=Ke
J.lastIndexOf=Pt
J.mixin=en
J.noConflict=tn
J.random=an
J.reduce=ft
J.reduceRight=ht
J.result=on
J.size=gt
J.some=yt
J.sortedIndex=At
J.template=sn
J.unescape=ln
J.uniqueId=cn
J.all=Ze
J.any=yt
J.detect=tt
J.findWhere=nt
J.foldl=ft
J.foldr=ht
J.include=Qe
J.inject=ft
J.first=Mt
J.last=Ct
J.sample=pt
J.take=Mt
J.head=Mt
en(J)
J.VERSION="2.4.1"
J.prototype.chain=hn
J.prototype.value=mn
rt(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=O[e]
J.prototype[e]=function(){var e=this.__wrapped__
t.apply(e,arguments)
X.spliceObjects||0!==e.length||delete e[0]
return this}})
rt(["concat","join","slice"],function(e){var t=O[e]
J.prototype[e]=function(){var e=this.__wrapped__,n=t.apply(e,arguments)
if(this.__chain__){n=new Q(n)
n.__chain__=true}return n}})
e.exports=J}).call(this)}).call(this,n("yLpj"))},o0o1:function(e,t,n){e.exports=n("ls82")},o32s:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=n("5Ky4")
n("rEd+")
var o={}
var s=function(e){return o[e]||o[e[0]]}
var u={setPosition:function(e){function t(){return(e.tooltipClass||"").match("popover")?30:5}var n="true"===e.force_position?"none":"flipfit"
var r={right:{my:"left center",at:"right+".concat(t()," center"),collision:n},left:{my:"right center",at:"left-".concat(t()," center"),collision:n},top:{my:"center bottom",at:"center top-".concat(t()),collision:n},bottom:{my:"center top",at:"center bottom+".concat(t()),collision:n}}
e.position in r&&(e.position=r[e.position])}}
a.a.widget("custom.timeoutTooltip",a.a.ui.tooltip,{_open:function(e,t,n){var r=this
if(s(t))return null
var o=Array.prototype.slice.call(arguments,0)
o.splice(2,1,Object(i["a"])(n).toString())
if(this.timeout)return
var u=this._superApply.bind(this,o)
this.timeout=setTimeout(function(){delete r.timeout
r._off(t,"mouseleave focusout keyup")
u()},200)
return this._on(t,{mouseleave:"close",focusout:"close",keyup:function(e){if(e.keyCode===a.a.ui.keyCode.ESCAPE){var n=a.a.Event(e)
n.currentTarget=t[0]
return this.close(n,true)}}})},close:function(e){if(this.timeout){clearTimeout(this.timeout)
delete this.timeout
return}return this._superApply([e,true])}})
function l(e,t){return a()(this).css(e).removeClass("left right top bottom center middle vertical horizontal").addClass([t.horizontal,t.vertical,t.important].join(" "))}a()("body").on("mouseenter focusin","[data-tooltip]",function(e){var t=a()(this)
var n=t.data("tooltip");["right","left","top","bottom"].includes(n)&&(n={position:n})
n||(n={})
n.position||(n.position="top")
u.setPosition(n)
n.collision&&(n.position.collision=n.collision)
n.position.using||(n.position.using=l)
if(t.data("html-tooltip-title")){n.content=function(){return a.a.raw(a()(this).data("html-tooltip-title"))}
n.items="[data-html-tooltip-title]"}t.data("tooltip-class")&&(n.tooltipClass=t.data("tooltip-class"))
t.removeAttr("data-tooltip").timeoutTooltip(n).timeoutTooltip("open").click(function(){return t.timeoutTooltip("close")})})
var c=function(e){return o[e.target]=false}
var d=function(e){return o[e.target]=true}
a()(window).bind("detachTooltip",d)
a()(window).bind("reattachTooltip",c)},ouhR:function(e,t){(function(t,n){var r=t.document,a=t.navigator,i=t.location
var o=function(){var e,i,o,s,u=function(t,n){return new u.fn.init(t,n,e)},l=t.jQuery,c=t.$,d=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,f=/\S/,h=/^\s+/,m=/\s+$/,p=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,_=/^[\],:{}\s]*$/,g=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,y=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,v=/(?:^|:|,)(?:\s*\[)+/g,b=/(webkit)[ \/]([\w.]+)/,w=/(opera)(?:.*version)?[ \/]([\w.]+)/,k=/(msie) ([\w.]+)/,x=/(mozilla)(?:.*? rv:([\w.]+))?/,M=/-([a-z]|[0-9])/gi,T=/^-ms-/,D=function(e,t){return(t+"").toUpperCase()},E=a.userAgent,S=Object.prototype.toString,C=Object.prototype.hasOwnProperty,P=Array.prototype.push,O=Array.prototype.slice,j=String.prototype.trim,A=Array.prototype.indexOf,N={}
u.fn=u.prototype={constructor:u,init:function(e,t,a){var i,o,s,l
if(!e)return this
if(e.nodeType){this.context=this[0]=e
this.length=1
return this}if("body"===e&&!t&&r.body){this.context=r
this[0]=r.body
this.selector=e
this.length=1
return this}if("string"===typeof e){i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:d.exec(e)
if(!i||!i[1]&&t)return!t||t.jquery?(t||a).find(e):this.constructor(t).find(e)
if(i[1]){t=t instanceof u?t[0]:t
l=t?t.ownerDocument||t:r
s=p.exec(e)
if(s)if(u.isPlainObject(t)){e=[r.createElement(s[1])]
u.fn.attr.call(e,t,true)}else e=[l.createElement(s[1])]
else{s=u.buildFragment([i[1]],[l])
e=(s.cacheable?u.clone(s.fragment):s.fragment).childNodes}return u.merge(this,e)}o=r.getElementById(i[2])
if(o&&o.parentNode){if(o.id!==i[2])return a.find(e)
this.length=1
this[0]=o}this.context=r
this.selector=e
return this}if(u.isFunction(e))return a.ready(e)
if(e.selector!==n){this.selector=e.selector
this.context=e.context}return u.makeArray(e,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return O.call(this,0)},get:function(e){return null==e?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=this.constructor()
u.isArray(e)?P.apply(r,e):u.merge(r,e)
r.prevObject=this
r.context=this.context
"find"===t?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")")
return r},each:function(e,t){return u.each(this,e,t)},ready:function(e){u.bindReady()
o.add(e)
return this},eq:function(e){e=+e
return-1===e?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(O.apply(this,arguments),"slice",O.call(arguments).join(","))},map:function(e){return this.pushStack(u.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:P,sort:[].sort,splice:[].splice}
u.fn.init.prototype=u.fn
u.extend=u.fn.extend=function(){var e,t,r,a,i,o,s=arguments[0]||{},l=1,c=arguments.length,d=false
if("boolean"===typeof s){d=s
s=arguments[1]||{}
l=2}"object"===typeof s||u.isFunction(s)||(s={})
if(c===l){s=this;--l}for(;l<c;l++)if(null!=(e=arguments[l]))for(t in e){r=s[t]
a=e[t]
if(s===a)continue
if(d&&a&&(u.isPlainObject(a)||(i=u.isArray(a)))){if(i){i=false
o=r&&u.isArray(r)?r:[]}else o=r&&u.isPlainObject(r)?r:{}
s[t]=u.extend(d,o,a)}else a!==n&&(s[t]=a)}return s}
u.extend({noConflict:function(e){t.$===u&&(t.$=c)
e&&t.jQuery===u&&(t.jQuery=l)
return u},isReady:false,readyWait:1,holdReady:function(e){e?u.readyWait++:u.ready(true)},ready:function(e){if(true===e&&!--u.readyWait||true!==e&&!u.isReady){if(!r.body)return setTimeout(u.ready,1)
u.isReady=true
if(true!==e&&--u.readyWait>0)return
o.fireWith(r,[u])
u.fn.trigger&&u(r).trigger("ready").off("ready")}},bindReady:function(){if(o)return
o=u.Callbacks("once memory")
if("complete"===r.readyState)return setTimeout(u.ready,1)
if(r.addEventListener){r.addEventListener("DOMContentLoaded",s,false)
t.addEventListener("load",u.ready,false)}else if(r.attachEvent){r.attachEvent("onreadystatechange",s)
t.attachEvent("onload",u.ready)
var e=false
try{e=null==t.frameElement}catch(e){}r.documentElement.doScroll&&e&&z()}},isFunction:function(e){return"function"===u.type(e)},isArray:Array.isArray||function(e){return"array"===u.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):N[S.call(e)]||"object"},isPlainObject:function(e){if(!e||"object"!==u.type(e)||e.nodeType||u.isWindow(e))return false
try{if(e.constructor&&!C.call(e,"constructor")&&!C.call(e.constructor.prototype,"isPrototypeOf"))return false}catch(e){return false}var t
for(t in e);return t===n||C.call(e,t)},isEmptyObject:function(e){for(var t in e)return false
return true},error:function(e){throw new Error(e)},parseJSON:function(e){if("string"!==typeof e||!e)return null
e=u.trim(e)
if(t.JSON&&t.JSON.parse)return t.JSON.parse(e)
if(_.test(e.replace(g,"@").replace(y,"]").replace(v,"")))return new Function("return "+e)()
u.error("Invalid JSON: "+e)},parseXML:function(e){if("string"!==typeof e||!e)return null
var r,a
try{if(t.DOMParser){a=new DOMParser
r=a.parseFromString(e,"text/xml")}else{r=new ActiveXObject("Microsoft.XMLDOM")
r.async="false"
r.loadXML(e)}}catch(e){r=n}r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||u.error("Invalid XML: "+e)
return r},noop:function(){},globalEval:function(e){e&&f.test(e)&&(t.execScript||function(e){t["eval"].call(t,e)})(e)},camelCase:function(e){return e.replace(T,"ms-").replace(M,D)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},each:function(e,t,r){var a,i=0,o=e.length,s=o===n||u.isFunction(e)
if(r){if(s){for(a in e)if(false===t.apply(e[a],r))break}else for(;i<o;)if(false===t.apply(e[i++],r))break}else if(s){for(a in e)if(false===t.call(e[a],a,e[a]))break}else for(;i<o;)if(false===t.call(e[i],i,e[i++]))break
return e},trim:j?function(e){return null==e?"":j.call(e)}:function(e){return null==e?"":e.toString().replace(h,"").replace(m,"")},makeArray:function(e,t){var n=t||[]
if(null!=e){var r=u.type(e)
null==e.length||"string"===r||"function"===r||"regexp"===r||u.isWindow(e)?P.call(n,e):u.merge(n,e)}return n},inArray:function(e,t,n){var r
if(t){if(A)return A.call(t,e,n)
r=t.length
n=n?n<0?Math.max(0,r+n):n:0
for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){var r=e.length,a=0
if("number"===typeof t.length)for(var i=t.length;a<i;a++)e[r++]=t[a]
else while(t[a]!==n)e[r++]=t[a++]
e.length=r
return e},grep:function(e,t,n){var r,a=[]
n=!!n
for(var i=0,o=e.length;i<o;i++){r=!!t(e[i],i)
n!==r&&a.push(e[i])}return a},map:function(e,t,r){var a,i,o=[],s=0,l=e.length,c=e instanceof u||l!==n&&"number"===typeof l&&(l>0&&e[0]&&e[l-1]||0===l||u.isArray(e))
if(c)for(;s<l;s++){a=t(e[s],s,r)
null!=a&&(o[o.length]=a)}else for(i in e){a=t(e[i],i,r)
null!=a&&(o[o.length]=a)}return o.concat.apply([],o)},guid:1,proxy:function(e,t){if("string"===typeof t){var r=e[t]
t=e
e=r}if(!u.isFunction(e))return n
var a=O.call(arguments,2),i=function(){return e.apply(t,a.concat(O.call(arguments)))}
i.guid=e.guid=e.guid||i.guid||u.guid++
return i},access:function(e,t,r,a,i,o,s){var l,c=null==r,d=0,f=e.length
if(r&&"object"===typeof r){for(d in r)u.access(e,t,d,r[d],1,o,a)
i=1}else if(a!==n){l=s===n&&u.isFunction(a)
if(c)if(l){l=t
t=function(e,t,n){return l.call(u(e),n)}}else{t.call(e,a)
t=null}if(t)for(;d<f;d++)t(e[d],r,l?a.call(e[d],d,t(e[d],r)):a,s)
i=1}return i?e:c?t.call(e):f?t(e[0],r):o},now:function(){return(new Date).getTime()},uaMatch:function(e){e=e.toLowerCase()
var t=b.exec(e)||w.exec(e)||k.exec(e)||e.indexOf("compatible")<0&&x.exec(e)||[]
return{browser:t[1]||"",version:t[2]||"0"}},sub:function(){function e(t,n){return new e.fn.init(t,n)}u.extend(true,e,this)
e.superclass=this
e.fn=e.prototype=this()
e.fn.constructor=e
e.sub=this.sub
e.fn.init=function(n,r){r&&r instanceof u&&!(r instanceof e)&&(r=e(r))
return u.fn.init.call(this,n,r,t)}
e.fn.init.prototype=e.fn
var t=e(r)
return e},browser:{}})
u.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){N["[object "+t+"]"]=t.toLowerCase()})
i=u.uaMatch(E)
if(i.browser){u.browser[i.browser]=true
u.browser.version=i.version}u.browser.webkit&&(u.browser.safari=true)
if(f.test(" ")){h=/^[\s\xA0]+/
m=/[\s\xA0]+$/}e=u(r)
r.addEventListener?s=function(){r.removeEventListener("DOMContentLoaded",s,false)
u.ready()}:r.attachEvent&&(s=function(){if("complete"===r.readyState){r.detachEvent("onreadystatechange",s)
u.ready()}})
function z(){if(u.isReady)return
try{r.documentElement.doScroll("left")}catch(e){setTimeout(z,1)
return}u.ready()}return u}()
var s={}
function u(e){var t,n,r=s[e]={}
e=e.split(/\s+/)
for(t=0,n=e.length;t<n;t++)r[e[t]]=true
return r}o.Callbacks=function(e){e=e?s[e]||u(e):{}
var t,r,a,i,l,c,d=[],f=[],h=function(t){var n,r,a,i
for(n=0,r=t.length;n<r;n++){a=t[n]
i=o.type(a)
"array"===i?h(a):"function"===i&&(e.unique&&p.has(a)||d.push(a))}},m=function(n,o){o=o||[]
t=!e.memory||[n,o]
r=true
a=true
c=i||0
i=0
l=d.length
for(;d&&c<l;c++)if(false===d[c].apply(n,o)&&e.stopOnFalse){t=true
break}a=false
if(d)if(e.once)true===t?p.disable():d=[]
else if(f&&f.length){t=f.shift()
p.fireWith(t[0],t[1])}},p={add:function(){if(d){var e=d.length
h(arguments)
if(a)l=d.length
else if(t&&true!==t){i=e
m(t[0],t[1])}}return this},remove:function(){if(d){var t=arguments,n=0,r=t.length
for(;n<r;n++)for(var i=0;i<d.length;i++)if(t[n]===d[i]){if(a&&i<=l){l--
i<=c&&c--}d.splice(i--,1)
if(e.unique)break}}return this},has:function(e){if(d){var t=0,n=d.length
for(;t<n;t++)if(e===d[t])return true}return false},empty:function(){d=[]
return this},disable:function(){d=f=t=n
return this},disabled:function(){return!d},lock:function(){f=n
t&&true!==t||p.disable()
return this},locked:function(){return!f},fireWith:function(n,r){f&&(a?e.once||f.push([n,r]):e.once&&t||m(n,r))
return this},fire:function(){p.fireWith(this,arguments)
return this},fired:function(){return!!r}}
return p}
var l=[].slice
o.extend({Deferred:function(e){var t,n=o.Callbacks("once memory"),r=o.Callbacks("once memory"),a=o.Callbacks("memory"),i="pending",s={resolve:n,reject:r,notify:a},u={done:n.add,fail:r.add,progress:a.add,state:function(){return i},isResolved:n.fired,isRejected:r.fired,then:function(e,t,n){l.done(e).fail(t).progress(n)
return this},always:function(){l.done.apply(l,arguments).fail.apply(l,arguments)
return this},pipe:function(e,t,n){return o.Deferred(function(r){o.each({done:[e,"resolve"],fail:[t,"reject"],progress:[n,"notify"]},function(e,t){var n,a=t[0],i=t[1]
o.isFunction(a)?l[e](function(){n=a.apply(this,arguments)
n&&o.isFunction(n.promise)?n.promise().then(r.resolve,r.reject,r.notify):r[i+"With"](this===l?r:this,[n])}):l[e](r[i])})}).promise()},promise:function(e){if(null==e)e=u
else for(var t in u)e[t]=u[t]
return e}},l=u.promise({})
for(t in s){l[t]=s[t].fire
l[t+"With"]=s[t].fireWith}l.done(function(){i="resolved"},r.disable,a.lock).fail(function(){i="rejected"},n.disable,a.lock)
e&&e.call(l,l)
return l},when:function(e){var t=l.call(arguments,0),n=0,r=t.length,a=new Array(r),i=r,s=r<=1&&e&&o.isFunction(e.promise)?e:o.Deferred(),u=s.promise()
function c(e){return function(n){t[e]=arguments.length>1?l.call(arguments,0):n;--i||s.resolveWith(s,t)}}function d(e){return function(t){a[e]=arguments.length>1?l.call(arguments,0):t
s.notifyWith(u,a)}}if(r>1){for(;n<r;n++)t[n]&&t[n].promise&&o.isFunction(t[n].promise)?t[n].promise().then(c(n),s.reject,d(n)):--i
i||s.resolveWith(s,t)}else s!==e&&s.resolveWith(s,r?[e]:[])
return u}})
o.support=function(){var e,n,a,i,s,u,l,c,d,f,h=r.createElement("div")
r.documentElement
h.setAttribute("className","t")
h.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"
n=h.getElementsByTagName("*")
a=h.getElementsByTagName("a")[0]
if(!n||!n.length||!a)return{}
i=r.createElement("select")
s=i.appendChild(r.createElement("option"))
u=h.getElementsByTagName("input")[0]
e={leadingWhitespace:true,tbody:true,htmlSerialize:true,style:true,hrefNormalized:"/a"===a.getAttribute("href"),opacity:true,cssFloat:true,checkOn:"on"===u.value,optSelected:s.selected,getSetAttribute:true,enctype:!!r.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==r.createElement("nav").cloneNode(true).outerHTML,submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,pixelMargin:true}
o.boxModel=e.boxModel="CSS1Compat"===r.compatMode
u.checked=true
e.noCloneChecked=u.cloneNode(true).checked
i.disabled=true
e.optDisabled=!s.disabled
try{delete h.test}catch(t){e.deleteExpando=false}u=r.createElement("input")
u.value="t"
u.setAttribute("type","radio")
e.radioValue="t"===u.value
u.setAttribute("checked","checked")
u.setAttribute("name","t")
h.appendChild(u)
l=r.createDocumentFragment()
l.appendChild(h.lastChild)
e.checkClone=l.cloneNode(true).cloneNode(true).lastChild.checked
e.appendChecked=u.checked
l.removeChild(u)
l.appendChild(h)
if(h.attachEvent)for(d in{submit:1,change:1,focusin:1}){c="on"+d
f=c in h
if(!f){h.setAttribute(c,"return;")
f="function"===typeof h[c]}e[d+"Bubbles"]=f}l.removeChild(h)
l=i=s=h=u=null
o(function(){var n,a,i,s,u,l,c,d,f,m,p,_=r.getElementsByTagName("body")[0]
if(!_)return
l=1
p="padding:0;margin:0;border:"
f="position:absolute;top:0;left:0;width:1px;height:1px;"
m=p+"0;visibility:hidden;"
c="style='"+f+p+"5px solid #000;"
d="<div "+c+"display:block;'><div style='"+p+"0;display:block;overflow:hidden;'></div></div><table "+c+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"
n=r.createElement("div")
n.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+l+"px"
_.insertBefore(n,_.firstChild)
h=r.createElement("div")
n.appendChild(h)
e.reliableHiddenOffsets=true
h.style.cssText=f+m
h.innerHTML=d
a=h.firstChild
i=a.firstChild
s=a.nextSibling.firstChild.firstChild
u={doesNotAddBorder:5!==i.offsetTop,doesAddBorderForTableAndCells:5===s.offsetTop}
i.style.position="fixed"
i.style.top="20px"
u.fixedPosition=20===i.offsetTop||15===i.offsetTop
i.style.position=i.style.top=""
a.style.overflow="hidden"
a.style.position="relative"
u.subtractsBorderForOverflowNotVisible=-5===i.offsetTop
u.doesNotIncludeMarginInBodyOffset=_.offsetTop!==l
if(t.getComputedStyle){h.style.marginTop="1%"
e.pixelMargin=true}"undefined"!==typeof n.style.zoom&&(n.style.zoom=1)
_.removeChild(n)
h=n=null
o.extend(e,u)})
return e}()
var c=/^(?:\{.*\}|\[.*\])$/,d=/([A-Z])/g
o.extend({cache:{},uuid:0,expando:"jQuery"+(o.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?o.cache[e[o.expando]]:e[o.expando]
return!!e&&!h(e)},data:function(e,t,r,a){if(!o.acceptData(e))return
var i,s,u,l=o.expando,c="string"===typeof t,d=e.nodeType,f=d?o.cache:e,h=d?e[l]:e[l]&&l,m="events"===t
if((!h||!f[h]||!m&&!a&&!f[h].data)&&c&&r===n)return
h||(d?e[l]=h=++o.uuid:h=l)
if(!f[h]){f[h]={}
d||(f[h].toJSON=o.noop)}"object"!==typeof t&&"function"!==typeof t||(a?f[h]=o.extend(f[h],t):f[h].data=o.extend(f[h].data,t))
i=s=f[h]
if(!a){s.data||(s.data={})
s=s.data}r!==n&&(s[o.camelCase(t)]=r)
if(m&&!s[t])return i.events
if(c){u=s[t]
null==u&&(u=s[o.camelCase(t)])}else u=s
return u},removeData:function(e,t,n){if(!o.acceptData(e))return
var r,a,i,s=o.expando,u=e.nodeType,l=u?o.cache:e,c=u?e[s]:s
if(!l[c])return
if(t){r=n?l[c]:l[c].data
if(r){if(!o.isArray(t))if(t in r)t=[t]
else{t=o.camelCase(t)
t=t in r?[t]:t.split(" ")}for(a=0,i=t.length;a<i;a++)delete r[t[a]]
if(!(n?h:o.isEmptyObject)(r))return}}if(!n){delete l[c].data
if(!h(l[c]))return}o.support.deleteExpando||!l.setInterval?delete l[c]:l[c]=null
u&&(o.support.deleteExpando?delete e[s]:e.removeAttribute?e.removeAttribute(s):e[s]=null)},_data:function(e,t,n){return o.data(e,t,n,true)},acceptData:function(e){if(e.nodeName){var t=o.noData[e.nodeName.toLowerCase()]
if(t)return!(true===t||e.getAttribute("classid")!==t)}return true}})
o.fn.extend({data:function(e,t){var r,a,i,s,u,l=this[0],c=0,d=null
if(e===n){if(this.length){d=o.data(l)
if(1===l.nodeType&&!o._data(l,"parsedAttrs")){i=l.attributes
for(u=i.length;c<u;c++){s=i[c].name
if(0===s.indexOf("data-")){s=o.camelCase(s.substring(5))
f(l,s,d[s])}}o._data(l,"parsedAttrs",true)}}return d}if("object"===typeof e)return this.each(function(){o.data(this,e)})
r=e.split(".",2)
r[1]=r[1]?"."+r[1]:""
a=r[1]+"!"
return o.access(this,function(t){if(t===n){d=this.triggerHandler("getData"+a,[r[0]])
if(d===n&&l){d=o.data(l,e)
d=f(l,e,d)}return d===n&&r[1]?this.data(r[0]):d}r[1]=t
this.each(function(){var n=o(this)
n.triggerHandler("setData"+a,r)
o.data(this,e,t)
n.triggerHandler("changeData"+a,r)})},null,t,arguments.length>1,null,false)},removeData:function(e){return this.each(function(){o.removeData(this,e)})}})
function f(e,t,r){if(r===n&&1===e.nodeType){var a="data-"+t.replace(d,"-$1").toLowerCase()
r=e.getAttribute(a)
if("string"===typeof r){try{r="true"===r||"false"!==r&&("null"===r?null:o.isNumeric(r)?+r:c.test(r)?o.parseJSON(r):r)}catch(e){}o.data(e,t,r)}else r=n}return r}function h(e){for(var t in e){if("data"===t&&o.isEmptyObject(e[t]))continue
if("toJSON"!==t)return false}return true}function m(e,t,n){var r=t+"defer",a=t+"queue",i=t+"mark",s=o._data(e,r)
!s||"queue"!==n&&o._data(e,a)||"mark"!==n&&o._data(e,i)||setTimeout(function(){if(!o._data(e,a)&&!o._data(e,i)){o.removeData(e,r,true)
s.fire()}},0)}o.extend({_mark:function(e,t){if(e){t=(t||"fx")+"mark"
o._data(e,t,(o._data(e,t)||0)+1)}},_unmark:function(e,t,n){if(true!==e){n=t
t=e
e=false}if(t){n=n||"fx"
var r=n+"mark",a=e?0:(o._data(t,r)||1)-1
if(a)o._data(t,r,a)
else{o.removeData(t,r,true)
m(t,n,"mark")}}},queue:function(e,t,n){var r
if(e){t=(t||"fx")+"queue"
r=o._data(e,t)
n&&(!r||o.isArray(n)?r=o._data(e,t,o.makeArray(n)):r.push(n))
return r||[]}},dequeue:function(e,t){t=t||"fx"
var n=o.queue(e,t),r=n.shift(),a={}
"inprogress"===r&&(r=n.shift())
if(r){"fx"===t&&n.unshift("inprogress")
o._data(e,t+".run",a)
r.call(e,function(){o.dequeue(e,t)},a)}if(!n.length){o.removeData(e,t+"queue "+t+".run",true)
m(e,t,"queue")}}})
o.fn.extend({queue:function(e,t){var r=2
if("string"!==typeof e){t=e
e="fx"
r--}if(arguments.length<r)return o.queue(this[0],e)
return t===n?this:this.each(function(){var n=o.queue(this,e,t)
"fx"===e&&"inprogress"!==n[0]&&o.dequeue(this,e)})},dequeue:function(e){return this.each(function(){o.dequeue(this,e)})},delay:function(e,t){e=o.fx&&o.fx.speeds[e]||e
t=t||"fx"
return this.queue(t,function(t,n){var r=setTimeout(t,e)
n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){if("string"!==typeof e){t=e
e=n}e=e||"fx"
var r,a=o.Deferred(),i=this,s=i.length,u=1,l=e+"defer",c=e+"queue",d=e+"mark"
function f(){--u||a.resolveWith(i,[i])}while(s--)if(r=o.data(i[s],l,n,true)||(o.data(i[s],c,n,true)||o.data(i[s],d,n,true))&&o.data(i[s],l,o.Callbacks("once memory"),true)){u++
r.add(f)}f()
return a.promise(t)}})
var p,_,g,y=/[\n\t\r]/g,v=/\s+/,b=/\r/g,w=/^(?:button|input)$/i,k=/^(?:button|input|object|select|textarea)$/i,x=/^a(?:rea)?$/i,M=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,T=o.support.getSetAttribute
o.fn.extend({attr:function(e,t){return o.access(this,o.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){o.removeAttr(this,e)})},prop:function(e,t){return o.access(this,o.prop,e,t,arguments.length>1)},removeProp:function(e){e=o.propFix[e]||e
return this.each(function(){try{this[e]=n
delete this[e]}catch(e){}})},addClass:function(e){var t,n,r,a,i,s,u
if(o.isFunction(e))return this.each(function(t){o(this).addClass(e.call(this,t,this.className))})
if(e&&"string"===typeof e){t=e.split(v)
for(n=0,r=this.length;n<r;n++){a=this[n]
if(1===a.nodeType)if(a.className||1!==t.length){i=" "+a.className+" "
for(s=0,u=t.length;s<u;s++)~i.indexOf(" "+t[s]+" ")||(i+=t[s]+" ")
a.className=o.trim(i)}else a.className=e}}return this},removeClass:function(e){var t,r,a,i,s,u,l
if(o.isFunction(e))return this.each(function(t){o(this).removeClass(e.call(this,t,this.className))})
if(e&&"string"===typeof e||e===n){t=(e||"").split(v)
for(r=0,a=this.length;r<a;r++){i=this[r]
if(1===i.nodeType&&i.className)if(e){s=(" "+i.className+" ").replace(y," ")
for(u=0,l=t.length;u<l;u++)s=s.replace(" "+t[u]+" "," ")
i.className=o.trim(s)}else i.className=""}}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"===typeof t
if(o.isFunction(e))return this.each(function(n){o(this).toggleClass(e.call(this,n,this.className,t),t)})
return this.each(function(){if("string"===n){var a,i=0,s=o(this),u=t,l=e.split(v)
while(a=l[i++]){u=r?u:!s.hasClass(a)
s[u?"addClass":"removeClass"](a)}}else if("undefined"===n||"boolean"===n){this.className&&o._data(this,"__className__",this.className)
this.className=this.className||false===e?"":o._data(this,"__className__")||""}})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length
for(;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(y," ").indexOf(t)>-1)return true
return false},val:function(e){var t,r,a,i=this[0]
if(!arguments.length){if(i){t=o.valHooks[i.type]||o.valHooks[i.nodeName.toLowerCase()]
if(t&&"get"in t&&(r=t.get(i,"value"))!==n)return r
r=i.value
return"string"===typeof r?r.replace(b,""):null==r?"":r}return}a=o.isFunction(e)
return this.each(function(r){var i,s=o(this)
if(1!==this.nodeType)return
i=a?e.call(this,r,s.val()):e
null==i?i="":"number"===typeof i?i+="":o.isArray(i)&&(i=o.map(i,function(e){return null==e?"":e+""}))
t=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()]
t&&"set"in t&&t.set(this,i,"value")!==n||(this.value=i)})}})
o.extend({valHooks:{option:{get:function(e){var t=e.attributes.value
return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,a,i=e.selectedIndex,s=[],u=e.options,l="select-one"===e.type
if(i<0)return null
n=l?i:0
r=l?i+1:u.length
for(;n<r;n++){a=u[n]
if(a.selected&&(o.support.optDisabled?!a.disabled:null===a.getAttribute("disabled"))&&(!a.parentNode.disabled||!o.nodeName(a.parentNode,"optgroup"))){t=o(a).val()
if(l)return t
s.push(t)}}if(l&&!s.length&&u.length)return o(u[i]).val()
return s},set:function(e,t){var n=o.makeArray(t)
o(e).find("option").each(function(){this.selected=o.inArray(o(this).val(),n)>=0})
n.length||(e.selectedIndex=-1)
return n}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(e,t,r,a){var i,s,u,l=e.nodeType
if(!e||3===l||8===l||2===l)return
if(a&&t in o.attrFn)return o(e)[t](r)
if("undefined"===typeof e.getAttribute)return o.prop(e,t,r)
u=1!==l||!o.isXMLDoc(e)
if(u){t=t.toLowerCase()
s=o.attrHooks[t]||(M.test(t)?_:p)}if(r!==n){if(null===r){o.removeAttr(e,t)
return}if(s&&"set"in s&&u&&(i=s.set(e,r,t))!==n)return i
e.setAttribute(t,""+r)
return r}if(s&&"get"in s&&u&&null!==(i=s.get(e,t)))return i
i=e.getAttribute(t)
return null===i?n:i},removeAttr:function(e,t){var n,r,a,i,s,u=0
if(t&&1===e.nodeType){r=t.toLowerCase().split(v)
i=r.length
for(;u<i;u++){a=r[u]
if(a){n=o.propFix[a]||a
s=M.test(a)
s||o.attr(e,a,"")
e.removeAttribute(T?a:n)
s&&n in e&&(e[n]=false)}}}},attrHooks:{type:{set:function(e,t){if(w.test(e.nodeName)&&e.parentNode)o.error("type property can't be changed")
else if(!o.support.radioValue&&"radio"===t&&o.nodeName(e,"input")){var n=e.value
e.setAttribute("type",t)
n&&(e.value=n)
return t}}},value:{get:function(e,t){if(p&&o.nodeName(e,"button"))return p.get(e,t)
return t in e?e.value:null},set:function(e,t,n){if(p&&o.nodeName(e,"button"))return p.set(e,t,n)
e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,t,r){var a,i,s,u=e.nodeType
if(!e||3===u||8===u||2===u)return
s=1!==u||!o.isXMLDoc(e)
if(s){t=o.propFix[t]||t
i=o.propHooks[t]}return r!==n?i&&"set"in i&&(a=i.set(e,r,t))!==n?a:e[t]=r:i&&"get"in i&&null!==(a=i.get(e,t))?a:e[t]},propHooks:{tabIndex:{get:function(e){var t=e.getAttributeNode("tabindex")
return t&&t.specified?parseInt(t.value,10):k.test(e.nodeName)||x.test(e.nodeName)&&e.href?0:n}}}})
o.attrHooks.tabindex=o.propHooks.tabIndex
_={get:function(e,t){var r,a=o.prop(e,t)
return true===a||"boolean"!==typeof a&&(r=e.getAttributeNode(t))&&false!==r.nodeValue?t.toLowerCase():n},set:function(e,t,n){var r
if(false===t)o.removeAttr(e,n)
else{r=o.propFix[n]||n
r in e&&(e[r]=true)
e.setAttribute(n,n.toLowerCase())}return n}}
if(!T){g={name:true,id:true,coords:true}
p=o.valHooks.button={get:function(e,t){var r
r=e.getAttributeNode(t)
return r&&(g[t]?""!==r.nodeValue:r.specified)?r.nodeValue:n},set:function(e,t,n){var a=e.getAttributeNode(n)
if(!a){a=r.createAttribute(n)
e.setAttributeNode(a)}return a.nodeValue=t+""}}
o.attrHooks.tabindex.set=p.set
o.each(["width","height"],function(e,t){o.attrHooks[t]=o.extend(o.attrHooks[t],{set:function(e,n){if(""===n){e.setAttribute(t,"auto")
return n}}})})
o.attrHooks.contenteditable={get:p.get,set:function(e,t,n){""===t&&(t="false")
p.set(e,t,n)}}}o.support.hrefNormalized||o.each(["href","src","width","height"],function(e,t){o.attrHooks[t]=o.extend(o.attrHooks[t],{get:function(e){var r=e.getAttribute(t,2)
return null===r?n:r}})})
o.support.style||(o.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||n},set:function(e,t){return e.style.cssText=""+t}})
o.support.optSelected||(o.propHooks.selected=o.extend(o.propHooks.selected,{get:function(e){var t=e.parentNode
if(t){t.selectedIndex
t.parentNode&&t.parentNode.selectedIndex}return null}}))
o.support.enctype||(o.propFix.enctype="encoding")
o.support.checkOn||o.each(["radio","checkbox"],function(){o.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}})
o.each(["radio","checkbox"],function(){o.valHooks[this]=o.extend(o.valHooks[this],{set:function(e,t){if(o.isArray(t))return e.checked=o.inArray(o(e).val(),t)>=0}})})
var D=/^(?:textarea|input|select)$/i,E=/^([^\.]*)?(?:\.(.+))?$/,S=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,P=/^(?:mouse|contextmenu)|click/,O=/^(?:focusinfocus|focusoutblur)$/,j=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,A=function(e){var t=j.exec(e)
if(t){t[1]=(t[1]||"").toLowerCase()
t[3]=t[3]&&new RegExp("(?:^|\\s)"+t[3]+"(?:\\s|$)")}return t},N=function(e,t){var n=e.attributes||{}
return(!t[1]||e.nodeName.toLowerCase()===t[1])&&(!t[2]||(n.id||{}).value===t[2])&&(!t[3]||t[3].test((n["class"]||{}).value))},z=function(e){return o.event.special.hover?e:e.replace(S,"mouseenter$1 mouseleave$1")}
o.event={add:function(e,t,r,a,i){var s,u,l,c,d,f,h,m,p,_,g
if(3===e.nodeType||8===e.nodeType||!t||!r||!(s=o._data(e)))return
if(r.handler){p=r
r=p.handler
i=p.selector}r.guid||(r.guid=o.guid++)
l=s.events
l||(s.events=l={})
u=s.handle
if(!u){s.handle=u=function(e){return"undefined"===typeof o||e&&o.event.triggered===e.type?n:o.event.dispatch.apply(u.elem,arguments)}
u.elem=e}t=o.trim(z(t)).split(" ")
for(c=0;c<t.length;c++){d=E.exec(t[c])||[]
f=d[1]
h=(d[2]||"").split(".").sort()
g=o.event.special[f]||{}
f=(i?g.delegateType:g.bindType)||f
g=o.event.special[f]||{}
m=o.extend({type:f,origType:d[1],data:a,handler:r,guid:r.guid,selector:i,quick:i&&A(i),namespace:h.join(".")},p)
_=l[f]
if(!_){_=l[f]=[]
_.delegateCount=0
g.setup&&false!==g.setup.call(e,a,h,u)||(e.addEventListener?e.addEventListener(f,u,false):e.attachEvent&&e.attachEvent("on"+f,u))}if(g.add){g.add.call(e,m)
m.handler.guid||(m.handler.guid=r.guid)}i?_.splice(_.delegateCount++,0,m):_.push(m)
o.event.global[f]=true}e=null},global:{},remove:function(e,t,n,r,a){var i,s,u,l,c,d,f,h,m,p,_,g,y=o.hasData(e)&&o._data(e)
if(!y||!(h=y.events))return
t=o.trim(z(t||"")).split(" ")
for(i=0;i<t.length;i++){s=E.exec(t[i])||[]
u=l=s[1]
c=s[2]
if(!u){for(u in h)o.event.remove(e,u+t[i],n,r,true)
continue}m=o.event.special[u]||{}
u=(r?m.delegateType:m.bindType)||u
_=h[u]||[]
d=_.length
c=c?new RegExp("(^|\\.)"+c.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null
for(f=0;f<_.length;f++){g=_[f]
if((a||l===g.origType)&&(!n||n.guid===g.guid)&&(!c||c.test(g.namespace))&&(!r||r===g.selector||"**"===r&&g.selector)){_.splice(f--,1)
g.selector&&_.delegateCount--
m.remove&&m.remove.call(e,g)}}if(0===_.length&&d!==_.length){m.teardown&&false!==m.teardown.call(e,c)||o.removeEvent(e,u,y.handle)
delete h[u]}}if(o.isEmptyObject(h)){p=y.handle
p&&(p.elem=null)
o.removeData(e,["events","handle"],true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(e,r,a,i){if(a&&(3===a.nodeType||8===a.nodeType))return
var s,u,l,c,d,f,h,m,p,_,g=e.type||e,y=[]
if(O.test(g+o.event.triggered))return
if(g.indexOf("!")>=0){g=g.slice(0,-1)
u=true}if(g.indexOf(".")>=0){y=g.split(".")
g=y.shift()
y.sort()}if((!a||o.event.customEvent[g])&&!o.event.global[g])return
e="object"===typeof e?e[o.expando]?e:new o.Event(g,e):new o.Event(g)
e.type=g
e.isTrigger=true
e.exclusive=u
e.namespace=y.join(".")
e.namespace_re=e.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.)?")+"(\\.|$)"):null
f=g.indexOf(":")<0?"on"+g:""
if(!a){s=o.cache
for(l in s)s[l].events&&s[l].events[g]&&o.event.trigger(e,r,s[l].handle.elem,true)
return}e.result=n
e.target||(e.target=a)
r=null!=r?o.makeArray(r):[]
r.unshift(e)
h=o.event.special[g]||{}
if(h.trigger&&false===h.trigger.apply(a,r))return
p=[[a,h.bindType||g]]
if(!i&&!h.noBubble&&!o.isWindow(a)){_=h.delegateType||g
c=O.test(_+g)?a:a.parentNode
d=null
for(;c;c=c.parentNode){p.push([c,_])
d=c}d&&d===a.ownerDocument&&p.push([d.defaultView||d.parentWindow||t,_])}for(l=0;l<p.length&&!e.isPropagationStopped();l++){c=p[l][0]
e.type=p[l][1]
m=(o._data(c,"events")||{})[e.type]&&o._data(c,"handle")
m&&m.apply(c,r)
m=f&&c[f]
m&&o.acceptData(c)&&false===m.apply(c,r)&&e.preventDefault()}e.type=g
if(!i&&!e.isDefaultPrevented()&&(!h._default||false===h._default.apply(a.ownerDocument,r))&&!("click"===g&&o.nodeName(a,"a"))&&o.acceptData(a)&&f&&a[g]&&("focus"!==g&&"blur"!==g||0!==e.target.offsetWidth)&&!o.isWindow(a)){d=a[f]
d&&(a[f]=null)
o.event.triggered=g
a[g]()
o.event.triggered=n
d&&(a[f]=d)}return e.result},dispatch:function(e){e=o.event.fix(e||t.event)
var r,a,i,s,u,l,c,d,f,h,m=(o._data(this,"events")||{})[e.type]||[],p=m.delegateCount,_=[].slice.call(arguments,0),g=!e.exclusive&&!e.namespace,y=o.event.special[e.type]||{},v=[]
_[0]=e
e.delegateTarget=this
if(y.preDispatch&&false===y.preDispatch.call(this,e))return
if(p&&!(e.button&&"click"===e.type)){s=o(this)
s.context=this.ownerDocument||this
for(i=e.target;i!=this;i=i.parentNode||this)if(true!==i.disabled){l={}
d=[]
s[0]=i
for(r=0;r<p;r++){f=m[r]
h=f.selector
l[h]===n&&(l[h]=f.quick?N(i,f.quick):s.is(h))
l[h]&&d.push(f)}d.length&&v.push({elem:i,matches:d})}}m.length>p&&v.push({elem:this,matches:m.slice(p)})
for(r=0;r<v.length&&!e.isPropagationStopped();r++){c=v[r]
e.currentTarget=c.elem
for(a=0;a<c.matches.length&&!e.isImmediatePropagationStopped();a++){f=c.matches[a]
if(g||!e.namespace&&!f.namespace||e.namespace_re&&e.namespace_re.test(f.namespace)){e.data=f.data
e.handleObj=f
u=((o.event.special[f.origType]||{}).handle||f.handler).apply(c.elem,_)
if(u!==n){e.result=u
if(false===u){e.preventDefault()
e.stopPropagation()}}}}}y.postDispatch&&y.postDispatch.call(this,e)
return e.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode)
return e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var a,i,o,s=t.button,u=t.fromElement
if(null==e.pageX&&null!=t.clientX){a=e.target.ownerDocument||r
i=a.documentElement
o=a.body
e.pageX=t.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0)
e.pageY=t.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)}!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?t.toElement:u)
e.which||s===n||(e.which=1&s?1:2&s?3:4&s?2:0)
return e}},fix:function(e){if(e[o.expando])return e
var t,a,i=e,s=o.event.fixHooks[e.type]||{},u=s.props?this.props.concat(s.props):this.props
e=o.Event(i)
for(t=u.length;t;){a=u[--t]
e[a]=i[a]}e.target||(e.target=i.srcElement||r)
3===e.target.nodeType&&(e.target=e.target.parentNode)
e.metaKey===n&&(e.metaKey=e.ctrlKey)
return s.filter?s.filter(e,i):e},special:{ready:{setup:o.bindReady},load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){o.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var a=o.extend(new o.Event,n,{type:e,isSimulated:true,originalEvent:{}})
r?o.event.trigger(a,null,t):o.event.dispatch.call(t,a)
a.isDefaultPrevented()&&n.preventDefault()}}
o.event.handle=o.event.dispatch
o.removeEvent=r.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,false)}:function(e,t,n){e.detachEvent&&e.detachEvent("on"+t,n)}
o.Event=function(e,t){if(!(this instanceof o.Event))return new o.Event(e,t)
if(e&&e.type){this.originalEvent=e
this.type=e.type
this.isDefaultPrevented=e.defaultPrevented||false===e.returnValue||e.getPreventDefault&&e.getPreventDefault()?L:I}else this.type=e
t&&o.extend(this,t)
this.timeStamp=e&&e.timeStamp||o.now()
this[o.expando]=true}
function I(){return false}function L(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=L
var e=this.originalEvent
if(!e)return
e.preventDefault?e.preventDefault():e.returnValue=false},stopPropagation:function(){this.isPropagationStopped=L
var e=this.originalEvent
if(!e)return
e.stopPropagation&&e.stopPropagation()
e.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=L
this.stopPropagation()},isDefaultPrevented:I,isPropagationStopped:I,isImmediatePropagationStopped:I}
o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){o.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,a=e.relatedTarget,i=e.handleObj
i.selector
if(!a||a!==r&&!o.contains(r,a)){e.type=i.origType
n=i.handler.apply(this,arguments)
e.type=t}return n}}})
o.support.submitBubbles||(o.event.special.submit={setup:function(){if(o.nodeName(this,"form"))return false
o.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,r=o.nodeName(t,"input")||o.nodeName(t,"button")?t.form:n
if(r&&!r._submit_attached){o.event.add(r,"submit._submit",function(e){e._submit_bubble=true})
r._submit_attached=true}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble
this.parentNode&&!e.isTrigger&&o.event.simulate("submit",this.parentNode,e,true)}},teardown:function(){if(o.nodeName(this,"form"))return false
o.event.remove(this,"._submit")}})
o.support.changeBubbles||(o.event.special.change={setup:function(){if(D.test(this.nodeName)){if("checkbox"===this.type||"radio"===this.type){o.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=true)})
o.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
o.event.simulate("change",this,e,true)}})}return false}o.event.add(this,"beforeactivate._change",function(e){var t=e.target
if(D.test(t.nodeName)&&!t._change_attached){o.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||o.event.simulate("change",this.parentNode,e,true)})
t._change_attached=true}})},handle:function(e){var t=e.target
if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){o.event.remove(this,"._change")
return D.test(this.nodeName)}})
o.support.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,a=function(e){o.event.simulate(t,e.target,o.event.fix(e),true)}
o.event.special[t]={setup:function(){0===n++&&r.addEventListener(e,a,true)},teardown:function(){0===--n&&r.removeEventListener(e,a,true)}}})
o.fn.extend({on:function(e,t,r,a,i){var s,u
if("object"===typeof e){if("string"!==typeof t){r=r||t
t=n}for(u in e)this.on(u,t,r,e[u],i)
return this}if(null==r&&null==a){a=t
r=t=n}else if(null==a)if("string"===typeof t){a=r
r=n}else{a=r
r=t
t=n}if(false===a)a=I
else if(!a)return this
if(1===i){s=a
a=function(e){o().off(e)
return s.apply(this,arguments)}
a.guid=s.guid||(s.guid=o.guid++)}return this.each(function(){o.event.add(this,e,a,r,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,r){if(e&&e.preventDefault&&e.handleObj){var a=e.handleObj
o(e.delegateTarget).off(a.namespace?a.origType+"."+a.namespace:a.origType,a.selector,a.handler)
return this}if("object"===typeof e){for(var i in e)this.off(i,t,e[i])
return this}if(false===t||"function"===typeof t){r=t
t=n}false===r&&(r=I)
return this.each(function(){o.event.remove(this,e,r,t)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){o(this.context).on(e,this.selector,t,n)
return this},die:function(e,t){o(this.context).off(e,this.selector||"**",t)
return this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1==arguments.length?this.off(e,"**"):this.off(t,e,n)},trigger:function(e,t){return this.each(function(){o.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return o.event.trigger(e,t,this[0],true)},toggle:function(e){var t=arguments,n=e.guid||o.guid++,r=0,a=function(n){var a=(o._data(this,"lastToggle"+e.guid)||0)%r
o._data(this,"lastToggle"+e.guid,a+1)
n.preventDefault()
return t[a].apply(this,arguments)||false}
a.guid=n
while(r<t.length)t[r++].guid=n
return this.click(a)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}})
o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){o.fn[t]=function(e,n){if(null==n){n=e
e=null}return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}
o.attrFn&&(o.attrFn[t]=true)
C.test(t)&&(o.event.fixHooks[t]=o.event.keyHooks)
P.test(t)&&(o.event.fixHooks[t]=o.event.mouseHooks)});(function(){var e=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,t="sizcache"+(Math.random()+"").replace(".",""),a=0,i=Object.prototype.toString,s=false,u=true,l=/\\/g,c=/\r\n/g,d=/\W/;[0,0].sort(function(){u=false
return 0})
var f=function(t,n,a,o){a=a||[]
n=n||r
var s=n
if(1!==n.nodeType&&9!==n.nodeType)return[]
if(!t||"string"!==typeof t)return a
var u,l,c,d,h,_,g,v,b=true,w=f.isXML(n),k=[],M=t
do{e.exec("")
u=e.exec(M)
if(u){M=u[3]
k.push(u[1])
if(u[2]){d=u[3]
break}}}while(u)
if(k.length>1&&p.exec(t))if(2===k.length&&m.relative[k[0]])l=x(k[0]+k[1],n,o)
else{l=m.relative[k[0]]?[n]:f(k.shift(),n)
while(k.length){t=k.shift()
m.relative[t]&&(t+=k.shift())
l=x(t,l,o)}}else{if(!o&&k.length>1&&9===n.nodeType&&!w&&m.match.ID.test(k[0])&&!m.match.ID.test(k[k.length-1])){h=f.find(k.shift(),n,w)
n=h.expr?f.filter(h.expr,h.set)[0]:h.set[0]}if(n){h=o?{expr:k.pop(),set:y(o)}:f.find(k.pop(),1!==k.length||"~"!==k[0]&&"+"!==k[0]||!n.parentNode?n:n.parentNode,w)
l=h.expr?f.filter(h.expr,h.set):h.set
k.length>0?c=y(l):b=false
while(k.length){_=k.pop()
g=_
m.relative[_]?g=k.pop():_=""
null==g&&(g=n)
m.relative[_](c,g,w)}}else c=k=[]}c||(c=l)
c||f.error(_||t)
if("[object Array]"===i.call(c))if(b)if(n&&1===n.nodeType)for(v=0;null!=c[v];v++)c[v]&&(true===c[v]||1===c[v].nodeType&&f.contains(n,c[v]))&&a.push(l[v])
else for(v=0;null!=c[v];v++)c[v]&&1===c[v].nodeType&&a.push(l[v])
else a.push.apply(a,c)
else y(c,a)
if(d){f(d,s,a,o)
f.uniqueSort(a)}return a}
f.uniqueSort=function(e){if(v){s=u
e.sort(v)
if(s)for(var t=1;t<e.length;t++)e[t]===e[t-1]&&e.splice(t--,1)}return e}
f.matches=function(e,t){return f(e,null,null,t)}
f.matchesSelector=function(e,t){return f(t,null,null,[e]).length>0}
f.find=function(e,t,n){var r,a,i,o,s,u
if(!e)return[]
for(a=0,i=m.order.length;a<i;a++){s=m.order[a]
if(o=m.leftMatch[s].exec(e)){u=o[1]
o.splice(1,1)
if("\\"!==u.substr(u.length-1)){o[1]=(o[1]||"").replace(l,"")
r=m.find[s](o,t,n)
if(null!=r){e=e.replace(m.match[s],"")
break}}}}r||(r="undefined"!==typeof t.getElementsByTagName?t.getElementsByTagName("*"):[])
return{set:r,expr:e}}
f.filter=function(e,t,r,a){var i,o,s,u,l,c,d,h,p,_=e,g=[],y=t,v=t&&t[0]&&f.isXML(t[0])
while(e&&t.length){for(s in m.filter)if(null!=(i=m.leftMatch[s].exec(e))&&i[2]){c=m.filter[s]
d=i[1]
o=false
i.splice(1,1)
if("\\"===d.substr(d.length-1))continue
y===g&&(g=[])
if(m.preFilter[s]){i=m.preFilter[s](i,y,r,g,a,v)
if(i){if(true===i)continue}else o=u=true}if(i)for(h=0;null!=(l=y[h]);h++)if(l){u=c(l,i,h,y)
p=a^u
if(r&&null!=u)p?o=true:y[h]=false
else if(p){g.push(l)
o=true}}if(u!==n){r||(y=g)
e=e.replace(m.match[s],"")
if(!o)return[]
break}}if(e===_){if(null!=o)break
f.error(e)}_=e}return y}
f.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)}
var h=f.getText=function(e){var t,n,r=e.nodeType,a=""
if(r){if(1===r||9===r||11===r){if("string"===typeof e.textContent)return e.textContent
if("string"===typeof e.innerText)return e.innerText.replace(c,"")
for(e=e.firstChild;e;e=e.nextSibling)a+=h(e)}else if(3===r||4===r)return e.nodeValue}else for(t=0;n=e[t];t++)8!==n.nodeType&&(a+=h(n))
return a}
var m=f.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{class:"className",for:"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n="string"===typeof t,r=n&&!d.test(t),a=n&&!r
r&&(t=t.toLowerCase())
for(var i,o=0,s=e.length;o<s;o++)if(i=e[o]){while((i=i.previousSibling)&&1!==i.nodeType);e[o]=a||i&&i.nodeName.toLowerCase()===t?i||false:i===t}a&&f.filter(t,e,true)},">":function(e,t){var n,r="string"===typeof t,a=0,i=e.length
if(r&&!d.test(t)){t=t.toLowerCase()
for(;a<i;a++){n=e[a]
if(n){var o=n.parentNode
e[a]=o.nodeName.toLowerCase()===t&&o}}}else{for(;a<i;a++){n=e[a]
n&&(e[a]=r?n.parentNode:n.parentNode===t)}r&&f.filter(t,e,true)}},"":function(e,t,n){var r,i=a++,o=k
if("string"===typeof t&&!d.test(t)){t=t.toLowerCase()
r=t
o=w}o("parentNode",t,i,e,r,n)},"~":function(e,t,n){var r,i=a++,o=k
if("string"===typeof t&&!d.test(t)){t=t.toLowerCase()
r=t
o=w}o("previousSibling",t,i,e,r,n)}},find:{ID:function(e,t,n){if("undefined"!==typeof t.getElementById&&!n){var r=t.getElementById(e[1])
return r&&r.parentNode?[r]:[]}},NAME:function(e,t){if("undefined"!==typeof t.getElementsByName){var n=[],r=t.getElementsByName(e[1])
for(var a=0,i=r.length;a<i;a++)r[a].getAttribute("name")===e[1]&&n.push(r[a])
return 0===n.length?null:n}},TAG:function(e,t){if("undefined"!==typeof t.getElementsByTagName)return t.getElementsByTagName(e[1])}},preFilter:{CLASS:function(e,t,n,r,a,i){e=" "+e[1].replace(l,"")+" "
if(i)return e
for(var o,s=0;null!=(o=t[s]);s++)o&&(a^(o.className&&(" "+o.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)?n||r.push(o):n&&(t[s]=false))
return false},ID:function(e){return e[1].replace(l,"")},TAG:function(e,t){return e[1].replace(l,"").toLowerCase()},CHILD:function(e){if("nth"===e[1]){e[2]||f.error(e[0])
e[2]=e[2].replace(/^\+|\s*/g,"")
var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(("even"===e[2]?"2n":"odd"===e[2]&&"2n+1")||!/\D/.test(e[2])&&"0n+"+e[2]||e[2])
e[2]=t[1]+(t[2]||1)-0
e[3]=t[3]-0}else e[2]&&f.error(e[0])
e[0]=a++
return e},ATTR:function(e,t,n,r,a,i){var o=e[1]=e[1].replace(l,"")
!i&&m.attrMap[o]&&(e[1]=m.attrMap[o])
e[4]=(e[4]||e[5]||"").replace(l,"")
"~="===e[2]&&(e[4]=" "+e[4]+" ")
return e},PSEUDO:function(t,n,r,a,i){if("not"===t[1]){if(!((e.exec(t[3])||"").length>1||/^\w/.test(t[3]))){var o=f.filter(t[3],n,r,true^i)
r||a.push.apply(a,o)
return false}t[3]=f(t[3],null,null,n)}else if(m.match.POS.test(t[0])||m.match.CHILD.test(t[0]))return true
return t},POS:function(e){e.unshift(true)
return e}},filters:{enabled:function(e){return false===e.disabled&&"hidden"!==e.type},disabled:function(e){return true===e.disabled},checked:function(e){return true===e.checked},selected:function(e){e.parentNode&&e.parentNode.selectedIndex
return true===e.selected},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!f(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type
return"input"===e.nodeName.toLowerCase()&&"text"===n&&(t===n||null===t)},radio:function(e){return"input"===e.nodeName.toLowerCase()&&"radio"===e.type},checkbox:function(e){return"input"===e.nodeName.toLowerCase()&&"checkbox"===e.type},file:function(e){return"input"===e.nodeName.toLowerCase()&&"file"===e.type},password:function(e){return"input"===e.nodeName.toLowerCase()&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase()
return("input"===t||"button"===t)&&"submit"===e.type},image:function(e){return"input"===e.nodeName.toLowerCase()&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase()
return("input"===t||"button"===t)&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return 0===t},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var a=t[1],i=m.filters[a]
if(i)return i(e,n,t,r)
if("contains"===a)return(e.textContent||e.innerText||h([e])||"").indexOf(t[3])>=0
if("not"===a){var o=t[3]
for(var s=0,u=o.length;s<u;s++)if(o[s]===e)return false
return true}f.error(a)},CHILD:function(e,n){var r,a,i,o,s,u,l=n[1],c=e
switch(l){case"only":case"first":while(c=c.previousSibling)if(1===c.nodeType)return false
if("first"===l)return true
c=e
case"last":while(c=c.nextSibling)if(1===c.nodeType)return false
return true
case"nth":r=n[2]
a=n[3]
if(1===r&&0===a)return true
i=n[0]
o=e.parentNode
if(o&&(o[t]!==i||!e.nodeIndex)){s=0
for(c=o.firstChild;c;c=c.nextSibling)1===c.nodeType&&(c.nodeIndex=++s)
o[t]=i}u=e.nodeIndex-a
return 0===r?0===u:u%r===0&&u/r>=0}},ID:function(e,t){return 1===e.nodeType&&e.getAttribute("id")===t},TAG:function(e,t){return"*"===t&&1===e.nodeType||!!e.nodeName&&e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],r=f.attr?f.attr(e,n):m.attrHandle[n]?m.attrHandle[n](e):null!=e[n]?e[n]:e.getAttribute(n),a=r+"",i=t[2],o=t[4]
return null==r?"!="===i:!i&&f.attr?null!=r:"="===i?a===o:"*="===i?a.indexOf(o)>=0:"~="===i?(" "+a+" ").indexOf(o)>=0:o?"!="===i?a!==o:"^="===i?0===a.indexOf(o):"$="===i?a.substr(a.length-o.length)===o:"|="===i&&(a===o||a.substr(0,o.length+1)===o+"-"):a&&false!==r},POS:function(e,t,n,r){var a=t[2],i=m.setFilters[a]
if(i)return i(e,n,t,r)}}}
var p=m.match.POS,_=function(e,t){return"\\"+(t-0+1)}
for(var g in m.match){m.match[g]=new RegExp(m.match[g].source+/(?![^\[]*\])(?![^\(]*\))/.source)
m.leftMatch[g]=new RegExp(/(^(?:.|\r|\n)*?)/.source+m.match[g].source.replace(/\\(\d+)/g,_))}m.match.globalPOS=p
var y=function(e,t){e=Array.prototype.slice.call(e,0)
if(t){t.push.apply(t,e)
return t}return e}
try{Array.prototype.slice.call(r.documentElement.childNodes,0)[0].nodeType}catch(e){y=function(e,t){var n=0,r=t||[]
if("[object Array]"===i.call(e))Array.prototype.push.apply(r,e)
else if("number"===typeof e.length)for(var a=e.length;n<a;n++)r.push(e[n])
else for(;e[n];n++)r.push(e[n])
return r}}var v,b
if(r.documentElement.compareDocumentPosition)v=function(e,t){if(e===t){s=true
return 0}if(!e.compareDocumentPosition||!t.compareDocumentPosition)return e.compareDocumentPosition?-1:1
return 4&e.compareDocumentPosition(t)?-1:1}
else{v=function(e,t){if(e===t){s=true
return 0}if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex
var n,r,a=[],i=[],o=e.parentNode,u=t.parentNode,l=o
if(o===u)return b(e,t)
if(!o)return-1
if(!u)return 1
while(l){a.unshift(l)
l=l.parentNode}l=u
while(l){i.unshift(l)
l=l.parentNode}n=a.length
r=i.length
for(var c=0;c<n&&c<r;c++)if(a[c]!==i[c])return b(a[c],i[c])
return c===n?b(e,i[c],-1):b(a[c],t,1)}
b=function(e,t,n){if(e===t)return n
var r=e.nextSibling
while(r){if(r===t)return-1
r=r.nextSibling}return 1}}(function(){var e=r.createElement("div"),t="script"+(new Date).getTime(),a=r.documentElement
e.innerHTML="<a name='"+t+"'/>"
a.insertBefore(e,a.firstChild)
if(r.getElementById(t)){m.find.ID=function(e,t,r){if("undefined"!==typeof t.getElementById&&!r){var a=t.getElementById(e[1])
return a?a.id===e[1]||"undefined"!==typeof a.getAttributeNode&&a.getAttributeNode("id").nodeValue===e[1]?[a]:n:[]}}
m.filter.ID=function(e,t){var n="undefined"!==typeof e.getAttributeNode&&e.getAttributeNode("id")
return 1===e.nodeType&&n&&n.nodeValue===t}}a.removeChild(e)
a=e=null})();(function(){var e=r.createElement("div")
e.appendChild(r.createComment(""))
e.getElementsByTagName("*").length>0&&(m.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1])
if("*"===e[1]){var r=[]
for(var a=0;n[a];a++)1===n[a].nodeType&&r.push(n[a])
n=r}return n})
e.innerHTML="<a href='#'></a>"
e.firstChild&&"undefined"!==typeof e.firstChild.getAttribute&&"#"!==e.firstChild.getAttribute("href")&&(m.attrHandle.href=function(e){return e.getAttribute("href",2)})
e=null})()
r.querySelectorAll&&function(){var e=f,t=r.createElement("div"),n="__sizzle__"
t.innerHTML="<p class='TEST'></p>"
if(t.querySelectorAll&&0===t.querySelectorAll(".TEST").length)return
f=function(t,a,i,o){a=a||r
if(!o&&!f.isXML(a)){var s=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t)
if(s&&(1===a.nodeType||9===a.nodeType)){if(s[1])return y(a.getElementsByTagName(t),i)
if(s[2]&&m.find.CLASS&&a.getElementsByClassName)return y(a.getElementsByClassName(s[2]),i)}if(9===a.nodeType){if("body"===t&&a.body)return y([a.body],i)
if(s&&s[3]){var u=a.getElementById(s[3])
if(!u||!u.parentNode)return y([],i)
if(u.id===s[3])return y([u],i)}try{return y(a.querySelectorAll(t),i)}catch(e){}}else if(1===a.nodeType&&"object"!==a.nodeName.toLowerCase()){var l=a,c=a.getAttribute("id"),d=c||n,h=a.parentNode,p=/^\s*[+~]/.test(t)
c?d=d.replace(/'/g,"\\$&"):a.setAttribute("id",d)
p&&h&&(a=a.parentNode)
try{if(!p||h)return y(a.querySelectorAll("[id='"+d+"'] "+t),i)}catch(e){}finally{c||l.removeAttribute("id")}}}return e(t,a,i,o)}
for(var a in e)f[a]=e[a]
t=null}();(function(){var e=r.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector
if(t){var n=!t.call(r.createElement("div"),"div"),a=false
try{t.call(r.documentElement,"[test!='']:sizzle")}catch(e){a=true}f.matchesSelector=function(e,r){r=r.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']")
if(!f.isXML(e))try{if(a||!m.match.PSEUDO.test(r)&&!/!=/.test(r)){var i=t.call(e,r)
if(i||!n||e.document&&11!==e.document.nodeType)return i}}catch(e){}return f(r,null,null,[e]).length>0}}})();(function(){var e=r.createElement("div")
e.innerHTML="<div class='test e'></div><div class='test'></div>"
if(!e.getElementsByClassName||0===e.getElementsByClassName("e").length)return
e.lastChild.className="e"
if(1===e.getElementsByClassName("e").length)return
m.order.splice(1,0,"CLASS")
m.find.CLASS=function(e,t,n){if("undefined"!==typeof t.getElementsByClassName&&!n)return t.getElementsByClassName(e[1])}
e=null})()
function w(e,n,r,a,i,o){for(var s=0,u=a.length;s<u;s++){var l=a[s]
if(l){var c=false
l=l[e]
while(l){if(l[t]===r){c=a[l.sizset]
break}if(1===l.nodeType&&!o){l[t]=r
l.sizset=s}if(l.nodeName.toLowerCase()===n){c=l
break}l=l[e]}a[s]=c}}}function k(e,n,r,a,i,o){for(var s=0,u=a.length;s<u;s++){var l=a[s]
if(l){var c=false
l=l[e]
while(l){if(l[t]===r){c=a[l.sizset]
break}if(1===l.nodeType){if(!o){l[t]=r
l.sizset=s}if("string"!==typeof n){if(l===n){c=true
break}}else if(f.filter(n,[l]).length>0){c=l
break}}l=l[e]}a[s]=c}}}r.documentElement.contains?f.contains=function(e,t){return e!==t&&(!e.contains||e.contains(t))}:r.documentElement.compareDocumentPosition?f.contains=function(e,t){return!!(16&e.compareDocumentPosition(t))}:f.contains=function(){return false}
f.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement
return!!t&&"HTML"!==t.nodeName}
var x=function(e,t,n){var r,a=[],i="",o=t.nodeType?[t]:t
while(r=m.match.PSEUDO.exec(e)){i+=r[0]
e=e.replace(m.match.PSEUDO,"")}e=m.relative[e]?e+"*":e
for(var s=0,u=o.length;s<u;s++)f(e,o[s],a,n)
return f.filter(i,a)}
f.attr=o.attr
f.selectors.attrMap={}
o.find=f
o.expr=f.selectors
o.expr[":"]=o.expr.filters
o.unique=f.uniqueSort
o.text=f.getText
o.isXMLDoc=f.isXML
o.contains=f.contains})()
var B=/Until$/,R=/^(?:parents|prevUntil|prevAll)/,F=/,/,Y=/^.[^:#\[\.,]*$/,q=Array.prototype.slice,H=o.expr.match.globalPOS,U={children:true,contents:true,next:true,prev:true}
o.fn.extend({find:function(e){var t,n,r=this
if("string"!==typeof e)return o(e).filter(function(){for(t=0,n=r.length;t<n;t++)if(o.contains(r[t],this))return true})
var a,i,s,u=this.pushStack("","find",e)
for(t=0,n=this.length;t<n;t++){a=u.length
o.find(e,this[t],u)
if(t>0)for(i=a;i<u.length;i++)for(s=0;s<a;s++)if(u[s]===u[i]){u.splice(i--,1)
break}}return u},has:function(e){var t=o(e)
return this.filter(function(){for(var e=0,n=t.length;e<n;e++)if(o.contains(this,t[e]))return true})},not:function(e){return this.pushStack(K(this,e,false),"not",e)},filter:function(e){return this.pushStack(K(this,e,true),"filter",e)},is:function(e){return!!e&&("string"===typeof e?H.test(e)?o(e,this.context).index(this[0])>=0:o.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r,a=[],i=this[0]
if(o.isArray(e)){var s=1
while(i&&i.ownerDocument&&i!==t){for(n=0;n<e.length;n++)o(i).is(e[n])&&a.push({selector:e[n],elem:i,level:s})
i=i.parentNode
s++}return a}var u=H.test(e)||"string"!==typeof e?o(e,t||this.context):0
for(n=0,r=this.length;n<r;n++){i=this[n]
while(i){if(u?u.index(i)>-1:o.find.matchesSelector(i,e)){a.push(i)
break}i=i.parentNode
if(!i||!i.ownerDocument||i===t||11===i.nodeType)break}}a=a.length>1?o.unique(a):a
return this.pushStack(a,"closest",e)},index:function(e){if(!e)return this[0]&&this[0].parentNode?this.prevAll().length:-1
if("string"===typeof e)return o.inArray(this[0],o(e))
return o.inArray(e.jquery?e[0]:e,this)},add:function(e,t){var n="string"===typeof e?o(e,t):o.makeArray(e&&e.nodeType?[e]:e),r=o.merge(this.get(),n)
return this.pushStack(W(n[0])||W(r[0])?r:o.unique(r))},andSelf:function(){return this.add(this.prevObject)}})
function W(e){return!e||!e.parentNode||11===e.parentNode.nodeType}o.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return o.dir(e,"parentNode")},parentsUntil:function(e,t,n){return o.dir(e,"parentNode",n)},next:function(e){return o.nth(e,2,"nextSibling")},prev:function(e){return o.nth(e,2,"previousSibling")},nextAll:function(e){return o.dir(e,"nextSibling")},prevAll:function(e){return o.dir(e,"previousSibling")},nextUntil:function(e,t,n){return o.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return o.dir(e,"previousSibling",n)},siblings:function(e){return o.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return o.sibling(e.firstChild)},contents:function(e){return o.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:o.makeArray(e.childNodes)}},function(e,t){o.fn[e]=function(n,r){var a=o.map(this,t,n)
B.test(e)||(r=n)
r&&"string"===typeof r&&(a=o.filter(r,a))
a=this.length>1&&!U[e]?o.unique(a):a;(this.length>1||F.test(r))&&R.test(e)&&(a=a.reverse())
return this.pushStack(a,e,q.call(arguments).join(","))}})
o.extend({filter:function(e,t,n){n&&(e=":not("+e+")")
return 1===t.length?o.find.matchesSelector(t[0],e)?[t[0]]:[]:o.find.matches(e,t)},dir:function(e,t,r){var a=[],i=e[t]
while(i&&9!==i.nodeType&&(r===n||1!==i.nodeType||!o(i).is(r))){1===i.nodeType&&a.push(i)
i=i[t]}return a},nth:function(e,t,n,r){t=t||1
var a=0
for(;e;e=e[n])if(1===e.nodeType&&++a===t)break
return e},sibling:function(e,t){var n=[]
for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n}})
function K(e,t,n){t=t||0
if(o.isFunction(t))return o.grep(e,function(e,r){var a=!!t.call(e,r,e)
return a===n})
if(t.nodeType)return o.grep(e,function(e,r){return e===t===n})
if("string"===typeof t){var r=o.grep(e,function(e){return 1===e.nodeType})
if(Y.test(t))return o.filter(t,r,!n)
t=o.filter(t,r)}return o.grep(e,function(e,r){return o.inArray(e,t)>=0===n})}function V(e){var t=$.split("|"),n=e.createDocumentFragment()
if(n.createElement)while(t.length)n.createElement(t.pop())
return n}var $="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",G=/ jQuery\d+="(?:\d+|null)"/g,J=/^\s+/,Q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,X=/<([\w:]+)/,Z=/<tbody/i,ee=/<|&#?\w+;/,te=/<(?:script|style)/i,ne=/<(?:script|object|embed|option|style)/i,re=new RegExp("<(?:"+$+")[\\s/>]","i"),ae=/checked\s*(?:[^=]|=\s*.checked.)/i,ie=/\/(java|ecma)script/i,oe=/^\s*<!(?:\[CDATA\[|\-\-)/,se={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},ue=V(r)
se.optgroup=se.option
se.tbody=se.tfoot=se.colgroup=se.caption=se.thead
se.th=se.td
o.support.htmlSerialize||(se._default=[1,"div<div>","</div>"])
o.fn.extend({text:function(e){return o.access(this,function(e){return e===n?o.text(this):this.empty().append((this[0]&&this[0].ownerDocument||r).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(o.isFunction(e))return this.each(function(t){o(this).wrapAll(e.call(this,t))})
if(this[0]){var t=o(e,this[0].ownerDocument).eq(0).clone(true)
this[0].parentNode&&t.insertBefore(this[0])
t.map(function(){var e=this
while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild
return e}).append(this)}return this},wrapInner:function(e){if(o.isFunction(e))return this.each(function(t){o(this).wrapInner(e.call(this,t))})
return this.each(function(){var t=o(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=o.isFunction(e)
return this.each(function(n){o(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(e){1===this.nodeType&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,true,function(e){1===this.nodeType&&this.insertBefore(e,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(e){this.parentNode.insertBefore(e,this)})
if(arguments.length){var e=o.clean(arguments)
e.push.apply(e,this.toArray())
return this.pushStack(e,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(e){this.parentNode.insertBefore(e,this.nextSibling)})
if(arguments.length){var e=this.pushStack(this,"after",arguments)
e.push.apply(e,o.clean(arguments))
return e}},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)if(!e||o.filter(e,[n]).length){if(!t&&1===n.nodeType){o.cleanData(n.getElementsByTagName("*"))
o.cleanData([n])}n.parentNode&&n.parentNode.removeChild(n)}return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){1===e.nodeType&&o.cleanData(e.getElementsByTagName("*"))
while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){e=null!=e&&e
t=null==t?e:t
return this.map(function(){return o.clone(this,e,t)})},html:function(e){return o.access(this,function(e){var t=this[0]||{},r=0,a=this.length
if(e===n)return 1===t.nodeType?t.innerHTML.replace(G,""):null
if("string"===typeof e&&!te.test(e)&&(o.support.leadingWhitespace||!J.test(e))&&!se[(X.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Q,"<$1></$2>")
try{for(;r<a;r++){t=this[r]||{}
if(1===t.nodeType){o.cleanData(t.getElementsByTagName("*"))
t.innerHTML=e}}t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){if(this[0]&&this[0].parentNode){if(o.isFunction(e))return this.each(function(t){var n=o(this),r=n.html()
n.replaceWith(e.call(this,t,r))})
"string"!==typeof e&&(e=o(e).detach())
return this.each(function(){var t=this.nextSibling,n=this.parentNode
o(this).remove()
t?o(t).before(e):o(n).append(e)})}return this.length?this.pushStack(o(o.isFunction(e)?e():e),"replaceWith",e):this},detach:function(e){return this.remove(e,true)},domManip:function(e,t,r){var a,i,s,u,l=e[0],c=[]
if(!o.support.checkClone&&3===arguments.length&&"string"===typeof l&&ae.test(l))return this.each(function(){o(this).domManip(e,t,r,true)})
if(o.isFunction(l))return this.each(function(a){var i=o(this)
e[0]=l.call(this,a,t?i.html():n)
i.domManip(e,t,r)})
if(this[0]){u=l&&l.parentNode
a=o.support.parentNode&&u&&11===u.nodeType&&u.childNodes.length===this.length?{fragment:u}:o.buildFragment(e,this,c)
s=a.fragment
i=1===s.childNodes.length?s=s.firstChild:s.firstChild
if(i){t=t&&o.nodeName(i,"tr")
for(var d=0,f=this.length,h=f-1;d<f;d++)r.call(t?le(this[d],i):this[d],a.cacheable||f>1&&d<h?o.clone(s,true,true):s)}c.length&&o.each(c,function(e,t){t.src?o.ajax({type:"GET",global:false,url:t.src,async:false,dataType:"script"}):o.globalEval((t.text||t.textContent||t.innerHTML||"").replace(oe,"/*$0*/"))
t.parentNode&&t.parentNode.removeChild(t)})}return this}})
function le(e,t){return o.nodeName(e,"table")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ce(e,t){if(1!==t.nodeType||!o.hasData(e))return
var n,r,a,i=o._data(e),s=o._data(t,i),u=i.events
if(u){delete s.handle
s.events={}
for(n in u)for(r=0,a=u[n].length;r<a;r++)o.event.add(t,n,u[n][r])}s.data&&(s.data=o.extend({},s.data))}function de(e,t){var n
if(1!==t.nodeType)return
t.clearAttributes&&t.clearAttributes()
t.mergeAttributes&&t.mergeAttributes(e)
n=t.nodeName.toLowerCase()
if("object"===n)t.outerHTML=e.outerHTML
else if("input"!==n||"checkbox"!==e.type&&"radio"!==e.type)"option"===n?t.selected=e.defaultSelected:"input"===n||"textarea"===n?t.defaultValue=e.defaultValue:"script"===n&&t.text!==e.text&&(t.text=e.text)
else{e.checked&&(t.defaultChecked=t.checked=e.checked)
t.value!==e.value&&(t.value=e.value)}t.removeAttribute(o.expando)
t.removeAttribute("_submit_attached")
t.removeAttribute("_change_attached")}o.buildFragment=function(e,t,n){var a,i,s,u,l=e[0]
t&&t[0]&&(u=t[0].ownerDocument||t[0])
u.createDocumentFragment||(u=r)
if(1===e.length&&"string"===typeof l&&l.length<512&&u===r&&"<"===l.charAt(0)&&!ne.test(l)&&(o.support.checkClone||!ae.test(l))&&(o.support.html5Clone||!re.test(l))){i=true
s=o.fragments[l]
s&&1!==s&&(a=s)}if(!a){a=u.createDocumentFragment()
o.clean(e,u,a,n)}i&&(o.fragments[l]=s?a:1)
return{fragment:a,cacheable:i}}
o.fragments={}
o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){o.fn[e]=function(n){var r=[],a=o(n),i=1===this.length&&this[0].parentNode
if(i&&11===i.nodeType&&1===i.childNodes.length&&1===a.length){a[t](this[0])
return this}for(var s=0,u=a.length;s<u;s++){var l=(s>0?this.clone(true):this).get()
o(a[s])[t](l)
r=r.concat(l)}return this.pushStack(r,e,a.selector)}})
function fe(e){return"undefined"!==typeof e.getElementsByTagName?e.getElementsByTagName("*"):"undefined"!==typeof e.querySelectorAll?e.querySelectorAll("*"):[]}function he(e){"checkbox"!==e.type&&"radio"!==e.type||(e.defaultChecked=e.checked)}function me(e){var t=(e.nodeName||"").toLowerCase()
"input"===t?he(e):"script"!==t&&"undefined"!==typeof e.getElementsByTagName&&o.grep(e.getElementsByTagName("input"),he)}function pe(e){var t=r.createElement("div")
ue.appendChild(t)
t.innerHTML=e.outerHTML
return t.firstChild}o.extend({clone:function(e,t,n){var r,a,i,s=o.support.html5Clone||o.isXMLDoc(e)||!re.test("<"+e.nodeName+">")?e.cloneNode(true):pe(e)
if((!o.support.noCloneEvent||!o.support.noCloneChecked)&&(1===e.nodeType||11===e.nodeType)&&!o.isXMLDoc(e)){de(e,s)
r=fe(e)
a=fe(s)
for(i=0;r[i];++i)a[i]&&de(r[i],a[i])}if(t){ce(e,s)
if(n){r=fe(e)
a=fe(s)
for(i=0;r[i];++i)ce(r[i],a[i])}}r=a=null
return s},clean:function(e,t,n,a){var i,s,u,l=[]
t=t||r
"undefined"===typeof t.createElement&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||r)
for(var c,d=0;null!=(c=e[d]);d++){"number"===typeof c&&(c+="")
if(!c)continue
if("string"===typeof c)if(ee.test(c)){c=c.replace(Q,"<$1></$2>")
var f,h=(X.exec(c)||["",""])[1].toLowerCase(),m=se[h]||se._default,p=m[0],_=t.createElement("div"),g=ue.childNodes
t===r?ue.appendChild(_):V(t).appendChild(_)
_.innerHTML=m[1]+c+m[2]
while(p--)_=_.lastChild
if(!o.support.tbody){var y=Z.test(c),v="table"!==h||y?"<table>"!==m[1]||y?[]:_.childNodes:_.firstChild&&_.firstChild.childNodes
for(u=v.length-1;u>=0;--u)o.nodeName(v[u],"tbody")&&!v[u].childNodes.length&&v[u].parentNode.removeChild(v[u])}!o.support.leadingWhitespace&&J.test(c)&&_.insertBefore(t.createTextNode(J.exec(c)[0]),_.firstChild)
c=_.childNodes
if(_){_.parentNode.removeChild(_)
if(g.length>0){f=g[g.length-1]
f&&f.parentNode&&f.parentNode.removeChild(f)}}}else c=t.createTextNode(c)
var b
if(!o.support.appendChecked)if(c[0]&&"number"===typeof(b=c.length))for(u=0;u<b;u++)me(c[u])
else me(c)
c.nodeType?l.push(c):l=o.merge(l,c)}if(n){i=function(e){return!e.type||ie.test(e.type)}
for(d=0;l[d];d++){s=l[d]
if(a&&o.nodeName(s,"script")&&(!s.type||ie.test(s.type)))a.push(s.parentNode?s.parentNode.removeChild(s):s)
else{if(1===s.nodeType){var w=o.grep(s.getElementsByTagName("script"),i)
l.splice.apply(l,[d+1,0].concat(w))}n.appendChild(s)}}}return l},cleanData:function(e){var t,n,r=o.cache,a=o.event.special,i=o.support.deleteExpando
for(var s,u=0;null!=(s=e[u]);u++){if(s.nodeName&&o.noData[s.nodeName.toLowerCase()])continue
n=s[o.expando]
if(n){t=r[n]
if(t&&t.events){for(var l in t.events)a[l]?o.event.remove(s,l):o.removeEvent(s,l,t.handle)
t.handle&&(t.handle.elem=null)}i?delete s[o.expando]:s.removeAttribute&&s.removeAttribute(o.expando)
delete r[n]}}}})
var _e,ge,ye,ve=/alpha\([^)]*\)/i,be=/opacity=([^)]*)/,we=/([A-Z]|^ms)/g,ke=/^[\-+]?(?:\d*\.)?\d+$/i,xe=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Me=/^([\-+])=([\-+.\de]+)/,Te=/^margin/,De={position:"absolute",visibility:"hidden",display:"block"},Ee=["Top","Right","Bottom","Left"]
o.fn.css=function(e,t){return o.access(this,function(e,t,r){return r!==n?o.style(e,t,r):o.css(e,t)},e,t,arguments.length>1)}
o.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity")
return""===n?"1":n}return e.style.opacity}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{float:o.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,r,a){if(!e||3===e.nodeType||8===e.nodeType||!e.style)return
var i,s,u=o.camelCase(t),l=e.style,c=o.cssHooks[u]
t=o.cssProps[u]||u
if(r===n){if(c&&"get"in c&&(i=c.get(e,false,a))!==n)return i
return l[t]}s=typeof r
if("string"===s&&(i=Me.exec(r))){r=+(i[1]+1)*+i[2]+parseFloat(o.css(e,t))
s="number"}if(null==r||"number"===s&&isNaN(r))return
"number"!==s||o.cssNumber[u]||(r+="px")
if(!c||!("set"in c)||(r=c.set(e,r))!==n)try{l[t]=r}catch(e){}},css:function(e,t,r){var a,i
t=o.camelCase(t)
i=o.cssHooks[t]
t=o.cssProps[t]||t
"cssFloat"===t&&(t="float")
if(i&&"get"in i&&(a=i.get(e,true,r))!==n)return a
if(_e)return _e(e,t)},swap:function(e,t,n){var r,a,i={}
for(a in t){i[a]=e.style[a]
e.style[a]=t[a]}r=n.call(e)
for(a in t)e.style[a]=i[a]
return r}})
o.curCSS=o.css
r.defaultView&&r.defaultView.getComputedStyle&&(ge=function(e,t){var n,r,a,i,s=e.style
t=t.replace(we,"-$1").toLowerCase()
if((r=e.ownerDocument.defaultView)&&(a=r.getComputedStyle(e,null))){n=a.getPropertyValue(t)
""!==n||o.contains(e.ownerDocument.documentElement,e)||(n=o.style(e,t))}if(!o.support.pixelMargin&&a&&Te.test(t)&&xe.test(n)){i=s.width
s.width=n
n=a.width
s.width=i}return n})
r.documentElement.currentStyle&&(ye=function(e,t){var n,r,a,i=e.currentStyle&&e.currentStyle[t],o=e.style
null==i&&o&&(a=o[t])&&(i=a)
if(xe.test(i)){n=o.left
r=e.runtimeStyle&&e.runtimeStyle.left
r&&(e.runtimeStyle.left=e.currentStyle.left)
o.left="fontSize"===t?"1em":i
i=o.pixelLeft+"px"
o.left=n
r&&(e.runtimeStyle.left=r)}return""===i?"auto":i})
_e=ge||ye
function Se(e,t,n){var r="width"===t?e.offsetWidth:e.offsetHeight,a="width"===t?1:0,i=4
if(r>0){if("border"!==n)for(;a<i;a+=2){n||(r-=parseFloat(o.css(e,"padding"+Ee[a]))||0)
"margin"===n?r+=parseFloat(o.css(e,n+Ee[a]))||0:r-=parseFloat(o.css(e,"border"+Ee[a]+"Width"))||0}return r+"px"}r=_e(e,t);(r<0||null==r)&&(r=e.style[t])
if(xe.test(r))return r
r=parseFloat(r)||0
if(n)for(;a<i;a+=2){r+=parseFloat(o.css(e,"padding"+Ee[a]))||0
"padding"!==n&&(r+=parseFloat(o.css(e,"border"+Ee[a]+"Width"))||0)
"margin"===n&&(r+=parseFloat(o.css(e,n+Ee[a]))||0)}return r+"px"}o.each(["height","width"],function(e,t){o.cssHooks[t]={get:function(e,n,r){if(n)return 0!==e.offsetWidth?Se(e,t,r):o.swap(e,De,function(){return Se(e,t,r)})},set:function(e,t){return ke.test(t)?t+"px":t}}})
o.support.opacity||(o.cssHooks.opacity={get:function(e,t){return be.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,a=o.isNumeric(t)?"alpha(opacity="+100*t+")":"",i=r&&r.filter||n.filter||""
n.zoom=1
if(t>=1&&""===o.trim(i.replace(ve,""))){n.removeAttribute("filter")
if(r&&!r.filter)return}n.filter=ve.test(i)?i.replace(ve,a):i+" "+a}})
o(function(){o.support.reliableMarginRight||(o.cssHooks.marginRight={get:function(e,t){return o.swap(e,{display:"inline-block"},function(){return t?_e(e,"margin-right"):e.style.marginRight})}})})
if(o.expr&&o.expr.filters){o.expr.filters.hidden=function(e){var t=e.offsetWidth,n=e.offsetHeight
return 0===t&&0===n||!o.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||o.css(e,"display"))}
o.expr.filters.visible=function(e){return!o.expr.filters.hidden(e)}}o.each({margin:"",padding:"",border:"Width"},function(e,t){o.cssHooks[e+t]={expand:function(n){var r,a="string"===typeof n?n.split(" "):[n],i={}
for(r=0;r<4;r++)i[e+Ee[r]+t]=a[r]||a[r-2]||a[0]
return i}}})
var Ce,Pe,Oe=/%20/g,je=/\[\]$/,Ae=/\r?\n/g,Ne=/#.*$/,ze=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ie=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Le=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Be=/^(?:GET|HEAD)$/,Re=/^\/\//,Fe=/\?/,Ye=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,qe=/^(?:select|textarea)/i,He=/\s+/,Ue=/([?&])_=[^&]*/,We=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Ke=o.fn.load,Ve={},$e={},Ge=["*/"]+["*"]
try{Ce=i.href}catch(e){Ce=r.createElement("a")
Ce.href=""
Ce=Ce.href}Pe=We.exec(Ce.toLowerCase())||[]
function Je(e){return function(t,n){if("string"!==typeof t){n=t
t="*"}if(o.isFunction(n)){var r,a,i,s=t.toLowerCase().split(He),u=0,l=s.length
for(;u<l;u++){r=s[u]
i=/^\+/.test(r)
i&&(r=r.substr(1)||"*")
a=e[r]=e[r]||[]
a[i?"unshift":"push"](n)}}}}function Qe(e,t,r,a,i,o){i=i||t.dataTypes[0]
o=o||{}
o[i]=true
var s,u=e[i],l=0,c=u?u.length:0,d=e===Ve
for(;l<c&&(d||!s);l++){s=u[l](t,r,a)
if("string"===typeof s)if(!d||o[s])s=n
else{t.dataTypes.unshift(s)
s=Qe(e,t,r,a,s,o)}}!d&&s||o["*"]||(s=Qe(e,t,r,a,"*",o))
return s}function Xe(e,t){var r,a,i=o.ajaxSettings.flatOptions||{}
for(r in t)t[r]!==n&&((i[r]?e:a||(a={}))[r]=t[r])
a&&o.extend(true,e,a)}o.fn.extend({load:function(e,t,r){if("string"!==typeof e&&Ke)return Ke.apply(this,arguments)
if(!this.length)return this
var a=e.indexOf(" ")
if(a>=0){var i=e.slice(a,e.length)
e=e.slice(0,a)}var s="GET"
if(t)if(o.isFunction(t)){r=t
t=n}else if("object"===typeof t){t=o.param(t,o.ajaxSettings.traditional)
s="POST"}var u=this
o.ajax({url:e,type:s,dataType:"html",data:t,complete:function(e,t,n){n=e.responseText
if(e.isResolved()){e.done(function(e){n=e})
u.html(i?o("<div>").append(n.replace(Ye,"")).find(i):n)}r&&u.each(r,[n,t,e])}})
return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||qe.test(this.nodeName)||Ie.test(this.type))}).map(function(e,t){var n=o(this).val()
return null==n?null:o.isArray(n)?o.map(n,function(e,n){return{name:t.name,value:e.replace(Ae,"\r\n")}}):{name:t.name,value:n.replace(Ae,"\r\n")}}).get()}})
o.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){o.fn[t]=function(e){return this.on(t,e)}})
o.each(["get","post"],function(e,t){o[t]=function(e,r,a,i){if(o.isFunction(r)){i=i||a
a=r
r=n}return o.ajax({type:t,url:e,data:r,success:a,dataType:i})}})
o.extend({getScript:function(e,t){return o.get(e,n,t,"script")},getJSON:function(e,t,n){return o.get(e,t,n,"json")},ajaxSetup:function(e,t){if(t)Xe(e,o.ajaxSettings)
else{t=e
e=o.ajaxSettings}Xe(e,t)
return e},ajaxSettings:{url:Ce,isLocal:Le.test(Pe[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Ge},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":t.String,"text html":true,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:Je(Ve),ajaxTransport:Je($e),ajax:function(e,t){if("object"===typeof e){t=e
e=n}t=t||{}
var r,a,i,s,u,l,c,d,f=o.ajaxSetup({},t),h=f.context||f,m=h!==f&&(h.nodeType||h instanceof o)?o(h):o.event,p=o.Deferred(),_=o.Callbacks("once memory"),g=f.statusCode||{},y={},v={},b=0,w={readyState:0,setRequestHeader:function(e,t){if(!b){var n=e.toLowerCase()
e=v[n]=v[n]||e
y[e]=t}return this},getAllResponseHeaders:function(){return 2===b?a:null},getResponseHeader:function(e){var t
if(2===b){if(!i){i={}
while(t=ze.exec(a))i[t[1].toLowerCase()]=t[2]}t=i[e.toLowerCase()]}return t===n?null:t},overrideMimeType:function(e){b||(f.mimeType=e)
return this},abort:function(e){e=e||"abort"
s&&s.abort(e)
k(0,e)
return this}}
function k(e,t,i,l){if(2===b)return
b=2
u&&clearTimeout(u)
s=n
a=l||""
w.readyState=e>0?4:0
var d,y,v,k,x,M=t,T=i?et(f,w,i):n
if(e>=200&&e<300||304===e){if(f.ifModified){(k=w.getResponseHeader("Last-Modified"))&&(o.lastModified[r]=k);(x=w.getResponseHeader("Etag"))&&(o.etag[r]=x)}if(304===e){M="notmodified"
d=true}else try{y=tt(f,T)
M="success"
d=true}catch(e){M="parsererror"
v=e}}else{v=M
if(!M||e){M="error"
e<0&&(e=0)}}w.status=e
w.statusText=""+(t||M)
d?p.resolveWith(h,[y,M,w]):p.rejectWith(h,[w,M,v])
w.statusCode(g)
g=n
c&&m.trigger("ajax"+(d?"Success":"Error"),[w,f,d?y:v])
_.fireWith(h,[w,M])
if(c){m.trigger("ajaxComplete",[w,f]);--o.active||o.event.trigger("ajaxStop")}}p.promise(w)
w.success=w.done
w.error=w.fail
w.complete=_.add
w.statusCode=function(e){if(e){var t
if(b<2)for(t in e)g[t]=[g[t],e[t]]
else{t=e[w.status]
w.then(t,t)}}return this}
f.url=((e||f.url)+"").replace(Ne,"").replace(Re,Pe[1]+"//")
f.dataTypes=o.trim(f.dataType||"*").toLowerCase().split(He)
if(null==f.crossDomain){l=We.exec(f.url.toLowerCase())
f.crossDomain=!!(l&&(l[1]!=Pe[1]||l[2]!=Pe[2]||(l[3]||("http:"===l[1]?80:443))!=(Pe[3]||("http:"===Pe[1]?80:443))))}f.data&&f.processData&&"string"!==typeof f.data&&(f.data=o.param(f.data,f.traditional))
Qe(Ve,f,t,w)
if(2===b)return false
c=f.global
f.type=f.type.toUpperCase()
f.hasContent=!Be.test(f.type)
c&&0===o.active++&&o.event.trigger("ajaxStart")
if(!f.hasContent){if(f.data){f.url+=(Fe.test(f.url)?"&":"?")+f.data
delete f.data}r=f.url
if(false===f.cache){var x=o.now(),M=f.url.replace(Ue,"$1_="+x)
f.url=M+(M===f.url?(Fe.test(f.url)?"&":"?")+"_="+x:"")}}(f.data&&f.hasContent&&false!==f.contentType||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType)
if(f.ifModified){r=r||f.url
o.lastModified[r]&&w.setRequestHeader("If-Modified-Since",o.lastModified[r])
o.etag[r]&&w.setRequestHeader("If-None-Match",o.etag[r])}w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Ge+"; q=0.01":""):f.accepts["*"])
for(d in f.headers)w.setRequestHeader(d,f.headers[d])
if(f.beforeSend&&(false===f.beforeSend.call(h,w,f)||2===b)){w.abort()
return false}for(d in{success:1,error:1,complete:1})w[d](f[d])
s=Qe($e,f,t,w)
if(s){w.readyState=1
c&&m.trigger("ajaxSend",[w,f])
f.async&&f.timeout>0&&(u=setTimeout(function(){w.abort("timeout")},f.timeout))
try{b=1
s.send(y,k)}catch(e){if(!(b<2))throw e
k(-1,e)}}else k(-1,"No Transport")
return w},param:function(e,t){var r=[],a=function(e,t){t=o.isFunction(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
t===n&&(t=o.ajaxSettings.traditional)
if(o.isArray(e)||e.jquery&&!o.isPlainObject(e))o.each(e,function(){a(this.name,this.value)})
else for(var i in e)Ze(i,e[i],t,a)
return r.join("&").replace(Oe,"+")}})
function Ze(e,t,n,r){if(o.isArray(t))o.each(t,function(t,a){n||je.test(e)?r(e,a):Ze(e+"["+("object"===typeof a?t:"")+"]",a,n,r)})
else if(n||"object"!==o.type(t))r(e,t)
else for(var a in t)Ze(e+"["+a+"]",t[a],n,r)}o.extend({active:0,lastModified:{},etag:{}})
function et(e,t,r){var a,i,o,s,u=e.contents,l=e.dataTypes,c=e.responseFields
for(i in c)i in r&&(t[c[i]]=r[i])
while("*"===l[0]){l.shift()
a===n&&(a=e.mimeType||t.getResponseHeader("content-type"))}if(a)for(i in u)if(u[i]&&u[i].test(a)){l.unshift(i)
break}if(l[0]in r)o=l[0]
else{for(i in r){if(!l[0]||e.converters[i+" "+l[0]]){o=i
break}s||(s=i)}o=o||s}if(o){o!==l[0]&&l.unshift(o)
return r[o]}}function tt(e,t){e.dataFilter&&(t=e.dataFilter(t,e.dataType))
var r,a,i,s,u,l,c,d,f=e.dataTypes,h={},m=f.length,p=f[0]
for(r=1;r<m;r++){if(1===r)for(a in e.converters)"string"===typeof a&&(h[a.toLowerCase()]=e.converters[a])
s=p
p=f[r]
if("*"===p)p=s
else if("*"!==s&&s!==p){u=s+" "+p
l=h[u]||h["* "+p]
if(!l){d=n
for(c in h){i=c.split(" ")
if(i[0]===s||"*"===i[0]){d=h[i[1]+" "+p]
if(d){c=h[c]
true===c?l=d:true===d&&(l=c)
break}}}}l||d||o.error("No conversion from "+u.replace(" "," to "))
true!==l&&(t=l?l(t):d(c(t)))}}return t}var nt=o.now(),rt=/(\=)\?(&|$)|\?\?/i
o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return o.expando+"_"+nt++}})
o.ajaxPrefilter("json jsonp",function(e,n,r){var a="string"===typeof e.data&&/^application\/x\-www\-form\-urlencoded/.test(e.contentType)
if("jsonp"===e.dataTypes[0]||false!==e.jsonp&&(rt.test(e.url)||a&&rt.test(e.data))){var i,s=e.jsonpCallback=o.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,u=t[s],l=e.url,c=e.data,d="$1"+s+"$2"
if(false!==e.jsonp){l=l.replace(rt,d)
if(e.url===l){a&&(c=c.replace(rt,d))
e.data===c&&(l+=(/\?/.test(l)?"&":"?")+e.jsonp+"="+s)}}e.url=l
e.data=c
t[s]=function(e){i=[e]}
r.always(function(){t[s]=u
i&&o.isFunction(u)&&t[s](i[0])})
e.converters["script json"]=function(){i||o.error(s+" was not called")
return i[0]}
e.dataTypes[0]="json"
return"script"}})
o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){o.globalEval(e)
return e}}})
o.ajaxPrefilter("script",function(e){e.cache===n&&(e.cache=false)
if(e.crossDomain){e.type="GET"
e.global=false}})
o.ajaxTransport("script",function(e){if(e.crossDomain){var t,a=r.head||r.getElementsByTagName("head")[0]||r.documentElement
return{send:function(i,o){t=r.createElement("script")
t.async="async"
e.scriptCharset&&(t.charset=e.scriptCharset)
t.src=e.url
t.onload=t.onreadystatechange=function(e,r){if(r||!t.readyState||/loaded|complete/.test(t.readyState)){t.onload=t.onreadystatechange=null
a&&t.parentNode&&a.removeChild(t)
t=n
r||o(200,"success")}}
a.insertBefore(t,a.firstChild)},abort:function(){t&&t.onload(0,1)}}}})
var at,it=!!t.ActiveXObject&&function(){for(var e in at)at[e](0,1)},ot=0
function st(){try{return new t.XMLHttpRequest}catch(e){}}function ut(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}o.ajaxSettings.xhr=t.ActiveXObject?function(){return!this.isLocal&&st()||ut()}:st
lt=o.ajaxSettings.xhr(),o.extend(o.support,{ajax:!!lt,cors:!!lt&&"withCredentials"in lt})
var lt
o.support.ajax&&o.ajaxTransport(function(e){if(!e.crossDomain||o.support.cors){var r
return{send:function(a,i){var s,u,l=e.xhr()
e.username?l.open(e.type,e.url,e.async,e.username,e.password):l.open(e.type,e.url,e.async)
if(e.xhrFields)for(u in e.xhrFields)l[u]=e.xhrFields[u]
e.mimeType&&l.overrideMimeType&&l.overrideMimeType(e.mimeType)
e.crossDomain||a["X-Requested-With"]||(a["X-Requested-With"]="XMLHttpRequest")
try{for(u in a)l.setRequestHeader(u,a[u])}catch(e){}l.send(e.hasContent&&e.data||null)
r=function(t,a){var u,c,d,f,h
try{if(r&&(a||4===l.readyState)){r=n
if(s){l.onreadystatechange=o.noop
it&&delete at[s]}if(a)4!==l.readyState&&l.abort()
else{u=l.status
d=l.getAllResponseHeaders()
f={}
h=l.responseXML
h&&h.documentElement&&(f.xml=h)
try{f.text=l.responseText}catch(t){}try{c=l.statusText}catch(e){c=""}u||!e.isLocal||e.crossDomain?1223===u&&(u=204):u=f.text?200:404}}}catch(e){a||i(-1,e)}f&&i(u,c,f,d)}
if(e.async&&4!==l.readyState){s=++ot
if(it){if(!at){at={}
o(t).unload(it)}at[s]=r}l.onreadystatechange=r}else r()},abort:function(){r&&r(0,1)}}}})
var ct,dt,ft,ht,mt={},pt=/^(?:toggle|show|hide)$/,_t=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,gt=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]]
o.fn.extend({show:function(e,t,n){var r,a
if(e||0===e)return this.animate(bt("show",3),e,t,n)
for(var i=0,s=this.length;i<s;i++){r=this[i]
if(r.style){a=r.style.display
o._data(r,"olddisplay")||"none"!==a||(a=r.style.display="");(""===a&&"none"===o.css(r,"display")||!o.contains(r.ownerDocument.documentElement,r))&&o._data(r,"olddisplay",wt(r.nodeName))}}for(i=0;i<s;i++){r=this[i]
if(r.style){a=r.style.display
""!==a&&"none"!==a||(r.style.display=o._data(r,"olddisplay")||"")}}return this},hide:function(e,t,n){if(e||0===e)return this.animate(bt("hide",3),e,t,n)
var r,a,i=0,s=this.length
for(;i<s;i++){r=this[i]
if(r.style){a=o.css(r,"display")
"none"===a||o._data(r,"olddisplay")||o._data(r,"olddisplay",a)}}for(i=0;i<s;i++)this[i].style&&(this[i].style.display="none")
return this},_toggle:o.fn.toggle,toggle:function(e,t,n){var r="boolean"===typeof e
o.isFunction(e)&&o.isFunction(t)?this._toggle.apply(this,arguments):null==e||r?this.each(function(){var t=r?e:o(this).is(":hidden")
o(this)[t?"show":"hide"]()}):this.animate(bt("toggle",3),e,t,n)
return this},fadeTo:function(e,t,n,r){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var a=o.speed(t,n,r)
if(o.isEmptyObject(e))return this.each(a.complete,[false])
e=o.extend({},e)
function i(){false===a.queue&&o._mark(this)
var t,n,r,i,s,u,l,c,d,f,h,m=o.extend({},a),p=1===this.nodeType,_=p&&o(this).is(":hidden")
m.animatedProperties={}
for(r in e){t=o.camelCase(r)
if(r!==t){e[t]=e[r]
delete e[r]}if((s=o.cssHooks[t])&&"expand"in s){u=s.expand(e[t])
delete e[t]
for(r in u)r in e||(e[r]=u[r])}}for(t in e){n=e[t]
if(o.isArray(n)){m.animatedProperties[t]=n[1]
n=e[t]=n[0]}else m.animatedProperties[t]=m.specialEasing&&m.specialEasing[t]||m.easing||"swing"
if("hide"===n&&_||"show"===n&&!_)return m.complete.call(this)
if(p&&("height"===t||"width"===t)){m.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY]
"inline"===o.css(this,"display")&&"none"===o.css(this,"float")&&(o.support.inlineBlockNeedsLayout&&"inline"!==wt(this.nodeName)?this.style.zoom=1:this.style.display="inline-block")}}null!=m.overflow&&(this.style.overflow="hidden")
for(r in e){i=new o.fx(this,m,r)
n=e[r]
if(pt.test(n)){h=o._data(this,"toggle"+r)||("toggle"===n?_?"show":"hide":0)
if(h){o._data(this,"toggle"+r,"show"===h?"hide":"show")
i[h]()}else i[n]()}else{l=_t.exec(n)
c=i.cur()
if(l){d=parseFloat(l[2])
f=l[3]||(o.cssNumber[r]?"":"px")
if("px"!==f){o.style(this,r,(d||1)+f)
c=(d||1)/i.cur()*c
o.style(this,r,c+f)}l[1]&&(d=("-="===l[1]?-1:1)*d+c)
i.custom(c,d,f)}else i.custom(c,n,"")}}return true}return false===a.queue?this.each(i):this.queue(a.queue,i)},stop:function(e,t,r){if("string"!==typeof e){r=t
t=e
e=n}t&&false!==e&&this.queue(e||"fx",[])
return this.each(function(){var t,n=false,a=o.timers,i=o._data(this)
r||o._unmark(true,this)
function s(e,t,n){var a=t[n]
o.removeData(e,n,true)
a.stop(r)}if(null==e)for(t in i)i[t]&&i[t].stop&&t.indexOf(".run")===t.length-4&&s(this,i,t)
else i[t=e+".run"]&&i[t].stop&&s(this,i,t)
for(t=a.length;t--;)if(a[t].elem===this&&(null==e||a[t].queue===e)){r?a[t](true):a[t].saveState()
n=true
a.splice(t,1)}r&&n||o.dequeue(this,e)})}})
function yt(){setTimeout(vt,0)
return ht=o.now()}function vt(){ht=n}function bt(e,t){var n={}
o.each(gt.concat.apply([],gt.slice(0,t)),function(){n[this]=e})
return n}o.each({slideDown:bt("show",1),slideUp:bt("hide",1),slideToggle:bt("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){o.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})
o.extend({speed:function(e,t,n){var r=e&&"object"===typeof e?o.extend({},e):{complete:n||!n&&t||o.isFunction(e)&&e,duration:e,easing:n&&t||t&&!o.isFunction(t)&&t}
r.duration=o.fx.off?0:"number"===typeof r.duration?r.duration:r.duration in o.fx.speeds?o.fx.speeds[r.duration]:o.fx.speeds._default
null!=r.queue&&true!==r.queue||(r.queue="fx")
r.old=r.complete
r.complete=function(e){o.isFunction(r.old)&&r.old.call(this)
r.queue?o.dequeue(this,r.queue):false!==e&&o._unmark(this)}
return r},easing:{linear:function(e){return e},swing:function(e){return-Math.cos(e*Math.PI)/2+.5}},timers:[],fx:function(e,t,n){this.options=t
this.elem=e
this.prop=n
t.orig=t.orig||{}}})
o.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(o.fx.step[this.prop]||o.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop]
var e,t=o.css(this.elem,this.prop)
return isNaN(e=parseFloat(t))?t&&"auto"!==t?t:0:e},custom:function(e,t,r){var a=this,i=o.fx
this.startTime=ht||yt()
this.end=t
this.now=this.start=e
this.pos=this.state=0
this.unit=r||this.unit||(o.cssNumber[this.prop]?"":"px")
function s(e){return a.step(e)}s.queue=this.options.queue
s.elem=this.elem
s.saveState=function(){o._data(a.elem,"fxshow"+a.prop)===n&&(a.options.hide?o._data(a.elem,"fxshow"+a.prop,a.start):a.options.show&&o._data(a.elem,"fxshow"+a.prop,a.end))}
s()&&o.timers.push(s)&&!ft&&(ft=setInterval(i.tick,i.interval))},show:function(){var e=o._data(this.elem,"fxshow"+this.prop)
this.options.orig[this.prop]=e||o.style(this.elem,this.prop)
this.options.show=true
e!==n?this.custom(this.cur(),e):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur())
o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o._data(this.elem,"fxshow"+this.prop)||o.style(this.elem,this.prop)
this.options.hide=true
this.custom(this.cur(),0)},step:function(e){var t,n,r,a=ht||yt(),i=true,s=this.elem,u=this.options
if(e||a>=u.duration+this.startTime){this.now=this.end
this.pos=this.state=1
this.update()
u.animatedProperties[this.prop]=true
for(t in u.animatedProperties)true!==u.animatedProperties[t]&&(i=false)
if(i){null==u.overflow||o.support.shrinkWrapBlocks||o.each(["","X","Y"],function(e,t){s.style["overflow"+t]=u.overflow[e]})
u.hide&&o(s).hide()
if(u.hide||u.show)for(t in u.animatedProperties){o.style(s,t,u.orig[t])
o.removeData(s,"fxshow"+t,true)
o.removeData(s,"toggle"+t,true)}r=u.complete
if(r){u.complete=false
r.call(s)}}return false}if(Infinity==u.duration)this.now=a
else{n=a-this.startTime
this.state=n/u.duration
this.pos=o.easing[u.animatedProperties[this.prop]](this.state,n,0,1,u.duration)
this.now=this.start+(this.end-this.start)*this.pos}this.update()
return true}}
o.extend(o.fx,{tick:function(){var e,t=o.timers,n=0
for(;n<t.length;n++){e=t[n]
e()||t[n]!==e||t.splice(n--,1)}t.length||o.fx.stop()},interval:13,stop:function(){clearInterval(ft)
ft=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){o.style(e.elem,"opacity",e.now)},_default:function(e){e.elem.style&&null!=e.elem.style[e.prop]?e.elem.style[e.prop]=e.now+e.unit:e.elem[e.prop]=e.now}}})
o.each(gt.concat.apply([],gt),function(e,t){t.indexOf("margin")&&(o.fx.step[t]=function(e){o.style(e.elem,t,Math.max(0,e.now)+e.unit)})})
o.expr&&o.expr.filters&&(o.expr.filters.animated=function(e){return o.grep(o.timers,function(t){return e===t.elem}).length})
function wt(e){if(!mt[e]){var t=r.body,n=o("<"+e+">").appendTo(t),a=n.css("display")
n.remove()
if("none"===a||""===a){if(!ct){ct=r.createElement("iframe")
ct.frameBorder=ct.width=ct.height=0}t.appendChild(ct)
if(!dt||!ct.createElement){dt=(ct.contentWindow||ct.contentDocument).document
dt.write((o.support.boxModel?"<!doctype html>":"")+"<html><body>")
dt.close()}n=dt.createElement(e)
dt.body.appendChild(n)
a=o.css(n,"display")
t.removeChild(ct)}mt[e]=a}return mt[e]}var kt,xt=/^t(?:able|d|h)$/i,Mt=/^(?:body|html)$/i
kt="getBoundingClientRect"in r.documentElement?function(e,t,n,r){try{r=e.getBoundingClientRect()}catch(e){}if(!r||!o.contains(n,e))return r?{top:r.top,left:r.left}:{top:0,left:0}
var a=t.body,i=Tt(t),s=n.clientTop||a.clientTop||0,u=n.clientLeft||a.clientLeft||0,l=i.pageYOffset||o.support.boxModel&&n.scrollTop||a.scrollTop,c=i.pageXOffset||o.support.boxModel&&n.scrollLeft||a.scrollLeft,d=r.top+l-s,f=r.left+c-u
return{top:d,left:f}}:function(e,t,n){var r,a=e.offsetParent,i=t.body,s=t.defaultView,u=s?s.getComputedStyle(e,null):e.currentStyle,l=e.offsetTop,c=e.offsetLeft
while((e=e.parentNode)&&e!==i&&e!==n){if(o.support.fixedPosition&&"fixed"===u.position)break
r=s?s.getComputedStyle(e,null):e.currentStyle
l-=e.scrollTop
c-=e.scrollLeft
if(e===a){l+=e.offsetTop
c+=e.offsetLeft
if(o.support.doesNotAddBorder&&!(o.support.doesAddBorderForTableAndCells&&xt.test(e.nodeName))){l+=parseFloat(r.borderTopWidth)||0
c+=parseFloat(r.borderLeftWidth)||0}a
a=e.offsetParent}if(o.support.subtractsBorderForOverflowNotVisible&&"visible"!==r.overflow){l+=parseFloat(r.borderTopWidth)||0
c+=parseFloat(r.borderLeftWidth)||0}u=r}if("relative"===u.position||"static"===u.position){l+=i.offsetTop
c+=i.offsetLeft}if(o.support.fixedPosition&&"fixed"===u.position){l+=Math.max(n.scrollTop,i.scrollTop)
c+=Math.max(n.scrollLeft,i.scrollLeft)}return{top:l,left:c}}
o.fn.offset=function(e){if(arguments.length)return e===n?this:this.each(function(t){o.offset.setOffset(this,e,t)})
var t=this[0],r=t&&t.ownerDocument
if(!r)return null
if(t===r.body)return o.offset.bodyOffset(t)
return kt(t,r,r.documentElement)}
o.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft
if(o.support.doesNotIncludeMarginInBodyOffset){t+=parseFloat(o.css(e,"marginTop"))||0
n+=parseFloat(o.css(e,"marginLeft"))||0}return{top:t,left:n}},setOffset:function(e,t,n){var r=o.css(e,"position")
"static"===r&&(e.style.position="relative")
var a,i,s=o(e),u=s.offset(),l=o.css(e,"top"),c=o.css(e,"left"),d=("absolute"===r||"fixed"===r)&&o.inArray("auto",[l,c])>-1,f={},h={}
if(d){h=s.position()
a=h.top
i=h.left}else{a=parseFloat(l)||0
i=parseFloat(c)||0}o.isFunction(t)&&(t=t.call(e,n,u))
null!=t.top&&(f.top=t.top-u.top+a)
null!=t.left&&(f.left=t.left-u.left+i)
"using"in t?t.using.call(e,f):s.css(f)}}
o.fn.extend({position:function(){if(!this[0])return null
var e=this[0],t=this.offsetParent(),n=this.offset(),r=Mt.test(t[0].nodeName)?{top:0,left:0}:t.offset()
n.top-=parseFloat(o.css(e,"marginTop"))||0
n.left-=parseFloat(o.css(e,"marginLeft"))||0
r.top+=parseFloat(o.css(t[0],"borderTopWidth"))||0
r.left+=parseFloat(o.css(t[0],"borderLeftWidth"))||0
return{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||r.body
while(e&&!Mt.test(e.nodeName)&&"static"===o.css(e,"position"))e=e.offsetParent
return e})}})
o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var r=/Y/.test(t)
o.fn[e]=function(a){return o.access(this,function(e,a,i){var s=Tt(e)
if(i===n)return s?t in s?s[t]:o.support.boxModel&&s.document.documentElement[a]||s.document.body[a]:e[a]
s?s.scrollTo(r?o(s).scrollLeft():i,r?i:o(s).scrollTop()):e[a]=i},e,a,arguments.length,null)}})
function Tt(e){return o.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}o.each({Height:"height",Width:"width"},function(e,t){var r="client"+e,a="scroll"+e,i="offset"+e
o.fn["inner"+e]=function(){var e=this[0]
return e?e.style?parseFloat(o.css(e,t,"padding")):this[t]():null}
o.fn["outer"+e]=function(e){var n=this[0]
return n?n.style?parseFloat(o.css(n,t,e?"margin":"border")):this[t]():null}
o.fn[t]=function(e){return o.access(this,function(e,t,s){var u,l,c,d
if(o.isWindow(e)){u=e.document
l=u.documentElement[r]
return o.support.boxModel&&l||u.body&&u.body[r]||l}if(9===e.nodeType){u=e.documentElement
if(u[r]>=u[a])return u[r]
return Math.max(e.body[a],u[a],e.body[i],u[i])}if(s===n){c=o.css(e,t)
d=parseFloat(c)
return o.isNumeric(d)?d:c}o(e).css(t,s)},t,e,arguments.length,null)}})
t.jQuery=t.$=o
"object"===typeof e&&e.exports?e.exports=o:"function"===typeof define&&define.amd&&define.amd.jQuery&&define([],function(){return o})})(window)},oxAU:function(e,t,n){"use strict"
n.r(t)
var r=n("BTe1")
n.d(t,"default",function(){return r["a"]})},pQTu:function(e,t,n){"use strict"
n.r(t)
var r=n("KQm4")
var a=n("1OyB")
var i=n("vuIU")
var o=n("vpQ4")
var s=n("ouhR")
var u=n.n(s)
var l={0:"toUpperCase",1:"toLowerCase"}
function c(e){var t=/(\s*%h?\{[^\}]+\}\s*|\s*[\n\\`\*_\{\}\[\]\(\)\#\+\-!]+\s*|^\s+)/
var n=e.split(t).map(function(e){if(e.match(t))return e
var n=""
for(var r=0,a=e.length,i=a>=0;i?r<a:r>a;i?r++:r--)n+=e[r][l[r%2]]()
n=n.replace(/\.( |$)/,"!!?! ")
n=n.replace(/^(\w+)$/,"$1!")
n.length>2&&(n+=" LOL!")
return n})
return n.join("")}function d(e){if("string"===typeof e)return c(e)
var t={}
for(var n in e){var r=e[n]
t[n]=c(r)}return t}var f=n("0WdF")
var h=n.n(f)
var m=n("GXgh")
var p=n.n(m)
var _=n("5Ky4")
n("2sOc")
p()(h.a)
var g=h.a.interpolate.bind(h.a)
h.a.interpolate=function(e,t){var n=this
var r=Object(o["a"])({},t)
var a=e.match(this.PLACEHOLDER)||[]
a.forEach(function(e){var t=e.replace(n.PLACEHOLDER,"$1")
"number"===typeof r[t]&&(r[t]=n.localizeNumber(r[t]))})
return g(e,r)}
h.a.locale=document.documentElement.getAttribute("lang")
h.a.lookup=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n=h.a.translations
var r=h.a.getLocaleAndFallbacks(h.a.currentLocale())
"object"===typeof e&&(e=e.join(this.defaultSeparator))
t.scope&&(e="".concat(t.scope).concat(this.defaultSeparator).concat(e))
var a=e.split(this.defaultSeparator)
var i
for(var o=0;!i&&o<r.length;o++){i=n[r[o]]
for(var s=0;i&&s<a.length;s++){var u=a[s]
i=i[u]}}i||null==t.defaultValue||(i=t.defaultValue)
return i}
h.a.getLocaleAndFallbacks=function(e){h.a.fallbacksMap||(h.a.fallbacksMap=h.a.computeFallbacks())
return h.a.fallbacksMap[e]||[h.a.defaultLocale]}
h.a.computeFallbacks=function(){var e={}
Object.keys(h.a.translations).forEach(function(t){var n=[]
var r=t.split(/-/)
for(var a=r.length;a>0;a--){var i=r.slice(0,a).join("-")
i in h.a.translations&&n.push(i)}-1===n.indexOf(h.a.defaultLocale)&&n.push(h.a.defaultLocale)
e[t]=n})
return e}
var y=h.a.localize.bind(h.a)
h.a.localize=function(e,t){var n=y.call(this,e,t)
e.match(/^(date|time)/)&&(n=n.replace(/\s{2,}/," "))
return n}
h.a.n=h.a.localizeNumber=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n=Object(o["a"])({},h.a.lookup("number.format")||{},{strip_insignificant_zeros:t.strip_insignificant_zeros||null==t.precision,precision:null!=t.precision?t.precision:5})
var r=t.percentage?"toPercentage":"toNumber"
return h.a[r](e,n)}
var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"00"
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2
var r=t+e.toString()
return r.substr(r.length-n)}
h.a.strftime=function(e,t){var n=this.lookup("date")
n&&(n.meridian=n.meridian||["AM","PM"])
var r=e.getDay()
var a=e.getDate()
var i=e.getFullYear()
var o=e.getMonth()+1
var s=1+Math.round((new Date(i,o-1,a)-new Date(i,0,1))/864e5)
var u=e.getHours()
var l=u
var c=u>11?1:0
var d=e.getSeconds()
var f=e.getMilliseconds()
var h=e.getMinutes()
var m=e.getTimezoneOffset()
var p=Math.floor(e.getTime()/1e3)
var _=Math.floor(Math.abs(m/60))
var g=Math.abs(m)-60*_
var y="".concat(m>0?"-":"+").concat(_.toString().length<2?"0".concat(_):_).concat(g.toString().length<2?"0".concat(g):g)
l>12?l-=12:0===l&&(l=12)
var b=false
var w=t.replace(/%([DFrRTv])/g,function(e,t){return{D:"%m/%d/%y",F:"%Y-%m-%d",r:"%I:%M:%S %p",R:"%H:%M",T:"%H:%M:%S",v:"%e-%b-%Y"}[t]}).replace(/%(%|\-?[a-zA-Z]|3N)/g,function(e,t){switch(t){case"a":case"A":case"b":case"B":case"h":case"p":case"P":if(null==n){b=true
return""}}switch(t){case"a":return n.abbr_day_names[r]
case"A":return n.day_names[r]
case"b":return n.abbr_month_names[o]
case"B":return n.month_names[o]
case"d":return v(a)
case"-d":return a
case"e":return v(a," ")
case"h":return n.abbr_month_names[o]
case"H":return v(u)
case"-H":return u
case"I":return v(l)
case"-I":return l
case"j":return v(s,"00",3)
case"k":return v(u," ")
case"l":return v(l," ")
case"L":return v(f,"00",3)
case"m":return v(o)
case"-m":return o
case"M":return v(h)
case"-M":return h
case"n":return"\n"
case"3N":return v(f,"00",3)
case"p":return n.meridian[c]
case"P":return n.meridian[c].toLowerCase()
case"s":return p
case"S":return v(d)
case"-S":return d
case"t":return"\t"
case"u":return r||r+7
case"w":return r
case"y":return v(i)
case"-y":return v(i).replace(/^0+/,"")
case"Y":return i
case"z":return y
case"%":return"%"
default:return e}})
if(b)return e.toString()
return w}
h.a.pluralize=function(e,t,n){var r
try{r=this.lookup(t,n)}catch(e){}if(!r)return this.missingTranslation(t)
n=Object(o["a"])({precision:0},n)
n.count=this.localizeNumber(e,n)
var a
switch(Math.abs(e)){case 0:a=null!=r.zero?r.zero:null!=r.none?r.none:null!=r.other?r.other:this.missingTranslation(t,"zero")
break
case 1:a=null!=r.one?r.one:this.missingTranslation(t,"one")
break
default:a=null!=r.other?r.other:this.missingTranslation(t,"other")}return this.interpolate(a,n)}
h.a.Utils.HtmlSafeString=_["a"].SafeString
h.a.CallHelpers.keyPattern=/^\#?\w+(\.\w+)+$/
var b=h.a.CallHelpers.inferKey.bind(h.a.CallHelpers)
h.a.CallHelpers.inferKey=function(e,t){return"#".concat(b(e,t))}
h.a.CallHelpers.normalizeKey=function(e,t){if("#"===e[0]){e=e.slice(1)
delete t.scope}return e}
window.ENV&&window.ENV.lolcalize&&(h.a.CallHelpers.normalizeDefault=d)
h.a.scoped=function(e,t){var n=new h.a.scope(e)
t&&t(n)
return n}
var w=function(){function e(t){Object(a["a"])(this,e)
this.scope=t
this.cache=new Map}Object(i["a"])(e,[{key:"translate",value:function(){var e
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
try{e=h.a.locale+JSON.stringify(n)}catch(e){}if(e){var a=this.cache.get(e)
if(a)return a
var i=this.translateWithoutCache.apply(this,n)
this.cache.set(e,i)
return i}return this.translateWithoutCache.apply(this,n)}},{key:"translateWithoutCache",value:function(){var e=arguments
var t=e[e.length-1]
t instanceof Object?t.scope=this.scope:e=[].concat(Object(r["a"])(e),[{scope:this.scope}])
return h.a.translate.apply(h.a,Object(r["a"])(e))}},{key:"localize",value:function(e,t){"#"===e[0]&&(e=e.slice(1))
return h.a.localize(e,t)}},{key:"beforeLabel",value:function(e){return this.t("#before_label_wrapper","%{text}:",{text:e})}}])
return e}()
h.a.scope=w
w.prototype.HtmlSafeString=h.a.HtmlSafeString
w.prototype.lookup=h.a.lookup.bind(h.a)
w.prototype.toTime=h.a.toTime.bind(h.a)
w.prototype.toNumber=h.a.toNumber.bind(h.a)
w.prototype.toCurrency=h.a.toCurrency.bind(h.a)
w.prototype.toHumanSize=h.a.toHumanSize.bind(h.a)
w.prototype.toPercentage=h.a.toPercentage.bind(h.a)
w.prototype.localizeNumber=h.a.n.bind(h.a)
w.prototype.currentLocale=h.a.currentLocale.bind(h.a)
w.prototype.t=w.prototype.translate
w.prototype.l=w.prototype.localize
w.prototype.n=w.prototype.localizeNumber
w.prototype.p=w.prototype.pluralize
h.a.translations?u.a.extend(true,h.a.translations,{en:{}}):h.a.translations={en:{}}
t["default"]=h.a},q1tI:function(e,t,n){"use strict"
e.exports=n("viRO")},q1z7:function(e,t,n){var r,a
i=this,o=function(e,t,n,r){var a=e.Backbone
var i=[]
i.push
var o=i.slice
i.splice
t.VERSION="1.1.1"
t.$=r
t.noConflict=function(){e.Backbone=a
return this}
t.emulateHTTP=false
t.emulateJSON=false
var s=t.Events={on:function(e,t,n){if(!l(this,"on",e,[t,n])||!t)return this
this._events||(this._events={})
var r=this._events[e]||(this._events[e]=[])
r.push({callback:t,context:n,ctx:n||this})
return this},once:function(e,t,r){if(!l(this,"once",e,[t,r])||!t)return this
var a=this
var i=n.once(function(){a.off(e,i)
t.apply(this,arguments)})
i._callback=t
return this.on(e,i,r)},off:function(e,t,r){var a,i,o,s,u,c,d,f
if(!this._events||!l(this,"off",e,[t,r]))return this
if(!e&&!t&&!r){this._events=void 0
return this}s=e?[e]:n.keys(this._events)
for(u=0,c=s.length;u<c;u++){e=s[u]
if(o=this._events[e]){this._events[e]=a=[]
if(t||r)for(d=0,f=o.length;d<f;d++){i=o[d];(t&&t!==i.callback&&t!==i.callback._callback||r&&r!==i.context)&&a.push(i)}a.length||delete this._events[e]}}return this},trigger:function(e){if(!this._events)return this
var t=o.call(arguments,1)
if(!l(this,"trigger",e,t))return this
var n=this._events[e]
var r=this._events.all
n&&c(n,t)
r&&c(r,arguments)
return this},stopListening:function(e,t,r){var a=this._listeningTo
if(!a)return this
var i=!t&&!r
r||"object"!==typeof t||(r=this)
e&&((a={})[e._listenId]=e)
for(var o in a){e=a[o]
e.off(t,r,this);(i||n.isEmpty(e._events))&&delete this._listeningTo[o]}return this}}
var u=/\s+/
var l=function(e,t,n,r){if(!n)return true
if("object"===typeof n){for(var a in n)e[t].apply(e,[a,n[a]].concat(r))
return false}if(u.test(n)){var i=n.split(u)
for(var o=0,s=i.length;o<s;o++)e[t].apply(e,[i[o]].concat(r))
return false}return true}
var c=function(e,t){var n,r=-1,a=e.length,i=t[0],o=t[1],s=t[2]
switch(t.length){case 0:while(++r<a)(n=e[r]).callback.call(n.ctx)
return
case 1:while(++r<a)(n=e[r]).callback.call(n.ctx,i)
return
case 2:while(++r<a)(n=e[r]).callback.call(n.ctx,i,o)
return
case 3:while(++r<a)(n=e[r]).callback.call(n.ctx,i,o,s)
return
default:while(++r<a)(n=e[r]).callback.apply(n.ctx,t)
return}}
var d={listenTo:"on",listenToOnce:"once"}
n.each(d,function(e,t){s[t]=function(t,r,a){var i=this._listeningTo||(this._listeningTo={})
var o=t._listenId||(t._listenId=n.uniqueId("l"))
i[o]=t
a||"object"!==typeof r||(a=this)
t[e](r,a,this)
return this}})
s.bind=s.on
s.unbind=s.off
n.extend(t,s)
var f=t.Model=function(e,t){var r=e||{}
t||(t={})
this.cid=n.uniqueId("c")
this.attributes={}
t.collection&&(this.collection=t.collection)
t.parse&&(r=this.parse(r,t)||{})
r=n.defaults({},r,n.result(this,"defaults"))
this.set(r,t)
this.changed={}
this.initialize.apply(this,arguments)}
n.extend(f.prototype,s,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return n.clone(this.attributes)},sync:function(){return t.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return n.escape(this.get(e))},has:function(e){return null!=this.get(e)},set:function(e,t,r){var a,i,o,s,u,l,c,d
if(null==e)return this
if("object"===typeof e){i=e
r=t}else(i={})[e]=t
r||(r={})
if(!this._validate(i,r))return false
o=r.unset
u=r.silent
s=[]
l=this._changing
this._changing=true
if(!l){this._previousAttributes=n.clone(this.attributes)
this.changed={}}d=this.attributes,c=this._previousAttributes
this.idAttribute in i&&(this.id=i[this.idAttribute])
for(a in i){t=i[a]
n.isEqual(d[a],t)||s.push(a)
n.isEqual(c[a],t)?delete this.changed[a]:this.changed[a]=t
o?delete d[a]:d[a]=t}if(!u){s.length&&(this._pending=r)
for(var f=0,h=s.length;f<h;f++)this.trigger("change:"+s[f],this,d[s[f]],r)}if(l)return this
if(!u)while(this._pending){r=this._pending
this._pending=false
this.trigger("change",this,r)}this._pending=false
this._changing=false
return this},unset:function(e,t){return this.set(e,void 0,n.extend({},t,{unset:true}))},clear:function(e){var t={}
for(var r in this.attributes)t[r]=void 0
return this.set(t,n.extend({},e,{unset:true}))},hasChanged:function(e){if(null==e)return!n.isEmpty(this.changed)
return n.has(this.changed,e)},changedAttributes:function(e){if(!e)return!!this.hasChanged()&&n.clone(this.changed)
var t,r=false
var a=this._changing?this._previousAttributes:this.attributes
for(var i in e){if(n.isEqual(a[i],t=e[i]))continue;(r||(r={}))[i]=t}return r},previous:function(e){if(null==e||!this._previousAttributes)return null
return this._previousAttributes[e]},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(e){e=e?n.clone(e):{}
void 0===e.parse&&(e.parse=true)
var t=this
var r=e.success
e.success=function(n){if(!t.set(t.parse(n,e),e))return false
r&&r(t,n,e)
t.trigger("sync",t,n,e)}
L(this,e)
return this.sync("read",this,e)},save:function(e,t,r){var a,i,o,s=this.attributes
if(null==e||"object"===typeof e){a=e
r=t}else(a={})[e]=t
r=n.extend({validate:true},r)
if(a&&!r.wait){if(!this.set(a,r))return false}else if(!this._validate(a,r))return false
a&&r.wait&&(this.attributes=n.extend({},s,a))
void 0===r.parse&&(r.parse=true)
var u=this
var l=r.success
r.success=function(e){u.attributes=s
var t=u.parse(e,r)
r.wait&&(t=n.extend(a||{},t))
if(n.isObject(t)&&!u.set(t,r))return false
l&&l(u,e,r)
u.trigger("sync",u,e,r)}
L(this,r)
i=this.isNew()?"create":r.patch?"patch":"update"
"patch"===i&&(r.attrs=a)
o=this.sync(i,this,r)
a&&r.wait&&(this.attributes=s)
return o},destroy:function(e){e=e?n.clone(e):{}
var t=this
var r=e.success
var a=function(){t.trigger("destroy",t,t.collection,e)}
e.success=function(n){(e.wait||t.isNew())&&a()
r&&r(t,n,e)
t.isNew()||t.trigger("sync",t,n,e)}
if(this.isNew()){e.success()
return false}L(this,e)
var i=this.sync("delete",this,e)
e.wait||a()
return i},url:function(){var e=n.result(this,"urlRoot")||n.result(this.collection,"url")||I()
if(this.isNew())return e
return e.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(e){return this._validate({},n.extend(e||{},{validate:true}))},_validate:function(e,t){if(!t.validate||!this.validate)return true
e=n.extend({},this.attributes,e)
var r=this.validationError=this.validate(e,t)||null
if(!r)return true
this.trigger("invalid",this,r,n.extend(t,{validationError:r}))
return false}})
var h=["keys","values","pairs","invert","pick","omit"]
n.each(h,function(e){f.prototype[e]=function(){var t=o.call(arguments)
t.unshift(this.attributes)
return n[e].apply(n,t)}})
var m=t.Collection=function(e,t){t||(t={})
t.model&&(this.model=t.model)
void 0!==t.comparator&&(this.comparator=t.comparator)
this._reset()
this.initialize.apply(this,arguments)
e&&this.reset(e,n.extend({silent:true},t))}
var p={add:true,remove:true,merge:true}
var _={add:true,remove:false}
n.extend(m.prototype,s,{model:f,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return t.sync.apply(this,arguments)},add:function(e,t){return this.set(e,n.extend({merge:false},t,_))},remove:function(e,t){var r=!n.isArray(e)
e=r?[e]:n.clone(e)
t||(t={})
var a,i,o,s
for(a=0,i=e.length;a<i;a++){s=e[a]=this.get(e[a])
if(!s)continue
delete this._byId[s.id]
delete this._byId[s.cid]
o=this.indexOf(s)
this.models.splice(o,1)
this.length--
if(!t.silent){t.index=o
s.trigger("remove",s,this,t)}this._removeReference(s,t)}return r?e[0]:e},set:function(e,t){t=n.defaults({},t,p)
t.parse&&(e=this.parse(e,t))
var r=!n.isArray(e)
e=r?e?[e]:[]:n.clone(e)
var a,i,o,s,u,l,c
var d=t.at
var h=this.model
var m=this.comparator&&null==d&&false!==t.sort
var _=n.isString(this.comparator)?this.comparator:null
var g=[],y=[],v={}
var b=t.add,w=t.merge,k=t.remove
var x=!(m||!b||!k)&&[]
for(a=0,i=e.length;a<i;a++){u=e[a]||{}
o=u instanceof f?s=u:u[h.prototype.idAttribute||"id"]
if(l=this.get(o)){k&&(v[l.cid]=true)
if(w){u=u===s?s.attributes:u
t.parse&&(u=l.parse(u,t))
l.set(u,t)
m&&!c&&l.hasChanged(_)&&(c=true)}e[a]=l}else if(b){s=e[a]=this._prepareModel(u,t)
if(!s)continue
g.push(s)
this._addReference(s,t)}s=l||s
!x||!s.isNew()&&v[s.id]||x.push(s)
v[s.id]=true}if(k){for(a=0,i=this.length;a<i;++a)v[(s=this.models[a]).cid]||y.push(s)
y.length&&this.remove(y,t)}if(g.length||x&&x.length){m&&(c=true)
this.length+=g.length
if(null!=d)for(a=0,i=g.length;a<i;a++)this.models.splice(d+a,0,g[a])
else{x&&(this.models.length=0)
var M=x||g
for(a=0,i=M.length;a<i;a++)this.models.push(M[a])}}c&&this.sort({silent:true})
if(!t.silent){for(a=0,i=g.length;a<i;a++)(s=g[a]).trigger("add",s,this,t);(c||x&&x.length)&&this.trigger("sort",this,t)}return r?e[0]:e},reset:function(e,t){t||(t={})
for(var r=0,a=this.models.length;r<a;r++)this._removeReference(this.models[r],t)
t.previousModels=this.models
this._reset()
e=this.add(e,n.extend({silent:true},t))
t.silent||this.trigger("reset",this,t)
return e},push:function(e,t){return this.add(e,n.extend({at:this.length},t))},pop:function(e){var t=this.at(this.length-1)
this.remove(t,e)
return t},unshift:function(e,t){return this.add(e,n.extend({at:0},t))},shift:function(e){var t=this.at(0)
this.remove(t,e)
return t},slice:function(){return o.apply(this.models,arguments)},get:function(e){if(null==e)return
return this._byId[e]||this._byId[e.id]||this._byId[e.cid]},at:function(e){return this.models[e]},where:function(e,t){if(n.isEmpty(e))return t?void 0:[]
return this[t?"find":"filter"](function(t){for(var n in e)if(e[n]!==t.get(n))return false
return true})},findWhere:function(e){return this.where(e,true)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator")
e||(e={})
n.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(n.bind(this.comparator,this))
e.silent||this.trigger("sort",this,e)
return this},pluck:function(e){return n.invoke(this.models,"get",e)},fetch:function(e){e=e?n.clone(e):{}
void 0===e.parse&&(e.parse=true)
var t=e.success
var r=this
e.success=function(n){var a=e.reset?"reset":"set"
r[a](n,e)
t&&t(r,n,e)
r.trigger("sync",r,n,e)}
L(this,e)
return this.sync("read",this,e)},create:function(e,t){t=t?n.clone(t):{}
if(!(e=this._prepareModel(e,t)))return false
t.wait||this.add(e,t)
var r=this
var a=t.success
t.success=function(e,n){t.wait&&r.add(e,t)
a&&a(e,n,t)}
e.save(null,t)
return e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0
this.models=[]
this._byId={}},_prepareModel:function(e,t){if(e instanceof f)return e
t=t?n.clone(t):{}
t.collection=this
var r=new this.model(e,t)
if(!r.validationError)return r
this.trigger("invalid",this,r.validationError,t)
return false},_addReference:function(e,t){this._byId[e.cid]=e
null!=e.id&&(this._byId[e.id]=e)
e.collection||(e.collection=this)
e.on("all",this._onModelEvent,this)},_removeReference:function(e,t){this===e.collection&&delete e.collection
e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if(("add"===e||"remove"===e)&&n!==this)return
"destroy"===e&&this.remove(t,r)
if(t&&e==="change:"+t.idAttribute){delete this._byId[t.previous(t.idAttribute)]
null!=t.id&&(this._byId[t.id]=t)}this.trigger.apply(this,arguments)}})
var g=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"]
n.each(g,function(e){m.prototype[e]=function(){var t=o.call(arguments)
t.unshift(this.models)
return n[e].apply(n,t)}})
var y=["groupBy","countBy","sortBy","indexBy"]
n.each(y,function(e){m.prototype[e]=function(t,r){var a=n.isFunction(t)?t:function(e){return e.get(t)}
return n[e](this.models,a,r)}})
var v=t.View=function(e){this.cid=n.uniqueId("view")
e||(e={})
n.extend(this,n.pick(e,w))
this._ensureElement()
this.initialize.apply(this,arguments)
this.delegateEvents()}
var b=/^(\S+)\s*(.*)$/
var w=["model","collection","el","id","attributes","className","tagName","events"]
n.extend(v.prototype,s,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove()
this.stopListening()
return this},setElement:function(e,n){this.$el&&this.undelegateEvents()
this.$el=e instanceof t.$?e:t.$(e)
this.el=this.$el[0]
false!==n&&this.delegateEvents()
return this},delegateEvents:function(e){if(!(e||(e=n.result(this,"events"))))return this
this.undelegateEvents()
for(var t in e){var r=e[t]
n.isFunction(r)||(r=this[e[t]])
if(!r)continue
var a=t.match(b)
var i=a[1],o=a[2]
r=n.bind(r,this)
i+=".delegateEvents"+this.cid
""===o?this.$el.on(i,r):this.$el.on(i,o,r)}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)
return this},_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"),false)
else{var e=n.extend({},n.result(this,"attributes"))
this.id&&(e.id=n.result(this,"id"))
this.className&&(e["class"]=n.result(this,"className"))
var r=t.$("<"+n.result(this,"tagName")+">").attr(e)
this.setElement(r,false)}}})
t.sync=function(e,r,a){var i=x[e]
n.defaults(a||(a={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON})
var o={type:i,dataType:"json"}
a.url||(o.url=n.result(r,"url")||I())
if(null==a.data&&r&&("create"===e||"update"===e||"patch"===e)){o.contentType="application/json"
o.data=JSON.stringify(a.attrs||r.toJSON(a))}if(a.emulateJSON){o.contentType="application/x-www-form-urlencoded"
o.data=o.data?{model:o.data}:{}}if(a.emulateHTTP&&("PUT"===i||"DELETE"===i||"PATCH"===i)){o.type="POST"
a.emulateJSON&&(o.data._method=i)
var s=a.beforeSend
a.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",i)
if(s)return s.apply(this,arguments)}}"GET"===o.type||a.emulateJSON||(o.processData=false)
"PATCH"===o.type&&k&&(o.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")})
var u=a.xhr=t.ajax(n.extend(o,a))
r.trigger("request",r,u,a)
return u}
var k="undefined"!==typeof window&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent)
var x={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"}
t.ajax=function(){return t.$.ajax.apply(t.$,arguments)}
var M=t.Router=function(e){e||(e={})
e.routes&&(this.routes=e.routes)
this._bindRoutes()
this.initialize.apply(this,arguments)}
var T=/\((.*?)\)/g
var D=/(\(\?)?:\w+/g
var E=/\*\w+/g
var S=/[\-{}\[\]+?.,\\\^$|#\s]/g
n.extend(M.prototype,s,{initialize:function(){},route:function(e,r,a){n.isRegExp(e)||(e=this._routeToRegExp(e))
if(n.isFunction(r)){a=r
r=""}a||(a=this[r])
var i=this
t.history.route(e,function(n){var o=i._extractParameters(e,n)
i.execute(a,o)
i.trigger.apply(i,["route:"+r].concat(o))
i.trigger("route",r,o)
t.history.trigger("route",i,r,o)})
return this},execute:function(e,t){e&&e.apply(this,t)},navigate:function(e,n){t.history.navigate(e,n)
return this},_bindRoutes:function(){if(!this.routes)return
this.routes=n.result(this,"routes")
var e,t=n.keys(this.routes)
while(null!=(e=t.pop()))this.route(e,this.routes[e])},_routeToRegExp:function(e){e=e.replace(S,"\\$&").replace(T,"(?:$1)?").replace(D,function(e,t){return t?e:"([^/?]+)"}).replace(E,"([^?]*?)")
return new RegExp("^"+e+"(?:\\?(.*))?$")},_extractParameters:function(e,t){var r=e.exec(t).slice(1)
return n.map(r,function(e,t){if(t===r.length-1)return e||null
return e?decodeURIComponent(e):null})}})
var C=t.History=function(){this.handlers=[]
n.bindAll(this,"checkUrl")
if("undefined"!==typeof window){this.location=window.location
this.history=window.history}}
var P=/^[#\/]|\s+$/g
var O=/^\/+|\/+$/g
var j=/msie [\w.]+/
var A=/\/$/
var N=/#.*$/
C.started=false
n.extend(C.prototype,s,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/)
return t?t[1]:""},getFragment:function(e,t){if(null==e)if(this._hasPushState||!this._wantsHashChange||t){e=decodeURI(this.location.pathname+this.location.search)
var n=this.root.replace(A,"")
e.indexOf(n)||(e=e.slice(n.length))}else e=this.getHash()
return e.replace(P,"")},start:function(e){if(C.started)throw new Error("Backbone.history has already been started")
C.started=true
this.options=n.extend({root:"/"},this.options,e)
this.root=this.options.root
this._wantsHashChange=false!==this.options.hashChange
this._wantsPushState=!!this.options.pushState
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState)
var r=this.getFragment()
var a=document.documentMode
var i=j.exec(navigator.userAgent.toLowerCase())&&(!a||a<=7)
this.root=("/"+this.root+"/").replace(O,"/")
if(i&&this._wantsHashChange){var o=t.$('<iframe src="javascript:0" tabindex="-1">')
this.iframe=o.hide().appendTo("body")[0].contentWindow
this.navigate(r)}this._hasPushState?t.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!i?t.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval))
this.fragment=r
var s=this.location
if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true)
this.location.replace(this.root+"#"+this.fragment)
return true}if(this._hasPushState&&this.atRoot()&&s.hash){this.fragment=this.getHash().replace(P,"")
this.history.replaceState({},document.title,this.root+this.fragment)}}if(!this.options.silent)return this.loadUrl()},stop:function(){t.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl)
clearInterval(this._checkUrlInterval)
C.started=false},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment()
t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe)))
if(t===this.fragment)return false
this.iframe&&this.navigate(t)
this.loadUrl()},loadUrl:function(e){e=this.fragment=this.getFragment(e)
return n.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e)
return true}})},navigate:function(e,t){if(!C.started)return false
t&&true!==t||(t={trigger:!!t})
var n=this.root+(e=this.getFragment(e||""))
e=e.replace(N,"")
if(this.fragment===e)return
this.fragment=e
""===e&&"/"!==n&&(n=n.slice(0,-1))
if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n)
else{if(!this._wantsHashChange)return this.location.assign(n)
this._updateHash(this.location,e,t.replace)
if(this.iframe&&e!==this.getFragment(this.getHash(this.iframe))){t.replace||this.iframe.document.open().close()
this._updateHash(this.iframe.location,e,t.replace)}}if(t.trigger)return this.loadUrl(e)},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"")
e.replace(r+"#"+t)}else e.hash="#"+t}})
t.history=new C
var z=function(e,t){var r=this
var a
a=e&&n.has(e,"constructor")?e.constructor:function(){return r.apply(this,arguments)}
n.extend(a,r,t)
var i=function(){this.constructor=a}
i.prototype=r.prototype
a.prototype=new i
e&&n.extend(a.prototype,e)
a.__super__=r.prototype
return a}
f.extend=m.extend=M.extend=v.extend=C.extend=z
var I=function(){throw new Error('A "url" property or function must be specified')}
var L=function(e,t){var n=t.error
t.error=function(r){n&&n(e,r,t)
e.trigger("error",e,r,t)}}
return t},r=[n("GLiE"),n("ouhR"),t],a=function(e,t,n){i.Backbone=o(i,n,e,t)}.apply(t,r),void 0!==a&&(e.exports=a)
var i,o},q3b3:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("UlQx")
a.a.fn.keycodes=function(e,t){var n={27:"esc",9:"tab",32:"space",13:"return",8:"backspace",145:"scroll",20:"capslock",144:"numlock",19:"pause",45:"insert",36:"home",46:"del",35:"end",33:"pageup",34:"pagedown",37:"left",38:"up",39:"right",40:"down",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",191:"/"}
a.a.browser.mozilla&&(n=a.a.extend(n,{96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",0:"191"}))
"string"==typeof e&&(e={keyCodes:e})
this.filter(":input,object,embed").length>0&&(e.ignore="")
e=a.a.extend({},a.a.fn.keycodes.defaults,e)
var r=[]
var i=[]
var o=e.keyCodes.split(" ")
a.a.each(o,function(e,t){i.push(t)
t=t.split("+").sort().join("+").toLowerCase()
r.push(t)})
this.bind("keydown",function(o,s){o=s&&s.keyCode?s:o
if(e.ignore&&a()(o.target).is(e.ignore))return
var u=[]
o.shiftKey&&u.push("Shift")
o.ctrlKey&&u.push("Ctrl")
o.metaKey&&u.push("Meta")
o.altKey&&u.push("Alt")
var l=n[o.keyCode]
l=l||String.fromCharCode(o.keyCode)
u.push(l)
u=u.sort().join("+").toLowerCase()
o.keyMatches=function(e){e=e.split("+").sort().join("+").toLowerCase()
return e==u}
var c=a.a.inArray(u,r)
var d=a()(document).data("last_datepicker")
if(d&&d[0]==this&&27==o.keyCode){o.preventDefault()
return false}if(-1!=c){o.keyString=i[c]
t.call(this,o)}})
return this}
a.a.fn.keycodes.defaults={ignore:":input,object,embed",keyCodes:""}},"rEd+":function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("9Duh")
n("vTtS")
n("PwBw")
var i=n("HIhM")
var o=(s={"left+":"right-","left-":"right+",left:"right","right+":"left-","right-":"left+",right:"left"},u=function(e){return e.replace(/[\-\+]/g,"\\$&")},l=new RegExp(Object.keys(s).map(u).join("|")),c=function(e){return e.replace(l,function(e){return s[e]||e})},function(e,t){if(Object(i["c"])(e)){t.my=c(t.my)
t.at=c(t.at)}})
var s,u,l,c
var d=0
function f(e,t){var n=(e.attr("aria-describedby")||"").split(/\s+/)
n.push(t)
e.data("ui-tooltip-id",t).attr("aria-describedby",a.a.trim(n.join(" ")))}function h(e){var t=e.data("ui-tooltip-id"),n=(e.attr("aria-describedby")||"").split(/\s+/),r=a.a.inArray(t,n);-1!==r&&n.splice(r,1)
e.removeData("ui-tooltip-id")
n=a.a.trim(n.join(" "))
n?e.attr("aria-describedby",n):e.removeAttr("aria-describedby")}a.a.widget("ui.tooltip",{version:"@VERSION",options:{content:function(){return a()(this).attr("title")},hide:true,items:"[title]",position:{my:"left+15 center",at:"right center",collision:"flipfit flipfit"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){o(this.element[0],this.options.position)
this._on({mouseover:"open",focusin:"open"})
this.tooltips={}},_setOption:function(e,t){if("disabled"===e){this[t?"_disable":"_enable"]()
this.options[e]=t
return}this._super(e,t)},_disable:function(){var e=this
a.a.each(this.tooltips,function(t,n){var r=a.a.Event("blur")
r.target=r.currentTarget=n[0]
e.close(r,true)})
this.element.find(this.options.items).andSelf().each(function(){var e=a()(this)
e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var e=a()(this)
e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var t,n=this,r=a()(e?e.target:this.element).closest(this.options.items)
if(!r.length)return
if(this.options.track&&r.data("ui-tooltip-id")){this._find(r).position(a.a.extend({of:r},this.options.position))
return}r.attr("title")&&r.data("ui-tooltip-title",r.attr("title"))
r.data("tooltip-open",true)
t=this.options.content.call(r[0],function(t){if(!r.data("tooltip-open"))return
setTimeout(function(){n._open(e,r,t)},1)})
t&&n._open(e,r,t)},_open:function(e,t,n){var r,i
if(!n)return
r=this._find(t)
if(r.length){r.find(".ui-tooltip-content").html(n)
return}t.is("[title]")&&(e&&"mouseover"===e.type?t.attr("title",""):t.removeAttr("title"))
r=this._tooltip(t)
f(t,r.attr("id"))
r.find(".ui-tooltip-content").html(n)
function o(e){i.of=e
r.position(i)}if(this.options.track&&e&&/^mouse/.test(e.originalEvent.type)){i=a.a.extend({},this.options.position)
this._on(this.document,{mousemove:o})
o(e)}else r.position(a.a.extend({of:t},this.options.position))
r.hide()
this._show(r,this.options.show)
this._trigger("open",e,{tooltip:r})
this._on(t,{mouseleave:"close",focusout:"close",keyup:function(e){if(e.keyCode===a.a.ui.keyCode.ESCAPE){var n=a.a.Event(e)
n.currentTarget=t[0]
this.close(n,true)}}})},close:function(e,t){var n=this,r=a()(e?e.currentTarget:this.element),i=this._find(r)
if(this.closing)return
if(!t&&e&&"focusout"!==e.type&&this.document[0].activeElement===r[0])return
r.data("ui-tooltip-title")&&r.attr("title",r.data("ui-tooltip-title"))
h(r)
i.stop(true)
this._hide(i,this.options.hide,function(){a()(this).remove()
delete n.tooltips[this.id]})
r.removeData("tooltip-open")
this._off(r,"mouseleave focusout keyup")
this._off(this.document,"mousemove")
this.closing=true
this._trigger("close",e,{tooltip:i})
this.closing=false},_tooltip:function(e){var t="ui-tooltip-"+d++,n=a()("<div>").attr({id:t,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""))
a()("<div>").addClass("ui-tooltip-content").appendTo(n)
n.appendTo(this.document[0].body)
a.a.fn.bgiframe&&n.bgiframe()
this.tooltips[t]=e
return n},_find:function(e){var t=e.data("ui-tooltip-id")
return t?a()("#"+t):a()()},_destroy:function(){a.a.each(this.tooltips,function(e){a()("#"+e).remove()})}})},rePB:function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
function r(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n
return e}},rjKU:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=Object.freeze({radiusSmall:"0.125rem",radiusMedium:"0.25rem",radiusLarge:"0.5rem",widthSmall:"0.0625rem",widthMedium:"0.125rem",widthLarge:"0.25rem",style:"solid"})
t.default=r},"s/PJ":function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=a.a.scrollTo=function(e,t,n){a()(window).scrollTo(e,t,n)}
i.defaults={axis:"xy",duration:parseFloat(a.a.fn.jquery)>=1.3?0:1}
i.window=function(e){return a()(window)._scrollable()}
a.a.fn._scrollable=function(){return this.map(function(){var e=this,t=!e.nodeName||-1!=a.a.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])
if(!t)return e
var n=(e.contentWindow||e).document||e.ownerDocument||e
return a.a.browser.safari||"BackCompat"==n.compatMode?n.body:n.documentElement})}
a.a.fn.scrollTo=function(e,t,n){if("object"==typeof t){n=t
t=0}"function"==typeof n&&(n={onAfter:n})
"max"==e&&(e=9e9)
n=a.a.extend({},i.defaults,n)
t=t||n.speed||n.duration
n.queue=n.queue&&n.axis.length>1
n.queue&&(t/=2)
n.offset=o(n.offset)
n.over=o(n.over)
return this._scrollable().each(function(){var r,s=this,u=a()(s),l=e,c={},d=u.is("html,body")
switch(typeof l){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(l)){l=o(l)
break}l=a()(l,this)
case"object":(l.is||l.style)&&(r=(l=a()(l)).offset())}a.a.each(n.axis.split(""),function(e,t){var a="x"==t?"Left":"Top",o=a.toLowerCase(),h="scroll"+a,m=s[h],p=i.max(s,t)
if(r){c[h]=r[o]+(d?0:m-u.offset()[o])
if(n.margin){c[h]-=parseInt(l.css("margin"+a))||0
c[h]-=parseInt(l.css("border"+a+"Width"))||0}c[h]+=n.offset[o]||0
n.over[o]&&(c[h]+=l["x"==t?"width":"height"]()*n.over[o])}else{var _=l[o]
c[h]=_&&_.slice&&"%"==_.slice(-1)?parseFloat(_)/100*p:_}/^\d+$/.test(c[h])&&(c[h]=c[h]<=0?0:Math.min(c[h],p))
if(!e&&n.queue){m!=c[h]&&f(n.onAfterFirst)
delete c[h]}})
f(n.onAfter)
function f(r){u.animate(c,t,n.easing,r&&function(){r.call(this,e,n)})}}).end()}
i.max=function(e,t){var n="x"==t?"Width":"Height",r="scroll"+n
if(!a()(e).is("html,body"))return e[r]-a()(e)[n.toLowerCase()]()
var i="client"+n,o=e.ownerDocument.documentElement,s=e.ownerDocument.body
return Math.max(o[r],s[r])-Math.min(o[i],s[i])}
function o(e){return"object"==typeof e?e:{top:e,left:e}}},sW1j:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=.0625
var a={xxSmall:8,xSmall:16,small:30,medium:48,large:62,xLarge:75}
var i=Object.freeze({xxSmall:"".concat(a.xxSmall,"em"),xSmall:"".concat(a.xSmall,"em"),small:"".concat(a.small,"em"),medium:"".concat(a.medium,"em"),large:"".concat(a.large,"em"),xLarge:"".concat(a.xLarge,"em"),maxWidth:"".concat(a.large-r,"em")})
t.default=i},seZM:function(e,t,n){"use strict";(function(e){var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.clearRegistry=p
t.getRegisteredThemes=t.generateComponentTheme=t.getTheme=t.generateTheme=t.getRegisteredComponent=t.getRegisteredComponents=t.registerComponentTheme=t.getRegisteredTheme=t.registerTheme=t.makeTheme=t.setDefaultTheme=t.getDefaultThemeKey=t.setRegistry=t.getRegistry=void 0
var a=r(n("MVZn"))
var i=r(n("lSNA"))
n("Y14w")
var o=r(n("wVQW"))
var s=r(n("xnDy"))
var u=r(n("oxAU"))
var l="@@themeableDefaultTheme"
var c="GLOBAL_THEME_REGISTRY"
var d=function(){return{defaultThemeKey:null,components:(0,i.default)({},l,{}),themes:{},registered:[]}}
var f=function(e){var t=d()
if("undefined"===typeof e)return t
Object.keys(t).forEach(function(t){"undefined"===typeof e[t]&&false})
return e}
e[c]=f(e[c])
var h=function(){return e[c]}
t.getRegistry=h
var m=function(t){e[c]=t}
t.setRegistry=m
function p(){m(d())}var _=function(){var e=h(),t=e.defaultThemeKey,n=e.registered
return t||n[n.length-1]||l}
t.getDefaultThemeKey=_
var g=function(e,t){var n=h()
var r=n.themes[e]
if(!r){e!==l&&"[themeable] Could not find theme: '".concat(e,"' in the registry.")
r={}}n.defaultThemeKey=e
n.overrides=t
return r}
t.setDefaultTheme=g
var y=function(e){var t=e.key,n=e.variables,r=e.a11y,i=e.immutable,o=e.description
var s=t||(0,u.default)()
return{key:s,immutable:i,variables:(0,a.default)({},n),description:o,use:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.accessible,n=e.overrides
if(t){r&&r.key,"[themeable] No accessible theme provided for ".concat(s,".")
r&&r.key&&g(r.key)}else g(s,n)}}}
t.makeTheme=y
var v=function(e){var t=h()
var n
if(e.key&&t.themes[e.key])n=t.themes[e.key]
else{n=y(e)
t.themes[n.key]=n
t.registered.push(n.key)}return n}
t.registerTheme=v
var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!e)return t
var n=h().themes[e]
if(n)return n
e!==l&&"[themeable] Could not find theme: '".concat(e,"' in the registry.")
return t}
t.getRegisteredTheme=b
var w=function(e,t){var n=b(e)
var r=n.variables||{}
var a=(0,s.default)(t)
if(!a&&n.immutable){"[themeable] Theme, '".concat(n.key,"', is immutable. Cannot apply overrides: ").concat(JSON.stringify(t))
return r}var i=(0,s.default)(r)
if(!i&&!a)return(0,o.default)(r,t)
if(i)return t||{}
return r}
var k=function(e,t){var n
if(e)n=w(e,t)
else{var r=h().overrides
var a=(0,s.default)(r)
n=a||(0,s.default)(t)?a?t:r:(0,o.default)(r,t)}return w(_(),n)}
var x=function(e,t){return function(n){var r={}
"function"===typeof e&&(r=e(n))
var i={}
"function"===typeof e[t]&&(i=e[t](n));(0,s.default)(i)||(0,s.default)(r)?(0,s.default)(r)&&(r=i):r=(0,a.default)({},r,i)
return r}}
var M=function(e,t){var n=h(),r=n.components
if("function"!==typeof t)return
r[l][e]=t
Object.keys(t).forEach(function(n){r.hasOwnProperty(n)||(r[n]={})
r[n][e]=x(t,n)})}
t.registerComponentTheme=M
var T=function(e){var t=h(),n=t.components
var r=e||_()
return(0,a.default)({},n[l],n[r])}
t.getRegisteredComponents=T
var D=function(e,t){var n=h(),r=n.components
return r[e]&&r[e][t]||r[l][t]}
t.getRegisteredComponent=D
var E=function(e,t){var n=h()
n.registered.length
var r=T(e)
var a={}
var i=k(e,t)
if((0,s.default)(i))return
Object.getOwnPropertySymbols(r).forEach(function(e){a[e]=r[e](i)})
return a}
t.generateTheme=E
var S=function(e){return b(e).variables||{}}
t.getTheme=S
var C=function(e,t,n){var r=t||_()
var i=b(r)
var o={}
var u=i[e]
if(u)o=u
else{var l=(0,a.default)({borders:{},breakpoints:{},colors:{},forms:{},media:{},shadows:{},spacing:{},stacking:{},transitions:{},typography:{}},k(t))
var c=D(r,e)
if("function"===typeof c)try{o=c(l)}catch(e){"[themeable] ".concat(e)}}if((0,s.default)(n))return i[e]=o
if(i.immutable){"[themeable] Theme '".concat(r,"' is immutable. Cannot apply overrides for '").concat(e.toString(),"': ").concat(JSON.stringify(n))
return o}return(0,s.default)(o)?n:(0,a.default)({},o,n)}
t.generateComponentTheme=C
var P=function(){return h().themes}
t.getRegisteredThemes=P}).call(this,n("yLpj"))},spya:function(module,__webpack_exports__,__webpack_require__){"use strict"
var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ouhR")
var jquery__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__)
var jqueryui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("9Duh")
var jqueryui_widget__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("vTtS")
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ui,{datepicker:{version:"@VERSION"}})
var PROP_NAME="datepicker"
var dpuuid=(new Date).getTime()
var instActive
function Datepicker(){this.debug=false
this._curInst=null
this._keyEvent=false
this._disabledInputs=[]
this._datepickerShowing=false
this._inDialog=false
this._mainDivId="ui-datepicker-div"
this._inlineClass="ui-datepicker-inline"
this._appendClass="ui-datepicker-append"
this._triggerClass="ui-datepicker-trigger"
this._dialogClass="ui-datepicker-dialog"
this._disableClass="ui-datepicker-disabled"
this._unselectableClass="ui-datepicker-unselectable"
this._currentClass="ui-datepicker-current-day"
this._dayOverClass="ui-datepicker-days-cell-over"
this.regional=[]
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""}
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false}
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(this._defaults,this.regional[""])
this.dpDiv=bindHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){extendRemove(this._defaults,e||{})
return this},_attachDatepicker:function _attachDatepicker(target,settings){var inlineSettings=null
for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName)
if(attrValue){inlineSettings=inlineSettings||{}
try{inlineSettings[attrName]=eval(attrValue)}catch(e){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase()
var inline="div"==nodeName||"span"==nodeName
if(!target.id){this.uuid+=1
target.id="dp"+this.uuid}var inst=this._newInst(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target),inline)
inst.settings=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({},settings||{},inlineSettings||{})
"input"==nodeName?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(e,t){var n=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1")
return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(e,t){var n=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
t.append=jquery__WEBPACK_IMPORTED_MODULE_0___default()([])
t.trigger=jquery__WEBPACK_IMPORTED_MODULE_0___default()([])
if(n.hasClass(this.markerClassName))return
this._attachments(n,t)
n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)})
this._autoSize(t)
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(e,PROP_NAME,t)
t.settings.disabled&&this._disableDatepicker(e)},_attachments:function(e,t){var n=this._get(t,"appendText")
var r=this._get(t,"isRTL")
t.append&&t.append.remove()
if(n){t.append=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span class="'+this._appendClass+'">'+n+"</span>")
e[r?"before":"after"](t.append)}e.unbind("focus",this._showDatepicker)
t.trigger&&t.trigger.remove()
var a=this._get(t,"showOn")
"focus"!=a&&"both"!=a||e.focus(this._showDatepicker)
if("button"==a||"both"==a){var i=this._get(t,"buttonText")
var o=this._get(t,"buttonImage")
t.trigger=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._get(t,"buttonImageOnly")?jquery__WEBPACK_IMPORTED_MODULE_0___default()("<img/>").addClass(this._triggerClass).attr({src:o,alt:i,title:i}):jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button type="button"></button>').addClass(this._triggerClass).html(""==o?i:jquery__WEBPACK_IMPORTED_MODULE_0___default()("<img/>").attr({src:o,alt:i,title:i})))
e["after"](t.trigger)
t.trigger.click(function(){if(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._datepickerShowing&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._lastInput==e[0])jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._hideDatepicker()
else if(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._datepickerShowing&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._lastInput!=e[0]){jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._hideDatepicker()
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._showDatepicker(e[0])}else jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._showDatepicker(e[0])
return false})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t=new Date(2009,11,20)
var n=this._get(e,"dateFormat")
if(n.match(/[DM]/)){var r=function(e){var t=0
var n=0
for(var r=0;r<e.length;r++)if(e[r].length>t){t=e[r].length
n=r}return n}
t.setMonth(r(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort")))
t.setDate(r(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)}},_inlineDatepicker:function(e,t){var n=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
if(n.hasClass(this.markerClassName))return
n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)})
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(e,PROP_NAME,t)
this._setDate(t,this._getDefaultDate(t),true)
this._updateDatepicker(t)
this._updateAlternate(t)
t.settings.disabled&&this._disableDatepicker(e)
t.dpDiv.css("display","block")},_dialogDatepicker:function(e,t,n,r,a){var i=this._dialogInst
if(!i){this.uuid+=1
var o="dp"+this.uuid
this._dialogInput=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="text" id="'+o+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>')
this._dialogInput.keydown(this._doKeyDown)
jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append(this._dialogInput)
i=this._dialogInst=this._newInst(this._dialogInput,false)
i.settings={}
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(this._dialogInput[0],PROP_NAME,i)}extendRemove(i.settings,r||{})
t=t&&t.constructor==Date?this._formatDate(i,t):t
this._dialogInput.val(t)
this._pos=a?a.length?a:[a.pageX,a.pageY]:null
if(!this._pos){var s=document.documentElement.clientWidth
var u=document.documentElement.clientHeight
var l=document.documentElement.scrollLeft||document.body.scrollLeft
var c=document.documentElement.scrollTop||document.body.scrollTop
this._pos=[s/2-100+l,u/2-150+c]}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px")
i.settings.onSelect=n
this._inDialog=true
this.dpDiv.addClass(this._dialogClass)
this._showDatepicker(this._dialogInput[0])
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.blockUI&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.blockUI(this.dpDiv)
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(this._dialogInput[0],PROP_NAME,i)
return this},_destroyDatepicker:function(e){var t=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
var n=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(e,PROP_NAME)
if(!t.hasClass(this.markerClassName))return
var r=e.nodeName.toLowerCase()
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(e,PROP_NAME)
if("input"==r){n.append.remove()
n.trigger.remove()
t.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else"div"!=r&&"span"!=r||t.removeClass(this.markerClassName).empty()},_enableDatepicker:function(e){var t=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
var n=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(e,PROP_NAME)
if(!t.hasClass(this.markerClassName))return
var r=e.nodeName.toLowerCase()
if("input"==r){e.disabled=false
n.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if("div"==r||"span"==r){var a=t.children("."+this._inlineClass)
a.children().removeClass("ui-state-disabled")
a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)}this._disabledInputs=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.map(this._disabledInputs,function(t){return t==e?null:t})},_disableDatepicker:function(e){var t=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
var n=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(e,PROP_NAME)
if(!t.hasClass(this.markerClassName))return
var r=e.nodeName.toLowerCase()
if("input"==r){e.disabled=true
n.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if("div"==r||"span"==r){var a=t.children("."+this._inlineClass)
a.children().addClass("ui-state-disabled")
a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)}this._disabledInputs=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.map(this._disabledInputs,function(t){return t==e?null:t})
this._disabledInputs[this._disabledInputs.length]=e},_isDisabledDatepicker:function(e){if(!e)return false
for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]==e)return true
return false},_getInst:function(e){try{return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(e,PROP_NAME)}catch(e){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,n){var r=this._getInst(e)
if(2==arguments.length&&"string"==typeof t)return"defaults"==t?jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({},jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._defaults):r?"all"==t?jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({},r.settings):this._get(r,t):null
var a=t||{}
if("string"==typeof t){a={}
a[t]=n}if(r){this._curInst==r&&this._hideDatepicker()
var i=this._getDateDatepicker(e,true)
var o=this._getMinMaxDate(r,"min")
var s=this._getMinMaxDate(r,"max")
extendRemove(r.settings,a)
null!==o&&void 0!==a["dateFormat"]&&void 0===a["minDate"]&&(r.settings.minDate=this._formatDate(r,o))
null!==s&&void 0!==a["dateFormat"]&&void 0===a["maxDate"]&&(r.settings.maxDate=this._formatDate(r,s))
this._attachments(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e),r)
this._autoSize(r)
this._setDate(r,i)
this._updateAlternate(r)
this._updateDatepicker(r)}},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e)
t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e)
if(n){this._setDate(n,t)
this._updateDatepicker(n)
this._updateAlternate(n)}},_getDateDatepicker:function(e,t){var n=this._getInst(e)
n&&!n.inline&&this._setDateFromField(n,t)
return n?this._getDate(n):null},_doKeyDown:function(e){var t=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getInst(e.target)
var n=true
var r=t.dpDiv.is(".ui-datepicker-rtl")
t._keyEvent=true
if(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._datepickerShowing)switch(e.keyCode){case 9:jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._hideDatepicker()
n=false
break
case 13:var a=jquery__WEBPACK_IMPORTED_MODULE_0___default()("td."+jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._dayOverClass+":not(."+jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._currentClass+")",t.dpDiv)
a[0]&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,a[0])
var i=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"onSelect")
if(i){var o=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._formatDate(t)
i.apply(t.input?t.input[0]:null,[o,t])}else jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._hideDatepicker()
return false
case 27:jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._hideDatepicker()
break
case 33:jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._adjustDate(e.target,e.ctrlKey?-jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"stepBigMonths"):-jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"stepMonths"),"M")
break
case 34:jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._adjustDate(e.target,e.ctrlKey?+jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"stepBigMonths"):+jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"stepMonths"),"M")
break
case 35:(e.ctrlKey||e.metaKey)&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._clearDate(e.target)
n=e.ctrlKey||e.metaKey
break
case 36:(e.ctrlKey||e.metaKey)&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._gotoToday(e.target)
n=e.ctrlKey||e.metaKey
break
case 37:(e.ctrlKey||e.metaKey)&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._adjustDate(e.target,r?1:-1,"D")
n=e.ctrlKey||e.metaKey
e.originalEvent.altKey&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._adjustDate(e.target,e.ctrlKey?-jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"stepBigMonths"):-jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"stepMonths"),"M")
break
case 38:(e.ctrlKey||e.metaKey)&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._adjustDate(e.target,-7,"D")
n=e.ctrlKey||e.metaKey
break
case 39:(e.ctrlKey||e.metaKey)&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._adjustDate(e.target,r?-1:1,"D")
n=e.ctrlKey||e.metaKey
e.originalEvent.altKey&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._adjustDate(e.target,e.ctrlKey?+jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"stepBigMonths"):+jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"stepMonths"),"M")
break
case 40:(e.ctrlKey||e.metaKey)&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._adjustDate(e.target,7,"D")
n=e.ctrlKey||e.metaKey
break
default:n=false}else 36==e.keyCode&&e.ctrlKey?jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._showDatepicker(this):n=false
if(n){e.preventDefault()
e.stopPropagation()}},_doKeyPress:function(e){var t=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getInst(e.target)
if(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"constrainInput")){var n=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._possibleChars(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"dateFormat"))
var r=String.fromCharCode(void 0==e.charCode?e.keyCode:e.charCode)
return e.ctrlKey||e.metaKey||r<" "||!n||n.indexOf(r)>-1}},_doKeyUp:function(e){var t=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getInst(e.target)
if(t.input.val()!=t.lastVal)try{var n=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.parseDate(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getFormatConfig(t))
if(n){jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._setDateFromField(t)
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._updateAlternate(t)
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._updateDatepicker(t)}}catch(e){jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.log(e)}return true},_showDatepicker:function(e){e=e.target||e
"input"!=e.nodeName.toLowerCase()&&(e=jquery__WEBPACK_IMPORTED_MODULE_0___default()("input",e.parentNode)[0])
if(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._isDisabledDatepicker(e)||jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._lastInput==e)return
var t=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getInst(e)
if(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._curInst&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._curInst!=t){jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._curInst.dpDiv.stop(true,true)
t&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._datepickerShowing&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._hideDatepicker(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._curInst.input[0])}var n=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"beforeShow")
var r=n?n.apply(e,[e,t]):{}
if(false===r)return
extendRemove(t.settings,r)
t.lastVal=null
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._lastInput=e
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._setDateFromField(t)
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._inDialog&&(e.value="")
if(!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._pos){jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._pos=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._findPos(e)
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._pos[1]+=e.offsetHeight}var a=false
jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).parents().each(function(){a|="fixed"==jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("position")
return!a})
var i={left:jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._pos[0],top:jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._pos[1]}
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._pos=null
t.dpDiv.empty()
t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"})
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._updateDatepicker(t)
i=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._checkOffset(t,i,a)
t.dpDiv.css({position:jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._inDialog&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.blockUI?"static":a?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"})
if(!t.inline){var o=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"showAnim")
var s=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"duration")
var u=function(){var e=t.dpDiv.find("iframe.ui-datepicker-cover")
if(!!e.length){var n=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getBorders(t.dpDiv)
e.css({left:-n[0],top:-n[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}}
t.dpDiv.zIndex(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).zIndex()+1)
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._datepickerShowing=true
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.effects&&(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.effects.effect[o]||jquery__WEBPACK_IMPORTED_MODULE_0___default.a.effects[o])?t.dpDiv.show(o,jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"showOptions"),s,u):t.dpDiv[o||"show"](o?s:null,u)
o&&s||u()
t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus()
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._curInst=t}},_updateDatepicker:function(e){this.maxRows=4
var t=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getBorders(e.dpDiv)
instActive=e
e.dpDiv.empty().append(this._generateHTML(e))
this._attachHandlers(e)
var n=e.dpDiv.find("iframe.ui-datepicker-cover")
!n.length||n.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()})
e.dpDiv.find("."+this._dayOverClass+" a").mouseover()
var r=this._getNumberOfMonths(e)
var a=r[1]
var i=17
e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("")
a>1&&e.dpDiv.addClass("ui-datepicker-multi-"+a).css("width",i*a+"em")
e.dpDiv[(1!=r[0]||1!=r[1]?"add":"remove")+"Class"]("ui-datepicker-multi")
e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl")
e==jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._curInst&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus()
if(e.yearshtml){var o=e.yearshtml
setTimeout(function(){o===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml)
o=e.yearshtml=null},0)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e}
return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(e,t,n){var r=e.dpDiv.outerWidth()
var a=e.dpDiv.outerHeight()
var i=e.input?e.input.outerWidth():0
var o=e.input?e.input.outerHeight():0
var s=document.documentElement.clientWidth+jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollLeft()
var u=document.documentElement.clientHeight+jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop()
t.left-=this._get(e,"isRTL")?r-i:0
t.left-=n&&t.left==e.input.offset().left?jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollLeft():0
t.top-=n&&t.top==e.input.offset().top+o?jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop():0
t.left-=Math.min(t.left,t.left+r>s&&s>r?Math.abs(t.left+r-s):0)
t.top-=Math.min(t.top,t.top+a>u&&u>a?Math.abs(a+o):0)
return t},_findPos:function(e){var t=this._getInst(e)
var n=this._get(t,"isRTL")
while(e&&("hidden"==e.type||1!=e.nodeType||jquery__WEBPACK_IMPORTED_MODULE_0___default.a.expr.filters.hidden(e)))e=e[n?"previousSibling":"nextSibling"]
var r=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).offset()
return[r.left,r.top]},_hideDatepicker:function(e){var t=this._curInst
if(!t||e&&t!=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(e,PROP_NAME))return
if(this._datepickerShowing){var n=this._get(t,"showAnim")
var r=this._get(t,"duration")
var a=function(){jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._tidyDialog(t)}
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.effects&&(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.effects.effect[n]||jquery__WEBPACK_IMPORTED_MODULE_0___default.a.effects[n])?t.dpDiv.hide(n,jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(t,"showOptions"),r,a):t.dpDiv["slideDown"==n?"slideUp":"fadeIn"==n?"fadeOut":"hide"](n?r:null,a)
n||a()
this._datepickerShowing=false
var i=this._get(t,"onClose")
i&&i.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t])
this._lastInput=null
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"})
if(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.blockUI){jquery__WEBPACK_IMPORTED_MODULE_0___default.a.unblockUI()
jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._curInst)return
var t=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target),n=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getInst(t[0]);(t[0].id!=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._mainDivId&&0==t.parents("#"+jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._mainDivId).length&&!t.hasClass(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.markerClassName)&&!t.closest("."+jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._triggerClass).length&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._datepickerShowing&&!(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._inDialog&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.blockUI)||t.hasClass(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.markerClassName)&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._curInst!=n)&&jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._hideDatepicker()},_adjustDate:function(e,t,n){var r=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
var a=this._getInst(r[0])
if(this._isDisabledDatepicker(r[0]))return
this._adjustInstDate(a,t+("M"==n?this._get(a,"showCurrentAtPos"):0),n)
this._updateDatepicker(a)},_gotoToday:function(e){var t=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
var n=this._getInst(t[0])
if(this._get(n,"gotoCurrent")&&n.currentDay){n.selectedDay=n.currentDay
n.drawMonth=n.selectedMonth=n.currentMonth
n.drawYear=n.selectedYear=n.currentYear}else{var r=new Date
n.selectedDay=r.getDate()
n.drawMonth=n.selectedMonth=r.getMonth()
n.drawYear=n.selectedYear=r.getFullYear()}this._notifyChange(n)
this._adjustDate(t)},_selectMonthYear:function(e,t,n){var r=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
var a=this._getInst(r[0])
a["selected"+("M"==n?"Month":"Year")]=a["draw"+("M"==n?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10)
this._notifyChange(a)
this._adjustDate(r)},_selectDay:function(e,t,n,r){var a=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0]))return
var i=this._getInst(a[0])
i.selectedDay=i.currentDay=jquery__WEBPACK_IMPORTED_MODULE_0___default()("a",r).html()
i.selectedMonth=i.currentMonth=t
i.selectedYear=i.currentYear=n
this._selectDate(e,this._formatDate(i,i.currentDay,i.currentMonth,i.currentYear))},_clearDate:function(e){var t=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
this._getInst(t[0])
this._selectDate(t,"")},_selectDate:function(e,t){var n=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
var r=this._getInst(n[0])
t=null!=t?t:this._formatDate(r)
r.input&&r.input.val(t)
this._updateAlternate(r)
var a=this._get(r,"onSelect")
a?a.apply(r.input?r.input[0]:null,[t,r]):r.input&&r.input.trigger("change")
if(r.inline)this._updateDatepicker(r)
else{this._hideDatepicker()
this._lastInput=r.input[0]
"object"!=typeof r.input[0]&&r.input.focus()
this._lastInput=null}},_updateAlternate:function(e){var t=this._get(e,"altField")
if(t){var n=this._get(e,"altFormat")||this._get(e,"dateFormat")
var r=this._getDate(e)
var a=this.formatDate(n,r,this._getFormatConfig(e))
jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).each(function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(a)})}},noWeekends:function(e){var t=e.getDay()
return[t>0&&t<6,""]},iso8601Week:function(e){var t=new Date(e.getTime())
t.setDate(t.getDate()+4-(t.getDay()||7))
var n=t.getTime()
t.setMonth(0)
t.setDate(1)
return Math.floor(Math.round((n-t)/864e5)/7)+1},parseDate:function(e,t,n){if(null==e||null==t)throw"Invalid arguments"
t="object"==typeof t?t.toString():t+""
if(""==t)return null
var r=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff
r="string"!=typeof r?r:(new Date).getFullYear()%100+parseInt(r,10)
var a=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort
var i=(n?n.dayNames:null)||this._defaults.dayNames
var o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort
var s=(n?n.monthNames:null)||this._defaults.monthNames
var u=-1
var l=-1
var c=-1
var d=-1
var f=false
var h=function(t){var n=y+1<e.length&&e.charAt(y+1)==t
n&&y++
return n}
var m=function(e){var n=h(e)
var r="@"==e?14:"!"==e?20:"y"==e&&n?4:"o"==e?3:2
var a=new RegExp("^\\d{1,"+r+"}")
var i=t.substring(g).match(a)
if(!i)throw"Missing number at position "+g
g+=i[0].length
return parseInt(i[0],10)}
var p=function(e,n,r){var a=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.map(h(e)?r:n,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)})
var i=-1
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(a,function(e,n){var r=n[1]
if(t.substr(g,r.length).toLowerCase()==r.toLowerCase()){i=n[0]
g+=r.length
return false}})
if(-1!=i)return i+1
throw"Unknown name at position "+g}
var _=function(){if(t.charAt(g)!=e.charAt(y))throw"Unexpected literal at position "+g
g++}
var g=0
for(var y=0;y<e.length;y++)if(f)"'"!=e.charAt(y)||h("'")?_():f=false
else switch(e.charAt(y)){case"d":c=m("d")
break
case"D":p("D",a,i)
break
case"o":d=m("o")
break
case"m":l=m("m")
break
case"M":l=p("M",o,s)
break
case"y":u=m("y")
break
case"@":var v=new Date(m("@"))
u=v.getFullYear()
l=v.getMonth()+1
c=v.getDate()
break
case"!":v=new Date((m("!")-this._ticksTo1970)/1e4)
u=v.getFullYear()
l=v.getMonth()+1
c=v.getDate()
break
case"'":h("'")?_():f=true
break
default:_()}if(g<t.length){var b=t.substr(g)
if(!/^\s+/.test(b))throw"Extra/unparsed characters found in date: "+b}-1==u?u=(new Date).getFullYear():u<100&&(u+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u<=r?0:-100))
if(d>-1){l=1
c=d
do{var w=this._getDaysInMonth(u,l-1)
if(c<=w)break
l++
c-=w}while(true)}v=this._daylightSavingAdjust(new Date(u,l-1,c))
if(v.getFullYear()!=u||v.getMonth()+1!=l||v.getDate()!=c)throw"Invalid date"
return v},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(e,t,n){if(!t)return""
var r=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort
var a=(n?n.dayNames:null)||this._defaults.dayNames
var i=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort
var o=(n?n.monthNames:null)||this._defaults.monthNames
var s=function(t){var n=f+1<e.length&&e.charAt(f+1)==t
n&&f++
return n}
var u=function(e,t,n){var r=""+t
if(s(e))while(r.length<n)r="0"+r
return r}
var l=function(e,t,n,r){return s(e)?r[t]:n[t]}
var c=""
var d=false
if(t)for(var f=0;f<e.length;f++)if(d)"'"!=e.charAt(f)||s("'")?c+=e.charAt(f):d=false
else switch(e.charAt(f)){case"d":c+=u("d",t.getDate(),2)
break
case"D":c+=l("D",t.getDay(),r,a)
break
case"o":c+=u("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3)
break
case"m":c+=u("m",t.getMonth()+1,2)
break
case"M":c+=l("M",t.getMonth(),i,o)
break
case"y":c+=s("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100
break
case"@":c+=t.getTime()
break
case"!":c+=1e4*t.getTime()+this._ticksTo1970
break
case"'":s("'")?c+="'":d=true
break
default:c+=e.charAt(f)}return c},_possibleChars:function(e){var t=""
var n=false
var r=function(t){var n=a+1<e.length&&e.charAt(a+1)==t
n&&a++
return n}
for(var a=0;a<e.length;a++)if(n)"'"!=e.charAt(a)||r("'")?t+=e.charAt(a):n=false
else switch(e.charAt(a)){case"d":case"m":case"y":case"@":t+="0123456789"
break
case"D":case"M":return null
case"'":r("'")?t+="'":n=true
break
default:t+=e.charAt(a)}return t},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()==e.lastVal)return
var n=this._get(e,"dateFormat")
var r=e.lastVal=e.input?e.input.val():null
var a,i
a=i=this._getDefaultDate(e)
var o=this._getFormatConfig(e)
try{a=this.parseDate(n,r,o)||i}catch(e){this.log(e)
r=t?"":r}e.selectedDay=a.getDate()
e.drawMonth=e.selectedMonth=a.getMonth()
e.drawYear=e.selectedYear=a.getFullYear()
e.currentDay=r?a.getDate():0
e.currentMonth=r?a.getMonth():0
e.currentYear=r?a.getFullYear():0
this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(e,t,n){var r=function(e){var t=new Date
t.setDate(t.getDate()+e)
return t}
var a=function(t){try{return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.parseDate(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._get(e,"dateFormat"),t,jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getFormatConfig(e))}catch(e){}var n=(t.toLowerCase().match(/^c/)?jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getDate(e):null)||new Date
var r=n.getFullYear()
var a=n.getMonth()
var i=n.getDate()
var o=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g
var s=o.exec(t)
while(s){switch(s[2]||"d"){case"d":case"D":i+=parseInt(s[1],10)
break
case"w":case"W":i+=7*parseInt(s[1],10)
break
case"m":case"M":a+=parseInt(s[1],10)
i=Math.min(i,jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getDaysInMonth(r,a))
break
case"y":case"Y":r+=parseInt(s[1],10)
i=Math.min(i,jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._getDaysInMonth(r,a))}s=o.exec(t)}return new Date(r,a,i)}
var i=null==t||""===t?n:"string"==typeof t?a(t):"number"==typeof t?isNaN(t)?n:r(t):new Date(t.getTime())
i=i&&"Invalid Date"==i.toString()?n:i
if(i){i.setHours(0)
i.setMinutes(0)
i.setSeconds(0)
i.setMilliseconds(0)}return this._daylightSavingAdjust(i)},_daylightSavingAdjust:function(e){if(!e)return null
e.setHours(e.getHours()>12?e.getHours()+2:0)
return e},_setDate:function(e,t,n){var r=!t
var a=e.selectedMonth
var i=e.selectedYear
var o=this._restrictMinMax(e,this._determineDate(e,t,new Date))
e.selectedDay=e.currentDay=o.getDate()
e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth()
e.drawYear=e.selectedYear=e.currentYear=o.getFullYear()
a==e.selectedMonth&&i==e.selectedYear||n||this._notifyChange(e)
this._adjustInstDate(e)
e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""==e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay))
return t},_attachHandlers:function(e){var t=this._get(e,"stepMonths")
var n="#"+e.id
e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,-t,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,+t,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(n)},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this)
return false},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"M")
return false},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"Y")
return false}}
jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t=new Date
t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()))
var n=this._get(e,"isRTL")
var r=this._get(e,"showButtonPanel")
var a=this._get(e,"hideIfNoPrevNext")
var i=this._get(e,"navigationAsDateFormat")
var o=this._getNumberOfMonths(e)
var s=this._get(e,"showCurrentAtPos")
var u=this._get(e,"stepMonths")
var l=1!=o[0]||1!=o[1]
var c=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9))
var d=this._getMinMaxDate(e,"min")
var f=this._getMinMaxDate(e,"max")
var h=e.drawMonth-s
var m=e.drawYear
if(h<0){h+=12
m--}if(f){var p=this._daylightSavingAdjust(new Date(f.getFullYear(),f.getMonth()-o[0]*o[1]+1,f.getDate()))
p=d&&p<d?d:p
while(this._daylightSavingAdjust(new Date(m,h,1))>p){h--
if(h<0){h=11
m--}}}e.drawMonth=h
e.drawYear=m
var _=this._get(e,"prevText")
_=i?this.formatDate(_,this._daylightSavingAdjust(new Date(m,h-u,1)),this._getFormatConfig(e)):_
var g=this._canAdjustMonth(e,-1,m,h)?'<span class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+_+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+_+"</span></span>":a?"":'<span class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+_+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+_+"</span></span>"
var y=this._get(e,"nextText")
y=i?this.formatDate(y,this._daylightSavingAdjust(new Date(m,h+u,1)),this._getFormatConfig(e)):y
var v=this._canAdjustMonth(e,1,m,h)?'<span class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></span>":a?"":'<span class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></span>"
var b=this._get(e,"currentText")
var w=this._get(e,"gotoCurrent")&&e.currentDay?c:t
b=i?this.formatDate(b,w,this._getFormatConfig(e)):b
var k=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>"
var x=r?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(n?k:"")+(this._isInRange(e,w)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+b+"</button>":"")+(n?"":k)+"</div>":""
var M=parseInt(this._get(e,"firstDay"),10)
M=isNaN(M)?0:M
var T=this._get(e,"showWeek")
var D=this._get(e,"dayNames")
this._get(e,"dayNamesShort")
var E=this._get(e,"dayNamesMin")
var S=this._get(e,"monthNames")
var C=this._get(e,"monthNamesShort")
var P=this._get(e,"beforeShowDay")
var O=this._get(e,"showOtherMonths")
var j=this._get(e,"selectOtherMonths")
this._get(e,"calculateWeek")||this.iso8601Week
var A=this._getDefaultDate(e)
var N=""
for(var z=0;z<o[0];z++){var I=""
this.maxRows=4
for(var L=0;L<o[1];L++){var B=this._daylightSavingAdjust(new Date(m,h,e.selectedDay))
var R=" ui-corner-all"
var F=""
if(l){F+='<div class="ui-datepicker-group'
if(o[1]>1)switch(L){case 0:F+=" ui-datepicker-group-first"
R=" ui-corner-"+(n?"right":"left")
break
case o[1]-1:F+=" ui-datepicker-group-last"
R=" ui-corner-"+(n?"left":"right")
break
default:F+=" ui-datepicker-group-middle"
R=""}F+='">'}F+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+R+'">'+(/all|left/.test(R)&&0==z?n?v:g:"")+(/all|right/.test(R)&&0==z?n?g:v:"")+this._generateMonthYearHeader(e,h,m,d,f,z>0||L>0,S,C)+'</div><table class="ui-datepicker-calendar"><thead><tr>'
var Y=T?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":""
for(var q=0;q<7;q++){var H=(q+M)%7
Y+="<th"+((q+M+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+D[H]+'">'+E[H]+"</span></th>"}F+=Y+"</tr></thead><tbody>"
var U=this._getDaysInMonth(m,h)
m==e.selectedYear&&h==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,U))
var W=(this._getFirstDayOfMonth(m,h)-M+7)%7
var K=Math.ceil((W+U)/7)
var V=l&&this.maxRows>K?this.maxRows:K
this.maxRows=V
var $=this._daylightSavingAdjust(new Date(m,h,1-W))
for(var G=0;G<V;G++){F+="<tr>"
var J=T?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")($)+"</td>":""
for(q=0;q<7;q++){var Q=P?P.apply(e.input?e.input[0]:null,[$]):[true,""]
var X=$.getMonth()!=h
var Z=X&&!j||!Q[0]||d&&$<d||f&&$>f
J+='<td class="'+((q+M+6)%7>=5?" ui-datepicker-week-end":"")+(X?" ui-datepicker-other-month":"")+($.getTime()==B.getTime()&&h==e.selectedMonth&&e._keyEvent||A.getTime()==$.getTime()&&A.getTime()==B.getTime()?" "+this._dayOverClass:"")+(Z?" "+this._unselectableClass+" ui-state-disabled":"")+(X&&!O?"":" "+Q[1]+($.getTime()==c.getTime()?" "+this._currentClass:"")+($.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+(X&&!O||!Q[2]?"":' title="'+Q[2]+'"')+(Z?"":' data-handler="selectDay" data-event="click" data-month="'+$.getMonth()+'" data-year="'+$.getFullYear()+'"')+">"+(X&&!O?"&#xa0;":Z?'<span class="ui-state-default">'+$.getDate()+"</span>":'<a class="ui-state-default'+($.getTime()==t.getTime()?" ui-state-highlight":"")+($.getTime()==c.getTime()?" ui-state-active":"")+(X?" ui-priority-secondary":"")+'" href="#">'+$.getDate()+"</a>")+"</td>"
$.setDate($.getDate()+1)
$=this._daylightSavingAdjust($)}F+=J+"</tr>"}h++
if(h>11){h=0
m++}F+="</tbody></table>"+(l?"</div>"+(o[0]>0&&L==o[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"")
I+=F}N+=I}N+=x+(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.browser.msie&&parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.browser.version,10)<7&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"")
e._keyEvent=false
return N},_generateMonthYearHeader:function(e,t,n,r,a,i,o,s){var u=this._get(e,"changeMonth")
var l=this._get(e,"changeYear")
var c=this._get(e,"showMonthAfterYear")
var d='<div class="ui-datepicker-title">'
var f=""
if(i||!u)f+='<span class="ui-datepicker-month">'+o[t]+"</span>"
else{var h=r&&r.getFullYear()==n
var m=a&&a.getFullYear()==n
f+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">'
for(var p=0;p<12;p++)(!h||p>=r.getMonth())&&(!m||p<=a.getMonth())&&(f+='<option value="'+p+'"'+(p==t?' selected="selected"':"")+">"+s[p]+"</option>")
f+="</select>"}c||(d+=f+(i||!(u&&l)?"&#xa0;":""))
if(!e.yearshtml){e.yearshtml=""
if(i||!l)d+='<span class="ui-datepicker-year">'+n+"</span>"
else{var _=this._get(e,"yearRange").split(":")
var g=(new Date).getFullYear()
var y=function(e){var t=e.match(/c[+-].*/)?n+parseInt(e.substring(1),10):e.match(/[+-].*/)?g+parseInt(e,10):parseInt(e,10)
return isNaN(t)?g:t}
var v=y(_[0])
var b=Math.max(v,y(_[1]||""))
v=r?Math.max(v,r.getFullYear()):v
b=a?Math.min(b,a.getFullYear()):b
e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'
for(;v<=b;v++)e.yearshtml+='<option value="'+v+'"'+(v==n?' selected="selected"':"")+">"+v+"</option>"
e.yearshtml+="</select>"
d+=e.yearshtml
e.yearshtml=null}}d+=this._get(e,"yearSuffix")
c&&(d+=(i||!(u&&l)?"&#xa0;":"")+f)
d+="</div>"
return d},_adjustInstDate:function(e,t,n){var r=e.drawYear+("Y"==n?t:0)
var a=e.drawMonth+("M"==n?t:0)
var i=Math.min(e.selectedDay,this._getDaysInMonth(r,a))+("D"==n?t:0)
var o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,a,i)))
e.selectedDay=o.getDate()
e.drawMonth=e.selectedMonth=o.getMonth()
e.drawYear=e.selectedYear=o.getFullYear()
"M"!=n&&"Y"!=n||this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min")
var r=this._getMinMaxDate(e,"max")
var a=n&&t<n?n:t
a=r&&a>r?r:a
return a},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear")
t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths")
return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,n,r){var a=this._getNumberOfMonths(e)
var i=this._daylightSavingAdjust(new Date(n,r+(t<0?t:a[0]*a[1]),1))
t<0&&i.setDate(this._getDaysInMonth(i.getFullYear(),i.getMonth()))
return this._isInRange(e,i)},_isInRange:function(e,t){var n=this._getMinMaxDate(e,"min")
var r=this._getMinMaxDate(e,"max")
return(!n||t.getTime()>=n.getTime())&&(!r||t.getTime()<=r.getTime())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff")
t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10)
return{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){if(!t){e.currentDay=e.selectedDay
e.currentMonth=e.selectedMonth
e.currentYear=e.selectedYear}var a=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay))
return this.formatDate(this._get(e,"dateFormat"),a,this._getFormatConfig(e))}})
function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"
return e.delegate(t,"mouseout",function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("ui-state-hover");-1!=this.className.indexOf("ui-datepicker-prev")&&jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("ui-datepicker-prev-hover");-1!=this.className.indexOf("ui-datepicker-next")&&jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("ui-datepicker-next-hover")}).delegate(t,"mouseover",function(){if(!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover")
jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("ui-state-hover");-1!=this.className.indexOf("ui-datepicker-prev")&&jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("ui-datepicker-prev-hover");-1!=this.className.indexOf("ui-datepicker-next")&&jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("ui-datepicker-next-hover")}})}function extendRemove(e,t){jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(e,t)
for(var n in t)null!=t[n]&&void 0!=t[n]||(e[n]=t[n])
return e}jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.datepicker=function(e){if(!this.length)return this
if(!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.initialized){jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).mousedown(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._checkExternalClick).find("body").append(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.dpDiv)
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.initialized=true}var t=Array.prototype.slice.call(arguments,1)
if("string"==typeof e&&("isDisabled"==e||"getDate"==e||"widget"==e))return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker["_"+e+"Datepicker"].apply(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker,[this[0]].concat(t))
if("option"==e&&2==arguments.length&&"string"==typeof arguments[1])return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker["_"+e+"Datepicker"].apply(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker,[this[0]].concat(t))
return this.each(function(){"string"==typeof e?jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker["_"+e+"Datepicker"].apply(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker,[this].concat(t)):jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker._attachDatepicker(this,e)})}
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker=new Datepicker
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.initialized=false
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.uuid=(new Date).getTime()
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.datepicker.version="@VERSION"
window["DP_jQuery_"+dpuuid]=jquery__WEBPACK_IMPORTED_MODULE_0___default.a},sxOR:function(e,t,n){"use strict"
var r=String.prototype.replace
var a=/%20/g
e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,a,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},tQ2B:function(e,t,n){"use strict"
var r=n("xTJ+")
var a=n("Rn+g")
var i=n("MLWZ")
var o=n("w0Vi")
var s=n("OTTw")
var u=n("LYNF")
var l="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n("n6bm")
e.exports=function(e){return new Promise(function(t,c){var d=e.data
var f=e.headers
r.isFormData(d)&&delete f["Content-Type"]
var h=new XMLHttpRequest
var m="onreadystatechange"
var p=false
if("undefined"!==typeof window&&window.XDomainRequest&&!("withCredentials"in h)&&!s(e.url)){h=new window.XDomainRequest
m="onload"
p=true
h.onprogress=function(){}
h.ontimeout=function(){}}if(e.auth){var _=e.auth.username||""
var g=e.auth.password||""
f.Authorization="Basic "+l(_+":"+g)}h.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),true)
h.timeout=e.timeout
h[m]=function(){if(!h||4!==h.readyState&&!p)return
if(0===h.status&&!(h.responseURL&&0===h.responseURL.indexOf("file:")))return
var n="getAllResponseHeaders"in h?o(h.getAllResponseHeaders()):null
var r=e.responseType&&"text"!==e.responseType?h.response:h.responseText
var i={data:r,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:n,config:e,request:h}
a(t,c,i)
h=null}
h.onerror=function(){c(u("Network Error",e,null,h))
h=null}
h.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",h))
h=null}
if(r.isStandardBrowserEnv()){var y=n("eqyj")
var v=(e.withCredentials||s(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0
v&&(f[e.xsrfHeaderName]=v)}"setRequestHeader"in h&&r.forEach(f,function(e,t){"undefined"===typeof d&&"content-type"===t.toLowerCase()?delete f[t]:h.setRequestHeader(t,e)})
e.withCredentials&&(h.withCredentials=true)
if(e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress)
"function"===typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress)
e.cancelToken&&e.cancelToken.promise.then(function(e){if(!h)return
h.abort()
c(e)
h=null})
void 0===d&&(d=null)
h.send(d)})}},u7Gu:function(module,__webpack_exports__,__webpack_require__){"use strict"
var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ouhR")
var jquery__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__)
var addClasses=true
function classifyIE(e){e=parseInt(e,10)
INST.browser["ie".concat(e)]=INST.browser.ie=true
INST.browser.version=e}"INST"in window||(window.INST={})
INST.browser={}
if(!INST.browser.ie){var userAgent=navigator.userAgent
var isIEGreaterThan10=/\([^\)]*Trident[^\)]*rv:([\d\.]+)/.exec(userAgent)
if(isIEGreaterThan10){"ScriptEngineMajorVersion"in window&&"function"===typeof ScriptEngineMajorVersion?classifyIE(ScriptEngineMajorVersion()):classifyIE(isIEGreaterThan10[1])
addClasses=false}else if(eval("/*@cc_on!@*/0")){classifyIE(10)
addClasses=false}}if(window.devicePixelRatio&&!INST.browser.ie){INST.browser.webkit=true
INST.browser["function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D"==escape(navigator.javaEnabled.toString())?"chrome":"safari"]=true}INST.browser.ff=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.browser.mozilla
INST.browser.touch="ontouchstart"in document
INST.browser["no-touch"]=!INST.browser.touch
if(addClasses){var classesToAdd=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.map(INST.browser,function(e,t){return true===e?t:void 0}).join(" ")
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass(classesToAdd)})}__webpack_exports__["a"]=INST},uTue:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=Object.freeze({xxxSmall:"0.125rem",xxSmall:"0.375rem",xSmall:"0.5rem",small:"0.75rem",medium:"1.5rem",large:"2.25rem",xLarge:"3rem",xxLarge:"3.75rem"})
t.default=r},ueiF:function(e,t,n){"use strict"
n.r(t)
var r=n("ouhR")
var a=n.n(r)
var i=n("q1z7")
var o=n.n(i)
var s=n("GLiE")
var u=n.n(s)
var l=n("5Ky4")
var c=n("5iuq")
var d=function(e,t){return function(){return e.apply(t,arguments)}},f=function(e,t){for(var n in t)h.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},h={}.hasOwnProperty,m=[].slice
o.a.View=function(e){f(t,e)
function t(){this.renderView=d(this.renderView,this)
this.createBindings=d(this.createBindings,this)
this.render=d(this.render,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={}
t.prototype.els=null
t.optionProperty=function(e){return this.__optionProperties__=(this.__optionProperties__||[]).concat([e])}
t.optionProperty("template")
t.child=function(e,t){this.optionProperty(e)
null==this.__childViews__&&(this.__childViews__=[])
return this.__childViews__=this.__childViews__.concat([{name:e,selector:t}])}
t.prototype.initialize=function(e){var t,n,r,a
this.options=u.a.extend({},this.defaults,e)
this.setOptionProperties()
this.storeChildrenViews()
this.$el.data("view",this)
this._setViewProperties()
if(this.__initialize__){a=this.__initialize__
for(n=0,r=a.length;n<r;n++){t=a[n]
t.call(this)}}this.attach()
return this}
t.prototype.storeChildrenViews=function(){if(!this.constructor.__childViews__)return
return this.children=u.a.map(this.constructor.__childViews__,(e=this,function(t){return e[t.name]}))
var e}
t.prototype.setOptionProperties=function(){var e,t,n,r,a
r=this.constructor.__optionProperties__
a=[]
for(e=0,t=r.length;e<t;e++){n=r[e]
void 0!==this.options[n]?a.push(this[n]=this.options[n]):a.push(void 0)}return a}
t.prototype.render=function(){this.renderEl()
this._afterRender()
return this}
t.prototype.renderEl=function(){if(this.template)return this.$el.html(this.template(this.toJSON()))}
t.prototype.cacheEls=function(){var e,t,n,r
if(this.els){t=this.els
n=[]
for(r in t){e=t[r]
n.push(this[e]=this.$(r))}return n}}
t.prototype._afterRender=function(){this.cacheEls()
this.createBindings()
this.options.views&&this.renderViews()
this.renderChildViews()
return this.afterRender()}
t.prototype.afterRender=function(){var e,t,n,r,a
if(this.__afterRender__){r=this.__afterRender__
a=[]
for(t=0,n=r.length;t<n;t++){e=r[t]
a.push(e.call(this))}return a}}
t.prototype.attach=function(){var e,t,n,r,a
if(this.__attach__){r=this.__attach__
a=[]
for(t=0,n=r.length;t<n;t++){e=r[t]
a.push(e.call(this))}return a}}
t.prototype.toJSON=function(){var e,t
t=this.model||this.collection
e=t?t.present?t.present():t.toJSON():this.options
e.cid=this.cid
null!=window.ENV&&(e.ENV=window.ENV)
return e}
t.prototype.renderChildViews=function(){var e,t,n,r,a,i,o
if(!this.constructor.__childViews__)return
r=this.constructor.__childViews__
for(e=0,t=r.length;e<t;e++){a=r[e],n=a.name,i=a.selector
null==this[n]&&"undefined"!==typeof console&&null!==console&&"function"===typeof console.warn&&console.warn("I need a child view '"+n+"' but one was not provided")
if(!this[n])continue
o=this.$(i)
this[n].setElement(o)
this[n].render()}return null}
t.prototype.createBindings=function(e,t){return this.$("[data-bind]").each((n=this,function(e,t){var r,i
r=a()(t)
i=r.data("bind")
return n.model.on("change:"+i,function(e,t){return r.html(n.format(i,t))})}))
var n}
t.prototype.format=function(e,t){return Object(l["a"])(t)}
t.prototype.stopPropagation=function(e){return e.stopPropagation()}
t.mixin=function(){var e
e=1<=arguments.length?m.call(arguments,0):[]
return c["a"].apply(null,[this].concat(m.call(e)))}
t.prototype.renderViews=function(){return u.a.each(this.options.views,this.renderView)}
t.prototype.renderView=function(e,t){var n
n=this.$("#"+t)
n.length||(n=this.$("."+t))
e.setElement(n)
e.render()
return null!=this[t]?this[t]:this[t]=e}
t.prototype.hide=function(){return this.$el.hide()}
t.prototype.show=function(){return this.$el.show()}
t.prototype.toggle=function(){return this.$el.toggle()}
t.prototype._setViewProperties=function(){if(false===this.setViewProperties)return
this.model&&(this.model.view=this)
this.collection&&(this.collection.view=this)}
return t}(o.a.View)
t["default"]=o.a.View},vAQ1:function(e,t){(function(){"use strict"
var t=[],n=3988292384
function r(){var e,r,a
for(r=0;r<256;r+=1){e=r
for(a=0;a<8;a+=1)1&e?e=n^e>>>1:e>>>=1
t[r]=e>>>0}}function a(e){return Array.prototype.map.call(e,function(e){return e.charCodeAt(0)})}function i(e){var t,r,a,i,o=-1
for(t=0,a=e.length;t<a;t+=1){i=255&(o^e[t])
for(r=0;r<8;r+=1)1===(1&i)?i=i>>>1^n:i>>>=1
o=o>>>8^i}return-1^o}function o(e,n){var r,a,i
if("undefined"===typeof o.crc||!n||!e){o.crc=-1
if(!e)return}r=o.crc
for(a=0,i=e.length;a<i;a+=1)r=r>>>8^t[255&(r^e[a])]
o.crc=r
return-1^r}r()
e.exports=function(e,t){e="string"===typeof e?a(e):e
var n=t?i(e):o(e)
return(n>>>0).toString(16)}
e.exports.direct=i
e.exports.table=o})()},vDqi:function(e,t,n){e.exports=n("zuR4")},vJmb:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=Object.freeze({inputHeightSmall:"1.75rem",inputHeightMedium:"2.375rem",inputHeightLarge:"3rem"})
t.default=r},vTtS:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=0,o=Array.prototype.slice,s=a.a.cleanData
a.a.cleanData=function(e){for(var t,n=0;null!=(t=e[n]);n++)try{a()(t).triggerHandler("remove")}catch(e){}s(e)}
a.a.widget=function(e,t,n){var r,i,o,s,u=e.split(".")[0]
e=e.split(".")[1]
r=u+"-"+e
if(!n){n=t
t=a.a.Widget}a.a.expr[":"][r]=function(e){return!!a.a.data(e,r)}
a.a[u]=a.a[u]||{}
i=a.a[u][e]
o=a.a[u][e]=function(e,t){if(!this._createWidget)return new o(e,t)
arguments.length&&this._createWidget(e,t)}
a.a.extend(o,i,{version:n.version,_proto:a.a.extend({},n),_childConstructors:[]})
s=new t
s.options=a.a.widget.extend({},s.options)
a.a.each(n,function(e,r){a.a.isFunction(r)&&(n[e]=(i=function(){return t.prototype[e].apply(this,arguments)},o=function(n){return t.prototype[e].apply(this,n)},function(){var e,t=this._super,n=this._superApply
this._super=i
this._superApply=o
e=r.apply(this,arguments)
this._super=t
this._superApply=n
return e}))
var i,o})
o.prototype=a.a.widget.extend(s,{widgetEventPrefix:e},n,{constructor:o,namespace:u,widgetName:e,widgetBaseClass:r,widgetFullName:r})
if(i){a.a.each(i._childConstructors,function(e,t){var n=t.prototype
a.a.widget(n.namespace+"."+n.widgetName,o,t._proto)})
delete i._childConstructors}else t._childConstructors.push(o)
a.a.widget.bridge(e,o)}
a.a.widget.extend=function(e){var t,n,r=o.call(arguments,1),i=0,s=r.length
for(;i<s;i++)for(t in r[i]){n=r[i][t]
r[i].hasOwnProperty(t)&&void 0!==n&&(e[t]=a.a.isPlainObject(n)?a.a.widget.extend({},e[t],n):n)}return e}
a.a.widget.bridge=function(e,t){var n=t.prototype.widgetFullName
a.a.fn[e]=function(r){var i="string"===typeof r,s=o.call(arguments,1),u=this
r=!i&&s.length?a.a.widget.extend.apply(null,[r].concat(s)):r
i?this.each(function(){var t,i=a.a.data(this,n)
if(!i)return a.a.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+r+"'")
if(!a.a.isFunction(i[r])||"_"===r.charAt(0))return a.a.error("no such method '"+r+"' for "+e+" widget instance")
t=i[r].apply(i,s)
if(t!==i&&void 0!==t){u=t&&t.jquery?u.pushStack(t.get()):t
return false}}):this.each(function(){var e=a.a.data(this,n)
e?e.option(r||{})._init():new t(r,this)})
return u}}
a.a.Widget=function(e,t){}
a.a.Widget._childConstructors=[]
a.a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(e,t){t=a()(t||this.defaultElement||this)[0]
this.element=a()(t)
this.uuid=i++
this.eventNamespace="."+this.widgetName+this.uuid
this.options=a.a.widget.extend({},this.options,this._getCreateOptions(),e)
this.bindings=a()()
this.hoverable=a()()
this.focusable=a()()
if(t!==this){a.a.data(t,this.widgetName,this)
a.a.data(t,this.widgetFullName,this)
this._on({remove:"destroy"})
this.document=a()(t.style?t.ownerDocument:t.document||t)
this.window=a()(this.document[0].defaultView||this.document[0].parentWindow)}this._create()
this._trigger("create",null,this._getCreateEventData())
this._init()},_getCreateOptions:a.a.noop,_getCreateEventData:a.a.noop,_create:a.a.noop,_init:a.a.noop,destroy:function(){this._destroy()
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.a.camelCase(this.widgetFullName))
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled")
this.bindings.unbind(this.eventNamespace)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")},_destroy:a.a.noop,widget:function(){return this.element},option:function(e,t){var n,r,i,o=e
if(0===arguments.length)return a.a.widget.extend({},this.options)
if("string"===typeof e){o={}
n=e.split(".")
e=n.shift()
if(n.length){r=o[e]=a.a.widget.extend({},this.options[e])
for(i=0;i<n.length-1;i++){r[n[i]]=r[n[i]]||{}
r=r[n[i]]}e=n.pop()
if(void 0===t)return void 0===r[e]?null:r[e]
r[e]=t}else{if(void 0===t)return void 0===this.options[e]?null:this.options[e]
o[e]=t}}this._setOptions(o)
return this},_setOptions:function(e){var t
for(t in e)this._setOption(t,e[t])
return this},_setOption:function(e,t){this.options[e]=t
if("disabled"===e){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(e,t){if(t){e=a()(e)
this.bindings=this.bindings.add(e)}else{t=e
e=this.element}var n=this
a.a.each(t,function(t,r){function i(){if(true===n.options.disabled||a()(this).hasClass("ui-state-disabled"))return
return("string"===typeof r?n[r]:r).apply(n,arguments)}"string"!==typeof r&&(i.guid=r.guid=r.guid||i.guid||a.a.guid++)
var o=t.match(/^(\w+)\s*(.*)$/),s=o[1]+n.eventNamespace,u=o[2]
u?n.widget().delegate(u,s,i):e.bind(s,i)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace
e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return("string"===typeof e?r[e]:e).apply(r,arguments)}var r=this
return setTimeout(n,t||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e)
this._on(e,{mouseenter:function(e){a()(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){a()(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e)
this._on(e,{focusin:function(e){a()(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){a()(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,t,n){var r,i,o=this.options[e]
n=n||{}
t=a.a.Event(t)
t.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase()
t.target=this.element[0]
i=t.originalEvent
if(i)for(r in i)r in t||(t[r]=i[r])
this.element.trigger(t,n)
return!(a.a.isFunction(o)&&false===o.apply(this.element[0],[t].concat(n))||t.isDefaultPrevented())}}
a.a.each({show:"fadeIn",hide:"fadeOut"},function(e,t){a.a.Widget.prototype["_"+e]=function(n,r,i){"string"===typeof r&&(r={effect:r})
var o,s=r?true===r||"number"===typeof r?t:r.effect||t:e
r=r||{}
"number"===typeof r&&(r={duration:r})
o=!a.a.isEmptyObject(r)
"object"===typeof r&&(r.complete=i)
r.delay&&n.delay(r.delay)
o&&a.a.effects&&(a.a.effects.effect[s]||false!==a.a.uiBackCompat&&a.a.effects[s])?n[e](r):s!==e&&n[s]?n[s](r.duration,r.easing,i):n.queue(function(t){a()(this)[e]()
i&&i.call(n[0])
t()})}})
false!==a.a.uiBackCompat&&(a.a.Widget.prototype._getCreateOptions=function(){return a.a.metadata&&a.a.metadata.get(this.element[0])[this.widgetName]})
a.a.widget.extend=function(e){var t,n,r=Array.prototype.slice.call(arguments,1),i=0,o=r.length
for(;i<o;i++)for(t in r[i]){n=r[i][t]
r[i].hasOwnProperty(t)&&void 0!==n&&(e[t]=a.a.isPlainObject(n)&&a.a.isPlainObject(e[t])?a.a.widget.extend({},e[t],n):n)}return e}
a.a},viRO:function(e,t,n){"use strict"
var r=n("MgzW"),a="function"===typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,c=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.concurrent_mode"):60111,h=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,p=a?Symbol.for("react.memo"):60115,_=a?Symbol.for("react.lazy"):60116,g="function"===typeof Symbol&&Symbol.iterator
function y(e,t,n,r,a,i,o,s){if(!e){e=void 0
if(void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var u=[n,r,a,i,o,s],l=0
e=Error(t.replace(/%s/g,function(){return u[l++]}))
e.name="Invariant Violation"}e.framesToPop=1
throw e}}function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1])
y(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={}
function k(e,t,n){this.props=e
this.context=t
this.refs=w
this.updater=n||b}k.prototype.isReactComponent={}
k.prototype.setState=function(e,t){"object"!==typeof e&&"function"!==typeof e&&null!=e&&v("85")
this.updater.enqueueSetState(this,e,t,"setState")}
k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")}
function x(){}x.prototype=k.prototype
function M(e,t,n){this.props=e
this.context=t
this.refs=w
this.updater=n||b}var T=M.prototype=new x
T.constructor=M
r(T,k.prototype)
T.isPureReactComponent=!0
var D={current:null},E={current:null},S=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0}
function P(e,t,n){var r=void 0,a={},o=null,s=null
if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&!C.hasOwnProperty(r)&&(a[r]=t[r])
var u=arguments.length-2
if(1===u)a.children=n
else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2]
a.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)void 0===a[r]&&(a[r]=u[r])
return{$$typeof:i,type:e,key:o,ref:s,props:a,_owner:E.current}}function O(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}function A(e){var t={"=":"=0",":":"=2"}
return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}var N=/\/+/g,z=[]
function I(e,t,n,r){if(z.length){var a=z.pop()
a.result=e
a.keyPrefix=t
a.func=n
a.context=r
a.count=0
return a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null
e.keyPrefix=null
e.func=null
e.context=null
e.count=0
10>z.length&&z.push(e)}function B(e,t,n,r){var a=typeof e
"undefined"!==a&&"boolean"!==a||(e=null)
var s=!1
if(null===e)s=!0
else switch(a){case"string":case"number":s=!0
break
case"object":switch(e.$$typeof){case i:case o:s=!0}}if(s)return n(r,e,""===t?"."+F(e,0):t),1
s=0
t=""===t?".":t+":"
if(Array.isArray(e))for(var u=0;u<e.length;u++){a=e[u]
var l=t+F(a,u)
s+=B(a,l,n,r)}else if(null===e||"object"!==typeof e?l=null:(l=g&&e[g]||e["@@iterator"],l="function"===typeof l?l:null),"function"===typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)a=a.value,l=t+F(a,u++),s+=B(a,l,n,r)
else"object"===a&&(n=""+e,v("31","[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""))
return s}function R(e,t,n){return null==e?0:B(e,"",t,n)}function F(e,t){return"object"===typeof e&&null!==e&&null!=e.key?A(e.key):t.toString(36)}function Y(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,a=e.keyPrefix
e=e.func.call(e.context,t,e.count++)
Array.isArray(e)?H(e,r,n,function(e){return e}):null!=e&&(j(e)&&(e=O(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function H(e,t,n,r,a){var i=""
null!=n&&(i=(""+n).replace(N,"$&/")+"/")
t=I(t,i,r,a)
R(e,q,t)
L(t)}function U(){var e=D.current
null===e&&v("321")
return e}var W={Children:{map:function(e,t,n){if(null==e)return e
var r=[]
H(e,r,null,t,n)
return r},forEach:function(e,t,n){if(null==e)return e
t=I(null,null,t,n)
R(e,Y,t)
L(t)},count:function(e){return R(e,function(){return null},null)},toArray:function(e){var t=[]
H(e,t,null,function(e){return e})
return t},only:function(e){j(e)||v("143")
return e}},createRef:function(){return{current:null}},Component:k,PureComponent:M,createContext:function(e,t){void 0===t&&(t=null)
e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}
e.Provider={$$typeof:c,_context:e}
return e.Consumer=e},forwardRef:function(e){return{$$typeof:h,render:e}},lazy:function(e){return{$$typeof:_,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:s,StrictMode:u,Suspense:m,createElement:P,cloneElement:function(e,t,n){(null===e||void 0===e)&&v("267",e)
var a=void 0,o=r({},e.props),s=e.key,u=e.ref,l=e._owner
if(null!=t){void 0!==t.ref&&(u=t.ref,l=E.current)
void 0!==t.key&&(s=""+t.key)
var c=void 0
e.type&&e.type.defaultProps&&(c=e.type.defaultProps)
for(a in t)S.call(t,a)&&!C.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==c?c[a]:t[a])}a=arguments.length-2
if(1===a)o.children=n
else if(1<a){c=Array(a)
for(var d=0;d<a;d++)c[d]=arguments[d+2]
o.children=c}return{$$typeof:i,type:e.type,key:s,ref:u,props:o,_owner:l}},createFactory:function(e){var t=P.bind(null,e)
t.type=e
return t},isValidElement:j,version:"16.8.6",unstable_ConcurrentMode:f,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:D,ReactCurrentOwner:E,assign:r}},K={default:W},V=K&&W||K
e.exports=V.default||V},vpJZ:function(e,t,n){"use strict"
var r=n("pQTu")
var a=n("m0r6")
Object(a["a"])({"en-AU":{disableWhileLoading:{loading:"Loading..."}},"en-AU-x-unimelb":{disableWhileLoading:{loading:"Loading..."}},"en-CA":{disableWhileLoading:{loading:"Loading..."}},"en-GB":{disableWhileLoading:{loading:"Loading..."}},"en-GB-x-ukhe":{disableWhileLoading:{loading:"Loading..."}},is:{disableWhileLoading:{loading:"Hleð inn..."}},mi:{disableWhileLoading:{loading:"E Uta ana ...."}},ru:{disableWhileLoading:{loading:"Выполняется загрузка..."}}})
n("jQeR")
n("0sPK")
var i=r["default"].scoped("disableWhileLoading")
var o=n("ouhR")
var s=n.n(o)
n("jYyc")
n("yvkg")
function u(e,t){e.forEach(function(n,r){n===t&&e.splice(r,1)})}s.a.fn.disableWhileLoading=function(e,t){return this.each(function(){var n=s.a.extend(true,{},s.a.fn.disableWhileLoading.defaults,t),r=s()(this),a=r.data(),o=a.disabledWhileLoadingDeferreds||(a.disabledWhileLoadingDeferreds=[]),l=s.a.Deferred()
s.a.when.apply(s.a,o).done(function(){var a="disabled_"+s.a.guid++,c=r.add(r.nextAll(".ui-dialog-buttonpane")),d=c.find("*").andSelf().filter(":input").not(":disabled,[type=file]"),f=r.find(".spin_holder"),h=f.length?f:r,m=h.css("display"),p=false
var _=setTimeout(function(){p=true
d.prop("disabled",true)
h.show().spin(t)
s()(h.data().spinner.el).css({"max-width":"100px"})
c.css("opacity",function(e,t){s()(this).data(a+"opacityBefore",this.style.opacity||1)
return n.opacity})
s.a.each(n.buttons,function(e,t){s.a.isArray(n.buttons)&&(e=t,t=null)
c.find(e).text(function(e,n){s()(this).data(a,n)
return t||s()(this).data("textWhileLoading")||s()(this).is(".ui-button-text")&&s()(this).closest(".ui-button").data("textWhileLoading")||i.t("loading","Loading...")})})},13)
s.a.when(e).always(function(){clearTimeout(_)
if(p){h.css("display",m).spin(false)
c.css("opacity",function(){return s()(this).data(a+"opacityBefore")||1})
d.prop("disabled",false)
s.a.each(n.buttons,function(e,t){if("number"===typeof e)e=""+this
c.find(e).text(function(){return s()(this).data(a)})})
u(o,l)
l.resolve()
n.onComplete&&n.onComplete()}})})
o.push(l)})}
s.a.fn.disableWhileLoading.defaults={opacity:.5,buttons:['button[type="submit"], .ui-dialog-buttonpane .ui-button .ui-button-text']}},vpQ4:function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
var r=n("rePB")
function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
var a=Object.keys(n)
"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))
a.forEach(function(t){Object(r["a"])(e,t,n[t])})}return e}},vuIU:function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
"value"in r&&(r.writable=true)
Object.defineProperty(e,r.key,r)}}function a(e,t,n){t&&r(e.prototype,t)
n&&r(e,n)
return e}},w0Vi:function(e,t,n){"use strict"
var r=n("xTJ+")
var a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]
e.exports=function(e){var t={}
var n
var i
var o
if(!e)return t
r.forEach(e.split("\n"),function(e){o=e.indexOf(":")
n=r.trim(e.substr(0,o)).toLowerCase()
i=r.trim(e.substr(o+1))
if(n){if(t[n]&&a.indexOf(n)>=0)return
t[n]="set-cookie"===n?(t[n]?t[n]:[]).concat([i]):t[n]?t[n]+", "+i:i}})
return t}},wVQW:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var a=r(n("MVZn"))
var i=r(n("RIqP"))
function o(){var e=Array.prototype.slice.call(arguments)
var t={}
e.forEach(function(e){t=s(t,e)})
return t}function s(e,t){if(u(t)){var n=[].concat((0,i.default)(Object.keys(t)),(0,i.default)(Object.getOwnPropertySymbols(t)))
var r=(0,a.default)({},e)
n.forEach(function(n){u(e[n])&&u(t[n])?r[n]=s(e[n],t[n]):l(t[n])&&l(e[n])?r[n]=(0,i.default)(new Set([].concat((0,i.default)(e[n]),(0,i.default)(t[n])))):l(e[n])?r[n]=(0,i.default)(new Set([].concat((0,i.default)(e[n]),[t[n]]))):r[n]=t[n]})
return r}return(0,a.default)({},e)}function u(e){return e&&("object"===typeof e||"function"===typeof e)&&!Array.isArray(e)}function l(e){return e&&Array.isArray(e)}},"wd/R":function(e,t,n){(function(e){t=function(){"use strict"
var t
function n(){return t.apply(null,arguments)}function r(e){t=e}function a(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function o(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length
var t
for(t in e)if(e.hasOwnProperty(t))return false
return true}function s(e){return void 0===e}function u(e){return"number"===typeof e||"[object Number]"===Object.prototype.toString.call(e)}function l(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function c(e,t){var n,r=[]
for(n=0;n<e.length;++n)r.push(t(e[n],n))
return r}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function f(e,t){for(var n in t)d(t,n)&&(e[n]=t[n])
d(t,"toString")&&(e.toString=t.toString)
d(t,"valueOf")&&(e.valueOf=t.valueOf)
return e}function h(e,t,n,r){return Vn(e,t,n,r,true).utc()}function m(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null,rfc2822:false,weekdayMismatch:false}}function p(e){null==e._pf&&(e._pf=m())
return e._pf}var _
_=Array.prototype.some?Array.prototype.some:function(e){var t=Object(this)
var n=t.length>>>0
for(var r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return true
return false}
function g(e){if(null==e._isValid){var t=p(e)
var n=_.call(t.parsedDateParts,function(e){return null!=e})
var r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n)
e._strict&&(r=r&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour)
if(null!=Object.isFrozen&&Object.isFrozen(e))return r
e._isValid=r}return e._isValid}function y(e){var t=h(NaN)
null!=e?f(p(t),e):p(t).userInvalidated=true
return t}var v=n.momentProperties=[]
function b(e,t){var n,r,a
s(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject)
s(t._i)||(e._i=t._i)
s(t._f)||(e._f=t._f)
s(t._l)||(e._l=t._l)
s(t._strict)||(e._strict=t._strict)
s(t._tzm)||(e._tzm=t._tzm)
s(t._isUTC)||(e._isUTC=t._isUTC)
s(t._offset)||(e._offset=t._offset)
s(t._pf)||(e._pf=p(t))
s(t._locale)||(e._locale=t._locale)
if(v.length>0)for(n=0;n<v.length;n++){r=v[n]
a=t[r]
s(a)||(e[r]=a)}return e}var w=false
function k(e){b(this,e)
this._d=new Date(null!=e._d?e._d.getTime():NaN)
this.isValid()||(this._d=new Date(NaN))
if(false===w){w=true
n.updateOffset(this)
w=false}}function x(e){return e instanceof k||null!=e&&null!=e._isAMomentObject}function M(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function T(e){var t=+e,n=0
0!==t&&isFinite(t)&&(n=M(t))
return n}function D(e,t,n){var r,a=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0
for(r=0;r<a;r++)(n&&e[r]!==t[r]||!n&&T(e[r])!==T(t[r]))&&o++
return o+i}function E(e){false===n.suppressDeprecationWarnings&&"undefined"!==typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function S(e,t){var r=true
return f(function(){null!=n.deprecationHandler&&n.deprecationHandler(null,e)
if(r){var a=[]
var i
for(var o=0;o<arguments.length;o++){i=""
if("object"===typeof arguments[o]){i+="\n["+o+"] "
for(var s in arguments[0])i+=s+": "+arguments[0][s]+", "
i=i.slice(0,-2)}else i=arguments[o]
a.push(i)}E(e+"\nArguments: "+Array.prototype.slice.call(a).join("")+"\n"+(new Error).stack)
r=false}return t.apply(this,arguments)},t)}var C={}
function P(e,t){null!=n.deprecationHandler&&n.deprecationHandler(e,t)
if(!C[e]){E(t)
C[e]=true}}n.suppressDeprecationWarnings=false
n.deprecationHandler=null
function O(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function j(e){var t,n
for(n in e){t=e[n]
O(t)?this[n]=t:this["_"+n]=t}this._config=e
this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function A(e,t){var n,r=f({},e)
for(n in t)if(d(t,n))if(i(e[n])&&i(t[n])){r[n]={}
f(r[n],e[n])
f(r[n],t[n])}else null!=t[n]?r[n]=t[n]:delete r[n]
for(n in e)d(e,n)&&!d(t,n)&&i(e[n])&&(r[n]=f({},r[n]))
return r}function N(e){null!=e&&this.set(e)}var z
z=Object.keys?Object.keys:function(e){var t,n=[]
for(t in e)d(e,t)&&n.push(t)
return n}
var I={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"}
function L(e,t,n){var r=this._calendar[e]||this._calendar["sameElse"]
return O(r)?r.call(t,n):r}var B={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"}
function R(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()]
if(t||!n)return t
this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)})
return this._longDateFormat[e]}var F="Invalid date"
function Y(){return this._invalidDate}var q="%d"
var H=/\d{1,2}/
function U(e){return this._ordinal.replace("%d",e)}var W={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}
function K(e,t,n,r){var a=this._relativeTime[n]
return O(a)?a(e,t,n,r):a.replace(/%d/i,e)}function V(e,t){var n=this._relativeTime[e>0?"future":"past"]
return O(n)?n(t):n.replace(/%s/i,t)}var $={}
function G(e,t){var n=e.toLowerCase()
$[n]=$[n+"s"]=$[t]=e}function J(e){return"string"===typeof e?$[e]||$[e.toLowerCase()]:void 0}function Q(e){var t,n,r={}
for(n in e)if(d(e,n)){t=J(n)
t&&(r[t]=e[n])}return r}var X={}
function Z(e,t){X[e]=t}function ee(e){var t=[]
for(var n in e)t.push({unit:n,priority:X[n]})
t.sort(function(e,t){return e.priority-t.priority})
return t}function te(e,t,n){var r=""+Math.abs(e),a=t-r.length,i=e>=0
return(i?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+r}var ne=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
var re=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
var ae={}
var ie={}
function oe(e,t,n,r){var a=r
"string"===typeof r&&(a=function(){return this[r]()})
e&&(ie[e]=a)
t&&(ie[t[0]]=function(){return te(a.apply(this,arguments),t[1],t[2])})
n&&(ie[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function se(e){if(e.match(/\[[\s\S]/))return e.replace(/^\[|\]$/g,"")
return e.replace(/\\/g,"")}function ue(e){var t,n,r=e.match(ne)
for(t=0,n=r.length;t<n;t++)ie[r[t]]?r[t]=ie[r[t]]:r[t]=se(r[t])
return function(t){var a,i=""
for(a=0;a<n;a++)i+=O(r[a])?r[a].call(t,e):r[a]
return i}}function le(e,t){if(!e.isValid())return e.localeData().invalidDate()
t=ce(t,e.localeData())
ae[t]=ae[t]||ue(t)
return ae[t](e)}function ce(e,t){var n=5
function r(e){return t.longDateFormat(e)||e}re.lastIndex=0
while(n>=0&&re.test(e)){e=e.replace(re,r)
re.lastIndex=0
n-=1}return e}var de=/\d/
var fe=/\d\d/
var he=/\d{3}/
var me=/\d{4}/
var pe=/[+-]?\d{6}/
var _e=/\d\d?/
var ge=/\d\d\d\d?/
var ye=/\d\d\d\d\d\d?/
var ve=/\d{1,3}/
var be=/\d{1,4}/
var we=/[+-]?\d{1,6}/
var ke=/\d+/
var xe=/[+-]?\d+/
var Me=/Z|[+-]\d\d:?\d\d/gi
var Te=/Z|[+-]\d\d(?::?\d\d)?/gi
var De=/[+-]?\d+(\.\d{1,3})?/
var Ee=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
var Se={}
function Ce(e,t,n){Se[e]=O(t)?t:function(e,r){return e&&n?n:t}}function Pe(e,t){if(!d(Se,e))return new RegExp(Oe(e))
return Se[e](t._strict,t._locale)}function Oe(e){return je(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,a){return t||n||r||a}))}function je(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Ae={}
function Ne(e,t){var n,r=t
"string"===typeof e&&(e=[e])
u(t)&&(r=function(e,n){n[t]=T(e)})
for(n=0;n<e.length;n++)Ae[e[n]]=r}function ze(e,t){Ne(e,function(e,n,r,a){r._w=r._w||{}
t(e,r._w,r,a)})}function Ie(e,t,n){null!=t&&d(Ae,e)&&Ae[e](t,n._a,n,e)}var Le=0
var Be=1
var Re=2
var Fe=3
var Ye=4
var qe=5
var He=6
var Ue=7
var We=8
oe("Y",0,0,function(){var e=this.year()
return e<=9999?""+e:"+"+e})
oe(0,["YY",2],0,function(){return this.year()%100})
oe(0,["YYYY",4],0,"year")
oe(0,["YYYYY",5],0,"year")
oe(0,["YYYYYY",6,true],0,"year")
G("year","y")
Z("year",1)
Ce("Y",xe)
Ce("YY",_e,fe)
Ce("YYYY",be,me)
Ce("YYYYY",we,pe)
Ce("YYYYYY",we,pe)
Ne(["YYYYY","YYYYYY"],Le)
Ne("YYYY",function(e,t){t[Le]=2===e.length?n.parseTwoDigitYear(e):T(e)})
Ne("YY",function(e,t){t[Le]=n.parseTwoDigitYear(e)})
Ne("Y",function(e,t){t[Le]=parseInt(e,10)})
function Ke(e){return Ve(e)?366:365}function Ve(e){return e%4===0&&e%100!==0||e%400===0}n.parseTwoDigitYear=function(e){return T(e)+(T(e)>68?1900:2e3)}
var $e=Je("FullYear",true)
function Ge(){return Ve(this.year())}function Je(e,t){return function(r){if(null!=r){Xe(this,e,r)
n.updateOffset(this,t)
return this}return Qe(this,e)}}function Qe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function Xe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&Ve(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),rt(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Ze(e){e=J(e)
if(O(this[e]))return this[e]()
return this}function et(e,t){if("object"===typeof e){e=Q(e)
var n=ee(e)
for(var r=0;r<n.length;r++)this[n[r].unit](e[n[r].unit])}else{e=J(e)
if(O(this[e]))return this[e](t)}return this}function tt(e,t){return(e%t+t)%t}var nt
nt=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t
for(t=0;t<this.length;++t)if(this[t]===e)return t
return-1}
function rt(e,t){if(isNaN(e)||isNaN(t))return NaN
var n=tt(t,12)
e+=(t-n)/12
return 1===n?Ve(e)?29:28:31-n%7%2}oe("M",["MM",2],"Mo",function(){return this.month()+1})
oe("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)})
oe("MMMM",0,0,function(e){return this.localeData().months(this,e)})
G("month","M")
Z("month",8)
Ce("M",_e)
Ce("MM",_e,fe)
Ce("MMM",function(e,t){return t.monthsShortRegex(e)})
Ce("MMMM",function(e,t){return t.monthsRegex(e)})
Ne(["M","MM"],function(e,t){t[Be]=T(e)-1})
Ne(["MMM","MMMM"],function(e,t,n,r){var a=n._locale.monthsParse(e,r,n._strict)
null!=a?t[Be]=a:p(n).invalidMonth=e})
var at=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
var it="January_February_March_April_May_June_July_August_September_October_November_December".split("_")
function ot(e,t){if(!e)return a(this._months)?this._months:this._months["standalone"]
return a(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||at).test(t)?"format":"standalone"][e.month()]}var st="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
function ut(e,t){if(!e)return a(this._monthsShort)?this._monthsShort:this._monthsShort["standalone"]
return a(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[at.test(t)?"format":"standalone"][e.month()]}function lt(e,t,n){var r,a,i,o=e.toLocaleLowerCase()
if(!this._monthsParse){this._monthsParse=[]
this._longMonthsParse=[]
this._shortMonthsParse=[]
for(r=0;r<12;++r){i=h([2e3,r])
this._shortMonthsParse[r]=this.monthsShort(i,"").toLocaleLowerCase()
this._longMonthsParse[r]=this.months(i,"").toLocaleLowerCase()}}if(n){if("MMM"===t){a=nt.call(this._shortMonthsParse,o)
return-1!==a?a:null}a=nt.call(this._longMonthsParse,o)
return-1!==a?a:null}if("MMM"===t){a=nt.call(this._shortMonthsParse,o)
if(-1!==a)return a
a=nt.call(this._longMonthsParse,o)
return-1!==a?a:null}a=nt.call(this._longMonthsParse,o)
if(-1!==a)return a
a=nt.call(this._shortMonthsParse,o)
return-1!==a?a:null}function ct(e,t,n){var r,a,i
if(this._monthsParseExact)return lt.call(this,e,t,n)
if(!this._monthsParse){this._monthsParse=[]
this._longMonthsParse=[]
this._shortMonthsParse=[]}for(r=0;r<12;r++){a=h([2e3,r])
if(n&&!this._longMonthsParse[r]){this._longMonthsParse[r]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i")
this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")}if(!n&&!this._monthsParse[r]){i="^"+this.months(a,"")+"|^"+this.monthsShort(a,"")
this._monthsParse[r]=new RegExp(i.replace(".",""),"i")}if(n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r
if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r
if(!n&&this._monthsParse[r].test(e))return r}}function dt(e,t){var n
if(!e.isValid())return e
if("string"===typeof t)if(/^\d+$/.test(t))t=T(t)
else{t=e.localeData().monthsParse(t)
if(!u(t))return e}n=Math.min(e.date(),rt(e.year(),t))
e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n)
return e}function ft(e){if(null!=e){dt(this,e)
n.updateOffset(this,true)
return this}return Qe(this,"Month")}function ht(){return rt(this.year(),this.month())}var mt=Ee
function pt(e){if(this._monthsParseExact){d(this,"_monthsRegex")||yt.call(this)
return e?this._monthsShortStrictRegex:this._monthsShortRegex}d(this,"_monthsShortRegex")||(this._monthsShortRegex=mt)
return this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex}var _t=Ee
function gt(e){if(this._monthsParseExact){d(this,"_monthsRegex")||yt.call(this)
return e?this._monthsStrictRegex:this._monthsRegex}d(this,"_monthsRegex")||(this._monthsRegex=_t)
return this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex}function yt(){function e(e,t){return t.length-e.length}var t,n,r=[],a=[],i=[]
for(t=0;t<12;t++){n=h([2e3,t])
r.push(this.monthsShort(n,""))
a.push(this.months(n,""))
i.push(this.months(n,""))
i.push(this.monthsShort(n,""))}r.sort(e)
a.sort(e)
i.sort(e)
for(t=0;t<12;t++){r[t]=je(r[t])
a[t]=je(a[t])}for(t=0;t<24;t++)i[t]=je(i[t])
this._monthsRegex=new RegExp("^("+i.join("|")+")","i")
this._monthsShortRegex=this._monthsRegex
this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i")
this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function vt(e,t,n,r,a,i,o){var s
if(e<100&&e>=0){s=new Date(e+400,t,n,r,a,i,o)
isFinite(s.getFullYear())&&s.setFullYear(e)}else s=new Date(e,t,n,r,a,i,o)
return s}function bt(e){var t
if(e<100&&e>=0){var n=Array.prototype.slice.call(arguments)
n[0]=e+400
t=new Date(Date.UTC.apply(null,n))
isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments))
return t}function wt(e,t,n){var r=7+t-n,a=(7+bt(e,0,r).getUTCDay()-t)%7
return-a+r-1}function kt(e,t,n,r,a){var i,o,s=(7+n-r)%7,u=wt(e,r,a),l=1+7*(t-1)+s+u
if(l<=0){i=e-1
o=Ke(i)+l}else if(l>Ke(e)){i=e+1
o=l-Ke(e)}else{i=e
o=l}return{year:i,dayOfYear:o}}function xt(e,t,n){var r,a,i=wt(e.year(),t,n),o=Math.floor((e.dayOfYear()-i-1)/7)+1
if(o<1){a=e.year()-1
r=o+Mt(a,t,n)}else if(o>Mt(e.year(),t,n)){r=o-Mt(e.year(),t,n)
a=e.year()+1}else{a=e.year()
r=o}return{week:r,year:a}}function Mt(e,t,n){var r=wt(e,t,n),a=wt(e+1,t,n)
return(Ke(e)-r+a)/7}oe("w",["ww",2],"wo","week")
oe("W",["WW",2],"Wo","isoWeek")
G("week","w")
G("isoWeek","W")
Z("week",5)
Z("isoWeek",5)
Ce("w",_e)
Ce("ww",_e,fe)
Ce("W",_e)
Ce("WW",_e,fe)
ze(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=T(e)})
function Tt(e){return xt(e,this._week.dow,this._week.doy).week}var Dt={dow:0,doy:6}
function Et(){return this._week.dow}function St(){return this._week.doy}function Ct(e){var t=this.localeData().week(this)
return null==e?t:this.add(7*(e-t),"d")}function Pt(e){var t=xt(this,1,4).week
return null==e?t:this.add(7*(e-t),"d")}oe("d",0,"do","day")
oe("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)})
oe("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)})
oe("dddd",0,0,function(e){return this.localeData().weekdays(this,e)})
oe("e",0,0,"weekday")
oe("E",0,0,"isoWeekday")
G("day","d")
G("weekday","e")
G("isoWeekday","E")
Z("day",11)
Z("weekday",11)
Z("isoWeekday",11)
Ce("d",_e)
Ce("e",_e)
Ce("E",_e)
Ce("dd",function(e,t){return t.weekdaysMinRegex(e)})
Ce("ddd",function(e,t){return t.weekdaysShortRegex(e)})
Ce("dddd",function(e,t){return t.weekdaysRegex(e)})
ze(["dd","ddd","dddd"],function(e,t,n,r){var a=n._locale.weekdaysParse(e,r,n._strict)
null!=a?t.d=a:p(n).invalidWeekday=e})
ze(["d","e","E"],function(e,t,n,r){t[r]=T(e)})
function Ot(e,t){if("string"!==typeof e)return e
if(!isNaN(e))return parseInt(e,10)
e=t.weekdaysParse(e)
if("number"===typeof e)return e
return null}function jt(e,t){if("string"===typeof e)return t.weekdaysParse(e)%7||7
return isNaN(e)?null:e}function At(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Nt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
function zt(e,t){var n=a(this._weekdays)?this._weekdays:this._weekdays[e&&true!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"]
return true===e?At(n,this._week.dow):e?n[e.day()]:n}var It="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
function Lt(e){return true===e?At(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}var Bt="Su_Mo_Tu_We_Th_Fr_Sa".split("_")
function Rt(e){return true===e?At(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ft(e,t,n){var r,a,i,o=e.toLocaleLowerCase()
if(!this._weekdaysParse){this._weekdaysParse=[]
this._shortWeekdaysParse=[]
this._minWeekdaysParse=[]
for(r=0;r<7;++r){i=h([2e3,1]).day(r)
this._minWeekdaysParse[r]=this.weekdaysMin(i,"").toLocaleLowerCase()
this._shortWeekdaysParse[r]=this.weekdaysShort(i,"").toLocaleLowerCase()
this._weekdaysParse[r]=this.weekdays(i,"").toLocaleLowerCase()}}if(n){if("dddd"===t){a=nt.call(this._weekdaysParse,o)
return-1!==a?a:null}if("ddd"===t){a=nt.call(this._shortWeekdaysParse,o)
return-1!==a?a:null}a=nt.call(this._minWeekdaysParse,o)
return-1!==a?a:null}if("dddd"===t){a=nt.call(this._weekdaysParse,o)
if(-1!==a)return a
a=nt.call(this._shortWeekdaysParse,o)
if(-1!==a)return a
a=nt.call(this._minWeekdaysParse,o)
return-1!==a?a:null}if("ddd"===t){a=nt.call(this._shortWeekdaysParse,o)
if(-1!==a)return a
a=nt.call(this._weekdaysParse,o)
if(-1!==a)return a
a=nt.call(this._minWeekdaysParse,o)
return-1!==a?a:null}a=nt.call(this._minWeekdaysParse,o)
if(-1!==a)return a
a=nt.call(this._weekdaysParse,o)
if(-1!==a)return a
a=nt.call(this._shortWeekdaysParse,o)
return-1!==a?a:null}function Yt(e,t,n){var r,a,i
if(this._weekdaysParseExact)return Ft.call(this,e,t,n)
if(!this._weekdaysParse){this._weekdaysParse=[]
this._minWeekdaysParse=[]
this._shortWeekdaysParse=[]
this._fullWeekdaysParse=[]}for(r=0;r<7;r++){a=h([2e3,1]).day(r)
if(n&&!this._fullWeekdaysParse[r]){this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i")
this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i")
this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")}if(!this._weekdaysParse[r]){i="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,"")
this._weekdaysParse[r]=new RegExp(i.replace(".",""),"i")}if(n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r
if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r
if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r
if(!n&&this._weekdaysParse[r].test(e))return r}}function qt(e){if(!this.isValid())return null!=e?this:NaN
var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
if(null!=e){e=Ot(e,this.localeData())
return this.add(e-t,"d")}return t}function Ht(e){if(!this.isValid())return null!=e?this:NaN
var t=(this.day()+7-this.localeData()._week.dow)%7
return null==e?t:this.add(e-t,"d")}function Ut(e){if(!this.isValid())return null!=e?this:NaN
if(null!=e){var t=jt(e,this.localeData())
return this.day(this.day()%7?t:t-7)}return this.day()||7}var Wt=Ee
function Kt(e){if(this._weekdaysParseExact){d(this,"_weekdaysRegex")||Qt.call(this)
return e?this._weekdaysStrictRegex:this._weekdaysRegex}d(this,"_weekdaysRegex")||(this._weekdaysRegex=Wt)
return this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex}var Vt=Ee
function $t(e){if(this._weekdaysParseExact){d(this,"_weekdaysRegex")||Qt.call(this)
return e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Vt)
return this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}var Gt=Ee
function Jt(e){if(this._weekdaysParseExact){d(this,"_weekdaysRegex")||Qt.call(this)
return e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Gt)
return this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}function Qt(){function e(e,t){return t.length-e.length}var t,n,r,a,i,o=[],s=[],u=[],l=[]
for(t=0;t<7;t++){n=h([2e3,1]).day(t)
r=this.weekdaysMin(n,"")
a=this.weekdaysShort(n,"")
i=this.weekdays(n,"")
o.push(r)
s.push(a)
u.push(i)
l.push(r)
l.push(a)
l.push(i)}o.sort(e)
s.sort(e)
u.sort(e)
l.sort(e)
for(t=0;t<7;t++){s[t]=je(s[t])
u[t]=je(u[t])
l[t]=je(l[t])}this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i")
this._weekdaysShortRegex=this._weekdaysRegex
this._weekdaysMinRegex=this._weekdaysRegex
this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i")
this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i")
this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Xt(){return this.hours()%12||12}function Zt(){return this.hours()||24}oe("H",["HH",2],0,"hour")
oe("h",["hh",2],0,Xt)
oe("k",["kk",2],0,Zt)
oe("hmm",0,0,function(){return""+Xt.apply(this)+te(this.minutes(),2)})
oe("hmmss",0,0,function(){return""+Xt.apply(this)+te(this.minutes(),2)+te(this.seconds(),2)})
oe("Hmm",0,0,function(){return""+this.hours()+te(this.minutes(),2)})
oe("Hmmss",0,0,function(){return""+this.hours()+te(this.minutes(),2)+te(this.seconds(),2)})
function en(e,t){oe(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}en("a",true)
en("A",false)
G("hour","h")
Z("hour",13)
function tn(e,t){return t._meridiemParse}Ce("a",tn)
Ce("A",tn)
Ce("H",_e)
Ce("h",_e)
Ce("k",_e)
Ce("HH",_e,fe)
Ce("hh",_e,fe)
Ce("kk",_e,fe)
Ce("hmm",ge)
Ce("hmmss",ye)
Ce("Hmm",ge)
Ce("Hmmss",ye)
Ne(["H","HH"],Fe)
Ne(["k","kk"],function(e,t,n){var r=T(e)
t[Fe]=24===r?0:r})
Ne(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e)
n._meridiem=e})
Ne(["h","hh"],function(e,t,n){t[Fe]=T(e)
p(n).bigHour=true})
Ne("hmm",function(e,t,n){var r=e.length-2
t[Fe]=T(e.substr(0,r))
t[Ye]=T(e.substr(r))
p(n).bigHour=true})
Ne("hmmss",function(e,t,n){var r=e.length-4
var a=e.length-2
t[Fe]=T(e.substr(0,r))
t[Ye]=T(e.substr(r,2))
t[qe]=T(e.substr(a))
p(n).bigHour=true})
Ne("Hmm",function(e,t,n){var r=e.length-2
t[Fe]=T(e.substr(0,r))
t[Ye]=T(e.substr(r))})
Ne("Hmmss",function(e,t,n){var r=e.length-4
var a=e.length-2
t[Fe]=T(e.substr(0,r))
t[Ye]=T(e.substr(r,2))
t[qe]=T(e.substr(a))})
function nn(e){return"p"===(e+"").toLowerCase().charAt(0)}var rn=/[ap]\.?m?\.?/i
function an(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var on=Je("Hours",true)
var sn={calendar:I,longDateFormat:B,invalidDate:F,ordinal:q,dayOfMonthOrdinalParse:H,relativeTime:W,months:it,monthsShort:st,week:Dt,weekdays:Nt,weekdaysMin:Bt,weekdaysShort:It,meridiemParse:rn}
var un={}
var ln={}
var cn
function dn(e){return e?e.toLowerCase().replace("_","-"):e}function fn(e){var t,n,r,a,i=0
while(i<e.length){a=dn(e[i]).split("-")
t=a.length
n=dn(e[i+1])
n=n?n.split("-"):null
while(t>0){r=hn(a.slice(0,t).join("-"))
if(r)return r
if(n&&n.length>=t&&D(a,n,true)>=t-1)break
t--}i++}return cn}function hn(t){var n=null
if(!un[t]&&"undefined"!==typeof e&&e&&e.exports)try{n=cn._abbr
!function(){var e=new Error("Cannot find module 'undefined'")
e.code="MODULE_NOT_FOUND"
throw e}()
mn(n)}catch(e){}return un[t]}function mn(e,t){var n
if(e){n=s(t)?gn(e):pn(e,t)
n?cn=n:"undefined"!==typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")}return cn._abbr}function pn(e,t){if(null!==t){var n,r=sn
t.abbr=e
if(null!=un[e]){P("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.")
r=un[e]._config}else if(null!=t.parentLocale)if(null!=un[t.parentLocale])r=un[t.parentLocale]._config
else{n=hn(t.parentLocale)
if(null==n){ln[t.parentLocale]||(ln[t.parentLocale]=[])
ln[t.parentLocale].push({name:e,config:t})
return null}r=n._config}un[e]=new N(A(r,t))
ln[e]&&ln[e].forEach(function(e){pn(e.name,e.config)})
mn(e)
return un[e]}delete un[e]
return null}function _n(e,t){if(null!=t){var n,r,a=sn
r=hn(e)
null!=r&&(a=r._config)
t=A(a,t)
n=new N(t)
n.parentLocale=un[e]
un[e]=n
mn(e)}else null!=un[e]&&(null!=un[e].parentLocale?un[e]=un[e].parentLocale:null!=un[e]&&delete un[e])
return un[e]}function gn(e){var t
e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr)
if(!e)return cn
if(!a(e)){t=hn(e)
if(t)return t
e=[e]}return fn(e)}function yn(){return z(un)}function vn(e){var t
var n=e._a
if(n&&-2===p(e).overflow){t=n[Be]<0||n[Be]>11?Be:n[Re]<1||n[Re]>rt(n[Le],n[Be])?Re:n[Fe]<0||n[Fe]>24||24===n[Fe]&&(0!==n[Ye]||0!==n[qe]||0!==n[He])?Fe:n[Ye]<0||n[Ye]>59?Ye:n[qe]<0||n[qe]>59?qe:n[He]<0||n[He]>999?He:-1
p(e)._overflowDayOfYear&&(t<Le||t>Re)&&(t=Re)
p(e)._overflowWeeks&&-1===t&&(t=Ue)
p(e)._overflowWeekday&&-1===t&&(t=We)
p(e).overflow=t}return e}function bn(e,t,n){if(null!=e)return e
if(null!=t)return t
return n}function wn(e){var t=new Date(n.now())
if(e._useUTC)return[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]
return[t.getFullYear(),t.getMonth(),t.getDate()]}function kn(e){var t,n,r,a,i,o=[]
if(e._d)return
r=wn(e)
e._w&&null==e._a[Re]&&null==e._a[Be]&&xn(e)
if(null!=e._dayOfYear){i=bn(e._a[Le],r[Le]);(e._dayOfYear>Ke(i)||0===e._dayOfYear)&&(p(e)._overflowDayOfYear=true)
n=bt(i,0,e._dayOfYear)
e._a[Be]=n.getUTCMonth()
e._a[Re]=n.getUTCDate()}for(t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=r[t]
for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t]
if(24===e._a[Fe]&&0===e._a[Ye]&&0===e._a[qe]&&0===e._a[He]){e._nextDay=true
e._a[Fe]=0}e._d=(e._useUTC?bt:vt).apply(null,o)
a=e._useUTC?e._d.getUTCDay():e._d.getDay()
null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm)
e._nextDay&&(e._a[Fe]=24)
e._w&&"undefined"!==typeof e._w.d&&e._w.d!==a&&(p(e).weekdayMismatch=true)}function xn(e){var t,n,r,a,i,o,s,u
t=e._w
if(null!=t.GG||null!=t.W||null!=t.E){i=1
o=4
n=bn(t.GG,e._a[Le],xt($n(),1,4).year)
r=bn(t.W,1)
a=bn(t.E,1);(a<1||a>7)&&(u=true)}else{i=e._locale._week.dow
o=e._locale._week.doy
var l=xt($n(),i,o)
n=bn(t.gg,e._a[Le],l.year)
r=bn(t.w,l.week)
if(null!=t.d){a=t.d;(a<0||a>6)&&(u=true)}else if(null!=t.e){a=t.e+i;(t.e<0||t.e>6)&&(u=true)}else a=i}if(r<1||r>Mt(n,i,o))p(e)._overflowWeeks=true
else if(null!=u)p(e)._overflowWeekday=true
else{s=kt(n,r,a,i,o)
e._a[Le]=s.year
e._dayOfYear=s.dayOfYear}}var Mn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
var Tn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
var Dn=/Z|[+-]\d\d(?::?\d\d)?/
var En=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]]
var Sn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]]
var Cn=/^\/?Date\((\-?\d+)/i
function Pn(e){var t,n,r,a,i,o,s=e._i,u=Mn.exec(s)||Tn.exec(s)
if(u){p(e).iso=true
for(t=0,n=En.length;t<n;t++)if(En[t][1].exec(u[1])){a=En[t][0]
r=false!==En[t][2]
break}if(null==a){e._isValid=false
return}if(u[3]){for(t=0,n=Sn.length;t<n;t++)if(Sn[t][1].exec(u[3])){i=(u[2]||" ")+Sn[t][0]
break}if(null==i){e._isValid=false
return}}if(!r&&null!=i){e._isValid=false
return}if(u[4]){if(!Dn.exec(u[4])){e._isValid=false
return}o="Z"}e._f=a+(i||"")+(o||"")
Fn(e)}else e._isValid=false}var On=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
function jn(e,t,n,r,a,i){var o=[An(e),st.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(a,10)]
i&&o.push(parseInt(i,10))
return o}function An(e){var t=parseInt(e,10)
if(t<=49)return 2e3+t
if(t<=999)return 1900+t
return t}function Nn(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function zn(e,t,n){if(e){var r=It.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay()
if(r!==a){p(n).weekdayMismatch=true
n._isValid=false
return false}}return true}var In={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480}
function Ln(e,t,n){if(e)return In[e]
if(t)return 0
var r=parseInt(n,10)
var a=r%100,i=(r-a)/100
return 60*i+a}function Bn(e){var t=On.exec(Nn(e._i))
if(t){var n=jn(t[4],t[3],t[2],t[5],t[6],t[7])
if(!zn(t[1],n,e))return
e._a=n
e._tzm=Ln(t[8],t[9],t[10])
e._d=bt.apply(null,e._a)
e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm)
p(e).rfc2822=true}else e._isValid=false}function Rn(e){var t=Cn.exec(e._i)
if(null!==t){e._d=new Date(+t[1])
return}Pn(e)
if(false!==e._isValid)return
delete e._isValid
Bn(e)
if(false!==e._isValid)return
delete e._isValid
n.createFromInputFallback(e)}n.createFromInputFallback=S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})
n.ISO_8601=function(){}
n.RFC_2822=function(){}
function Fn(e){if(e._f===n.ISO_8601){Pn(e)
return}if(e._f===n.RFC_2822){Bn(e)
return}e._a=[]
p(e).empty=true
var t,r,a,i,o,s=""+e._i,u=s.length,l=0
a=ce(e._f,e._locale).match(ne)||[]
for(t=0;t<a.length;t++){i=a[t]
r=(s.match(Pe(i,e))||[])[0]
if(r){o=s.substr(0,s.indexOf(r))
o.length>0&&p(e).unusedInput.push(o)
s=s.slice(s.indexOf(r)+r.length)
l+=r.length}if(ie[i]){r?p(e).empty=false:p(e).unusedTokens.push(i)
Ie(i,r,e)}else e._strict&&!r&&p(e).unusedTokens.push(i)}p(e).charsLeftOver=u-l
s.length>0&&p(e).unusedInput.push(s)
e._a[Fe]<=12&&true===p(e).bigHour&&e._a[Fe]>0&&(p(e).bigHour=void 0)
p(e).parsedDateParts=e._a.slice(0)
p(e).meridiem=e._meridiem
e._a[Fe]=Yn(e._locale,e._a[Fe],e._meridiem)
kn(e)
vn(e)}function Yn(e,t,n){var r
if(null==n)return t
if(null!=e.meridiemHour)return e.meridiemHour(t,n)
if(null!=e.isPM){r=e.isPM(n)
r&&t<12&&(t+=12)
r||12!==t||(t=0)
return t}return t}function qn(e){var t,n,r,a,i
if(0===e._f.length){p(e).invalidFormat=true
e._d=new Date(NaN)
return}for(a=0;a<e._f.length;a++){i=0
t=b({},e)
null!=e._useUTC&&(t._useUTC=e._useUTC)
t._f=e._f[a]
Fn(t)
if(!g(t))continue
i+=p(t).charsLeftOver
i+=10*p(t).unusedTokens.length
p(t).score=i
if(null==r||i<r){r=i
n=t}}f(e,n||t)}function Hn(e){if(e._d)return
var t=Q(e._i)
e._a=c([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)})
kn(e)}function Un(e){var t=new k(vn(Wn(e)))
if(t._nextDay){t.add(1,"d")
t._nextDay=void 0}return t}function Wn(e){var t=e._i,n=e._f
e._locale=e._locale||gn(e._l)
if(null===t||void 0===n&&""===t)return y({nullInput:true})
"string"===typeof t&&(e._i=t=e._locale.preparse(t))
if(x(t))return new k(vn(t))
l(t)?e._d=t:a(n)?qn(e):n?Fn(e):Kn(e)
g(e)||(e._d=null)
return e}function Kn(e){var t=e._i
if(s(t))e._d=new Date(n.now())
else if(l(t))e._d=new Date(t.valueOf())
else if("string"===typeof t)Rn(e)
else if(a(t)){e._a=c(t.slice(0),function(e){return parseInt(e,10)})
kn(e)}else i(t)?Hn(e):u(t)?e._d=new Date(t):n.createFromInputFallback(e)}function Vn(e,t,n,r,s){var u={}
if(true===n||false===n){r=n
n=void 0}(i(e)&&o(e)||a(e)&&0===e.length)&&(e=void 0)
u._isAMomentObject=true
u._useUTC=u._isUTC=s
u._l=n
u._i=e
u._f=t
u._strict=r
return Un(u)}function $n(e,t,n,r){return Vn(e,t,n,r,false)}var Gn=S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=$n.apply(null,arguments)
return this.isValid()&&e.isValid()?e<this?this:e:y()})
var Jn=S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=$n.apply(null,arguments)
return this.isValid()&&e.isValid()?e>this?this:e:y()})
function Qn(e,t){var n,r
1===t.length&&a(t[0])&&(t=t[0])
if(!t.length)return $n()
n=t[0]
for(r=1;r<t.length;++r)t[r].isValid()&&!t[r][e](n)||(n=t[r])
return n}function Xn(){var e=[].slice.call(arguments,0)
return Qn("isBefore",e)}function Zn(){var e=[].slice.call(arguments,0)
return Qn("isAfter",e)}var er=function(){return Date.now?Date.now():+new Date}
var tr=["year","quarter","month","week","day","hour","minute","second","millisecond"]
function nr(e){for(var t in e)if(!(-1!==nt.call(tr,t)&&(null==e[t]||!isNaN(e[t]))))return false
var n=false
for(var r=0;r<tr.length;++r)if(e[tr[r]]){if(n)return false
parseFloat(e[tr[r]])!==T(e[tr[r]])&&(n=true)}return true}function rr(){return this._isValid}function ar(){return Dr(NaN)}function ir(e){var t=Q(e),n=t.year||0,r=t.quarter||0,a=t.month||0,i=t.week||t.isoWeek||0,o=t.day||0,s=t.hour||0,u=t.minute||0,l=t.second||0,c=t.millisecond||0
this._isValid=nr(t)
this._milliseconds=+c+1e3*l+6e4*u+1e3*s*60*60
this._days=+o+7*i
this._months=+a+3*r+12*n
this._data={}
this._locale=gn()
this._bubble()}function or(e){return e instanceof ir}function sr(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function ur(e,t){oe(e,0,0,function(){var e=this.utcOffset()
var n="+"
if(e<0){e=-e
n="-"}return n+te(~~(e/60),2)+t+te(~~e%60,2)})}ur("Z",":")
ur("ZZ","")
Ce("Z",Te)
Ce("ZZ",Te)
Ne(["Z","ZZ"],function(e,t,n){n._useUTC=true
n._tzm=cr(Te,e)})
var lr=/([\+\-]|\d\d)/gi
function cr(e,t){var n=(t||"").match(e)
if(null===n)return null
var r=n[n.length-1]||[]
var a=(r+"").match(lr)||["-",0,0]
var i=60*a[1]+T(a[2])
return 0===i?0:"+"===a[0]?i:-i}function dr(e,t){var r,a
if(t._isUTC){r=t.clone()
a=(x(e)||l(e)?e.valueOf():$n(e).valueOf())-r.valueOf()
r._d.setTime(r._d.valueOf()+a)
n.updateOffset(r,false)
return r}return $n(e).local()}function fr(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}n.updateOffset=function(){}
function hr(e,t,r){var a,i=this._offset||0
if(!this.isValid())return null!=e?this:NaN
if(null!=e){if("string"===typeof e){e=cr(Te,e)
if(null===e)return this}else Math.abs(e)<16&&!r&&(e*=60)
!this._isUTC&&t&&(a=fr(this))
this._offset=e
this._isUTC=true
null!=a&&this.add(a,"m")
if(i!==e)if(!t||this._changeInProgress)Or(this,Dr(e-i,"m"),1,false)
else if(!this._changeInProgress){this._changeInProgress=true
n.updateOffset(this,true)
this._changeInProgress=null}return this}return this._isUTC?i:fr(this)}function mr(e,t){if(null!=e){"string"!==typeof e&&(e=-e)
this.utcOffset(e,t)
return this}return-this.utcOffset()}function pr(e){return this.utcOffset(0,e)}function _r(e){if(this._isUTC){this.utcOffset(0,e)
this._isUTC=false
e&&this.subtract(fr(this),"m")}return this}function gr(){if(null!=this._tzm)this.utcOffset(this._tzm,false,true)
else if("string"===typeof this._i){var e=cr(Me,this._i)
null!=e?this.utcOffset(e):this.utcOffset(0,true)}return this}function yr(e){if(!this.isValid())return false
e=e?$n(e).utcOffset():0
return(this.utcOffset()-e)%60===0}function vr(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function br(){if(!s(this._isDSTShifted))return this._isDSTShifted
var e={}
b(e,this)
e=Wn(e)
if(e._a){var t=e._isUTC?h(e._a):$n(e._a)
this._isDSTShifted=this.isValid()&&D(e._a,t.toArray())>0}else this._isDSTShifted=false
return this._isDSTShifted}function wr(){return!!this.isValid()&&!this._isUTC}function kr(){return!!this.isValid()&&this._isUTC}function xr(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}var Mr=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
var Tr=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
function Dr(e,t){var n,r,a,i=e,o=null
if(or(e))i={ms:e._milliseconds,d:e._days,M:e._months}
else if(u(e)){i={}
t?i[t]=e:i.milliseconds=e}else if(!(o=Mr.exec(e)))if(!(o=Tr.exec(e))){if(null==i)i={}
else if("object"===typeof i&&("from"in i||"to"in i)){a=Cr($n(i.from),$n(i.to))
i={}
i.ms=a.milliseconds
i.M=a.months}}else{n="-"===o[1]?-1:1
i={y:Er(o[2],n),M:Er(o[3],n),w:Er(o[4],n),d:Er(o[5],n),h:Er(o[6],n),m:Er(o[7],n),s:Er(o[8],n)}}else{n="-"===o[1]?-1:1
i={y:0,d:T(o[Re])*n,h:T(o[Fe])*n,m:T(o[Ye])*n,s:T(o[qe])*n,ms:T(sr(1e3*o[He]))*n}}r=new ir(i)
or(e)&&d(e,"_locale")&&(r._locale=e._locale)
return r}Dr.fn=ir.prototype
Dr.invalid=ar
function Er(e,t){var n=e&&parseFloat(e.replace(",","."))
return(isNaN(n)?0:n)*t}function Sr(e,t){var n={}
n.months=t.month()-e.month()+12*(t.year()-e.year())
e.clone().add(n.months,"M").isAfter(t)&&--n.months
n.milliseconds=+t-+e.clone().add(n.months,"M")
return n}function Cr(e,t){var n
if(!(e.isValid()&&t.isValid()))return{milliseconds:0,months:0}
t=dr(t,e)
if(e.isBefore(t))n=Sr(e,t)
else{n=Sr(t,e)
n.milliseconds=-n.milliseconds
n.months=-n.months}return n}function Pr(e,t){return function(n,r){var a,i
if(null!==r&&!isNaN(+r)){P(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.")
i=n
n=r
r=i}n="string"===typeof n?+n:n
a=Dr(n,r)
Or(this,a,e)
return this}}function Or(e,t,r,a){var i=t._milliseconds,o=sr(t._days),s=sr(t._months)
if(!e.isValid())return
a=null==a||a
s&&dt(e,Qe(e,"Month")+s*r)
o&&Xe(e,"Date",Qe(e,"Date")+o*r)
i&&e._d.setTime(e._d.valueOf()+i*r)
a&&n.updateOffset(e,o||s)}var jr=Pr(1,"add")
var Ar=Pr(-1,"subtract")
function Nr(e,t){var n=e.diff(t,"days",true)
return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function zr(e,t){var r=e||$n(),a=dr(r,this).startOf("day"),i=n.calendarFormat(this,a)||"sameElse"
var o=t&&(O(t[i])?t[i].call(this,r):t[i])
return this.format(o||this.localeData().calendar(i,this,$n(r)))}function Ir(){return new k(this)}function Lr(e,t){var n=x(e)?e:$n(e)
if(!(this.isValid()&&n.isValid()))return false
t=J(t)||"millisecond"
return"millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()}function Br(e,t){var n=x(e)?e:$n(e)
if(!(this.isValid()&&n.isValid()))return false
t=J(t)||"millisecond"
return"millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()}function Rr(e,t,n,r){var a=x(e)?e:$n(e),i=x(t)?t:$n(t)
if(!(this.isValid()&&a.isValid()&&i.isValid()))return false
r=r||"()"
return("("===r[0]?this.isAfter(a,n):!this.isBefore(a,n))&&(")"===r[1]?this.isBefore(i,n):!this.isAfter(i,n))}function Fr(e,t){var n,r=x(e)?e:$n(e)
if(!(this.isValid()&&r.isValid()))return false
t=J(t)||"millisecond"
if("millisecond"===t)return this.valueOf()===r.valueOf()
n=r.valueOf()
return this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()}function Yr(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function qr(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Hr(e,t,n){var r,a,i
if(!this.isValid())return NaN
r=dr(e,this)
if(!r.isValid())return NaN
a=6e4*(r.utcOffset()-this.utcOffset())
t=J(t)
switch(t){case"year":i=Ur(this,r)/12
break
case"month":i=Ur(this,r)
break
case"quarter":i=Ur(this,r)/3
break
case"second":i=(this-r)/1e3
break
case"minute":i=(this-r)/6e4
break
case"hour":i=(this-r)/36e5
break
case"day":i=(this-r-a)/864e5
break
case"week":i=(this-r-a)/6048e5
break
default:i=this-r}return n?i:M(i)}function Ur(e,t){var n,r,a=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(a,"months")
if(t-i<0){n=e.clone().add(a-1,"months")
r=(t-i)/(i-n)}else{n=e.clone().add(a+1,"months")
r=(t-i)/(n-i)}return-(a+r)||0}n.defaultFormat="YYYY-MM-DDTHH:mm:ssZ"
n.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"
function Wr(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Kr(e){if(!this.isValid())return null
var t=true!==e
var n=t?this.clone().utc():this
if(n.year()<0||n.year()>9999)return le(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ")
if(O(Date.prototype.toISOString))return t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",le(n,"Z"))
return le(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Vr(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)"
var e="moment"
var t=""
if(!this.isLocal()){e=0===this.utcOffset()?"moment.utc":"moment.parseZone"
t="Z"}var n="["+e+'("]'
var r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY"
var a="-MM-DD[T]HH:mm:ss.SSS"
var i=t+'[")]'
return this.format(n+r+a+i)}function $r(e){e||(e=this.isUtc()?n.defaultFormatUtc:n.defaultFormat)
var t=le(this,e)
return this.localeData().postformat(t)}function Gr(e,t){return this.isValid()&&(x(e)&&e.isValid()||$n(e).isValid())?Dr({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Jr(e){return this.from($n(),e)}function Qr(e,t){return this.isValid()&&(x(e)&&e.isValid()||$n(e).isValid())?Dr({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Xr(e){return this.to($n(),e)}function Zr(e){var t
if(void 0===e)return this._locale._abbr
t=gn(e)
null!=t&&(this._locale=t)
return this}var ea=S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)})
function ta(){return this._locale}var na=1e3
var ra=60*na
var aa=60*ra
var ia=3506328*aa
function oa(e,t){return(e%t+t)%t}function sa(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-ia:new Date(e,t,n).valueOf()}function ua(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-ia:Date.UTC(e,t,n)}function la(e){var t
e=J(e)
if(void 0===e||"millisecond"===e||!this.isValid())return this
var r=this._isUTC?ua:sa
switch(e){case"year":t=r(this.year(),0,1)
break
case"quarter":t=r(this.year(),this.month()-this.month()%3,1)
break
case"month":t=r(this.year(),this.month(),1)
break
case"week":t=r(this.year(),this.month(),this.date()-this.weekday())
break
case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1))
break
case"day":case"date":t=r(this.year(),this.month(),this.date())
break
case"hour":t=this._d.valueOf()
t-=oa(t+(this._isUTC?0:this.utcOffset()*ra),aa)
break
case"minute":t=this._d.valueOf()
t-=oa(t,ra)
break
case"second":t=this._d.valueOf()
t-=oa(t,na)}this._d.setTime(t)
n.updateOffset(this,true)
return this}function ca(e){var t
e=J(e)
if(void 0===e||"millisecond"===e||!this.isValid())return this
var r=this._isUTC?ua:sa
switch(e){case"year":t=r(this.year()+1,0,1)-1
break
case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1
break
case"month":t=r(this.year(),this.month()+1,1)-1
break
case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1
break
case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1
break
case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1
break
case"hour":t=this._d.valueOf()
t+=aa-oa(t+(this._isUTC?0:this.utcOffset()*ra),aa)-1
break
case"minute":t=this._d.valueOf()
t+=ra-oa(t,ra)-1
break
case"second":t=this._d.valueOf()
t+=na-oa(t,na)-1}this._d.setTime(t)
n.updateOffset(this,true)
return this}function da(){return this._d.valueOf()-6e4*(this._offset||0)}function fa(){return Math.floor(this.valueOf()/1e3)}function ha(){return new Date(this.valueOf())}function ma(){var e=this
return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function pa(){var e=this
return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function _a(){return this.isValid()?this.toISOString():null}function ga(){return g(this)}function ya(){return f({},p(this))}function va(){return p(this).overflow}function ba(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}oe(0,["gg",2],0,function(){return this.weekYear()%100})
oe(0,["GG",2],0,function(){return this.isoWeekYear()%100})
function wa(e,t){oe(0,[e,e.length],0,t)}wa("gggg","weekYear")
wa("ggggg","weekYear")
wa("GGGG","isoWeekYear")
wa("GGGGG","isoWeekYear")
G("weekYear","gg")
G("isoWeekYear","GG")
Z("weekYear",1)
Z("isoWeekYear",1)
Ce("G",xe)
Ce("g",xe)
Ce("GG",_e,fe)
Ce("gg",_e,fe)
Ce("GGGG",be,me)
Ce("gggg",be,me)
Ce("GGGGG",we,pe)
Ce("ggggg",we,pe)
ze(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=T(e)})
ze(["gg","GG"],function(e,t,r,a){t[a]=n.parseTwoDigitYear(e)})
function ka(e){return Da.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function xa(e){return Da.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ma(){return Mt(this.year(),1,4)}function Ta(){var e=this.localeData()._week
return Mt(this.year(),e.dow,e.doy)}function Da(e,t,n,r,a){var i
if(null==e)return xt(this,r,a).year
i=Mt(e,r,a)
t>i&&(t=i)
return Ea.call(this,e,t,n,r,a)}function Ea(e,t,n,r,a){var i=kt(e,t,n,r,a),o=bt(i.year,0,i.dayOfYear)
this.year(o.getUTCFullYear())
this.month(o.getUTCMonth())
this.date(o.getUTCDate())
return this}oe("Q",0,"Qo","quarter")
G("quarter","Q")
Z("quarter",7)
Ce("Q",de)
Ne("Q",function(e,t){t[Be]=3*(T(e)-1)})
function Sa(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}oe("D",["DD",2],"Do","date")
G("date","D")
Z("date",9)
Ce("D",_e)
Ce("DD",_e,fe)
Ce("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient})
Ne(["D","DD"],Re)
Ne("Do",function(e,t){t[Re]=T(e.match(_e)[0])})
var Ca=Je("Date",true)
oe("DDD",["DDDD",3],"DDDo","dayOfYear")
G("dayOfYear","DDD")
Z("dayOfYear",4)
Ce("DDD",ve)
Ce("DDDD",he)
Ne(["DDD","DDDD"],function(e,t,n){n._dayOfYear=T(e)})
function Pa(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
return null==e?t:this.add(e-t,"d")}oe("m",["mm",2],0,"minute")
G("minute","m")
Z("minute",14)
Ce("m",_e)
Ce("mm",_e,fe)
Ne(["m","mm"],Ye)
var Oa=Je("Minutes",false)
oe("s",["ss",2],0,"second")
G("second","s")
Z("second",15)
Ce("s",_e)
Ce("ss",_e,fe)
Ne(["s","ss"],qe)
var ja=Je("Seconds",false)
oe("S",0,0,function(){return~~(this.millisecond()/100)})
oe(0,["SS",2],0,function(){return~~(this.millisecond()/10)})
oe(0,["SSS",3],0,"millisecond")
oe(0,["SSSS",4],0,function(){return 10*this.millisecond()})
oe(0,["SSSSS",5],0,function(){return 100*this.millisecond()})
oe(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()})
oe(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()})
oe(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()})
oe(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()})
G("millisecond","ms")
Z("millisecond",16)
Ce("S",ve,de)
Ce("SS",ve,fe)
Ce("SSS",ve,he)
var Aa
for(Aa="SSSS";Aa.length<=9;Aa+="S")Ce(Aa,ke)
function Na(e,t){t[He]=T(1e3*("0."+e))}for(Aa="S";Aa.length<=9;Aa+="S")Ne(Aa,Na)
var za=Je("Milliseconds",false)
oe("z",0,0,"zoneAbbr")
oe("zz",0,0,"zoneName")
function Ia(){return this._isUTC?"UTC":""}function La(){return this._isUTC?"Coordinated Universal Time":""}var Ba=k.prototype
Ba.add=jr
Ba.calendar=zr
Ba.clone=Ir
Ba.diff=Hr
Ba.endOf=ca
Ba.format=$r
Ba.from=Gr
Ba.fromNow=Jr
Ba.to=Qr
Ba.toNow=Xr
Ba.get=Ze
Ba.invalidAt=va
Ba.isAfter=Lr
Ba.isBefore=Br
Ba.isBetween=Rr
Ba.isSame=Fr
Ba.isSameOrAfter=Yr
Ba.isSameOrBefore=qr
Ba.isValid=ga
Ba.lang=ea
Ba.locale=Zr
Ba.localeData=ta
Ba.max=Jn
Ba.min=Gn
Ba.parsingFlags=ya
Ba.set=et
Ba.startOf=la
Ba.subtract=Ar
Ba.toArray=ma
Ba.toObject=pa
Ba.toDate=ha
Ba.toISOString=Kr
Ba.inspect=Vr
Ba.toJSON=_a
Ba.toString=Wr
Ba.unix=fa
Ba.valueOf=da
Ba.creationData=ba
Ba.year=$e
Ba.isLeapYear=Ge
Ba.weekYear=ka
Ba.isoWeekYear=xa
Ba.quarter=Ba.quarters=Sa
Ba.month=ft
Ba.daysInMonth=ht
Ba.week=Ba.weeks=Ct
Ba.isoWeek=Ba.isoWeeks=Pt
Ba.weeksInYear=Ta
Ba.isoWeeksInYear=Ma
Ba.date=Ca
Ba.day=Ba.days=qt
Ba.weekday=Ht
Ba.isoWeekday=Ut
Ba.dayOfYear=Pa
Ba.hour=Ba.hours=on
Ba.minute=Ba.minutes=Oa
Ba.second=Ba.seconds=ja
Ba.millisecond=Ba.milliseconds=za
Ba.utcOffset=hr
Ba.utc=pr
Ba.local=_r
Ba.parseZone=gr
Ba.hasAlignedHourOffset=yr
Ba.isDST=vr
Ba.isLocal=wr
Ba.isUtcOffset=kr
Ba.isUtc=xr
Ba.isUTC=xr
Ba.zoneAbbr=Ia
Ba.zoneName=La
Ba.dates=S("dates accessor is deprecated. Use date instead.",Ca)
Ba.months=S("months accessor is deprecated. Use month instead",ft)
Ba.years=S("years accessor is deprecated. Use year instead",$e)
Ba.zone=S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",mr)
Ba.isDSTShifted=S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",br)
function Ra(e){return $n(1e3*e)}function Fa(){return $n.apply(null,arguments).parseZone()}function Ya(e){return e}var qa=N.prototype
qa.calendar=L
qa.longDateFormat=R
qa.invalidDate=Y
qa.ordinal=U
qa.preparse=Ya
qa.postformat=Ya
qa.relativeTime=K
qa.pastFuture=V
qa.set=j
qa.months=ot
qa.monthsShort=ut
qa.monthsParse=ct
qa.monthsRegex=gt
qa.monthsShortRegex=pt
qa.week=Tt
qa.firstDayOfYear=St
qa.firstDayOfWeek=Et
qa.weekdays=zt
qa.weekdaysMin=Rt
qa.weekdaysShort=Lt
qa.weekdaysParse=Yt
qa.weekdaysRegex=Kt
qa.weekdaysShortRegex=$t
qa.weekdaysMinRegex=Jt
qa.isPM=nn
qa.meridiem=an
function Ha(e,t,n,r){var a=gn()
var i=h().set(r,t)
return a[n](i,e)}function Ua(e,t,n){if(u(e)){t=e
e=void 0}e=e||""
if(null!=t)return Ha(e,t,n,"month")
var r
var a=[]
for(r=0;r<12;r++)a[r]=Ha(e,r,n,"month")
return a}function Wa(e,t,n,r){if("boolean"===typeof e){if(u(t)){n=t
t=void 0}t=t||""}else{t=e
n=t
e=false
if(u(t)){n=t
t=void 0}t=t||""}var a=gn(),i=e?a._week.dow:0
if(null!=n)return Ha(t,(n+i)%7,r,"day")
var o
var s=[]
for(o=0;o<7;o++)s[o]=Ha(t,(o+i)%7,r,"day")
return s}function Ka(e,t){return Ua(e,t,"months")}function Va(e,t){return Ua(e,t,"monthsShort")}function $a(e,t,n){return Wa(e,t,n,"weekdays")}function Ga(e,t,n){return Wa(e,t,n,"weekdaysShort")}function Ja(e,t,n){return Wa(e,t,n,"weekdaysMin")}mn("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===T(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"
return e+n}})
n.lang=S("moment.lang is deprecated. Use moment.locale instead.",mn)
n.langData=S("moment.langData is deprecated. Use moment.localeData instead.",gn)
var Qa=Math.abs
function Xa(){var e=this._data
this._milliseconds=Qa(this._milliseconds)
this._days=Qa(this._days)
this._months=Qa(this._months)
e.milliseconds=Qa(e.milliseconds)
e.seconds=Qa(e.seconds)
e.minutes=Qa(e.minutes)
e.hours=Qa(e.hours)
e.months=Qa(e.months)
e.years=Qa(e.years)
return this}function Za(e,t,n,r){var a=Dr(t,n)
e._milliseconds+=r*a._milliseconds
e._days+=r*a._days
e._months+=r*a._months
return e._bubble()}function ei(e,t){return Za(this,e,t,1)}function ti(e,t){return Za(this,e,t,-1)}function ni(e){return e<0?Math.floor(e):Math.ceil(e)}function ri(){var e=this._milliseconds
var t=this._days
var n=this._months
var r=this._data
var a,i,o,s,u
if(!(e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0)){e+=864e5*ni(ii(n)+t)
t=0
n=0}r.milliseconds=e%1e3
a=M(e/1e3)
r.seconds=a%60
i=M(a/60)
r.minutes=i%60
o=M(i/60)
r.hours=o%24
t+=M(o/24)
u=M(ai(t))
n+=u
t-=ni(ii(u))
s=M(n/12)
n%=12
r.days=t
r.months=n
r.years=s
return this}function ai(e){return 4800*e/146097}function ii(e){return 146097*e/4800}function oi(e){if(!this.isValid())return NaN
var t
var n
var r=this._milliseconds
e=J(e)
if("month"===e||"quarter"===e||"year"===e){t=this._days+r/864e5
n=this._months+ai(t)
switch(e){case"month":return n
case"quarter":return n/3
case"year":return n/12}}else{t=this._days+Math.round(ii(this._months))
switch(e){case"week":return t/7+r/6048e5
case"day":return t+r/864e5
case"hour":return 24*t+r/36e5
case"minute":return 1440*t+r/6e4
case"second":return 86400*t+r/1e3
case"millisecond":return Math.floor(864e5*t)+r
default:throw new Error("Unknown unit "+e)}}}function si(){if(!this.isValid())return NaN
return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*T(this._months/12)}function ui(e){return function(){return this.as(e)}}var li=ui("ms")
var ci=ui("s")
var di=ui("m")
var fi=ui("h")
var hi=ui("d")
var mi=ui("w")
var pi=ui("M")
var _i=ui("Q")
var gi=ui("y")
function yi(){return Dr(this)}function vi(e){e=J(e)
return this.isValid()?this[e+"s"]():NaN}function bi(e){return function(){return this.isValid()?this._data[e]:NaN}}var wi=bi("milliseconds")
var ki=bi("seconds")
var xi=bi("minutes")
var Mi=bi("hours")
var Ti=bi("days")
var Di=bi("months")
var Ei=bi("years")
function Si(){return M(this.days()/7)}var Ci=Math.round
var Pi={ss:44,s:45,m:45,h:22,d:26,M:11}
function Oi(e,t,n,r,a){return a.relativeTime(t||1,!!n,e,r)}function ji(e,t,n){var r=Dr(e).abs()
var a=Ci(r.as("s"))
var i=Ci(r.as("m"))
var o=Ci(r.as("h"))
var s=Ci(r.as("d"))
var u=Ci(r.as("M"))
var l=Ci(r.as("y"))
var c=a<=Pi.ss&&["s",a]||a<Pi.s&&["ss",a]||i<=1&&["m"]||i<Pi.m&&["mm",i]||o<=1&&["h"]||o<Pi.h&&["hh",o]||s<=1&&["d"]||s<Pi.d&&["dd",s]||u<=1&&["M"]||u<Pi.M&&["MM",u]||l<=1&&["y"]||["yy",l]
c[2]=t
c[3]=+e>0
c[4]=n
return Oi.apply(null,c)}function Ai(e){if(void 0===e)return Ci
if("function"===typeof e){Ci=e
return true}return false}function Ni(e,t){if(void 0===Pi[e])return false
if(void 0===t)return Pi[e]
Pi[e]=t
"s"===e&&(Pi.ss=t-1)
return true}function zi(e){if(!this.isValid())return this.localeData().invalidDate()
var t=this.localeData()
var n=ji(this,!e,t)
e&&(n=t.pastFuture(+this,n))
return t.postformat(n)}var Ii=Math.abs
function Li(e){return(e>0)-(e<0)||+e}function Bi(){if(!this.isValid())return this.localeData().invalidDate()
var e=Ii(this._milliseconds)/1e3
var t=Ii(this._days)
var n=Ii(this._months)
var r,a,i
r=M(e/60)
a=M(r/60)
e%=60
r%=60
i=M(n/12)
n%=12
var o=i
var s=n
var u=t
var l=a
var c=r
var d=e?e.toFixed(3).replace(/\.?0+$/,""):""
var f=this.asSeconds()
if(!f)return"P0D"
var h=f<0?"-":""
var m=Li(this._months)!==Li(f)?"-":""
var p=Li(this._days)!==Li(f)?"-":""
var _=Li(this._milliseconds)!==Li(f)?"-":""
return h+"P"+(o?m+o+"Y":"")+(s?m+s+"M":"")+(u?p+u+"D":"")+(l||c||d?"T":"")+(l?_+l+"H":"")+(c?_+c+"M":"")+(d?_+d+"S":"")}var Ri=ir.prototype
Ri.isValid=rr
Ri.abs=Xa
Ri.add=ei
Ri.subtract=ti
Ri.as=oi
Ri.asMilliseconds=li
Ri.asSeconds=ci
Ri.asMinutes=di
Ri.asHours=fi
Ri.asDays=hi
Ri.asWeeks=mi
Ri.asMonths=pi
Ri.asQuarters=_i
Ri.asYears=gi
Ri.valueOf=si
Ri._bubble=ri
Ri.clone=yi
Ri.get=vi
Ri.milliseconds=wi
Ri.seconds=ki
Ri.minutes=xi
Ri.hours=Mi
Ri.days=Ti
Ri.weeks=Si
Ri.months=Di
Ri.years=Ei
Ri.humanize=zi
Ri.toISOString=Bi
Ri.toString=Bi
Ri.toJSON=Bi
Ri.locale=Zr
Ri.localeData=ta
Ri.toIsoString=S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Bi)
Ri.lang=ea
oe("X",0,0,"unix")
oe("x",0,0,"valueOf")
Ce("x",xe)
Ce("X",De)
Ne("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))})
Ne("x",function(e,t,n){n._d=new Date(T(e))})
n.version="2.24.0"
r($n)
n.fn=Ba
n.min=Xn
n.max=Zn
n.now=er
n.utc=h
n.unix=Ra
n.months=Ka
n.isDate=l
n.locale=mn
n.invalid=y
n.duration=Dr
n.isMoment=x
n.weekdays=$a
n.parseZone=Fa
n.localeData=gn
n.isDuration=or
n.monthsShort=Va
n.weekdaysMin=Ja
n.defineLocale=pn
n.updateLocale=_n
n.locales=yn
n.weekdaysShort=Ga
n.normalizeUnits=J
n.relativeTimeRounding=Ai
n.relativeTimeThreshold=Ni
n.calendarFormat=Nr
n.prototype=Ba
n.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"}
return n},e.exports=t()
var t}).call(this,n("YuTi")(e))},x1Tw:function(e,t,n){"use strict"
n.r(t)
var r=n("vDqi")
var a=n.n(r)
a.a.defaults.xsrfCookieName="_csrf_token"
a.a.defaults.xsrfHeaderName="X-CSRF-Token"
var i=a.a.defaults.headers.common["Accept"]
a.a.defaults.headers.common["Accept"]="application/json+canvas-string-ids, "+i
a.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["default"]=a.a},xAGQ:function(e,t,n){"use strict"
var r=n("xTJ+")
e.exports=function(e,t,n){r.forEach(n,function(n){e=n(e,t)})
return e}},"xTJ+":function(e,t,n){"use strict"
var r=n("HSsa")
var a=n("BEtg")
var i=Object.prototype.toString
function o(e){return"[object Array]"===i.call(e)}function s(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t
t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer
return t}function c(e){return"string"===typeof e}function d(e){return"number"===typeof e}function f(e){return"undefined"===typeof e}function h(e){return null!==e&&"object"===typeof e}function m(e){return"[object Date]"===i.call(e)}function p(e){return"[object File]"===i.call(e)}function _(e){return"[object Blob]"===i.call(e)}function g(e){return"[object Function]"===i.call(e)}function y(e){return h(e)&&g(e.pipe)}function v(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function b(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){if("undefined"!==typeof navigator&&"ReactNative"===navigator.product)return false
return"undefined"!==typeof window&&"undefined"!==typeof document}function k(e,t){if(null===e||"undefined"===typeof e)return
"object"!==typeof e&&(e=[e])
if(o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e)
else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function x(){var e={}
function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=x(e[n],t):e[n]=t}for(var n=0,r=arguments.length;n<r;n++)k(arguments[n],t)
return e}function M(e,t,n){k(t,function(t,a){e[a]=n&&"function"===typeof t?r(t,n):t})
return e}e.exports={isArray:o,isArrayBuffer:s,isBuffer:a,isFormData:u,isArrayBufferView:l,isString:c,isNumber:d,isObject:h,isUndefined:f,isDate:m,isFile:p,isBlob:_,isFunction:g,isStream:y,isURLSearchParams:v,isStandardBrowserEnv:w,forEach:k,merge:x,extend:M,trim:b}},"xe+K":function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
n.d(t,"d",function(){return o})
n.d(t,"c",function(){return s})
n.d(t,"b",function(){return u})
var r=n("KQm4")
var a="RceLoaded"
function i(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o]
e.one(a,{method_name:t,args:i},function(e,t){t.call.apply(t,[e.data.method_name].concat(Object(r["a"])(e.data.args)))})}function o(e,t){var n=e.data("remoteEditor")
for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o]
if(n){var s
if("get_code"===t&&n.isHidden())return e.val()
if("create_link"===t){t="insertLink"
a[0].href=a[0].url
a[0].class=a[0].classes
var u=a[0].dataAttributes
a[0]["data-preview-alt"]=u&&u["preview-alt"]}s=n.call.apply(n,[t].concat(a))
"toggle"===t&&(e.is(":visible")?e.focus():n.focus())
return s}if("exists?"===t)return false
if("get_code"===t)return e.val()
console.warn("called send('".concat(t,"') on an RCE instance that hasn't fully loaded, delaying send"))
i.apply(void 0,[e,t].concat(a))}function s(e){var t=e.data("remoteEditor")
t?t.focus():console.warn("called focus() on an RCE instance that hasn't fully loaded, ignored")}function u(e){var t=e.data("remoteEditor")
if(t){t.destroy()
e.data("remoteEditor",null)}else console.warn("called destroy() on an RCE instance that hasn't fully loaded, ignored")}},xnDy:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=a
var r=Object.prototype.hasOwnProperty
function a(e){if("object"!==typeof e)return true
for(var t in e)if(r.call(e,t))return false
return true}},y2nt:function(e,t,n){"use strict"
n.r(t)
var r=n("q1z7")
var a=n.n(r)
var i=n("GLiE")
var o=n.n(i)
var s=n("5iuq")
var u=n("fPNa")
var l=function(e,t){for(var n in t)c.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},c={}.hasOwnProperty,d=[].slice
t["default"]=a.a.Collection=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.mixin=function(){var e
e=1<=arguments.length?d.call(arguments,0):[]
return s["a"].apply(null,[this].concat(d.call(e)))}
t.mixin(u["a"])
t.prototype.defaults={params:void 0,resourceName:void 0,contextAssetString:void 0}
t.optionProperty=function(e){return this.__optionProperties__=(this.__optionProperties__||[]).concat([e])}
t.prototype.setOptionProperties=function(){var e,t,n,r,a
r=this.constructor.__optionProperties__
a=[]
for(e=0,t=r.length;e<t;e++){n=r[e]
void 0!==this.options[n]?a.push(this[n]=this.options[n]):a.push(void 0)}return a}
t.prototype.initialize=function(e,n){this.options=o.a.extend({},this.defaults,n)
this.setOptionProperties()
return t.__super__.initialize.apply(this,arguments)}
t.prototype.setParam=function(e,t){var n
null==(n=this.options).params&&(n.params={})
this.options.params[e]=t
return this.trigger("setParam",e,t)}
t.prototype.setParams=function(e){var t,n
for(t in e){n=e[t]
this.setParam(t,n)}return this.trigger("setParams",e)}
t.prototype.deleteParam=function(e){var t
null!=(t=this.options.params)&&delete t[e]
return this.trigger("deleteParam",e)}
t.prototype.fetch=function(e){null==e&&(e={})
null==e.data&&null!=this.options.params&&(e.data=this.options.params)
return t.__super__.fetch.call(this,e).then(null,(n=this,function(e){return n.trigger("fetch:fail",e)}))
var n}
t.prototype.url=function(){return this._defaultUrl()}
t.optionProperty("contextAssetString")
t.optionProperty("resourceName")
t.prototype.parse=function(e,n){var r,a,i,s,u,l
if(null==e)return t.__super__.parse.apply(this,arguments)
l=o.a.pick(e,"meta","links","linked")
if(o.a.isEmpty(l))return t.__super__.parse.apply(this,arguments)
a=o.a.omit(e,"meta","links","linked")
if(o.a.isEmpty(a))return t.__super__.parse.apply(this,arguments)
r=o.a.keys(a)
u=o.a.first(r)
s=a[u]
if(null==s)return t.__super__.parse.apply(this,arguments)
r.length>1&&"undefined"!==typeof console&&null!==console&&"function"===typeof console.warn&&console.warn("Found more then one primary collection, using '"+u+"'.")
i={}
o.a.each(l.linked||{},function(e,t){return i[t]=o.a.indexBy(e,"id")})
if(o.a.isEmpty(i))return t.__super__.parse.call(this,s,n)
o.a.each(this.sideLoad||{},function(e,t){var n,r
o.a.isBoolean(e)&&e&&(e={})
o.a.isString(e)&&(e={collection:e})
if(!o.a.isObject(e))return
r=e.foreignKey,n=e.collection
null==r&&(r=""+t)
null==n&&(n=t+"s")
n=i[n]||{}
return o.a.each(s,function(e){var a,s
if(!e.links)return
s=null
a=e.links[r]
if(o.a.isArray(a)){if(o.a.isEmpty(n)){n=i[t]||i[r]
if(null==n)throw"Could not find linked collection for '"+t+"' using '"+r+"'."}s=o.a.map(a,function(e){return n[e]})}else s=n[a]
if(null!=a&&null!=s){e[t]=s
delete e.links[r]
if(o.a.isEmpty(e.links))return delete e.links}})})
return t.__super__.parse.call(this,s,n)}
return t}(a.a.Collection)},yK9s:function(e,t,n){"use strict"
var r=n("xTJ+")
e.exports=function(e,t){r.forEach(e,function(n,r){if(r!==t&&r.toUpperCase()===t.toUpperCase()){e[t]=n
delete e[r]}})}},yLpj:function(e,t){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(e){"object"===typeof window&&(n=window)}e.exports=n},yP0d:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("9Duh")
n("vTtS")
var i,o,s,u,l="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",d="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var e=a()(this).find(":ui-button")
setTimeout(function(){e.button("refresh")},1)},h=function(e){var t=e.name,n=e.form,r=a()([])
t&&(r=n?a()(n).find("[name='"+t+"']"):a()("[name='"+t+"']",e.ownerDocument).filter(function(){return!this.form}))
return r}
a.a.widget("ui.button",{version:"@VERSION",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f)
"boolean"!==typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled)
this._determineButtonType()
this.hasTitle=!!this.buttonElement.attr("title")
var e=this,t=this.options,n="checkbox"===this.type||"radio"===this.type,r="ui-state-hover"+(n?"":" ui-state-active"),c="ui-state-focus"
null===t.label&&(t.label="input"===this.type?this.buttonElement.val():this.buttonElement.html())
this.buttonElement.addClass(l).not(".no-button-role").attr("role","button").end().bind("mouseenter"+this.eventNamespace,function(){if(t.disabled)return
a()(this).addClass("ui-state-hover")
this===i&&a()(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(t.disabled)return
a()(this).removeClass(r)}).bind("click"+this.eventNamespace,function(e){if(t.disabled){e.preventDefault()
e.stopImmediatePropagation()}})
this.element.bind("focus"+this.eventNamespace,function(){e.buttonElement.addClass(c)}).bind("blur"+this.eventNamespace,function(){e.buttonElement.removeClass(c)})
if(n){this.element.bind("change"+this.eventNamespace,function(){if(u)return
e.refresh()})
this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(t.disabled)return
u=false
o=e.pageX
s=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(t.disabled)return
o===e.pageX&&s===e.pageY||(u=true)})}if("checkbox"===this.type)this.buttonElement.bind("click"+this.eventNamespace,function(){if(t.disabled||u)return false
a()(this).toggleClass("ui-state-active")
e.buttonElement.attr("aria-pressed",e.element[0].checked)})
else if("radio"===this.type)this.buttonElement.bind("click"+this.eventNamespace,function(){if(t.disabled||u)return false
a()(this).addClass("ui-state-active")
e.buttonElement.attr("aria-pressed","true")
var n=e.element[0]
h(n).not(n).map(function(){return a()(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})
else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(t.disabled)return false
a()(this).addClass("ui-state-active")
i=this
e.document.one("mouseup",function(){i=null})}).bind("mouseup"+this.eventNamespace,function(){if(t.disabled)return false
a()(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(e){if(t.disabled)return false
e.keyCode!==a.a.ui.keyCode.SPACE&&e.keyCode!==a.a.ui.keyCode.ENTER||a()(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace,function(){a()(this).removeClass("ui-state-active")})
this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===a.a.ui.keyCode.SPACE&&a()(this).click()})}this._setOption("disabled",t.disabled)
this._resetButton()},_determineButtonType:function(){var e,t,n
this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button"
if("checkbox"===this.type||"radio"===this.type){e=this.element.parents().last()
t="label[for='"+this.element.attr("id")+"']"
this.buttonElement=e.find(t)
if(!this.buttonElement.length){e=e.length?e.siblings():this.element.siblings()
this.buttonElement=e.filter(t)
this.buttonElement.length||(this.buttonElement=e.find(t))}this.element.addClass("ui-helper-hidden-accessible")
n=this.element.is(":checked")
n&&this.buttonElement.addClass("ui-state-active")
this.buttonElement.prop("aria-pressed",n)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible")
this.buttonElement.removeClass(l+" "+c+" "+d).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html())
this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t)
if("disabled"===e){t?this.element.prop("disabled",true):this.element.prop("disabled",false)
return}this._resetButton()},refresh:function(){var e=this.element.is(":disabled")
e!==this.options.disabled&&this._setOption("disabled",e)
"radio"===this.type?h(this.element[0]).each(function(){a()(this).is(":checked")?a()(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a()(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type){this.options.label&&this.element.val(this.options.label)
return}var e=this.buttonElement.removeClass(d),t=a()("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),n=this.options.icons,r=n.primary&&n.secondary,i=[]
if(n.primary||n.secondary){this.options.text&&i.push("ui-button-text-icon"+(r?"s":n.primary?"-primary":"-secondary"))
n.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+n.primary+"'></span>")
n.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+n.secondary+"'></span>")
if(!this.options.text){i.push(r?"ui-button-icons-only":"ui-button-icon-only")
this.hasTitle||e.attr("title",a.a.trim(t))}}else i.push("ui-button-text-only")
e.addClass(i.join(" "))}})
a.a.widget("ui.buttonset",{version:"@VERSION",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t)
this._super(e,t)},refresh:function(){var e="rtl"===this.element.css("direction")
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a()(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset")
this.buttons.map(function(){return a()(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})},ygPz:function(e,t,n){var r,a;(function(n){"use strict"
var i={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"Ae","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"Oe","Ő":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"Ue","Ű":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"ae","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"oe","ő":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"ue","ű":"u","ý":"y","þ":"th","ÿ":"y","ẞ":"SS","ا":"a","أ":"a","إ":"i","آ":"aa","ؤ":"u","ئ":"e","ء":"a","ب":"b","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ي":"y","ى":"a","ة":"h","ﻻ":"la","ﻷ":"laa","ﻹ":"lai","ﻵ":"laa","گ":"g","چ":"ch","پ":"p","ژ":"zh","ک":"k","ی":"y","َ":"a","ً":"an","ِ":"e","ٍ":"en","ُ":"u","ٌ":"on","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","က":"k","ခ":"kh","ဂ":"g","ဃ":"ga","င":"ng","စ":"s","ဆ":"sa","ဇ":"z","စျ":"za","ည":"ny","ဋ":"t","ဌ":"ta","ဍ":"d","ဎ":"da","ဏ":"na","တ":"t","ထ":"ta","ဒ":"d","ဓ":"da","န":"n","ပ":"p","ဖ":"pa","ဗ":"b","ဘ":"ba","မ":"m","ယ":"y","ရ":"ya","လ":"l","ဝ":"w","သ":"th","ဟ":"h","ဠ":"la","အ":"a","ြ":"y","ျ":"ya","ွ":"w","ြွ":"yw","ျွ":"ywa","ှ":"h","ဧ":"e","၏":"-e","ဣ":"i","ဤ":"-i","ဉ":"u","ဦ":"-u","ဩ":"aw","သြော":"aw","ဪ":"aw","၀":"0","၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","္":"","့":"","း":"","č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z","ހ":"h","ށ":"sh","ނ":"n","ރ":"r","ބ":"b","ޅ":"lh","ކ":"k","އ":"a","ވ":"v","މ":"m","ފ":"f","ދ":"dh","ތ":"th","ލ":"l","ގ":"g","ޏ":"gn","ސ":"s","ޑ":"d","ޒ":"z","ޓ":"t","ޔ":"y","ޕ":"p","ޖ":"j","ޗ":"ch","ޘ":"tt","ޙ":"hh","ޚ":"kh","ޛ":"th","ޜ":"z","ޝ":"sh","ޞ":"s","ޟ":"d","ޠ":"t","ޡ":"z","ޢ":"a","ޣ":"gh","ޤ":"q","ޥ":"w","ަ":"a","ާ":"aa","ި":"i","ީ":"ee","ު":"u","ޫ":"oo","ެ":"e","ޭ":"ey","ޮ":"o","ޯ":"oa","ް":"","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"p","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","α":"a","β":"v","γ":"g","δ":"d","ε":"e","ζ":"z","η":"i","θ":"th","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"ks","ο":"o","π":"p","ρ":"r","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"o","ά":"a","έ":"e","ί":"i","ό":"o","ύ":"y","ή":"i","ώ":"o","ς":"s","ϊ":"i","ΰ":"y","ϋ":"y","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"I","Θ":"TH","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"KS","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"O","Ά":"A","Έ":"E","Ί":"I","Ό":"O","Ύ":"Y","Ή":"I","Ώ":"O","Ϊ":"I","Ϋ":"Y","ā":"a","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","ū":"u","Ā":"A","Ē":"E","Ģ":"G","Ī":"I","Ķ":"k","Ļ":"L","Ņ":"N","Ū":"U","Ќ":"Kj","ќ":"kj","Љ":"Lj","љ":"lj","Њ":"Nj","њ":"nj","Тс":"Ts","тс":"ts","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ś":"s","ź":"z","ż":"z","Ą":"A","Ć":"C","Ę":"E","Ł":"L","Ń":"N","Ś":"S","Ź":"Z","Ż":"Z","Є":"Ye","І":"I","Ї":"Yi","Ґ":"G","є":"ye","і":"i","ї":"yi","ґ":"g","ă":"a","Ă":"A","ș":"s","Ș":"S","ț":"t","Ț":"T","ţ":"t","Ţ":"T","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo","ж":"zh","з":"z","и":"i","й":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"kh","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"Yo","Ж":"Zh","З":"Z","И":"I","Й":"I","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"Kh","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","ђ":"dj","ј":"j","ћ":"c","џ":"dz","Ђ":"Dj","Ј":"j","Ћ":"C","Џ":"Dz","ľ":"l","ĺ":"l","ŕ":"r","Ľ":"L","Ĺ":"L","Ŕ":"R","ş":"s","Ş":"S","ı":"i","İ":"I","ğ":"g","Ğ":"G","ả":"a","Ả":"A","ẳ":"a","Ẳ":"A","ẩ":"a","Ẩ":"A","đ":"d","Đ":"D","ẹ":"e","Ẹ":"E","ẽ":"e","Ẽ":"E","ẻ":"e","Ẻ":"E","ế":"e","Ế":"E","ề":"e","Ề":"E","ệ":"e","Ệ":"E","ễ":"e","Ễ":"E","ể":"e","Ể":"E","ỏ":"o","ọ":"o","Ọ":"o","ố":"o","Ố":"O","ồ":"o","Ồ":"O","ổ":"o","Ổ":"O","ộ":"o","Ộ":"O","ỗ":"o","Ỗ":"O","ơ":"o","Ơ":"O","ớ":"o","Ớ":"O","ờ":"o","Ờ":"O","ợ":"o","Ợ":"O","ỡ":"o","Ỡ":"O","Ở":"o","ở":"o","ị":"i","Ị":"I","ĩ":"i","Ĩ":"I","ỉ":"i","Ỉ":"i","ủ":"u","Ủ":"U","ụ":"u","Ụ":"U","ũ":"u","Ũ":"U","ư":"u","Ư":"U","ứ":"u","Ứ":"U","ừ":"u","Ừ":"U","ự":"u","Ự":"U","ữ":"u","Ữ":"U","ử":"u","Ử":"ư","ỷ":"y","Ỷ":"y","ỳ":"y","Ỳ":"Y","ỵ":"y","Ỵ":"Y","ỹ":"y","Ỹ":"Y","ạ":"a","Ạ":"A","ấ":"a","Ấ":"A","ầ":"a","Ầ":"A","ậ":"a","Ậ":"A","ẫ":"a","Ẫ":"A","ắ":"a","Ắ":"A","ằ":"a","Ằ":"A","ặ":"a","Ặ":"A","ẵ":"a","Ẵ":"A","“":'"',"”":'"',"‘":"'","’":"'","∂":"d","ƒ":"f","™":"(TM)","©":"(C)","œ":"oe","Œ":"OE","®":"(R)","†":"+","℠":"(SM)","…":"...","˚":"o","º":"o","ª":"a","•":"*","၊":",","။":".",$:"USD","€":"EUR","₢":"BRN","₣":"FRF","£":"GBP","₤":"ITL","₦":"NGN","₧":"ESP","₩":"KRW","₪":"ILS","₫":"VND","₭":"LAK","₮":"MNT","₯":"GRD","₱":"ARS","₲":"PYG","₳":"ARA","₴":"UAH","₵":"GHS","¢":"cent","¥":"CNY","元":"CNY","円":"YEN","﷼":"IRR","₠":"EWE","฿":"THB","₨":"INR","₹":"INR","₰":"PF","₺":"TRY","؋":"AFN","₼":"AZN","лв":"BGN","៛":"KHR","₡":"CRC","₸":"KZT","ден":"MKD","zł":"PLN","₽":"RUB","₾":"GEL"}
var o=["်","ް"]
var s={"ာ":"a","ါ":"a","ေ":"e","ဲ":"e","ိ":"i","ီ":"i","ို":"o","ု":"u","ူ":"u","ေါင်":"aung","ော":"aw","ော်":"aw","ေါ":"aw","ေါ်":"aw","်":"်","က်":"et","ိုက်":"aik","ောက်":"auk","င်":"in","ိုင်":"aing","ောင်":"aung","စ်":"it","ည်":"i","တ်":"at","ိတ်":"eik","ုတ်":"ok","ွတ်":"ut","ေတ်":"it","ဒ်":"d","ိုဒ်":"ok","ုဒ်":"ait","န်":"an","ာန်":"an","ိန်":"ein","ုန်":"on","ွန်":"un","ပ်":"at","ိပ်":"eik","ုပ်":"ok","ွပ်":"ut","န်ုပ်":"nub","မ်":"an","ိမ်":"ein","ုမ်":"on","ွမ်":"un","ယ်":"e","ိုလ်":"ol","ဉ်":"in","ံ":"an","ိံ":"ein","ုံ":"on","ައް":"ah","ަށް":"ah"}
var u={en:{},az:{"ç":"c","ə":"e","ğ":"g","ı":"i","ö":"o","ş":"s","ü":"u","Ç":"C","Ə":"E","Ğ":"G","İ":"I","Ö":"O","Ş":"S","Ü":"U"},cs:{"č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z"},fi:{"ä":"a","Ä":"A","ö":"o","Ö":"O"},hu:{"ä":"a","Ä":"A","ö":"o","Ö":"O","ü":"u","Ü":"U","ű":"u","Ű":"U"},lt:{"ą":"a","č":"c","ę":"e","ė":"e","į":"i","š":"s","ų":"u","ū":"u","ž":"z","Ą":"A","Č":"C","Ę":"E","Ė":"E","Į":"I","Š":"S","Ų":"U","Ū":"U"},lv:{"ā":"a","č":"c","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","š":"s","ū":"u","ž":"z","Ā":"A","Č":"C","Ē":"E","Ģ":"G","Ī":"i","Ķ":"k","Ļ":"L","Ņ":"N","Š":"S","Ū":"u","Ž":"Z"},pl:{"ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z","Ą":"A","Ć":"C","Ę":"e","Ł":"L","Ń":"N","Ó":"O","Ś":"S","Ź":"Z","Ż":"Z"},sk:{"ä":"a","Ä":"A"},sr:{"љ":"lj","њ":"nj","Љ":"Lj","Њ":"Nj","đ":"dj","Đ":"Dj"},tr:{"Ü":"U","Ö":"O","ü":"u","ö":"o"}}
var l={ar:{"∆":"delta","∞":"la-nihaya","♥":"hob","&":"wa","|":"aw","<":"aqal-men",">":"akbar-men","∑":"majmou","¤":"omla"},az:{},ca:{"∆":"delta","∞":"infinit","♥":"amor","&":"i","|":"o","<":"menys que",">":"mes que","∑":"suma dels","¤":"moneda"},cs:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"nebo","<":"mensi nez",">":"vetsi nez","∑":"soucet","¤":"mena"},de:{"∆":"delta","∞":"unendlich","♥":"Liebe","&":"und","|":"oder","<":"kleiner als",">":"groesser als","∑":"Summe von","¤":"Waehrung"},dv:{"∆":"delta","∞":"kolunulaa","♥":"loabi","&":"aai","|":"noonee","<":"ah vure kuda",">":"ah vure bodu","∑":"jumula","¤":"faisaa"},en:{"∆":"delta","∞":"infinity","♥":"love","&":"and","|":"or","<":"less than",">":"greater than","∑":"sum","¤":"currency"},es:{"∆":"delta","∞":"infinito","♥":"amor","&":"y","|":"u","<":"menos que",">":"mas que","∑":"suma de los","¤":"moneda"},fa:{"∆":"delta","∞":"bi-nahayat","♥":"eshgh","&":"va","|":"ya","<":"kamtar-az",">":"bishtar-az","∑":"majmooe","¤":"vahed"},fi:{"∆":"delta","∞":"aarettomyys","♥":"rakkaus","&":"ja","|":"tai","<":"pienempi kuin",">":"suurempi kuin","∑":"summa","¤":"valuutta"},fr:{"∆":"delta","∞":"infiniment","♥":"Amour","&":"et","|":"ou","<":"moins que",">":"superieure a","∑":"somme des","¤":"monnaie"},ge:{"∆":"delta","∞":"usasruloba","♥":"siqvaruli","&":"da","|":"an","<":"naklebi",">":"meti","∑":"jami","¤":"valuta"},gr:{},hu:{"∆":"delta","∞":"vegtelen","♥":"szerelem","&":"es","|":"vagy","<":"kisebb mint",">":"nagyobb mint","∑":"szumma","¤":"penznem"},it:{"∆":"delta","∞":"infinito","♥":"amore","&":"e","|":"o","<":"minore di",">":"maggiore di","∑":"somma","¤":"moneta"},lt:{"∆":"delta","∞":"begalybe","♥":"meile","&":"ir","|":"ar","<":"maziau nei",">":"daugiau nei","∑":"suma","¤":"valiuta"},lv:{"∆":"delta","∞":"bezgaliba","♥":"milestiba","&":"un","|":"vai","<":"mazak neka",">":"lielaks neka","∑":"summa","¤":"valuta"},my:{"∆":"kwahkhyaet","∞":"asaonasme","♥":"akhyait","&":"nhin","|":"tho","<":"ngethaw",">":"kyithaw","∑":"paungld","¤":"ngwekye"},mk:{},nl:{"∆":"delta","∞":"oneindig","♥":"liefde","&":"en","|":"of","<":"kleiner dan",">":"groter dan","∑":"som","¤":"valuta"},pl:{"∆":"delta","∞":"nieskonczonosc","♥":"milosc","&":"i","|":"lub","<":"mniejsze niz",">":"wieksze niz","∑":"suma","¤":"waluta"},pt:{"∆":"delta","∞":"infinito","♥":"amor","&":"e","|":"ou","<":"menor que",">":"maior que","∑":"soma","¤":"moeda"},ro:{"∆":"delta","∞":"infinit","♥":"dragoste","&":"si","|":"sau","<":"mai mic ca",">":"mai mare ca","∑":"suma","¤":"valuta"},ru:{"∆":"delta","∞":"beskonechno","♥":"lubov","&":"i","|":"ili","<":"menshe",">":"bolshe","∑":"summa","¤":"valjuta"},sk:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"alebo","<":"menej ako",">":"viac ako","∑":"sucet","¤":"mena"},sr:{},tr:{"∆":"delta","∞":"sonsuzluk","♥":"ask","&":"ve","|":"veya","<":"kucuktur",">":"buyuktur","∑":"toplam","¤":"para birimi"},uk:{"∆":"delta","∞":"bezkinechnist","♥":"lubov","&":"i","|":"abo","<":"menshe",">":"bilshe","∑":"suma","¤":"valjuta"},vn:{"∆":"delta","∞":"vo cuc","♥":"yeu","&":"va","|":"hoac","<":"nho hon",">":"lon hon","∑":"tong","¤":"tien te"}}
var c=[";","?",":","@","&","=","+","$",",","/"].join("")
var d=[";","?",":","@","&","=","+","$",","].join("")
var f=[".","!","~","*","'","(",")"].join("")
var h=function(e,t){var n="-"
var r=""
var a=""
var h=true
var m={}
var g
var y
var v
var b
var w
var k
var x
var M
var T
var D
var E
var S
var C
var P
var O=""
if("string"!==typeof e)return""
"string"===typeof t&&(n=t)
x=l.en
M=u.en
if("object"===typeof t){g=t.maintainCase||false
m=t.custom&&"object"===typeof t.custom?t.custom:m
v=+t.truncate>1&&t.truncate||false
b=t.uric||false
w=t.uricNoSlash||false
k=t.mark||false
h=false!==t.symbols&&false!==t.lang
n=t.separator||n
b&&(O+=c)
w&&(O+=d)
k&&(O+=f)
x=t.lang&&l[t.lang]&&h?l[t.lang]:h?l.en:{}
M=t.lang&&u[t.lang]?u[t.lang]:false===t.lang||true===t.lang?{}:u.en
if(t.titleCase&&"number"===typeof t.titleCase.length&&Array.prototype.toString.call(t.titleCase)){t.titleCase.forEach(function(e){m[e+""]=e+""})
y=true}else y=!!t.titleCase
t.custom&&"number"===typeof t.custom.length&&Array.prototype.toString.call(t.custom)&&t.custom.forEach(function(e){m[e+""]=e+""})
Object.keys(m).forEach(function(t){var n
n=t.length>1?new RegExp("\\b"+p(t)+"\\b","gi"):new RegExp(p(t),"gi")
e=e.replace(n,m[t])})
for(E in m)O+=E}O+=n
O=p(O)
e=e.replace(/(^\s+|\s+$)/g,"")
C=false
P=false
for(D=0,S=e.length;D<S;D++){E=e[D]
if(_(E,m))C=false
else if(M[E]){E=C&&M[E].match(/[A-Za-z0-9]/)?" "+M[E]:M[E]
C=false}else if(E in i){if(D+1<S&&o.indexOf(e[D+1])>=0){a+=E
E=""}else if(true===P){E=s[a]+i[E]
a=""}else E=C&&i[E].match(/[A-Za-z0-9]/)?" "+i[E]:i[E]
C=false
P=false}else if(E in s){a+=E
E=""
D===S-1&&(E=s[a])
P=true}else if(!x[E]||b&&-1!==c.indexOf(E)||w&&-1!==d.indexOf(E)){if(true===P){E=s[a]+E
a=""
P=false}else C&&(/[A-Za-z0-9]/.test(E)||r.substr(-1).match(/A-Za-z0-9]/))&&(E=" "+E)
C=false}else{E=C||r.substr(-1).match(/[A-Za-z0-9]/)?n+x[E]:x[E]
E+=void 0!==e[D+1]&&e[D+1].match(/[A-Za-z0-9]/)?n:""
C=true}r+=E.replace(new RegExp("[^\\w\\s"+O+"_-]","g"),n)}y&&(r=r.replace(/(\w)(\S*)/g,function(e,t,n){var r=t.toUpperCase()+(null!==n?n:"")
return Object.keys(m).indexOf(r.toLowerCase())<0?r:r.toLowerCase()}))
r=r.replace(/\s+/g,n).replace(new RegExp("\\"+n+"+","g"),n).replace(new RegExp("(^\\"+n+"+|\\"+n+"+$)","g"),"")
if(v&&r.length>v){T=r.charAt(v)===n
r=r.slice(0,v)
T||(r=r.slice(0,r.lastIndexOf(n)))}g||y||(r=r.toLowerCase())
return r}
var m=function(e){return function(t){return h(t,e)}}
var p=function(e){return e.replace(/[-\\^$*+?.()|[\]{}\/]/g,"\\$&")}
var _=function(e,t){for(var n in t)if(t[n]===e)return true}
if(e.exports){e.exports=h
e.exports.createSlug=m}else{r=[],a=function(){return h}.apply(t,r),void 0!==a&&(e.exports=a)}})()},yl30:function(e,t,n){"use strict"
var r=n("q1tI"),a=n("MgzW"),i=n("QCnb")
function o(e,t,n,r,a,i,o,s){if(!e){e=void 0
if(void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var u=[n,r,a,i,o,s],l=0
e=Error(t.replace(/%s/g,function(){return u[l++]}))
e.name="Invariant Violation"}e.framesToPop=1
throw e}}function s(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1])
o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}r||s("227")
function u(e,t,n,r,a,i,o,s,u){var l=Array.prototype.slice.call(arguments,3)
try{t.apply(n,l)}catch(e){this.onError(e)}}var l=!1,c=null,d=!1,f=null,h={onError:function(e){l=!0
c=e}}
function m(e,t,n,r,a,i,o,s,d){l=!1
c=null
u.apply(h,arguments)}function p(e,t,n,r,a,i,o,u,h){m.apply(this,arguments)
if(l){if(l){var p=c
l=!1
c=null}else s("198"),p=void 0
d||(d=!0,f=p)}}var _=null,g={}
function y(){if(_)for(var e in g){var t=g[e],n=_.indexOf(e);-1<n||s("96",e)
if(!b[n]){t.extractEvents||s("97",e)
b[n]=t
n=t.eventTypes
for(var r in n){var a=void 0
var i=n[r],o=t,u=r
w.hasOwnProperty(u)&&s("99",u)
w[u]=i
var l=i.phasedRegistrationNames
if(l){for(a in l)l.hasOwnProperty(a)&&v(l[a],o,u)
a=!0}else i.registrationName?(v(i.registrationName,o,u),a=!0):a=!1
a||s("98",r,e)}}}}function v(e,t,n){k[e]&&s("100",e)
k[e]=t
x[e]=t.eventTypes[n].dependencies}var b=[],w={},k={},x={},M=null,T=null,D=null
function E(e,t,n){var r=e.type||"unknown-event"
e.currentTarget=D(n)
p(r,t,void 0,e)
e.currentTarget=null}function S(e,t){null==t&&s("30")
if(null==e)return t
if(Array.isArray(e)){if(Array.isArray(t))return e.push.apply(e,t),e
e.push(t)
return e}return Array.isArray(t)?[e].concat(t):[e,t]}function C(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var P=null
function O(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances
if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)E(e,t[r],n[r])
else t&&E(e,t,n)
e._dispatchListeners=null
e._dispatchInstances=null
e.isPersistent()||e.constructor.release(e)}}var j={injectEventPluginOrder:function(e){_&&s("101")
_=Array.prototype.slice.call(e)
y()},injectEventPluginsByName:function(e){var t,n=!1
for(t in e)if(e.hasOwnProperty(t)){var r=e[t]
g.hasOwnProperty(t)&&g[t]===r||(g[t]&&s("102",t),g[t]=r,n=!0)}n&&y()}}
function A(e,t){var n=e.stateNode
if(!n)return null
var r=M(n)
if(!r)return null
n=r[t]
e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(r=!r.disabled)||(e=e.type,r=!("button"===e||"input"===e||"select"===e||"textarea"===e))
e=!r
break e
default:e=!1}if(e)return null
n&&"function"!==typeof n&&s("231",t,typeof n)
return n}function N(e){null!==e&&(P=S(P,e))
e=P
P=null
if(e&&(C(e,O),P&&s("95"),d))throw e=f,d=!1,f=null,e}var z=Math.random().toString(36).slice(2),I="__reactInternalInstance$"+z,L="__reactEventHandlers$"+z
function B(e){if(e[I])return e[I]
for(;!e[I];){if(!e.parentNode)return null
e=e.parentNode}e=e[I]
return 5===e.tag||6===e.tag?e:null}function R(e){e=e[I]
return!e||5!==e.tag&&6!==e.tag?null:e}function F(e){if(5===e.tag||6===e.tag)return e.stateNode
s("33")}function Y(e){return e[L]||null}function q(e){do{e=e.return}while(e&&5!==e.tag)
return e||null}function H(e,t,n){(t=A(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=S(n._dispatchListeners,t),n._dispatchInstances=S(n._dispatchInstances,e))}function U(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=q(t)
for(t=n.length;0<t--;)H(n[t],"captured",e)
for(t=0;t<n.length;t++)H(n[t],"bubbled",e)}}function W(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=A(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=S(n._dispatchListeners,t),n._dispatchInstances=S(n._dispatchInstances,e))}function K(e){e&&e.dispatchConfig.registrationName&&W(e._targetInst,null,e)}function V(e){C(e,U)}var $=!("undefined"===typeof window||!window.document||!window.document.createElement)
function G(e,t){var n={}
n[e.toLowerCase()]=t.toLowerCase()
n["Webkit"+e]="webkit"+t
n["Moz"+e]="moz"+t
return n}var J={animationend:G("Animation","AnimationEnd"),animationiteration:G("Animation","AnimationIteration"),animationstart:G("Animation","AnimationStart"),transitionend:G("Transition","TransitionEnd")},Q={},X={}
$&&(X=document.createElement("div").style,"AnimationEvent"in window||(delete J.animationend.animation,delete J.animationiteration.animation,delete J.animationstart.animation),"TransitionEvent"in window||delete J.transitionend.transition)
function Z(e){if(Q[e])return Q[e]
if(!J[e])return e
var t,n=J[e]
for(t in n)if(n.hasOwnProperty(t)&&t in X)return Q[e]=n[t]
return e}var ee=Z("animationend"),te=Z("animationiteration"),ne=Z("animationstart"),re=Z("transitionend"),ae="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ie=null,oe=null,se=null
function ue(){if(se)return se
var e,t,n=oe,r=n.length,a="value"in ie?ie.value:ie.textContent,i=a.length
for(e=0;e<r&&n[e]===a[e];e++);var o=r-e
for(t=1;t<=o&&n[r-t]===a[i-t];t++);return se=a.slice(e,1<t?1-t:void 0)}function le(){return!0}function ce(){return!1}function de(e,t,n,r){this.dispatchConfig=e
this._targetInst=t
this.nativeEvent=n
e=this.constructor.Interface
for(var a in e)e.hasOwnProperty(a)&&((t=e[a])?this[a]=t(n):"target"===a?this.target=r:this[a]=n[a])
this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?le:ce
this.isPropagationStopped=ce
return this}a(de.prototype,{preventDefault:function(){this.defaultPrevented=!0
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=le)},stopPropagation:function(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=le)},persist:function(){this.isPersistent=le},isPersistent:ce,destructor:function(){var e,t=this.constructor.Interface
for(e in t)this[e]=null
this.nativeEvent=this._targetInst=this.dispatchConfig=null
this.isPropagationStopped=this.isDefaultPrevented=ce
this._dispatchInstances=this._dispatchListeners=null}})
de.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null}
de.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this
t.prototype=r.prototype
var i=new t
a(i,n.prototype)
n.prototype=i
n.prototype.constructor=n
n.Interface=a({},r.Interface,e)
n.extend=r.extend
me(n)
return n}
me(de)
function fe(e,t,n,r){if(this.eventPool.length){var a=this.eventPool.pop()
this.call(a,e,t,n,r)
return a}return new this(e,t,n,r)}function he(e){e instanceof this||s("279")
e.destructor()
10>this.eventPool.length&&this.eventPool.push(e)}function me(e){e.eventPool=[]
e.getPooled=fe
e.release=he}var pe=de.extend({data:null}),_e=de.extend({data:null}),ge=[9,13,27,32],ye=$&&"CompositionEvent"in window,ve=null
$&&"documentMode"in document&&(ve=document.documentMode)
var be=$&&"TextEvent"in window&&!ve,we=$&&(!ye||ve&&8<ve&&11>=ve),ke=String.fromCharCode(32),xe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Me=!1
function Te(e,t){switch(e){case"keyup":return-1!==ge.indexOf(t.keyCode)
case"keydown":return 229!==t.keyCode
case"keypress":case"mousedown":case"blur":return!0
default:return!1}}function De(e){e=e.detail
return"object"===typeof e&&"data"in e?e.data:null}var Ee=!1
function Se(e,t){switch(e){case"compositionend":return De(t)
case"keypress":if(32!==t.which)return null
Me=!0
return ke
case"textInput":return e=t.data,e===ke&&Me?null:e
default:return null}}function Ce(e,t){if(Ee)return"compositionend"===e||!ye&&Te(e,t)?(e=ue(),se=oe=ie=null,Ee=!1,e):null
switch(e){case"paste":return null
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case"compositionend":return we&&"ko"!==t.locale?null:t.data
default:return null}}var Pe={eventTypes:xe,extractEvents:function(e,t,n,r){var a=void 0
var i=void 0
if(ye)e:{switch(e){case"compositionstart":a=xe.compositionStart
break e
case"compositionend":a=xe.compositionEnd
break e
case"compositionupdate":a=xe.compositionUpdate
break e}a=void 0}else Ee?Te(e,n)&&(a=xe.compositionEnd):"keydown"===e&&229===n.keyCode&&(a=xe.compositionStart)
a?(we&&"ko"!==n.locale&&(Ee||a!==xe.compositionStart?a===xe.compositionEnd&&Ee&&(i=ue()):(ie=r,oe="value"in ie?ie.value:ie.textContent,Ee=!0)),a=pe.getPooled(a,t,n,r),i?a.data=i:(i=De(n),null!==i&&(a.data=i)),V(a),i=a):i=null;(e=be?Se(e,n):Ce(e,n))?(t=_e.getPooled(xe.beforeInput,t,n,r),t.data=e,V(t)):t=null
return null===i?t:null===t?i:[i,t]}},Oe=null,je=null,Ae=null
function Ne(e){if(e=T(e)){"function"!==typeof Oe&&s("280")
var t=M(e.stateNode)
Oe(e.stateNode,e.type,t)}}function ze(e){je?Ae?Ae.push(e):Ae=[e]:je=e}function Ie(){if(je){var e=je,t=Ae
Ae=je=null
Ne(e)
if(t)for(e=0;e<t.length;e++)Ne(t[e])}}function Le(e,t){return e(t)}function Be(e,t,n){return e(t,n)}function Re(){}var Fe=!1
function Ye(e,t){if(Fe)return e(t)
Fe=!0
try{return Le(e,t)}finally{(Fe=!1,null!==je||null!==Ae)&&(Re(),Ie())}}var qe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
function He(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return"input"===t?!!qe[e.type]:"textarea"===t}function Ue(e){e=e.target||e.srcElement||window
e.correspondingUseElement&&(e=e.correspondingUseElement)
return 3===e.nodeType?e.parentNode:e}function We(e){if(!$)return!1
e="on"+e
var t=e in document
t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t="function"===typeof t[e])
return t}function Ke(e){var t=e.type
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Ve(e){var t=Ke(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t]
if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set
Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e
i.call(this,e)}})
Object.defineProperty(e,t,{enumerable:n.enumerable})
return{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null
delete e[t]}}}}function $e(e){e._valueTracker||(e._valueTracker=Ve(e))}function Ge(e){if(!e)return!1
var t=e._valueTracker
if(!t)return!0
var n=t.getValue()
var r=""
e&&(r=Ke(e)?e.checked?"true":"false":e.value)
e=r
return e!==n&&(t.setValue(e),!0)}var Je=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
Je.hasOwnProperty("ReactCurrentDispatcher")||(Je.ReactCurrentDispatcher={current:null})
var Qe=/^(.*)[\\\/]/,Xe="function"===typeof Symbol&&Symbol.for,Ze=Xe?Symbol.for("react.element"):60103,et=Xe?Symbol.for("react.portal"):60106,tt=Xe?Symbol.for("react.fragment"):60107,nt=Xe?Symbol.for("react.strict_mode"):60108,rt=Xe?Symbol.for("react.profiler"):60114,at=Xe?Symbol.for("react.provider"):60109,it=Xe?Symbol.for("react.context"):60110,ot=Xe?Symbol.for("react.concurrent_mode"):60111,st=Xe?Symbol.for("react.forward_ref"):60112,ut=Xe?Symbol.for("react.suspense"):60113,lt=Xe?Symbol.for("react.memo"):60115,ct=Xe?Symbol.for("react.lazy"):60116,dt="function"===typeof Symbol&&Symbol.iterator
function ft(e){if(null===e||"object"!==typeof e)return null
e=dt&&e[dt]||e["@@iterator"]
return"function"===typeof e?e:null}function ht(e){if(null==e)return null
if("function"===typeof e)return e.displayName||e.name||null
if("string"===typeof e)return e
switch(e){case ot:return"ConcurrentMode"
case tt:return"Fragment"
case et:return"Portal"
case rt:return"Profiler"
case nt:return"StrictMode"
case ut:return"Suspense"}if("object"===typeof e)switch(e.$$typeof){case it:return"Context.Consumer"
case at:return"Context.Provider"
case st:var t=e.render
t=t.displayName||t.name||""
return e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef")
case lt:return ht(e.type)
case ct:if(e=1===e._status?e._result:null)return ht(e)}return null}function mt(e){var t=""
do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n=""
break e
default:var r=e._debugOwner,a=e._debugSource,i=ht(e.type)
n=null
r&&(n=ht(r.type))
r=i
i=""
a?i=" (at "+a.fileName.replace(Qe,"")+":"+a.lineNumber+")":n&&(i=" (created by "+n+")")
n="\n    in "+(r||"Unknown")+i}t+=n
e=e.return}while(e)
return t}var pt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_t=Object.prototype.hasOwnProperty,gt={},yt={}
function vt(e){if(_t.call(yt,e))return!0
if(_t.call(gt,e))return!1
if(pt.test(e))return yt[e]=!0
gt[e]=!0
return!1}function bt(e,t,n,r){if(null!==n&&0===n.type)return!1
switch(typeof t){case"function":case"symbol":return!0
case"boolean":if(r)return!1
if(null!==n)return!n.acceptsBooleans
e=e.toLowerCase().slice(0,5)
return"data-"!==e&&"aria-"!==e
default:return!1}}function wt(e,t,n,r){if(null===t||"undefined"===typeof t||bt(e,t,n,r))return!0
if(r)return!1
if(null!==n)switch(n.type){case 3:return!t
case 4:return!1===t
case 5:return isNaN(t)
case 6:return isNaN(t)||1>t}return!1}function kt(e,t,n,r,a){this.acceptsBooleans=2===t||3===t||4===t
this.attributeName=r
this.attributeNamespace=a
this.mustUseProperty=n
this.propertyName=e
this.type=t}var xt={}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new kt(e,0,!1,e,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0]
xt[t]=new kt(t,1,!1,e[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new kt(e,2,!1,e.toLowerCase(),null)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new kt(e,2,!1,e,null)})
"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new kt(e,3,!1,e.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new kt(e,3,!0,e,null)});["capture","download"].forEach(function(e){xt[e]=new kt(e,4,!1,e,null)});["cols","rows","size","span"].forEach(function(e){xt[e]=new kt(e,6,!1,e,null)});["rowSpan","start"].forEach(function(e){xt[e]=new kt(e,5,!1,e.toLowerCase(),null)})
var Mt=/[\-:]([a-z])/g
function Tt(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mt,Tt)
xt[t]=new kt(t,1,!1,e,null)})
"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mt,Tt)
xt[t]=new kt(t,1,!1,e,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mt,Tt)
xt[t]=new kt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new kt(e,1,!1,e.toLowerCase(),null)})
function Dt(e,t,n,r){var a=xt.hasOwnProperty(t)?xt[t]:null
var i=null!==a?0===a.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1]))
i||(wt(t,n,a,r)&&(n=null),r||null===a?vt(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(a=a.type,n=3===a||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function Et(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e
default:return""}}function St(e,t){var n=t.checked
return a({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ct(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked
n=Et(null!=t.value?t.value:n)
e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Pt(e,t){t=t.checked
null!=t&&Dt(e,"checked",t,!1)}function Ot(e,t){Pt(e,t)
var n=Et(t.value),r=t.type
if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n)
else if("submit"===r||"reset"===r){e.removeAttribute("value")
return}t.hasOwnProperty("value")?At(e,t.type,n):t.hasOwnProperty("defaultValue")&&At(e,t.type,Et(t.defaultValue))
null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function jt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type
if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return
t=""+e._wrapperState.initialValue
n||t===e.value||(e.value=t)
e.defaultValue=t}n=e.name
""!==n&&(e.name="")
e.defaultChecked=!e.defaultChecked
e.defaultChecked=!!e._wrapperState.initialChecked
""!==n&&(e.name=n)}function At(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nt={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}}
function zt(e,t,n){e=de.getPooled(Nt.change,e,t,n)
e.type="change"
ze(n)
V(e)
return e}var It=null,Lt=null
function Bt(e){N(e)}function Rt(e){var t=F(e)
if(Ge(t))return e}function Ft(e,t){if("change"===e)return t}var Yt=!1
$&&(Yt=We("input")&&(!document.documentMode||9<document.documentMode))
function qt(){It&&(It.detachEvent("onpropertychange",Ht),Lt=It=null)}function Ht(e){"value"===e.propertyName&&Rt(Lt)&&(e=zt(Lt,e,Ue(e)),Ye(Bt,e))}function Ut(e,t,n){"focus"===e?(qt(),It=t,Lt=n,It.attachEvent("onpropertychange",Ht)):"blur"===e&&qt()}function Wt(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Rt(Lt)}function Kt(e,t){if("click"===e)return Rt(t)}function Vt(e,t){if("input"===e||"change"===e)return Rt(t)}var $t={eventTypes:Nt,_isInputEventSupported:Yt,extractEvents:function(e,t,n,r){var a=t?F(t):window,i=void 0,o=void 0,s=a.nodeName&&a.nodeName.toLowerCase()
"select"===s||"input"===s&&"file"===a.type?i=Ft:He(a)?Yt?i=Vt:(i=Wt,o=Ut):(s=a.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(i=Kt)
if(i&&(i=i(e,t)))return zt(i,n,r)
o&&o(e,a,t)
"blur"===e&&(e=a._wrapperState)&&e.controlled&&"number"===a.type&&At(a,"number",a.value)}},Gt=de.extend({view:null,detail:null}),Jt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
function Qt(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):!!(e=Jt[e])&&!!t[e]}function Xt(){return Qt}var Zt=0,en=0,tn=!1,nn=!1,rn=Gt.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Xt,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX
var t=Zt
Zt=e.screenX
return tn?"mousemove"===e.type?e.screenX-t:0:(tn=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY
var t=en
en=e.screenY
return nn?"mousemove"===e.type?e.screenY-t:0:(nn=!0,0)}}),an=rn.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),on={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},sn={eventTypes:on,extractEvents:function(e,t,n,r){var a="mouseover"===e||"pointerover"===e,i="mouseout"===e||"pointerout"===e
if(a&&(n.relatedTarget||n.fromElement)||!i&&!a)return null
a=r.window===r?r:(a=r.ownerDocument)?a.defaultView||a.parentWindow:window
i?(i=t,t=(t=n.relatedTarget||n.toElement)?B(t):null):i=null
if(i===t)return null
var o=void 0,s=void 0,u=void 0,l=void 0
"mouseout"===e||"mouseover"===e?(o=rn,s=on.mouseLeave,u=on.mouseEnter,l="mouse"):"pointerout"!==e&&"pointerover"!==e||(o=an,s=on.pointerLeave,u=on.pointerEnter,l="pointer")
var c=null==i?a:F(i)
a=null==t?a:F(t)
e=o.getPooled(s,i,n,r)
e.type=l+"leave"
e.target=c
e.relatedTarget=a
n=o.getPooled(u,t,n,r)
n.type=l+"enter"
n.target=a
n.relatedTarget=c
r=t
if(i&&r)e:{t=i
a=r
l=0
for(o=t;o;o=q(o))l++
o=0
for(u=a;u;u=q(u))o++
for(;0<l-o;)t=q(t),l--
for(;0<o-l;)a=q(a),o--
for(;l--;){if(t===a||t===a.alternate)break e
t=q(t)
a=q(a)}t=null}else t=null
a=t
for(t=[];i&&i!==a;){l=i.alternate
if(null!==l&&l===a)break
t.push(i)
i=q(i)}for(i=[];r&&r!==a;){l=r.alternate
if(null!==l&&l===a)break
i.push(r)
r=q(r)}for(r=0;r<t.length;r++)W(t[r],"bubbled",e)
for(r=i.length;0<r--;)W(i[r],"captured",n)
return[e,n]}}
function un(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t}var ln=Object.prototype.hasOwnProperty
function cn(e,t){if(un(e,t))return!0
if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1
var n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return!1
for(r=0;r<n.length;r++)if(!ln.call(t,n[r])||!un(e[n[r]],t[n[r]]))return!1
return!0}function dn(e){var t=e
if(e.alternate)for(;t.return;)t=t.return
else{if(0!==(2&t.effectTag))return 1
for(;t.return;)if(t=t.return,0!==(2&t.effectTag))return 1}return 3===t.tag?2:3}function fn(e){2!==dn(e)&&s("188")}function hn(e){var t=e.alternate
if(!t)return t=dn(e),3===t&&s("188"),1===t?null:e
for(var n=e,r=t;;){var a=n.return,i=a?a.alternate:null
if(!a||!i)break
if(a.child===i.child){for(var o=a.child;o;){if(o===n)return fn(a),e
if(o===r)return fn(a),t
o=o.sibling}s("188")}if(n.return!==r.return)n=a,r=i
else{o=!1
for(var u=a.child;u;){if(u===n){o=!0
n=a
r=i
break}if(u===r){o=!0
r=a
n=i
break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0
n=i
r=a
break}if(u===r){o=!0
r=i
n=a
break}u=u.sibling}o||s("189")}}n.alternate!==r&&s("190")}3!==n.tag&&s("188")
return n.stateNode.current===n?e:t}function mn(e){e=hn(e)
if(!e)return null
for(var t=e;;){if(5===t.tag||6===t.tag)return t
if(t.child)t.child.return=t,t=t.child
else{if(t===e)break
for(;!t.sibling;){if(!t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return
t=t.sibling}}return null}var pn=de.extend({animationName:null,elapsedTime:null,pseudoElement:null}),_n=de.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gn=Gt.extend({relatedTarget:null})
function yn(e){var t=e.keyCode
"charCode"in e?(e=e.charCode,0===e&&13===t&&(e=13)):e=t
10===e&&(e=13)
return 32<=e||13===e?e:0}var vn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wn=Gt.extend({key:function(e){if(e.key){var t=vn[e.key]||e.key
if("Unidentified"!==t)return t}return"keypress"===e.type?(e=yn(e),13===e?"Enter":String.fromCharCode(e)):"keydown"===e.type||"keyup"===e.type?bn[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Xt,charCode:function(e){return"keypress"===e.type?yn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?yn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),kn=rn.extend({dataTransfer:null}),xn=Gt.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Xt}),Mn=de.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Tn=rn.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Dn=[["abort","abort"],[ee,"animationEnd"],[te,"animationIteration"],[ne,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[re,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],En={},Sn={}
function Cn(e,t){var n=e[0]
e=e[1]
var r="on"+(e[0].toUpperCase()+e.slice(1))
t={phasedRegistrationNames:{bubbled:r,captured:r+"Capture"},dependencies:[n],isInteractive:t}
En[e]=t
Sn[n]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(e){Cn(e,!0)})
Dn.forEach(function(e){Cn(e,!1)})
var Pn={eventTypes:En,isInteractiveTopLevelEventType:function(e){e=Sn[e]
return void 0!==e&&!0===e.isInteractive},extractEvents:function(e,t,n,r){var a=Sn[e]
if(!a)return null
switch(e){case"keypress":if(0===yn(n))return null
case"keydown":case"keyup":e=wn
break
case"blur":case"focus":e=gn
break
case"click":if(2===n.button)return null
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=rn
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=kn
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=xn
break
case ee:case te:case ne:e=pn
break
case re:e=Mn
break
case"scroll":e=Gt
break
case"wheel":e=Tn
break
case"copy":case"cut":case"paste":e=_n
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=an
break
default:e=de}t=e.getPooled(a,t,n,r)
V(t)
return t}},On=Pn.isInteractiveTopLevelEventType,jn=[]
function An(e){var t=e.targetInst,n=t
do{if(!n){e.ancestors.push(n)
break}var r
for(r=n;r.return;)r=r.return
r=3!==r.tag?null:r.stateNode.containerInfo
if(!r)break
e.ancestors.push(n)
n=B(r)}while(n)
for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n]
var a=Ue(e.nativeEvent)
r=e.topLevelType
for(var i=e.nativeEvent,o=null,s=0;s<b.length;s++){var u=b[s]
u&&(u=u.extractEvents(r,t,i,a))&&(o=S(o,u))}N(o)}}var Nn=!0
function zn(e,t){if(!t)return null
var n=(On(e)?Ln:Bn).bind(null,e)
t.addEventListener(e,n,!1)}function In(e,t){if(!t)return null
var n=(On(e)?Ln:Bn).bind(null,e)
t.addEventListener(e,n,!0)}function Ln(e,t){Be(Bn,e,t)}function Bn(e,t){if(Nn){var n=Ue(t)
n=B(n)
null===n||"number"!==typeof n.tag||2===dn(n)||(n=null)
if(jn.length){var r=jn.pop()
r.topLevelType=e
r.nativeEvent=t
r.targetInst=n
e=r}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]}
try{Ye(An,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>jn.length&&jn.push(e)}}}var Rn={},Fn=0,Yn="_reactListenersID"+(""+Math.random()).slice(2)
function qn(e){Object.prototype.hasOwnProperty.call(e,Yn)||(e[Yn]=Fn++,Rn[e[Yn]]={})
return Rn[e[Yn]]}function Hn(e){e=e||("undefined"!==typeof document?document:void 0)
if("undefined"===typeof e)return null
try{return e.activeElement||e.body}catch(t){return e.body}}function Un(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function Wn(e,t){var n=Un(e)
e=0
for(var r;n;){if(3===n.nodeType){r=e+n.textContent.length
if(e<=t&&r>=t)return{node:n,offset:t-e}
e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling
break e}n=n.parentNode}n=void 0}n=Un(n)}}function Kn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Kn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Vn(){for(var e=window,t=Hn();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break
e=t.contentWindow
t=Hn(e.document)}return t}function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Gn(){var e=Vn()
if($n(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd}
else e:{t=(t=e.ownerDocument)&&t.defaultView||window
var n=t.getSelection&&t.getSelection()
if(n&&0!==n.rangeCount){t=n.anchorNode
var r=n.anchorOffset,a=n.focusNode
n=n.focusOffset
try{t.nodeType,a.nodeType}catch(e){t=null
break e}var i=0,o=-1,s=-1,u=0,l=0,c=e,d=null
t:for(;;){for(var f;;){c!==t||0!==r&&3!==c.nodeType||(o=i+r)
c!==a||0!==n&&3!==c.nodeType||(s=i+n)
3===c.nodeType&&(i+=c.nodeValue.length)
if(null===(f=c.firstChild))break
d=c
c=f}for(;;){if(c===e)break t
d===t&&++u===r&&(o=i)
d===a&&++l===n&&(s=i)
if(null!==(f=c.nextSibling))break
c=d
d=c.parentNode}c=f}t=-1===o||-1===s?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null
return{focusedElem:e,selectionRange:t}}function Jn(e){var t=Vn(),n=e.focusedElem,r=e.selectionRange
if(t!==n&&n&&n.ownerDocument&&Kn(n.ownerDocument.documentElement,n)){if(null!==r&&$n(n))if(t=r.start,e=r.end,void 0===e&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length)
else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection()
var a=n.textContent.length,i=Math.min(r.start,a)
r=void 0===r.end?i:Math.min(r.end,a)
!e.extend&&i>r&&(a=r,r=i,i=a)
a=Wn(n,i)
var o=Wn(n,r)
a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}t=[]
for(e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop})
"function"===typeof n.focus&&n.focus()
for(n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qn=$&&"documentMode"in document&&11>=document.documentMode,Xn={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Zn=null,er=null,tr=null,nr=!1
function rr(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument
if(nr||null==Zn||Zn!==Hn(n))return null
n=Zn
"selectionStart"in n&&$n(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset})
return tr&&cn(tr,n)?null:(tr=n,e=de.getPooled(Xn.select,er,e,t),e.type="select",e.target=Zn,V(e),e)}var ar={eventTypes:Xn,extractEvents:function(e,t,n,r){var a,i=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument
if(!(a=!i)){e:{i=qn(i)
a=x.onSelect
for(var o=0;o<a.length;o++){var s=a[o]
if(!i.hasOwnProperty(s)||!i[s]){i=!1
break e}}i=!0}a=!i}if(a)return null
i=t?F(t):window
switch(e){case"focus":(He(i)||"true"===i.contentEditable)&&(Zn=i,er=t,tr=null)
break
case"blur":tr=er=Zn=null
break
case"mousedown":nr=!0
break
case"contextmenu":case"mouseup":case"dragend":return nr=!1,rr(n,r)
case"selectionchange":if(Qn)break
case"keydown":case"keyup":return rr(n,r)}return null}}
j.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "))
M=Y
T=R
D=F
j.injectEventPluginsByName({SimpleEventPlugin:Pn,EnterLeaveEventPlugin:sn,ChangeEventPlugin:$t,SelectEventPlugin:ar,BeforeInputEventPlugin:Pe})
function ir(e){var t=""
r.Children.forEach(e,function(e){null!=e&&(t+=e)})
return t}function or(e,t){e=a({children:void 0},t);(t=ir(t.children))&&(e.children=t)
return e}function sr(e,t,n,r){e=e.options
if(t){t={}
for(var a=0;a<n.length;a++)t["$"+n[a]]=!0
for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{n=""+Et(n)
t=null
for(a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0
r&&(e[a].defaultSelected=!0)
return}null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ur(e,t){null!=t.dangerouslySetInnerHTML&&s("91")
return a({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lr(e,t){var n=t.value
null==n&&(n=t.defaultValue,t=t.children,null!=t&&(null!=n&&s("92"),Array.isArray(t)&&(1>=t.length||s("93"),t=t[0]),n=t),null==n&&(n=""))
e._wrapperState={initialValue:Et(n)}}function cr(e,t){var n=Et(t.value),r=Et(t.defaultValue)
null!=n&&(n=""+n,n!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n))
null!=r&&(e.defaultValue=""+r)}function dr(e){var t=e.textContent
t===e._wrapperState.initialValue&&(e.value=t)}var fr={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"}
function hr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg"
case"math":return"http://www.w3.org/1998/Math/MathML"
default:return"http://www.w3.org/1999/xhtml"}}function mr(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?hr(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var pr=void 0,_r=(gr=function(e,t){if(e.namespaceURI!==fr.svg||"innerHTML"in e)e.innerHTML=t
else{pr=pr||document.createElement("div")
pr.innerHTML="<svg>"+t+"</svg>"
for(t=pr.firstChild;e.firstChild;)e.removeChild(e.firstChild)
for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return gr(e,t,n,r)})}:gr)
var gr
function yr(e,t){if(t){var n=e.firstChild
if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t
return}}e.textContent=t}var vr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},br=["Webkit","ms","Moz","O"]
Object.keys(vr).forEach(function(e){br.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1)
vr[t]=vr[e]})})
function wr(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function kr(e,t){e=e.style
for(var n in t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=wr(n,t[n],r)
"float"===n&&(n="cssFloat")
r?e.setProperty(n,a):e[n]=a}}var xr=a({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0})
function Mr(e,t){t&&(xr[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&s("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&s("60"),"object"===typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||s("61")),null!=t.style&&"object"!==typeof t.style&&s("62",""))}function Tr(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1
default:return!0}}function Dr(e,t){e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument
var n=qn(e)
t=x[t]
for(var r=0;r<t.length;r++){var a=t[r]
if(!n.hasOwnProperty(a)||!n[a]){switch(a){case"scroll":In("scroll",e)
break
case"focus":case"blur":In("focus",e)
In("blur",e)
n.blur=!0
n.focus=!0
break
case"cancel":case"close":We(a)&&In(a,e)
break
case"invalid":case"submit":case"reset":break
default:-1===ae.indexOf(a)&&zn(a,e)}n[a]=!0}}}function Er(){}var Sr=null,Cr=null
function Pr(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Or(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var jr="function"===typeof setTimeout?setTimeout:void 0,Ar="function"===typeof clearTimeout?clearTimeout:void 0,Nr=i.unstable_scheduleCallback,zr=i.unstable_cancelCallback
function Ir(e,t,n,r,a){e[L]=a
"input"===n&&"radio"===a.type&&null!=a.name&&Pt(e,a)
Tr(n,r)
r=Tr(n,a)
for(var i=0;i<t.length;i+=2){var o=t[i],s=t[i+1]
"style"===o?kr(e,s):"dangerouslySetInnerHTML"===o?_r(e,s):"children"===o?yr(e,s):Dt(e,o,s,r)}switch(n){case"input":Ot(e,a)
break
case"textarea":cr(e,a)
break
case"select":t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!a.multiple,n=a.value,null!=n?sr(e,!!a.multiple,n,!1):t!==!!a.multiple&&(null!=a.defaultValue?sr(e,!!a.multiple,a.defaultValue,!0):sr(e,!!a.multiple,a.multiple?[]:"",!1))}}function Lr(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling
return e}function Br(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling
return e}new Set
var Rr=[],Fr=-1
function Yr(e){0>Fr||(e.current=Rr[Fr],Rr[Fr]=null,Fr--)}function qr(e,t){Fr++
Rr[Fr]=e.current
e.current=t}var Hr={},Ur={current:Hr},Wr={current:!1},Kr=Hr
function Vr(e,t){var n=e.type.contextTypes
if(!n)return Hr
var r=e.stateNode
if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext
var a,i={}
for(a in n)i[a]=t[a]
r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i)
return i}function $r(e){e=e.childContextTypes
return null!==e&&void 0!==e}function Gr(e){Yr(Wr,e)
Yr(Ur,e)}function Jr(e){Yr(Wr,e)
Yr(Ur,e)}function Qr(e,t,n){Ur.current!==Hr&&s("168")
qr(Ur,t,e)
qr(Wr,n,e)}function Xr(e,t,n){var r=e.stateNode
e=t.childContextTypes
if("function"!==typeof r.getChildContext)return n
r=r.getChildContext()
for(var i in r)i in e||s("108",ht(t)||"Unknown",i)
return a({},n,r)}function Zr(e){var t=e.stateNode
t=t&&t.__reactInternalMemoizedMergedChildContext||Hr
Kr=Ur.current
qr(Ur,t,e)
qr(Wr,Wr.current,e)
return!0}function ea(e,t,n){var r=e.stateNode
r||s("169")
n?(t=Xr(e,t,Kr),r.__reactInternalMemoizedMergedChildContext=t,Yr(Wr,e),Yr(Ur,e),qr(Ur,t,e)):Yr(Wr,e)
qr(Wr,n,e)}var ta=null,na=null
function ra(e){return function(t){try{return e(t)}catch(e){}}}function aa(e){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1
var t=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(t.isDisabled||!t.supportsFiber)return!0
try{var n=t.inject(e)
ta=ra(function(e){return t.onCommitFiberRoot(n,e)})
na=ra(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){}return!0}function ia(e,t,n,r){this.tag=e
this.key=n
this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null
this.index=0
this.ref=null
this.pendingProps=t
this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null
this.mode=r
this.effectTag=0
this.lastEffect=this.firstEffect=this.nextEffect=null
this.childExpirationTime=this.expirationTime=0
this.alternate=null}function oa(e,t,n,r){return new ia(e,t,n,r)}function sa(e){e=e.prototype
return!(!e||!e.isReactComponent)}function ua(e){if("function"===typeof e)return sa(e)?1:0
if(void 0!==e&&null!==e){e=e.$$typeof
if(e===st)return 11
if(e===lt)return 14}return 2}function la(e,t){var n=e.alternate
null===n?(n=oa(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null)
n.childExpirationTime=e.childExpirationTime
n.expirationTime=e.expirationTime
n.child=e.child
n.memoizedProps=e.memoizedProps
n.memoizedState=e.memoizedState
n.updateQueue=e.updateQueue
n.contextDependencies=e.contextDependencies
n.sibling=e.sibling
n.index=e.index
n.ref=e.ref
return n}function ca(e,t,n,r,a,i){var o=2
r=e
if("function"===typeof e)sa(e)&&(o=1)
else if("string"===typeof e)o=5
else e:switch(e){case tt:return da(n.children,a,i,t)
case ot:return fa(n,3|a,i,t)
case nt:return fa(n,2|a,i,t)
case rt:return e=oa(12,n,t,4|a),e.elementType=rt,e.type=rt,e.expirationTime=i,e
case ut:return e=oa(13,n,t,a),e.elementType=ut,e.type=ut,e.expirationTime=i,e
default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case at:o=10
break e
case it:o=9
break e
case st:o=11
break e
case lt:o=14
break e
case ct:o=16
r=null
break e}s("130",null==e?e:typeof e,"")}t=oa(o,n,t,a)
t.elementType=e
t.type=r
t.expirationTime=i
return t}function da(e,t,n,r){e=oa(7,e,r,t)
e.expirationTime=n
return e}function fa(e,t,n,r){e=oa(8,e,r,t)
t=0===(1&t)?nt:ot
e.elementType=t
e.type=t
e.expirationTime=n
return e}function ha(e,t,n){e=oa(6,e,null,t)
e.expirationTime=n
return e}function ma(e,t,n){t=oa(4,null!==e.children?e.children:[],e.key,t)
t.expirationTime=n
t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation}
return t}function pa(e,t){e.didError=!1
var n=e.earliestPendingTime
0===n?e.earliestPendingTime=e.latestPendingTime=t:n<t?e.earliestPendingTime=t:e.latestPendingTime>t&&(e.latestPendingTime=t)
va(t,e)}function _a(e,t){e.didError=!1
if(0===t)e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0
else{t<e.latestPingedTime&&(e.latestPingedTime=0)
var n=e.latestPendingTime
0!==n&&(n>t?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime>t&&(e.earliestPendingTime=e.latestPendingTime))
n=e.earliestSuspendedTime
0===n?pa(e,t):t<e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,pa(e,t)):t>n&&pa(e,t)}va(0,e)}function ga(e,t){e.didError=!1
e.latestPingedTime>=t&&(e.latestPingedTime=0)
var n=e.earliestPendingTime,r=e.latestPendingTime
n===t?e.earliestPendingTime=r===t?e.latestPendingTime=0:r:r===t&&(e.latestPendingTime=n)
n=e.earliestSuspendedTime
r=e.latestSuspendedTime
0===n?e.earliestSuspendedTime=e.latestSuspendedTime=t:n<t?e.earliestSuspendedTime=t:r>t&&(e.latestSuspendedTime=t)
va(t,e)}function ya(e,t){var n=e.earliestPendingTime
e=e.earliestSuspendedTime
n>t&&(t=n)
e>t&&(t=e)
return t}function va(e,t){var n=t.earliestSuspendedTime,r=t.latestSuspendedTime,a=t.earliestPendingTime,i=t.latestPingedTime
a=0!==a?a:i
0===a&&(0===e||r<e)&&(a=r)
e=a
0!==e&&n>e&&(e=n)
t.nextExpirationTimeToWorkOn=a
t.expirationTime=e}function ba(e,t){if(e&&e.defaultProps){t=a({},t)
e=e.defaultProps
for(var n in e)void 0===t[n]&&(t[n]=e[n])}return t}function wa(e){var t=e._result
switch(e._status){case 1:return t
case 2:case 0:throw t
default:e._status=0
t=e._ctor
t=t()
t.then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)})
switch(e._status){case 1:return e._result
case 2:throw e._result}e._result=t
throw t}}var ka=(new r.Component).refs
function xa(e,t,n,r){t=e.memoizedState
n=n(r,t)
n=null===n||void 0===n?t:a({},t,n)
e.memoizedState=n
r=e.updateQueue
null!==r&&0===e.expirationTime&&(r.baseState=n)}var Ma={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===dn(e)},enqueueSetState:function(e,t,n){e=e._reactInternalFiber
var r=Ws()
r=ps(r,e)
var a=mo(r)
a.payload=t
void 0!==n&&null!==n&&(a.callback=n)
ls()
_o(e,a)
vs(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber
var r=Ws()
r=ps(r,e)
var a=mo(r)
a.tag=so
a.payload=t
void 0!==n&&null!==n&&(a.callback=n)
ls()
_o(e,a)
vs(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber
var n=Ws()
n=ps(n,e)
var r=mo(n)
r.tag=uo
void 0!==t&&null!==t&&(r.callback=t)
ls()
_o(e,r)
vs(e,n)}}
function Ta(e,t,n,r,a,i,o){e=e.stateNode
return"function"===typeof e.shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!cn(n,r)||!cn(a,i))}function Da(e,t,n){var r=!1,a=Hr
var i=t.contextType
"object"===typeof i&&null!==i?i=io(i):(a=$r(t)?Kr:Ur.current,r=t.contextTypes,i=(r=null!==r&&void 0!==r)?Vr(e,a):Hr)
t=new t(n,i)
e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null
t.updater=Ma
e.stateNode=t
t._reactInternalFiber=e
r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i)
return t}function Ea(e,t,n,r){e=t.state
"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r)
"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r)
t.state!==e&&Ma.enqueueReplaceState(t,t.state,null)}function Sa(e,t,n,r){var a=e.stateNode
a.props=n
a.state=e.memoizedState
a.refs=ka
var i=t.contextType
"object"===typeof i&&null!==i?a.context=io(i):(i=$r(t)?Kr:Ur.current,a.context=Vr(e,i))
i=e.updateQueue
null!==i&&(bo(e,i,n,a,r),a.state=e.memoizedState)
i=t.getDerivedStateFromProps
"function"===typeof i&&(xa(e,t,i,n),a.state=e.memoizedState)
"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&Ma.enqueueReplaceState(a,a.state,null),i=e.updateQueue,null!==i&&(bo(e,i,n,a,r),a.state=e.memoizedState))
"function"===typeof a.componentDidMount&&(e.effectTag|=4)}var Ca=Array.isArray
function Pa(e,t,n){e=n.ref
if(null!==e&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){n=n._owner
var r=void 0
n&&(1!==n.tag&&s("309"),r=n.stateNode)
r||s("147",e)
var a=""+e
if(null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a)return t.ref
t=function(e){var t=r.refs
t===ka&&(t=r.refs={})
null===e?delete t[a]:t[a]=e}
t._stringRef=a
return t}"string"!==typeof e&&s("284")
n._owner||s("290",e)}return e}function Oa(e,t){"textarea"!==e.type&&s("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function ja(e){function t(t,n){if(e){var r=t.lastEffect
null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n
n.nextEffect=null
n.effectTag=8}}function n(n,r){if(!e)return null
for(;null!==r;)t(n,r),r=r.sibling
return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling
return e}function a(e,t,n){e=la(e,t,n)
e.index=0
e.sibling=null
return e}function i(t,n,r){t.index=r
if(!e)return n
r=t.alternate
if(null!==r)return r=r.index,r<n?(t.effectTag=2,n):r
t.effectTag=2
return n}function o(t){e&&null===t.alternate&&(t.effectTag=2)
return t}function u(e,t,n,r){if(null===t||6!==t.tag)return t=ha(n,e.mode,r),t.return=e,t
t=a(t,n,r)
t.return=e
return t}function l(e,t,n,r){if(null!==t&&t.elementType===n.type)return r=a(t,n.props,r),r.ref=Pa(e,t,n),r.return=e,r
r=ca(n.type,n.key,n.props,null,e.mode,r)
r.ref=Pa(e,t,n)
r.return=e
return r}function c(e,t,n,r){if(null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation)return t=ma(n,e.mode,r),t.return=e,t
t=a(t,n.children||[],r)
t.return=e
return t}function d(e,t,n,r,i){if(null===t||7!==t.tag)return t=da(n,e.mode,r,i),t.return=e,t
t=a(t,n,r)
t.return=e
return t}function f(e,t,n){if("string"===typeof t||"number"===typeof t)return t=ha(""+t,e.mode,n),t.return=e,t
if("object"===typeof t&&null!==t){switch(t.$$typeof){case Ze:return n=ca(t.type,t.key,t.props,null,e.mode,n),n.ref=Pa(e,null,t),n.return=e,n
case et:return t=ma(t,e.mode,n),t.return=e,t}if(Ca(t)||ft(t))return t=da(t,e.mode,n,null),t.return=e,t
Oa(e,t)}return null}function h(e,t,n,r){var a=null!==t?t.key:null
if("string"===typeof n||"number"===typeof n)return null!==a?null:u(e,t,""+n,r)
if("object"===typeof n&&null!==n){switch(n.$$typeof){case Ze:return n.key===a?n.type===tt?d(e,t,n.props.children,r,a):l(e,t,n,r):null
case et:return n.key===a?c(e,t,n,r):null}if(Ca(n)||ft(n))return null!==a?null:d(e,t,n,r,null)
Oa(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r||"number"===typeof r)return e=e.get(n)||null,u(t,e,""+r,a)
if("object"===typeof r&&null!==r){switch(r.$$typeof){case Ze:return e=e.get(null===r.key?n:r.key)||null,r.type===tt?d(t,e,r.props.children,a,r.key):l(t,e,r,a)
case et:return e=e.get(null===r.key?n:r.key)||null,c(t,e,r,a)}if(Ca(r)||ft(r))return e=e.get(n)||null,d(t,e,r,a,null)
Oa(t,r)}return null}function p(a,o,s,u){for(var l=null,c=null,d=o,p=o=0,_=null;null!==d&&p<s.length;p++){d.index>p?(_=d,d=null):_=d.sibling
var g=h(a,d,s[p],u)
if(null===g){null===d&&(d=_)
break}e&&d&&null===g.alternate&&t(a,d)
o=i(g,o,p)
null===c?l=g:c.sibling=g
c=g
d=_}if(p===s.length)return n(a,d),l
if(null===d){for(;p<s.length;p++)(d=f(a,s[p],u))&&(o=i(d,o,p),null===c?l=d:c.sibling=d,c=d)
return l}for(d=r(a,d);p<s.length;p++)(_=m(d,a,p,s[p],u))&&(e&&null!==_.alternate&&d.delete(null===_.key?p:_.key),o=i(_,o,p),null===c?l=_:c.sibling=_,c=_)
e&&d.forEach(function(e){return t(a,e)})
return l}function _(a,o,u,l){var c=ft(u)
"function"!==typeof c&&s("150")
u=c.call(u)
null==u&&s("151")
for(var d=c=null,p=o,_=o=0,g=null,y=u.next();null!==p&&!y.done;_++,y=u.next()){p.index>_?(g=p,p=null):g=p.sibling
var v=h(a,p,y.value,l)
if(null===v){p||(p=g)
break}e&&p&&null===v.alternate&&t(a,p)
o=i(v,o,_)
null===d?c=v:d.sibling=v
d=v
p=g}if(y.done)return n(a,p),c
if(null===p){for(;!y.done;_++,y=u.next())y=f(a,y.value,l),null!==y&&(o=i(y,o,_),null===d?c=y:d.sibling=y,d=y)
return c}for(p=r(a,p);!y.done;_++,y=u.next())y=m(p,a,_,y.value,l),null!==y&&(e&&null!==y.alternate&&p.delete(null===y.key?_:y.key),o=i(y,o,_),null===d?c=y:d.sibling=y,d=y)
e&&p.forEach(function(e){return t(a,e)})
return c}return function(e,r,i,u){var l="object"===typeof i&&null!==i&&i.type===tt&&null===i.key
l&&(i=i.props.children)
var c="object"===typeof i&&null!==i
if(c)switch(i.$$typeof){case Ze:e:{c=i.key
for(l=r;null!==l;){if(l.key===c){if(7===l.tag?i.type===tt:l.elementType===i.type){n(e,l.sibling)
r=a(l,i.type===tt?i.props.children:i.props,u)
r.ref=Pa(e,l,i)
r.return=e
e=r
break e}n(e,l)
break}t(e,l)
l=l.sibling}i.type===tt?(r=da(i.props.children,e.mode,u,i.key),r.return=e,e=r):(u=ca(i.type,i.key,i.props,null,e.mode,u),u.ref=Pa(e,r,i),u.return=e,e=u)}return o(e)
case et:e:{for(l=i.key;null!==r;){if(r.key===l){if(4===r.tag&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling)
r=a(r,i.children||[],u)
r.return=e
e=r
break e}n(e,r)
break}t(e,r)
r=r.sibling}r=ma(i,e.mode,u)
r.return=e
e=r}return o(e)}if("string"===typeof i||"number"===typeof i)return i=""+i,null!==r&&6===r.tag?(n(e,r.sibling),r=a(r,i,u),r.return=e,e=r):(n(e,r),r=ha(i,e.mode,u),r.return=e,e=r),o(e)
if(Ca(i))return p(e,r,i,u)
if(ft(i))return _(e,r,i,u)
c&&Oa(e,i)
if("undefined"===typeof i&&!l)switch(e.tag){case 1:case 0:u=e.type,s("152",u.displayName||u.name||"Component")}return n(e,r)}}var Aa=ja(!0),Na=ja(!1),za={},Ia={current:za},La={current:za},Ba={current:za}
function Ra(e){e===za&&s("174")
return e}function Fa(e,t){qr(Ba,t,e)
qr(La,e,e)
qr(Ia,za,e)
var n=t.nodeType
switch(n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mr(null,"")
break
default:n=8===n?t.parentNode:t,t=n.namespaceURI||null,n=n.tagName,t=mr(t,n)}Yr(Ia,e)
qr(Ia,t,e)}function Ya(e){Yr(Ia,e)
Yr(La,e)
Yr(Ba,e)}function qa(e){Ra(Ba.current)
var t=Ra(Ia.current)
var n=mr(t,e.type)
t!==n&&(qr(La,e,e),qr(Ia,n,e))}function Ha(e){La.current===e&&(Yr(Ia,e),Yr(La,e))}var Ua=0,Wa=2,Ka=4,Va=8,$a=16,Ga=32,Ja=64,Qa=128,Xa=Je.ReactCurrentDispatcher,Za=0,ei=null,ti=null,ni=null,ri=null,ai=null,ii=null,oi=0,si=null,ui=0,li=!1,ci=null,di=0
function fi(){s("321")}function hi(e,t){if(null===t)return!1
for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1
return!0}function mi(e,t,n,r,a,i){Za=i
ei=t
ni=null!==e?e.memoizedState:null
Xa.current=null===ni?Ei:Si
t=n(r,a)
if(li){do{li=!1,di+=1,ni=null!==e?e.memoizedState:null,ii=ri,si=ai=ti=null,Xa.current=Si,t=n(r,a)}while(li)
ci=null
di=0}Xa.current=Di
e=ei
e.memoizedState=ri
e.expirationTime=oi
e.updateQueue=si
e.effectTag|=ui
e=null!==ti&&null!==ti.next
Za=0
ii=ai=ri=ni=ti=ei=null
oi=0
si=null
ui=0
e&&s("300")
return t}function pi(){Xa.current=Di
Za=0
ii=ai=ri=ni=ti=ei=null
oi=0
si=null
ui=0
li=!1
ci=null
di=0}function _i(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null}
null===ai?ri=ai=e:ai=ai.next=e
return ai}function gi(){if(null!==ii)ai=ii,ii=ai.next,ti=ni,ni=null!==ti?ti.next:null
else{null===ni&&s("310")
ti=ni
var e={memoizedState:ti.memoizedState,baseState:ti.baseState,queue:ti.queue,baseUpdate:ti.baseUpdate,next:null}
ai=null===ai?ri=e:ai.next=e
ni=ti.next}return ai}function yi(e,t){return"function"===typeof t?t(e):t}function vi(e){var t=gi(),n=t.queue
null===n&&s("311")
n.lastRenderedReducer=e
if(0<di){var r=n.dispatch
if(null!==ci){var a=ci.get(n)
if(void 0!==a){ci.delete(n)
var i=t.memoizedState
do{i=e(i,a.action),a=a.next}while(null!==a)
un(i,t.memoizedState)||(Ri=!0)
t.memoizedState=i
t.baseUpdate===n.last&&(t.baseState=i)
n.lastRenderedState=i
return[i,r]}}return[t.memoizedState,r]}r=n.last
var o=t.baseUpdate
i=t.baseState
null!==o?(null!==r&&(r.next=null),r=o.next):r=null!==r?r.next:null
if(null!==r){var u=a=null,l=r,c=!1
do{var d=l.expirationTime
d<Za?(c||(c=!0,u=o,a=i),d>oi&&(oi=d)):i=l.eagerReducer===e?l.eagerState:e(i,l.action)
o=l
l=l.next}while(null!==l&&l!==r)
c||(u=o,a=i)
un(i,t.memoizedState)||(Ri=!0)
t.memoizedState=i
t.baseUpdate=u
t.baseState=a
n.lastRenderedState=i}return[t.memoizedState,n.dispatch]}function bi(e,t,n,r){e={tag:e,create:t,destroy:n,deps:r,next:null}
null===si?(si={lastEffect:null},si.lastEffect=e.next=e):(t=si.lastEffect,null===t?si.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,si.lastEffect=e))
return e}function wi(e,t,n,r){var a=_i()
ui|=e
a.memoizedState=bi(t,n,void 0,void 0===r?null:r)}function ki(e,t,n,r){var a=gi()
r=void 0===r?null:r
var i=void 0
if(null!==ti){var o=ti.memoizedState
i=o.destroy
if(null!==r&&hi(r,o.deps)){bi(Ua,n,i,r)
return}}ui|=e
a.memoizedState=bi(t,n,i,r)}function xi(e,t){if("function"===typeof t)return e=e(),t(e),function(){t(null)}
if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Mi(){}function Ti(e,t,n){25>di||s("301")
var r=e.alternate
if(e===ei||null!==r&&r===ei)if(li=!0,e={expirationTime:Za,action:n,eagerReducer:null,eagerState:null,next:null},null===ci&&(ci=new Map),n=ci.get(t),void 0===n)ci.set(t,e)
else{for(t=n;null!==t.next;)t=t.next
t.next=e}else{ls()
var a=Ws()
a=ps(a,e)
var i={expirationTime:a,action:n,eagerReducer:null,eagerState:null,next:null},o=t.last
if(null===o)i.next=i
else{var u=o.next
null!==u&&(i.next=u)
o.next=i}t.last=i
if(0===e.expirationTime&&(null===r||0===r.expirationTime)&&(r=t.lastRenderedReducer,null!==r))try{var l=t.lastRenderedState,c=r(l,n)
i.eagerReducer=r
i.eagerState=c
if(un(c,l))return}catch(e){}vs(e,a)}}var Di={readContext:io,useCallback:fi,useContext:fi,useEffect:fi,useImperativeHandle:fi,useLayoutEffect:fi,useMemo:fi,useReducer:fi,useRef:fi,useState:fi,useDebugValue:fi},Ei={readContext:io,useCallback:function(e,t){_i().memoizedState=[e,void 0===t?null:t]
return e},useContext:io,useEffect:function(e,t){return wi(516,Qa|Ja,e,t)},useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null
return wi(4,Ka|Ga,xi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wi(4,Ka|Ga,e,t)},useMemo:function(e,t){var n=_i()
t=void 0===t?null:t
e=e()
n.memoizedState=[e,t]
return e},useReducer:function(e,t,n){var r=_i()
t=void 0!==n?n(t):t
r.memoizedState=r.baseState=t
e=r.queue={last:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}
e=e.dispatch=Ti.bind(null,ei,e)
return[r.memoizedState,e]},useRef:function(e){var t=_i()
e={current:e}
return t.memoizedState=e},useState:function(e){var t=_i()
"function"===typeof e&&(e=e())
t.memoizedState=t.baseState=e
e=t.queue={last:null,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e}
e=e.dispatch=Ti.bind(null,ei,e)
return[t.memoizedState,e]},useDebugValue:Mi},Si={readContext:io,useCallback:function(e,t){var n=gi()
t=void 0===t?null:t
var r=n.memoizedState
if(null!==r&&null!==t&&hi(t,r[1]))return r[0]
n.memoizedState=[e,t]
return e},useContext:io,useEffect:function(e,t){return ki(516,Qa|Ja,e,t)},useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null
return ki(4,Ka|Ga,xi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4,Ka|Ga,e,t)},useMemo:function(e,t){var n=gi()
t=void 0===t?null:t
var r=n.memoizedState
if(null!==r&&null!==t&&hi(t,r[1]))return r[0]
e=e()
n.memoizedState=[e,t]
return e},useReducer:vi,useRef:function(){return gi().memoizedState},useState:function(e){return vi(yi,e)},useDebugValue:Mi},Ci=null,Pi=null,Oi=!1
function ji(e,t){var n=oa(5,null,null,0)
n.elementType="DELETED"
n.type="DELETED"
n.stateNode=t
n.return=e
n.effectTag=8
null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Ai(e,t){switch(e.tag){case 5:var n=e.type
t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t
return null!==t&&(e.stateNode=t,!0)
case 6:return t=""===e.pendingProps||3!==t.nodeType?null:t,null!==t&&(e.stateNode=t,!0)
case 13:default:return!1}}function Ni(e){if(Oi){var t=Pi
if(t){var n=t
if(!Ai(e,t)){t=Lr(n)
if(!t||!Ai(e,t)){e.effectTag|=2
Oi=!1
Ci=e
return}ji(Ci,n)}Ci=e
Pi=Br(t)}else e.effectTag|=2,Oi=!1,Ci=e}}function zi(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&18!==e.tag;)e=e.return
Ci=e}function Ii(e){if(e!==Ci)return!1
if(!Oi)return zi(e),Oi=!0,!1
var t=e.type
if(5!==e.tag||"head"!==t&&"body"!==t&&!Or(t,e.memoizedProps))for(t=Pi;t;)ji(e,t),t=Lr(t)
zi(e)
Pi=Ci?Lr(e.stateNode):null
return!0}function Li(){Pi=Ci=null
Oi=!1}var Bi=Je.ReactCurrentOwner,Ri=!1
function Fi(e,t,n,r){t.child=null===e?Na(t,null,n,r):Aa(t,e.child,n,r)}function Yi(e,t,n,r,a){n=n.render
var i=t.ref
ao(t,a)
r=mi(e,t,n,r,i,a)
if(null!==e&&!Ri)return t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=a&&(e.expirationTime=0),Ji(e,t,a)
t.effectTag|=1
Fi(e,t,r,a)
return t.child}function qi(e,t,n,r,a,i){if(null===e){var o=n.type
if("function"===typeof o&&!sa(o)&&void 0===o.defaultProps&&null===n.compare&&void 0===n.defaultProps)return t.tag=15,t.type=o,Hi(e,t,o,r,a,i)
e=ca(n.type,null,r,null,t.mode,i)
e.ref=t.ref
e.return=t
return t.child=e}o=e.child
if(a<i&&(a=o.memoizedProps,n=n.compare,n=null!==n?n:cn,n(a,r)&&e.ref===t.ref))return Ji(e,t,i)
t.effectTag|=1
e=la(o,r,i)
e.ref=t.ref
e.return=t
return t.child=e}function Hi(e,t,n,r,a,i){return null!==e&&cn(e.memoizedProps,r)&&e.ref===t.ref&&(Ri=!1,a<i)?Ji(e,t,i):Wi(e,t,n,r,i)}function Ui(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Wi(e,t,n,r,a){var i=$r(n)?Kr:Ur.current
i=Vr(t,i)
ao(t,a)
n=mi(e,t,n,r,i,a)
if(null!==e&&!Ri)return t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=a&&(e.expirationTime=0),Ji(e,t,a)
t.effectTag|=1
Fi(e,t,n,a)
return t.child}function Ki(e,t,n,r,a){if($r(n)){var i=!0
Zr(t)}else i=!1
ao(t,a)
if(null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Da(t,n,r,a),Sa(t,n,r,a),r=!0
else if(null===e){var o=t.stateNode,s=t.memoizedProps
o.props=s
var u=o.context,l=n.contextType
"object"===typeof l&&null!==l?l=io(l):(l=$r(n)?Kr:Ur.current,l=Vr(t,l))
var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate
d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||u!==l)&&Ea(t,o,r,l)
co=!1
var f=t.memoizedState
u=o.state=f
var h=t.updateQueue
null!==h&&(bo(t,h,r,o,a),u=t.memoizedState)
s!==r||f!==u||Wr.current||co?("function"===typeof c&&(xa(t,n,c,r),u=t.memoizedState),(s=co||Ta(t,n,s,r,f,u,l))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.effectTag|=4)):("function"===typeof o.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=l,r=s):("function"===typeof o.componentDidMount&&(t.effectTag|=4),r=!1)}else o=t.stateNode,s=t.memoizedProps,o.props=t.type===t.elementType?s:ba(t.type,s),u=o.context,l=n.contextType,"object"===typeof l&&null!==l?l=io(l):(l=$r(n)?Kr:Ur.current,l=Vr(t,l)),c=n.getDerivedStateFromProps,(d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||u!==l)&&Ea(t,o,r,l),co=!1,u=t.memoizedState,f=o.state=u,h=t.updateQueue,null!==h&&(bo(t,h,r,o,a),f=t.memoizedState),s!==r||u!==f||Wr.current||co?("function"===typeof c&&(xa(t,n,c,r),f=t.memoizedState),(c=co||Ta(t,n,s,r,u,f,l))?(d||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof o.componentDidUpdate&&(t.effectTag|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),r=!1)
return Vi(e,t,n,r,i,a)}function Vi(e,t,n,r,a,i){Ui(e,t)
var o=0!==(64&t.effectTag)
if(!r&&!o)return a&&ea(t,n,!1),Ji(e,t,i)
r=t.stateNode
Bi.current=t
var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render()
t.effectTag|=1
null!==e&&o?(t.child=Aa(t,e.child,null,i),t.child=Aa(t,null,s,i)):Fi(e,t,s,i)
t.memoizedState=r.state
a&&ea(t,n,!0)
return t.child}function $i(e){var t=e.stateNode
t.pendingContext?Qr(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qr(e,t.context,!1)
Fa(e,t.containerInfo)}function Gi(e,t,n){var r=t.mode,a=t.pendingProps,i=t.memoizedState
if(0===(64&t.effectTag)){i=null
var o=!1}else i={timedOutAt:null!==i?i.timedOutAt:0},o=!0,t.effectTag&=-65
if(null===e)if(o){var s=a.fallback
e=da(null,r,0,null)
0===(1&t.mode)&&(e.child=null!==t.memoizedState?t.child.child:t.child)
r=da(s,r,n,null)
e.sibling=r
n=e
n.return=r.return=t}else n=r=Na(t,null,a.children,n)
else null!==e.memoizedState?(r=e.child,s=r.sibling,o?(n=a.fallback,a=la(r,r.pendingProps,0),0===(1&t.mode)&&(o=null!==t.memoizedState?t.child.child:t.child,o!==r.child&&(a.child=o)),r=a.sibling=la(s,n,s.expirationTime),n=a,a.childExpirationTime=0,n.return=r.return=t):n=r=Aa(t,r.child,a.children,n)):(s=e.child,o?(o=a.fallback,a=da(null,r,0,null),a.child=s,0===(1&t.mode)&&(a.child=null!==t.memoizedState?t.child.child:t.child),r=a.sibling=da(o,r,n,null),r.effectTag|=2,n=a,a.childExpirationTime=0,n.return=r.return=t):r=n=Aa(t,s,a.children,n)),t.stateNode=e.stateNode
t.memoizedState=i
t.child=n
return r}function Ji(e,t,n){null!==e&&(t.contextDependencies=e.contextDependencies)
if(t.childExpirationTime<n)return null
null!==e&&t.child!==e.child&&s("153")
if(null!==t.child){e=t.child
n=la(e,e.pendingProps,e.expirationTime)
t.child=n
for(n.return=t;null!==e.sibling;)e=e.sibling,n=n.sibling=la(e,e.pendingProps,e.expirationTime),n.return=t
n.sibling=null}return t.child}function Qi(e,t,n){var r=t.expirationTime
if(null!==e){if(e.memoizedProps!==t.pendingProps||Wr.current)Ri=!0
else if(r<n){Ri=!1
switch(t.tag){case 3:$i(t)
Li()
break
case 5:qa(t)
break
case 1:$r(t.type)&&Zr(t)
break
case 4:Fa(t,t.stateNode.containerInfo)
break
case 10:no(t,t.memoizedProps.value)
break
case 13:if(null!==t.memoizedState){r=t.child.childExpirationTime
if(0!==r&&r>=n)return Gi(e,t,n)
t=Ji(e,t,n)
return null!==t?t.sibling:null}}return Ji(e,t,n)}}else Ri=!1
t.expirationTime=0
switch(t.tag){case 2:r=t.elementType
null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2)
e=t.pendingProps
var a=Vr(t,Ur.current)
ao(t,n)
a=mi(null,t,r,e,a,n)
t.effectTag|=1
if("object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof){t.tag=1
pi()
if($r(r)){var i=!0
Zr(t)}else i=!1
t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null
var o=r.getDerivedStateFromProps
"function"===typeof o&&xa(t,r,o,e)
a.updater=Ma
t.stateNode=a
a._reactInternalFiber=t
Sa(t,r,e,n)
t=Vi(null,t,r,!0,i,n)}else t.tag=0,Fi(null,t,a,n),t=t.child
return t
case 16:a=t.elementType
null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2)
i=t.pendingProps
e=wa(a)
t.type=e
a=t.tag=ua(e)
i=ba(e,i)
o=void 0
switch(a){case 0:o=Wi(null,t,e,i,n)
break
case 1:o=Ki(null,t,e,i,n)
break
case 11:o=Yi(null,t,e,i,n)
break
case 14:o=qi(null,t,e,ba(e.type,i),r,n)
break
default:s("306",e,"")}return o
case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),Wi(e,t,r,a,n)
case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),Ki(e,t,r,a,n)
case 3:$i(t)
r=t.updateQueue
null===r&&s("282")
a=t.memoizedState
a=null!==a?a.element:null
bo(t,r,t.pendingProps,null,n)
r=t.memoizedState.element
if(r===a)Li(),t=Ji(e,t,n)
else{a=t.stateNode;(a=(null===e||null===e.child)&&a.hydrate)&&(Pi=Br(t.stateNode.containerInfo),Ci=t,a=Oi=!0)
a?(t.effectTag|=2,t.child=Na(t,null,r,n)):(Fi(e,t,r,n),Li())
t=t.child}return t
case 5:return qa(t),null===e&&Ni(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,o=a.children,Or(r,a)?o=null:null!==i&&Or(r,i)&&(t.effectTag|=16),Ui(e,t),1!==n&&1&t.mode&&a.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Fi(e,t,o,n),t=t.child),t
case 6:return null===e&&Ni(t),null
case 13:return Gi(e,t,n)
case 4:return Fa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Aa(t,null,r,n):Fi(e,t,r,n),t.child
case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),Yi(e,t,r,a,n)
case 7:return Fi(e,t,t.pendingProps,n),t.child
case 8:case 12:return Fi(e,t,t.pendingProps.children,n),t.child
case 10:e:{r=t.type._context
a=t.pendingProps
o=t.memoizedProps
i=a.value
no(t,i)
if(null!==o){var u=o.value
i=un(u,i)?0:0|("function"===typeof r._calculateChangedBits?r._calculateChangedBits(u,i):1073741823)
if(0===i){if(o.children===a.children&&!Wr.current){t=Ji(e,t,n)
break e}}else for(u=t.child,null!==u&&(u.return=t);null!==u;){var l=u.contextDependencies
if(null!==l){o=u.child
for(var c=l.first;null!==c;){if(c.context===r&&0!==(c.observedBits&i)){1===u.tag&&(c=mo(n),c.tag=uo,_o(u,c))
u.expirationTime<n&&(u.expirationTime=n)
c=u.alternate
null!==c&&c.expirationTime<n&&(c.expirationTime=n)
c=n
for(var d=u.return;null!==d;){var f=d.alternate
if(d.childExpirationTime<c)d.childExpirationTime=c,null!==f&&f.childExpirationTime<c&&(f.childExpirationTime=c)
else{if(!(null!==f&&f.childExpirationTime<c))break
f.childExpirationTime=c}d=d.return}l.expirationTime<n&&(l.expirationTime=n)
break}c=c.next}}else o=10===u.tag&&u.type===t.type?null:u.child
if(null!==o)o.return=u
else for(o=u;null!==o;){if(o===t){o=null
break}u=o.sibling
if(null!==u){u.return=o.return
o=u
break}o=o.return}u=o}}Fi(e,t,a.children,n)
t=t.child}return t
case 9:return a=t.type,i=t.pendingProps,r=i.children,ao(t,n),a=io(a,i.unstable_observedBits),r=r(a),t.effectTag|=1,Fi(e,t,r,n),t.child
case 14:return a=t.type,i=ba(a,t.pendingProps),i=ba(a.type,i),qi(e,t,a,i,r,n)
case 15:return Hi(e,t,t.type,t.pendingProps,r,n)
case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,$r(r)?(e=!0,Zr(t)):e=!1,ao(t,n),Da(t,r,a,n),Sa(t,r,a,n),Vi(null,t,r,!0,e,n)}s("156")}var Xi={current:null},Zi=null,eo=null,to=null
function no(e,t){var n=e.type._context
qr(Xi,n._currentValue,e)
n._currentValue=t}function ro(e){var t=Xi.current
Yr(Xi,e)
e.type._context._currentValue=t}function ao(e,t){Zi=e
to=eo=null
var n=e.contextDependencies
null!==n&&n.expirationTime>=t&&(Ri=!0)
e.contextDependencies=null}function io(e,t){if(to!==e&&!1!==t&&0!==t){"number"===typeof t&&1073741823!==t||(to=e,t=1073741823)
t={context:e,observedBits:t,next:null}
null===eo?(null===Zi&&s("308"),eo=t,Zi.contextDependencies={first:t,expirationTime:0}):eo=eo.next=t}return e._currentValue}var oo=0,so=1,uo=2,lo=3,co=!1
function fo(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function ho(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function mo(e){return{expirationTime:e,tag:oo,payload:null,callback:null,next:null,nextEffect:null}}function po(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function _o(e,t){var n=e.alternate
if(null===n){var r=e.updateQueue
var a=null
null===r&&(r=e.updateQueue=fo(e.memoizedState))}else r=e.updateQueue,a=n.updateQueue,null===r?null===a?(r=e.updateQueue=fo(e.memoizedState),a=n.updateQueue=fo(n.memoizedState)):r=e.updateQueue=ho(a):null===a&&(a=n.updateQueue=ho(r))
null===a||r===a?po(r,t):null===r.lastUpdate||null===a.lastUpdate?(po(r,t),po(a,t)):(po(r,t),a.lastUpdate=t)}function go(e,t){var n=e.updateQueue
n=null===n?e.updateQueue=fo(e.memoizedState):yo(e,n)
null===n.lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function yo(e,t){var n=e.alternate
null!==n&&t===n.updateQueue&&(t=e.updateQueue=ho(t))
return t}function vo(e,t,n,r,i,o){switch(n.tag){case so:return e=n.payload,"function"===typeof e?e.call(o,r,i):e
case lo:e.effectTag=-2049&e.effectTag|64
case oo:e=n.payload
i="function"===typeof e?e.call(o,r,i):e
if(null===i||void 0===i)break
return a({},r,i)
case uo:co=!0}return r}function bo(e,t,n,r,a){co=!1
t=yo(e,t)
for(var i=t.baseState,o=null,s=0,u=t.firstUpdate,l=i;null!==u;){var c=u.expirationTime
c<a?(null===o&&(o=u,i=l),s<c&&(s=c)):(l=vo(e,t,u,l,n,r),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=u:(t.lastEffect.nextEffect=u,t.lastEffect=u)))
u=u.next}c=null
for(u=t.firstCapturedUpdate;null!==u;){var d=u.expirationTime
d<a?(null===c&&(c=u,null===o&&(i=l)),s<d&&(s=d)):(l=vo(e,t,u,l,n,r),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=u:(t.lastCapturedEffect.nextEffect=u,t.lastCapturedEffect=u)))
u=u.next}null===o&&(t.lastUpdate=null)
null===c?t.lastCapturedUpdate=null:e.effectTag|=32
null===o&&null===c&&(i=l)
t.baseState=i
t.firstUpdate=o
t.firstCapturedUpdate=c
e.expirationTime=s
e.memoizedState=l}function wo(e,t,n){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null)
ko(t.firstEffect,n)
t.firstEffect=t.lastEffect=null
ko(t.firstCapturedEffect,n)
t.firstCapturedEffect=t.lastCapturedEffect=null}function ko(e,t){for(;null!==e;){var n=e.callback
if(null!==n){e.callback=null
var r=t
"function"!==typeof n&&s("191",n)
n.call(r)}e=e.nextEffect}}function xo(e,t){return{value:e,source:t,stack:mt(t)}}function Mo(e){e.effectTag|=4}var To=void 0,Do=void 0,Eo=void 0,So=void 0
To=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode)
else if(4!==n.tag&&null!==n.child){n.child.return=n
n=n.child
continue}if(n===t)break
for(;null===n.sibling;){if(null===n.return||n.return===t)return
n=n.return}n.sibling.return=n.return
n=n.sibling}}
Do=function(){}
Eo=function(e,t,n,r,i){var o=e.memoizedProps
if(o!==r){var s=t.stateNode
Ra(Ia.current)
e=null
switch(n){case"input":o=St(s,o)
r=St(s,r)
e=[]
break
case"option":o=or(s,o)
r=or(s,r)
e=[]
break
case"select":o=a({},o,{value:void 0})
r=a({},r,{value:void 0})
e=[]
break
case"textarea":o=ur(s,o)
r=ur(s,r)
e=[]
break
default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(s.onclick=Er)}Mr(n,r)
s=n=void 0
var u=null
for(n in o)if(!r.hasOwnProperty(n)&&o.hasOwnProperty(n)&&null!=o[n])if("style"===n){var l=o[n]
for(s in l)l.hasOwnProperty(s)&&(u||(u={}),u[s]="")}else"dangerouslySetInnerHTML"!==n&&"children"!==n&&"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&"autoFocus"!==n&&(k.hasOwnProperty(n)?e||(e=[]):(e=e||[]).push(n,null))
for(n in r){var c=r[n]
l=null!=o?o[n]:void 0
if(r.hasOwnProperty(n)&&c!==l&&(null!=c||null!=l))if("style"===n)if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(u||(u={}),u[s]="")
for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(u||(u={}),u[s]=c[s])}else u||(e||(e=[]),e.push(n,u)),u=c
else"dangerouslySetInnerHTML"===n?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(e=e||[]).push(n,""+c)):"children"===n?l===c||"string"!==typeof c&&"number"!==typeof c||(e=e||[]).push(n,""+c):"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&(k.hasOwnProperty(n)?(null!=c&&Dr(i,n),e||l===c||(e=[])):(e=e||[]).push(n,c))}u&&(e=e||[]).push("style",u)
i=e;(t.updateQueue=i)&&Mo(t)}}
So=function(e,t,n,r){n!==r&&Mo(t)}
var Co="function"===typeof WeakSet?WeakSet:Set
function Po(e,t){var n=t.source,r=t.stack
null===r&&null!==n&&(r=mt(n))
null!==n&&ht(n.type)
t=t.value
null!==e&&1===e.tag&&ht(e.type)
try{console.error(t)}catch(e){setTimeout(function(){throw e})}}function Oo(e){var t=e.ref
if(null!==t)if("function"===typeof t)try{t(null)}catch(t){ms(e,t)}else t.current=null}function jo(e,t,n){n=n.updateQueue
n=null!==n?n.lastEffect:null
if(null!==n){var r=n=n.next
do{if((r.tag&e)!==Ua){var a=r.destroy
r.destroy=void 0
void 0!==a&&a()}(r.tag&t)!==Ua&&(a=r.create,r.destroy=a())
r=r.next}while(r!==n)}}function Ao(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode
if(t)r.style.display="none"
else{r=n.stateNode
var a=n.memoizedProps.style
a=void 0!==a&&null!==a&&a.hasOwnProperty("display")?a.display:null
r.style.display=wr("display",a)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps
else{if(13===n.tag&&null!==n.memoizedState){r=n.child.sibling
r.return=n
n=r
continue}if(null!==n.child){n.child.return=n
n=n.child
continue}}if(n===e)break
for(;null===n.sibling;){if(null===n.return||n.return===e)return
n=n.return}n.sibling.return=n.return
n=n.sibling}}function No(e){"function"===typeof na&&na(e)
switch(e.tag){case 0:case 11:case 14:case 15:var t=e.updateQueue
if(null!==t&&(t=t.lastEffect,null!==t)){var n=t=t.next
do{var r=n.destroy
if(void 0!==r){var a=e
try{r()}catch(e){ms(a,e)}}n=n.next}while(n!==t)}break
case 1:Oo(e)
t=e.stateNode
if("function"===typeof t.componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){ms(e,t)}break
case 5:Oo(e)
break
case 4:Lo(e)}}function zo(e){return 5===e.tag||3===e.tag||4===e.tag}function Io(e){e:{for(var t=e.return;null!==t;){if(zo(t)){var n=t
break e}t=t.return}s("160")
n=void 0}var r=t=void 0
switch(n.tag){case 5:t=n.stateNode
r=!1
break
case 3:case 4:t=n.stateNode.containerInfo
r=!0
break
default:s("161")}16&n.effectTag&&(yr(t,""),n.effectTag&=-17)
e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||zo(n.return)){n=null
break e}n=n.return}n.sibling.return=n.return
for(n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t
if(null===n.child||4===n.tag)continue t
n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode
break e}}for(var a=e;;){if(5===a.tag||6===a.tag)if(n)if(r){var i=t,o=a.stateNode,u=n
8===i.nodeType?i.parentNode.insertBefore(o,u):i.insertBefore(o,u)}else t.insertBefore(a.stateNode,n)
else r?(o=t,u=a.stateNode,8===o.nodeType?(i=o.parentNode,i.insertBefore(u,o)):(i=o,i.appendChild(u)),o=o._reactRootContainer,null!==o&&void 0!==o||null!==i.onclick||(i.onclick=Er)):t.appendChild(a.stateNode)
else if(4!==a.tag&&null!==a.child){a.child.return=a
a=a.child
continue}if(a===e)break
for(;null===a.sibling;){if(null===a.return||a.return===e)return
a=a.return}a.sibling.return=a.return
a=a.sibling}}function Lo(e){for(var t=e,n=!1,r=void 0,a=void 0;;){if(!n){n=t.return
e:for(;;){null===n&&s("160")
switch(n.tag){case 5:r=n.stateNode
a=!1
break e
case 3:case 4:r=n.stateNode.containerInfo
a=!0
break e}n=n.return}n=!0}if(5===t.tag||6===t.tag){e:for(var i=t,o=i;;)if(No(o),null!==o.child&&4!==o.tag)o.child.return=o,o=o.child
else{if(o===i)break
for(;null===o.sibling;){if(null===o.return||o.return===i)break e
o=o.return}o.sibling.return=o.return
o=o.sibling}a?(i=r,o=t.stateNode,8===i.nodeType?i.parentNode.removeChild(o):i.removeChild(o)):r.removeChild(t.stateNode)}else if(4===t.tag){if(null!==t.child){r=t.stateNode.containerInfo
a=!0
t.child.return=t
t=t.child
continue}}else if(No(t),null!==t.child){t.child.return=t
t=t.child
continue}if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return
t=t.return
4===t.tag&&(n=!1)}t.sibling.return=t.return
t=t.sibling}}function Bo(e,t){switch(t.tag){case 0:case 11:case 14:case 15:jo(Ka,Va,t)
break
case 1:break
case 5:var n=t.stateNode
if(null!=n){var r=t.memoizedProps
e=null!==e?e.memoizedProps:r
var a=t.type,i=t.updateQueue
t.updateQueue=null
null!==i&&Ir(n,i,a,e,r,t)}break
case 6:null===t.stateNode&&s("162")
t.stateNode.nodeValue=t.memoizedProps
break
case 3:case 12:break
case 13:n=t.memoizedState
r=void 0
e=t
null===n?r=!1:(r=!0,e=t.child,0===n.timedOutAt&&(n.timedOutAt=Ws()))
null!==e&&Ao(e,r)
n=t.updateQueue
if(null!==n){t.updateQueue=null
var o=t.stateNode
null===o&&(o=t.stateNode=new Co)
n.forEach(function(e){var n=gs.bind(null,t,e)
o.has(e)||(o.add(e),e.then(n,n))})}break
case 17:break
default:s("163")}}var Ro="function"===typeof WeakMap?WeakMap:Map
function Fo(e,t,n){n=mo(n)
n.tag=lo
n.payload={element:null}
var r=t.value
n.callback=function(){tu(r)
Po(e,t)}
return n}function Yo(e,t,n){n=mo(n)
n.tag=lo
var r=e.type.getDerivedStateFromError
if("function"===typeof r){var a=t.value
n.payload=function(){return r(a)}}var i=e.stateNode
null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){"function"!==typeof r&&(null===rs?rs=new Set([this]):rs.add(this))
var n=t.value,a=t.stack
Po(e,t)
this.componentDidCatch(n,{componentStack:null!==a?a:""})})
return n}function qo(e){switch(e.tag){case 1:$r(e.type)&&Gr(e)
var t=e.effectTag
return 2048&t?(e.effectTag=-2049&t|64,e):null
case 3:return Ya(e),Jr(e),t=e.effectTag,0!==(64&t)&&s("285"),e.effectTag=-2049&t|64,e
case 5:return Ha(e),null
case 13:return t=e.effectTag,2048&t?(e.effectTag=-2049&t|64,e):null
case 18:return null
case 4:return Ya(e),null
case 10:return ro(e),null
default:return null}}var Ho=Je.ReactCurrentDispatcher,Uo=Je.ReactCurrentOwner,Wo=1073741822,Ko=!1,Vo=null,$o=null,Go=0,Jo=-1,Qo=!1,Xo=null,Zo=!1,es=null,ts=null,ns=null,rs=null
function as(){if(null!==Vo)for(var e=Vo.return;null!==e;){var t=e
switch(t.tag){case 1:var n=t.type.childContextTypes
null!==n&&void 0!==n&&Gr(t)
break
case 3:Ya(t)
Jr(t)
break
case 5:Ha(t)
break
case 4:Ya(t)
break
case 10:ro(t)}e=e.return}$o=null
Go=0
Jo=-1
Qo=!1
Vo=null}function is(){for(;null!==Xo;){var e=Xo.effectTag
16&e&&yr(Xo.stateNode,"")
if(128&e){var t=Xo.alternate
null!==t&&(t=t.ref,null!==t&&("function"===typeof t?t(null):t.current=null))}switch(14&e){case 2:Io(Xo)
Xo.effectTag&=-3
break
case 6:Io(Xo)
Xo.effectTag&=-3
Bo(Xo.alternate,Xo)
break
case 4:Bo(Xo.alternate,Xo)
break
case 8:e=Xo,Lo(e),e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e=e.alternate,null!==e&&(e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null)}Xo=Xo.nextEffect}}function os(){for(;null!==Xo;){if(256&Xo.effectTag)e:{var e=Xo.alternate,t=Xo
switch(t.tag){case 0:case 11:case 15:jo(Wa,Ua,t)
break e
case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState
e=t.stateNode
t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:ba(t.type,n),r)
e.__reactInternalSnapshotBeforeUpdate=t}break e
case 3:case 5:case 6:case 4:case 17:break e
default:s("163")}}Xo=Xo.nextEffect}}function ss(e,t){for(;null!==Xo;){var n=Xo.effectTag
if(36&n){var r=Xo.alternate,a=Xo,i=t
switch(a.tag){case 0:case 11:case 15:jo($a,Ga,a)
break
case 1:var o=a.stateNode
if(4&a.effectTag)if(null===r)o.componentDidMount()
else{var u=a.elementType===a.type?r.memoizedProps:ba(a.type,r.memoizedProps)
o.componentDidUpdate(u,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}r=a.updateQueue
null!==r&&wo(a,r,o,i)
break
case 3:r=a.updateQueue
if(null!==r){o=null
if(null!==a.child)switch(a.child.tag){case 5:o=a.child.stateNode
break
case 1:o=a.child.stateNode}wo(a,r,o,i)}break
case 5:i=a.stateNode
null===r&&4&a.effectTag&&Pr(a.type,a.memoizedProps)&&i.focus()
break
case 6:case 4:case 12:case 13:case 17:break
default:s("163")}}128&n&&(a=Xo.ref,null!==a&&(i=Xo.stateNode,"function"===typeof a?a(i):a.current=i))
512&n&&(es=e)
Xo=Xo.nextEffect}}function us(e,t){ns=ts=es=null
var n=Ts
Ts=!0
do{if(512&t.effectTag){var r=!1,a=void 0
try{var i=t
jo(Qa,Ua,i)
jo(Ua,Ja,i)}catch(e){r=!0,a=e}r&&ms(t,a)}t=t.nextEffect}while(null!==t)
Ts=n
n=e.expirationTime
0!==n&&Ks(e,n)
Os||Ts||Qs(1073741823,!1)}function ls(){null!==ts&&zr(ts)
null!==ns&&ns()}function cs(e,t){Zo=Ko=!0
e.current===t&&s("177")
var n=e.pendingCommitExpirationTime
0===n&&s("261")
e.pendingCommitExpirationTime=0
var r=t.expirationTime,a=t.childExpirationTime
_a(e,a>r?a:r)
Uo.current=null
r=void 0
1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,r=t.firstEffect):r=t:r=t.firstEffect
Sr=Nn
Cr=Gn()
Nn=!1
for(Xo=r;null!==Xo;){a=!1
var o=void 0
try{os()}catch(e){a=!0,o=e}a&&(null===Xo&&s("178"),ms(Xo,o),null!==Xo&&(Xo=Xo.nextEffect))}for(Xo=r;null!==Xo;){a=!1
o=void 0
try{is()}catch(e){a=!0,o=e}a&&(null===Xo&&s("178"),ms(Xo,o),null!==Xo&&(Xo=Xo.nextEffect))}Jn(Cr)
Cr=null
Nn=!!Sr
Sr=null
e.current=t
for(Xo=r;null!==Xo;){a=!1
o=void 0
try{ss(e,n)}catch(e){a=!0,o=e}a&&(null===Xo&&s("178"),ms(Xo,o),null!==Xo&&(Xo=Xo.nextEffect))}if(null!==r&&null!==es){var u=us.bind(null,e,r)
ts=i.unstable_runWithPriority(i.unstable_NormalPriority,function(){return Nr(u)})
ns=u}Ko=Zo=!1
"function"===typeof ta&&ta(t.stateNode)
n=t.expirationTime
t=t.childExpirationTime
t=t>n?t:n
0===t&&(rs=null)
Us(e,t)}function ds(e){for(;;){var t=e.alternate,n=e.return,r=e.sibling
if(0===(1024&e.effectTag)){Vo=e
e:{var i=t
t=e
var o=Go
var u=t.pendingProps
switch(t.tag){case 2:case 16:break
case 15:case 0:break
case 1:$r(t.type)&&Gr(t)
break
case 3:Ya(t)
Jr(t)
u=t.stateNode
u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null)
null!==i&&null!==i.child||(Ii(t),t.effectTag&=-3)
Do(t)
break
case 5:Ha(t)
var l=Ra(Ba.current)
o=t.type
if(null!==i&&null!=t.stateNode)Eo(i,t,o,u,l),i.ref!==t.ref&&(t.effectTag|=128)
else if(u){var c=Ra(Ia.current)
if(Ii(t)){u=t
i=u.stateNode
var d=u.type,f=u.memoizedProps,h=l
i[I]=u
i[L]=f
o=void 0
l=d
switch(l){case"iframe":case"object":zn("load",i)
break
case"video":case"audio":for(d=0;d<ae.length;d++)zn(ae[d],i)
break
case"source":zn("error",i)
break
case"img":case"image":case"link":zn("error",i)
zn("load",i)
break
case"form":zn("reset",i)
zn("submit",i)
break
case"details":zn("toggle",i)
break
case"input":Ct(i,f)
zn("invalid",i)
Dr(h,"onChange")
break
case"select":i._wrapperState={wasMultiple:!!f.multiple}
zn("invalid",i)
Dr(h,"onChange")
break
case"textarea":lr(i,f),zn("invalid",i),Dr(h,"onChange")}Mr(l,f)
d=null
for(o in f)f.hasOwnProperty(o)&&(c=f[o],"children"===o?"string"===typeof c?i.textContent!==c&&(d=["children",c]):"number"===typeof c&&i.textContent!==""+c&&(d=["children",""+c]):k.hasOwnProperty(o)&&null!=c&&Dr(h,o))
switch(l){case"input":$e(i)
jt(i,f,!0)
break
case"textarea":$e(i)
dr(i,f)
break
case"select":case"option":break
default:"function"===typeof f.onClick&&(i.onclick=Er)}o=d
u.updateQueue=o
u=null!==o
u&&Mo(t)}else{f=t
h=o
i=u
d=9===l.nodeType?l:l.ownerDocument
c===fr.html&&(c=hr(h))
c===fr.html?"script"===h?(i=d.createElement("div"),i.innerHTML="<script><\/script>",d=i.removeChild(i.firstChild)):"string"===typeof i.is?d=d.createElement(h,{is:i.is}):(d=d.createElement(h),"select"===h&&(h=d,i.multiple?h.multiple=!0:i.size&&(h.size=i.size))):d=d.createElementNS(c,h)
i=d
i[I]=f
i[L]=u
To(i,t,!1,!1)
h=i
d=o
f=u
var m=l,p=Tr(d,f)
switch(d){case"iframe":case"object":zn("load",h)
l=f
break
case"video":case"audio":for(l=0;l<ae.length;l++)zn(ae[l],h)
l=f
break
case"source":zn("error",h)
l=f
break
case"img":case"image":case"link":zn("error",h)
zn("load",h)
l=f
break
case"form":zn("reset",h)
zn("submit",h)
l=f
break
case"details":zn("toggle",h)
l=f
break
case"input":Ct(h,f)
l=St(h,f)
zn("invalid",h)
Dr(m,"onChange")
break
case"option":l=or(h,f)
break
case"select":h._wrapperState={wasMultiple:!!f.multiple}
l=a({},f,{value:void 0})
zn("invalid",h)
Dr(m,"onChange")
break
case"textarea":lr(h,f)
l=ur(h,f)
zn("invalid",h)
Dr(m,"onChange")
break
default:l=f}Mr(d,l)
c=void 0
var _=d,g=h,y=l
for(c in y)if(y.hasOwnProperty(c)){var v=y[c]
"style"===c?kr(g,v):"dangerouslySetInnerHTML"===c?(v=v?v.__html:void 0,null!=v&&_r(g,v)):"children"===c?"string"===typeof v?("textarea"!==_||""!==v)&&yr(g,v):"number"===typeof v&&yr(g,""+v):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(k.hasOwnProperty(c)?null!=v&&Dr(m,c):null!=v&&Dt(g,c,v,p))}switch(d){case"input":$e(h)
jt(h,f,!1)
break
case"textarea":$e(h)
dr(h,f)
break
case"option":null!=f.value&&h.setAttribute("value",""+Et(f.value))
break
case"select":l=h
l.multiple=!!f.multiple
h=f.value
null!=h?sr(l,!!f.multiple,h,!1):null!=f.defaultValue&&sr(l,!!f.multiple,f.defaultValue,!0)
break
default:"function"===typeof l.onClick&&(h.onclick=Er)}(u=Pr(o,u))&&Mo(t)
t.stateNode=i}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&s("166")
break
case 6:i&&null!=t.stateNode?So(i,t,i.memoizedProps,u):("string"!==typeof u&&(null===t.stateNode&&s("166")),i=Ra(Ba.current),Ra(Ia.current),Ii(t)?(u=t,o=u.stateNode,i=u.memoizedProps,o[I]=u,(u=o.nodeValue!==i)&&Mo(t)):(o=t,u=(9===i.nodeType?i:i.ownerDocument).createTextNode(u),u[I]=t,o.stateNode=u))
break
case 11:break
case 13:u=t.memoizedState
if(0!==(64&t.effectTag)){t.expirationTime=o
Vo=t
break e}u=null!==u
o=null!==i&&null!==i.memoizedState
null!==i&&!u&&o&&(i=i.child.sibling,null!==i&&(l=t.firstEffect,null!==l?(t.firstEffect=i,i.nextEffect=l):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8));(u||o)&&(t.effectTag|=4)
break
case 7:case 8:case 12:break
case 4:Ya(t)
Do(t)
break
case 10:ro(t)
break
case 9:case 14:break
case 17:$r(t.type)&&Gr(t)
break
case 18:break
default:s("156")}Vo=null}t=e
if(1===Go||1!==t.childExpirationTime){u=0
for(o=t.child;null!==o;)i=o.expirationTime,l=o.childExpirationTime,i>u&&(u=i),l>u&&(u=l),o=o.sibling
t.childExpirationTime=u}if(null!==Vo)return Vo
null!==n&&0===(1024&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e))}else{e=qo(e,Go)
if(null!==e)return e.effectTag&=1023,e
null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=1024)}if(null!==r)return r
if(null===n)break
e=n}return null}function fs(e){var t=Qi(e.alternate,e,Go)
e.memoizedProps=e.pendingProps
null===t&&(t=ds(e))
Uo.current=null
return t}function hs(e,t){Ko&&s("243")
ls()
Ko=!0
var n=Ho.current
Ho.current=Di
var r=e.nextExpirationTimeToWorkOn
r===Go&&e===$o&&null!==Vo||(as(),$o=e,Go=r,Vo=la($o.current,null,Go),e.pendingCommitExpirationTime=0)
var a=!1
do{try{if(t)for(;null!==Vo&&!Gs();)Vo=fs(Vo)
else for(;null!==Vo;)Vo=fs(Vo)}catch(t){if(to=eo=Zi=null,pi(),null===Vo)a=!0,tu(t)
else{null===Vo&&s("271")
var i=Vo,o=i.return
if(null!==o){e:{var u=e,l=o,c=i,d=t
o=Go
c.effectTag|=1024
c.firstEffect=c.lastEffect=null
if(null!==d&&"object"===typeof d&&"function"===typeof d.then){var f=d
d=l
var h=-1,m=-1
do{if(13===d.tag){var p=d.alternate
if(null!==p&&(p=p.memoizedState,null!==p)){m=10*(1073741822-p.timedOutAt)
break}p=d.pendingProps.maxDuration
"number"===typeof p&&(0>=p?h=0:(-1===h||p<h)&&(h=p))}d=d.return}while(null!==d)
d=l
do{(p=13===d.tag)&&(p=void 0!==d.memoizedProps.fallback&&null===d.memoizedState)
if(p){l=d.updateQueue
null===l?(l=new Set,l.add(f),d.updateQueue=l):l.add(f)
if(0===(1&d.mode)){d.effectTag|=64
c.effectTag&=-1957
1===c.tag&&(null===c.alternate?c.tag=17:(o=mo(1073741823),o.tag=uo,_o(c,o)))
c.expirationTime=1073741823
break e}c=u
l=o
var _=c.pingCache
null===_?(_=c.pingCache=new Ro,p=new Set,_.set(f,p)):(p=_.get(f),void 0===p&&(p=new Set,_.set(f,p)))
p.has(l)||(p.add(l),c=_s.bind(null,c,f,l),f.then(c,c));-1===h?u=1073741823:(-1===m&&(m=10*(1073741822-ya(u,o))-5e3),u=m+h)
0<=u&&Jo<u&&(Jo=u)
d.effectTag|=2048
d.expirationTime=o
break e}d=d.return}while(null!==d)
d=Error((ht(c.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+mt(c))}Qo=!0
d=xo(d,c)
u=l
do{switch(u.tag){case 3:u.effectTag|=2048
u.expirationTime=o
o=Fo(u,d,o)
go(u,o)
break e
case 1:if(h=d,m=u.type,c=u.stateNode,0===(64&u.effectTag)&&("function"===typeof m.getDerivedStateFromError||null!==c&&"function"===typeof c.componentDidCatch&&(null===rs||!rs.has(c)))){u.effectTag|=2048
u.expirationTime=o
o=Yo(u,h,o)
go(u,o)
break e}}u=u.return}while(null!==u)}Vo=ds(i)
continue}a=!0,tu(t)}}break}while(1)
Ko=!1
Ho.current=n
to=eo=Zi=null
pi()
if(a)$o=null,e.finishedWork=null
else if(null!==Vo)e.finishedWork=null
else{n=e.current.alternate
null===n&&s("281")
$o=null
if(Qo){a=e.latestPendingTime
i=e.latestSuspendedTime
o=e.latestPingedTime
if(0!==a&&a<r||0!==i&&i<r||0!==o&&o<r){ga(e,r)
qs(e,n,r,e.expirationTime,-1)
return}if(!e.didError&&t){e.didError=!0
r=e.nextExpirationTimeToWorkOn=r
t=e.expirationTime=1073741823
qs(e,n,r,t,-1)
return}}t&&-1!==Jo?(ga(e,r),t=10*(1073741822-ya(e,r)),t<Jo&&(Jo=t),t=10*(1073741822-Ws()),t=Jo-t,qs(e,n,r,e.expirationTime,0>t?0:t)):(e.pendingCommitExpirationTime=r,e.finishedWork=n)}}function ms(e,t){for(var n=e.return;null!==n;){switch(n.tag){case 1:var r=n.stateNode
if("function"===typeof n.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===rs||!rs.has(r))){e=xo(t,e)
e=Yo(n,e,1073741823)
_o(n,e)
vs(n,1073741823)
return}break
case 3:e=xo(t,e)
e=Fo(n,e,1073741823)
_o(n,e)
vs(n,1073741823)
return}n=n.return}3===e.tag&&(n=xo(t,e),n=Fo(e,n,1073741823),_o(e,n),vs(e,1073741823))}function ps(e,t){var n=i.unstable_getCurrentPriorityLevel(),r=void 0
if(0===(1&t.mode))r=1073741823
else if(Ko&&!Zo)r=Go
else{switch(n){case i.unstable_ImmediatePriority:r=1073741823
break
case i.unstable_UserBlockingPriority:r=1073741822-10*(1+((1073741822-e+15)/10|0))
break
case i.unstable_NormalPriority:r=1073741822-25*(1+((1073741822-e+500)/25|0))
break
case i.unstable_LowPriority:case i.unstable_IdlePriority:r=1
break
default:s("313")}null!==$o&&r===Go&&--r}n===i.unstable_UserBlockingPriority&&(0===Ss||r<Ss)&&(Ss=r)
return r}function _s(e,t,n){var r=e.pingCache
null!==r&&r.delete(t)
if(null!==$o&&Go===n)$o=null
else if(t=e.earliestSuspendedTime,r=e.latestSuspendedTime,0!==t&&n<=t&&n>=r){e.didError=!1
t=e.latestPingedTime;(0===t||t>n)&&(e.latestPingedTime=n)
va(n,e)
n=e.expirationTime
0!==n&&Ks(e,n)}}function gs(e,t){var n=e.stateNode
null!==n&&n.delete(t)
t=Ws()
t=ps(t,e)
e=ys(e,t)
null!==e&&(pa(e,t),t=e.expirationTime,0!==t&&Ks(e,t))}function ys(e,t){e.expirationTime<t&&(e.expirationTime=t)
var n=e.alternate
null!==n&&n.expirationTime<t&&(n.expirationTime=t)
var r=e.return,a=null
if(null===r&&3===e.tag)a=e.stateNode
else for(;null!==r;){n=r.alternate
r.childExpirationTime<t&&(r.childExpirationTime=t)
null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t)
if(null===r.return&&3===r.tag){a=r.stateNode
break}r=r.return}return a}function vs(e,t){e=ys(e,t)
null!==e&&(!Ko&&0!==Go&&t>Go&&as(),pa(e,t),Ko&&!Zo&&$o===e||Ks(e,e.expirationTime),Bs>Ls&&(Bs=0,s("185")))}function bs(e,t,n,r,a){return i.unstable_runWithPriority(i.unstable_ImmediatePriority,function(){return e(t,n,r,a)})}var ws=null,ks=null,xs=0,Ms=void 0,Ts=!1,Ds=null,Es=0,Ss=0,Cs=!1,Ps=null,Os=!1,js=!1,As=null,Ns=i.unstable_now(),zs=1073741822-(Ns/10|0),Is=zs,Ls=50,Bs=0,Rs=null
function Fs(){zs=1073741822-((i.unstable_now()-Ns)/10|0)}function Ys(e,t){if(0!==xs){if(t<xs)return
null!==Ms&&i.unstable_cancelCallback(Ms)}xs=t
e=i.unstable_now()-Ns
Ms=i.unstable_scheduleCallback(Js,{timeout:10*(1073741822-t)-e})}function qs(e,t,n,r,a){e.expirationTime=r
0!==a||Gs()?0<a&&(e.timeoutHandle=jr(Hs.bind(null,e,t,n),a)):(e.pendingCommitExpirationTime=n,e.finishedWork=t)}function Hs(e,t,n){e.pendingCommitExpirationTime=n
e.finishedWork=t
Fs()
Is=zs
Xs(e,n)}function Us(e,t){e.expirationTime=t
e.finishedWork=null}function Ws(){if(Ts)return Is
Vs()
0!==Es&&1!==Es||(Fs(),Is=zs)
return Is}function Ks(e,t){null===e.nextScheduledRoot?(e.expirationTime=t,null===ks?(ws=ks=e,e.nextScheduledRoot=e):(ks=ks.nextScheduledRoot=e,ks.nextScheduledRoot=ws)):t>e.expirationTime&&(e.expirationTime=t)
Ts||(Os?js&&(Ds=e,Es=1073741823,Zs(e,1073741823,!1)):1073741823===t?Qs(1073741823,!1):Ys(e,t))}function Vs(){var e=0,t=null
if(null!==ks)for(var n=ks,r=ws;null!==r;){var a=r.expirationTime
if(0===a){(null===n||null===ks)&&s("244")
if(r===r.nextScheduledRoot){ws=ks=r.nextScheduledRoot=null
break}if(r===ws)ws=a=r.nextScheduledRoot,ks.nextScheduledRoot=a,r.nextScheduledRoot=null
else{if(r===ks){ks=n
ks.nextScheduledRoot=ws
r.nextScheduledRoot=null
break}n.nextScheduledRoot=r.nextScheduledRoot,r.nextScheduledRoot=null}r=n.nextScheduledRoot}else{a>e&&(e=a,t=r)
if(r===ks)break
if(1073741823===e)break
n=r
r=r.nextScheduledRoot}}Ds=t
Es=e}var $s=!1
function Gs(){return!!$s||!!i.unstable_shouldYield()&&($s=!0)}function Js(){try{if(!Gs()&&null!==ws){Fs()
var e=ws
do{var t=e.expirationTime
0!==t&&zs<=t&&(e.nextExpirationTimeToWorkOn=zs)
e=e.nextScheduledRoot}while(e!==ws)}Qs(0,!0)}finally{$s=!1}}function Qs(e,t){Vs()
if(t)for(Fs(),Is=zs;null!==Ds&&0!==Es&&e<=Es&&!($s&&zs>Es);)Zs(Ds,Es,zs>Es),Vs(),Fs(),Is=zs
else for(;null!==Ds&&0!==Es&&e<=Es;)Zs(Ds,Es,!1),Vs()
t&&(xs=0,Ms=null)
0!==Es&&Ys(Ds,Es)
Bs=0
Rs=null
if(null!==As)for(e=As,As=null,t=0;t<e.length;t++){var n=e[t]
try{n._onComplete()}catch(e){Cs||(Cs=!0,Ps=e)}}if(Cs)throw e=Ps,Ps=null,Cs=!1,e}function Xs(e,t){Ts&&s("253")
Ds=e
Es=t
Zs(e,t,!1)
Qs(1073741823,!1)}function Zs(e,t,n){Ts&&s("245")
Ts=!0
if(n){var r=e.finishedWork
null!==r?eu(e,r,t):(e.finishedWork=null,r=e.timeoutHandle,-1!==r&&(e.timeoutHandle=-1,Ar(r)),hs(e,n),r=e.finishedWork,null!==r&&(Gs()?e.finishedWork=r:eu(e,r,t)))}else r=e.finishedWork,null!==r?eu(e,r,t):(e.finishedWork=null,r=e.timeoutHandle,-1!==r&&(e.timeoutHandle=-1,Ar(r)),hs(e,n),r=e.finishedWork,null!==r&&eu(e,r,t))
Ts=!1}function eu(e,t,n){var r=e.firstBatch
if(null!==r&&r._expirationTime>=n&&(null===As?As=[r]:As.push(r),r._defer)){e.finishedWork=t
e.expirationTime=0
return}e.finishedWork=null
e===Rs?Bs++:(Rs=e,Bs=0)
i.unstable_runWithPriority(i.unstable_ImmediatePriority,function(){cs(e,t)})}function tu(e){null===Ds&&s("246")
Ds.expirationTime=0
Cs||(Cs=!0,Ps=e)}function nu(e,t){var n=Os
Os=!0
try{return e(t)}finally{(Os=n)||Ts||Qs(1073741823,!1)}}function ru(e,t){if(Os&&!js){js=!0
try{return e(t)}finally{js=!1}}return e(t)}function au(e,t,n){Os||Ts||0===Ss||(Qs(Ss,!1),Ss=0)
var r=Os
Os=!0
try{return i.unstable_runWithPriority(i.unstable_UserBlockingPriority,function(){return e(t,n)})}finally{(Os=r)||Ts||Qs(1073741823,!1)}}function iu(e,t,n,r,a){var i=t.current
e:if(n){n=n._reactInternalFiber
t:{2===dn(n)&&1===n.tag||s("170")
var o=n
do{switch(o.tag){case 3:o=o.stateNode.context
break t
case 1:if($r(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext
break t}}o=o.return}while(null!==o)
s("171")
o=void 0}if(1===n.tag){var u=n.type
if($r(u)){n=Xr(n,u,o)
break e}}n=o}else n=Hr
null===t.context?t.context=n:t.pendingContext=n
t=a
a=mo(r)
a.payload={element:e}
t=void 0===t?null:t
null!==t&&(a.callback=t)
ls()
_o(i,a)
vs(i,r)
return r}function ou(e,t,n,r){var a=t.current,i=Ws()
a=ps(i,a)
return iu(e,t,n,a,r)}function su(e){e=e.current
if(!e.child)return null
switch(e.child.tag){case 5:default:return e.child.stateNode}}function uu(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null
return{$$typeof:et,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}Oe=function(e,t,n){switch(t){case"input":Ot(e,n)
t=n.name
if("radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode
n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]')
for(t=0;t<n.length;t++){var r=n[t]
if(r!==e&&r.form===e.form){var a=Y(r)
a||s("90")
Ge(r)
Ot(r,a)}}}break
case"textarea":cr(e,n)
break
case"select":t=n.value,null!=t&&sr(e,!!n.multiple,t,!1)}}
function lu(e){var t=1073741822-25*(1+((1073741822-Ws()+500)/25|0))
t>=Wo&&(t=Wo-1)
this._expirationTime=Wo=t
this._root=e
this._callbacks=this._next=null
this._hasChildren=this._didComplete=!1
this._children=null
this._defer=!0}lu.prototype.render=function(e){this._defer||s("250")
this._hasChildren=!0
this._children=e
var t=this._root._internalRoot,n=this._expirationTime,r=new cu
iu(e,t,null,n,r._onCommit)
return r}
lu.prototype.then=function(e){if(this._didComplete)e()
else{var t=this._callbacks
null===t&&(t=this._callbacks=[])
t.push(e)}}
lu.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch
this._defer&&null!==t||s("251")
if(this._hasChildren){var n=this._expirationTime
if(t!==this){this._hasChildren&&(n=this._expirationTime=t._expirationTime,this.render(this._children))
for(var r=null,a=t;a!==this;)r=a,a=a._next
null===r&&s("251")
r._next=a._next
this._next=t
e.firstBatch=this}this._defer=!1
Xs(e,n)
t=this._next
this._next=null
t=e.firstBatch=t
null!==t&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1}
lu.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0
var e=this._callbacks
if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}}
function cu(){this._callbacks=null
this._didCommit=!1
this._onCommit=this._onCommit.bind(this)}cu.prototype.then=function(e){if(this._didCommit)e()
else{var t=this._callbacks
null===t&&(t=this._callbacks=[])
t.push(e)}}
cu.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0
var e=this._callbacks
if(null!==e)for(var t=0;t<e.length;t++){var n=e[t]
"function"!==typeof n&&s("191",n)
n()}}}
function du(e,t,n){t=oa(3,null,null,t?3:0)
e={current:t,containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null}
this._internalRoot=t.stateNode=e}du.prototype.render=function(e,t){var n=this._internalRoot,r=new cu
t=void 0===t?null:t
null!==t&&r.then(t)
ou(e,n,null,r._onCommit)
return r}
du.prototype.unmount=function(e){var t=this._internalRoot,n=new cu
e=void 0===e?null:e
null!==e&&n.then(e)
ou(null,t,null,n._onCommit)
return n}
du.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var r=this._internalRoot,a=new cu
n=void 0===n?null:n
null!==n&&a.then(n)
ou(t,r,e,a._onCommit)
return a}
du.prototype.createBatch=function(){var e=new lu(this),t=e._expirationTime,n=this._internalRoot,r=n.firstBatch
if(null===r)n.firstBatch=e,e._next=null
else{for(n=null;null!==r&&r._expirationTime>=t;)n=r,r=r._next
e._next=r
null!==n&&(n._next=e)}return e}
function fu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}Le=nu
Be=au
Re=function(){Ts||0===Ss||(Qs(Ss,!1),Ss=0)}
function hu(e,t){t||(t=e?9===e.nodeType?e.documentElement:e.firstChild:null,t=!(!t||1!==t.nodeType||!t.hasAttribute("data-reactroot")))
if(!t)for(var n;n=e.lastChild;)e.removeChild(n)
return new du(e,!1,t)}function mu(e,t,n,r,a){var i=n._reactRootContainer
if(i){if("function"===typeof a){var o=a
a=function(){var e=su(i._internalRoot)
o.call(e)}}null!=e?i.legacy_renderSubtreeIntoContainer(e,t,a):i.render(t,a)}else{i=n._reactRootContainer=hu(n,r)
if("function"===typeof a){var s=a
a=function(){var e=su(i._internalRoot)
s.call(e)}}ru(function(){null!=e?i.legacy_renderSubtreeIntoContainer(e,t,a):i.render(t,a)})}return su(i._internalRoot)}function pu(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null
fu(t)||s("200")
return uu(e,t,null,n)}var _u={createPortal:pu,findDOMNode:function(e){if(null==e)return null
if(1===e.nodeType)return e
var t=e._reactInternalFiber
void 0===t&&("function"===typeof e.render?s("188"):s("268",Object.keys(e)))
e=mn(t)
e=null===e?null:e.stateNode
return e},hydrate:function(e,t,n){fu(t)||s("200")
return mu(null,e,t,!0,n)},render:function(e,t,n){fu(t)||s("200")
return mu(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){fu(n)||s("200");(null==e||void 0===e._reactInternalFiber)&&s("38")
return mu(e,t,n,!1,r)},unmountComponentAtNode:function(e){fu(e)||s("40")
return!!e._reactRootContainer&&(ru(function(){mu(null,null,e,!1,function(){e._reactRootContainer=null})}),!0)},unstable_createPortal:function(){return pu.apply(void 0,arguments)},unstable_batchedUpdates:nu,unstable_interactiveUpdates:au,flushSync:function(e,t){Ts&&s("187")
var n=Os
Os=!0
try{return bs(e,t)}finally{Os=n,Qs(1073741823,!1)}},unstable_createRoot:gu,unstable_flushControlled:function(e){var t=Os
Os=!0
try{bs(e)}finally{(Os=t)||Ts||Qs(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[R,F,Y,j.injectEventPluginsByName,w,V,function(e){C(e,K)},ze,Ie,Bn,N]}}
function gu(e,t){fu(e)||s("299","unstable_createRoot")
return new du(e,!0,null!=t&&!0===t.hydrate)}(function(e){var t=e.findFiberByHostInstance
aa(a({},e,{overrideProps:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){e=mn(e)
return null===e?null:e.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))})({findFiberByHostInstance:B,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"})
var yu={default:_u},vu=yu&&_u||yu
e.exports=vu.default||vu},yvkg:function(e,t,n){r=function(e,t){e.fn.spin=function(n,r){return this.each(function(){var a=e(this),i=a.data()
if(i.spinner){i.spinner.stop()
delete i.spinner}if(false!==n){n=e.extend({color:r||a.css("color")},e.fn.spin.presets[n]||n)
i.spinner=new t(n).spin(this)}})}
e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}},r(n("ouhR"),n("RnbG"))
var r},zGIJ:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=t.variables=void 0
var a=r(n("MVZn"))
var i=n("seZM")
var o=r(n("M7Ji"))
var s=r(n("nIQR"))
var u=n("+OyF")
var l=(0,a.default)({},u.baseVariables,{colors:s.default})
t.variables=l
var c=(0,i.registerTheme)({key:o.default.CANVAS_HIGH_CONTRAST,immutable:false,description:"This theme meets WCAG 2.0 AA rules for color contrast.",variables:l})
t.default=c},zuR4:function(e,t,n){"use strict"
var r=n("xTJ+")
var a=n("HSsa")
var i=n("CgaS")
var o=n("JEQr")
function s(e){var t=new i(e)
var n=a(i.prototype.request,t)
r.extend(n,i.prototype,t)
r.extend(n,t)
return n}var u=s(o)
u.Axios=i
u.create=function(e){return s(r.merge(o,e))}
u.Cancel=n("endd")
u.CancelToken=n("jfS+")
u.isCancel=n("Lmem")
u.all=function(e){return Promise.all(e)}
u.spread=n("DfZB")
e.exports=u
e.exports.default=u}})

//# sourceMappingURL=main-e-d54202b5a8.js.map