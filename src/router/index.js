import NavConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        name: page.name,
        path: page.path,
        component: require(`../pages${page.filePath}`),
        meta: {
          title: page.title
        }
      })
    )
  );
  return { route, navs: config }
};

const route = registerRoute(NavConfig);

route.route.push({
  path: '/',
  component: require('../pages/test1.vue')
});

export const navs = route.navs;
export default route.route;
