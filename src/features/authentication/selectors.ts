import { RootState } from '../../store'

export const selectUser = (state: RootState) => state.user.user

export const selectUserAuthStatus = (state: RootState) => state.user.isUserAuthed
