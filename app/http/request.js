import Vue from 'vue'

import axios from 'axios'

Vue.prototype.$http = axios;

Vue.prototype.get = function(url) {
    axios.get(url).then(function (response) {
        return response;
   }).catch(function (error) {
       return error;
  });
}

Vue.prototype.post = function(url, params = {}) {
    axios.post(url, params).then(function (response) {
        return response;
    }).catch(function (error) {
        return response;
    });
}
