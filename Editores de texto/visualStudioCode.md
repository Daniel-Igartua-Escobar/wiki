# Visual studio code

## Extensiones

lit-html
LitElement snippet
GitLens
Git History
Bracket Pair Colorizer 2
lit-plugin
Prettier-Code formatter

## Snippets

````
{
	"Add cells-debugger": {
	  "scope": "javascript, json",
	  "prefix": "cells: add_debugger",
	  "body": [
		"{",
		"\tzone: 'app__main',",
		"\ttype: 'UI',",
		"\ttag: 'cells-debugger',",
		"\tproperties: {",
		"\t\tisUIEnabled: ${1|true,false|},",
		"\t\tisActive: ${2|true,false|},",
		"\t\tauto: ${5|true,false|},",
		"\t\tignore: ['${3}'],",
		"\t\tcellsConnections: {",
		"\t\t\tin: {",
		"\t\t\t\t${4}_init_page: {",
		"\t\t\t\t\tbind: 'attach'",
		"\t\t\t\t},",
		"\t\t\t\t${4}_reset_page: {",
		"\t\t\t\t\tbind: 'dettach'",
		"\t\t\t\t}",
		"\t\t\t}",
		"\t\t}",
		"\t}",
		"},"
	  ]
	}
}
````


