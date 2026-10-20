export type ReelId = "reel1" | "reel2" | "reel3";

export type ReelConfig = {
  id: ReelId;
  url: string;
  reelId: string;
};

export type ReelItem = {
  id: ReelId;
  url: string;
  reelId: string;
  tag: string;
  title: string;
  description: string;
};

export type ReelsProps = {
  className?: string;
};
