//@ui5-bundle nfaapproval/Component-preload.js
sap.ui.require.preload({
	"nfaapproval/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("nfaapproval.Component",{metadata:{manifest:"json"}})});
},
	"nfaapproval/ext/controller/Approve.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{Approve:function(s){e.show("Custom handler invoked.")}}});
},
	"nfaapproval/ext/controller/Comment.js":function(){
sap.ui.define(["sap/m/MessageToast","sap/suite/ui/commons/Timeline","sap/m/Dialog","sap/m/Text","sap/m/Button","sap/suite/ui/commons/TimelineItem"],function(e,t,n,a,o,r){"use strict";var s;return{comment:function(t){debugger;s=this._view.getParent().getAppComponent().getManifestObject()._oBaseUri._string;debugger;var a={url:s+"odata/v4/catalog/PAN_Comments_APR",method:"GET",headers:{Accept:"application/json"}};new Promise((e,t)=>{$.ajax(a).done((t,n,a)=>{e(t)}).fail(e=>{t(e)})}).then(e=>{var t=e.value;var a=[];for(var s=0;s<t.length;s++){var m={createdAt:t[s].createdAt,comment:t[s].Comments,createdBy:t[s].createdBy};a.push(m)}var i=new n({title:"Comments",width:"80%",maxWidth:"90%",endButton:new o({text:"Close",press:function(){i.close()}})});a.forEach(function(e){var t=new r({dateTime:e.createdAt,text:e.comment,userName:e.createdBy});i.addContent(t)});i.open()}).catch(t=>{console.error("Error fetching comments:",t);e.show("Error fetching comments.")})}}});
},
	"nfaapproval/ext/controller/Objectpage.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";var t;return e.extend("nfaapproval.ext.controller.Objectpage",{override:{onInit:function(){debugger;var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(e){t=this.getView().getParent().getAppComponent().getManifestObject()._oBaseUri._string;debugger;var a=sap.ui.getCore().byId("nfaapproval::tab1ObjectPage--fe::CustomSubSection::Workflow--sampleTable");a.addStyleClass("workFlowTable");var o={url:t+"odata/v4/catalog/PAN_WORKFLOW_HISTORY_APR",method:"GET",headers:{Accept:"application/json"}};new Promise((e,t)=>{$.ajax(o).done((t,o,n)=>{var r=new sap.ui.model.json.JSONModel;r.setData({PAN_WORKFLOW_HISTORY_APR:t.value});a.setModel(r);console.log(t);a.bindItems({path:"/PAN_WORKFLOW_HISTORY_APR",template:new sap.m.ColumnListItem({cells:[new sap.m.Text({text:"{PAN_Number}"}),new sap.m.Text({text:"{Employee_Name}"}),new sap.m.Text({text:"{level}"}),new sap.m.Text({text:"{Notification_Status}"}),new sap.m.Text({text:"{Approved_by}"})]})});e(t)}).fail(e=>{t(e)})});var n=[{header:"Employee Id",path:"PAN_Number"},{header:"Employee Name",path:"Employee_Name"},{header:"Level",path:"level"},{header:"Status",path:"Notification_Status"},{header:"Approved By",path:"Approved_by"}];a.destroyColumns();n.forEach(function(e){var t=new sap.m.Column({header:new sap.m.Text({text:e.header})});a.addColumn(t)})}}}})});
},
	"nfaapproval/ext/controller/Reject.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{Reject:function(s){e.show("Custom handler invoked.")}}});
},
	"nfaapproval/ext/fragment/Attachment.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros" displayBlock="true"\nxmlns:mvc="sap.ui.core.mvc"\n\txmlns:upload="sap.m.upload"><VBox id= "11" width="100%"><Button id="dewdewdw" visible="false" core:require="{ handler: \'nfaapproval/ext/fragment/Attachment\'}"  press="handler.onPress" /><upload:UploadSet\n\t\t\t\t\t\n\t\t\t\t\tid="uploadSet"\n\t\t\t\t\tcore:require="{ handler: \'nfaapproval/ext/fragment/Attachment\'}"\n\t\t\t\t\tinstantUpload="false"\n\t\t\t\t\tuploadEnabled="true"\n\t\t\t\t\tmode="None"\n\t\t\t\t\t\n\t\t\t\t\tshowIcons="true"\n\t\t\t\t\tafterItemAdded="handler.onAfterItemAdded"\n\t\t\t\t\tuploadCompleted="handler.onUploadCompleted"\n\t\t\t\t\titems="{\n\t\t\t\t\t\t\t\tpath: \'/PAN_attachments_APR\',\n\t\t\t\t\t\t\t\tparameters: {\n\t\t\t\t\t\t\t\t\t$orderby: \'createdAt desc\'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\ttemplateShareable: false}"\n\t\t\t\t><upload:toolbar></upload:toolbar><upload:items><upload:UploadSetItem\n\t\t\t\t\t\tid="ddd"\n\t\t\t\t\t\t\tfileName="{fileName}"\n\t\t\t\t\t\t\tmediaType="{mediaType}"\n\t\t\t\t\t\t\turl="{url}"\n\t\t\t\t\t\t\tthumbnailUrl="{\n\t\t\t\t\t\t\t\tpath: \'mediaType\',\n\t\t\t\t\t\t\t\tformatter: \'handler.formatThumbnailUrl\'\n\t\t\t\t\t\t\t}"\n\t\t\t\t\t\t\tenabledEdit="false"\n\t\t\t\t\t\t\topenPressed="handler.onOpenPressed"\n\t\t\t\t\t\t\tremovePressed="handler.onRemovePressed"\n\t\t\t\t\t\t\tenabledRemove="true"\n\t\t\t\t\t\t\tselected="false"\n\t\t\t\t\t\t\tvisibleEdit="false"\n\t\t\t\t\t\t\tvisibleRemove="true"\n\t\t\t\t\t\t><upload:attributes><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded By"\n\t\t\t\t\t\t\t\t\ttext="{createdBy}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded on"\n\t\t\t\t\t\t\t\t\ttext="{createdAt}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dddw2"\n\n\t\t\t\t\t\t\t\t\ttitle="File Type"\n\t\t\t\t\t\t\t\t\ttext="{mediaType}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t\tvisible="false"\t\t\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22a"\n\t\t\t\t\t\t\t\t\ttitle="File Size"\n\t\t\t\t\t\t\t\t\ttext="{size}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t\tvisible="false"\n\t\t\t\t\t\t\t\t/></upload:attributes></upload:UploadSetItem></upload:items></upload:UploadSet></VBox></core:FragmentDefinition>',
	"nfaapproval/ext/fragment/Attachment.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress:function(t){e.show("Custom handler invoked.")},onOpenPressed:function(e){debugger;e.preventDefault();var t=e.getSource();let a=t.getUrl();var n=t.getFileName();var o=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oBindingContexts.undefined.oModel.sServiceUrl;let r=a.replace("/odata/v4/catalog","");let c=o+r;var s=function(e){var t={url:c,method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})};s(t).then(e=>{var t=window.URL.createObjectURL(e);window.open(t,"_blank")}).catch(e=>{console.log(e)})},formatThumbnailUrl:function(e){var t;switch(e){case"image/png":t="sap-icon://card";break;case"text/plain":t="sap-icon://document-text";break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":t="sap-icon://excel-attachment";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":t="sap-icon://doc-attachment";break;case"application/pdf":t="sap-icon://pdf-attachment";break;default:t="sap-icon://attachment"}return t}}});
},
	"nfaapproval/ext/fragment/Workflow.fragment.xml":'<core:FragmentDefinition\n    xmlns="sap.m"\n    xmlns:core="sap.ui.core"\n    xmlns:u="sap.ui.unified"\n    xmlns:rich="sap.ui.richtexteditor"\n    xmlns:commons="sap.suite.ui.commons"\n><VBox id="box" width="100%"><ScrollContainer id="_IDGenScrollContainer2" \n            width="100%"\n            height="auto"\n            horizontal="true" \n            vertical="false" \n        ><Table id="sampleTable" width="110vw"></Table></ScrollContainer></VBox></core:FragmentDefinition>\n',
	"nfaapproval/ext/fragment/Workflow.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{onPress:function(e){s.show("Custom handler invoked.")}}});
},
	"nfaapproval/i18n/i18n.properties":'# This is the resource bundle for nfaapproval\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=nfa_approval\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,36\nflpTitle=NFA Approval\n',
	"nfaapproval/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"nfaapproval","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.5","toolsId":"7d521213-316e-4405-abbc-a3bd262fa38c"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"nfaapproval-display":{"semanticObject":"nfaapproval","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.126.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"nfaapproval.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"tab1List","target":"tab1List"},{"pattern":"tab1({key}):?query:","name":"tab1ObjectPage","target":"tab1ObjectPage"},{"name":"tab1_tab1tovendor_dataObjectPage","pattern":"tab1({key})/tab1tovendor_data({tab1tovendor_dataKey}):?query:","target":"tab1_tab1tovendor_dataObjectPage"}],"targets":{"tab1List":{"type":"Component","id":"tab1List","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/tab1","variantManagement":"Page","navigation":{"tab1":{"detail":{"route":"tab1ObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"GridTable"}}},"initialLoad":"Enabled"}}},"tab1ObjectPage":{"type":"Component","id":"tab1ObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/tab1","navigation":{"tab1tovendor_data":{"detail":{"route":"tab1_tab1tovendor_dataObjectPage"}}},"content":{"body":{"sections":{"Workflow":{"template":"nfaapproval.ext.fragment.Workflow","position":{"placement":"After","anchor":"Justification"},"title":"Workflow History"},"Attachment":{"template":"nfaapproval.ext.fragment.Attachment","position":{"placement":"After","anchor":"VendorResponseDetails"},"title":"Attachment"}}},"footer":{"actions":{"Approve":{"press":"nfaapproval.ext.controller.Approve.Approve","visible":true,"enabled":true,"text":"Approve"},"Reject":{"press":"nfaapproval.ext.controller.Reject.Reject","visible":true,"enabled":true,"text":"Reject","position":{"placement":"Before","anchor":"Approve"}}}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.FieldGroup#Justification":{"actions":{"CommentHistory":{"press":"nfaapproval.ext.controller.Comment.comment","visible":true,"enabled":true,"text":"Comment History"}}}}}}},"tab1_tab1tovendor_dataObjectPage":{"type":"Component","id":"tab1_tab1tovendor_dataObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"navigation":{},"contextPath":"/tab1/tab1tovendor_data"}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ObjectPage.ObjectPageController#nfaapproval::tab1ObjectPage":{"controllerName":"nfaapproval.ext.controller.Objectpage"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"nfaapprovalapprouter"}}'
});
//# sourceMappingURL=Component-preload.js.map
