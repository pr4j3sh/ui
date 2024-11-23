import { darkIcon } from "../assets/icons";

const items = [
  {
    section: "Typography",
    articles: [
      {
        title: "h1",
        description: "Defines the largest and most important heading.",
        code: `<code>&lt;h1&gt;Heading 1&lt;/h1&gt;</code>`,
        usage: `<h1>h1</h1>`,
      },
      {
        title: "h2",
        description: "Defines the second-largest heading.",
        code: `<code>&lt;h2&gt;Heading 2&lt;/h2&gt;</code>`,
        usage: `<h2>h2</h2>`,
      },
      {
        title: "h3",
        description: "Defines the third-largest heading.",
        code: `<code>&lt;h3&gt;Heading 3&lt;/h3&gt;</code>`,
        usage: `<h3>h3</h3>`,
      },
      {
        title: "h4",
        description: "Defines the fourth-largest heading.",
        code: `<code>&lt;h4&gt;Heading 4&lt;/h4&gt;</code>`,
        usage: `<h4>h4</h4>`,
      },
      {
        title: "h5",
        description: "Defines the fifth-largest heading.",
        code: `<code>&lt;h5&gt;Heading 5&lt;/h5&gt;</code>`,
        usage: `<h5>h5</h5>`,
      },
      {
        title: "h6",
        description: "Defines the smallest and least important heading.",
        code: `<code>&lt;h6&gt;Heading 6&lt;/h6&gt;</code>`,
        usage: `<h6>h6</h6>`,
      },
      {
        title: "b",
        description:
          "Makes text bold for emphasis without implying importance.",
        code: `<code>&lt;b&gt;Bold text&lt;/b&gt;</code>`,
        usage: `<b>Bold text</b>`,
      },
      {
        title: "em",
        description: "Used to emphasize text, typically rendered in italics.",
        code: `<code>&lt;em&gt;Emphasized text&lt;/em&gt;</code>`,
        usage: `<em>Emphasized text</em>`,
      },
      {
        title: "a",
        description:
          "Used to create hyperlinks to navigate to other pages or resources.",
        code: `<code>&lt;a class="link" href="/"&gt;Link&lt;/a&gt;</code>`,
        usage: `<a class="link" href="/ui/components/">Link</a>`,
      },
      {
        title: "blockquote",
        description:
          "Used to define a section of content that is quoted from another source.",
        code: `<code>&lt;blockquote&gt;This is a quote.&lt;/blockquote&gt;</code>`,
        usage: `<blockquote>This is a quote.</blockquote>`,
      },
    ],
  },
  {
    section: "Layouts",
    articles: [
      {
        title: "section",
        description:
          "Defines a section of content, typically with a heading, within a document.",
        code: `<code>&lt;section&gt;
  <code>&lt;p&gt;Paragraph one&lt;/p&gt;</code>
  <code>&lt;p&gt;Paragraph two&lt;/p&gt;</code>
  <code>&lt;p&gt;Paragraph three&lt;/p&gt;</code>
&lt;/section&gt;</code>`,
        usage: `<section><p>Paragraph one</p><p>Paragraph two</p><p>Paragraph three</p></section>`,
      },
      {
        title: "article",
        description:
          "Represents a self-contained piece of content, such as a blog post or news article.",
        code: `<code>&lt;article&gt;
  <code>&lt;b&gt;Title&lt;/b&gt;</code>
  <code>&lt;p&gt;This is a sample paragraph.&lt;/p&gt;</code>
&lt;/article&gt;</code>`,
        usage: `<article><b>Title</b><p>This is sample paragraph.</p></article>`,
      },
      {
        title: "form",
        description:
          "Used to create an interactive form for collecting user input.",
        code: `<code>&lt;form&gt;
  <code>&lt;input type="text" placeholder="email@example.com" /&gt;</code>
  <code>&lt;button type="submit"&gt;Submit&lt;/button&gt;</code>
&lt;/form&gt;</code>`,
        usage: `<form><input type="text" placeholder="email@example.com"/><button type="submit">Submit</button></form>`,
      },
      {
        title: "hr",
        description:
          "Creates a horizontal rule or line, often used to separate content sections.",
        code: `<code>&lt;hr /&gt;</code>`,
        usage: `<hr />`,
      },
      {
        title: "footer",
        description:
          "Defines the footer section of a document or section, typically containing copyright or contact information.",
        code: `<code>&lt;footer&gt;
  <code>&lt;p&gt;&copy; pr4j3sh&lt;/p&gt;</code>
  <code>&lt;p&gt;twitter/github&lt;/p&gt;</code>
&lt;/footer&gt;</code>`,
        usage: `<footer><p>&copy; pr4j3sh</p><p>twitter/github</p></footer>`,
      },
    ],
  },
  {
    section: "Buttons",
    articles: [
      {
        title: "button",
        description: "Creates a clickable button for user interaction.",
        code: `<code>&lt;button&gt;Click&lt;/button&gt;</code>`,
        usage: `<button>Click</button>`,
      },
      {
        title: "secondary",
        description:
          "Creates a clickable button of type secondary for user interaction.",
        code: `<code>&lt;button class="secondary"&gt;Click&lt;/button&gt;</code>`,
        usage: `<button class="secondary">Click</button>`,
      },
      {
        title: "danger",
        description:
          "Creates a clickable button of type danger for user interaction.",
        code: `<code>&lt;button class="danger"&gt;Click&lt;/button&gt;</code>`,
        usage: `<button class="danger">Click</button>`,
      },
      {
        title: "icon",
        description:
          "Creates a clickable button of type icon for user interaction.",
        code: `<code>&lt;button class="icon"&gt;Click&lt;/button&gt;</code>`,
        usage: `<button class="icon">${darkIcon}</button>`,
      },
    ],
  },
  {
    section: "Media",
    articles: [
      {
        title: "",
        description: "",
        code: ``,
        usage: ``,
      },
    ],
  },
];

const components = document.getElementById("components");

const html = items
  .map((item) => {
    const articles = item.articles
      .map((article) => {
        return `<article>
            <h6>${article.title}</h6>
            <p>${article.description}</p>
            <b>Usage</b>
            <pre>${article.code}</pre>
            ${article.usage}
          </article>
          <hr/>`;
      })
      .join("");
    return `<section>
          <h3>${item.section}</h3>
          <hr/>
          ${articles}
        </section>`;
  })
  .join("");

components.innerHTML = html;
