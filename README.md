# The OptiHeat Website

This is the github repo for the editable version of the wesbite. This website is built with MKDocs, because it is easy and free.

[Here](https://www.mkdocs.org/) is the link to the MKDocs documentation.

MKDocs is designed to provide an easy way of producing software documentation, so grafically is it pretty crudei (it can pretty much only do static content for example), but it does the job. MKDocs is generally used in combination with [Github Pages](https://docs.github.com/en/pages).

The way this site is set up is with two seperate github repos. The first repo contains a series of MarkDown files that describe the website, the second repo is created automatically by MKDocs and contains the HTML files that make up the Github Pages site.

The way works is:
1. you right the website in MarkDown (this is this repo).
2. Each page of the website is a different markdown file, these live in the `docs` folder.
3. There is a single file called `mkdocs.yml` that sits in the root folder, and this is the basic configuration file for the says which mark down files and which pages, and allows for a few other options. There are quite a lot of different options, more information can be found [here](https://www.mkdocs.org/user-guide/configuration/).
4. When happy with the content of the website, you then need to run mkdocs which reads this content, builds the necesary html, and pushes this up to the repo on which the site is being hosted. That must be done from the other repo [found here](https://github.com/uob-ukcric/uob-ukcric.github.io).
5. to be able to do this you will have to have installed MKDocs is a python library. On my machine I have created a python venv in the direction that stores both of the local website directories. I use `uv` for managing python venvs.
6. the two libraries you need are:
    "mkdocs-bootswatch>=1.1",
    "mkdocs-redirects>=1.2.3",
7. once this is installed, go into the `uob-ukcric.github.io` repo folder and run mkdocs, pointing it at the mkdocs.yml file in the other folder. The command to do this is:
`uv run mkdocs gh-deploy --config-file ../optiheat/mkdocs.yml --remote-branch master`
This should build the html, and push it remote server for presentation.

this is how the website is hosted at:[https://uob-ukcric.github.io/](https://uob-ukcric.github.io/)

The domain [https://www.optiheat.uk/](https://www.optiheat.uk/) is then registered via Mythic Beasts. For more inforation about this talk to Sam Gunner, although you shoudn't need to change that if you are updating the website via MKDocs.

Good luck!
