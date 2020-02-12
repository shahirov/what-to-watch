import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export interface ReviewRequestPayload {
  id: number
  review: {
    rating: number
    comment: string
  }
}

type User = {
  id: number
  name: string
}

export interface IReview {
  id: number
  user: User
  rating: number
  comment: string
  date: string
}

export interface ReviewsState {
  reviews: IReview[]
  isLoading: boolean
  error: AxiosError | null
}

const initialState: ReviewsState = {
  reviews: [],
  isLoading: false,
  error: null
}

const loadingFailed = (state: ReviewsState, { payload }: PayloadAction<AxiosError>) => {
  state.isLoading = false
  state.error = payload
}

const reviews = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    getReviewsRequest(state, action: PayloadAction<number>) {
      state.isLoading = true
      state.error = null
    },
    addReviewRequest(state, action: PayloadAction<ReviewRequestPayload>) {
      state.isLoading = false
      state.error = null
    },
    getReviewsSuccess(state, { payload }: PayloadAction<IReview[]>) {
      state.isLoading = false
      state.reviews = payload
      state.error = null
    },
    addReviewSuccess(state) {
      state.isLoading = false
      state.error = null
    },
    getReviewsFailure: loadingFailed,
    addReviewFailure: loadingFailed
  }
})

export const {
  getReviewsRequest,
  addReviewRequest,
  getReviewsSuccess,
  addReviewSuccess,
  getReviewsFailure,
  addReviewFailure
} = reviews.actions

export const reviewsReducer = reviews.reducer
