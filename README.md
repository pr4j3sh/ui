# UI

This is the official UI of Frames. Pre-defined `CSS` styles for `HTML` tags, with a few custom classes and light/dark themes.

## Usage

### Use the styles in your website

Add the following `link` tag in the `<head>` of your `HTML` file:

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://pr4j3sh.github.io/ui/style.css"
/>
```

### Import the styles in your CSS file

Add this `@import` statement to your CSS file:

```css
@import url("https://pr4j3sh.github.io/ui/style.css");
```

### Download the styles using `curl`

Run the following command to download the stylesheet:

```bash
curl -o style.css https://pr4j3sh.github.io/ui/style.css
```

### Download the styles using `wget`

Run the following command:

```bash
wget -O style.css https://pr4j3sh.github.io/ui/style.css
```

Then, include `style.css` in the `<head>` of your `HTML` file:

```html
<link rel="stylesheet" type="text/css" href="./style.css" />
```

### Import the file in a React app

Add the following import in your React file:

```javascript
import "./style.css";
```

## Templates

Try one of Frames' [templates](https://github.com/pr4j3sh/frames).

## Read More

- [Tailwind CSS Documentation](https://tailwindcss.com/docs/utility-first)
- [@pr4j3sh/frames GitHub Repository](https://github.com/pr4j3sh/frames)
