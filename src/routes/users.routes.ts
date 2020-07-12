import { Server } from '@hapi/hapi';

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser
} from '../controllers/users.controller';

export const routes = (server: Server) => {
  server.route({
    method: 'POST',
    path: '/users',
    handler: createUser
  });
  server.route({
    method: 'GET',
    path: '/users',
    handler: getUsers
  });
  server.route({
    method: 'GET',
    path: '/user/{id}',
    handler: getUser
  });
  server.route({
    method: 'PUT',
    path: '/user/{id}',
    handler: updateUser
  });
  server.route({
    method: 'DELETE',
    path: '/user/{id}',
    handler: deleteUser
  });
};
