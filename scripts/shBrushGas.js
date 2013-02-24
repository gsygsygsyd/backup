/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.364 (October 15 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */

/*
 * Gnu Assembler SyntaxHighlighter
 * 
 * Writen by Daniel Hilst Selli <danielhilst@gmail.com>
 *
 * @license
 * This file is part of SyntaxHighlighter.
 */

/**
 * Add some keywords
 * by Ruchee
 * 2012-04-25
 */

SyntaxHighlighter.brushes.gas = function()
{
	var keywords = 'movl pushl call ' +
				   'int ';
	this.regexList = [
		{ regex: /".*"/g, css: 'string' },
		{ regex: /#.*/g, css: 'comments' },
		{ regex: /\/\*([^\*][\s\S]*)?\*\//gm, css: 'comments' },
		{ regex: /\d/g, css: 'constants' },
		{ regex: /\$[0-9a-zA-z\-.]*/g, css: 'constants' },
		{ regex: /\.\w*\s/g, css: 'color1' },
		{ regex: /\S*:\s/g, css: 'color3' },
		{ regex: /%\w{2,3}/g, css: 'variable' },
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword bold'}
	];
};
SyntaxHighlighter.brushes.gas.prototype    = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.gas.aliases  = ['Gas', 'gas'];
