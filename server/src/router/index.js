
//init
const Router = require('koa-router')
const router = new Router()

//module
const login = require(COMPONENT + '/c/login')
const home = require(CONTENT + '/c/home')


//router
//index
router.get('/', ctx=>{console.log('you got me')})

//login
router.get('/login',login.get)

//home
router.get('/home',home.get)



module.exports= router
