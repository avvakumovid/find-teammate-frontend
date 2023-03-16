import { EnumLocalStorage, EnumSecureStore, ITokens } from './auth.interface'

export const getAccessToken = async () => {
  const accessToken = await localStorage.getItem(EnumSecureStore.ACCESS_TOKEN)
  return accessToken || null
}

export const saveTokensStorage = async (token: string) => {
  await localStorage.setItem(EnumSecureStore.ACCESS_TOKEN, token)
}

export const deleteTokensStorage = async () => {
  await localStorage.removeItem(EnumSecureStore.ACCESS_TOKEN)
}

export const getUserFromStorage = async () => {
  try {
    return await JSON.parse((localStorage.getItem(EnumLocalStorage.USER)) || '{}')
  } catch (e) {
    return null
  }
}

export const saveToStorage = async (data: string) => {
  await saveTokensStorage(data)
  try {
    await localStorage.setItem(EnumLocalStorage.USER, JSON.stringify(data))
  } catch (e) { }
}