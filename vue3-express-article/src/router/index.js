import Publish from '../views/publish/index.vue';
import Profile from '../views/profile/index.vue';
import Article from '../views/article/index.vue';
import Home from '../views/home/index.vue';
import Layout from '../views/layout/index.vue';

const routes = [{
    path: '/',
    component: Layout,
    children: [{
        path: '/publish',
        component: Publish
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/article',
        component: Article
      },
      {
        path: '/',
        component: Home
      },
    ]
  },

]
export default routes;