# How to Use

If you don't have a  default GitHub Pages site at <your username>.github.io, you can clone the app there directly:

```bash
$ git clone <clone URL> <your username>.github.io
```

If you already have such a repository, you should clone the gallery app to the default directory:

```bash
$ git clone <clone URL>
```

This will create a local repository, which you can use as a reference for copying over the required files.

In either case, you should install the required rpm:

```bash
$ npm install awesome-palindrome
```

And if you want to change the palindrome code, remember to edit `js/palindrome_source.js` instead of `js/palindrome.js`. In such case you also need to install `browserify` . After finish editing, run:

```bash
$ browserify js/palindrome_source.js > js/palindrome.js
```

You can run the app using the Jekyll static site generator. First install Bundler and the `jekyll` gem:

```bash
$ gem install bundler -v 2.3.22
$ bundle _2.3.22_ install
```

Then serve the website using `bundle exec` to execute the `jekyll` program:

```bash
$ bundle exec jekyll serve
```

At that point, the app will be running on [localhost:4000](http://localhost:4000/). To deploy your app, push up the app to GitHub Pages with the name of <your username>.github.io .
