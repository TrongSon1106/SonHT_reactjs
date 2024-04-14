import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firebaseDB } from "../firebase";
import { IUser } from "../../types/user";

const userCollectionRef = collection(firebaseDB, "users");

export enum EFetchStatus {
  PENDING,
  SUCCESS,
  FAILED,
}

type UserState = {
  user: IUser | null;
  status: EFetchStatus | null;
};

const initialState: UserState = {
  user: null,
  status: null,
};

export const fetchUser = createAsyncThunk<IUser | null, string>(
  "user/fetchUser",
  async (uid, { dispatch }) => {
    const q = query(userCollectionRef, where("id", "==", uid));
    const data = await getDocs(q);
    if (data.docs && data.docs.length) {
      const userInfo = data.docs[0].data() as IUser;
      return {
        ...userInfo,
        // id: data.docs[0].id,
        // birthday: (userInfo.birthday as any).toDate().toISOString(),
      } as IUser;
    }
    return null;
  }
);

export const removeUser = createAsyncThunk("user/logout", async () => {
  // await AsyncStorage.clear();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = EFetchStatus.PENDING;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = EFetchStatus.SUCCESS;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log("Rejected", action);
        state.status = EFetchStatus.FAILED;
      })
      .addCase(removeUser.pending, (state) => {
        state.status = EFetchStatus.PENDING;
      })
      .addCase(removeUser.fulfilled, (state) => {
        state.user = null;
        state.status = EFetchStatus.SUCCESS;
      });
  },
});

export default userSlice.reducer;
