export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          upgradeInsecureRequests: null,
          'connect-src': [
            "'self'",
            'https:',
            'http:',
            'api.telegram.org',
            'api.liqpay.ua'
          ],
          'frame-src': [
            "'self'",
            'editor.unlayer.com',
          ],
          'script-src': [
            "'self'",
            "'unsafe-inline'",
            'editor.unlayer.com',
            'maps.googleapis.com',
          
          ],
          'script-src-elem': [
            "'self'",
            "'unsafe-inline'",
            'editor.unlayer.com',
            'maps.googleapis.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
            'maps.gstatic.com',
            'maps.googleapis.com',
            'delicate-canvas-2a33cc3cdc.media.strapiapp.com',
            '*.strapiapp.com'
          ],
          'img-src': [
            "'self'",
            'blob:',
            'data:',
            'strapi.io',
            'cdn.jsdelivr.net',
            's3.amazonaws.com',
            'res.cloudinary.com',
            'market-assets.strapi.io',
            'khmdb0.google.com',
            'khmdb0.googleapis.com',
            'khmdb1.google.com',
            'khmdb1.googleapis.com',
            'khm.google.com',
            'khm.googleapis.com',
            'khm0.google.com',
            'khm0.googleapis.com',
            'khm1.google.com',
            'khm1.googleapis.com',
            'khms0.google.com',
            'khms0.googleapis.com',
            'khms1.google.com',
            'khms1.googleapis.com',
            'khms2.google.com',
            'khms2.googleapis.com',
            'khms3.google.com',
            'khms3.googleapis.com',
            'streetviewpixels-pa.googleapis.com',
            'delicate-canvas-2a33cc3cdc.media.strapiapp.com'
          ],
          'form-action': [
            "'self'",
          ],
        },
      },
    },
  },
];
