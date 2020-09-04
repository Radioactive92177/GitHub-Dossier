class DossierLibrary {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  // Get data from the API
  async getData(user) {
    // Getting user data
    const userResponse = await fetch(`https://api.github.com/users/${user}`, {
      headers: {
        authorization: "token 300bceeb7c2fabdf0567d1e0e0f6068526655b55",
      },
    });
    const userData = await userResponse.json();

    // Getting user repo data
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      {
        headers: {
          authorization: "token 300bceeb7c2fabdf0567d1e0e0f6068526655b55",
        },
      }
    );
    const repoData = await repoResponse.json();

    return {
      userData,
      repoData,
    };
  }
}
