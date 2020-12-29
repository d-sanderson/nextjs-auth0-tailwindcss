import '../styles/index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import Nav from "../components/nav"
function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENTID}
      redirectUri={process.env.REDIRECT_URI}
    >
      <Nav/>
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
