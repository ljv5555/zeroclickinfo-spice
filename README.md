TODO:

Define our Handlebars Template
At this point, the rendering of the Spice Instant Answer changes context from JavaScript to Handlebars.js. As mentioned, our Spice.add() call specifies our template and the context for the template, so now Spice.add() executes the template function using data as the input. Let's look at the NPM Instant Answer's Handlebars template to see how it displays the Instant Answer result:

content.handlebars

<h5>
    {{name}} ({{version}})
</h5>
<div>{{description}}</div>
<pre>$ npm install {{name}}</pre>
As you can see, this is a special type of HTML template where all of api_result's properties (e.g., version, description) can be accessed by wrapping their respective names in double curly braces. This is possible, because we passed along the api_result object (containing all the JSON) to the data parameter, which becomes the context for our template.


####################





# DuckDuckHack Spice Instant Answers [![Build Status](https://travis-ci.org/duckduckgo/zeroclickinfo-spice.png?branch=bttf)](https://travis-ci.org/duckduckgo/zeroclickinfo-spice)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/duckduckgo/zeroclickinfo-spice?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This repository contains all the Spice instant answers. If you are developing a Spice instant answer you will need to fork this repository.

**If you would like to contribute to DuckDuckHack, please start by reading the [DuckDuckHack Documentation](https://duck.co/duckduckhack/ddh-intro).**

------

### Spice Instant Answer Example
![App Search Example](https://raw.githubusercontent.com/duckduckgo/duckduckgo-documentation/master/duckduckhack/assets/spice_readme_example.png)
