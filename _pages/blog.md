---
permalink: /blog/
title: "blog"
author_profile: false
layout: archive
---

My blog page litty

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
