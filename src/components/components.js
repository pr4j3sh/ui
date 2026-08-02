import { darkIcon } from "../assets/icons";
import Banner from "../assets/images/banner.png";
import Avatar from "../assets/images/favicon.png";

const items = [
  {
    section: "Typography",
    articles: [
      {
        title: "h1",
        description: "Defines the largest and most important heading.",
        code: `<code>&lt;h1&gt;h1&lt;/h1&gt;</code>`,
        usage: `<h1>h1</h1>`,
      },
      {
        title: "h2",
        description: "Defines the second-largest heading.",
        code: `<code>&lt;h2&gt;h2&lt;/h2&gt;</code>`,
        usage: `<h2>h2</h2>`,
      },
      {
        title: "h3",
        description: "Defines the third-largest heading.",
        code: `<code>&lt;h3&gt;h3&lt;/h3&gt;</code>`,
        usage: `<h3>h3</h3>`,
      },
      {
        title: "h4",
        description: "Defines the fourth-largest heading.",
        code: `<code>&lt;h4&gt;h4&lt;/h4&gt;</code>`,
        usage: `<h4>h4</h4>`,
      },
      {
        title: "h5",
        description: "Defines the fifth-largest heading.",
        code: `<code>&lt;h5&gt;h5&lt;/h5&gt;</code>`,
        usage: `<h5>h5</h5>`,
      },
      {
        title: "h6",
        description: "Defines the smallest and least important heading.",
        code: `<code>&lt;h6&gt;h6&lt;/h6&gt;</code>`,
        usage: `<h6>h6</h6>`,
      },
      {
        title: "b",
        description: "Makes text bold for emphasis without implying importance.",
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
        code: `<code>&lt;i&gt;Italics text&lt;/i&gt;</code>`,
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
        description: "Used to create hyperlinks to navigate to other pages or resources.",
        code: `<code>&lt;a class="link" href="/ui/components/"&gt;Link&lt;/a&gt;</code>`,
        usage: `<a class="link" href="/ui/components/">Link</a>`,
      },
      {
        title: "blockquote",
        description: "Used to define a section of content that is quoted from another source.",
        code: `<code>&lt;blockquote&gt;This is a quote.&lt;/blockquote&gt;</code>`,
        usage: `<blockquote>This is a quote.</blockquote>`,
      },
      {
        title: "tag",
        description: "Used to represent a tag",
        code: `<code>&lt;span class="tag"&gt;Tag&lt;/span&gt;
&lt;span class="tag success"&gt;Success&lt;/span&gt;
&lt;span class="tag error"&gt;Error&lt;/span&gt;
&lt;span class="tag warning"&gt;Warning&lt;/span&gt;</code>`,
        usage: `<span class="tag">Tag</span> <span class="tag success">Success</span> <span class="tag error">Error</span> <span class="tag warning">Warning</span>`,
      },
    ],
  },
  {
    section: "Layouts",
    articles: [
      {
        title: "section",
        description: "Defines a section of content, typically with a heading, within a document.",
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
        usage: `<article><b>Title</b><p>This is a sample paragraph.</p></article>`,
      },
      {
        title: "form",
        description: "Used to create an interactive form for collecting user input.",
        code: `<code>&lt;form&gt;
  <code>&lt;input type="email" placeholder="email@example.com" /&gt;</code>
  <code>&lt;button type="submit"&gt;Submit&lt;/button&gt;</code>
&lt;/form&gt;</code>`,
        usage: `<form><input type="email" placeholder="email@example.com" /><button type="submit">Submit</button></form>`,
      },
      {
        title: "input",
        description: "Used to create an interactive input for form.",
        code: `<code>&lt;input type="email" placeholder="email@example.com" /&gt;</code>`,
        usage: `<input type="email" placeholder="email@example.com" />`,
      },
      {
        title: "textarea",
        description: "Used to create an interactive textarea for form.",
        code: `<code>&lt;textarea type="text" placeholder="Write something..." rows="5"&gt;&lt;/textarea&gt;</code>`,
        usage: `<textarea type="text" placeholder="Write something..." rows="5"></textarea>`,
      },
      {
        title: "hr",
        description: "Creates a horizontal rule or line, often used to separate content sections.",
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
        code: `<code>&lt;article class="card"&gt;
  <code>&lt;img class="card-img" src="../public/banner.png" /&gt;</code>
  <code>&lt;article class="card-body"&gt;</code>
    <code>&lt;h6&gt;Card Title&lt;/h6&gt;</code>
    <code>&lt;p&gt;This is a simple description.&lt;/p&gt;</code>
  <code>&lt;/article&gt;</code>
&lt;/article&gt;</code>`,
        usage: `<article class="card"><img class="card-img" src="${Banner}" /><article class="card-body"><h6>Card Title</h6><p>This is a simple description.</p></article></article>`,
      },
      {
        title: "avatar",
        description: "Displays an user avatar image.",
        code: `<code>&lt;img src="../public/favicon.png" class="avatar" /&gt;</code>`,
        usage: `<img src="${Avatar}" class="avatar" />`,
      },
    ],
  },
  {
    section: "Forms",
    articles: [
      {
        title: "label + input",
        description: "Text inputs with an associated label.",
        code: `<code>&lt;label for="name"&gt;Name&lt;/label&gt;
&lt;input type="text" id="name" placeholder="John Doe" /&gt;</code>`,
        usage: `<label for="name">Name</label><input type="text" id="name" placeholder="John Doe" />`,
      },
      {
        title: "select",
        description: "A dropdown menu for choosing from options.",
        code: `<code>&lt;select&gt;
  &lt;option&gt;Option 1&lt;/option&gt;
  &lt;option&gt;Option 2&lt;/option&gt;
  &lt;option&gt;Option 3&lt;/option&gt;
&lt;/select&gt;</code>`,
        usage: `<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>`,
      },
      {
        title: "checkbox",
        description: "Lets the user select one or more options.",
        code: `<code>&lt;input type="checkbox" /&gt;</code>`,
        usage: `<input type="checkbox" />`,
      },
      {
        title: "radio",
        description: "Lets the user select a single option from a group.",
        code: `<code>&lt;input type="radio" name="group" /&gt;</code>`,
        usage: `<input type="radio" name="group" />`,
      },
      {
        title: "switch",
        description: "A toggle switch for on/off states.",
        code: `<code>&lt;input type="checkbox" class="switch" /&gt;</code>`,
        usage: `<input type="checkbox" class="switch" />`,
      },
      {
        title: "fieldset",
        description: "Groups related form controls with a legend.",
        code: `<code>&lt;fieldset&gt;
  &lt;legend&gt;Contact&lt;/legend&gt;
  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input type="email" id="email" placeholder="email@example.com" /&gt;
&lt;/fieldset&gt;</code>`,
        usage: `<fieldset><legend>Contact</legend><label for="email">Email</label><input type="email" id="email" placeholder="email@example.com" /></fieldset>`,
      },
      {
        title: "validation",
        description: "Error, success and warning states indicated by helper text below the field.",
        code: `<code>&lt;section&gt;
  &lt;input type="email" aria-invalid="true" placeholder="Email" /&gt;
  &lt;p class="error-text"&gt;Enter a valid email&lt;/p&gt;
  &lt;input type="text" placeholder="Username" /&gt;
  &lt;p class="success-text"&gt;Username is available&lt;/p&gt;
  &lt;input type="text" placeholder="Password" /&gt;
  &lt;p class="warning-text"&gt;Password must be 8+ characters&lt;/p&gt;
&lt;/section&gt;</code>`,
        usage: `<section><input type="email" aria-invalid="true" placeholder="Email" /><p class="error-text">Enter a valid email</p><input type="text" placeholder="Username" /><p class="success-text">Username is available</p><input type="text" placeholder="Password" /><p class="warning-text">Password must be 8+ characters</p></section>`,
      },
      {
        title: "disabled",
        description: "Disables a control so it cannot be interacted with.",
        code: `<code>&lt;input type="text" placeholder="Disabled" disabled /&gt;</code>`,
        usage: `<input type="text" placeholder="Disabled" disabled />`,
      },
      {
        title: "sizes",
        description: "Inputs and textareas come in small and large sizes.",
        code: `<code>&lt;section&gt;
  &lt;input type="text" class="input-sm" placeholder="Small" /&gt;
  &lt;input type="text" placeholder="Medium" /&gt;
  &lt;input type="text" class="input-lg" placeholder="Large" /&gt;
&lt;/section&gt;</code>`,
        usage: `<section><input type="text" class="input-sm" placeholder="Small" /><input type="text" placeholder="Medium" /><input type="text" class="input-lg" placeholder="Large" /></section>`,
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
        description: "Creates a clickable button of type secondary for user interaction.",
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
        title: "large",
        description: "Creates a large clickable button for user interaction.",
        code: `<code>&lt;button class="large"&gt;Click&lt;/button&gt;</code>`,
        usage: `<button class="large">Click</button>`,
      },
      {
        title: "disabled",
        description: "Disables a button so it cannot be interacted with.",
        code: `<code>&lt;button disabled&gt;Click&lt;/button&gt;</code>`,
        usage: `<button disabled>Click</button>`,
      },
      {
        title: "primary",
        description: "Applies the primary button style to any element.",
        code: `<code>&lt;a class="primary" href="#"&gt;Click&lt;/a&gt;</code>`,
        usage: `<a class="primary" href="#">Click</a>`,
      },
      {
        title: "danger",
        description: "Creates a clickable button of type danger for user interaction.",
        code: `<code>&lt;button class="danger"&gt;Click&lt;/button&gt;</code>`,
        usage: `<button class="danger">Click</button>`,
      },
      {
        title: "icon",
        description: "Creates a clickable button of type icon for user interaction.",
        code: `<code>&lt;button class="icon"&gt;Click&lt;/button&gt;</code>`,
        usage: `<button class="icon">${darkIcon}</button>`,
      },
      {
        title: "btns",
        description: "Creates a gap between a group of buttons arranging them in a row.",
        code: `<code>&lt;article class="btns"&gt;</code>
  <code>&lt;button&gt;Click&lt;/button&gt;</code>
  <code>&lt;button class="secondary"&gt;Click&lt;/button&gt;</code>
<code>&lt;/article&gt;</code>`,
        usage: `<article class="btns"><button>Click</button><button class="secondary">Click</button></article>`,
      },
    ],
  },
  {
    section: "Feedback",
    articles: [
      {
        title: "alert",
        description: "Displays a status message for the user.",
        code: `<code>&lt;article class="alert info"&gt;
  &lt;b&gt;Heads up&lt;/b&gt;
  &lt;p&gt;This is an informational alert.&lt;/p&gt;
&lt;/article&gt;</code>`,
        usage: `<article class="alert info"><b>Heads up</b><p>This is an informational alert.</p></article>`,
      },
      {
        title: "alert variants",
        description: "Success, error and warning variants.",
        code: `<code>&lt;section&gt;
  &lt;article class="alert success"&gt;&lt;p&gt;Operation completed successfully.&lt;/p&gt;&lt;/article&gt;
  &lt;article class="alert error"&gt;&lt;p&gt;Something went wrong.&lt;/p&gt;&lt;/article&gt;
  &lt;article class="alert warning"&gt;&lt;p&gt;Please review your settings.&lt;/p&gt;&lt;/article&gt;
&lt;/section&gt;</code>`,
        usage: `<section><article class="alert success"><p>Operation completed successfully.</p></article><article class="alert error"><p>Something went wrong.</p></article><article class="alert warning"><p>Please review your settings.</p></article></section>`,
      },
      {
        title: "spinner",
        description: "Indicates loading or processing.",
        code: `<code>&lt;div class="spinner" aria-label="Loading"&gt;&lt;/div&gt;</code>`,
        usage: `<div class="spinner" aria-label="Loading"></div>`,
      },
      {
        title: "skeleton",
        description: "A placeholder while content loads.",
        code: `<code>&lt;section&gt;
  &lt;div class="skeleton h-4 w-full"&gt;&lt;/div&gt;
  &lt;div class="skeleton h-4 w-2/3"&gt;&lt;/div&gt;
  &lt;div class="skeleton h-24 w-full"&gt;&lt;/div&gt;
&lt;/section&gt;</code>`,
        usage: `<section><div class="skeleton h-4 w-full"></div><div class="skeleton h-4 w-2/3"></div><div class="skeleton h-24 w-full"></div></section>`,
      },
      {
        title: "progress",
        description: "Shows the completion progress of a task.",
        code: `<code>&lt;progress value="70" max="100"&gt;70%&lt;/progress&gt;</code>`,
        usage: `<progress value="70" max="100">70%</progress>`,
      },
      {
        title: "empty",
        description: "A placeholder for empty states.",
        code: `<code>&lt;div class="empty"&gt;
  &lt;p&gt;No results found&lt;/p&gt;
&lt;/div&gt;</code>`,
        usage: `<div class="empty"><p>No results found</p></div>`,
      },
    ],
  },
  {
    section: "Misc",
    articles: [
      {
        title: "kbd",
        description: "Represents keyboard input.",
        code: `<code>&lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;K&lt;/kbd&gt;</code>`,
        usage: `<kbd>Ctrl</kbd> + <kbd>K</kbd>`,
      },
      {
        title: "mark",
        description: "Highlights a portion of text.",
        code: `<code>&lt;p&gt;Highlight &lt;mark&gt;this text&lt;/mark&gt; now&lt;/p&gt;</code>`,
        usage: `<p>Highlight <mark>this text</mark> now</p>`,
      },
      {
        title: "details",
        description: "A disclosure widget that expands on demand.",
        code: `<code>&lt;details&gt;
  &lt;summary&gt;Click to expand&lt;/summary&gt;
  &lt;div&gt;
    &lt;p&gt;Hidden content goes here.&lt;/p&gt;
  &lt;/div&gt;
&lt;/details&gt;</code>`,
        usage: `<details><summary>Click to expand</summary><div><p>Hidden content goes here.</p></div></details>`,
      },
      {
        title: "figure",
        description: "Represents media with a caption.",
        code: `<code>&lt;figure&gt;
  &lt;img src="favicon.png" class="avatar" /&gt;
  &lt;figcaption&gt;The Frames mascot&lt;/figcaption&gt;
&lt;/figure&gt;</code>`,
        usage: `<figure><img src="${Avatar}" class="avatar" /><figcaption>The Frames mascot</figcaption></figure>`,
      },
      {
        title: "tooltip",
        description: "Shows extra information on hover or focus.",
        code: `<code>&lt;span data-tooltip="Tooltip text"&gt;Hover me&lt;/span&gt;</code>`,
        usage: `<span data-tooltip="Tooltip text">Hover me</span>`,
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
