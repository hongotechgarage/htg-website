var search=instantsearch({appId:"WH144ECNIJ",apiKey:"8f39f2931f2bbd6215841c8aa2036406",indexName:"garage_library",urlSync:!0});search.addWidget(instantsearch.widgets.searchBox({container:"#q"})),search.addWidget(instantsearch.widgets.stats({container:"#stats"}));var hitTemplate='<div class="hit media"><div class="media-body"><h4 class="media-heading">{{{_highlightResult.Title.value}}}</h4><p>{{{_highlightResult.Author.value}}}</p></div></div>',noResultsTemplate='<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';search.addWidget(instantsearch.widgets.hits({container:"#hits",hitsPerPage:10,templates:{empty:noResultsTemplate,item:hitTemplate},transformData:function(t){t.stars=[];for(var a=1;a<=5;++a)t.stars.push(a<=t.rating);return t}})),search.addWidget(instantsearch.widgets.pagination({container:"#pagination",cssClasses:{root:"pagination",active:"active"}})),search.addWidget(instantsearch.widgets.refinementList({container:"#genres",attributeName:"genre",operator:"and",limit:10,cssClasses:{list:"nav nav-list",count:"badge pull-right",active:"active"}})),search.start();