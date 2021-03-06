// This file tests against the examples included in the official specification
// file (https://github.github.com/gfm)
//
// GFM Spec version: 0.28-gfm

// Packages
import test from 'ava'

// Ours
import gfmc from '../src/gfmc'

// ====================================================================
// >  Tabs
// ====================================================================

test('Tabs (https://github.github.com/gfm/#example-1)', t => {
  const actual = gfmc('\tfoo\tbaz\t\tbim')
  t.is('<pre><code>foo\tbaz\t\tbim\n</code></pre>', actual)
})

test('Tabs (https://github.github.com/gfm/#example-2)', t => {
  const actual = gfmc('  \tfoo\tbaz\t\tbim')
  t.is('<pre><code>foo	baz\t\tbim\n</code></pre>', actual)
})

test('Tabs (https://github.github.com/gfm/#example-3)', t => {
  const actual = gfmc('    a\ta\n    ὐ\ta')
  t.is('<pre><code>a\ta\nὐ\ta\n</code></pre>', actual)
})

test('Tabs (https://github.github.com/gfm/#example-4)', t => {
  const actual = gfmc('  - foo\n\n\tbar')
  t.is('<ul><li><p>foo</p><p>bar</p></li></ul>', actual)
})

test('Tabs (https://github.github.com/gfm/#example-5)', t => {
  const actual = gfmc('- foo\n\n\t\tbar')
  t.is('<ul><li><p>foo</p><pre><code>  bar\n</code></pre></li></ul>', actual)
})

test('Tabs (https://github.github.com/gfm/#example-6)', t => {
  const actual = gfmc('>\t\tfoo')
  t.is('<blockquote><pre><code>  foo\n</code></pre></blockquote>', actual)
})

test('Tabs (https://github.github.com/gfm/#example-7)', t => {
  const actual = gfmc('-\t\tfoo')
  t.is('<ul><li><pre><code>  foo\n</code></pre></li></ul>', actual)
})

test('Tabs (https://github.github.com/gfm/#example-8)', t => {
  const actual = gfmc('    foo\n\tbar')
  t.is('<pre><code>foo\nbar\n</code></pre>', actual)
})

test('Tabs (https://github.github.com/gfm/#example-9)', t => {
  const actual = gfmc(' - foo\n   - bar\n\t - baz')
  t.is(
    '<ul><li>foo<ul><li>bar\n<ul><li>baz</li></ul></li></ul></li></ul>',
    actual
  )
})

test('Tabs (https://github.github.com/gfm/#example-10)', t => {
  const actual = gfmc('#\tFoo')
  t.is('<h1>Foo</h1>', actual)
})

test('Tabs (https://github.github.com/gfm/#example-11)', t => {
  const actual = gfmc('*\t*\t*\t')
  t.is('<hr>', actual)
})

// ====================================================================
// >  Precedence
// ====================================================================

test('Precedence (https://github.github.com/gfm/#example-12)', t => {
  const actual = gfmc('- `one\n- two`')
  t.is('<ul><li>`one</li><li>two`</li></ul>', actual)
})

