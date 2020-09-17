(function (d) {
    const BASE_SIZE = 50;
    const LOGO_SIZE = 20;
    const LOGO_OFFSET = 5;

    const style = d.createElement('style');
    style.innerHTML = `
        .github-profile-badge-wrapper {
            text-decoration: none;
            display: flex;
            -webkit-tap-highlight-color: transparent;
            padding-bottom: ${LOGO_OFFSET}px;
            padding-right: ${LOGO_OFFSET}px;
        }

        .github-profile-badge-img-wrapper {
            position: relative;
            height: ${BASE_SIZE}px;
        }

        .github-profile-badge-img {
            border-radius: 50%;
            width: ${BASE_SIZE}px;
            height: ${BASE_SIZE}px;
        }

        .github-profile-badge-logo {
            position: absolute;
            bottom: -${LOGO_OFFSET}px;
            right: -${LOGO_OFFSET}px;
            width: ${LOGO_SIZE}px;
            height: ${LOGO_SIZE}px;
        }

        .github-profile-badge-name-wrapper {
            display: flex;
            align-items: center;
            overflow: hidden;
            background: transparent;
            align-self: stretch;
            padding-left: ${BASE_SIZE / 2}px;
            margin-left: -${BASE_SIZE / 2}px;
            border-top-right-radius: ${BASE_SIZE / 2}px;
            border-bottom-right-radius: ${BASE_SIZE / 2}px;
            width: 0;
            max-width: 0;
            transition: all 0.5s ease;
        }

        .github-profile-badge-name {
            font-size: 15px;
            font-family: monospace;
            color: white;
            margin: 0;
            padding: 0;
            margin-left: 5px;
            margin-right: 10px;
        }
    `;
    d.head.appendChild(style);

    /**
     * @param {string} username
     */
    function getWrapper(username) {
        const wrapper = d.createElement('a');
        wrapper.href = `https://github.com/${username}`;
        wrapper.target = '_blank';
        wrapper.className = 'github-profile-badge-wrapper';
        return wrapper;
    }

    /**
     * @param {string} username
     */
    function getProfile(username) {
        const profileImg = d.createElement('img');
        profileImg.src = `https://avatars.githubusercontent.com/${username}`;
        profileImg.alt = `${username} GitHub Profile`;
        profileImg.className = 'github-profile-badge-img';
        return profileImg;
    }

    function getGitHubLogo() {
        const logoImg = d.createElement('img');
        logoImg.src = 'https://github.com/fluidicon.png';
        logoImg.alt = 'GitHub logo';
        logoImg.className = 'github-profile-badge-logo';
        return logoImg;
    }

    /**
     * @param {string} username
     */
    function getImagesDiv(username) {
        const parentDiv = d.createElement('div');
        parentDiv.className = 'github-profile-badge-img-wrapper';
        parentDiv.appendChild(getProfile(username));
        parentDiv.appendChild(getGitHubLogo());
        return parentDiv;
    }

    /**
     * @param {string} username
     */
    function getNameText(username) {
        const nameText = d.createElement('p');
        nameText.className = 'github-profile-badge-name';
        nameText.innerText = '\\' + username;
        return nameText;
    }

    /**
     * @param {HTMLElement} widget
     */
    function fillWidget(widget) {
        const username = widget.getAttribute('data-user');
        const wrapper = getWrapper(username);

        wrapper.appendChild(getImagesDiv(username));

        const nameDiv = d.createElement('div');
        nameDiv.className = 'github-profile-badge-name-wrapper';
        const nameText = getNameText(username);
        nameDiv.appendChild(nameText);
        wrapper.appendChild(nameDiv);
        wrapper.onpointerenter = (ev) => {
            const nameTextStyle = window.getComputedStyle(nameText);
            const newWidth = nameText.offsetWidth +
                parseFloat(nameTextStyle.marginLeft) +
                parseFloat(nameTextStyle.marginRight) +
                'px';
            nameDiv.style.width = newWidth;
            nameDiv.style.maxWidth = newWidth;
        };
        wrapper.onpointerleave = (ev) => {
            nameDiv.style.width = 0;
            nameDiv.style.maxWidth = 0;
        };

        widget.appendChild(wrapper);
    }

    const widgets = d.getElementsByClassName('github-profile-badge');
    for (let i = 0; i < widgets.length; i++) {
        fillWidget(widgets[i]);
    }
})(document);
