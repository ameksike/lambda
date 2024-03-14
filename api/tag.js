export default function (req, res) {
	res.json({
		name: "*",
		url: req.url,
		method: req.method,
		query: req.query,
		param: req.param,
		params: req.params,
		body: req.body
	})
}

export function create(req, res) {
	res.json({
		name: "create",
		url: req.url,
		method: req.method,
		query: req.query,
		param: req.param,
		params: req.params,
		body: req.body
	})
}

export function list(req, res) {
	res.json({
		name: "list",
		url: req.url,
		method: req.method,
		query: req.query,
		param: req.param,
		params: req.params,
		body: req.body
	})
}
