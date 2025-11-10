---
title: Bienvenue sur mon blog
layout: base.njk
---

# Les derniers articles

Bienvenue sur le blog de Koubi Seri Fils.

<ul>
  {%- for post in collections.post | reverse -%}
<li>
      <a href="{{ post.url }}">
        {{ post.data.title }}
      </a>
      <p><time datetime="{{ post.date }}">{{ post.date | dateFr }}</time></p>
    </li>
  {%- endfor -%}
</ul>
