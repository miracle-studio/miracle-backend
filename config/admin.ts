export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  // Enable preview feature for media content including videos
  preview: {
    enabled: true,
    config: {
      // Allow your frontend domain to be embedded in preview
      allowedOrigins: env('CLIENT_URL') || '*',
      // Handler for generating preview URLs
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid).findOne({ documentId });
        // Return null for content types that don't need preview
        return null;
      },
    },
  },
});
