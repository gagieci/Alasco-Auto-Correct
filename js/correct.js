var textNode,
	walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false);
while ((textNode = walk.nextNode())) {
	var rExp = new RegExp(
		"Alassane Dramane Ouattara|" +
		"Alasane Dramane Ouatara|" +
		"Alassane Ouattara|" +
		"Dramane Ouatara|" +
		"Dramane Ouattara|" +
		"Alassane D. Ouattara|" +
		"M. Ouattara|" +
		"Ouattara\s",
		"gi"
	); // Keep the dot in case of "Mr" or "M." // Put this one after, so that the one above matches first

	textNode.nodeValue = textNode.nodeValue.replace(rExp, "Alasco");
}
