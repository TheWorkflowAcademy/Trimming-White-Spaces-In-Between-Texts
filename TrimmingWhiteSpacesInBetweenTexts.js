textsToTrim = list();
textsToTrim.add("My Little    Pony");
textsToTrim.add("My     favourite   eyeglasses");
textsToTrim.add("Michael  Jeffrey    Jordan");

for each item in textsToTrim{
	validText = "";
	for each text in item.toList(" "){
	if (text != ""){
		validText = validText + text + " ";
		}
	}
	//To trim final space in the text
	validText = validText.trim();
	info validText;
}