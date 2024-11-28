import { darkIcon } from "../assets/icons";
import Banner from "../assets/images/banner.png";

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
        title: "strong",
        description: "Makes text bold for emphasis, implying importance.",
        code: `<code>&lt;strong&gt;Strong text&lt;/strong&gt;</code>`,
        usage: `<strong>Strong text</strong>`,
      },
      {
        title: "em",
        description: "Used to emphasize text, typically rendered in italics.",
        code: `<code>&lt;em&gt;Emphasized text&lt;/em&gt;</code>`,
        usage: `<em>Emphasized text</em>`,
      },
      {
        title: "i",
        description: "Used to render text in italics.",
        code: `<code>&lt;i&gt;italics text&lt;/i&gt;</code>`,
        usage: `<i>Italics text</i>`,
      },
      {
        title: "small",
        description: "Used to render small text.",
        code: `<code>&lt;small&gt;small text&lt;/small&gt;</code>`,
        usage: `<small>small text</small>`,
      },
      {
        title: "code",
        description: "Used to render inline code.",
        code: `<code>&lt;code&gt;let a = 'a';&lt;/code&gt;</code>`,
        usage: `<code>let a = 'a';</code>`,
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
  <code>&lt;input type="email" placeholder="email@example.com" /&gt;</code>
  <code>&lt;button type="submit"&gt;Submit&lt;/button&gt;</code>
&lt;/form&gt;</code>`,
        usage: `<form><input type="email" placeholder="email@example.com"/><button type="submit">Submit</button></form>`,
      },
      {
        title: "input",
        description: "Used to create an interactive input for form.",
        code: `<code>&lt;input type="email" placeholder="email@example.com" /&gt;</code>`,
        usage: `<input type="email" placeholder="email@example.com"/>`,
      },
      {
        title: "textarea",
        description: "Used to create an interactive textarea for form.",
        code: `<code>&lt;textarea type="text" placeholder="Write something..." rows="5"&gt;&lt;/textarea&gt;</code>`,
        usage: `<textarea type="text" placeholder="Write something..." rows="5"></textarea>`,
      },
      {
        title: "hr",
        description:
          "Creates a horizontal rule or line, often used to separate content sections.",
        code: `<code>&lt;hr /&gt;</code>`,
        usage: `<hr />`,
      },
      {
        title: "pre",
        description: "Represents a self-contained piece of code.",
        code: `<code>&lt;pre&gt;
  <code>&lt;code&gt;let a = 'a';&lt;/code&gt;</code>
  <code>&lt;code&gt;a = 'b';&lt;/code&gt;</code>
&lt;/pre&gt;</code>`,
        usage: `<pre><code>let a = 'a';</code>
<code>a = 'b';</code></pre>`,
      },
      {
        title: "li",
        description: "Creates a list.",
        code: `<code>&lt;ul&gt;</code>
  <code>&lt;li&gt;One&lt;/li&gt;</code>
  <code>&lt;li&gt;Two&lt;/li&gt;</code>
  <code>&lt;li&gt;Three&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code>`,
        usage: `<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>`,
      },
      {
        title: "nav",
        description:
          "Defines the navbar section of a document or section, typically containing navigation menu.",
        code: `<code>&lt;nav&gt;
  <code>&lt;p&gt;pr4j3sh&lt;/p&gt;</code>
  <code>&lt;ul class="btns"&gt;</code>
    <code>&lt;p&gt;github&lt;/p&gt;</code>
    <code>&lt;p&gt;twitter&lt;/p&gt;</code>
  <code>&lt;/ul&gt;</code>
&lt;/nav&gt;</code>`,
        usage: `<nav><p>pr4j3sh</p><ul class="btns"><p>github</p><p>twitter</p></ul></nav>`,
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
      {
        title: "card",
        description: "Defines a card.",
        code: `<code>&lt;article class="body"&gt;
  <code>&lt;img src="../public/banner.png" /&gt;</code>
  <code>&lt;article class="card-body"&gt;</code>
    <code>&lt;h6&gt;Card Title&lt;/h6&gt;</code>
    <code>&lt;p&gt;This is a simple description.&lt;/p&gt;</code>
  <code>&lt;article/&gt;</code>
&lt;/article&gt;</code>`,
        usage: `<article class="card"><img src="${Banner}" /><article class="card-body"><h6>Card Title</h6><p>This is a simple description.</p></article></card>`,
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
        title: "small",
        description: "Creates a small clickable button for user interaction.",
        code: `<code>&lt;button class="small"&gt;Click&lt;/button&gt;</code>`,
        usage: `<button class="small">Click</button>`,
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
      {
        title: "btns",
        description:
          "Creates a gap between a group of buttons arranging them in a row.",
        code: `<code>&lt;article class="btns"&gt;</code>
  <code>&lt;button&gt;Click&lt;/button&gt;</code>
  <code>&lt;button class="secondary"&gt;Click&lt;/button&gt;</code>
<code>&lt;/article&gt;</code>`,
        usage: `<article class="btns"><button>Click</button><button class="secondary">Click</button></article>`,
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
