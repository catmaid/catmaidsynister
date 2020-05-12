# -*- coding: utf-8 -*-
import requests

from rest_framework.decorators import api_view
from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from catmaid.control.authentication import requires_user_role
from catmaid.models import Connector, UserRole


@api_view(['GET'])
def is_installed(request, project_id=None):
    """Check whether the extension catmaid-synister is installed."""
    return JsonResponse({'is_installed': True, 'msg': 'catmaid-synister is installed'})


def get_auth():
    if hasattr(settings, 'SYNISTER_HTTP_USER') and hasattr(settings,
            'SYNISTER_HTTP_PASS'):
        return (settings.SYNISTER_HTTP_PASS, settings.SYNISTER_HTTP_USER)
    return None


def get_timeout():
    return getattr(settings, 'SYNISTER_HTTP_TIMEOUT', 0.1)


@api_view(['POST'])
@requires_user_role(UserRole.Annotate)
def fetch_neurotransmitter(request, project_id, connector_id):
    """Try to retrieve neurotransmitter information from a remote service.
    """
    connector = get_object_or_404(Connector, pk=connector_id,
            project_id=project_id)

    response = requests.get(f'{settings.SYNISTER_URL}/fetch-neurotransmitter',
            auth=get_auth(), timeout=get_timeout(), params={
                'x': connector.location_x,
                'y': connector.location_y,
                'z': connector.location_z,
            })

    result = json.loads(response.text)

    # TODO: assign neurotransmitter to connector

    return JsonResponse({
        'connector_id': connector_id,
        'neurotransmitter_name': result.neurotransmitter_name,
    })
