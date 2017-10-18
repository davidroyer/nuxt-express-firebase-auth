import firebase from '~/plugins/firebase-init.js'



export default (context) => {
  const {store, app, redirect} = context


  firebase.auth().addAuthTokenListener(function (idToken) {

    var hadSessionCookie = document.cookie.indexOf('__session=') !== -1;
    document.cookie = '__session=' + idToken + ';max-age=' + (idToken ? 3600 : 0);
    // If there is a change in the auth state compared to what's in the session cookie we'll reload after setting the cookie.


    // if (!hadSessionCookie && idToken) {
    //   console.log('logged in');
    //   redirect('/success')
    // }

    // if (hadSessionCookie && !idToken) {
    //   console.log('logged out');
    //   redirect('/logout')
    // }


    if ((!hadSessionCookie && idToken) || (hadSessionCookie && !idToken)) {
      console.log('WINDOW RELOAD ABOUT TO HAPPEN');
      window.location.reload(true);
    } else {
      // In the rare case where there was a user but it could not be signed in (for instance the account has been deleted).
      // We un-hide the page body.
      var style = document.getElementById('__bodyHider');
      if (style) {
        document.head.removeChild(style);
      }
    }
  });
}
