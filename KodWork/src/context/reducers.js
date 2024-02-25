import { Alert } from 'react-native';

export default function (state, action) {
    switch (action.type) {
        case 'FAV_LİST':
            const { item } = action.payload;
            const findItem = state?.favoritedList?.find((fav) => fav?.id === item.id)
            if (!findItem) {
                const favList = [...state.favoritedList, item];
                Alert.alert('Added to Favorites')
                return { ...state, favoritedList: favList };
            } else {
                const favItems = state.favoritedList.filter((fav) => fav.id !== item.id)
                Alert.alert('Remove to Favorites')
                return {
                    ...state, favoritedList: favItems
                }
            }
        case 'REMOVE_LİST':
            const { remove } = action.payload
            const removeCard = state.favoritedList.filter((del) => del.id !== remove.id)
            Alert.alert('Removed from Favorites')
            return {
                ...state, favoritedList: removeCard
            }

        default:
            return state;
    }
}
