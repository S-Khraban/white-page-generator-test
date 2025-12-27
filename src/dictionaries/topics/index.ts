import { education } from "./education.js";
import { technology } from "./technology.js";
import type { TopicDict, TopicKey } from "./types.js";

const topics: Record<TopicKey, TopicDict> = {
  education,
  technology,
};

export function getTopicDict(topic: string): TopicDict {
  const key = topic as TopicKey;
  return topics[key] ?? topics.education;
}
