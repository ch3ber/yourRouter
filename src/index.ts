// imports
import { Template } from '@models/template.model'
import { Router } from '@router/index'

Router.createInstance({
  path404: '/notFound',
  renderId: '#app'
})
const router = Router.getInstance()

const Menu = (): Template => {
  const view = `
    <ul>
      <li><a href="/#/">Go to Home</a></li>
      <li><a href="/#/test">Go to Test</a></li>
      <li><a href="/#/test/test">Go to Test</a></li>
      <li><a href="/#/product/123">Go to dynamic route</a></li>
      <li><a href="/#/newpost/321">Go to dynamic route similar</a></li>
      <li><a href="/#/post/:id">Go to dynamic route</a></li>
      <li><a href="/#/api/products/categories/small/:id">Go to extend dynamic route</a></li>
      <li><a href="/#/api/products">Go to json</a></li>
      <li><a href="/#/api/product/:id">Go to dynamic json</a></li>
    </ul>
  `
  return view
}

const DynamicRoute = (): Template => {
  const param = router.getRouteParam()
  const view = `<h1>The route param is: ${param}</h1>`
  return view
}

const foo = (): Template => {
  const view = `
    <h1>Test page addRoute</h1>
    ${Menu()}
  `
  return view
}

const Home = (): Template => {
  const view = `
    <h1>Home</h1>
    ${Menu()}
  `
  return view
}

router.addRoute('/', () => {
  console.log(router.getRouteInfo())
  return Home
  // document.querySelector('body')!.innerHTML = Home() as string
})

router.addRoute('/test', () => {
  console.log(router.getRouteInfo())
  return foo
  // document.querySelector('body')!.innerHTML = foo() as string
})

router.addRoute('/test/test', () => {
  console.log(router.getRouteInfo())
  return foo
  // document.querySelector('body')!.innerHTML = foo() as string
})
router.addRoute('/product/:id', () => {
  console.log(router.getRouteInfo())
  return DynamicRoute
  // document.querySelector('body')!.innerHTML = foo() as string
})
router.addRoute('/newpost/:id', () => {
  console.log(router.getRouteInfo())
  return DynamicRoute
  // document.querySelector('body')!.innerHTML = foo() as string
})
router.addRoute('/notFound', () => {
  console.log(router.getRouteInfo())
  return () => '<h1>Error 404</h1>'
  // document.querySelector('body')!.innerHTML = '<h1>Error 404</h1>'
})