import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/admin',
    route: AdminRoutes,
  },  {
    path: '/user',
    route: UserRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
