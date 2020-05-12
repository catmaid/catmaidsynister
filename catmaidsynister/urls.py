# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url

import catmaidsynister.control

app_name = 'catmaidsynister'

urlpatterns = [
    url(r'^is-installed$', catmaidsynister.control.is_installed),
    url(r'^(?P<project_id>\d+)/connectors/(?P<connector_id>\d+)/fetch-neurotransmitter$',
        catmaidsynister.control.fetch_neurotransmitter),
]
