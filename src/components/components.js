const items = [
  {
    section: "Typography",
    articles: [
      {
        title: "h1",
        description: "Heading 1",
        code: `<code>&lt;h1&gt;Heading 1&lt;/h1&gt;</code>`,
        usage: `<h1>h1</h1>`,
      },
      {
        title: "h2",
        description: "Heading 2",
        code: `<code>&lt;h2&gt;Heading 2&lt;/h2&gt;</code>`,
        usage: `<h2>h2</h2>`,
      },
    ],
  },
  {
    section: "Layouts",
    articles: [
      {
        title: "section",
        description: "A section",
        code: `<code>&lt;section&gt;Heading 1&lt;/section&gt;</code>`,
        usage: `<section><p>Paragraph one</p><p>Paragraph two</p><p>Paragraph three</p></section>`,
      },
      {
        title: "article",
        description: "An article",
        code: `<code>&lt;article&gt;Heading 2&lt;/article&gt;</code>`,
        usage: `<article><p>article</p></article>`,
      },
    ],
  },
];

const components = document.getElementById("components");

const html = items.map((item) => {
  return ``;
});
