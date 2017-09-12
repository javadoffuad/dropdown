# Dropdown

## Demo https://javadoffuad.github.io/dropdown/

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
			{ID: 1, Label: "Salary card", active: false},
			{ID: 2, Label: "Debit card Visa", active: true},
			{ID: 3, Label: "Debit card MasterCard", active: false}
               	]	
	});           

	dropdown.select(options);
});
```

**firstOption** is a default option for dropdown:
```
dropdown.select({
	firstOption: 'All cards',
	menu: [
		{ID: 1, Label: "Salary card", active: false},
		{ID: 2, Label: "Debit card Visa", active: false},
		{ID: 3, Label: "Debit card MasterCard", active: false}
	]	
});
```
