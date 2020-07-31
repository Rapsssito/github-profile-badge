# GitHub Profile Badge / Widget

A widget to display your GitHub profile embedded in any website. This widget retrieves data from your GitHub profile and shows it up directly on your website. It is written in pure JavaScript and does not rely on external fonts or dependencies.

**Check out the [live example](https://rapsssito.github.io/github-profile-badge/example.html)**.

## Usage

You can include the `widget.js` script and it will create the widget for you:

```html
<div class="github-profile-badge" data-user="rapsssito"></div>
<script src="https://cdn.jsdelivr.net/gh/Rapsssito/github-profile-badge@latest/src/widget.min.js"></script>
```

### Attributes

| Attribute       | Type       | Description                    |
| --------------- | ---------- | ------------------------------ |
| **`data-user`** | `<string>` | **Required**. GitHub username. |

## Customization

The widget is customizable via pure CSS (you might need to use `!important` on some attributes depending on your setup). Here is the list of classes used inside the widget:

-   `github-profile-badge`: `<div>` main container.
-   `github-profile-badge-wrapper`: `<a>` links to the GitHub account and acts as a global container.
    -   `github-profile-badge-img-wrapper`: `<div>` wraps all the images (account and GitHub logo).
        -   `github-profile-badge-img`: `<img>` displays the user profile picture.
        -   `github-profile-badge-logo`: `<img>` displays the GitHub logo.
    -   `github-profile-badge-name-wrapper`: `<div>` wraps and shows/hides the username.
        -   `github-profile-badge-name`: `<p>` displays the username.

## License

The library is released under the MIT license. For more information see [`LICENSE`](/LICENSE).
