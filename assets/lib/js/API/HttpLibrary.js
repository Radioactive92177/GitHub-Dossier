class DossierLibrary {
  constructor() {
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }

  // Get data from the API
  async getData(user) {
    // Getting user data
    const userResponse = await fetch(`https://api.github.com/users/${user}`, {
      headers: {
        Authorization: "token a4169bf97d75a8bdc1188d65355932b55bc9e101",
      },
    });
    const userData = await userResponse.json();

    // Getting user repo data
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      {
        headers: {
          Authorization: "token a4169bf97d75a8bdc1188d65355932b55bc9e101",
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
