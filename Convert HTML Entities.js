// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// SHORTER REPLACE SOLUTION
function convertHTML(str) {
return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
}

// SWITCH STATEMENT SOLUTION
function convertHTML(str) {
 str = str.split('');
 for(var i = 0; i < str.length; i++){
	 switch(str[i]){
	    case '&':
	        str[i] = '&amp;';
	        break;
	    case '<':
	        str[i] = '&lt;';
	        break;
	    case '>':
	        str[i] = '&gt;';
	        break;
	    case '"':
	        str[i] = '&quot;';
	        break;
	    case "'":
	        str[i] = "&apos;";
	        break;
	}
}
  return str.join('');
}

convertHTML("Dolce & Gabbana");
// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Schindler's List") should return Schindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.