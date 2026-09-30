---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
shortTitle: ""   # opcional: versión corta para la píldora «Latest» de la portada
date: {{ .Date }}
draft: true
author: "Alberto Anadón"
tags: []
image: ""        # /images/news/xxx.jpg: sale de cabecera y en las tarjetas; no la repitas dentro del texto
imageAlt: ""     # descripción de la imagen, para lectores de pantalla
description: ""  # una frase: va bajo el título y en la vista previa al compartir en redes
summary: ""      # una o dos frases: va en las tarjetas de noticias
---
