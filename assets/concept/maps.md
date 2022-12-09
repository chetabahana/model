---
images:
  - https://user-images.githubusercontent.com/68011645/89026666-ad3a8680-d35b-11ea-9f4b-d3fe26ae12ed.png
  - https://user-images.githubusercontent.com/68011645/88376699-87980500-cdd0-11ea-8900-7bab8c811bc9.png
---

# Mapping System
 
The Chronological Order:
{% gist 0ce5848f7ad62dc46dedfaa430069857 %}

## Rich Results Test

Google Rich Results [documents is here](https://developers.google.com/search/reference/overview), You can check the [Google Rich Results Test Tool](https://search.google.com/test/rich-results?url={{ page.url | absolute_url | xml_escape }}) or [Search this document](https://www.google.com/search?q={{ page.url | absolute_url | xml_escape }}) to see what it looks like (beta)

{% for image in page.images %}
### test image {{ forloop.index }}
![test image {{ forloop.index }}]({{ image }}){: .shadow-box }
{% endfor %}

## Jekyll - How to build a [REST API](https://gist.github.com/MichaelCurrin/f8d908596276bdbb2044f04c352cb7c7)
{% gist f8d908596276bdbb2044f04c352cb7c7 %}

## Jekyll Liquid Cheatsheet
{% gist a466eed62cee30ad45e2 %}

## Site Metadata
{% for item in site -%}
	{%- if site[item].first -%}
		{%- if site[item].first.first -%}
			{%- include tabs.liquid %}- {{ item }}: hash
		{%- else -%}
			{%- include tabs.liquid %}- {{ item }}: array
		{%- endif -%}
	{%- else -%}
		{%- include tabs.liquid %}- {{ item }}: {{ site[item] }}
	{%- endif -%}
{%- endfor %}

## Github Metadata
{% assign github = site.github -%}
{%- for item in github -%}
	{%- if github[item].first -%}
		{%- if github[item].first.first -%}
			{%- include tabs.liquid %}- {{ item }}: hash
		{%- else -%}
			{%- include tabs.liquid %}- {{ item }}: array
		{%- endif -%}
	{%- else -%}
		{%- include tabs.liquid %}- {{ item }}: {{ github[item] }}
	{%- endif -%}
{%- endfor %}

## Source Metadata
{% assign source = github.source -%}
{%- for item in source -%}
	{%- if source[item].first -%}
		{%- if source[item].first.first -%}
			{%- include tabs.liquid %}- {{ item }}: hash
		{%- else -%}
			{%- include tabs.liquid %}- {{ item }}: array
		{%- endif -%}
	{%- else -%}
		{%- include tabs.liquid %}- {{ item }}: {{ source[item] }}
	{%- endif -%}
{%- endfor %}


## Recommendations AI

- [Google Cloud products](https://cloud.google.com/products/#ai-and-machine-learning)
- [React Google Tag Manager Module](https://www.eq19.com/gtm/)
- [How to Add JavaScript to GTM](https://www.optizent.com/blog/how-to-add-javascript-to-google-tag-manager/)
- [Remote Trigger in GitHub Actions](https://www.provartesting.com/documentation/devops/continuous-integration/github-actions/remote-trigger-in-github-actions/)
- [Recommendations AI data ingestion](https://cloud.google.com/blog/topics/developers-practitioners/recommendations-ai-data-ingestion)
- [Submit a template to the Community Template Gallery](https://developers.google.com/tag-platform/tag-manager/templates/gallery)
- [Create models, Retail Search, and the new Retail console](https://cloud.google.com/retail/docs/create-models)
- [How to get better retail recommendations with Recommendations AI](https://cloud.google.com/blog/topics/developers-practitioners/how-get-better-retail-recommendations-recommendations-ai)
- [User data ingestion process from Google Tag Manager for Recommendation AI](https://stackoverflow.com/questions/65775858/user-data-ingestion-process-from-google-tag-manager-for-recommendation-ai-google)
