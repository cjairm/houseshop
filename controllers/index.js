exports.firstController = (page, model, params, next) => {
	const example = model.at("controllerswithdata.example");
	example.subscribe(function (err) {
		if (err) return next(err);
		example.createNull("Example variable");
		page.render();
	});
};
