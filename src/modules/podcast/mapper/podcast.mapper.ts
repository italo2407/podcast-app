import { Podcast } from "../domain/podcast";

export const mapperPodcast = (rawPodcatList: any[]): Podcast[] => {
  return rawPodcatList.map((item) => ({
    id: item["id"]["attributes"]["im:id"],
    name: item["im:name"]["label"],
    author: item["im:artist"]["label"],
    imgUrl: item["im:image"][2]["label"],
    summary: item["summary"]["label"],
  }));
};
