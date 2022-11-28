To get started, first for the repository using the **Fork** button on the upper-right of the screen.

The next step depends on whether or not you currently have a default GitHub Pages site at <your username>.github.io.

If you don't have such a repository, you can clone the app there directly:

```bash
$ git clone <clone URL> <your username>.github.io
```

Then create a new repository of that name at GitHub and push up.

If you already have such a repository, you should clone the gallery app to the default directory:

```bash
$ git clone <clone URL>
```

This will create a local repository, which you can use as a reference for copying over the required files.

In either case, you can run the app using the Jekyll static site generator. First install Bundler and the `jekyll` gem:

```bash
$ gem install bundler -v 2.3.22
$ bundle _2.3.22_ install
```

Then serve the website using `bundle exec` to execute the `jekyll` program:

```bash
$ bundle exec jekyll serve
```

At that point, the app will be running on [localhost:4000](http://localhost:4000/). To deploy your app, push up the app to GitHub Pages.
