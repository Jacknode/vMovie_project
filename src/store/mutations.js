import getters from './getters.js';

const state = {
	isLoading: true
};

const mutations = {
	//loading设置
	showLoading(state) {
		state.isLoading = true;
	},
	hideLoading(state) {
		state.isLoading = false;
	},
};
export default {
	mutations,
	state,
	getters
}