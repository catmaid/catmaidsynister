from __future__ import unicode_literals

from django.core.exceptions import ImproperlyConfigured
from django.conf import settings
from django.apps import AppConfig


class CatmaidsynisterConfig(AppConfig):
    name = 'catmaidsynister'
    verbose_name = 'CATMAID Synister'

    def ready(self) -> None:
        if not hasattr(settings, 'SYNISTER_URL'):
            raise ImproperlyConfigured('CATMAID Synister: SYNISTER_URL is not configured')
