import { RootState } from '../../store'

export const selectGenre = (state: RootState) => state.genre.genre
