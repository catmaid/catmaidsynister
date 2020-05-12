# -*- coding: utf-8 -*-
from catmaid.tests.apis.common import CatmaidApiTestCase


class CatmaidsynisterTestCase(CatmaidApiTestCase):
    fixtures = CatmaidApiTestCase.fixtures + ['catmaidsynister_testdata.json']

    @classmethod
    def setUpTestData(cls):
        super(CatmaidsynisterTestCase, cls).setUpTestData()
