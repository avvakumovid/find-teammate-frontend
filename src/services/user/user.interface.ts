import { LikeTypes } from '@/types/types'

export interface ILikeResponse {
  message: string
  type: LikeTypes.like
}

export interface IDislikeResponse {
  message: string
  type: LikeTypes.dislike
}