import firebase from '~/plugins/firebase-init.js'

export default (context) => {
  const {store, app, redirect} = context

  firebase.auth().addAuthTokenListener(function (idToken) {

    var hadSessionCookie = document.cookie.indexOf('__session=') !== -1;
    document.cookie = '__session=' + idToken + ';max-age=' + (idToken ? 3600 : 0);

    if ((!hadSessionCookie && idToken) || (hadSessionCookie && !idToken)) {
      console.log('WINDOW RELOAD ABOUT TO HAPPEN');
      window.location.reload(true);
    } else {

      var style = document.getElementById('__bodyHider');
      if (style) {
        document.head.removeChild(style);
      }
    }
  });
}
