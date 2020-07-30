# GitHub Profile Badge / Widget

A widget to display your GitHub profile embedded in any website. This widget retrieves data from your GitHub profile and shows it up directly on your website. It is written in pure JavaScript and does not rely on external fonts or dependencies.

**Check out the [live example](https://rapsssito.github.io/github-profile-badge/)**.

## Usage

You can include the `widget.js` script and it will create the widget for you:

```html
<div class="github-profile-badge" data-user="rapsssito"></div>
<script src="https://cdn.jsdelivr.net/gh/Rapsssito/github-profile-badge@latest/src/widget.min.js"></script>
```

### Attributes

| Attribute       | Type       | Description                                      |
| --------------- | ---------- | ------------------------------------------------ |
| **`data-user`** | `<string>` | **Required**. GitHub username.                   |
