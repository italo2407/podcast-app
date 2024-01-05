// import { Draft } from "immer";
// import { Dispatch } from "react";
// import { Action } from "../../../shared/interface/action.interface";

// export type DispatchApp = Dispatch<Action<AppActions, AppState>>;

// export enum AppActions {
//   StartFetching = "START_FETCHING",
//   FinishedFetching = "FINISHED_FETCHING",
//   ErrorFetching = "ERROR_FETCHING",
//   ClearData = "CLEAR_DATA",
// }

// export interface AppState {
//   isFetching: boolean;
//   error: any;
// }

// export const initialState: AppState = {
//   isFetching: false,
//   error: null,
// };

// export const appReducer = (
//   draft: Draft<AppState>,
//   { type, payload }: Action<AppActions, AppState>
// ) => {
//   switch (type) {
//     case AppActions.StartFetching:
//       draft.isFetching = true;
//       draft.error = null;
//       break;
//     case AppActions.FinishedFetching:
//       draft.isFetching = false;
//       break;
//     case AppActions.ErrorFetching:
//       draft.isFetching = false;
//       draft.error = payload;
//       break;
//     case AppActions.ClearData:
//       return initialState;
//     default:
//       throw new Error(`Unknown type: ${type}`);
//   }
// };
