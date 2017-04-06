import { environment } from '../../environments/environment';

let apiPrefix = 'http://127.0.0.1:3000';
if (environment.production) {
    apiPrefix = 'http://api.bluewaitor.com';
}

export const loginUrl = apiPrefix + '/login';
export const signUrl = apiPrefix + '/signup';
export const usersUrl = apiPrefix + '/users';
export const articlesUrl = apiPrefix + '/articles';
export const dashboardArticlesUrl = apiPrefix + '/dashboard/articles';
export const meUrl = apiPrefix + '/me';
export const tagUrl = apiPrefix + '/tags';
