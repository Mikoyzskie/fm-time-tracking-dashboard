interface Timeframe {
  current: number;
  previous: number;
}

interface Timeframes {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
}

export interface WorkData {
  title: string;
  timeframes: Timeframes;
}
