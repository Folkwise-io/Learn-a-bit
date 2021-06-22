<img src="../Challenges/Challenge01/images/learnabit-logo.png" />

# Overall Guideline - Learn-a-bit

We have come up with some topics you should focus on. Try to refactor your current code or use them on future challenges.

# Semantic

Semantics refers to the purpose or role of a given HTML element. For example, `<p>` is a semantic element that tells us that the text inside it is a paragraph.

When we write our HTML, we should use always use semantic elements that accurately represents the data that we will be using. This prevents us from overusing `<div>` and `<span>` elements while also making our code more maintainable and make it easier for search engines to find keywords to help the page's search rankings.

```html
<header>
  <nav>
    <img />
    <ul>
      <li></li>
    </ul>
  </nav>
  <section>
    <article>
      <h1></h1>
      <p></p>
    </article>
  </section>
</header>
```

Here are some articles about semantic code:

- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/semantics)
- [w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [css-tricks](https://css-tricks.com/why-how-and-when-to-use-semantic-html-and-aria/)

# Mobile First Approach

Mobile-first is when we start by writing our CSS for mobile devices and then use media queries to add in styling for larger screen sizes.

Designing and prototyping your websites for mobile devices first helps you ensure that your users' experience is seamless on any device

```css
.card {
  padding: 1rem 2rem;
}

@media (min-width: 600px) {
  .card {
    display: flex;
    justify-content: space-between;
  }
}
```

Here are some articles about mobile first approach:

- [Taking The Right Approach To Responsive Web Design](https://www.freecodecamp.org/news/taking-the-right-approach-to-responsive-web-design/)
- [Media Queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
- [Guide To CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

## CSS Naming Convention

Keeping your naming conventions consistent and practical will make your code easier to read and to maintain.

```html
<article class="card">
  <h2 class="card__title"></h2>
  <p class="card__text"></p>
</article>
```

```css
.card {
  padding: 1rem;
}

.card__title {
  font-size: 1.2rem;
}

.card__text {
  color: #ffffff;
}
```

Here are some articles about naming convention:

- [CSS Naming Conventions That Will Save You Hours Of Debugging](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)
- [BEM-101](http://getbem.com/naming/)
- [BEM](http://getbem.com/naming/)

## CSS Declaration Order

Similar to naming convention, having a consistent CSS declaration order will make your code more organize and easier to navigate through.

```css
.card {
  position: absolute;
  display: block;
  font-size: 1rem;
  background-color: #090909;
}
```

Articles about declaration order:

- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [CSS Order](https://gist.github.com/awkale/ad46e2ade70e833fa178)
- [Order Of CSS Properties Poll](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

## File Structure

Having an organized file structure is important for creating scalable and maintainable projects.

```bash
root
|-/css
  |-style.css
|-/js
  |-script.js
|-/images
  |-background.png
|-index.html
```

Articles about file structure:

- [File Structure](https://htmlandcssguidebook.com/html/file-structure.html)
- [Basic Website Folder File Structure](https://openlab.bmcc.cuny.edu/mmp-240-fall-19-stein/2019/09/05/basic-website-folder-file-structure/)

# Other Topics

## Hiding Elements

`display: none` removes the element while `opacity: 0` only makes the element invisible, but it's still interactable.

Article about Display and Opacity:

- [Display vs Opacity](https://magnusbenoni.com/difference-between-display-visibility-opacity/)

---

## Targeting Elements

When you add CSS directly on tags, your markup can’t change. Your style is tightly coupled to your DOM, and any change increases the risk of breaking things.

Bad Practice

```css
article {
  display: flex;
}
```

Good Practice

```css
.card {
  display: flex;
}
```

Article about Targeting Elements:

- [Stop Targeting Tags In CSS](https://frontstuff.io/you-need-to-stop-targeting-tags-in-css)

---

## Importing Fonts

Importing fonts into html instead of in css will prevent loading, performance, and flickering issues.

Bad Practice

```css
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Viga&display=swap');
```

Good Practice

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Viga&display=swap"
  rel="stylesheet"
/>
```

Article about link vs import:

- [Link vs Import](https://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import/12380004#12380004)

# Concluding Remarks

If you have any questions on any of the mentioned topics, feel free to reach out in the `#learn-a-bit` channel!
