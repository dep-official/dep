import { META } from '@/@constants/MetaData';
import { MetaDataType, MetadataPropsType } from '@/@types/MetaDataTypes'

const GetMetaData = (metadataProps?: MetadataPropsType): MetaDataType => {
    const { title, description, asPath, ogImage } = metadataProps || {};

      const TITLE = title ? `${title}` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? asPath : '';
  const OG_IMAGE = ogImage || META.ogImage;

  return {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    siteName: TITLE,
    description: DESCRIPTION,
    keywords: META.keywords,
    url: PAGE_URL,
    googleVerification: META.googleVerification,
    naverVerification: META.naverVerification,
    ogImage: OG_IMAGE,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    verification: {
      google: META.googleVerification,
      other: {
        'naver-site-verification': META.naverVerification,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

}

export default GetMetaData
