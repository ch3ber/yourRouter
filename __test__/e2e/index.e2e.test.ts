import Router from '../../lib'

Router.create({
  path404: '/notFound',
  renderId: '#app'
})
const router = Router.get()

const Menu = () => {
  const view = `
    <ul>
      <li><a href="/#/">Go to Home</a></li>
      <li><a href="/#/test">Go to Test</a></li>
      <li><a href="/#/test/test">Go to Test/test</a></li>
      <li><a href="/#/product/123">Go to dynamic route</a></li>
      <li><a href="/#/newpost/321">Go to dynamic route similar</a></li>
      <li><a href="/#/post/New Post">Go to dynamic route</a></li>
      <li><a href="/#/api/products/categories/small/20398475">Go to extend dynamic route</a></li>
      <li><a href="/#/api/products">Go to json</a></li>
      <li><a href="/#/api/product/:id">Go to dynamic json</a></li>
    </ul>
  `
  return view
}

const DynamicRoute = () => {
  const param = router.getRouteParam()
  const view = `<h1>The route param is: ${param}</h1>`
  return view
}

const foo = () => {
  const view = `
    <h1>Test page addRoute</h1>
    ${Menu()}
  `
  return view
}

const Home = () => {
  const view = `
    <h1>Home</h1>
    ${Menu()}
  `
  return view
}

router.addRoute('/', async () => {
  // console.log(getRouteInfo.get())
  return Home
  // const app = document.querySelector('#app')!
  // app.innerHTML = await Home() as string
})

router.addRoute('/test', () => {
  // console.log(getRouteInfo.get())
  return foo
  // document.querySelector('body')!.innerHTML = foo() as string
})

router.addRoute('/test/test', () => {
  // console.log(getRouteInfo.get())
  return foo
  // document.querySelector('body')!.innerHTML = foo() as string
})
router.addRoute('/product/:id', () => {
  // console.log(getRouteInfo.get())
  // return DynamicRoute
  document.querySelector('#app')!.innerHTML = DynamicRoute() as string
})
router.addRoute('/newpost/:id', () => {
  // console.log(getRouteInfo.get())
  return DynamicRoute
  // document.querySelector('body')!.innerHTML = DynamicRoute() as string
})
router.addRoute('/post/:id', () => {
  // console.log(getRouteInfo.get())
  return DynamicRoute
  // document.querySelector('body')!.innerHTML = foo() as string
})
router.addRoute('/api/products/categories/small/:id', () => {
  // console.log(getRouteInfo.get())
  return DynamicRoute
  // document.querySelector('body')!.innerHTML = foo() as string
})
router.addRoute('/notFound', () => {
  // console.log(getRouteInfo.get())
  return () => '<h1>Error 404</h1>'
  // document.querySelector('#app')!.innerHTML = '<h1>Error 404</h1>'
})
