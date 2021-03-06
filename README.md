# rtCamp Slideshow Assignment
[![Build Status](https://travis-ci.org/kirtangajjar/rtcamp-plugin-assignment-1.svg?branch=master)](https://travis-ci.org/kirtangajjar/rtcamp-plugin-assignment-1)

This is my submission for rtCamp Plugin Assignment(2-a)

## Demo

You can find the link to demo [here](http://rtcamp-plugin-assignment.000webhostapp.com/) 

## Libraries Used

* [Lightslider](https://github.com/sachinchoolur/lightslider)
* [WPBB Boilerplate](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate)
* [Bedrock](https://github.com/roots/bedrock)(not included in this repo)

## Features/Highlight

* **Upload Images** - Use the familiar WordPress Media Manager interface to add/remove images to your slider.
* **Shortcode** - Embed the slider anywhere with `[rt-slideshow]` shortcode.
* **Live Preview** - See changes happen to your slider in real time as you add/remove/order images.
* **Organized Code** - The code was written with `wpbb` boilerplate. As a result, it is highly organized and structured.
* **Coding Standards** - The code was checked with PHPCS `Wordpress-Extra` and `Wordpress-Docs` ruleset and follows Wordpress Coding Standards as much as possible.
* **Unit Test** - The code was also unit tested.
* **Dependencies** - All the dependencies are managed through npm and stored in `node_moules` directory(which is ofcourse gitignored).

## Installation

Install the dependencies and clone the directory into your plugins folder with below command to get started.

```
git clone https://github.com/kirtangajjar/rtcamp-plugin-assignment-1 /path-to-plugins-folder/rt-slider
cd /path-to-plugins-folder/rt-slider
npm install
```

## License

All the contents of this repository are licensed under the GPL v2 or later.

> This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License, version 2, as published by the Free Software Foundation.

> This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

> You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA

A copy of the license is included in the root of the plugin???s directory. The file is named `LICENSE`.

## Important Notes

### Licensing

All the contents of this repository are licensed under the GPL v2 or later; however, if you opt to use third-party code that is not compatible with v2, then you may need to switch to using code that is GPL v3 compatible.

For reference, [here's a discussion](http://make.wordpress.org/themes/2013/03/04/licensing-note-apache-and-gpl/) that covers the Apache 2.0 License used by [Bootstrap](http://twitter.github.io/bootstrap/).