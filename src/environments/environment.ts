// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  email: "admin@gmail.com",
  password: "admin123",
  uid: "superadmin",
  dashboard: { view: true, edit: true, add: true, delete: true },
  country: { view: true, edit: true, add: true, delete: true },
  players: { view: true, edit: true, add: true, delete: true },
  scouting: { view: true, edit: true, add: true, delete: true },
  agencies: { view: true, edit: true, add: true, delete: true },
  sponsors: { view: true, edit: true, add: true, delete: true },
  documents: { view: true, edit: true, add: true, delete: true },
  setting: { view: true, edit: true, add: true, delete: true },
  firebase: {
    apiKey: "AIzaSyDQ9UPrsgqGRm7wZ0pIRGsxoOinmfBF2sE",
    authDomain: "ness-and-network.firebaseapp.com",
    projectId: "ness-and-network",
    storageBucket: "ness-and-network.appspot.com",
    messagingSenderId: "972434190591",
    appId: "1:972434190591:web:6a0804641eedab9dcadcca",
    measurementId: "G-EJE1YCQVEK"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
