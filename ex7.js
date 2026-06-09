// creating custom web component class
class GithubUser extends HTMLElement {
  // function runs automatically when component loads
  async connectedCallback() {
    // getting username from html attribute
    const username = this.getAttribute("username");

    // fetch user data from github api
    const response = await fetch(`https://api.github.com/users/${username}`);

    // converting response into json
    const user = await response.json();

    // creating html inside component
    this.innerHTML = `
          <div style="
            border:1px solid #ccc;
            padding:15px;
            margin:10px;
            width:250px;
            border-radius:10px;
            font-family:Arial;
          ">
            <img 
              src="${user.avatar_url}" 
              width="80"
              style="border-radius:50%;"
            />

            <h3>${user.login}</h3>

            <p>Followers: ${user.followers}</p>

            <a href="${user.html_url}" target="_blank">
              Visit Profile
            </a>
          </div>
        `;
  }
}

// registering custom html tag
customElements.define("github-user", GithubUser);
