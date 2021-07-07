# Powerschool Grade Summarizer
Javascript bookmarklet for summarizing your grade in Powerschool. Allows you to add hypothetical assignments and see how they impact your grade. Source unknown.


# Installation

Make a new bookmark in your browser (right-click on the [bookmarks bar](https://support.google.com/chrome/answer/95745?hl=en) and click `Add Page...`)
  - For "Name", put any description of your choosing such as "Powerschool Grade Summarizer"
  - For "Location", paste the following code block below.
```
javascript:%20(function()%7B%20let%20mod%20=%20document.createElement(%22DIV%22);%20mod.innerHTML%20=%20%22%3Cdiv%20style='position:fixed;%20top:0;left:0;bottom:0;right:0;%20z-index:100;%20background-color:rgba(0,0,0,0.4);'%3E%3Cdiv%20style='background-color:white;%20border:%201px%20solid%20%23888;%20width:300px;%20padding:5px;%20margin:%2020px%20auto;'%3E%3Cspan%20onclick='this.close()'%20style='cursor:pointer;%20float:right'%3E%C3%97%3C/span%3E%3C/div%3E%3C/div%3E%22;%20document.body.appendChild(mod);%20mod.children%5B0%5D.children%5B0%5D.children%5B0%5D.close%20=%20function()%7Bdocument.body.removeChild(mod);%7D;%20let%20cont%20=%20document.createElement(%22DIV%22);%20mod.children%5B0%5D.children%5B0%5D.appendChild(cont);%20%20cont.innerHTML%20=%20%22%3Cp%3EDo%20you%20want%20to%20split%20by%20category?%3C/p%3E%3Cform%20style='display:inline-block'%3E%3Cinput%20type='submit'%20value='Yes'%3E%3C/form%3E%3Cform%20style='display:inline-block'%3E%3Cinput%20type='submit'%20value='No%20'%3E%3C/form%3E%22;%20%20cont.children%5B1%5D.onsubmit%20=%20function(e)%7B%20%20%20e.preventDefault();%20%20%20calculateSplitGrades();%20%20%20return%20false;%20%7D;%20cont.children%5B2%5D.onsubmit%20=%20function(e)%7B%20%20%20e.preventDefault();%20%20%20calculateNoSplit();%20%20%20return%20false;%20%7D;%20%20let%20myTableBody%20=%20document.getElementById(%22content-main%22).children%5B4%5D.children%5B5%5D.children%5B0%5D;%20%20function%20calculateSplitGrades()%7B%20%20%20%20%20let%20categories%20=%20%5B%5D;%20%20%20%20%20let%20points%20=%20%5B%5D;%20%20%20%20%20let%20total%20=%20%5B%5D;%20%20%20%20%20function%20getCat(cat)%7B%20%20%20%20%20%20%20%20%20for(let%20a=0;a%3Ccategories.length;a++)%20%20%20%20%20%20%20%20%20%20%20%20%20if(categories%5Ba%5D===cat)%20return%20a;%20%20%20%20%20%20%20%20%20return%20categories.push(cat)%20-%201;%20%20%20%20%20%7D%20%20%20%20%20function%20output()%7B%20%20%20%20%20%20%20%20%20let%20outp%20=%20%22%22;%20%20%20%20%20%20%20%20%20for(let%20a=0;a%3Ccategories.length;a++)%7B%20%20%20%20%20%20%20%20%20
```

# Usage

On any Powerschool grade page, click the bookmark created above. You will now see a modal showing your grade among categories, as well as options to add or subtract points to see how they affect your grade.
