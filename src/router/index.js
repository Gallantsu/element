import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/*ces*/

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
		  path: '/form',
		  name: 'form',
		  component: HelloWorld
		},
		{
		  path: '/table',
		  name: 'table',
		  component: ()=> import('@/pages/Table')
		},
		{
		  path: '/card',
		  name: 'card',
		  component: ()=>import('@/pages/Card')
		},
  ]
})
