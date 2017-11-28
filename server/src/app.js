/*
 *app
 *
 */

//global
global.COMPONENT = __dirname + '/component'
global.CONTENT = __dirname + '/content'
global.URL = 'http://localhost:3000/'

//module
const Koa = require('koa')
const log = require('koa-logger')
const body = require('koa-bodyparser')
const serve = require('koa-static')
const onerror = require('koa-onerror')
const router = require('./router')

const app = new Koa()
onerror(app)

//mid-ware
app.use(log())
app.use(body())
app.use(serve('public'))
app.use(router.routes()).use(router.allowedMethods())

//router

module.exports = app
