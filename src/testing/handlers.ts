import { http, HttpResponse } from 'msw'
import { BASE_URL } from 'src/shared/const/base-url';
import { getTop100Response } from './mock-response/get-top100.response';

export const handlers = [
	http.get(`${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`, () => {
		return HttpResponse.json(getTop100Response);
	}),
	http.get(`${BASE_URL}/lookup`, () => {
		return HttpResponse.json(getTop100Response);
	})
];