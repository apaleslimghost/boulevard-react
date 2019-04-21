# boulevard-react

[boulevard](https://github.com/quarterto/boulevard) as a hook, using [`useHistory`](https://github.com/quarterto/use-history)

## usage

```sh
npm install boulevard-react
```

```js
const useRoutes = require('boulevard-react')

const routes = {
	'/': () => <div>home</div>
	'/page/:id': ({id}) => <div>page {id}</div>
}

const App = () => {
	const {children} = useRoutes(routes)
	return <div>{children}</div>
}

