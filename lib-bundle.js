window.__LIB["react"] = require("react");
window.__LIB["react-dom"] = require("react-dom");
window.__LIB["react-router-dom"] = require("react-router-dom");
window.__LIB["react-redux"] = require("react-redux");
window.__LIB["axios"] = require("axios");
window.__LIB["redux"] = require("redux");
window.__LIB["antd-mobile"] = require("antd-mobile");
window.__LIB["socket.io-client"] = require("socket.io-client");
window.__LIB["redux-thunk"] = require("redux-thunk");
// ...其它依赖包
// webpack ./lib-bundle.js ./lib.js   报错  单独打包的时候删除配置文件、或者先新建目标文件
// webpack lib-bundle.js ./lib.js
// webpack lib-bundle.js lib.js   还是找不到路径，没有配置
// webpack lib-bundle.js lib.js   没有配置，并且新建目标文件，报成功，但新建了dist/main.js
// 试试看，是不是这个文件



