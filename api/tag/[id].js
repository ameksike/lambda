export default function (req, res) {
	res.json({
        info: {
            reqName: req?.constructor?.name,
            resName: res?.constructor?.name,
            resReqName: res?.req?.constructor?.name,
        }, 
		name: "tag/:id",
		url: req.url,
		method: req.method,
		query: req.query,
		param: req.param,
		params: req.params,
		body: req.body
	})
}



function routes(web = null) {
        const list = [];
        const epss = [];
        function print(path, layer) {
            if (layer.route) {
                layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
            } else if (layer.name === 'router' && layer.handle.stack) {
                layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
            } else if (layer.method) {
                const endpoint = `${layer.method.toUpperCase()} ${path.concat(split(layer.regexp)).filter(Boolean).join('/')}`;
                if (epss.indexOf(endpoint) === -1) {
                    epss.push(endpoint);
                    list.push([layer.method.toUpperCase(), path.concat(split(layer.regexp)).filter(Boolean).join('/')]);
                }
            }
        }
        function split(thing) {
            if (typeof thing === 'string') {
                return thing.split('/')
            } else if (thing.fast_slash) {
                return ''
            } else {
                let match = thing.toString()
                    .replace('\\/?', '')
                    .replace('(?=\\/|$)', '$')
                    .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
                return match ?
                    match[1].replace(/\\(.)/g, '$1').split('/') :
                    '<complex:' + thing.toString() + '>'
            }
        }
        web?._router?.stack?.forEach(print.bind(null, []));
        return list;
    }