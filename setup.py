#!/usr/bin/env python
import os
from setuptools import find_packages, setup

with open(os.path.join(os.path.dirname(__file__), 'README.md')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='catmaid-synister',
    version='0.0.1',
    packages=find_packages(exclude='travis'),
    include_package_data=True,
    license='GNU General Public License v3',
    description='A django app which acts as a drop-in extension for CATMAID.',
    long_description=README,
    url='https://github.com/tomka/catmaid-synister',
    author='Tom Kazimiers, Nils Eckstein',
    author_email='tom-catmaid@voodoo-arts.net',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Framework :: Django :: 1.11',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
)
