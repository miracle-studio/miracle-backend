import type { Schema, Struct } from '@strapi/strapi';

export interface ComplexAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_complex_aboutuses';
  info: {
    displayName: 'aboutUs';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Component<'shared.title', false>;
    user: Schema.Attribute.Component<'simple.user-card', true> &
      Schema.Attribute.Required;
  };
}

export interface ComplexContactUs extends Struct.ComponentSchema {
  collectionName: 'components_complex_contactuses';
  info: {
    displayName: 'contactUs';
  };
  attributes: {
    data: Schema.Attribute.Component<'simple.banner', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.Component<'shared.title', false> &
      Schema.Attribute.Required;
  };
}

export interface ComplexHero extends Struct.ComponentSchema {
  collectionName: 'components_complex_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images', true>;
    subTitle: Schema.Attribute.Component<'shared.title', false>;
    title: Schema.Attribute.Component<'shared.title', false> &
      Schema.Attribute.Required;
  };
}

export interface ComplexOurWorks extends Struct.ComponentSchema {
  collectionName: 'components_complex_our_works';
  info: {
    displayName: 'ourWorks';
  };
  attributes: {
    products: Schema.Attribute.Component<'simple.product-card', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Component<'shared.title', false>;
  };
}

export interface ComplexRequestForm extends Struct.ComponentSchema {
  collectionName: 'components_complex_request_forms';
  info: {
    displayName: 'requestForm';
  };
  attributes: {
    form: Schema.Attribute.Component<'simple.form', false>;
    title: Schema.Attribute.Component<'shared.title', false>;
  };
}

export interface SharedBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_badges';
  info: {
    displayName: 'badge';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    icon: Schema.Attribute.Component<'shared.icon', false>;
    label: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['sm', 'md', 'xl']>;
    type: Schema.Attribute.Enumeration<['button', 'submit']> &
      Schema.Attribute.DefaultTo<'button'>;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'ghost', 'outline']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    asset: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.Enumeration<['top', 'right', 'bottom', 'left']>;
  };
}

export interface SharedInput extends Struct.ComponentSchema {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    helperText: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['text', 'email', 'password', 'number', 'tel']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    internal_link: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_blank', '_self']> &
      Schema.Attribute.DefaultTo<'_self'>;
    type: Schema.Attribute.Enumeration<['internal', 'external']>;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    coverXl: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    coverXs: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<
      ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']
    > &
      Schema.Attribute.DefaultTo<'first'>;
    text: Schema.Attribute.String;
  };
}

export interface SimpleBanner extends Struct.ComponentSchema {
  collectionName: 'components_simple_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SimpleForm extends Struct.ComponentSchema {
  collectionName: 'components_simple_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button', false>;
    inputs: Schema.Attribute.Component<'shared.input', true>;
  };
}

export interface SimpleGallery extends Struct.ComponentSchema {
  collectionName: 'components_simple_galleries';
  info: {
    displayName: 'gallery';
    icon: 'landscape';
  };
  attributes: {
    asset: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface SimpleProductCard extends Struct.ComponentSchema {
  collectionName: 'components_simple_product_cards';
  info: {
    displayName: 'productCard';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'shared.link', false>;
    name: Schema.Attribute.String;
  };
}

export interface SimpleProductDetails extends Struct.ComponentSchema {
  collectionName: 'components_simple_product_details';
  info: {
    displayName: 'productDetails';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.icon', false> &
      Schema.Attribute.Required;
    techData: Schema.Attribute.Component<'shared.badge', true>;
    title: Schema.Attribute.Component<'shared.title', false> &
      Schema.Attribute.Required;
  };
}

export interface SimpleProductGoals extends Struct.ComponentSchema {
  collectionName: 'components_simple_product_goals';
  info: {
    displayName: 'productGoals';
  };
  attributes: {
    assets: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Component<'shared.title', false> &
      Schema.Attribute.Required;
  };
}

export interface SimpleUserCard extends Struct.ComponentSchema {
  collectionName: 'components_simple_user_cards';
  info: {
    displayName: 'userCard';
  };
  attributes: {
    badge: Schema.Attribute.Component<'shared.badge', false>;
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'shared.link', false>;
    role: Schema.Attribute.Enumeration<['CEO', 'CTO', 'worker', 'investor']>;
    title: Schema.Attribute.Component<'shared.title', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'complex.about-us': ComplexAboutUs;
      'complex.contact-us': ComplexContactUs;
      'complex.hero': ComplexHero;
      'complex.our-works': ComplexOurWorks;
      'complex.request-form': ComplexRequestForm;
      'shared.badge': SharedBadge;
      'shared.button': SharedButton;
      'shared.icon': SharedIcon;
      'shared.input': SharedInput;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'shared.title': SharedTitle;
      'simple.banner': SimpleBanner;
      'simple.form': SimpleForm;
      'simple.gallery': SimpleGallery;
      'simple.product-card': SimpleProductCard;
      'simple.product-details': SimpleProductDetails;
      'simple.product-goals': SimpleProductGoals;
      'simple.user-card': SimpleUserCard;
    }
  }
}
