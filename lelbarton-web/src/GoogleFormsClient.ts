import useScript from "react-script-hook";

const FORM_ID = '1w9fOFF0mFcBWlrCWAqwWbrtrRGJG_5sl-vDwDZXmj2k'
const GOOGLE_FORM_URL = `https://forms.googleapis.com/v1/forms/${FORM_ID}/responses`

export class GoogleFormsClient {

  public async getAllResponses() {
    // https://forms.googleapis.com/v1/forms/{formId}

    // const [loading, error] = useScript({ src: 'https://js.stripe.com/v3/' });
    const response = await fetch(GOOGLE_FORM_URL, {
      headers: {
        "X-goog-api-key": "TODO"
      }
    });
    // const formData = await response.formData();
    console.log(await response.body)
  }

//   'use strict';
//
//   const path = require('path');
//   const google = require('@googleapis/forms');
//   const {authenticate} = require('@google-cloud/local-auth');
//
// const formID = '<YOUR_FORM_ID>';
//
// async function runSample(query) {
//   const auth = await authenticate({
//     keyfilePath: path.join(__dirname, 'credentials.json'),
//     scopes: 'https://www.googleapis.com/auth/forms.body.readonly',
//   });
//   const forms = google.forms({
//     version: 'v1',
//     auth: auth,
//   });
//   const res = await forms.forms.get({formId: formID});
//   console.log(res.data);
//   return res.data;
// }
//
// if (module === require.main) {
//   runSample().catch(console.error);
// }
// module.exports = runSample;

}
