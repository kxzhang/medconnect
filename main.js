var clickedAwayFromContentButton = function(location) {
	console.log(location);
	document.getElementById("modalLink").href = location;
	$("#confimationModal").modal('toggle');
}