# PokeIt

Very light campaign site to push persons through a variety of channels (e-mails, twitter, sms, phone calls, etc). It uses Poplus apps: WriteIt and PopIt.

## What it is?

PokeIt is a simple [github page][githubpage] with [Jekyll][jekyll] that serves as a frontend/wrapper for two [Poplus components][poplus]:
- PopIt: Profiles web storage
- WriteIt: Messaging service for public persons.

## How it works?

PokeIt fetches profiles from a PopIt instance and shows the list of persons and adds a button that enable users to write a message to the selected persons and deliver them using WriteIt API.
So, in order to use PokeIt you must provide a URL of your PopIt instance containing the people you want to _poke_ and the URL of the WriteIt instance connected to that list.


[poplus]: http://poplus.org
[githubpage]: http://pages.github.com/
[jekyll]: http://jekyllrb.com