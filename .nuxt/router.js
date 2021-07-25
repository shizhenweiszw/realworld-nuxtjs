import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f9667c3 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _4ee0b3b8 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _e523e8a0 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _797e9fa0 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _3615667c = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _4edf2ce3 = () => interopDefault(import('..\\pages\\edit' /* webpackChunkName: "" */))
const _abea1906 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1f9667c3,
    children: [{
      path: "",
      component: _4ee0b3b8,
      name: "home"
    }, {
      path: "/login",
      component: _e523e8a0,
      name: "login"
    }, {
      path: "/register",
      component: _e523e8a0,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _797e9fa0,
      name: "profile"
    }, {
      path: "/settings",
      component: _3615667c,
      name: "settings"
    }, {
      path: "/edit",
      component: _4edf2ce3,
      name: "edit"
    }, {
      path: "/article/:slug",
      component: _abea1906,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
