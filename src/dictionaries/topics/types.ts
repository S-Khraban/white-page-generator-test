export type TopicKey = "education" | "technology";

export type TopicDict = {
  key: TopicKey;
  defaultSiteName?: string;
  home: {
    headlines: string[];
    paragraphs: string[];
  };
  about: {
    paragraphs: string[];
  };
  contact: {
    paragraphs: string[];
  };
};
