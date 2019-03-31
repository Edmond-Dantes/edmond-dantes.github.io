import CustomElement from '../../lib/customElement.js';

class MainNav extends CustomElement {
  _style() {
     return `
      .main-nav {
        padding: 2em;
        position: relative;
        font-size: 16px;
      }

      img {
        border-radius: 50%;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        margin-top: 0.5em;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover {
        color: var(--fg-primary);
      }

      @media only screen and (max-width: 1000px) {
        .main-nav {
          padding: 1em;
          line-height: 130px;
          height: 130px;
        }

        img {
          max-width: 130px;
        }

        ul {
          position: absolute;
          right: 1em;
          top:0px;
          display: inline-block;
          margin-left: auto;
          margin-right: 0px;
        }
        li {
          display: inline-block;
          margin-top: 0em;
          margin-left: 0.5em;
          left
        }
      }

      @media only screen and (max-width: 500px) {
        .main-nav {
          line-height: 1em;
        }

        li {
          display: list-item;
          margin-top: 0.5em;
        }
      }
    `;
  }

  _render() {
    const links = [
      {
        href: "/index.html",
        text: "Home",
      },
      {
        href: "/p/projects/index.html",
        text: "Projects",
      },
      {
        href: "/p/blog/index.html",
        text: "Blog posts",
      },
      {
        href: "/p/code/index.html",
        text: "Sample Code",
      },
      {
        href: "/cv.pdf",
        text: "CV",
      },
    ];
    return `
      <div class="main-nav">
        <img src="../../images/profile.jpg" width="100%" height="auto" />
        <ul>
        ${links.map(link => `
          <li>
            <a href="${link.href}">${link.text}</a>
          </li>
        `).join("")}
        </ul>
      </div>
    `;
  }
}

customElements.define('main-nav', MainNav);
