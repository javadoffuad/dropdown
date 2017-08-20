# Dropdown

Dropdown is a simple plugin. Dropdown **does not use a select (html), draws its own**.
Must be used with jquery.

## Installation

**Via `<script>` tag**
```
<link rel="stylesheet" href="./jquery.dropdown.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="./scripts.js"></script>
<script src="./jquery.dropdown.js"></script>
```

## Documentation

You can start Dropdown manually:
```
<div id="my-simple-dropdown"></div>
```
For the frame of **dropdown** we use the **div**.

### Options
```
$(function(){
	var dropdown = $("#my-simple-dropdown");

	dropdown.select({
		menu: [
			{ID: 1, Label: "Label first", active: false},
			{ID: 2, Label: "Label second", active: true},
			{ID: 3, Label: "Label third", active: false}
               	]	
	});           

	dropdown.select(options);
});
```

Selectin icinde default text ashagidaki qaydada yerleshdirilir:
**firstOption** is a default option for dropdown
```
dropdown.select({
	**firstOption: 'Все карты',**
	menu: [
		{ID: 1, Label: "Label first", active: false},
		{ID: 2, Label: "Label second", active: false},
		{ID: 3, Label: "Label third", active: false}
	]	
});
```