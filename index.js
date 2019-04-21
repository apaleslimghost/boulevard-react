const useHistory = require('use-history')
const {route_} = require('boulevard')

const router = route_({
	getUrl: ({url}) => url,
	addParams: (params, ...args) => [params, ...args],
})

const useRoutes = routes => {
	const route = useMemo(() => router(routes), [routes])
	const history = useHistory()
	const children = route(history)

	return Object.assign({}, history, {children})
}

module.exports = useRoutes