[![Build Status](https://travis-ci.org/tomka/catmaid-synister.svg?branch=master)](https://travis-ci.org/tomka/catmaid-synister)
[![Coverage Status](https://coveralls.io/repos/github/tomka/catmaid-synister/badge.svg?branch=master)](https://coveralls.io/github/tomka/catmaid-synister?branch=master)

# catmaid-synister

CATMAID-Synister is a django application which acts as a drop-in
extension for [CATMAID](http://www.catmaid.org). It contains API
endpoints and static files.

## Quick start

1. Install catmaidsynister in whichever python environment is running
CATMAID with `pip install -e path/to/this/directory`

2. Run `python manage.py migrate` to create the catmaidsynister models.

3. Run `python manage.py collectstatic -l` to pick up
catmaidsynister's static files.
