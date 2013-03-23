// For newLisp
SyntaxHighlighter.brushes.Lisp = function(){
    var funcs     = 'NaN? abort abs acos acosh add address amb and append append-file apply args array array-list ' +
      'array? asin asinh assoc atan atan2 atanh atom? base64-dec base64-enc ' +
      'bayes-query bayes-train begin beta betai bind binomial bits callback ' +
      'case catch ceil change-dir char chop clean close command-event cond cons ' +
      'constant context context? continue copy copy-file corr cos cosh count cpymem ' +
      'crc32 crit-chi2 crit-f crit-t crit-z current-line curry date date-list date-parse ' +
      'date-value debug dec def-new default define define-macro delete ' +
      'delete-file delete-url destroy det device difference directory ' +
      'directory? div do-until do-while doargs dolist dostring dotimes dotree ' +
      'dump dump-symbol dup empty? encrypt ends-with env erf error-event eval ' +
      'eval-string even? exec exists exit exp expand explode extend factor fft ' +
      'file-info file? filter find find-all first flat float float? floor flt ' +
      'for for-all fork format fv gammai gammaln gcd get-char get-float get-int ' +
      'get-long get-string get-url global global? if if-not ifft import inc ' +
      'index inf? int integer integer? intersect invert irr join lambda? last ' +
      'last-error legal? length let letex letn list list? load local log lookup ' +
      'lower-case macro? main-args make-dir map mat match max member min mod ' +
      'mul multiply net-accept net-close net-connect net-error net-eval ' +
      'net-interface net-ipv net-listen net-local net-lookup net-packet ' +
      'net-peek net-peer net-ping net-receive net-receive-from net-receive-udp ' +
      'net-select net-send net-send-to net-send-udp net-service net-sessions ' +
      'new nil? normal not now nper npv nth null? number? odd? open or pack parse ' +
      'parse-date peek pipe pmt pop pop-assoc post-url pow prefix pretty-print ' +
      'primitive? print println prob-chi2 prob-f prob-t prob-z process prompt-event ' +
      'protected? push put-url pv quote quote? rand random randomize read ' +
      'read-buffer read-char read-expr read-file read-key read-line read-utf8 ' +
      'reader-event real-path receive ref ref-all regex regex-comp remove-dir ' +
      'rename-file replace reset rest reverse rotate round save search seed ' +
      'seek select self semaphore send sequence series set set-locale set-ref ' +
      'set-ref-all setf setq sgn share signal silent sin sinh sleep slice sort ' +
      'source spawn sqrt starts-with stats string string? struct sub swap sym symbol? ' +
      'symbols sync sys-error sys-info t-test tan tanh term throw throw-error time ' +
      'time-of-day timer title-case trace trace-highlight transpose trim true? ' +
      'unicode unify union unique unless unpack until upper-case utf8 utf8len uuid ' +
      'wait-pid when while write write-buffer write-char write-file write-line ' +
      'xfer-event xml-error xml-parse xml-type-tags zero? ';
    var keywords  = 'ostype $0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $args $idx $it $main-args' +
      'fn lambda Class Tree module replace-assoc set-assoc assoc-set set-nth nth-set ref-set' +
      'name error-number error-text integer parse-date if-not local dump-symbol continue';
    var macros    = 'loop when dolist dotimes defun';
    var operators = '! != $ % & * + ++ - -- / < << <= = > >= >> ^ \| ~';
    this.regexList = [
     { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
     { regex: new RegExp('&\\w+;', 'g'), css: 'plain' },
     { regex: new RegExp(';.*', 'g'), css: 'comments' },
     { regex: new RegExp("'(\\w|-)+", 'g'), css: 'variable' },
     { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
     { regex: new RegExp(this.getKeywords(macros), 'gm'), css: 'keyword' },
     { regex: new RegExp(this.getKeywords(funcs), 'gm'), css: 'functions' },
    ];
}

SyntaxHighlighter.brushes.Lisp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Lisp.aliases   = ['newlisp', 'newLisp'];
