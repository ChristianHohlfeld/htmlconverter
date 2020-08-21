# htmlconverter

Convert any html file to a jsx file. The tool converts all attributes to jsx syntax. No sanity checks (e.g. dangerouslySetInnerHTML).
# motivation

I used https://mertjf.github.io/tailblocks/ to create landing pages which spits out html only so I created a simple cli tool to convert any html attributes to jsx syntax using htmltojsx package provided by facebook.


# usage (shell/bash)
Following command will convert a html file "tail.html" to a file named "converted.jsx"
```
node index.js tail.html
```
