const got = require("got");

async function check() {
  try {
    await got.get("https://registry.redhat.io/v2/");
  } catch (error) {
    console.log("got.CacheError", error instanceof got.CacheError);
    console.log("got.ParseError", error instanceof got.ParseError);
    console.log("got.HTTPError", error instanceof got.HTTPError);
    console.log("got.RequestError", error instanceof got.RequestError);
    console.log("got.ReadError", error instanceof got.ReadError);

    if (error instanceof got.RequestError) {
      console.log("error is instanceof RequestError");
      const wwwAuthenticate = error.response.headers["www-authenticate"];
      console.log("header is for wwwAuthenticate", wwwAuthenticate);
    }
    if (error instanceof got.HTTPError) {
      console.log("error is instanceOf HTTPError");
      console.log(
        "header is for wwwAuthenticate",
        error.response?.headers["www-authenticate"]
      );
    }
  }
}
check();
