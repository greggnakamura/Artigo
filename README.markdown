<!-- -*- markdown -*- -->

# Artigo


## What is Artigo?
Artigo (Portuguese for Article) is a blog engine written in [Ruby](http://ruby-lang.org) running on the [Rails](http://rubyonrails.org) web platform.


## Installing Artigo

open a terminal (or command line) to the directory that contains Artigo. 

	$ rake artigo:setup

this will create some security values in the /config/initializers/ directory. It's okay, this is required for Artigo to
work correctly.

After this is done, you'll need to initialize your database. Do this by entering:

	$ rake db:reset
    
your database will now be created. You can test your Artigo site by entering

	$ ruby script\server

your blog will now be running at http://localhost:3000

To read more about setting up and configuring Artigo please read the [wiki](wiki)