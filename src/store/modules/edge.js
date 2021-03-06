/*
 * @Description: your project
 * @version: 1.0
 * @Author: Rex Joush
 * @Date: 2021-04-02 12:44:04
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-05-12 22:24:31
 */
import { initEdgeGraph, getAllEdgeNodes, getNodeByName, getAllDevices ,getLogs } from '@/api/edge'
import { getToken } from '@/utils/auth'

const state = {
  nodeName: '',
  token: getToken(),
  // name: '',
  // avatar: ''
}

const mutations = {
  // 跳转 Edge Node 详情页面
  TO_EDGE_NODE_DETIALS: (state, nodeName) => {
    // 赋值
    state.nodeName = nodeName;
  }
}

const actions = {

  // 初始化图
  initEdgeGraph({ commit }) {
    return new Promise((resolve, reject) => {
      initEdgeGraph().then(response => {
        const { data } = response
        if (!data) {
          return reject('获取失败')
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  
  //获得日志
  getLogs({ commit }, pod) {
    console.log(pod.podName);
    return new Promise((resolve, reject) => {
      getLogs(pod).then(response => {
        const { data } = response
        if (!data) {
          return reject('获取失败')
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取所有边缘节点
  getAllEdgeNodes({ commit }) {
    return new Promise((resolve, reject) => {
      getAllEdgeNodes().then(response => {
        const { data } = response
        if (!data) {
          return reject('获取失败')
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 通过node名字获取信息 
  getNodeByName({ commit }, nodeName) {
    return new Promise((resolve, reject) => {
      getNodeByName(nodeName).then(response => {
        const { data } = response
        if (!data) {
          return reject('获取失败')
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取所有设备
  getAllDevices({ commit }, objName) {
    return new Promise((resolve, reject) => {
      getAllDevices(objName).then(response => {
        const { data } = response
        if (!data) {
          return reject('获取失败')
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 点击名字进入 node 详情页
  toDetails({ commit }, edgenodeName) {
    commit("TO_EDGE_NODE_DETIALS", edgenodeName);
    console.log("333", edgenodeName);
  },


}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
