let acessToken;

const Spotify = {
  getAccessToken() {
    if (this.getAccessToken()) {
      return acessToken;
    } else {
      var client_id = "4f73dce4831d4b3f996194acc7c2350b"; // Your client id
      var redirect_uri = "http://localhost:3000"; // Your redirect uri

      var state = generateRandomString(16);

      localStorage.setItem(stateKey, state);
      var scope = "user-read-private user-read-email";

      var url = "https://accounts.spotify.com/authorize";
      url += "?response_type=token";
      url += "&client_id=" + encodeURIComponent(client_id);
      url += "&scope=" + encodeURIComponent(scope);
      url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
      url += "&state=" + encodeURIComponent(state);

      window.location = url;
    }
  },
};
export default Spotify;
