sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        getContentStreamUrl: function (sPanNumber, sId) {
            debugger
            if (!sPanNumber || !sId) return "";
            
            // Ensure single quotes in the OData key values are escaped if needed
            let url =`/odata/v4/pan-approval/PAN_attachments_APR(PAN_Number='${sPanNumber}',ID=${sId})/content`;
            console.log(url);
            return url;
        },
        onPress: function (oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        // onOpenPressed: function (oEvent) {
        //     debugger
        //     const item = oEvent.getSource();
        //     const fileName = item.getFileName();
        //     const itemUrl = item.getUrl(); // e.g., /odata/v4/catalog/attachments(...)/content

        //     // Get the base URL from the model (e.g., /odata/v4/catalog)
        //     let baseServiceUrl = item.getModel().sServiceUrl;
        //     baseServiceUrl = baseServiceUrl.replace('/odata/v4/pan-approval', '/odata/v4/catalog');

        //     // Clean up both parts to avoid double slashes
        //     baseServiceUrl = baseServiceUrl.replace(/\/$/, ''); // remove trailing slash
        //     let itemPath = itemUrl.replace('/odata/v4/catalog', '');
        //     if (itemPath.charAt(0) !== '/') {
        //         itemPath = '/' + itemPath;
        //     }
        //     const mergedUrl = baseServiceUrl + itemPath;

        //     var _download = function (item) {
        //         var settings = {
        //             // url: url111 + item.getUrl(),
        //             url: mergedUrl,
        //             method: "GET",
        //             headers: {
        //                 "Content-type": "application/octet-stream"
        //             },
        //             xhrFields: {
        //                 responseType: 'blob'
        //             }
        //         };

        //         return new Promise((resolve, reject) => {
        //             $.ajax(settings)
        //                 .done((result) => {
        //                     debugger
        //                     resolve(result);
        //                 })
        //                 .fail((err) => {
        //                     reject(err);
        //                 });
        //         });
        //     };

        //     _download(item)
        //         .then((blob) => {
        //             // var url = window.URL.createObjectURL(blob);
        //             // // Open the file in a new tab
        //             // window.open(url, '_blank');
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
        // },
        
        formatThumbnailUrl: function (mediaType) {
            var iconUrl;
            switch (mediaType) {
                case "image/png":
                    iconUrl = "sap-icon://card";
                    break;
                case "text/plain":
                    iconUrl = "sap-icon://document-text";
                    break;
                case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                    iconUrl = "sap-icon://excel-attachment";
                    break;
                case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    iconUrl = "sap-icon://doc-attachment";
                    break;
                case "application/pdf":
                    iconUrl = "sap-icon://pdf-attachment";
                    break;
                default:
                    iconUrl = "sap-icon://attachment";
            }
            return iconUrl;
        }
    };
});
