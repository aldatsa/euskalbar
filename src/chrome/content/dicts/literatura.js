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

euskalbar.dicts.literatura = function () {

  return {
    displayName: 'Literatura',
    description: 'Literatura Terminoen Hiztegia',

    homePage: 'http://www.euskaltzaindia.eus/index.php?option=com_xslt&lang=eu&layout=lth_list&search=1&view=frontpage%20&Itemid=414',

    method: 'GET',

    getUrl: function (opts) {
      return 'http://www.euskaltzaindia.eus/index.php';
    },

    getParams: function (opts) {
      return {
        'option': 'com_xslt',
        'lang': 'eu',
        'layout': 'lth_detail',
        'view': 'frontpage',
        'Itemid': '474',
        'search': opts.term,
      };
    },

  };

}();
