# github-calendar-element

Web components for github-calendar

This components dependes on and inspired by https://github.com/Bloggify/github-calendar
## Example

<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/github-calendar-element@1.0.0/lib/main.js" ></script>
    <style>
        github-calendar {
            width: 80vw;
            display: block;
            margin: 0 auto;
        }
    </style>
  </head>
  <body>
    hello github calendar!!

    <github-calendar user-name="shinyaigeek" tooltips="true" >Loading Fallback...</github-calendar>

  </body>
</html>

## Usage

✨ only load script from https://cdn.jsdelivr.net/npm/github-calendar-element@1.0.0/lib/main.js and write `<github-calendar>` to your html!

### Attributes

|attribute|value|
|:--:|:--:|
|userName|github user name|
|cache(optional)|The cache time at the client in seconds|
|tooltips(optional)|boolean whether you want show tooltips or not|
|summary(optional)|summary text|