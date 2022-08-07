import { GetFeedInterface } from './getFeed.interface';

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedInterface | null
}
