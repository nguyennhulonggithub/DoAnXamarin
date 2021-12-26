import * as Google from "expo-google-app-auth";
//Ham return login google -> return user info
export default async function LoginGoogle() {
  const config = {
    androidClientId:
      "188758052255-deh0ak999om9rn2sglds0f9shnisbs1i.apps.googleusercontent.com",
    scope: ["profile", "email"],
  };
  const user_result = await Google.logInAsync(config)
    .then((result) => {
      const { type, user } = result;
      if (type == "success") {
        return user;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return user_result;
}
