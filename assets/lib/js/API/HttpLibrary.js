class DossierLibrary {
  constructor() {
    this.client_id = "0098a006f7c78d33c9a1";
    this.client_secret = "9182ccf98c535df0608ab67f84f4ef4bc6cc7de8";
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }

  // Get data from the API
  async getData(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
