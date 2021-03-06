//-----waterfull chart data example----------
// {
//     "total": 103.56,
//     "BU Specific":{
//         "Software Assigned to Apps":20.01,
//         "Hosting Services":31.02,
//         "HPE IT RtB": 3.01,
//         "Others": 7.02,
//         "total": 61.06,
//     },
//     "Core IT Services":{
//         "Mobile Subscription":3.1,
//         "Client Compting":6.2,
//         "Office Phone":11.1,
//         "Others":16.1,
//         "total": 36.5,
//     },
//     "Enterprise IT Services":{
//         "It Management":1,
//         "Investment Projects":1,
//         "WAN":2,
//         "Others":3,
//         "total": 7,
//     }
// }


var rawDataByBu =[
/* 1 */
{
    "_id" : 1,
    "Group" : "BU Specific",
    "Service Type" : "BU Specific",
    "Service Category" : "Change the Business",
    "Service Name" : "Investment Projects",
    "TNO: Monthly Cost" : 0.390336286,
    "SWHP: Monthly Cost" : 0.179563467,
    "EGR: Monthly Cost" : 3.869577965,
    "ESHP: Monthly Cost" : 1.406166116,
    "FIN: Monthly Cost" : 0.424287396,
    "HFS: Monthly Cost" : 0.160204213,
    "LAB: Monthly Cost" : 0.014579605,
    "CMP: Monthly Cost" : 0,
    "HR: Monthly Cost" : 0.016712121,
    "OP: Monthly Cost" : 0.007795349,
    "LEGO: Monthly Cost" : 0.194169716,
    "OTHER: Monthly Cost" : 0,
    "Total" : 6.663392234,
    "Month" : "Nov FY2016"
},

/* 2 */
{
    "_id" : 2,
    "Group" : "BU Specific",
    "Service Type" : "BU Specific",
    "Service Category" : "Run the Business",
    "Service Name" : "BU Discrete Software",
    "TNO: Monthly Cost" : 0.004456973,
    "SWHP: Monthly Cost" : 0.0381113,
    "EGR: Monthly Cost" : 1.136776445,
    "ESHP: Monthly Cost" : 0.004567651,
    "FIN: Monthly Cost" : 0.158794333,
    "HFS: Monthly Cost" : 0.040392933,
    "LAB: Monthly Cost" : 0.510772773,
    "CMP: Monthly Cost" : 0,
    "HR: Monthly Cost" : 0.073057082,
    "OP: Monthly Cost" : 0,
    "LEGO: Monthly Cost" : 0,
    "OTHER: Monthly Cost" : 0,
    "Total" : 1.96692949,
    "Month" : "Nov FY2016"
},

/* 3 */
{
    "_id" : 3,
    "Group" : "BU Specific",
    "Service Type" : "BU Specific",
    "Service Category" : "Run the Business",
    "Service Name" : "Hosting Services",
    "TNO: Monthly Cost" : 0.046052028,
    "SWHP: Monthly Cost" : 0.051432026,
    "EGR: Monthly Cost" : 0.072034812,
    "ESHP: Monthly Cost" : 0.058792621,
    "FIN: Monthly Cost" : 0.053810079,
    "HFS: Monthly Cost" : 0.059303773,
    "LAB: Monthly Cost" : 0.045328771,
    "CMP: Monthly Cost" : 0.045894383,
    "HR: Monthly Cost" : 0.047165098,
    "OP: Monthly Cost" : 0.04825906,
    "LEGO: Monthly Cost" : 0.045328771,
    "OTHER: Monthly Cost" : 0.047472571,
    "Total" : 0.620873994,
    "Month" : "Nov FY2016"
},

/* 4 */
{
    "_id" : 4,
    "Group" : "BU Specific",
    "Service Type" : "BU Specific",
    "Service Category" : "Run the Business",
    "Service Name" : "Application Operation & Support",
    "TNO: Monthly Cost" : 0.014543668,
    "SWHP: Monthly Cost" : 0.018668437,
    "EGR: Monthly Cost" : 0.034464299,
    "ESHP: Monthly Cost" : 0.0243117,
    "FIN: Monthly Cost" : 0.020491656,
    "HFS: Monthly Cost" : 0.024703593,
    "LAB: Monthly Cost" : 0.013989158,
    "CMP: Monthly Cost" : 0.014422804,
    "HR: Monthly Cost" : 0.015397043,
    "OP: Monthly Cost" : 0.016235768,
    "LEGO: Monthly Cost" : 0.013989158,
    "OTHER: Monthly Cost" : 0.015632779,
    "Total" : 0.226850062,
    "Month" : "Nov FY2016"
},

/* 5 */
{
    "_id" : 5,
    "Group" : "BU Specific",
    "Service Type" : "BU Specific",
    "Service Category" : "Run the Business",
    "Service Name" : "HPE IT RtB",
    "TNO: Monthly Cost" : 0.389216348,
    "SWHP: Monthly Cost" : 1.081431309,
    "EGR: Monthly Cost" : 1.671812598,
    "ESHP: Monthly Cost" : 1.314812215,
    "FIN: Monthly Cost" : 0.949108547,
    "HFS: Monthly Cost" : 1.138858402,
    "LAB: Monthly Cost" : 0.365925704,
    "CMP: Monthly Cost" : 0.372302394,
    "HR: Monthly Cost" : 0.419450012,
    "OP: Monthly Cost" : 0.630218188,
    "LEGO: Monthly Cost" : 0.365925704,
    "OTHER: Monthly Cost" : 0.631110949,
    "Total" : 9.33017237,
    "Month" : "Nov FY2016"
},

/* 6 */
{
    "_id" : 6,
    "Group" : "BU Specific",
    "Service Type" : "BU Specific",
    "Service Category" : "Run the Business",
    "Service Name" : "Software Assigned to Apps",
    "TNO: Monthly Cost" : 0.620398351,
    "SWHP: Monthly Cost" : 1.463007015,
    "EGR: Monthly Cost" : 3.049161706,
    "ESHP: Monthly Cost" : 5.004658604,
    "FIN: Monthly Cost" : 1.685263093,
    "HFS: Monthly Cost" : 1.083212173,
    "LAB: Monthly Cost" : 0.445226139,
    "CMP: Monthly Cost" : 0.452793955,
    "HR: Monthly Cost" : 1.78906836,
    "OP: Monthly Cost" : 0.81901095,
    "LEGO: Monthly Cost" : 0.445226139,
    "OTHER: Monthly Cost" : 0.64056924,
    "Total" : 17.49759573,
    "Month" : "Nov FY2016"
}
]