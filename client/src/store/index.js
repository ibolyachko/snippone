// Core
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth 		from './modules/auth'
import files 		from './modules/files'
import snippets 	from './modules/snippets'
import integration 	from './modules/integration'
import providers 	from './modules/providers'
import messages 	from './modules/messages'

export default new Vuex.Store({
    modules: {
		auth,
		files,
		snippets,
		integration,
		providers,
		messages
	}
})