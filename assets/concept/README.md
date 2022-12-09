---
sort: 1
path: /concept
permalink: /concept
title: Tabulate Prime by π(1000)=168
---
{%- for item in site.html_pages -%}
	{%- if item.path == "concept/map.md" -%}
		{{ item.content }}
	{%- endif -%}
{%- endfor -%}
