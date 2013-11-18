# PokeIt

Very light campaign site to poke persons through a variety of channels (e-mails, twitter, sms, phone calls, etc). It uses Poplus apps: WriteIt and PopIt.

## What it is?

PokeIt is a simple [github page][githubpage] with [Jekyll][jekyll] that serves as a frontend/wrapper for two [Poplus components][poplus]:
- PopIt: Profiles web storage
- WriteIt: Messaging service for public persons.

## How it works?

PokeIt fetches profiles from a PopIt instance and shows the list of persons and adds a button that enable users to write a message to the selected persons and deliver them using WriteIt API.
So, in order to use PokeIt you must provide a URL of your PopIt instance containing the people you want to _poke_ and the URL of the WriteIt instance connected to that list.

## How to install?

In order to have your own PokeIt site you need to follow these simple steps:

1. Create a [github account][github_signup] (if you already have one can skip this step).
2. [Fork][fork] this repository into your account.
3. Create a [PopIt][popit] account.
4. Create a PopIt instance to store your list of persons.
5. Create a [WriteIt][writeit] account.
6. Create a WriteIt instance connected with your PopIt instance.
7. Now you're ready to enable your PokeIt by editing ```_config.yml``` file to include the PopIt URL, WriteIt URL and changing the name of your new site.

You can check the result in _http://yourgithubusername.github.io/yourproject_

## Advanced Settings
### Theming
You can pick one of the _several_ themes available online or you may create a new one.
### Custom Domain
If you want to use your own domain for your PokeIt site you must edit the DNS in your domain provider and point it to [github servers][custom_domain] and replace _yourdomain.com_ in ```CNAME``` file with your actual domain. Finally you must delete the hash (\#) before the url line in the ```_config.yml```file.



[poplus]: http://poplus.org
[githubpage]: http://pages.github.com
[jekyll]: http://jekyllrb.com
[github_signup]: https://github.com/join
[fork]: https://github.com/ciudadanointeligente/pokeit/fork
[popit]: http://popit.mysociety.org
[writeit]: http://writeit.ciudadanointeligente.org
[custom_domain]: https://help.github.com/articles/setting-up-a-custom-domain-with-pages