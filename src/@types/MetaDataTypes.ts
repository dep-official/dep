export interface MetaDataAlternatesType {
  canonical: string;
}

export interface MetaDataOpenGraphImageType {
  url: string;
}

export interface MetaDataOpenGraphType {
  title: string;
  description: string;
  siteName: string;
  locale: string;
  type: string;
  url: string;
  images: MetaDataOpenGraphImageType;
}

export interface MetaDataVerificationType {
  google: string;
  other: {
    'naver-site-verification': string;
  };
}

export interface MetaDataTwitterImageType {
  url: string;
}

export interface MetaDataTwitterType {
  title: string;
  description: string;
  images: MetaDataTwitterImageType;
}

export interface MetaDataType {
  metadataBase: URL;
  alternates: MetaDataAlternatesType;
  title: string;
  siteName: string;
  description: string;
  keywords: string;
  url: string;
  googleVerification: string;
  naverVerification: string;
  ogImage: string;
  openGraph: MetaDataOpenGraphType;
  verification: MetaDataVerificationType;
  twitter: MetaDataTwitterType;
}

export interface MetadataPropsType {
  title: string;
  description: string;
  asPath: string;
  ogImage?: string;
}
