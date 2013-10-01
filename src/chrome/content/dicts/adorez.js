/*
 * Euskalbar - A Firefox extension for helping in Basque translations.
 * Copyright (C) 2013 Euskalbar Taldea (see AUTHORS file)
 *
 * This file is part of Euskalbar.
 *
 * Euskalbar is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

if (!euskalbar) var euskalbar = {};

if (!euskalbar.dicts) euskalbar.dicts = {};

euskalbar.dicts.adorez = function () {

  return {
    displayName: 'Adorez sin.',
    description: 'Adorez sinonimoen hiztegia',

    homepage: 'http://www.bostakbat.org/azkue/',

    method: 'GET',

    getUrl: function (term, source, target) {
      return 'http://www.bostakbat.org/azkue//index.php';
    },

    getParams: function (term, source, target) {
      var params = {
        't': term,
        'q': '1'
      };

      return params;
    },

    scrap: function (term, source, target, data) {
      // TODO: implementation
    },

  };

}();
