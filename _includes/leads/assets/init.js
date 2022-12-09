/* This Tag is fired using Custom HTML on Google Tag Manager
 * For more information please visit https://tagmanager.google.com/
 * 
 * ================================================================
 * <div id='₠Quantum'>
 * <script>document.write("<scr"+"ipt async>
 * (function(s,y,n,t,a,x){a=y.createElement(n);x=y.getElementsByTagName(n)[0];
 * a.async=1;a.src=t;a.dataset.GrammarId='172913910143';a.dataset.QuantumPlatform='gtm';
 * x.parentNode.insertBefore(a,x)})(window,document,'script','//eq19.github.io/init.js');
 * </scr"+"ipt>");</script>
 * </div>
 * ================================================================
 * you may use Container Injector (Community) point to GTM-PGWT4RS.
 *
 * ₠Quantum Project https://www.eQ19.com
 * Copyright © 2022 All rights reserved.
 */
jQuery(function($)
{
	$(document).ready(function()
	{
		// https://stackoverflow.com/q/15674733/4058484
		$('#₠Quantum').empty();
		if (!$('#diagram').length) {
			{%- capture skema -%}
				{%- assign sections = site.feeds | where_exp:"item", "item.category == 'section'" -%}
				{%- for section in sections -%}
					{%- if section.output contains '<div id="diagram" class="diagram">' -%}
						{{- section.output -}}
					{%- endif -%}
				{%- endfor -%}
			{%- endcapture %}
			$('#₠Quantum').append('{{ skema | strip_newlines | split: " " | join: " " }}');
		};  
		{%- capture skema -%}{%- include extra/rest/script.liquid -%}{%- endcapture %}
		$('#₠Quantum').append('{{ skema | strip_newlines | split: " " | join: " " }}');
	});
});
