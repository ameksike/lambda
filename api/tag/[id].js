export default function (req, res) {
	res.json({
		name: "tag/:id",
		url: req.url,
		method: req.method,
		query: req.query,
		param: req.param,
		params: req.params,
		body: req.body
	})
}
