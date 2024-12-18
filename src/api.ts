import axios, { Axios } from 'axios';

const apiService: Axios = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

export const get = async (url: string = '') => {
	const res = await apiService.get(`/animals/${url}`);
	if (res.status > 204) {
		throw new Error(await res.data);
	}
	return await res.data;
};

export default apiService;
