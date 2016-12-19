export default {
  post(url, param, successCallback, errorCallback, _self, isShowIndicator) {
    let that = this;
    let startTime = new Date();

    _self.$http.post(url, param).then(function (response) {
      console.group(url);
      console.debug("%c参数", "font-weight:bold;color:black;");
      console.debug(JSON.stringify(param));
      console.debug("%c返回", "font-weight:bold;color:black;");
      console.debug(JSON.stringify(response.data).substring(0, 100));
      console.debug("%c耗时", "font-weight:bold;color:black;");
      console.debug((new Date().getTime() - startTime) + ' 毫秒');
      console.groupEnd();

      console.log(JSON.parse(JSON.stringify(response.data.data)));

      switch (response.data.status) {
        case 200:
          successCallback && successCallback(response.data.data);
          break;
        default:
          that.ajaxError(response.data.status);
          //errorCallback && errorCallback();
          break;
      }
    }, function (response) {
      that.ajaxError(response.data.status);
      //errorCallback && errorCallback();
    })
  },

  ajaxError(response) {
    switch (response.status) {
      case 0: // 网络不通
        this.showMsgBox('网络暂时未能连通');
        break;
      case 401: // 未登录
      case 521: // 超时
        this.showMsgBox('网络超时');
        break;
      case 522: // 错误
        break;
      case 523:
        this.showMsgBox('当前时间存在较大偏差');
        break;
      case 524:
        this.showMsgBox('未找到相关数据');
        break;
      default:
        this.showMsgBox('服务器异常');
        break
    }
  },

  setLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  },

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },

  log(o) {
    console.log(JSON.parse(JSON.stringify(o)));
  },

  copyObject(o) {
    return JSON.parse(JSON.stringify(o));
  },

  getByteLen(str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
      let a = str.charAt(i);
      if (a.match(/[^\x00-\xff]/ig) != null) {
        len += 2;
      } else {
        len += 1;
      }
    }
    return len;
  }
}