// ====================================================================
// >  Thematic Breaks
// ====================================================================
test('Thematic breaks (https://github.github.com/gfm/#example-13)', t => {
  const actual = gfmc('***\n---\n___')
  t.is('<hr><hr><hr>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-14)', t => {
  const actual = gfmc('+++')
  t.is('<p>+++</p>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-15)', t => {
  const actual = gfmc('===')
  t.is('<p>===</p>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-16)', t => {
  const actual = gfmc('--\n**\n__')
  t.is('<p>--\n**\n__</p>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-17)', t => {
  const actual = gfmc(' ***\n  ***\n   ***')
  t.is('<hr><hr><hr>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-18)', t => {
  const actual = gfmc('    ***')
  t.is('<pre><code>***\n</code></pre>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-19)', t => {
  const actual = gfmc('Foo\n    ***')
  t.is('<p>Foo\n***</p>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-20)', t => {
  const actual = gfmc('_____________________________________')
  t.is('<hr>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-21)', t => {
  const actual = gfmc(' - - -')
  t.is('<hr>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-22)', t => {
  const actual = gfmc(' **  * ** * ** * **')
  t.is('<hr>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-23)', t => {
  const actual = gfmc('-     -      -      -')
  t.is('<hr>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-24)', t => {
  const actual = gfmc('- - - -    ')
  t.is('<hr>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-25)', t => {
  const actual = gfmc('_ _ _ _ a\n\na------\n\n---a---')
  t.is('<p>_ _ _ _ a</p><p>a------</p><p>---a---</p>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-26)', t => {
  const actual = gfmc(' *-*')
  t.is('<p><em>-</em></p>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-27)', t => {
  const actual = gfmc('- foo\n***\n- bar')
  t.is('<ul>\n<li>foo</li>\n</ul>\n<hr>\n<ul>\n<li>bar</li>\n</ul>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-28)', t => {
  const actual = gfmc('Foo\n***\nbar')
  t.is('<p>Foo</p><hr><p>bar</p>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-29)', t => {
  const actual = gfmc('Foo\n---\nbar')
  t.is('<h2>Foo</h2><p>bar</p>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-30)', t => {
  const actual = gfmc('* Foo\n* * *\n* Bar')
  t.is('<ul>\n<li>Foo</li>\n</ul>\n<hr>\n<ul>\n<li>Bar</li>\n</ul>', actual)
})

test('Thematic breaks (https://github.github.com/gfm/#example-31)', t => {
  const actual = gfmc('- Foo\n- * * *')
  t.is('<ul>\n<li>Foo</li>\n<li>\n<hr>\n</li>\n</ul>', actual)
})

// ====================================================================
// >  ATX Headings
// ====================================================================

test('ATX headings (https://github.github.com/gfm/#example-32)', t => {
  const actual = gfmc('# foo\n## foo\n### foo\n#### foo\n##### foo\n###### foo')

  t.is(
    '<h1>foo</h1><h2>foo</h2><h3>foo</h3><h4>foo</h4><h5>foo</h5><h6>foo</h6>',
    actual
  )
})

test('ATX headings (https://github.github.com/gfm/#example-33)', t => {
  const actual = gfmc('####### foo')
  t.is('<p>####### foo</p>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-34)', t => {
  const actual = gfmc('#5 bolt\n\n#hashtag')
  t.is('<p>#5 bolt</p><p>#hashtag</p>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-35)', t => {
  const actual = gfmc('\\## foo')
  t.is('<p>## foo</p>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-36)', t => {
  const actual = gfmc('# foo *bar* \\*baz\\*')
  t.is('<h1>foo <em>bar</em> *baz*</h1>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-37)', t => {
  const actual = gfmc('#                  foo                     ')
  t.is('<h1>foo</h1>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-38)', t => {
  const actual = gfmc(' ### foo\n  ## foo\n   # foo')
  t.is('<h3>foo</h3><h2>foo</h2><h1>foo</h1>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-39)', t => {
  const actual = gfmc('    # foo')
  t.is('<pre><code># foo\n</code></pre>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-40)', t => {
  const actual = gfmc('foo\n    # bar')
  t.is('<p>foo\n# bar</p>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-41)', t => {
  const actual = gfmc('## foo ##\n  ###   bar    ###')
  t.is('<h2>foo</h2><h3>bar</h3>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-42)', t => {
  const actual = gfmc('# foo ##################################\n##### foo ##')
  t.is('<h1>foo</h1><h5>foo</h5>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-43)', t => {
  const actual = gfmc('### foo ###     ')
  t.is('<h3>foo</h3>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-44)', t => {
  const actual = gfmc('### foo ### b')
  t.is('<h3>foo ### b</h3>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-45)', t => {
  const actual = gfmc('# foo#')
  t.is('<h1>foo#</h1>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-46)', t => {
  const actual = gfmc('### foo \\###\n## foo #\\##\n# foo \\#')
  t.is('<h3>foo ###</h3><h2>foo ###</h2><h1>foo #</h1>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-47)', t => {
  const actual = gfmc('****\n## foo\n****')
  t.is('<hr><h2>foo</h2><hr>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-48)', t => {
  const actual = gfmc('Foo bar\n# baz\nBar foo')
  t.is('<p>Foo bar</p><h1>baz</h1><p>Bar foo</p>', actual)
})

test('ATX headings (https://github.github.com/gfm/#example-49)', t => {
  const actual = gfmc('## \n#\n### ###')
  t.is('<h2></h2><h1></h1><h3></h3>', actual)
})

// ====================================================================
// >  Setext Headings
// ====================================================================

test('Setext headings (https://github.github.com/gfm/#example-50)', t => {
  const actual = gfmc('Foo *bar*\n=========\n\nFoo *bar*\n---------')
  t.is('<h1>Foo <em>bar</em></h1><h2>Foo <em>bar</em></h2>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-51)', t => {
  const actual = gfmc('Foo *bar\nbaz*\n====')
  t.is('<h1>Foo <em>bar\nbaz</em></h1>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-52)', t => {
  const actual = gfmc('Foo\n-------------------------\n\nFoo\n=')
  t.is('<h2>Foo</h2><h1>Foo</h1>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-53)', t => {
  const actual = gfmc('   Foo\n---\n\n  Foo\n-----\n\n  Foo\n  ===')
  t.is('<h2>Foo</h2><h2>Foo</h2><h1>Foo</h1>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-54)', t => {
  const actual = gfmc('    Foo\n    ---\n\n    Foo\n---')
  t.is('<pre><code>Foo\n---\n\nFoo\n</code></pre<hr>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-55)', t => {
  const actual = gfmc('Foo\n   ----      ')
  t.is('<h2>Foo</h2>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-56)', t => {
  const actual = gfmc('Foo\n    ---')
  t.is('<p>Foo\n---</p>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-57)', t => {
  const actual = gfmc('Foo\n= =\n\nFoo\n--- -')
  t.is('<p>Foo\n= =</p>\n<p>Foo</p>\n<hr>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-58)', t => {
  const actual = gfmc('Foo  \n-----')
  t.is('<h2>Foo</h2>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-59)', t => {
  const actual = gfmc('Foo\n----')
  t.is('<h2>Foo</h2>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-60)', t => {
  const actual = gfmc('`Foo\n----\n`\n\n<a title="a lot\n---\nof dashes"/>')
  t.is(
    '<h2>`Foo</h2><p>`</p><h2>&lt;a title=&quot;a lot</h2><p>of dashes&quot;/&gt;</p>',
    actual
  )
})

test('Setext headings (https://github.github.com/gfm/#example-61)', t => {
  const actual = gfmc('> Foo\n---')
  t.is('<blockquote><p>Foo</p></blockquote><hr>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-62)', t => {
  const actual = gfmc('> foo\nbar\n===')
  t.is('<blockquote><p>foo\nbar\n===</p></blockquote>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-63)', t => {
  const actual = gfmc('- Foo\n---')
  t.is('<ul><li>Foo</li></ul><hr>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-64)', t => {
  const actual = gfmc('Foo\nBar\n---')
  t.is('<h2>Foo\nBar</h2>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-65)', t => {
  const actual = gfmc('---\nFoo\n---\nBar\n---\nBaz')
  t.is('<hr><h2>Foo</h2><h2>Bar</h2><p>Baz</p>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-66)', t => {
  const actual = gfmc('\n====')
  t.is('<p>====</p>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-67)', t => {
  const actual = gfmc('---\n---')
  t.is('<hr><hr>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-68)', t => {
  const actual = gfmc('- foo\n-----')
  t.is('<ul><li>foo</li></ul><hr>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-69)', t => {
  const actual = gfmc('    foo\n---')
  t.is('<pre><code>foo\n</code></pre><hr>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-70)', t => {
  const actual = gfmc('> foo\n-----')
  t.is('<blockquote><p>foo</p></blockquote><hr>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-71)', t => {
  const actual = gfmc('\\> foo\n------')
  t.is('<h2>&gt; foo</h2>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-72)', t => {
  const actual = gfmc('Foo\n\nbar\n---\nbaz')
  t.is('<p>Foo</p><h2>bar</h2><p>baz</p>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-73)', t => {
  const actual = gfmc('Foo\nbar\n\n---\n\nbaz')
  t.is('<p>Foo\nbar</p><hr><p>baz</p>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-74)', t => {
  const actual = gfmc('Foo\nbar\n* * *\nbaz')
  t.is('<p>Foo\nbar</p><hr><p>baz</p>', actual)
})

test('Setext headings (https://github.github.com/gfm/#example-75)', t => {
  const actual = gfmc('Foo\nbar\n\\---\nbaz')
  t.is('<p>Foo\nbar\n---\nbaz</p>', actual)
})

// ====================================================================
// >  Indented code blocks
// ====================================================================

test('Indented code blocks (https://github.github.com/gfm/#example-76)', t => {
  const actual = gfmc('    a simple\n      indented code block')
  t.is('<pre><code>a simple\n  indented code block\n</code></pre>', actual)
})

test('Indented code blocks (https://github.github.com/gfm/#example-77)', t => {
  const actual = gfmc('  - foo\n\n    bar')
  t.is('<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>', actual)
})

test('Indented code blocks (https://github.github.com/gfm/#example-78)', t => {
  const actual = gfmc('1.  foo\n\n    - bar')
  t.is(
    '<ol>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>',
    actual
  )
})

test('Indented code blocks (https://github.github.com/gfm/#example-79)', t => {
  const actual = gfmc('    <a/>\n    *hi*\n\n    - one')
  t.is('<pre><code>&lt;a/&gt;\n*hi*\n\n- one\n</code></pre>', actual)
})

test('Indented code blocks (https://github.github.com/gfm/#example-80)', t => {
  const actual = gfmc('    chunk1\n\n    chunk2\n  \n \n \n    chunk3')
  t.is('<pre><code>chunk1\n\nchunk2\n\n\n\nchunk3\n</code></pre>', actual)
})

test('Indented code blocks (https://github.github.com/gfm/#example-81)', t => {
  const actual = gfmc('    chunk1\n      \n      chunk2')
  t.is('<pre><code>chunk1\n  \n  chunk2\n</code></pre>', actual)
})

test('Indented code blocks (https://github.github.com/gfm/#example-82)', t => {
  const actual = gfmc('Foo\n    bar\n')
  t.is('<p>Foo\nbar</p>', actual)
})

test('Indented code blocks (https://github.github.com/gfm/#example-83)', t => {
  const actual = gfmc('    foo\nbar')
  t.is('<pre><code>foo\n</code></pre><p>bar</p>', actual)
})

test('Indented code blocks (https://github.github.com/gfm/#example-84)', t => {
  const actual = gfmc('# Heading\n    foo\nHeading\n------\n    foo\n----')
  t.is(
    '<h1>Heading</h1><pre><code>foo\n</code></pre><h2>Heading</h2><pre><code>foo\n</code></pre><hr>',
    actual
  )
})

test('Indented code blocks (https://github.github.com/gfm/#example-85)', t => {
  const actual = gfmc('        foo\n    bar')
  t.is('<pre><code>    foo\nbar\n</code></pre>', actual)
})

test('Indented code blocks (https://github.github.com/gfm/#example-86)', t => {
  const actual = gfmc('\n    \n    foo\n    \n')
  t.is('<pre><code>foo\n</code></pre>', actual)
})

test('Indented code blocks (https://github.github.com/gfm/#example-87)', t => {
  const actual = gfmc('    foo  ')
  t.is('<pre><code>foo  \n</code></pre>', actual)
})

// test('Fenced code blocks (https://github.github.com/gfm/#example-88)', t => {
//   const actual = gfmc('```\n<\n >\n```')
//   t.is('<pre><code>&lt;\n &gt;\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-89)', t => {
//   const actual = gfmc('~~~\n<\n >\n~~~')
//   t.is('<pre><code>&lt;\n &gt;\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-90)', t => {
//   const actual = gfmc('``\nfoo\n``')
//   t.is('<p><code>foo</code></p>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-91)', t => {
//   const actual = gfmc('```\naaa\n~~~\n```')
//   t.is('<pre><code>aaa\n~~~\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-92)', t => {
//   const actual = gfmc('~~~\naaa\n```\n~~~')
//   t.is('<pre><code>aaa\n```\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-93)', t => {
//   const actual = gfmc('````\naaa\n```\n``````')
//   t.is('<pre><code>aaa\n```\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-94)', t => {
//   const actual = gfmc('~~~~\naaa\n~~~\n~~~~')
//   t.is('<pre><code>aaa\n~~~\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-95)', t => {
//   const actual = gfmc('```')
//   t.is('<pre><code></code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-96)', t => {
//   const actual = gfmc('`````\n\n```\naaa')
//   t.is('<pre><code>\n```\naaa\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-97)', t => {
//   const actual = gfmc('> ```\n> aaa\n\nbbb')
//   t.is(
//     '<blockquote>\n<pre><code>aaa\n</code></pre>\n</blockquote>\n<p>bbb</p>',
//     actual
//   )
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-98)', t => {
//   const actual = gfmc('```\n\n  \n```')
//   t.is('<pre><code>\n  \n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-99)', t => {
//   const actual = gfmc('```\n```')
//   t.is('<pre><code></code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-100)', t => {
//   const actual = gfmc(' ```\n aaa\naaa\n```')
//   t.is('<pre><code>aaa\naaa\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-101)', t => {
//   const actual = gfmc('  ```\naaa\n  aaa\naaa\n  ```')
//   t.is('<pre><code>aaa\naaa\naaa\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-102)', t => {
//   const actual = gfmc('   ```\n   aaa\n    aaa\n  aaa\n   ```')
//   t.is('<pre><code>aaa\n aaa\naaa\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-103)', t => {
//   const actual = gfmc('    ```\n    aaa\n    ```')
//   t.is('<pre><code>```\naaa\n```\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-104)', t => {
//   const actual = gfmc('```\naaa\n  ```')
//   t.is('<pre><code>aaa\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-105)', t => {
//   const actual = gfmc('   ```\naaa\n  ```')
//   t.is('<pre><code>aaa\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-106)', t => {
//   const actual = gfmc('```\naaa\n    ```')
//   t.is('<pre><code>aaa\n    ```\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-107)', t => {
//   const actual = gfmc('``` ```\naaa')
//   t.is('<p><code></code>\naaa</p>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-108)', t => {
//   const actual = gfmc('~~~~~~\naaa\n~~~ ~~')
//   t.is('<pre><code>aaa\n~~~ ~~\n</code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-109)', t => {
//   const actual = gfmc('foo\n```\nbar\n```\nbaz')
//   t.is('<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-110)', t => {
//   const actual = gfmc('foo\n---\n~~~\nbar\n~~~\n# baz')
//   t.is('<h2>foo</h2>\n<pre><code>bar\n</code></pre>\n<h1>baz</h1>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-111)', t => {
//   const actual = gfmc('```ruby\ndef foo(x)\n  return 3\nend\n```')
//   t.is(
//     '<pre><code class="language-ruby">def foo(x)\n  return 3\nend\n</code></pre>',
//     actual
//   )
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-112)', t => {
//   const actual =
//     gfmc(
//       '~~~~    ruby startline=3 $%@#$\ndef foo(x)\n  return 3\nend\n~~~~~~~'
//     )
//   )
//   t.is(
//     '<pre><code class="language-ruby">def foo(x)\n  return 3\nend\n</code></pre>',
//     actual
//   )
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-113)', t => {
//   const actual = gfmc('````;\n````')
//   t.is('<pre><code class="language-;"></code></pre>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-114)', t => {
//   const actual = gfmc('``` aa ```\nfoo')
//   t.is('<p><code>aa</code>\nfoo</p>', actual)
// })

// test('Fenced code blocks (https://github.github.com/gfm/#example-115)', t => {
//   const actual = gfmc('```\n``` aaa\n```')
//   t.is('<pre><code>``` aaa\n</code></pre>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-116)', t => {
//   const actual =
//     gfmc(
//       '<table><tr><td>\n<pre>\n**Hello**,\n\n_world_.\n</pre>\n</td></tr></table>'
//     )
//   )
//   t.is(
//     '<table><tr><td>\n<pre>\n**Hello**,\n<p><em>world</em>.\n</p></pre><p></p>\n</td></tr></table>',
//     actual
//   )
// })

// test('HTML blocks (https://github.github.com/gfm/#example-117)', t => {
//   const actual =
//     gfmc(
//       '<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n\nokay.'
//     )
//   )
//   t.is(
//     '<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n<p>okay.</p>',
//     actual
//   )
// })

// test('HTML blocks (https://github.github.com/gfm/#example-118)', t => {
//   const actual = gfmc(' <div>\n  *hello*\n         <foo><a>')
//   t.is(' <div>\n  *hello*\n         <foo><a></a></foo></div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-119)', t => {
//   const actual = gfmc('</div>\n*foo*')
//   t.is('\n*foo*', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-120)', t => {
//   const actual = gfmc('<DIV CLASS="foo">\n\n*Markdown*\n\n</DIV>')
//   t.is('<div class="foo">\n<p><em>Markdown</em></p>\n</div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-121)', t => {
//   const actual = gfmc('<div id="foo"\n  class="bar">\n</div>')
//   t.is('<div id="foo" \n class="bar">\n</div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-122)', t => {
//   const actual = gfmc('<div id="foo" class="bar\n  baz">\n</div>')
//   t.is('<div id="foo" class="bar\n baz">\n</div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-123)', t => {
//   const actual = gfmc('<div>\n*foo*\n\n*bar*')
//   t.is('<div>\n*foo*\n<p><em>bar</em></p></div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-124)', t => {
//   const actual = gfmc('<div id="foo"\n*hi*')
//   t.is('<div id="foo"\n*hi*', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-125)', t => {
//   const actual = gfmc('<div class\nfoo')
//   t.is('<div class\nfoo', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-126)', t => {
//   const actual = gfmc('<div *???-&&&-<---\n*foo*')
//   t.is('<div *???-&&&-<---\n*foo*', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-127)', t => {
//   const actual = gfmc('<div><a href="bar">*foo*</a></div>')
//   t.is('<div><a href="bar">*foo*</a></div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-128)', t => {
//   const actual = gfmc('<table><tr><td>\nfoo\n</td></tr></table>')
//   t.is('<table><tr><td>\nfoo\n</td></tr></table>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-129)', t => {
//   const actual = gfmc('<div></div>\n``` c\nint x = 33;\n```')
//   t.is('<div></div>\n``` c\nint x = 33;\n```', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-130)', t => {
//   const actual = gfmc('<a href="foo">\n*bar*\n</a>')
//   t.is('<a href="foo">\n*bar*\n</a>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-131)', t => {
//   const actual = gfmc('<Warning>\n*bar*\n</Warning>')
//   t.is('<warning>\n*bar*\n</warning>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-132)', t => {
//   const actual = gfmc('<i class="foo">\n*bar*\n</i>')
//   t.is('<i class="foo">\n*bar*\n</i>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-133)', t => {
//   const actual = gfmc('</ins>\n*bar*')
//   t.is('\n*bar*', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-134)', t => {
//   const actual = gfmc('<del>\n*foo*\n</del>')
//   t.is('<del>\n*foo*\n</del>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-135)', t => {
//   const actual = gfmc('<del>\n\n*foo*\n\n</del>')
//   t.is('<del>\n<p><em>foo</em></p>\n</del>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-136)', t => {
//   const actual = gfmc('<del>*foo*</del>')
//   t.is('<p><del><em>foo</em></del></p>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-137)', t => {
//   const actual =
//     gfmc(
//       '<pre language="haskell"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay'
//     )
//   )
//   t.is(
//     '<pre language="haskell"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n<p>okay</p>',
//     actual
//   )
// })

// test('HTML blocks (https://github.github.com/gfm/#example-138)', t => {
//   const actual =
//     gfmc(
//       '<script type="text/javascript">\n// JavaScript example\n\ndocument.getElementById("demo").innerHTML = "Hello JavaScript!";\n</script>\nokay'
//     )
//   )
//   t.is(
//     '<script type="text/javascript">\n// JavaScript example\n\ndocument.getElementById("demo").innerHTML = "Hello JavaScript!";\n</script>\n<p>okay</p>',
//     actual
//   )
// })

// test('HTML blocks (https://github.github.com/gfm/#example-139)', t => {
//   const actual =
//     gfmc(
//       '<style\n  type="text/css">\nh1 {color:red;}\n\np {color:blue;}\n</style>\nokay'
//     )
//   )
//   t.is(
//     '<style \n type="text/css">\nh1 {color:red;}\n\np {color:blue;}\n</style>\n<p>okay</p>',
//     actual
//   )
// })

// test('HTML blocks (https://github.github.com/gfm/#example-140)', t => {
//   const actual = gfmc('<style\n  type="text/css">\n\nfoo')
//   t.is('<style\n  type="text/css">\n\nfoo', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-141)', t => {
//   const actual = gfmc('> <div>\n> foo\n\nbar')
//   t.is('<blockquote>\n<div>\nfoo\n</div></blockquote>\n<p>bar</p>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-142)', t => {
//   const actual = gfmc('- <div>\n- foo')
//   t.is('<ul>\n<li>\n<div>\n</div></li>\n<li>foo</li>\n</ul>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-143)', t => {
//   const actual = gfmc('<style>p{color:red;}</style>\n*foo*')
//   t.is('<style>p{color:red;}</style>\n<p><em>foo</em></p>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-144)', t => {
//   const actual = gfmc('<!-- foo -->*bar*\n*baz*')
//   t.is('<!-- foo -->*bar*\n<p><em>baz</em></p>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-145)', t => {
//   const actual = gfmc('<script>\nfoo\n</script>1. *bar*')
//   t.is('<script>\nfoo\n</script>1. *bar*', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-146)', t => {
//   const actual = gfmc('<!-- Foo\n\nbar\n   baz -->\nokay')
//   t.is('<!-- Foo\n\nbar\n   baz -->\n<p>okay</p>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-147)', t => {
//   const actual = gfmc("<?php\n\n  echo '>';\n\n?>\nokay"))
//   t.is("<?php\n\n  echo '>';\n\n?>\n<p>okay</p>", actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-148)', t => {
//   const actual = gfmc('<!DOCTYPE html>')
//   t.is('<!DOCTYPE html>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-149)', t => {
//   const actual =
//     gfmc(
//       '<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\nokay'
//     )
//   )
//   t.is(
//     '<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\n<p>okay</p>',
//     actual
//   )
// })

// test('HTML blocks (https://github.github.com/gfm/#example-150)', t => {
//   const actual = gfmc('  <!-- foo -->\n\n    <!-- foo -->')
//   t.is('  <!-- foo -->\n<pre><code>&lt;!-- foo --&gt;\n</code></pre>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-151)', t => {
//   const actual = gfmc('  <div>\n\n    <div>')
//   t.is('  <div>\n<pre><code>&lt;div&gt;\n</code></pre></div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-152)', t => {
//   const actual = gfmc('Foo\n<div>\nbar\n</div>')
//   t.is('<p>Foo</p>\n<div>\nbar\n</div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-153)', t => {
//   const actual = gfmc('<div>\nbar\n</div>\n*foo*')
//   t.is('<div>\nbar\n</div>\n*foo*', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-154)', t => {
//   const actual = gfmc('Foo\n<a href="bar">\nbaz')
//   t.is('<p>Foo\n<a href="bar">\nbaz</a></p>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-155)', t => {
//   const actual = gfmc('<div>\n\n*Emphasized* text.\n\n</div>')
//   t.is('<div>\n<p><em>Emphasized</em> text.</p>\n</div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-156)', t => {
//   const actual = gfmc('<div>\n*Emphasized* text.\n</div>')
//   t.is('<div>\n*Emphasized* text.\n</div>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-157)', t => {
//   const actual =
//     gfmc('<table>\n\n<tr>\n\n<td>\nHi\n</td>\n\n</tr>\n\n</table>')
//   )
//   t.is('<table>\n<tr>\n<td>\nHi\n</td>\n</tr>\n</table>', actual)
// })

// test('HTML blocks (https://github.github.com/gfm/#example-158)', t => {
//   const actual =
//     gfmc(
//       '<table>\n\n  <tr>\n\n    <td>\n      Hi\n    </td>\n\n  </tr>\n\n</table>'
//     )
//   )
//   t.is(
//     '<table>\n  <tr>\n<pre><code>&lt;td&gt;\n  Hi\n&lt;/td&gt;\n</code></pre>\n  </tr>\n</table>',
//     actual
//   )
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-159)', t => {
//   const actual = gfmc('[foo]: /url "title"\n\n[foo]')
//   t.is('<p><a href="/url" title="title">foo</a></p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-160)', t => {
//   const actual =
//     gfmc("   [foo]: \n      /url  \n           'the title'  \n\n[foo]")
//   )
//   t.is('<p><a href="/url" title="the title">foo</a></p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-161)', t => {
//   const actual =
//     gfmc("[Foo*bar\\]]:my_(url) 'title (with parens)'\n\n[Foo*bar\\]]")
//   )
//   t.is(
//     '<p><a href="my_(url)" title="title (with parens)">Foo*bar]</a></p>',
//     actual
//   )
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-162)', t => {
//   const actual =
//     gfmc("[Foo bar]:\n<my%20url>\n'title'\n\n[Foo bar]")
//   )
//   t.is('<p><a href="my%20url" title="title">Foo bar</a></p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-163)', t => {
//   const actual =
//     gfmc("[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]")
//   )
//   t.is('<p><a href="/url" title="\ntitle\nline1\nline2\n">foo</a></p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-164)', t => {
//   const actual =
//     gfmc("[foo]: /url 'title\n\nwith blank line'\n\n[foo]")
//   )
//   t.is(
//     "<p>[foo]: /url 'title</p>\n<p>with blank line'</p>\n<p>[foo]</p>",
//     actual
//   )
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-165)', t => {
//   const actual = gfmc('[foo]:\n/url\n\n[foo]')
//   t.is('<p><a href="/url">foo</a></p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-166)', t => {
//   const actual = gfmc('[foo]:\n\n[foo]')
//   t.is('<p>[foo]:</p>\n<p>[foo]</p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-167)', t => {
//   const actual =
//     gfmc('[foo]: /url\bar\\*baz "foo"bar\baz"\n\n[foo]')
//   )
//   t.is(
//     '<p><a href="/url%5Cbar*baz" title="foo&quot;bar\baz">foo</a></p>',
//     actual
//   )
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-168)', t => {
//   const actual = gfmc('[foo]\n\n[foo]: url')
//   t.is('<p><a href="url">foo</a></p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-169)', t => {
//   const actual = gfmc('[foo]\n\n[foo]: first\n[foo]: second')
//   t.is('<p><a href="first">foo</a></p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-170)', t => {
//   const actual = gfmc('[FOO]: /url\n\n[Foo]')
//   t.is('<p><a href="/url">Foo</a></p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-171)', t => {
//   const actual = gfmc('[ΑΓΩ]: /φου\n\n[αγω]')
//   t.is('<p><a href="/%CF%86%CE%BF%CF%85">αγω</a></p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-172)', t => {
//   const actual = gfmc('[foo]: /url')
//   t.is('', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-173)', t => {
//   const actual = gfmc('[\nfoo\n]: /url\nbar')
//   t.is('<p>bar</p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-174)', t => {
//   const actual = gfmc('[foo]: /url "title" ok')
//   t.is('<p>[foo]: /url &quot;title&quot; ok</p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-175)', t => {
//   const actual = gfmc('[foo]: /url\n"title" ok')
//   t.is('<p>&quot;title&quot; ok</p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-176)', t => {
//   const actual = gfmc('    [foo]: /url "title"\n\n[foo]')
//   t.is(
//     '<pre><code>[foo]: /url &quot;title&quot;\n</code></pre>\n<p>[foo]</p>',
//     actual
//   )
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-177)', t => {
//   const actual = gfmc('```\n[foo]: /url\n```\n\n[foo]')
//   t.is('<pre><code>[foo]: /url\n</code></pre>\n<p>[foo]</p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-178)', t => {
//   const actual = gfmc('Foo\n[bar]: /baz\n\n[bar]')
//   t.is('<p>Foo\n[bar]: /baz</p>\n<p>[bar]</p>', actual)
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-179)', t => {
//   const actual = gfmc('# [Foo]\n[foo]: /url\n> bar')
//   t.is(
//     '<h1><a href="/url">Foo</a></h1>\n<blockquote>\n<p>bar</p>\n</blockquote>',
//     actual
//   )
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-180)', t => {
//   const actual =
//     gfmc(
//       '[foo]: /foo-url "foo"\n[bar]: /bar-url\n  "bar"\n[baz]: /baz-url\n\n[foo],\n[bar],\n[baz]'
//     )
//   )
//   t.is(
//     '<p><a href="/foo-url" title="foo">foo</a>,\n<a href="/bar-url" title="bar">bar</a>,\n<a href="/baz-url">baz</a></p>',
//     actual
//   )
// })

// test('Link reference definitions (https://github.github.com/gfm/#example-181)', t => {
//   const actual = gfmc('[foo]\n\n> [foo]: /url')
//   t.is('<p><a href="/url">foo</a></p>\n<blockquote>\n</blockquote>', actual)
// })

// test('Paragraphs (https://github.github.com/gfm/#example-182)', t => {
//   const actual = gfmc('aaa\n\nbbb')
//   t.is('<p>aaa</p>\n<p>bbb</p>', actual)
// })

// test('Paragraphs (https://github.github.com/gfm/#example-183)', t => {
//   const actual = gfmc('aaa\nbbb\n\nccc\nddd')
//   t.is('<p>aaa\nbbb</p>\n<p>ccc\nddd</p>', actual)
// })

// test('Paragraphs (https://github.github.com/gfm/#example-184)', t => {
//   const actual = gfmc('aaa\n\n\nbbb')
//   t.is('<p>aaa</p>\n<p>bbb</p>', actual)
// })

// test('Paragraphs (https://github.github.com/gfm/#example-185)', t => {
//   const actual = gfmc('  aaa\n bbb')
//   t.is('<p>aaa\nbbb</p>', actual)
// })

// test('Paragraphs (https://github.github.com/gfm/#example-186)', t => {
//   const actual =
//     gfmc('aaa\n             bbb\n                                       ccc')
//   )
//   t.is('<p>aaa\nbbb\nccc</p>', actual)
// })

// test('Paragraphs (https://github.github.com/gfm/#example-187)', t => {
//   const actual = gfmc('   aaa\nbbb')
//   t.is('<p>aaa\nbbb</p>', actual)
// })

// test('Paragraphs (https://github.github.com/gfm/#example-188)', t => {
//   const actual = gfmc('    aaa\nbbb')
//   t.is('<pre><code>aaa\n</code></pre>\n<p>bbb</p>', actual)
// })

// test('Paragraphs (https://github.github.com/gfm/#example-189)', t => {
//   const actual = gfmc('aaa     \nbbb     ')
//   t.is('<p>aaa<br>\nbbb</p>', actual)
// })

// test('Blank lines (https://github.github.com/gfm/#example-190)', t => {
//   const actual = gfmc('  \n\naaa\n  \n\n# aaa\n\n  ')
//   t.is('<p>aaa</p>\n<h1>aaa</h1>', actual)
// })

// test('Tables (extension) (https://github.github.com/gfm/#example-191)', t => {
//   const actual =
//     gfmc('| foo | bar |\n| --- | --- |\n| baz | bim |')
//   )
//   t.is(
//     '<table>\n<thead>\n<tr>\n<th>foo</th>\n<th>bar</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>baz</td>\n<td>bim</td>\n</tr></tbody></table>',
//     actual
//   )
// })

// test('Tables (extension) (https://github.github.com/gfm/#example-192)', t => {
//   const actual =
//     gfmc('| abc | defghi |\n:-: | -----------:\nbar | baz')
//   )
//   t.is(
//     '<table>\n<thead>\n<tr>\n<th align="center">abc</th>\n<th align="right">defghi</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">bar</td>\n<td align="right">baz</td>\n</tr></tbody></table>',
//     actual
//   )
// })

// test('Tables (extension) (https://github.github.com/gfm/#example-193)', t => {
//   const actual =
//     gfmc('| f\\|oo  |\n| ------ |\n| b `\\|` az |\n| b **\\|** im |')
//   )
//   t.is(
//     '<table>\n<thead>\n<tr>\n<th>f|oo</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>b <code>|</code> az</td>\n</tr>\n<tr>\n<td>b <strong>|</strong> im</td>\n</tr></tbody></table>',
//     actual
//   )
// })

// test('Tables (extension) (https://github.github.com/gfm/#example-194)', t => {
//   const actual =
//     gfmc('| abc | def |\n| --- | --- |\n| bar | baz |\n> bar')
//   )
//   t.is(
//     '<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bar</td>\n<td>baz</td>\n</tr></tbody></table>\n<blockquote>\n<p>bar</p>\n</blockquote>',
//     actual
//   )
// })

// test('Tables (extension) (https://github.github.com/gfm/#example-195)', t => {
//   const actual =
//     gfmc('| abc | def |\n| --- | --- |\n| bar | baz |\nbar\n\nbar')
//   )
//   t.is(
//     '<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bar</td>\n<td>baz</td>\n</tr>\n<tr>\n<td>bar</td>\n<td></td>\n</tr></tbody></table>\n<p>bar</p>',
//     actual
//   )
// })

// test('Tables (extension) (https://github.github.com/gfm/#example-196)', t => {
//   const actual = gfmc('| abc | def |\n| --- |\n| bar |')
//   t.is('<p>| abc | def |\n| --- |\n| bar |</p>', actual)
// })

// test('Tables (extension) (https://github.github.com/gfm/#example-197)', t => {
//   const actual =
//     gfmc('| abc | def |\n| --- | --- |\n| bar |\n| bar | baz | boo |')
//   )
//   t.is(
//     '<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bar</td>\n<td></td>\n</tr>\n<tr>\n<td>bar</td>\n<td>baz</td>\n</tr></tbody></table>',
//     actual
//   )
// })

// test('Tables (extension) (https://github.github.com/gfm/#example-198)', t => {
//   const actual = gfmc('| abc | def |\n| --- | --- |')
//   t.is(
//     '<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead></table>',
//     actual
//   )
// })

// test('Block quotes (https://github.github.com/gfm/#example-199)', t => {
//   const actual = gfmc('> # Foo\n> bar\n> baz')
//   t.is('<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-200)', t => {
//   const actual = gfmc('># Foo\n>bar\n> baz')
//   t.is('<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-201)', t => {
//   const actual = gfmc('   > # Foo\n   > bar\n > baz')
//   t.is('<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-202)', t => {
//   const actual = gfmc('    > # Foo\n    > bar\n    > baz')
//   t.is('<pre><code>&gt; # Foo\n&gt; bar\n&gt; baz\n</code></pre>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-203)', t => {
//   const actual = gfmc('> # Foo\n> bar\nbaz')
//   t.is('<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-204)', t => {
//   const actual = gfmc('> bar\nbaz\n> foo')
//   t.is('<blockquote>\n<p>bar\nbaz\nfoo</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-205)', t => {
//   const actual = gfmc('> foo\n---')
//   t.is('<blockquote>\n<p>foo</p>\n</blockquote>\n<hr>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-206)', t => {
//   const actual = gfmc('> - foo\n- bar')
//   t.is(
//     '<blockquote>\n<ul>\n<li>foo</li>\n</ul>\n</blockquote>\n<ul>\n<li>bar</li>\n</ul>',
//     actual
//   )
// })

// test('Block quotes (https://github.github.com/gfm/#example-207)', t => {
//   const actual = gfmc('>     foo\n    bar')
//   t.is(
//     '<blockquote>\n<pre><code>foo\n</code></pre>\n</blockquote>\n<pre><code>bar\n</code></pre>',
//     actual
//   )
// })

// test('Block quotes (https://github.github.com/gfm/#example-208)', t => {
//   const actual = gfmc('> ```\nfoo\n```')
//   t.is(
//     '<blockquote>\n<pre><code></code></pre>\n</blockquote>\n<p>foo</p>\n<pre><code></code></pre>',
//     actual
//   )
// })

// test('Block quotes (https://github.github.com/gfm/#example-209)', t => {
//   const actual = gfmc('> foo\n    - bar')
//   t.is('<blockquote>\n<p>foo\n- bar</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-210)', t => {
//   const actual = gfmc('>')
//   t.is('<blockquote>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-211)', t => {
//   const actual = gfmc('>\n>  \n> ')
//   t.is('<blockquote>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-212)', t => {
//   const actual = gfmc('>\n> foo\n>  ')
//   t.is('<blockquote>\n<p>foo</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-213)', t => {
//   const actual = gfmc('> foo\n\n> bar')
//   t.is(
//     '<blockquote>\n<p>foo</p>\n</blockquote>\n<blockquote>\n<p>bar</p>\n</blockquote>',
//     actual
//   )
// })

// test('Block quotes (https://github.github.com/gfm/#example-214)', t => {
//   const actual = gfmc('> foo\n> bar')
//   t.is('<blockquote>\n<p>foo\nbar</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-215)', t => {
//   const actual = gfmc('> foo\n>\n> bar')
//   t.is('<blockquote>\n<p>foo</p>\n<p>bar</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-216)', t => {
//   const actual = gfmc('foo\n> bar')
//   t.is('<p>foo</p>\n<blockquote>\n<p>bar</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-217)', t => {
//   const actual = gfmc('> aaa\n***\n> bbb')
//   t.is(
//     '<blockquote>\n<p>aaa</p>\n</blockquote>\n<hr>\n<blockquote>\n<p>bbb</p>\n</blockquote>',
//     actual
//   )
// })

// test('Block quotes (https://github.github.com/gfm/#example-218)', t => {
//   const actual = gfmc('> bar\nbaz')
//   t.is('<blockquote>\n<p>bar\nbaz</p>\n</blockquote>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-219)', t => {
//   const actual = gfmc('> bar\n\nbaz')
//   t.is('<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-220)', t => {
//   const actual = gfmc('> bar\n>\nbaz')
//   t.is('<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>', actual)
// })

// test('Block quotes (https://github.github.com/gfm/#example-221)', t => {
//   const actual = gfmc('> > > foo\nbar')
//   t.is(
//     '<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n</blockquote>\n</blockquote>',
//     actual
//   )
// })

// test('Block quotes (https://github.github.com/gfm/#example-222)', t => {
//   const actual = gfmc('>>> foo\n> bar\n>>baz')
//   t.is(
//     '<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar\nbaz</p>\n</blockquote>\n</blockquote>\n</blockquote>',
//     actual
//   )
// })

// test('Block quotes (https://github.github.com/gfm/#example-223)', t => {
//   const actual = gfmc('>     code\n\n>    not code')
//   t.is(
//     '<blockquote>\n<pre><code>code\n</code></pre>\n</blockquote>\n<blockquote>\n<p>not code</p>\n</blockquote>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-224)', t => {
//   const actual =
//     gfmc(
//       'A paragraph\nwith two lines.\n\n    indented code\n\n> A block quote.'
//     )
//   )
//   t.is(
//     '<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-225)', t => {
//   const actual =
//     gfmc(
//       '1.  A paragraph\n    with two lines.\n\n        indented code\n\n    > A block quote.'
//     )
//   )
//   t.is(
//     '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-226)', t => {
//   const actual = gfmc('- one\n\n two')
//   t.is('<ul>\n<li>one</li>\n</ul>\n<p>two</p>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-227)', t => {
//   const actual = gfmc('- one\n\n  two')
//   t.is('<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-228)', t => {
//   const actual = gfmc(' -    one\n\n     two')
//   t.is('<ul>\n<li>one</li>\n</ul>\n<pre><code> two\n</code></pre>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-229)', t => {
//   const actual = gfmc(' -    one\n\n      two')
//   t.is('<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-230)', t => {
//   const actual = gfmc('   > > 1.  one\n>>\n>>     two')
//   t.is(
//     '<blockquote>\n<blockquote>\n<ol>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ol>\n</blockquote>\n</blockquote>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-231)', t => {
//   const actual = gfmc('>>- one\n>>\n  >  > two')
//   t.is(
//     '<blockquote>\n<blockquote>\n<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n</blockquote>\n</blockquote>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-232)', t => {
//   const actual = gfmc('-one\n\n2.two')
//   t.is('<p>-one</p>\n<p>2.two</p>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-233)', t => {
//   const actual = gfmc('- foo\n\n\n  bar')
//   t.is('<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-234)', t => {
//   const actual =
//     gfmc('1.  foo\n\n    ```\n    bar\n    ```\n\n    baz\n\n    > bam')
//   )
//   t.is(
//     '<ol>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n<blockquote>\n<p>bam</p>\n</blockquote>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-235)', t => {
//   const actual = gfmc('- Foo\n\n      bar\n\n\n      baz')
//   t.is(
//     '<ul>\n<li>\n<p>Foo</p>\n<pre><code>bar\n\n\nbaz\n</code></pre>\n</li>\n</ul>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-236)', t => {
//   const actual = gfmc('123456789. ok')
//   t.is('<ol start="123456789">\n<li>ok</li>\n</ol>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-237)', t => {
//   const actual = gfmc('1234567890. not ok')
//   t.is('<p>1234567890. not ok</p>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-238)', t => {
//   const actual = gfmc('0. ok')
//   t.is('<ol start="0">\n<li>ok</li>\n</ol>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-239)', t => {
//   const actual = gfmc('003. ok')
//   t.is('<ol start="3">\n<li>ok</li>\n</ol>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-240)', t => {
//   const actual = gfmc('-1. not ok')
//   t.is('<p>-1. not ok</p>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-241)', t => {
//   const actual = gfmc('- foo\n\n      bar')
//   t.is(
//     '<ul>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ul>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-242)', t => {
//   const actual = gfmc('  10.  foo\n\n           bar')
//   t.is(
//     '<ol start="10">\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-243)', t => {
//   const actual =
//     gfmc('    indented code\n\nparagraph\n\n    more code')
//   )
//   t.is(
//     '<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-244)', t => {
//   const actual =
//     gfmc('1.     indented code\n\n   paragraph\n\n       more code')
//   )
//   t.is(
//     '<ol>\n<li>\n<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-245)', t => {
//   const actual =
//     gfmc('1.      indented code\n\n   paragraph\n\n       more code')
//   )
//   t.is(
//     '<ol>\n<li>\n<pre><code> indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-246)', t => {
//   const actual = gfmc('   foo\n\nbar')
//   t.is('<p>foo</p>\n<p>bar</p>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-247)', t => {
//   const actual = gfmc('-    foo\n\n  bar')
//   t.is('<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-248)', t => {
//   const actual = gfmc('-  foo\n\n   bar')
//   t.is('<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-249)', t => {
//   const actual =
//     gfmc('-\n  foo\n-\n  ```\n  bar\n  ```\n-\n      baz')
//   )
//   t.is(
//     '<ul>\n<li>foo</li>\n<li>\n<pre><code>bar\n</code></pre>\n</li>\n<li>\n<pre><code>baz\n</code></pre>\n</li>\n</ul>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-250)', t => {
//   const actual = gfmc('-   \n  foo')
//   t.is('<ul>\n<li>foo</li>\n</ul>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-251)', t => {
//   const actual = gfmc('-\n\n  foo')
//   t.is('<ul>\n<li></li>\n</ul>\n<p>foo</p>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-252)', t => {
//   const actual = gfmc('- foo\n-\n- bar')
//   t.is('<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-253)', t => {
//   const actual = gfmc('- foo\n-   \n- bar')
//   t.is('<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-254)', t => {
//   const actual = gfmc('1. foo\n2.\n3. bar')
//   t.is('<ol>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ol>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-255)', t => {
//   const actual = gfmc('*')
//   t.is('<ul>\n<li></li>\n</ul>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-256)', t => {
//   const actual = gfmc('foo\n*\n\nfoo\n1.')
//   t.is('<p>foo\n*</p>\n<p>foo\n1.</p>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-257)', t => {
//   const actual =
//     gfmc(
//       ' 1.  A paragraph\n     with two lines.\n\n         indented code\n\n     > A block quote.'
//     )
//   )
//   t.is(
//     '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-258)', t => {
//   const actual =
//     gfmc(
//       '  1.  A paragraph\n      with two lines.\n\n          indented code\n\n      > A block quote.'
//     )
//   )
//   t.is(
//     '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-259)', t => {
//   const actual =
//     gfmc(
//       '   1.  A paragraph\n       with two lines.\n\n           indented code\n\n       > A block quote.'
//     )
//   )
//   t.is(
//     '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-260)', t => {
//   const actual =
//     gfmc(
//       '    1.  A paragraph\n        with two lines.\n\n            indented code\n\n        > A block quote.'
//     )
//   )
//   t.is(
//     '<pre><code>1.  A paragraph\n    with two lines.\n\n        indented code\n\n    &gt; A block quote.\n</code></pre>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-261)', t => {
//   const actual =
//     gfmc(
//       '  1.  A paragraph\nwith two lines.\n\n          indented code\n\n      > A block quote.'
//     )
//   )
//   t.is(
//     '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-262)', t => {
//   const actual = gfmc('  1.  A paragraph\n    with two lines.')
//   t.is('<ol>\n<li>A paragraph\nwith two lines.</li>\n</ol>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-263)', t => {
//   const actual = gfmc('> 1. > Blockquote\ncontinued here.')
//   t.is(
//     '<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-264)', t => {
//   const actual = gfmc('> 1. > Blockquote\n> continued here.')
//   t.is(
//     '<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-265)', t => {
//   const actual = gfmc('- foo\n  - bar\n    - baz\n      - boo')
//   t.is(
//     '<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz\n<ul>\n<li>boo</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-266)', t => {
//   const actual = gfmc('- foo\n - bar\n  - baz\n   - boo')
//   t.is(
//     '<ul>\n<li>foo</li>\n<li>bar</li>\n<li>baz</li>\n<li>boo</li>\n</ul>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-267)', t => {
//   const actual = gfmc('10) foo\n    - bar')
//   t.is(
//     '<ol start="10">\n<li>foo\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-268)', t => {
//   const actual = gfmc('10) foo\n   - bar')
//   t.is(
//     '<ol start="10">\n<li>foo</li>\n</ol>\n<ul>\n<li>bar</li>\n</ul>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-269)', t => {
//   const actual = gfmc('- - foo')
//   t.is('<ul>\n<li>\n<ul>\n<li>foo</li>\n</ul>\n</li>\n</ul>', actual)
// })

// test('List items (https://github.github.com/gfm/#example-270)', t => {
//   const actual = gfmc('1. - 2. foo')
//   t.is(
//     '<ol>\n<li>\n<ul>\n<li>\n<ol start="2">\n<li>foo</li>\n</ol>\n</li>\n</ul>\n</li>\n</ol>',
//     actual
//   )
// })

// test('List items (https://github.github.com/gfm/#example-271)', t => {
//   const actual = gfmc('- # Foo\n- Bar\n  ---\n  baz')
//   t.is(
//     '<ul>\n<li>\n<h1>Foo</h1>\n</li>\n<li>\n<h2>Bar</h2>\nbaz</li>\n</ul>',
//     actual
//   )
// })

// test('Task list items (extension) (https://github.github.com/gfm/#example-272)', t => {
//   const actual = gfmc('- [ ] foo\n- [x] bar')
//   t.is(
//     '<ul>\n<li><input disabled="" type="checkbox"> foo</li>\n<li><input checked="" disabled="" type="checkbox"> bar</li>\n</ul>',
//     actual
//   )
// })

// test('Task list items (extension) (https://github.github.com/gfm/#example-273)', t => {
//   const actual =
//     gfmc('- [x] foo\n  - [ ] bar\n  - [x] baz\n- [ ] bim')
//   )
//   t.is(
//     '<ul>\n<li><input checked="" disabled="" type="checkbox"> foo\n<ul>\n<li><input disabled="" type="checkbox"> bar</li>\n<li><input checked="" disabled="" type="checkbox"> baz</li>\n</ul>\n</li>\n<li><input disabled="" type="checkbox"> bim</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-274)', t => {
//   const actual = gfmc('- foo\n- bar\n+ baz')
//   t.is(
//     '<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<ul>\n<li>baz</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-275)', t => {
//   const actual = gfmc('1. foo\n2. bar\n3) baz')
//   t.is(
//     '<ol>\n<li>foo</li>\n<li>bar</li>\n</ol>\n<ol start="3">\n<li>baz</li>\n</ol>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-276)', t => {
//   const actual = gfmc('Foo\n- bar\n- baz')
//   t.is('<p>Foo</p>\n<ul>\n<li>bar</li>\n<li>baz</li>\n</ul>', actual)
// })

// test('Lists (https://github.github.com/gfm/#example-277)', t => {
//   const actual =
//     gfmc(
//       'The number of windows in my house is\n14.  The number of doors is 6.'
//     )
//   )
//   t.is(
//     '<p>The number of windows in my house is\n14.  The number of doors is 6.</p>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-278)', t => {
//   const actual =
//     gfmc(
//       'The number of windows in my house is\n1.  The number of doors is 6.'
//     )
//   )
//   t.is(
//     '<p>The number of windows in my house is</p>\n<ol>\n<li>The number of doors is 6.</li>\n</ol>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-279)', t => {
//   const actual = gfmc('- foo\n\n- bar\n\n\n- baz')
//   t.is(
//     '<ul>\n<li>\n<p>foo</p>\n</li>\n<li>\n<p>bar</p>\n</li>\n<li>\n<p>baz</p>\n</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-280)', t => {
//   const actual = gfmc('- foo\n  - bar\n    - baz\n\n\n      bim')
//   t.is(
//     '<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>\n<p>baz</p>\n<p>bim</p>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-281)', t => {
//   const actual = gfmc('- foo\n- bar\n\n<!-- -->\n\n- baz\n- bim')
//   t.is(
//     '<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<!-- -->\n<ul>\n<li>baz</li>\n<li>bim</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-282)', t => {
//   const actual =
//     gfmc('-   foo\n\n    notcode\n\n-   foo\n\n<!-- -->\n\n    code')
//   )
//   t.is(
//     '<ul>\n<li>\n<p>foo</p>\n<p>notcode</p>\n</li>\n<li>\n<p>foo</p>\n</li>\n</ul>\n<!-- -->\n<pre><code>code\n</code></pre>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-283)', t => {
//   const actual =
//     gfmc('- a\n - b\n  - c\n   - d\n    - e\n   - f\n  - g\n - h\n- i')
//   )
//   t.is(
//     '<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d</li>\n<li>e</li>\n<li>f</li>\n<li>g</li>\n<li>h</li>\n<li>i</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-284)', t => {
//   const actual = gfmc('1. a\n\n  2. b\n\n    3. c')
//   t.is(
//     '<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ol>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-285)', t => {
//   const actual = gfmc('- a\n- b\n\n- c')
//   t.is(
//     '<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-286)', t => {
//   const actual = gfmc('* a\n*\n\n* c')
//   t.is(
//     '<ul>\n<li>\n<p>a</p>\n</li>\n<li></li>\n<li>\n<p>c</p>\n</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-287)', t => {
//   const actual = gfmc('- a\n- b\n\n  c\n- d')
//   t.is(
//     '<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-288)', t => {
//   const actual = gfmc('- a\n- b\n\n  [ref]: /url\n- d')
//   t.is(
//     '<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-289)', t => {
//   const actual = gfmc('- a\n- ```\n  b\n\n\n  ```\n- c')
//   t.is(
//     '<ul>\n<li>a</li>\n<li>\n<pre><code>b\n\n\n</code></pre>\n</li>\n<li>c</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-290)', t => {
//   const actual = gfmc('- a\n  - b\n\n    c\n- d')
//   t.is(
//     '<ul>\n<li>a\n<ul>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n</ul>\n</li>\n<li>d</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-291)', t => {
//   const actual = gfmc('* a\n  > b\n  >\n* c')
//   t.is(
//     '<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n</li>\n<li>c</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-292)', t => {
//   const actual = gfmc('- a\n  > b\n  ```\n  c\n  ```\n- d')
//   t.is(
//     '<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n<pre><code>c\n</code></pre>\n</li>\n<li>d</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-293)', t => {
//   const actual = gfmc('- a')
//   t.is('<ul>\n<li>a</li>\n</ul>', actual)
// })

// test('Lists (https://github.github.com/gfm/#example-294)', t => {
//   const actual = gfmc('- a\n  - b')
//   t.is('<ul>\n<li>a\n<ul>\n<li>b</li>\n</ul>\n</li>\n</ul>', actual)
// })

// test('Lists (https://github.github.com/gfm/#example-295)', t => {
//   const actual = gfmc('1. ```\n   foo\n   ```\n\n   bar')
//   t.is(
//     '<ol>\n<li>\n<pre><code>foo\n</code></pre>\n<p>bar</p>\n</li>\n</ol>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-296)', t => {
//   const actual = gfmc('* foo\n  * bar\n\n  baz')
//   t.is(
//     '<ul>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n<p>baz</p>\n</li>\n</ul>',
//     actual
//   )
// })

// test('Lists (https://github.github.com/gfm/#example-297)', t => {
//   const actual = gfmc('- a\n  - b\n  - c\n\n- d\n  - e\n  - f')
//   t.is(
//     '<ul>\n<li>\n<p>a</p>\n<ul>\n<li>b</li>\n<li>c</li>\n</ul>\n</li>\n<li>\n<p>d</p>\n<ul>\n<li>e</li>\n<li>f</li>\n</ul>\n</li>\n</ul>',
//     actual
//   )
// })

// test('Inlines (https://github.github.com/gfm/#example-298)', t => {
//   const actual = gfmc('`hi`lo`')
//   t.is('<p><code>hi</code>lo`</p>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-299)', t => {
//   const actual =
//     gfmc(
//       '\\!"\\#\\$\\%\\&\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\]\\^\\_\\`\\{\\|\\}\\~'
//     )
//   )
//   t.is("<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>", actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-300)', t => {
//   const actual = gfmc('\\	\\A\\a\\ \\\\φ\\«')
//   t.is('<p>\\	\\A\\a\\ \\\\φ\\«</p>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-301)', t => {
//   const actual =
//     gfmc(
//       '\\*not emphasized*\n\\<br/> not a tag\n\\[not a link](/foo)\n\\`not code`\n1\\. not a list\n\\* not a list\n\\# not a heading\n\\[foo]: /url "not a reference"'
//     )
//   )
//   t.is(
//     '<p>*not emphasized*\n&lt;br/&gt; not a tag\n[not a link](/foo)\n`not code`\n1. not a list\n* not a list\n# not a heading\n[foo]: /url &quot;not a reference&quot;</p>',
//     actual
//   )
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-302)', t => {
//   const actual = gfmc('\\*emphasis*')
//   t.is('<p>\\<em>emphasis</em></p>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-303)', t => {
//   const actual = gfmc('foo\\nbar')
//   t.is('<p>foo<br>\nbar</p>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-304)', t => {
//   const actual = gfmc('`` \\[\\` ``')
//   t.is('<p><code>\\[\\`</code></p>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-305)', t => {
//   const actual = gfmc('    \\[\\]')
//   t.is('<pre><code>\\[\\]\n</code></pre>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-306)', t => {
//   const actual = gfmc('~~~\n\\[\\]\n~~~')
//   t.is('<pre><code>\\[\\]\n</code></pre>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-307)', t => {
//   const actual = gfmc('<http://example.com?find=\\*>')
//   t.is(
//     '<p><a href="http://example.com?find=%5C*">http://example.com?find=\\*</a></p>',
//     actual
//   )
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-308)', t => {
//   const actual = gfmc('<a href="/bar\\/)">')
//   t.is('<a href="/bar\\/)"></a>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-309)', t => {
//   const actual = gfmc('[foo](/bar\\* "ti\\*tle")')
//   t.is('<p><a href="/bar*" title="ti*tle">foo</a></p>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-310)', t => {
//   const actual = gfmc('[foo]\n\n[foo]: /bar\\* "ti\\*tle"')
//   t.is('<p><a href="/bar*" title="ti*tle">foo</a></p>', actual)
// })

// test('Backslash escapes (https://github.github.com/gfm/#example-311)', t => {
//   const actual = gfmc('``` foo\\+bar\nfoo\n```')
//   t.is('<pre><code class="language-foo+bar">foo\n</code></pre>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-312)', t => {
//   const actual =
//     gfmc(
//       '&nbsp; &amp; &copy; &AElig; &Dcaron;\n&frac34; &HilbertSpace; &DifferentialD;\n&ClockwiseContourIntegral; &ngE;'
//     )
//   )
//   t.is('<p>  &amp; © Æ Ď\n¾ ℋ ⅆ\n∲ ≧̸</p>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-313)', t => {
//   const actual = gfmc('&#35; &#1234; &#992; &#98765432; &#0;')
//   t.is('<p># Ӓ Ϡ � �</p>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-314)', t => {
//   const actual = gfmc('&#X22; &#XD06; &#xcab;')
//   t.is('<p>&quot; ആ ಫ</p>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-315)', t => {
//   const actual =
//     gfmc('&nbsp &x; &#; &#x;\n&ThisIsNotDefined; &hi?;')
//   )
//   t.is(
//     '<p>&amp;nbsp &amp;x; &amp;#; &amp;#x;\n&amp;ThisIsNotDefined; &amp;hi?;</p>',
//     actual
//   )
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-316)', t => {
//   const actual = gfmc('&copy')
//   t.is('<p>&amp;copy</p>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-317)', t => {
//   const actual = gfmc('&MadeUpEntity;')
//   t.is('<p>&amp;MadeUpEntity;</p>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-318)', t => {
//   const actual = gfmc('<a href="&ouml;&ouml;.html">')
//   t.is('<a href="&ouml;&ouml;.html"></a>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-319)', t => {
//   const actual = gfmc('[foo](/f&ouml;&ouml; "f&ouml;&ouml;")')
//   t.is('<p><a href="/f%C3%B6%C3%B6" title="föö">foo</a></p>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-320)', t => {
//   const actual =
//     gfmc('[foo]\n\n[foo]: /f&ouml;&ouml; "f&ouml;&ouml;"')
//   )
//   t.is('<p><a href="/f%C3%B6%C3%B6" title="föö">foo</a></p>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-321)', t => {
//   const actual = gfmc('``` f&ouml;&ouml;\nfoo\n```')
//   t.is('<pre><code class="language-föö">foo\n</code></pre>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-322)', t => {
//   const actual = gfmc('`f&ouml;&ouml;`')
//   t.is('<p><code>f&amp;ouml;&amp;ouml;</code></p>', actual)
// })

// test('Entity and numeric character references (https://github.github.com/gfm/#example-323)', t => {
//   const actual = gfmc('    f&ouml;f&ouml;')
//   t.is('<pre><code>f&amp;ouml;f&amp;ouml;\n</code></pre>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-324)', t => {
//   const actual = gfmc('`foo`')
//   t.is('<p><code>foo</code></p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-325)', t => {
//   const actual = gfmc('`` foo ` bar  ``')
//   t.is('<p><code>foo ` bar</code></p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-326)', t => {
//   const actual = gfmc('` `` `')
//   t.is('<p><code>``</code></p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-327)', t => {
//   const actual = gfmc('``\nfoo\n``')
//   t.is('<p><code>foo</code></p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-328)', t => {
//   const actual = gfmc('`foo   bar\n  baz`')
//   t.is('<p><code>foo bar baz</code></p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-329)', t => {
//   const actual = gfmc('`a  b`')
//   t.is('<p><code>a  b</code></p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-330)', t => {
//   const actual = gfmc('`foo `` bar`')
//   t.is('<p><code>foo `` bar</code></p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-331)', t => {
//   const actual = gfmc('`foo\\`bar`')
//   t.is('<p><code>foo\\</code>bar`</p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-332)', t => {
//   const actual = gfmc('*foo`*`')
//   t.is('<p>*foo<code>*</code></p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-333)', t => {
//   const actual = gfmc('[not a `link](/foo`)')
//   t.is('<p>[not a <code>link](/foo</code>)</p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-334)', t => {
//   const actual = gfmc('`<a href="`">`')
//   t.is('<p><code>&lt;a href=&quot;</code>&quot;&gt;`</p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-335)', t => {
//   const actual = gfmc('<a href="`">`')
//   t.is('<p><a href="`">`</a></p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-336)', t => {
//   const actual = gfmc('`<http://foo.bar.`baz>`')
//   t.is('<p><code>&lt;http://foo.bar.</code>baz&gt;`</p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-337)', t => {
//   const actual = gfmc('<http://foo.bar.`baz>`')
//   t.is(
//     '<p><a href="http://foo.bar.%60baz">http://foo.bar.`baz</a>`</p>',
//     actual
//   )
// })

// test('Code spans (https://github.github.com/gfm/#example-338)', t => {
//   const actual = gfmc('```foo``')
//   t.is('<p>```foo``</p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-339)', t => {
//   const actual = gfmc('`foo')
//   t.is('<p>`foo</p>', actual)
// })

// test('Code spans (https://github.github.com/gfm/#example-340)', t => {
//   const actual = gfmc('`foo``bar``')
//   t.is('<p>`foo<code>bar</code></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-341)', t => {
//   const actual = gfmc('*foo bar*')
//   t.is('<p><em>foo bar</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-342)', t => {
//   const actual = gfmc('a * foo bar*')
//   t.is('<p>a * foo bar*</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-343)', t => {
//   const actual = gfmc('a*"foo"*')
//   t.is('<p>a*&quot;foo&quot;*</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-344)', t => {
//   const actual = gfmc('* a *')
//   t.is('<p>* a *</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-345)', t => {
//   const actual = gfmc('foo*bar*')
//   t.is('<p>foo<em>bar</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-346)', t => {
//   const actual = gfmc('5*6*78')
//   t.is('<p>5<em>6</em>78</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-347)', t => {
//   const actual = gfmc('_foo bar_')
//   t.is('<p><em>foo bar</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-348)', t => {
//   const actual = gfmc('_ foo bar_')
//   t.is('<p>_ foo bar_</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-349)', t => {
//   const actual = gfmc('a_"foo"_')
//   t.is('<p>a_&quot;foo&quot;_</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-350)', t => {
//   const actual = gfmc('foo_bar_')
//   t.is('<p>foo_bar_</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-351)', t => {
//   const actual = gfmc('5_6_78')
//   t.is('<p>5_6_78</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-352)', t => {
//   const actual = gfmc('пристаням_стремятся_')
//   t.is('<p>пристаням_стремятся_</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-353)', t => {
//   const actual = gfmc('aa_"bb"_cc')
//   t.is('<p>aa_&quot;bb&quot;_cc</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-354)', t => {
//   const actual = gfmc('foo-_(bar)_')
//   t.is('<p>foo-<em>(bar)</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-355)', t => {
//   const actual = gfmc('_foo*')
//   t.is('<p>_foo*</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-356)', t => {
//   const actual = gfmc('*foo bar *')
//   t.is('<p>*foo bar *</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-357)', t => {
//   const actual = gfmc('*foo bar\n*')
//   t.is('<p>*foo bar\n*</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-358)', t => {
//   const actual = gfmc('*(*foo)')
//   t.is('<p>*(*foo)</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-359)', t => {
//   const actual = gfmc('*(*foo*)*')
//   t.is('<p><em>(<em>foo</em>)</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-360)', t => {
//   const actual = gfmc('*foo*bar')
//   t.is('<p><em>foo</em>bar</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-361)', t => {
//   const actual = gfmc('_foo bar _')
//   t.is('<p>_foo bar _</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-362)', t => {
//   const actual = gfmc('_(_foo)')
//   t.is('<p>_(_foo)</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-363)', t => {
//   const actual = gfmc('_(_foo_)_')
//   t.is('<p><em>(<em>foo</em>)</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-364)', t => {
//   const actual = gfmc('_foo_bar')
//   t.is('<p>_foo_bar</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-365)', t => {
//   const actual = gfmc('_пристаням_стремятся')
//   t.is('<p>_пристаням_стремятся</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-366)', t => {
//   const actual = gfmc('_foo_bar_baz_')
//   t.is('<p><em>foo_bar_baz</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-367)', t => {
//   const actual = gfmc('_(bar)_.')
//   t.is('<p><em>(bar)</em>.</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-368)', t => {
//   const actual = gfmc('**foo bar**')
//   t.is('<p><strong>foo bar</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-369)', t => {
//   const actual = gfmc('** foo bar**')
//   t.is('<p>** foo bar**</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-370)', t => {
//   const actual = gfmc('a**"foo"**')
//   t.is('<p>a**&quot;foo&quot;**</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-371)', t => {
//   const actual = gfmc('foo**bar**')
//   t.is('<p>foo<strong>bar</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-372)', t => {
//   const actual = gfmc('__foo bar__')
//   t.is('<p><strong>foo bar</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-373)', t => {
//   const actual = gfmc('__ foo bar__')
//   t.is('<p>__ foo bar__</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-374)', t => {
//   const actual = gfmc('__\nfoo bar__')
//   t.is('<p>__\nfoo bar__</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-375)', t => {
//   const actual = gfmc('a__"foo"__')
//   t.is('<p>a__&quot;foo&quot;__</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-376)', t => {
//   const actual = gfmc('foo__bar__')
//   t.is('<p>foo__bar__</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-377)', t => {
//   const actual = gfmc('5__6__78')
//   t.is('<p>5__6__78</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-378)', t => {
//   const actual = gfmc('пристаням__стремятся__')
//   t.is('<p>пристаням__стремятся__</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-379)', t => {
//   const actual = gfmc('__foo, __bar__, baz__')
//   t.is('<p><strong>foo, <strong>bar</strong>, baz</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-380)', t => {
//   const actual = gfmc('foo-__(bar)__')
//   t.is('<p>foo-<strong>(bar)</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-381)', t => {
//   const actual = gfmc('**foo bar **')
//   t.is('<p>**foo bar **</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-382)', t => {
//   const actual = gfmc('**(**foo)')
//   t.is('<p>**(**foo)</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-383)', t => {
//   const actual = gfmc('*(**foo**)*')
//   t.is('<p><em>(<strong>foo</strong>)</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-384)', t => {
//   const actual =
//     gfmc(
//       '**Gomphocarpus (*Gomphocarpus physocarpus*, syn.\n*Asclepias physocarpa*)**'
//     )
//   )
//   t.is(
//     '<p><strong>Gomphocarpus (<em>Gomphocarpus physocarpus</em>, syn.\n<em>Asclepias physocarpa</em>)</strong></p>',
//     actual
//   )
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-385)', t => {
//   const actual = gfmc('**foo "*bar*" foo**')
//   t.is('<p><strong>foo &quot;<em>bar</em>&quot; foo</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-386)', t => {
//   const actual = gfmc('**foo**bar')
//   t.is('<p><strong>foo</strong>bar</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-387)', t => {
//   const actual = gfmc('__foo bar __')
//   t.is('<p>__foo bar __</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-388)', t => {
//   const actual = gfmc('__(__foo)')
//   t.is('<p>__(__foo)</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-389)', t => {
//   const actual = gfmc('_(__foo__)_')
//   t.is('<p><em>(<strong>foo</strong>)</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-390)', t => {
//   const actual = gfmc('__foo__bar')
//   t.is('<p>__foo__bar</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-391)', t => {
//   const actual = gfmc('__пристаням__стремятся')
//   t.is('<p>__пристаням__стремятся</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-392)', t => {
//   const actual = gfmc('__foo__bar__baz__')
//   t.is('<p><strong>foo__bar__baz</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-393)', t => {
//   const actual = gfmc('__(bar)__.')
//   t.is('<p><strong>(bar)</strong>.</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-394)', t => {
//   const actual = gfmc('*foo [bar](/url)*')
//   t.is('<p><em>foo <a href="/url">bar</a></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-395)', t => {
//   const actual = gfmc('*foo\nbar*')
//   t.is('<p><em>foo\nbar</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-396)', t => {
//   const actual = gfmc('_foo __bar__ baz_')
//   t.is('<p><em>foo <strong>bar</strong> baz</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-397)', t => {
//   const actual = gfmc('_foo _bar_ baz_')
//   t.is('<p><em>foo <em>bar</em> baz</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-398)', t => {
//   const actual = gfmc('__foo_ bar_')
//   t.is('<p><em><em>foo</em> bar</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-399)', t => {
//   const actual = gfmc('*foo *bar**')
//   t.is('<p><em>foo <em>bar</em></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-400)', t => {
//   const actual = gfmc('*foo **bar** baz*')
//   t.is('<p><em>foo <strong>bar</strong> baz</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-401)', t => {
//   const actual = gfmc('*foo**bar**baz*')
//   t.is('<p><em>foo<strong>bar</strong>baz</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-402)', t => {
//   const actual = gfmc('***foo** bar*')
//   t.is('<p><em><strong>foo</strong> bar</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-403)', t => {
//   const actual = gfmc('*foo **bar***')
//   t.is('<p><em>foo <strong>bar</strong></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-404)', t => {
//   const actual = gfmc('*foo**bar***')
//   t.is('<p><em>foo<strong>bar</strong></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-405)', t => {
//   const actual = gfmc('*foo **bar *baz* bim** bop*')
//   t.is('<p><em>foo <strong>bar <em>baz</em> bim</strong> bop</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-406)', t => {
//   const actual = gfmc('*foo [*bar*](/url)*')
//   t.is('<p><em>foo <a href="/url"><em>bar</em></a></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-407)', t => {
//   const actual = gfmc('** is not an empty emphasis')
//   t.is('<p>** is not an empty emphasis</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-408)', t => {
//   const actual = gfmc('**** is not an empty strong emphasis')
//   t.is('<p>**** is not an empty strong emphasis</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-409)', t => {
//   const actual = gfmc('**foo [bar](/url)**')
//   t.is('<p><strong>foo <a href="/url">bar</a></strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-410)', t => {
//   const actual = gfmc('**foo\nbar**')
//   t.is('<p><strong>foo\nbar</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-411)', t => {
//   const actual = gfmc('__foo _bar_ baz__')
//   t.is('<p><strong>foo <em>bar</em> baz</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-412)', t => {
//   const actual = gfmc('__foo __bar__ baz__')
//   t.is('<p><strong>foo <strong>bar</strong> baz</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-413)', t => {
//   const actual = gfmc('____foo__ bar__')
//   t.is('<p><strong><strong>foo</strong> bar</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-414)', t => {
//   const actual = gfmc('**foo **bar****')
//   t.is('<p><strong>foo <strong>bar</strong></strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-415)', t => {
//   const actual = gfmc('**foo *bar* baz**')
//   t.is('<p><strong>foo <em>bar</em> baz</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-416)', t => {
//   const actual = gfmc('**foo*bar*baz**')
//   t.is('<p><strong>foo<em>bar</em>baz</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-417)', t => {
//   const actual = gfmc('***foo* bar**')
//   t.is('<p><strong><em>foo</em> bar</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-418)', t => {
//   const actual = gfmc('**foo *bar***')
//   t.is('<p><strong>foo <em>bar</em></strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-419)', t => {
//   const actual = gfmc('**foo *bar **baz**\nbim* bop**')
//   t.is(
//     '<p><strong>foo <em>bar <strong>baz</strong>\nbim</em> bop</strong></p>',
//     actual
//   )
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-420)', t => {
//   const actual = gfmc('**foo [*bar*](/url)**')
//   t.is('<p><strong>foo <a href="/url"><em>bar</em></a></strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-421)', t => {
//   const actual = gfmc('__ is not an empty emphasis')
//   t.is('<p>__ is not an empty emphasis</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-422)', t => {
//   const actual = gfmc('____ is not an empty strong emphasis')
//   t.is('<p>____ is not an empty strong emphasis</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-423)', t => {
//   const actual = gfmc('foo ***')
//   t.is('<p>foo ***</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-424)', t => {
//   const actual = gfmc('foo *\\**')
//   t.is('<p>foo <em>*</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-425)', t => {
//   const actual = gfmc('foo *_*')
//   t.is('<p>foo <em>_</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-426)', t => {
//   const actual = gfmc('foo *****')
//   t.is('<p>foo *****</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-427)', t => {
//   const actual = gfmc('foo **\\***')
//   t.is('<p>foo <strong>*</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-428)', t => {
//   const actual = gfmc('foo **_**')
//   t.is('<p>foo <strong>_</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-429)', t => {
//   const actual = gfmc('**foo*')
//   t.is('<p>*<em>foo</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-430)', t => {
//   const actual = gfmc('*foo**')
//   t.is('<p><em>foo</em>*</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-431)', t => {
//   const actual = gfmc('***foo**')
//   t.is('<p>*<strong>foo</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-432)', t => {
//   const actual = gfmc('****foo*')
//   t.is('<p>***<em>foo</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-433)', t => {
//   const actual = gfmc('**foo***')
//   t.is('<p><strong>foo</strong>*</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-434)', t => {
//   const actual = gfmc('*foo****')
//   t.is('<p><em>foo</em>***</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-435)', t => {
//   const actual = gfmc('foo ___')
//   t.is('<p>foo ___</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-436)', t => {
//   const actual = gfmc('foo _\\__')
//   t.is('<p>foo <em>_</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-437)', t => {
//   const actual = gfmc('foo _*_')
//   t.is('<p>foo <em>*</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-438)', t => {
//   const actual = gfmc('foo _____')
//   t.is('<p>foo _____</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-439)', t => {
//   const actual = gfmc('foo __\\___')
//   t.is('<p>foo <strong>_</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-440)', t => {
//   const actual = gfmc('foo __*__')
//   t.is('<p>foo <strong>*</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-441)', t => {
//   const actual = gfmc('__foo_')
//   t.is('<p>_<em>foo</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-442)', t => {
//   const actual = gfmc('_foo__')
//   t.is('<p><em>foo</em>_</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-443)', t => {
//   const actual = gfmc('___foo__')
//   t.is('<p>_<strong>foo</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-444)', t => {
//   const actual = gfmc('____foo_')
//   t.is('<p>___<em>foo</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-445)', t => {
//   const actual = gfmc('__foo___')
//   t.is('<p><strong>foo</strong>_</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-446)', t => {
//   const actual = gfmc('_foo____')
//   t.is('<p><em>foo</em>___</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-447)', t => {
//   const actual = gfmc('**foo**')
//   t.is('<p><strong>foo</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-448)', t => {
//   const actual = gfmc('*_foo_*')
//   t.is('<p><em><em>foo</em></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-449)', t => {
//   const actual = gfmc('__foo__')
//   t.is('<p><strong>foo</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-450)', t => {
//   const actual = gfmc('_*foo*_')
//   t.is('<p><em><em>foo</em></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-451)', t => {
//   const actual = gfmc('****foo****')
//   t.is('<p><strong><strong>foo</strong></strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-452)', t => {
//   const actual = gfmc('____foo____')
//   t.is('<p><strong><strong>foo</strong></strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-453)', t => {
//   const actual = gfmc('******foo******')
//   t.is('<p><strong><strong><strong>foo</strong></strong></strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-454)', t => {
//   const actual = gfmc('***foo***')
//   t.is('<p><em><strong>foo</strong></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-455)', t => {
//   const actual = gfmc('_____foo_____')
//   t.is('<p><em><strong><strong>foo</strong></strong></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-456)', t => {
//   const actual = gfmc('*foo _bar* baz_')
//   t.is('<p><em>foo _bar</em> baz_</p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-457)', t => {
//   const actual = gfmc('*foo __bar *baz bim__ bam*')
//   t.is('<p><em>foo <strong>bar *baz bim</strong> bam</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-458)', t => {
//   const actual = gfmc('**foo **bar baz**')
//   t.is('<p>**foo <strong>bar baz</strong></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-459)', t => {
//   const actual = gfmc('*foo *bar baz*')
//   t.is('<p>*foo <em>bar baz</em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-460)', t => {
//   const actual = gfmc('*[bar*](/url)')
//   t.is('<p>*<a href="/url">bar*</a></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-461)', t => {
//   const actual = gfmc('_foo [bar_](/url)')
//   t.is('<p>_foo <a href="/url">bar_</a></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-462)', t => {
//   const actual = gfmc('*<img src="foo" title="*"/>')
//   t.is('<p>*<img src="foo" title="*"></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-463)', t => {
//   const actual = gfmc('**<a href="**">')
//   t.is('<p>**<a href="**"></a></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-464)', t => {
//   const actual = gfmc('__<a href="__">')
//   t.is('<p>__<a href="__"></a></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-465)', t => {
//   const actual = gfmc('*a `*`*')
//   t.is('<p><em>a <code>*</code></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-466)', t => {
//   const actual = gfmc('_a `_`_')
//   t.is('<p><em>a <code>_</code></em></p>', actual)
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-467)', t => {
//   const actual = gfmc('**a<http://foo.bar/?q=**>')
//   t.is(
//     '<p>**a<a href="http://foo.bar/?q=**">http://foo.bar/?q=**</a></p>',
//     actual
//   )
// })

// test('Emphasis and strong emphasis (https://github.github.com/gfm/#example-468)', t => {
//   const actual = gfmc('__a<http://foo.bar/?q=__>')
//   t.is(
//     '<p>__a<a href="http://foo.bar/?q=__">http://foo.bar/?q=__</a></p>',
//     actual
//   )
// })

// test('Strikethrough (extension) (https://github.github.com/gfm/#example-469)', t => {
//   const actual = gfmc('~Hi~ Hello, world!')
//   t.is('<p><del>Hi</del> Hello, world!</p>', actual)
// })

// test('Strikethrough (extension) (https://github.github.com/gfm/#example-470)', t => {
//   const actual = gfmc('This ~text~~~~ is ~~~~curious~.')
//   t.is('<p>This <del>text</del> is <del>curious</del>.</p>', actual)
// })

// test('Strikethrough (extension) (https://github.github.com/gfm/#example-471)', t => {
//   const actual = gfmc('This ~~has a\n\nnew paragraph~~.')
//   t.is('<p>This ~~has a</p>\n<p>new paragraph~~.</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-472)', t => {
//   const actual = gfmc('[link](/uri "title")')
//   t.is('<p><a href="/uri" title="title">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-473)', t => {
//   const actual = gfmc('[link](/uri)')
//   t.is('<p><a href="/uri">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-474)', t => {
//   const actual = gfmc('[link]()')
//   t.is('<p><a href="">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-475)', t => {
//   const actual = gfmc('[link](<>)')
//   t.is('<p><a href="">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-476)', t => {
//   const actual = gfmc('[link](/my uri)')
//   t.is('<p>[link](/my uri)</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-477)', t => {
//   const actual = gfmc('[link](</my uri>)')
//   t.is('<p>[link](&lt;/my uri&gt;)</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-478)', t => {
//   const actual = gfmc('[link](foo\nbar)')
//   t.is('<p>[link](foo\nbar)</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-479)', t => {
//   const actual = gfmc('[link](<foo\nbar>)')
//   t.is('<p>[link](<foo \nbar>)</foo></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-480)', t => {
//   const actual = gfmc('[link](\\(foo\\))')
//   t.is('<p><a href="(foo)">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-481)', t => {
//   const actual = gfmc('[link](foo(and(bar)))')
//   t.is('<p><a href="foo(and(bar))">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-482)', t => {
//   const actual = gfmc('[link](foo\\(and\\(bar\\))')
//   t.is('<p><a href="foo(and(bar)">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-483)', t => {
//   const actual = gfmc('[link](<foo(and(bar)>)')
//   t.is('<p><a href="foo(and(bar)">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-484)', t => {
//   const actual = gfmc('[link](foo\\)\\:)')
//   t.is('<p><a href="foo):">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-485)', t => {
//   const actual =
//     gfmc(
//       '[link](#fragment)\n\n[link](http://example.com#fragment)\n\n[link](http://example.com?foo=3#frag)'
//     )
//   )
//   t.is(
//     '<p><a href="#fragment">link</a></p>\n<p><a href="http://example.com#fragment">link</a></p>\n<p><a href="http://example.com?foo=3#frag">link</a></p>',
//     actual
//   )
// })

// test('Links (https://github.github.com/gfm/#example-486)', t => {
//   const actual = gfmc('[link](foo\bar)')
//   t.is('<p><a href="foo%5Cbar">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-487)', t => {
//   const actual = gfmc('[link](foo%20b&auml;)')
//   t.is('<p><a href="foo%20b%C3%A4">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-488)', t => {
//   const actual = gfmc('[link]("title")')
//   t.is('<p><a href="%22title%22">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-489)', t => {
//   const actual =
//     gfmc(
//       '[link](/url "title")\n[link](/url \'title\')\n[link](/url (title))'
//     )
//   )
//   t.is(
//     '<p><a href="/url" title="title">link</a>\n<a href="/url" title="title">link</a>\n<a href="/url" title="title">link</a></p>',
//     actual
//   )
// })

// test('Links (https://github.github.com/gfm/#example-490)', t => {
//   const actual = gfmc('[link](/url "title "&quot;")')
//   t.is('<p><a href="/url" title="title &quot;&quot;">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-491)', t => {
//   const actual = gfmc('[link](/url "title")')
//   t.is('<p><a href="/url%C2%A0%22title%22">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-492)', t => {
//   const actual = gfmc('[link](/url "title "and" title")')
//   t.is('<p>[link](/url &quot;title &quot;and&quot; title&quot;)</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-493)', t => {
//   const actual = gfmc('[link](/url \'title "and" title\')')
//   t.is(
//     '<p><a href="/url" title="title &quot;and&quot; title">link</a></p>',
//     actual
//   )
// })

// test('Links (https://github.github.com/gfm/#example-494)', t => {
//   const actual = gfmc('[link](   /uri\n  "title"  )')
//   t.is('<p><a href="/uri" title="title">link</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-495)', t => {
//   const actual = gfmc('[link] (/uri)')
//   t.is('<p>[link] (/uri)</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-496)', t => {
//   const actual = gfmc('[link [foo [bar]]](/uri)')
//   t.is('<p><a href="/uri">link [foo [bar]]</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-497)', t => {
//   const actual = gfmc('[link] bar](/uri)')
//   t.is('<p>[link] bar](/uri)</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-498)', t => {
//   const actual = gfmc('[link [bar](/uri)')
//   t.is('<p>[link <a href="/uri">bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-499)', t => {
//   const actual = gfmc('[link \\[bar](/uri)')
//   t.is('<p><a href="/uri">link [bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-500)', t => {
//   const actual = gfmc('[link *foo **bar** `#`*](/uri)')
//   t.is(
//     '<p><a href="/uri">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>',
//     actual
//   )
// })

// test('Links (https://github.github.com/gfm/#example-501)', t => {
//   const actual = gfmc('[![moon](moon.jpg)](/uri)')
//   t.is('<p><a href="/uri"><img src="moon.jpg" alt="moon"></a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-502)', t => {
//   const actual = gfmc('[foo [bar](/uri)](/uri)')
//   t.is('<p>[foo <a href="/uri">bar</a>](/uri)</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-503)', t => {
//   const actual = gfmc('[foo *[bar [baz](/uri)](/uri)*](/uri)')
//   t.is('<p>[foo <em>[bar <a href="/uri">baz</a>](/uri)</em>](/uri)</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-504)', t => {
//   const actual = gfmc('![[[foo](uri1)](uri2)](uri3)')
//   t.is('<p><img src="uri3" alt="[foo](uri2)"></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-505)', t => {
//   const actual = gfmc('*[foo*](/uri)')
//   t.is('<p>*<a href="/uri">foo*</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-506)', t => {
//   const actual = gfmc('[foo *bar](baz*)')
//   t.is('<p><a href="baz*">foo *bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-507)', t => {
//   const actual = gfmc('*foo [bar* baz]')
//   t.is('<p><em>foo [bar</em> baz]</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-508)', t => {
//   const actual = gfmc('[foo <bar attr="](baz)">')
//   t.is('<p>[foo <bar attr="](baz)"></bar></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-509)', t => {
//   const actual = gfmc('[foo`](/uri)`')
//   t.is('<p>[foo<code>](/uri)</code></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-510)', t => {
//   const actual = gfmc('[foo<http://example.com/?search=](uri)>')
//   t.is(
//     '<p>[foo<a href="http://example.com/?search=%5D(uri)">http://example.com/?search=](uri)</a></p>',
//     actual
//   )
// })

// test('Links (https://github.github.com/gfm/#example-511)', t => {
//   const actual = gfmc('[foo][bar]\n\n[bar]: /url "title"')
//   t.is('<p><a href="/url" title="title">foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-512)', t => {
//   const actual = gfmc('[link [foo [bar]]][ref]\n\n[ref]: /uri')
//   t.is('<p><a href="/uri">link [foo [bar]]</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-513)', t => {
//   const actual = gfmc('[link \\[bar][ref]\n\n[ref]: /uri')
//   t.is('<p><a href="/uri">link [bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-514)', t => {
//   const actual =
//     gfmc('[link *foo **bar** `#`*][ref]\n\n[ref]: /uri')
//   )
//   t.is(
//     '<p><a href="/uri">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>',
//     actual
//   )
// })

// test('Links (https://github.github.com/gfm/#example-515)', t => {
//   const actual = gfmc('[![moon](moon.jpg)][ref]\n\n[ref]: /uri')
//   t.is('<p><a href="/uri"><img src="moon.jpg" alt="moon"></a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-516)', t => {
//   const actual = gfmc('[foo [bar](/uri)][ref]\n\n[ref]: /uri')
//   t.is('<p>[foo <a href="/uri">bar</a>]<a href="/uri">ref</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-517)', t => {
//   const actual =
//     gfmc('[foo *bar [baz][ref]*][ref]\n\n[ref]: /uri')
//   )
//   t.is(
//     '<p>[foo <em>bar <a href="/uri">baz</a></em>]<a href="/uri">ref</a></p>',
//     actual
//   )
// })

// test('Links (https://github.github.com/gfm/#example-518)', t => {
//   const actual = gfmc('*[foo*][ref]\n\n[ref]: /uri')
//   t.is('<p>*<a href="/uri">foo*</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-519)', t => {
//   const actual = gfmc('[foo *bar][ref]\n\n[ref]: /uri')
//   t.is('<p><a href="/uri">foo *bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-520)', t => {
//   const actual = gfmc('[foo <bar attr="][ref]">\n\n[ref]: /uri')
//   t.is('<p>[foo <bar attr="][ref]"></bar></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-521)', t => {
//   const actual = gfmc('[foo`][ref]`\n\n[ref]: /uri')
//   t.is('<p>[foo<code>][ref]</code></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-522)', t => {
//   const actual =
//     gfmc('[foo<http://example.com/?search=][ref]>\n\n[ref]: /uri')
//   )
//   t.is(
//     '<p>[foo<a href="http://example.com/?search=%5D%5Bref%5D">http://example.com/?search=][ref]</a></p>',
//     actual
//   )
// })

// test('Links (https://github.github.com/gfm/#example-523)', t => {
//   const actual = gfmc('[foo][BaR]\n\n[bar]: /url "title"')
//   t.is('<p><a href="/url" title="title">foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-524)', t => {
//   const actual =
//     gfmc('[Толпой][Толпой] is a Russian word.\n\n[ТОЛПОЙ]: /url')
//   )
//   t.is('<p><a href="/url">Толпой</a> is a Russian word.</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-525)', t => {
//   const actual = gfmc('[Foo\n  bar]: /url\n\n[Baz][Foo bar]')
//   t.is('<p><a href="/url">Baz</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-526)', t => {
//   const actual = gfmc('[foo] [bar]\n\n[bar]: /url "title"')
//   t.is('<p>[foo] <a href="/url" title="title">bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-527)', t => {
//   const actual = gfmc('[foo]\n[bar]\n\n[bar]: /url "title"')
//   t.is('<p>[foo]\n<a href="/url" title="title">bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-528)', t => {
//   const actual =
//     gfmc('[foo]: /url1\n\n[foo]: /url2\n\n[bar][foo]')
//   )
//   t.is('<p><a href="/url1">bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-529)', t => {
//   const actual = gfmc('[bar][foo\\!]\n\n[foo!]: /url')
//   t.is('<p>[bar][foo!]</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-530)', t => {
//   const actual = gfmc('[foo][ref[]\n\n[ref[]: /uri')
//   t.is('<p>[foo][ref[]</p>\n<p>[ref[]: /uri</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-531)', t => {
//   const actual = gfmc('[foo][ref[bar]]\n\n[ref[bar]]: /uri')
//   t.is('<p>[foo][ref[bar]]</p>\n<p>[ref[bar]]: /uri</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-532)', t => {
//   const actual = gfmc('[[[foo]]]\n\n[[[foo]]]: /url')
//   t.is('<p>[[[foo]]]</p>\n<p>[[[foo]]]: /url</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-533)', t => {
//   const actual = gfmc('[foo][ref\\[]\n\n[ref\\[]: /uri')
//   t.is('<p><a href="/uri">foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-534)', t => {
//   const actual = gfmc('[bar\\]: /uri\n\n[bar\\]')
//   t.is('<p><a href="/uri">bar\\</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-535)', t => {
//   const actual = gfmc('[]\n\n[]: /uri')
//   t.is('<p>[]</p>\n<p>[]: /uri</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-536)', t => {
//   const actual = gfmc('[\n ]\n\n[\n ]: /uri')
//   t.is('<p>[\n]</p>\n<p>[\n]: /uri</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-537)', t => {
//   const actual = gfmc('[foo][]\n\n[foo]: /url "title"')
//   t.is('<p><a href="/url" title="title">foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-538)', t => {
//   const actual =
//     gfmc('[*foo* bar][]\n\n[*foo* bar]: /url "title"')
//   )
//   t.is('<p><a href="/url" title="title"><em>foo</em> bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-539)', t => {
//   const actual = gfmc('[Foo][]\n\n[foo]: /url "title"')
//   t.is('<p><a href="/url" title="title">Foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-540)', t => {
//   const actual = gfmc('[foo] \n[]\n\n[foo]: /url "title"')
//   t.is('<p><a href="/url" title="title">foo</a>\n[]</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-541)', t => {
//   const actual = gfmc('[foo]\n\n[foo]: /url "title"')
//   t.is('<p><a href="/url" title="title">foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-542)', t => {
//   const actual = gfmc('[*foo* bar]\n\n[*foo* bar]: /url "title"')
//   t.is('<p><a href="/url" title="title"><em>foo</em> bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-543)', t => {
//   const actual =
//     gfmc('[[*foo* bar]]\n\n[*foo* bar]: /url "title"')
//   )
//   t.is('<p>[<a href="/url" title="title"><em>foo</em> bar</a>]</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-544)', t => {
//   const actual = gfmc('[[bar [foo]\n\n[foo]: /url')
//   t.is('<p>[[bar <a href="/url">foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-545)', t => {
//   const actual = gfmc('[Foo]\n\n[foo]: /url "title"')
//   t.is('<p><a href="/url" title="title">Foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-546)', t => {
//   const actual = gfmc('[foo] bar\n\n[foo]: /url')
//   t.is('<p><a href="/url">foo</a> bar</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-547)', t => {
//   const actual = gfmc('\\[foo]\n\n[foo]: /url "title"')
//   t.is('<p>[foo]</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-548)', t => {
//   const actual = gfmc('[foo*]: /url\n\n*[foo*]')
//   t.is('<p>*<a href="/url">foo*</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-549)', t => {
//   const actual = gfmc('[foo][bar]\n\n[foo]: /url1\n[bar]: /url2')
//   t.is('<p><a href="/url2">foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-550)', t => {
//   const actual = gfmc('[foo][]\n\n[foo]: /url1')
//   t.is('<p><a href="/url1">foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-551)', t => {
//   const actual = gfmc('[foo]()\n\n[foo]: /url1')
//   t.is('<p><a href="">foo</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-552)', t => {
//   const actual = gfmc('[foo](not a link)\n\n[foo]: /url1')
//   t.is('<p><a href="/url1">foo</a>(not a link)</p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-553)', t => {
//   const actual = gfmc('[foo][bar][baz]\n\n[baz]: /url')
//   t.is('<p>[foo]<a href="/url">bar</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-554)', t => {
//   const actual =
//     gfmc('[foo][bar][baz]\n\n[baz]: /url1\n[bar]: /url2')
//   )
//   t.is('<p><a href="/url2">foo</a><a href="/url1">baz</a></p>', actual)
// })

// test('Links (https://github.github.com/gfm/#example-555)', t => {
//   const actual =
//     gfmc('[foo][bar][baz]\n\n[baz]: /url1\n[foo]: /url2')
//   )
//   t.is('<p>[foo]<a href="/url1">bar</a></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-556)', t => {
//   const actual = gfmc('![foo](/url "title")')
//   t.is('<p><img src="/url" alt="foo" title="title"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-557)', t => {
//   const actual =
//     gfmc('![foo *bar*]\n\n[foo *bar*]: train.jpg "train & tracks"')
//   )
//   t.is(
//     '<p><img src="train.jpg" alt="foo bar" title="train &amp; tracks"></p>',
//     actual
//   )
// })

// test('Images (https://github.github.com/gfm/#example-558)', t => {
//   const actual = gfmc('![foo ![bar](/url)](/url2)')
//   t.is('<p><img src="/url2" alt="foo bar"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-559)', t => {
//   const actual = gfmc('![foo [bar](/url)](/url2)')
//   t.is('<p><img src="/url2" alt="foo bar"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-560)', t => {
//   const actual =
//     gfmc('![foo *bar*][]\n\n[foo *bar*]: train.jpg "train & tracks"')
//   )
//   t.is(
//     '<p><img src="train.jpg" alt="foo bar" title="train &amp; tracks"></p>',
//     actual
//   )
// })

// test('Images (https://github.github.com/gfm/#example-561)', t => {
//   const actual =
//     gfmc('![foo *bar*][foobar]\n\n[FOOBAR]: train.jpg "train & tracks"')
//   )
//   t.is(
//     '<p><img src="train.jpg" alt="foo bar" title="train &amp; tracks"></p>',
//     actual
//   )
// })

// test('Images (https://github.github.com/gfm/#example-562)', t => {
//   const actual = gfmc('![foo](train.jpg)')
//   t.is('<p><img src="train.jpg" alt="foo"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-563)', t => {
//   const actual =
//     gfmc('My ![foo bar](/path/to/train.jpg  "title"   )')
//   )
//   t.is(
//     '<p>My <img src="/path/to/train.jpg" alt="foo bar" title="title"></p>',
//     actual
//   )
// })

// test('Images (https://github.github.com/gfm/#example-564)', t => {
//   const actual = gfmc('![foo](<url>)')
//   t.is('<p><img src="url" alt="foo"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-565)', t => {
//   const actual = gfmc('![](/url)')
//   t.is('<p><img src="/url" alt=""></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-566)', t => {
//   const actual = gfmc('![foo][bar]\n\n[bar]: /url')
//   t.is('<p><img src="/url" alt="foo"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-567)', t => {
//   const actual = gfmc('![foo][bar]\n\n[BAR]: /url')
//   t.is('<p><img src="/url" alt="foo"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-568)', t => {
//   const actual = gfmc('![foo][]\n\n[foo]: /url "title"')
//   t.is('<p><img src="/url" alt="foo" title="title"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-569)', t => {
//   const actual =
//     gfmc('![*foo* bar][]\n\n[*foo* bar]: /url "title"')
//   )
//   t.is('<p><img src="/url" alt="foo bar" title="title"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-570)', t => {
//   const actual = gfmc('![Foo][]\n\n[foo]: /url "title"')
//   t.is('<p><img src="/url" alt="Foo" title="title"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-571)', t => {
//   const actual = gfmc('![foo] \n[]\n\n[foo]: /url "title"')
//   t.is('<p><img src="/url" alt="foo" title="title">\n[]</p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-572)', t => {
//   const actual = gfmc('![foo]\n\n[foo]: /url "title"')
//   t.is('<p><img src="/url" alt="foo" title="title"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-573)', t => {
//   const actual = gfmc('![*foo* bar]\n\n[*foo* bar]: /url "title"')
//   t.is('<p><img src="/url" alt="foo bar" title="title"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-574)', t => {
//   const actual = gfmc('![[foo]]\n\n[[foo]]: /url "title"')
//   t.is('<p>![[foo]]</p>\n<p>[[foo]]: /url &quot;title&quot;</p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-575)', t => {
//   const actual = gfmc('![Foo]\n\n[foo]: /url "title"')
//   t.is('<p><img src="/url" alt="Foo" title="title"></p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-576)', t => {
//   const actual = gfmc('!\\[foo]\n\n[foo]: /url "title"')
//   t.is('<p>![foo]</p>', actual)
// })

// test('Images (https://github.github.com/gfm/#example-577)', t => {
//   const actual = gfmc('\\![foo]\n\n[foo]: /url "title"')
//   t.is('<p>!<a href="/url" title="title">foo</a></p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-578)', t => {
//   const actual = gfmc('<http://foo.bar.baz>')
//   t.is('<p><a href="http://foo.bar.baz">http://foo.bar.baz</a></p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-579)', t => {
//   const actual =
//     gfmc('<http://foo.bar.baz/test?q=hello&id=22&boolean>')
//   )
//   t.is(
//     '<p><a href="http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean">http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean</a></p>',
//     actual
//   )
// })

// test('Autolinks (https://github.github.com/gfm/#example-580)', t => {
//   const actual = gfmc('<irc://foo.bar:2233/baz>')
//   t.is(
//     '<p><a href="irc://foo.bar:2233/baz">irc://foo.bar:2233/baz</a></p>',
//     actual
//   )
// })

// test('Autolinks (https://github.github.com/gfm/#example-581)', t => {
//   const actual = gfmc('<MAILTO:FOO@BAR.BAZ>')
//   t.is('<p><a href="MAILTO:FOO@BAR.BAZ">MAILTO:FOO@BAR.BAZ</a></p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-582)', t => {
//   const actual = gfmc('<a+b+c:d>')
//   t.is('<p><a href="a+b+c:d">a+b+c:d</a></p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-583)', t => {
//   const actual = gfmc('<made-up-scheme://foo,bar>')
//   t.is(
//     '<p><a href="made-up-scheme://foo,bar">made-up-scheme://foo,bar</a></p>',
//     actual
//   )
// })

// test('Autolinks (https://github.github.com/gfm/#example-584)', t => {
//   const actual = gfmc('<http://../>')
//   t.is('<p><a href="http://../">http://../</a></p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-585)', t => {
//   const actual = gfmc('<localhost:5001/foo>')
//   t.is('<p><a href="localhost:5001/foo">localhost:5001/foo</a></p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-586)', t => {
//   const actual = gfmc('<http://foo.bar/baz bim>')
//   t.is('<p>&lt;http://foo.bar/baz bim&gt;</p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-587)', t => {
//   const actual = gfmc('<http://example.com/\\[\\>')
//   t.is(
//     '<p><a href="http://example.com/%5C%5B%5C">http://example.com/\\[\\</a></p>',
//     actual
//   )
// })

// test('Autolinks (https://github.github.com/gfm/#example-588)', t => {
//   const actual = gfmc('<foo@bar.example.com>')
//   t.is(
//     '<p><a href="mailto:foo@bar.example.com">foo@bar.example.com</a></p>',
//     actual
//   )
// })

// test('Autolinks (https://github.github.com/gfm/#example-589)', t => {
//   const actual = gfmc('<foo+special@Bar.baz-bar0.com>')
//   t.is(
//     '<p><a href="mailto:foo+special@Bar.baz-bar0.com">foo+special@Bar.baz-bar0.com</a></p>',
//     actual
//   )
// })

// test('Autolinks (https://github.github.com/gfm/#example-590)', t => {
//   const actual = gfmc('<foo\\+@bar.example.com>')
//   t.is('<p>&lt;foo+@bar.example.com&gt;</p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-591)', t => {
//   const actual = gfmc('<>')
//   t.is('<p>&lt;&gt;</p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-592)', t => {
//   const actual = gfmc('< http://foo.bar >')
//   t.is('<p>&lt; http://foo.bar &gt;</p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-593)', t => {
//   const actual = gfmc('<m:abc>')
//   t.is('<p>&lt;m:abc&gt;</p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-594)', t => {
//   const actual = gfmc('<foo.bar.baz>')
//   t.is('<p>&lt;foo.bar.baz&gt;</p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-595)', t => {
//   const actual = gfmc('http://example.com')
//   t.is('<p>http://example.com</p>', actual)
// })

// test('Autolinks (https://github.github.com/gfm/#example-596)', t => {
//   const actual = gfmc('foo@bar.example.com')
//   t.is('<p>foo@bar.example.com</p>', actual)
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-597)', t => {
//   const actual = gfmc('www.commonmark.org')
//   t.is(
//     '<p><a href="http://www.commonmark.org">www.commonmark.org</a></p>',
//     actual
//   )
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-598)', t => {
//   const actual =
//     gfmc('Visit www.commonmark.org/help for more information.')
//   )
//   t.is(
//     '<p>Visit <a href="http://www.commonmark.org/help">www.commonmark.org/help</a> for more information.</p>',
//     actual
//   )
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-599)', t => {
//   const actual =
//     gfmc('Visit www.commonmark.org.\n\nVisit www.commonmark.org/a.b.')
//   )
//   t.is(
//     '<p>Visit <a href="http://www.commonmark.org">www.commonmark.org</a>.</p>\n<p>Visit <a href="http://www.commonmark.org/a.b">www.commonmark.org/a.b</a>.</p>',
//     actual
//   )
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-600)', t => {
//   const actual =
//     gfmc(
//       'www.google.com/search?q=Markup+(business)\n\n(www.google.com/search?q=Markup+(business))'
//     )
//   )
//   t.is(
//     '<p><a href="http://www.google.com/search?q=Markup+(business)">www.google.com/search?q=Markup+(business)</a></p>\n<p>(<a href="http://www.google.com/search?q=Markup+(business)">www.google.com/search?q=Markup+(business)</a>)</p>',
//     actual
//   )
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-601)', t => {
//   const actual = gfmc('www.google.com/search?q=(business))+ok')
//   t.is(
//     '<p><a href="http://www.google.com/search?q=(business))+ok">www.google.com/search?q=(business))+ok</a></p>',
//     actual
//   )
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-602)', t => {
//   const actual =
//     gfmc(
//       'www.google.com/search?q=commonmark&hl=en\n\nwww.google.com/search?q=commonmark&hl;'
//     )
//   )
//   t.is(
//     '<p><a href="http://www.google.com/search?q=commonmark&amp;hl=en">www.google.com/search?q=commonmark&amp;hl=en</a></p>\n<p><a href="http://www.google.com/search?q=commonmark">www.google.com/search?q=commonmark</a>&amp;hl;</p>',
//     actual
//   )
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-603)', t => {
//   const actual = gfmc('www.commonmark.org/he<lp')
//   t.is(
//     '<p><a href="http://www.commonmark.org/he">www.commonmark.org/he</a>&lt;lp</p>',
//     actual
//   )
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-604)', t => {
//   const actual =
//     gfmc(
//       'http://commonmark.org\n\n(Visit https://encrypted.google.com/search?q=Markup+(business))\n\nAnonymous FTP is available at ftp://foo.bar.baz.'
//     )
//   )
//   t.is(
//     '<p><a href="http://commonmark.org">http://commonmark.org</a></p>\n<p>(Visit <a href="https://encrypted.google.com/search?q=Markup+(business)">https://encrypted.google.com/search?q=Markup+(business)</a>)</p>\n<p>Anonymous FTP is available at <a href="ftp://foo.bar.baz">ftp://foo.bar.baz</a>.</p>',
//     actual
//   )
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-605)', t => {
//   const actual = gfmc('foo@bar.baz')
//   t.is('<p><a href="mailto:foo@bar.baz">foo@bar.baz</a></p>', actual)
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-606)', t => {
//   const actual =
//     gfmc(
//       "hello@mail+xyz.example isn't valid, but hello+xyz@mail.example is."
//     )
//   )
//   t.is(
//     '<p>hello@mail+xyz.example isn\'t valid, but <a href="mailto:hello+xyz@mail.example">hello+xyz@mail.example</a> is.</p>',
//     actual
//   )
// })

// test('Autolinks (extension) (https://github.github.com/gfm/#example-607)', t => {
//   const actual =
//     gfmc('a.b-c_d@a.b\n\na.b-c_d@a.b.\n\na.b-c_d@a.b-\n\na.b-c_d@a.b_')
//   )
//   t.is(
//     '<p><a href="mailto:a.b-c_d@a.b">a.b-c_d@a.b</a></p>\n<p><a href="mailto:a.b-c_d@a.b">a.b-c_d@a.b</a>.</p>\n<p>a.b-c_d@a.b-</p>\n<p>a.b-c_d@a.b_</p>',
//     actual
//   )
// })

// test('Raw HTML (https://github.github.com/gfm/#example-608)', t => {
//   const actual = gfmc('<a><bab><c2c>')
//   t.is('<p><a><bab><c2c></c2c></bab></a></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-609)', t => {
//   const actual = gfmc('<a/><b2/>')
//   t.is('<p><a><b2></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-610)', t => {
//   const actual = gfmc('<a  /><b2\ndata="foo" >')
//   t.is('<p><a><b2 \ndata="foo"></b2></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-611)', t => {
//   const actual =
//     gfmc(
//       '<a foo="bar" bam = \'baz <em>"</em>\'\n_boolean zoop:33=zoop:33 />'
//     )
//   )
//   t.is(
//     '<p><a foo="bar" bam=\'baz <em>"</em>\' \n_boolean zoop:33="zoop:33"></p>',
//     actual
//   )
// })

// test('Raw HTML (https://github.github.com/gfm/#example-612)', t => {
//   const actual = gfmc('Foo <responsive-image src="foo.jpg" />')
//   t.is('<p>Foo <responsive-image src="foo.jpg"></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-613)', t => {
//   const actual = gfmc('<33> <__>')
//   t.is('<p>&lt;33&gt; &lt;__&gt;</p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-614)', t => {
//   const actual = gfmc('<a h*#ref="hi">')
//   t.is('<p>&lt;a h*#ref=&quot;hi&quot;&gt;</p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-615)', t => {
//   const actual = gfmc("<a href=\"hi'> <a href=hi'>"))
//   t.is("<p>&lt;a href=&quot;hi'&gt; &lt;a href=hi'&gt;</p>", actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-616)', t => {
//   const actual = gfmc('< a><\nfoo><bar/ >')
//   t.is('<p>&lt; a&gt;&lt;\nfoo&gt;&lt;bar/ &gt;</p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-617)', t => {
//   const actual = gfmc("<a href='bar'title=title>"))
//   t.is("<p>&lt;a href='bar'title=title&gt;</p>", actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-618)', t => {
//   const actual = gfmc('</a></foo >')
//   t.is('<p></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-619)', t => {
//   const actual = gfmc('</a href="foo">')
//   t.is('<p>&lt;/a href=&quot;foo&quot;&gt;</p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-620)', t => {
//   const actual =
//     gfmc('foo <!-- this is a\ncomment - with hyphen -->')
//   )
//   t.is('<p>foo <!-- this is a\ncomment - with hyphen --></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-621)', t => {
//   const actual = gfmc('foo <!-- not a comment -- two hyphens -->')
//   t.is('<p>foo &lt;!-- not a comment -- two hyphens --&gt;</p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-622)', t => {
//   const actual = gfmc('foo <!--> foo -->\n\nfoo <!-- foo--->')
//   t.is(
//     '<p>foo &lt;!--&gt; foo --&gt;</p>\n<p>foo &lt;!-- foo---&gt;</p>',
//     actual
//   )
// })

// test('Raw HTML (https://github.github.com/gfm/#example-623)', t => {
//   const actual = gfmc('foo <?php echo $a; ?>')
//   t.is('<p>foo <?php echo $a; ?></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-624)', t => {
//   const actual = gfmc('foo <!ELEMENT br EMPTY>')
//   t.is('<p>foo <!ELEMENT br EMPTY></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-625)', t => {
//   const actual = gfmc('foo <![CDATA[>&<]]>')
//   t.is('<p>foo <![CDATA[>&<]]></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-626)', t => {
//   const actual = gfmc('foo <a href="&ouml;">')
//   t.is('<p>foo <a href="&ouml;"></a></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-627)', t => {
//   const actual = gfmc('foo <a href="\\*">')
//   t.is('<p>foo <a href="\\*"></a></p>', actual)
// })

// test('Raw HTML (https://github.github.com/gfm/#example-628)', t => {
//   const actual = gfmc('<a href=""">')
//   t.is('<p>&lt;a href=&quot;&quot;&quot;&gt;</p>', actual)
// })

// test('Disallowed Raw HTML (extension) (https://github.github.com/gfm/#example-629)', t => {
//   const actual =
//     gfmc(
//       '<strong> <title> <style> <em>\n\n<blockquote>\n  <xmp> is disallowed.  <XMP> is also disallowed.\n</blockquote>'
//     )
//   )
//   t.is(
//     '<p><strong> &lt;title> &lt;style> <em></em></strong></p>\n<blockquote>\n  &lt;xmp> is disallowed.  &lt;XMP> is also disallowed.\n</blockquote>',
//     actual
//   )
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-630)', t => {
//   const actual = gfmc('foo  \nbaz')
//   t.is('<p>foo<br>\nbaz</p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-631)', t => {
//   const actual = gfmc('foo\\nbaz')
//   t.is('<p>foo<br>\nbaz</p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-632)', t => {
//   const actual = gfmc('foo       \nbaz')
//   t.is('<p>foo<br>\nbaz</p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-633)', t => {
//   const actual = gfmc('foo  \n     bar')
//   t.is('<p>foo<br>\nbar</p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-634)', t => {
//   const actual = gfmc('foo\\n     bar')
//   t.is('<p>foo<br>\nbar</p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-635)', t => {
//   const actual = gfmc('*foo  \nbar*')
//   t.is('<p><em>foo<br>\nbar</em></p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-636)', t => {
//   const actual = gfmc('*foo\\nbar*')
//   t.is('<p><em>foo<br>\nbar</em></p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-637)', t => {
//   const actual = gfmc('`code  \nspan`')
//   t.is('<p><code>code span</code></p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-638)', t => {
//   const actual = gfmc('`code\\nspan`')
//   t.is('<p><code>code\\ span</code></p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-639)', t => {
//   const actual = gfmc('<a href="foo  \nbar">')
//   t.is('<p><a href="foo  \nbar"></a></p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-640)', t => {
//   const actual = gfmc('<a href="foo\\nbar">')
//   t.is('<p><a href="foo\\nbar"></a></p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-641)', t => {
//   const actual = gfmc("foo'"))
//   t.is('<p>foo\\</p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-642)', t => {
//   const actual = gfmc('foo  ')
//   t.is('<p>foo</p>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-643)', t => {
//   const actual = gfmc("### foo'"))
//   t.is('<h3>foo\\</h3>', actual)
// })

// test('Hard line breaks (https://github.github.com/gfm/#example-644)', t => {
//   const actual = gfmc('### foo  ')
//   t.is('<h3>foo</h3>', actual)
// })

// test('Soft line breaks (https://github.github.com/gfm/#example-645)', t => {
//   const actual = gfmc('foo\nbaz')
//   t.is('<p>foo\nbaz</p>', actual)
// })

// test('Soft line breaks (https://github.github.com/gfm/#example-646)', t => {
//   const actual = gfmc('foo \n baz')
//   t.is('<p>foo\nbaz</p>', actual)
// })

// test('Textual content (https://github.github.com/gfm/#example-647)', t => {
//   const actual = gfmc("hello $.;'there"))
//   t.is("<p>hello $.;'there</p>", actual)
// })

// test('Textual content (https://github.github.com/gfm/#example-648)', t => {
//   const actual = gfmc('Foo χρῆν')
//   t.is('<p>Foo χρῆν</p>', actual)
// })

// test('Textual content (https://github.github.com/gfm/#example-649)', t => {
//   const actual = gfmc('Multiple     spaces')
//   t.is('<p>Multiple     spaces</p>', actual)
// })
