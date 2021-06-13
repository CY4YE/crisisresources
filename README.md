# crisisresources

`regions/` includes the javascript files for each of the provinces
`posts/` includes all the files for every region

### TODO
- [ ] Finish Javascript implementation of dropdown box 
- [ ] Implement custom CSS


### Getting Started

All the HTML files in the `posts/` directory use [showdownjs](https://github.com/showdownjs/showdown) for content rendering. 

Example:

```html
<html class="bg-transparent">
<head>
  <!-- Head stuff --->
</head>

<body>
  ...
        <div id="markdown-content">
# Markham

This is essentially html, but written in markdown syntax

Pretty easy to use:

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

An unordered list:
- hello
- world
- list

An ordered list:
1. hello
2. world
3. list

A sample image

![A sample image from a url](https://picsum.photos/1000/500)
        </div>
     ...
</body>

<script>
  const convertMarkdown () => {
    ...
  }
</script>
</html>
```

It accepts regular GFM markdown syntax but also uses it's own variation. [ShowdownJS markdown docs](https://github.com/showdownjs/showdown/wiki/Showdown's-Markdown-syntax).